---
layout: docs
title: Bordi
description: Modifica lo stile di bordi e il loro arrotondamento.
group: organizzare-gli-spazi
toc: true
---

Aggiungi o rimuovi il bordo a un elemento. Puoi scegliere fra un bordo completo oppure un lato alla volta, secondo una
logica aggiuntiva o sottrattiva.

### Aggiuntivo

<div class="bd-example-border-utils">
{% comment %}Example name: Aggiuntivo{% endcomment %}
{% capture example %}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{% endcapture %}{% include example.html content=example %}
</div>

### Sottrattivo

<div class="bd-example-border-utils bd-example-border-utils-0">
{% comment %}Example name: Sottrattivo{% endcomment %}
{% capture example %}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-end-0"></span>
<span class="border-bottom-0"></span>
<span class="border-start-0"></span>
{% endcapture %}{% include example.html content=example %}
</div>

## Colore dei bordi

Cambia il colore del bordo scegliendo dalla palette del tema utilizzato.

<div class="bd-example-border-utils">
{% comment %}Example name: Varianti di colore{% endcomment %}
{% capture example %}
{% for color in site.data.theme-colors %}
<span class="border border-{{ color.name }}"></span>{% endfor %}
<span class="border border-white"></span>
{% endcapture %}{% include example.html content=example %}
</div>

## Bordi arrotondati

Classi per arrotondare facilmente gli angoli di un elemento.

{% comment %}Example name: Arrotondati{% endcomment %}
{% capture example %}
  <img src="https://via.placeholder.com/75x75/ebebeb/808080/?text=Immagine" class="rounded" alt="Esempio di immagine arrotondata">
  <img src="https://via.placeholder.com/75x75/ebebeb/808080/?text=Immagine" class="rounded-top" alt="Esempio di immagine arrotondata in alto">
  <img src="https://via.placeholder.com/75x75/ebebeb/808080/?text=Immagine" class="rounded-end" alt="Esempio di immagine arrotondata a destra">
  <img src="https://via.placeholder.com/75x75/ebebeb/808080/?text=Immagine" class="rounded-bottom" alt="Esempio di immagine arrotondata in basso">
  <img src="https://via.placeholder.com/75x75/ebebeb/808080/?text=Immagine" class="rounded-start" alt="Esempio di immagine arrotondata a sinistra">
  <img src="https://via.placeholder.com/75x75/ebebeb/808080/?text=Immagine" class="rounded-circle" alt="Esempio di immagine arrotondata a cerchio">
  <img src="https://via.placeholder.com/75x75/ebebeb/808080/?text=Immagine" class="rounded-0" alt="Esempio di immagine non arrotondata (sovrascrive l'eventuale arrotondamento applicato precedentemente)">
  <img src="https://via.placeholder.com/150x75/ebebeb/808080/?text=Immagine" class="rounded-pill" alt="Esempio di immagine arrotondata a pillola">
{% endcapture %}{% include example.html content=example %}