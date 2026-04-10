---
name: Carousel SCSS custom properties
overview: Refactor [`src/scss/components/_carousel.scss`](src/scss/components/_carousel.scss) to declare component-scoped CSS custom properties (pattern from [`_buttons.scss`](src/scss/components/_buttons.scss) / [`_alert.scss`](src/scss/components/_alert.scss)), replace `$crs-*` usage with those properties, and replace global color/spacing Sass variables with `var(--#{$prefix}…)` from [`_root.scss`](src/scss/base/_root.scss) where equivalents exist, preserving computed values from [`_variables.scss`](src/scss/base/_variables.scss).
todos:
  - id: properties-block
    content: Add // Properties block on .it-carousel-wrapper with --#{$prefix}carousel-* defaults; duplicate selector + stylelint disable for styles block
    status: pending
  - id: replace-crs-and-globals
    content: Wire pagination, header, track, 3-col padding, arrows, card border to CPs and semantic color tokens (background/border); map $v-gap math to spacing tokens
    status: pending
  - id: neutral-divider
    content: Divider `.lined_slide:after` uses background-color → var(--#{$prefix}color-background-primary) per regola colore (no var(--#{$prefix}primary))
    status: pending
  - id: lint-and-verify
    content: Run lint on _carousel.scss; optional remove unused $crs-* from _variables.scss
    status: pending
---

# Refactor carousel: Sass → custom properties

## Contesto

- File obiettivo: [`src/scss/components/_carousel.scss`](src/scss/components/_carousel.scss) (import Splide, blocco `.it-carousel-wrapper`, media query `lg`/`xl`, `prefers-reduced-motion`).
- Variabili `$crs-*` definite solo in [`_variables.scss`](src/scss/base/_variables.scss) (circa righe 1915–1922) e usate **solo** in `_carousel.scss` (tranne definizioni): dopo il refactor si potranno rimuovere o lasciare deprecate quelle non più referenziate (opzionale, stesso PR o follow-up).

## Struttura del file (allineamento skill + esempi)

1. Intestazione `// Component` / `// Description` invariata.
2. `@import` Splide subito dopo (come oggi), prima delle regole custom.
3. Sezione **`// Properties`**: un primo blocco `.it-carousel-wrapper { … }` con sole `--#{$prefix}carousel-*` (stile [`_buttons.scss`](src/scss/components/_buttons.scss) righe 15–30).
4. Commento `/* stylelint-disable-next-line no-duplicate-selectors */` + secondo blocco `.it-carousel-wrapper` con gli stili effettivi (come [`_alert.scss`](src/scss/components/_alert.scss) righe 26–27).

## Mappatura `$crs-*` → custom properties di componente

Definire su `.it-carousel-wrapper` proprietà con nomi chiari e commenti brevi; usarle nei discendenti con `var(--#{$prefix}carousel-…)`.

| Sass ([`_variables.scss`](src/scss/base/_variables.scss)) | Valore equivalente (vincolo utente) | Custom property proposta |
|-----------------------------------------------------------|--------------------------------------|---------------------------|
| `$crs-dots-dimension` = `$v-gap * 2` (16px con `$v-gap: 8px`) | allineato a 2×8px | `--#{$prefix}carousel-pagination-dot-size: var(--#{$prefix}spacing-s)` (1rem / 16px in linea con il sistema spacing in [`_root.scss`](src/scss/base/_root.scss)) |
| `$crs-dots-color` default `hsl(210, 83%, 77%)` | stesso colore del default | `--#{$prefix}carousel-pagination-dot-color: hsl(210, 83%, 77%)` (letterale = default `!default` in variabili; chi estendeva via `$crs-dots-color` potrà sovrascrivere la CP in CSS) |
| `$crs-heading-h-size` = `1.75rem` | invariato | `--#{$prefix}carousel-heading-font-size: 1.75rem` (oppure, se coincide con un token heading del design system, sostituire con `var(--#{$prefix}heading-*-font-size)` **solo dopo** verifica nel token `it-` che sia 1.75rem) |
| `$crs-margin-bottom` = `$v-gap * 3` (24px) | invariato | `--#{$prefix}carousel-track-padding-top: var(--#{$prefix}spacing-m)` |
| `$crs-heading-h-padding` = `$v-gap * 3` (24px) | invariato | `--#{$prefix}carousel-heading-padding-inline: var(--#{$prefix}spacing-m)` |
| `lg`: `$crs-heading-h-padding * 0.5` (12px) | invariato | nel `@media (min-width: …)` esistente, **override** della stessa CP: `--#{$prefix}carousel-heading-padding-inline: var(--#{$prefix}spacing-xs)` (0.75rem = 12px) — pattern “una sola variabile, contesto la sovrascrive” (skill). |

**Nota:** sostituire anche gli usi di `$v-gap` nel file con token spacing da [`_root.scss`](src/scss/base/_root.scss), coerenti con 8px = `spacing-xxs`, così il layout resta equivalente a moltiplicare `$v-gap`:

- `$v-gap` → `var(--#{$prefix}spacing-xxs)`
- `$v-gap * 2` → `var(--#{$prefix}spacing-s)` (dove applicabile)
- `$v-gap * 3` → `var(--#{$prefix}spacing-m)`
- `$v-gap * 1.5` → `var(--#{$prefix}spacing-xs)`
- `$v-gap * 5` → `var(--#{$prefix}spacing-xl)` (40px, come da commenti root)
- `$v-gap * 6` → `var(--#{$prefix}spacing-xxl)` (48px)

`transition: all 0.3s` non ha token dedicato in `_root.scss` (c’è solo `--#{$prefix}transition-instant: 0.2s`); **lasciare `0.3s`** per non alterare il comportamento.

## Mappatura colori globali → `_root.scss`

Regola applicata: non usare `var(--#{$prefix}primary)`.

- Se la proprietà CSS è un **background**, usare `var(--#{$prefix}color-background-primary)`.
- Se la proprietà CSS è un **border** (incl. `border-color`), usare `var(--#{$prefix}color-border-primary)`.

Applicazione prevista in `_carousel.scss`:

- `$primary` su `background` (dot attivo, frecce) → `var(--#{$prefix}color-background-primary)`.
- `$white` su `fill` SVG frecce → `var(--#{$prefix}color-text-inverse)` (semantico per icona/testo su fondo primario).
- `$gray-disabled` su `background` frecce `[disabled]` → `var(--#{$prefix}color-background-disabled)`.
- `$card-border-color` (= `$gray-border`) su `border-bottom` heading → `var(--#{$prefix}color-border-subtle)` (non forzato a primary perché non derivato da `$primary`).
- `$neutral-2` su divider `.lined_slide:after` (`background-color`) → `var(--#{$prefix}color-background-primary)` secondo la regola richiesta per i background del refactor.

## Media query e `map-get`

- Le query `@media (min-width: #{map-get($grid-breakpoints, lg|xl)})` e i `map-get($container-max-widths, …)` possono restare in Sass (come in altri componenti non è obbligatorio convertirle); opzionale in un secondo momento allineare a `@include media-breakpoint-up(lg)` per coerenza con il resto del codebase (fuori scope minimo se non richiesto).

## Validazione

- Eseguire lo **stylelint** (o comando usato dal repo) su `_carousel.scss` e correggere eventuali segnalazioni introdotte.
- Smoke visivo: paginazione punti (default vs `.is-active`), header `h2` bordo/padding, frecce tre colonne (normale vs `[disabled]`), linea verticale `.lined_slide:after` se si cambia strategia `$neutral-2`.

## Pulizia opzionale

- Se nessun altro file usa più `$crs-*`, rimuovere le righe 1915–1922 (o le sole variabili effettivamente inutilizzate) da [`_variables.scss`](src/scss/base/_variables.scss) per evitare dead code.
