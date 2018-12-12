---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Sostituzione con immagine
description: Sostituisce il testo con una immagine di sfondo tramite la classe apposita.
---

Utilizza la classe `.text-hide` o il relativo mixin per sostituire del testo in un elemento con una immagine di sfondo.

{% highlight html %}
<p class="text-hide">Testata personalizzata</p>
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
<p class="text-hide" style="background-image: url('{{ site.baseurl }}/docs/assets/img/favicons/favicon-32x32.png'); width: 32px; height: 32px;">Bootstrap Italia</p>
{% endcapture %}{% include example.html content=example %}
