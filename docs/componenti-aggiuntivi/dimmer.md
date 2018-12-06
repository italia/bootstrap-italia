---
layout: docs
title: Dimmer
description: Focalizza l'attenxione su un contenuto
group: componenti-aggiuntivi
toc: true
---

<script>
  window.addEventListener('load', function() {
    $('.dimmer').css("display", "flex").hide().fadeIn(200);
  });
</script>

Un Dimmer occupa tutta l'altezza e la larghezza dell'elemento all'interno del quale è contenuto.

L'elemento contenitore deve avere la classe `.dimmable` mentre il Dimmer avrà un ID univoco che sarà utilizzato per l'attivazione e l'occultamento attraverso i seguenti comandi:

{% highlight js %}
  // mostra Dimmer
  dimmerShow('#ID_ELEMENTO');

  // nascondi Dimmer
  dimmerHide('#ID_ELEMENTO');
{% endhighlight %}

## Esempio

Il Dimmer si compone di un wrapper generale `.dimmer` e di un contenitore `.dimmer-inner`.

Il testo è contenuto all'interno di un tag `<p>` e può essere preceduto da un'icona contenuta in un `<div>` con classe `.dimmer-icon`.

<button onclick="dimmerShow('#dimmer1');">Attiva Dimmer</button> <button onclick="dimmerHide('#dimmer1');">Nascondi Dimmer</button>

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

<button onclick="dimmerShow('#dimmer2');">Attiva Dimmer</button> <button onclick="dimmerHide('#dimmer2');">Nascondi Dimmer</button>

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

I bottoni vanno inseiriti in un `<div>` con classi `.dimmer-buttons` e `.bg-dark`. Se è presente un solo bottone aggiungere la classe `.single-button`.

<button onclick="dimmerShow('#dimmer3');">Attiva Dimmer</button> <button onclick="dimmerHide('#dimmer3');">Nascondi Dimmer</button>

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

<button onclick="dimmerShow('#dimmer4');">Attiva Dimmer</button> <button onclick="dimmerHide('#dimmer4');">Nascondi Dimmer</button>

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