---
layout: docs
title: Form Input Autocomplete
description: Elementi e stili per la creazione di input accessibili e responsivi.
group: componenti
toc: true
---

<style>
  /* Style override for Documentation purposes */
  #testAutocomplete1, #testAutocomplete2 {
    position: static;
		display: block;
  }
</style>

## Esempio

Per ottenere design e funzionalità specifiche dell'autocomplete bisogna aggiungere all'input la classe `.autocomplete-search`.

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

{% capture example %}
<div class="form-group">
	<input type="search" id="autocomplete1" name="autocomplete1" class="autocomplete-search" placeholder="Testo da cercare">
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

### Versione grande

Per ottenere una versione grande dell'Autocomplete, indicata ad esempio per intestazioni di pagina ed overaly dedicati, aggiungere la classe `.autocomplete-wrapper-big` al contenitore `.form-group`.

{% capture example %}
<div class="form-group autocomplete-wrapper-big">
	<input type="search" id="autocomplete2" name="autocomplete2" class="autocomplete-search" placeholder="Testo da cercare">
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

## Esempio con dati

{% capture example %}
<div class="form-group">
	<input type="search" id="autocomplete3" name="autocomplete3" class="autocomplete-search" placeholder="Testo da cercare">
	<span class="autocomplete-icon" aria-hidden="true">
		<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
	</span>
	<ul class="autocomplete-list">
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
	</ul>
	<label for="autocomplete3" class="sr-only">Cerca nel sito</label>
</div>
{% endcapture %}{% include example.html content=example %}

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