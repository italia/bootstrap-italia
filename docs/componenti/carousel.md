---
layout: docs
title: Carousel
description: Un componente di presentazione per scorrere elementi, immagini o diapositive di testo, come un carousel.
group: componenti
toc: true
---

## Come funziona

Il carousel è una presentazione per scorrere una serie di contenuti, costruito con trasformazioni CSS 3D e un pò di JavaScript. Funziona con una serie di immagini, testo o codice personalizzato. Include anche il supporto per i controlli e gli indicatori precedente/successivo ed i dots di indicazione posizione.

Il plugin utilizzato è [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html).

Il carousel può contenere vari tipi di componenti, solitamente cards o immagini.

## Esempi di Carousel con diversi contenuti

I wrapper più esterni `it-carousel-wrapper` e `it-carousel-all owl-carousel` ricevono le classi utili alla visualizzazione corretta dei contenuti.

### Titolo e Card semplici

Il seguente è un carousel con card semplici.

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` che attiva la visualizzazione a 3 colonne su desktop.

div **`it-carousel-all owl-carousel`** : viene aggiunta la classe `it-card-bg` che indica che le card contenute in esso hanno background ed ombra.

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
  <div class="it-header-block">
    <div class="it-header-block-title">
      <h2 class="no_toc">Titolo del Carousel</h2>
    </div>
  </div>
  <div class="it-carousel-all owl-carousel it-card-bg">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card "articolo"

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` che attiva la visualizzazione a 3 colonne su desktop.

div **`it-carousel-all owl-carousel`** : nessuna classe aggiuntiva necessaria.

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
  <div class="it-carousel-all owl-carousel">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-body">
            <div class="category-top">
              <!-- category heading--><a class="category" href="#">Category</a>
              <!-- category data--><span class="data">10/12/2018</span>
            </div>
            <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span class="card-signature">di Federico De Paolis</span>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-body">
            <div class="category-top">
              <!-- category heading--><a class="category" href="#">Category</a>
              <!-- category data--><span class="data">10/12/2018</span>
            </div>
            <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span class="card-signature">di Federico De Paolis</span>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-body">
            <div class="category-top">
              <!-- category heading--><a class="category" href="#">Category</a>
              <!-- category data--><span class="data">10/12/2018</span>
            </div>
            <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span class="card-signature">di Federico De Paolis</span>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-body">
            <div class="category-top">
              <!-- category heading--><a class="category" href="#">Category</a>
              <!-- category data--><span class="data">10/12/2018</span>
            </div>
            <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span class="card-signature">di Federico De Paolis</span>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card con immagine in evidenza

Contiene un immagine associata ad una card "articolo"

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract` che attiva la visualizzazione a 2 colonne in  Flex.

div **`it-carousel-all owl-carousel`** : nessuna classe aggiuntiva necessaria.


{% capture example %}
 <div class="it-carousel-wrapper it-carousel-landscape-abstract">
  <div class="it-carousel-all owl-carousel">
    <div class="it-single-slide-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
          </div>
        </div>
      </a>
      <div class="it-text-slider-wrapper-outside">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
          </div>
        </div>
      </a>
      <div class="it-text-slider-wrapper-outside">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
          </div>
        </div>
      </a>
      <div class="it-text-slider-wrapper-outside">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
          </div>
        </div>
      </a>
      <div class="it-text-slider-wrapper-outside">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card con immagine in alto

Contiene card con immagine in alto

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la visualizzazione a 3 colonne.

div **`it-carousel-all owl-carousel`** : viene aggiunta la classe `it-img-card` che specifica il tipo di card contenuta.

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
  <div class="it-carousel-all owl-carousel it-img-card">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card speciali

Contiene [Card di tipo speciale]({{ site.baseurl }}/docs/componenti/card/#card-speciali).

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la visualizzazione a 3 colonne.

div **`it-carousel-all owl-carousel`** : viene aggiunta la classe `it-img-card` che specifica il tipo di card contenuta, `it-special-card` per indicare che la card contenuta è di tipo "special".

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
  <div class="it-carousel-all owl-carousel it-img-card it-special-card">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <a class="card card-img no-after special-card" href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <a class="card card-img no-after special-card" href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <a class="card card-img no-after special-card" href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <a class="card card-img no-after special-card" href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <a class="card card-img no-after special-card" href="#">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
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
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Fullscreen di immagini

**Classi da applicare**:

div **`it-carousel-wrapper`** :  
viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la formattazione colonnare.  
viene aggiunta la classe  `it-full-carousel` per la visualizzazione a tutto schermo (orizzontale)

div **`it-carousel-all owl-carousel`** :  
viene aggiunta la classe `it-img-card` che specifica il tipo di card  
viene aggiunta la classe `it-big-img` per indicare che l'immagine contenuta è di tipo grande.

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel">
  <div class="it-carousel-all owl-carousel it-img-card it-big-img">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Fullscreen di immagini di dimensioni standard

**Classi da applicare**:

div **`it-carousel-wrapper`** :  
viene aggiunta la classe `it-carousel-landscape-abstract-3` per la formattazione colonnare.  
viene aggiunta la classe  `it-full-carousel` per la visualizzazione a tutto schermo (orizzontale)

div **`it-carousel-all owl-carousel`** :  
viene aggiunta la classe `it-img-card` che specifica il tipo di card  
viene aggiunta la classe `it-standard-image` per indicare che l'immagine contenuta è di tipo standard.

{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-3 it-full-carousel">
  <div class="it-carousel-all owl-carousel it-img-card it-standard-image">
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

