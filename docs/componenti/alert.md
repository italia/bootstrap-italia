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
{% assign colors = "primary,info,success,warning,danger" | split: ','%}
{% for color in colors %}

<div class="alert alert-{{color}}" role="alert">
  Questo è un alert di tipo "<b>{{ color }}</b>".
</div>{% endfor %}
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

#### Tramite JavaScript

Abilita la chiusura di un alert tramite JavaScript:

```js
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
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

| Metodo                | Descrizione                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `close`               | Chiude un alert rimuovendolo dal DOM. Se le classi `.fade` e `.show` sono presenti nell'elemento, l'avviso verrà chiuso con effetto scomparsa.                                                      |
| `dispose`             | L'alert viene rimosso.                                                                                                                                                                              |
| `getInstance`         | Static method which allows you to get the alert instance associated to a DOM element, you can use it like this: bootstrap.Alert.getInstance(alert)                                                  |
| `getOrCreateInstance` | Static method which returns an alert instance associated to a DOM element or create a new one in case it wasn't initialised. You can use it like this: bootstrap.Alert.getOrCreateInstance(element) |

```js
var alertNode = document.querySelector('.alert')
var alert = bootstrap.Alert.getInstance(alertNode)
alert.close()
```

#### Eventi

Il plugin alert di Bootstrap mette a disposizione alcuni eventi per agganciare la funzionalità di avviso.

| Evento            | Descrizione                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| `close.bs.alert`  | Questo evento si attiva immediatamente quando viene chiamato il metodo di istanza <code>close</code>.           |
| `closed.bs.alert` | Questo evento viene attivato quando l'avviso è stato chiuso (attenderà il completamento delle transizioni CSS). |

```js
var myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', function () {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```
