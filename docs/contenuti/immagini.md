---
layout: docs
title: Immagini
description: Documentazione ed esempi per l'inserimento di immagini responsive (che quindi non diventano mai più grandi dei loro elementi genitore), aggiungendo loro stili non invasivi.

group: contenuti
toc: true
---

## Immagini responsive

Le immagini in Bootstrap Italia sono rese responsive con `.img-fluid`. `max-width: 100%;` e `height: auto;` vengono applicati all'immagine in modo che sia ridimensionata attraverso l'elemento padre.

<div class="bd-example">
  <img data-src="holder.js/100px250" class="img-fluid" alt="Immagine responsive generica">
</div>

{% highlight html %}
<img src="..." class="img-fluid" alt="Immagine responsive">
{% endhighlight %}

## Thumbnails di immagini

Oltre alle nostre [utilità sul border-radius]({{ site.baseurl }}/docs/utilities/borders/), puoi usare `.img-thumbnail` per dare a un'immagine un aspetto del bordo arrotondato di 1 pixel.

<div class="bd-example bd-example-images">
  <img data-src="holder.js/200x200" class="img-thumbnail" alt="Una generica immagine segnaposto quadrata con un bordo bianco attorno ad essa, che la rende simile a una foto scattata con una vecchia macchina fotografica istantanea">
</div>

{% highlight html %}
<img src="..." alt="..." class="img-thumbnail">
{% endhighlight %}

## Allineare le immagini

Puoi allineare le immagini con le [classi di supporto sul float]({{ site.baseurl }}/docs/utilities/float) o con le [classi sul text alignment]({{ site.baseurl }}/docs/utilities/text/#text-alignment). Le immagini a livello `block` possono essere centrate usando [la classe di utilità  margin `.mx-auto`]({{ site.baseurl }}/docs/utilities/spacing/#horizontal-centering).

<div class="bd-example bd-example-images">
  <img data-src="holder.js/200x200" class="rounded float-left" alt="Un'immagine generica segnaposto con angoli arrotondati">
  <img data-src="holder.js/200x200" class="rounded float-right" alt="Un'immagine generica segnaposto con angoli arrotondati">
</div>

{% highlight html %}
<img src="..." class="rounded float-left" alt="...">
<img src="..." class="rounded float-right" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  <img data-src="holder.js/200x200" class="rounded mx-auto d-block" alt="Un'immagine generica segnaposto con angoli arrotondati">
</div>

{% highlight html %}
<img src="..." class="rounded mx-auto d-block" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  <div class="text-center">
    <img data-src="holder.js/200x200" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati">
  </div>
</div>

{% highlight html %}
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
{% endhighlight %}


## Picture

Se stai usando l'elemento `<picture>` per specificare multipli elementi `<source>` per una specifica `<img>`, assicurati di aggiungere la classe `.img-*` al tag `<img>` e non al tag `<picture>`.

{% highlight html %}
​<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
{% endhighlight %}
