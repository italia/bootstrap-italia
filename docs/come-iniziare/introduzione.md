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

## Installazione

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

Se si preferisce usare i file sorgente di Bootstrap Italia nel proprio progetto attraverso il package manager **npm**, si può fare riferimento alle [indicazioni di come utilizzare la libreria come dipendenza]({{ site.baseurl }}/docs/come-iniziare/introduzione#utilizzo-come-dipendenza).

Le librerie Javascript e CSS di Bootstrap Italia personalizzano e comprendono anche il codice originale di **Bootstrap {{ site.bootstrap_version }}**, ereditandone quindi tutte i selettori, le funzionalità, ecc., che sono consultabili al sito di Bootstrap stesso.

La libreria è accessibile anche via CDN su [jsDelivr](https://www.jsdelivr.com/package/npm/bootstrap-italia) o [unpkg](https://unpkg.com/bootstrap-italia/), di cui però è sconsigliato l'utilizzo in ambienti di produzione.

### Utilizzo come dipendenza

Alternativamente, specialmente se si utilizza [Webpack](https://webpack.github.io/), [Rollup.js](https://rollupjs.org/) o altri module bundler per l'inclusione di librerie esterne attraverso `npm`, è possibile aggiungere Bootstrap Italia come dipendenza con il seguente comando:

```sh
npm i bootstrap-italia --save
```

Di seguito le informazioni per l'utilizzo dei singoli file.

### CSS

Una volta scaricato e decompresso il file, all'interno della cartella `css` sarà presente un file CSS minificato (`bootstrap-italia.min.css`) con la sua [sourcemap](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) (opzionale).

Per includere questo file all'interno del proprio progetto sarà sufficiente aggiungere il tag `<link>` di seguito riportato all'interno del tag `<head>` della pagina, prima di ogni altro CSS già presente, eventualmente correggendo il riferimento al percorso del file:

```html
<link rel="stylesheet" href="<path-a-bootstrap-italia>/dist/css/bootstrap-italia.min.css" />
```

### JavaScript

All'interno della cartella `js` saranno invece presenti il file di bundle, il file non bundle e i componenti suddivisi in moduli.

#### Versione bundle

In questo caso, dopo aver copiato i file all'interno del progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi includere la libreria in questo modo:

```html
<script src="<path-a-bootstrap-italia>/dist/js/bootstrap-italia.bundle.min.js"></script>
```

#### Versione non bundle

Per la versione non bundle, dopo aver copiato i file all'interno del progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi includere la libreria in questo modo, inserendo solo le dipendenze che servono al nostro progetto (qui nell'esempio sono inserite solo alcune per riferimento):

```html
<!--- Dipendenze da inserire solo se usate -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
<!--- Versione non bundle di Bootstrap Italia -->
<script src="<path-a-bootstrap-italia>/dist/js/bootstrap-italia.min.js"></script>
```

#### Moduli

In alternativa se si vogliono utilizzare i moduli, è possibile importare e utilizzare singolarmente i vari componenti. Di seguito un esempio di cui potete trovare l'intero esempio completo [qui](https://github.com/astagi/demo-bsitalia-2).

```js
import { CarouselBI, Alert, Notification, Tooltip, Sticky, loadFonts } from 'bootstrap-italia'


new CarouselBI(document.getElementById('myCarousel'))

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

### Fonts

È necessario anche includere i file relativi ai font referenziati nel CSS, mantenendo i path dei singoli font utilizzato nei [file sorgente della libreria](https://github.com/italia/bootstrap-italia/releases/tag/v{{ site.current_version }}). L'inclusione dei font può avvenire utilizzando CSS o JavaScript.

#### Via CSS

Per caricare i font necessari via CSS è necessario inserire nei propri fogli di stile il seguente codice. Per semplicità abbiamo utilizzato la sintassi SCSS in modo da utilizzare una variabile per specificare la path di base dove prendere i font.

```scss
$font-path: "/fonts";

/* Titillium+Web:300,400,600,700 */

/* titillium-web-300 - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-300italic - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-300italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-regular - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-italic - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-700 - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-700italic - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-700italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}
/* titillium-web-600 - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* titillium-web-600italic - latin-ext_latin */
@font-face {
    font-family: 'Titillium Web';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Titillium_Web/titillium-web-v10-latin-ext_latin-600italic.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
}

/* Lora:400,700 */

/* lora-regular - latin-ext_latin */
@font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-regular.svg#Lora') format('svg'); /* Legacy iOS */
}

/* lora-700 - latin-ext_latin */
@font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700.svg#Lora') format('svg'); /* Legacy iOS */
}

