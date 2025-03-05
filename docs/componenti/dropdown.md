---
layout: docs
title: Dropdown
description: Attiva o disattiva overlay contestuali per visualizzare liste di link ed altro ancora con questi menu a tendina.
group: componenti
toc: true
---

Il plugin JavaScript per costruire dropdown è basato su una libreria di terze parti, [Popper.js](https://popper.js.org/), che si occupa del posizionamento dinamico del dropdown stesso in congiunzione con la sua posizione all'interno del viewport.

{% capture callout %}
Per il corretto funzionamento dei dropdown è necessario assicurarsi che sia incluso il file `bootstrap-italia.bundle.min.js` che contiene già ogni dipendenza, oppure che il file `popper.min.js` sia incluso prima del file `bootstrap-italia.min.js`. Maggiori informazioni si possono trovare alla [pagina introduttiva]({{ site.baseurl }}/docs/come-iniziare/introduzione/#javascript) sull'utilizzo del JavaScript di Bootstrap Italia.
{% endcapture %}{% include callout.html content=callout type="info" %}

Per l'attivazione di un dropdown è sufficiente racchiudere il link per l'apertura e il menu a discesa all'interno di un elemento con classe `.dropdown`, o un altro elemento che dichiari la `position: relative;`. I dropdown possono essere attivati da elementi `<a>` o `<button>` per soddisfare al meglio le tue esigenze.

{% capture callout %}

#### Accessibilità

Lo standard [WAI ARIA](https://www.w3.org/TR/wai-aria/) definisce un widget con proprietà [`role="menu"`](https://www.w3.org/TR/wai-aria/#menu), specifica per i menu applicativi con link o azioni. Questi menu possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.

I dropdown del framework Bootstrap sono progettati per essere invece generici e applicabili a una varietà di situazioni e strutture di markup. Per questo motivo, Bootstrap non si aspetta (né aggiunge automaticamente) alcuno degli attributi ARIA e di ruolo richiesti. Gli autori dovranno integrare nel proprio markup gli eventuali attributi specifici e, nel caso di sviluppo di soluzioni che non ricadano nello standard ARIA, porre particolare attenzione a verifiche di accessibilità e test con utenti.

Tuttavia, Bootstrap comprende di base il supporto per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi `.list-item` usando i tasti freccia, e chiude il menu con il tasto ESC.

Si ricorda che link di navigazione semanticamente sono tag `<a>`, mentre link che attivano azioni in pagina sono tag `<button>`, seppur questi ultimi è possibile implementarli in casi molto particolari come tag `<a>` con proprietà `role="button"`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Dropdown button

Ogni singolo `.btn` può essere trasformato in un pulsante per l'apertura di dropdown con del semplice markdown HTML.
Il design di default dei dropdown richiede l'applicazione della classe `.btn-dropdown`. I link o le voci all'interno del dropdown devono essere contenute in un elemento `.link-list`.

{% comment %}Example name: Base, con pulsante{% endcomment %}
{% capture example %}

<div class="dropdown text-center">
  <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
    <svg class="icon-expand icon icon-sm icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropdown button varianti

Ovviamente sono disponibili [tutte le varianti]({{ site.baseurl }}/docs/componenti/buttons/#varianti-di-colore) già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con classi `.btn-primary`, `.btn-secondary` e `.btn-danger`:

{% comment %}Example name: Con varianti di pulsanti{% endcomment %}
{% capture example %}

<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
    <svg class="icon-expand icon icon-sm icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
  </button>
  <div class="dropdown-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
    <svg class="icon-expand icon icon-sm icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
  </button>
  <div class="dropdown-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
    <svg class="icon-expand icon icon-sm icon-light"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
  </button>
  <div class="dropdown-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropdown link

Lo stesso vale per gli elementi `<a>`:

{% comment %}Example name: Link{% endcomment %}
{% capture example %}

<div class="dropdown text-center">
  <a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
    <svg class="icon-expand icon icon-sm icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropup

Per aprire le voci di menu verso l'alto aggiungere la classe `.dropup` all'elemento padre.

{% comment %}Example name: Dropup, si apre verso l'alto{% endcomment %}
{% capture example %}

<div class="dropdown dropup text-center">
  <a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuDropup" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropup
    <svg class="icon-expand icon icon-sm icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuDropup">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropend

Per aprire le voci di menu verso destra aggiungere la classe `.dropend` all'elemento padre.

{% comment %}Example name: Dropend, si apre a destra{% endcomment %}
{% capture example %}

<div class="dropdown dropend text-center">
  <a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuDropright" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropend
    <svg class="icon-expand icon icon-sm icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuDropright">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropstart

Per aprire le voci di menu verso sinistra aggiungere la classe `.dropstart` all'elemento padre.

{% comment %}Example name: Dropstart, si apre a sinistra{% endcomment %}
{% capture example %}

<div class="dropdown dropstart text-center">
  <a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuDropleft" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <svg class="icon-expand icon icon-sm icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
    Apri dropstart
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuDropleft">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropdown menu

Le voci del menu che viene aperto al click sul pulsante possono essere personalizzate, così come il menu stesso.

#### Menu voci attive

Aggiungere la classe `.active` ai link del dropdown che si vogliono mostrare come **attivi**. Per questioni di accessibilità è consigliabile aggiungere `<span class="visually-hidden"> attivo</span>` in coda al testo degli elementi attivi.

{% comment %}Example name: Menu voci attive{% endcomment %}
{% capture example %}

<div class="dropdown-menu">
  <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item active" href="#"><span>Azione 1</span><span class="visually-hidden"> attivo</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Menu voci disabilitate

Aggiungere la classe `.disabled` ai link del dropdown che si vogliono mostrare come **disabilitati**. Includere anche la proprietà `aria-disabled="true"` per comunicare lo stato disabilitato agli utenti dotati di screen reader.

{% comment %}Example name: Menu voci disabilitate{% endcomment %}
{% capture example %}

<div class="dropdown-menu">
  <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item disabled" href="#" aria-disabled="true"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

<!-- #### Menu con intestazioni e separatori

All'interno del menu dropdown possono essere inseriti header e separatori. 

{% comment %}Example name: Menu con intestazioni e separatori{% endcomment %}
{% capture example %}

<div class="dropdown-menu">
  <div class="link-list-wrapper">
    <div class="link-list-heading">Intestazione</div>
    <ul class="link-list">
      <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
      <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
      <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      <li>
        <span class="divider"></span>
      </li>
      <li><a class="dropdown-item list-item" href="#"><span>Azione 4</span></a></li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %} -->

#### Menu con voci grandi

Per aumentare la dimensione dei link contenuti nel dropdown è sufficiente aggiungere agli stessi la classe `.large`. 

{% comment %}Example name: Menu con voci grandi{% endcomment %}
{% capture example %}

<div class="dropdown-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li><a class="list-item large" href="#"><span>Azione 1</span></a></li>
      <li><a class="list-item large" href="#"><span>Azione 2</span></a></li>
      <li><a class="list-item large" href="#"><span>Azione 3</span></a></li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Menu a tutta larghezza

Per ottenere un dropdown menu largo quanto l'elemento che contiene il dropdown button è sufficiente aggiungere la classe`.full-width` al menu stesso. I link e testi contenuti al suo interno saranno disposti in orizzontale.

{% comment %}Example name: Menu a tutta larghezza{% endcomment %}
{% capture example %}

<div class="dropdown-menu full-width">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li><a class="list-item large" href="#"><span>Azione 1</span></a></li>
      <li><a class="list-item large" href="#"><span>Azione 2</span></a></li>
      <li><a class="list-item large" href="#"><span>Azione 3</span></a></li>
      <li><a class="list-item large" href="#"><span>Azione 4</span></a></li>
      <li><a class="list-item large" href="#"><span>Azione 5</span></a></li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Menu con icona a destra

Ai link contenuti nel menu può essere aggiunta un'icona illustrativa allineata a destra utilizzando le classi `.right-icon` sul link `<a>` e `.right` sul tag contenitore dell'icona.

{% comment %}Example name: Menu con icona a destra{% endcomment %}
{% capture example %}

<div class="dropdown-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 1</span>
          <svg class="icon icon-sm icon-primary right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 2</span>
          <svg class="icon icon-sm icon-primary right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 3</span>
          <svg class="icon icon-sm icon-primary right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Menu con icona a sinistra

Ai link contenuti nel menu può essere aggiunta un'icona illustrativa allineata a sinistra utilizzando le classi `.left-icon` sul link `<a>` e `.left` sul tag contenitore dell'icona.

{% comment %}Example name: Menu con icona a sinistra{% endcomment %}
{% capture example %}

<div class="dropdown-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li>
        <a class="list-item left-icon" href="#">
          <svg class="icon icon-sm icon-primary left"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
          <span>Azione 1</span>
        </a>
      </li>
      <li>
        <a class="list-item left-icon" href="#">
          <svg class="icon icon-sm icon-primary left"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
          <span>Azione 2</span>
        </a>
      </li>
      <li>
        <a class="list-item left-icon" href="#">
          <svg class="icon icon-sm icon-primary left"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
          <span>Azione 3</span>
        </a>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Menu dark

Aggiungendo la classe`.dark` al dropdown menu si ottiene una versione in negativo dello stesso, con link ed elementi interni declinati di conseguenza.

{% comment %}Example name: Menu dark{% endcomment %}
{% capture example %}

<div class="dropdown-menu dark">
  <div class="link-list-wrapper">
    <div class="link-list-heading">Intestazione</div>
    <ul class="link-list">
      <li>
        <a class="list-item right-icon active" href="#">
          <span>Azione 1 (attivo)</span>
          <svg class="icon icon-sm icon-light right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 2</span>
          <svg class="icon icon-sm icon-light right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 3</span>
          <svg class="icon icon-sm icon-light right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
      <!-- <li><span class="divider"></span></li> -->
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 4</span>
          <svg class="icon icon-sm icon-light right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
      <li>
        <a class="list-item right-icon disabled" href="#" aria-disabled="true">
          <span>Azione 5 (disabilitato)</span>
          <svg class="icon icon-sm icon-light right"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </a>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

{% include callout-bundle-methods.md %}

```js
import { Dropdown } from 'bootstrap-italia';

const dropdownEl = document.getElementById('myDropdown');
const dropdown = new Dropdown(dropdownEl, options)
```

#### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite JavaScript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-parent=""`.

<div class="table-responsive">
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
        <td>autoClose</td>
        <td>true | 'inside' | 'outside'</td>
        <td>true</td>
        <td>Configura il comportamento di chiusura automatica del menu a discesa:
        <br>
  true - il menu a discesa verrà chiuso cliccando all'esterno o all'interno del menu a discesa.
  <br>
  false - il menu a discesa verrà chiuso cliccando sul pulsante di attivazione/disattivazione e richiamando manualmente il metodo hide o toggle. (Inoltre, non verrà chiuso premendo il tasto esc)
  <br>
  'inside' - il menu a discesa verrà chiuso (solo) cliccando all'interno del menu a discesa.
  <br>
  'outside' - il menu a discesa verrà chiuso (solo) cliccando all'esterno del menu a discesa.
  <br>
  Nota: il menu a discesa può sempre essere chiuso con il tasto ESC.
  </td>
      </tr>
      <tr>
        <td>boundary</td>
        <td>string | element</td>
        <td>"clippingParents"</td>
        <td>Limite di vincolo di overflow del menu a discesa (si applica solo al modificatore preventOverflow di Popper). Di default è clippingParents e può accettare un riferimento HTMLElement (solo tramite JavaScript). Per maggiori informazioni, fare riferimento alla documentazione <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow di Popper</a>.</td>
      </tr>
      <tr>
        <td>display</td>
        <td>string</td>
        <td>"dynamic"</td>
        <td>Di default, viene utilizzato Popper per il posizionamento dinamico. 
        Questo comportament è disattivabile con il valore "static".</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>array|string|function</td>
        <td>[0, 2]</td>
        <td>Offset del menu a discesa rispetto al suo target. Puoi passare una stringa negli attributi dati con valori separati da virgole. Quando una funzione viene utilizzata per determinare l'offset, viene chiamata con un oggetto contenente il posizionamento del popper, il riferimento e i rettangoli del popper come primo argomento. Il nodo DOM dell'elemento di attivazione viene passato come secondo argomento. La funzione deve restituire un array con due numeri: <a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>,  <a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>. Per maggiori informazioni, fai riferimento alla <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">documentazione offset di Popper</a>.</td>
      </tr>
      <tr>
        <td>popperConfig</td>
        <td>null|object|function</td>
        <td>null</td>
        <td>Configurazione aggiuntiva per l'oggetto Popper.js presente nel componente
        dropdown. Per maggiori informazioni si rimanda alla <a href="https://popper.js.org/docs/v2/constructors/#options"> documentazione della
        configurazione Popper</a></td>
      </tr>
      <tr>
        <td>reference</td>
        <td>string|element|object</td>
        <td>"toggle"</td>
        <td>Elemento di riferimento del menu a discesa. Accetta i valori di 'toggle', 'parent', un riferimento HTMLElement o un oggetto che fornisce getBoundingClientRect. Per maggiori informazioni si rimanda alla <a href="https://popper.js.org/docs/v2/virtual-elements/"> documentazione di Popper</a>.</td>
      </tr>
    </tbody>
  </table>
</div>

#### Metodi

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Metodo</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      {% include standard-methods.html class="Dropdown" %}
      <tr>
        <td>show</td>
        <td>Mostra la tendina del dropdown.</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>Nasconde la tendina del dropdown.</td>
      </tr>
      <tr>
        <td>toggle</td>
        <td>Mostra/nasconde la tendina del dropdown.</td>
      </tr>
    </tbody>
  </table>
</div>

#### Eventi

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
        <td><code>hide.bs.dropdown</code></td>
        <td>Viene attivato immediatamente quando viene chiamato il metodo di istanza <code>hide</code>.</td>
      </tr>
      <tr>
        <td><code>hidden.bs.dropdown</code></td>
        <td>Viene attivato quando il menu a discesa non è più nascosto all'utente e le transizioni CSS sono state
          completate.</td>
      </tr>
      <tr>
        <td><code>show.bs.dropdown</code></td>
        <td>Viene attivato immediatamente quando viene chiamato il metodo di istanza <code>show</code>. chiamato.
        </td>
      </tr>
      <tr>
        <td><code>shown.bs.dropdown</code></td>
        <td>Attivato quando il menu a discesa è stato reso visibile all'utente e le transizioni CSS sono state completate.</td>
      </tr>
    </tbody>
  </table>
</div>
