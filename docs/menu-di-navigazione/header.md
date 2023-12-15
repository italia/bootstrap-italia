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
 .bg-override {
   fill:#06c !important;
 }
</style>

L'header di un sito della Pubblica Amministrazione è solitamente composto di 3 elementi principali:

- Un cosiddetto **Slim Header**, una sottile fascia dello stesso colore o, preferibilmente, di colore lievemente diverso rispetto al tema principale del sito, che mostra appartenenza e alcuni link funzionali con impatto globale o esterno al sito stesso.
- Un **Header Centrale** che identifica in modo chiaro il sito attraverso logo, testo e social, e può contenere un link per effettuare ricerche sul sito.
- Un **Header Nav** dedicato alla navigazione, visibile su schermi di grandi dimensioni e attraverso il classico pulsante di tipo "burger menu"
  (<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-burger"></use></svg>) su dispositivi mobili.

{% capture callout %}
#### Accessibilità

Considerando l'importanza dell'Header per la navigazione, si ricorda porre particolare attenzione all'utilizzo della corretta semantica HTML, alle etichette e agli attributi `ARIA`, oltre a validare e testare sempre con utenti il risultato.

Il titolo del sito, "Nome dell'Istituzione" negli esempi, è contenuto in un `<div>` generico e non un tag `<h1>` per evitare conflitti con gli `<h1>` presenti nelle singole pagine. Nel caso in cui la home page fosse priva di un titolo (es: primo contenuto è una ultima notizia in evidenza) si può applicare il tag `<h1>` al titolo dell'header unicamente in quella pagina oppure creare un `h1` nei contenuti principali di pagina con classe `.visually-hidden`. Questa ultima soluzione sarà anche utile a dare focus direttamente al tag `<h1>` laddove siano presenti [skiplinks]({{ site.baseurl }}/docs/menu-di-navigazione/skiplinks/) che permettano agli utenti che navigano da tastiera o con tecnologie assistive di saltare i contenuti dell'Header. 

Maggiori dettagli sull'accessibilità del componente **megamenu** nella [relativa pagina]({{site.baseurl}}/docs/menu-di-navigazione/megamenu/).
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture callout %}
Breaking feature dalla versione **2.8.0**

- Il toggle del dropdown diventa `<button>` invece di `<a>`. 
- Gli altri elementi `<a>` che si comportano come toggle dropdown (eg. scelta Lingua), hanno l'aggiunta dell'attributo `role="button"`.
- Il markup del Megamenu cambia come nel nuovo componente, per approfondire andare alla [relativa pagina]({{site.baseurl}}/docs/menu-di-navigazione/megamenu/).
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Slim Header

Lo **Slim Header** mostra un'intestazione, solitamente con riferimento all'ente di appartenenza del progetto o riferimenti utili, oltre ad un eventuale menu per il cambio lingua e l'accesso ad area riservata.  
Il cambio lingua è gestito con il componente [dropdown]({{ site.baseurl }}/docs/componenti/dropdown/).

{% comment %}Example name: Slim header{% endcomment %}
{% capture example %}
<div class="it-header-slim-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
          <div class="nav-mobile">
            <nav aria-label="Navigazione accessoria">
              <a class="it-opener d-lg-none" data-bs-toggle="collapse" href="#menu1a" role="button" aria-expanded="false" aria-controls="menu4">
                <span>Ente appartenenza</span>
                <svg class="icon" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
              </a>
              <div class="link-list-wrapper collapse" id="menu1a">
                <ul class="link-list">
                  <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                  <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="it-header-slim-right-zone">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Selezione lingua: lingua selezionata</span>
                <span>ITA</span>
                <svg class="icon d-none d-lg-block"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
              </a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>ITA <span class="visually-hidden">selezionata</span></span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="it-access-top-wrapper">
              <a class="btn btn-primary btn-sm" href="#">Accedi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

#### Zona destra con pulsante full-responsive

Per trasformare il pulsante di _action_ situato nell'elemento identificato con `.it-header-slim-right-zone` e renderlo _full-responsive_ è sufficiente applicare la classe `.btn-full` alla classe `.btn` del link/pulsante.

Il modificatore `.btn-full` è disponibile anche con il tema chiaro attivato da `.theme-light`.

