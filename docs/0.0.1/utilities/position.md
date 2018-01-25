---
layout: docs
title: Posizionamento
description: Classi per configurare la posizione di un elemento.
group: utilities
toc: true
---

## Valori comuni

Classi per il posizionamento, tra loro non sono presenti le varianti per gestire il responsive.

{% highlight html %}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{% endhighlight %}

## Posizione fissa in alto

Posiziona un elemento in alto al viewport. Assicurati di comprendere le ramificazioni della posizione fissa nel tuo progetto; potrebbe essere necessario aggiungere CSS addizionali. 

{% highlight html %}
<div class="fixed-top">...</div>
{% endhighlight %}

## Posizione fissa in basso

Posiziona un elemento in basso al viewport. Assicurati di comprendere le ramificazioni della posizione fissa nel tuo progetto; potrebbe essere necessario aggiungere CSS addizionali. 

{% highlight html %}
<div class="fixed-bottom">...</div>
{% endhighlight %}

## Sticky top

Posiziona un elemento in alto al viewport, ma solo dopo che nella pagina avviene uno scroll verticale. La classe `.sticky-top` usa la proprietà `position: sticky` che non è sopportata da tutti i browser.

**I browser IE11 e IE10 restituiranno `position: sticky` come `position: relative`.** Per questo motivo lo stile è racchiuso all'interno di una query `@supports` limitandone così l'uso ai soli browser che ne sopportino la proprietà correttamente.

{% highlight html %}
<div class="sticky-top">...</div>
{% endhighlight %}
