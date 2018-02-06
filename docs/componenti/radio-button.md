---
layout: docs
title: Radio Button
description: Custom radio button.
group: componenti
toc: true
---

## Esempi



{% example html %}
<div class="form-group">
  <input checked name="group1" type="radio" id="radio1">
  <label for="radio1">Option 1</label>
</div>

<div class="form-group">
  <input name="group1" type="radio" id="radio2">
  <label for="radio2">Option 2</label>
</div>

<div class="form-group">
  <input name="group1" type="radio" id="radio3">
  <label for="radio3">Option 3</label>
</div>
{% endexample %}

## Con gap

{% example html %}
<div class="form-group">
  <input checked name="group2" type="radio" class="with-gap" id="radio4">
  <label for="radio4">Option 1</label>
</div>

<div class="form-group">
  <input name="group2" type="radio" class="with-gap" id="radio5">
  <label for="radio5">Option 2</label>
</div>

<div class="form-group">
  <input name="group2" type="radio" class="with-gap" id="radio6">
  <label for="radio6">Option 3</label>
</div>
{% endexample %}

## Inline

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <input name="group4" type="radio" id="radio11" checked="checked">
    <label for="radio11">Option 1</label>
  </div>

  <div class="form-group">
    <input name="group4" type="radio" id="radio21">
    <label for="radio21">Option 2</label>
  </div>

  <div class="form-group">
    <input name="group4" type="radio" id="radio31">
    <label for="radio31">Option 3</label>
  </div>
  </form>
{% endexample %}

## Disabilitati (to do)

{% example html %}
<div class="form-group">
  <input checked name="group32" type="radio" class="with-gap" id="radio7" disabled>
  <label for="radio7" class="disabled">Option 1</label>
</div>

<div class="form-group">
  <input name="group3" type="radio" class="with-gap" id="radio8" disabled>
  <label for="radio8" class="disabled">Option 2</label>
</div>

<div class="form-group">
  <input name="group3" type="radio" class="with-gap" id="radio9" disabled>
  <label for="radio9" class="disabled">Option 3</label>
</div>
{% endexample %}
