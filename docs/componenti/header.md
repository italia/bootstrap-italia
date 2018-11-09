---
layout: docs
title: Header
description: Documentazione ed esempi per l'header di navigazione. Include il supporto per il branding, la navigazione e altro ancora, incluso il supporto per collapse plug-in.
group: componenti
toc: true
---

## Header - Introduzione

L'header può essere composta da 3 elementi  
**Header slim**: Può contenere intestazione, cambio lingua, accesso ad area riservarta, links.  
**Header centrale**: Contiene il brand e la sua descrizione, link ai social media, accesso al motore di ricerca.  
**Header Nav**: Contiene i link di navigazione (link semplici, dropdown e megamenu).

### Header Slim
L'header slim può contenere **intestazione**, **cambio lingua**, **accesso ad area riservarta**, **links**.  
Il **cambio lingua** è gestito con il componente **dropdown**: [pagina dedicata al componente Dropdown]({{ site.baseurl }}/docs/componenti/dropdown/). 


{% capture example %}
<div class="it-header-slim-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza/Owner</a>
          <span class="nav-palce-mobile">
            <nav>
              <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu1" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span>Ente appartenenza/Owner</span>
                <svg class="icon">
                  <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="link-list-wrapper collapse" id="menu1">
                <ul class="link-list">
                  <li><a href="#">Link 1</a></li>
                  <li><a class="active" href="#">Link 2 Active</a></li>
                </ul>
              </div>
            </nav>
          </span>
          <div class="header-slim-right-zone">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                <span>Ita</span>
                <svg class="icon d-none d-lg-block">
                  <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Ita</span></a></li>
                        <li><a class="list-item" href="#"><span>Eng</span></a></li>
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



### Header Slim light version
Per cambiare tema all'header slim è sufficiente aggiungere la classe `theme-light` al tag `<div class="it-header-slim-wrapper">`


{% capture example %}
<div class="it-header-slim-wrapper theme-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza/Owner</a>
          <span class="nav-palce-mobile">
            <nav>
              <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu2" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span>Ente appartenenza/Owner</span>
                <svg class="icon">
                  <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="link-list-wrapper collapse" id="menu2">
                <ul class="link-list">
                  <li><a href="#">Link 1</a></li>
                  <li><a class="active" href="#">Link 2 Active</a></li>
                </ul>
              </div>
            </nav>
          </span>
          <div class="header-slim-right-zone">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                <span>Ita</span>
                <svg class="icon d-none d-lg-block">
                  <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                </svg>
              </a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Ita</span></a></li>
                        <li><a class="list-item" href="#"><span>Eng</span></a></li>
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


### Header Centrale
**Header centrale**: Contiene il brand e la sua descrizione, link ai social media, accesso al motore di ricerca. 


{% capture example %}
<div class="it-header-center-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon">
                <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
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
                      <use xlink:href="/dist/svg/sprite.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" href="#">
                <svg class="icon">
                  <use xlink:href="/dist/svg/sprite.svg#it-search"></use>
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

### Header Centrale versione piccola.
Per utilizzare la versione più piccola dell'header centrale è sufficiente aggiungere la classe `it-small-header` al tag `<div class="it-header-center-wrapper">`

{% capture example %}
<div class="it-header-center-wrapper it-small-header">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon">
                <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
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
                      <use xlink:href="/dist/svg/sprite.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" href="#">
                <svg class="icon">
                  <use xlink:href="/dist/svg/sprite.svg#it-search"></use>
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

### Header Centrale light version
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
                <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
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
                      <use xlink:href="/dist/svg/sprite.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" href="#">
                <svg class="icon">
                  <use xlink:href="/dist/svg/sprite.svg#it-search"></use>
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

### Header Nav
**Header Nav**: Contiene i link di navigazione (link semplici, dropdown e megamenu).


{% capture example %}
<div class="it-header-navbar-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav1">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav1" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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

### Header Nav themes
I'Header Nav ha due versioni, light e dark.

Lo stile di default ha differenti caratteristiche colore nella versione desktop / mobile.

**Desktop**  
Stile di default: background di colore primario e links bianchi.  
Gli elementi [Dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) e [Megamenu]({{ site.baseurl }}/docs/componenti/dropdown/) hanno background bianco, testi neri e link di colore primario.

**Mobile**  
Stile di default: background bianco e testi e links di colore primario.

**Temi Header Nav**  
Per cambiare il tema del Nav è sufficiente aggiungere le seguenti classi al tag `<nav class="it-header-navbar-wrapper">`:

