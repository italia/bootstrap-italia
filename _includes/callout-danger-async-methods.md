{% capture callout %}
#### Metodi asincroni e transizioni

Tutti i metodi API sono **asincroni** e avviano una **transizione**. Ritornano al chiamante non appena viene avviata la transizione ma **prima che termini**. Inoltre, una chiamata al metodo su un **componente in transizione verrà ignorata**.

Per maggiori informazioni consulta la [documentazione Javascript di Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/javascript/) (in inglese).
{% endcapture %}{% include callout.html content=callout type="info" %}
