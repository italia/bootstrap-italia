---
layout: docs
title: Carousel
description: Un componente di presentazione per scorrere elementi, immagini o diapositive di testo, come un carousel.
group: componenti
toc: true
---

## Come funziona

Il carousel è una presentazione per scorrere una serie di contenuti, costruito con trasformazioni CSS 3D e un pò di JavaScript. Funziona con una serie di immagini, testo o codice personalizzato. Include anche il supporto per i controlli e gli indicatori precedente/successivo.

Nei browsers dove l' [API di visibilità della pagina](https://www.w3.org/TR/page-visibility/) è supportata, il carousel eviterà di scorrere quando la pagina web non è visibile all'utente (come ad esempio quando la scheda del browser non è attiva, la finestra del browser è ridotta a icona, ecc.).

Tieni presente che i carousel nidificati non sono supportati e che i carousel generalmente non sono conformi agli standard di accessibilità.

Infine, se stai costruendo il JavaScript dal sorgente, è [richiesto `util.js`]({{ site.baseurl }}/docs/come-iniziare/javascript/#util).

## Esempio

I carousel non normalizzano automaticamente le dimensioni della diapositiva. Pertanto, potrebbe essere necessario utilizzare utilità aggiuntive o stili personalizzati per ridimensionare il contenuto in modo appropriato. Mentre i carousel supportano i controlli e gli indicatori precedente/successivo, questi non sono esplicitamente richiesti. Aggiungi e personalizza come ritieni opportuno.

Assicurati di impostare un unico id su `.carousel` per i controlli opzionali, specialmente se stai usando più di un carousel nella pagina.

### Solo diapositive

Questo è un carousel con sole diapositive. Nota la presenza di `.d-block` e di `.img-fluid` sulle immagini del carousel per impedire l'allineamento dell'immagine predefinito del browser.

{% example html %}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="Prima diapositiva">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Seconda diapositiva">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Terza diapositiva">
    </div>
  </div>
</div>
{% endexample %}

### Con i controlli

Aggiungere i controlli precedente e successivo:

{% example html %}
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="Prima diapositiva">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Seconda diapositiva">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Terza diapositiva">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Precedente</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Successivo</span>
  </a>
</div>
{% endexample %}

### Con gli indicatori

È possibile anche aggiungere gli indicatori al carousel, anche a fianco dei controlli.

{% example html %}
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="Prima diapositiva">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Seconda diapositiva">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Terza diapositiva">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Precedente</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Successivo</span>
  </a>
</div>
{% endexample %}

{% callout warning %}
##### È richiesto un elemento attivo iniziale

È necessario aggiungere la classe `.active` ad una delle diapositive. Altrimenti il carousel non sarà visibile.
{% endcallout %}

### Con le didascalie

Aggiungi facilmente le didascalie alle diapositive con l'elemento `.carousel-caption` all'interno di ogni `.carousel-item`. They can be easily hidden on smaller viewports, as shown below, with optional [display utilities]({{ site.baseurl }}/docs/utilities/display/). We hide them initially with `.d-none` and bring them back on medium-sized devices with `.d-md-block`.

<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="Prima diapositiva">
        <div class="carousel-caption d-none d-md-block">
          <h5>Titolo prima diapositiva</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Seconda diapositiva">
        <div class="carousel-caption d-none d-md-block">
          <h5>Titolo seconda diapositiva</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Terza diapositiva">
        <div class="carousel-caption d-none d-md-block">
          <h5>Titolo terza diapositiva</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Precedente</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Successivo</span>
    </a>
  </div>
</div>

{% highlight html %}
<div class="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
{% endhighlight %}

## Modo d'uso

### Tramite attributi data

Usa gli attributi data per un semplice controllo della posizione del carousel. `data-slide` accetta le keyword `prev` o `next`, che cambiano la posizione della diapositiva rispetto alla sua posizione attuale. In alternativa, usa `data-slide-to` to pass a raw slide index to the carousel `data-slide-to="2"`, which shifts the slide position to a particular index beginning with `0`.

The `data-ride="carousel"` attribute is used to mark a carousel as animating starting at page load. **It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.**

### Via JavaScript

Call carousel manually with:

{% highlight js %}
$('.carousel').carousel()
{% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval</td>
      <td>number</td>
      <td>5000</td>
      <td>The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.</td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether the carousel should react to keyboard events.</td>
    </tr>
    <tr>
      <td>pause</td>
      <td>string | boolean</td>
      <td>"hover"</td>
      <td><p>If set to <code>"hover"</code>, pauses the cycling of the carousel on <code>mouseenter</code> and resumes the cycling of the carousel on <code>mouseleave</code>. If set to <code>false</code>, hovering over the carousel won't pause it.</p>
      <p>On touch-enabled devices, when set to <code>"hover"</code>, cycling will pause on <code>touchend</code> (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.</p></td>
    </tr>
    <tr>
      <td>ride</td>
      <td>string</td>
      <td>false</td>
      <td>Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether the carousel should cycle continuously or have hard stops.</td>
    </tr>
  </tbody>
</table>

### Methods

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

#### `.carousel(options)`

Initializes the carousel with an optional options `object` and starts cycling through items.

{% highlight js %}
$('.carousel').carousel({
  interval: 2000
})
{% endhighlight %}

#### `.carousel('cycle')`

Cycles through the carousel items from left to right.

#### `.carousel('pause')`

Stops the carousel from cycling through items.

#### `.carousel(number)`

Cycles the carousel to a particular frame (0 based, similar to an array). **Returns to the caller before the target item has been shown** (i.e. before the `slid.bs.carousel` event occurs).

#### `.carousel('prev')`

Cycles to the previous item. **Returns to the caller before the previous item has been shown** (i.e. before the `slid.bs.carousel` event occurs).

#### `.carousel('next')`

Cycles to the next item. **Returns to the caller before the next item has been shown** (i.e. before the `slid.bs.carousel` event occurs).

#### `.carousel('dispose')`

Destroys an element's carousel.

### Events

Bootstrap's carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:

- `direction`: The direction in which the carousel is sliding (either `"left"` or `"right"`).
- `relatedTarget`: The DOM element that is being slid into place as the active item.
- `from`: The index of the current item
- `to`: The index of the next item

All carousel events are fired at the carousel itself (i.e. at the `<div class="carousel">`).

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>slide.bs.carousel</td>
      <td>This event fires immediately when the <code>slide</code> instance method is invoked.</td>
    </tr>
    <tr>
      <td>slid.bs.carousel</td>
      <td>This event is fired when the carousel has completed its slide transition.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})
{% endhighlight %}