{% comment %}Example name: Slim header con pulsante accedi full-responsive{% endcomment %}
{% capture example %}
<div class="it-header-slim-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-lg-block navbar-brand" href="#">Ente appartenenza</a>
          <div class="it-header-slim-right-zone">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Selezione lingua: lingua selezionata</span>
                <span>ITA</span>
                <svg class="icon d-none d-lg-block"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
              </a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>ITA <span class="visually-hidden">selezionata</span></span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="btn btn-primary btn-icon btn-full">
              <span class="rounded-icon">
                <svg class="icon icon-primary">
                  <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use>
                </svg>
              </span>
              <span class="d-none d-lg-block">Accedi all'area personale</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione chiara

Per cambiare tema all'header slim è sufficiente aggiungere la classe `theme-light` al tag `<div class="it-header-slim-wrapper">`

{% comment %}Example name: Slim header, variante chiara{% endcomment %}
{% capture example %}
<div class="it-header-slim-wrapper theme-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
          <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
          <div class="nav-mobile">
            <nav aria-label="Navigazione accessoria">
              <a class="it-opener d-lg-none" data-bs-toggle="collapse" href="#menu1b" role="button" aria-expanded="false" aria-controls="menu4">
                <span>Ente appartenenza</span>
                <svg class="icon" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
              </a>
              <div class="link-list-wrapper collapse" id="menu1b">
                <ul class="link-list">
                  <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                  <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="it-header-slim-right-zone">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Selezione lingua: lingua selezionata</span>
                <span>ITA</span>
                <svg class="icon d-none d-lg-block"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
              </a>
              <div class="dropdown-menu">
                <div class="row">
                  <div class="col-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>ITA <span class="visually-hidden">selezionata</span></span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="it-access-top-wrapper">
              <a class="btn btn-primary btn-sm" href="#">Accedi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Header Centrale

**Header Centrale**, per mostrare il logo dell'ente e la sua descrizione, link aggiuntivi ai social media e l'accesso al motore di ricerca, se presente.

{% comment %}Example name: Header centrale{% endcomment %}
{% capture example %}
<div class="it-header-center-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon" aria-hidden="true">
                <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-pa"></use>
              </svg>
              <div class="it-brand-text">
                <div class="it-brand-title">Nome dell'Istituzione</div>
                <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
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
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                <svg class="icon">
                  <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-search"></use>
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

### Versione compatta

Per utilizzare la versione più compatta in verticale dell'header centrale è sufficiente aggiungere la classe `it-small-header` al tag `<div class="it-header-center-wrapper">`

{% comment %}Example name: Header centrale, variante compatta{% endcomment %}
{% capture example %}
<div class="it-header-center-wrapper it-small-header">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon" aria-hidden="true">
                <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-pa"></use>
              </svg>
              <div class="it-brand-text">
                <div class="it-brand-title">Nome dell'Istituzione</div>
                <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
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
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                <svg class="icon">
                  <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-search"></use>
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

Per cambiare tema all'header centrale è sufficiente aggiungere la classe `theme-light` al tag `<div class="it-header-center-wrapper">`.

{% comment %}Example name: Header centrale, variante chiara{% endcomment %}
{% capture example %}
<div class="it-header-center-wrapper theme-light">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-center-content-wrapper">
          <div class="it-brand-wrapper">
            <a href="#">
              <svg class="icon" aria-hidden="true">
                <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-pa"></use>
              </svg>
              <div class="it-brand-text">
                <div class="it-brand-title">Nome dell'Istituzione</div>
                <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
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
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Github" target="_blank">
                    <svg class="icon">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" target="_blank">
                    <svg class="icon">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-twitter"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="it-search-wrapper">
              <span class="d-none d-md-block">Cerca</span>
              <a class="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                <svg class="icon">
                  <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-search"></use>
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

**Header Nav**, per elencare le voci di navigazione, siano esse semplici link, o pulsanti per [Dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) e [Megamenu]({{ site.baseurl }}/docs/menu-di-navigazione/megamenu/).

