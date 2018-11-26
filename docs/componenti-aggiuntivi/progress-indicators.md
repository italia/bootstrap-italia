---
layout: docs
title: Progress Indicators
description: Consente all'utente di far scorrere automaticamente ad una parte specifica della pagina
group: componenti-aggiuntivi
toc: true
---

## Progress Bar

I componenti di avanzamento progressivo sono costruiti con due elementi HTML, alcuni CSS per impostare la larghezza e alcuni attributi. Non è previsto l’utilizzo dell’elemento `<progress>` di HTML5.

- Utilizziamo `.progress` come contenitore che indica il valore massimo della barra di avanzamento.
- Utilizziamo `.progress-bar` come barra interna per indicare fin dove si è arrivati con l’avanzamento.
- La classe `.progress-bar` richiede uno stile inline, una classe di utility di dimensionamento o un CSS personalizzato per impostare la larghezza.

{% capture callout %}
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

Per variare il colore della barar è sufficiente aggiungere la classe `.progress-color` al `<div>` contenitore ed appplicare una delle classi contenute nelle <a href="{{ site.baseurl }}/docs/utilities/colori/#colore-di-sfondo">Utility colori</a> alla Progress Bar.

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