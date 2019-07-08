---
layout: docs
title: Personalizzazione della libreria
description: Come personalizzare e sovrascrivere le variabili di default della libreria (es. colori, font-family, misure, ecc.)
group: personalizzazione-libreria
toc: true
---

**Bootstrap Italia** eredita ed estende tutte le variabili di default di Bootstrap, sovrascrivendo alcuni valori in fase di compilazione e impostandone di nuovi all'occorenza.

Un esempio fra tutti è il valore del colore **\$primary** che in **Bootstrap Italia** è rappresentato dal colore **blu**, tipico della libreria.

Ci si può trovare però nella condizione di dover utilizzare **Bootstrap Italia** e voler personalizzare ulteriormente i valori delle variabili, impostando nuovi valori per le proprie necessità.

{% capture callout %}

##### Note sull'utilizzo

L'impostazione di nuovi valori alle variabili di default non può essere applicata in runtime ma deve essere eseguita **prima** della compilazione della libreria. Pertanto non è possibile usare una versione modificata di **Bootstrap Italia** semplicemente caricandola con un `link` nella parte `<head>...</head>` del codice HTML ma va importata esplicitamente in una applicazione pre-processata attraverso un tool di bundling come Gulp, Webpack, ecc. che ne gestisca la compilazione.

{% endcapture %}{% include callout.html content=callout type="info" %}

#### Passi da seguire per sovrascrivere le variabili

1. Installare **Bootstrap Italia** con `yarn/npm: yarn add bootstrap-italia --save`
2. Installare **node-sass**: `yarn add node-sass`
3. Creare all'interno del progetto -> **/src** una cartella **scss**
4. Dentro alla cartella **/src/scss** creare un file del tipo **custom-bootstrap.scss**
5. Impostare le variabili di default da modificare con dei valori **custom**
6. Importare la libreria **bootstrap-italia.scss** da **node_modules** alla fine del file

{% highlight scss %}
// file: custom-bootstrap.scss

// override variabile
$primary: #ff0000;
$font-family-sans-serif: 'Custom-font', Arial, Verdana, sans-serif;

// import libreria
@import "../../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss";
{% endhighlight %}

Al termine della compilazione, nei file _\*.js_ **importare custom-bootstrap.scss** laddove serva utilizzare la libreria **Bootstrap-Italia**.

{% highlight jsx %}
import React from "react";
import "./scss/custom-bootstrap.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">
        Button
      </button>
    </div>
  );
}

export default App;
{% endhighlight %}

In questo semplice e veloce esempio in _React_ e **create-react-app**, il bottone con classe **.btn-primary** avrà lo sfondo di colore **rosso** anzichè il **.primary** default blu.
