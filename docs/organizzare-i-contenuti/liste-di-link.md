---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Liste di link
description: I Link lista sono un componente flessibile e potente per la visualizzazione di una serie di link o call to action.
---

## Esempi

## Single line

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
     <li><a class="list-item" href="#"><span>Link lista 1</span></a></li>
     <li><a class="list-item" href="#"><span>Link lista 2</span></a></li>
     <li><a class="list-item" href="#"><span>Link lista 3</span></a></li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Single line - elemento con stato attivo

Per determinare l'elemento attivo è sufficiente aggiungere la classe `.active` al relativo link

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item active" href="#"><span>Link lista 2 attivo</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Single line - elemento con stato disabilitato

Per disabilitare un elemento attivo è sufficiente aggiungere la classe `.disabled` al relativo link

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item disabled" href="#"><span>Link lista 2 disabilitato</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Single line con header e divider

I Link lista possono avere un header (con o senza link) e/o divisori per separare gruppi di link<br>
L'header è costituito dall'elemento `<h3>` all'interno del tag `<li>`<br>
Il separatore è costituito dal tag `<span>` con classe `.divider` all'interno del tag `<li>`

**Header senza link**
{% capture example %}

<div class="link-list-wrapper">
   <ul class="link-list">
      <li>
         <h3 id="header-senza-link" class="no_toc">Header senza link</h3>
      </li>
      <li>
        <a class="list-item" href="#"><span>Link lista 1</span></a>
      </li>
      <li>
        <a class="list-item" href="#"><span>Link lista</span></a>
      </li>
      <li>
        <a class="list-item" href="#"><span>Link lista 3</span></a>
      </li>
      <li>
        <span class="divider"></span>
      </li>
      <li>
        <a class="list-item" href="#"><span>Link lista 4</span></a>
      </li>
   </ul>
</div>
{% endcapture %}{% include example.html content=example %}

**Header con link**
{% capture example %}

<div class="link-list-wrapper">
   <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <h3 id="header-con-link" class="no_toc"><a href="#">Header con link</a></h3>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
        <li><span class="divider"></span>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Sizing

Per ogni elemento Link lista è possibile definire una variante di dimensione maggiore utilizzando la classe `.large` applicata al tag `<a>`.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <h3 id="header" class="no_toc">Header</h3>
    </li>
    <li><a class="list-item large" href="#"><span>Link lista 1</span></a>
    </li>
    <li><a class="list-item large" href="#"><span>Link lista</span></a>
    </li>
    <li><a class="list-item large" href="#"><span>Link lista 3</span></a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li><a class="list-item large" href="#"><span>Link lista 4</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Multiline

Ogni elemento Link lista può avere un icona (a destra o sinistra del testo) ed un abstract.

**Icone**<br>
Per aggiungere un icona bisogna aggiungere al tag `<a>` la classi:<br>
`icon-right` : se si vuole posizionare l'icona a destra del testo<br>
`icon-left` : se si vuole posizionare l'icona a sinistra del testo<br>

All'interno del tag `<a>` subito dopo lo `<span>` contenente il testo, puoi inserire il tag `svg` necessario (per maggiori informazioni consulta la sezione [icone]({{ site.baseurl }}/docs/utilities/icone/)).

{% capture example %}

<div class="link-list-wrapper multiline">
  <ul class="link-list">
    <li><a class="list-item active icon-right" href="#">
        <span>Link lista 1 attivo</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p></a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li><a class="list-item icon-right" href="#">
        <span>Link lista 1</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p></a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li><a class="list-item disabled icon-right" href="#">
        <span>Link lista 1 disabilitato</span>
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p></a>
    </li>
    <li><span class="divider"></span>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Lista con controlli

I Link lista con controlli sono caratterizzati da icone a destra e sinistra del testo<br>
Quella di destra descrittiva e quella di sinistra un eventuale azione aggiuntiva da gestire in Javascript.

Per aggiungere un'icona è possibile aggiungere al tag `<a>` la classe `icon-right` se si vuole posizionare l'icona a destra del testo, oppure la classe `icon-left` : se si vuole posizionare l'icona a sinistra del testo<br>

### Primary Action

**Icona sinistra**<br>

All'interno del tag `<a>` subito prima dello `<span>` contenente il testo, puoi inserire il tag `svg` necessario
Per posizionare correttamente l'icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-left`

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li><a class="list-item active icon-left" href="#">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
        <span>Link lista 1 attivo</span>
    </a></li>
    <li><a class="list-item icon-left" href="#">
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      <span>Link lista 1</span>
    </a></li>
    <li><a class="list-item disabled icon-left" href="#">
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      <span>Link lista 1 disabilitato</span>
    </a></li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Secondary Action

