---
layout: docs
title: Sostituzione con immagine
description: Sostituisce il testo con una immagine di sfondo tramite la classe apposita.
group: utilities
toc: true
---

Utilizza la classe `.text-hide` o il relativo mixin per sostituire del testo in un elemento con una immagine di sfondo.

{% highlight html %}
<h1 class="text-hide">Testata personalizzata</h1>
{% endhighlight %}

{% highlight scss %}
// Usato come mixin
.heading {
  @include text-hide;
}
{% endhighlight %}

Usa la classe `.text-hide` per mantere accessibile la pagina e i vantaggi SEO dei tags di intestazione pur utilizzando
un'immagine di sfondo invece del testo.

{% capture example %}
<h1 class="text-hide" style="background-image: url('{{ site.baseurl }}/docs/assets/img/favicons/favicon-32x32.png'); width: 32px; height: 32px;">Bootstrap Italia</h1>
{% endcapture %}{% include example.html content=example %}
