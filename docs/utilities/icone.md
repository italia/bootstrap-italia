---
layout: docs
title: Icone
description: Informazioni e suggerimenti per l'utilizzo di icone con Bootstrap Italia.
group: utilities
redirect_from: "/docs/estensioni/"
toc: true
---

Nota importante: le icone riportate di seguito sono ereditate dal [web toolkit](https://italia.github.io/design-web-toolkit/components/detail/icons.html). Esse sono in fase di revisione e saranno aggiornate al più presto.

Le icone di Bootstrap Italia utilizzano una SVG sprite. 

## Esempi


{% capture example %}
<div class="bg-light">
{% for icona in site.data.icons %}
<svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#{{icona}}"></use></svg>{% endfor %}
</div>
{% endcapture %}{% include example.html content=example %}


{% capture example %}
<div class="bg-light">
<svg class="icon icon-xs"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-xl"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="bg-light">
<svg class="icon icon-xs icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-sm icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-lg icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-xl icon-padded"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="bg-light">
<svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-success"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-warning"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-danger"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon icon-light bg-dark"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="bg-light" style="line-height: 4em;">
<svg class="icon align-bottom"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon align-middle"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
<svg class="icon align-top"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#app"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="bg-light">
<div class="d-none">
  <svg viewBox="0 0 32 32" id="test-icon" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8h8V0H0v8zm12 24h8v-8h-8v8zM0 32h8v-8H0v8zm0-12h8v-8H0v8zm12 0h8v-8h-8v8zM24 0v8h8V0h-8zM12 8h8V0h-8v8zm12 12h8v-8h-8v8zm0 12h8v-8h-8v8z"></path>
  </svg>
</div>
<svg class="icon"><use xlink:href="#test-icon"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}



