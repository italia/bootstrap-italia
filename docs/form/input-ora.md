---
layout: docs
group: form
toc: true

title: Input Ora
description: Campi input con bottoni per agevolare la selezione di un orario
---

Il componente input time, o timepicker, è un componente personalizzato per la selezione di un orario.

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
  <section class="time-spinner">
    <div class="error_container" role="alert" aria-atomic="true"></div>
    <fieldset>
      <legend><span class="sr-only">Time</span></legend>
      <div>
        <div class="calendar-input-container">
          <div class="form-group">
            <input class="form-control txtTime" id="txtTime1" type="text" placeholder="hh:mm">
            <button class="btn-time" id="btnTime1" aria-label="Time picker - Scadenza">
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-clock"></use>
              </svg>
            </button>
            <label for="txtTime1">Label timepicker</label>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="spinner-control" aria-hidden="true" role="region" aria-label="Due Date Time" tabindex="-1">
      <div class="spinner-hour spinner">
        <input class="spinnerHour form-control" id="spinnerh" aria-label="hour" type="number" value="00" role="spinbutton" maxlength="2" aria-valuenow="00" aria-valuemax="23" aria-valuemin="0" bb-skip="3">
        <div class="button-wrapper">
          <button class="button-hour btnHourUp" id="iduph" aria-label="Increase Hour">
            <span class="icon-up"></span>
          </button>
          <button class="button-hour btnHourDown" id="iddownh" aria-label="Decrease Hour">
            <span class="icon-down"></span>
          </button>
        </div>
      </div>
      <div class="spinner-min spinner">
        <input class="spinnerMin form-control" id="spinnerm" aria-label="minute" type="number" value="00" role="spinbutton" aria-valuenow="00" maxlength="2" aria-valuemax="59" aria-valuemin="00" bb-skip="10">
        <div class="button-wrapper">
          <button class="btnMinUp button-minute" id="idupm" aria-label="Increase Minute">
            <span class="icon-up"></span>
          </button>
          <button class="btnMinDown button-minute" id="iddownm" aria-label="Decrease Minute">
            <span class="icon-down"></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione scura
Per utilizzare il Datepicker in versione scura, aggiungere la classe `.theme-dark` al div `it-timepicker-wrapper`
Clicca sull'icona per visualizzare il datepicker.

{% capture example %}
<div class="it-timepicker-wrapper theme-dark">
  <section class="time-spinner">
    <div class="error_container" role="alert" aria-atomic="true"></div>
    <fieldset>
      <legend><span class="sr-only">Time</span></legend>
      <div>
        <div class="calendar-input-container">
          <div class="form-group">
            <input class="form-control txtTime" id="txtTime2" type="text" placeholder="hh:mm">
            <button class="btn-time" id="btnTime2" aria-label="Time picker - Scadenza">
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-clock"></use>
              </svg>
            </button>
            <label for="txtTime2">Label timepicker</label>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="spinner-control" aria-hidden="true" role="region" aria-label="Due Date Time" tabindex="-1">
      <div class="spinner-hour spinner">
        <input class="spinnerHour form-control" id="spinnerh2" aria-label="hour" type="number" value="00" role="spinbutton" maxlength="2" aria-valuenow="00" aria-valuemax="23" aria-valuemin="00" bb-skip="3">
        <div class="button-wrapper">
          <button class="button-hour btnHourUp" id="iduph2" aria-label="Increase Hour">
            <span class="icon-up"></span>
          </button>
          <button class="button-hour btnHourDown" id="iddownh2" aria-label="Decrease Hour">
            <span class="icon-down"></span>
          </button>
        </div>
      </div>
      <div class="spinner-min spinner">
        <input class="spinnerMin form-control" id="spinnerm2" aria-label="minute" type="number" value="00" role="spinbutton" aria-valuenow="00" maxlength="2" aria-valuemax="59" aria-valuemin="00" bb-skip="10">
        <div class="button-wrapper">
          <button class="btnMinUp button-minute" id="idupm2" aria-label="Increase Minute">
            <span class="icon-up"></span>
          </button>
          <button class="btnMinDown button-minute" id="iddownm2" aria-label="Decrease Minute">
            <span class="icon-down"></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
{% endcapture %}{% include example.html content=example %}
