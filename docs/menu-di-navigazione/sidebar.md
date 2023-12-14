---
layout: docs
title: Sidebar
description: Barra di navigazione laterale, include liste di link e liste di link annidate.
group: menu-di-navigazione
toc: true
---

{% capture callout %}
Breaking feature dalla versione **2.8.0**

Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Semplice

La sidebar semplice può contenere:

- Header
- Lista di link primaria
- Lista di link secondaria

Per differenziare a livello stilistico i link secondari, è sufficiente aggiungere la classe `.linklist-secondary` all'elemento `<div class="sidebar-linklist-wrapper">` contenente la [Lista di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste/#liste-per-menu-di-navigazione).

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3 class="no_toc">Header</h3>
        </li>
        <li><a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link lista 2 (disabilitato)</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con icona

La sidebar può contenere icone nella sua Lista di link.

{% comment %}Example name: Con icona{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3 class="no_toc">Header</h3>
        </li>
        <li>
          <a class="list-item medium active left-icon" href="#">
            <span class="list-item-title-icon-wrapper">
              <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 1 (attivo)</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item medium disabled left-icon" href="#">
           <span class="list-item-title-icon-wrapper">
              <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 2 (disabilitato)</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item medium left-icon" href="#">
            <span class="list-item-title-icon-wrapper">
              <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 3</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item medium left-icon" href="#">
            <span class="list-item-title-icon-wrapper">
              <svg class="icon icon-sm icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Link lista 4</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con linea a destra

Per creare una sidebar con linea separatrice a destra è sufficiente aggiungere la classe `.it-line-right-side` al wrapper più esterno: `<div class="sidebar-wrapper it-line-right-side">`

{% comment %}Example name: Con linea a destra{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper it-line-right-side">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3 class="no_toc">Header</h3>
        </li>
        <li><a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link lista 2 (disabilitato)</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con linea a sinistra

Per creare una sidebar con linea separatrice a sinistra è sufficiente aggiungere la classe `.it-line-left-side` al wrapper più esterno: `<div class="sidebar-wrapper it-line-left-side">`

{% comment %}Example name: Con linea a sinistra{% endcomment %}
{% capture example %}
<div class="sidebar-wrapper it-line-left-side">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3 class="no_toc">Header</h3>
        </li>
        <li><a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link lista 2 (disabilitato)</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </div>
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
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item large medium right-icon active" href="#collapseOne" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
          <span class="list-item-title-icon-wrapper">
            <span>Link lista 1 (selezionato)</span>
            <svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
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
          <a class="list-item large medium right-icon" href="#collapseTwo" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 2</span>
              <svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
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
          <a class="list-item large medium right-icon" href="#collapseThree" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 3</span>
              <svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
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
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </div>
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
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item large medium right-icon active" href="#collapseFour" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 1 (selezionato)</span><svg class="icon icon-sm icon-white right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
            </span>
          </a>
          <ul class="link-sublist collapse show" id="collapseFour">
            <li><a class="list-item active" href="#"><span>Link lista 1.1 (attivo)</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 1.2</span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link lista 1.3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium right-icon" href="#collapseFive" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
          <span class="list-item-title-icon-wrapper">
              <span>Link lista 2</span><svg class="icon icon-sm icon-white right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
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
          <a class="list-item large medium right-icon" href="#collapseSix" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
            <span class="list-item-title-icon-wrapper">
              <span>Link lista 3</span><svg class="icon icon-sm icon-white right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
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
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
