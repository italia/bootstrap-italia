---
layout: docs
group: componenti
toc: true
title: Progress Indicators
description: Indicatori di stato attivo e di avanzamento di un'operazione.
---

## Donuts

L'elemento Donut utilizza un cerchio, un semicerchio e testo per indicare il progresso o l'avanzamento di un'operazione in corso.
Il componente si basa sul plugin javascript [ProgressJS](https://kimmobrunfeldt.github.io/progressbar.js/).

Nel seguente esempio sono presenti un Donut appena inizializzato ed un Donut al 75%.

{% comment %}Example name: Ciambelle{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6">
      <p><strong>Stato iniziale</strong></p>
      <div class="progress-donut-wrapper">
        <div class="progress-donut" id="prog-donut-1" data-bs-progress-donut></div>
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <p><strong>Attivo</strong></p>
      <div class="progress-donut-wrapper">
        <div class="progress-donut" data-bs-progress-donut data-bs-value="0.75" id="prog-donut-2"></div>
        <span class="visually-hidden"></span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Attivazione tramite JavaScript

È possibile creare un'istanza con il constructor, ad esempio:

```js
var progElement = document.getElementById('prog-donut-1')
var progDonut = new bootstrap.ProgressDonut(progElement, {
  value: 0.25,
})
```

#### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite JavaScript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-value=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>color</td>
      <td>string</td>
      <td>#0073E6</td>
      <td>colore della barra</td>
    </tr>
    <tr>
      <td>trailColor</td>
      <td>string</td>
      <td>#D4E9FF</td>
      <td>colore della guida della barra</td>
    </tr>
    <tr>
      <td>strokeWidth</td>
      <td>number</td>
      <td>24</td>
      <td>spessore della barra</td>
    </tr>
    <tr>
      <td>trailWidth</td>
      <td>number</td>
      <td>6</td>
      <td>spessore della guida barra</td>
    </tr>
    <tr>
      <td>easing</td>
      <td>string</td>
      <td>easeInOut</td>
      <td>inerzia dell'animazione</td>
    </tr>
    <tr>
      <td>animate</td>
      <td>boolean</td>
      <td>true</td>
      <td>attiva/disattiva l'animazione</td>
    </tr>
    <tr>
      <td>value</td>
      <td>number</td>
      <td>0</td>
      <td>valore che indica la percentuale di completamento. Deve essere compreso tra 0 e 1.0</td>
    </tr>
  </tbody>
</table>

### Metodi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>set</td>
      <td>modifica lo stato di progressione della barra. È necessario inserire un numero compreso tra 0 e 1.0</td>
    </tr>
    <tr>
      <td>dispose</td>
      <td>Elimina la funzionalità del progressive donut.</td>
    </tr>
    <tr>
      <td>getInstance</td>
      <td>Metodo statico che restituisce l'istanza collapse associata ad un elemento del DOM. Esempio: <code>bootstrap.ProgressDonut.getInstance(element)</code></td>
    </tr>
    <tr>
      <td>getOrCreateInstance</td>
      <td>Metodo statico che restituisce un'istanza collapse associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.ProgressDonut.getOrCreateInstance(element)</code></td>
    </tr>
  </tbody>
</table>

## Progress Bar

Le Progress Bar sono costruite con due elementi HTML, CSS in linea per impostare la larghezza e alcuni attributi. Non è previsto l’utilizzo dell’elemento `<progress>` di HTML5.

- Utilizziamo `.progress` come contenitore che indica il valore massimo della barra di avanzamento.
- Utilizziamo `.progress-bar` come barra interna per indicare fin dove si è arrivati con l’avanzamento.
- La classe `.progress-bar` richiede uno stile inline, una classe di utility di dimensionamento o un CSS personalizzato per impostare la larghezza.

{% capture callout %}

#### Accessibilità

Per rendere accessibile l’elemento `.progress-bar` sono necessari alcuni attributi `role` e `ARIA`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Esempio

{% comment %}Example name: Barra di progresso{% endcomment %}
{% capture example %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}{% include example.html content=example %}

### Etichette

Per aggiungere etichette con testo che indica il progresso racchiudere la Progress Bar in un `<div>` con classe `.progress-bar-wrapper` e aggiungere un `<div>` interno con classe `.progress-bar-label`.

Non dimenticare il testo esplicativo dedicato agli Screen Reader all'interno di questo elemento.

{% comment %}Example name: Barra di progresso, con etichetta{% endcomment %}
{% capture example %}
<div class="progress-bar-wrapper">
  <div class="progress-bar-label"><span class="visually-hidden">Progresso </span>35%</div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Progresso Indeterminato

Quando non è possibile stabilire una percentuale di progressione utilizzare una Progress Bar di tipo indeterminato, aggiungendo una classe `.progress-indeterminate` al contenitore `.progress` ed eliminando gli attributi `aria-` dalla Progress Bar.

{% comment %}Example name: Progresso intederminato{% endcomment %}
{% capture example %}
<div class="progress progress-indeterminate">
  <span class="visually-hidden">In elaborazione...</span>
  <div class="progress-bar" role="progressbar"></div>
</div>
{% endcapture %}{% include example.html content=example %}

### Colori

Per variare il colore della barra è sufficiente aggiungere la classe `.progress-color` al `<div>` contenitore ed applicare una delle classi contenute nelle <a href="{{ site.baseurl }}/docs/utilities/colori/#colore-di-sfondo">Utility colori</a> alla Progress Bar.

{% comment %}Example name: Barra di progresso, varianti di colore{% endcomment %}
{% capture example %}
<div class="progress progress-color">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar bg-info" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-color">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}{% include example.html content=example %}

### Pulsante con Progress Bar

La Progress Bar può essere integrata in un pulsante Primario o Secondario con classe aggiuntiva `.btn-progress` utilizzando la struttura e le classi riportate nei seguenti esempi:

{% comment %}Example name: Pulsante con barra di progresso{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6">
      <p><strong>Pulsante primario</strong></p>
      <button type="button" class="btn btn-primary btn-progress disabled" disabled>
        Label pulsante <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
        <span class="progress">
        <span class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span>
      </span>
      </button>
    </div>
    <div class="col-12 col-sm-6">
      <p><strong>Pulsante secondario</strong></p>
      <button type="button" class="btn btn-secondary btn-progress disabled" disabled>
        Label pulsante <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
        <span class="progress">
        <span class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span>
      </span>
      </button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Spinner

L'elemento Spinner comunica lo stato attivo di un'operazione ma non il progresso percentuale della stessa. È utile quindi quando non è possibile determinare il tempo necessario a completare una procedura.

Per ottenere una versione ridotta dello Spinner aggiungere allo stesso la classe `.size-sm`. Notare l'inclusione di uno `<span>` riservato agli screen reader.

{% comment %}Example name: Spinner{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner standard</strong></p>
      <div class="progress-spinner">
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner Attivo</strong></p>
      <div class="progress-spinner progress-spinner-active">
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small</strong></p>
      <div class="progress-spinner size-sm">
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small attivo</strong></p>
      <div class="progress-spinner progress-spinner-active size-sm">
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Spinner doppio

Aggiungendo la classe `.progress-spinner-double` allo Spinner si ottiene un'animazione alternativa.

{% comment %}Example name: Spinner, animazione alternativa{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner doppio</strong></p>
      <div class="progress-spinner progress-spinner-double">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Doppio attivo</strong></p>
      <div class="progress-spinner progress-spinner-double progress-spinner-active">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small</strong></p>
      <div class="progress-spinner progress-spinner-double size-sm">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small attivo</strong></p>
      <div class="progress-spinner progress-spinner-double size-sm progress-spinner-active">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
