{%- assign toggle-specific = include.toggle | default: "`data-bs-toggle` specifico" -%}
{% capture callout %}
Nel caso in cui si desidera che i componenti siano inizializzati in maniera automatica (salvo casi particolari) utilizzare l'attributo {{toggle-specific}} per l'inizializzazione automatica del componente.

Nel caso in cui si desidera importare e inizializzare autonomamente i singoli componenti, l'attributo {{toggle-specific}} *non* deve essere incluso, per evitare inizializzazioni automatiche che possono portare a comportamenti inaspettati.

Per maggiori informazioni consulta la [sezione JavaScript di Bootstrap Italia]({{ site.baseurl }}/docs/come-iniziare/introduzione/#javascript).
{% endcapture %}{% include callout.html content=callout type="warning" %}
