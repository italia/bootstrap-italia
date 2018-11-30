---
layout: docs
title: Datepicker
description: Documentazione ed esempi per aggiungere calendari per la selezione di giorni dell'anno
group: componenti
toc: true
---

Il datepicker utilizza per la versione desktop un plugin Javascript di terze parti, "Accessible Bootstrap Date Picker". Per maggiori informazioni è possibile consultarne la [documentazione completa](http://eureka2.github.io/ab-datepicker/#).

Nella sua versione mobile, per il datepicker è stato utilizzato l'elemento `<input type="date">` delegando al device le funzionalità.

## Abilitazione del Datepicker

Per inizializzare il plugin, utilizzare il seguente script:

{% highlight js %}
$(document).ready(function() {
    $('.it-date-datepicker').datepicker({
      inputFormat: ["gg/MM/aaaa"],
    });
});
{% endhighlight %}

## Esempi

Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-datepicker-wrapper d-lg-none">
  <label class="pickerlabel" for="datem">Date label</label>
  <input class="form-control datepicker" id="datem" type="date" placeholder="" value="2010-01-01">
</div>
<div class="it-datepicker-wrapper d-none d-lg-block">
  <div class="form-group">
    <input class="form-control it-date-datepicker" id="date1" type="text" placeholder="" title="format : ">
    <label for="date1">Date label</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione scura

Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `.it-datepicker-wrapper.d-lg-block`.

Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-datepicker-wrapper d-lg-none">
  <label class="pickerlabel" for="date2m">Date label</label>
  <input class="form-control datepicker" id="date2m" type="date" placeholder="" value="2010-01-01">
</div>
<div class="it-datepicker-wrapper d-none d-lg-block theme-dark">
  <div class="form-group">
    <input class="form-control it-date-datepicker" id="date2" type="text" placeholder="" title="format : ">
    <label for="date2">Date label</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

<script>
  document.addEventListener("DOMContentLoaded", function() {
    $('.it-date-datepicker').datepicker({
      inputFormat: ["gg/MM/aaaa"],
    });
  })
</script>

