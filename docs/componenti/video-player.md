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

{% capture callout %}

#### Accessibilità

Le persone che utilizzano le tecnologie assistive possono agevolmente accedere ai comandi di questo player video, tuttavia per rendere accessibile un contenuto video è necessario soddisfare i Criteri di Successo contenuti nelle [linee guida 1.2 Media temporizzati delle WCAG (versione corrente)](https://www.w3.org/Translations/WCAG21-it/#time-based-media). In particolare:
 - Se il contenuto è costituito da “solo video” oppure “solo audio”, è necessario fornire una trascrizione (Criterio di Successo 1.2.1)
 - Fornire sempre sottotitoli (Criterio di Successo 1.2.2).
 - Fornire audio descrizioni quando sono presenti scene o contenuti non descritte dalla traccia audio primaria. (Criteri di Successo 1.2.3 e 1.2.5)

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Come funziona

Il player viene istanziato automaticamente quando è presente l'attributo `data-bs-video`.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="row">
  <video controls data-bs-video>
    <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
    <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
  </video>
  <div class="vjs-transcription accordion">
    <div class="accordion-item">
      <h2 class="accordion-header no_toc" id="transcription-head1">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription1" aria-expanded="true" aria-controls="transcription">
          Trascrizione
        </button>
      </h2>
      <div id="transcription1" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head1">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Controllare il player con i data-attribute

Il player offre numerose opzioni di configurazione per personalizzare l'aspetto e 
il comportamento dello stesso. Una delle modalità per configurarlo consiste
nell'utilizzare l'attributo `data-setup` definito all'interno del tag `video` avente come
valore un array in formato JSON.

```html
<div class="row">
  <video controls data-bs-video data-setup='{}'>
    <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
    <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
  </video>
  <div class="vjs-transcription accordion">
    <div class="accordion-item">
      <h2 class="accordion-header no_toc" id="transcription-head2">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription2" aria-expanded="true" aria-controls="transcription">
          Trascrizione
        </button>
      </h2>
      <div id="transcription2" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head2">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
  </div>
</div>
```

{% capture callout %}

##### Importante!

Nota l'uso delle virgolette singole, `data-setup` si aspetta di ricevere un JSON.
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% comment %}Example name: Con configurazione iniziale{% endcomment %}
{% capture example %}
<div class="row">
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
  <div class="vjs-transcription accordion">
    <div class="accordion-item">
      <h2 class="accordion-header no_toc" id="transcription-head3">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription3" aria-expanded="true" aria-controls="transcription">
          Trascrizione
        </button>
      </h2>
      <div id="transcription3" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head3">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
  </div>
</div>
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

{% comment %}Example name: Con didascalie in più lingue{% endcomment %}
{% capture example %}
<div class="row">
  <video controls data-bs-video>
    <source src="https://italia.github.io/bootstrap-italia/docs/assets/video/ElephantsDream.mp4" type="video/mp4">
    <track 
      kind="captions" 
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-it.vtt" 
      srclang="it" 
      label="Italiano" default>
    <track 
      kind="captions" 
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-en.vtt" 
      srclang="en" 
      label="English">
    <track 
      kind="captions" 
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-es.vtt" 
      srclang="es" 
      label="Español">
  </video>
  <div class="vjs-transcription accordion">
    <div class="accordion-item">
      <h2 class="accordion-header no_toc" id="transcription-head4">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription4" aria-expanded="true" aria-controls="transcription">
          Trascrizione
        </button>
      </h2>
      <div id="transcription4" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head4">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
  </div>
</div>
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