{% comment %}Example name: Header navigazione{% endcomment %}
{% capture example %}
<div class="it-header-navbar-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav1">
            <svg class="icon bg-override"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
          </button>
          <div class="navbar-collapsable" id="nav1" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div">
              <button class="btn close-menu" type="button">
                <span class="visually-hidden">Nascondi la navigazione</span>
                <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg>
              </button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mainNavDropdown1">
                    <span>Menu Dropdown</span>
                    <svg class="icon icon-xs"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </a>
                  <div class="dropdown-menu" role="region" aria-labelledby="mainNavDropdown1">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- megamenu -->
                <li class="nav-item dropdown megamenu">
                  <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-1" data-focus-mouse="false">
                      <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </button>
                  <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-1">
                    <div class="megamenu pb-5 pt-3 py-lg-0">
                      <div class="row">
                        <div class="col-xs-12 col-lg-4 px-0">
                          <div class="row">
                            <div class="col-12 it-vertical it-description pb-lg-3">
                              <div class="description-content ps-4 ps-sm-5 ms-3">
                                <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                  <figure class="figure">
                                    <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                                  </figure>
                                </div>
                                <p>
                                  Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu</strong>.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-8">
                          <div class="it-heading-link-wrapper">
                            <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                            <span>Esplora la sezione megamenu</span>
                            </a>
                          </div>
                          <div class="row">
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 1</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 2</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 3</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 4</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 5</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 6</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
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

### Temi colore disponibili

I'Header Nav ha due temi colore, uno chiaro ("light") e uno scuro ("dark"). Lo stile di default ha differenti caratteristiche colore a seconda della versione desktop e mobile:

- Su **desktop** lo stile di default ha un **background di colore primario e link bianchi**. Gli elementi **Dropdown** e **Megamenu** hanno background bianco, testi neri e link di colore primario.
- Su **mobile** lo stile di default ha un **background bianco e testi e link di colore primario**.

Per modificare il tema dell'Header Nav è sufficiente aggiungere una o tutte e due le seguenti classi al tag `<nav class="it-header-navbar-wrapper">`:

- la classe **`.theme-dark-mobile`** riguarda la versione **mobile** dell'Header Nav, impostando lo sfondo di colore primario con testi e link bianchi;
- la classe **`.theme-light-desk`** riguarda la versione **desktop** dell'Header Nav, impostando lo sfondo bianco con testi e link di colore primario. Gli elementi **Dropdown** e **Megamenu** in questo caso assumono sfondo di colore primario con testi e link bianchi.

#### Header Nav standard

{% comment %}Example name: Header navigazione standard{% endcomment %}
{% capture example %}
<div class="it-header-navbar-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav0" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav0">
            <svg class="icon bg-override"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
          </button>
          <div class="navbar-collapsable" id="nav0" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div">
              <button class="btn close-menu" type="button">
                <span class="visually-hidden">Nascondi la navigazione</span>
                <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg>
              </button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mainNavDropdown0">
                    <span>Menu Dropdown</span>
                    <svg class="icon icon-xs"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </a>
                  <div class="dropdown-menu" role="region" aria-labelledby="mainNavDropdown0">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- megamenu -->
                <li class="nav-item dropdown megamenu">
                  <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-2" data-focus-mouse="false">
                      <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </button>
                  <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-2">
                    <div class="megamenu pb-5 pt-3 py-lg-0">
                      <div class="row">
                        <div class="col-xs-12 col-lg-4 px-0">
                          <div class="row">
                            <div class="col-12 it-vertical it-description pb-lg-3">
                              <div class="description-content ps-4 ps-sm-5 ms-3">
                                <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                  <figure class="figure">
                                    <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                                  </figure>
                                </div>
                                <p>
                                  Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu</strong>.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-8">
                          <div class="it-heading-link-wrapper">
                            <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                            <span>Esplora la sezione megamenu</span>
                            </a>
                          </div>
                          <div class="row">
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 1</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 2</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 3</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 4</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 5</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 6</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
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

