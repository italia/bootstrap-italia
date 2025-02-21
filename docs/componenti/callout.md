---
layout: docs
group: componenti
toc: true
title: Callout
description: Componente per evidenziare contenuti testuali.
---

I Callout posso essere utilizzati per evidenziare alcune parti del testo che richiedono particolare attenzione. Possono contenere messaggi di errore, avvertimento, suggerimenti, ecc.

## Esempi

Il Callout basico è costituito da un contenitore `<div>` con classe `.callout`, un contenitore `<div>` con classe `.callout-inner` contenente a sua volta un titolo contenuto in un `<div>` con classe `.callout-title`. A seguire il testo del contenuto principale del Callout incluso in uno o più tag `<p>`.

Al titolo può essere aggiunta un'icona a scelta fra quelle disponibili, avendo cura di nasconderla agli screen reader con la proprietà `aria-hidden="true"`.

{% capture callout %}

#### Accessibilità

Nel caso l'icona comunicasse visivamente contenuti non disponibili nel testo (ad esempio un allarme o una conferma) questa andrà affiancata da un testo riservato agli screen reader: `<span class="visually-hidden">Testo alternativo</span>`
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

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

Al Callout può essere aggiunta una classe che determina il colore del bordo e del titolo. Le classi disponibili sono elencate qui di seguito.

### Callout Success

Aggiungere la classe `.success` per indicare una procedura andata a buon fine.

{% comment %}Example name: Successo{% endcomment %}
{% capture example %}

<div class="callout success">
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

Aggiungere la classe `.warning` per indicare una procedura o testo che richiede l'attenzione dell'utente.

{% comment %}Example name: Attenzione{% endcomment %}
{% capture example %}

<div class="callout warning">
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

Aggiungere la classe `.danger` per indicare un errore o una procedura pericolosa o non consentita.

{% comment %}Example name: Pericolo o errore{% endcomment %}
{% capture example %}

<div class="callout danger">
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

### Callout Important

Aggiungere la classe `.important` per attirare ulteriormente l'attenzione.

{% comment %}Example name: Importante{% endcomment %}
{% capture example %}

<div class="callout important">
  <div class="callout-inner">
    <div class="callout-title">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>
      <span class="visually-hidden">Importante</span> 
      <span class="text">Importante</span>
    </div>
    <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Note

Aggiungere la classe `.note` per caratterizzare il Callout come una nota.

{% comment %}Example name: Nota{% endcomment %}
{% capture example %}

<div class="callout note">
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

## Callout Highlights

Aggiungendo la classe `.callout-highlight` si ottiene una differente versione del Callout, con bordo solo sul lato sinistro.

Per aumentare la dimensione di un paragrafo contenuto nel Callout applicare la classe `.callout-big-text` allo stesso.

{% comment %}Example name: Testo, in evidenza{% endcomment %}
{% capture example %}
<div class="callout callout-highlight">
  <div class="callout-title">Titolo callout</div>
  <p class="callout-big-text">Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.</p>
  <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a></p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Success

{% comment %}Example name: Successo, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight success">
  <div class="callout-title"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo di conferma</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Warning

{% comment %}Example name: Attenzione, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight warning">
  <div class="callout-title"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-help-circle"></use></svg>Titolo di attenzione</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Danger

{% comment %}Example name: Pericolo o errore, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight danger">
  <div class="callout-title"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg>Titolo di allerta</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Important

{% comment %}Example name: Importante, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight important">
  <div class="callout-title"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>Importante</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Note

{% comment %}Example name: Nota, in evidenza{% endcomment %}
{% capture example %}

<div class="callout callout-highlight note">
  <div class="callout-title"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>Note</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

## Callout Approfondimento

Il Callout di tipo Approfondimento, ottenibile aggiungendo la classe `.callout-more`, ha un aspetto radicalmente differente dagli altri stili disponibili ed è indicato per testi più estesi.

Come da esempio, è possibile aggiungere ulteriore testo all'interno di un <a href="../../componenti/collapse/">Collapse</a> standard presente al fondo del contenuto.

Il pulsante di controllo del Collapse può essere affiancato da un link per download di PDF o altri tipi di documento, con relativa icona.

{% comment %}Example name: Approfondimento{% endcomment %}
{% capture example %}

<div class="callout callout-more note">
  <div class="callout-title"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-zoom-in"></use></svg><span>Approfondimento</span></div>
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
Il contenitore `<div>` con classe `.callout` deve essere seguito da un ulteriore contenitore `<div>` con classe `.callout-inner`. Seguire gli esempi e la successiva descrizione per capire la composizione del nuovo componente.
{% endcapture %}{% include callout-breaking.html content=callout version="2.4.0" type="danger" %}
