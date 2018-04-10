---
layout: docs
title: Introduzione
description: Cos'è Bootstrap Italia e come utilizzarlo nel tuo progetto
group: come-iniziare
redirect_from:
  - /docs/
  - /come-iniziare/
  - /docs/come-iniziare/
toc: true
---

Bootstrap Italia (versione attuale **{{ site.current_version}}**) è un tema basato su [Bootstrap {{ site.bootstrap_version }}](https://getbootstrap.com/docs/4.0/getting-started/introduction/). Esso personalizza lo stile e il codice per la creazione di interfacce utente di Boostrap {{ site.bootstrap_version }}, al fine di renderlo conforme allo [UI Kit](https://github.com/italia/design-ui-kit), che è l'implementazione di riferimento per la UI definita nelle [linee guida di design per i servizi web della PA](https://design-italia.readthedocs.io/it/stable/index.html).

## Come iniziare

Per utilizzare il codice compilato di Bootstrap Italia nel tuo progetto, è sufficiente scaricare ed includere nella pagina HTML alcuni file, tra cui un file CSS e un Javascript, scaricabili sottoforma di file compresso alla [pagina delle release di progetto](https://github.com/italia/bootstrap-italia/releases): 

<a href="https://github.com/italia/bootstrap-italia/releases/download/{{ site.current_version }}/bootstrap-italia.zip" class="btn btn-primary">Scarica Bootstrap Italia v{{ site.current_version }}</a>

Le librerie Javascript e CSS di Bootstrap Italia contengono al loro interno anche il codice di Bootstrap {{ site.bootstrap_version }} stesso, ereditandone quindi tutte le funzionalità e gli stili, consultabili al sito di [Bootstrap {{ site.bootstrap_version }}](https://getbootstrap.com/docs/4.0/getting-started/introduction/).

### CSS

Una volta scaricato e decompresso il file, all'interno della cartella `css` sarà presente un file CSS minificato (`bootstrap-italia.min.css`) con la sua [sourcemap](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) (opzionale).

Per includere questo file all'interno del tuo progetto sarà quindi sufficiente aggiungere il tag `<link>` di seguito riportato all'interno del tag `<head>` della pagina, prima di ogni altro CSS già presente, eventualmente correggendo il riferimento al percorso del file:

{% highlight html %}
<link rel="stylesheet" href="./bootstrap-italia.min.css">
{% endhighlight %}


#### Icon font

Nel caso si desideri utilizzare le icone fornite nel pacchetto di release, sarà necessario includere anche il file CSS `italia-icon-font.min.css`, che a sua volta richiederà la presenza di una serie di file di font, visibili nella cartella `font`. In questo caso, il codice da inserire sarà:

{% highlight html %}
<link rel="stylesheet" href="./italia-icon-font.min.css">
{% endhighlight %}

### Javascript

All'interno della cartella `js` saranno invece presenti due file, che si differenziano soltanto per l'inclusione _in linea_ delle librerie jQuery e popper.js. Vediamo nel dettaglio di cosa si tratta:

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
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia.bundle.min.js</code></div>
      </th>
      <td class="text-success">Incluso</td>
      <td class="text-success">Incluso</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia.min.js</code></div>
      </th>
      <td class="bg-light text-muted">Non Incluso</td>
      <td class="bg-light text-muted">Non Incluso</td>
    </tr>
  </tbody>
</table>

In questo caso, dopo aver copiato i file all'interno del vostro progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi **scegliere** se includere la versione `*.bundle.*` o caricare i singoli file separatamente (questo può rendersi necessario, ad esempio, se jQuery è già incluso nel vostro sito per altri motivi).

#### Versione "bundle"

Includendo la versione `*.bundle.*`, non sarà necessario aggiungere ulteriori riferimenti a jQuery e Popper.js, in quanto già inclusi nel file `bootstrap-italia.bundle.min.js`.

{% highlight html %}
<script src="./bootstrap-italia.bundle.min.js"></script>
{% endhighlight %}

#### Versione semplice

Al contrario, nel caso si preferisca caricare jQuery e Popper.js separatamente, sarà necessario includere tag `<script>` per jQuery (di cui è sufficiente la versione _slim_) e per Popper.js come mostrato di seguito:

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
    <link rel="stylesheet" href="./italia-icon-font.css"><!-- opzionale -->
  </head>
  <body>
    <h1>Hello, world!</h1>
    <!-- JS -->
    <script src="./bootstrap-italia.bundle.min.js"></script>
  </body>
</html>
{% endhighlight %}

Questo è tutto ciò che è sufficiente per avere a disposizione le funzionalità e gli stili di Bootstrap Italia.

### Altri esempi

Assieme a questa documentazione, si possono consultare una vasta quantità di esempi, visibili sia alla sezione [esempi]({{ site.baseurl }}/docs/esempi/) che [al sito di Bootstrap {{ site.bootstrap_version }}](https://getbootstrap.com/docs/4.0/examples/), per iniziare a personalizzare la tua pagina semplicemente copiando il loro codice sorgente, che si può trovare anche nella cartella di questo repository, dentro `docs/esempi/`.

## Utilizzo come dipendenza

Alternativamente, se si utilizza [Webpack](https://webpack.github.io/) o altri module bundler per l'inclusione di librerie esterne attraverso `npm`, è possibile aggiungere Bootstrap Italia come dipendenza con il seguente comando:

{% highlight sh %}
npm i bootstrap-italia --save
{% endhighlight %}

## Impostazioni globali

Bootstrap {{ site.bootstrap_version }}, e di conseguenza il tema Bootstrap Italia, utilizza alcune impostazioni globali di cui è bene essere al corrente durante lo sviluppo, che tendono *normalizzare* gli stili tra i vari browser. Di seguito alcuni esempi.

### Doctype HTML5

Bootstrap richiede l'uso del doctype HTML5.

{% highlight html %}
<!doctype html>
<html lang="it">
  ...
</html>
{% endhighlight %}

### Meta tag responsive

Bootstrap {{ site.bootstrap_version }} è sviluppato in modalità *mobile first*: per assicurare un rendering e una gestione dello zoom ottimale per ogni dispositivo, è necessario **aggiungere il meta tag responsive che segue** all'interno del tag `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

Puoi vedere un'esempio di tale codice applicato nella [pagina html di esempio](#pagina-html-di-esempio).

### Box-sizing

Per un migliore dimensionamento degli elementi nella pagina, Bootstrap {{ site.bootstrap_version }} imposta il valore di `box-sizing` da `content-box` a `border-box`. Questo assicura che ogni `padding` non abbia effetto sulla dimensione finale di un elemento, ma a volte può causare qualche problema con codice di terze parti come Google Maps o Google Custom Search Engine.

Nelle rare occasioni sia necessario sovrascrivere il comportamento impostato da Bootstrap, sarà sufficiente utilizzare codice simile a quanto segue:

{% highlight css %}
.selettore-per-creare-eccezione {
  box-sizing: content-box;
}
{% endhighlight %}

Si possono trovare dettagli aggiuntivi alla [pagina corrispondente](https://getbootstrap.com/docs/4.0/getting-started/introduction/#box-sizing) sul sito di Bootstrap {{ site.bootstrap_version }}.

### Reboot

Infine, per "normalizzare" alcuni comportamenti cross-browser, Bootstrap Italia eredita da Bootstrap {{ site.bootstrap_version }} [Reboot]({{ site.baseurl }}/docs/contenuti/reboot/), una serie di regole CSS che correggono inconsistenze tra browsers e dispositivi.

---

###### Continua la lettura >

Se ti interessa contribuire alla libreria o sapere come funziona il processo di compilazione dei file e la creazione della documentazione di Bootstrap Italia,
continua a leggere alla pagina [strumenti di compilazione]({{ site.baseurl }}/docs/come-iniziare/strumenti-di-compilazione/)
