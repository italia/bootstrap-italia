---
layout: docs
group: form
toc: true

title: Select
description: Il classico “menu a tendina”.
---

### Select

La select è composta dal un wrapper esterno `.select-wrapper` contenente la label e l'elemento `<select>`.

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<div class="select-wrapper">
  <label for="defaultSelect">Etichetta</label>
  <select id="defaultSelect">
    <option selected="" value="">Scegli un'opzione</option>
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select disabilitata

Per disabilitare una select, aggiungere l'attributo `disabled` al tag `<select>`.

{% comment %}Example name: Disabilitata {% endcomment %}
{% capture example %}
<div class="select-wrapper">
  <label for="defaultSelectDisabled">Etichetta</label>
  <select id="defaultSelectDisabled" disabled>
    <option selected="" value="">Scegli un'opzione</option>
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con gruppi

Per ottenere select con raggruppamenti, utilizzare il tag HTML `<optgroup>` per raggruppare le `<option>` al suo interno.

{% comment %}Example name: Con gruppi {% endcomment %}
{% capture example %}
<div class="select-wrapper">
  <label for="defaultSelectGroup">Etichetta</label>
  <select id="defaultSelectGroup">
    <option selected="" value="">Scegli un'opzione</option>
    <optgroup label="Gruppo 1">
      <option value="1">Opzione 1</option>
      <option value="2">Opzione 2</option>
    </optgroup>
    <optgroup label="Gruppo 2">
      <option value="3">Opzione 3</option>
      <option value="4">Opzione 4</option>
    </optgroup>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}
