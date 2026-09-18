#!/usr/bin/env python3
"""
audit_custom_properties.py — v6

Scans an .scss tree and cross-references declared custom properties
(--#{$prefix}name: value;) against ones actually read via
var(--#{$prefix}name...), across every scanned file. Also flags unused
@mixin/@function definitions and unused Sass variables ($x: ... !default;).

Changelog
---------
v3: comment-stripping is string-aware (a `//` inside url('http://...')
    no longer eats the rest of the line); handles block comments;
    filters junk matches; excludes the body of dead @mixin/@function
    from what counts as "real" usage (one level deep, not recursive);
    also detects unused @function, not just unincluded @mixin.

v4: optional JS-folder scan (--js-dirs) for custom properties read with
    a hardcoded prefix (e.g. getComputedStyle(...).getPropertyValue
    ('--bsi-xxx')), since JS has no $prefix interpolation. A property
    read only from JS is no longer flagged dead in section 1. New
    section 10 lists every hardcoded-prefix JS occurrence found,
    regardless of dead/live status on the SCSS side.

v5: internal, never released — number skipped to match the numbering
    already in use in AUDIT_FINDINGS.md.

v6: three confirmed false positives/negatives fixed, plus two workflow
    features — all from real findings during audit #1888 (see
    AUDIT_FINDINGS.md §8 "Limiti noti degli strumenti"):
  - Three known false positives are now recognized instead of silently
    blending in with real hits: (a) a property declared as a bare
    @include argument (e.g. `@include rfs($val, --#{$prefix}name)`),
    invisible to the direct-declaration regex; (b) a property generated
    by a Sass-map @each loop (e.g. root.scss's `--bsi-black`), never
    written literally; (c) a property read only from JS (already
    handled since v4, now also surfaced explicitly). Each is still
    counted as declared (so section 2 doesn't wrongly call it orphan),
    but the exclusion is now traceable in dedicated CSV categories
    (1x/2x/2y) instead of disappearing without a trace. A rescue is
    only reported once — a redundant second direct declaration site
    elsewhere doesn't add noise (requires a full first pass over every
    file before deciding, see "Pass 2a/2b" in main()).
  - New category 1b: selector-nesting classification. A property whose
    *only* declaration sits inside a conditional selector (dark theme,
    :hover/:focus/:active, .disabled, @media/media-breakpoint) reads as
    "declared" today (the name appears somewhere in the file) but never
    has a base/unconditional default — a real bug the old declared/used
    check can't see, since it only looks at whether a name appears
    anywhere, not the context it appears in.
  - New --entry flag: flags scanned files that only match a commented-
    out @forward/@use in the build's entry point (e.g.
    bootstrap-italia.scss) — i.e. backlog files not reachable from the
    real build. Nothing is dropped from the report; matches are marked
    in the CSV notes and counted in the summary.
  - Console output is now summary-only: every category's row count,
    derived by tallying the same rows written to CSV (single source of
    truth). Per-row detail (file, name, note) lives in the CSV only —
    pass --csv to see it. This keeps a large report readable in a
    terminal without losing anything: nothing that used to print is
    gone, it has simply moved to the CSV.

Usage:
    python3 ./scripts/audit-custom-properties.py <folder1> [folder2 ...]
        [--js-dirs <jsFolder1> [<jsFolder2> ...]]
        [--hardcoded-prefix bsi-]
        [--entry bootstrap-italia.scss]
        [--csv report.csv]

Example:
    python3 ./scripts/audit-custom-properties.py ./src/scss/ ./docs/assets/src/scss --entry ./src/scss/bootstrap-italia.scss --js-dirs ./src/js/ --csv audit-report.csv
"""

import csv
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
VAR_DECL_BROAD_RE = re.compile(r"\$([\w-]+)\s*:")
VAR_USE_RE = re.compile(r"\$([\w-]+)(?!\s*:)")
VAR_WRAPS_SASSVAR_RE = re.compile(r"(?<![\w-])var\(\s*\$([\w-]+)")

# Purely declarative files (no @mixin/@function inside): for these we can
# widen Sass-variable detection to ones without !default too, without
# risking false noise from mixin parameters.
BROAD_VAR_FILES = {"_config.scss", "_variables.scss"}

HAS_LETTER_RE = re.compile(r"[a-zA-Z]")
BAREWORD_RE = re.compile(r"[\w-]+")

# Prefix hardcoded literally in JS (no $prefix interpolation is possible on
# the JS side). Configurable via --hardcoded-prefix, defaults to 'bsi-' to
# match the default $prefix in base/_config.scss.
DEFAULT_HARDCODED_PREFIX = "bsi-"

# --- v6: false positive (a) — property declared as a bare @include
# argument, e.g. "@include rfs($popover-font-size, --#{$prefix}popover-font-size)".
INCLUDE_CALL_RE = re.compile(r"@include\s+(?:[\w-]+\.)?[\w-]+\s*\(")
MIXIN_ARG_PROP_RE = re.compile(
    r"(?P<pre>[(,])\s*--(?P<ref>" + REF_PATTERN + r")\s*(?=[,)])"
)

