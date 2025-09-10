---
layout: docs
group: componenti
toc: true
title: Sections
description: Per creare sezioni di layout orizzontale con differenti sfondi.
---

Per suddividere una pagina in blocchi orizzontali con sfondi differenti utilizzare più elementi `<section>` con classe `.section`.

## Esempio

Il componente Section ha un padding verticale ed orizzontale predefinito ed uno sfondo trasparente.

Il contenuto di una Section va inserito nel `<div>` con classe `.section-content`. Questo elemento occupa tutta la larghezza della Section (meno il padding) ma, nel caso ne venisse definita la `max-width` in CSS, verrà automaticamente centrato orizzontalmente all'interno della Section.

{% capture callout %}

#### Accessibilità (draft)

Il titolo `<h2>` dello snippet è solo indicativo. Il tag `<section>` contraddistingue una sezione semanticamente riconoscibile, associata all'id del titolo dall'attributo `aria-labelledby`.

Gli autori dovrebbero dividere la pagina in sezioni semantiche reali e non per solo scopo decorativo. Qualora si utilizzino sezioni al solo scopo decorativo sostituire `<section>` con `<div>` ed eliminare l'attributo `aria-labelledby`.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<section class="section" aria-labelledby="titleEx1">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <h2 id="titleEx1" class="no_toc">Morbi fermentum amet</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 font-serif">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

## Colori di sfondo

Il componente Section ha, per default, uno sfondo trasparente. Aggiungendo le classi sottoelencate è possibile aggiungere colori di sfondo.

### Sfondo Tenue

Al componente Section può essere applicato uno sfondo di colore tenue utilizzano la classe aggiuntiva `.section-muted`.

{% comment %}Example name: Sfondo tenue{% endcomment %}
{% capture example %}
<section class="section section-muted" aria-labelledby="titleEx2">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <h2 id="titleEx2" class="no_toc">Morbi fermentum amet</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 font-serif">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

### Sfondo Primario

Aggiungendo invece classe `.section-primary` si otterrà un sfondo del colore primario.

Si consiglia di applicare la classe `.white-color` al contenuto (come da esempio) per garantire la leggibilità dei testi contenuti.

{% comment %}Example name: Sfondo primario{% endcomment %}
{% capture example %}
<section class="section section-primary" aria-labelledby="titleEx3">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container white-color">
      <div class="row mb-3">
        <div class="col-12">
          <h2 id="titleEx3" class="no_toc">Morbi fermentum amet</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 font-serif">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

### Sfondo Neutrale

Infine, utilizzando la classe `.section-neutral` si otterrà un sfondo di colore corrispondente al primo dei colori neutrali.

Si consiglia di applicare la classe `.white-color` al contenuto (come da esempio) per garantire la leggibilità dei testi contenuti.

{% comment %}Example name: Sfondo neutrale{% endcomment %}
{% capture example %}
<section class="section section-neutral" aria-labelledby="titleEx4">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container white-color">
      <div class="row mb-3">
        <div class="col-12">
          <h2 id="titleEx4" class="no_toc">Morbi fermentum amet</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 font-serif">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

## Immagine di sfondo

Aggiungendo la classe `.section-image` alla Section e indicando attraverso CSS in linea l'URL dell'immagine da utilizzare (es: `style="background-image: url('URL-IMMAGINE')"`) la Section utilizzerà l'immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l'intera Section.

A seconda della luminosità dell'immagine si consiglia di applicare la classe `.white-color` al contenuto (come da esempio) per garantire il corretto contrasto fra testi e sfondo.

{% comment %}Example name: Con immagine di sfondo{% endcomment %}
{% capture example %}
<section class="section section-image" style="background-image: url('https://picsum.photos/1280/720?image=811')"  aria-labelledby="titleEx5">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container white-color">
      <div class="row mb-3">
        <div class="col-12">
          <h2 id="titleEx5" class="no_toc">Morbi fermentum amet</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 mb-3 font-serif">Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.</div>
        <div class="col-12 col-lg-6 col-xl-4 pe-0 pe-md-5 font-serif">Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum. Mattis enim ut tellus elementum sagittis.</div>
      </div>
    </div>
    <!-- contenuto di esempio END -->
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

## Section con Card

Per aggiungere una serie di card all'interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi `.it-card`.

{% comment %}Example name: Con card{% endcomment %}
{% capture example %}
<section class="section section-muted"  aria-labelledby="titleEx6">
  <div class="section-content">
    <!-- contenuto di esempio START -->
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="mb-4 no_toc" id="titleEx6">Morbi fermentum amet</h2>
        </div>
      </div>
      <div class="row gy-3">
        <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
        <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
    </div>
    <!-- contenuto di esempio END -->
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

## Breaking change

{% capture callout %}
Implementato nell'esempio con card il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 
{% endcapture %}{% include callout-breaking.html version="2.16.0" content=callout type="danger" %}