---
layout: docs
title: Sidebar
description: Barra di navigazione laterale, include linklists e nested linklists.
group: componenti
toc: true
---

## Basic sidebar
### Default

La sidebar semplice può contenere:  
**Header**  
**Linklist primaria**  
**Linklist secondaria**  

Per differenziare a livello stilistico i link secondari, è sufficiente aggiungere la classe `.linklist-secondary` all'elemento `<div class="sidebar-linklist-wrapper">` contenente la **[linklist]({{ site.baseurl }}/docs/componenti/linklist/)**.

{% capture example %}
<div class="sidebar-wrapper">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3>Header </h3>
        </li>
        <li><a class="list-item medium active" href="#"><span>Link list active </span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link list disabled </span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link list</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link list</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Secondary item </span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Secondary item active </span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Secondary item disabled </span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con icona

La sidebar può contenere icone nella sua **[linklist]({{ site.baseurl }}/docs/componenti/linklist/)** primaria.

{% capture example %}
<div class="sidebar-wrapper">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3>Header </h3>
        </li>
        <li><a class="list-item medium active left-icon" href="#"><i class="it-favorite left" aria-hidden="true"> </i><span>Link list active </span></a>
        </li>
        <li><a class="list-item medium disabled left-icon" href="#"><i class="it-favorite left" aria-hidden="true"> </i><span>Link list disabled </span></a>
        </li>
        <li><a class="list-item medium left-icon" href="#"><i class="it-favorite left" aria-hidden="true"> </i><span>Link list</span></a>
        </li>
        <li><a class="list-item medium left-icon" href="#"><i class="it-favorite left" aria-hidden="true"> </i><span>Link list</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Secondary item </span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Secondary item active </span></a>
        </li>
        <li><a class="list-item" href="#"><span>Secondary item </span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con linea a destra

Per creare una sidebar con linea separatrice a destra è sufficiente aggiungere la classe `.it-line-right-side` al wrapper più esterno: `<div class="sidebar-wrapper it-line-right-side">`

{% capture example %}
<div class="sidebar-wrapper it-line-right-side">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3>Header </h3>
        </li>
        <li><a class="list-item medium active" href="#"><span>Link list active </span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link list disabled </span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link list</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link list</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Secondary item </span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Secondary item active </span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Secondary item disabled </span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con linea a sinistra

Per creare una sidebar con linea separatrice a sinistra è sufficiente aggiungere la classe `.it-line-left-side` al wrapper più esterno: `<div class="sidebar-wrapper it-line-left-side">`

{% capture example %}
<div class="sidebar-wrapper it-line-left-side">
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3>Header </h3>
        </li>
        <li><a class="list-item medium active" href="#"><span>Link list active </span></a>
        </li>
        <li><a class="list-item medium disabled" href="#"><span>Link list disabled </span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link list</span></a>
        </li>
        <li><a class="list-item medium" href="#"><span>Link list</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Secondary item </span></a>
        </li>
        <li><a class="list-item active" href="#"><span>Secondary item active </span></a>
        </li>
        <li><a class="list-item disabled" href="#"><span>Secondary item disabled </span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Annidiata
### Default

La sidebar può contenere una **[linklist]({{ site.baseurl }}/docs/componenti/linklist/)** primaria annidiata.

{% capture example %}
<div class="sidebar-wrapper">
  <h3>Header</h3>
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item large medium right-icon active" href="#collapseOne" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne"><span>Link list selected </span><i class="it-expand right" aria-hidden="true"> </i></a>
          <ul class="link-sublist collapse show" id="collapseOne">
            <li><a class="list-item active" href="#"><span>Link list 1 active </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium right-icon" href="#collapseTwo" data-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo"><span>Link list 1 </span><i class="it-expand right" aria-hidden="true"> </i></a>
          <ul class="link-sublist collapse" id="collapseTwo">
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium right-icon" href="#collapseThree" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree"><span>Link list 1 </span><i class="it-expand right" aria-hidden="true"> </i></a>
          <ul class="link-sublist collapse" id="collapseThree">
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Secondary item </span></a>
        </li>
        <li><a class="list-item active" href="#link 2"><span>Secondary item active </span></a>
        </li>
        <li><a class="list-item" href="#link 3"><span>Secondary item </span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Sidebar versione scura

Per cambiare il tema della sidebar e renderla scura è sufficiente aggiungere al div `<div class="sidebar-wrapper">` la classe `.theme-dark`

{% capture example %}
<div class="sidebar-wrapper theme-dark">
  <h3>Header</h3>
  <div class="sidebar-linklist-wrapper">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item large medium right-icon active" href="#collapseOne" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne"><span>Link list selected </span><i class="it-expand right" aria-hidden="true"> </i></a>
          <ul class="link-sublist collapse show" id="collapseOne">
            <li><a class="list-item active" href="#"><span>Link list 1 active </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium right-icon" href="#collapseTwo" data-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo"><span>Link list 1 </span><i class="it-expand right" aria-hidden="true"> </i></a>
          <ul class="link-sublist collapse" id="collapseTwo">
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium right-icon" href="#collapseThree" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree"><span>Link list 1 </span><i class="it-expand right" aria-hidden="true"> </i></a>
          <ul class="link-sublist collapse" id="collapseThree">
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Secondary item </span></a>
        </li>
        <li><a class="list-item active" href="#link 2"><span>Secondary item active </span></a>
        </li>
        <li><a class="list-item" href="#link 3"><span>Secondary item </span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

