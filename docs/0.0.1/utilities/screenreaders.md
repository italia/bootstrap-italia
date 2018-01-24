---
layout: docs
title: Screenreaders
description: Una utility per nascondere degli elementi su tutti i dispositivi a eccezione degli screen readers.
group: utilities
toc: true
---

Nascondi un elemento su tutti i dispositivi **eccetto screen readers** con la classe `.sr-only`. Combina `.sr-only` con `.sr-only-focusable` per mostrare l'elemento quando è attivo in focus (es.: da un utente che utilizza la tastiera). Possono anche essere usati come mixin.

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Vai al contenuto principale</a>
{% endhighlight %}

{% highlight scss %}
// Usato come mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}
