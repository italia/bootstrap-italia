---
layout: docs
title: Swiper
description: Un componente di tipo carousel per la presentazione di elementi come immagini, video o diapositive di testo.
group: componenti
toc: true
---

{% capture callout %}
##### Plugin opzionale

Per ragioni di performance, dalla versione 1.5 di Bootstrap Italia il codice Javascript del componente Swiper è stato scorporato in un plugin esterno e deve essere incluso separatamente. Per ottenere le funzionalità del componente Swiper è necessario quindi includere anche la libreria dedicata di seguito alla libreria principale di Bootstrap Italia.

{% highlight html %}
<script src="./bootstrap-italia.bundle.min.js"></script>
<script src="./bootstrap-italia.plugin.swiper.min.js"></script>
{% endhighlight %}

{% endcapture %}{% include callout.html content=callout type="danger" %}

## Come funziona

Un componente di tipo *Carousel* presenta i contenuti dentro dei contenitori chiamati *slide* che tramite un'animazione grafica vengono fatti scorrere in orizzontale o in verticale. Il carousel è costruito con trasformazioni CSS 3D e un po' di JavaScript. Ogni slide può contenere un'immagine, un testo, un video, un altro componente della libreria, un codice personalizzato o una qualsiasi combinazione degli elementi appena citati.

Un componente di tipo carousel in genere include il supporto per i controlli, gli indicatori precedente/successivo, il paginatore e tanto altro.

