---
layout: docs
title: Datepicker & Timepicker
description: Documentazione ed esempi per aggiungere datepicker e timepicker con CSS e JavaScript.
group: componenti
toc: true
---

## Introduzione
Cose da sapere quando usi il plugin datepicker:

- Il timepicker utilizza un plugin javascript per la renderizzazione su desktop la cui documentazione può essere consultata a questo indirizzo [http://eureka2.github.io/ab-datepicker/](http://eureka2.github.io/ab-datepicker/#).
- Nella versione mobile, per il datepicker è stato utilizzato l'elemento `<input type="date">` delegando al device le funzionalità.

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

### Datepicker
Clicca sull'icona per visualizzare il datepicker:

{% capture example %}
<div class="it-datepicker-wrapper d-lg-none">
  <label for="datem">Date label</label>
  <input class="form-control datepicker" id="datem" type="date" placeholder="" value="2010-01-01">
</div>
<div class="it-datepicker-wrapper d-none d-lg-block">
  <div class="form-group">
    <input class="form-control it-date-datepicker" id="date1" type="text" placeholder="" title="format : ">
    <label for="date1">Date label</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Datepicker versione scura
Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `.it-datepicker-wrapper.d-lg-block`
Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-datepicker-wrapper d-lg-none">
  <label for="date2m">Date label</label>
  <input class="form-control datepicker" id="date2m" type="date" placeholder="" value="2010-01-01">
</div>
<div class="it-datepicker-wrapper d-none d-lg-block theme-dark">
  <div class="form-group">
    <input class="form-control it-date-datepicker" id="date2" type="text" placeholder="" title="format : ">
    <label for="date2">Date label</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Timepicker
Il Timepicker è un componente custom (in versione desktop), ad oggi non esistono plugin in grado di rendere accessibile i timepicker.
Nella versione mobile è stato utilizzato l'elemento standard `<input type="time">` delegando al device le sue funzionalità.

{% capture callout %}
#### Note importanti

Assicurati di aggiungere sempre l'attributo **`id`** ai seguenti tag:
 - **`<input class="form-control>`** : L'input di testo che riceve i valori selezionati.
 - **`<input class="spinnerHour">`** : L'input di testo per i valori ora.
 - **`<input class="spinnerMin">`** : L'input di testo per i valori minuti.
 - **`<button class="btnHourUp">`** : Il pulsante che aumenta il valore ora.
 - **`<button class="btnHourDown">`** : Il pulsante che diminuisce il valore ora.
 - **`<button class="btnMinUp">`** : Il pulsante che aumenta il valore minuti.
 - **`<button class="btnMinDown">`** : Il pulsante che diminuisce il valore minuti.
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture example %}
<div class="it-timepicker-wrapper">
  <label class="d-lg-none" for="appt">Label Timepicker</label>
  <input class="form-control d-lg-none" type="time" id="appt" name="appt" min="0:00" max="24:00" value="00:00">
  <section class="time-spinner d-none d-lg-block">
    <div class="error_container" role="alert" aria-atomic="true"></div>
    <fieldset>
      <div>
        <div class="calendar-input-container">
          <div class="form-group">
            <input class="form-control txtTime" id="txtTime" type="text" placeholder="hh:mm">
            <button class="btn-time" id="btnTime" aria-label="Time picker - Scadenza">
              <svg class="icon">
                <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
              </svg>
            </button>
            <label for="txtTime">Label timepicker</label>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="spinner-control" aria-hidden="true" role="region" aria-label="Due Date Time" tabindex="-1">
      <div class="spinner-hour spinner">
        <input class="spinnerHour form-control" id="spinnerh" aria-label="hour" type="number" value="00" role="spinbutton" maxlength="2" aria-valuenow="00" aria-valuemax="23" aria-valuemin="0" bb-skip="3">
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
        <input class="spinnerMin form-control" id="spinnerm" aria-label="minute" type="number" value="00" role="spinbutton" aria-valuenow="00" maxlength="2" aria-valuemax="59" aria-valuemin="00" bb-skip="10">
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
Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `it-timepicker-wrapper`
Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-timepicker-wrapper theme-dark">
  <label class="d-lg-none" for="appt">Label Timepicker</label>
  <input class="form-control d-lg-none" type="time" id="appt" name="appt" min="0:00" max="24:00" value="00:00">
  <section class="time-spinner d-none d-lg-block">
    <div class="error_container" role="alert" aria-atomic="true"></div>
    <fieldset>
      <div>
        <div class="calendar-input-container">
          <div class="form-group">
            <input class="form-control txtTime" id="txtTime" type="text" placeholder="hh:mm">
            <button class="btn-time" id="btnTime" aria-label="Time picker - Scadenza">
              <svg class="icon">
                <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
              </svg>
            </button>
            <label for="txtTime">Label timepicker</label>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="spinner-control" aria-hidden="true" role="region" aria-label="Due Date Time" tabindex="-1">
      <div class="spinner-hour spinner">
        <input class="spinnerHour form-control" id="spinnerh2" aria-label="hour" type="number" value="00" role="spinbutton" maxlength="2" aria-valuenow="00" aria-valuemax="23" aria-valuemin="00" bb-skip="3">
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
        <input class="spinnerMin form-control" id="spinnerm2" aria-label="minute" type="number" value="00" role="spinbutton" aria-valuenow="00" maxlength="2" aria-valuemax="59" aria-valuemin="00" bb-skip="10">
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

