---
layout: docs
title: Alert
description: Puoi fornire dei feedback all'utente tramite messaggi di avviso.
group: componenti
toc: true
---

## Esempi

Gli avvisi sono disponibili in quattro tipologie diverse e sono adatti a qualsiasi lunghezza di testo. Inoltre possono prevedere un pulsante di chiusura utilizzando un pulsante con attributo `data-bs-dismiss="alert"`.

{% comment %}Example name: Varianti per tipologia{% endcomment %}
{% capture example %}

<div class="alert alert-primary" role="alert">
  <p class="mb-0">
    <svg class="alert-icon icon" role="img">
      <title>Testo significato icon</title>
      <use href="/dist/svg/sprites.svg#it-info-circle"></use>
    </svg> 
    Questo è un alert di tipo "<strong>primary</strong>".
  </p>
</div>
<div class="alert alert-secondary" role="alert">
  <p class="mb-0">
    <svg class="alert-icon icon" role="img">
      <title>Testo significato icon</title>
      <use href="/dist/svg/sprites.svg#it-info-circle"></use>
    </svg> 
    Questo è un alert di tipo "<strong>info</strong>".
  </p>
</div>
<div class="alert alert-success" role="alert">
  <p class="mb-0">
    <svg class="alert-icon icon" role="img">
      <title>Testo significato icon</title>
      <use href="/dist/svg/sprites.svg#it-check-circle"></use>
    </svg> 
    Questo è un alert di tipo "<strong>success</strong>".
  </p>
</div>
<div class="alert alert-warning" role="alert">
  <p class="mb-0">
    <svg class="alert-icon icon" role="img">
      <title>Testo significato icon</title>
      <use href="/dist/svg/sprites.svg#it-warning-circle"></use>
    </svg> 
    Questo è un alert di tipo "<strong>warning</strong>".
  </p>
</div>
<div class="alert alert-danger" role="alert">
  <p class="mb-0">
    <svg class="alert-icon icon">
      <title>Testo significato icon</title>
      <use href="/dist/svg/sprites.svg#it-error"></use>
    </svg> 
    Questo è un alert di tipo "<strong>danger</strong>".
  </p>
</div>

{% endcapture %}
{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

### Link evidenziato

Usa la classe `.alert-link` per dare risalto ad un link all'interno dell'alert.

{% comment %}Example name: Link evidenziato{% endcomment %}
{% capture example %}

<div class="alert alert-danger" role="alert">
  Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
</div>
{% endcapture %}
{% include example.html content=example %}

### Contenuto aggiuntivo

I messaggi di avviso possono avere del contenuto HTML aggiuntivo come intestazioni, paragrafi e divisori.

{% comment %}Example name: Contenuto aggiuntivo{% endcomment %}
{% capture example %}

<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Avviso di successo!</h4>
  <p>Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.</p>
  <hr>
  <p class="mb-0">Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.</p>
</div>
{% endcapture %}
{% include example.html content=example %}

### Chiusura

È possibile eliminare qualsiasi avviso mediante un pulsante di chiusura:

- Inserisci il pulsante di chiusura e la classe `.alert-dismissible`, verrà così aggiunto un ulteriore padding alla destra dell'avviso e posizionerà correttamente il pulsante `.btn-close`.
- Sul pulsante di chiusura, aggiungi l'attributo `data-bs-dismiss="alert"`, che attiverà la funzionalità JavaScript. Assicurati di utilizzare l'elemento `<button>` per un comportamento corretto su tutti i dispositivi.
- Per animare gli avvisi quando li si elimina, assicurarsi di aggiungere le classi `.fade` e `.show`.

{% capture callout %}

#### Accessibilità

L'aria label che assegna il nome accessibile all'icona di chiusura, che nell'esempio è "chiudi avviso", deve essere correlato al contesto.  
Ad esempio "chiudi nota", "chiudi", "nascondi", ecc.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Clicca sul pulsante di chiusura per vedere la funzionalità di rimozione alert in azione:

{% comment %}Example name: Pulsante di chiusura{% endcomment %}
{% capture example %}

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi avviso">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
  </button>
</div>
{% endcapture %}
{% include example.html content=example %}

## Attivazione tramite codice

Abilita la chiusura di un alert tramite JavaScript:

```js
import { Alert } from 'bootstrap-italia';

const alertList = document.querySelectorAll('.alert');
alertList.forEach((alert) => {
  new Alert(alert);
})
```

Oppure con l'assegnazione dell'attributo `data` in un pulsante **all'interno dell'alert**, come nell'esempio seguente:

```html
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi avviso">
  <span aria-hidden="true">&times;</span>
</button>
```

Nota che chiudendo un alert lo rimuoverai dal DOM.

#### Metodi

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Metodo</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      {% include standard-methods.html class="Alert" %}
      <tr>
        <td>close</td>
        <td>Chiude un alert rimuovendolo dal DOM. Se le classi .fade e .show sono presenti nell’elemento, l’avviso verrà chiuso con effetto scomparsa.</td>
      </tr>
    </tbody>
  </table>
</div>

```js
import { Alert } from 'bootstrap-italia';

const alertNode = document.querySelector('#myAlert')
const alert = new Alert(alertNode)
setTimeout(() => {
  alert.close()
}, 15000);
```

#### Eventi

Il plugin alert di Bootstrap mette a disposizione alcuni eventi per agganciare la funzionalità di avviso.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Evento</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>close.bs.alert</td>
        <td>Questo evento si attiva immediatamente quando viene chiamato il metodo di istanza close.</td>
      </tr>
      <tr>
        <td>closed.bs.alert</td>
        <td>Questo evento viene attivato quando l’avviso è stato chiuso (attenderà il completamento delle transizioni CSS).</td>
      </tr>
    </tbody>
  </table>
</div>

```js
const myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', () => {
  // fai qualcosa, ad esempio, sposta esplicitamente il focus sull'elemento più appropriato,
  // in modo che non venga perso/resettato all'inizio della pagina
  // document.getElementById('...').focus()
})
```
