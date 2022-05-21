---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Liste di link
description: Le Liste di lik sono un componente flessibile e potente dedicato alla visualizzazione di una serie di link o call to action.
---

## Linea singola

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
     <li><a class="list-item" href="#"><span>Link lista 1</span></a></li>
     <li><a class="list-item" href="#"><span>Link lista 2</span></a></li>
     <li><a class="list-item" href="#"><span>Link lista 3</span></a></li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Elemento con stato attivo

Per rendere attivo un elemento è sufficiente aggiungere la classe `.active` al relativo link.

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

### Elemento con stato disabilitato

Per disabilitare un elemento è sufficiente aggiungere la classe `.disabled` al relativo link.

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

### Intestazione e divisore

Le liste di link possono avere un'intestazione (con o senza link) e/o divisori per separare gruppi di link.  
L'intestazione è costituita dall'elemento `.link-list-heading` che precede il tag `<ul>`.  
Il divisore è costituito dal tag `<span>` con classe `.divider` all'interno del tag `<li>`.

{% capture example %}

<div class="link-list-wrapper">
  <div class="link-list-heading">Intestazione senza link</div>
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 2</span></a>
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

{% capture example %}

<div class="link-list-wrapper">
  <div class="link-list-heading"><a href="#">Intestazione con link</a></div>
  <ul class="link-list">
    <li><a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li><a class="list-item" href="#"><span>Link lista 2</span></a>
    </li>
    <li><a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li><a class="list-item" href="#"><span>Link lista 4</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Dimensioni

Per ogni elemento di una lista di link è possibile definire una variante di dimensione maggiore utilizzando la classe `.large` applicata al tag `<a>`.

{% capture example %}

<div class="link-list-wrapper">
  <div class="link-list-heading">Intestazione</div>
  <ul class="link-list">
    <li><a class="list-item large" href="#"><span>Link lista 1</span></a>
    </li>
    <li><a class="list-item large" href="#"><span>Link lista 2</span></a>
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

## Multiline con icona

Ogni elemento di una lista di link può avere un'icona (a destra o sinistra del testo) ed un abstract.

Per includere un'icona bisogna aggiungere al tag `<a>` uan delle segeunti classi:

- `icon-right`: se si vuole posizionare l'icona a destra del testo
- `icon-left`: se si vuole posizionare l'icona a sinistra del testo

All'interno del tag `<span class="list-item-title-icon-wrapper">` subito dopo lo `<span class="list-item-title">` contenente il testo, puoi inserire [l'icona necessaria]({{ site.baseurl }}/docs/utilities/icone/).

{% capture example %}

<div class="link-list-wrapper multiline">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1 attivo</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li>
      <a class="list-item icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li>
      <a class="list-item disabled icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1 disabilitato</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li><span class="divider"></span> 
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Lista con controlli

Le liste di link con controlli sono caratterizzate da icone a destra e sinistra del testo.  
Quella di destra è descrittiva mentre quella di sinistra può essere un'eventuale azione aggiuntiva da gestire in Javascript.

È necessario aggiungere al tag `<a>` la classe `.icon-right` se si vuole posizionare l'icona a destra del testo, oppure la classe `.icon-left` se si vuole posizionare l'icona a sinistra del testo.

### Azione primaria

#### Icona a sinistra

All'interno del tag `<span class="list-item-title-icon-wrapper">` subito prima del tag `<span class="list-item-title">` contenente il testo, puoi inserire [l'icona necessaria]({{ site.baseurl }}/docs/utilities/icone/).  
Per posizionare correttamente l'icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-left`.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-left" href="#">
        <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
          <span class="list-item-title">Link lista 1 attivo</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-left" href="#">
       <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
          <span class="list-item-title">Link lista 2</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-left disabled" href="#">
       <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
          <span class="list-item-title">Link lista 3 disabilitata</span>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Azione secondaria

#### Icona a destra

All'interno del tag `<span class="list-item-title-icon-wrapper">` subito dopo il tag `<span class="list-item-title">` contenente il testo, puoi inserire [l'icona necessaria]({{ site.baseurl }}/docs/utilities/icone/).  
Per posizionare correttamente l'icona a destra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-right`

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1 attivo</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 2</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-right disabled" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3 disabilitata</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Azioni primaria e secondaria

#### Icona a sinistra

Per aggiungere un'icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-left`.  
Inserisci l'icona all'interno del tag `<span class="list-item-title-icon-wrapper">` subito prima del tag `<span class="list-item-title">` contenente il testo.

#### Icona a destra

.
Per aggiungere un'icona a destra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-right`.  
Inserisci l'icona all'interno del tag `<span class="list-item-title-icon-wrapper">` subito prima del tag `<span class="list-item-title">` contenente il testo.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-left" href="#">
        <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
          <span class="list-item-title">Link lista 1 attivo</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-left" href="#">
        <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
          <span class="list-item-title">Link lista 2</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item disabled icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3 disabilitato con icona a destra</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        </span>
      </a>
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

### Lista con toggle

Una lista di link può contenere anche elementi appartenenti ai form, di seguito un esempio contenente un [toggle]({{ site.baseurl }}/docs/form/toggles/).

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

Lista di link contenente un [checkbox]({{ site.baseurl }}/docs/form/checkbox/).

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

## Liste annidate

Le liste di link possono contenere link con sottosezioni espanse o collassabili.

### Espansa

Di seguito un esempio di navigazione annidata espansa.

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item large medium icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 2</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        </span>
      </a>
      <ul class="link-sublist" id="">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Collassabile

Di seguito un esempio di navigazione annidata collassabile.  
Per questo tipo di link list sono state utilizzate, oltre alle classi custom, le classi e gli attributi di Bootstrap per l'attivazione del comportamento [collapse]({{ site.baseurl }}/docs/componenti/collapse/).

{% capture example %}

<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item large medium icon-right" href="#collapseOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseOne">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#collapseTwo" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 2</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseTwo">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#collapseThree" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
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
