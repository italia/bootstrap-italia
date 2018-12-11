---
layout: docs
group: componenti
toc: true
title: Datepicker
description: Un comodo componente per la selezione di una data o di un orario
---

## Panoramica

Per la gestione della data e degli orari abbiamo scelto di usare un plugin che risulta responsive e accessibile. Sfrutteremo questo componente per mettere a disposizione la possibilità di inserire una data o un orario in modo semplice e veloce.

## Calendario

Per inserire un campo di tipo _datepicker_, che apre un calendario per la selezione delle date, il tag input dovrà avere come classe non `form-control`, ma `form-control-plaintext` perchéqua risulterà readonly. Per attivare il componente va aggiunto l'attributo `data-action="datepicker"` e per stilizzarlo la classe `datepicker`.

{% capture example %}
<div class="form-group">
    <div class="">
        <input id="datepicker" data-action="datepicker" class="form-control-plaintext datepicker" name="date" type="text" autofocuss>
        <label for="datepicker">Data</label>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Usabilità

Si tenga presente che per l'inserimento di date con un range maggiore di un anno si consiglia l'utilizzo di campi distinti per giorno, mese e anno per una compilazione manuale.

{% capture example %}
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
{% endcapture %}{% include example.html content=example %}

## Scelta oraria

Oltre al calendario il plugin offre la possibilità di fare una scelta su base oraria. Come per il _datepicker_, ance in questo caso il tag input dovrà avere come classe non `form-control`, ma `form-control-plaintext` perché risulterà readonly. Per attivare il componente va aggiunto l'attributo `data-action="timepicker"` e per stilizzarlo la classe `timepicker`.

{% capture example %}
<div class="form-group">
    <input id="timepicker" data-action="timepicker" class="form-control-plaintext timepicker" type="time" name="time" autofocuss>
    <label for="timepicker">Orario</label>
</div>
{% endcapture %}{% include example.html content=example %}

## Personalizzazione

Per un utilizzo più complesso e personalizzato della plugin si rimanda alle istruzioni presenti su  [datepicker](http://amsul.ca/pickadate.js/date/) e su [timepicker](http://amsul.ca/pickadate.js/time/).
