---
layout: docs
title: Datepicker & Timepicker
description: Documentazione ed esempi per aggiungere datepicker e timepicker con CSS e JavaScript.
group: componenti
toc: true
---

## Introduzione
Cose da sapere quando usi il plugin datepicker:

- Il timepicker utilizza un plugin javascript la cui documentazione può essere consultata a questo indirizzo [http://eureka2.github.io/ab-datepicker/](http://eureka2.github.io/ab-datepicker/#).

## Abilitazione del Datepicker

Per inizializzare il plugin, utilizzare lo script:

{% highlight js %}
$(document).ready(function() {
    $('.it-date-datepicker').datepicker({
      inputFormat: ["gg/MM/aaaa"],
    });
});
{% endhighlight %}

## Esempi

### Datepicker
Clicca sull'icona per visualizzare il datepicker:

{% capture example %}
<div class="it-datepicker-wrapper">
  <label for="date1">Date label</label>
  <input class="form-control it-date-datepicker" id="date1" type="text" placeholder="" title="format : ">
</div>
{% endcapture %}{% include example.html content=example %}

### Datepicker versione scura
Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `.it-datepicker-wrapper`
Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-datepicker-wrapper theme-dark">
  <label for="date2">Date label</label>
  <input class="form-control it-date-datepicker" id="date2" type="text" placeholder="" title="format : ">
</div>
{% endcapture %}{% include example.html content=example %}

### Timepicker
Il Timepicker è un componente custom, ad oggi non esistono plugin in grado di rendere accessibile i timepicker.


{% capture example %}
<div class="it-timepicker-wrapper">
  <section class="time-spinner">
    <div id="error_container" role="alert" aria-atomic="true"></div>
    <fieldset>
      <div>
        <div class="calendar-input-container">
          <input class="form-control txtTime" id="txtTime" type="text" placeholder="hh:mm">
          <button class="btn-time" id="btnTime" aria-label="Time picker - Due Date">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    </fieldset>
    <div class="spinner-control" aria-hidden="true" role="region" aria-label="Due Date Time" tabindex="-1">
      <div class="spinner-hour spinner">
        <input class="spinnerHour form-control" id="spinnerh" aria-label="hour" value="24" role="spinbutton" maxlength="2" aria-valuenow="24" aria-valuemax="24" aria-valuemin="1" bb-skip="3">
        <div class="button-wrapper">
          <button class="button-hour btnHourUp" id="iduph" aria-label="Increase Hour">
            <svg class="icon fa-angle-up">
              <use xlink:href="/dist/svg/sprite.svg#it-collapse"></use>
            </svg>
          </button>
          <button class="button-hour btnHourDown" id="iddownh" aria-label="Decrease Hour">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="spinner-min spinner">
        <input class="spinnerMin form-control" id="spinnerm" aria-label="minute" value="00" role="spinbutton" aria-valuenow="00" maxlength="2" aria-valuemax="59" aria-valuemin="00" bb-skip="10">
        <div class="button-wrapper">
          <button class="btnMinUp button-minute" id="idupm" aria-label="Increase Minute">
            <svg class="icon fa-angle-up">
              <use xlink:href="/dist/svg/sprite.svg#it-collapse"></use>
            </svg>
          </button>
          <button class="btnMinDown button-minute" id="iddownm" aria-label="Decrease Minute">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
{% endcapture %}{% include example.html content=example %}

### Timepicker versione scura
Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `.it-datepicker-wrapper`
Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-timepicker-wrapper theme-dark">
  <section class="time-spinner">
    <div id="error_container" role="alert" aria-atomic="true"></div>
    <fieldset>
      <div>
        <div class="calendar-input-container">
          <input class="form-control txtTime" id="txtTime" type="text" placeholder="hh:mm">
          <button class="btn-time" id="btnTime" aria-label="Time picker - Due Date">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    </fieldset>
    <div class="spinner-control" aria-hidden="true" role="region" aria-label="Due Date Time" tabindex="-1">
      <div class="spinner-hour spinner">
        <input class="spinnerHour form-control" id="spinnerh2" aria-label="hour" value="24" role="spinbutton" maxlength="2" aria-valuenow="24" aria-valuemax="24" aria-valuemin="1" bb-skip="3">
        <div class="button-wrapper">
          <button class="button-hour btnHourUp" id="iduph2" aria-label="Increase Hour">
            <svg class="icon fa-angle-up">
              <use xlink:href="/dist/svg/sprite.svg#it-collapse"></use>
            </svg>
          </button>
          <button class="button-hour btnHourDown" id="iddownh2" aria-label="Decrease Hour">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="spinner-min spinner">
        <input class="spinnerMin form-control" id="spinnerm2" aria-label="minute" value="00" role="spinbutton" aria-valuenow="00" maxlength="2" aria-valuemax="59" aria-valuemin="00" bb-skip="10">
        <div class="button-wrapper">
          <button class="btnMinUp button-minute" id="idupm2" aria-label="Increase Minute">
            <svg class="icon fa-angle-up">
              <use xlink:href="/dist/svg/sprite.svg#it-collapse"></use>
            </svg>
          </button>
          <button class="btnMinDown button-minute" id="iddownm2" aria-label="Decrease Minute">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
{% endcapture %}{% include example.html content=example %}


<script>
  document.addEventListener("DOMContentLoaded", function() {
    $('.it-date-datepicker').datepicker({
      inputFormat: ["gg/MM/aaaa"],
    });
  })
</script>

