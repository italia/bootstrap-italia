---
layout: docs
group: form
toc: true

title: Input
description: Elementi e stili per la creazione di input accessibili e responsivi.
---

<style>
  /* Style override for Documentation purposes - Autocomplete*/
  #testAutocomplete1, #testAutocomplete2 {
    position: static;
    display: block;
  }
</style>

## Esempi di campi di input

Per il corretto funzionamento degli elementi di tipo `<input>` è di fondamentale importanza l'utilizzo uno degli appositi attributi `type` (ad esempio, `email` per l'inserimento di indirizzi email o `number` per informazioni numeriche), in modo da sfruttare i controlli nativi dei borowser più recenti come la verifica dell'email, l'utilizzo di metodo di input numerico ed altro.

Per l'inserimento guidato di campi di tipo numerico si può anche utilizzare l'elemento dedicato che fornisce migliorie per la validazione e per l'esperienza complessiva, descritto alla [pagina dedicata all'input numerico]({{ site.baseurl }}/docs/form/input-numerico/).

{% capture callout %}
Breaking feature dalla versione **2.2.0**

Quando si utilizza l'attributo `placeholder` o l'input parte già valorizzato assicurarsi di aggiungere alla label la classe **`active`** per impedire la sovrapposizione della label al campo.

{% endcapture %}{% include callout.html content=callout type="danger" %}

{% comment %}Example name: Varianti per tipo {% endcomment %}
{% capture example %}
<div>
  <div class="form-group">
    <label for="exampleInputText">Campo di tipo testuale</label>
    <input type="text" class="form-control" id="exampleInputText">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Campo di tipo email</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="form-group">
    <label for="exampleInputNumber">Campo di tipo numerico</label>
    <input type="number" data-bs-input class="form-control" id="exampleInputNumber">
  </div>
  <div class="form-group">
    <label for="exampleInputTelephone">Campo di tipo telefono</label>
    <input type="tel" class="form-control" id="exampleInputTelephone">
  </div>
  <div class="form-group">
    <label class="active" for="exampleInputTime">Campo di tipo ora</label>
    <input type="time" class="form-control" id="exampleInputTime" min="9:00" max="18:00">
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Utilizzo di placeholder e label

Si può includere un'etichetta che si riposiziona automaticamente quando l'utente utilizza il campo di testo.

