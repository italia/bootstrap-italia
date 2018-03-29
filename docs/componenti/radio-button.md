---
layout: docs
title: Radio Button
group: componenti
toc: true
---

## Esempi

Radio buttons classici

{% capture example %}
<div class="form-check">
  <input name="gruppo1" type="radio" id="radio1" checked>
  <label for="radio1">Opzione 1</label>
</div>

<div class="form-check">
  <input name="gruppo1" type="radio" id="radio2">
  <label for="radio2">Opzione 2</label>
</div>

<div class="form-check">
  <input name="gruppo1" type="radio" id="radio3">
  <label for="radio3">Opzione 3</label>
</div>
{% endcapture %}{% include example.html content=example %}

Radio buttons inline

{% capture example %}
  <div class="form-check form-check-inline">
    <input name="gruppo2" type="radio" id="radio4" checked>
    <label for="radio4">Opzione 1</label>
  </div>

  <div class="form-check form-check-inline">
    <input name="gruppo2" type="radio" id="radio5">
    <label for="radio5">Opzione 2</label>
  </div>

  <div class="form-check form-check-inline">
    <input name="gruppo2" type="radio" id="radio6">
    <label for="radio6">Opzione 3</label>
  </div>
{% endcapture %}{% include example.html content=example %}

Radio button disabilitati

{% capture example %}
<div class="form-check">
  <input name="gruppo3" type="radio" class="with-gap" id="radio7" checked disabled>
  <label for="radio7" class="disabled">Opzione 1</label>
</div>

<div class="form-check">
  <input name="gruppo3" type="radio" class="with-gap" id="radio8" disabled>
  <label for="radio8" class="disabled">Opzione 2</label>
</div>

<div class="form-check">
  <input name="gruppo3" type="radio" class="with-gap" id="radio9" disabled>
  <label for="radio9" class="disabled">Opzione 3</label>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di radio buttons

{% capture example %}
<div class="row">
  <div class="col-md-5">
    <div class="form-check form-check-group">
      <input name="gruppo4" type="radio" id="radio10" checked checked>
      <label for="radio10">Opzione 1</label>
    </div>
    <div class="form-check form-check-group">
      <input name="gruppo4" type="radio" id="radio11">
      <label for="radio11">Opzione 2</label>
    </div>
    <div class="form-check form-check-group">
      <input name="gruppo4" type="radio" id="radio12" disabled>
      <label for="radio12" class="disabled">Opzione 3</label>
    </div>
  </div>
  <div class="col-md-2"></div>
  <div class="col-md-5">
    <div class="form-check form-check-group">
      <input checked name="gruppo5" type="radio" id="radio13" aria-describedby="radio13-help">
      <label for="radio13">Opzione 1</label>
      <small id="radio13-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input name="gruppo5" type="radio" id="radio14" aria-describedby="radio14-help">
      <label for="radio14">Opzione 2</label>
      <small id="radio14-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
    <div class="form-check form-check-group">
      <input name="gruppo5" type="radio" id="radio15" aria-describedby="radio15-help" disabled="disabled">
      <label for="radio15" class="disabled">Opzione 3</label>
      <small id="radio15-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
