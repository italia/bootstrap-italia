---
layout: docs
title: Dropdown
description: Attiva o disattiva overlay contestuali per visualizzare elenchi di link e altro ancora con questi menù a tendina.
group: componenti
toc: true
---

Il plugin Javascript per costruire dropdown è basato su una libreria di terze parti, [Popper.js](https://popper.js.org/), che si occupa del posizionamento dinamico del dropdown stesso in congiunzione con la sua posizione all'interno del viewport.

{% capture callout %}
Per il corretto funzionamento dei dropdown è necessario assicurarsi che sia incluso il file `bootstrap-italia.bundle.min.js` che contiene già ogni dipendenza, oppure che il file `popper.min.js` sia incluso prima del file `bootstrap-italia.min.js`. Maggiori informazioni si possono trovare alla [pagina introduttiva]({{ site.baseurl }}/docs/come-iniziare/introduzione/#javascript) sull'utilizzo del Javascript di Bootstrap Italia.
{% endcapture %}{% include callout.html content=callout type="info" %}

Per l'attivazione di un dropdown è sufficiente racchiudere il link per l'apertura e il menu a discesa all'interno di un elemento con classe `.dropdown`, o un altro elemento che dichiari la `position: relative;`. I dropdown possono essere attivati da elementi `<a>` o `<button>` per soddisfare al meglio le tue esigenze.

{% capture callout %}
Lo standard [WAI ARIA](https://www.w3.org/TR/wai-aria/) definisce un widget [`role="menu"`](https://www.w3.org/TR/wai-aria/roles#menu), che però è specifico per i menu applicativi che attivano azioni o funzioni. I menu ARIA possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.

I dropdown di Bootstrap, al contrario, sono progettati per essere generici e applicabili a una varietà di situazioni e strutture di markup. Ad esempio, è possibile creare elenchi a discesa contenenti input e controlli di moduli aggiuntivi, ad esempio campi di ricerca o moduli di accesso. Per questo motivo, Bootstrap non si aspetta (né aggiunge automaticamente) alcuno degli attributi di aria e di ruolo richiesti per i veri menu ARIA. Gli autori dovranno includere questi attributi più specifici.

Tuttavia, Bootstrap aggiunge il supporto integrato per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi `.list-item` usando i tasti cursore e chiude il menu con il tasto ESC.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Dropdown button

Ogni singolo `.btn` può essere trasformato in un bottone per l'apertura di dropdown con del semplice markdown HTML. 
Il design di default dei dropdown richiede l'applicazione della classe `.btn-dropdown`. I link o le voci all'interno del dropdown devono essere contenute in un elemento `.link-list`.

{% capture example %}
<div class="dropdown">
  <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropdown link

Lo stesso vale per elementi `<a>`:

{% capture example %}
<div class="dropdown show">
  <a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Voci di menù attive

Aggiungere la classe `.active` ai link del dropdown che si vogliono mostrare come **attivi**.

{% capture example %}
<div class="dropdown-menu">
  <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item active" href="#"><span>Azione 1 (attivo)</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Voci di menù disabilitate

Aggiungere la classe `.disabled` ai link del dropdown che si vogliono mostrare come **disabilitati**.

{% capture example %}
<div class="dropdown-menu">
  <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="list-item disabled" href="#"><span>Azione 2 (disabilitato)</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Headers e separatori

All'interno del menu dropdown possono essere inseriti header e separatori.

{% capture example %}
<div class="dropdown-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li>
        <h3>Header</h3>
      </li>
      <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
      <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
      <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      <li>
        <span class="divider"></span>
      </li>
      <li><a class="list-item" href="#"><span>Azione 4</span></a></li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dropdown con link large

Per aumentare la dimensione dei link contenuti nel dropdown è sufficiente aggiungere agli stessi la classe `.large`.

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

### Testo con icona a destra

Ai link contenuti nel menù può essere aggiunta un'icona illustrativa allineata a destra utilizzando le classi `.right-icon` sul link `<a>` e `.right` sul tag contenitore dell'icona `<i>`.

{% capture example %}
<div class="dropdown-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 1</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 2</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 3</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Testo con icona a sinistra

Ai link contenuti nel menù può essere aggiunta un'icona illustrativa allineata a sinistra utilizzando le classi `.left-icon` sul link `<a>` e `.left` sul tag contenitore dell'icona `<i>`.

{% capture example %}
<div class="dropdown-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li>
        <a class="list-item left-icon" href="#">
          <i class="it-info left" aria-hidden="true"></i>
          <span>Azione 1</span>
        </a>
      </li>
      <li>
        <a class="list-item left-icon" href="#">
          <i class="it-info left" aria-hidden="true"></i>
          <span>Azione 2</span>
        </a>
      </li>
      <li>
        <a class="list-item left-icon" href="#">
          <i class="it-info left" aria-hidden="true"></i>
          <span>Azione 3</span>
        </a>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione dark

Bla bla bla

{% capture example %}
<div class="dropdown-menu dark">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li><h3>Header</h3></li>
      <li>
        <a class="list-item right-icon active" href="#">
          <span>Azione 1 (attivo)</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 2</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 3</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
      <li><span class="divider"></span></li>
      <li>
        <a class="list-item right-icon" href="#">
          <span>Azione 4</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="list-item right-icon disabled" href="#">
          <span>Azione 5 (disabilitato)</span>
          <i class="it-info right" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Varianti dei buttons

Ovviamente, funzionano anche [tutte le varianti]({{ site.baseurl }}/docs/componenti/bottoni/#varianti-di-colore) già disponibili per i bottoni. Di seguito, un esempio di utilizzo con classi `.btn-primary`, `.btn-secondary` e `.btn-danger`:

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}





## Informazioni aggiuntive

Per consultare altri esempi, vedere l'utilizzo di una dropdown con interi form al suo interno, capire meglio come utilizzare attributi `data-` per l'attivazione o come estendere il funzionamento del plugin Javascript del dropdown di Bootstrap {{ site.bootstrap_version }} , si rimanda alla [documentazione](https://getbootstrap.com/docs/4.0/components/dropdowns/) sul sito di Bootstrap.
