---
layout: docs
title: Clearfix
description: Per annullare il float di un contenitore.
group: utilities
toc: true
---

Annulla il `float` del contenuto aggiungendo la classe `.clearfix` **all'elemento padre**. Può essere usato come un mixin.

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

{% highlight scss %}
// Mixin se stesso
@mixin clearfix() {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}

// Usato come un mixin
.element {
  @include clearfix;
}
{% endhighlight %}

Esempio di visualizzazione senza l'utilizzo della classe `.clearfix`. In questo caso il div contenitore non si estende attorno ai pulsanti mostrando un layout incompleto.

<div class="bd-example">
  <div class="bg-primary p-2">
    <button type="button" class="btn btn-secondary float-left">Bottone con float a sinistra</button>
    <button type="button" class="btn btn-secondary float-right">Bottone con float a destra</button>
  </div>
</div>

Mentre nel seguente esempio con l'utilizzo della classe `.clearfix` viene annullato il float del contenuto permettendo una visualizzazione ottimale.

{% example html %}
<div class="bg-primary p-2 clearfix">
  <button type="button" class="btn btn-secondary float-left">Bottone con float a sinistra</button>
  <button type="button" class="btn btn-secondary float-right">Bottone con float a destra</button>
</div>
{% endexample %}
