---
layout: docs
title: Personalizzazione della libreria
description: Come personalizzare e sovrascrivere le variabili di default della libreria (es. colori, font-family, misure, ecc.)
group: personalizzazione-libreria
toc: true
---

**Bootstrap Italia** eredita ed estende tutte le variabili di default di Bootstrap, sovrascrivendo alcuni valori in fase di compilazione e impostandone di nuovi all'occorenza.  
Un esempio fra tutti è il valore del colore `$primary` che in **Bootstrap Italia** è rappresentato dal colore blu `#0066CC`, tipico della libreria.

L'utilizzo del blu `#0066CC` dovrebbe però essere riservato alle amministrazioni centrali dello Stato, e quindi ci si può trovare nella condizione di dover personalizzare i valori delle variabili colore di **Bootstrap Italia**, impostando nuovi valori per le proprie necessità.

L'impostazione di nuovi valori alle variabili di default non può essere applicata in runtime ma deve essere eseguita **prima** della compilazione della libreria. Pertanto non è possibile usare una versione modificata di **Bootstrap Italia** semplicemente caricandola con un `link` nella parte `<head>...</head>` del codice HTML ma va importata esplicitamente in una applicazione pre-processata ad esempio attraverso SASS.

### Sovrascrivere le variabili colore

1. Installare **Bootstrap Italia** con `yarn/npm: yarn add bootstrap-italia --save`
2. Installare **node-sass**: `yarn add node-sass`
3. Creare all'interno del progetto una cartella **scss**
4. Dentro alla cartella **scss** creare un file di tipo **bootstrap-italia-custom.scss**
5. Impostare le variabili di default da modificare con dei valori **personalizzati** (la maggior parte delle variabili usate da Bootstrap Italia sono visibili [qui](https://github.com/italia/bootstrap-italia/blob/master/src/scss/))
6. Importare la libreria **bootstrap-italia.scss** da **node_modules** alla fine del file

{% capture callout %}

##### Bootstrap Italia Playground

<div class="text-center">
<img class="rounded" src="{{ site.baseurl }}/docs/assets/img/bootstrap-italia-playground.png" width="400" alt="Esempio di pagina personalizzata con Bootstrap Italia Playground"> 
</div>

Il **modo più semplice per creare una versione personalizzata di Bootstrap Italia**, è seguire i passi indicati nel repository di esempio **[Bootstrap Italia Playground](https://github.com/italia/bootstrap-italia-playground)**.

{% endcapture %}{% include callout.html content=callout type="info" %}

{% highlight scss %}
// file: bootstrap-italia-custom.scss

// modifica completa del template: è possibile ricompilare la libreria modificando alcune variabili SCSS

// Per l'override del colore $primary della palette in formato HSB:

// Per ottenere il colore #FF3333 (https://rgb.to/ff3333)
$primary-h: 0;
$primary-s: 80;
$primary-b: 100;
// Nota: per convertire il codice esadecimale di un colore formato HSB
// è possibile utilizzare ad esempio il sito https://rgb.to/.

// Per l'override della famiglia di caratteri
$font-family-serif:      "Custom Font", Georgia, serif;
$font-family-sans-serif: "Custom Font", Arial, Helvetica, sans-serif;
$font-family-monospace:  "Custom Font", "Courier New", Courier, monospace;

// import libreria
@import "../../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss";
{% endhighlight %}

Ad esempio, per una applicazione costruita con ReactJS attraverso `create-react-app`, è possibile **importare bootstrap-italia-custom.scss** laddove serva utilizzare la libreria **Bootstrap-Italia**.

{% highlight jsx %}
import React from "react";
import "./scss/bootstrap-italia-custom.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Bottone di esempio</button>
    </div>
  );
}

export default App;
{% endhighlight %}

In questo semplice e veloce esempio, il bottone con classe **.btn-primary** avrà lo sfondo di colore **rosso** anzichè il default blu.
