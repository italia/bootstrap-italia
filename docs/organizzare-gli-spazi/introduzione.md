---
layout: docs
title: Introduzione
toc: false
description: Classi e utilità per organizzare gli spazi e il posizionamento di componenti all'interno di una pagina web.
group: organizzare-gli-spazi
redirect_from:
  - '/organizzare-gli-spazi/'
  - '/docs/organizzare-gli-spazi/'
---

In questa sezione è possibile trovare tutte le informazioni necessarie per organizzare gli spazi del tuo sito.

## Contenitori

Il contenitore, o _"container"_, è uno degli elementi base nell'utilizzo di Bootstrap Italia, ed è **richiesto quando si utilizza il [grid system]({{ site.baseurl }}/docs/organizzare-gli-spazi/griglie/)**.

La prima scelta è tra un container a larghezza _fissa_, la cui `max-width` cambia ad ogni breakpoint, o _fluida_, la cui larghezza rimane al 100% per ogni dimensione del viewport.

<div class="bd-example">
  <div class="bd-example-container">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

```html
<div class="container">
  <!-- Contenuto -->
</div>
```

Utilizzando la classe `.container-fluid` esso occuperà in larghezza tutta l'area a sua disposizione.

<div class="bd-example">
  <div class="bd-example-container bd-example-container-fluid">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

```html
<div class="container-fluid">...</div>
```

## Contenitori responsive

Bootstrap Italia mette a disposizione i contenitori responsive, classi che ti consentono di specificare la larghezza del contenitore al 100% fino al raggiungimento del breakpoint, dopodiché viene applicata la larghezza massima in base al punto di interruzione.

```html
<div class="container-sm">...</div>
<div class="container-md">...</div>
<div class="container-lg">...</div>
<div class="container-xl">...</div>
<div class="container-xxl">...</div>
```

_NB: Se si sta usando una versione di Bootstrap Italia basata su Bootstrap 4, la classe `.container-xxl` non sarà presente._

## Responsive breakpoints

Visto che la progettazione web è bene venga gestita _mobile-first_, in Bootstrap Italia sono definite alcune [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) per definire breakpoints ai quali il layout si modifica. Questi breakpoints sono basati sulla dimensione minima del viewport e permettono di scalare verso l'alto quando la dimensione della finestra aumenta.

Bootstrap Italia utilizza le seguenti media query per definire i breakpoint usati nelle sue griglie e componenti.

```scss
// Schermi piccoli (meno di 576px)
// Non è necessaria alcuna media query, in quanto la progettazione mobile-first fa sì che questo sia il codice di default

// Schermi medio-piccoli (almeno 576px)
@media (min-width: 576px) { ... }

// Schermi medi (almeno 768px)
@media (min-width: 768px) { ... }

// Schermi grandi (almeno 992px)
@media (min-width: 992px) { ... }

// Schermi molto grandi (almeno 1200px)
@media (min-width: 1200px) { ... }

// Schermi grandissimi (almeno 1400px)
@media (min-width: 1400px) { ... }
```

Quando scriviamo il codice sorgente in Sass, tutte le media query sono già disponibili tramite i seguenti mixin:

```scss
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Esempio di utilizzo:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}
```

In casi eccezionali, è possibile utilizzare le media query che vanno nella direzione opposta (la dimensione dello schermo _o inferiore_):

```scss
// Schermi piccoli (meno di 576px)
@media (max-width: 575.98px) { ... }

// Schermi medio-piccoli (meno di 768px)
@media (max-width: 767.98px) { ... }

// Schermi medi (meno di 992px)
@media (max-width: 991.98px) { ... }

// Schermi grandi (meno di 1200px)
@media (max-width: 1199.98px) { ... }

// Schermi molto grandi (meno di  1400px)
@media (max-width: 1399.98px) { ... }

// Schermi grandissimi (uguale o più di 1400px)
// Non è necessaria alcuna media query, in quanto la progettazione per schermi molto grandi fa sì che questo sia il codice di default
```

