---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Oggetti Media
description: Documentazione ed esempi degli oggetti media per la costruzione di componenti come commenti blog, tweets e similari.
---

## Esempio

L'[oggetto _"media"_](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) aiuta a costruire complessi e ripetitivi componenti dove alcuni media si posizionano accanto ai contenuti senza sovrapporsi.

Grazie a flexbox è necessario l'utilizzo di solo due classi: nel contenitore `.media` e nell'elemento contenuto `.media-body`. Padding e margin possono essere gestiti tramite le [utility di spaziatura]({{ site.baseurl }}/docs/organizzare-gli-spazi/spaziature/).

{% capture example %}
<div class="media">
  <img class="mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
  <div class="media-body">
    <h5 class="mt-0">Testata Media</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
##### Flexbug #12: Gli elementi inline non sono trattati come elementi flex.

IE10 e IE11 non eseguono il rendering di elementi inline di link o immagini (o `::before` e `::after` pseudo-elementi) come elementi flex. L'unica soluzione è impostare un valore `display` non inline (es.: `block`, `inline-block` o `flex`). Ti suggeriamo di usare `.d-flex`, una delle  [display utility]({{ site.baseurl }}/docs/organizzare-gli-spazi/display/), come soluzione.

**Fonte:** [Flexbugs su GitHub](https://github.com/philipwalton/flexbugs#12-inline-elements-are-not-treated-as-flex-items)
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Annidamento

Per annidare gli oggetti media posiziona il nuovo elemento `.media` all'interno del contenitore `.media-body`. In linea teorica gli oggetti media possono essere annidati all'infinito, me per una corretta visualizzazione grafica ti suggeriamo di non creare troppi livelli di annidamento.

{% capture example %}
<div class="media">
  <img class="mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
  <div class="media-body">
    <h5 class="mt-0">Testata media</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    <div class="media mt-3">
      <a class="pr-3" href="#">
        <img src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
      </a>
      <div class="media-body">
        <h5 class="mt-0">Testata media</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Allineamento

Il media presente dentro l'oggetto media può essere allineato grazie alle utility flexbox in alto (prefedinito), in mezzo o in basso del contenuto `.media-body`.

{% capture example %}
<div class="media">
  <img class="align-self-start mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
  <div class="media-body">
    <h5 class="mt-0">Media allineato in alto</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="media">
  <img class="align-self-center mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
  <div class="media-body">
    <h5 class="mt-0">Media allineato in mezzo</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="media">
  <img class="align-self-end mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
  <div class="media-body">
    <h5 class="mt-0">Media allineato in basso</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Ordinamento

Puoi modificare l'ordine del contenuto negli oggetti media utilizzando HTML stesso oppure aggiungendo alcuni CSS personalizzati per impostare la proprietà `order` (di un numero intero di tua scelta).

{% capture example %}
<div class="media">
  <div class="media-body">
    <h5 class="mt-0 mb-1">Media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img class="ml-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
</div>
{% endcapture %}{% include example.html content=example %}

## Elenco Media

Poiché l'oggetto media ha pochi requisiti strutturali, è anche possibile utilizzare queste classi sugli elementi HTML di elenco. Su `<ul>` o `<ol>` aggiungi `.list-unstyled` per rimuovere tutti gli stili di elenco predefiniti del browser, quindi applica `.media` ai tuoi `<li>`. Come sempre, utilizzare le utilità di spaziatura ovunque sia necessario per ottimizzare la visualizzazione grafica.

{% capture example %}
<ul class="list-unstyled">
  <li class="media">
    <img class="mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
    <div class="media-body">
      <h5 class="mt-0 mb-1">Elenco basato sull'oggetto media</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media my-4">
    <img class="mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
    <div class="media-body">
      <h5 class="mt-0 mb-1">Elenco basato sull'oggetto media</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
  <li class="media">
    <img class="mr-3" src="https://via.placeholder.com/64x64/ebebeb/808080/?text=Immagine" alt="testo alternativo">
    <div class="media-body">
      <h5 class="mt-0 mb-1">Elenco basato sull'oggetto media</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}
