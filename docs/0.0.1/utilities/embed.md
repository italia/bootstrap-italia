---
layout: docs
title: Incorporare oggetti (Embeds)
description: Incorpora un video o una presentazione in modo che si adatti alla larghezza del contenitore creando un rapporto in proporzione su ogni dispositivo. (Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.)
group: utilities
toc: true
---

## Nota (About)

L'effetto viene direttamente applicato agli elementi `<iframe>`, `<embed>`, `<video>` e `<object>`; in alternativa si può usare la classe `.embed-responsive-item` per applicarne l'effetto ad altri elementi. (Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-responsive-item` when you want to match the styling for other attributes.)

**Pro-Tip!** Non hai bisogno di includere l'attributo `frameborder="0"` nei tuoi `<iframe>`, questo viene automaticamente sovrascritto. (**Pro-Tip!** You don't need to include `frameborder="0"` in your `<iframe>`s as we override that for you.)

## Esempio (Example)

Estendi ogni oggetto simile a un `<iframe>` aggiungendo al suo contenitore la classe `.embed-responsive` e le proporzioni relative. La classe `.embed-responsive-item` non è strettamente necessaria, ma ne incoraggiamo l'utilizzo. (Wrap any embed like an `<iframe>` in a parent element with `.embed-responsive` and an aspect ratio. The `.embed-responsive-item` isn't strictly required, but we encourage it.)

{% example html %}
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
{% endexample %}

## Proporzioni (Aspect ratios)

Le proporzioni possono essere personalizzate con delle classi apposite. (Aspect ratios can be customized with modifier classes.)

{% highlight html %}
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
{% endhighlight %}