{% comment %}Example name: Con etichetta {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="formGroupExampleInput">Etichetta di esempio</label>
  <input type="text" class="form-control" id="formGroupExampleInput">
</div>
{% endcapture %}{% include example.html content=example %}

Si può abbinare all'etichetta un _placeholder_ (testo di esempio) per ulteriore chiarezza.

{% comment %}Example name: Con etichetta e segnaposto {% endcomment %}
{% capture example %}
<div class="form-group">
  <label class="active" for="formGroupExampleInput2">Etichetta di esempio</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Testo di esempio">
</div>
{% endcapture %}{% include example.html content=example %}

In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, aggiungendo un elemento `<small>` con classe `.form-text` all'interno di `.form-group`.

{% capture callout %}

#### Associazione del testo di aiuto con gli elementi del modulo form

Il testo di aiuto deve essere esplicitamente associato agli elementi del mudulo form a cui si riferisce utilizzando l'attributo `aria-describedby`. Ciò garantirà che le tecnologie assistive, come gli screenreader, leggano questo testo di aiuto quando l'utente avrà il focus sull'elemento.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con testo di aiuto {% endcomment %}
{% capture example %}
<div class="form-group">
  <label class="active" for="formGroupExampleInputWithHelp">Etichetta di esempio</label>
  <input
    type="text"
    class="form-control"
    id="formGroupExampleInputWithHelp"
    placeholder="Testo di esempio"
    aria-describedby="formGroupExampleInputWithHelpDescription"
  >
  <small id="formGroupExampleInputWithHelpDescription" class="form-text">Ulteriore testo informativo</small>
</div>
{% endcapture %}{% include example.html content=example %}

### Input con icona o pulsanti

{% comment %}Example name: Varianti con icona o pulsanti {% endcomment %}
{% capture example %}
<div class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text"><svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use></svg></div>
    </div>
    <label for="input-group-1">Con Etichetta</label>
    <input type="text" class="form-control" id="input-group-1" name="input-group-1">
  </div>
</div>
<div class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text"><svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use></svg></div>
    </div>
    <label class="active" for="input-group-2">Con Etichetta e placeholder</label>
    <input type="text" class="form-control" id="input-group-2" name="input-group-2" placeholder="Lorem Ipsum">
  </div>
</div>
<div class="form-group">
  <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text"><svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use></svg></div>
      </div>
      <label for="input-group-3">Con Etichetta e pulsante "primary"</label>
      <input type="text" class="form-control" id="input-group-3" name="input-group-3">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" id="button-3">Invio</button>
      </div>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Input password

Per rendere più semplice l'inserimento della password, l'elemento è stato dotato di un visualizzatore dei caratteri digitati. Inoltre è possibile abbinare un controllo <!--(grazie alla componente [strength meter](https://www.npmjs.com/package/password-strength-meter))--> per segnalare quanto la password che si sta inserendo sia sicura con l'aggiunta dell'HTML necessario.

È possibile personalizzare la componente `strength meter` usando gli attributi data.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 220px;">Attributo data</th>
      <th>Descrizione</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>data-bs-minimum-length</code></td>
      <td>Lunghezza minima per il calcolo della forza della password (soglia password molto debole)</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

E' possibile personalizzare i testi dei messaggi riguardanti la robustezza della password usando gli attributi data dell'elemento `small.form-text`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 220px;">Attributo data</th>
      <th>Descrizione</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>data-bs-short-pass</code></td>
      <td>Testo per il punteggio di forza della password minimo</td>
      <td>Password molto debole</td>
    </tr>
    <tr>
      <td><code>data-bs-bad-pass</code></td>
      <td>Testo per punteggio di forza della password basso</td>
      <td>Password debole</td>
    </tr>
    <tr>
      <td><code>data-bs-good-pass</code></td>
      <td>Testo per punteggio di forza della password buono</td>
      <td>Password sicura</td>
    </tr>
    <tr>
      <td><code>data-bs-strong-pass</code></td>
      <td>Testo per il punteggio di forza della password massimo</td>
      <td>Password molto sicura</td>
    </tr>   
  </tbody>
</table>

{% comment %}Example name: Password {% endcomment %}
{% capture example %}
<div>
  <div class="form-group">
    <label for="exampleInputPassword">Password con label, placeholder e testo di aiuto</label>
    <input type="password" data-bs-input class="form-control input-password" id="exampleInputPassword" aria-labelledby="infoPassword">
    <span class="password-icon" aria-hidden="true">
      <svg class="password-icon-visible icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-visible"></use></svg>
      <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
    </span>
    <small id="infoPassword" class="form-text">Inserisci almeno 8 caratteri e una lettera maiuscola</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword3">Password con strength meter</label>
    <input type="password" data-bs-input class="form-control input-password" id="exampleInputPassword3">
    <div class="password-strength-meter">
      <small class="form-text text-muted"
        data-bs-short-pass="Password molto debole"
        data-bs-bad-pas="Password debole"
        data-bs-good-pass="Password sicura"
        data-bs-strong-pass="Password molto sicura"
      >Inserisci almeno 8 caratteri e una lettera maiuscola</small>
      <div class="password-meter progress rounded-0 position-absolute">
        <div class="row position-absolute w-100 m-0">
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
        </div>
        <div class="progress-bar bg-muted" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <span class="password-icon" aria-hidden="true">
      <svg class="password-icon-visible icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-visible"></use></svg>
      <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
    </span>
    <small class="password-caps form-text text-warning position-absolute bg-white w-100">CAPS LOCK inserito</small>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Attivazione tramite JavaScript

Abilitarlo manualmente con:

```js
var inputElement = document.querySelector('#exampleInputPassword'))
var passwordComponent = new bootstrap.InputPassword(inputElement, {
  minimumLength: 4,
})
```

#### Opzioni

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 220px;">Attributo data</th>
      <th>Descrizione</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>minimumLength</code></td>
      <td>Lunghezza minima per il calcolo della forza della password (soglia password molto debole)</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

### Disabilitato

Aggiungi l'attributo `disabled` ad un input per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti.

{% comment %}Example name: Disabilitato {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="input-text-disabled">Contenuto disabilitato</label>
  <input class="form-control" type="text" id="input-text-disabled" disabled>
</div>
{% endcapture %}{% include example.html content=example %}

### Readonly

Aggiungi l'attributo `readonly` ad un input per impedire la modifica del valore contenuto.

{% comment %}Example name: Solo lettura {% endcomment %}
{% capture example %}
<div class="form-group">
  <label class="active" for="input-text-read-only">Contenuto in sola lettura</label>
  <input class="form-control" type="text" id="input-text-read-only" value="Sola lettura" readonly>
</div>
{% endcapture %}{% include example.html content=example %}

#### Readonly normalizzato

Se per qualche motivo vuoi avere gli elementi `<input readonly>` nella forma stilizzata come testo normale usa la classe `.form-control-plaintext` anziché `.form-control`.

{% comment %}Example name: Solo lettura, normalizzato {% endcomment %}
{% capture example %}
<div>
  <div class="form-group">
    <label class="active" for="input-text-read-only-2">Contenuto in sola lettura</label>
    <input class="form-control-plaintext" value="Sola lettura" type="text" id="input-text-read-only-2" readonly>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Ricerca con autocompletamento

Per ottenere un input con un risultato ricerca o un autocomplete statico è necessario aggiungere all'input la classe `.autocomplete` e l'attributo `data-bs-autocomplete` contenente un JSON da filtrare.

L'icona della lente è contenuta in uno `<span>` con classe `.autocomplete-icon`, nascosta agli screen reader dall'attributo `aria-hidden="true"`.

{% capture callout %}

#### Accessibilità

La descrizione accessibile del campo è ottenuta con una label nascosta visivamente dalla classe `.visually-hidden`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

L'elenco dei risultati generati dalla ricerca è una lista `<ul>` con classe `.autocomplete-list`, mentre i singoli risultati sono contenuti negli elementi `<li>` della lista e si compongono di:

- **Avatar** o **Icona**: nel caso in cui non sia presente un'icona adeguata,
  utilizzare come icona di default `#it-file` per indicare una pagina generica.
- **Testo**: elemento `<span>` contenuto in `.autocomplete-list-text`
- **Label**: elemento `<em>` contenuto nel testo

Il testo corrispondente alla ricerca (_"ite"_, nell'esempio) deve essere racchiuso in un tag `<mark>`.

{% comment %}Example name: Ricerca con autocompletamento {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="autocomplete-one" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="autocomplete" placeholder="Testo da cercare"
    id="autocomplete-one"
    name="autocomplete-one"
    data-bs-autocomplete="[]">
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
  <ul class="autocomplete-list" id="testAutocomplete1">
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri">
        </div>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/men/46.jpg"
               alt="Mario Rossi">
        </div>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm">
          <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use>
        </svg>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm">
          <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use>
        </svg>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm">
          <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use>
        </svg>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Ricerca con autocompletamento grande

Per ottenere una versione grande dell'Autocomplete, indicata ad esempio per intestazioni di pagina ed overlay dedicati, aggiungere la classe `.autocomplete-wrapper-big` al contenitore `.form-group`.

{% comment %}Example name: Ricerca con autocompletamento grande {% endcomment %}
{% capture example %}
<div class="form-group autocomplete-wrapper-big">
  <label for="autocomplete-two" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="autocomplete" placeholder="Testo da cercare"
    id="autocomplete-two"
    name="autocomplete-two"
    data-bs-autocomplete="[]">
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
  <ul class="autocomplete-list" id="testAutocomplete2">
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Paola Pistoia">
        </div>
        <span class="autocomplete-list-text">
          <span>Paola <mark>Pi</mark>stoia</span><em>Profilo</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Pierluigi Rossi">
        </div>
        <span class="autocomplete-list-text">
          <span><mark>Pi</mark>erluigi Rossi</span><em>Profilo</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
        <span class="autocomplete-list-text">
          <span>Comune di <mark>Pi</mark>sa</span><em>Amministrazione</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="autocomplete-list-text">
          <span>Linee guida per i cataloghi pubblica amministrazione</span><em>Documento</em>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Ricerca con autocompletamento e dati

Questo autocompletamento è collegato, tramite l'attributo `data-bs-autocomplete`, ad una lista di oggetti nella quale sono presenti:

- nel campo `text` i nomi di tutte le regioni italiane
- nel campo `link` un link associato a ciascuna di esse

Questi sono i minimi dati necessari per il corretto funzionamento dell'autocomplete.

Cerca una regione italiana per verificarne il comportamento.

{% comment %}Example name: Ricerca con autocompletamento e dati {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="autocomplete-regioni" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="autocomplete" placeholder="Testo da cercare"
    id="autocomplete-regioni"
    name="autocomplete-regioni"
    data-bs-autocomplete='{{ site.data.autocomplete.regioni | jsonify }}'>
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
</div>
{% endcapture %}{% include example.html content=example %}

Questo Autocomplete è collegato, sempre tramite l'attributo `data-bs-autocomplete`, ad una lista di oggetti nella quale sono presenti:

- nel campo `text` i nomi di alcune nazioni
- nel campo `link` un link associato a ciascuna di esse
- nel campo `icon` l'icona identificativa del risultato trovato
- nel campo `label` la label aggiuntiva

Cerca ad esempio _"Italia"_ per verificarne il comportamento.

{% capture example %}

<div class="form-group">
  <label for="autocomplete-test" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="autocomplete" placeholder="Testo da cercare"
    id="autocomplete-test"
    name="autocomplete-test"
    data-bs-autocomplete='{{ site.data.autocomplete.nazioni | jsonify }}'>
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
</div>
{% endcapture %}{% include example.html content=example %}

### Attivazione tramite JavaScript

È possibile creare un'istanza con il constructor, ad esempio:

```js
var inputElement = document.getElementById('autocomplete-test')
var inputSearch = new bootstrap.InputSearch(inputElement, {
  autocomplete: '{{ site.data.autocomplete.regioni | jsonify }}',
})
```

## Area di testo

Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento di tipo `<textarea>` ridimensionabile.

Includendo l'elemento all'interno di un `.form-group`, la label assumerà lo stesso comportamento dinamico dei campi di input.

{% comment %}Example name: Area di testo {% endcomment %}
{% capture example %}
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Esempio di area di testo</label>
    <textarea id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
{% endcapture %}{% include example.html content=example %}

### Dimensione

È possibile modificare la dimensione dell'elemento utilizzando le classi `.form-control-lg` e `.form-control-sm`, che modificano la grandezza del carattere e la spaziatura interna.

{% comment %}Example name: Varianti di dimensione {% endcomment %}
{% capture example %}
  <div class="form-group">
    <label class="active" for="input-text-lg">Grande</label>
    <input type="text" class="form-control form-control-lg" id="input-text-lg" placeholder="Inserisci il tuo nome">
  </div>
    <div class="form-group">
    <label class="active" for="input-text-normal">Normale</label>
    <input type="text" class="form-control" id="input-text-normal" placeholder="Inserisci il tuo nome">
  </div>
  <div class="form-group">
    <label class="active" for="input-text-lg">Piccolo</label>
    <input type="text" class="form-control form-control-sm" id="input-text-sm" placeholder="Inserisci il tuo nome">
  </div>
{% endcapture %}{% include example.html content=example %}
