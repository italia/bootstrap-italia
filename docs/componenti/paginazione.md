---
layout: docs
title: Paginazione
description: Documentazione ed esempi del componente di paginazione utile per indicare una serie di contenuti correlati tra più pagine.
group: componenti
toc: true
---

## Panoramica

I collegamenti della paginazione sono contenuti per praticità in un elemento `<nav class="pagination-wrapper">` per dare la possibilità agli screenreader, e altre tecnologie assistive, di identificarli come una sezione di navigazione.

{% capture callout %}

#### Accessibilità

Poiché è molto probabile che la pagina possa contenere più di un elemento `<nav class="pagination-wrapper">` è consigliabile inserire un attributo `aria-label` con la descrizione del suo scopo. Ad esempio, se il componente di impaginazione viene utilizzato per navigare tra una serie di risultati di ricerca, un'etichetta appropriata potrebbe essere `aria-label="Pagine dei risultati di ricerca"`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di navigazione della pagina">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" aria-current="page" href="#" >1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Stato disabilitato e attivo

I link della paginazione assumonono uno stato disabilitato usando la classe `.disabled` nel tag `<li>`.
Per indicare la pagina attiva corrente utilizzare l'attributo `aria-current="page"` nel tag `<a>`, l'aspetto grafico cambierà di conseguenza.

{% capture callout %}

#### Disabilitazione link

La classe `.disabled` usa `pointer-events: none` per provare a disabilitare l'attivazione dei comportamenti di default dei link `<a>`, ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane abilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è possibile aggiungere l'attributo `tabindex="-1"`, e utilizzare JavaScript per disabilitare le loro funzionalità.

È inoltre consigliabile applicare `aria-hidden="true"` ai link disabilitati per evitare che vengano considerati nel conteggio degli elementi totali in lista fornito dagli screen reader.

