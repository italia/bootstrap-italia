---
layout: docs
title: Introduzione
description: Cos'è Bootstrap Italia e come utilizzarlo all'interno del tuo progetto
group: come-iniziare
redirect_from:
  - /docs/
  - /come-iniziare/
  - /docs/come-iniziare/
toc: true
---

Bootstrap Italia è un tema basato su [Bootstrap {{ site.bootstrap_version }}](https://getbootstrap.com/docs/4.0/getting-started/introduction/).
Esso è conforme alle [linee guida di design per i servizi web della PA](https://design-italia.readthedocs.io/it/stable/index.html),
di cui ne implementa le indicazioni per la creazione di interfacce utente.

## Come iniziare

Per utilizzare il codice compilato di **Bootstrap Italia v{{ site.current_version}}** nel tuo progetto, è sufficiente
scaricare ed includere nella pagina HTML un paio di file, un file CSS e un Javascript.

Tali file si trovano nella cartella [`dist`]({{ site.repo }}tree/master/{{ site.download.dist }}) di questo repository,
oltre ad essere scaricabili alla [pagina delle release di progetto](https://github.com/italia/bootstrap-italia/releases): 

<a href="https://github.com/italia/bootstrap-italia/releases/download/{{ site.current_version }}/bootstrap-italia.zip" class="btn btn-primary">Scarica Bootstrap Italia v{{ site.current_version }}</a>

Le librerie Javascript e CSS di Bootstrap Italia contengono al suo interno anche Bootstrap 4 stesso, ereditandone quindi
tutte le funzionalità e gli stili consultabili al sito di Bootstrap 4.

### CSS

All'interno della cartella `css` è presente un file CSS (`bootstrap-italia.css`)
e la sua versione minificata (`bootstrap-italia.min.css`), con le rispettive
[source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps)
(`bootstrap-italia.*.map`).

Copiare i file all'interno del vostro progetto e aggiungere il tag `<link>` di seguito riportato all'interno del tag
`<head>` della pagina, prima di ogni altro CSS già presente, eventualmente correggendo il riferimento al percorso del file:

{% highlight html %}
<link rel="stylesheet" href="./bootstrap-italia.min.css">
{% endhighlight %}

### Javascript

All'interno della cartella `js` sono presenti due file con le rispettive versioni minificate, che si differenziano
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
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia.bundle.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia.bundle.min.js</code></div>
      </th>
      <td class="text-success">Incluso</td>
      <td class="text-success">Incluso</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia.min.js</code></div>
      </th>
      <td class="bg-light text-muted">Non Incluso</td>
      <td class="bg-light text-muted">Non Incluso</td>
    </tr>
  </tbody>
</table>

In questo caso, dopo aver copiato i file all'interno del vostro progetto, inserire una versione dei tag `<script>` di
seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`.

#### Versione "bundle"

Includendo la versione `*.bundle.*` non sarà necessario aggiungere ulteriori riferimenti a jQuery e Popper.js, per
cui sarà sufficiente aggiungere un solo tag `<script>` per la libreria javascript Bootstrap Italia.

{% highlight html %}
<script src="./bootstrap-italia.bundle.min.js"></script>
{% endhighlight %}

#### Versione semplice

In caso si preferisca caricare jQuery e Popper.js separatamente, sarà necessario includere tag `<script>` per jQuery, di
cui è sufficiente la versione slim, e per Popper.js come mostrato di seguito:

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_integrity }}"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_integrity }}"></script>
<script src="/bootstrap-italia.min.js"></script>
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
    <link rel="stylesheet" href="./bootstrap-italia.min.css">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <!-- JS -->
    <script src="./bootstrap-italia.bundle.min.js"></script>
  </body>
</html>
{% endhighlight %}

Questo è tutto ciò che è sufficiente per avere a disposizione tutte le funzionalità e gli stili di Bootstrap Italia.

### Altri esempi

Assieme a questa documentazione, si possono [consultare una vasta quantità di esempi]({{ site.baseurl }}/docs/esempi/)
per iniziare a personalizzare la tua pagina semplicemente copiando il loro codice.

## Utilizzo come dipendenza

Alternativamente, se si utilizza [Webpack](https://webpack.github.io/) o altri tool simili per l'inclusione di librerie,
puoi aggiungere Bootstrap Italia come dipendenza con il seguente comando:

{% highlight sh %}
npm i bootstrap-italia --save
{% endhighlight %}

_Al momento, il package npm espone tutto il contenuto del repository. In futuro, saranno disponibili maggiori informazioni
per l'utilizzo di singole parti Bootstrap Italia a seconda delle necessità._

## Impostazioni globali

Bootstrap, e di conseguenza il tema Bootstrap-Italia, utilizza alcune impostazioni globali di cui è bene essere al
corrente durante lo sviluppo, che tendono *normalizzare* gli stili tra i vari browser.

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

Infine, per "normalizzare" alcuni comportamenti cross-browser, Bootstrap Italia eredita da Bootstrap [Reboot]({{ site.baseurl }}/docs/contenuti/reboot/),
una serie di regole CSS che correggono inconsistenze tra browsers e dispositivi.

---

###### Continua la lettura >

Se ti interessa contribuire alla libreria o sapere come funziona il processo di compilazione dei file e la creazione della documentazione di Bootstrap Italia,
continua a leggere alla pagina [strumenti di compilazione]({{ site.baseurl }}/docs/come-iniziare/strumenti-di-compilazione/)