# --- v6: false positive (b) — property generated by a Sass-map @each loop,
# e.g. "@each $color, $value in $theme-colors { --#{$prefix}#{$color}: ...; }"
EACH_LOOP_RE = re.compile(
    r"@each\s+\$(\w+)(?:\s*,\s*\$(\w+))?\s+in\s+\$([\w-]+)"
)
# Matches "--#{$prefix}#{$loopvar}" optionally followed by a literal suffix
# (e.g. "-hover"), as a dynamic key generated by the loop.
DYNAMIC_DECL_TEMPLATE = r"--#\{{\${prefix}\}}#\{{\${loopvar}\}}([\w-]*)\s*:"

# --- v6: category 1b — known "conditional" selector markers (dark theme,
# states, breakpoints). Heuristic by construction: a signal to verify on
# screen, not a confirmed bug — same spirit as check-devkit-overrides.py.
CONDITIONAL_MARKERS_RE = re.compile(
    r"\.theme-dark|(?<![\w-])\.dark\b|\.bg-dark|\.navbar-dark|"
    r":hover|:focus(-visible)?|:active|(?<![\w-])\.active\b|"
    r"(?<![\w-])\.disabled\b|:disabled|@media|media-breakpoint|-dark\b",
    re.IGNORECASE,
)


def strip_comments(text: str) -> str:
    """Removes // and /* */ comments while respecting quoted strings, so a
    // inside url('http://...') no longer eats the rest of the line."""
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
        # url(...) without quotes: 'http://' inside contains '//' but is not
        # a comment. The block above already protects the quoted case; here
        # we handle url(...) WITHOUT quotes, copying it verbatim up to the
        # closing ')' without ever interpreting '//' as a comment start.
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
    """Given the position of a '{', finds the matching '}' handling
    nesting. Returns len(text) if it's never found."""
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


def find_paren_end(text: str, open_paren_pos: int) -> int:
    """Same as find_block_end but for balanced round parentheses."""
    depth = 0
    i = open_paren_pos
    n = len(text)
    while i < n:
        c = text[i]
        if c == "(":
            depth += 1
        elif c == ")":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return n


def find_block_spans(text: str, def_re):
    """For every match of def_re (@mixin or @function), finds the span of
    the brace-delimited body. Returns a list of (name, sig_span, body_end)."""
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


# ---------------------------------------------------------------------------
# v6 — selector nesting (category 1b)
# ---------------------------------------------------------------------------

def build_selector_stack_index(text: str):
    """Walks the (already comment-stripped) text tracking SCSS brace
    nesting, and for each block records the selector/@-rule header that
    introduces it plus its parent block. Braces belonging to a Sass
    interpolation (#{...}) are treated as atomic: they never open/close a
    block, otherwise "--#{$prefix}#{$color}:" would break the tracking.

    Returns a list of lists [body_start, body_end, header, parent_idx],
    indexable by position via find_containing_block()."""
    blocks = []
    stack = []
    i = 0
    n = len(text)
    last_header_start = 0
    while i < n:
        c = text[i]
        if c == "#" and i + 1 < n and text[i + 1] == "{":
            depth = 1
            i += 2
            while i < n and depth > 0:
                if text[i] == "{":
                    depth += 1
                elif text[i] == "}":
                    depth -= 1
                i += 1
            continue
        if c == "{":
            # Collapse internal whitespace (including newlines from a
            # multi-line selector list like "&.disabled,\n  .disabled > &")
            # to a single space — this text ends up in CSV note fields,
            # where an embedded newline makes a single logical row look
            # like several lines when the file is opened as plain text.
            header = re.sub(r"\s+", " ", text[last_header_start:i].strip())
            parent = stack[-1] if stack else -1
            blocks.append([i + 1, None, header, parent])
            stack.append(len(blocks) - 1)
            last_header_start = i + 1
            i += 1
            continue
        if c == "}":
            if stack:
                idx = stack.pop()
                blocks[idx][1] = i
            last_header_start = i + 1
            i += 1
            continue
        if c == ";":
            # End of a declaration/statement (not of a block): without
            # this, the header captured for the next nested selector would
            # wrongly also include every declaration that precedes it
            # inside the same parent block (confirmed bug on
            # _buttons.scss: a page-long header instead of the plain
            # "&:hover, &:active").
            last_header_start = i + 1
            i += 1
            continue
        i += 1
    for idx in stack:
        blocks[idx][1] = n
    return blocks


def find_containing_block(blocks, pos: int) -> int:
    """Index of the innermost block (narrowest span) containing pos, or -1
    if pos sits at file level (outside every block)."""
    best = -1
    best_width = None
    for idx, (start, end, _header, _parent) in enumerate(blocks):
        e = end if end is not None else len(_header)
        if start <= pos < e:
            width = e - start
            if best_width is None or width < best_width:
                best = idx
                best_width = width
    return best


def selector_chain_for_pos(blocks, pos: int):
    """Chain of headers, from outermost to innermost, enclosing pos. Empty
    list if pos sits at file level."""
    idx = find_containing_block(blocks, pos)
    chain = []
    while idx != -1:
        _start, _end, header, parent = blocks[idx]
        chain.append(header)
        idx = parent
    return list(reversed(chain))


def is_conditional_chain(chain) -> bool:
    return any(CONDITIONAL_MARKERS_RE.search(h) for h in chain)


