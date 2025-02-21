---
layout: docs
group: form
toc: true

title: Toggles
description: Campi di tipo "interruttore".
---

Per ottenere un interruttore con levetta basterà usare la seguente sintassi HTML, gli stili CSS penseranno al resto. Il contenitore padre dovrà avere la classe `.toggles`, mentre la label conterrà sia la checkbox che uno `<span>` con classe `.lever`.

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<div>
  <div class="row">
    <div class="form-check col-6">
      <div class="toggles">
        <label for="toggleEsempio1a">
          Label dell'interruttore 1
          <input type="checkbox" id="toggleEsempio1a">
          <span class="lever"></span>
        </label>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Disabilitato

Affinché l'interruttore risulti disabilitato occorrerà aggiungere l'attributo `disabled` al checkbox.

{% comment %}Example name: Disabilitato {% endcomment %}
{% capture example %}
<div>
  <div class="row">
    <div class="form-check col-6">
      <div class="toggles">
        <label for="toggleEsempio2a">
          Label dell'interruttore 1
          <input disabled type="checkbox" id="toggleEsempio2a">
          <span class="lever"></span>
        </label>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Inline

Per allineare orizzontalmente gli interruttori basterà aggiungere la classe `.form-check-inline` a qualsiasi `.form-check`.

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

Per raggruppare visivamente gli elementi **toggle** occorrerà aggiungere al `.form-check` la classe `.form-check-group`.

{% comment %}Example name: Raggruppati visivamente {% endcomment %}
{% capture example %}
<div>
  <div class="row">
    <fieldset class="col-5">
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
    <div class="col-2"></div>
    <fieldset class="col-5">
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
