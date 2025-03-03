---
layout: docs
group: form
toc: true

title: Radio Button
description: Elementi e stili per la creazione di radio button accessibili.
---

Per utilizzare i radio button personalizzati è necessario inserire la classe `.form-check` nell'elemento padre.

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<fieldset>
  <legend>Gruppo di radio</legend>
  <div class="form-check">
    <input name="gruppo1" type="radio" id="radio1" checked>
    <label for="radio1">Radio di esempio 1</label>
  </div>
  <div class="form-check">
    <input name="gruppo1" type="radio" id="radio2">
    <label for="radio2">Radio di esempio 2</label>
  </div>
</fieldset>
{% endcapture %}{% include example.html content=example %}

### Inline

Per allineare orizzontalmente le `checkbox` o i `radio` basterà aggiungere la classe `.form-check-inline` a qualsiasi `.form-check`.

{% comment %}Example name: In linea {% endcomment %}
{% capture example %}
<fieldset>
  <legend>Gruppo di radio</legend>
  <div class="form-check form-check-inline">
    <input name="gruppo2" type="radio" id="radio4" checked>
    <label for="radio4">Opzione 1</label>
  </div>
  <div class="form-check form-check-inline">
    <input name="gruppo2" type="radio" id="radio5">
    <label for="radio5">Opzione 2</label>
  </div>
</fieldset>
{% endcapture %}{% include example.html content=example %}

### Disabilitato

Affinché i campi `checkbox` e `radio` risultino disabilitati occorrerà aggiungere l'attributo `disabled` all'input e la classe `.disabled` alla label relativa.

{% comment %}Example name: Disabilitato {% endcomment %}
{% capture example %}
<fieldset>
  <legend>Gruppo di radio</legend>
  <div class="form-check">
    <input name="gruppo3" type="radio" class="with-gap" id="radio7" checked disabled>
    <label for="radio7" class="disabled">Opzione 1 selezionato</label>
  </div>
  <div class="form-check">
    <input name="gruppo3" type="radio" class="with-gap" id="radio8" disabled>
    <label for="radio8" class="disabled">Opzione 2 non selezionato</label>
  </div>
</fieldset>
{% endcapture %}{% include example.html content=example %}

### Raggruppati visivamente

Per raggruppare visivamente gli elementi `checkbox` e `radio` occorrerà aggiungere al `.form-check` la classe `.form-check-group`. L'elemento grafico di spunta verrà allineato alla destra del contenuto testuale.

{% comment %}Example name: Raggruppati visivamente {% endcomment %}
{% capture example %}
<div>
  <div class="row">
    <fieldset class="col-12 col-md-6">
      <legend>Gruppo di radio</legend>
      <div class="form-check form-check-group">
        <input name="gruppo4" type="radio" id="radio10" checked>
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
    </fieldset>
    <fieldset class="col-12 col-md-6">
      <legend>Gruppo di radio</legend>
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
    </fieldset>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Breaking change

{% capture callout %}
- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.10.0" type="danger" %}
