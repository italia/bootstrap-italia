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

Aggiungi facilmente le didascalie alle diapositive con l'elemento `.carousel-caption` all'interno di ogni `.carousel-item`. Possono essere facilmente nascosti su finestre più piccole, come mostrato di seguito, con [utilità di visualizzazione]({{ site.baseurl }}/docs/utilities/display/) opzionali. Vengono nascosti inizialmente con `.d-none` e riportarti su dispositivi di medie dimensioni con `.d-md-block`.

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

Usa gli attributi data per un semplice controllo della posizione del carousel. `data-slide` accetta le keyword `prev` o `next`, che cambiano la posizione della diapositiva rispetto alla sua posizione attuale. In alternativa, usa `data-slide-to` per passare un indice di diapositiva al carousel `data-slide-to="2"`, che sposta la posizione della diapositiva in un particolare indice che inizia con `0`.

L'attributo `data-ride="carousel"` viene usato per indicare che l'animazione del carousel parte al caricamento della pagina. **Non può essere utilizzato in combinazione con l'inizializzazione JavaScript (ridondante e non necessaria) dello stesso carosello.**

### Tramite JavaScript

Richiama il carousel manualmente con:

{% highlight js %}
$('.carousel').carousel()
{% endhighlight %}

### Opzioni

Le opzioni possono essere passate tramite attributi data o JavaScript. Per gli attributi data, aggiungi il nome dell'opzione a `data-`, come in `data-interval=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval</td>
      <td>number</td>
      <td>5000</td>
      <td>L'intervallo di tempo tra la successione automatica di un oggetto. Se falso, il carousel non si muoverà automaticamente.</td>      
    </tr>
    <tr>
      <td>keyboard</td>
      <td>boolean</td>
      <td>true</td>
      <td>Se il carousel deve reagire agli eventi da tastiera.</td>
    </tr>
    <tr>
      <td>pause</td>
      <td>string | boolean</td>
      <td>"hover"</td>
      <td><p>Se impostato su <code>"hover"</code>, ferma lo scorrimento del carousel sul <code>mouseenter</code> e lo riprende sul <code>mouseleave</code>. Se impostato su <code>false</code>, il passaggio del mouse sul carousel non lo fermerà.</p>
      <p>Sui dispositivi abilitati al touch, quando impostato su <code>"hover"</code>, lo scorrimento si fermerà su <code>touchend</code> (una volta che l'utente ha terminato di interagire con il carousel) per due intervalli, prima di riprendere automaticamente. Si noti che questo è in aggiunta al comportamento del mouse riportati sopra.</p></td>
    </tr>
    <tr>
      <td>ride</td>
      <td>string</td>
      <td>false</td>
      <td>Riproduce automaticamente il carousel dopo che l'utente ha eseguito manualmente il ciclo del primo elemento. Se "carousel", Riproduce automaticamente il carousel al caricamento.</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>boolean</td>
      <td>true</td>
      <td>Se il carousel deve andare in ciclo continuo o fermarsi.</td>
    </tr>
  </tbody>
</table>

### Metodi

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

#### `.carousel(options)`

Inizializza il carousel con l'opzione facoltativa `object` e inizia lo scorrimento tra gli elementi.

{% highlight js %}
$('.carousel').carousel({
  interval: 2000
})
{% endhighlight %}

#### `.carousel('cycle')`

Scorre gli elementi del carousel da sinistra a destra.

#### `.carousel('pause')`

Ferma lo scorrimentio degli elementi del carousel.

#### `.carousel(number)`

Fa scorrere il carosello su una particolare frame (Basato su 0, simile a un array). **Ritorna al chiamante prima che l'elemento di destinazione sia stato mostrato** (i.e. prima che l'evento `slid.bs.carousel` si verifichi).

#### `.carousel('prev')`

Scorre all'elemento precedente. **Ritorna al chiamante prima che l'elemento precedente sia stato mostrato** (i.e. prima che l'evento `slid.bs.carousel` si verifichi).

#### `.carousel('next')`

Scorre all'elemento successivo. **Ritorna al chiamante prima che l'elemento successivo sia stato mostrato** (i.e. prima che l'evento `slid.bs.carousel` si verifichi).

#### `.carousel('dispose')`

Distrugge un elemento del carousel.

### Eventi

La classe del carousel di Bootstrap espone due eventi per l'aggancio alla funzionalità del carousel. Entrambi gli eventi hanno le seguenti proprietà aggiuntive:

- `direction`: La direzione nella quale il carousel sta scorrendo (`"sinistra"` o `"destra"`).
- `relatedTarget`: L'elemento DOM che viene inserito in posizione come elemento attivo.
- `from`: L'indice dell'elemento corrente
- `to`: L'indice dell'elemento successivo

Tutti gli eventi del carousel sono attivati sul carousel stesso (i.e. su `<div class="carousel">`).

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo di Evento</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>slide.bs.carousel</td>
      <td>Questo evento si attiva immediatamente quando viene richiamato il metodo dell'istanza della <code>diapositiva</code>.</td>
    </tr>
    <tr>
      <td>slid.bs.carousel</td>
      <td>Questo evento si attiva quando il carousel ha completato la transizione della diapositiva.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})
{% endhighlight %}