def conditional_markers_in_chain(chain):
    """For the diagnostic message: which headers in the chain triggered the
    'conditional' classification."""
    return [h for h in chain if CONDITIONAL_MARKERS_RE.search(h)]


# ---------------------------------------------------------------------------
# v6 — false positive (a): property as a bare @include argument
# ---------------------------------------------------------------------------

def find_include_spans(text: str):
    spans = []
    for m in INCLUDE_CALL_RE.finditer(text):
        open_paren = text.find("(", m.start())
        if open_paren == -1:
            continue
        end = find_paren_end(text, open_paren)
        spans.append((open_paren, end))
    return spans


def scan_mixin_arg_declarations(text: str, include_spans):
    """Finds properties declared as a bare @include argument (no ':' after
    the name, so invisible to DECL_RE), explicitly excluding the case
    where that '--name' is actually inside a nested var(...) within the
    same call (a usage, not a declaration). Returns a list of
    (prop_name, start_pos) — only for properties with the correct $prefix
    interpolation, same criterion as DECL_RE/USE_RE."""
    found = []
    for start, end in include_spans:
        # end is the index of the closing ')' (excluded by a
        # text[start:end] slice) — we include it, otherwise the "followed
        # by , or )" lookahead in the pattern never sees the last argument.
        segment = text[start : end + 1]
        for m in MIXIN_ARG_PROP_RE.finditer(segment):
            pre_char = m.group("pre")
            if pre_char == "(":
                before = segment[max(0, m.start("pre") - 3) : m.start("pre")]
                if before == "var":
                    continue
            kind, varname, prop = classify(m.group("ref"))
            if not has_letter(prop):
                continue
            if kind == "interpolated" and varname == PREFIX_VAR_NAME:
                found.append((prop, start + m.start("ref")))
    return found


# ---------------------------------------------------------------------------
# v6 — false positive (b): property generated by a Sass-map @each loop
# ---------------------------------------------------------------------------

def extract_map_keys(text: str, map_name: str):
    """Finds '$map_name: ( ... )' and extracts its top-level keys (quoted
    strings or barewords followed by ':'), handling paren nesting so
    values like rgba(...) or nested maps don't get mistaken for top-level
    keys. Returns a set of keys (unquoted)."""
    pattern = re.compile(r"\$" + re.escape(map_name) + r"\s*:\s*\(")
    m = pattern.search(text)
    if not m:
        return set()
    open_paren = m.end() - 1
    end = find_paren_end(text, open_paren)
    body = text[open_paren + 1 : end]

    keys = set()
    depth = 0
    i = 0
    n = len(body)
    expect_key = True
    while i < n:
        c = body[i]
        if c.isspace():
            i += 1
            continue
        if c == "(":
            depth += 1
            i += 1
            continue
        if c == ")":
            depth -= 1
            i += 1
            continue
        if depth == 0 and c == ",":
            expect_key = True
            i += 1
            continue
        if depth == 0 and expect_key:
            if c in ("'", '"'):
                q = c
                j = i + 1
                while j < n and body[j] != q:
                    j += 1
                keys.add(body[i + 1 : j])
                i = j + 1
            else:
                j = i
                while j < n and body[j] not in ":,()'\"":
                    j += 1
                key = body[i:j].strip()
                if key:
                    keys.add(key)
                i = j
            expect_key = False
            continue
        i += 1
    return keys


def scan_each_map_declarations(text: str, all_texts_by_file):
    """Finds loops of the shape '@each $k[, $v] in $mapname { ... --#{$prefix}#{$k}SUFFIX: ...; }'
    and, for each, resolves $mapname's keys (looking first in the same
    file, then across every other scanned file) to generate the list of
    property names actually emitted at runtime. Returns a list of
    (prop_name, map_name, loop_start_pos)."""
    found = []
    for m in EACH_LOOP_RE.finditer(text):
        loop_var1, loop_var2, map_name = m.group(1), m.group(2), m.group(3)
        brace_pos = text.find("{", m.end())
        if brace_pos == -1:
            continue
        body_end = find_block_end(text, brace_pos)
        body = text[brace_pos:body_end]

        dynamic_hit = False
        suffix = ""
        for loopvar in (loop_var1, loop_var2):
            if not loopvar:
                continue
            pat = re.compile(
                DYNAMIC_DECL_TEMPLATE.format(prefix=PREFIX_VAR_NAME, loopvar=loopvar)
            )
            dm = pat.search(body)
            if dm:
                dynamic_hit = True
                suffix = dm.group(1)
                break
        if not dynamic_hit:
            continue

        keys = extract_map_keys(text, map_name)
        if not keys:
            for other_text in all_texts_by_file.values():
                keys = extract_map_keys(other_text, map_name)
                if keys:
                    break
        for key in keys:
            if has_letter(key):
                found.append((f"{key}{suffix}", map_name, m.start()))
    return found


# ---------------------------------------------------------------------------
# v6: "backlog" files — commented out of the entry point's @forward/@use
# list (e.g. bootstrap-italia.scss), so not reachable from the real build.
# Flagged explicitly instead of being scanned as if they contributed to the
# public personalization contract.
# ---------------------------------------------------------------------------

