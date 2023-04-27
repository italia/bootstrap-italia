---
layout: docs
group: componenti
toc: true
title: Overlay Panel
description: Per applicare label sovrapposte ad immagini o elementi.
---

La struttura basica è composta da un contenitore `<figure>` con classe `.overlay-wrapper`. L'immagine contenuta conserva la sua dimensione naturale.

L'overlay, una `<figcaption>` con classe `.overlay-panel`, si posizione a piede dell'immagine. Ha un'altezza fissa e una larghezza corrispondente a quella dell'immagine.

Nel caso il testo contenuto sia troppo lungo verrà troncato con l'utilizzo di ellissi.

Aggiungendo all'Overlay Panel la classe `.overlay-panel-fullheight` questo coprirà per intero l'immagine.

## Esempio

Il colore predefinito dell'Overlay Panel corrisponde al colore Primary.

{% comment %}Example name: Colore primary{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6">
      <p><strong>Overlay ad altezza fissa</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid">
        <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6">
      <p><strong>Overlay a tutta altezza</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid">
        <figcaption class="overlay-panel overlay-panel-fullheight"><span>Label immagine</span></figcaption>
      </figure>
    </div>
    <div class="col-12">
      <p><strong>Esempio con differenti proporzioni</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid">
        <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
      </figure>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay Nero

Aggiungendo all'Overlay Panel la classe `.overlay-black` si ottiene un overlay di colore nero.

{% comment %}Example name: Colore nero{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6">
      <p><strong>Overlay ad altezza fissa</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid">
        <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6">
      <p><strong>Overlay a tutta altezza</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid">
        <figcaption class="overlay-panel overlay-panel-fullheight overlay-black"><span>Label immagine</span></figcaption>
      </figure>
    </div>
    <div class="col-12">
      <p><strong>Esempio con differenti proporzioni</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid">
        <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
      </figure>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay con icona

Per ottenere un Overlay Panel con icona centrata in verticale ed orizzontale aggiungere la classe `.overlay-icon`.

{% capture callout %}

#### Accessibilità

Ricordarsi di aggiungere un testo alternativo per Screen Reader che comunichi lo stesso messaggio dell'icona.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con icona{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6">
      <p><strong>Overlay Primary (default)</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine">
        <figcaption class="overlay-panel overlay-icon">
          <span class="visually-hidden">Immagine Preferita</span>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6">
      <p><strong>Overlay Nero</strong></p>
      <figure class="overlay-wrapper">
        <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine">
        <figcaption class="overlay-panel overlay-black overlay-icon">
          <span class="visually-hidden">Immagine Preferita</span>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </figcaption>
      </figure>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
