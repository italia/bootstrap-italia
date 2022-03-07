---
layout: docs
group: form
toc: true

title: Input Calendario
description: Documentazione ed esempi per aggiungere calendari per la selezione di giorni dell'anno
---
## Datepicker standard

{% capture callout %}
**Compatibilità con Internet Explorer 11**

L'input type="date" non è supportato da IE11, se ne consiglia l'utilizzo congiuntamente al plugin [Just Validate](https://just-validate.dev/) per verificare l'effettiva validità del campo su Internet Exploer.
{% endcapture %}{% include callout.html content=callout type="warning" %}

Clicca sull’icona a destra per visualizzare il datepicker.

{% capture example %}
<div class="form-group">
    <label class="active" for="dateStandard">Datepicker standard</label>
    <input type="date" id="date" name="dateStandard">
</div>
{% endcapture %}{% include example.html content=example %}

## Datepicker custom

Il datepicker custom utilizza un plugin Javascript di terze parti, "Accessible Bootstrap Date Picker". Per maggiori informazioni è possibile consultarne la [documentazione completa](http://eureka2.github.io/ab-datepicker/#).

{% capture callout %}
**Il componente verrà deprecato nella prossima release di Bootstrap Italia**

Il componente datepicker custom presenta alcuni problemi di accessibilità. Non è possibile raggiungere i pulsanti di cambio mese/anno tramite tastiera. Se ne consiglia l'utilizzo nel caso in cui il campo non riguardi ad esempio una data di nascita, o un campo che necessiti la navigazione fra anni.
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Abilitazione del Datepicker custom

Per inizializzare il plugin, utilizzare il seguente script:

```js
$(document).ready(function () {
  $('.it-date-datepicker').datepicker({
    inputFormat: ['dd/MM/yyyy'],
    outputFormat: 'dd/MM/yyyy',
  })
})
```

## Esempi

Clicca sull'icona per visualizzare il datepicker.

{% capture example %}

<div class="it-datepicker-wrapper">
  <div class="form-group">
    <label for="date1">Date label</label>
    <input class="form-control it-date-datepicker" id="date1" type="text" placeholder="inserisci la data in formato gg/mm/aaaa">
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione scura

Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `.it-datepicker-wrapper`.

Clicca sull'icona per visualizzare il datepicker.

{% capture example %}

<div class="it-datepicker-wrapper theme-dark">
  <div class="form-group">
    <label for="date2">Date label</label>
    <input class="form-control it-date-datepicker" id="date2" type="text" placeholder="inserisci la data in formato gg/mm/aaaa">
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

<script>
  document.addEventListener("DOMContentLoaded", function() {
    $('.it-date-datepicker').datepicker({
      inputFormat: ["dd/MM/yyyy"],
      outputFormat: 'dd/MM/yyyy',
    });
  })
</script>
