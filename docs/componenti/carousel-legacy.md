---
layout: docs
owl: true
title: Carousel (versione legacy)
description: Un componente di presentazione per scorrere elementi, immagini o diapositive di testo, come un carousel.
group: componenti
toc: true
---

## Come funziona

Il carousel è una presentazione per scorrere una serie di contenuti, costruito con trasformazioni CSS 3D e JavaScript. Funziona con una serie di immagini, testo o codice personalizzato. Include anche il supporto per i controlli e gli indicatori precedente/successivo ed i dots di indicazione posizione.

Il carousel può contenere vari tipi di componenti, solitamente cards o immagini.

Il plugin utilizzato è [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html).

{% capture callout %}
Lo sviluppo di Owl Carousel è terminato nel 2018 e il plugin [non è più supportato](https://github.com/OwlCarousel2/OwlCarousel2/commit/4eedccac4ea061931162a86e3f268332c16a1ad0).  

Per questa ragione, oltre ad alcune mancanze legate all'accessibilità, rendiamo disponibile questa versione *legacy* del Carousel di Bootstrap Italia solo per evitare breaking changes e per garantire il pieno funzionamento su <strong>Internet Explorer 11.</strong>  

I più recenti plugin per carousel infatti non supportano questo browser ormai prossimo alla [End of Life](https://docs.microsoft.com/it-it/lifecycle/announcements/internet-explorer-11-end-of-support).  

La [nuova versione]({{ site.baseurl }}/docs/componenti/carousel/) del Carousel basata sul plugin [Splide](https://splidejs.com/) supporta in parte IE11, tranne per la funzione di drag. Se non è richiesta piena compatibilità con IE11 è consigliabile utilizzarla.
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Implementazione

Owl Carousel non è più incluso nel bundle di Bootstrap Italia, pertanto se si decidesse di usare il componente Carousel è necessario includere i file CSS e JS della [libreria](https://github.com/OwlCarousel2/OwlCarousel2) all'interno del proprio progetto:

- linkare il file CSS `owl.carousel.min.css` nella head del progetto, **prima** del CSS di Bootstrap Italia.
- caricare il file JS `owl.carousel.min.js` nel blocco degli script a fondo pagina.

{% capture callout %}

#### Accessibilità

Bootstrap Italia estende il plugin Owl Carousel per renderlo più accessibile.

Agli elementi del carousel non attivi (non visibili) viene aggiunto un attributo `aria-hidden="true"` e viene inibito il focus degli elementi `a` e `button` al loro interno.

Ai singoli elementi viene aggiunto un attributo `aria-label="elemento i di n"` dove i è l'indice dell'elemento ed n il numero totale di elementi.
Agli owl-dot viene aggiunto un attributo `aria-label="slide i di n del carousel"` dove i è l'indice della slide del carousel attiva ed n il numero totale di slide.

Questi valori vengono calcolati automaticamente e scritti nel DOM all'init del carousel.

Nel caso si volesse modificare il testo dgli `aria-label`, ad esempio per implementare la traduzione in un'altra lingua, è sufficiente aggiungere i seguenti attributi `data` al div `it-carousel-all owl-carousel`:

`data-el-desc="Slide {% raw %}{{i}}{% endraw %} di {% raw %}{{n}}{% endraw %}"`  
`data-dot-desc="Pagina {% raw %}{{i}}{% endraw %} di {% raw %}{{n}}{% endraw %} del carousel"`

La chiave {% raw %}{{i}}{% endraw %} verrà sostituita dal numero di elemento/slide.  
La chiave {% raw %}{{n}}{% endraw %} verrà sostituita dal totale di elementi/slide.


Il carousel sottostante contiene un esempio di utilizzo degli attributi `data`.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Esempi di Carousel con diversi contenuti

I wrapper più esterni `it-carousel-wrapper` e `it-carousel-all owl-carousel` ricevono le classi necessarie per la corretta visualizzazione dei contenuti.

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
  <div class="it-carousel-all owl-carousel it-card-bg" data-el-desc="Elemento {% raw %}{{i}}{% endraw %} di {% raw %}{{n}}{% endraw %}" data-dot-desc="Slide {% raw %}{{i}}{% endraw %} di {% raw %}{{n}}{% endraw %} del carousel">
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper card-space">
        <div class="card card-bg">
          <div class="card-body">
            <h5 class="card-title">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più <span class="sr-only">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <span class="text">Leggi di più <span class="sr-only">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <span class="text">Leggi di più <span class="sr-only">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
            <h5 class="card-title">5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più <span class="sr-only">5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
            <h5 class="card-title">6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più <span class="sr-only">6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
            <h5 class="card-title">7. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="read-more" href="#">
              <span class="text">Leggi di più <span class="sr-only">7. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <span class="text">Leggi di più <span class="sr-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span></span>
              <svg class="icon">
                <use href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
</div>
{% endcapture %}{% include example.html content=example %}

### Card con immagine in evidenza

Contiene un immagine associata ad una card "articolo"

**Classi da applicare**:

div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract` che attiva la visualizzazione a 2 colonne in Flex.

div **`it-carousel-all owl-carousel`** : nessuna classe aggiuntiva necessaria.

{% capture example %}

 <div class="it-carousel-wrapper it-carousel-landscape-abstract">
  <div class="it-carousel-all owl-carousel">
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
                <!-- category heading--><a class="category" href="#">Category</a>
                <!-- category data--><span class="data">10/12/2018</span>
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
    <div class="it-single-slide-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
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
    <div class="it-single-slide-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
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
    <div class="it-single-slide-wrapper">
      <a href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
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
    <div class="it-single-slide-wrapper">
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p>
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
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Fullscreen di immagini

**Classi da applicare**:

div **`it-carousel-wrapper`** :  
viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la formattazione colonnare.  

div **`it-carousel-all owl-carousel`** :  
viene aggiunta la classe `it-img-card` che specifica il tipo di card  
viene aggiunta la classe `it-big-img` per indicare che l'immagine contenuta è di tipo grande.

{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
  <div class="it-carousel-all owl-carousel it-img-card it-big-img">
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
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Fullscreen di immagini di dimensioni standard

**Classi da applicare**:

div **`it-carousel-wrapper`** :  
viene aggiunta la classe `it-carousel-landscape-abstract-3` per la formattazione colonnare.  
viene aggiunta la classe `it-full-carousel` per la visualizzazione a tutto schermo (orizzontale)

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
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="img title" alt="imagealt"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="img title" alt="imagealt"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="img title" alt="imagealt"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="img title" alt="imagealt"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine5" title="img title" alt="imagealt"></div>
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
              <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine6" title="img title" alt="imagealt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
