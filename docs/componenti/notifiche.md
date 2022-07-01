---
layout: docs
group: componenti
toc: true
title: Notifiche
description: Per attirare l'attenzione su brevi messaggi di stato.
---

<style>
  /* Style override for Documentation purposes */
  .test-docs .notification {
    position: static;
    top: auto;
    bottom: auto;
    right: auto;
    left: auto;
    transform: none;
    display: block;
  }
  .test-docs .notification.dismissable {
    position: relative;
  }
  .test-desktop, .test-animation {
    width: 100%;
    height: 500px;
    background: #fafafa;
    border: 1px solid #eee;
    position: relative;
    overflow: hidden;
  }
  .test-desktop .notification {
    position: absolute;
    display: block;
  }
</style>

Le notifiche vengono utilizzate per portare l'attenzione dell'utente su un messaggio o un cambiamento di stato. Es: la ricezione di una nuova email.

Lo stato naturale dell'elemento è invisibile. Gli esempi di questa pagina sono stati resi statici per facilitare un confronto fra le varie tipologie.

Il comportamento delle notifiche è verificabile sulla <a href="{{ site.baseurl }}/docs/esempi/notifications/">pagina di esempio</a>.

La notifica appare quando viene attivata dalla seguente funzione JavaScript:

```js
notificationShow('idNotification', 6000)
```

- Il primo parametro, la stringa **idNotification**, corrisponde alla proprietà id del `<div>` della Notification `<div class="notification" id="idNotification">...</div>`
- il secondo parametro (opzionale) corrisponde alla durata di visualizzazione in millisecondi. Il valore di default, se non indicato, è di 7000ms ossia 7 secondi.

{% capture callout %}

#### Accessibilità

Negli esempi è stato utilizzato il tag `h2` per il titolo delle notifiche. <br>
Utilizzare il tag `h` corretto a seconda del contesto.

Per ragioni di accessibilità è necessario:

