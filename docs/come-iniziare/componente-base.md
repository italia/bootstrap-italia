---
layout: docs
group: come-iniziare
toc: true
title: Componente Base
---

Secondo quanto descritto alla [pagina che spiega come modificare componenti]({{ site.baseurl }}/docs/come-iniziare/modificare-componenti/), di seguito è possibile analizzare il comportamento di un componente _base_ di esempio:

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<span class="componente-base" data-value="Test Componente">componente base</span>
{% endcapture %}{% include example.html content=example %}

## File utilizzati

I file sorgente di questo componente sono descritti di seguito.

### Documentazione

Il file `docs/come-iniziare/componente-base.md` è il codice `markdown` sorgente della pagina che si sta leggendo.

### Stile

Il file `src/scss/custom/_componente-base.scss` permette al componente di avere sfondo e padding personalizzati. Si può notare in questo file l'utilizzo di variabili definite all'interno della libreria Bootstrap {{ site.bootstrap_version }} o Bootstrap Italia.

### Comportamento dinamico

Il file `src/js/plugins/componente-base.js` abilita all'evento `click` un tracciamento del valore presente nell'attributo `data-value`. Per visualizzare il risultato aprire la `console` tra gli strumenti per sviluppatori presenti in tutti i browser. Questo file Javascript utilizza una stuttura dettata da una convenzione per la creazione di plugin di Bootstrap {{ site.bootstrap_version }}, che permette di avere più flessibilità nella gestione degli eventi ed esporre le Data-API per l'estensione del loro utilizzo e di esporre proprietà del componente stesso:

```js
$.fn.componenteBase.Constructor.VERSION
```

È possibile trovare maggiori informazioni sull'argomento alla [pagina sull'utilizzo di Javascript](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/javascript/) al sito di Bootstrap {{ site.bootstrap_version }}.
