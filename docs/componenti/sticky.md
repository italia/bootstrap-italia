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
              <button class="custom-navbar-toggler" type="button" aria-controls="navC1" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#navC1">
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-burger"></use></svg>
              </button>
              <div class="navbar-collapsable" id="navC1" tabindex="-1">
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-big"></use></svg>
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

## Attivazione tramite codice

{% include callout-bundle-methods.md %}

È possibile creare un'istanza con il constructor, ad esempio:

```js
import { Sticky } from 'bootstrap-italia';

const stickyElement = document.getElementById('sticky');
const sticky = new Sticky(stickyElement, options);
```

#### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite JavaScript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-position-type=""`.

```js
import { Sticky } from 'bootstrap-italia';

const stickyElement = document.getElementById('sticky');
const sticky = new Sticky(stickyElement, {
  positionType: 'sticky',
  stickyClassName: 'is-sticky',
  stackable: true,
  paddingTop: 0,
});
```

<div class="table-responsive">
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
</div>

#### Metodi

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Metodo</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      {% include standard-methods.html class="Sticky" %}
    </tbody>
  </table>
</div>

#### Eventi

La classe `Sticky` di Bootstrap espone alcuni eventi per agganciare comportamenti alla funzionalità di apertura/chiusura attraverso JavaScript.

<div class="table-responsive">
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
</div>

```js
var stickyElement = document.getElementById('sticky');
stickyElement.addEventListener('on.bs.sticky', () => {
  // do something...
})
```

## Breaking changes

{% capture callout %}
La navbar presente nel markup dell'esempio "Attivabile con target", quando aperta in versione mobile o a forte ingrandimento, è stata reimplementata come modale per migliorare l'accessibilità con le combinazioni principali di lettori di schermo, sistema operativo e browser. Modifiche principali: 
- struttura: la navbar ora utilizza un pattern dialog con backdrop 
- gerarchia visiva: la gestione `z-index` è allineata al componente modale
- gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo, e gestione inert
- il comportamento è diverso se implementata dentro o fuori dall'elemento `main` di pagina (se presente)

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript, assicurati che funzioni con il nuovo pattern dialog. Testa la tua implementazione con lettori di schermo e con utenti per verificarne l'accessibilità.
{% endcapture %}{% include callout-breaking.html content=callout version="2.15.0" type="danger" %}
