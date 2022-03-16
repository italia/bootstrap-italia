---
layout: docs
group: form
toc: true

title: Input Ora
description: Campi input per la selezione di un orario
---

Il componente input time, o timepicker, è un componente per la selezione di un orario.

Assicurarsi di aggiungere alla label la classe **`active`** per impedire la sovrapposizione della label al campo.

Clicca sull’icona a destra per visualizzare il timepicker.

{% capture example %}

<div class="form-group">
  <label class="active" for="timeStandard">Timepicker</label>
  <input class="form-control" id="timeStandard" type="time">
</div>
{% endcapture %}{% include example.html content=example %}
