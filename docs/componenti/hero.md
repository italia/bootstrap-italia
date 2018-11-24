---
layout: docs
title: Hero
description: Lo Hero (ciò che Bootstrap definisce "Jumbotron") è un componente per la presentazione di contenuti in evidenza.
group: componenti
toc: true
---

Il cosiddetto _Hero_ è un componente leggero e flessibile che può facoltativamente estendere l'intera finestra per mostrare i messaggi in evidenza sul tuo sito.
Di seguito una serie di esempi con la descrizione degli elementi e delle classi applicabili.

Il componente Hero può contenere
- Sub head
- Heading (titolo)
- Paragrafo
- Call to action
- Immagine di background

{% capture callout %}
Il componente Hero è un componente full screen (orizzontalmente).
Per le reale visualizzazione a schermo potete guardare la pagina di esempio: **[Esempi Hero]({{ site.baseurl }}/docs/esempi/hero/){:target="_blank"}**.
{% endcapture %}{% include callout.html content=callout type="info" %}

## Con immagine
Il componente Hero, è contenuto all'interno del div `.it-hero-wrapper` a cui si andranno ad aggiungere le classi che ne varieranno l'aspetto.

{% capture example %}
<div class="it-hero-wrapper">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="img title" alt="imagealt"></div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Versione small
Per ottenere il componente Hero nella sua versione più piccola:  
aggiungere al div `.it-hero-wrapper` la classe `.it-hero-small-size`.

{% capture example %}
<div class="it-hero-wrapper it-hero-small-size">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="img title" alt="imagealt"></div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Con contenuti testuali
Esempio di Hero con tutti i componenti testuali

{% capture example %}
<div class="it-hero-wrapper">
  <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="it-hero-text-wrapper bg-dark">
              <span class="it-category">Category</span>
              <h1 class="no_toc">Heading lorem ipsum dolor sit amet, consetetur sadipscing.</h1>
              <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
              <div class="it-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Label button</a></div>
          </div>
        </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con contenuti testuali centrati
Per ottenere il componente Hero centrando i testi orizzontalmente:   
aggiungere al div `.it-hero-wrapper` la classe `.it-text-centered`.

{% capture example %}
<div class="it-hero-wrapper it-text-centered">
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="it-hero-text-wrapper bg-dark">
               <span class="it-category">Category</span>
               <h1 class="no_toc">Heading lorem ipsum dolor sit amet, consetetur sadipscing.</h1>
               <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
               <div class="it-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Label button</a></div>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Con testi ed immagine di sfondo
Per visualizzare i testi in overlay sulle immagini, viene creato un div scuro in opacità per migliorare la leggibilità del testo in caso di immagini dai toni chiari.
aggiungere al div `.it-hero-wrapper` la classi:  
**`.it-overlay`** : crea il div che si sovrappone all'immagine  
**`.it-dark`** : definisce il colore di background del div in overlay.

{% capture example %}
<div class="it-hero-wrapper it-dark it-overlay">
  <!-- - img-->
  <div class="img-responsive-wrapper">
    <div class="img-responsive">
        <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="img title" alt="imagealt"></div>
    </div>
  </div>
  <!-- - texts-->
  <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="it-hero-text-wrapper bg-dark">
              <span class="it-category">Category</span>
              <h1 class="no_toc">Heading lorem ipsum dolor sit amet, consetetur sadipscing.</h1>
              <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
              <div class="it-btn-container"><a class="btn btn-sm btn-secondary" href="#">Label button</a></div>
          </div>
        </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con overlay di colore primario
Per un div opaco di colore primario, aggiungere al div `.it-hero-wrapper` la classi:  
**`.it-overlay`** : crea il div che si sovrappone all'immagine  
**`.it-primary`** : definisce il colore di background del div in overlay.

{% capture example %}
<div class="it-hero-wrapper it-primary it-overlay">
   <!-- - img-->
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="img title" alt="imagealt"></div>
      </div>
   </div>
   <!-- - texts-->
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="it-hero-text-wrapper bg-dark">
               <span class="it-category">Category</span>
               <h1 class="no_toc">Heading lorem ipsum dolor sit amet, consetetur sadipscing.</h1>
               <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
               <div class="it-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Label button</a></div>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Con overlay e filtro di colore primario
Per aggiungere un filtro di tipo "screen" aggiungere al div `.it-hero-wrapper` la classi:  
**`.it-overlay`** : crea il div che si sovrappone all'immagine  
**`.it-filter`** : definisce il filtro da applicare all'immagine.

{% capture example %}
<div class="it-hero-wrapper it-filter it-overlay">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="img title" alt="imagealt"></div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Con immagine e margine negativo per contenuti sovrapposti
In alcuni casi, il contenuto che seguirà la card può sovrapporsi al componente Hero.
Aggiungere al div  `.it-hero-wrapper` la classe `.it-bottom-overlapping-content` per far si che il contenuto seguente si sovrapponga al componente Hero (in questo caso il componente seguente è una card)

{% capture example %}
<div class="it-hero-wrapper it-dark it-overlay it-bottom-overlapping-content">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="img title" alt="imagealt"></div>
      </div>
   </div>
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="it-hero-text-wrapper bg-dark">
               <span class="it-category">Category</span>
               <h1 class="no_toc">Heading lorem ipsum dolor sit amet, consetetur sadipscing.</h1>
               <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
               <div class="it-btn-container"><a class="btn btn-sm btn-secondary" href="#">Label button</a></div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="container">
   <div class="row">
      <div class="col-12">
         <div class="card-wrapper card-space">
            <div class="card card-bg">
               <div class="card-body">
                  <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a class="read-more" href="#">
                     <span class="text">Leggi di più</span>
                     <svg class="icon">
                        <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}
