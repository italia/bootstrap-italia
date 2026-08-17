#!/usr/bin/env python3
"""
audit_custom_properties.py — v3

Confronta, in un albero di file .scss, le custom property dichiarate
(--#{$prefix}nome: valore;) con quelle effettivamente lette con
var(--#{$prefix}nome...), incrociando su TUTTI i file scansionati.
Controlla anche mixin (@mixin/@include), function (@function) e
variabili Sass ($xxx: ... !default;) mai usate.

Novita' rispetto alla v1/v2:
  - comment-stripping consapevole delle stringhe (un // dentro
    url('http://...') non mangia piu' il resto della riga)
  - gestisce anche i commenti a blocco /* ... */
  - filtra nomi-spazzatura (match senza nemmeno una lettera)
  - IMPORTANTE: se un mixin o una function risultano mai chiamati da
    nessuna parte (dead code), tutto cio' che sta nel LORO corpo non
    conta come "uso reale" di property/variabili — altrimenti una
    property/variabile referenziata solo dentro codice morto
    risulterebbe erroneamente "viva". Un solo livello di esclusione,
    non ricorsivo/fixed-point (vedi limiti in fondo al file).
  - rileva anche @function mai chiamate, non solo @mixin mai inclusi

Uso:
    python3 audit_custom_properties.py <cartella1> [cartella2 ...]

Esempio:
    python3 ./scripts/audit_custom_properties.py ../src/scss/
"""

import re
import sys
import difflib
from pathlib import Path

PREFIX_VAR_NAME = "prefix"

REF_PATTERN = r"(#\{\$\w+\}[\w-]+|[\w-]+)"
DECL_RE = re.compile(r"--" + REF_PATTERN + r"\s*:")
USE_RE = re.compile(r"var\(\s*--" + REF_PATTERN)
INTERP_RE = re.compile(r"#\{\$(\w+)\}([\w-]+)")

MIXIN_DEF_RE = re.compile(r"@mixin\s+([\w-]+)")
MIXIN_USE_RE = re.compile(r"@include\s+(?:[\w-]+\.)?([\w-]+)")
FUNC_DEF_RE = re.compile(r"@function\s+([\w-]+)")
CALL_RE = re.compile(r"\b([\w-]+)\s*\(")

VAR_DECL_RE = re.compile(r"\$([\w-]+)\s*:[^;\n]*!default\b")
VAR_USE_RE = re.compile(r"\$([\w-]+)(?!\s*:)")
VAR_WRAPS_SASSVAR_RE = re.compile(r"var\(\s*\$([\w-]+)")

HAS_LETTER_RE = re.compile(r"[a-zA-Z]")
BAREWORD_RE = re.compile(r"[\w-]+")


def strip_comments(text: str) -> str:
    """Rimuove commenti // e /* */ rispettando le stringhe tra apici,
    cosi' un // dentro un url('http://...') non mangia il resto della riga."""
    out = []
    in_string = None
    i, n = 0, len(text)
    while i < n:
        c = text[i]
        if in_string:
            out.append(c)
            if c == "\\" and i + 1 < n:
                out.append(text[i + 1])
                i += 2
                continue
            if c == in_string:
                in_string = None
            i += 1
            continue
        if c in ("'", '"'):
            in_string = c
            out.append(c)
            i += 1
            continue
        # url(...) senza apici: 'http://' dentro contiene '//' ma non e' un
        # commento. Se e' tra apici lo protegge gia' il blocco sopra; qui
        # gestiamo il caso url(...) SENZA apici, copiando alla lettera fino
        # alla ')' che chiude, senza interpretare '//' come commento.
        if text[i : i + 4].lower() == "url(" and (
            i == 0 or not (text[i - 1].isalnum() or text[i - 1] in "_-")
        ):
            j = i + 4
            if j < n and text[j] not in ("'", '"'):
                out.append(text[i:j])
                i = j
                while i < n and text[i] != ")":
                    out.append(text[i])
                    i += 1
                continue
        if c == "/" and i + 1 < n and text[i + 1] == "/":
            while i < n and text[i] != "\n":
                i += 1
            continue
        if c == "/" and i + 1 < n and text[i + 1] == "*":
            i += 2
            while i + 1 < n and not (text[i] == "*" and text[i + 1] == "/"):
                i += 1
            i += 2
            continue
        out.append(c)
        i += 1
    return "".join(out)