FORWARD_USE_RE = re.compile(r"@(?:forward|use)\s+['\"]([^'\"]+)['\"]")


def parse_entry_forward_targets(entry_path: Path):
    """Reads the entry file LINE BY LINE (not the generic strip_comments,
    which would erase exactly the information we need here) and splits
    active @forward/@use targets from ones commented out with //. Doesn't
    handle /* */ block comments or an @forward spanning multiple lines —
    good enough for the real case (one @forward per line)."""
    raw = entry_path.read_text(encoding="utf-8", errors="replace")
    active, commented = [], []
    for line in raw.splitlines():
        comment_pos = line.find("//")
        before = line if comment_pos == -1 else line[:comment_pos]
        after = "" if comment_pos == -1 else line[comment_pos:]
        active.extend(m.group(1) for m in FORWARD_USE_RE.finditer(before))
        commented.extend(m.group(1) for m in FORWARD_USE_RE.finditer(after))
    return active, commented


def resolve_forward_target(target: str, files):
    """Resolves an @forward/@use target (e.g. 'components/card') to the
    scanned files whose path ends with 'components/_card.scss' or
    'components/card.scss' — a path-suffix heuristic, not a real Sass
    module resolver (no index files, no transitivity). Ignores built-in
    modules ('sass:map' etc.)."""
    if target.startswith("sass:"):
        return set()
    parts = target.split("/")
    name = parts[-1]
    dir_parts = parts[:-1]
    suffixes = []
    for base_name in (f"_{name}.scss", f"{name}.scss"):
        suffixes.append("/".join(dir_parts + [base_name]) if dir_parts else base_name)
    matched = set()
    for f in files:
        fposix = f.as_posix()
        if any(fposix.endswith(suf) for suf in suffixes):
            matched.add(f)
    return matched


def find_backlog_files(entry_path: Path, files):
    """Scanned files that match ONLY a commented-out @forward/@use in the
    entry file (never an active one) — backlog candidates for removal,
    not part of the real build. Returns (backlog_set,
    commented_targets_without_a_match) — the second is useful to tell
    whether the path-resolution heuristic silently failed on something."""
    active_targets, commented_targets = parse_entry_forward_targets(entry_path)

    active_files = set()
    for t in active_targets:
        active_files |= resolve_forward_target(t, files)

    backlog_files = set()
    unmatched_commented = []
    for t in commented_targets:
        matched = resolve_forward_target(t, files)
        if not matched:
            unmatched_commented.append(t)
            continue
        backlog_files |= (matched - active_files)

    return backlog_files, unmatched_commented


def scan_file_pass1(path: Path):
    """First pass: extracts everything without filtering out dead code
    (needed to determine WHAT is dead, before it can be excluded)."""
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

    # Bareword: also captures functions passed by "bare" name (no
    # parentheses) to mechanisms like meta.get-function()/meta.call(),
    # e.g. map-loop($map, rgba-css-var, '$key'). More permissive than
    # CALL_RE.
    barewords = set()
    for m in BAREWORD_RE.finditer(text):
        if in_def_sig(m.start()):
            continue
        barewords.add(m.group(0))

    # Raw (unfiltered) Sass-variable usage, to tell apart in category 7
    # "never referenced anywhere" from "referenced only inside code that's
    # already dead".
    raw_vars_used = {
        name for m in VAR_USE_RE.finditer(text)
        if has_letter(name := m.group(1))
    }

    return text, mixin_spans, func_spans, mixins_used, calls, barewords, raw_vars_used


def scan_file_pass2(text: str, dead_spans):
    """Second pass: extracts properties/variables, excluding anything
    inside a @mixin or @function already confirmed dead.

    v6: besides the classic 'declared' set, also computes 'declared_base'
    — names with AT LEAST one declaration outside a conditional selector
    (dark theme, state, breakpoint) — and 'variant_only_contexts' — for
    names with NO base declaration, the list of conditional contexts
    found."""

    def excluded(pos):
        for start, end in dead_spans:
            if start <= pos < end:
                return True
        return False

    blocks = build_selector_stack_index(text)

    declared, used, suspicious = set(), set(), []
    declared_base = set()
    variant_only_contexts = {}  # name -> set of conditional headers

    for m in DECL_RE.finditer(text):
        if excluded(m.start()):
            continue
        kind, varname, prop = classify(m.group(1))
        if not has_letter(prop):
            continue
        if kind == "interpolated" and varname == PREFIX_VAR_NAME:
            declared.add(prop)
            chain = selector_chain_for_pos(blocks, m.start())
            if is_conditional_chain(chain):
                variant_only_contexts.setdefault(prop, set()).update(
                    conditional_markers_in_chain(chain)
                )
            else:
                declared_base.add(prop)
        elif kind == "interpolated":
            suspicious.append(("declaration", f"${varname}", prop))
        else:
            suspicious.append(("declaration", "(no interpolation)", prop))

    # A property with at least one base declaration is not "variant-only",
    # even if it also appears inside a variant elsewhere in the same file.
    for prop in declared_base:
        variant_only_contexts.pop(prop, None)

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
            suspicious.append(("usage", "(no interpolation)", prop))

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

    return (
        declared, used, suspicious, vars_declared, vars_used, sassvar_in_var,
        declared_base, variant_only_contexts,
    )


