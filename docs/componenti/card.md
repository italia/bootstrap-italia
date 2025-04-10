---
layout: docs
title: Card
description: Un contenitore di testi e immagini con molte opzioni e varianti.
group: componenti
toc: true
---

## Introduzione
Le card sono contenitori flessibili e versatili per organizzare e presentare contenuti strutturati in modo coerente. Questo componente utilizza la classe base `.it-card` con vari modificatori per adattarsi a diversi contesti e necessità.

{% capture callout %}
#### Nuovo componente Card
Le nuove card di Bootstrap Italia utilizzano la classe `.it-card` e relativi modificatori come `.it-card-title` e `.it-card-body`. Le classi di stile legacy originarie di Bootstrap `.card`, `.card-...`, **saranno mantenuti solo fino al prossimo rilascio maggiore per permettere una migrazione graduale**. 

[Vai alla documentazione legacy](../card-old/)
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Struttura base
La **card** è implementata come elemento `article` con un titolo (heading) `.it-card-title` come primo elemento figlio.

Per la gestione delle altezze, specialmente in layout affiancati, sono disponibili le classi: 
- `.it-card-height-auto` (altezza basata sul contenuto) 
- `.it-card-height-full` (occupa tutto lo spazio disponibile)

### Titolo ed elementi principali
Si consiglia di implementare il **titolo** (`.it-card-title`) come elemento cliccabile principale, evitando di distribuire collegamenti in tutta la card.

Per aggiungere un'icona a fianco del titolo, utilizzare la classe `.it-card-title-icon`.

