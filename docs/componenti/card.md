---
layout: docs
title: Card
description: Un contenitore di contenuti con molte opzioni e varianti.
group: componenti
toc: true
---

Le **card** sono contenitori flessibili ed estendibili. Costruite con flexbox, offrono un facile posizionamento nella griglia e si combinano bene con altri componenti.

Di default le card si estendono completamente al 100% del loro elemento contenitore.

## Card semplice
Negli esempi seguenti le card sono all'interno di una struttura colonnare di bootstrap.  
L'inizio della card vera e propria è segnalata dal commento `start card`
Esempio di card semplice con titolo e testo

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Card semplice su più colonne
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-4">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Articolo semplice
Esempio di card contenente categorizzazione e data, firma dell'articolo e link all'articolo.  
Per inserire la categorizzazione e/o la data di pubblicazione, usare l'elemento `.category-top` ed inserire al suo interno gli elementi come da esempio.
La categoria nell'esempio seguente è un link, ma potrebbe essere un testo semplice senza link, utilizzando il tag `<span>` invece del tag `<a>`

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <!--start card-->
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
            <span class="text">Leggi di più</span>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card con icona
Esempio di card contenente categorizzazione e icona.  
Per inserire la categorizzazione con relativa icona, usare l'elemento `.categoryicon-top` ed inserire al suo interno gli elementi come da esempio.

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <div class="categoryicon-top">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use>
            </svg>
            <span class="text">Category<br>Name</span>
          </div>
          <a href="#">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          </a>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


Un'altro esempio di card contenente intestazione (in questo caso numero di files
presenti) e icona: la struttura è uguale alla card precedente, per l'intestazione
è sufficiente usare l'elemento `.categoryicon-top` ed inserire al suo interno gli
elementi come da esempio.

Nell'esempio seguente sono stati inseriti un sottotitolo ed un link semplice che
segue il paragrafo. Per i sottotitoli utilizzare il tag `<h6>`, per i link
semplici utilizzare la classe `.simple-link`.

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card">
        <div class="card-body">
          <div class="categoryicon-top">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-copy"></use>
            </svg>
            <span class="text">(2) Files</span>
          </div>
          <a href="#">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
            <h6 class="card-subtitle">Subtitle</h6>
          </a>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a class="simple-link" href="#">Link</a>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card con ombreggiatura

Le card con ombreggiatura sono caratterizzate dalle classi:  

**`.card-space`:** utilizzata nel div più esterno (`card-wrapper`) serve a distanziare le card nella loro versione mobile.    
**`.card-bg`:** utilizzata nel div (`card`) serve a creare background e ombra della card.  

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <!--start card-->
    <div class="card-wrapper card-space">
      <div class="card card-bg">
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
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
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card grande

Le card con ombreggiatura grandi sono caratterizzate dalle classi:
  
**`.card-bg`:** utilizzata nel div (`card`) serve a creare background e ombra della card.  
**`.card-big`:** utilizzata nel div (`card`) serve a al dimensionamento dei suoi contenuti.

Nell'esempio seguente è stata inserita un icona grande prima del titolo della card,
il div contenente l'icona è di classe `.top-icon`.

#### Esempio 1:
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-8">
    <!--start card-->
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big">
        <div class="card-body">
          <div class="top-icon">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-card"></use>
            </svg>
          </div>
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
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
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

L'esempio seguente contiene una icona custom (non SVG ma CSS) ed una categorizzazione con icona SVG.
L'icona custom viene creata dal div `.flag-icon`.  
La categorizzazione dal div con classe `.etichetta`.  
Per creare un bordo di colore  primario a chiusura card, potete utilizzare la classe `.border-bottom-card` applicata al div `.card`

#### Esempio 2:
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-8">
    <!--start card-->
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big border-bottom-card">
        <div class="flag-icon"></div>
        <div class="etichetta">
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-settings"></use>
          </svg>
          <span>Sviluppo</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
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
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card grande con tag, data e call to action

Per inserire tags e/o data in testa alla card utilizzare l'elemento:`.head-tags`.  
Per inserire il pulsante a fondo card, utilizzare l'elemento: `.it-card-footer`.
Nell'esempio seguente sono state inseriti firma e pulsante nel footer della card.
Utilizzate la classe `.no-after` applicata al div `.card` se volete ridurre lo spazio inferiore della card.

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <!--start card-->
    <div class="card-wrapper card-space">
      <div class="card card-bg card-big no-after">
        <div class="card-body">
          <div class="head-tags">
            <a class="card-tag" href="#">Tag</a>
            <span class="data">10/10/2018</span>
          </div>
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="it-card-footer">
            <span class="card-signature">di Federico De Paolis</span>
            <button class="btn btn-outline-primary btn-sm">Action</button>
          </div>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card con immagine

