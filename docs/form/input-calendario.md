---
layout: docs
group: form
toc: true

title: Input Calendario
description: Campo di tipo calendario per la selezione di giorni dell'anno.
---

## Datepicker

Il componente input date, o datepicker, è un componente dedicato alla selezione di un giorno specifico.

Clicca sull’input per visualizzare il datepicker.
{% capture callout %}

Assicurarsi di aggiungere alla label la classe **`active`** per impedire la sovrapposizione della label al campo.

{% endcapture %}{% include callout.html content=callout type="alert" %}

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<div class="form-group">
    <label class="active" for="dateStandard">Datepicker</label>
    <input class="form-control" type="date" id="dateStandard" name="dateStandard">
</div>
{% endcapture %}{% include example.html content=example %}
