# Audit custom properties — componenti BSI v3

Scope di questo lavoro: **solo** le custom property dei singoli file in
`src/scss/components/` (e `src/scss/forms/`) — quelle dichiarate nel blocco
`// Properties` di ogni componente e presentate in documentazione come punto
di personalizzazione per chi integra BSI.

**Fuori scope, deliberatamente, per questa lavorazione:**
- `base/_root.scss` — mapping 1:1 con Design Tokens Italia, "dichiarata e
  mai usata da BSI" è normale lì, non è un difetto.
- Mixin mai inclusi (`button-variant`, `alert-variant`, i `gradient-*`,
  ecc. in `base/mixins/`) e le ~390 variabili Sass di `base/_variables.scss`
  mai referenziate. Possibile debito di migrazione v2→v3, oppure superficie
  di personalizzazione Sass compile-time deliberatamente parallela a quella
  runtime via custom property (c'è un indizio, un `@forward` esplicito di
  quei mixin nel file di ingresso, ma non è confermato) — non toccare
  finché non è chiarito con chi conosce l'architettura. Lavorazione
  separata futura.

Verifica con `./scripts audit-custom-properties.py ./src/scss/` prima e dopo ogni
batch di fix, per controllare di non aver introdotto nuovi problemi.

---

## Fix meccanici — nessun cambio di comportamento visivo atteso

Sono refusi di naming: la property dichiarata e quella letta da `var()`
sono chiaramente la stessa cosa con un nome diverso, o manca solo
l'interpolazione del prefix.

- **`_buttons.scss`**: la regola del border usa `btn-border-width`
  (mai dichiarata) invece di `btn-border-size` (dichiarata, mai usata).
- **`_back-to-top.scss`**: `:hover` scrive `--backtop-background` (senza
  interpolazione `#{$prefix}`) invece di `--#{$prefix}backtop-background`
  — l'hover non cambia mai colore.
- **`_header.scss`**: `header-brand-spacing` ha come default
  `var(--bsi-spacing-14x)` (prefix hardcoded) invece di
  `var(--#{$prefix}spacing-14x)`.
- **`_headernavbartheme.scss`**: `var(--#{$primar}icon-primary)` — `$primar`
  invece di `$prefix`.
- **`_callout.scss`**: default di `callout-background-color` punta a
  `var(--#{$prefix}page-background-color)`, token inesistente — quello
  vero in root.scss è `page-background` (senza `-color`).
- **`_avatar.scss`**: `a.avatar::after` usa
  `var(--#{$prefix}color-background-emphasis)` invece del token dedicato
  già dichiarato, `var(--#{$prefix}avatar-overlay-background)` (stesso
  valore di default, zero impatto visivo a collegarlo).
- **`_avatar.scss`**: `&-presence`/`&-status` e `&-presence.busy` usano
  variabili Sass letterali (`$color-background-secondary-lighter`, `$red`)
  invece dei token equivalenti — rompe il theming a runtime. Sostituire con
  `var(--#{$prefix}color-background-secondary-lighter)` e
  `var(--#{$prefix}color-background-danger)` (verificare a occhio che il
  colore non cambi visibilmente, `$red` potrebbe non essere identico).
- **`_bottomnav.scss`**: `.bottom-nav-badge` ha
  `font-style: var(--#{$prefix}font-weight-solid)` — dovrebbe essere
  `font-weight`.
- **`_breadcrumb.scss`**: il separatore RTL referenzia due volte
  `--#{$prefix}breadcrumb-divider` invece di usare
  `breadcrumb-divider-flipped` per la versione flippata.
- **`_autocomplete.scss`** (forms): lo stato `&:hover` usa i token root
  diretti (`color-background-primary-lighter`, `color-text-primary`,
  `icon-primary`) invece dei tre token dedicati già dichiarati
  (`autocomplete-item-hover-background-color`,
  `autocomplete-item-hover-color`, `autocomplete-item-hover-icon-color`).
- **`_forms.scss`**: il checkbox usa
  `var(--#{$prefix}form-control-border-radius)` invece del token dedicato
  già dichiarato `form-checkbox-border-radius`.
