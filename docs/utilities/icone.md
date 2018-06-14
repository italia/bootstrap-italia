---
layout: docs
title: Icone
description: Informazioni e suggerimenti per l'utilizzo di icone con Bootstrap Italia.
group: utilities
redirect_from: "/docs/estensioni/"
toc: true
---

Le icone riportate di seguito sono ereditate dal [web toolkit](https://italia.github.io/design-web-toolkit/components/detail/icons.html). Esse e sono in fase di revisione e saranno aggiornate al più presto.

<div class="bd-example bd-example-images">
{% for icona in site.data.icons %}
<i class="{{ icona }}"></i> .{{ icona }} <br/>
{% endfor %}
</div>

{% highlight html %}
{% for icona in site.data.icons %}
<i class="{{ icona }}"></i>{% endfor %}
{% endhighlight %}

