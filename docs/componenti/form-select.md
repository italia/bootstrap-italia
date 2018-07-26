---
layout: docs
title: Select
description: Il classico "menu a tendina", in nuove varianti
group: componenti
toc: true
---

## Select classica

Per ottenere un menù a tendina conforme alle linee guida e utilizzare il tag HTML `<select>` così com'è, è sufficiente aggiungere al tag `<select>` la classe `.form-control`:

{% capture example %}
<div class="form-group">
  <select class="form-control" id="classicSelect">
    <option value="" disabled selected>Seleziona una opzione</option>
    <option value="1">Opzione 1</option>
    <option value="2">Opzione 2</option>
    <option value="3">Opzione 3</option>
  </select>
  <label for="disabledSelect">Label di esempio</label>
</div>
{% endcapture %}{% include example.html content=example %}

## Select personalizzata
    
Se vuoi invece ottenere un componente `select` più avanzato, ricreato con altri elementi HTML per una maggiore flessibilità, è necessario aggiungere al tag `<select>` la classe `.custom-select` e seguire le indicazioni riportate di seguito. Il componente _select_ è molto flessibile, in quanto permette selezioni multiple, ricerca contestuale, e raggruppamenti delle opzioni disponibili.

Di seguito sono mostrate alcune di queste combinazioni.

{% capture example %}
<div class="form-group">
  <select class="custom-select" id="select-example">
    <option value="" disabled selected>Seleziona una opzione</option>
    <option value="1">Opzione 1</option>
    <option value="2">Opzione 2</option>
    <option value="3">Opzione 3</option>
  </select>
  <label for="select-example">Label di esempio</label>
</div>
{% endcapture %}{% include example.html content=example %}

### Select multipla

La personalizzazione attraverso Bootstrap Italia permette di selezionare più elementi in modo naturale, senza la necessità di tenere premute combinazioni da tastiera.

{% capture example %}
<div class="form-group">
  <select class="custom-select" multiple id="select-multiple-example">
    <option value="" disabled selected>Seleziona una o più regioni</option>
    {% for regione in site.data.regioni %}
    <option value="{{ forloop.index }}">{{ regione }}</option>{% endfor %}
  </select>
  <label for="select-multiple-example">Label di esempio</label>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con ricerca

Esempio di _select_ con ricerca:

{% capture example %}
<div class="form-group">
  <select class="custom-select" searchable="Cerca una regione" id="select-searchable-example">
    <option value="" disabled selected>Seleziona una regione</option>
    {% for regione in site.data.regioni %}
    <option value="{{ forloop.index }}">{{ regione }}</option>{% endfor %}
  </select>
  <label for="select-searchable-example">Label di esempio</label>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con gruppi di opzioni

Esempio di _select_ con gruppi di opzioni:

{% capture example %}
<div class="form-group">
  <select class="custom-select" multiple id="select-groups-example">
      <optgroup label="Gruppo 1">
          <option value="1">Opzione 1</option>
          <option value="2">Opzione 2</option>
      </optgroup>
      <optgroup label="Gruppo 2">
          <option value="3">Opzione 3</option>
          <option value="4">Opzione 4</option>
      </optgroup>
  </select>
  <label for="select-groups-example">Label di esempio</label>
</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}

### Dimensione

{% capture example %}
<select class="custom-select form-control-lg">
  <option>Select grande</option>
</select>
<select class="custom-select ">
  <option>Select predefinita</option>
</select>
<select class="custom-select form-control-sm">
  <option>Select piccola</option>
</select>
{% endcapture %}{% include example.html content=example %}

{% endcomment %}
