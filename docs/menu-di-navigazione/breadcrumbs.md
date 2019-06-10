---
layout: docs
title: Breadcrumbs
description: Indica la posizione della pagina corrente all'interno di una gerarchia di navigazione.
group: menu-di-navigazione
toc: true
---

Le breadcrumbs (in italiano, briciole di pane) mostrano la pagina corrente e danno la possibilità di risalire nella gerarchia delle pagine attraverso dei comodi link ai livelli superiori.

Nelle breadcrumbs c'è la possibilità di scegliere il carattere da usare come separatore inserendolo all'interno del tag `<span class="separator">`

{% capture callout %}
##### Accessibilità

Dato che le breadcrumb forniscono una navigazione, è buona idea aggiungere un'etichetta significativa come `aria-label="breadcrumb"` per descrivere il tipo di navigazione fornito nell'elemento `<nav>`, nonché applicare `aria-current="page"` all'ultimo elemento del set per indicare che rappresenta la pagina corrente.

Per maggiorni informazioni, guarda le [linee guida WAI-ARIA per la creazione di breadcrumb](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">/</span></li>
    <li class="breadcrumb-item"><a href="#">Subsection</a><span class="separator">/</span></li>
    <li class="breadcrumb-item active" aria-current="page">Current section</li>
  </ol>
</nav>

 <nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">&gt;</span></li>
    <li class="breadcrumb-item"><a href="#">Subsection</a><span class="separator">&gt;</span></li>
    <li class="breadcrumb-item active" aria-current="page">Current section</li>
  </ol>
</nav>
{% endcapture %}{% include example.html content=example %}

### Con icona

Per aggiungere un icona all'elemento breadcrumb è sufficiente inserire l'SVG corrispondente prima del tag `<a>` con la classe dell'icona che si intende visualizzare.

{% capture example %}
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><svg class="icon icon-sm icon-secondary align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg><a href="#">Home</a><span class="separator">/</span></li>
    <li class="breadcrumb-item"><svg class="icon icon-sm icon-secondary align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg><a href="#">Subsection</a><span class="separator">/</span></li>
    <li class="breadcrumb-item active" aria-current="page"><svg class="icon icon-sm icon-secondary align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg>Current section</li>
  </ol>
</nav>
{% endcapture %}{% include example.html content=example %}

### Su sfondo scuro

Per la versione su sfondo scuro delle breadcrumbs è sufficiente aggiungere al tag `<ol class="breadcrumb">` la classe `.dark`

{% capture example %}
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb dark">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">/</span></li>
    <li class="breadcrumb-item"><a href="#">Subsection</a><span class="separator">/</span></li>
    <li class="breadcrumb-item active" aria-current="page">Current section</li>
  </ol>
</nav>

<hr>
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb dark">
    <li class="breadcrumb-item"><svg class="icon icon-sm icon-white align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg><a href="#">Home</a><span class="separator">/</span></li>
    <li class="breadcrumb-item"><svg class="icon icon-sm icon-white align-top mr-1" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg><a href="#">Subsection</a><span class="separator">/</span></li>
    <li class="breadcrumb-item active" aria-current="page">Current section</li>
  </ol>
</nav>
{% endcapture %}{% include example.html content=example %}
