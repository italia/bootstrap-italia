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

### Freccia della select

La freccia è l'immagine nella custom property `--bsi-form-select-indicator`. Per cambiarla in una parte della pagina, per esempio su un fondo scuro, ridefiniscila su un elemento che contiene le select:

```css
.area-scura {
  --bsi-form-select-indicator: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
}
```

{% include properties.md properties=site.data.cprops.forms selector=":root" title="trasversali" %}
