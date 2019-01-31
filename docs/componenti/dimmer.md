---
layout: docs
title: Dimmer
description: Un componente per focalizzare l'attenzione su un contenuto
group: componenti
toc: true
---

<script>
  window.addEventListener('load', function() {
    $('.dimmer').css("display", "flex").hide().fadeIn(200);
    $('[id^=toggleDimmer]').on('click', function() {
      var dimmer = '#' + $(this).data('dimmer');
      $(this).is(':checked') ? $(dimmer).dimmerShow() : $(dimmer).dimmerHide();
    })
  });
</script>

Un Dimmer occupa tutta l'altezza e la larghezza dell'elemento all'interno del quale è contenuto.

L'elemento contenitore deve avere la classe `.dimmable` mentre il Dimmer avrà un ID univoco che sarà utilizzato per l'attivazione e l'occultamento attraverso i seguenti comandi:

{% highlight js %}
  // mostra Dimmer
  $('#ID_ELEMENTO').dimmerShow();

  // nascondi Dimmer
  $('#ID_ELEMENTO').dimmerHide();
{% endhighlight %}

## Esempio

Il Dimmer si compone di un wrapper generale `.dimmer` e di un contenitore `.dimmer-inner`.

Il testo è contenuto all'interno di un tag `<p>` e può essere preceduto da un'icona contenuta in un `<div>` con classe `.dimmer-icon`.

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer1">
    Attiva Dimmer 1
    <input type="checkbox" id="toggleDimmer1" data-dimmer="dimmer1" checked>
    <span class="lever"></span>
  </label>
</div>

{% capture example %}
<div class="row dimmable">
  <div class="dimmer" id="dimmer1">
    <div class="dimmer-inner">
      <div class="dimmer-icon">
        <svg class="icon icon-xl"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-unlocked"></use></svg>
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

Aggiungendo la classe `.dimmer-primary` al wrapper del Dimmer si ottiene una versione con sfondo di colore Primario.

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer2">
    Attiva Dimmer 2
    <input type="checkbox" id="toggleDimmer2" data-dimmer="dimmer2" checked>
    <span class="lever"></span>
  </label>
</div>

{% capture example %}
<div class="row dimmable">
  <div class="dimmer dimmer-primary" id="dimmer2">
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

Un Dimmer può contenere tasti collegati ad azioni ed un titolo descrittivo.

I bottoni vanno inseriti in un `<div>` con classi `.dimmer-buttons` e `.bg-dark`. Se è presente un solo bottone aggiungere la classe `.single-button`.

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer3">
    Attiva Dimmer 3
    <input type="checkbox" id="toggleDimmer3" data-dimmer="dimmer3" checked>
    <span class="lever"></span>
  </label>
</div>

{% capture example %}
<div class="row dimmable">
  <div class="dimmer" id="dimmer3">
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

Aggiungendo la classe `.dimmer-primary` al wrapper del Dimmer si ottiene una versione con sfondo di colore Primario.

<div class="toggles col-md-6 col-lg-4">
  <label for="toggleDimmer4">
    Attiva Dimmer 4
    <input type="checkbox" id="toggleDimmer4" data-dimmer="dimmer4" checked>
    <span class="lever"></span>
  </label>
</div>

{% capture example %}
<div class="row dimmable">
  <div class="dimmer dimmer-primary" id="dimmer4">
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
