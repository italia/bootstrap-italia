---
layout: docs
group: componenti
toc: true
title: Callout
description: Componente per evidenziare contenuti testuali.
---

I callout posso essere utilizzati per evidenziare alcune parti del testo che richiedono particolare attenzione. Possono contenere messaggi di errore, avvertimento, suggerimenti, ecc.

## Esempi

Il callout basico è costituito da un contenitore `<div>` con classe `.callout`, un contenitore `<div>` con classe `.callout-inner` contenente a sua volta un titolo contenuto in un `<div>` con classe `.callout-title`. A seguire il testo del contenuto principale del callout incluso in uno o più tag `<p>`.

Al titolo può essere aggiunta un'icona a scelta fra quelle disponibili, avendo cura di nasconderla agli screen reader con la proprietà `aria-hidden="true"`.
{% capture callout %}

#### Accessibilità

Nel caso l'icona comunicasse visivamente contenuti non disponibili nel testo (ad esempio un allarme o una conferma) questa andrà affiancata da un testo riservato agli screen reader: `<span class="visually-hidden">Testo alternativo</span>`
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Callout Base

{% comment %}Example name: Testo{% endcomment %}
{% capture example %}
<div class="callout">
  <div class="callout-inner">
    <div class="callout-title">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>
      <span class="visually-hidden">Confermato</span> 
      <span class="text">Titolo callout</span>
    </div>
    <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Per aumentare la dimensione di un paragrafo contenuto nel callout applicare la classe `.callout-big-text` allo stesso.

{% comment %}Example name: Testo{% endcomment %}
{% capture example %}
<div class="callout">
  <div class="callout-inner">
    <div class="callout-title">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>
      <span class="visually-hidden">Confermato</span> 
      <span class="text">Titolo callout</span>
    </div>
    <p class="callout-big-text">Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Al callout può essere aggiunta una classe che determina il colore del bordo e del titolo. Le classi disponibili sono elencate qui di seguito.

### Callout Primario

Aggiungere la classe `.callout-primary` per applicare il colore primario agli elementi grafici del callout. È consigliato per dare un evidenza particolare al componente nel contesto della pagina.

{% comment %}Example name: Nota{% endcomment %}
{% capture example %}

<div class="callout callout-primary">
  <div class="callout-inner">
    <div class="callout-title">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>
      <span class="visually-hidden">Note</span> 
      <span class="text">Note a riguardo</span>
    </div>
    <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Success

Aggiungere la classe `.success` per indicare una procedura andata a buon fine.

{% comment %}Example name: Successo{% endcomment %}
{% capture example %}

<div class="callout callout-success">
  <div class="callout-inner">
    <div class="callout-title">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
      <span class="visually-hidden">Titolo di conferma</span> 
      <span class="text">Titolo di conferma</span>    
    </div>
    <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Warning

Aggiungere la classe `.callout-warning` per indicare una procedura o testo che richiede l'attenzione dell'utente.

{% comment %}Example name: Attenzione{% endcomment %}
{% capture example %}

<div class="callout callout-warning">
  <div class="callout-inner">
    <div class="callout-title">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-help-circle"></use></svg>
      <span class="visually-hidden">Titolo di attenzione</span> 
      <span class="text">Titolo di attenzione</span>
    </div>
    <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Danger

Aggiungere la classe `.callout-danger` per indicare un errore o una procedura pericolosa o non consentita.

{% comment %}Example name: Pericolo o errore{% endcomment %}
{% capture example %}

<div class="callout callout-danger">
  <div class="callout-inner">
    <div class="callout-title">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg>
      <span class="visually-hidden">Titolo di allerta</span> 
      <span class="text">Titolo di allerta</span>
    </div>
    <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Callout Highlight

Aggiungendo la classe `.callout-highlight` si ottiene una differente versione del callout, con bordo solo sul lato sinistro.

### Highlight Base

{% comment %}Example name: Testo, in evidenza{% endcomment %}
{% capture example %}
<div class="callout callout-highlight">
  <div class="callout-title">Titolo callout</div>
  <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a></p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Primario

{% comment %}Example name: Testo, in evidenza{% endcomment %}
{% capture example %}
<div class="callout callout-highlight callout-primary">
  <div class="callout-title">Titolo callout</div>
  <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a></p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Success

{% comment %}Example name: Successo, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight callout-success">
  <div class="callout-title">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
    Titolo di conferma
  </div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Warning

{% comment %}Example name: Attenzione, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight callout-warning">
  <div class="callout-title">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-help-circle"></use></svg>
    Titolo di attenzione
  </div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Danger

{% comment %}Example name: Pericolo o errore, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight callout-danger">
  <div class="callout-title">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg>
    Titolo di allerta
  </div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}


## Callout Approfondimento

Il callout di tipo approfondimento, ottenibile aggiungendo la classe `.callout-more`, ha un aspetto radicalmente differente dagli altri stili disponibili ed è indicato per testi più estesi.

Come da esempio, è possibile aggiungere ulteriore testo all'interno di un <a href="../../componenti/collapse/">Collapse</a> standard presente al fondo del contenuto.

Il pulsante di controllo del collapse può essere affiancato da un link per download di PDF o altri tipi di documento, con relativa icona.

{% comment %}Example name: Approfondimento{% endcomment %}
{% capture example %}

<div class="callout callout-more note">
  <div class="callout-title"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg><span>Approfondimento</span></div>
  <p>Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique.</p>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
  <div class="collapse-div" id="collapseDiv1">
    <div class="collapse-header" id="heading1">
      <button aria-controls="collapse1" aria-expanded="false" class="callout-more-toggle" data-bs-target="#collapse1" data-bs-toggle="collapse">
        Leggi tutto <span></span>
      </button>
      <a class="callout-more-download" href="#"><svg class="icon me-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-download"></use></svg><span class="visually-hidden">PDF </span>Download</a>
    </div>
    <div aria-labelledby="heading1" class="collapse" id="collapse1" role="tabpanel">
      <div class="collapse-body">
        <p>Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at ultrices lorem. Pellentesque ac diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui purus. Mauris in imperdiet risus, sed blandit tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem vel volutpat rhoncus, neque mi ullamcorper ante, vitae volutpat ipsum quam id purus. Duis tincidunt sodales nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui ultrices. Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
        <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
        <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Breaking change

{% capture callout %}
- Il carattere di default del contenuto diventa senza grazie e con dimensione `16px`. 
- È disponibile la nuova classe `.callout-big-text` per aumentare la dimensione del carattere del contenuto. 
- È disponibile la nuova classe `.callout-primary`.
- Le classi che controllano il colore diventano specifiche per il componente, ad esempio le classi `.success` e `.danger` diventano `.callout-success` e `.callout-danger`.
- Sono state rimosse la classi `.important` e `.note` a favore delle varianti standard. 
{% endcapture %}{% include callout-breaking.html content=callout version="3.0.0" type="danger" %}

{% capture callout %}
Il contenitore `<div>` con classe `.callout` deve essere seguito da un ulteriore contenitore `<div>` con classe `.callout-inner`. Seguire gli esempi e la successiva descrizione per capire la composizione del nuovo componente.
{% endcapture %}{% include callout-breaking.html content=callout version="2.4.0" type="danger" %}
