---
layout: docs
group: come-iniziare
redirect_from:
  - /come-iniziare/
  - /docs/come-iniziare/
  - /docs/
toc: true
title: Introduzione
description: Come usare Bootstrap Italia nel tuo progetto.
---

## Caricare la libreria

Per utilizzare il codice compilato di Bootstrap Italia nel proprio progetto, è sufficiente scaricare ed includere nella pagina HTML alcuni file, tra cui un file CSS, un Javascript, i fonts e una SVG sprite, il tutto scaricabile qui:

<a href="https://github.com/italia/bootstrap-italia/releases/download/v{{ site.current_version }}/bootstrap-italia.zip" class="btn btn-primary">Scarica Bootstrap Italia v{{ site.current_version }}</a>

{% capture callout %}

##### Importante!

È sempre consigliabile utilizzare la **versione più recente della libreria e mantenerla aggiornata** sui propri progetti.

La versione più recente è consultabile tra le [release di progetto](https://github.com/italia/bootstrap-italia/releases) e contiene anche tutti i miglioramenti e le correzioni disponibili fino ad oggi.
{% endcapture %}{% include callout.html content=callout type="warning" %}

Se si preferisce usare i file sorgente di Bootstrap Italia nel proprio progetto attraverso il package manager **npm**, si può fare riferimento alle [indicazioni di come utilizzare la libreria come dipendenza]({{ site.baseurl }}/docs/come-iniziare/introduzione#utilizzo-come-dipendenza).

Le librerie Javascript e CSS di Bootstrap Italia personalizzano e comprendono anche il codice originale di **Bootstrap {{ site.bootstrap_version }}**, ereditandone quindi tutte i selettori, le funzionalità, ecc., che sono consultabili al sito di Bootstrap stesso.

La libreria è accessibile anche via CDN su [jsDelivr](https://www.jsdelivr.com/package/npm/bootstrap-italia) o [unpkg](https://unpkg.com/bootstrap-italia/), di cui però è sconsigliato l'utilizzo in ambienti di produzione.

Di seguito le informazioni per l'utilizzo dei singoli file.

### CSS

Una volta scaricato e decompresso il file, all'interno della cartella `css` sarà presente un file CSS minificato (`bootstrap-italia.min.css`) con la sua [sourcemap](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) (opzionale).

Per includere questo file all'interno del proprio progetto sarà sufficiente aggiungere il tag `<link>` di seguito riportato all'interno del tag `<head>` della pagina, prima di ogni altro CSS già presente, eventualmente correggendo il riferimento al percorso del file:

```html
<link rel="stylesheet" href="./bootstrap-italia.min.css" />
```

### Javascript

All'interno della cartella `js` saranno invece presenti il file di bundle e i componenti suddivisi in moduli. 

In questo caso, dopo aver copiato i file all'interno del progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi includere la versione `*.bundle.*` in questo modo

```html
<script src="./bootstrap-italia.bundle.min.js"></script>
```

### Fonts

È necessario anche includere i file relativi ai font referenziati nel CSS, mantenendo i path dei singoli font utilizzato nei [file sorgente della libreria](https://github.com/italia/bootstrap-italia/releases/tag/v{{ site.current_version }}). Il path di base della cartella dei font può essere impostato utilizzando la variabile globale **prima** del caricamento della libreria Javascript di Bootstrap Italia:

```html
<script>
  window.__PUBLIC_PATH__ = '/bootstrap-italia/dist/fonts'
</script>
```

Se tale variabile non è valorizzata, i font saranno cercati all'interno di una cartella `/bootstrap-italia/dist/fonts/`.

### Icone

Le icone a disposizione sono un componente assolutamente opzionale e sono pubblicate nella libreria sotto forma di sprite SVG `/bootstrap-italia/dist/svg/`, le cui singole SVG sorgenti sono presenti nel repository.

Per informazioni, si può fare riferimento alla [documentazione sull'utilizzo delle icone]({{ site.baseurl }}/docs/utilities/icone/).

## Pagina HTML di esempio

In breve, si dovrebbe ottenere qualcosa di simile a ciò che segue:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- CSS -->
    <link rel="stylesheet" href="./bootstrap-italia.min.css" />
  </head>
  <body>
    <h1>Hello, world!</h1>
    <!-- JS -->
    <script src="./bootstrap-italia.bundle.min.js"></script>
  </body>
</html>
```

Questo è tutto ciò che è sufficiente per avere a disposizione le funzionalità e gli stili di Bootstrap Italia.

### Altri esempi

Assieme a questa documentazione, si possono consultare una vasta quantità di esempi, consultabili sia alla sezione [esempi]({{ site.baseurl }}/docs/esempi/) e [progetti]({{ site.baseurl }}/docs/progetti/) di questo sito, che [sul sito di Bootstrap](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/examples/), con i quali è possibile iniziare a personalizzare la tua pagina semplicemente copiando il loro codice sorgente.

Il codice sorgente di tali esempi si può trovare anche nel repository di Bootstrap Italia, nella [cartella `docs/esempi/`](https://github.com/italia/bootstrap-italia/tree/master/docs/esempi).

Tra i [progetti]({{ site.baseurl }}/docs/progetti/) si possono trovare molti riferimenti a progetti terzi che fanno uso di Bootstrap Italia, come i temi per alcuni CMS, generatori di siti statici e framework per il web.

## Utilizzo come dipendenza

Alternativamente, se si utilizza [Webpack](https://webpack.github.io/), [Rollup.js](https://rollupjs.org/) o altri module bundler per l'inclusione di librerie esterne attraverso `npm`, è possibile aggiungere Bootstrap Italia come dipendenza con il seguente comando:

```sh
npm i bootstrap-italia --save
```

## Impostazioni globali

Il framework Bootstrap, e di conseguenza il tema Bootstrap Italia, utilizza e richiede alcune impostazioni globali di cui è bene essere al corrente durante lo sviluppo, che tendono _normalizzare_ gli stili tra i vari browser. Di seguito alcune di esse.

### Doctype HTML5

Bootstrap richiede l'uso del doctype HTML5.

```html
<!DOCTYPE html>
<html lang="it">
  ...
</html>
```

### Meta tag responsive

Bootstrap è sviluppato in modalità _mobile first_: per assicurare un rendering e una gestione dello zoom ottimale per ogni dispositivo, è necessario **aggiungere il meta tag responsive che segue** all'interno del tag `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
```

È possibile visualizzare un'esempio di tale codice applicato nella [pagina html di esempio](#pagina-html-di-esempio).

### Box-sizing

Per un migliore dimensionamento degli elementi nella pagina, Bootstrap imposta il valore di `box-sizing` da `content-box` a `border-box`. Questo assicura che ogni `padding` non abbia effetto sulla dimensione finale di un elemento, ma a volte può causare qualche problema con codice di terze parti come Google Maps o Google Custom Search Engine.

Nelle rare occasioni sia necessario sovrascrivere il comportamento impostato da Bootstrap, sarà sufficiente utilizzare un codice di questo tipo:

```css
.selettore-per-creare-eccezione {
  box-sizing: content-box;
}
```

Si possono trovare dettagli aggiuntivi alla [pagina corrispondente](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/introduction/#box-sizing) sul sito ufficiale di Bootstrap.

### Reboot

Infine, per _normalizzare_ alcuni comportamenti cross-browser, Bootstrap Italia eredita da Bootstrap il cosiddetto "[Reboot]({{ site.baseurl }}/docs/organizzare-i-contenuti/introduzione/#reboot)", una serie di regole CSS che correggono inconsistenze tra browsers e dispositivi.

---

###### Continua la lettura >

Se ti interessa contribuire alla libreria e sapere come funziona il processo di compilazione dei file e la creazione della documentazione di Bootstrap Italia,
continua a leggere alla pagina [strumenti di compilazione e contribuzione]({{ site.baseurl }}/docs/come-iniziare/strumenti-di-compilazione/).
