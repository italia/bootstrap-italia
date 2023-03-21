---
layout: docs
title: Dimensionamento
description: Per dare larghezza o altezza ad un elemento in relazione al contenitore padre.
group: organizzare-gli-spazi
toc: true
---

## Larghezza fissa

Le grandezze di default presenti sono: `25%`, `50%`, `75%` e `100%`.

{% comment %}Example name: Larghezza fissa{% endcomment %}
{% capture example %}
<div class="border">
  <div class="bg-primary text-white p-3 w-100">Width 100%</div>
  <div class="bg-primary text-white p-3 w-75">Width 75%</div>
  <div class="bg-primary text-white p-3 w-50">Width 50%</div>
  <div class="bg-primary text-white p-3 w-25">Width 25%</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Altezza fissa
Le altezze di default presenti sono: `25%`, `50%`, `75%` e `100%`.

{% comment %}Example name: Altezza fissa{% endcomment %}
{% capture example %}
<div class="border d-flex" style="height: 200px;">
  <div class="bg-primary text-white text-center h-100 d-inline-block" style="width: 120px;">Height 100%</div>
  <div class="bg-primary text-white text-center h-75 d-inline-block" style="width: 120px;">Height 75%</div>
  <div class="bg-primary text-white text-center h-50 d-inline-block" style="width: 120px;">Height 50%</div>
  <div class="bg-primary text-white text-center h-25 d-inline-block" style="width: 120px;">Height 25%</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Larghezza massima

Sono previste anche le classi `mw-100` e `mh-100` per i corrispettivi `max-width: 100%;` e `max-height: 100%;`.

{% comment %}Example name: Larghezza massima{% endcomment %}
{% capture example %}
<div style="width: 100px;">
 <div class="bg-primary text-white mw-100" style="width: 500px;">Max-width 100%</div>
</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Altezza massima{% endcomment %}
{% capture example %}
<div style="height: 100px;">
  <div class="bg-primary text-white mh-100" style="height: 400px;">Max-height 100%</div>
</div>
{% endcapture %}{% include example.html content=example %}
