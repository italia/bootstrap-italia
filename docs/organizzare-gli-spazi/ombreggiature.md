---
layout: docs
title: Ombreggiature
description: Aggiungi o rimuovi ombreggiature con questa utility.
group: organizzare-gli-spazi
toc: false
---

Nonostante le ombreggiature siano disabilitate in Bootstrap e siano attivabili soltanto attraverso l'utilizzo della variabile `$enable-shadows`, è possibile aggiungere rapidamente un'ombreggiatura nella parte sottostante un elemento con le classi che seguono.

{% comment %}Example name: Varianti di profondità{% endcomment %}
{% capture example %}
<div class="shadow-none p-3 mb-5 bg-light">Nessuna ombra</div>
<div class="shadow-sm p-3 mb-5 bg-white">Ombra piccola</div>
<div class="shadow p-3 mb-5 bg-white">Ombra media</div>
<div class="shadow-lg p-3 mb-5 bg-white">Ombra grande</div>
{% endcapture %}
{% include example.html content=example %}
