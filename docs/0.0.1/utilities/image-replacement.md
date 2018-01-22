---
layout: docs
title: Sostituzione con immagine (Image replacement)
description: Scambia il testo con una immagine di sfondo tramite la classe apposita.(Swap text for background images with the image replacement class.)
group: utilities
toc: true
---

Utilizza la classe `.text-hide` o il mixin per aiutarti a sostituire il testo di un elemento con una immagine di sfondo. (Utilize the `.text-hide` class or mixin to help replace an element's text content with a background image.)

{% highlight html %}
<h1 class="text-hide">Testata personalizzata (Custom heading)</h1>
{% endhighlight %}

{% highlight scss %}
// Usato come un mixin (Usage as a mixin)
.heading {
  @include text-hide;
}
{% endhighlight %}

Usa la classe `.text-hide` per mantere accessibile la pagina e i vantaggi SEO dei tags di testata pur volendo usare un `background-image` invece del testo. (Use the `.text-hide` class to maintain the accessibility and SEO benefits of heading tags, but want to utilize a `background-image` instead of text.)

{% example html %}
<h1 class="text-hide" style="background-image: url('/docs/assets/brand/bootstrap-solid.svg'); width: 50px; height: 50px;">Bootstrap</h1>
{% endexample %}
