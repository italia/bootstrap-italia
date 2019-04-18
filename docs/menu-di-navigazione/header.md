---
layout: docs
title: Header
description: Documentazione ed esempi per la creazione di una testata di navigazione.
group: menu-di-navigazione
toc: true
---

<style>
  /* Style override for Documentation purposes */
 .bd-example {
   background-color: #F7F7F9;
 }
</style>

L'header di un sito della Pubblica Amministrazione è solitamente composto di 3 elementi principali:

* Un cosiddetto **"slim header"**, una sottile fascia dello stesso colore o, preferibilmente, di colore lievemente più scuro rispetto al tema principale del sito, che mostra alcuni link funzionali con impatto globale o esterno al sito stesso.
* Una parte centrale che identifica in modo chiaro il sito attraverso logo, testo e social, e può contenere un link per effettuare ricerche sul sito.
* Una parte dedicata alla navigazione, visibile su schermi di grandi dimensioni ed accessibile attraverso il classico bottone di tipo "burger menu"
  (<svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-burger"></use></svg>) per dispositivi mobili.

## Slim header

Lo "slim header" header mostra un'intestazione, solitamente con riferimento all'ente di appartenenza del progetto o riferimenti utili, oltre ad un eventuale menu per il cambio lingua e l'accesso ad area riservata.
Il **cambio lingua** è gestito con il componente [**dropdown**]({{ site.baseurl }}/docs/componenti/dropdown/). 


{% capture example %}
<div class="it-header-slim-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza/Owner</a>
          <div class="nav-mobile">
            <nav>
              <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu1" role="button" aria-expanded="false" aria-controls="menu1">
                <span>Ente appartenenza/Owner</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="link-list-wrapper collapse" id="menu1">
                <ul class="link-list">
                  <li><a href="#">Link 1</a></li>
                  <li><a class="active" href="#">Link 2 Active</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="header-slim-right-zone">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                <span>Ita</span>
                <svg class="icon d-none d-lg-block">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>ITA</span></a></li>
                        <li><a class="list-item" href="#"><span>ENG</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="it-access-top-wrapper">
              <button class="btn btn-primary btn-sm" href="#" type="button">Accedi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione chiara

Per cambiare tema all'header slim è sufficiente aggiungere la classe `theme-light` al tag `<div class="it-header-slim-wrapper">`


{% capture example %}
<div class="it-header-slim-wrapper theme-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza/Owner</a>
          <div class="nav-mobile">
            <nav>
              <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu2" role="button" aria-expanded="false" aria-controls="menu2">
                <span>Ente appartenenza/Owner</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="link-list-wrapper collapse" id="menu2">
                <ul class="link-list">
                  <li><a href="#">Link 1</a></li>
                  <li><a class="active" href="#">Link 2 Active</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="header-slim-right-zone">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                <span>ITA</span>
                <svg class="icon d-none d-lg-block">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>ITA</span></a></li>
                        <li><a class="list-item" href="#"><span>ENG</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="it-access-top-wrapper">
              <button class="btn btn-primary btn-sm" href="#" type="button">Accedi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Header Centrale

**Header centrale**, per mostrare il logo dell'ente e la sua descrizione, dei link aggiuntivi ai social media, l'accesso al motore di ricerca, se presente.  

{% capture example %}
<div class="it-header-center-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
              </svg>
              <div class="it-brand-text">
                <h2 class="no_toc">Lorem Ipsum Lorem Ipsum</h2>
                <h3 class="no_toc d-none d-md-block">Inserire qui la tag line</h3>
              </div>
            </a>
          </div>
          <div class="it-right-zone">
            <div class="it-socials d-none d-md-flex">
              <span>Seguici su</span>
              <ul>
                <li>
                  <a href="#" aria-label="Facebook" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione stretta

Per utilizzare la versione più stretta dell'header centrale è sufficiente aggiungere la classe `it-small-header` al tag `<div class="it-header-center-wrapper">`

{% capture example %}
<div class="it-header-center-wrapper it-small-header">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
              </svg>
              <div class="it-brand-text">
                <h2 class="no_toc">Lorem Ipsum Lorem Ipsum</h2>
                <h3 class="no_toc d-none d-md-block">Inserire qui la tag line</h3>
              </div>
            </a>
          </div>
          <div class="it-right-zone">
            <div class="it-socials d-none d-md-flex">
              <span>Seguici su</span>
              <ul>
                <li>
                  <a href="#" aria-label="Facebook" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use>
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

### Versione chiara

Per cambiare tema all'header slim è sufficiente aggiungere la classe `theme-light` al tag `<div class="it-header-center-wrapper">`

{% capture example %}
<div class="it-header-center-wrapper theme-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon">
                <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
              </svg>
              <div class="it-brand-text">
                <h2 class="no_toc">Lorem Ipsum Lorem Ipsum</h2>
                <h3 class="no_toc d-none d-md-block">Inserire qui la tag line</h3>
              </div>
            </a>
          </div>
          <div class="it-right-zone">
            <div class="it-socials d-none d-md-flex">
              <span>Seguici su</span>
              <ul>
                <li>
                  <a href="#" aria-label="Facebook" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use>
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

## Header Nav

**Header Nav**, per elencare le voci di navigazione, siano esse semplici link, [menu a tendina]({{ site.baseurl }}/docs/componenti/dropdown/) oppure un [Megamenu]({{ site.baseurl }}/docs/menu-di-navigazione/megamenu/) a tutta larghezza.

{% capture example %}
<div class="it-header-navbar-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav1">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav1" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li>
                          <h3 class="no_toc" id="heading-es-1">Heading</h3>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 1</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 2</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="list-item" href="#"><span>Link list 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown megamenu">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Megamenu Label</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="row">
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 1</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 2</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 3</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versioni disponibili

I'Header Nav ha due versioni, una chiara ("light") e una scura ("dark"). Lo stile di default ha differenti caratteristiche colore a seconda della versione desktop e mobile:

* Su **Desktop** lo stile di default ha un **background di colore primario e link bianchi**. Gli elementi [Dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) e [Megamenu]({{ site.baseurl }}/docs/componenti/dropdown/) hanno background bianco, testi neri e link di colore primario.
* Su **Mobile** lo stile di default ha un **background bianco e testi e link di colore primario**.

Per modificare la versione dell'Header Nav è sufficiente aggiungere le seguenti classi al tag `<nav class="it-header-navbar-wrapper">`:

* La classe **`.theme-dark-mobile`** modifica unicamente la versione mobile del Nav impostando il background di colore primario, testi e link bianchi.
* La classe **`.theme-light-desktop`** imposta invece un background bianco, testi e links di colore primario. Gli elementi [Dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) e [Megamenu]({{ site.baseurl }}/docs/componenti/dropdown/) assumono background di colore primario, testi e link bianchi. (modifica unicamente la versione desktop del Nav).

#### Header Nav standard

{% capture example %}
<div class="it-header-navbar-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav0" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav0">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav0" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li>
                          <h3 class="no_toc" id="heading-es-2">Heading</h3>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 1</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 2</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="list-item" href="#"><span>Link list 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown megamenu">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Megamenu Label</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="row">
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 1</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 2</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 3</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Header Nav mobile scura

{% capture example %}
<div class="it-header-navbar-wrapper theme-dark-mobile">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav2" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav2">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav2" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li>
                          <h3 class="no_toc" id="heading-es-3">Heading</h3>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 1</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 2</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="list-item" href="#"><span>Link list 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown megamenu">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Megamenu Label</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="row">
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 1</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 2</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 3</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Header Nav desktop chiara

{% capture example %}
<div class="it-header-navbar-wrapper theme-light-desk">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav3" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav3">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav3" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li>
                          <h3 class="no_toc" id="heading-es-4">Heading</h3>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 1</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 2</span></a></li>
                        <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="list-item" href="#"><span>Link list 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown megamenu">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Megamenu Label</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div class="dropdown-menu">
                    <div class="row">
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 1</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 2</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc">Heading 3</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Header Completa

{% capture example %}
<div class="it-header-wrapper">
  <div class="it-header-slim-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza/Owner</a>
            <div class="nav-mobile">
              <nav>
                <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu4" role="button" aria-expanded="false" aria-controls="menu4">
                  <span>Ente appartenenza/Owner</span>
                  <svg class="icon">
                    <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="link-list-wrapper collapse" id="menu4">
                  <ul class="link-list">
                    <li><a href="#">Link 1</a></li>
                    <li><a class="active" href="#">Link 2 Active</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="header-slim-right-zone">
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                  <span>ITA</span>
                  <svg class="icon d-none d-lg-block">
                    <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="col-12">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li><a class="list-item" href="#"><span>ITA</span></a></li>
                          <li><a class="list-item" href="#"><span>ENG</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="it-access-top-wrapper">
                <button class="btn btn-primary btn-sm" href="#" type="button">Accedi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="it-nav-wrapper">
    <div class="it-header-center-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="it-header-center-content-wrapper">
              <div class="it-brand-wrapper">
                <a href="#">
                  <svg class="icon">
                    <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
                  </svg>
                  <div class="it-brand-text">
                    <h2 class="no_toc">Lorem Ipsum Lorem Ipsum</h2>
                    <h3 class="no_toc d-none d-md-block">Inserire qui la tag line</h3>
                  </div>
                </a>
              </div>
              <div class="it-right-zone">
                <div class="it-socials d-none d-md-flex">
                  <span>Seguici su</span>
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook" target="_blank">
                        <svg class="icon">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-facebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Github" target="_blank">
                        <svg class="icon">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter" target="_blank">
                        <svg class="icon">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-twitter"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="it-search-wrapper">
                  <span class="d-none d-md-block">Cerca</span>
                  <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-header-navbar-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!--start nav-->
            <nav class="navbar navbar-expand-lg has-megamenu">
              <button class="custom-navbar-toggler" type="button" aria-controls="nav10" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav10">
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-burger"></use>
                </svg>
              </button>
              <div class="navbar-collapsable" id="nav10" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div sr-only">
                  <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active"><a class="nav-link active" href="#"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#"><span>link 2 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>link 3 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>link 4</span></a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span>Dropdown item</span>
                        <svg class="icon icon-xs">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                        </svg>
                      </a>
                      <div class="dropdown-menu">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc" id="heading-es-5">Heading</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1</span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2</span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                            <li><span class="divider"></span></li>
                            <li><a class="list-item" href="#"><span>Link list 4</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item dropdown megamenu">
                      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span>Megamenu Label</span>
                        <svg class="icon icon-xs">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                        </svg>
                      </a>
                      <div class="dropdown-menu">
                        <div class="row">
                          <div class="col-12 col-lg-4">
                            <div class="link-list-wrapper">
                              <ul class="link-list">
                                <li>
                                  <h3 class="no_toc">Heading 1</h3>
                                </li>
                                <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-12 col-lg-4">
                            <div class="link-list-wrapper">
                              <ul class="link-list">
                                <li>
                                  <h3 class="no_toc">Heading 2</h3>
                                </li>
                                <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-12 col-lg-4">
                            <div class="link-list-wrapper">
                              <ul class="link-list">
                                <li>
                                  <h3 class="no_toc">Heading 3</h3>
                                </li>
                                <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione chiara

Nella versione light è consigliabile aggiungere la classe `it-shadow` al tag `<div class="it-header-wrapper">`.  
Verrà creata un ombra per enfatizzarlo rispetto alla pagina in cui è contenuto il componente.

{% capture example %}
<div class="it-header-wrapper it-shadow">
  <div class="it-header-slim-wrapper theme-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza/Owner</a>
            <div class="nav-mobile">
              <nav>
                <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu3" role="button" aria-expanded="false" aria-controls="menu3">
                  <span>Ente appartenenza/Owner</span>
                  <svg class="icon">
                    <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="link-list-wrapper collapse" id="menu3">
                  <ul class="link-list">
                    <li><a href="#">Link 1</a></li>
                    <li><a class="active" href="#">Link 2 Active</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="header-slim-right-zone">
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                  <span>ITA</span>
                  <svg class="icon d-none d-lg-block">
                    <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="col-12">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li><a class="list-item" href="#"><span>ITA</span></a></li>
                          <li><a class="list-item" href="#"><span>ENG</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="it-access-top-wrapper">
                <button class="btn btn-primary btn-sm" href="#" type="button">Accedi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="it-nav-wrapper">
    <div class="it-header-center-wrapper theme-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="it-header-center-content-wrapper">
              <div class="it-brand-wrapper">
                <a href="#">
                  <svg class="icon">
                    <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
                  </svg>
                  <div class="it-brand-text">
                    <h2 class="no_toc">Lorem Ipsum Lorem Ipsum</h2>
                    <h3 class="no_toc d-none d-md-block">Inserire qui la tag line</h3>
                  </div>
                </a>
              </div>
              <div class="it-right-zone">
                <div class="it-socials d-none d-md-flex">
                  <span>Seguici su</span>
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook" target="_blank">
                        <svg class="icon">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-facebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Github" target="_blank">
                        <svg class="icon">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter" target="_blank">
                        <svg class="icon">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-twitter"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="it-search-wrapper">
                  <span class="d-none d-md-block">Cerca</span>
                  <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                    <svg class="icon">
                      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="it-header-navbar-wrapper theme-light-desk">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!--start nav-->
            <nav class="navbar navbar-expand-lg has-megamenu">
              <button class="custom-navbar-toggler" type="button" aria-controls="nav100" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav100">
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-burger"></use>
                </svg>
              </button>
              <div class="navbar-collapsable" id="nav100" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div sr-only">
                  <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active"><a class="nav-link active" href="#"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#"><span>link 2 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>link 3 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>link 4</span></a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span>Dropdown item</span>
                        <svg class="icon icon-xs">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                        </svg>
                      </a>
                      <div class="dropdown-menu">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li>
                              <h3 class="no_toc" id="heading">Heading</h3>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 1</span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 2</span></a></li>
                            <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                            <li><span class="divider"></span></li>
                            <li><a class="list-item" href="#"><span>Link list 4</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item dropdown megamenu">
                      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span>Megamenu Label</span>
                        <svg class="icon icon-xs">
                          <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
                        </svg>
                      </a>
                      <div class="dropdown-menu">
                        <div class="row">
                          <div class="col-12 col-lg-4">
                            <div class="link-list-wrapper">
                              <ul class="link-list">
                                <li>
                                  <h3 class="no_toc">Heading 1</h3>
                                </li>
                                <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-12 col-lg-4">
                            <div class="link-list-wrapper">
                              <ul class="link-list">
                                <li>
                                  <h3 class="no_toc">Heading 2</h3>
                                </li>
                                <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-12 col-lg-4">
                            <div class="link-list-wrapper">
                              <ul class="link-list">
                                <li>
                                  <h3 class="no_toc">Heading 3</h3>
                                </li>
                                <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
                                <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Header Sticky

Affinché la testata rimanga parzialmente visibile anche allo scorrere della pagina, è sufficiente utilizzare la classe `.it-header-sticky` nell'elemento identificato con la classe `.it-header-wrapper`.

{% highlight html %}
<div class="it-header-wrapper it-header-sticky"> ... </div>
{% endhighlight %}

È disponibile una <a href="{{ site.baseurl }}/docs/esempi/sticky-header/">pagina di esempio</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo. 