{% comment %}Example name: Header navigazione mobile scura{% endcomment %}
{% capture example %}
<div class="it-header-navbar-wrapper theme-dark-mobile">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav2" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav2">
            <svg class="icon bg-override"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
          </button>
          <div class="navbar-collapsable" id="nav2" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div">
              <button class="btn close-menu" type="button">
                <span class="visually-hidden">Nascondi la navigazione</span>
                <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg>
              </button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mainNavDropdown2">
                    <span>Menu Dropdown</span>
                    <svg class="icon icon-xs"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </a>
                  <div class="dropdown-menu" role="region" aria-labelledby="mainNavDropdown2">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- megamenu -->
                <li class="nav-item dropdown megamenu">
                  <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-3" data-focus-mouse="false">
                      <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </button>
                  <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-3">
                    <div class="megamenu pb-5 pt-3 py-lg-0">
                      <div class="row">
                        <div class="col-xs-12 col-lg-4 px-0">
                          <div class="row">
                            <div class="col-12 it-vertical it-description pb-lg-3">
                              <div class="description-content ps-4 ps-sm-5 ms-3">
                                <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                  <figure class="figure">
                                    <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                                  </figure>
                                </div>
                                <p>
                                  Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu</strong>.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-8">
                          <div class="it-heading-link-wrapper">
                            <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                            <span>Esplora la sezione megamenu</span>
                            </a>
                          </div>
                          <div class="row">
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 1</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 2</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 3</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 4</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 5</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 6</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
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

{% comment %}Example name: Header navigazione desktop chiara{% endcomment %}
{% capture example %}
<div class="it-header-navbar-wrapper theme-light-desk">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav3" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav3">
            <svg class="icon">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
            </svg>
          </button>
          <div class="navbar-collapsable" id="nav3" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div">
              <button class="btn close-menu" type="button">
                <span class="visually-hidden">Nascondi la navigazione</span>
                <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg>
              </button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mainNavDropdown3">
                    <span>Menu Dropdown</span>
                    <svg class="icon icon-xs"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </a>
                  <div class="dropdown-menu" role="region" aria-labelledby="mainNavDropdown3">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                        <li><span class="divider"></span></li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- megamenu -->
                <li class="nav-item dropdown megamenu">
                  <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-4" data-focus-mouse="false">
                      <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                  </button>
                  <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-4">
                    <div class="megamenu pb-5 pt-3 py-lg-0">
                      <div class="row">
                        <div class="col-xs-12 col-lg-4 px-0">
                          <div class="row">
                            <div class="col-12 it-vertical it-description pb-lg-3">
                              <div class="description-content ps-4 ps-sm-5 ms-3">
                                <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                  <figure class="figure">
                                    <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                                  </figure>
                                </div>
                                <p>
                                  Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu</strong>.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-8">
                          <div class="it-heading-link-wrapper">
                            <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                            <span>Esplora la sezione megamenu</span>
                            </a>
                          </div>
                          <div class="row">
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 1</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 2</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 3</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                <ul class="link-list">
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 4</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item" href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 5</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="list-item dropdown-item " href="#">
                                      <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                      <span>Link lista 6</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
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

#### Navigazione secondaria

Al menu di navigazione principale può essere aggiunto anche un menu di navigazione secondario includendo a `.menu-wrapper` una seconda lista `<ul>` con classe `.navbar-nav.navbar-secondary` e la stessa struttura dati della lista `.navbar-nav` principale.

{% comment %}Example name: Header navigazione secondaria{% endcomment %}
{% capture example %}
<div class="it-header-navbar-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!--start nav-->
        <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
          <button class="custom-navbar-toggler" type="button" aria-controls="nav4" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav4">
            <svg class="icon bg-override"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
          </button>
          <div class="navbar-collapsable" id="nav4" style="display: none;">
            <div class="overlay" style="display: none;"></div>
            <div class="close-div">
              <button class="btn close-menu" type="button">
                <span class="visually-hidden">Nascondi la navigazione</span>
                <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg>
              </button>
            </div>
            <div class="menu-wrapper">
              <ul class="navbar-nav">
                <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>
              </ul>
              <ul class="navbar-nav navbar-secondary">
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 5</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 6</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 7</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><span>Link 8</span></a></li>
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