def scan_js_file(path: Path, hardcoded_prefix: str):
    """Looks in a .js file for custom properties read/written with the
    prefix spelled out literally (e.g. '--bsi-dropdown-position'), since
    JS has no Sass interpolation. Returns a set of names (without the
    --prefix) found in the file, to mark them as "used" on the SCSS side
    and avoid false positives in section 1."""
    raw = path.read_text(encoding="utf-8", errors="replace")
    text = strip_comments(raw)  # known limit: doesn't recognize backticks
    js_prop_re = re.compile(r"--" + re.escape(hardcoded_prefix) + r"([\w-]+)")
    names = set()
    for m in js_prop_re.finditer(text):
        name = m.group(1)
        if has_letter(name):
            names.add(name)
    return names


def analyze_broad_var_files(file_data, dead_mixins, dead_funcs, global_vars_used,
                             var_usage_categories, global_declared):
    """Dedicated analysis for _config.scss/_variables.scss: every Sass
    declaration (even without !default, since these files define no
    mixin/function), cross-referenced with global usage and with the
    names of custom properties declared elsewhere (including root.scss),
    to see which variables conceptually point to a token that already
    exists there. For each used variable it also reports WHERE
    (docs/components/forms/other/only inside config-variables
    themselves), so both docs-only usage and the case of a variable that
    only reaches other variables in the same seed file, never a real
    consumer, are visible."""
    results = {}  # path -> list of (name, used_bool, root_match_bool, categories_set)

    for f, (text, mspans, fspans) in file_data.items():
        if f.name not in BROAD_VAR_FILES:
            continue

        dead_spans = []
        for name, sig_span, body_end in mspans:
            if name in dead_mixins:
                dead_spans.append((sig_span[0], body_end))
        for name, sig_span, body_end in fspans:
            if name in dead_funcs:
                dead_spans.append((sig_span[0], body_end))

        def excluded(pos):
            return any(s <= pos < e for s, e in dead_spans)

        names = set()
        for m in VAR_DECL_BROAD_RE.finditer(text):
            if excluded(m.start()):
                continue
            name = m.group(1)
            if has_letter(name):
                names.add(name)

        rows = []
        for name in sorted(names):
            used = name in global_vars_used
            root_match = name in global_declared
            categories = var_usage_categories.get(name, set())
            rows.append((name, used, root_match, categories))
        results[f] = rows

    return results


def write_csv(path, rows):
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["categoria", "file", "nome", "note"])
        for row in rows:
            w.writerow(row)


SPECIAL_FILES = {"_utilities.scss": "utilities.scss", "_maps.scss": "maps.scss"}


def categorize_file(f: Path) -> str:
    """Classifies a file to tell WHO consumes a variable: the seed files
    themselves (config/variables.scss), docs, components/forms,
    utilities.scss/maps.scss (which generate utility classes), or a
    generic 'other' bucket (other base/ files, etc.)."""
    if f.name in BROAD_VAR_FILES:
        return f.name  # "_config.scss" or "_variables.scss"
    if f.name in SPECIAL_FILES:
        return SPECIAL_FILES[f.name]
    if "docs" in f.parts:
        return "docs"
    if "components" in f.parts:
        return "components"
    if "forms" in f.parts:
        return "forms"
    return "altro-base"


