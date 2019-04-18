---
layout: docs
group: esempi
title: Esempi
redirect_from: '/esempi/'
toc: true
---

<div class="container my-5">
  <main class="bd-content" role="main">
    {% for entry in site.data.examples %}
      <h3 class="mt-2" id="{{ entry.category | slugify }}">{{ entry.category }}</h3>
      <p>{{ entry.description }}</p>
      {% for example in entry.examples %}
        {% comment %} manipulating URLs to handle both internal and external refs {% endcomment %}
        {% assign example_url = '#' %}
        {% if example.url contains '://' %}
        {% capture example_url %}{{ example.url }}{% endcapture %}
        {% else %}
        {% capture example_url %}{{ site.baseurl }}/docs/esempi/{{ example.url }}/{% endcapture %}
        {% endif %}
        {% if forloop.first %}<div class="row">{% endif %}
          <div class="col-sm-6 my-3">
            <a href="{{ example_url }}" class="d-inline-block text-uppercase font-weight-bold">{{ example.name }}<svg class="icon icon-primary icon-sm mb-1"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use></svg>{%- if example.status %}<span class="badge badge-warning badge-pill mx-2 text-white">{{ example.status }}</span>{%- endif -%}</a>
            <p class="text-muted">{{ example.description }}</p>
          </div>
        {% if forloop.last %}</div>{% endif %}
      {% endfor %}
    {% endfor %}
  </main>
</div>
