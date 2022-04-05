---
layout: docs
group: form
toc: true

title: Select
description: Il classico “menu a tendina”.
---

### Select

La select è composta dal un wrapper esterno `.select-wrapper` seguita dalla label e dall'elemento `select`. Includendo la Select in questo modo, essa assumerà la visualizzazione corretta.

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
Per disabilitare una select, aggiungere l'attributo `disabled` al tag `<select>` per disabilitare le funzionalità.
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

Per le select con raggruppamenti utilizzare il tag HTML `<optgroup>` per raggruppare le `<option>`.

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
```
