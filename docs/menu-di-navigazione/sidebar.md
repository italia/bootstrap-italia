---
layout: docs
title: Sidebar
description: Barra di navigazione secondaria, include liste di link e liste di link annidate.
group: menu-di-navigazione
toc: true
---

La sidebar organizza in una barra laterale una o più [liste di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste/#liste-per-menu-di-navigazione), anche annidate, con un eventuale titolo.

{% capture callout %}
#### Accessibilità

Se nella pagina la sidebar è un contenuto complementare, `.sidebar-wrapper` può essere un `<aside>`, con il titolo come nome tramite `aria-labelledby`.

Usa un `<nav>` per ogni lista di link (`.link-list-wrapper`). Quando nella pagina ci sono più `<nav>`, dai a ciascuno un `aria-label` distinto che ne indichi la funzione.

Non inserire il titolo come elemento `<li>`: verrebbe contato tra gli elementi della lista. Posizionalo prima della lista, all'inizio di `.sidebar-wrapper` come negli esempi oppure dentro il `<nav>` della lista. Nel secondo caso usa il titolo come nome del `<nav>` tramite `aria-labelledby`, al posto di `aria-label`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Semplice

La sidebar semplice può contenere:

- Header
- Lista di link primaria
- Lista di link secondaria

Per differenziare a livello stilistico i link secondari, è sufficiente aggiungere la classe `.linklist-secondary` all'elemento `<div class="sidebar-linklist-wrapper">` contenente la [Lista di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste/#liste-per-menu-di-navigazione).

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper">
  <h3 class="no_toc">Header</h3>
  <div class="sidebar-linklist-wrapper">
    <nav class="link-list-wrapper" aria-label="Pagine della sezione">
      <ul class="link-list">
        <li><a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link lista 2 (disabilitato)</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <nav class="link-list-wrapper" aria-label="Link secondari">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </nav>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con icona

La sidebar può contenere icone nella sua Lista di link.

{% comment %}Example name: Con icona{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper">
  <h3 class="no_toc">Header</h3>
  <div class="sidebar-linklist-wrapper">
    <nav class="link-list-wrapper" aria-label="Pagine della sezione">
      <ul class="link-list">
        <li>
          <a class="list-item medium active" href="#">
            <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 1 (selezionato)</span>
          </a>
        </li>
        <li>
          <a class="list-item medium disabled" href="#">
            <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 2 (disabilitato)</span>
          </a>
        </li>
        <li>
          <a class="list-item medium" href="#">
            <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 3</span>
          </a>
        </li>
        <li>
          <a class="list-item medium" href="#">
            <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 4</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <nav class="link-list-wrapper" aria-label="Link secondari">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (selezionato)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </nav>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con linea a destra

Per creare una sidebar con linea separatrice a destra è sufficiente aggiungere la classe `.it-line-right-side` al wrapper più esterno: `<div class="sidebar-wrapper it-line-right-side">`

{% comment %}Example name: Con linea a destra{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper it-line-right-side">
  <h3 class="no_toc">Header</h3>
  <div class="sidebar-linklist-wrapper">
    <nav class="link-list-wrapper" aria-label="Pagine della sezione">
      <ul class="link-list">
        <li><a class="list-item medium active" href="#"><span>Link lista 1 (selezionato)</span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link lista 2 (disabilitato)</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <nav class="link-list-wrapper" aria-label="Link secondari">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (selezionato)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </nav>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con linea a sinistra

Per creare una sidebar con linea separatrice a sinistra è sufficiente aggiungere la classe `.it-line-left-side` al wrapper più esterno: `<div class="sidebar-wrapper it-line-left-side">`

{% comment %}Example name: Con linea a sinistra{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper it-line-left-side">
  <h3 class="no_toc">Header</h3>
  <div class="sidebar-linklist-wrapper">
    <nav class="link-list-wrapper" aria-label="Pagine della sezione">
      <ul class="link-list">
        <li><a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link lista 2 (disabilitato)</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <nav class="link-list-wrapper" aria-label="Link secondari">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </nav>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Annidata

La sidebar può contenere una Lista di link primaria annidata.

{% comment %}Example name: Annidata{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper">
  <h3 class="no_toc">Header</h3>
  <div class="sidebar-linklist-wrapper">
    <nav class="link-list-wrapper" aria-label="Pagine della sezione">
      <ul class="link-list">
        <li>
          <a class="list-item medium" href="#collapseOne" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
          <span class="list-item-title-icon-wrapper">
            <span>Link lista 1</span>
            <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
          </span>
          </a>
          <ul class="link-sublist collapse show" id="collapseOne">
            <li><a class="list-item active" href="#"><span>Link lista 1.1 (attivo)</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 1.2</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 1.3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item medium" href="#collapseTwo" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 2</span>
              <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseTwo">
            <li><a class="list-item" href="#"><span>Link lista 2.1</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 2.2</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 2.3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item medium" href="#collapseThree" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 3</span>
              <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseThree">
            <li><a class="list-item" href="#"><span>Link lista 3.1</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 3.2</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 3.3</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <nav class="link-list-wrapper" aria-label="Link secondari">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link secondario 2</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </nav>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Sidebar versione scura

Per cambiare il tema della sidebar e renderla scura è sufficiente aggiungere al div `<div class="sidebar-wrapper">` la classe `.theme-dark`.

{% comment %}Example name: Con sfondo scuro{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper theme-dark">
  <h3 class="no_toc">Header</h3>
  <div class="sidebar-linklist-wrapper">
    <nav class="link-list-wrapper" aria-label="Pagine della sezione">
      <ul class="link-list">
        <li>
          <a class="list-item large medium" href="#collapseFour" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseFour">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 1</span><svg class="icon icon-sm icon-inverse" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
            </span>
          </a>
          <ul class="link-sublist collapse show" id="collapseFour">
            <li><a class="list-item active" href="#"><span>Link lista 1.1 (selezionato)</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 1.2</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 1.3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium" href="#collapseFive" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseFive">
          <span class="list-item-title-icon-wrapper">
              <span>Link lista 2</span><svg class="icon icon-sm icon-inverse" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseFive">
            <li><a class="list-item" href="#"><span>Link lista 2.1</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 2.2</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 2.3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium" href="#collapseSix" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseSix">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 3</span><svg class="icon icon-sm icon-inverse" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseSix">
            <li><a class="list-item" href="#"><span>Link lista 3.1</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 3.2</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 3.3</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <nav class="link-list-wrapper" aria-label="Link secondari">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (selezionato)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </nav>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

Il componente Sidebar utilizza al suo interno il componente `Collapse`, si rimanda dunque alla 
sezione [attivazione Collapse tramite codice]({{ site.baseurl }}/docs/componenti/collapse/#attivazione-tramite-codice)

{% include properties.md properties=site.data.cprops.sidebar-wrapper selector=".sidebar-wrapper" %}

## Breaking change

{% capture callout %}
- Ogni lista di link della sidebar (`.link-list-wrapper`) è ora un elemento `<nav>` con un nome accessibile dedicato, al posto di un `<div>`.
- Il titolo della sidebar (`<h3>`) non è più un elemento `<li>` della lista di link: negli esempi è posto all'inizio del contenitore `.sidebar-wrapper`. A seconda del contesto può essere posizionato diversamente, vedi la nota di accessibilità.
- Nella variante con una lista di link primaria annidata è stata rimossa la classe `.large` dagli elementi `<a>` con classi `.list-item .medium`. 
- Nelle varianti scure la classe che controlla il colore delle icone bianche ha cambiato nome: `.icon-white` diventa `.icon-inverse`.
- Nella variante con icona sono stati rimossi gli elementi `<span>` con classe `list-item-title-icon-wrapper`: icona e testo sono figli diretti del link.
- Rimosse le classi `.right-icon` e `.right` dai link list item.
{% endcapture %}{% include callout-breaking.html content=callout version="3.0.0" type="danger" %}

{% capture callout %}
Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.8.0" type="danger" %}
