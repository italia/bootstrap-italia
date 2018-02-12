---
layout: docs
title: Icone
description: Informazioni e suggerimenti per l'utilizzo di icone con Bootstrap Italia.
group: utilities
redirect_from: "/docs/estensioni/"
toc: true
---

Bootstrap Italia raccomanda l'utilizzo delle seguenti icone: (TODO)

<div class="bd-example bd-example-images">
{% for icona in site.data.icons %}
<i class="{{ icona }}"></i> .{{ icona }} <br/>
{% endfor %}
</div>

{% highlight html %}
{% for icona in site.data.icons %}
<i class="{{ icona }}"></i>{% endfor %}
{% endhighlight %}

