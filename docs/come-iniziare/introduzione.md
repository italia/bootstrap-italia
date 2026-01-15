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

{% capture alpha_warning %}
### ⚠️ Versione Alpha

Questa è una versione alpha di Bootstrap Italia 3.

- [Breaking change]({{ site.baseurl }}/docs/come-iniziare/migrazione-dalla-versione-2/)
{% endcapture %}{% include callout.html content=alpha_warning type="warning" %}

## Installazione

### Con NPM

```sh
npm i bootstrap-italia@latest --save
```

### Manuale

Per utilizzare il codice compilato di Bootstrap Italia nel proprio progetto, è sufficiente scaricare ed includere nella pagina HTML alcuni file, tra cui: 

- il foglio di stile contenuto nel file CSS
- le funzionalità dei vari componenti contenute nel bundle JavaScript
- i font
- lo sprite SVG contenente le icone

il tutto scaricabile qui:

<a href="https://github.com/italia/bootstrap-italia/releases/download/v{{ site.current_version }}/bootstrap-italia.zip" class="btn btn-primary">Scarica Bootstrap Italia v{{ site.current_version }}</a>

{% capture callout %}

##### Importante!

È sempre consigliabile utilizzare la **versione più recente della libreria e mantenerla aggiornata** sui propri progetti.

