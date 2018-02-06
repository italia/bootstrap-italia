---
layout: docs
title: Checkbox
description: Custom checkbox.
group: componenti
toc: true
---

## Esempi

{% example html %}
<div class="form-group">
  <input type="checkbox" id="checkbox1">
  <label for="checkbox1">Classic checkbox</label>
</div>

<div class="form-group">
  <input type="checkbox" class="filled-in" id="checkbox2">
  <label for="checkbox2">Filled-in checkbox</label>
</div>
{% endexample %}

## Disabilitati 

{% example html %}
<div class="form-group">
  <input id="checkbox3" disabled="" type="checkbox">
  <label for="checkbox3" class="disabled">Classic disabled checkbox</label>
</div>

<div class="form-group">
  <input class="filled-in" id="checkbox4" disabled="" type="checkbox">
  <label for="checkbox4" class="disabled">Filled-in disabled checkbox</label>
</div>
{% endexample %}

{% example html %}
<div class="form-group">
  <input id="checkbox5" checked="checked" disabled="" type="checkbox">
  <label for="checkbox5" class="disabled">Classic disabled checkbox</label>
</div>

<div class="form-group">
  <input class="filled-in" id="checkbox6" checked="checked" disabled="" type="checkbox">
  <label for="checkbox6" class="disabled">Filled-in disabled checkbox</label>
</div>
{% endexample %}
