---
layout: docs
group: form
toc: true

title: Input Ora
description: Campo per la selezione di un orario.
---

Il componente input time, o timepicker, è un componente dedicato alla selezione di un orario.

{% capture callout %}

Assicurarsi di aggiungere alla label la classe **`active`** per impedire la sovrapposizione della label al campo.

{% endcapture %}{% include callout.html content=callout type="alert" %}

Clicca sull’icona a destra per visualizzare il timepicker.

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<div class="form-group">
  <label class="active" for="timeStandard">Timepicker</label>
  <input class="form-control" id="timeStandard" type="time">
</div>
{% endcapture %}{% include example.html content=example %}
