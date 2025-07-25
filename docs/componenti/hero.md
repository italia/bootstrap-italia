---
layout: docs
title: Hero
description: La Hero (ciò che Bootstrap definisce "Jumbotron") è un componente per la presentazione di contenuti in evidenza.
group: componenti
toc: true
---

La hero è un componente leggero e flessibile che può facoltativamente estendere l'intera finestra per mostrare i messaggi in evidenza sul tuo sito.
Di seguito una serie di esempi con la descrizione degli elementi e delle classi applicabili.

Gli elementi da cui è composto sono:

- Titolo occhiello
- Titolo principale (heading)
- Paragrafo
- Uno o più pulsanti (call to action)
- Immagine di background

Poiché il componente occupa in larghezza l'intera pagina, consulta la **[pagina di esempio]**({{ site.baseurl }}/docs/esempi/hero/){:target="\_blank"} per visualizzare tutte le varianti in un contesto reale.

{% capture callout %}

#### Accessibilità

Valutare attentamente l'opportunità di utilizzare più hero nella stessa pagina.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Con immagine

Il componente Hero è contenuto all'interno della section `.it-hero-wrapper` al quale si possono aggiungere classi che ne varieranno l'aspetto.

{% capture callout %}

#### Accessibilità sola immagine

Nel caso di un componente hero con sola immagine utilizzare il tag `section` con attributo `aria-label="In evidenza"`.<br>

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con immagine{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper" aria-label="In evidenza">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="titolo immagine" alt="descrizione immagine"></div>
      </div>
   </div>
</section>
{% endcapture %}{% include example.html content=example %}

### Versione small
Per ottenere il componente Hero nella sua versione più piccola:  
aggiungere alla section `.it-hero-wrapper` la classe `.it-hero-small-size`.

{% comment %}Example name: Con immagine, piccolo{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper it-hero-small-size"  aria-label="In evidenza">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="titolo immagine" alt="descrizione immagine"></div>
      </div>
   </div>
</section>
{% endcapture %}{% include example.html content=example %}

## Con contenuti testuali

Esempio di Hero con tutti i componenti testuali.

{% capture callout %}

#### Accessibilità contenuti testuali

Nei casi in cui fossero presenti contenuti testuali utilizzare per il titolo il livello `h` corretto a seconda del contesto.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con testo{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper">
  <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="it-hero-text-wrapper bg-dark">
              <span class="it-category">Titolo occhiello</span>
              <h1 class="no_toc">Titolo della sezione</h1>
              <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
              <div class="it-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a></div>
          </div>
        </div>
    </div>
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

### Con contenuti testuali centrati

Per ottenere il componente Hero con testi centrati orizzontalmente:  
aggiungere alla section `.it-hero-wrapper` la classe `.it-text-centered`.

{% comment %}Example name: Con testo, centrato{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper it-text-centered">
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="it-hero-text-wrapper bg-dark">
               <span class="it-category">Titolo occhiello</span>
               <h2 class="no_toc">Titolo della sezione</h2>
               <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
               <div class="it-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Azione primaria</a></div>
            </div>
         </div>
      </div>
   </div>
</section>
{% endcapture %}{% include example.html content=example %}

## Con testi ed immagine di sfondo

Per visualizzare i testi in overlay sulle immagini, viene creato un div scuro in opacità per migliorare la leggibilità del testo in caso di immagini dai toni chiari.  
Aggiungere alla section `.it-hero-wrapper` la classi:

- **`.it-overlay`**: crea il div che si sovrappone all'immagine
- **`.it-dark`**: definisce il colore di background del div in overlay

{% capture callout %}

#### Accessibilità e contrasto

Verificare che l'immagine utilizzata assicuri sempre un adeguato contrasto rispetto al testo.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con testo e immagine di sfondo{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper it-dark it-overlay">
  <!-- - img-->
  <div class="img-responsive-wrapper">
    <div class="img-responsive">
        <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="titolo immagine" alt="descrizione immagine"></div>
    </div>
  </div>
  <!-- - texts-->
  <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="it-hero-text-wrapper bg-dark">
              <span class="it-category">Titolo occhiello</span>
              <h2 class="no_toc">Titolo della sezione</h2>
              <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
              <div class="it-btn-container"><a class="btn btn-sm btn-secondary" href="#">Azione primaria</a></div>
          </div>
        </div>
    </div>
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

### Con overlay di colore primario

Per un div opaco di colore primario, aggiungere alla section `.it-hero-wrapper` la classi:

- **`.it-overlay`**: crea il div che si sovrappone all'immagine
- **`.it-primary`**: definisce il colore di background del div in overlay.

{% comment %}Example name: Con overlay di colore primary{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper it-primary it-overlay">
   <!-- - img-->
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="titolo immagine" alt="descrizione immagine"></div>
      </div>
   </div>
   <!-- - texts-->
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="it-hero-text-wrapper bg-dark">
               <span class="it-category">Titolo occhiello</span>
               <h2 class="no_toc">Titolo della sezione</h2>
               <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
               <div class="it-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Azione primaria</a></div>
            </div>
         </div>
      </div>
   </div>
</section>
{% endcapture %}{% include example.html content=example %}

### Con overlay e filtro di colore primario

Per aggiungere un filtro di tipo "screen" aggiungere alla section `.it-hero-wrapper` la classi:

- **`.it-overlay`**: crea il div che si sovrappone all'immagine
- **`.it-filter`**: definisce il filtro da applicare all'immagine.

{% comment %}Example name: Con overlay e filtro di colore primary{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper it-filter it-overlay" aria-label="In evidenza">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="titolo immagine" alt="descrizione immagine"></div>
      </div>
   </div>
</section>
{% endcapture %}{% include example.html content=example %}

## Con immagine e margine negativo per contenuti sovrapposti

In alcuni casi, il contenuto che segue può sovrapporsi al componente hero.
Aggiungere alla section `.it-hero-wrapper` la classe `.it-bottom-overlapping-content` per far sì che il contenuto seguente si sovrapponga al componente hero (in questo caso il componente seguente è una card).

{% comment %}Example name: Con immagine e margine negativo{% endcomment %}
{% capture example %}
<section class="it-hero-wrapper it-dark it-overlay it-bottom-overlapping-content">
   <div class="img-responsive-wrapper">
      <div class="img-responsive">
         <div class="img-wrapper"><img src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg" title="titolo immagine" alt="descrizione immagine"></div>
      </div>
   </div>
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="it-hero-text-wrapper bg-dark">
               <span class="it-category">Titolo occhiello</span>
               <h2 class="no_toc">Titolo della sezione</h2>
               <p class="d-none d-lg-block">Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.</p>
               <div class="it-btn-container"><a class="btn btn-sm btn-secondary" href="#">Azione primaria</a></div>
            </div>
         </div>
      </div>
   </div>
</section>
<div class="container">
   <div class="row">
      <div class="col-12"> <!-- <div class="col-12 col-lg-10 offset-lg-1"> e card-space nel wrapper>-->
         <div class="col-12 mb-3 mb-md-4">
            <!--start it-card-->
            <article class="it-card rounded shadow border px-5 py-4">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc h4">
               Titolo del contenuto
            </h3>
            <!--card body content-->
            <div class="it-card-body">
               <p class="it-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="it-card-footer border-0" aria-label="Link correlati:">
               <a href="#" class="it-card-link">Scopri di più <span class="visually-hidden">su Titolo del contenuto</span></a>
            </div>
            </article>
            <!--end it-card-->
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Breaking change

{% capture callout %}
Implementato nell'esempio con immagine e margine negativo per contenuti sovrapposti il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 
{% endcapture %}{% include callout-breaking.html version="2.16.0" content=callout type="danger" %}