- **`_forms.scss`**: `input::-webkit-datetime-edit` usa
  `var(--#{$prefix}form-contro-text-color)` — manca la "l", probabilmente
  voleva essere `form-control-text-color` (verificare se quel nome esiste
  o se il token giusto è un altro già dichiarato).
- **`_forms.scss`**: `fieldset legend` usa
  `var(--#{$prefix}form-input-spacing-x)`, mai dichiarata — quasi
  certamente doveva essere `form-control-spacing` (dichiarata e usata
  ovunque nello stesso file).
- **`_input-group.scss`**: `.input-group-text` usa
  `var(--#{$prefix}form-inpunt-text-color)` — lettere invertite in
  "inpunt", probabile refuso di `form-control-text-color` o simile.
- **`_type.scss`**: `spacin-inline-xs` — manca la "g" in "spacing".
- **`_form-input-file.scss`**: `color-border-primnary` — lettere
  invertite.
- **`_megamenu.scss`** e **`_navigation.scss`**: `var($dropdown-menu-*)`
  invece di `var(--#{$prefix}dropdown-*)` — CSS non valido, `var()` vuole
  una custom property non una variabile Sass. Nel `bootstrap-italia.scss`
  di ingresso mancano altre 2 occorrenze dello stesso bug, individuate
  dallo script ma non ancora lette a mano — controllare con
  `python3 ./scripts/audit-custom-properties.py ./src/scss/` sezione 8.

## Fix che cambiano un default — verificare visivamente prima del merge

- **`_avatar.scss`**: `avatar-dot-offset-bottom` dichiarata a `0` ma
  `&-presence { bottom: 8px; }` è hardcoded. Allineare il default a `8px`
  E collegare il token, altrimenti si sposta il puntino.
- **`_breadcrumb.scss`**: `breadcrumb-item-active-color` usata in
  `.active` ma mai dichiarata fuori da `.dark` — serve scegliere un
  default per il tema chiaro (candidato: `color-text-primary`, da
  confermare).

## Da decidere prima di toccare — non fixare senza una scelta di design

- **`_buttons.scss`**: `btn-hover-border-color` usata su `:focus-visible`
  senza default — quale token usare?
- **`_dropdown.scss`**: `dropdown-link-active-color`/`-hover-color`,
  `dropdown-button-padding`/`-background` — collegarle o rimuoverle dalla
  superficie pubblica?
- **`_dropdown.scss`**: branch `@if $dropdown-padding-y == 0` mai vero
  coi default — richiede un refactor, non un one-liner.
- **`_card.scss`**: blocco `.it-card-profile` duplicato con token rotti
  (`card-title-spacer-y`, `card-spacer-x` mai dichiarati) — sembra
  rimovibile ma va confermato che il primo blocco copra tutti i casi.
- **`_tab.scss`**: 9 property mai usate (`tab-shadow`,
  `tab-background-light`, `tab-border-width-cards`,
  `tab-border-color-cards`, `tab-add-btn-border`, `tab-add-btn-color`,
  `tab-close-btn-color`, `tab-close-btn-color-hover`,
  `tab-close-btn-color-disabled`) — da decidere una per una, wiring o
  rimozione.
- **`_carousel.scss`**: `carousel-heading-font-size` — collegarla cambia
  visivamente l'heading dei carousel esistenti.
- **`_header.scss`**: `header-nav-secondary-font-size` (bypassata con
  `0.875rem` hardcoded in `_headernavbar.scss`) e
  `header-search-button-color` (mai applicata) — wiring o rimozione.
- **`_headernavbartheme.scss`**, **`_headercentertheme.scss`**,
  **`_headerslimtheme.scss`**, **`_navigationtheme.scss`**: questi file
  non usano quasi mai custom property, solo Sass var dirette o (nel caso
  di navigationtheme) custom property senza prefix dichiarate su `:root`
  globale con nomi generici e colori esadecimali letterali. Migrazione
  strutturale, fuori scope per fix puntuali — issue a parte.

---

Script di verifica: `audit-custom-properties.py` (nella cartella ./scripts rispetto a dove si trova questo brief). Uso: `python3 ./scripts/audit-custom-properties.py ./src/scss/`