def find_block_end(text: str, open_brace_pos: int) -> int:
    """Data la posizione di una '{', trova la '}' che la chiude gestendo
    la nidificazione. Se non la trova, ritorna len(text)."""
    depth = 0
    i = open_brace_pos
    n = len(text)
    while i < n:
        c = text[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return n


def find_block_spans(text: str, def_re):
    """Per ogni match di def_re (@mixin o @function), trova lo span del
    corpo delimitato da graffe. Ritorna lista di (nome, sig_span, body_end)."""
    spans = []
    for m in def_re.finditer(text):
        name = m.group(1)
        brace_pos = text.find("{", m.end())
        if brace_pos == -1:
            continue
        end = find_block_end(text, brace_pos)
        spans.append((name, m.span(), end))
    return spans


def classify(raw: str):
    m = INTERP_RE.match(raw)
    if m:
        return ("interpolated", m.group(1), m.group(2))
    return ("raw", None, raw)


def has_letter(name: str) -> bool:
    return bool(HAS_LETTER_RE.search(name))


def scan_file_pass1(path: Path):
    """Prima passata: estrae tutto senza filtrare codice morto (serve a
    determinare COSA e' morto, prima di poterlo escludere)."""
    raw = path.read_text(encoding="utf-8", errors="replace")
    text = strip_comments(raw)

    mixin_spans = find_block_spans(text, MIXIN_DEF_RE)
    func_spans = find_block_spans(text, FUNC_DEF_RE)

    def_sig_spans = [s for _, s, _ in mixin_spans] + [s for _, s, _ in func_spans]

    def in_def_sig(pos):
        return any(s <= pos < e for s, e in def_sig_spans)

    mixins_used = set(MIXIN_USE_RE.findall(text))

    calls = set()
    for m in CALL_RE.finditer(text):
        if in_def_sig(m.start()):
            continue
        calls.add(m.group(1))

    # Bareword: cattura anche le function passate per nome "nudo" (senza
    # parentesi) a meccanismi come meta.get-function()/meta.call(), es.
    # map-loop($map, rgba-css-var, '$key'). Piu' permissivo di CALL_RE.
    barewords = set()
    for m in BAREWORD_RE.finditer(text):
        if in_def_sig(m.start()):
            continue
        barewords.add(m.group(0))

    # Raw (non filtrato) uso delle variabili Sass, per distinguere in
    # sezione 7 "mai referenziata da nessuna parte" da "referenziata solo
    # dentro codice gia' morto".
    raw_vars_used = {
        name for m in VAR_USE_RE.finditer(text)
        if has_letter(name := m.group(1))
    }

    return text, mixin_spans, func_spans, mixins_used, calls, barewords, raw_vars_used


def scan_file_pass2(text: str, dead_spans):
    """Seconda passata: estrae property/variabili escludendo tutto cio'
    che sta dentro un mixin o una function gia' confermati morti."""

    def excluded(pos):
        for start, end in dead_spans:
            if start <= pos < end:
                return True
        return False

    declared, used, suspicious = set(), set(), []
    for m in DECL_RE.finditer(text):
        if excluded(m.start()):
            continue
        kind, varname, prop = classify(m.group(1))
        if not has_letter(prop):
            continue
        if kind == "interpolated" and varname == PREFIX_VAR_NAME:
            declared.add(prop)
        elif kind == "interpolated":
            suspicious.append(("declaration", f"${varname}", prop))
        else:
            suspicious.append(("declaration", "(nessuna interpolazione)", prop))

    for m in USE_RE.finditer(text):
        if excluded(m.start()):
            continue
        kind, varname, prop = classify(m.group(1))
        if not has_letter(prop):
            continue
        if kind == "interpolated" and varname == PREFIX_VAR_NAME:
            used.add(prop)
        elif kind == "interpolated":
            suspicious.append(("usage", f"${varname}", prop))
        else:
            suspicious.append(("usage", "(nessuna interpolazione)", prop))

    vars_declared = set()
    for m in VAR_DECL_RE.finditer(text):
        if excluded(m.start()):
            continue
        name = m.group(1)
        if has_letter(name):
            vars_declared.add(name)

    vars_used = set()
    for m in VAR_USE_RE.finditer(text):
        if excluded(m.start()):
            continue
        name = m.group(1)
        if has_letter(name):
            vars_used.add(name)

    sassvar_in_var = [
        m.group(1) for m in VAR_WRAPS_SASSVAR_RE.finditer(text)
        if not excluded(m.start())
    ]

    return declared, used, suspicious, vars_declared, vars_used, sassvar_in_var


def main(paths):
    files = []
    for p in paths:
        root = Path(p)
        if root.is_file() and root.suffix == ".scss":
            files.append(root)
        elif root.is_dir():
            files.extend(sorted(root.rglob("*.scss")))
        else:
            print(f"Attenzione: {p} non esiste, salto.", file=sys.stderr)

    if not files:
        print("Nessun file .scss trovato.", file=sys.stderr)
        sys.exit(1)

    # ---- Pass 1: capire cosa e' morto (mixin, function) ----
    file_data = {}
    global_mixins_defined = {}
    global_mixins_used = set()
    global_funcs_defined = {}
    global_barewords = set()
    global_raw_vars_used = set()

    for f in files:
        text, mspans, fspans, muse, calls, barewords, raw_vused = scan_file_pass1(f)
        file_data[f] = (text, mspans, fspans)
        for name, _, _ in mspans:
            global_mixins_defined.setdefault(name, f)
        global_mixins_used |= muse
        for name, _, _ in fspans:
            global_funcs_defined.setdefault(name, f)
        global_barewords |= barewords
        global_raw_vars_used |= raw_vused

    dead_mixins = set(global_mixins_defined) - global_mixins_used
    # Le function si considerano usate anche se il nome compare "nudo"
    # (senza parentesi) altrove nel codice vivo: copre l'invocazione
    # indiretta tramite meta.get-function()/meta.call(), es.
    # map-loop($map, nome-funzione, ...).
    dead_funcs = set(global_funcs_defined) - global_barewords

    # ---- Pass 2: estrarre property/variabili, escludendo il corpo di
    #      mixin/function morti (un solo livello, non ricorsivo) ----
    per_file = {}
    global_declared = set()
    global_used = set()
    all_suspicious = []
    global_vars_declared = {}
    global_vars_used = set()
    all_sassvar_in_var = []

    for f in files:
        text, mspans, fspans = file_data[f]
        dead_spans = []
        for name, sig_span, body_end in mspans:
            if name in dead_mixins:
                dead_spans.append((sig_span[0], body_end))
        for name, sig_span, body_end in fspans:
            if name in dead_funcs:
                dead_spans.append((sig_span[0], body_end))

        declared, used, suspicious, vdecl, vuse, sassvar_in_var = scan_file_pass2(text, dead_spans)
        per_file[f] = (declared, used)
        global_declared |= declared
        global_used |= used
        for kind, varname, prop in suspicious:
            all_suspicious.append((f, kind, varname, prop))
        for name in vdecl:
            global_vars_declared.setdefault(name, f)
        global_vars_used |= vuse
        for name in sassvar_in_var:
            all_sassvar_in_var.append((f, name))

    def section(title):
        print("\n" + "=" * 78)
        print(title)
        print("=" * 78)

    section("1) DICHIARATE MA MAI LETTE IN NESSUN FILE SCANSIONATO (dead)")
    any_dead = False
    for f, (declared, used) in per_file.items():
        dead = sorted(declared - global_used)
        if dead:
            any_dead = True
            print(f"\n{f}")
            for d in dead:
                print(f"  - {d}")
    if not any_dead:
        print("(nessuna)")

    section("2) VAR() CHE PUNTANO A NOMI MAI DICHIARATI IN NESSUN FILE (orphan)")
    any_orphan = False
    for f, (declared, used) in per_file.items():
        orphan = sorted(used - global_declared)
        if orphan:
            any_orphan = True
            print(f"\n{f}")
            for o in orphan:
                print(f"  - {o}")
    if not any_orphan:
        print("(nessuno)")

    section(
        "3) RIFERIMENTI SOSPETTI (prefix hardcoded, mancante, o variabile "
        "d'interpolazione diversa da $prefix - possibile typo)"
    )
    if all_suspicious:
        for f, kind, varname, prop in all_suspicious:
            print(f"  {f}")
            print(f"      {kind}: {varname} su '{prop}'")
    else:
        print("(nessuno)")

    section(
        "4) POSSIBILI REFUSI (nome dichiarato-e-mai-usata molto simile a un "
        "nome usato-e-mai-dichiarato, stesso file - controllare a mano)"
    )
    any_suggestion = False
    SIMILARITY_THRESHOLD = 0.7
    for f, (declared, used) in per_file.items():
        dead = sorted(declared - global_used)
        orphan = sorted(used - global_declared)
        if not dead or not orphan:
            continue
        for o in orphan:
            matches = difflib.get_close_matches(o, dead, n=1, cutoff=SIMILARITY_THRESHOLD)
            if matches:
                any_suggestion = True
                print(f"\n{f}")
                print(f"  usata '{o}'  <->  dichiarata-mai-usata '{matches[0]}' ?")
    if not any_suggestion:
        print("(nessun suggerimento)")

    section("5) MIXIN DEFINITI MA MAI INCLUSI (@include) IN NESSUN FILE")
    if dead_mixins:
        for name in sorted(dead_mixins):
            print(f"  {name}  (definito in {global_mixins_defined[name]})")
    else:
        print("(nessuno)")

    section("6) FUNCTION DEFINITE MA MAI CHIAMATE IN NESSUN FILE")
    if dead_funcs:
        for name in sorted(dead_funcs):
            print(f"  {name}  (definita in {global_funcs_defined[name]})")
    else:
        print("(nessuna)")

    section(
        "7a) VARIABILI SASS ($xxx) MORTE, MA REFERENZIATE SOLO DENTRO\n"
        "    CODICE GIA' MORTO (mixin/function di sezioni 5/6) -\n"
        "    probabilmente si puliscono insieme rimuovendo quel codice"
    )
    dead_vars_all = sorted(set(global_vars_declared) - global_vars_used)
    dead_vars_via_dead_code = [n for n in dead_vars_all if n in global_raw_vars_used]
    dead_vars_never_referenced = [n for n in dead_vars_all if n not in global_raw_vars_used]
    if dead_vars_via_dead_code:
        for name in dead_vars_via_dead_code:
            print(f"  ${name}  (dichiarata in {global_vars_declared[name]})")
    else:
        print("(nessuna)")

    section(
        "7b) VARIABILI SASS ($xxx) MAI REFERENZIATE DA NESSUNA PARTE\n"
        "    (nemmeno dentro codice morto) - da verificare singolarmente"
    )
    if dead_vars_never_referenced:
        for name in dead_vars_never_referenced:
            print(f"  ${name}  (dichiarata in {global_vars_declared[name]})")
    else:
        print("(nessuna)")

    section(
        "8) var($NOME) INVECE DI var(--NOME) - CSS non valido, var()\n"
        "   vuole una custom property, non una variabile Sass"
    )
    if all_sassvar_in_var:
        for f, name in all_sassvar_in_var:
            print(f"  {f}")
            print(f"      var(${name}) - probabilmente andava var(--#{{$prefix}}...) o rimosso il var()")
    else:
        print("(nessuno)")

    section("RIEPILOGO")
    print(f"File scansionati: {len(files)}")
    print(f"Property dichiarate (uniche, corrette): {len(global_declared)}")
    print(f"Property lette (uniche, corrette): {len(global_used)}")
    print(f"Righe sospette (categoria 3): {len(all_suspicious)}")
    print(f"Mixin mai inclusi: {len(dead_mixins)}")
    print(f"Function mai chiamate (nemmeno indirettamente): {len(dead_funcs)}")
    print(f"Variabili Sass morte (via codice morto): {len(dead_vars_via_dead_code)}")
    print(f"Variabili Sass morte (mai referenziate): {len(dead_vars_never_referenced)}")
    print(f"var($...) invece di var(--...): {len(all_sassvar_in_var)}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 audit_custom_properties.py <cartella1> [cartella2 ...]")
        sys.exit(1)
    main(sys.argv[1:])