- che il titolo `<h...>` contenuto nella notifica abbia un ID univoco
- che questo ID venga usato come valore della proprietà `aria-labelledby` nel `<div>` della notifica
- che il `<div>` della notifica abbia la proprietà `role="alert"`
  {% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Esempio

La notifica può essere composta da un solo titolo oppure da un titolo accompagnato da icona, contentuta nel tag `<h5>` del titolo. In questo caso l'elemento dovrà avere la classe `.with-icon`.

{% capture example %}

<div class="container test-docs">
  <div class="row">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <p class="mb-4"><strong>Notification standard</strong></p>
      <div class="notification" role="alert" aria-labelledby="not1-title" id="not1">
        <h3 id="not1-title" class="h5 no_toc">Titolo notifica</h3>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p class="mb-4"><strong>Notification con icona</strong></p>
      <div class="notification with-icon" role="alert" aria-labelledby="not2-title" id="not2">
        <h2 id="not2-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Notifica con messaggio

Si può aggiungere un breve testo al di sotto del titolo utilizzando un tag `<p>`.

{% capture example %}

<div class="container test-docs">
  <div class="row">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <p class="mb-4"><strong>Notifica standard con testo</strong></p>
      <div class="notification" role="alert" aria-labelledby="not1a-title" id="not1a">
        <h2 id="not1a-title" class="h5 no_toc">Titolo notifica</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p class="mb-4"><strong>Notifica con icona e testo</strong></p>
      <div class="notification with-icon success" role="alert" aria-labelledby="not2a-title" id="not2a">
        <h2 id="not2a-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Eliminabili

Le notifiche eliminabili non vengono nascoste dopo un intervallo di tempo ma vengono chiuse solo quando si clicca sul rispettivo pulsante di chiusura.

Utilizzare una classe aggiuntiva `.dismissable` per ottenere questo comportamento.

{% capture example %}

<div class="container test-docs">
  <div class="row">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <p class="mb-4"><strong>Notifica eliminabile con testo</strong></p>
      <div class="notification dismissable" role="alert" aria-labelledby="not1dms-title" id="not1dms">
        <h2 id="not1dms-title" class="h5 no_toc">Titolo notifica</h2>
        <button type="button" class="btn notification-close">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
          <span class="visually-hidden">Chiudi notifica: Titolo notifica</span>
        </button>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p class="mb-4"><strong>Notifica eliminabile con icona e testo</strong></p>
      <div class="notification with-icon success dismissable" role="alert" aria-labelledby="not2dms-title" id="not2dms">
        <h2 id="not2dms-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
        <button type="button" class="btn notification-close">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
          <span class="visually-hidden">Chiudi notifica: Titolo notifica</span>
        </button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Stati

Alle notifiche possono essere applicate classi aggiuntive che ne determinano lo stato modificando il colore delle icone e del bordo:

- `.success` - per messaggi di procedure andate a buon fine
- `.error` - per messaggi di errore
- `.info` - per info generiche
- `.warning` - per messaggi di precauzione

{% capture example %}

<div class="container test-docs">
  <div class="row mb-5">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <p><strong>Successo</strong></p>
      <div class="notification with-icon success" role="alert" aria-labelledby="not1b-title" id="not1b">
        <h2 id="not1b-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p><strong>Errore</strong></p>
      <div class="notification with-icon error" role="alert" aria-labelledby="not2b-title" id="not2b">
        <h2 id="not2b-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg>Titolo notifica</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <p><strong>Info</strong></p>
      <div class="notification with-icon info" role="alert" aria-labelledby="not3b-title" id="not3b">
        <h2 id="not3btitle" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>Titolo notifica</h2>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p><strong>Precauzione</strong></p>
      <div class="notification with-icon warning" role="alert" aria-labelledby="not4b-title" id="not4b">
        <h2 id="not4b-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-error"></use></svg>Titolo notifica</h2>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Posizione e arrotondamento degli angoli

La posizione predefinita della notifiche è nella parte destra inferiore della finestra.

Utilizzando le classi aggiuntive di posizione fissa elencate di seguito la notifica verrà posizionata a filo di uno dei margini indicati, modificando l'arrotondamento degli angoli di conseguenza.

**N.B. queste classi non influenzano il posizionamento su device mobile, in questo caso la Notification è sempre a piede della finestra e ne occupa tutta la larghezza**

{% capture example %}

<div class="container test-docs">
  <div class="row mb-5">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <p><strong>Basico (arrotondamento ai 4 angoli)</strong></p>
      <div class="notification with-icon success" role="alert" aria-labelledby="not1c-title" id="not1c">
        <h2 id="not1c-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p><strong>top-fix</strong></p>
      <div class="notification top-fix with-icon success" role="alert" aria-labelledby="not2c-title" id="not2c">
        <h2 id="not2c-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
      </div>
      <p class="mt-4"><strong>bottom-fix</strong></p>
      <div class="notification bottom-fix with-icon success" role="alert" aria-labelledby="not3c-title" id="not3c">
        <h2 id="not3c-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
      </div>
      <p class="mt-4"><strong>left-fix</strong></p>
      <div class="notification left-fix with-icon success" role="alert" aria-labelledby="not4c-title" id="not4c">
        <h2 id="not4c-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
      </div>
      <p class="mt-4"><strong>right-fix</strong></p>
      <div class="notification right-fix with-icon success" role="alert" aria-labelledby="not5c-title" id="not5c">
        <h2 id="not5c-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Posizione predefinita

Posizionamento predefinito della notifica.

{% capture example %}

<div class="container test-desktop">
  <div class="notification with-icon success" role="alert" aria-labelledby="not1d-title" id="not1d">
    <h2 id="not1d-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Posizione fissa

Esempi delle quattro posizioni fisse possibili.

{% capture example %}

<div class="container test-desktop">
  <div class="notification top-fix with-icon success" role="alert" aria-labelledby="not1e-title" id="not1e">
    <h2 id="not1e-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Top fix</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
  </div>
  <div class="notification bottom-fix with-icon success" role="alert" aria-labelledby="not2e-title" id="not2e">
    <h2 id="not2e-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Bottom fix</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
  </div>
  <div class="notification left-fix with-icon success" role="alert" aria-labelledby="not3e-title" id="not3e">
    <h2 id="not3e-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Left fix</h2>
  </div>
  <div class="notification right-fix with-icon success" role="alert" aria-labelledby="not4e-title" id="not4e">
    <h2 id="not4e-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Right fix</h2>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
