---
layout: docs
title: Form Input Autocomplete
description: Elementi e stili per la creazione di input accessibili e responsivi.
group: componenti
toc: true
---

<style>
  /* Style override for Documentation purposes */
  #testAutocomplete1 {
    position: static;
		display: block;
  }
</style>

## Esempio

Per ottenere l'autocomplete bisogna aggiungere all'input la classe `.autocomplete`.

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
<div class="form-group">
	<input type="search" id="autocomplete1" name="autocomplete1" class="autocomplete" placeholder="Testo da cercare">
	<span class="autocomplete-icon" aria-hidden="true">
		<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
	</span>
	<ul class="autocomplete-list" id="testAutocomplete1">
		<li>
			<a href="#">
				<div class="avatar size-sm">
					<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri">
				</div>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<div class="avatar size-sm">
					<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
				</div>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-settings"></use></svg>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-note"></use></svg>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-pa"></use></svg>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
	</ul>
	<label for="autocomplete1" class="sr-only">Cerca nel sito</label>
</div>
{% endcapture %}{% include example.html content=example %}

## Versione grande

{% capture example %}
<div class="form-group autocomplete-wrapper-big">
	<input type="search" id="autocomplete2" name="autocomplete2" class="autocomplete" placeholder="Testo da cercare">
	<span class="autocomplete-icon" aria-hidden="true">
		<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
	</span>
	<ul class="autocomplete-list" id="testAutocomplete1">
		<li>
			<a href="#">
				<div class="avatar size-sm">
					<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri">
				</div>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<div class="avatar size-sm">
					<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
				</div>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-settings"></use></svg>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-note"></use></svg>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
		<li>
			<a href="#">
				<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-pa"></use></svg>
				<span class="autocomplete-list-label">List <mark>Ite</mark>m</span>
				<em>Label</em>
			</a>
		</li>
	</ul>
	<label for="autocomplete2" class="sr-only">Cerca nel sito</label>
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