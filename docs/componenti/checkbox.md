---
layout: docs
title: Checkbox
description: Custom checkbox.
group: componenti
toc: true
---

## Esempi

{% example html %}
<div class="form-check">
  <input type="checkbox" id="checkbox1">
  <label for="checkbox1">Classic checkbox</label>
</div>
{% endexample %}

## Inline 

{% example html %}
<div class="form-check form-check-inline">
  <input id="checkbox3" type="checkbox">
  <label for="checkbox3">Classic checkbox (not checked)</label>
</div>

<div class="form-check form-check-inline">
  <input id="checkbox4" type="checkbox" checked="checked">
  <label for="checkbox4">Classic checkbox (checked)</label>
</div>
{% endexample %}

## Disabilitati 

{% example html %}
<div class="form-check">
  <input id="checkbox5" disabled="" type="checkbox">
  <label for="checkbox5" class="disabled">Classic disabled checkbox (not checked)</label>
</div>

<div class="form-check">
  <input id="checkbox6" disabled="" type="checkbox" checked="checked">
  <label for="checkbox6" class="disabled">Filled-in disabled checkbox (checked)</label>
</div>
{% endexample %}

## Gruppi 

{% example html %}
<div class="row">
  <div class="col-5">
    <div class="form-check form-check-group">
      <input id="checkbox7" type="checkbox" checked="checked">
      <label for="checkbox7">Classic checkbox (checked)</label>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox8" type="checkbox">
      <label for="checkbox8">Classic checkbox (not checked)</label>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox9" type="checkbox" disabled="disabled">
      <label for="checkbox9" class="disabled">Classic disabled checkbox (not checked)</label>
    </div>
  </div>
  <div class="col-2"></div>
  <div class="col-5">
    <div class="form-check form-check-group">
      <input id="checkbox11" type="checkbox" aria-describedby="check11Help" checked="checked">
      <label for="checkbox11">Classic checkbox (checked)</label>
      <small id="check11Help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox12" type="checkbox" aria-describedby="check12Help">
      <label for="checkbox12">Classic checkbox (not checked)</label>
      <small id="check12Help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input id="checkbox13" type="checkbox" aria-describedby="check13Help" disabled="disabled">
      <label for="checkbox13" class="disabled">Classic disabled checkbox (not checked)</label>
      <small id="check13Help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
  </div>
</div>
{% endexample %}