def main(paths, csv_path=None, js_paths=None, hardcoded_prefix=DEFAULT_HARDCODED_PREFIX,
         entry_path=None):
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

    # ---- v6: backlog files — commented out in the entry file, not
    #      reachable from the real build (--entry, optional) ----
    backlog_files = set()
    unmatched_commented = []
    if entry_path:
        entry = Path(entry_path)
        if entry.is_file():
            backlog_files, unmatched_commented = find_backlog_files(entry, files)
        else:
            print(f"Attenzione: --entry {entry_path} non esiste, salto.", file=sys.stderr)
    if unmatched_commented:
        # Diagnostic about the tool's own path-resolution heuristic, not a
        # finding about the codebase — goes to stderr like the other
        # "Attenzione:" messages, not into the report itself.
        for t in sorted(set(unmatched_commented)):
            print(
                f"Attenzione: @forward/@use commentato '{t}' non risolto a "
                "nessun file scansionato (limite dell'euristica di path).",
                file=sys.stderr,
            )

    # ---- Optional scan of JS folders: properties read with a hardcoded
    #      prefix (no $prefix interpolation is possible in JS) ----
    js_files = []
    for p in js_paths or []:
        root = Path(p)
        if root.is_file() and root.suffix == ".js":
            js_files.append(root)
        elif root.is_dir():
            js_files.extend(sorted(
                f for f in root.rglob("*.js")
                if "node_modules" not in f.parts and not f.name.endswith(".min.js")
            ))
        else:
            print(f"Attenzione: {p} non esiste, salto (--js-dirs).", file=sys.stderr)

    global_js_used = set()
    js_occurrences = []  # (file, name) — every occurrence, dead or live
    js_used_by_name = {}  # name -> file (first occurrence, for the 1x note)
    for f in js_files:
        names = scan_js_file(f, hardcoded_prefix)
        global_js_used |= names
        for name in sorted(names):
            js_occurrences.append((f, name))
            js_used_by_name.setdefault(name, f)

    # ---- Pass 1: figure out what's dead (mixins, functions) ----
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
    # Functions count as used even if the bare name (no parentheses)
    # appears elsewhere in live code: covers indirect invocation via
    # meta.get-function()/meta.call(), e.g. map-loop($map, func-name, ...).
    dead_funcs = set(global_funcs_defined) - global_barewords

    # v6: text of every file, used by scan_each_map_declarations to look
    # up a map's definition when it's not in the same file as the @each
    # loop (e.g. $theme-colors in _variables.scss, @each in root.scss).
    all_texts_by_file = {f: file_data[f][0] for f in files}

    # ---- Pass 2: extract properties/variables, excluding the body of
    #      mixins/functions already confirmed dead (one level, not
    #      recursive) ----
    global_declared_base = set()
    variant_only_by_name = {}  # name -> set of (file, conditional header)

    # v6: explicit tracking of the three false positives (for CSV
    # categories 1x/2x/2y) — without this, "rescued" properties would
    # silently blend in with ordinary declarations/usages.
    mixin_arg_rescues = []  # (file, prop_name)
    each_map_rescues = []   # (file, prop_name, map_name)

    # ---- Pass 2a: "pure" results (direct --name: syntax only) for every
    #      file. Needs a full pass over ALL files before it's possible to
    #      tell whether a property found only as an @include/@each
    #      argument elsewhere is a true rescue (no direct declaration
    #      anywhere) or noise (the property already has a direct home
    #      elsewhere, like btn-font-size: declared literally in
    #      components/_buttons.scss, and SEPARATELY re-set via
    #      @include rfs(...) in base/mixins/_buttons.scss — a real second
    #      occurrence, but not needed to avoid a false orphan, so not a
    #      "rescue" worth reporting in 1x/2x/2y).
    pass2_results = {}
    global_declared = set()  # direct, pure — used to decide 2x/2y
    global_used = set()
    all_suspicious = []
    global_vars_declared = {}
    global_vars_used = set()
    var_usage_categories = {}  # name -> set of categories using it
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

        (declared, used, suspicious, vdecl, vuse, sassvar_in_var,
         declared_base, variant_only_contexts) = scan_file_pass2(text, dead_spans)
        pass2_results[f] = (declared, used)

        global_declared |= declared
        global_used |= used
        global_declared_base |= declared_base
        for name, contexts in variant_only_contexts.items():
            entry_ctx = variant_only_by_name.setdefault(name, set())
            entry_ctx.update((f, ctx) for ctx in contexts)
        for kind, varname, prop in suspicious:
            all_suspicious.append((f, kind, varname, prop))
        for name in vdecl:
            global_vars_declared.setdefault(name, f)
        global_vars_used |= vuse
        cat = categorize_file(f)
        for name in vuse:
            var_usage_categories.setdefault(name, set()).add(cat)
        for name in sassvar_in_var:
            all_sassvar_in_var.append((f, name))

    # ---- Pass 2b: bare @include arguments and @each-generated keys — now
    #      that global_declared (pure) is complete across the whole tree,
    #      a true rescue can be told apart from a redundant second
    #      occurrence. Both are still merged into 'declared' (for
    #      correctness in section 2), but only true rescues end up in
    #      mixin_arg_rescues/each_map_rescues.
    per_file = {}
    for f in files:
        text, mspans, fspans = file_data[f]
        declared, used = pass2_results[f]
        declared = set(declared)  # copy: don't mutate pass2_results

        include_spans = find_include_spans(text)
        for prop, _pos in scan_mixin_arg_declarations(text, include_spans):
            if prop not in global_declared:
                mixin_arg_rescues.append((f, prop))
            declared.add(prop)

        for prop, map_name, _pos in scan_each_map_declarations(text, all_texts_by_file):
            if prop not in global_declared:
                each_map_rescues.append((f, prop, map_name))
            declared.add(prop)

        per_file[f] = (declared, used)

    # global_declared must be widened AFTER pass 2b (otherwise a file
    # scanned before another would judge something a "rescue" that a
    # later file already declares literally): recomputed in full from the
    # final per-file results.
    global_declared = set()
    for declared, _used in per_file.values():
        global_declared |= declared

    # A property is "variant-only" only if it NEVER has a base declaration
    # in any file (not just the file where it was first seen).
    for name in list(variant_only_by_name):
        if name in global_declared_base:
            del variant_only_by_name[name]

    # A property read only from JS (hardcoded prefix) is not "dead": it
    # must be merged into global_used BEFORE the section-1 comparison,
    # otherwise it would wrongly look dead just because the script
    # doesn't look outside .scss files. Before merging, compute for
    # category 1x which "dead" ones are rescued ONLY thanks to this merge.
    global_used_before_js = set(global_used)
    global_used |= global_js_used

    js_rescues = []  # (file, prop_name, js_file)
    for f, (declared, _used) in per_file.items():
        would_be_dead = declared - global_used_before_js
        still_dead = declared - global_used
        rescued = would_be_dead - still_dead
        for name in sorted(rescued):
            js_rescues.append((f, name, js_used_by_name.get(name)))

    # ------------------------------------------------------------------
    # From here on: build every CSV row exactly as before (the detection
    # logic itself is unchanged), but print NOTHING per-row to the
    # console — only a final summary. csv_rows is the single source of
    # truth for both the CSV file and the summary counts.
    # ------------------------------------------------------------------
    csv_rows = []

    if backlog_files:
        for f in sorted(backlog_files):
            csv_rows.append((
                "0-backlog-file", str(f), "",
                "non raggiungibile dal file d'ingresso (@forward/@use commentato)",
            ))

    # 1) declared but never read anywhere scanned (dead)
    for f, (declared, used) in per_file.items():
        for d in sorted(declared - global_used):
            csv_rows.append(("1-dead-property", str(f), d, ""))

    # 1x) dead only in appearance — rescued solely by the JS scan
    for f, name, jsfile in js_rescues:
        csv_rows.append((
            "1x-suppressed-js-only", str(f), name,
            f"letta solo da {jsfile}, mai da var() in .scss",
        ))

    # 1b) declared only inside a conditional selector — no base default
    for name in sorted(variant_only_by_name):
        for f, ctx in sorted(variant_only_by_name[name], key=lambda t: str(t[0])):
            csv_rows.append((
                "1b-declared-variant-only", str(f), name,
                f"nessun default base, solo dentro: {ctx}",
            ))

    # 2) var() pointing to names never declared anywhere scanned (orphan)
    for f, (declared, used) in per_file.items():
        for o in sorted(used - global_declared):
            csv_rows.append(("2-orphan-var", str(f), o, ""))

    # 2x) orphan only in appearance — declared as a bare @include argument
    for f, prop in sorted(set(mixin_arg_rescues), key=lambda t: (str(t[0]), t[1])):
        csv_rows.append((
            "2x-suppressed-mixin-arg", str(f), prop,
            "dichiarata come argomento di @include, non con sintassi diretta",
        ))

    # 2y) orphan only in appearance — generated by a Sass-map @each loop
    for f, prop, map_name in sorted(set(each_map_rescues), key=lambda t: (str(t[0]), t[1])):
        csv_rows.append((
            "2y-suppressed-each-map", str(f), prop,
            f"generata dal loop @each su ${map_name}",
        ))

    # 3) suspicious references (hardcoded/missing prefix, or an
    #    interpolation variable other than $prefix — possible typo)
    for f, kind, varname, prop in all_suspicious:
        csv_rows.append(("3-suspicious-reference", str(f), prop, f"{kind}: {varname}"))

    # 4) possible typos (a declared-never-used name very close to a
    #    used-never-declared name, same file — needs a manual check)
    suggestion_count = 0
    SIMILARITY_THRESHOLD = 0.7
    for f, (declared, used) in per_file.items():
        dead = sorted(declared - global_used)
        orphan = sorted(used - global_declared)
        if not dead or not orphan:
            continue
        for o in orphan:
            matches = difflib.get_close_matches(o, dead, n=1, cutoff=SIMILARITY_THRESHOLD)
            if matches:
                suggestion_count += 1
                csv_rows.append((
                    "4-possible-typo", str(f), o, f"forse refuso di '{matches[0]}'",
                ))

    # 5) mixins defined but never @include'd anywhere
    for name in sorted(dead_mixins):
        csv_rows.append(("5-dead-mixin", str(global_mixins_defined[name]), name, ""))

    # 6) functions defined but never called anywhere
    for name in sorted(dead_funcs):
        csv_rows.append(("6-dead-function", str(global_funcs_defined[name]), name, ""))

    # 7a/7b) dead Sass variables ($xxx) — via already-dead code, or never
    #        referenced at all
    dead_vars_all = sorted(set(global_vars_declared) - global_vars_used)
    dead_vars_via_dead_code = [n for n in dead_vars_all if n in global_raw_vars_used]
    dead_vars_never_referenced = [n for n in dead_vars_all if n not in global_raw_vars_used]
    for name in dead_vars_via_dead_code:
        csv_rows.append(("7a-sassvar-dead-via-dead-code", str(global_vars_declared[name]), name, ""))
    for name in dead_vars_never_referenced:
        csv_rows.append(("7b-sassvar-dead-never-referenced", str(global_vars_declared[name]), name, ""))

    # 8) var($NAME) instead of var(--NAME) — invalid CSS, var() wants a
    #    custom property, not a Sass variable
    for f, name in all_sassvar_in_var:
        csv_rows.append((
            "8-sassvar-in-var", str(f), name,
            "probabilmente andava var(--#{$prefix}...) o rimosso il var()",
        ))

    # 9) focus on _config.scss / _variables.scss — every Sass variable
    #    (even without !default), cross-referenced with global usage and
    #    with the names of custom properties declared elsewhere
    #    (including root.scss)
    broad_results = analyze_broad_var_files(
        file_data, dead_mixins, dead_funcs, global_vars_used,
        var_usage_categories, global_declared
    )
    SEED_ONLY = {"_config.scss", "_variables.scss"}
    for f, rows in broad_results.items():
        for name, used, root_match, categories in rows:
            if used and root_match:
                cats_str = ", ".join(sorted(categories)) if categories else "?"
                chain_only = bool(categories) and categories.issubset(SEED_ONLY)
                csv_rows.append((
                    "9a-sassvar-used-root-match", str(f), name,
                    f"usata in: {cats_str}" + (" | SOLO catena config/variables" if chain_only else ""),
                ))
            elif not used and root_match:
                csv_rows.append((
                    "9b-sassvar-dead-root-match", str(f), name,
                    "candidata forte: cancellare o correggere chi dovrebbe leggerla",
                ))
            elif not used and not root_match:
                csv_rows.append((
                    "9c-sassvar-dead-no-match", str(f), name,
                    "probabile retaggio Bootstrap 5, candidata a cancellazione diretta",
                ))
            # used and not root_match: used, no corresponding root.scss
            # token — normal, not worth flagging.

    # 10) custom properties read from JS with a hardcoded prefix
    if js_paths:
        for f, name in js_occurrences:
            csv_rows.append((
                "10-js-hardcoded-prefix", str(f), name,
                "non dichiarata in alcun .scss" if name not in global_declared else "",
            ))

    # Mark every row coming from a backlog file, across ALL categories
    # (not just 0-backlog-file itself) — nothing is dropped, it's just
    # tagged so it can be filtered or weighted in the CSV.
    if backlog_files:
        backlog_files_str = {str(f) for f in backlog_files}
        marked_rows = []
        for cat, fstr, name, note in csv_rows:
            if fstr in backlog_files_str and cat != "0-backlog-file":
                note = (note + " " if note else "") + "[BACKLOG: file non importato in bootstrap-italia.scss]"
            marked_rows.append((cat, fstr, name, note))
        csv_rows = marked_rows

    if csv_path:
        write_csv(csv_path, csv_rows)

    # ---- Console output: summary only. Every count below is tallied
    #      straight from csv_rows, so it can never drift from what's
    #      actually written to the CSV. ----
    counts = {}
    for cat, _f, _n, _note in csv_rows:
        counts[cat] = counts.get(cat, 0) + 1

    print("=" * 78)
    print("RIEPILOGO")
    print("=" * 78)
    print(f"File .scss scansionati: {len(files)}")
    if js_paths:
        print(f"File .js scansionati: {len(js_files)}")
    print(f"Property dichiarate (uniche, corrette): {len(global_declared)}")
    print(f"Property lette (uniche, corrette): {len(global_used)}")
    print()
    print("Righe per categoria (dettaglio completo nel CSV):")
    for cat in sorted(counts):
        print(f"  {cat}: {counts[cat]}")
    print()
    print(f"Righe totali: {len(csv_rows)}")

    if backlog_files:
        backlog_marked = sum(
            1 for _cat, _f, _n, note in csv_rows if "[BACKLOG" in note
        )
        pct = (100 * backlog_marked / len(csv_rows)) if csv_rows else 0
        print(
            f"File backlog (non raggiungibili da --entry): {len(backlog_files)}, "
            f"{backlog_marked} righe del report ne derivano ({pct:.0f}%)"
        )

    if csv_path:
        print(f"\nCSV scritto in: {csv_path} ({len(csv_rows)} righe)")
    else:
        print("\n(passa --csv <path> per il dettaglio riga per riga)")


