---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Incorporare oggetti
description: Incorpora un video o una presentazione in modo che si adatti alla larghezza del contenitore creando un rapporto in proporzione su ogni dispositivo.
---

## Nota

L'effetto viene direttamente applicato agli elementi `<iframe>`, `<embed>`, `<video>` e `<object>`; in alternativa si può
usare la classe `.embed-responsive-item` per applicarne l'effetto ad altri elementi.

**Pro-Tip!** Non hai bisogno di includere l'attributo `frameborder="0"` nei tuoi `<iframe>`, questo viene automaticamente
sovrascritto.

## Esempio

Estendi ogni oggetto simile a un `<iframe>` aggiungendo al suo contenitore la classe `.embed-responsive` e le proporzioni
relative. La classe `.embed-responsive-item` non è strettamente necessaria, ma ne incoraggiamo l'utilizzo.

{% capture example %}
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" title="Video YouTube" src="https://www.youtube.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
</div>
{% endcapture %}{% include example.html content=example %}

## Proporzioni

Le proporzioni possono essere personalizzate con delle classi apposite.

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
