---
layout: docs
title: Breadcrumb
description: Indica la posizione della pagina corrente all'interno di una gerarchia di navigazione che aggiunge automaticamente i separatori tramite CSS.
group: componenti
---

## Panoramica

I separatori vengono aggiunti automaticamente in CSS tramite [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) e [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).

{% example html %}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endexample %}

## Accessibilità

Dato che i breadcrumb forniscono una navigazione, è buona idea aggiungere un'etichetta significativa come `aria-label="breadcrumb"` per descrivere il tipo di navigazione fornito nell'elemento `<nav>`, nonché applicare `aria-current="page"` all'ultimo elemento del set per indicare che rappresenta la pagina corrente.

Per maggiorni informazioni, guarda il [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
