---
layout: docs
title: Video Player
description: Componente Video Player.
group: componenti
toc: true
---

Il tag `video` HTML5 consente di incorporare video all'interno di una pagina web senza 
dover utilizzare plugin esterni. Per gestire la riproduzione e l'interazione con l'utente,
è possibile utilizzare diverse librerie JavaScript. 
Questo componente utilizza la libreria video.js per implementare funzionalità avanzate
come il supporto a diversi formati video, la personalizzazione dell'interfaccia utente
e l'integrazione con API esterne.

## Come funziona

Il player viene istanziato automaticamente quando è presente l'attributo `data-bs-video`.

{% capture example %}
<video controls data-bs-video>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
</video>
{% endcapture %}{% include example.html content=example %}

### Controllare il player con i data-attribute

Il player offre numerose opzioni di configurazione per personalizzare l'aspetto e 
il comportamento del player stesso. Una delle modalità per configurare il player consiste
nell'utilizzare l'attributo `data-setup` definito all'interno del tag `video` avente come
valore un array in formato JSON.

```html
<video controls data-bs-video data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
</video>
```

{% capture callout %}

##### Importante!

Nota l'uso delle virgolette singole, `data-setup` si aspetta di ricevere un JSON.
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture example %}
<video 
  data-bs-video 
  data-setup='{
    "controls": true,
    "autoplay": false, 
    "preload": "auto"
  }'
>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
</video>
{% endcapture %}{% include example.html content=example %}

Per vedere tutte le opzioni disponibili, consultare la documentazione di
[VideoJS](https://videojs.com/guides/options/).

### Controllare il player con JavaScript

Puoi anche controllare il player tramite javascript, di seguito un esempio.

```js
const videoEl = document.getElementById("albatrosvideo");
const player = bootstrap.VideoPlayer.getOrCreateInstance(videoEl).player;
player.pause();
```

Per vedere tutte le opzioni disponibili, consultare la documentazione di 
[VideoJS](https://docs.videojs.com/player).

## Sottotitoli, didascalie, capitoli e descrizioni

Tramite il tag `track` puoi aggiungere del testo accessibile presente
in un file testuale; l'unico formato supportato è [WebVTT](https://www.w3.org/TR/webvtt1/).
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

## Streaming

Servire video tramite dei file in formato `mp4` o `webm` (che sono i formati 
più supportati) non è la migliore soluzione in termini di performance e di
ottimizzazione della banda.
Per garantire una buona esperienza utente è fondamentale scegliere il formato 
di riproduzione più adatto. In questo contesto, i formati di streaming 
HLS e DASH offrono importanti vantaggi rispetto al tradizionale file MP4.
L'uso dei formati di streaming permette una riproduzione fluida dei video online
grazie alla loro capacità di adattarsi alla larghezza di banda disponibile. 
In questo modo si evitano interruzioni o rallentamenti durante la visualizzazione, 
migliorando l'esperienza utente. Inoltre, questi formati consentono di distribuire 
il contenuto su diverse piattaforme e dispositivi, aumentando la portabilità del video.

Di seguito un esempio in formato MPEG-DASH

{% capture example %}
<video 
  data-bs-video
  poster="https://picsum.photos/800/300?image=1055"
  preload="auto"
  data-setup='{
    "controls": true,
    "autoplay": false,
    "fluid": true
  }'
>
  <source src="https://dash.akamaized.net/dash264/TestCasesHD/2b/qualcomm/1/MultiResMPEG2.mpd" type="application/dash+xml">
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

Di seguito un esempio in formato HLS multilingua (solo DASH e HLS supportano più tracce audio).

{% capture example %}
<video
  data-bs-video
  poster="https://picsum.photos/800/300?image=1055"
  preload="auto"
  data-setup='{
    "controls": true,
    "autoplay": false,
    "fluid": true
  }'
>
  <source src="https://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multi_language_subs.m3u8" type="application/x-mpegURL">
</video>
{% endcapture %}{% include example.html content=example %}

Le playlist HLS e DASH possono essere condivise su più domini condividendo solo l'URL.
Tuttavia, a causa delle restrizioni imposte dalle politiche di sicurezza del browser,
l'utilizzo di queste playlist in domini diversi da quello originale può causare errori 
di CORS (Cross-Origin Resource Sharing). In altre parole, il browser può rifiutare 
l'accesso alle risorse audio e video, impedendo la corretta riproduzione 
del contenuto multimediale.

Per superare questo problema, è necessario configurare correttamente il server che
fornisce le risorse audio e video, consentendo l'accesso a domini esterni tramite 
il protocollo CORS. In alternativa, è possibile utilizzare soluzioni di proxy 
per aggirare le restrizioni del browser e riprodurre il contenuto multimediale 
su altri domini.

## Embed da piattaforme terze

Oltre a consentire la riproduzione di video direttamente sulle proprie pagine web, 
il player video.js offre anche la possibilità di incorporare video provenienti 
da altre piattaforme come YouTube o Vimeo. Questa funzionalità consente di sfruttare
i video già disponibili su queste piattaforme, senza doverli caricare sul proprio sito web.
Tuttavia, è importante tenere in considerazione la questione della privacy: 
quando si incorporano video di terze parti, si può finire per condividere con queste 
piattaforme i dati degli utenti che visualizzano i video, come ad esempio le informazioni 
sulla navigazione o l'indirizzo IP. È quindi importante valutare attentamente l'utilizzo 
di questa funzionalità e bisogna adottare misure di protezione della privacy degli utenti.

***esempi***

### Attivazione dell'overlay di consenso

L'utilizzo di un overlay per il consenso è una soluzione comune per garantire 
la conformità alla normativa sulla privacy in materia di cookie e tracciamento degli utenti.
L'overlay per il consenso consente di informare l'utente sui cookie utilizzati e 
di ottenere il suo consenso in modo esplicito e consapevole alla riproduzione del video

***esempi***
