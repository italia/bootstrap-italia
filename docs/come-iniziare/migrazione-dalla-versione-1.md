---
layout: docs
title: Migrazione dalla versione 1
description: Un pratico elenco dei principali cambiamenti fra Bootstrap Italia 1.x e 2.0.
group: come-iniziare
toc: true
---

I cambiamenti che richiedono una modifica del codice precedente sono contrassegnati come <span class="bg-danger text-white px-2">Breaking</span>.

## Compilazione

La compilazione del progetto è stata migrata da gulp.js a [rollup.js](https://rollupjs.org/guide/en/){:target="\_blank"}.

## Dipendenze

- <span class="bg-danger text-white px-2">Breaking</span> Eliminazione di jQuery e riscrittura dei plugin in vanilla JavaScript.
- Upgrade di Popper da v1.x a Popper v2.x.
- Sostituzione di Libsass con Dart Sass.

## Browser supportati

<span class="bg-danger text-white px-2">Breaking</span> Bootstrap Italia 2.0, come Bootstrap 5 sul quale è basato, abbandona il supporto delle seguenti versioni dei browser:

- **Internet Explorer 10 e 11**  
  Per chi vuole far uso di IE11 rimane a disposizione la versione Legacy di Bootstrap Italia basata su BS4
- **Microsoft Edge < 16** (Legacy Edge)
- **Firefox < 60**
- **Safari < 12 / iOS Safari < 12**
- **Chrome < 60**

## SASS

- <span class="bg-danger text-white px-2">Breaking</span> Rinominata la funzione `color-yiq()` e relative variabili a `color-contrast()`, dato che non è più legata allo spazio colore YIQ.
- <span class="bg-danger text-white px-2">Breaking</span> I mixins delle media query sono stati modificati in favore di un approccio più logico. Ad es: `@include media-breakpoint-up(sm)`
- <span class="bg-danger text-white px-2">Breaking</span> Tutte le funzioni `lighten()` e `darken()` sono state sostituite da `tint-color()` e `shade-color()`. Queste funzioni miscelano il colore con il bianco o il nero invece di modificarne il valore di luminosità.
- I mixin `box-shadow` ora permettono valori `null` e non supportano più `none` per gli argomenti multipli.
- Il mixin `border-radius()` ora ha un valore di default.

## Organizzare gli spazi

### Bordi

- <span class="bg-danger text-white px-2">Breaking</span> Rinominate le classi `.border-left` e `.border-right`, diventano `.border-start` e `.border-end`.
- <span class="bg-danger text-white px-2">Breaking</span> Rinominate le classi `.rounded-left` e `.rounded-right,` diventano `.rounded-start` e `.rounded-end`.

### Display

- <span class="bg-danger text-white px-2">Breaking</span> Le classi “Screen reader” sono ora classi “visually hidden”.  
  Le classi `.sr-only` e `.sr-only-focusable` diventano `.visually-hidden` e `.visually-hidden-focusable`.

### Float

- Rinominate `.float-left` e `.float-right`, diventano `.float-start` e `.float-end`.

### Griglie

- **Nuovo breakpoint!** Aggiunta di un nuovo breakpoint `xxl` per viewport da 1400px in su. Nessuna modifica agli altri breakpoint.
- Gutter:
  - Ora sono più grandi rispetto alla versione 1.x (24px invece di 12px).
  - Implementati gutter variabili (responsive).
  - Aggiunta una nuova classe gutter (`.g-*`, `.gx-*`, and `.gy-*`) per controllare le dimensioni dei gutter orizzontali e verticali.
  - <span class="bg-danger text-white px-2">Breaking</span> Rinominata la classe `.no-gutters` a `.g-0` per allinearla alle altre classi dei gutter.
- Alle colonne non è più applicata la proprietà `position: relative`, potrebbe essere necessario applicare la classe `.position-relative` ad alcuni elementi per ristabilire il comportamento originale.
- <span class="bg-danger text-white px-2">Breaking</span> Eliminate diverse classi `.order-*`, solitamente poco utilizzate. Ora vengono fornite solo le classi da `.order-1` a `.order-5`.
- <span class="bg-danger text-white px-2">Breaking</span> `bootstrap-grid.css` ora applica `box-sizing: border-box` solo alla colonna invece di resettare il box-sizing globale. Questo per permettere l'utilizzo dei nostri stili di griglia in più contesti senza creare interferenze.

### Proporzioni

- L'elemento `.embed-responsive-item` e il selettore di gruppi di elementi sono stati eliminati in favore di un più semplice elemento Proporzioni, implementato con il selettore `.ratio > *`.  
  Non sono più necessarie ulteriori classi, Proporzioni funziona con qualsiasi elemento HTML.

### Spaziature

<span class="bg-danger text-white px-2">Breaking</span> Sono state rinominate diverse classi utility per favorire un approccio slegato dalla direzione sinistra/destra, garantendo un miglior supporto alle lingue RTL.

- Rinominate le classi `.ml-*` e `.mr-*`, diventano `.ms-*` e `.me-*`.
- Rinominate le classi `.pl-*` e `.pr-*`, diventano `.ps-*` e `.pe-*`.

## Organizzare i contenuti

### Oggetti Media

- <span class="bg-danger text-white px-2">Breaking</span> Eliminato il componente `.media` dato che può essere replicato con le utilities di base.

### Tabelle

Tabelle ridisegnate e ricostruite con variabili CSS per un maggior controllo sullo stile.

- <span class="bg-danger text-white px-2">Breaking</span> Eliminazione della classi `.thead-light` e `.thead-dark` in favore delle classi varianti `.table-*` che possono essere usate per tutti gli elementi (`<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>` and `<td>`).

### Codice

- <span class="bg-danger text-white px-2">Breaking</span> Eliminazione della classe `.pre-scrollable`.

### Testo

- <span class="bg-danger text-white px-2">Breaking</span> Eliminazione della classe `.text-justify`.
- <span class="bg-danger text-white px-2">Breaking</span> Rinominate le classi `.text-left` e `.text-right`, diventano `.text-start` e `.text-end`.
- <span class="bg-danger text-white px-2">Breaking</span> La classe `.text-monospace` è stata rinominata `.font-monospace`.
- <span class="bg-danger text-white px-2">Breaking</span> La classe `.text-hide` è stata eliminata, dato che faceva uso di un metodo antiquato per nascondere il testo.
- <span class="bg-danger text-white px-2">Breaking</span> La classi utility `.font-weight-*` sono state rinominate `.fw-*` per brevità e coerenza.

### Tipografia

- Reset del `padding-left` di default degli elementi `<ul>` ed `<ol>` dal default del browser a 2rem.

## Componenti

### Accordion

- Aggiunto il nuovo componente [Accordion]({{ site.baseurl }}/docs/componenti/accordion/).

### Badge

- <span class="bg-danger text-white px-2">Breaking</span> Eliminate tutte le classi colore `.badge-*` a favore delle utilities colore (es: usare `.bg-primary` invece di `.badge-primary`).
- <span class="bg-danger text-white px-2">Breaking</span> Eliminata la classe `.badge-pill`, usare `.rounded-pill` al suo posto.

### Buttons

- <span class="bg-danger text-white px-2">Breaking</span> Eliminata la classe `.btn-block`. Per creare pulsanti o gruppi di pulsanti a tutta larghezza, come i block buttons di Bootstrap 4, utilizzare un mix delle utilities display e gap. Con queste utilities abbiamo più controllo su spaziature, allineamento e comportamento responsive rispetto al classico block button.
- I pulsanti disabilitati ora hanno la proprietà `pointer-events: none;`.

### Card

- <span class="bg-danger text-white px-2">Breaking</span> Eliminata la classe `.card-deck` a favore delle griglie.

### Pulsante di chiusura

- <span class="bg-danger text-white px-2">Breaking</span> La classe `.close` è stata rinominata in un meno generico `.btn-close`.

### Dropdown

- <span class="bg-danger text-white px-2">Breaking</span> Tutti gli eventi del dropdown sono ora triggerati sul pulsante di toggle dello stesso e passati tramite _bubble up_ all'elemento padre.

### Popover

- <span class="bg-danger text-white px-2">Breaking</span> La classe `.arrow` è stata rinominata `.popover-arrow` nel template di default dei popover.

### Progress Indicators

- Gli Spinner ora rispettano `prefers-reduced-motion` riducendo la velocità di animazione.
- L'allineamento verticale degli Spinner è stato migliorato.

### Tooltip

- <span class="bg-danger text-white px-2">Breaking</span> La classe `.arrow` è stata rinominata `.tooltip-arrow` nel template di default dei tooltip.

## Form

- <span class="bg-danger text-white px-2">Breaking</span> Le classi di layout specifiche per i form sono state eliminate. Utilizza le griglie e le utilities invece di `.form-row` o `.form-inline`.
- <span class="bg-danger text-white px-2">Breaking</span> La classe `.form-text` non specifica più il display, permettendo la creazione di testo accessorio di tipo inline o block a seconda della necessità, semplicemente utilizzando `<span>` o `<div>`.
- <span class="bg-danger text-white px-2">Breaking</span> Se si migra dalla 1.x alla versione 2.2.0 in poi, assicurarsi di aggiungere alla label su input la classe `active` per impedire la sovrapposizione della label al campo stesso nel caso in cui si utilizza l’attributo placeholder o l’input parte già valorizzato.
- <span class="bg-danger text-white px-2">Breaking</span> Tutti i componenti **Select Custom** (*reset*, *multipla*, *con gruppi*, *con ricerca*, *multipla con gruppi e checkboxes*) non sono più supportati dalla versione 2.0.0 e successive.

## Javascript

- Eliminazione di jQuery e riscrittura dei plugin in vanilla JavaScript.
- <span class="bg-danger text-white px-2">Breaking</span> i _Data attributes_ per tutti i plugin JavaScript hanno ora un namespace per distinguere le funzionalità di Bootstrap Italia da plugin di terze parti e dal tuo codice. Es: `data-bs-toggle` invece di `data-toggle`.
- Rimossi gli underscore dai metodi pubblici statici come `_getInstance()` → `getInstance()`.
