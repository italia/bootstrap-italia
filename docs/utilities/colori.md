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

Bootstrap Italia eredita le classi di utilità `.text-*` e `.bg-*` di Bootstrap {{ site.bootstrap_version }}, basate sulla mappa `$theme-colors`, e le affianca a un sistema di **CSS custom properties** semantiche con prefisso `--bsi-` che governano i colori di tutti i componenti.

Le variabili CSS sono definite su `:root` e derivano dal pacchetto [`design-tokens-italia`](https://github.com/italia/design-tokens-italia), che contiene i valori in formato JSON, CSS e SCSS per i design token del Design System Italia.

Per informazioni su come personalizzare i colori del tema sovrascrivendo le variabili CSS — senza ricompilare i sorgenti SCSS — consulta la pagina [Personalizzazione dei colori]({{ site.baseurl }}/docs/personalizzare-la-libreria/colori/).

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
