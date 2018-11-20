---
layout: docs
title: Form Input
description: Elementi e stili per la creazione di input accessibili e responsivi.
group: componenti
toc: true
---

## Input

Per il corretto funzionamento degli elementi di tipo `<input>`, è di fondamentale importanza l'utilizzo uno degli appositi attributi `type` (ad esempio, `email` per l'inserimento di indirizzi email o `number` per informazioni numeriche), in modo da sfruttare i controlli di input più recenti come la verifica dell'email, l'utilizzo di metodo di input numerico e altro.

### Input text

{% capture example %}
<div>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputText">
    <label for="exampleInputText">Campo di tipo testuale</label>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-labelledby="emailHelp1">
    <label for="exampleInputEmail1">Campo di tipo email</label>
    <small id="emailHelp1" class="form-text text-muted">Non condivideremo mai la tua email con nessun altro.</small>
  </div>
  <div class="form-group">
    <input type="number" class="form-control" id="exampleInputNumber">
    <label for="exampleInputNumber">Campo di tipo numerico</label>
  </div>
  <div class="form-group">
    <input type="tel" class="form-control" id="exampleInputTelephone">
    <label for="exampleInputTelephone">Campo di tipo telefono</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Input password

Per rendere più semplice l'inserimento della password, l'elemento è stato dotato di un visualizzatore dei caratteri digitati. Inoltre è possibile abbinare un controllo (grazie alla componente [strength meter](https://www.npmjs.com/package/password-strength-meter)) per segnalare quanto la password che si sta inserendo sia sicura con l'aggiunta della classe `.form-password`.

{% capture example %}
<div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword">
    <label for="exampleInputPassword">Password</label>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword3" aria-labelledby="infoPassword" placeholder="Password">
    <small id="infoPassword" class="form-text text-muted">Inserisci almeno 8 caratteri e una lettera maiuscola</small>
  </div>
  <div class="form-group">
    <input type="password" class="form-control form-password" id="exampleInputPassword2">
    <label for="exampleInputPassword2">Password con strength meter</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Input autocomplete

Per ottenere l'autocomplete bisogna aggiungere all'input la classe `.autocomplete` e l'attributo `.data-db` con il nome della variabile javascript che contiene l'array da filtrare oppure il nome della funzione che dinamicamente restituirà un array. 

<script>
  function functionRegioni() {
    var regioni = [
    {% for regione in site.data.regioni %}"{{ regione }}",{% endfor %}
    "Tutte"
    ];
    return regioni
  }
  var regioni = [
    {% for regione in site.data.regioni %}"{{ regione }}",{% endfor %}
    "Tutte"
  ];
</script>

{% capture example %}
<div>
  <div class="form-group">
    <input type="search" id="autocomplete1" class="form-control autocomplete" data-db="regioni">
    <label for="autocomplete1">Regione</label>
  </div>
  <div class="form-group">
    <input type="search" id="autocomplete2" class="form-control autocomplete" data-db="functionRegioni()">
    <label for="autocomplete2">Regione (con caricamento tramite funzione)</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Disabilitato

Aggiungi l'attributo `disabled` ad un input per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti.

{% capture example %}
<div class="form-group">
  <input class="form-control form-control" type="text" id="input-text-disabled" disabled>
  <label for="input-text-disabled">Contenuto disabilitato</label>
</div>
{% endcapture %}{% include example.html content=example %}

### Readonly

Aggiungi l'attributo `readonly` ad un input per impedire la modifica del valore contenuto.

{% capture example %}
<div class="form-group">
  <input class="form-control form-control" type="text" id="input-text-read-only" readonly>
  <label for="input-text-read-only">Contenuto in sola lettura</label>
</div>
{% endcapture %}{% include example.html content=example %}

#### Readonly normalizzato

Se vuoi avere gli elementi `<input readonly>` nella forma stilizzata come testo normale usa la classe `.form-control-plaintext`.

{% capture example %}
<div>
  <div class="form-group">
    <input type="text" class="form-control-plaintext" id="staticEmail" value="email@example.com" readonly>
    <label for="staticEmail">Email</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Textarea

{% capture example %}
<div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <label for="exampleFormControlTextarea1">Example textarea</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}

### Dimensione

È possibile modificare la dimensione dell'elemento utilizzando le classi `.form-control-lg` e `.form-control-sm`, che modificano la grandezza del carattere e la spaziatura interna.

{% capture example %}
<div>
  <div class="form-group">
    <input type="text" class="form-control form-control-lg" id="input-text-lg" placeholder="Inserisci il tuo nome">
    <label for="input-text-lg">.form-control-lg</label>
  </div>
  <div class="form-group">
    <input type="text" class="form-control form-control-sm" id="input-text-sm" placeholder="Inserisci il tuo nome">
    <label for="input-text-lg">.form-control-sm</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}



{% endcomment %}
