---
layout: docs
title: Jumbotron
description: Componente leggero e flessibile per la presentazione di contenuti in stile hero.
group: componenti
---

Componente leggero e flessibile che può facoltativamente estendere l'intera finestra per mostrare i messaggi chiave di marketing sul tuo sito.

{% example html %}
<div class="jumbotron">
  <h1 class="display-4">Ciao, mondo!</h1>
  <p class="lead">Questa è una semplice unità hero, un semplice componente in stile jumbotron per richiamare un'attenzione particolare al contenuto o alle informazioni in primo piano.</p>
  <hr class="my-4">
  <p>Utilizza le classi di utilità per la tipografia e la spaziatura per l'ingombro del contenuto all'interno del contenitore più grande.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Per saperne di più</a>
  </p>
</div>
{% endexample %}

Per rendere il jumbotron a larghezza intera, e senza angoli arrotondati, aggiungi la classe `.jumbotron-fluid` e aggiungi all'interno un elemento `.container` o `.container-fluid`.

{% example html %}
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Jumbotron fluido</h1>
    <p class="lead">Questo è un jumbotron modificato che occupa l'intero spazio orizzontale del suo contenitore.</p>
  </div>
</div>
{% endexample %}
