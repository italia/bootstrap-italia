---
layout: docs
title: Navscroll
description: Lista di link con ancore per navigare velocemente a una sezione specifica della pagina in cui è contenuto.
group: menu-di-navigazione
toc: true
---

<style>
  /* Style override for Documentation purposes */
  @media screen and (min-width: 992px) {
    .bd-example .it-right-side {
      max-width: 50%;
    }
  }
  @media screen and (min-width: 1600px) {
    .bd-example .it-right-side {
      max-width: 33.333%;
    }
  }
</style>

Il componente Navscroll, declinazione del [componente Sidebar]({{ site.baseurl }}/docs/menu-di-navigazione/sidebar/), è una barra di navigazione laterale che, tramite una lista di ancore, permette di creare un indice utile a saltare velocemente alle sezioni e ai contenuti presenti su una stessa pagina.

[Approfondisci come e quando usare il componente Navscroll](https://designers.italia.it/design-system/componenti/navscroll/)

## Posizione su mobile

Il componente Navscroll può essere posizionato a inizio o fine viewport, a seconda della classe aggiunta al tag `<nav>`:

- `.it-top-navscroll`: posiziona il menu in alto
- `.it-bottom-navscroll`: posiziona il menu in basso

[Vai all'esempio Navscroll]({{ site.baseurl }}/docs/esempi/navscroll/){:target="\_blank"} e restringi la finestra del browser per vedere il componente in azione su mobile.

## Posizione su desktop

Puoi posizionare una Navscroll a sinistra o a destra, a seconda della classe aggiunta al tag `<nav>`:

- `.it-left-side`: posiziona il menu a sinistra, viene aggiunto un bordo a sinistra del menu.
- `.it-right-side`: posiziona il menu a destra, viene aggiunto un bordo a destra del menu.

### Navscroll a sinistra

{% comment %}Example name: Navscroll a sinistra{% endcomment %}
{% capture example %}
<nav class="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-left-side" data-bs-navscroll>
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNav" aria-label="Apri/Chiudi indice" data-bs-toggle="navbarcollapsible" data-bs-target="#navbarNav"><span class="it-list"></span>1. Introduzione
  </button>
  <div class="navbar-collapsable" id="navbarNav" tabindex="-1">
    <div class="close-div visually-hidden">
      <button class="btn close-menu" type="button">
        <span class="it-close"></span>Chiudi
      </button>
    </div>
    <button type="button" class="it-back-button btn w-100 text-start">
      <svg class="icon icon-sm icon-primary align-top"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left" xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
      <span>Indietro</span>
    </button>
    <div class="menu-wrapper" tabindex="-1">
      <div class="link-list-wrapper">
        <h3 class="no_toc it-navscroll-heading">header</h3>
        <ul class="link-list">
          <li class="nav-item active">
            <a class="nav-link active" href="#"><span>1. Introduzione </span></a>
            <ul class="link-list">
              <li class="nav-link active">
                <a class="nav-link active" href="#"><span>1.1 Elemento annidato (attivo) </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.1 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.2 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.3 Elemento annidato </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>1.2 Elemento annidato </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>1.3 Elemento annidato </span></a>
              </li>
            </ul>
            <a class="nav-link" href="#"><span>2. Sezione </span></a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.1 Elemento annidato </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.1 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.2 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.3 Elemento annidato </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.2 Elemento annidato </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.3 Elemento annidato </span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Navscroll a destra

{% comment %}Example name: Navscroll a destra{% endcomment %}
{% capture example %}
<nav class="navbar it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side" data-bs-navscroll>
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavB" aria-label="Apri/Chiudi indice" data-bs-toggle="navbarcollapsible" data-bs-target="#navbarNavB"><span class="it-list"></span>1. Introduzione
  </button>
  <div class="navbar-collapsable" id="navbarNavB" tabindex="-1">
    <div class="close-div visually-hidden">
      <button class="btn close-menu" type="button">
        <span class="it-close"></span>Chiudi
      </button>
    </div>
    <div class="menu-wrapper" tabindex="-1">
      <button type="button" class="it-back-button btn w-100 text-start">
        <svg class="icon icon-sm icon-primary align-top"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left" xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span>Indietro</span>
      </button>
      <div class="link-list-wrapper">
        <h3 class="no_toc it-navscroll-heading">header</h3>
        <ul class="link-list">
          <li class="nav-item active">
            <a class="nav-link active" href="#"><span>1. Introduzione </span></a>
            <ul class="link-list">
              <li class="nav-link active">
                <a class="nav-link active" href="#"><span>1.1 Elemento annidato (attivo) </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.1 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.2 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.3 Elemento annidato </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>1.2 Elemento annidato </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>1.3 Elemento annidato </span></a>
              </li>
            </ul>
            <a class="nav-link" href="#"><span>2. Sezione </span></a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.1 Elemento annidato </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.1 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.2 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.3 Elemento annidato </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.2 Elemento annidato </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.3 Elemento annidato </span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}


<!-- Il componente Navscroll  `<nav class="navbar navbar-expand-lg">` con l'aggiunta della classe `.it-navscroll-wrapper` e dell'attributo `data-bs-navscroll`.   -->

{% capture callout %}
#### Come gestire le ancore

Ogni link che punta a una sezione della pagina deve contenere l'attributo `href` con il valore dell'id dell'elemento correlato in pagina: `href="#idElemento"`.
{% endcapture %}{% include callout.html content=callout type="warning" %}

#### Evidenziare automaticamente la voce di menu

Per fare in modo che la voce di menu sia evidenziata automaticamente durante lo scorrimento della pagina, aggiungi una classe `.it-page-section` alle sezioni corrispondenti alle voci di menu (`#idElemento`), e racchiudi le sezioni in un elemento con classe `.it-page-sections-container`.

Le animazioni sono state realizzate con il plugin javascript [AnimeJs](https://animejs.com).

## Varianti

### Barra di avanzamento

Per mostrare una barra di avanzamento nella Navscroll, usa il componente [Progress Bar]({{site.baseurl}}/docs/componenti/progress-indicators/#progress-bar) e aggiungi la classe `.it-navscroll-progressbar` all'elemento `.progress-bar`. La barra indica lo scorrimento dell'elemento `.it-page-sections-container`.

[Vai alla pagina di esempio →]({{ site.baseurl }}/docs/esempi/navscroll/){:target="\_blank"}

{% comment %}Example name: Barra di avanzamento{% endcomment %}
{% capture example %}
<nav class="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-right-side" data-bs-navscroll>
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavProgress"
    aria-label="Apri/Chiudi indice" data-bs-toggle="navbarcollapsible" data-bs-target="#navbarNavProgress">
    <span class="it-list"></span>1. Introduzione
  </button>
  <div class="progress custom-navbar-progressbar">
    <div class="progress-bar it-navscroll-progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="navbar-collapsable" id="navbarNavProgress" tabindex="-1">
    <div class="menu-wrapper" tabindex="-1">
      <button type="button" class="it-back-button btn w-100 text-start">
        <svg class="icon icon-sm icon-primary align-top"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left" xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span>Indietro</span>
      </button>
      <div class="link-list-wrapper">
        <h3 class="no_toc it-navscroll-heading">header</h3>
        <div class="progress">
          <div class="progress-bar it-navscroll-progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <ul class="link-list">
          <li class="nav-item active">
            <a class="nav-link active" href="#">
              <span>1. Introduzione </span>
            </a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#">
                  <span>1.1 Elemento annidato </span>
                </a>
                <ul class="tertiary link-list">
                  <li class="nav-link">
                    <a class="nav-link" href="#">
                      <span>1.1.1 Elemento annidato </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>2. Seconda sezione </span>
            </a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#">
                  <span>2.1 Elemento annidato </span>
                </a>
                <ul class="tertiary link-list">
                  <li class="nav-link">
                    <a class="nav-link" href="#">
                      <span>2.1.1 Elemento annidato </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Tema scuro

Per attivare il tema scuro è necessario aggiungere le seguenti classi all'elemento `<nav class="navbar">`:

**`.theme-dark-mobile`**: sfondo scuro, testi e link bianco (solo per la versione mobile).

**`.theme-dark-desktop`**: sfondo scuro, testi e link di colore bianco (solo per la versione desktop).

Utilizza entrambe le classi insieme per attivare il tema scuro su tutti i dispositivi.

{% comment %}Example name: Tema scuro{% endcomment %}
{% capture example %}
<nav class="navbar it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side theme-dark-mobile theme-dark-desk" data-bs-navscroll>
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavC" aria-label="Apri/Chiudi indice" data-bs-toggle="navbarcollapsible" data-bs-target="#navbarNavC"><span class="it-list"></span>1. Introduzione
  </button>
  <div class="navbar-collapsable" id="navbarNavC" tabindex="-1">
    <div class="close-div visually-hidden">
      <button class="btn close-menu" type="button">
      <span class="it-close"></span>Chiudi
      </button>
    </div>
    <div class="menu-wrapper" tabindex="-1">
      <button type="button" class="it-back-button btn w-100 text-start">
        <svg class="icon icon-sm icon-inverse align-top"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left" xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left"></use></svg>
        <span>Indietro</span>
      </button>
      <div class="link-list-wrapper">
        <h3 class="no_toc it-navscroll-heading">header</h3>
        <ul class="link-list">
          <li class="nav-item active">
            <a class="nav-link active" href="#"><span>1. Introduzione </span></a>
            <ul class="link-list">
              <li class="nav-link active">
                <a class="nav-link active" href="#"><span>1.1 Elemento annidato (attivo) </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.1 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.2 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>1.1.3 Elemento annidato </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>1.2 Elemento annidato </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>1.3 Elemento annidato </span></a>
              </li>
            </ul>
            <a class="nav-link" href="#"><span>2. Sezione </span></a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.1 Elemento annidato </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.1 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.2 Elemento annidato </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#"><span>2.1.3 Elemento annidato </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.2 Elemento annidato </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#"><span>2.3 Elemento annidato </span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Menu Inline

Il componente Navscroll può essere utilizzato anche come menu in linea, utilizzando la classe `.inline-menu`.

Per maggiori informazioni, si può fare riferimento alla [documentazione delle Liste di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste/#liste-per-menu-di-navigazione).

Gli inline menu possono contenere liste di link di ogni tipo; nell'esempio che segue è stata inserita una Lista di link collassabile.

{% comment %}Example name: Menu in linea{% endcomment %}
{% capture example %}
<nav class="inline-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li>
        <a class="list-item large medium right-icon" href="#collapseOne" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne">
          <span class="list-item-title-icon-wrapper">
            <span>Link lista 1</span>
            <svg class="icon icon-xs icon-primary right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
          </span>
        </a>
        <ul class="link-sublist collapse" id="collapseOne">
          <li><a class="list-item" href="#"><span>Link lista 1.1</span></a>
          </li>
          <li><a class="list-item" href="#"><span>Link lista 1.2</span></a>
          </li>
          <li><a class="list-item" href="#"><span>Link lista 1.3</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a class="list-item large medium right-icon" href="#collapseTwo" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
          <span class="list-item-title-icon-wrapper">
            <span>Link lista 2</span>
            <svg class="icon icon-xs icon-primary right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
          </span>
        </a>
        <ul class="link-sublist collapse" id="collapseTwo">
          <li><a class="list-item" href="#"><span>Link lista 2.1</span></a>
          </li>
          <li><a class="list-item" href="#"><span>Link lista 2.2</span></a>
          </li>
          <li><a class="list-item" href="#"><span>Link lista 2.3</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a class="list-item large medium right-icon" href="#collapseThree" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
          <span class="list-item-title-icon-wrapper">
            <span>Link lista 3</span>
            <svg class="icon icon-xs icon-primary right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
          </span>
        </a>
        <ul class="link-sublist collapse" id="collapseThree">
          <li><a class="list-item" href="#"><span>Link lista 3.1</span></a>
          </li>
          <li><a class="list-item" href="#"><span>Link lista 3.2</span></a>
          </li>
          <li><a class="list-item" href="#"><span>Link lista 3.3</span></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

{% include callout-bundle-methods.md %}

È possibile creare un'istanza di Navscroll manualmente con il constructor:

```js
import { NavScroll } from 'bootstrap-italia';

const navscrollElement = document.querySelector('.it-navscroll-wrapper');
const navscroll = new NavScroll(navscrollElement, options);
```

Il componente nella sua versione `Menu Inline` utilizza al suo interno il componente 
`Collapse`, si rimanda alle sezioni specifiche per l'attivazione:

- [Attivazione Collapse tramite codice]({{ site.baseurl }}/docs/componenti/collapse/#attivazione-tramite-codice)

#### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite Javascript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-parent=""`.

<table class="table table-bordered table-striped table-responsive">
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
      <td>scrollPadding</td>
      <td>number | function </td>
      <td>10</td>
      <td>Uno spazio (in pixel) per consentire allo scroll di fermarsi prima o dopo (se viene fornito un valore negativo) rispetto alla posizione del bersaglio. Nel caso in cui ci siano degli elementi fixed dinamici è possibile fornire una funzione per calcolare di volta in volta lo spazio.</td>
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

<table class="table table-bordered table-striped table-responsive">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    {% include standard-methods.html class="NavScroll" %}
    <tr>
      <td>setScrollPadding</td>
      <td>Modfica il valore dell'opzione <code>scrollPadding</code>.</td>
    </tr>
  </tbody>
</table>

{% include properties.md properties=site.data.cprops.navscroll %}

## Breaking change

{% capture callout %}
- La classe che controlla il colore dell'icona chevron per le varianti scure ha cambiato nome: `.icon-white` diventa `.icon-inverse`.
- Aggiunta la classe `.it-navscroll-heading` al titolo della sezione.
- Rinominata la classe `.icon-white` in `.icon-inverse` per le icone chevron delle varianti scure.
{% endcapture %}{% include callout-breaking.html content=callout version="3.0.0" type="danger" %}

{% capture callout %}
- Spostato il pulsante "Indietro" come primo elemento della struttura interna di `.menu-wrapper`.

Inoltre, la versione mobile o a forte ingrandimento del componente, che si basa sulla navbar presente anche nei componenti Header e Megamenu, è stata reimplementata come modale per migliorare l'accessibilità con le combinazioni principali di lettori di schermo, sistema operativo e browser. Modifiche principali: 
- struttura: la navbar ora utilizza un pattern dialog con backdrop 
- gerarchia visiva: la gestione `z-index` è allineata al componente modale
- gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo, e gestione inert
- il comportamento è diverso se implementata dentro o fuori dall'elemento `main` di pagina (se presente)

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript in, assicurati che funzioni con il nuovo pattern dialog. Testa la tua implementazione con lettori di schermo e con utenti per verificarne l'accessibilità.
{% endcapture %}{% include callout-breaking.html content=callout version="2.15.0" type="danger" %}

{% capture callout %}
Gli elementi con classe `.it-back-button` diventano di tipo `<button>` invece di `<a>`.
Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.8.0" type="danger" %}
