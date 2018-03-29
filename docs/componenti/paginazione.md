---
layout: docs
title: Paginazione
description: Documentazione ed esempi del componente di paginazione utile per indicare una serie di contenuti correlati tra più pagine.
group: componenti
toc: true
---

## Panoramica

I collegamenti della paginazione sono contenuti per praticità in un elemento `<nav>` per dare la possibilità agli screenreader, e altre tecnologie assistive, di identificarli come una sezione di navigazione.

Poichè è molto probabile che la pagina possa contenere più di un elemento `<nav>` è consigliabile inserire un attributo `aria-label` con la descrizione del suo scopo. Ad esempio, se il componente di impaginazione viene utilizzato per navigare tra una serie di risultati di ricerca, un'etichetta appropriata potrebbe essere `aria-label="Pagine dei risultati di ricerca"`.

{% capture example %}
<nav aria-label="Esempio di navigazione della pagina">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Pagina precedente">
        <span class="it-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Pagina successiva">
        <span class="it-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Pagina successiva</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Stato disabilitato e attivo

I link della paginazione uno stato disabilitato usando la classe `.disabled` nel tag `<li>` per i collegamenti che appaiono non cliccabili e `.active` per indicare la pagina attiva corrente.

{% callout warning %}
##### Disabilitazione link

La classe `.disabled` usa `pointer-events: none` per provare a disabilitare l'attivazione dei comportamenti di default dei link `<a>`, ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane abilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è possibile aggiungere l'attributo `tabindex="-1"` e utilizzare Javascript per disabilitare le loro funzionalità.
In alternativa per la paginazione puoi sostituire il link disabilitato con uno `<span>` avente classe `page-link` (es.: `<span class="page-link">1</span>`).
{% endcallout %}

{% capture example %}
<nav aria-label="Esempio di paginazione">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">
        <i class="it-chevron-left"></i><span class="sr-only">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item active">
      <span class="page-link">
        <span class="d-inline-block d-sm-none">Pagina</span>
        1
        <span class="sr-only">corrente</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="it-chevron-right"></i><span class="sr-only">Pagina successiva</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Dimensione e allineamento

Sono previste due classi che permettono di aumentare (`.pagination-lg`) o diminuire (`.pagination-sm`) la dimensione della paginazione. Inoltre, grazie alle [utilità di Flexbox]({{ site.baseurl }}/docs/utilities/flex/), si può allineare facilmente il blocco.

{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-lg justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">
        <i class="it-chevron-left"></i><span class="sr-only">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item active">
      <span class="page-link">
        <span class="d-inline-block d-sm-none">Pagina</span>
        1
        <span class="sr-only">corrente</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="it-chevron-right"></i><span class="sr-only">Pagina successiva</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-sm justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">
        <i class="it-chevron-left"></i><span class="sr-only">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item active">
      <span class="page-link">
        <span class="d-inline-block d-sm-none">Pagina</span>
        1
        <span class="sr-only">corrente</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="it-chevron-right"></i><span class="sr-only">Pagina successiva</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Responsive

Con i dovuti accorgimenti sopraelencati e inserendo alcune classi delle [utilità display]({{ site.baseurl }}/docs/utilities/display/) si può trasformare la paginazione in base alla risoluzione del dispositivo in uso dell'utente.

{% capture example %}
<nav aria-label="Esempio di navigazione responsive della pagina">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="it-chevron-left"></i><span class="sr-only">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item d-none d-sm-block"><span class="p-3">...</span></li>
    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">9</a></li>
    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">10</a></li>
    <li class="page-item active">
      <span class="page-link">
        <span class="d-inline-block d-sm-none">Pagina</span>
        11
        <span class="sr-only">corrente</span>
      </span>
    </li>
    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">12</a></li>
    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">13</a></li>
    <li class="page-item d-none d-sm-block"><span class="p-3">...</span></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="it-chevron-right"></i><span class="sr-only">Pagina successiva</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}
