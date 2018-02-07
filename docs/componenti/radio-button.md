---
layout: docs
title: Radio Button
description: Custom radio button.
group: componenti
toc: true
---

## Esempi



{% example html %}
<div class="form-check">
  <input checked name="group1" type="radio" id="radio1">
  <label for="radio1">Option 1</label>
</div>

<div class="form-check">
  <input name="group1" type="radio" id="radio2">
  <label for="radio2">Option 2</label>
</div>

<div class="form-check">
  <input name="group1" type="radio" id="radio3">
  <label for="radio3">Option 3</label>
</div>
{% endexample %}

## Inline

{% example html %}
  <div class="form-check form-check-inline">
    <input name="group4" type="radio" id="radio11" checked="checked">
    <label for="radio11">Option 1</label>
  </div>

  <div class="form-check form-check-inline">
    <input name="group4" type="radio" id="radio21">
    <label for="radio21">Option 2</label>
  </div>

  <div class="form-check form-check-inline">
    <input name="group4" type="radio" id="radio31">
    <label for="radio31">Option 3</label>
  </div>
{% endexample %}

## Disabilitati

{% example html %}
<div class="form-check">
  <input checked name="group32" type="radio" class="with-gap" id="radio7" disabled>
  <label for="radio7" class="disabled">Option 1</label>
</div>

<div class="form-check">
  <input name="group3" type="radio" class="with-gap" id="radio8" disabled>
  <label for="radio8" class="disabled">Option 2</label>
</div>

<div class="form-check">
  <input name="group3" type="radio" class="with-gap" id="radio9" disabled>
  <label for="radio9" class="disabled">Option 3</label>
</div>
{% endexample %}

## Gruppi 

{% example html %}
<div class="row">
  <div class="col-5">
    <div class="form-check form-check-group">
      <input checked name="group10" type="radio" id="radio10">
      <label for="radio10">Option 1</label>
    </div>
    <div class="form-check form-check-group">
      <input name="group10" type="radio" id="radio41">
      <label for="radio41">Option 2</label>
    </div>
    <div class="form-check form-check-group">
      <input name="group10" type="radio" id="radio12" disabled="disabled">
      <label for="radio12" class="disabled">Option 3</label>
    </div>
  </div>
  <div class="col-2"></div>
  <div class="col-5">
    <div class="form-check form-check-group">
      <input checked name="group11" type="radio" id="radio13" aria-describedby="radio13Help">
      <label for="radio13">Option 1</label>
      <small id="radio13Help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input name="group11" type="radio" id="radio14" aria-describedby="radio14Help">
      <label for="radio14">Option 2</label>
      <small id="radio14Help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input name="group11" type="radio" id="radio15" aria-describedby="radio15Help" disabled="disabled">
      <label for="radio15" class="disabled">Option 3</label>
      <small id="check15Help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
  </div>
</div>
{% endexample %}
