---
layout: docs
group: form
toc: true

title: Input Calendario
description: Documentazione ed esempi per aggiungere calendari per la selezione di giorni dell'anno
---

Il datepicker utilizza un plugin Javascript di terze parti, "Accessible Bootstrap Date Picker". Per maggiori informazioni è possibile consultarne la [documentazione completa](http://eureka2.github.io/ab-datepicker/#).

## Abilitazione del Datepicker

Per inizializzare il plugin, utilizzare il seguente script:

{% highlight js %}
$(document).ready(function() {
    $('.it-date-datepicker').datepicker({
      inputFormat: ["dd/MM/yyyy"],
      outputFormat: 'dd/MM/yyyy',
    });
});
{% endhighlight %}

## Esempi

Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-datepicker-wrapper">
  <div class="form-group">
    <input class="form-control it-date-datepicker" id="date1" type="text" placeholder="inserisci la data in formato gg/mm/aaaa">
    <label for="date1">Date label</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione scura

Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `.it-datepicker-wrapper`.

Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-datepicker-wrapper theme-dark">
  <div class="form-group">
    <input class="form-control it-date-datepicker" id="date2" type="text" placeholder="inserisci la data in formato gg/mm/aaaa">
    <label for="date2">Date label</label>
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

