---
layout: docs
splide: true
title: Carousel
description: Un componente di presentazione per scorrere elementi, immagini o diapositive di testo, come un carousel.
group: componenti
toc: true
---

## Come funziona

Il carousel è una presentazione per scorrere una serie di contenuti, costruito con trasformazioni CSS 3D e JavaScript. Funziona con una serie di immagini, testo o codice personalizzato. Include anche il supporto per i controlli e gli indicatori precedente/successivo ed i dots di indicazione posizione.

Il carousel può contenere vari tipi di componenti, solitamente cards o immagini.

Il plugin utilizzato è [Splide](https://splidejs.com/).

## Implementazione

Splide non è incluso nel bundle di Bootstrap Italia, pertanto se si decidesse di usare il componente Carousel è necessario includere i file CSS e JS della [libreria](https://github.com/Splidejs/splide) all'interno del proprio progetto:

- linkare il file CSS `splide-core.min.css` nella head del progetto, **prima** del CSS di Bootstrap Italia.
- caricare il file JS `splide.min.js` nel blocco degli script a fondo pagina.


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

`<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-splide='{"i18n":{"slideX":"Go to slide %s","pageX":"Go to page %s"}}>`

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Esempi di Carousel con diversi contenuti

I wrapper esterni `it-carousel-wrapper` e `splide__track` ricevono le classi necessarie per la corretta visualizzazione dei contenuti.

### Titolo e Card semplici

Il seguente è un carousel con card semplici.

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` che attiva la visualizzazione a 3 colonne su desktop.

div **`splide__track`** : vengono aggiunte le classi `pl-lg-3 pr-lg-3` che implementano il padding richiesto dal breakpoint `lg` in su.

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" >
  <div class="it-header-block">
    <div class="it-header-block-title">
      <h2 class="no_toc">Titolo del Carousel</h2>
    </div>
  </div>
  <div class="splide__track pl-lg-3 pr-lg-3">
    <ul class="splide__list it-carousel-all">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <span class="text">Leggi di più <span class="sr-only">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <span class="text">Leggi di più <span class="sr-only">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <span class="text">Leggi di più <span class="sr-only">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <span class="text">Leggi di più <span class="sr-only">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <span class="text">Leggi di più <span class="sr-only">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` che attiva la visualizzazione a 3 colonne su desktop.

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Category</a>
                  <span class="data">10/12/2018</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Category</a>
                  <span class="data">10/12/2018</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Category</a>
                  <span class="data">10/12/2018</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
            <div class="card">
              <div class="card-body">
                <div class="category-top">
                  <a class="category" href="#">Category</a>
                  <span class="data">10/12/2018</span>
                </div>
                <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <span class="card-signature">di Federico De Paolis</span>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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

Contiene un immagine associata ad una card "articolo".

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract` che attiva la visualizzazione a 2 colonne in Flex.

{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract splide">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <a href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
              </div>
            </div>
          </a>
          <div class="it-text-slider-wrapper-outside">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <div class="category-top">
                    <a class="category" href="#">Category</a>
                    <span class="data">10/12/2018</span>
                  </div>
                  <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                    <svg class="icon">
                      <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
              </div>
            </div>
          </a>
          <div class="it-text-slider-wrapper-outside">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <div class="category-top">
                    <a class="category" href="#">Category</a>
                    <span class="data">10/12/2018</span>
                  </div>
                  <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                    <svg class="icon">
                      <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
              </div>
            </div>
          </a>
          <div class="it-text-slider-wrapper-outside">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <div class="category-top">
                    <a class="category" href="#">Category</a>
                    <span class="data">10/12/2018</span>
                  </div>
                  <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                    <svg class="icon">
                      <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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

Contiene card con immagine in alto

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la visualizzazione a 3 colonne.

{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
                  <svg class="icon">
                    <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la visualizzazione a 3 colonne.

{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <a class="card card-img no-after special-card" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/360x480/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/2018</span>
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
            <a class="card card-img no-after special-card" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/360x480/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/2018</span>
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
            <a class="card card-img no-after special-card" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/360x480/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/2018</span>
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
            <a class="card card-img no-after special-card" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/360x480/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/2018</span>
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
            <a class="card card-img no-after special-card" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/360x480/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/2018</span>
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
            <a class="card card-img no-after special-card" href="#">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/360x480/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="head-tags"><span class="data">10/10/2018</span>
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

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-big-img splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt"></div>
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

{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-standard-image splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
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
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt"></div>
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
