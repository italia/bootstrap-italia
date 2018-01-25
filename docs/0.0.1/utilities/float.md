---
layout: docs
title: Float
description: Gestisci i float di qualsiasi elemento con le classi apposite
group: utilities
toc: true
---

## Panoramica

Queste classi permettono di dare a un elemento il `float` a sinistra, a destra o di disabilitarlo. `!important` è incluso nelle classi per evitare problemi di ereditarietà pregressa.

## Classi

Attiva o disattiva il `float` con le seguenti classi:

{% example html %}
<div class="float-left">Esempio di float a sinistra per tutte le dimensioni</div><br>
<div class="float-right">Esempio di float a destra per tutte le dimensioni</div><br>
<div class="float-none">Float disattivo per tutte le dimensioni</div>
{% endexample %}

## Mixins

O tramite Sass mixin:

{% highlight scss %}
.element {
  @include float-left;
}
.another-element {
  @include float-right;
}
.one-more {
  @include float-none;
}
{% endhighlight %}

## Responsive

Esistono variazioni delle classi `float` per i vari tipi di dimensione dello schermo.

{% example html %}
<div class="float-sm-left">Esempio di float a sinistra per dimensioni SM (small) o maggiori.</div><br>
<div class="float-md-left">Esempio di float a sinistra per dimensioni MD (medium) o maggiori.</div><br>
<div class="float-lg-left">Esempio di float a sinistra per dimensioni LG (large)  o maggiori.</div><br>
<div class="float-xl-left">Esempio di float a sinistra per dimensioni XL (extra-large) o maggiori.</div><br>
{% endexample %}

Di seguito l'elenco completo delle classi a disposizione:

{% for bp in site.data.breakpoints %}
- `.float{{ bp.abbr }}-left`
- `.float{{ bp.abbr }}-right`
- `.float{{ bp.abbr }}-none`{% endfor %}