def _extract_flag_values(args, flag):
    """Extracts every consecutive value from args after `flag`, up to the
    next argument starting with '--' or the end of the list. Returns
    (values, remaining_args)."""
    if flag not in args:
        return [], args
    idx = args.index(flag)
    values = []
    j = idx + 1
    while j < len(args) and not args[j].startswith("--"):
        values.append(args[j])
        j += 1
    remaining = args[:idx] + args[j:]
    return values, remaining


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(
            "Uso: python3 audit-custom-properties.py <cartella1> [cartella2 ...] "
            "[--js-dirs <cartellaJS1> ...] [--hardcoded-prefix bsi-] "
            "[--entry bootstrap-italia.scss] [--csv report.csv]"
        )
        sys.exit(1)
    args = sys.argv[1:]

    csv_path = None
    if "--csv" in args:
        idx = args.index("--csv")
        if idx + 1 >= len(args):
            print("Uso: --csv richiede un path, es. --csv report.csv", file=sys.stderr)
            sys.exit(1)
        csv_path = args[idx + 1]
        args = args[:idx] + args[idx + 2:]

    entry_path = None
    if "--entry" in args:
        idx = args.index("--entry")
        if idx + 1 >= len(args):
            print("Uso: --entry richiede un path, es. --entry bootstrap-italia.scss", file=sys.stderr)
            sys.exit(1)
        entry_path = args[idx + 1]
        args = args[:idx] + args[idx + 2:]

    js_dirs, args = _extract_flag_values(args, "--js-dirs")

    hardcoded_prefix = DEFAULT_HARDCODED_PREFIX
    if "--hardcoded-prefix" in args:
        idx = args.index("--hardcoded-prefix")
        if idx + 1 >= len(args):
            print("Uso: --hardcoded-prefix richiede un valore, es. --hardcoded-prefix bsi-", file=sys.stderr)
            sys.exit(1)
        hardcoded_prefix = args[idx + 1]
        args = args[:idx] + args[idx + 2:]

    main(args, csv_path, js_paths=js_dirs, hardcoded_prefix=hardcoded_prefix, entry_path=entry_path)