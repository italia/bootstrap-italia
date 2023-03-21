---
layout: docs
title: Torna indietro
description: Consente agli utenti di avere un link o pulsante con un'azione equivalente al "torna indietro" del browser.
group: menu-di-navigazione
toc: true
---

Aggiungendo l'attributo `data-bs-toggle="historyback"` a qualsiasi link o pulsante è possibile ottenere lo stesso comportamento del tasto "Indietro" del browser: retrocedere di un passo nella cronologia di navigazione.

## Link

Quando si utilizza un link (tag `<a>`) è necessario aggiungere un valore all'attributo href perché il link sia correttamente navigabile via tastiera.

{% comment %}Example name: Link{% endcomment %}
{% capture example %}
<a href="#" class="go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-primary me-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg> Torna indietro</a>
{% endcapture %}{% include example.html content=example %}

## Pulsanti

Nel caso dell'utilizzo di un pulsante l'accorgimento sopraindicato non è necessario.

{% comment %}Example name: Pulsanti con freccia{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-white me-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg> Torna indietro</button>
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-white me-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg> Livello superiore</button>
{% endcapture %}{% include example.html content=example %}

### Pulsanti con sola icona

È possibile creare pulsanti senza testo dotati di sola icona avendo cura di includere il testo alternativo per gli screen reader in un tag `<span>` con classe `.visually-hidden`.

{% comment %}Example name: Pulsanti, solo icona{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg><span class="visually-hidden">Torna indietro</span></button>
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg><span class="visually-hidden">Livello superiore</span></button>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite JavaScript

È possibile creare un'istanza con il constructor, ad esempio:

```js
var backButtonElement = document.getElementById('backButton')
var historyBack = new bootstrap.HistoryBack(backButtonElement)
```

### Metodi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>back</td>
      <td>Attiva la funzionalità <code>back</code> dell'history del browser</td>
    </tr>
    <tr>
      <td>getInstance</td>
      <td>Metodo statico che restituisce l'istanza HistoryBack associata ad un elemento del DOM. Esempio: <code>bootstrap.HistoryBack.getInstance(element)</code></td>
    </tr>
    <tr>
      <td>getOrCreateInstance</td>
      <td>Metodo statico che restituisce un'istanza HistoryBack associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.HistoryBack.getOrCreateInstance(element)</code></td>
    </tr>
  </tbody>
</table>