In alternativa per la paginazione si può sostituire il link disabilitato con uno `<span>` avente classe `.page-link` e contenuto in un `<li>` con classe `.nolink` (es.: `<li class="page-item"><span class="page-link">1</span></li>`).
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% comment %}Example name: Con stato disabilitato{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di paginazione">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-hidden="true">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>1
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-hidden="true">3</a>
    </li>
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-hidden="true">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Allineamento

Grazie alle [utilità di Flexbox]({{ site.baseurl }}/docs/organizzare-gli-spazi/flex/), si può allineare facilmente il blocco della paginazione.<br>
Sui dispositivi mobile la paginazione è centrata per default.

### Navigazione centrata

Per centrare la navigazione aggiungere la classe `justify-content-center` al tag `<nav>`.

{% comment %}Example name: Navigazione centrata{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper justify-content-center" aria-label="Navigazione centrata">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-hidden="true">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>1
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Navigazione allineata a destra

Per allineare a destra la navigazione aggiungere la classe `justify-content-end` al tag `<nav>.`

{% comment %}Example name: Navigazione a destra{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper justify-content-end" aria-label="Navigazione allineata a destra">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-hidden="true">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>1
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Responsive

Con i dovuti accorgimenti sopraelencati e inserendo alcune classi delle [utilità display]({{ site.baseurl }}/docs/organizzare-gli-spazi/display/) si può trasformare la paginazione in base alla risoluzione del dispositivo in uso dell'utente.

{% comment %}Example name: Navigazione responsive{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di navigazione responsive della pagina">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item d-none d-sm-flex">
      <a class="page-link" href="#">9</a>
    </li>
    <li class="page-item d-none d-sm-flex">
      <a class="page-link" href="#">10</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>12
      </a>
    </li>
    <li class="page-item d-none d-sm-flex">
      <a class="page-link" href="#">12</a>
    </li>
    <li class="page-item d-none d-sm-flex">
      <a class="page-link" href="#">13</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Funzioni aggiuntive

La paginazione base può essere integrata con elementi aggiuntivi per rendere più fruibile la navigazione quando il numero di pagine è elevato. È inoltre disponibile una versione semplificata ottimizzata per dispositivi mobile.

### More

Quando è presente un grande numero di pagine è consigliabile visualizzare unicamente le pagine più prossime a quella corrente, inserendo delle ellissi (...) fra queste e la prima ed ultima pagina. Non essendo collegate a nessuna pagina le ellissi vanno inserite in un tag `<span>`.

{% comment %}Example name: Con funzionalità più{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di navigazione con ellissi/more">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item">
      <span class="page-link">...</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">24</a></li>
    <li class="page-item"><a class="page-link" href="#">25</a></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>26
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">27</a></li>
    <li class="page-item"><a class="page-link" href="#">28</a></li>
    <li class="page-item">
      <span class="page-link">...</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">50</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Changer

La funzionalità di changer permette di scegliere da un dropdown la quantità di record da visualizzare in una pagina.

{% comment %}Example name: Con funzionalità cambia pagina{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di navigazione con page changer">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">24</a></li>
    <li class="page-item"><a class="page-link" href="#">25</a></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>26
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">27</a></li>
    <li class="page-item"><a class="page-link" href="#">28</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">50</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
  <div class="dropdown">
    <a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="pagerChanger" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Salta alla pagina">
    10/pagina
    <svg class="icon icon-primary icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagerChanger">
      <div class="link-list-wrapper">
        <ul class="link-list">
           <li><a class="list-item active" href="#" aria-current="page"><span>10/pagina</span></a></li>
           <li><a class="dropdown-item list-item" href="#"><span>20/pagina</span></a></li>
           <li><a class="dropdown-item list-item" href="#"><span>30/pagina</span></a></li>
           <li><a class="dropdown-item list-item" href="#"><span>40/pagina</span></a></li>
           <li><a class="dropdown-item list-item" href="#"><span>50/pagina</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Jump to page

Con l'elemento aggiuntivo "Jump to page" l'utente può specificare un numero di pagina concreto.

{% comment %}Example name: Con funzionalità salta alla pagina{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di navigazione con jump to page">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">24</a></li>
    <li class="page-item"><a class="page-link" href="#">25</a></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>26
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">27</a></li>
    <li class="page-item"><a class="page-link" href="#">28</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">50</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
  <div class="form-group">
    <input type="text" class="form-control" id="jumpToPage" maxlength="3">
    <label for="jumpToPage"><span aria-hidden="true">Vai a ...</span><span class="visually-hidden">Indica la pagina desiderata</span></label>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Simple mode

La paginazione in versione "Simple mode" è ottimizzata per i dispositivi mobile. Può essere utilizzata anche su tablet e desktop quando il numero di pagine è ridotto.

{% comment %}Example name: Modalità semplificata mobile{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di navigazione simple mode">
  <ul class="pagination" aria-label="Pagina 1 di 5">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-hidden="true">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><span class="page-link" aria-current="page">1</span></li>
    <li class="page-item"><span class="page-link">/</span></li>
    <li class="page-item"><span class="page-link">5</span></li>
    <li class="page-item visually-hidden">
      <a class="page-link" href="#" aria-current="page">Pagina 1 di 5</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Link testuali

Le icone _chevron_ utilizzate come link di navigazione possono essere sostituite da link testuali come "precedente" e "successiva". In tal caso al tag `<a>` contenente il testo dovrà essere aggiunta la classe `.text`. Es: `<a class="page-link text" href="#">Precedente</a>`.
Notare come sia stato inserito il testo "Pagina" in un elemento `<span class="visually-hidden">` invisibile su schermo ma enunciabile dagli screen reader per facilitare la comprensione agli utenti che utilizzano tecnologie assistive.

{% comment %}Example name: Con link testuali{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper" aria-label="Esempio di navigazione con link testuali">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link text" href="#"><span class="visually-hidden">Pagina </span>Precedente</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">24</a></li>
    <li class="page-item"><a class="page-link" href="#">25</a></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>26
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">27</a></li>
    <li class="page-item"><a class="page-link" href="#">28</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">50</a></li>
    <li class="page-item">
      <a class="page-link text" href="#"><span class="visually-hidden">Pagina </span>Successiva</a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Total number

Aggiungendo al classe `.pagination-total` al tag `<nav>` che contiene la paginazione è possibile indicare il numero totale di elementi o il numero totale di elementi per pagina all'interno di un tag `<p>` collocato priam della chiusura del `<nav>`.

{% comment %}Example name: Con numero totale elementi{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper pagination-total" aria-label="Esempio di navigazione con total number">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>24
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">25</a></li>
    <li class="page-item"><a class="page-link" href="#">26</a></li>
    <li class="page-item"><a class="page-link" href="#">27</a></li>
    <li class="page-item"><a class="page-link" href="#">28</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">50</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
  <p>Totale 300 elementi </p>
</nav>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Con numero totale elementi per pagina{% endcomment %}
{% capture example %}
<nav class="pagination-wrapper pagination-total" aria-label="Esempio di navigazione con total number">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item active">
      <a class="page-link" href="#" aria-current="page">
        <span class="d-inline-block d-sm-none">Pagina </span>24
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">25</a></li>
    <li class="page-item"><a class="page-link" href="#">26</a></li>
    <li class="page-item"><a class="page-link" href="#">27</a></li>
    <li class="page-item"><a class="page-link" href="#">28</a></li>
    <li class="page-item"><span class="page-link">...</span></li>
    <li class="page-item"><a class="page-link" href="#">50</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
  <p>100-110 di 300 elementi</p>
</nav>
{% endcapture %}{% include example.html content=example %}
