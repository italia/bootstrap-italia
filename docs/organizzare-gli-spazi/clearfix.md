---
layout: docs
title: Clearfix
description: Per annullare il float di un contenitore.
group: organizzare-gli-spazi
toc: false
---

Annulla il `float` del contenuto aggiungendo la classe `.clearfix` **all'elemento padre**.

```html
<div class="clearfix">...</div>
```

Esempio di visualizzazione senza l'utilizzo della classe `.clearfix`. In questo caso il `div` contenitore non si estende attorno ai pulsanti mostrando un layout incompleto.

<div class="bd-example">
  <div class="neutral-2-bg p-2">
    <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
    <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
  </div>
</div>

Mentre nel seguente esempio, con l'utilizzo della classe `.clearfix`, viene annullato il `float` del contenuto permettendo una visualizzazione ottimale.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="neutral-2-bg p-2 clearfix">
  <button type="button" class="btn btn-secondary float-start">Pulsante con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-end">Pulsante con float a destra</button>
</div>
{% endcapture %}{% include example.html content=example %}
