---
layout: docs
title: Form Input
description: Elementi e stili per la creazione di input accessibili e responsivi.
group: componenti
toc: true
---

<style>
  /* Style override for Documentation purposes - Autocomplete*/
  #testAutocomplete1, #testAutocomplete2 {
    position: static;
		display: block;
  }
</style>

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

Per ottenere l'autocomplete bisogna aggiungere all'input la classe `.autocomplete` e l'attributo `data-db` con il nome della variabile javascript che contiene il JSON da filtrare oppure il nome della funzione che dinamicamente restituirà un array.

L'icona della lente è contenuta in uno `<span>` con classe `.autocomplete-icon`, nascosta agli screen reader dall'attributo `aria-hidden="true"`.

{% capture callout %}
La descrizione accessibile del campo è ottenuta con una label nascosta visivamente dalla classe `.sr-only`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

L'elenco dei risultati generati dalla ricerca è una lista <ul> con classe .autocomplete-list.

I singoli risultati sono contentui negli elementi <li> della lista e si compongono di:
- Avatar o Icona: nel caso in cui non sia presente un'icona adeguata, utilizzare come icona di default `#it-file` per indicare una pagina generica.
- Testo: elemento `<span>` contenuto in `.autocomplete-list-text`
- Label: elemento `<em>` contenuto nel testo

Il testo corrispondente alla ricerca ("ite" nell'esempio) deve essere racchiuso in un tag `<mark>`.

<script>
  var testMockData = [null];
</script>

{% capture example %}
<div class="form-group">
	<input type="search" id="autocomplete1" name="autocomplete1" class="autocomplete" placeholder="Testo da cercare" data-db="testMockData">
	<span class="autocomplete-icon" aria-hidden="true">
		<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
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
					<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
				</div>
				<span  class="autocomplete-list-text">
					<span>List <mark>Ite</mark>m</span><em>Label</em>
				</span>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
				<span class="autocomplete-list-text">
					<span>List <mark>Ite</mark>m</span><em>Label</em>
				</span>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
				<span  class="autocomplete-list-text">
					<span>List <mark>Ite</mark>m</span><em>Label</em>
				</span>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
				<span class="autocomplete-list-text">
					<span>List <mark>Ite</mark>m</span><em>Label</em>
				</span>
			</a>
		</li>
	</ul>
	<label for="autocomplete1" class="sr-only">Cerca nel sito</label>
</div>
{% endcapture %}{% include example.html content=example %}

<script>
  var regioni = [
    {% for regione in site.data.regioni %}"{{ regione }}",{% endfor %}
    "Tutte"
  ];
</script>

#### Esempio Autocomplete con dati

Questo Autocomplete è collegato, tramite l'attributo `data-db`, ad una variabile "regioni" nella quale sono presenti i nomi di tutte le regioni italiane. Cerca una regione italiana per verificarne il comportamento.

{% capture example %}
<div class="form-group">
	<input type="search" id="autocompleteData" name="autocompleteData" class="autocomplete" placeholder="Testo da cercare" data-db="regioni">
	<span class="autocomplete-icon" aria-hidden="true">
		<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
	</span>
	<label for="autocompleteData" class="sr-only">Cerca nel sito</label>
</div>
{% endcapture %}{% include example.html content=example %}

#### Autocomplete grande

Per ottenere una versione grande dell'Autocomplete, indicata ad esempio per intestazioni di pagina ed overaly dedicati, aggiungere la classe `.autocomplete-wrapper-big` al contenitore `.form-group`.

{% capture example %}
<div class="form-group autocomplete-wrapper-big">
	<input type="search" id="autocomplete2" name="autocomplete2" class="autocomplete" placeholder="Testo da cercare" data-db="testMockData">
	<span class="autocomplete-icon" aria-hidden="true">
		<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
	</span>
	<ul class="autocomplete-list" id="testAutocomplete2">
		<li>
			<a href="#">
				<div class="avatar size-sm">
					<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Paola Pistoia">
				</div>
				<span  class="autocomplete-list-text">
					<span>Paola <mark>Pi</mark>stoia</span><em>Profilo</em>
				</span>
			</a>
		</li>
		<li>
			<a href="#">
				<div class="avatar size-sm">
					<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Pierluigi Rossi">
				</div>
				<span  class="autocomplete-list-text">
					<span><mark>Pi</mark>erluigi Rossi</span><em>Profilo</em>
				</span>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
				<span  class="autocomplete-list-text">
					<span>Guida a 18 app per gli esercenti</span><em>Documento</em>
				</span>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-pa"></use></svg>
				<span  class="autocomplete-list-text">
					<span>Comune di <mark>Pi</mark>sa</span><em>Amministrazione</em>
				</span>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
				<span  class="autocomplete-list-text">
					<span>Linee guida per i cataloghi pubblica amministrazione</span><em>Documento</em>
				</span>
			</a>
		</li>
	</ul>
	<label for="autocomplete2" class="sr-only">Cerca nel sito</label>
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