{% comment %}Example name: Header completa{% endcomment %}
{% capture example %}
<header class="it-header-wrapper">
  <div class="it-header-slim-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
            <div class="nav-mobile">
              <nav aria-label="Navigazione secondaria">
                <a class="it-opener d-lg-none" data-bs-toggle="collapse" href="#menuC1" role="button" aria-expanded="false" aria-controls="menuC1">
                  <span>Ente appartenenza</span>
                  <svg class="icon" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                </a>
                <div class="link-list-wrapper collapse" id="menuC1">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                    <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="it-header-slim-right-zone">
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Selezione lingua: lingua selezionata</span>
                  <span>ITA</span>
                  <svg class="icon d-none d-lg-block"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                </a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="col-12">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li><a class="dropdown-item list-item" href="#"><span>ITA <span class="visually-hidden">selezionata</span></span></a></li>
                          <li><a class="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="it-access-top-wrapper">
                <a class="btn btn-primary btn-sm" href="#">Accedi</a>
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
                  <svg class="icon" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-pa"></use></svg>
                  <div class="it-brand-text">
                    <div class="it-brand-title">Nome dell'Istituzione</div>
                    <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
                  </div>
                </a>
              </div>
              <div class="it-right-zone">
                <div class="it-socials d-none d-md-flex">
                  <span>Seguici su</span>
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook" target="_blank">
                        <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-facebook"></use></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Github" target="_blank">
                        <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-github"></use></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter" target="_blank">
                        <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-twitter"></use></svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="it-search-wrapper">
                  <span class="d-none d-md-block">Cerca</span>
                  <a class="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                    <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-search"></use></svg>
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
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
              <button class="custom-navbar-toggler" type="button" aria-controls="navC1" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#navC1">
                <svg class="icon">
                  <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
                </svg>
              </button>
              <div class="navbar-collapsable" id="navC1" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <svg class="icon">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
                    </svg>
                  </button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mainNavDropdownC1">
                        <span>Menu Dropdown</span>
                        <svg class="icon icon-xs">
                          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
                        </svg>
                      </a>
                      <div class="dropdown-menu" role="region" aria-labelledby="mainNavDropdownC1">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                            <li><span class="divider"></span></li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <!-- megamenu -->
                    <li class="nav-item dropdown megamenu">
                      <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-5" data-focus-mouse="false">
                          <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                      </button>
                      <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-5">
                        <div class="megamenu pb-5 pt-3 py-lg-0">
                          <div class="row">
                            <div class="col-xs-12 col-lg-4 px-0">
                              <div class="row">
                                <div class="col-12 it-vertical it-description pb-lg-3">
                                  <div class="description-content ps-4 ps-sm-5 ms-3">
                                    <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                      <figure class="figure">
                                        <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                                      </figure>
                                    </div>
                                    <p>
                                      Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu</strong>.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-lg-8">
                              <div class="it-heading-link-wrapper">
                                <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                <span>Esplora la sezione megamenu</span>
                                </a>
                              </div>
                              <div class="row">
                                <div class="col-12 col-lg-6">
                                  <div class="link-list-wrapper">
                                    <ul class="link-list">
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 1</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 2</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item " href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 3</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                  <div class="link-list-wrapper">
                                    <ul class="link-list">
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 4</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 5</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item " href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 6</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
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
</header>

{% endcapture %}{% include example.html content=example %}

### Versione chiara

Nella versione light è consigliabile aggiungere la classe `.it-shadow` al tag `<div class="it-header-wrapper">`.  
Verrà creata un'ombra per enfatizzare l'Header rispetto alla pagina in cui è contenuto.

