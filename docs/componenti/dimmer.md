---
layout: docs
title: Dimmer
description: Un componente per focalizzare l'attenzione su un contenuto.
group: componenti
toc: true
---

<script>
  window.addEventListener('load', function() {
    /*$('.dimmer').css("display", "flex").hide().fadeIn(200);
    $('[id^=toggleDimmer]').on('click', function() {
      var dimmer = '#' + $(this).data('dimmer');
      $(this).is(':checked') ? $(dimmer).dimmerShow() : $(dimmer).dimmerHide();
    })*/

    /*var toggles = document.querySelectorAll('[id^=toggleDimmer]')
    toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        var dimmer = document.querySelector('#' + toggle.getAttribute('data-bs-target'))
        if (dimmer) {
          var bsDimmer = new bootstrap.Dimmer(dimmer)          
          toggle.checked ? bsDimmer.show() : bsDimmer.hide()
        }
      })
    })*/
  });
</script>

Un dimmer occupa tutta l'altezza e la larghezza dell'elemento all'interno del quale è contenuto.

L'elemento contenitore deve avere la classe `.dimmable` mentre il dimmer avrà un ID univoco che sarà utilizzato per l'attivazione e l'occultamento attraverso i seguenti comandi:

```js
// istanziamento componente
var myDimmer = document.getElementById('ID_ELEMENTO')
var dimmer = new bootstrap.Dimmer(myDimmer)

// mostra Dimmer
dimmer.show()

// nascondi Dimmer
dimmer.hide()
```

## Esempio

Il dimmer si compone di un wrapper generale `.dimmer` e di un contenitore `.dimmer-inner`.

Il testo è contenuto all'interno di un tag `<p>` e può essere preceduto da un'icona contenuta in un `<div>` con classe `.dimmer-icon`.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer1">
    Attiva Dimmer 1
    <input type="checkbox" id="toggleDimmer1" data-bs-toggle="dimmer" data-bs-target="#dimmer1" checked>
    <span class="lever"></span>
  </label>
</div>

<div class="row dimmable">
  <div class="dimmer fade show" id="dimmer1">
    <div class="dimmer-inner">
      <div class="dimmer-icon">
        <svg class="icon icon-xl"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-unlocked"></use></svg>
      </div>
      <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Se si vuole iniziare con il dimmer disabilitato è necessario utilizzare l'attributo `aria-hidden`.

{% comment %}Example name: Base, default disattivato{% endcomment %}
{% capture example %}

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer2">
    Attiva Dimmer 2
    <input type="checkbox" id="toggleDimmer2" data-bs-toggle="dimmer" data-bs-target="#dimmer2">
    <span class="lever"></span>
  </label>
</div>

<div class="row dimmable">
  <div class="dimmer fade" id="dimmer2" aria-hidden="true">
    <div class="dimmer-inner">
      <div class="dimmer-icon">
        <svg class="icon icon-xl"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-unlocked"></use></svg>
      </div>
      <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Colore Primario

Aggiungendo la classe `.dimmer-primary` al wrapper del dimmer si ottiene una versione con sfondo di colore primario.

{% comment %}Example name: Colore primary{% endcomment %}
{% capture example %}

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer3">
    Attiva Dimmer 2
    <input type="checkbox" id="toggleDimmer3" data-bs-toggle="dimmer" data-bs-target="#dimmer3" checked>
    <span class="lever"></span>
  </label>
</div>

<div class="row dimmable">
  <div class="dimmer dimmer-primary fade show" id="dimmer3">
    <div class="dimmer-inner">
      <p>Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Dimmer con Azioni

Un dimmer può contenere tasti collegati ad azioni ed un titolo descrittivo.

I pulsanti vanno inseriti in un `<div>` con classi `.dimmer-buttons` e `.bg-dark`. Se è presente un solo pulsante aggiungere la classe `.single-button`.

{% comment %}Example name: Con azioni{% endcomment %}
{% capture example %}

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer4">
    Attiva Dimmer 4
    <input type="checkbox" id="toggleDimmer4" data-bs-toggle="dimmer" data-bs-target="#dimmer4" checked>
    <span class="lever"></span>
  </label>
</div>

<div class="row dimmable">
  <div class="dimmer fade show" id="dimmer4">
    <div class="dimmer-inner">
      <h4>Titolo Dimmer</h4>
      <div class="dimmer-buttons bg-dark">
        <button type="button" class="btn btn-outline-primary">Azione secondaria</button>
        <button type="button" class="btn btn-primary">Azione primaria</button>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Colore Primario

Aggiungendo la classe `.dimmer-primary` al wrapper del dimmer si ottiene una versione con sfondo di colore primario.

{% comment %}Example name: Con azioni, colore primary{% endcomment %}
{% capture example %}

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer5">
    Attiva Dimmer 5
    <input type="checkbox" id="toggleDimmer5" data-bs-toggle="dimmer" data-bs-target="#dimmer5" checked>
    <span class="lever"></span>
  </label>
</div>

<div class="row dimmable">
  <div class="dimmer dimmer-primary fade show" id="dimmer5">
    <div class="dimmer-inner">
      <h4>Titolo Dimmer</h4>
      <div class="dimmer-buttons single-button bg-dark">
        <button type="button" class="btn btn-primary">Azione primaria</button>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4 d-none d-lg-block">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Praesent volutpat in dolor in sollicitudin. Donec mollis varius condimentum. Nunc viverra, metus at viverra consectetur, magna orci posuere ipsum, et bibendum est urna sed sem. Fusce libero neque, elementum volutpat tincidunt id, egestas vitae nisi. Nulla vulputate luctus sem, eu maximus lacus faucibus eget. Fusce tristique enim augue, sed suscipit lorem bibendum vel. Donec vehicula vehicula nibh non suscipit.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
