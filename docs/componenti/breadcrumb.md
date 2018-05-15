---
layout: docs
title: Breadcrumb
description: Indica la posizione della pagina corrente all'interno di una gerarchia di navigazione.
group: componenti
---

## Breadcrumb basic

Nella breadcrumb c'è la possibilità di scegliere il carattere da usare come separatore inserendolo all'interno del tag `<span class="separator">`

{% capture example %}
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item"><a href="#">Subsection</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Current section</a>
    </li>
  </ol>
</nav>

 <nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">&gt;</span>
    </li>
    <li class="breadcrumb-item"><a href="#">Subsection</a><span class="separator">&gt;</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Current section</a>
    </li>
  </ol>
</nav>
{% endcapture %}{% include example.html content=example %}

## Breadcrumb with icon

Per aggiungere un icona all'elemento breadcrumb è sufficiente inserire il tag `<i class="(classeicona)">` prima del tag `<a>` con la classe dell'icona che si intende visualizzare.

{% capture example %}
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><i class="it-favorite"></i><a href="#">Home</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item"><i class="it-favorite"></i><a href="#">Subsection</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><i class="it-favorite"></i><a href="#">Current section</a>
    </li>
  </ol>
</nav>
{% endcapture %}{% include example.html content=example %}

## Breadcrumb su sfondo scuro

Per la versione su sfondo scuro delle breadcrumbs è sufficiente aggiungere al tag `<ol class="breadcrumb">` la classe `.dark`

{% capture example %}
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb dark">
    <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item"><a href="#">Subsection</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><a href="#">Current section</a>
    </li>
  </ol>
</nav>

<hr>
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb dark">
    <li class="breadcrumb-item"><i class="it-favorite"></i><a href="#">Home</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item"><i class="it-favorite"></i><a href="#">Subsection</a><span class="separator">/</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><i class="it-favorite"></i><a href="#">Current section</a>
    </li>
  </ol>
</nav>

<hr>
<nav class="breadcrumb-container" aria-label="breadcrumb">
  <ol class="breadcrumb dark">
    <li class="breadcrumb-item"><i class="it-favorite"></i><a href="#">Home</a><span class="separator">&gt;</span>
    </li>
    <li class="breadcrumb-item"><i class="it-favorite"></i><a href="#">Subsection</a><span class="separator">&gt;</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><i class="it-favorite"></i><a href="#">Current section</a>
    </li>
  </ol>
</nav>
{% endcapture %}{% include example.html content=example %}


## Accessibilità

Dato che le breadcrumb forniscono una navigazione, è buona idea aggiungere un'etichetta significativa come `aria-label="breadcrumb"` per descrivere il tipo di navigazione fornito nell'elemento `<nav>`, nonché applicare `aria-current="page"` all'ultimo elemento del set per indicare che rappresenta la pagina corrente.

Per maggiorni informazioni, guarda le [linee guida WAI-ARIA per la creazione di breadcrumb](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
