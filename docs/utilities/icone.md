---
layout: docs
group: utilites
toc: true

title: Icone
description: Informazioni e suggerimenti per l'utilizzo di icone con Bootstrap Italia.
---

Le icone di Bootstrap Italia utilizzano una sprite SVG, che contiene al suo interno tutte le icone, referenziate attraverso il tag `<use>` attraverso un'àncora.

Per l'utilizzo delle icone è necessario aggiungere la sprite presente nella libreria alla cartella `dist/svg` e utilizzarla come descritto di seguito, modificandone il path nell'attributo `xlink:href`, a seconda di dove viene copiata la sprite SVG nel proprio ambiente.

## Esempi

Ogni icona può essere inclusa semplicemente creando un tag `<svg>` con riferimento all'àncora desiderata: 

{% capture example %}
<svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-tool"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Dimensioni

Sono disponibili le classi `icon-*`, dove `*` può essere `xs`, `sm`, `lg`, `xl`, per ottenere icone di diverse dimensioni.

{% capture example %}
<svg class="bg-light icon icon-xs"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-xl"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

È anche possibile applicare la classe `icon-padded` all'icona per creare un padding proporzionale alla dimensione dell'icona attorno ad essa.

{% capture example %}
<svg class="bg-light icon icon-xs icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-sm icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-lg icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="bg-light icon icon-xl icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Colori

{% capture example %}
<svg class="icon icon-primary bg-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="icon icon-secondary bg-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="icon icon-success bg-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="icon icon-warning bg-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="icon icon-danger bg-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="icon icon-light bg-dark"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
<svg class="icon icon-white bg-dark"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Allineamenti

È possibile usare le classi di allineamento per posizionare le icone all'interno di un elemento. 

{% capture example %}
<div style="line-height: 4em;">
  <svg class="bg-light icon align-bottom"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
  <svg class="bg-light icon align-middle"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
  <svg class="bg-light icon align-top"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista delle icone disponibili

{% capture example %}
<div class="row">
  {% for icona in site.data.icons.regular %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
<h4 class="mt-4">Social</h4>
<div class="row">
  {% for icona in site.data.icons.social %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
<h4 class="mt-4">Extra</h4>
<div class="row">
  {% for icona in site.data.icons.extra %}
  <div class="col-12 col-md-6 col-lg-4">
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#{{icona}}"></use></svg> {{icona}}
  </div>{% endfor %}
</div>
{% endcapture %}{% include example.html content=example %}



