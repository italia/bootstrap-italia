---
layout: docs
title: Datepicker
description: Banner informativo sull'utilizzo dei cookie all'interno del sito web 
group: componenti-aggiuntivi
toc: true
---

## Panoramica

Per la gestione della data abbiamo scelto di usare la plugin [pickadate.js](http://amsul.ca/pickadate.js/) che risulta responsive e accessibile. Sfrutteremo questo componente per mettervi a disposizione la possibilità di inserire una data o un orario in modo semplice e veloce.

## Datario

Per inserire un campo di datapicker il tag input dovrà avere come classe non `form-control`, ma `form-control-plaintext` perchè risulterà readonly. Per attivare la componente va aggiunta anche la classe `datepicker`.

{% example html %}
<div class="form-group">
    <div class="">
        <input id="datepicker" class="form-control-plaintext datepicker" name="date" type="text" autofocuss>
        <label for="datepicker">Data</label>
    </div>
</div>
{% endexample %}

### Usabilità

Si tenga presente che per l'inserimento di date con un range maggiore di un anno si consiglia l'utilizzo di campi distinti per giorno, mese e anno per una compilazione manuale.

{% example html %}
<div class="form-group col-6">
    <div class="input-group">
        <input id="Giorno" type="number" class="form-control col-3" placeholder="GG" aria-label="Giorno" min="1" max="31" maxlength="2">
        <div class="input-group-prepend">
            <span class="input-group-text">/</span>
        </div>
        <input id="" type="number" class="form-control col-3" placeholder="MM" aria-label="Mese" min="1" max="12" maxlength="2">
        <div class="input-group-prepend">
            <span class="input-group-text">/</span>
        </div>
        <input id="Anno" type="number" class="form-control col-4" placeholder="AAAA" aria-label="Anno" min="1890" max="2020" maxlength="4">
    </div>
    <label for="Giorno">Data di nascita</label>
</div>
{% endexample %}

## Scelta oraria

Oltre al datario la plugin offre la possibilità di fare una scelta oraria. Come per il datapicker ance qui il tag input dovrà avere come classe non `form-control`, ma `form-control-plaintext` perchè risulterà readonly. Per attivare la componente va aggiunta anche la classe `timepicker`.

{% example html %}
<div class="form-group">
    <input id="timepicker" class="form-control-plaintext timepicker" type="time" name="time" autofocuss>
    <label for="timepicker">Orario</label>
</div>
{% endexample %}

## Personalizzazione

Per un utilizzo più complesso e personalizzato della plugin si rimanda alle istruzioni presenti su  [datepicker](http://amsul.ca/pickadate.js/date/) e su [timepicker](http://amsul.ca/pickadate.js/time/).