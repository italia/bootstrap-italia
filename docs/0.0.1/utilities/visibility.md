---
layout: docs
title: Visibilità
description: Controlla la visibilità degli elementi senza modificarne il valore 'display'. 
group: utilities
---

Imposta la `visibility` degli elementi con le nostre utilità di visibilità. Queste non modificano  il valore `display` e sono utili per nascondere i contenuti alla maggior parte degli utenti, ma conservandoli per gli screen reader.

Applica `.visible` oppure `.invisible` al bisogno.

{% highlight html %}
<div class="visible">...</div>
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}

// Usage as a mixin
.element {
  @include invisible(visible);
}
.element {
  @include invisible(hidden);
}
{% endhighlight %}
