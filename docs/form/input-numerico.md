---
layout: docs
group: form
toc: true

title: Input Numerico
description: Campi input con bottoni per incrementare/decrementare valori numerici
---

L'input di tipo numerico va racchiuso in uno `<span>` con classe `.input-number`.

L'attributo `value=""` deve contenere un valore di default.

## Esempi

La label va posizionata prima del wrapper e, per garantire l'accessibilità del campo, dovrà avere un attributo `for=""` corrispondente al nome e id del campo input.

La larghezza del campo predefinita è quella del suo contenitore, per limitare la larghezza alle dimensioni del valore contenuto utilizzare il <a href="#ridimensionamento">ridimensionamento adattivo</a>.

{% capture example %}

<div class="w-100">
  <label for="inputNumber" class="input-number-label">Input Number inserito in una colonna a tutta larghezza</label>
  <span class="input-number">
    <input type="number" id="inputNumber" name="inputNumber" value="100">
    <button class="input-number-add">
      <span class="sr-only">Aumenta valore</span>
    </button>
    <button class="input-number-sub">
      <span class="sr-only">Diminuisci valore</span>
    </button>
  </span>
</div>

<div class="w-50 mt-5">
	<label for="inputNumber1" class="input-number-label">Input Number inserito in una colonna di larghezza 50%</label>
	<span class="input-number">
		<input type="number" id="inputNumber1" name="inputNumber1" value="100">
		<button class="input-number-add">
			<span class="sr-only">Aumenta valore</span>
		</button>
		<button class="input-number-sub">
			<span class="sr-only">Diminuisci valore</span>
		</button>
	</span>
</div>
{% endcapture %}{% include example.html content=example %}

### Limiti e Step

Aggiungendo gli attributi HTML `min=""`, `max=""` e `step=""` all'input è possibile limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui bottoni.

{% capture example %}
<label for="inputNumber2" class="input-number-label">Min, Max & Step</label>
<span class="input-number">
<input type="number" id="inputNumber2" name="inputNumber2" value="100" min="-2000" max="15000" step="500">
<button class="input-number-add">
<span class="sr-only">Aumenta valore di 500</span>
</button>
<button class="input-number-sub">
<span class="sr-only">Diminuisci valore di 500</span>
</button>
</span>
{% endcapture %}{% include example.html content=example %}

### Valuta

Per anteporre il simbolo della valuta in Euro, aggiungere la classe `.input-number-currency` al wrapper `.input-number`.

{% capture example %}
<label for="inputNumber3" class="input-number-label">Currency</label>
<span class="input-number input-number-currency">
<input type="number" id="inputNumber3" name="inputNumber3" value="3.50" min="0">
<button class="input-number-add">
<span class="sr-only">Aumenta valore Euro</span>
</button>
<button class="input-number-sub">
<span class="sr-only">Diminuisci valore Euro</span>
</button>
</span>
{% endcapture %}{% include example.html content=example %}

### Percentuale

Per anteporre il simbolo percentuale, aggiungere la classe `.input-number-percentage` al wrapper `.input-number`.

Si consiglia di impostare gli attributi `min=0` e `max="100"`.

{% capture example %}
<label for="inputNumber4" class="input-number-label">Percentage</label>
<span class="input-number input-number-percentage">
<input type="number" id="inputNumber4" name="inputNumber4" value="50" min="0" max="100" step="10">
<button class="input-number-add">
<span class="sr-only">Aumenta del 10%</span>
</button>
<button class="input-number-sub">
<span class="sr-only">Diminuisci del 10%</span>
</button>
</span>
{% endcapture %}{% include example.html content=example %}

### Disabilitato

Per disabilitare un Input number, aggiungere la classe `.disabled` al wrapper `.input-number`.
Aggiungere anche l'attributo `disabled` al campo e ai bottoni.

{% capture example %}
<label for="inputNumber5" class="input-number-label">Disabled</label>
<span class="input-number disabled">
<input type="number" id="inputNumber5" name="inputNumber5" value="50" min="0" max="100" step="1" disabled>
<button class="input-number-add" disabled>
<span class="sr-only">Aumenta valore</span>
</button>
<button class="input-number-sub" disabled>
<span class="sr-only">Diminuisci valore</span>
</button>
</span>
{% endcapture %}{% include example.html content=example %}

### Ridimensionamento

È possibile far sì che il campo numerico si ridimensioni automaticamente a
seconda del valore contenuto in esso. Per ottenere questo comportamento, è
sufficiente aggiungere la classe `input-number-adaptive`.

{% capture example %}

<div class="w-100">
  <label for="inputNumber6" class="input-number-label">Adattivo</label>
  <span class="input-number input-number-adaptive">
    <input type="number" id="inputNumber6" name="inputNumber6" value="99999" step="1">
    <button class="input-number-add">
      <span class="sr-only">Aumenta valore</span>
    </button>
    <button class="input-number-sub">
      <span class="sr-only">Diminuisci valore</span>
    </button>
  </span>
</div>
{% endcapture %}{% include example.html content=example %}
