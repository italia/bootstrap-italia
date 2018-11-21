---
layout: docs
title: Input Number
description: Consente all'utente di far scorrere automaticamente ad una parte specifica della pagina
group: componenti-aggiuntivi
toc: true
---

## Esempio

Per attivare lo scorrimento automatico del documento all'àncora indicata nell'attibuto `href`, è sufficiente aggiungere al tag link l'attributo `data-attribute="forward"` e la classe `.forward`:

{% capture example %}
<span class="input-number">
	<input type="number" id="inputNumber1" name="inputNumber1" value="100">
	<button class="add">
		<span class="sr-only">Aumenta valore</span>
	</button>
	<button class="sub">
		<span class="sr-only">Diminuisci valore</span>
	</button>
</span>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<span class="input-number">
	<input type="number" id="inputNumber2" name="inputNumber2" value="500" min="-2000" max="15000" step="500">
	<button class="add">
		<span class="sr-only">Aumenta valore</span>
	</button>
	<button class="sub">
		<span class="sr-only">Diminuisci valore</span>
	</button>
</span>
{% endcapture %}{% include example.html content=example %}


{% capture example %}
<span class="input-number currency">
	<input type="number" id="inputNumber3" name="inputNumber3" value="3.50" min="0">
	<button class="add">
		<span class="sr-only">Aumenta valore</span>
	</button>
	<button class="sub">
		<span class="sr-only">Diminuisci valore</span>
	</button>
</span>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<span class="input-number percentage">
	<input type="number" id="inputNumber4" name="inputNumber4" value="50" min="0" max="100" step="1">
	<button class="add">
		<span class="sr-only">Aumenta valore</span>
	</button>
	<button class="sub">
		<span class="sr-only">Diminuisci valore</span>
	</button>
</span>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<span class="input-number disabled">
	<input type="number" id="inputNumber4" name="inputNumber4" value="50" min="0" max="100" step="1" disabled>
	<button class="add" disabled>
		<span class="sr-only">Aumenta valore</span>
	</button>
	<button class="sub" disabled>
		<span class="sr-only">Diminuisci valore</span>
	</button>
</span>
{% endcapture %}{% include example.html content=example %}
