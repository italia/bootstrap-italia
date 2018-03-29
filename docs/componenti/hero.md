---
layout: docs
title: Hero
description: Lo Hero (ciò che Bootstrap definisce "Jumbotron") è un componente per la presentazione di contenuti in evidenza.
group: componenti
---

Il cosidetto _Hero_ è un componente leggero e flessibile che può facoltativamente estendere l'intera finestra per mostrare i messaggi in evidenza sul tuo sito.

{% capture example %}
<div class="hero">
  <h1 class="hero-heading display-4">Ciao, mondo!</h1>
  <p class="lead">Questa è una semplice unità hero, un semplice per richiamare un'attenzione particolare al contenuto o alle informazioni in primo piano.</p>
  <hr class="my-4">
  <p>Utilizza le classi di utilità per la tipografia e la spaziatura per l'ingombro del contenuto all'interno del contenitore più grande.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Per saperne di più</a>
  </p>
</div>
{% endcapture %}{% include example.html content=example %}

Per rendere il hero a larghezza intera, e senza angoli arrotondati, aggiungi la classe `.hero-fluid` e aggiungi all'interno un elemento `.container` o `.container-fluid`.

{% capture example %}
<div class="hero hero-fluid">
  <div class="container">
    <h1 class="hero-heading display-4">Hero fluido</h1>
    <p class="lead">Questo è un hero modificato che occupa l'intero spazio orizzontale del suo contenitore.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
