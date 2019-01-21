---
layout: docs
group: esempi
title: Esempi
description: Alcuni esempi di utilizzo della libreria
redirect_from: "/esempi/"
---

<div class="container my-5">
  <main class="bd-content" role="main">
    {% for entry in site.data.examples %}
      <h2>{{ entry.category | capitalize }}</h2>
      <p>{{ entry.description }}</p>
      {% for example in entry.examples %}
        {% if forloop.first %}<div class="row">{% endif %}
          <div class="col-sm-6 mb-3">
            <a href="{{ site.baseurl }}/docs/esempi/{{ example.name | slugify }}/" class="d-inline-block text-uppercase font-weight-bold">
              {{ example.name }}
              <svg class="icon icon-primary icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use></svg>
              {%- if example.status %}<span class="badge badge-warning badge-pill mx-2 text-white">{{ example.status }}</span>{%- endif -%}
            </a>
            <p class="text-muted">{{ example.description }}</p>
          </div>
        {% if forloop.last %}</div>{% endif %}
      {% endfor %}
    {% endfor %}
  </main>
</div>
