---
layout: docs
title: Clearfix
description: Per annullare il float di un contenitore.
group: organizzare-gli-spazi
toc: false
---

Annulla il `float` del contenuto aggiungendo la classe `.clearfix` **all'elemento padre**.

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

Esempio di visualizzazione senza l'utilizzo della classe `.clearfix`. In questo caso il div contenitore non si estende attorno ai pulsanti mostrando un layout incompleto.

<div class="bd-example">
  <div class="bg-primary p-2">
    <button type="button" class="btn btn-secondary float-left">Bottone con float a sinistra</button>
    <button type="button" class="btn btn-secondary float-right">Bottone con float a destra</button>
  </div>
</div>

Mentre nel seguente esempio con l'utilizzo della classe `.clearfix` viene annullato il float del contenuto permettendo una visualizzazione ottimale.

{% capture example %}
<div class="bg-primary p-2 clearfix">
  <button type="button" class="btn btn-secondary float-left">Bottone con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-right">Bottone con float a destra</button>
</div>
{% endcapture %}{% include example.html content=example %}
