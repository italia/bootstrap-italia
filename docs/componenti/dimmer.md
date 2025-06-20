---
layout: docs
title: Dimmer
description: Un componente per focalizzare l'attenzione su un contenuto.
group: componenti
toc: true
---

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
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
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
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
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
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
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
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
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
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 my-3 my-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Attivazione tramite codice

{% include callout-bundle-methods.md %}

```js
import { Dimmer } from 'bootstrap-italia';

const dimmerEl = document.getElementById('myDimmer');
const dimmer = new Dimmer(dimmerEl)
```

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
      {% include standard-methods.html class="Dimmer" %}
      <tr>
        <td>show</td>
        <td>Mostra il componente.</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>Nasconde il componente.</td>
      </tr>
    </tbody>
  </table>
</div>

## Breaking change 

{% capture callout %}
Implementato negli esempi il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 
{% endcapture %}{% include callout-breaking.html version="2.16.0" content=callout type="danger" %}