Bootstrap Italia include la libreria [Swiper](https://swiperjs.com/) per realizzare il componente carousel.
Swiper è un moderno *touch slider* gratuito che utilizza l'accelerazione hardware per le transizioni. È progettato per l'uso in siti web responsive, app web, app native e ibride. Swiper è il componente slider predefinito in Ionic Framework. Si configura tramite dei parametri in json e non richiede quasi mai l'uso di CSS.

Swiper può contenere vari tipi di componenti, solitamente cards o immagini.

## Configurazione di base
Per utilizzare il componente è necessario scrivere una struttura html, un codice javascript con delle configurazioni json per inizializzare lo slider, raramente un codice CSS per personalizzare lo stile grafico.
{% capture example %}
    <!-- Slider main container -->
    <div class="swiper-container swiperBaseSigleSlide">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
                <img class="img-fluid" src="https://via.placeholder.com/1920x1080/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt">
            </div>
            <div class="swiper-slide">
                <img class="img-fluid" src="https://via.placeholder.com/1920x1080/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt">
            </div>
            <div class="swiper-slide">
                <img class="img-fluid" src="https://via.placeholder.com/1920x1080/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt">
            </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
{% endcapture %}{% include example.html content=example %}

Il codice javascript con la configurazione
{% highlight js %}
  var swiperBaseSigleSlide = new Swiper('.swiperBaseSigleSlide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
{% endhighlight %}

Swiper mette a disposizione delle API che permettono di personalizzare tutti gli aspetti del componente, come ad esempio: [i pulsanti di navigazione](https://swiperjs.com/api/#navigation), [la barra di navigazione](https://swiperjs.com/api/#scrollbar), [il paginatore](https://swiperjs.com/api/#pagination), [effetto parallax](https://swiperjs.com/api/#parallax), [responsive breackpoints](https://swiperjs.com/api/#parameters) (sia per dimensione schermo che per aspect ratio), [effetti](https://swiperjs.com/api/#fade-effect), [autoplay](https://swiperjs.com/api/#autoplay), [interazione con tastiera, mouse e touch](https://swiperjs.com/api/#keyboard), [accessibilità](https://swiperjs.com/api/#a11y), ecc.

Per una completa ed esaustiva panoramica sulle funzionalità si rimanda alle [API di swiper](https://swiperjs.com/api/) e alla pagina dei [contenuti demo di swiper](https://swiperjs.com/demos/).

## Esempi di Carousel con diversi contenuti

Basta inserire un qualsiasi componente della libreria dentro una slide (rappresentata dalla classe `swiper-slide`) e aggiungere il codice javascript con le impostazioni desiderate. In questo caso il codice CSS viene ereditato dai componenti caricati nelle slide.

### Titolo e Card semplici

Il seguente esempio è un carousel con card semplici. Nel codice javascript, tramite la configurazione del parametro `breakpoints`, viene impostato il numero di slide visualizzate in base alle dimensioni dello schermo dell'utente.

{% capture example %}
<div class="it-header-block">
    <div class="it-header-block-title">
      <h3 class="no_toc">Titolo del Carousel</h3>
    </div>
    <hr />
</div>
<!-- Slider main container -->
<div class="swiper-container swiperCarousel3Col">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">

        <!-- Slides -->
        <div class="swiper-slide">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div><!-- end card-body -->
            </div><!-- end card -->
          </div><!-- end card-wrapper -->
        </div><!-- end slide -->

        <div class="swiper-slide">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div><!-- end card-body -->
            </div><!-- end card -->
          </div><!-- end card-wrapper -->
        </div><!-- end slide -->

        <div class="swiper-slide">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div><!-- end card-body -->
            </div><!-- end card -->
          </div><!-- end card-wrapper -->
        </div><!-- end slide -->

        <div class="swiper-slide">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div><!-- end card-body -->
            </div><!-- end card -->
          </div><!-- end card-wrapper -->
        </div><!-- end slide -->

        <div class="swiper-slide">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div><!-- end card-body -->
            </div><!-- end card -->
          </div><!-- end card-wrapper -->
        </div><!-- end slide -->

        <div class="swiper-slide">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div><!-- end card-body -->
            </div><!-- end card -->
          </div><!-- end card-wrapper -->
        </div><!-- end slide -->

        <div class="swiper-slide">
          <div class="card-wrapper card-space">
            <div class="card card-bg">
              <div class="card-body">
                <h5 class="card-title">7. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="read-more" href="#">
                  <span class="text">Leggi di più</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-arrow-right"></use>
                  </svg>
                </a>
              </div><!-- end card-body -->
            </div><!-- end card -->
          </div><!-- end card-wrapper -->
        </div><!-- end slide -->
    </div><!-- end swiper wrapper -->

    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
</div>
{% endcapture %}{% include example.html content=example %}

Il codice javascript con la configurazione
{% highlight js %}
   var swiperCarousel3Col = new Swiper('.swiperCarousel3Col', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1921: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }
    });
{% endhighlight %}

### Card "articolo"
Come per il precedente. Basta aggiungere il componente dentro la slide, il codice javascript è identico al precedente.

{% capture example %}
<!-- Swiper -->
  <div class="swiper-container swiperCarousel3Col">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card-body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card-body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card-body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card-body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->
    </div><!-- end swiper wrapper -->

    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
{% endcapture %}{% include example.html content=example %}

### Card con immagine in evidenza

Contiene un'immagine associata ad una card "articolo".

**Classi da applicare**:

div **`swiper-slide`** : viene aggiunta la classe bootstrap `d-lg-flex` che attiva la visualizzazione a 2 colonne per il breackpoint lg.

Per una più ampia documentazione sulle classi flex responsive di bootstrap si rimanda alla guida [bootstrap/Utilities/Flex](https://getbootstrap.com/docs/4.5/utilities/flex/).

{% capture example %}
<!-- Swiper -->
  <div class="swiper-container swiperCarousel1Col">
    <div class="swiper-wrapper">

      <div class="swiper-slide d-lg-flex">
        <div>
            <img class="img-fluid" src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt">
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide d-lg-flex">
        <div>
            <img class="img-fluid" src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt">
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide d-lg-flex">
        <div>
            <img class="img-fluid" src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt">
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide d-lg-flex">
        <div>
            <img class="img-fluid" src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt">
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">21/07/2020</span>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->
    </div><!-- end swiper wrapper -->

    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
{% endcapture %}{% include example.html content=example %}

Il codice javascript con la configurazione
{% highlight js %}
    var swiperCarousel1Col = new Swiper('.swiperCarousel1Col', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
{% endhighlight %}

### Card con immagine in alto

Contiene card con immagine in alto, basta aggiungere il componente dentro la slide e configurare swiper tramite javascript.

{% capture example %}
<!-- Swiper -->
  <div class="swiper-container swiperCarousel3Col">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card card-img no-after">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card card-img no-after">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card card-img no-after">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card card-img no-after">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <div class="card card-img no-after">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/800x600/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
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
            </div><!-- end card body -->
          </div><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->
    </div><!-- end swiper wrapper -->

    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
{% endcapture %}{% include example.html content=example %}

Il codice javascript con la configurazione
{% highlight js %}
   var swiperCarousel3Col = new Swiper('.swiperCarousel3Col', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1921: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }
    });
{% endhighlight %}

### Card speciali

Contiene [Card di tipo speciale]({{ site.baseurl }}/docs/componenti/card/#card-speciali).
Come per i precedenti basta aggiungere il componente dentro la slide e configurare le opzioni tramite javascript.

{% capture example %}
<!-- Swiper -->
  <div class="swiper-container swiperCarousel4Col">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="card-wrapper">
          <a class="card card-img no-after special-card" href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="head-tags"><span class="data">21/07/2020</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text"></p>
            </div>
          </a><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <a class="card card-img no-after special-card" href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="head-tags"><span class="data">21/07/2020</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text"></p>
            </div>
          </a><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <a class="card card-img no-after special-card" href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="head-tags"><span class="data">21/07/2020</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text"></p>
            </div>
          </a><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <a class="card card-img no-after special-card" href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="head-tags"><span class="data">21/07/2020</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text"></p>
            </div>
          </a><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->

      <div class="swiper-slide">
        <div class="card-wrapper">
          <a class="card card-img no-after special-card" href="#">
            <div class="img-responsive-wrapper">
              <div class="img-responsive">
                <div class="img-wrapper"><img src="https://via.placeholder.com/360x480/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="head-tags"><span class="data">21/07/2020</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text"></p>
            </div>
          </a><!-- end card -->
        </div><!-- end card wrapper -->
      </div><!-- end slide -->
    </div><!-- end swiper wrapper -->

    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
{% endcapture %}{% include example.html content=example %}

Il codice javascript con la configurazione
{% highlight js %}
    var swiperCarousel4Col = new Swiper('.swiperCarousel4Col', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1921: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }
    });
{% endhighlight %}

### Fullscreen di immagini

Viene aggiunta l'immagine dentro la slide, alla slide si aggiunge la classe `w-auto` di [bootstrap](https://getbootstrap.com/docs/4.1/utilities/sizing/), swiper viene inizializzato con il parametro `slidesPerView: 'auto'`.

{% capture example %}
  <!-- Swiper -->
  <div class="swiper-container swiperCarouselAutoCol">
    <div class="swiper-wrapper">

      <div class="swiper-slide w-auto">
        <img src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide w-auto">
        <img src="https://via.placeholder.com/640x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide w-auto">
        <img src="https://via.placeholder.com/800x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide w-auto">
        <img src="https://via.placeholder.com/220x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide w-auto">
        <img src="https://via.placeholder.com/520x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide w-auto">
        <img src="https://via.placeholder.com/640x360/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt">
      </div>
    </div>

    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

{% endcapture %}{% include example.html content=example %}

Il codice javascript con la configurazione
{% highlight js %}
    var swiperCarouselAutoCol = new Swiper('.swiperCarouselAutoCol', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
{% endhighlight %}

#### Fullscreen di immagini di dimensioni standard
Come illustrato precedentemente per le card, l'unica differenza è che alle immagini viene applicata la classe `img-fluid` di [bootstrap](https://getbootstrap.com/docs/4.1/content/images/).

{% capture example %}
  <!-- Swiper -->
  <div class="swiper-container swiperCarousel3Col">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <img class="img-fluid" src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide">
        <img class="img-fluid" src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide">
        <img class="img-fluid" src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide">
        <img class="img-fluid" src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide">
        <img class="img-fluid" src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt">
      </div>

      <div class="swiper-slide">
        <img class="img-fluid" src="https://via.placeholder.com/480x360/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt">
      </div>
    </div>

    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
{% endcapture %}{% include example.html content=example %}

Il codice javascript con la configurazione
{% highlight js %}
    var swiperCarousel3Col = new Swiper('.swiperCarousel3Col', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1921: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }
    });
{% endhighlight %}


