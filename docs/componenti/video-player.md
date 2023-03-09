---
layout: docs
title: Video Player
description: Componente Video Player.
group: componenti
toc: true
---

Il tag `video` HTML5 consente di incorporare video all'interno di una pagina web senza 
dover utilizzare plugin esterni. Questo componente utilizza la libreria video.js per 
implementare funzionalità avanzate come il supporto a diversi formati video, 
la personalizzazione dell'interfaccia utente e l'integrazione con API esterne.

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
il comportamento dello stesso. Una delle modalità per configurarlo consiste
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

Servire i video tramite dei file in formato `mp4` o `webm` (che sono i formati 
più supportati) non è la migliore soluzione in termini di performance e di
ottimizzazione della banda.
Per garantire una buona esperienza utente è fondamentale scegliere il formato 
di riproduzione più adatto. In questo contesto, i formati di streaming 
`HLS` e `DASH` offrono importanti vantaggi rispetto al tradizionale file MP4.
L'uso dei formati di streaming permette una riproduzione fluida dei video online
grazie alla loro capacità di adattarsi alla larghezza di banda disponibile. 
In questo modo si evitano interruzioni o rallentamenti durante la visualizzazione, 
migliorando l'esperienza utente. Inoltre, questi formati consentono di distribuire 
il contenuto su diverse piattaforme e dispositivi, aumentando la portabilità del video.

{% capture callout %}

##### Tip

FFmpeg è uno strumento di conversione multimediale open-source che consente di convertire
facilmente i file MP4 in formati adattivi come HLS o DASH, ti permette la conversione del
video MP4 in un formato a bitrate variabile per adattare la qualità del video alle diverse
velocità di connessione degli utenti.
Approfondisci su [FFmpeg](https://ffmpeg.org/)
{% endcapture %}{% include callout.html content=callout type="info" %}

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

Le playlist HLS e DASH possono essere riprodotte su più domini condividendo solo l'URL.
Tuttavia, a causa delle restrizioni imposte dalle politiche di sicurezza del browser,
l'utilizzo di queste playlist in domini diversi da quello originale può causare errori 
CORS (Cross-Origin Resource Sharing). In altre parole, il browser può rifiutare 
l'accesso alle risorse audio e video, impedendo la corretta riproduzione 
del contenuto multimediale.

Per superare questo problema, è necessario configurare correttamente il server che
fornisce le risorse audio e video, consentendo l'accesso a domini esterni tramite 
il protocollo CORS.

### Gestire più tracce audio
L'uso di più tracce audio nei video è una buona tecnica per migliorare l'accessibilità 
dei contenuti multimediali. Ad esempio, è possibile creare una traccia audio aggiuntiva 
che descrive in dettaglio le immagini e le azioni che si svolgono nel video, per aiutare 
le persone non vedenti a comprendere il contenuto visivo. Inoltre, l'aggiunta di tracce 
audio in lingue diverse consente di offrire il video in più lingue.

Di seguito un esempio in formato HLS multilingua.

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

{% capture callout %}

##### Tieni presente che

Video.js offre un'implementazione cross-browser delle tracce audio, a condizione che la 
tecnologia di riproduzione supporti le tracce audio. Le tracce audio per i file mp4 sono
supportate solo da Safari, altri browser non supportano la riproduzione mp4 con più tracce
audio. L'unico modo per fornire l'audio multi-traccia è l'uso dei formati HLS e/o DASH. 
Approfondisci su [Video.js](https://videojs.com/guides/audio-tracks/)  
{% endcapture %}{% include callout.html content=callout type="info" %}

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

{% capture example %}
  <video controls data-bs-video id="video-youtube"
    class="video-js"
    width="640" height="264"
    data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}] }'>
  </video>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
  <video controls data-bs-video id="video-vimeo"
    class="video-js"
    width="640" height="264"
    data-setup='{ "techOrder": ["vimeo"], "sources": [{ "type": "video/vimeo", "src": "https://vimeo.com/326701979"}]}'>
  </video>
{% endcapture %}{% include example.html content=example %}

### Attivazione dell'overlay di consenso

L'utilizzo di un overlay per il consenso è una soluzione comune per garantire 
la conformità alla normativa sulla privacy in materia di cookie e tracciamento degli utenti.
L'overlay per il consenso consente di informare l'utente sui cookie utilizzati e 
di ottenere il suo consenso in modo esplicito e consapevole alla riproduzione del video

{% capture example %}
<div class="row acceptoverlayable">
  <div class="acceptoverlay acceptoverlay-primary fade show" id="acceptoverlay1">
    <div class="acceptoverlay-inner">
      <div class="acceptoverlay-icon">
        <svg class="icon icon-xl"><use href="/dist/svg/sprites.svg#it-video"></use></svg>
      </div>
      <p>Questo contenuto è ospitato da un sito di terze parti. Mostrando il contenuto esterno accetti i <a href="https://www.youtube.com/t/terms" class="text-white">termini e le condizioni di youtube.com.</a></p>
      <div class="acceptoverlay-buttons bg-dark">
        <button type="button" class="btn btn-primary">Accetta</button>
        <button type="button" class="btn btn-primary">Accetta e ricorda la mia scelta</button>
      </div>
    </div>
  </div>
  <video controls data-bs-video id="vid1"
    class="video-js"
    width="640" height="264">
  </video>
</div>
{% endcapture %}{% include example.html content=example %}

## Plugin

Esistono numerosi [plugin](https://videojs.com/plugins/) disponibili per video.js, che
consentono di aggiungere nuove funzionalità, come la riproduzione di video in VR, 
l'analisi delle statistiche di visualizzazione del video, le utility per la UI mobile 
e molto altro ancora.
