---
layout: docs
title: Navbar test sandbox 
description: Sandbox per testare l'implementazione su screen reader della navbar mobile 
group: menu-di-navigazione
toc: false
---

## Sto sperimentando diversi fix & feat markup HTML/JS/SCSS.   
[Approfondisci nella issue GitHub #1438](https://github.com/italia/bootstrap-italia/issues/1438#issuecomment-2774795746)

Tutte le soluzioni implementate in questa PR sono in lavorazione. 

Da notare che la navbar mobile può apparire anche a risoluzioni desktop ingrandite. Per questo i test anche con screen reader e device desktop.

### Testa l'implementazione che segue a risoluzione mobile (appare il Burger) nella barra blu

{% comment %}Example name: Completo{% endcomment %}
{% capture example %}
<!-- navbar con header sito -->
<header class="it-header-wrapper">
<div class="it-nav-wrapper">
    <div class="it-header-center-wrapper">
      <div class="container-xxl">
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
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
              <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="navbar-A" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-A">
                  <span>
                    <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
                  </span>
              </button>
              <div class="navbar-collapsable" id="navbar-A" tabindex="-1">
                  <div class="close-div">
                    <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
                      <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
                    </button>
                  </div>
                  <div class="menu-wrapper justify-content-lg-between">
                    <ul class="navbar-nav">
                      <!-- megamenu 1 -->
                      <li class="nav-item dropdown megamenu">
                        <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3 active" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-completo-A0" data-focus-mouse="false">
                            <span>Megamenu 1 (attivo)</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
                        </button>
                        <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-completo-A0">
                          <div class="megamenu pb-5 pt-3 py-lg-0">
                            <div class="row">
                              <div class="col-xs-12 col-lg-4 px-0">
                                <div class="row">
                                  <div class="col-12 it-vertical it-description pb-lg-3">
                                    <div class="description-content ps-4 ps-sm-5 ms-3">
                                      <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                                        <figure class="figure">
                                          <img src="https://placehold.co/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                                        </figure>
                                      </div>
                                      <p>
                                        Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu 1</strong>.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 col-lg-8">
                                <div class="it-heading-link-wrapper">
                                  <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                                  <span>Esplora la sezione megamenu 1</span>
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

<!-- navbar con header sito -->
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="navbar-B" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-B">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-B" tabindex="-1">
      <div class="close-div">
        <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
          <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
        </button>
      </div>
      <div class="menu-wrapper justify-content-lg-between">
        <ul class="navbar-nav">
          <!-- megamenu 1 -->
          <li class="nav-item dropdown megamenu">
            <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3 active" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-completo-A1" data-focus-mouse="false">
                <span>Megamenu 1 (attivo)</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
            </button>
            <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-completo-A1">
              <div class="megamenu pb-5 pt-3 py-lg-0">
                <div class="row">
                  <div class="col-xs-12 col-lg-4 px-0">
                    <div class="row">
                      <div class="col-12 it-vertical it-description pb-lg-3">
                        <div class="description-content ps-4 ps-sm-5 ms-3">
                          <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                            <figure class="figure">
                              <img src="https://placehold.co/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
                            </figure>
                          </div>
                          <p>
                            Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu 1</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-8">
                    <div class="it-heading-link-wrapper">
                      <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                      <span>Esplora la sezione megamenu 1</span>
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

{% endcapture %}{% include example.html content=example %}

## Altro titoletto sotto

Lorem ipsum secondo titoletto. 

### Altro titoletto in documentazione

E poi questo è il contesto. 

E un link: [Modale](/docs/componenti/modale/)


{% capture callout %}
La navbar quando aperta in versione mobile è stata reimplementata usando l'approccio del componente modale per isolarla dal contenuto sottostante e migliorare il supporto con tutti i lettori di schermo. Se hai personalizzato la navbar nel tuo progetto, potresti dover aggiornare il markup. 

**Modifiche principali:**
- Struttura: la nuova navbar utilizza un pattern dialog con backdrop come il componente Modale 
- Gerarchia visiva: la gestione `z-index` è allineata al componente Modale
- Gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo, e uso attributo `inert` in casi specifici

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript, assicurati che funzioni con il nuovo pattern dialog. Verifica la tua implementazione con tutte le combinazioni di lettori di schermo, browser e device per verificare le eventuali criticità di accessibilità, in particolar modo l'isolamento dal contenuto del resto della pagina navigando con tecnologie assistive
{% endcapture %}{% include callout-breaking.html content=callout version="2.15.0" type="danger" %}