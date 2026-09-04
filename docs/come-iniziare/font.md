---
layout: docs
group: come-iniziare
redirect_from:
  - /fonts/
  - /docs/fonts/
  - /docs/font/
toc: true
title: Font
description: Guida completa al caricamento e alla configurazione dei font in Bootstrap Italia.

---

## Introduzione

Bootstrap Italia include tre famiglie di caratteri tipografici pensate per garantire leggibilità e coerenza visiva nei progetti della Pubblica Amministrazione:

- **Titillium** (Web o Sans Pro): font principale senza grazie (sans-serif) per interfacce e testi 
- **Lora**: font con grazie (serif) per testi lunghi e contenuti editoriali
- **Roboto Mono**: font monospace per codice, numeri e dati tabulari

## Titillium: il font principale

Bootstrap Italia supporta dalla versione 3.0.0 due versioni alternative del carattere sans-serif Titillium con licenza aperta:

- **Titillium Web** (`'web'`). Versione originale e default di Bootstrap Italia, è il carattere di riferimento del Design system .italia per il digitale della Pubblica Amministrazione italiana. Disponibile nei pesi 300, 400, 600, 700 con le rispettive varianti italic ([storia del font Titillium e crediti](https://nta.accademiadiurbino.it/titillium/)).

- **Titillium Sans Pro** (`'sans-pro'`). Evoluzione del Titillium Web con supporto linguistico esteso e scrittura matematica. Particolare cura è riconoscibile nel miglioramento di spaziature, kerning, forme dei caratteri e metriche verticali. Disponibile in Bootstrap Italia nei formati WOFF2 e WOFF con gli stessi pesi e varianti del Titillium Web, sono disponibili anche i pesi Black e Thin e altri formati scaricabili dal repository ufficiale ([repository Titillium Sans Pro e crediti](https://github.com/chialab/titillium_pro/tree/main)).

{% capture callout %}
Usa il selettore "Font principale" nella barra di sinistra per esplorare la resa delle due differenti versioni di Titillium su questa documentazione. 
{% endcapture %}{% include callout.html content=callout type="info" %}

Ti segnaliamo inoltre l'esistenza del font **Titillio**: versione alternativa del Titillium sviluppata partendo dal Titillium Sans Pro nell'ambito del progetto **App IO**. Questa versione è stata curata con particolare attenzione alle applicazioni per schermi piccoli, laddove ci sia necessità di distinguere numerose gerarchie visive. Questo font non è direttamente disponibile in Bootstrap Italia ma è possibile scaricarlo dal repository ufficiale ([repository Titillio e crediti](https://github.com/pagopa/titillio)).

Ulteriori informazioni nella scheda [Tipografia](/docs/organizzare-i-contenuti/tipografia/).

## Font complementari: Lora e Roboto Mono

Oltre al Titillium, Bootstrap Italia include due font complementari:

- **Lora**: font con grazie (serif), ideale per testi lunghi, articoli e contenuti editoriali. Disponibile nei pesi 400 e 700 con varianti italic.

- **Roboto Mono**: font monospaziato (monospace) ottimizzato per la visualizzazione di codice, dati tabulari e contenuti tecnici. Disponibile nei pesi 400 e 700 con varianti italic.

Ulteriori informazioni nella scheda [Tipografia](/docs/organizzare-i-contenuti/tipografia/).

## Caricamento via JavaScript

Bootstrap Italia supporta il caricamento flessibile dei font tramite JavaScript, con controllo granulare di versioni e famiglie font.

### Opzioni di configurazione

La funzione `loadFonts()` accetta due parametri:
```js
loadFonts(percorso, opzioni)
```

**Parametri:**
- `percorso` (string): percorso della cartella contenente i font
- `opzioni` (object, opzionale): 
  - `titillium`: `'web'` (default) o `'sans-pro'`
  - `fonts`: array di famiglie da caricare (default: `['titillium', 'lora', 'roboto-mono']`)

### Esempi con moduli ES

Se usi un bundler (come mostrato nella [pagina Introduzione]({{ site.baseurl }}/docs/come-iniziare/introduzione/#moduli)):
```js
import { loadFonts } from 'bootstrap-italia'

// Caricamento standard (Titillium Web + Lora + Roboto Mono)
loadFonts('/fonts');

// Titillium Sans Pro al posto di Titillium Web
loadFonts('/fonts', { titillium: 'sans-pro' });

// Solo Titillium Web (nessun font serif o monospace)
loadFonts('/fonts', { fonts: ['titillium'] });

// Titillium Sans Pro + Lora (senza Roboto Mono)
loadFonts('/fonts', { 
  titillium: 'sans-pro', 
  fonts: ['titillium', 'lora'] 
});
```

### Utilizzo con bundle

Se includi Bootstrap Italia tramite tag `<script>` (senza bundler), le funzioni sono disponibili nel namespace globale `bootstrap`:
```html
<!-- Includi il bundle -->
<script src="path/to/bootstrap-italia.bundle.min.js"></script>

<!-- Usa loadFonts tramite il namespace bootstrap -->
<script>
  // Caricamento standard
  bootstrap.loadFonts('/fonts');
  
  // Con varianti specifiche
  bootstrap.loadFonts('/fonts', { titillium: 'sans-pro' });
  
  // Caricamento selettivo
  bootstrap.loadFonts('/fonts', { 
    fonts: ['titillium', 'lora'] 
  });
</script>
```

{% capture callout %}
Il namespace globale `bootstrap` è disponibile **solo** quando includi il file bundle (`bootstrap-italia.bundle.min.js`). Con i moduli ES devi usare `import`.
{% endcapture %}{% include callout.html content=callout type="info" %}

### Percorso predefinito

Se non specifichi un percorso, `loadFonts()` cerca i font secondo questa priorità:

1. **Variabile globale `window.__PUBLIC_PATH__`** (se valorizzata)
2. **Percorso specificato** come primo parametro
3. **Default**: `/node_modules/bootstrap-italia/dist/fonts` (se non specifichi nulla)

{% capture callout %}
Se imposti `window.__PUBLIC_PATH__`, sovrascrive **sempre** il percorso passato a `loadFonts()`. Specifica sempre il percorso esplicito per evitare comportamenti inattesi.
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Caricamento font via CSS

Per caricare i font necessari via CSS è necessario inserire nei fogli di stile il seguente codice. Per semplicità abbiamo utilizzato negli esempi che seguono la sintassi SCSS in modo da utilizzare una variabile per specificare la path di base dove prendere i font.

### Titillium Web via CSS (default)

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
```

### Titillium Sans Pro via CSS

```scss
$font-path: "/fonts";

/* Titillium Sans Pro - Light 300 */
@font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Light.woff2') format('woff2'),
         url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Light.woff') format('woff');
}

/* Titillium Sans Pro - Regular 400 */
@font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Regular.woff2') format('woff2'),
         url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Regular.woff') format('woff');
}

/* Titillium Sans Pro - Italic 400 */
@font-face {
    font-family: 'Titillium Sans Pro';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Italic.woff2') format('woff2'),
         url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Italic.woff') format('woff');
}

/* Titillium Sans Pro - Semibold 600 */
@font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Semibold.woff2') format('woff2'),
         url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Semibold.woff') format('woff');
}

/* Titillium Sans Pro - Semibold Italic 600 */
@font-face {
    font-family: 'Titillium Sans Pro';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-SemiboldItalic.woff2') format('woff2'),
         url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-SemiboldItalic.woff') format('woff');
}

/* Titillium Sans Pro - Bold 700 */
@font-face {
    font-family: 'Titillium Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Bold.woff2') format('woff2'),
         url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-Bold.woff') format('woff');
}

/* Titillium Sans Pro - Bold Italic 700 */
@font-face {
    font-family: 'Titillium Sans Pro';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-BoldItalic.woff2') format('woff2'),
         url('#{$font-path}/Titillium_Sans_Pro/TitilliumSansPro-BoldItalic.woff') format('woff');
}
```

### Font complementari: Lora e Roboto Mono

```scss
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

