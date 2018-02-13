---
layout: docs
title: Checkbox
group: componenti
toc: true
---

## Esempi

Checkbox classico

{% example html %}
<div class="form-check">
  <input id="checkbox1" type="checkbox">
  <label for="checkbox1">Label di esempio</label>
</div>
{% endexample %}

Checkbox inline 

{% example html %}
<div class="form-check form-check-inline">
  <input id="checkbox2" type="checkbox">
  <label for="checkbox2">Checkbox non selezionato</label>
</div>

<div class="form-check form-check-inline">
  <input id="checkbox3" type="checkbox" checked="checked">
  <label for="checkbox3">Checkbox selezionato</label>
</div>
{% endexample %}

Checkbox disabilitate

{% example html %}
<div class="form-check">
  <input id="checkbox4" type="checkbox" disabled>
  <label for="checkbox4" class="disabled">Checkbox disabilitato non selezionato</label>
</div>

<div class="form-check">
  <input id="checkbox5" type="checkbox" disabled checked="checked">
  <label for="checkbox5" class="disabled">Checkbox disabilitato selezionato</label>
</div>
{% endexample %}

## Gruppi di Checkbox

{% example html %}
<div class="row">
  <div class="col-md-5">
    <div class="form-check form-check-group">
      <input id="checkbox6" type="checkbox" checked="checked">
      <label for="checkbox6">Checkbox selezionato</label>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox7" type="checkbox">
      <label for="checkbox7">Checkbox non selezionato</label>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox8" type="checkbox" disabled="disabled">
      <label for="checkbox8" class="disabled">Checkbox disabilitato non selezionato</label>
    </div>
  </div>
  <div class="col-md-2"></div>
  <div class="col-md-5">
    <div class="form-check form-check-group">
      <input id="checkbox9" type="checkbox" aria-describedby="checkbox9-help" checked="checked">
      <label for="checkbox9">Checkbox selezionato</label>
      <small id="checkbox9-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox10" type="checkbox" aria-describedby="checkbox10-help">
      <label for="checkbox10">Checkbox non selezionato</label>
      <small id="checkbox10-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox11" type="checkbox" aria-describedby="checkbox11-help" disabled="disabled">
      <label for="checkbox11" class="disabled">Checkbox disabilitato non selezionato</label>
      <small id="checkbox11-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
  </div>
</div>
{% endexample %}