{% capture callout %}
Si noti che, dal momento che i browser non supportano attualmente i [range context queries](https://www.w3.org/TR/mediaqueries-4/#range-context),
stiamo evitando di utilizzare i limiti dei [prefissi `min-` e `max-`](https://www.w3.org/TR/mediaqueries-4/#mq-min-max)
e viewports con larghezze frazionarie (che per esempio possono verificarsi in determinate condizioni su dispositivi ad alta
risoluzione), utilizzando valori con maggiore precisione per questi confronti.
{% endcapture %}{% include callout.html content=callout type="info" %}

Come sopra, quando si scrive il codice sorgente in Sass, tutte le media query sono già disponibili tramite i seguenti mixin:

```scss
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }
```

Sono previste anche media query e mixin per il targeting di un singolo segmento di dimensioni dello schermo utilizzando
la larghezza minima e massima dei breakpoint.

```scss
// Schermi piccoli (meno di 576px)
@media (max-width: 575.98px) { ... }

// Schermi medio-piccoli (da 576px a meno di 768px)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Schermi medi (da 768px a meno di 992px)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Schermi grandi (da 992px a meno di 1200px)
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

// Schermi molto grandi (da 1200px in su)
@media (min-width: 1200px) { ... }
```

Anche queste media query sono disponibili tramite Sass mixin:

```scss
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
```

Similmente le media query possono estendersi su più breakpoint:

```scss
// Esempio
// Applica gli stili partendo da uno schermo medio fino a uno grande
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```

Per ottenere il mixin Sass di questo stesso range:

```scss
@include media-breakpoint-between(md, xl) { ... }
```

## Z-index

Alcuni componenti Bootstrap Italia utilizzano `z-index`, la proprietà CSS che aiuta a controllare il layout fornendo un
terzo livello di asse per organizzare graficamente il contenuto. Utilizziamo una scala graduale z-index predefinita che
è stata progettata per stratificare correttamente navigazione, tooltip, popover, finestre modali e altro ancora.

Questi valori partono da un numero arbitrario, alto e abbastanza specifico, per evitare idealmente conflitti. Abbiamo un
set standard di questi valori attraverso i quali i componenti coesistano a diversi livelli (tooltip, popover, navbar,
dropdown, finestre modali) in modo da potersi comportare coerentemente tra loro.

Si scoraggia di personalizzare singolarmente questi valori; se dovessi cambiarne uno, probabilmente dovrai cambiarli tutti.

```scss
$zindex-dropdown: 1000 !default;
$zindex-sticky: 1020 !default;
$zindex-fixed: 1030 !default;
$zindex-modal-backdrop: 1040 !default;
$zindex-modal: 1050 !default;
$zindex-popover: 1060 !default;
$zindex-tooltip: 1070 !default;
```

Per gestire i bordi sovrapposti all'interno dei componenti (es.: pulsanti e input nei gruppi di input) occorre utilizzare i valori
di `z-index` a una sola cifra di `1`,` 2` e `3` per default, hover e stati attivi. Al passaggio del mouse/focus/active
portiamo un particolare elemento in primo piano con un valore più alto di 'z-index` per mostrare il loro confine sugli
elementi di pari livello.

---

## Modificare Display

Utilizza le [display utility]({{ site.baseurl }}/docs/organizzare-gli-spazi/display/) insieme al grid system, i contenuti o i
componenti in modo responsive, potrai visualizzare o nascondere questi elementi in determinati viewport.

## Opzioni Flexbox

Bootstrap Italia è realizzato con flexbox, ma non tutti i `display` utilizzano `display: flex` in quanto ciò avrebbe
costretto a molti override non necessari.

Se si ritiene necessario aggiungere `display: flex` a un elemento è possibile farlo con `.d-flex` o una delle sue varianti
responsive (es.: `.d-sm-flex`). Saranno necessarie le classi `display` per consentire l'uso delle
[utility flexbox]({{ site.baseurl }}/docs/organizzare-gli-spazi/flex/) per così modificarne il dimensionamento, l'allineamento, la
spaziatura e altro ancora.

## Margin e padding

Si utilizzino il `margin` e `padding` delle [utility spaziatura]({{ site.baseurl }}/docs/organizzare-gli-spazi/spaziature/) per gestire spazi
e dimensioni di elementi e componenti. Bootstrap Italia include una scala a cinque livelli per queste utility basata su
una variabile predefinita `$spacer` di valore `16px`.

Si scelgano quindi i valori per tutti i viewport (es.: `.me-3` per `margin-right: 16px`), o le varianti responsive per viewport
specifici (es.: `.me-md-3` per `margin-right: 16px` a partire dal breakpoint `md`).

## Modificare la visibilità

Quando è necessario nascondere o rendere visibile un elemento si possono usare le [utility di visibilità]({{ site.baseurl }}/docs/organizzare-gli-spazi/display/#visibilità).

Gli elementi invisibili influenzano ancora il layout della pagina, ma sono visivamente nascosti ai visitatori.
