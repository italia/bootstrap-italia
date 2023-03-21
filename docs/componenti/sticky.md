---
layout: docs
title: Sticky
description: Rende un elemento della pagina costantemente visibile allo scorrere della pagina.
group: componenti
toc: true
---

<style>
  /* Style override for Documentation purposes */
 .bd-example {
   background-color: #F7F7F9;
 }
</style>

Talvolta è necessario che uno o più elementi della pagina restino sempre visibili anche quando essa viene fatta scorrere.
Questo comportamento viene comunemente definito "sticky".

## Come funziona

Puoi usare l'attributo `data-bs-toggle` con valore `sticky` per attivare la funzionalità sull'elemento.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="it-header-slim-wrapper" data-bs-toggle="sticky">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Elemento Sticky</a>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

È disponibile una <a href="{{ site.baseurl }}/docs/esempi/sticky/">pagina di esempio</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.

### Position fixed

Il componente assegna all'elemento la proprietà CSS `position` con valore `sticky`. Talvolta questo valore può causare dei problemi di posizionamento, soprattutto quando l'elemento varia in altezza quando diventa sticky. Per questo è possibile forzare il valore `fixed` mediante l'attributo `data-bs-position-type`.
Per facilitare il cambio di stile dell'elemento è possibile usare la proprietà `data-bs-sticky-class-name`: mediante questa proprietà la classe CSS indicata verrà assegnata all'elemento quando diventa sticky e rimossa quando ritorna normale.

{% comment %}Example name: Con posizione fissa{% endcomment %}
{% capture example %}
<div class="it-header-slim-wrapper it-header-sticky" data-bs-toggle="sticky" data-bs-position-type="fixed" data-bs-target="#stickyTrigger1" data-bs-sticky-class-name="is-sticky">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Elemento Sticky con position fixed</a>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

È disponibile una <a href="{{ site.baseurl }}/docs/esempi/sticky/">pagina di esempio</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.

### Versione impilabile

Se sono presenti più componenti sticky nella pagina, è possibile fare in modo che si impilino l'uno sull'altro utilizzando l'attributo `data-bs-stackable`

{% comment %}Example name: Variante impilabile{% endcomment %}
{% capture example %}
<div class="it-header-slim-wrapper" data-bs-toggle="sticky" data-bs-stackable="true">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Elemento Sticky impilabile</a>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

È disponibile una <a href="{{ site.baseurl }}/docs/esempi/sticky-stack/">pagina di esempio</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var stickyElements = document.querySelectorAll('[data-bs-toggle="sticky"]');
    stickyElements.forEach((element) => {
      var sticky = bootstrap.Sticky.getInstance(element);
      if (sticky) {
        sticky.dispose();
      }
    });
  })  
</script>

### Attivazione tramite target

È possibile attivare la funzionalità quando un particolare elemento interno esce dal viewport della pagina.
In tal caso è necessario utilizzare l'attributo `data-bs-target`.

{% comment %}Example name: Attivabile con target{% endcomment %}
{% capture example %}
<header class="it-header-wrapper" data-bs-toggle="sticky"  data-bs-target="#stickyTrigger1">
  <div class="it-header-slim-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
            <div class="nav-mobile">
              <nav aria-label="Navigazione secondaria">
                <a class="it-opener d-lg-none" data-bs-toggle="collapse" href="#menuC1" role="button" aria-expanded="false" aria-controls="menuC1">
                  <span>Ente appartenenza</span>
                  <svg class="icon" aria-hidden="true">
                    <use href="/dist/svg/sprites.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="link-list-wrapper collapse" id="menuC1">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                    <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="it-nav-wrapper">
    <div class="it-header-center-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="it-header-center-content-wrapper">
              <div class="it-brand-wrapper">
                <a href="#">
                  <svg class="icon" aria-hidden="true">
                    <use href="/dist/svg/sprites.svg#it-pa"></use>
                  </svg>
                  <div class="it-brand-text">
                    <div class="it-brand-title">Nome dell'Istituzione</div>
                    <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-header-navbar-wrapper" id="stickyTrigger1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!--start nav-->
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
              <button class="custom-navbar-toggler" type="button" aria-controls="navC1" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#navC1">
                <svg class="icon">
                  <use href="/dist/svg/sprites.svg#it-burger"></use>
                </svg>
              </button>
              <div class="navbar-collapsable" id="navC1" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <svg class="icon">
                      <use href="/dist/svg/sprites.svg#it-close-big"></use>
                    </svg>
                  </button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{% endcapture %}{% include example.html content=example %}

È disponibile una <a href="{{ site.baseurl }}/docs/esempi/sticky-target/">pagina di esempio</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.

## Attivazione tramite JavaScript

È possibile creare un'istanza con il constructor, ad esempio:

```js
var stickyElement = document.getElementById('sticky')
var sticky = new bootstrap.Sticky(stickyElement, {
  positionType: 'sticky',
  stickyClassName: 'is-sticky',
  stackable: true,
  paddingTop: 0,
})
```

### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite JavaScript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-position-type=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>positionType</td>
      <td>string</td>
      <td>sticky</td>
      <td>Indica il valore della proprietà CSS `position`. I valori ammessi sono `sticky` o `fixed`</td>
    </tr>
    <tr>
      <td>stickyClassName</td>
      <td>string</td>
      <td></td>
      <td>Classe CSS da applicare all'elemento quando viene attivata la funzionalità sticky</td>
    </tr>
    <tr>
      <td>stackable</td>
      <td>boolean</td>
      <td>false</td>
      <td>Attiva/disattiva la possibilità di rendere l'elemento impilabile su altri elementi sticky presenti in pagina</td>
    </tr>
    <tr>
      <td>paddingTop</td>
      <td>number</td>
      <td>0</td>
      <td>Indica la distanza dall'elemento in sticky dal margine superiore del viewport</td>
    </tr>
  </tbody>
</table>

### Metodi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>    
      <td>dispose</td>
      <td>Elimina la funzionalità sticky dell'elemento.</td>
    </tr>
    <tr>
      <td>getInstance</td>
      <td>Metodo statico che restituisce l'istanza Sticky associata ad un elemento del DOM. Esempio: <code>bootstrap.Sticky.getInstance(element)</code></td>
    </tr>
    <tr>
      <td>getOrCreateInstance</td>
      <td>Metodo statico che restituisce un'istanza Sticky associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.Sticky.getOrCreateInstance(element)</code></td>
    </tr>
  </tbody>
</table>

### Eventi

La classe `Sticky` di Bootstrap espone alcuni eventi per agganciare comportamenti alla funzionalità di apertura/chiusura attraverso JavaScript.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo di evento</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on.bs.sticky</td>
      <td>Questo evento si attiva immediatamente quando l'elemento è reso sticky.</td>
    </tr>
    <tr>
      <td>off.bs.sticky</td>
      <td>Questo evento viene attivato quando l'elemento .</td>
    </tr>
  </tbody>
</table>

```js
var stickyElement = document.getElementById('sticky')
stickyElement.addEventListener('on.bs.sticky', function () {
  // do something...
})
```
