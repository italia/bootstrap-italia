---
layout: docs
group: utilites
toc: true

title: Colori
description: Una serie di classi di utilità per applicare colori a testi e sfondi.
---

{% capture callout %}

#### Accessibilità

Il colore è uno degli strumenti principali per la trasmissione delle informazioni, ma non dimenticare mai di affiancare all'uso del colore altri mezzi più espliciti. 
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Bootstrap Italia eredita gli stessi meccanismi per la gestione dei colori di Bootstrap {{ site.bootstrap_version }}, dove i colori del tema sono descritti attraverso una variabile Sass nominata `$theme-colors`.

La principale novità introdotta da Bootstrap Italia è una serie di varianti della tonalità primaria _primary_ basate sullo spazio colore [HSB](https://it.wikipedia.org/wiki/Hue_Saturation_Brightness) (coincidente con il modello HSV).

Questo permette di avere a disposizione 16 diverse varianti "monocromatiche" (in quanto _hue_ e, in gran parte anche _saturation_ rimangono invariate) che, essendo aggiunte alla lista di $theme-colors, sono disponibili per tutti quei componenti ed utilità che ne fanno uso, come ad esempio `.text-` e `.bg-*`.

Puoi trovare maggiori informazioni sulla palette di colori a disposizione alla pagina [Colori Custom]({{ site.baseurl }}/docs/utilities/colori-custom/).

## Colore del testo

{% comment %}Example name: Testo{% endcomment %}
{% capture example %}
{% for color in site.data.theme-colors %}
<p class="p-3 mb-2 text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}

<p class="p-3 mb-2 text-muted">.text-muted</p>

<p class="p-3 mb-2 text-white bg-dark">.text-white</p>
{% endcapture %}{% include example.html content=example %}

## Colore di sfondo

Allo stesso modo di quanto avviene per il testo, le classi `bg-*` permettono di colorare lo sfondo di un elemento; le classi per gli sfondi **non hanno alcun impatto sulla proprietà `color`**, per cui in alcuni casi sarà necessario affiancarle alle classi `.text-*`.

{% comment %}Example name: Sfondo{% endcomment %}
{% capture example %}
{% for color in site.data.theme-colors %}

<div class="p-3 mb-2 bg-{{ color.name }} text-white">.bg-{{ color.name }}</div>{% endfor %}

<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
{% endcapture %}{% include example.html content=example %}

### Colore di sfondo con gradiente

Bootstrap Italia eredita da Bootstrap la possibilità di avere sfondi con gradiente. Tale funzionalità non è però attiva, e va esplicitamente impostata attraverso la variabile SASS `$enable-gradients`, e ricompilando i file sorgente.

Si possono trovare maggiori informazioni a riguardo sul [sito di Bootstrap](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/utilities/colors/#background-gradient).

{% include callout-warning-color-assistive-technologies.md %}
