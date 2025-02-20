{% capture callout %}

#### Attenzione

Nel caso in cui si desidera che i componenti siano inizializzati in maniera automatica (salvo casi particolari) utilizzare l'attributo `data-bs-target` specifico per l'inizializzazione automatica del componente.

Nel caso in cui si desidera importare e inizializzare autonomamente i singoli componenti, l'attributo `data-bs-target` *non* deve essere incluso, per evitare inizializzazioni automatiche che possono portare a comportamenti inaspettati.

Per maggiori informazioni consulta la [sezione JavaScript di Bootstrap Italia]({{ site.baseurl }}/docs/come-iniziare/introduzione/#javascript) e gli [strumenti di compilazione]({{ site.baseurl }}/docs/come-iniziare/strumenti-di-compilazione/#ottimizzare-i-file-javascript-da-importare).
{% endcapture %}{% include callout.html content=callout type="warning" %}
