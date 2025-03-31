{%- assign toggle-specific = include.toggle | default: "`data-bs-toggle` specifico" -%}
{% capture callout %}
Nel caso in cui si desidera che il componente sia inizializzato in maniera automatica 
utilizzare l'attributo {{toggle-specific}} per la sua inizializzazione.

Nel caso in cui si desidera importare e inizializzare autonomamente il componente
l'attributo {{toggle-specific}} *non* deve essere incluso così da evitare 
inizializzazioni automatiche che possono portare a comportamenti inaspettati.

Per maggiori informazioni consulta la [sezione JavaScript di Bootstrap Italia]({{ site.baseurl }}/docs/come-iniziare/introduzione/#javascript).
{% endcapture %}{% include callout.html content=callout type="warning" %}
