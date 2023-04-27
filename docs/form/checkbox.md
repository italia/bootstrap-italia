---
layout: docs
group: form
toc: true

title: Checkbox
description: Elementi e stili per la creazione di checkbox accessibili.
---

## Checkbox

Per utilizzare i checkbox personalizzati è necessario inserire la classe `.form-check` nell'elemento padre.

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<div>
  <div class="form-check">
    <input id="checkbox1" type="checkbox">
    <label for="checkbox1">Checkbox di esempio</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Inline

Per allineare orizzontalmente le `checkbox` basterà aggiungere la classe `.form-check-inline` a qualsiasi `.form-check`.

{% comment %}Example name: In linea {% endcomment %}
{% capture example %}
<div>
    <div class="form-check form-check-inline">
      <input id="checkbox2" type="checkbox">
      <label for="checkbox2">Checkbox non selezionato</label>
    </div>
    <div class="form-check form-check-inline">
      <input id="checkbox3" type="checkbox" checked="checked">
      <label for="checkbox3">Checkbox selezionato</label>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Disabilitato

Affinchè i campi `checkbox` e `radio` risultino disabilitati occorrerà aggiungere l'attributo `disabled` all'input e la classe `.disabled` alla label relativa.

{% comment %}Example name: Disabilitato {% endcomment %}
{% capture example %}
<div>
  <div class="form-check">
    <input id="checkbox4" type="checkbox" disabled>
    <label for="checkbox4" class="disabled">Checkbox disabilitato non selezionato</label>
  </div>
  <div class="form-check">
    <input id="checkbox5" type="checkbox" disabled checked="checked">
    <label for="checkbox5" class="disabled">Checkbox disabilitato selezionato</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Gruppi

Per poter raggruppare gli elementi `checkbox` occorrerà aggiungere al `.form-check` la classe `.form-check-group`. L'elemento grafico di spunta verrà allineato alla destra del contenuto testuale.

{% comment %}Example name: Gruppi {% endcomment %}
{% capture example %}
<div>
  <div class="row">
    <div class="col-5">
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
    <div class="col-2"></div>
    <div class="col-5">
      <div class="form-check form-check-group">
        <input id="checkbox9" type="checkbox" aria-labelledby="checkbox9-help" checked="checked">
        <label for="checkbox9">Checkbox selezionato</label>
        <small id="checkbox9-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <input id="checkbox10" type="checkbox" aria-labelledby="checkbox10-help">
        <label for="checkbox10">Checkbox non selezionato</label>
        <small id="checkbox10-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <input id="checkbox11" type="checkbox" aria-labelledby="checkbox11-help" disabled="disabled">
        <label for="checkbox11" class="disabled">Checkbox disabilitato non selezionato</label>
        <small id="checkbox11-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Mixed Button

Per ottenere una stato di tipo **Mixed** basterà aggiungere la classe `.semi-checked` all'input di tipo `checkbox`.<br>
Per l'utilizzo del componente mixed button, è disponibile un esempio integrato nel componente [Transfer]({{ site.baseurl }}/docs/form/transfer/).

{% comment %}Example name: Con stato mixed {% endcomment %}
{% capture example %}
<div>
  <div class="row">
    <div class="col-12">
      <div class="form-check">
        <input id="checkbox12" type="checkbox" class="semi-checked">
        <label for="checkbox12">Mixed button attivo</label>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
