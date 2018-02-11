---
layout: docs
title: Barre di avanzamento
description: Documentazione ed esempi per l'utilizzo e personalizzazione delle barre di avanzamento.
group: componenti
toc: true
---

I componenti di avanzamento progressivo sono costruiti con due elementi HTML, alcuni CSS per impostare la larghezza e alcuni attributi. Non è previsto l'utilizzo dell'elemento [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) di HTML5.

- Utilizziamo `.progress` come contenitore che indica il valore massimo della barra di avanzamento.
- Utilizziamo `.progress-bar` come barra interna per indicare fin dove si è arrivati con l'avanzamento.
- La classe `.progress-bar` richiede uno stile inline, una classe di utility di dimensionamento o un CSS personalizzato per impostare la larghezza.
- Per rendere accessibile l'elemento `.progress-bar` sono necessari alcuni attributi come `role` e `aria`.

{% example html %}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

Sono utilizzate le classi previste nelle [utility di dimensionamento]({{ site.baseurl }}/docs/utilities/sizing/) per poter settare i vari avanzamenti.

{% example html %}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## Etichette

Aggiungi le etichette alle barre di avanzamento posizionando il testo all'interno di `.progress-bar`.

{% example html %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{% endexample %}

## Altezza

Può essere impostato un solo valore `height` su `.progress`, quindi se cambi questo valore il `.progress-bar` interno verrà automaticamente ridimensionato di conseguenza.

{% example html %}
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 10px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## Background

Puoi modificare il colore dello sfondo delle singole barre di avanzamento tramite le classi delle [utility background]({{ site.baseurl }}/docs/utilities/colors/#background-color)

{% example html %}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## Altre personalizzazioni

Per ulteriori personalizzazioni della barra di avanzamento si rimanda alla sezione [componente progress](https://getbootstrap.com/docs/4.0/components/progress/) del sito di Bootstrap.