La versione più recente è consultabile tra le [release di progetto](https://github.com/italia/bootstrap-italia/releases) e contiene anche tutti i miglioramenti e le correzioni disponibili fino ad oggi.
{% endcapture %}{% include callout.html content=callout type="warning" %}

Le librerie Javascript e CSS di Bootstrap Italia personalizzano e comprendono anche il codice originale di **Bootstrap {{ site.bootstrap_version }}**, ereditandone quindi tutte i selettori, le funzionalità, ecc., che sono consultabili al sito di Bootstrap stesso.

La libreria è accessibile anche via CDN su [jsDelivr](https://www.jsdelivr.com/package/npm/bootstrap-italia) o [unpkg](https://unpkg.com/bootstrap-italia/), di cui però è sconsigliato l'utilizzo in ambienti di produzione.

## Fogli di stile

### Con SASS

Utilizzando SASS nella propria pipeline, si può ottimizzare Bootstrap Italia (e di conseguenza il bundle finale) importando solo i componenti di cui si ha bisogno. Le ottimizzazioni maggiori proverranno probabilmente dalla sezione Layout e dai componenti del file principale `bootstrap-italia.scss`, ad esempio

```scss
// funzioni e variabili colore
@import 'bootstrap-italia/src/scss/functions';
@import 'bootstrap-italia/src/scss/utilities/colors_vars';

//variables
@import 'bootstrap-italia/src/scss/variables';

//classi colore
@import 'bootstrap-italia/src/scss/utilities/colors';

// ...
```

### Con il bundle CSS

Per includere questo file all'interno del proprio progetto sarà sufficiente aggiungere il tag `<link>` di seguito riportato all'interno del tag `<head>` della pagina, prima di ogni altro CSS già presente, eventualmente correggendo il riferimento al percorso del file:

```html
<link rel="stylesheet" href="<path-a-bootstrap-italia>/dist/css/bootstrap-italia.min.css" />
```

## JavaScript

I vari componenti sono inizializzati (salvo casi particolari specificati nella documentazione del singolo componente) grazie all'utilizzo dell'attributo `data-bs-toggle` o in generale di uno specifico attributo `data`. Questi attributi devono essere utilizzati esclusivamente nel caso in cui si desidera che i componenti siano inizializzati in maniera automatica, in caso contrario questo attributo deve essere omesso.

### Moduli

Si può ottimizzare l'inclusione del JavaScript utilizzando un bundler (come ad esempio Vite, Webpack o Rollup), che permettono di importare solo i moduli JavaScript che si vogliono utilizzare. 

Ad esempio per includere soltanto il componente `Carousel`:

```js
import { Carousel } from 'bootstrap-italia'

const carousel = new Carousel(document.getElementById('myCarousel'))
```

È disponibile [un esempio completo utilizzando Rollup](https://github.com/astagi/demo-communitylabs-bsi) ([video del Community Lab](https://designers.italia.it/community/media/20241217-community-lab/)) e, di seguito, un esempio con alcuni componenti importati.

```js
import { Carousel, Alert, Notification, Tooltip, Sticky, loadFonts } from 'bootstrap-italia'


const carousel = new Carousel(document.getElementById('myCarousel'))

const alert = new Alert(document.getElementsByClassName('alert')[0])

setTimeout(() => {
  alert.close()
}, 15000)

document.querySelectorAll('.ttp').forEach(el => {
  new Tooltip(el)
});

const stickyElement = document.getElementById('sticky');
const sticky = new Sticky(stickyElement, {
  positionType: 'sticky',
  stickyClassName: 'is-sticky',
  stackable: true,
  paddingTop: 0,
})

const notification = new Notification(document.getElementById("copyToast"), {
  timeout: 2000
})
notification.show()

loadFonts()
```

{% include callout-danger-async-methods.md %}

### Versione bundle

Per un uso bundle, dopo aver copiato i file all'interno del progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi includere la libreria in questo modo:

```html
<script src="<path-a-bootstrap-italia>/dist/js/bootstrap-italia.bundle.min.js"></script>
```

### Versione non bundle

Per la versione non bundle, dopo aver copiato i file all'interno del progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi includere la libreria in questo modo, inserendo solo le dipendenze che servono al nostro progetto (qui nell'esempio sono inserite solo alcune per riferimento):

```html
<!--- Dipendenze da inserire solo se usate -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
<!--- Versione non bundle di Bootstrap Italia -->
<script src="<path-a-bootstrap-italia>/dist/js/bootstrap-italia.min.js"></script>
```

## Font

Bootstrap Italia include tre famiglie di caratteri tipografici: **Titillium** (Titillium Web o Titillium Sans Pro) per il testo principale e l'interfaccia, **Lora** per contenuti editoriali, e **Roboto Mono** per codice e numeri.

Il modo più semplice per caricarli è via JavaScript:
```js
import { loadFonts } from 'bootstrap-italia'
loadFonts('/fonts');
```

In alternativa, puoi usare `@font-face` CSS o bundle precompilati.

{% capture callout %}
Per tutte le opzioni di configurazione, varianti disponibili, ed esempi completi, consulta la [**pagina dedicata Font**]({{ site.baseurl }}/docs/come-iniziare/font/).
{% endcapture %}{% include callout.html content=callout type="info" %}

## Icone

Le icone a disposizione sono un componente assolutamente opzionale e sono pubblicate nella libreria sotto forma di sprite SVG `/bootstrap-italia/dist/svg/`, le cui singole SVG sorgenti sono presenti nel repository.

Per informazioni, si può fare riferimento alla [documentazione sull'utilizzo delle icone]({{ site.baseurl }}/docs/utilities/icone/).

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

## Altri esempi

Assieme a questa documentazione, si possono consultare una vasta quantità di esempi, consultabili sia alla sezione [esempi]({{ site.baseurl }}/docs/esempi/) e [progetti]({{ site.baseurl }}/docs/progetti/) di questo sito, che [sul sito di Bootstrap](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/examples/), ai quali è possibile ispirarsi per iniziare a personalizzare le tue pagine. 

Il codice sorgente di tali esempi si può trovare anche nel repository di Bootstrap Italia, nella [cartella `docs/esempi/`](https://github.com/italia/bootstrap-italia/tree/master/docs/esempi).

Tra i [progetti]({{ site.baseurl }}/docs/progetti/) si possono trovare molti riferimenti a progetti terzi che fanno uso di Bootstrap Italia, come i temi per alcuni CMS, generatori di siti statici e framework per il web.

###### Continua la lettura >

Se ti interessa contribuire alla libreria e sapere come funziona il processo di compilazione dei file e la creazione della documentazione di Bootstrap Italia,
continua a leggere alla pagina [strumenti di compilazione e contribuzione]({{ site.baseurl }}/docs/come-iniziare/strumenti-di-compilazione/).


## Breaking change

{% capture callout %}
La versione 3.0.0 ha portato molte breaking changes sia a livello generale che a livello di singolo componente. Fai riferimento alla [guida alla migrazione dalla versione 2]({{ site.baseurl }}/docs/come-iniziare/migrazione-dalla-versione-2/).
{% endcapture %}{% include callout-breaking.html version="3.0.0" content=callout type="danger" %}

{% capture callout %}
Per caricare i font utilizzando JavaScript occorre chiamare **esplicitamente** la funzione `loadFonts` passando il percorso della cartella dove si trovano i font.
{% endcapture %}{% include callout-breaking.html version="2.2.0" content=callout type="danger" %}

{% capture callout %}
Il `focus` con la tastiera viene adesso settato con l'attributo `data-focus-mouse`
invece che con la classe `focus--mouse`. Da tenere presente nel caso di un 
precedente utilizzo della classe `focus--mouse` per un controllo e/o un' implementazione 
ulteriore di accessibilità. 
{% endcapture %}{% include callout-breaking.html version="2.14.0" content=callout type="danger" %}
