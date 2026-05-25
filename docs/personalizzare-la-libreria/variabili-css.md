---
layout: docs
group: personalizzare-la-libreria
toc: true

title: Variabili CSS
description: Utilizza le variabili CSS di Bootstrap Italia per personalizzare la libreria a runtime.
---

## Introduzione

Dalla versione 3, Bootstrap Italia usa le CSS custom properties (o variabili CSS) per definire gli stili degli elementi e componenti della libreria. Questo consente di personalizzare ogni aspetto dell'interfaccia a runtime senza la necessità di ricompilare i file SCSS. Ad esempio, per cambiare il colore del testo primario, basta sovrascrivere la variabile `--bsi-color-text-primary` nel tuo CSS o SCSS dedicato. 

Questo approccio sostituisce il sistema precedente basato su variabili Sass, consentendo una personalizzazione più semplice.

Tutte le variabili CSS di Bootstrap Italia usano il prefisso `bsi-`.

## Variabili globali
 
Queste variabili sono definite nel file `_root.scss` della libreria e possono essere usate in qualsiasi punto del codice CSS della libreria. Il file `_root.scss` è incluso in `bootstrap-italia.scss`.



```scss

```

## Variabili di componente

Le variabili CSS dei componenti sono definite all'inizio del relativo codice SCSS nel file `src/scss/components/nome-componente.scss`.

Esempio delle variabili CSS del componente alert:

```scss
// Component: alert
//
// Description: Component styles for alert

.alert {
  --#{$prefix}alert-background-color: var(--#{$prefix}color-background-inverse); // Controls the background color for the alert, using color tokens.
  --#{$prefix}alert-border-color: var(--#{$prefix}color-border-secondary); // Controls the external border color for the alert, using color tokens.
  --#{$prefix}alert-border-size: 0.5rem; // Controls the border size for the alert.
  --#{$prefix}alert-heading-color: var(--#{$prefix}color-text-base); // Controls the heading color for the alert, using color tokens.
  --#{$prefix}alert-icon-spacing: var(--#{$prefix}icon-spacing); // Controls the icon spacing for the alert, using spacing tokens.
  --#{$prefix}alert-spacing-inset: var(--#{$prefix}spacing-s); // Controls the inset spacing for the alert, using spacing tokens.
  --#{$prefix}alert-spacing-inset-extra: var(--#{$prefix}spacing-xxl); // Controls the extra inset spacing for the alert, using spacing tokens.
  --#{$prefix}alert-spacing-outside: var(--#{$prefix}spacing-m); // Controls the outside spacing for the alert, using spacing tokens.
  --#{$prefix}alert-text-color: var(--#{$prefix}color-text-base); // Controls the text color for the alert, using color tokens.
}
```
Nel caso di componenti con varianti, le variabili sono gestite secondo una logica dinamica. Vai alla sezione [Gestire i cambiamenti](#gestire-i-cambiamenti) per approfondirla.

Le variabili CSS dei componenti sono comunque documentate in una tabella **Properties** all'interno della relativa pagina di documentazione.

## Gestire i cambiamenti

Quando si personalizza una variabile CSS, è importante distinguere se la variabile è **dinamica** o **statica**.

Una variabile statica ha un valore fisso, mentre valore in base al breakpoint o a condizioni specifiche.

Bootstrap Italia 3 segue la filosofia di definire le proprietà una sola volta e poi gestire i cambiamenti modificando solo il valore.


### Variabili Dinamiche

Le variabili dinamiche cambiano valore in base a due condizioni:
- breakpoint per il responsive design
- varianti di componente in cui cambia il selettore

#### Variabile dinamica responsive

Ad esempio, la dimensione responsive dei titoli da `h1` a `h6` è gestita esclusivamenteall'interno del file `_root.scss`:

```scss

/* _root.scss */
:root {
  --#{$prefix}heading-1-font-size: #{tokens.$it-heading-1-font-size};
  --#{$prefix}heading-2-font-size: #{tokens.$it-heading-2-font-size};
  --#{$prefix}heading-3-font-size: #{tokens.$it-heading-3-font-size};
  --#{$prefix}heading-4-font-size: #{tokens.$it-heading-4-font-size};
  --#{$prefix}heading-5-font-size: #{tokens.$it-heading-5-font-size};
  --#{$prefix}heading-6-font-size: #{tokens.$it-heading-6-font-size};

  @include media-breakpoint-up(sm) {
    --#{$prefix}heading-1-font-size: #{tokens.$it-heading-1-font-size-l};
    --#{$prefix}heading-2-font-size: #{tokens.$it-heading-2-font-size-l};
    --#{$prefix}heading-3-font-size: #{tokens.$it-heading-3-font-size-l};
    --#{$prefix}heading-4-font-size: #{tokens.$it-heading-4-font-size-l};
    --#{$prefix}heading-5-font-size: #{tokens.$it-heading-5-font-size-l};
    --#{$prefix}heading-6-font-size: #{tokens.$it-heading-6-font-size-l};
  }
}
```

Nel file `_type.scss`, la proprietà `font-size` dei titoli è dichiarata una volta sola per ciascun selettore di titolo:

```scss
/* _type.scss */
h1,
.h1 {
  font-size: var(--#{$prefix}heading-1-font-size);
}

h2,
.h2 {
  font-size: var(--#{$prefix}heading-2-font-size);
}
```

#### Variabile dinamica per varianti di componente

Nel caso di varianti di componente, la variabile cambia valore in base al selettore applicato. Ad esempio, il background di un pulsante pulsante `.btn` è trasparente di default, mentre nella variante `.btn-primary` è blu:

```scss
/* _buttons.scss */
.btn {
  --#{$prefix}btn-background: transparent; // Controls the background for the button.
}

.btn-primary {
  --#{$prefix}btn-background: var(--#{$prefix}color-background-secondary);;
}
```

Le varianti interessate da questa logica sono diverse e variano a seconda del componente. È quindi necessario verificare nella documentazione di ogni componente se la variabile è dinamica o statica.