{% comment %}Example name: Header completa, variante chiara{% endcomment %}
{% capture example %}
<header class="it-header-wrapper it-shadow">
  <div class="it-header-slim-wrapper theme-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a class="d-none d-lg-block navbar-brand" href="#">Ente appartenenza</a>
            <div class="nav-mobile">
              <nav aria-label="Navigazione secondaria">
                <a class="it-opener d-lg-none" data-bs-toggle="collapse" href="#menuC2" role="button" aria-expanded="false" aria-controls="menuC2">
                  <span>Ente appartenenza</span>
                  <svg class="icon" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                </a>
                <div class="link-list-wrapper collapse" id="menuC2">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#">Link 1</a></li>
                    <li><a class="list-item active" href="#" aria-current="page">Link 2 (Attivo)</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="it-header-slim-right-zone">
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Selezione lingua: lingua selezionata</span>
                  <span>ITA</span>
                  <svg class="icon d-none d-lg-block"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                </a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="col-12">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li><a class="dropdown-item list-item" href="#"><span>ITA <span class="visually-hidden">selezionata</span></span></a></li>
                          <li><a class="dropdown-item list-item" href="#"><span>ENG</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="it-access-top-wrapper">
                <a class="btn btn-primary btn-sm" href="#">Accedi</a>
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
                  <svg class="icon" aria-hidden="true"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-pa"></use></svg>
                  <div class="it-brand-text">
                    <div class="it-brand-title">Nome dell'Istituzione</div>
                    <div class="it-brand-tagline d-none d-md-block">Tag line dell'Istituzione</div>
                  </div>
                </a>
              </div>
              <div class="it-right-zone">
                <div class="it-socials d-none d-md-flex">
                  <span>Seguici su</span>
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook" target="_blank">
                        <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-facebook"></use></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Github" target="_blank">
                        <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-github"></use></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter" target="_blank">
                        <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-twitter"></use></svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="it-search-wrapper">
                  <span class="d-none d-md-block">Cerca</span>
                  <a class="search-link rounded-icon" aria-label="Cerca nel sito" href="#">
                    <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-search"></use></svg>
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
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
              <button class="custom-navbar-toggler" type="button" aria-controls="navC2" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#navC2">
                <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
              </button>
              <div class="navbar-collapsable" id="navC2" style="display: none;">
                <div class="overlay" style="display: none;"></div>
                <div class="close-div">
                  <button class="btn close-menu" type="button">
                    <span class="visually-hidden">Nascondi la navigazione</span>
                    <svg class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg>
                  </button>
                </div>
                <div class="menu-wrapper">
                  <ul class="navbar-nav">
                    <li class="nav-item active"><a class="nav-link active" href="#" aria-current="page"><span>Link 1 (attivo)</span></a></li>
                    <li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true"><span>Link 2 (disabilitato)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>Link 3</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span>Link 4</span></a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mainNavDropdownC2">
                        <span>Menu Dropdown</span>
                        <svg class="icon icon-xs"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                      </a>
                      <div class="dropdown-menu" role="region" aria-labelledby="mainNavDropdownC2">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a></li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a></li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a></li>
                            <li><span class="divider"></span></li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <!-- megamenu -->
                    <li class="nav-item dropdown megamenu">
                      <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-6" data-focus-mouse="false">
                          <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                      </button>
                      <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-6">
                        <div class="megamenu pb-5 pt-3 py-lg-0">
                          <div class="row">
                            <div class="col-xs-12 col-lg-4 px-0">
                              <div class="row">
                                <div class="col-12 it-vertical it-description pb-lg-3">
                                  <div class="description-content ps-4 ps-sm-5 ms-3">
                                    <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                      <figure class="figure">
                                        <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                                      </figure>
                                    </div>
                                    <p>
                                      Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu</strong>.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-lg-8">
                              <div class="it-heading-link-wrapper">
                                <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                <span>Esplora la sezione megamenu</span>
                                </a>
                              </div>
                              <div class="row">
                                <div class="col-12 col-lg-6">
                                  <div class="link-list-wrapper">
                                    <ul class="link-list">
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 1</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 2</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item " href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 3</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                  <div class="link-list-wrapper">
                                    <ul class="link-list">
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 4</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item" href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 5</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a class="list-item dropdown-item " href="#">
                                          <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                          <span>Link lista 6</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
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
</header>
{% endcapture %}{% include example.html content=example %}

## Header Sticky

Affinché la testata rimanga visibile in formato ridotto anche allo scorrere della pagina, è sufficiente utilizzare la classe `.it-header-sticky` nell'elemento identificato con la classe `.it-header-wrapper`.

```html
<div class="it-header-wrapper it-header-sticky">...</div>
```

È disponibile una <a href="{{ site.baseurl }}/docs/esempi/comuni/template-homepage/">pagina di esempio</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.

### Tramite JavaScript

È possibile inizializzare il componente tramite JavaScript:

```js
var headerSticky = new bootstrap.HeaderSticky(document.getElementById('myHeaderSticky'), options)
```

### Metodi

{% include callout-danger-async-methods.md %}

#### `getOrCreateInstance`

Metodo statico che consente di ottenere l'istanza di un HeaderSticky associata ad un elemento del DOM o di crearne una nuova nel caso non fosse stata inizializzata.

```js
var headerStickyElement = document.querySelector('#myHeaderSticky')
var headerSticky = bootstrap.HeaderSticky.getOrCreateInstance(headerStickyElement) // Returns a Bootstrap modal instance
```
