---
layout: docs
title: Spaziatura
description: Una vasta gamma di classi per la gestione del 'padding' e del 'margin' anche in ottica responsive.
group: utilities
toc: true
---

## Come funziona

Assegna agli elementi per impostare i valori di `margin` o di `padding` con le classi apposite.  ??? Le classi sono presenti nella mappa variabili Sass con un range che va da `.25rem` a `3rem`. (Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `3rem`.)

## Nota

Le classi sono applicabili per tutti i breakpoint da `xs` to `xl`. ??? (Spacing utilities that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.)

Le classi sono denominate utilizzando il formato `{proprietà}{lato}-{dimensione}` per `xs` e `{proprietà}{lato}-{breakpoint}-{dimensione}` per `sm`, `md`, `lg`, e `xl`.

Dove la *proprietà* è una tra:

* `m` - per le classi che impostano `margin`
* `p` - per le classi che impostano `padding`

Dove uno dei *lati* è tra:

* `t` - per le classi che impostano `margin-top` o `padding-top`
* `b` - per le classi che impostano `margin-bottom` o `padding-bottom`
* `l` - per le classi che impostano `margin-left` o `padding-left`
* `r` - per le classi che impostano `margin-right` o `padding-right`
* `x` - per le classi che impostano insieme `*-left` e `*-right`
* `y` - per le classi che impostano insieme `*-top` e `*-bottom`
* blank - per le classi che impostano `margin` o `padding` su tutti e quattro i lati dell'elemento

Dove la *dimensione* è una tra:

* `0` - per le classi che eliminano `margin` o `padding` impostandolo a `0`
* `1` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * .25`
* `2` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * .5`
* `3` - (di default) per le classi che impostano `margin` o `padding` a `$spacer`
* `4` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * 1.5`
* `5` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * 3`
* `auto` - per le classi che impostano `margin` ad auto

(Puoi aggiungere dimensioni inserendo nuovi `$spacers` nella mappa variabili di Sass.)

## Esempi

Ecco alcuni esempi delle classi di spaziatura:

{% highlight scss %}
.mt-0 {
  margin-top: 0 !important;
}

.ml-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
{% endhighlight %}

### Centratura orizzontale

Per centrare orizzontalmente un elemento con una larghezza fissa e `display: block` puoi utilizzare la classe `.mx-auto` che imposta i margini laterali ad `auto`.

<div class="bd-example">
  <div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Elemento centrato
  </div>
</div>

{% highlight html %}
<div class="mx-auto" style="width: 200px;">
  Elemento centrato
</div>
{% endhighlight %}
