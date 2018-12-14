---
layout: docs
title: Spaziatura
description: Una vasta gamma di classi per la gestione di 'padding' e 'margin' anche in ottica responsive.
group: organizzare-gli-spazi
toc: true
---

## Come funziona

Assegna agli elementi per impostare i valori di `margin` o di `padding` con le classi apposite per le singole proprietà o
per coppie di proprietà in base alla direzione (`x` e `y` per orizzontale e verticale).
 
Le dimensioni delle spaziature possono variare da `.25rem` a `3rem`. Questo si traduce in diversi valori tra mobile e
desktop, visto che il tema Bootstrap-Italia usa un font-size di base di 16px per dispositivi mobili e 18px per dispositivi
desktop.

## Note

Le classi che sono applicabili per tutti i breakpoint da `xs` to `xl` non hanno alcun breakpoint nei loro nome, poiché
sono applicate da `min-width: 0` in su, e quindi non sono legate a media query.

Le classi sono denominate utilizzando il formato `{proprietà}{lato}-{dimensione}` per `xs` e
`{proprietà}{lato}-{breakpoint}-{dimensione}` per `sm`, `md`, `lg`, e `xl`.

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

Ecco alcuni esempi di utilizzo delle classi di spaziatura:

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
  <div class="mx-auto border bg-dark text-white text-center" style="width: 200px;">
    Elemento centrato
  </div>
</div>

{% highlight html %}
<div class="mx-auto border bg-dark text-white text-center" style="width: 200px;">
  Elemento centrato
</div>
{% endhighlight %}
