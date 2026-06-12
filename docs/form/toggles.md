---
layout: docs
group: form
toc: true
title: Toggle
description: Campi di tipo "interruttore".
---

Il toggle è un campo `<input>` di tipo checkbox con una levetta che modifica lo stato del campo. Per ottenere questo effetto, viene resettato lo stile predefinito del checkbox e viene aggiunto uno `<span>` con classe `.lever`. Il contenitore del toggle deve avere le classi `.form-check` e `.form-check-inline`.

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<div class="form-check form-check-inline">
  <div class="toggles">
    <label for="toggleEsempio1a">
      Label dell'interruttore 1
      <input type="checkbox" id="toggleEsempio1a">
      <span class="lever"></span>
    </label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Disabilitato

Affinché l'interruttore risulti disabilitato aggiungi l'attributo `disabled` all'input.

{% comment %}Example name: Disabilitato {% endcomment %}
{% capture example %}
<div class="form-check form-check-inline">
  <div class="toggles">
    <label for="toggleEsempio2a">
      Label dell'interruttore 1
      <input disabled type="checkbox" id="toggleEsempio2a">
      <span class="lever"></span>
    </label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Inline

Per allineare orizzontalmente gli interruttori aggiungi la classe `.form-check-inline` a qualsiasi `.form-check`.

{% comment %}Example name: In linea {% endcomment %}
{% capture example %}
<fieldset>
  <legend>Gruppo di toggle</legend>
  <div class="form-check form-check-inline">
    <div class="toggles">
      <label for="toggleEsempio3ainline">
        Label dell'interruttore 1
        <input type="checkbox" id="toggleEsempio3ainline">
        <span class="lever"></span>
      </label>
    </div>
  </div>
  <div class="form-check form-check-inline">
    <div class="toggles">
      <label for="toggleEsempio3binline">
        Label dell'interruttore 2
        <input type="checkbox" id="toggleEsempio3binline">
        <span class="lever leverRight"></span>
      </label>
    </div>
  </div>
</fieldset>
{% endcapture %}{% include example.html content=example %}


### Raggruppati visivamente

Per raggruppare visivamente gli elementi **toggle** aggiungi la classe `.form-check-group` al `.form-check`.

{% comment %}Example name: Raggruppati visivamente {% endcomment %}
{% capture example %}
<div>
  <div class="row">
    <fieldset class="col-12 col-md-6">
      <legend>Gruppo di toggle</legend>
      <div class="form-check form-check-group">
        <div class="toggles">
          <label for="toggleEsempio3a">
            Toggle acceso
            <input type="checkbox" id="toggleEsempio3a" checked>
            <span class="lever"></span>
          </label>
        </div>
      </div>
      <div class="form-check form-check-group">
        <div class="toggles">
          <label for="toggleEsempio3b">
            Toggle spento
            <input type="checkbox" id="toggleEsempio3b">
            <span class="lever"></span>
          </label>
        </div>
      </div>
      <div class="form-check form-check-group">
        <div class="toggles">
          <label for="toggleEsempio3c">
            Toggle disabilitato
            <input type="checkbox" id="toggleEsempio3c" disabled>
            <span class="lever"></span>
          </label>
        </div>
      </div>
    </fieldset>
    <fieldset class="col-12 col-md-6">
      <legend>Gruppo di toggle</legend>
      <div class="form-check form-check-group">
        <div class="toggles">
          <label for="toggleEsempio3d">
            Toggle acceso
            <input type="checkbox" id="toggleEsempio3d" aria-describedby="toggle3d-help" checked>
            <span class="lever"></span>
          </label>
        </div>
        <small id="toggle3d-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <div class="toggles">
          <label for="toggleEsempio3e">
            Toggle spento
            <input type="checkbox" id="toggleEsempio3e" aria-describedby="toggle3e-help">
            <span class="lever"></span>
          </label>
        </div>
        <small id="toggle3e-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <div class="toggles">
          <label for="toggleEsempio3f">
            Toggle disabilitato
            <input type="checkbox" id="toggleEsempio3f" aria-describedby="toggle3f-help" disabled>
            <span class="lever"></span>
          </label>
        </div>
        <small id="toggle3f-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
    </fieldset>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Breaking change

{% capture callout %}
- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.10.0" type="danger" %}
