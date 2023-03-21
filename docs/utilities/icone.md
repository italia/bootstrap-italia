---
layout: docs
group: utilites
toc: true

title: Icone
description: Informazioni e suggerimenti per l'utilizzo di icone con Bootstrap Italia.
---

Le icone di Bootstrap Italia utilizzano uno sprite SVG, che contiene al suo interno tutte le icone, referenziate con un'àncora attraverso il tag `<use>`.

Per l'utilizzo delle icone è necessario aggiungere lo sprite presente nella libreria alla cartella `dist/svg` e utilizzarlo come descritto di seguito, modificandone il path nell'attributo `href`, a seconda di dove viene copiato la sprite SVG nel proprio ambiente.

{% capture callout %}

#### Compatibilità con browser meno recenti

L'attributo `xlink:href` utilizzato nelle precedenti versioni della libreria è stato deprecato dal W3C in favore dell'attributo `href`. I browser meno recenti non supportano quest'ultimo, come indicato su [caniuse.com](https://caniuse.com/mdn-svg_elements_use_href). Per garantire la piena compatibilità con questi browser è consigliabile utilizzare entrambi gli attributi.

Il [primo esempio](#esempi) in pagina utilizza questo approccio.

Approfondisci l'argomento sul sito del W3C [WAI-ARIA Authoring Practices](https://www.w3.org/TR/SVG2/linking.html#XLinkRefAttrs) e su [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use#attributes).
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Esempi

Ogni icona può essere inclusa semplicemente creando un tag `<svg>` con riferimento all'àncora desiderata. In questo primo esempio utilizzeremo sia l'attributo `href` che `xlink:href` per compatibilità con i browser obsoleti:

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-tool" xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-tool"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Dimensioni

Sono disponibili le classi `icon-*`, dove `*` può essere `xs`, `sm`, `lg`, `xl`, per ottenere icone di diverse dimensioni.

{% comment %}Example name: Varianti dimensioni{% endcomment %}
{% capture example %}
<svg class="bg-light icon icon-xs"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-lg"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-xl"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

È anche possibile applicare la classe `icon-padded` all'icona per creare un padding proporzionale alla dimensione dell'icona attorno ad essa.

{% comment %}Example name: Varianti dimensioni, con padding{% endcomment %}
{% capture example %}
<svg class="bg-light icon icon-xs icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-sm icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-lg icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-xl icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Colori

{% comment %}Example name: Varianti colori{% endcomment %}
{% capture example %}
<svg class="icon icon-primary bg-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-secondary bg-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-success bg-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-warning bg-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-danger bg-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-light bg-dark"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-white bg-dark"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Allineamenti

È possibile usare le classi di allineamento per posizionare le icone all'interno di un elemento.

{% comment %}Example name: Allineamenti{% endcomment %}
{% capture example %}
<div style="line-height: 4em;">
  <svg class="bg-light icon align-bottom"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
  <svg class="bg-light icon align-middle"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
  <svg class="bg-light icon align-top"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista delle icone disponibili

{% comment %}Example name: Icone disponibili{% endcomment %}
{% capture example %}
<div class="row">
  {% for icona in site.data.icons.regular %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
<h4 class="mt-4">File</h4>
<div class="row">
  {% for icona in site.data.icons.files %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
<h4 class="mt-4">Piattaforme</h4>
<div class="row">
  {% for icona in site.data.icons.platforms %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
<h4 class="mt-4">Extra</h4>
<div class="row">
  {% for icona in site.data.icons.extra %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
{% endcapture %}{% include example.html content=example %}
