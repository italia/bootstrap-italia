---
layout: docs
group: componenti
toc: true
title: Progress Indicators
description: Indicatori di stato attivo e di avanzamento di un'operazione
---

<script>
	//attiva donuts
	document.addEventListener("DOMContentLoaded", function() {
		progressDonut.generate("#donut-one", 0);
		progressDonut.generate("#donut-two", 42);		
	})
</script>

## Donuts

L'elemento Donut utilizza un cerchio, un semicerchio e testo per indicare il progresso o l'avanzamento di un'operazione in corso.

Va inizializzato con il comando javascript:

{% highlight js %}
  progressDonut.generate("#ID_ELEMENTO", 0);
{% endhighlight %}

Dove il primo parametro corrisponde con l'id univoco dell'elemento `.progress-donut` e il secondo con la percentuale di completamento.

Per aggiornare lo stato del testo, del testo per screen reader e del progresso circolare utilizzare lo stesso comando con il nuovo valore di progresso:

{% highlight js %}
  progressDonut.update("#ID_ELEMENTO", 75);
{% endhighlight %}

Nel seguente esempio sono presenti un Donut appena inizializzato ed un Donut al 75%.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6">
      <p><strong>Stato iniziale</strong></p>
      <div class="progress-donut-wrapper">
        <div id="donut-one" class="progress-donut"></div>
        <span class="sr-only"></span>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <p><strong>Attivo</strong></p>
      <div class="progress-donut-wrapper">
        <div id="donut-two" class="progress-donut"></div>
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Progress Bar

Le Progress Bar sono costruite con due elementi HTML, CSS in linea per impostare la larghezza e alcuni attributi. Non è previsto l’utilizzo dell’elemento `<progress>` di HTML5.

- Utilizziamo `.progress` come contenitore che indica il valore massimo della barra di avanzamento.
- Utilizziamo `.progress-bar` come barra interna per indicare fin dove si è arrivati con l’avanzamento.
- La classe `.progress-bar` richiede uno stile inline, una classe di utility di dimensionamento o un CSS personalizzato per impostare la larghezza.

{% capture callout %}
##### Accessibilità

Per rendere accessibile l’elemento `.progress-bar` sono necessari alcuni attributi come role e aria.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Esempio

{% capture example %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}{% include example.html content=example %}

### Etichette

Per aggiungere etichette con testo che indica il progresso racchiudere la Progress Bar in un `<div>` con classe `.progress-bar-wrapper` e aggiungere un `<div>` interno con classe `.progress-bar-label`.

Non dimenticare il testo esplicativo dedicato agli Screen Reader all'interno di questo elemento.  

{% capture example %}
<div class="progress-bar-wrapper">
  <div class="progress-bar-label"><span class="sr-only">Progresso </span>35%</div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Progresso Indeterminato

Quando non è possibile stabilire una percentuale di progressione utilizzare una Progress Bar di tipo indeterminato, aggiungendo una classe `.progress-indeterminate` al contenitore `.progress` ed eliminando gli attributi `aria-` dalla Progress Bar.

{% capture example %}
<div class="progress progress-indeterminate">
  <span class="sr-only">In elaborazione...</span>
  <div class="progress-bar" role="progressbar"></div>
</div>
{% endcapture %}{% include example.html content=example %}

### Colori

Per variare il colore della barra è sufficiente aggiungere la classe `.progress-color` al `<div>` contenitore ed applicare una delle classi contenute nelle <a href="{{ site.baseurl }}/docs/utilities/colori/#colore-di-sfondo">Utility colori</a> alla Progress Bar.

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

### Bottone con Progress Bar

La Progress Bar può essere integrata in un bottone Primario o Secondario con classe aggiuntiva `.btn-progress` utilizzando la struttura e le classi riportate nei seguenti esempi:

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6">
      <p><strong>Bottone primario</strong></p>
      <button type="button" class="btn btn-primary btn-progress disabled" disabled>
        Label bottone <svg class="icon icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use></svg>
        <span class="progress">
				<span class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span>
			</span>
      </button>
    </div>
    <div class="col-12 col-sm-6">
      <p><strong>Bottone secondario</strong></p>
      <button type="button" class="btn btn-secondary btn-progress disabled" disabled>
        Label bottone <svg class="icon icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use></svg>
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

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner standard</strong></p>
      <div class="progress-spinner">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner Attivo</strong></p>
      <div class="progress-spinner progress-spinner-active">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small</strong></p>
      <div class="progress-spinner size-sm">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small attivo</strong></p>
      <div class="progress-spinner progress-spinner-active size-sm">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Spinner doppio

Aggiungendo la classe `.progress-spinner-double` allo Spinner si ottiene un'animazione alternativa.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner doppio</strong></p>
      <div class="progress-spinner progress-spinner-double">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Doppio attivo</strong></p>
      <div class="progress-spinner progress-spinner-double progress-spinner-active">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small</strong></p>
      <div class="progress-spinner progress-spinner-double size-sm">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small attivo</strong></p>
      <div class="progress-spinner progress-spinner-double size-sm progress-spinner-active">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
