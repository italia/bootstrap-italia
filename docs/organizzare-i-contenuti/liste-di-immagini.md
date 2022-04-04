---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Liste di immagini
description: La lista di immagini è un componente flessibile per la visualizzazione di serie di immagini sottoforma di griglia
---

## Elemento singolo

Di seguito gli esempi di elemento singolo della grid list:

- Immagine semplice
- Immagine con didascalia in basso
- Immagine con didascalia sovrapposta

Per utilizzare la didascalia sovrapposta è sufficiente aggiungere la classe **`.it-grid-item-overlay`** al div **`it-grid-item-wrapper`**.

{% capture example %}

<div class="row">
  <div class="col-12 col-lg-4">
<!--grid item 1-->
    <div class="it-grid-item-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
          </div>
        </div>
      </a>
    </div>
  </div>
<!--grid item 2-->
  <div class="col-12 col-lg-4">
    <div class="it-grid-item-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
          </div>
        </div>
        <span class="it-griditem-text-wrapper">
          <span class="it-griditem-text">Didascalia</span>
          <svg class="icon">
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
          </svg>
        </span>
      </a>
    </div>
  </div>
<!--grid item 3-->
  <div class="col-12 col-lg-4">
    <div class="it-grid-item-wrapper it-grid-item-overlay">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
          </div>
        </div>
        <span class="it-griditem-text-wrapper">
          <span class="it-griditem-text">Didascalia</span>
          <svg class="icon">
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Tipi di griglia

### Standard

La griglia utilizzata è una variante delle classi di Bootstrap, dove cambiano sostanzialmente i margini.  
Il div contenitore della griglia è **`.it-grid-list-wrapper`**.  
Al posto della classe **`.row`** di bootstrap viene utilizzata la custom class **`.grid-row`**

Di seguito l'esempio

{% capture example %}

<div class="it-grid-list-wrapper">
  <div class="grid-row">
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Standard con didascalie

Per la corretta formattazione degli spazi di questo tipo di griglia, occorre aggiungere la classe **`.it-image-label-grid`** al div **`.it-grid-list-wrapper`** se gli elementi al suo interno contengono una didascalia.

Di seguito l'esempio

{% capture example %}

<div class="it-grid-list-wrapper it-image-label-grid">
  <div class="grid-row">
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Proporzionale

La griglia "proporzionale" contiene elementi griglia con immagine e testo in overlay.  
Per la corretta formattazione degli spazi di questo tipo di griglia, occorre aggiungere la classe **`.it-quilted-grid`** al div **`.it-grid-list-wrapper`**.
La griglia utilizza le stesse classi di bootstrap (**`.col`** ).

I tipi di immagini utilizzabili sono sostanzialmente 2:

- standard
- orizzontale (come proporzione sono il doppio della larghezza rispetto all'immagine standard e di altezza uguale)

Per utilizzare l'immagine orizzontale, occorre aggiungere la classe **`.it-grid-item-double-w`** al div **`.it-grid-item-wrapper`** che contiene l'immagine.

Di seguito l'esempio

{% capture example %}

<div class="it-grid-list-wrapper it-quilted-grid">
  <div class="grid-row">
    <div class="col-12 col-md-6">
      <div class="it-grid-item-wrapper it-grid-item-overlay">
        <a href="#" class="">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="grid-row">
        <div class="col-6">
          <div class="it-grid-item-wrapper it-grid-item-overlay">
            <a href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <span class="it-griditem-text-wrapper">
                <span class="it-griditem-text">Didascalia</span>
                <svg class="icon">
                  <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="it-grid-item-wrapper it-grid-item-overlay">
            <a href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <span class="it-griditem-text-wrapper">
                <span class="it-griditem-text">Didascalia</span>
                <svg class="icon">
                  <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div class="col-12">
          <div class="it-grid-item-wrapper it-grid-item-overlay it-grid-item-double-w">
            <a href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <span class="it-griditem-text-wrapper">
                <span class="it-griditem-text">Didascalia</span>
                <svg class="icon">
                  <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Masonry

È possibile integrare [Masonry](https://masonry.desandro.com/) con la griglia di Bootstrap Italia.

Masonry non è incluso in Bootstrap Italia ma può essere aggiunto con l'inclusione del plugin js:

```html
<script src="_PATH_/masonry.pkgd.min.js"></script>
```

Aggiungendo `data-bs-toggle="masonry"` al contenitore `row`, verrà attivato l'effetto Masonry sulla griglia responsiva.

{% capture example %}

<div class="container-fluid">
  <div class="row it-masonry" data-bs-toggle="masonry">
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#" class="">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x700/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x600/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x400/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x600/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x400/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x600/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/400x400/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
            </div>
          </div>
          <span class="it-griditem-text-wrapper">
            <span class="it-griditem-text">Didascalia</span>
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
<script src="{{ site.baseurl }}/dist/js/vendor/masonry.pkgd.min.js"></script>
{% endcapture %}{% include example.html content=example %}

### Tramite JavaScript

Abilitarlo manualmente con:

```js
var elementList = [].slice.call(document.querySelectorAll('.it-masonry'))
var masonryList = elementList.map(function (element) {
  return new bootstrap.Masonry(element)
})
```

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dispose</td>
      <td>Rimuove le funzionalità Masonry</td>
    </tr>
    <tr>
      <td>getInstance</td>
      <td>Metodo statico che restituisce l'istanza Masonry associata ad un elememento del DOM. Esempio: <code>bootstrap.Masonry.getInstance(element)</code></td>
    </tr>
    <tr>
      <td>getOrCreateInstance</td>
      <td>Metodo statico che restituisce un'istanza Masonry associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.Masonry.getOrCreateInstance(element)</code></td>
    </tr>
  </tbody>
</table>