**Icona destra**<br>
Per aggiungere un icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-right`

All'interno del tag `<a>` subito dopo lo `<span>` contenente il testo, puoi inserire il tag `svg`.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li><a class="list-item active icon-right" href="#">
      <span>Link lista 1 attivo</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
    </a></li>
    <li><a class="list-item icon-right" href="#">
      <span>Link lista 1</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
    </a></li>
    <li><a class="list-item disabled icon-right" href="#">
      <span>Link lista 1 disabilitato</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
    </a></li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Primary e Secondary Action

**Icona destra**<br>
Per aggiungere un icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-right`

All'interno del tag `<a>` subito dopo lo `<span>` contenente il testo, andremo ad inserire l'icona e l'SVG con `.it-(classe icona)` per determinare quale icona inserire.

**Icona sinistra**<br>
Per aggiungere un icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-left`

All'interno del tag `<a>` subito prima dello `<span>` contenente il testo, andremo ad inserire l'icona e l'SVG con `.it-(classe icona)` per determinare quale icona inserire.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li><a class="list-item active icon-left" href="#">
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
      <span>Link lista 1 attivo</span></a>
    </li>
    <li><a class="list-item icon-left" href="#">
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
      <span>Link lista 1</span></a>
    </li>
    <li><a class="list-item disabled icon-right" href="#">
      <span>Link lista 1 disabilitato con icona a destra</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

<!-- To be reviewed

### List con avatar
**Avatar**<br>
Per aggiungere un avatar a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.avatar`

All'interno del tag `<a>` subito prima dello `<span>` contenente il testo, andremo ad inserire il tag `<img>` con classe `.avatar`.

{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li><a class="list-item active avatar" href="#"><img class="avatar" src="https://via.placeholder.com/40x40" alt="avatar"><span>Link lista 1 attivo</span></a>
    </li>
    <li><a class="list-item avatar" href="#"><img class="avatar" src="https://via.placeholder.com/40x40" alt="avatar"><span>Link lista 1</span></a>
    </li>
    <li><a class="list-item disabled avatar" href="#"><img class="avatar" src="https://via.placeholder.com/40x40" alt="avatar"><span>Link lista 1 disabilitato</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

-->

### List con switch

Un Link lista può contenere anche elementi form, si seguito un esempio contenente uno switch generato da un `<input type="checkbox">`

{% capture example %}

 <div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <div class="toggles">
        <label for="toggle1">Label per toggle
          <input type="checkbox" id="toggle1"><span class="lever"></span>
        </label>
      </div>
    </li>
    <li>
      <div class="toggles">
        <label for="toggle2">Label per toggle disabilitato
          <input type="checkbox" id="toggle2" disabled><span class="lever"></span>
        </label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### List con checkbox

Di seguito un esempio di Link lista contenente un `<input type="checkbox">` standard.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <div class="form-check form-check-group" aria-describedby="">
        <input type="checkbox" id="checkbox6" checked>
        <label for="checkbox6">Checkbox selezionato</label>
      </div>
    </li>
    <li>
      <div class="form-check form-check-group" aria-describedby="">
        <input type="checkbox" id="checkbox7">
        <label for="checkbox7">Checkbox non selezionato</label>
      </div>
    </li>
    <li>
      <div class="form-check form-check-group disabled" aria-describedby="">
        <input type="checkbox" id="checkbox8" disabled>
        <label for="checkbox8">Checkbox disabilitato non selezionato</label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Liste innestate

Le liste di link possono contenere link con sottosezioni espanse o collassabili.

### Fixed

Di seguito un esempio di navigazione annidiata espansa di default.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li><a class="list-item large medium icon-right" href="#"><span>Link lista 1</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
      </a>
    </li>
    <li><a class="list-item large medium icon-right" href="#"><span>Link lista 1</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
      <ul class="link-sublist" id="">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li><a class="list-item large medium icon-right" href="#"><span>Link lista 1</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Collapsable

Di seguito un esempio di navigazione annidiata collassabile.<br>
Per questo tipo di Link lista sono state utilizzate, oltre alle classi custom, le classi e gli attributi di bootstrap per l'attivazione del comportamento "collapse"<br>
**La documentazione è consultabile qui:**<br> <a href="{{ site.baseurl }}/docs/componenti/collapse/#accordion">{{ site.baseurl }}/docs/componenti/collapse/#accordion</a>

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li><a class="list-item large medium icon-right" href="#collapseOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne">
      <span>Link lista 1</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg></a>
      <ul class="link-sublist collapse" id="collapseOne">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li><a class="list-item large medium icon-right" href="#collapseTwo" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
      <span>Link lista 1</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg></a>
      <ul class="link-sublist collapse" id="collapseTwo">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li><a class="list-item large medium icon-right" href="#collapseThree" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
      <span>Link lista 1</span>
      <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg></a>
      <ul class="link-sublist collapse" id="collapseThree">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}
