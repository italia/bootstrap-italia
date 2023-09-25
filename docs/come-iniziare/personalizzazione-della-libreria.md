---
layout: docs
title: Personalizzazione della libreria
description: Come personalizzare e sovrascrivere le variabili di default della libreria (es. colori, font-family, misure, ecc.).
group: come-iniziare
toc: true
---

**Bootstrap Italia** eredita ed estende tutte le variabili di default di Bootstrap, sovrascrivendo alcuni valori in fase di compilazione e impostandone di nuovi all'occorrenza.
Un esempio fra tutti è il valore del colore `$primary` che in **Bootstrap Italia** è rappresentato dal colore blu `#0066CC`, tipico della libreria.

L'utilizzo del blu `#0066CC` dovrebbe però essere riservato alle amministrazioni centrali dello Stato, e quindi ci si può trovare nella condizione di dover personalizzare i valori delle variabili colore di **Bootstrap Italia**, impostando nuovi valori per le proprie necessità.

{% capture callout %}
Questo colore e le altre tonalità vengono generate a partire dalla terna HSB, pertanto occorre modificare le variabili **primary-h**, **primary-s** e **primary-b**.

```scss
$primary-h: 0;
$primary-s: 80;
$primary-b: 100;
```

Per avere la corrispondenza tra valore esadecimale del colore e HSB si può utilizzare il portale [rgb.to](https://rgb.to), ad esempio [https://rgb.to/0066CC](https://rgb.to/0066CC).
{% endcapture %}{% include callout.html content=callout type="info" %}

L'impostazione di nuovi valori alle variabili di default non può essere applicata in runtime ma deve essere eseguita **prima** della compilazione della libreria. Pertanto non è possibile usare una versione modificata di **Bootstrap Italia** semplicemente caricandola con un `link` nella parte `<head>...</head>` del codice HTML ma va importata esplicitamente in una applicazione pre-processata ad esempio attraverso SASS.

### Sovrascrivere le variabili colore

1. Installare **Bootstrap Italia** da NPM o da sorgente
2. Installare **sass** (https://www.npmjs.com/package/sass)
3. Creare all'interno della cartella **scss** di progetto un file di tipo **bootstrap-italia-custom.scss**
4. Impostare le variabili di default da modificare con dei valori **personalizzati** (la maggior parte delle variabili usate da Bootstrap Italia sono visibili [qui](https://github.com/italia/bootstrap-italia/blob/master/src/scss/))
5. Importare la libreria **bootstrap-italia.scss** da **node_modules** o da sorgente alla fine del file

{% capture callout %}

##### Bootstrap Italia Playground

<div class="text-center">
<img class="rounded" src="{{ site.baseurl }}/docs/assets/img/bootstrap-italia-playground.png" width="400" alt="Esempio di pagina personalizzata con Bootstrap Italia Playground">
</div>

Il **modo più semplice per creare una versione personalizzata di Bootstrap Italia**, è seguire i passi indicati nel repository di esempio **[Bootstrap Italia Playground](https://github.com/italia/bootstrap-italia-playground/tree/main)**.

{% endcapture %}{% include callout.html content=callout type="info" %}

```scss
// file: bootstrap-italia-custom.scss

// modifica completa del template: è possibile ricompilare la libreria modificando alcune variabili SCSS

// Per l'override del colore $primary della palette in formato HSB (colore #FF3333 https://rgb.to/ff3333):
$primary-h: 0;
$primary-s: 80;
$primary-b: 100;

// Per l'override della famiglia di caratteri
$font-family-serif: 'Custom Font', Georgia, serif;
$font-family-sans-serif: 'Custom Font', Arial, Helvetica, sans-serif;
$font-family-monospace: 'Custom Font', 'Courier New', Courier, monospace;

// import libreria
@import '../../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';
```

Ad esempio, per una applicazione costruita con ReactJS attraverso `create-react-app`, è possibile **importare bootstrap-italia-custom.scss** laddove serva utilizzare la libreria **Bootstrap-Italia**.

```jsx
import React from 'react'
import './scss/bootstrap-italia-custom.scss'
import './App.css'

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Pulsante di esempio</button>
    </div>
  )
}

export default App
```

In questo semplice e veloce esempio, il pulsante con classe **.btn-primary** avrà lo sfondo di colore **rosso** anziché il default blu.
