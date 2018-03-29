---
layout: docs
title: Navigazione
description: Documentazione ed esempi sull'utilizzo del componente per la navigazione.
group: componenti
toc: true
---

{% capture callout %}
#### Accessibilità dei componenti di navigazione

Per ogni componente che si occupi della navigazione di un sito web, assicurati di aggiungere l'attributo `role="navigation"` al contenitore della lista di link, oppure aggiungi un elemento `<nav>` che contenga l'intera navigazione. Non aggiungere l'attributo `role` al tag `<ul>` stesso, poiché questa pratica impedirà alle tecnologia assistive (come gli screen reader) di annunciare la lista stessa; aggiungilo al suo esterno.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Layout della navigazione

Il componente identificato dalla classe `.nav`, si basa su flexbox e fornisce solide fondamenta per la costruzione di ogni tipo di navigazione. Esso include alcuni stili per l'override del layout di base delle liste, aggiungendo spaziature per ottenere aree cliccabili più ampie, e gestendo lo stile per le voci disabilitate.

{% capture callout %}
Il componente base `.nav` non include nessuno stile per lo stato `.active`. Gli esempi di seguito includono la classe per dimostrare che la sua presenza non abilita alcuno stile aggiuntivo.
{% endcapture %}{% include callout.html content=callout type="info" %}

{% capture example %}
<ul class="nav">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

Riguardo il markup da utilizzare, in alternativa all'utilizzo di una lista non ordinata, è possibile usare una navigazione basata sull'elemento `<nav>`.

{% capture example %}
<nav class="nav nav-pills nav-fill">
  <a class="nav-item nav-link active" href="#">Active</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link disabled" href="#">Disabled</a>
</nav>
{% endcapture %}{% include example.html content=example %}

### Allineamento orizzontale

I componenti `nav` sono di norma allineati a sinistra, ma tale impostazione può essere modificata a piacimento utilizzando una delle [utility flexbox]({{ site.baseurl }}/docs/utilities/griglie/#allineamento-orizzontale) per impostare l'allineamento orizzontale.

Si può centrare il menù con `.justify-content-center`:

{% capture example %}
<ul class="nav justify-content-center">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

Si può allineare a destra con `.justify-content-end`:

{% capture example %}
<ul class="nav justify-content-end">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Allineamento verticale

Come per ogni altro componente che faccia uso di flexbox, è possibile anche allineare la navigazione in senso verticale semplicemente impostando la direzione degli elementi flex con la classe `.flex-column`. In caso si voglia utilizzare tale modalità solo per alcune risoluzioni, è possibile usare le sue versioni responsive, come ad esempio `.flex-sm-column`.

{% capture example %}
<ul class="nav flex-column">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Utilizzo avanzato di classi flex

Se si ha bisogno di variazioni significative dell'interfaccia di navigazione a seconda delle dimensioni del viewport, è possibile considerare l'utilizzo delle [utility flexbox]({{ site.baseurl }}/docs/utilities/flex/), che permettono una maggiore personalizzazione del layout.
 
Nell'esempio riportato di seguito, la lista degli elementi all'interno dell'elemento `.nav` sarà orientata in verticale fino al breakpoint più piccolo `-sm`, oltre al quale si adatteranno secondo un layout orizzontale:

{% capture example %}
<ul class="nav nav-pills flex-column flex-sm-row">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Menù a tab

Aggiungendo la classe `.nav-tabs` ad un normale `.nav` viene stilizzata una interfaccia a tab. Per rendere questa interfaccia dinamica e accessibile, è necessario approfondire  alla [pagina relativa all'utilizzo delle interfacce a tab]({{ site.baseurl }}/docs/componenti/tab).

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Menù a bottoni

Sempre con lo stesso markup, ma utilizzando la classe `.nav-pills`, si ottiene un menù a bottoni:

{% capture example %}
<ul class="nav nav-pills">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Classi "fill" e "justify"

Per forzare i contenuti dell'elemento `.nav` a distribuirsi in tutto lo spazio disponibile, si possono usare alcune classi di utilità.

Per occupare proporzionalmente tutto lo spazio a disposizione, si può usare `.nav-fill`. Con questa classe, tutto lo spazio orizzontale sarà riempito, ma non tutti gli elementi `nav-item` occuperanno la stessa larghezza.

{% capture example %}
<ul class="nav nav-pills nav-fill">
  <li class="nav-item"><a class="nav-link active" href="#">Link con molto testo Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link con molto testo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

Per ottenere elementi con la stessa larghezza, utilizzare invece `.nav-justified`. Tutto lo spazio orizzontale sarà distrbuito in modo uguale per ogni elemento della lista.

{% capture example %}
<ul class="nav nav-pills nav-justified">
  <li class="nav-item"><a class="nav-link active" href="#">Link con molto testo Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link con molto testo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}
