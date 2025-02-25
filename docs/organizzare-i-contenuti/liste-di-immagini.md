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

{% capture callout %}

#### Utilizzo delle icone

In caso di utilizzo delle icone si raccomanda di descriverne il senso ai lettori di schermo. Se sono solo decorative si può nasconderle con l'attributo `aria-hidden=true`.

{% endcapture %}{% include callout.html content=callout type="warning" %}

{% comment %}Example name: Varianti didascalia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <div class="it-grid-item-wrapper">
      <a href="#">
        <figure class="figure img-full w-100">
          <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
        </figure>
      </a>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <div class="it-grid-item-wrapper">
      <a href="#">
        <figure class="figure img-full w-100">
          <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
          <figcaption class="figure-caption it-griditem-text-wrapper">
            <span class="it-griditem-text">Testo didascalia</span>
            <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <div class="it-grid-item-wrapper it-grid-item-overlay">
      <a href="#">
        <figure class="figure img-full w-100 img-responsive-wrapper">
          <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
          <figcaption class="figure-caption it-griditem-text-wrapper">
            <span class="it-griditem-text">Testo didascalia</span>
            <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Tipi di griglia

### Standard

La griglia utilizzata è una variante delle classi di Bootstrap, con margini modificati.  
Il contenitore della griglia è `.it-grid-list-wrapper`. Al posto della classe `.row` di Bootstrap viene utilizzata la classe custom `.grid-row`.

{% capture callout %}

### Attenzione

In questo esempio, non essendo presente alcuna caption, utilizziamo i `<div>` al posto di `<figure>`.

{% endcapture %}{% include callout.html content=callout type="alert" %}

{% comment %}Example name: Griglia standard{% endcomment %}
{% capture example %}
<div class="it-grid-list-wrapper">
  <div class="grid-row">
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine"></div>
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
          <figure class="figure img-full w-100">
            <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
            <figcaption class="figure-caption it-griditem-text-wrapper">Testo didascalia 
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
            <figcaption class="figure-caption it-griditem-text-wrapper">Testo didascalia 
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
            <figcaption class="figure-caption it-griditem-text-wrapper">Testo didascalia 
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
            <figcaption class="figure-caption it-griditem-text-wrapper">Testo didascalia 
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
            <figcaption class="figure-caption it-griditem-text-wrapper">Testo didascalia 
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-6 col-lg-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
            <figcaption class="figure-caption it-griditem-text-wrapper">Testo didascalia 
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
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
        <a href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
                <figure class="img-wrapper">
                  <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
                  <figcaption class="figure-caption it-griditem-text-wrapper">
                    <span class="it-griditem-text">Testo didascalia</span>
                    <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
                  </figcaption>
                </figure>
            </div>
          </div>
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
                    <figure class="img-wrapper">
                      <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
                      <figcaption class="figure-caption it-griditem-text-wrapper">
                        <span class="it-griditem-text">Testo didascalia</span>
                        <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
                      </figcaption>
                    </figure>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="it-grid-item-wrapper it-grid-item-overlay">
            <a href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                    <figure class="img-wrapper">
                      <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
                      <figcaption class="figure-caption it-griditem-text-wrapper">
                        <span class="it-griditem-text">Testo didascalia</span>
                        <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
                      </figcaption>
                    </figure>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-12">
          <div class="it-grid-item-wrapper it-grid-item-overlay it-grid-item-double-w">
            <a href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                    <figure class="img-wrapper">
                      <img src="https://placehold.co/660x300/ebebeb/808080/?text=Immagine" class="rounded" alt="Un'immagine generica segnaposto con angoli arrotondati in una figura.">
                      <figcaption class="figure-caption it-griditem-text-wrapper">
                        <span class="it-griditem-text">Testo didascalia</span>
                        <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
                      </figcaption>
                    </figure>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Masonry

Aggiungendo `data-bs-toggle="masonry"` al contenitore `row`, 
verrà attivato l'effetto Masonry sulla griglia responsiva.

Gli attributi utilizzati nella sezione successiva possono essere passati tramite
`data-bs-{nome-attributo}` (ad esempio `data-bs-gutter="100"`).

{% comment %}Example name: Griglia Masonry{% endcomment %}
{% capture example %}
<div class="container-fluid">
  <div class="row it-masonry" data-bs-toggle="masonry">
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#" class="">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x300/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x700/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x600/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x400/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x600/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x400/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x600/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x500/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="it-grid-item-wrapper">
        <a href="#">
          <figure class="figure img-full w-100">
            <img class="figure-img" src="https://placehold.co/400x400/ebebeb/808080/?text=Immagine" alt="descrizione immagine">
            <figcaption class="figure-caption it-griditem-text-wrapper">
              <span class="it-griditem-text">Didascalia</span>
              <svg role="img" class="icon"><title>Significato icona</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

È possibile abilitare Masonry manualmente utilizzando questo script:

```js
import { Masonry } from 'bootstrap-italia';

const masonryElement = document.querySelector('#my-masonry');
const masonry = new Masonry(masonryElement, options);
```

#### Opzioni

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Predefinito</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>baseWidth</td>
        <td>number</td>
        <td>255</td>
        <td>Larghezza target degli elementi.</td>
      </tr>
      <tr>
        <td>gutter</td>
        <td>number</td>
        <td>10</td>
        <td>Larghezza/altezza dello spazio tra gli elementi. Usa gutterX/gutterY per impostare valori diversi.</td>
      </tr>
      <tr>
        <td>gutterX</td>
        <td>number</td>
        <td>null</td>
        <td>Larghezza dello spazio tra gli elementi. Serve gutterY per funzionare, fallback su "gutter".</td>
      </tr>
      <tr>
        <td>gutterY</td>
        <td>number</td>
        <td>null</td>
        <td>Altezza dello spazio tra gli elementi. Serve gutterX per funzionare, fallback su "gutter".</td>
      </tr>
      <tr>
        <td>minify</td>
        <td>boolean</td>
        <td>true</td>
        <td>Se MiniMasonry posiziona gli elementi nella colonna più corta o mantiene l'ordine esatto dell'elenco.</td>
      </tr>
      <tr>
        <td>surroundingGutter</td>
        <td>boolean</td>
        <td>true</td>
        <td>Imposta lo spazio a sinistra sulla prima colonna e lo spazio a destra sull'ultima.</td>
      </tr>
      <tr>
        <td>ultimateGutter</td>
        <td>number</td>
        <td>5</td>
        <td>Gutter applicato quando può essere visualizzata solo 1 colonna.</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>'ltr' o 'rtl'</td>
        <td>'ltr'</td>
        <td>Direzione di ordinamento, "ltr" o "rtl".</td>
      </tr>
      <tr>
        <td>wedge</td>
        <td>boolean</td>
        <td>false</td>
        <td>"false" inizierà l'ordinamento dal centro, "true" inizierà da sinistra o da destra in base al parametro "direction".</td>
      </tr>
    </tbody>
  </table>
</div>

#### Metodi

<div class="table-responsive">
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
        <td>layout</td>
        <td>Se l'elenco è cambiato, attiva un relayout del componente.</td>
      </tr>
    </tbody>
  </table>
</div>

## Breaking change

{% capture callout %}
Utilizzare i tag `<figure>` e `<figcaption>` per liste di immagini con didascalia.
{% endcapture %}{% include callout-breaking.html content=callout version="2.11.0" type="danger" %}
