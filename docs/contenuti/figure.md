---
layout: docs
title: Figure
description: Documentazione ed esempi per la visualizzazione di immagini e testo correlati con il componente figure.
group: contenuti
---

Ogni qual volta sia necessario visualizzare un contenuto, ad esempio un'immagine con una didascalia opzionale, è bene considerare l'utilizzo di `<figure>`.

Puoi usare le classi `.figure`, `.figure-img` e `.figure-caption` per fornire alcuni stili di base per gli elementi HTML5 `<figure>` e `<figcaption>`. Le immagini in figure non hanno determinate dimensioni, assicurati quindi di aggiungere la classe `.img-fluid` al tuo elemento `<img>` per renderlo responsive.

{% example html %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption">Una didascalia per l'immagine sopra.</figcaption>
</figure>
{% endexample %}

Puoi allineare la didascalia di una figura è semplice con le nostre [utilità di testo]({{ site.baseurl }}/docs/utilities/text/#text-alignment).

{% example html %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
  <figcaption class="figure-caption text-right">Una didascalia per l'immagine sopra.</figcaption>
</figure>
{% endexample %}
