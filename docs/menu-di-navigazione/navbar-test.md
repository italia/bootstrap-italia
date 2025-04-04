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
<!-- navbar -->
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="navbar-A" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-A">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-A" tabindex="-1"> <!-- <<< do we need aria-label here? like what? menu? we don't have a title... we set it via JS? | can we set tabindex="-1" if not present? -->
    <!-- <div class="navbar-dialog" role="document"> --> <!-- <<< do we still need this? was an old NVDA bug? -->
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
    <!-- </div> -->
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

## Altro titoletto sotto

Lorem ipsum secondo titoletto. 

### Altro titoletto in documentazione

E poi questo è il contesto. 

E un link: [Modale](/docs/componenti/modale/)


{% capture callout %}
La navbar quando aperta in versione mobile è stata ora reimplementata come un vero e proprio dialog modale per migliorare l'accessibilità con i lettori di schermo. Se hai personalizzato la navbar, in particolare quella mobile, nel tuo progetto, potresti dover aggiornare il tuo codice. 

**Modifiche principali:**
- Struttura: la navbar ora utilizza un pattern dialog con backdrop 
- Gerarchia visiva: la gestione `z-index` è allineata al componente Modale
- Gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript, assicurati che funzioni con il nuovo pattern dialog. Testa la tua implementazione con lettori di schermo per verificare i miglioramenti di accessibilità
{% endcapture %}{% include callout-breaking.html content=callout version="2.15.0" type="danger" %}