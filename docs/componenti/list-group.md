---
layout: docs
title: Gruppo di elenchi
description: I gruppi di elenchi sono un componente flessibile e potente per la visualizzazione di una serie di contenuti. Modificale ed estendile per supportare all'interno qualsiasi contenuto. 
group: componenti
toc: true
---

## Esempio di base

Il gruppo di elenchi più semplice è un elenco non ordinato con voci di elenco e classi corrette. Componilo con le opzioni che seguono, o con il tuo CSS se necessario.

{% example html %}
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## Elementi attivi

Aggiungi `.active` a un `.list-group-item` per indicare la selezione attiva corrente.

{% example html %}
<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## Elementi disabilitati

Aggiungi `.disabled` a un `.list-group-item` per farlo _apparire_ disabilitato. Nota che alcuni elementi con `.disabled` richiederanno anche del codice JavaScript personalizzato per disabilitare completamente il loro evento click (e.g., link).

{% example html %}
<ul class="list-group">
  <li class="list-group-item disabled">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## Link e bottoni

Usa i tag `<a>` o i tag `<button>` per creare elementi di gruppi di elenchi _actionable_ con effetto hover, disabilitati, e stati attivi aggiungendo `.list-group-item-action`. Separiamo queste pseudo-classi per garantire che i gruppi di liste costituiti da elementi non interattivi (come i  `<li>` o i `<div>`) non forniscano un click o tap affordance.

Assicurati di **non usare la classe standard `.btn`**.

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
{% endexample %}

Con i `<button>`, puoi anche fare uso dell'attributo `disabled` invece della classe `.disabled`. Purtroppo, i tag `<a>` non supportano l'attributo disabled.

{% example html %}
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">
    Cras justo odio
  </button>
  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</div>
{% endexample %}

## Flush

Aggiungi `.list-group-flush` per rimuovere alcuni bordi e angoli stondati per eseguire il rendering degli elementi del gruppo da bordo a bordo in un contenitore padre (e.g., card).

{% example html %}
<ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
{% endexample %}

## Classi contestuali

Usa le classi contestuali per modellare gli elementi dell'elenco con uno sfondo e un colore.

{% example html %}
<ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>

  {% for color in site.data.theme-colors %}
  <li class="list-group-item list-group-item-{{ color.name }}">This is a {{ color.name }} list group item</li>{% endfor %}
</ul>
{% endexample %}

Le classi contestuali funzionano anche con `.list-group-item-action`. Qui puoi notare l'aggiunta degli stili hover non presenti nell'esempio precedente. È anche supportato lo stato `.active`; applicalo per indicare una selezione attiva su un elemento del gruppo di elenchi contestuali.

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

  {% for color in site.data.theme-colors %}
  <a href="#" class="list-group-item list-group-item-action list-group-item-{{ color.name }}">This is a {{ color.name }} list group item</a>{% endfor %}
</div>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Con i badge

Aggiungi badge a qualsiasi elemento del gruppo di elenchi per mostrare i conteggi, le attività non lette e altro ancora con l'aiuto di alcune [utilità]({{ site.baseurl }}/docs/utilities/flex/).

{% example html %}
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>
{% endexample %}

## Contenuto personalizzato

Aggiungi all'interno quasi ogni tipo di HTML, anche per gruppi di elenchi collegati come quello qui sotto, con l'aiuto delle [utilità di flexbox]({{ site.baseurl }}/docs/utilities/flex/).

{% example html %}
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Intestazione dell'elemento dell'elenco</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Intestazione dell'elemento dell'elenco</h5>
      <small class="text-muted">3 giorni fa</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Intestazione dell'elemento dell'elenco</h5>
      <small class="text-muted">3 giorni fa</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
</div>
{% endexample %}

## JavaScript behavior

Per questa sezione puoi fare riferimento alla [documentazione di Bootstrap](https://getbootstrap.com/docs/4.0/components/list-group/#javascript-behavior)






