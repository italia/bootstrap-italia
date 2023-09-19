---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Immagini
description: Documentazione ed esempi per l'inserimento di immagini responsive, che quindi non diventano mai più grandi dei loro elementi genitore.
---

Le immagini in Bootstrap Italia sono rese responsive con la classe `.img-fluid`, così che vengano applicate all'immagine le proprietà `max-width: 100%;` e `height: auto;` in modo che sia ridimensionata attraverso l'elemento padre.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
  <img src="https://via.placeholder.com/120x120/ebebeb/808080/?text=Immagine" class="img-fluid" alt="Immagine responsive generica">
{% endcapture %}{% include example.html content=example %}

### Thumbnails

Oltre alle [utilità sull'arrotondamento dei bordi]({{ site.baseurl }}/docs/organizzare-gli-spazi/bordi/), puoi usare `.img-thumbnail` per aggiungere a un'immagine una cornice e un bordo arrotondato.

{% comment %}Example name: Thumbnail{% endcomment %}
{% capture example %}
  <img src="https://via.placeholder.com/120x120/ebebeb/808080/?text=Immagine" class="img-thumbnail" alt="Una generica immagine segnaposto quadrata con un bordo bianco attorno ad essa, che la rende simile a una foto scattata con una vecchia macchina fotografica istantanea">
{% endcapture %}{% include example.html content=example %}

### Allineamento

Puoi allineare le immagini con le [classi di supporto sul float]({{ site.baseurl }}/docs/organizzare-gli-spazi/float) o con le [classi sull'allineamento dei testi]({{ site.baseurl }}/docs/organizzare-i-contenuti/testo/). Le immagini a livello `block` possono essere centrate usando [la classe di utilità margin `.mx-auto`]({{ site.baseurl }}/docs/organizzare-gli-spazi/spaziature/).

{% comment %}Example name: Allineamenti start-end{% endcomment %}
{% capture example %}
  <img src="https://via.placeholder.com/120x120/ebebeb/808080/?text=Immagine" class="rounded float-start" alt="Un'immagine generica segnaposto con angoli arrotondati">
  <img src="https://via.placeholder.com/120x120/ebebeb/808080/?text=Immagine" class="rounded float-end" alt="Un'immagine generica segnaposto con angoli arrotondati">
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Allineamento centrato{% endcomment %}
{% capture example %}
  <img src="https://via.placeholder.com/120x120/ebebeb/808080/?text=Immagine" class="rounded mx-auto d-block" alt="Un'immagine generica segnaposto con angoli arrotondati">
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Allineamento centrato, alternativa{% endcomment %}
{% capture example %}
  <div class="text-center">
    <img src="https://via.placeholder.com/120x120/ebebeb/808080/?text=Immagine" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati">
  </div>
{% endcapture %}{% include example.html content=example %}

## Picture

Se stai usando l'elemento `<picture>` per specificare multipli elementi `<source>` per una specifica `<img>`, assicurati di aggiungere la classe `.img-*` al tag `<img>` e non al tag `<picture>`.

```html
​<picture>
  <source srcset="..." type="image/svg+xml" />
  <img src="..." alt="..." class="img-fluid img-thumbnail" />
</picture>
```

## Figure

Ogni qual volta sia necessario visualizzare un contenuto, ad esempio un'immagine, associandola ad una didascalia, è bene considerare l'utilizzo di `<figure>`.

Puoi usare le classi `.figure`, `.figure-img` e `.figure-caption` per fornire alcuni stili di base per gli elementi HTML5 `<figure>` e `<figcaption>`. Le immagini in `<figure>` non hanno dimensioni determinate, assicurati quindi di aggiungere la classe `.img-fluid` al tuo elemento `<img>` per renderlo responsive.

{% comment %}Example name: Figure{% endcomment %}
{% capture example %}
<figure class="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption">Una didascalia per l'immagine sopra.</figcaption>
</figure>
{% endcapture %}{% include example.html content=example %}

Allineare la didascalia di una figura è semplice con le [utilità di testo]({{ site.baseurl }}/docs/organizzare-i-contenuti/testo/).

{% comment %}Example name: Figure con didascalia allineata a destra{% endcomment %}
{% capture example %}
<figure class="figure">
  <img src="https://via.placeholder.com/280x120/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption text-end">Una didascalia per l'immagine sopra.</figcaption>
</figure>
{% endcapture %}{% include example.html content=example %}
