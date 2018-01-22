---
layout: docs
title: Screenreaders
description: Una utility per nascondere degli elementi su tutti i dispositivi a eccezione degli screen readers. (Use screenreader utilities to hide elements on all devices except screen readers.)
group: utilities
toc: true
---

Nascondi un elemento su tutti i dispositivi **eccetto negli screen readers** con la classe `.sr-only`. Combina `.sr-only` con `.sr-only-focusable` per vedere l'elemento quando è attivo in focus (es.: da un utente che utilizza la tastiera). Possono essere usati come un mixin. (Hide an element to all devices **except screen readers** with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it's focused (e.g. by a keyboard-only user). Can also be used as mixins.)

{%- comment -%}
Necessario per proseguire (Necessary for following) [migliori pratiche di accessibilità(accessibility best practices)]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/#accessibility).
{%- endcomment -%}

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Vai al contenuto principale (Skip to main content)</a>
{% endhighlight %}

{% highlight scss %}
// Usato come un mixin (Usage as a mixin)
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}
