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

{% capture callout %}
**⚠️ Dalla versione 2.x.x Bootstrap Italia ha adottato il moderno sistema di moduli Sass (`@use`/`@forward`).**

Sono supportati due metodi di personalizzazione:
- **Metodo raccomandato**: sintassi `@use ... with` (Dart Sass 3.0 ready, zero warning)
- **Metodo legacy**: sintassi `@import` (deprecato, funzionante ma con warning)

Consigliamo di utilizzare il metodo raccomandato per nuovi progetti.
{% endcapture %}{% include callout.html content=callout type="warning" %}

### Sovrascrivere le variabili colore

1. Installare **Bootstrap Italia** da NPM o da sorgente
2. Installare **sass** (https://www.npmjs.com/package/sass)
3. Creare all'interno della cartella **scss** di progetto un file di tipo **bootstrap-italia-custom.scss**
4. Impostare le variabili di default da modificare con dei valori **personalizzati** (la maggior parte delle variabili usate da Bootstrap Italia è visibile [qui](https://github.com/italia/bootstrap-italia/blob/main/src/scss/))
5. Importare la libreria **bootstrap-italia.scss** da **node_modules** o da sorgente alla fine del file

### Metodo raccomandato: @use con configurazione inline

```scss
// file: bootstrap-italia-custom.scss

// Importa la libreria CON configurazione delle variabili
@use '../../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss' with (
  // Override colore primary (colore #FF3333 https://rgb.to/ff3333)
  $primary-h: 0,
  $primary-s: 80,
  $primary-b: 100,
  
  // Override famiglia di caratteri
  $font-family-serif: ('Custom Font', Georgia, serif),
  $font-family-sans-serif: ('Custom Font', Arial, Helvetica, sans-serif),
  $font-family-monospace: ('Custom Font', 'Courier New', Courier, monospace)
) as *;
```

{% capture callout %}
**Perché usare `@use ... with`?**

- ✅ Zero deprecation warnings
- ✅ Compatibile con Dart Sass 3.0
- ✅ Scope dei moduli isolato e sicuro
- ✅ Sintassi moderna raccomandata da Sass

**Nota importante:** Con `@use`, le variabili devono essere configurate nella clausola `with (...)` e non possono essere definite prima dell'import come con `@import`.
{% endcapture %}{% include callout.html content=callout type="success" %}

### Scelta del namespace

Con `@use` puoi decidere come accedere alle variabili e mixin di Bootstrap Italia nel tuo codice:

#### Namespace globale
Utilizzando `as *`:

```scss
@use 'bootstrap-italia/src/scss/bootstrap-italia.scss' with (
  $primary-h: 0
) as *;

.custom {
  color: $primary;  // Diretto
  @include button-variant($primary, $primary, ...);
}
```
**Vantaggi:** Sintassi semplice, simile a `@import`.  
**Svantaggi:** Possibili conflitti di naming.

#### Namespace custom
Utilizzando `as NOME`, esempio `as bsi`:

```scss
@use 'bootstrap-italia/src/scss/bootstrap-italia.scss' with (
  $primary-h: 0
) as bi;

.custom {
  color: bsi.$primary;  // Esplicito
  @include bsi.button-variant(bsi.$primary, bsi.$primary, ...);
}
```
**Vantaggi:** Esplicito, evita conflitti, consigliato da Sass.  
**Svantaggi:** Leggermente più verboso.

#### Namespace default 
Non specificando un namespace: 

```scss
@use 'bootstrap-italia/src/scss/bootstrap-italia.scss' with (
  $primary-h: 0
);

.custom {
  color: bootstrap-italia.$primary;  // Molto esplicito
  @include bootstrap-italia.button-variant(bootstrap-italia.$primary, bootstrap-italia.$primary, ...);
}
```
**Vantaggi:** Zero conflitti garantito.  
**Svantaggi:** Molto verboso.

{% capture callout %}
**Quale scegliere?**

- **Progetti piccoli o solo uso classi CSS:** `as *` (semplicità)
- **Progetti medi/grandi con Sass custom:** `as bsi` (chiarezza senza verbosità)  
- **Librerie condivise:** namespace default (massima sicurezza)

**Nota:** Se usi solo le classi CSS di Bootstrap Italia (es: `.btn-primary`) senza scrivere codice Sass custom, puoi omettere completamente `as` - le classi funzioneranno comunque.
{% endcapture %}{% include callout.html content=callout type="success" %}

### Metodo legacy: @import (deprecato)

```scss
// file: bootstrap-italia-custom.scss

// Definisci le variabili PRIMA dell'import
$primary-h: 0;
$primary-s: 80;
$primary-b: 100;

$font-family-serif: 'Custom Font', Georgia, serif;
$font-family-sans-serif: 'Custom Font', Arial, Helvetica, sans-serif;
$font-family-monospace: 'Custom Font', 'Courier New', Courier, monospace;

// Importa la libreria
@import '../../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss';
```

{% capture callout %}
**⚠️ Metodo deprecato**

La sintassi `@import` è deprecata in Dart Sass e sarà rimossa nella versione 3.0. Questo metodo funziona ancora ma genera warning di deprecazione durante la compilazione.

**Si raccomanda di migrare** al metodo `@use ... with` per evitare problemi futuri.
{% endcapture %}{% include callout.html content=callout type="warning" %}

### Utilizzo in applicazioni

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
