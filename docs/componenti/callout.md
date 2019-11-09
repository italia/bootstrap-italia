---
layout: docs
group: componenti
toc: true
title: Callout
description: Componente per evidenziare contenuti testuali
---

I Callout posso essere utilizzati per evidenziare alcune parti del testo che richiedono particolare attenzione. Possono contenere messaggi di errore, avvertimento suggerimenti etc.

## Esempi

Il Callout basico è costituito da un contenitore `<div>` con classe `.callout`, un titolo contenuto in un `<div>` con classe `.callout-title` e un testo contenuto in uno o più tag `<p>`.

Al titolo può essere aggiunta un'icona a scelta fra quelle disponibili, avendo cura di nasconderla agli screen reader con la proprietà `aria-hidden="true"`.

{% capture callout %}
##### Accessibilità

Nel caso l'icona comunicasse visivamente contenuti non disponibili nel testo (ad esempio un allarme o una conferma) questa andrà affiancata da un testo riservato agli screen reader: `<span class="sr-only">Testo alternativo</span>`
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<div class="callout">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg><span class="sr-only">Confermato</span> Titolo callout</div>
  <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.</p>
</div>
{% endcapture %}{% include example.html content=example %}

Al Callout può essere aggiunta una classe che determina il colore del bordo e del titolo. Le classi disponibili elencate qui di seguito.

### Callout Success

Aggiungere la classe `.success` per indicare una procedura andata a buon fine.

{% capture example %}
<div class="callout success">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Usa</div>
  <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Warning

Aggiungere la classe `.warning` per indicare una procedura o testo che richiede l'attenzione dell'utente.

{% capture example %}
<div class="callout warning">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-help-circle"></use></svg>Attenzione</div>
  <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Danger

Aggiungere la classe `.danger` per indicare un errore o una procedura pericolosa o non consentita.

{% capture example %}
<div class="callout danger">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close-circle"></use></svg>Non usare</div>
  <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Important

Aggiungere la classe `.important` per attirare ulteriormente l'attenzione.

{% capture example %}
<div class="callout important">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Importante</div>
  <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Note

Aggiungere la classe `.note` per caratterizzare il Callout come una nota.

{% capture example %}
<div class="callout note">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Note a riguardo</div>
  <p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

## Callout Highlights

Aggiungendo la classe `.callout-highlight` si ottiene una differente versione del Callout, con bordo solo sul lato sinistro.

Per aumentare la dimensione di un paragrafo contenuto nel Callout applicare la classe `.callout-big-text` allo stesso.

{% capture example %}
<div class="callout callout-highlight">
  <div class="callout-title">Titolo callout</div>
  <p class="callout-big-text">Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.</p>
  <p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a></p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Success

{% capture example %}
<div class="callout callout-highlight success">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Usa</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Warning

{% capture example %}
<div class="callout callout-highlight warning">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Attenzione</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Danger

{% capture example %}
<div class="callout callout-highlight danger">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Non usare</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Important

{% capture example %}
<div class="callout callout-highlight important">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Importante</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Note

{% capture example %}
<div class="callout callout-highlight note">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Note</div>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

## Callout Approfondimento

Il Callout di tipo Approfondimento, ottenibile aggiungendo la classe `.callout-more`, ha un aspetto radicalmente differente dagli altri stili disponibili ed è indicato per testi più estesi.

Come da esempio, è possibile aggiungere ulteriore testo all'interno di un <a href="../../componenti/collapse/">Collapse</a> standard presente al fondo del contenuto.

Il bottone di controllo del Collapse può essere affiancato da un link per download di PDF o altri tipi di documento, con relativa icona.

{% capture example %}
<div class="callout callout-more note">
  <div class="callout-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-zoom-in"></use></svg><span>Approfondimento</span></div>
  <p>Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique.</p>
  <p>Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
  <p>Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
  <div class="collapse-div" id="collapseDiv1">
    <div class="collapse-header" id="heading1">
      <button aria-controls="collapse1" aria-expanded="false" class="callout-more-toggle" data-target="#collapse1" data-toggle="collapse">
        Leggi tutto <span></span>
      </button>
      <a class="callout-more-download" href="#"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-download"></use></svg><span class="sr-only">PDF </span> Download</a>
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