Quando è presente un'immagine, applicare la classe `.it-card-image` alla card. L'immagine deve seguire l'elemento `.it-card-title` nel markup. L'ordine di visualizzazione viene invertito tramite CSS (applicando `order: -1` al contenitore dell'immagine), mantenendo però la corretta struttura semantica nel DOM.

Il corpo della card deve essere contenuto in un elemento con classe `.it-card-body`, che applica le opportune spaziature. È possibile utilizzare più elementi `.it-card-body` per separare blocchi di contenuto, come ad esempio liste `.list-group`.

### Metadati e piè di pagina

I **metadati** della card (categorie, tag e date) devono essere raggruppati in un elmento `footer`con classe `.it-card-related`. Questo elemento può essere contenuto all'interno di `.it-card-body` oppure, aggiungendo la classe `.it-card-footer`, può essere visualizzato separatamente in fondo alla card.

La struttura dei metadati include:

- Categorie nell'elemento `.it-card-taxonomy`
- Tag/argomenti in liste quando necessario
- Date in elementi `time` con il corretto attributo `datetime`

La classe `.it-card-footer` può essere usata anche per creare uno spazio dedicato a collegamenti o pulsanti secondari.

Per un effetto decorativo, è disponibile la classe `.it-card-border-top` (con varianti di colore `.it-card-border-top-COLORE`). Questa classe non deve essere utilizzata per comunicare significato semantico, ma solo come elemento visivo.

{% capture callout %}
#### Accessibilità
Se il titolo `.it-card-title` non è il primo elemento dell'`article`, è necessario collegarlo con `aria-labelledby="ID_TITOLO"` e aggiungere `id="ID_TITOLO"` al titolo stesso.

I titoli sono preferibilmente `h3`, mentre sottotitoli o testi brevi dovrebbero essere paragrafi semplici. La gerarchia dei titoli deve adattarsi al contesto in cui la card è inserita.

L'uso dell'elemento **`article`** è una scelta semantica ponderata. Anche se non tutti i lettori di schermo lo supportano allo stesso modo, i più diffusi (JAWS, VoiceOver) lo interpretano correttamente, e altri (come NVDA) possono essere configurati per farlo. L'utilizzo di `article` e footer rende il markup più comprensibile e semanticamente strutturato.

Per i lettori di schermo, è importante aggiungere testi descrittivi per i **metadati**, nasconti con `.visually-hidden` (es. "Categoria correlata: ", "Argomento correlato: ") o applicati con `aria-label` (es. "Argomenti correlati: ").
Valuta infine sempre attentamente nel contesto se gli elementi come le liste abbiano o meno bisogno di etichette `aria-label` o `aria-labelledby` per descriverne la funzione.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Esempi di card completa

Questa card dimostra la struttura completa con tutti gli elementi: titolo con icona, immagine, corpo del testo, autore, collegamenti, lista e metadati.


{% comment %}Example name: Strutture complete card{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-border-top it-card-border-top-danger rounded shadow-sm border">
      <!--first element is the title-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h3>
      <!--second element is the image if present-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=16x9" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--follow the body-->
      <div class="it-card-body">
        <p class="it-card-subtitle">Sottotitolo o periodo</p>
        <address class="it-card-signature">di Maria Verde</address>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <p class="it-card-text">Se ci fosse un secondo paragrafo <a href="#" class="it-card-link">con un link</a> questa è la resa visiva.</p>
        <dl class="it-card-description-list">
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
        <p><a href="#" class="it-card-link">Un link dentro un `p` con tipografia responsive</a></p>
        <ul role="list" class="list-group list-group-flush">
          <li class="list-group-item"><a href="#" class="it-card-link">Un link `.it-card-link in una lista</a></li>
          <li class="list-group-item"><a href="#">Un link normale sempre in lista</a></li>
          <li class="list-group-item">Un item lista senza link</li>
        </ul>
        <a href="#" class="it-card-link">Un link sparso</a>
        <a href="#" class="it-card-link">Un altro link</a>
        <a href="#" class="btn btn-primary">Una azione</a>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          <ul class="it-card-chips chips-list" aria-label="Argomenti correlati: ">
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Sviluppo interfaccia</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Open source</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Progettazione interfaccia</span>
            </a></li>
          </ul>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
      <div class="it-card-footer" aria-label="Azioni correlate:">
        <button type="button" class="btn btn-outline-secondary">Azione secondaria</button>
        <a href="#" class="it-card-link">Link secondario</a>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Varianti comuni

Ecco alcuni esempi di configurazioni frequenti per le card:

1. Card con collegamento secondario nel piede
2. Card a tutta altezza (`.it-card-height-full`) con metadati a fine card
3. Card "servizio/bando" con stato delle lavorazioni e pulsante di azione secondaria
4. Card semplice di presentazione senza collegamenti

{% comment %}Example name: Strutture card{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded border shadow-sm mb-3">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=16x9" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-subtitle">Sottotitolo o periodo</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <div class="it-card-footer" aria-label="Link correlati:">
        <a href="#" class="it-card-link">Link secondario</a>
        <a href="#" class="it-card-link">Altro link secondario</a>
      </div>
    </article>
    <!--end it-card-->
    <!--start it-card-->
    <article class="it-card it-card-image rounded border shadow-sm">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-custom" style="--bs-aspect-ratio: 20%;">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=Custom-5x1" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded border shadow-sm">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=21x9" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <address class="it-card-signature">di Maria Verde</address>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo lungo ad esempio di bando a cui poter partecipare h4</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="it-card-body">
        <p class="it-card-subtitle">Sottotitolo o periodo</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <div class="chip chip-simple chip-sm chip-success">
            <span class="visually-hidden">Stato della lavorazione: </span><span class="chip-label">Aperto</span>
          </div>
        </div>
        <span class="it-card-date text-warning"><strong>Scadenza: </strong><time class="it-card-date text-warning" datetime="10/12/{{ 'now' | date: "%Y" }}">31 gennaio, {{ 'now' | date: "%Y" }}</time></span>
      </footer>
      <div class="it-card-footer" aria-label="Azioni correlate:">
        <button type="button" class="btn btn-outline-secondary btn-icon">
          <span>Azione secondaria</span>
          <svg class="icon icon-secondary ms-1" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
    <!--end it-card-->
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <h4 class="it-card-title it-card-title-icon no_toc">
        Titolo solo descrittivo un po' lungo ad esempio h4
        <div><svg class="icon icon-secondary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="it-card-body">
        <p class="it-card-subtitle">Sottotitolo o periodo</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card di tipo profilo

Utili ad esempio per indicare schede personale. Si attivano con la classe `.it-card-profile`. È da notare che la testata della card è costruita con classi di stile dedicate come `.it-card-profile-header` per nome e ruolo. L'immagine di profilo sulla destra è visualizzata integrando il componente avatar in una delle sue varianti. 

La lista di metadati del profilo è costruita utilizzando liste descrittive `.it-card-description-list` con ogni coppia di item`dd`-`dt` raccolta in un `div` contenitore. 

{% capture callout %}
#### Accessibilità
I titoli `.it-card-profile-name` in questi esempi sono `h4`. La gerarchia dei titoli deve adattarsi ovviamente al contesto in cui la card è inserita.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card profilo{% endcomment %}
{% capture example %}

<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-profile rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Nome Personale</a>
          </h4>
          <p class="it-card-profile-role">Ruolo nell'organizzazione</p>
        </div>
        <div class="avatar size-lg">
          <p aria-hidden="true">NP</p>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Area:</dt>
            <dd><a href="#">Nome dell'area di appartenenza</a></dd>
          </div>
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-border-top it-card-border-top-secondary rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Nome Personale</a>
          </h4>
          <p class="it-card-profile-role">Ruolo nell'organizzazione</p>
        </div>
        <div class="avatar size-xl">
          <p aria-hidden="true">NP</p>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Area:</dt>
            <dd><a href="#">Nome dell'area di appartenenza</a></dd>
          </div>
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card di tipo luogo

Utili ad esempio per indicare schede località. Si attivano con la classe `.it-card-site`. È da notare che la testata della card è costruita con classi di stile dedicate come `.it-card-place-header` per nome, tipologia ed eventuale indirizzo. 

Lo spazio per l'immagine sulla destra `.it-card-place-image` può essere usato anche per contenere un'icona. L'accortezza è racchiuderna dentro un `div` contenitore con wrapper `.it-card-place-icon-wrapper` che ne permetta i corretti allineamenti. 

La lista di metadati del luogo è costruita utilizzando liste descrittive `.it-card-description-list` con ogni coppia di item`dd`-`dt` raccolta in un `div` contenitore. 

È possibile combinare un piede con eventuali collegamenti o dettagli della mappa usando l'elemento `footer` con le classi dedicate `.it-card-related` e `it-card-footer`. Negli esempi è stato poi applicato un `.border-top` a questo elemento, opzionale.  

{% capture callout %}
#### Accessibilità
I titoli `.it-card-place-name` in questi esempi sono `h4`. La gerarchia dei titoli deve adattarsi ovviamente al contesto in cui la card è inserita.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card luogo{% endcomment %}
{% capture example %}

<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-place rounded shadow-sm border">
      <div class="it-card-place-header">
        <div class="it-card-place">
          <h4 class="it-card-place-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-place-type">Tipologia di luogo</p>
          <p class="it-card-place-address">Via della città, 5 - 00100 Città</p>
        </div>
        <div class="it-card-place-image ratio ratio-1x1">
          <div class="it-card-place-image-icon-wrapper">
            <svg class="icon icon-lg icon-padded icon-primary" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-pa"></use></svg>
          </div>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-place it-card-border-top it-card-border-top-secondary rounded shadow-sm border mb-3">
      <div class="it-card-place-header">
        <div class="it-card-place">
          <h4 class="it-card-place-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-place-type">Tipologia di luogo</p>
          <p class="it-card-place-address">Via della città, 5 - 00100 Città</p>
        </div>
        <div class="it-card-place-image ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/F4FAFB/0066cc/?text=1x1" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
      <footer class="it-card-related it-card-footer border-top pt-3">
        <div style="flex-grow:1">
          <svg class="icon icon-sm icon-secondary" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-map-marker"></use></svg>
          <strong>Distanza:</strong> 900 metri
        </div>
        <a href="#" target="_blank" class="it-card-link">
          Apri in mappa
          <span class="visually-hidden"> Toponimo o Luogo (si apre in una nuova finestra)</span>
          <svg class="icon icon-sm icon-secondary ms-2" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-external-link"></use></svg>
        </a>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Varianti inline

Le varianti inline sono ideali per presentazioni editoriali, come in contesti di notizie o articoli correlati. Esistono due principali configurazioni:

- `.it-card-inline` - Layout orizzontale su schermi medio-grandi, verticale su mobile. Su mobile l'immagine prende le proporzioni definite con le classi `.ratio-`. È consigliabile utilizzare queries sensibili al @container piuttosto che al viewport, per permetterne lo sviluppo orizzontale solo se lo spazio a disposizione è sufficiente. 
- `.it-card-inline-mini` - Layout orizzontale mantenuto anche su dispositivi mobili. Utile per piccole card editoriali secondarie. 

È possibile combinare questi formati con il layout standard e applicare `.it-card-inline-reverse` per invertire l'ordine degli elementi (con l'immagine a destra anziché a sinistra).

{% comment %}Example name: Varianti inline{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border mb-3">
     <!--first element is all the card content: title + footer-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <!--second element is the image if present-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=I" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--first element is all the card content: title + footer-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo breve</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <!--second element is the image if present-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=I" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-image rounded shadow-sm border mb-3">
     <!--first element is all the card content-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo breve</a>
        </h3>
        <div class="it-card-body">
          <p class="it-card-subtitle">Sottotitolo o periodo</p>
          <p class="it-card-text">Questo è un testo breve.</p>
        </div>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
        <div class="it-card-footer" aria-label="Azioni correlate:">
          <a href="#" class="it-card-link">Link secondario</a>
          <a href="#" class="it-card-link">Link secondario</a>
        </div>
      </div>
      <!--second element is the image if present-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=Img" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--first element is all the card content-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        </h3>
        <div class="it-card-body">
          <p class="it-card-subtitle">Sottotitolo o periodo</p>
          <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        </div>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
        <div class="it-card-footer" aria-label="Azioni correlate:">
          <a href="#" class="it-card-link">Link secondario</a>
          <a href="#" class="it-card-link">Link secondario</a>
        </div>
      </div>
      <!--second element is the image if present-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=Img" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Stili di presentazione

### Bordi e ombre

La configurazione base delle card prevede un bordo (`.border`) e un'ombra leggera (`.shadow-sm`).
Per aumentare la separazione visiva dal contesto, è possibile utilizzare ombre più evidenti:

- `.shadow` - ombra media
- `.shadow-lg` - ombra pronunciata

Quando si utilizzano ombre più evidenti, è possibile rimuovere il bordo se la distinzione dallo sfondo è sufficientemente chiara.

{% capture callout %}

#### Accessibilità: contrasto con lo sfondo

Per garantire una buona accessibilità, è consigliabile mantenere un rapporto di contrasto di almeno 3:1 tra la card e lo sfondo. Le combinazioni di bordi, ombre e colori di sfondo aiutano a raggiungere questo obiettivo. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Strutture card{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-lg border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-lg">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di card

Gruppi di card con layout responsive usando `.it-card-group` in un `div` contenitore.

{% comment %}Example name: Gruppi di card responsive{% endcomment %}
{% capture example %}
<div>
  <div class="it-card-group">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo della prima card</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo della seconda card</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo della terza card</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Numero di colonne specifiche

Usando `.it-card-group-N-cols`.
  
{% comment %}Example name: Gruppi di card con colonne specifiche{% endcomment %}
{% capture example %}
<div>
  <div class="it-card-group it-card-group-3-cols">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card in due colonne</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo mostra sempre due colonne su schermi medi e grandi.</p>
      </div>
    </article>
    <article class="it-card it-card-image rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card in due colonne</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo mostra sempre due colonne su schermi medi e grandi.</p>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Centrate orizzontalmente

Usando `.it-card-group-center`.

{% comment %}Example name: Gruppi di card centrate{% endcomment %}
{% capture example %}  
<div>
  <div class="it-card-group it-card-group-3-cols it-card-group-center">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card centrata</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo ha le card centrate nella pagina.</p>
      </div>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card centrata</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo ha le card centrate nella pagina.</p>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di card con Container Queries (Sperimentale)

Questo gruppo di card utilizza Container Queries `.it-card-group-container-aware` per adattarsi alla dimensione del contenitore invece che alla viewport. Ridimensiona la finestra del browser o prova a visualizzare questa pagina su dispositivi di diverse dimensioni per vedere la differenza.

Le Container Queries sono una tecnologia CSS moderna supportata nella maggior parte dei browser recenti. Per i browser che non supportano questa funzionalità, viene automaticamente applicato un fallback basato su Media Queries standard.

{% comment %}Example name: Gruppi di card con Container Queries{% endcomment %}
{% capture example %}
<div>
  <div class="it-card-group it-card-group-container-aware">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Confronto in colonne diverse

Qui puoi esplorare come lo stesso gruppo di card "container-aware" si adatta a diverse larghezze di colonna, permettendo di realizzare layout complessi:

{% comment %}Example name: Gruppi di card con Container Queries in colonne diverse{% endcomment %}
{% capture example %}
  <div class="row">
    <div class="col-12 col-lg-8 mb-4">
      <div class="p-3 bg-light">
        <div class="it-card-group it-card-group-container-aware">
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna larga</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna larga, le card si distribuiscono su più colonne.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna larga</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna larga, le card si distribuiscono su più colonne.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna larga</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna larga, le card si distribuiscono su più colonne.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mb-4">
      <div class="p-3 bg-light">
        <div class="it-card-group it-card-group-container-aware">
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna stretta</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna stretta, le card si dispongono su una singola colonna.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna stretta</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna stretta, le card si dispongono su una singola colonna.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna stretta</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna stretta, le card si dispongono su una singola colonna.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}