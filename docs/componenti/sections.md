---
layout: docs
group: componenti
toc: true
title: Sections
description: Per creare sezioni di layout orizzontale con differenti sfondi
---

Per suddividere una pagina in blocchi orizzontali con sfondi differenti utilizzare più elementi `<div>` con classe `.section`.

## Esempio

Il componente Section ha un padding verticale ed orizzontale predefinito ed uno sfondo trasparente.

Il contenuto di una Section va inserito nel `<div>` con classe `.section-content`. Questo elemento occupa tutta la larghezza della Section (meno il padding) ma, nel caso ne venisse definita la `max-width` in CSS, verrà automaticamente centrato orizzontalmente all'interno della Section.

{% capture example %}
<div class="section">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <h4>Morbi fermentum amet</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Colori di sfondo

Il componente Section ha, per default, uno sfondo trasparente. Aggiungendo le classi sottoelencate è possbile aggiungere colori di sfondo.

### Sfondo Tenue

Al componente Section può essere applicato uno sfondo di colore tenue utilizzano la classe aggiuntiva `.section-muted`.

{% capture example %}
<div class="section section-muted">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <h4>Morbi fermentum amet</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Sfondo Primario

Aggiungendo invece classe `.section-primary` si otterrà un sfondo del colore primario.

Si consiglia di applicare la classe `.white-color` al contenuto (come da esempio) per garantire la leggibilità dei testi contenuti.

{% capture example %}
<div class="section section-primary">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container white-color">
      <div class="row mb-3">
        <div class="col-12">
          <h4>Morbi fermentum amet</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Sfondo Neutrale

Infine, utilizzando la classe `.section-neutral` si otterrà un sfondo di colore corrispondente al primo dei colori neutrali.

Si consiglia di applicare la classe `.white-color` al contenuto (come da esempio) per garantire la leggibilità dei testi contenuti.

{% capture example %}
<div class="section section-neutral">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container white-color">
      <div class="row mb-3">
        <div class="col-12">
          <h4>Morbi fermentum amet</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Immagine di sfondo

Aggiungendo la classe `.section-image` alla Section e indicando attraverso CSS in linea l'URL dell'immagine da utilizzare (es: `style="background-image: url('URL-IMMAGINE')"`) la Section utilizzerà l'immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l'intera Section.

A seconda della luminosità dell'immagine si consiglia di applicare la classe `.white-color` al contenuto (come da esempio) per garantire il corretto contrasto fra testi e sfondo.

{% capture example %}
<div class="section section-image" style="background-image: url('https://picsum.photos/1280/720?image=811')">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container white-color">
      <div class="row">
        <div class="col-12">
          <h4>Morbi fermentum amet</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5 mb-3">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pr-0 pr-md-5">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Section con Card

Per aggiungere una serie di card all'interno di una Section si consiglia di utilizzare il container `.card-deck` per garantire un corretto margine fra gli elementi `.card`.

{% capture example %}
<div class="section section-muted">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <h4 class="mb-4">Morbi fermentum amet</h4>
    <div class="card-deck">
      <div class="card shadow border-0 mg-md-4">
        <div class="card-body">
          <p class="card-text">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. </p>
        </div>
      </div>
      <div class="card shadow border-0 mg-md-4">
        <div class="card-body">
          <p class="card-text">Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</p>
        </div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
