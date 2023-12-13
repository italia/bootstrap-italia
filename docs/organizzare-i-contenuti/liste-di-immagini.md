---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Liste di immagini
description: La lista di immagini è un componente flessibile per la visualizzazione di serie di immagini sotto forma di griglia.
---

## Elemento singolo

Di seguito gli esempi di elemento singolo della lista di immagini:

- Immagine semplice
- Immagine con didascalia in basso
- Immagine con didascalia sovrapposta

Per utilizzare la didascalia sovrapposta è sufficiente aggiungere la classe `.it-grid-item-overlay` al div `.it-grid-item-wrapper`.

{% comment %}Example name: Varianti didascalia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
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
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
        </span>
      </a>
    </div>
  </div>
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
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
        </span>
      </a>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Tipi di griglia

### Standard

La griglia utilizzata è una variante delle classi di Bootstrap, con margini modificati.  
Il contenitore della griglia è `.it-grid-list-wrapper`. Al posto della classe `.row` di Bootstrap viene utilizzata la classe custom `.grid-row`.

{% comment %}Example name: Griglia standard{% endcomment %}
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

Per la corretta formattazione degli spazi di questo tipo di griglia, occorre aggiungere la classe `.it-image-label-grid` al div `.it-grid-list-wrapper`.

{% comment %}Example name: Griglia standard con didascalia{% endcomment %}
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Proporzionale

La griglia proporzionale contiene elementi griglia con immagine e testo in overlay.  
Per la corretta formattazione degli spazi di questo tipo di griglia occorre aggiungere la classe `.it-quilted-grid` al div `.it-grid-list-wrapper`.
La griglia utilizza le classi di Bootstrap `.col-` per realizzare il layout colonnare.

I tipi di immagini utilizzabili sono sostanzialmente 2:

- standard
- orizzontale (con larghezza doppia rispetto all'immagine standard e di altezza uguale)

Per utilizzare l'immagine orizzontale, occorre aggiungere la classe `.it-grid-item-double-w` al div `.it-grid-item-wrapper` che contiene l'immagine.

{% comment %}Example name: Griglia proporzionale{% endcomment %}
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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

Masonry è incluso in Bootstrap Italia.

Per un elenco di tutti i possibili parametri di configurazione consultare la [documentazione completa](https://masonry.desandro.com/).

Aggiungendo `data-bs-toggle="masonry"` al contenitore `row`, verrà attivato l'effetto Masonry sulla griglia responsiva.

{% comment %}Example name: Griglia Masonry{% endcomment %}
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
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
            <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Abilitare Masonry via JavaScript

È possibile abilitare Masonry manualmente utilizzando questo script:

```js
var elementList = [].slice.call(document.querySelectorAll('.it-masonry'))
var masonryList = elementList.map(function (element) {
  return new bootstrap.Masonry(element)
})
```

#### Elenco dei metodi disponibili

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
      <td>Metodo statico che restituisce l'istanza Masonry associata ad un elemento del DOM. Esempio: <code>bootstrap.Masonry.getInstance(element)</code></td>
    </tr>
    <tr>
      <td>getOrCreateInstance</td>
      <td>Metodo statico che restituisce un'istanza Masonry associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.Masonry.getOrCreateInstance(element)</code></td>
    </tr>
  </tbody>
</table>
