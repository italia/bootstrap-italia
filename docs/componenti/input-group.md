---
layout: docs
title: Gruppo di input
description: Estendi gli elementi del form aggiungendo testo, bottoni o gruppi di bottoni su entrambi i lati di input text, select e input file personalizzati.
group: componenti
toc: true
---

## Esempio di base

Posiziona un componente aggiuntivo o un bottone su uno o entrambi i lati di un input.  **Ogni singolo gruppo di input supporta un solo elemento input** e il `<label>` viene sostituito dall'attributo `aria-label` oppure inserito fuori da `input-group`.

{% example html %}
<div class="input-group pb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group pb-3">
  <input type="text" class="form-control" placeholder="Mail utente" aria-label="Mail utente" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">@esempio.it</span>
  </div>
</div>

<div class="form-group">
  <div class="input-group pb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon3">https://esempio.it/utente/</span>
    </div>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
  </div>
  <label for="basic-url">La tua URL</label>
</div>

<div class="input-group pb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">€</span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <div class="input-group-append">
    <span class="input-group-text">,00</span>
  </div>
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Textarea</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
{% endexample %}

## Dimensione

Aggiungi le relative classi di dimensionamento del form in `.input-group`, il contenuto verrà ridimensionato automaticamente senza la necessità di inserirla per ogni elemento interno.

**Il dimensionamento sui singoli elementi nel gruppo di input non è supportato.**

{% example html %}
<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Testo piccolo</span>
  </div>
  <input type="text" class="form-control" aria-label="Testo piccoloSmall" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Testo predefinito</span>
  </div>
  <input type="text" class="form-control" aria-label="Testo predefinito" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Testo grande</span>
  </div>
  <input type="text" class="form-control" aria-label="Testo grande" aria-describedby="inputGroup-sizing-sm">
</div>
{% endexample %}

## Checkbox e radio

Posiziona qualsiasi checkbox e radio all'interno di un addon del gruppo di input anziché nel testo.

{% example html %}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" aria-label="Checkbox for following text input">
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">
    <input type="radio" aria-label="Radio button for following text input">
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
{% endexample %}

## Input multipli

Sebbene siano supportati visivamente più `<input>`, gli stili per la validazione sono disponibili solo per gruppi di input con un singolo `<input>`.

{% example html %}
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Nominativo</span>
  </div>
  <input type="text" class="form-control" placeholder="Nome" aria-label="Nome">
  <input type="text" class="form-control" placeholder="Cognome" aria-label="Cognome">
</div>
{% endexample %}

## Aggiunte multiple

Sono supportati più add-on insieme e possono essere combinati anche con checkbox e input radio.

{% example html %}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">€</span>
    <span class="input-group-text">0,00</span>
  </div>
  <input type="text" class="form-control" aria-label="Importo parziale">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Importo totale">
  <div class="input-group-append">
    <span class="input-group-text">€</span>
    <span class="input-group-text">0,00</span>
  </div>
</div>
{% endexample %}

## Aggiunta bottoni

{% example html %}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button">Bottone</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Contenitore" aria-label="Contenitore" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-primary" type="button">Bottone</button>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button">Bottone</button>
    <button class="btn btn-outline-primary" type="button">Bottone</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Contenitore" aria-label="Contenitore" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-primary" type="button">Bottone</button>
    <button class="btn btn-outline-primary" type="button">Bottone</button>
  </div>
</div>
{% endexample %}

## Bottoni con dropdown

{% example html %}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Inserimento di testo con dropdown">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Inserimento di testo con dropdown">
  <div class="input-group-append">
    <button class="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
{% endexample %}

## Pulsanti segmentati

{% example html %}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button type="button" class="btn btn-outline-primary">Action</button>
    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <div class="input-group-append">
    <button type="button" class="btn btn-outline-primary">Action</button>
    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
{% endexample %}

## Accessibilità

Gli screen reader avranno problemi con i tuoi moduli se non includi un'etichetta per ogni input. Per questi gruppi di input, assicurarsi che qualsiasi etichetta o funzionalità aggiuntiva venga conformata alle tecnologie assistive.

La tecnica esatta da usare (elementi `<label>` nascosti usando la classe `.sr-only`, o l'uso degli attributi `aria-label` e `aria-labelledby`, possibilmente in combinazione con `aria-describedby`) e quali informazioni aggiuntive dovranno essere trasmesse in base alla tipologia di widget dell'interfaccia che stai implementando. Gli esempi presenti in questa sezione forniscono alcuni approcci specifici.