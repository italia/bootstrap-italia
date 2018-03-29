---
layout: docs
title: Select
description: Componente Select
group: componenti
toc: true
---

Per ottenere un menù a tendina conforme alle linee guida, è sufficiente aggiungere al tag `<select>` la classe `.custom-select` e seguire le indicazioni riportate di seguito. Il componente _select_ è molto flessibile, in quanto permette selezioni multiple, ricerca contestuale, e raggruppamenti delle opzioni disponibili.

Di seguito sono mostrate alcune di queste combinazioni.

### Select classica

{% capture example %}
<form>
  <div class="form-group">
    <select class="custom-select">
      <option value="" disabled selected>Seleziona una opzione</option>
      <option value="1">Opzione 1</option>
      <option value="2">Opzione 2</option>
      <option value="3">Opzione 3</option>
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endcapture %}{% include example.html content=example %}

### Select multipla

La personalizzazione attraverso Bootstrap Italia permette di selezionare più elementi in modo naturale, senza la necessità di tenere premute combinazioni da tastiera.

{% capture example %}
<form>
  <div class="form-group">
    <select class="custom-select" multiple>
      <option value="" disabled selected>Seleziona una o più regioni</option>
      {% for regione in site.data.regioni %}
      <option value="{{ forloop.index }}">{{ regione }}</option>{% endfor %}
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endcapture %}{% include example.html content=example %}

### Select con ricerca

Esempio di _select_ con ricerca:

{% capture example %}
<form>
  <div class="form-group">
    <select class="custom-select" searchable="Cerca una regione">
      <option value="" disabled selected>Seleziona una regione</option>
      {% for regione in site.data.regioni %}
      <option value="{{ forloop.index }}">{{ regione }}</option>{% endfor %}
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endcapture %}{% include example.html content=example %}

### Select con gruppi di opzioni

Esempio di _select_ con gruppi di opzioni:

{% capture example %}
<form>
  <div class="form-group">
    <select class="custom-select" multiple>
        <optgroup label="Gruppo 1">
            <option value="1">Opzione 1</option>
            <option value="2">Opzione 2</option>
        </optgroup>
        <optgroup label="Gruppo 2">
            <option value="3">Opzione 3</option>
            <option value="4">Opzione 4</option>
        </optgroup>
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endcapture %}{% include example.html content=example %}
