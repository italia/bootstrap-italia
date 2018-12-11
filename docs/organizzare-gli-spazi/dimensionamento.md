---
layout: docs
title: Dimensionamento
description: Per dare larghezza o altezza a un elemento in relazione al contenitore padre.
group: organizzare-gli-spazi
toc: true
---

## Larghezza fissa

Le grandezze di default presenti sono: `25%`, `50%`, `75%` e `100%`.

{% capture example %}
<div class="border">
  <div class="bg-primary text-white p-3 w-100">Width 100%</div>
  <div class="bg-primary text-white p-3 w-75">Width 75%</div>
  <div class="bg-primary text-white p-3 w-50">Width 50%</div>
  <div class="bg-primary text-white p-3 w-25">Width 25%</div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="border" style="height: 200px;">
  <div class="bg-primary text-white text-center h-100 d-inline-block" style="width: 120px;">Height 100%</div>
  <div class="bg-primary text-white text-center h-75 d-inline-block" style="width: 120px;">Height 75%</div>
  <div class="bg-primary text-white text-center h-50 d-inline-block" style="width: 120px;">Height 50%</div>
  <div class="bg-primary text-white text-center h-25 d-inline-block" style="width: 120px;">Height 25%</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Larghezza massima

Sono previste anche le classi `mw-100` e `mh-100` per i corrispettivi `max-width: 100%;` e `max-height: 100%;`. 

{% capture example %}
<img class="mw-100" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="Max-width 100%">
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div style="height: 200px;">
  <div class="bg-primary text-white mh-100" style="width: 100px; height: 200px;">Max-height 100%</div>
</div>
{% endcapture %}{% include example.html content=example %}