**`.theme-dark-mobile`**: background di colore primario, testi e links bianco. (modifica unicamente la versione mobile del Nav).

**`.theme-light-desktop`**: background bianco, testi e links di colore primario.
Gli elementi [Dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) e [Megamenu]({{ site.baseurl }}/docs/componenti/dropdown/) assumono background di colore primario, testi e link bianchi. (modifica unicamente la versione desktop del Nav).

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
              <use xlink:href="/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav0" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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

#### Header Nav dark mobile

{% capture example %}
<div class="it-header-navbar-wrapper theme-dark-mobile">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav2" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav2">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav2" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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

#### Header Nav light desktop

{% capture example %}
<div class="it-header-navbar-wrapper theme-light-desk">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav2" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav2">
            <svg class="icon">
              <use xlink:href="/dist/svg/sprite.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav2" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div sr-only">
              <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a></li>
                <li class="nav-item"><a class="nav-link" href="#1"><span>link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                    <span>Dropdown item</span>
                    <svg class="icon icon-xs">
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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
                      <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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

### Header Completa

{% capture example %}
<div class="it-header-wrapper">
  <div class="it-header-slim-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza/Owner</a>
            <span class="nav-palce-mobile">
              <nav>
                <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu1" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <span>Ente appartenenza/Owner</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="link-list-wrapper collapse" id="menu1">
                  <ul class="link-list">
                    <li><a href="#">Link 1</a></li>
                    <li><a class="active" href="#">Link 2 Active</a></li>
                  </ul>
                </div>
              </nav>
            </span>
            <div class="header-slim-right-zone">
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                  <span>Ita</span>
                  <svg class="icon d-none d-lg-block">
                    <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="col-12">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li><a class="list-item" href="#"><span>Ita</span></a></li>
                          <li><a class="list-item" href="#"><span>Eng</span></a></li>
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
                    <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
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
                          <use xlink:href="/dist/svg/sprite.svg#it-facebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Github" target="_blank">
                        <svg class="icon">
                          <use xlink:href="/dist/svg/sprite.svg#it-github"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter" target="_blank">
                        <svg class="icon">
                          <use xlink:href="/dist/svg/sprite.svg#it-twitter"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="it-search-wrapper">
                  <span class="d-none d-md-block">Cerca</span>
                  <a class="search-link rounded-icon" href="#">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-search"></use>
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
                  <use xlink:href="/dist/svg/sprite.svg#it-burger"></use>
                </svg>
              </button>
              <div class="navbar-collapsable" id="nav10" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div sr-only">
                  <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#1"><span>link 4</span></a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span>Dropdown item</span>
                        <svg class="icon icon-xs">
                          <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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
                          <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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

### Header Completa light version
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
            <span class="nav-palce-mobile">
              <nav>
                <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu1" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <span>Ente appartenenza/Owner</span>
                  <svg class="icon">
                    <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="link-list-wrapper collapse" id="menu1">
                  <ul class="link-list">
                    <li><a href="#">Link 1</a></li>
                    <li><a class="active" href="#">Link 2 Active</a></li>
                  </ul>
                </div>
              </nav>
            </span>
            <div class="header-slim-right-zone">
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                  <span>Ita</span>
                  <svg class="icon d-none d-lg-block">
                    <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
                  </svg>
                </a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="col-12">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li><a class="list-item" href="#"><span>Ita</span></a></li>
                          <li><a class="list-item" href="#"><span>Eng</span></a></li>
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
                    <use xlink:href="/dist/svg/sprite.svg#it-code-circle"></use>
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
                          <use xlink:href="/dist/svg/sprite.svg#it-facebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Github" target="_blank">
                        <svg class="icon">
                          <use xlink:href="/dist/svg/sprite.svg#it-github"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter" target="_blank">
                        <svg class="icon">
                          <use xlink:href="/dist/svg/sprite.svg#it-twitter"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="it-search-wrapper">
                  <span class="d-none d-md-block">Cerca</span>
                  <a class="search-link rounded-icon" href="#">
                    <svg class="icon">
                      <use xlink:href="/dist/svg/sprite.svg#it-search"></use>
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
                  <use xlink:href="/dist/svg/sprite.svg#it-burger"></use>
                </svg>
              </button>
              <div class="navbar-collapsable" id="nav100" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div sr-only">
                  <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#1"><span>link 4</span></a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span>Dropdown item</span>
                        <svg class="icon icon-xs">
                          <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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
                          <use xlink:href="/dist/svg/sprite.svg#it-expand"></use>
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