/* lora-italic - latin-ext_latin */
@font-face {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-italic.svg#Lora') format('svg'); /* Legacy iOS */
}

/* lora-700italic - latin-ext_latin */
@font-face {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Lora/lora-v20-latin-ext_latin-700italic.svg#Lora') format('svg'); /* Legacy iOS */
}

/* Roboto+Mono:400,700 */

/* roboto-mono-regular - latin-ext_latin */
@font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-regular.svg#RobotoMono') format('svg'); /* Legacy iOS */
}

/* roboto-mono-700 - latin-ext_latin */
@font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700.svg#RobotoMono') format('svg'); /* Legacy iOS */
}

/* roboto-mono-italic - latin-ext_latin */
@font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-italic.svg#RobotoMono') format('svg'); /* Legacy iOS */
}

/* roboto-mono-700italic - latin-ext_latin */
@font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('#{$font-path}/Roboto_Mono/roboto-mono-v13-latin-ext_latin-700italic.svg#RobotoMono') format('svg'); /* Legacy iOS */
}
```

#### Via JavaScript

{% capture callout %}
Breaking feature dalla versione **2.2.0**
{% endcapture %}{% include callout.html content=callout type="danger" %}

Per caricare i font utilizzando JavaScript occorre chiamare **esplicitamente** la funzione `loadFonts` passando il percorso della cartella dove si trovano i font.

```html
<script>
  bootstrap.loadFonts('/bootstrap-italia/dist/fonts');
</script>
```

o importandolo

```js
import { loadFonts } from 'bootstrap-italia'

loadFonts('/bootstrap-italia/dist/fonts');
```

Di default se non viene specificato alcun path, i font saranno cercati all'interno di una cartella `/node_modules/bootstrap-italia/dist/fonts` oppure, se valorizzata, utilizzando il contenuto della variabile globale `__PUBLIC_PATH__`.

### Icone

Le icone a disposizione sono un componente assolutamente opzionale e sono pubblicate nella libreria sotto forma di sprite SVG `/bootstrap-italia/dist/svg/`, le cui singole SVG sorgenti sono presenti nel repository.

Per informazioni, si può fare riferimento alla [documentazione sull'utilizzo delle icone]({{ site.baseurl }}/docs/utilities/icone/).

### Altri esempi

Assieme a questa documentazione, si possono consultare una vasta quantità di esempi, consultabili sia alla sezione [esempi]({{ site.baseurl }}/docs/esempi/) e [progetti]({{ site.baseurl }}/docs/progetti/) di questo sito, che [sul sito di Bootstrap](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/examples/), con i quali è possibile iniziare a personalizzare la tua pagina semplicemente copiando il loro codice sorgente.

Il codice sorgente di tali esempi si può trovare anche nel repository di Bootstrap Italia, nella [cartella `docs/esempi/`](https://github.com/italia/bootstrap-italia/tree/master/docs/esempi).

Tra i [progetti]({{ site.baseurl }}/docs/progetti/) si possono trovare molti riferimenti a progetti terzi che fanno uso di Bootstrap Italia, come i temi per alcuni CMS, generatori di siti statici e framework per il web.

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

###### Continua la lettura >

Se ti interessa contribuire alla libreria e sapere come funziona il processo di compilazione dei file e la creazione della documentazione di Bootstrap Italia,
continua a leggere alla pagina [strumenti di compilazione e contribuzione]({{ site.baseurl }}/docs/come-iniziare/strumenti-di-compilazione/).
