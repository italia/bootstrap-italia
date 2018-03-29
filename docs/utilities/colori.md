---
layout: docs
title: Colori
description: Una serie di classi di utilità per applicare colori a testi e sfondi.
group: utilities
toc: true
---

<div class="alert alert-danger" role="alert">Quest'area potrebbe subire sostanziali modifiche.</div>

{% callout accessibility %}
#### Accessibilità

Il colore è uno degli strumenti principali per la trasmissione delle informazioni, ma non dimenticare mai di affiancare all'uso del colore altri mezzi più espliciti. Leggi le [Linee Guida di design](http://design-italia.readthedocs.io/it/stable/doc/service-design/accessibilita.html#un-esempio-per-capire-uso-del-colore) per maggiori informazioni.
{% endcallout %}

Bootstrap Italia eredita gli stessi meccanisimi per la gestione dei colori di Bootstrap  4, dove i colori del tema sono descritti attraverso una variabile Sass nominata `$theme-colors`.

La principale novità introdotta da Bootstrap Italia è una serie di varianti della tonalità primaria _primary_ basate sullo spazio colore [HSB](https://it.wikipedia.org/wiki/Hue_Saturation_Brightness) (coincidente con il modello HSV).

Questo permette di avere a disposizione 16 diverse varianti "monocromatiche" (in quanto _hue_ e, in gran parte anche _saturation_ rimangono invariate) che, essendo aggiunte alla lista di $theme-colors, sono disponibili per tutti quei componenti ed utilità che ne fanno uso, come ad esempio `.text-` e `.bg-*` illustrati di seguito.

## Colore del testo

{% capture example %}
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
{% endcapture %}{% include example.html content=example %}

## Colore di sfondo

Allo stesso modo di quanto avviene per il testo, le classi `bg-*` permettono di colorare lo sfondo di un elemento; le classi per gli sfondi **non hanno alcun impatto sulla proprità `color`**, per cui in alcuni casi sarà necessario affiancarle alle classi `.text-*`.

{% capture example %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-{{ color.name }} {% if color.name == "light" or color.name == "warning" %}text-dark{% else %}text-white{% endif %}">.bg-{{ color.name }}</div>{% endfor %}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
{% endcapture %}{% include example.html content=example %}

### Colore di sfondo con gradiente

Bootstrap Italia eredita da Bootstrap la possibilità di avere comodamente sfondi con gradiente. Tale funzionalità è però disabilitata di default, e va esplicitamente attivata impostando la variabile Sass `$enable-gradients` a true, e ricompilando i CSS.

Si possono trovare maggiori informazioni a riguardo sul [sito di Bootstrap 4](https://getbootstrap.com/docs/4.0/utilities/colors/#background-gradient).

{% include callout-warning-color-assistive-technologies.md %}
