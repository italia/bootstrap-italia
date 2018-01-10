---
layout: docs
title: Introduzione
description: Cos'è Bootstrap Italia e come utilizzarlo all'interno del tuo progetto
group: come-iniziare
redirect_from:
  - /docs/
  - /docs/come-iniziare/
  - /docs/0.0.1/
  - /docs/0.0.1/come-iniziare/
toc: true
---

Bootstrap Italia è un tema basato su [Bootstrap v{{ site.bootstrap_version }}](https://getbootstrap.com/docs/4.0/getting-started/introduction/).
Esso è conforme alle [linee guida di design per i servizi web della PA](https://design-italia.readthedocs.io/it/stable/index.html),
di cui ne implementa le indicazioni per la creazione di interfacce utente.

## Come iniziare

Per utilizzare il codice compilato di **Bootstrap Italia v{{ site.current_version}}** nel tuo progetto, è sufficiente
scaricare ed includere nella pagina HTML un paio di file, un file CSS e un Javascript. Tali file si trovano nella cartella
[`dist`]({{ site.repo }}tree/v{{ site.current_version }}/{{ site.download.dist }}) di questo repository

<div class="alert alert-warning" role="alert">
  TODO: creare e linkare a una release
</div>

#### CSS

All'interno della cartella `css` è presente un file CSS (`bootstrap-italia-{{ site.current_version }}.css`)
e la sua versione minificata (`bootstrap-italia-{{ site.current_version }}.min.css`), con le rispettive
[source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps)
(`bootstrap-italia-{{ site.current_version }}.*.map`).

Copiare il tag `<link>` di seguito riportato all'interno del tag `<head>` della pagina, prima di ogni altro CSS già presente.

{% highlight html %}
<link rel="stylesheet" href="bootstrap-italia-{{ site.current_version }}.css" crossorigin="anonymous">
{% endhighlight %}

#### JavaScript

All'interno della cartella Javascript sono presenti due file con le rispettive versioni minificate, che si differenziano
soltanto per l'inclusione in linea delle librerie jQuery e popper.js.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Popper</th>
      <th scope="col">jQuery</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.bundle.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.bundle.min.js</code></div>
      </th>
      <td class="text-success">Incluso</td>
      <td class="text-success">Incluso</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.min.js</code></div>
      </th>
      <td class="bg-light text-muted">Non Incluso</td>
      <td class="bg-light text-muted">Non Incluso</td>
    </tr>
  </tbody>
</table>

Copiare il tag `<script>`s di seguito riportato alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`.

Includendo la versione `*.bundle.*` non sarà necessario aggiungere riferimenti a jQuery e Popper.js:

{% highlight html %}
<script src="/bootstrap-italia-{{ site.current_version }}.bundle.min.js"></script>
{% endhighlight %}

In caso contrario:

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_integrity }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_integrity }}" crossorigin="anonymous"></script>
<script src="/bootstrap-italia-{{ site.current_version }}.min.js"></script>
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
    <link rel="stylesheet" href="/bootstrap-italia-{{ site.current_version }}.min.css" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <!-- JS -->
    <script src="/bootstrap-italia-{{ site.current_version }}.bundle.min.js" crossorigin="anonymous"></script>
  </body>
</html>
{% endhighlight %}

Questo è tutto ciò che è sufficiente per avere a disposizione tutte le funzionalità e gli stili visibili di seguito.
Si possono visitare le pagine su [come creare un layout]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/overview/)
o [consultare gli esempi]({{ site.baseurl }}/docs/{{ site.docs_version }}/esempi/) per iniziare a personalizzare la tua pagina.

### npm

Alternativamente, se utilizzi [Webpack](https://webpack.github.io/) o altri tool simili, puoi aggiungere Bootstrap Italia
come dipendenza della tua app basata su node.js con il seguente comando:

{% highlight sh %}
npm i --save git+https://git@github.com/italia/bootstrap-italia.git
{% endhighlight %}

<div class="alert alert-warning" role="alert">
  TODO: usare il registro npm
</div>

## Impostazioni globali

Bootstrap, e di conseguenza il tema Bootstrap-Italia, utilizza alcune impostazioni globali di cui è bene essere al
corrente durante lo sviluppo, che tendono *normalizzare* gli stili tra i vari browser. Vediamoli in dettaglio.

### Doctype HTML5

Bootstrap richiede l'uso del doctype HTML5.

{% highlight html %}
<!doctype html>
<html lang="it">
  ...
</html>
{% endhighlight %}

### Meta tag responsive

Bootstrap è sviluppato in modalità *mobile first*, una strategia in cui il codice è progettato inizialmente per
dispositivi mobili e poi ottimizzato per schermi di dimensioni maggiori utilizzando CSS media queries.
Per assicurare un rendering e una gestione dello zoom ottimale per ogni dispositivo, è necessario **aggiungere
il meta tag responsive che segue** all'interno del tag `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

Puoi vedere un'esempio di tale codice applicato nella [pagina html di esempio](#pagina-html-di-esempio).

### Box-sizing

Per un migliore dimensionamento degli elementi nella pagina, Bootstrap imposta il valore di `box-sizing` da
`content-box` a `border-box`. Questo assicura che ogni `padding` non abbia effetto sulla dimensione finale di un
elemento, ma a volte può causare qualche problema con codice di terze parti come Google Maps o Google Custom Search Engine.

Nelle rare occasioni sia necessario sovrascrivere il comportamento impostato da Bootstrap, sarà sufficiente utilizzare codice simile a quanto segue:

{% highlight css %}
.selector-for-some-widget {
  box-sizing: content-box;
}
{% endhighlight %}

Si possono trovare dettagli aggiuntivi alla [pagina corrispondente](https://getbootstrap.com/docs/4.0/getting-started/introduction/#box-sizing) sul sito di Bootstrap.

### Reboot

Per un miglior rendering cross-browser, Bootstrap usa [Reboot](https://getbootstrap.com/docs/4.0/content/reboot/),
che corregge inconsistenze tra browsers e dispositivi.

<div class="alert alert-warning" role="alert">
  TODO: aggiungere link a pagina successiva (strumenti di compilazione)
</div>
