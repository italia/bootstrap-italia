---
layout: docs
group: form
toc: true

title: Area di testo
description: Elementi e stili per la creazione di aree di testo accessibili e responsive.
---

## Area di testo

Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento di tipo `<textarea>` ridimensionabile.

Includendo l'elemento all'interno di un `.form-group`, la label assumerà lo stesso comportamento dinamico dei campi di input.

{% comment %}Example name: Area di testo {% endcomment %}
{% capture example %}
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Esempio di area di testo</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
{% endcapture %}{% include example.html content=example %}