{% comment %}Example name: Con video in streaming in formato MPEG-DASH{% endcomment %}
{% capture example %}
<div class="row">
  <video 
    data-bs-video
    poster="https://italia.github.io/bootstrap-italia/docs/assets/video/ElephantsDream.mp4-poster16.gif"
    preload="auto"
    data-setup='{
      "controls": true,
      "autoplay": false,
      "fluid": true
    }'
  >
    <source src="https://italia.github.io/bootstrap-italia/docs/assets/video/ElephantsDreamDASH/ElephantsDream.mp4.mpd" type="application/dash+xml">
    <track 
      kind="captions" 
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-it.vtt" 
      srclang="it" 
      label="Italiano" default>
    <track 
      kind="captions" 
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-en.vtt" 
      srclang="en" 
      label="English">
    <track 
      kind="captions" 
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/subtitles-es.vtt" 
      srclang="es" 
      label="Español">
    <track 
      kind="chapters"
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/chapters-en.vtt" 
      srclang="en" 
      label="English">
    <track 
      kind="chapters"
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/chapters-es.vtt" 
      srclang="es" 
      label="Español">
    <track 
      kind="chapters"
      src="https://italia.github.io/bootstrap-italia/docs/assets/video/chapters-it.vtt" 
      srclang="it" 
      label="Italiano" default>
  </video>
  <div class="vjs-transcription accordion">
    <div class="accordion-item">
      <h2 class="accordion-header no_toc" id="transcription-head6">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription6" aria-expanded="true" aria-controls="transcription">
          Trascrizione
        </button>
      </h2>
      <div id="transcription6" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head6">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Le playlist HLS e DASH possono essere riprodotte su più domini condividendo solo l'URL.
Tuttavia, a causa delle restrizioni imposte dalle politiche di sicurezza del browser,
l'utilizzo di queste playlist in domini diversi da quello originale può causare errori 
CORS (Cross-Origin Resource Sharing). In altre parole, il browser può rifiutare 
l'accesso alle risorse audio e video, impedendo la corretta riproduzione 
del contenuto multimediale.

Per superare questo problema, è necessario configurare correttamente il server che
fornisce le risorse audio e video, consentendo l'accesso a domini esterni tramite 
le policy CORS.

### Gestire più tracce audio
L'uso di più tracce audio nei video è una buona tecnica per migliorare l'accessibilità 
dei contenuti multimediali. Ad esempio, è possibile creare una traccia audio aggiuntiva 
che descrive in dettaglio le immagini e le azioni che si svolgono nel video, per aiutare 
le persone non vedenti a comprendere il contenuto visivo. Inoltre, l'aggiunta di tracce 
audio in lingue diverse consente di offrire il video in più lingue.

Di seguito un esempio in formato HLS multilingua.

{% comment %}Example name: Con video e più tracce audio HLS multilingua{% endcomment %}
{% capture example %}
<div class="row">
  <video
    data-bs-video
    poster="https://italia.github.io/bootstrap-italia/docs/assets/video/ElephantsDream.mp4-poster21.jpg"
    preload="auto"
    data-setup='{
      "controls": true,
      "autoplay": false,
      "fluid": true
    }'
  >
    <source src="https://italia.github.io/bootstrap-italia/docs/assets/video/ElephantsDreamHLS/ElephantsDream.mp4.m3u8" type="application/x-mpegURL">
  </video>
  <div class="vjs-transcription accordion">
    <div class="accordion-item">
      <h2 class="accordion-header no_toc" id="transcription-head7">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription7" aria-expanded="true" aria-controls="transcription">
          Trascrizione
        </button>
      </h2>
      <div id="transcription7" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head7">
        <div class="accordion-body">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

##### Tieni presente che

Video.js offre un'implementazione cross-browser delle tracce audio, a condizione che la 
tecnologia di riproduzione supporti le tracce audio. Le tracce audio per i file mp4 sono
supportate solo da Safari, altri browser non supportano la riproduzione mp4 con più tracce
audio. L'unico modo per fornire l'audio multi-traccia cross-browser è l'uso dei formati 
HLS e/o DASH. 
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
sulla navigazione o l'indirizzo IP. È quindi importante l'utilizzo di questa 
funzionalità assieme al componente di accettazione del consenso per garantire la 
protezione della privacy degli utenti.

{% capture callout %}

Gli esempi che seguono fanno tutti riferimento alla piattaforma di terze parti YouTube. 

{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture callout %}

