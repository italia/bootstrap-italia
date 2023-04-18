---
layout: docs
splide: true
title: Carousel
description: Un componente di presentazione per scorrere elementi, immagini o diapositive di testo.
group: componenti
toc: true
---

## Come funziona

Il carousel permette di scorrere una serie di contenuti ed è realizzato con trasformazioni CSS 3D e JavaScript. Può essere utilizzato con una serie di immagini, testo o codice personalizzato. Include anche il supporto per i controlli e gli indicatori precedente/successivo ed i dots di indicazione posizione.

Il carousel può contenere vari tipi di componenti, solitamente cards o immagini.

Il plugin utilizzato è [Splide](https://splidejs.com/).

## Implementazione

{% capture callout %}

#### Accessibilità

Splide segue le [indicazioni del W3C](https://www.w3.org/WAI/tutorials/carousels/) per l'implementazione di un [carousel accessibile](https://splidejs.com/guides/accessibility/).

Il plugin, attraverso l'opzione `i18n`, offre la possibilità di tradurre le `aria-label` utilizzate per gli elementi di interfaccia.  
Bootstrap Italia fornisce le label già tradotte in italiano come segue:

- prev: 'Slide precedente'
- next: 'Slide successiva'
- first: 'Vai alla prima slide'
- last: 'Vai all’ultima slide'
- slideX: 'Vai alla slide %s'
- pageX: 'Vai a pagina %s'
- play: 'Attiva autoplay'
- pause: 'Pausa autoplay'

Per tradurre le label in altre lingue è sufficiente utilizzare l'attributo opzionale `data-splide` sul div `it-carousel-wrapper splide` come nell'esempio seguente:

`<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide data-splide='{"i18n":{"slideX":"Go to slide %s","pageX":"Go to page %s"}}>`

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Esempi di Carousel con diversi contenuti

I wrapper esterni `it-carousel-wrapper` e `splide__track` ricevono le classi necessarie per la corretta visualizzazione dei contenuti.

### Titolo e Card semplici

Esempio di carousel con card semplici.

**Classi da applicare**:

- div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` che attiva la visualizzazione a 3 colonne su desktop.
- div **`splide__track`** : vengono aggiunte le classi `ps-lg-3 pe-lg-3` che implementano il padding richiesto dal breakpoint `lg` in su.

{% comment %}Example name: Titolo e card base{% endcomment %}
{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide>
  <div class="it-header-block">
    <div class="it-header-block-title">
      <h2 class="no_toc">Titolo del Carousel</h2>
    </div>
  </div>
  <div class="splide__track ps-lg-3 pe-lg-3">
    <ul class="splide__list it-carousel-all">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card "articolo"

**Classi da applicare**:

- div **`it-carousel-wrapper`**: viene aggiunta la classe `it-carousel-landscape-abstract-three-cols-arrow-visible` che attiva la visualizzazione a 3 colonne su desktop e la visualizzazione delle frecce di navigazione.

{% comment %}Example name: Card articolo{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper splide it-carousel-landscape-abstract-three-cols-arrow-visible" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Categoria</a>
                  <span class="data">10/12/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Categoria</a>
                  <span class="data">10/12/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Categoria</a>
                  <span class="data">10/12/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Categoria</a>
                  <span class="data">10/12/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card con immagine in evidenza

Contiene un'immagine associata ad una card "articolo".

**Classi da applicare**:

- div **`it-carousel-wrapper`**: viene aggiunta la classe `it-carousel-landscape-abstract` che attiva la visualizzazione a 2 colonne in Flex.

{% comment %}Example name: Card con immagine in evidenza{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract splide" data-bs-carousel-splide>
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <a href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
              </div>
            </div>
          </a>
          <div class="it-text-slider-wrapper-outside">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <div class="category-top">
                    <a class="category" href="#">Categoria</a>
                    <span class="data">10/12/{{'now' | date: "%Y"}}</span>
                  </div>
                  <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                    <svg class="icon">
                      <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <a href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
              </div>
            </div>
          </a>
          <div class="it-text-slider-wrapper-outside">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <div class="category-top">
                    <a class="category" href="#">Categoria</a>
                    <span class="data">10/12/{{'now' | date: "%Y"}}</span>
                  </div>
                  <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                    <svg class="icon">
                      <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <a href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
              </div>
            </div>
          </a>
          <div class="it-text-slider-wrapper-outside">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <div class="category-top">
                    <a class="category" href="#">Categoria</a>
                    <span class="data">10/12/{{'now' | date: "%Y"}}</span>
                  </div>
                  <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                    <svg class="icon">
                      <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card con immagine in alto

**Classi da applicare**:

- div **`it-carousel-wrapper`**: viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la visualizzazione a 3 colonne.

{% comment %}Example name: Card con immagine in alto{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body px-3 px-md-4">
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body px-3 px-md-4">
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body px-3 px-md-4">
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine4" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body px-3 px-md-4">
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine5" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body px-3 px-md-4">
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine6" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body px-3 px-md-4">
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="visually-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card speciali

Contiene [Card di tipo speciale]({{ site.baseurl }}/docs/componenti/card/#card-speciali).

**Classi da applicare**:

- div **`it-carousel-wrapper`**: viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la visualizzazione a 3 colonne.

{% comment %}Example name: Card speciali{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <a class="card card-img no-after special-card p-3 p-md-4" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text"></p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <a class="card card-img no-after special-card p-3 p-md-4" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine2" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text"></p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <a class="card card-img no-after special-card p-3 p-md-4" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine3" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text"></p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <a class="card card-img no-after special-card p-3 p-md-4" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine4" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text"></p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <a class="card card-img no-after special-card p-3 p-md-4" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine5" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text"></p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <a class="card card-img no-after special-card p-3 p-md-4" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine6" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/{{'now' | date: "%Y"}}</span>
                </div>
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text"></p>
              </div>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Fullscreen di immagini

**Classi da applicare**:

div **`it-carousel-wrapper`** :

- viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la formattazione colonnare
- viene aggiunta la classe `it-full-carousel` per la visualizzazione a tutto schermo (orizzontale)
- viene aggiunta la classe `it-big-img` per indicare che l'immagine contenuta è di tipo grande

{% comment %}Example name: Immagini{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-big-img splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine4" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine5" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine6" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Fullscreen di immagini di dimensioni standard

**Classi da applicare**:

div **`it-carousel-wrapper`** :

- viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la formattazione colonnare
- viene aggiunta la classe `it-full-carousel` per la visualizzazione a tutto schermo (orizzontale)
- viene aggiunta la classe `it-standard-image` per indicare che l'immagine contenuta è di tipo standard.

{% comment %}Example name: Immagini di dimensione standard{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-standard-image splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine4" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine5" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine6" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite JavaScript

È possibile abilitare un Carousel manualmente con:

```js
var elementList = [].slice.call(document.querySelectorAll('.splide'))
var masonryList = elementList.map(function (element) {
  return new bootstrap.CarouselBI(element)
})
```

### Metodi

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
      <td>Rimuove le funzionalità di CarouselBI</td>
    </tr>
    <tr>
      <td>getInstance</td>
      <td>Metodo statico che restituisce l'istanza CarouselBI associata ad un elemento del DOM. Esempio: <code>bootstrap.CarouselBI.getInstance(element)</code></td>
    </tr>
    <tr>
      <td>getOrCreateInstance</td>
      <td>Metodo statico che restituisce un'istanza CarouselBI associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.CarouselBI.getOrCreateInstance(element)</code></td>
    </tr>
  </tbody>
</table>
