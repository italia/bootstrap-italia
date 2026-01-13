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
<a href="#" class="go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-primary me-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg>Torna indietro</a>
{% endcapture %}{% include example.html content=example %}

## Pulsanti

Nel caso dell'utilizzo di un pulsante l'accorgimento sopraindicato non è necessario.

{% comment %}Example name: Pulsanti con freccia{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-inverse me-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg>Torna indietro</button>
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-inverse me-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg> Livello superiore</button>
{% endcapture %}{% include example.html content=example %}

### Pulsanti con sola icona

È possibile creare pulsanti senza testo dotati di sola icona avendo cura di includere il testo alternativo per gli screen reader in un tag `<span>` con classe `.visually-hidden`.

{% comment %}Example name: Pulsanti, solo icona{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-inverse"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg><span class="visually-hidden">Torna indietro</span></button>
<button type="button" class="btn btn-primary go-back" data-bs-toggle="historyback"><svg class="icon icon-sm icon-inverse"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg><span class="visually-hidden">Livello superiore</span></button>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

{% include callout-bundle-methods.md %}

È possibile creare un'istanza con il constructor, ad esempio:

```js
import { HistoryBack } from 'bootstrap-italia';

const backButtonElement = document.getElementById('backButton');
const historyBack = new HistoryBack(backButtonElement, options);
```

#### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite Javascript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-scroll-limit=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>positionTop</td>
      <td>number </td>
      <td>0</td>
      <td>Posizione Y espressa in pixel alla quale ritornarne al click sull'elemento.</td>
    </tr>
    <tr>
      <td>scrollLimit</td>
      <td>number </td>
      <td>100</td>
      <td>Posizione Y espressa in pixel alla quale far comparire l'elemento.</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>number</td>
      <td>800</td>
      <td>Durata dell'animazione di scroll espressa in millisecondi.</td>
    </tr>
    <tr>
      <td>easing</td>
      <td>string</td>
      <td>easeInOutSine</td>
      <td>Inerzia dell'animazione di scroll. Per i valori fare riferimento alla <a href="https://animejs.com/documentation/#linearEasing">documentazione di AnimeJs</a>.</td>
    </tr>
  </tbody>
</table>

#### Metodi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    {% include standard-methods.html class="HistoryBack" %}
    <tr>
      <td>back</td>
      <td>Attiva la funzionalità <code>back</code> dell'history del browser.</td>
    </tr>
  </tbody>
</table>

## Breaking change

{% capture callout %}
- La classe che controlla il colore delle icone ha cambiato nome: `.icon-white` diventa `.icon-inverse`.
{% endcapture %}{% include callout-breaking.html content=callout version="3.0.0" type="danger" %}