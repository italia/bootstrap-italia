---
layout: docs
title: Video Player
description: Componente Video Player.
group: componenti
toc: true
---

Lorem ipsum descrizione

## Come funziona

Puoi usare un contenitore video con l'attributo `data-bs-video` .

{% capture example %}
<video controls data-bs-video>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
</video>
{% endcapture %}{% include example.html content=example %}

### Attivazione dell'overlay di consenso

Lorem ipsum

### Controllare il player con i data-attribute

Lorem ipsum

### Controllare il player con JavaScript

```js
const videoEl = document.getElementById("albatrosvideo");
const player = bootstrap.VideoPlayer.getOrCreateInstance(videoEl).player;
player.pause();
```

Per vedere tutte le opzioni disponibili, consultare la documentazione di 
[VideoJS](https://docs.videojs.com/player).

## Sottotitoli, didascalie, capitoli e descrizioni

Tramite il tag `track` puoi aggiungere del testo assistivo presente
in un file testuale, l'unico formato supportato è [WebVTT](https://www.w3.org/TR/webvtt1/).
Valorizzando opportunamente l'attributo `kind` puoi specificare se
il file associato contiene i sottotitoli (trascrizione dei dialoghi),
le didascalie (trascrizione dei dialoghi, degli effetti sonori, trascrizione
del tipo di emozioni rappresentate dalla musica, ecc), i capitoli e/o la descrizione
generica del video.

Di seguito un esempio d'uso delle didascalie (`kind="captions"`) in
diverse lingue.

{% capture example %}
<video controls data-bs-video>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
  <track 
    kind="captions" 
    src="//example.com/path/to/captions-it.vtt" 
    srclang="it" 
    label="Italiano" default>
  <track 
    kind="captions" 
    src="//example.com/path/to/captions-en.vtt" 
    srclang="en" 
    label="English">
  <track 
    kind="captions" 
    src="//example.com/path/to/captions-ch.vtt" 
    srclang="ch" 
    label="中文">
</video>
{% endcapture %}{% include example.html content=example %}

Approfondisci l'argomento consultando la documentazione di 
[VideoJS (Inglese)](https://videojs.com/guides/text-tracks/)

## Streaming asincrono

Lorem ipsum