Coinvolgi il Responsabile per la protezione dei dati (RDP/DPO) della tua amministrazione e ricordati di aggiornare la cookie policy del sito. Designers Italia mette a disposizione il [kit Privacy](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/) per approfondire questi temi e in particolare uno strumento dedicato alla redazione della Cookie policy che trovi in [questa azione del kit](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/rispetta-la-privacy-per-il-go-live-di-un-sito/).

{% endcapture %}{% include callout.html content=callout type="info" %}

### Attivazione dell'overlay di consenso

L'utilizzo di un overlay per il consenso è una soluzione comune per garantire 
la conformità alla normativa sulla privacy in materia di cookie e tracciamento degli utenti.
L'overlay per il consenso consente di informare l'utente sui cookie utilizzati e 
di ottenere il suo consenso in modo esplicito e consapevole alla riproduzione del video prima dell'installazione di qualunque cookie.

{% capture callout %}
In questo la Pubblica Amministrazione che fa uso di servizi di terze parti come YouTube deve necessariamente specificare l’utilizzo di cookie di tracciamento da parte di piattaforme di terze parti, inserendo inoltre il link alla propria cookie policy all'interno dell'overlay (dove adesso c'è il link a '#'). Nella sezione seguente vengono illustrate le funzioni per la gestione delle preferenze con JavaScript.
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% comment %}Example name: Con overlay di consenso cookie (YouTube){% endcomment %}
{% capture example %}
<script>
  const loadYouTubeVideo = function(videoUrl) {
    const videoEl = document.getElementById("vid1");
    const video = bootstrap.VideoPlayer.getOrCreateInstance(videoEl);
    video.setYouTubeVideo(videoUrl);
  }
</script>
<div class="acceptoverlayable">
  <div class="acceptoverlay acceptoverlay-primary fade show">
    <div class="acceptoverlay-inner">
      <div class="acceptoverlay-icon">
        <svg class="icon icon-xl"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg>
      </div>
        <p>Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella <a href="#" class="text-white">cookie policy</a>.
        </p>
      <div class="acceptoverlay-buttons bg-dark">
        <button type="button" class="btn btn-primary" data-bs-accept-from="youtube.com"
        onclick="loadYouTubeVideo('https://youtu.be/_0j7ZQ67KtY')">Accetta</button>
        <div class="form-check">
          <input id="chk-remember" type="checkbox" data-bs-accept-remember>
          <label for="chk-remember">Ricorda per tutti i video</label>
        </div>
      </div>
    </div>
  </div>
  <div>
    <video controls data-bs-video id="vid1"
      class="video-js"
      width="640" height="264">
    </video>
    <div class="vjs-transcription accordion">
      <div class="accordion-item">
        <h2 class="accordion-header no_toc" id="transcription-head9">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#transcription9" aria-expanded="true" aria-controls="transcription">
            Trascrizione
          </button>
        </h2>
        <div id="transcription9" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head9">
          <div class="accordion-body">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Gestione delle preferenze con JavaScript

La gestione delle preferenze viene effettuata in maniera automatica dal componente
di overlay, per poter gestire le preferenze esistono 3 diverse funzioni

- `rememberChoice(service, remember)`: permette di settare la preferenza di
un dato servizio (`true` ricorda la scelta, `false` solo per questa volta).
- `isChoiceRemembered(service)`: dato un servizio, torna `true` o `false` a
seconda della scelta fatta dall'utente.
- `clearAllRememberedChoices()`: permette di reimpostare tutte le preferenze dell'
utente

Le funzioni viste sopra possono essere importate lato JavaScript
```js
import { cookies } from './util/cookies'

cookies.clearAllRememberedChoices()
```

oppure utilizzate con il bundle di Bootstrap Italia

```html
<script>
  bootstrap.cookies.clearAllRememberedChoices();
</script>
```

## Plugin

Esistono numerosi [plugin](https://videojs.com/plugins/) disponibili per video.js, che
consentono di aggiungere nuove funzionalità, come la riproduzione di video in VR, 
l'analisi delle statistiche di visualizzazione del video, le utility per la UI mobile 
e molto altro ancora.
