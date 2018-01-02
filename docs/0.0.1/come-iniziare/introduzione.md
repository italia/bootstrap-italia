---
layout: docs
title: Introduzione
description: Questo tema Bootstrap è conforme alle linee guida di design definite nel toolkit per la creazione di siti web per le Pubbliche Amministrazioni (PA)
group: come-iniziare
redirect_from:
  - /docs/
  - /docs/come-iniziare/
  - /docs/0.0.1/
  - /docs/0.0.1/come-iniziare/
toc: true
---

## Come iniziare

Questo è un tema basato su [Bootstrap v{{ site.bootstrap_version }}](https://getbootstrap.com/docs/4.0/getting-started/introduction/).

Per utilizzare il tema, è sufficiente includere nell'HTML della pagina i file che si trovano nella cartella `dist\` di questo repository. In particolare, è necessario aggiungere un CSS e un Javascript.

### CSS

Copiare il tag `<link>` di seguito riportato all'interno del tag `<head>` della pagina, prima di ogni altro CSS già presente.

{% highlight html %}
<link rel="stylesheet" href="{{ site.design_bootstrap.css }}" crossorigin="anonymous">
{% endhighlight %}

### JS

Copiare il tag `<script>`s di seguito riportato alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`.

{% highlight html %}
<script src="{{ site.design_bootstrap.js }}" crossorigin="anonymous"></script>
{% endhighlight %}

## Pagina HTML di esempio

In breve, si dovrebbe ottenere qualcosa di simile a ciò che segue:

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- CSS -->
    <link rel="stylesheet" href="{{ site.design_bootstrap.css }}" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <!-- JS -->
    <script src="{{ site.design_bootstrap.js }}" crossorigin="anonymous"></script>
  </body>
</html>
{% endhighlight %}

Questo è tutto ciò che è sufficiente per avere a disposizione tutte le funzionalità e gli stili visibili di seguito. Si possono visitare le pagine su [come creare un layout]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/overview/) o [consultare gli esempi]({{ site.baseurl }}/docs/{{ site.docs_version }}/esempi/) per iniziare a personalizzare la tua pagina.

## Impostazioni globali

Bootstrap, e di conseguenza il tema Bootstrap-Italia, utilizza alcune impostazioni globali di cui è bene essere al corrente durante lo sviluppo, che tendono *normalizzare* gli stili tra i vari browser. Vediamoli in dettaglio.

### Doctype HTML5

Bootstrap richiede l'uso del doctype HTML5.

{% highlight html %}
<!doctype html>
<html lang="it">
  ...
</html>
{% endhighlight %}

### Meta tag responsive

Bootstrap è sviluppato in modalità *mobile first*, una strategia in cui il codice è progettato inizialmente per dispositivi mobili e poi ottimizzato per schermi di dimensioni maggiori utilizzando CSS media queries. Per assicurare un rendering e una gestione dello zoom ottimale per ogni dispositivo, è necessario **aggiungere il meta tag responsive che segue** all'interno del tag `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

Puoi vedere un'esempio di tale codice applicato nella [pagina html di esempio](#pagina-html-di-esempio).

### Box-sizing

Per un migliore dimensionamento degli elementi nella pagina, Bootstrap imposta il valore di `box-sizing` da `content-box` a `border-box`. Questo assicura che ogni `padding` non abbia effetto sulla dimensione finale di un elemento, ma a volte può causare qualche problema con codice di terze parti come Google Maps o Google Custom Search Engine.

Nelle rare occasioni sia necessario sovrascrivere il comportamento impostato da Bootstrap, sarà sufficiente utilizzare codice simile a quanto segue:

{% highlight css %}
.selector-for-some-widget {
  box-sizing: content-box;
}
{% endhighlight %}

Si possono trovare dettagli aggiuntivi alla [pagina corrispondente](https://getbootstrap.com/docs/4.0/getting-started/introduction/#box-sizing) sul sito di Bootstrap.

### Reboot

Per un miglior rendering cross-browser, Bootstrap usa [Reboot](https://getbootstrap.com/docs/4.0/content/reboot/), che corregge inconsistenze tra browsers e dispositivi.