La card con immagine è contraddistinta dalla classe `.card-img` applicata al div `.card`.

L'elemento immagine  è `.img-responsive-wrapper` per proporzioni dell'immagine pari a circa 31:19; se associato alla classe `.img-responsive-panoramic` l'ottimo è 31:9,5. Si consiglia in ogni caso un immagine orizzontale.  
Qualora le proporzioni non fossero esatte, l'immagine occuperà il massimo dell'altezza o della larghezza disponibile escludendo il resto dell'immagine e centrandola nell'elemento.

È anche possibile aggiungere un piccolo box con l'indicazione della data, per card di tipo _evento_.

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card card-img no-after">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <figure class="img-wrapper">
              <img src="https://via.placeholder.com/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="img title" alt="imagealt">
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
          <p class="card-text"></p><a class="read-more" href="#"><span class="text">Leggi di più</span>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
            </svg></a>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-6">
    <!--start card-->
    <div class="card-wrapper">
      <div class="card card-img no-after">
        <div class="img-responsive-wrapper">
          <div class="img-responsive img-responsive-panoramic">
            <figure class="img-wrapper">
              <img src="https://via.placeholder.com/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="img title" alt="imagealt">
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
          <p class="card-text"></p><a class="read-more" href="#"><span class="text">Leggi di più</span>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
            </svg></a>
        </div>
      </div>
    </div>
    <!--end card-->
  </div>
  <div class="col-12 col-lg-6">
      <!--start card-->
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <figure class="img-wrapper">
                <img src="https://via.placeholder.com/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="img title" alt="imagealt">
              </figure>
              <div class="card-calendar d-flex flex-column justify-content-center">
                <span class="card-date">31</span>
                <span class="card-day">dicembre</span>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p><a class="read-more" href="#"><span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg></a>
          </div>
        </div>
      </div>
      <!--end card-->
    </div>
    <div class="col-12 col-lg-6">
      <!--start card-->
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive img-responsive-panoramic">
              <figure class="img-wrapper">
                <img src="https://via.placeholder.com/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="img title" alt="imagealt">
              </figure>
              <div class="card-calendar d-flex flex-column justify-content-center">
                <span class="card-date">31</span>
                <span class="card-day">novembre</span>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
            <p class="card-text"></p><a class="read-more" href="#"><span class="text">Leggi di più</span>
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
              </svg></a>
          </div>
        </div>
      </div>
      <!--end card-->
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card speciali

La card speciale è contraddistinta dalla classe `.special-card` applicata al tag `a.card`.  
Tutta la card è un link al relativo contenuto.
Le proporzioni ottimali dell'immagine per questa card sono 17:21.

{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <!--start card-->
    <div class="card-wrapper">
      <a class="card card-img no-after special-card" href="#">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <figure class="img-wrapper">
              <img src="https://via.placeholder.com/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO" title="img title" alt="imagealt">
            </figure>
          </div>
        </div>
        <div class="card-body">
          <div class="head-tags"><span class="data">10/10/2018</span>
          </div>
          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
        </div>
      </a>
    </div>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card Teaser

Per creare Card con contenuti brevi o di _"anteprima"_ è sufficiente aggiungere all'elemento `.card-wrapper` una classe `.card-teaser-wrapper` e all'elemento `.card` una classe `.card-teaser`.

Come per ogni elemento, è possibile aggiungere le classi `rounded` o `shadow` per aggiungere bordi, effetti di arrotondamento o ombreggiatura.

{% capture example %}
<div class="card-wrapper card-teaser-wrapper">
  <!--start card-->
  <div class="card card-teaser">
    <div class="card-body">
      <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <!--end card-->
  <!--start card-->
  <div class="card card-teaser rounded shadow">
    <div class="card-body">
      <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <!--end card-->
  <!--start card-->
  <div class="card card-teaser rounded shadow">
    <svg class="icon">
      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-clip"></use>
    </svg>
    <div class="card-body">
      <h5 class="card-title">
        <a href="#">Lorem ipsum dolor sit amet</a>
      </h5>
      <div class="card-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
  </div>
  <!--end card-->
</div>
{% endcapture %}{% include example.html content=example %}
