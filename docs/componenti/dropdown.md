---
layout: docs
title: Dropdown
description: Attiva o disattiva overlay contestuali per visualizzare elenchi di link e altro ancora con questi menù a tendina.
group: componenti
toc: true
---

Il plugin Javascript per costruire dropdown è basato su una libreria di terze parti, [Popper.js](https://popper.js.org/), che si occupa del posizionamento dinamico del dropdown stesso in congiunzione con la sua posizione all'interno del viewport.

{% callout info %}
Per il corretto funzionamento dei dropdown è necessario assicurarsi che sia incluso il file `bootstrap-italia.bundle.min.js` che contiene già ogni dipendenza, oppure che il file [popper.min.js]({{ site.cdn.popper }}) sia incluso prima del file `bootstrap-italia.min.js`. Maggiori informazioni si possono trovare alla [pagina introduttiva]({{ site.baseurl }}/docs/come-iniziare/introduzione/#javascript) sull'utilizzo del Javascript di Bootstrap Italia.
{% endcallout %}

## Esempi

Racchiudi il tuo link per l'attivazione del dropdown e il menu a discesa stesso all'interno di un elemento con classe `.dropdown`, o un altro elemento che dichiari la `position: relative;`. I dropdown possono essere attivati da elementi `<a>` o `<button>` per soddisfare al meglio le tue esigenze.

{% callout accessibility %}
Lo standard [WAI ARIA](https://www.w3.org/TR/wai-aria/) definisce un widget [`role="menu"`](https://www.w3.org/TR/wai-aria/roles#menu), che però è specifico per i menu applicativi che attivano azioni o funzioni. I menu ARIA possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.

I dropdown di Bootstrap, al contrario, sono progettati per essere generici e applicabili a una varietà di situazioni e strutture di markup. Ad esempio, è possibile creare elenchi a discesa contenenti input e controlli di moduli aggiuntivi, ad esempio campi di ricerca o moduli di accesso. Per questo motivo, Bootstrap non si aspetta (né aggiunge automaticamente) alcuno degli attributi di aria e di ruolo richiesti per i veri menu ARIA. Gli autori dovranno includere questi attributi più specifici.

Tuttavia, Bootstrap aggiunge il supporto integrato per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi `.dropdown-item` usando i tasti cursore e chiude il menu con il tasto ESC.
{% endcallout %}

### Dropdown con bottone

Ogni singolo `.btn` può essere trasformato in un bottone per l'apertura di dropdown con del semplice markdown HTML. Eccone un esempio:

{% example html %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <h6 class="dropdown-header">Header 1</h6>
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
    <div class="dropdown-divider"></div>
    <h6 class="dropdown-header">Header 2</h6>
    <a class="dropdown-item" href="#">Azone 4</a>
  </div>
</div>
{% endexample %}

Lo stesso vale per elementi `<a>`:

{% example html %}
<div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
  </div>
</div>
{% endexample %}

È possibile anche usare elementi di tipo `<button>` all'interno dei dropdown.

{% example html %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Azione 1</button>
    <button class="dropdown-item" type="button">Azione 2</button>
    <button class="dropdown-item" type="button">Azione 3</button>
  </div>
</div>
{% endexample %}

Ovviamente, funzionano anche tutte le varianti già disponibili per i bottoni. Di seguito, un esempio di utilizzo con classe `btn-danger`:

{% example html %}
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
  </div>
</div>
{% endexample %}

Un esempio con bottoni divisi:

{% example html %}
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Bottone diviso</button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Apri Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
  </div>
</div>
{% endexample %}

Un esempio con bottoni grandi e piccoli:

{% example html %}
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Large button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Small button
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
  </div>
</div>
{% endexample %}

### Dropdown a tutta larghezza

Aggiungendo la classe `full-width` al menù del dropdown, è possibile ottenere un dropdown che occupa tutta la larghezza disponibile. Utile per la creazione di menu:

{% example html %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
  </button>
  <div class="dropdown-menu full-width" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Azione 1</a>
      <a class="dropdown-item" href="#">Azione 2</a>
      <a class="dropdown-item" href="#">Azione 3</a>
  </div>
</div>
{% endexample %}

## Dropup

Aggiungendo semplicemente la class `.dropup` all'elemento contenitore, la _dropdown_ si aprirà verso l'alto. Allo stesso modo, utilizzando invece le classi `.dropright` e `.dropleft`, il menù a tendina si aprirà rispettivamente a destra e sinistra.

{% example html %}
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropup
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Azione 4</a>
  </div>
</div>
{% endexample %}

## Allineamento orizzontale

Un dropdown è allineato di default lungo il lato sinistro del suo elemento contenitore; per modificare questo comportamento e allineare il dropdown a destra, è sufficiente aggiungere la classe `.dropdown-menu-right` a `.dropdown-menu`

{% example html %}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown allineato a destra
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <a class="dropdown-item" href="#">Azione 1</a>
    <a class="dropdown-item" href="#">Azione 2</a>
    <a class="dropdown-item" href="#">Azione 3</a>
  </div>
</div>
{% endexample %}

## Voci di menù attive

Aggiungere la classe `.active` agli elementi del dropdown che si vogliono mostrare come **attivi**.

{% example html %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Azione 1</a>
  <a class="dropdown-item active" href="#">Azione 2</a>
  <a class="dropdown-item" href="#">Azione 3</a>
</div>
{% endexample %}

## Voci di menù disabilitate

Aggiungere la classe `.disabled` agli elementi del dropdown che si vogliono mostrare come **disabilitati**.

{% example html %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Azione 1</a>
  <a class="dropdown-item disabled" href="#">Azione 2</a>
  <a class="dropdown-item" href="#">Azione 3</a>
</div>
{% endexample %}

## Informazioni aggiuntive

Per consultare altri esempi, vedere l'utilizzo di una dropdown con interi form al suo interno, capire meglio come utilizzare attributi `data-` per l'attivazione o come estendere il funzionamento del plugin Javascript del dropdown di Bootstrap 4, si rimanda alla [documentazione](https://getbootstrap.com/docs/4.0/components/dropdowns/) sul sito di Bootstrap.
