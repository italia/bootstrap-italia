---
layout: docs
title: Megamenu
description: Visualizza un sottomenu contenente elenchi di link ed eventuali contenuti corretati relativi a una voce del menu principale.
group: menu-di-navigazione
toc: true
---

## Introduzione

Il megamenu è una variazione del componente [dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) per la navbar `<nav>` del sito, che permette di esplorare elenchi di link e informazioni correlate.

Per stilare il megamenu si deve aggiungere la classe `.has-megamenu` al tag `<nav class="navbar">`. Ai dropdown che si desidera trasformare in megamenu si deve aggiungere la classe `.has-megamenu` al tag `<li class="nav-item dropdown">`.

Il megamenu ha di default tema colori chiaro, si possono attivare i temi scuri su desktop e mobile applicando al `<nav>` contenitore rispettivamente le classi `.theme-light-desk` (navbar con tema chiaro e megamenu a tema scuro su desktop) e `.theme-dark-mobile` (navbar e megamenu a tema scuro su desktop). 

{% capture callout %}
#### Accessibilità

Il megamenu è un componente della navigazione principale del sito che richiede particolari attenzioni dal punto di vista dell'accessibilità: 

- svolgere con cura verifiche di accessibilità e test di usabilità con utenti;
- applicare correttamente gli attributi `ARIA` presenti negli esempi;
- usare il corretto tag semantico `<button>` per i pulsanti di apertura;
- usare icone (freccia negli esempi) per contraddistinguere i link anche nelle situazioni o condizioni in cui non sia possibile percepirne il colore, in particolar modo se presente del testo descrittivo o non cliccabile; 
- distinguere le etichette dei link in modo chiaro: non devono essere presenti link con la stessa etichetta che portino a destinazioni diverse. Nel caso di più link "Esplora tutti" si può ad esempio aggiungere " i contenuti della sezione X", oppure, si può usare `<span class="visually-hidden"> i contenuti della sezione X</span>` per comunicare la distinzione almeno alle tecnologie assistive.
{% endcapture %}{% include callout.html content=callout type="accessibility" %} 

{% capture callout %}
Breaking feature dalla versione **2.8.0**

Cosa cambia nel megamenu dalla versione **2.8.0** della libreria:

- tutti gli esempi del componente, anche quelli integrati nel componente [header]({{ site.baseurl }}/docs/menu-di-navigazione/header/), sono stati rivisti: refactoring markup `HTML`, classi e stili nei file `_megamenu.scss`, `_navigation.scss`, `_headernavbar.scss`, `_headernavbartheme.scss`, `_navigationtheme.scss`
- rimossi esempi "con sezioni"
- rimosse classi `.it-megamenu-footer`, `.it-external`, `.it-more`, `.divider`, `h3`, `.link-list-heading` 
- rimosse variabili obsolete e inutilizzate da `_variables.scss`
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Megamenu completo
 
Variante completa per dare ad esempio accesso a una intera sezione di un sito con un'architettura dell'informazione ben strutturata. Permette all'utente di comprendere l'organizzazione dei contenuti e di saltare direttamente a pagine foglia. 

È possibile navigare un **esempio di applicazione** nel sito [Designers Italia](https://designers.italia.it).

Permette di includere **immagine e testo descrittivo** per una introduzione ai contenuti della sezione. Può contenere un link **"Esplora la sezione X"** per dare accesso a una copertina della sezione. Se il link ha la classe `active` è riferito alla pagina corrente. Si possono accostare più megamenu nella navbar per dare accesso a sezioni diverse del sito. Se il pulsante ha la classe `active` è riferito alla sezione corrente. 

{% comment %}Example name: Completo{% endcomment %}
{% capture example %}
<!-- navbar -->
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-A">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-A">
    <div class="overlay fade"></div>
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
                            <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto">
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
        <!-- megamenu 2 -->
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-completo-A2" data-focus-mouse="false">
              <span>Megamenu 2</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-completo-A2">
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
                          Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu 2</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-8">
                  <div class="it-heading-link-wrapper">
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                    <span>Esplora la sezione megamenu 2</span>
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 8</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 9</span>
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
                              <span>Link lista 10</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 11</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 12</span>
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

### Completo scuro desktop

Il megamenu prende il tema colori dark su desktop se è dentro un `<nav>` che ha applicata la classe `.theme-light-desk`. 

{% comment %}Example name: Completo scuro desktop{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu theme-light-desk" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-B">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-B">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-completo-B" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-completo-B">
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
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Esplora la sezione megamenu</span>
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

### Completo scuro mobile

Il megamenu prende il tema colori dark su mobile se è dentro un `<nav>` che ha applicata la classe `.theme-dark-mobile`. 

{% comment %}Example name: Completo scuro mobile{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu theme-dark-mobile" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-C">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-C">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-completo-C" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-completo-C">
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
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Esplora la sezione megamenu</span>
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

## Megamenu base
 
Variante base che può contenere liste di link organizzate in tre colonne ed eventuali link correlati come "Esplora la sezione X", "Esplora tutti i contenuti Y" o di altro tipo.  

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-D">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-D">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-D" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-D">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 8</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 9</span>
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

### Con link "Esplora la sezione"

Come nella variante completa è possibile aggiungere un link "Esplora la sezione X" come primo link. Se il link ha la classe `active` è riferito alla sezione corrente del sito.  

{% comment %}Example name: Base, con link esplora la sezione{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-E">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-E">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-E" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-E">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="it-heading-link-wrapper">
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Esplora la sezione megamenu</span>
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 8</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 9</span>
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

### Con link "Esplora tutti"

Nel caso le voci da mostrare fossero numerose, è possibile aggiungere un link "Esplora tutti i contenuti Y" che porti a una lista completa. Se il link ha la classe `active` è riferito alla vista corrente.  

{% comment %}Example name: Base, con link esplora tutti{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-F">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-F">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-F" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-F">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 col-lg-4">
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
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 4</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 5</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 6</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 8</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 9</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 10</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 11</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 12</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="it-footer-link-wrapper text-end">
                    <a class="it-footer-link" href="#">
                      <span>Esplora tutti i contenuti del megamenu<svg role="img" class="icon icon-sm ms-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use></svg></span>
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
</nav>
{% endcapture %}{% include example.html content=example %}


### Con call to action in basso

I megamenu possono contenere altri link correlati, che possono avere la funzione di "call to action" rispetto agli altri contenuti del megamenu.  
Questi seguono le liste di link, posizionati in basso o in una colonna destra, allineati in orizzontale o verticale usando le proprietà `d-flex`. 

{% comment %}Example name: Base, con call to action in basso{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-G">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-G">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-G" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-G">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 8</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 9</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="it-footer-link-wrapper">
                    <div class="d-flex flex-column flex-lg-row justify-content-around">
                      <a class="it-footer-link" href="#">
                        <svg class="icon icon-sm me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
                        <span>Call to action 1</span>
                      </a>
                      <a class="it-footer-link" href="#">
                        <svg class="icon icon-sm me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
                        <span>Call to action 2</span>
                      </a>
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

### Con call to action a destra

{% comment %}Example name: Base, con call to action a destra{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-H">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-H">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-H" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-H">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12 col-lg-8">
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
                <div class="col-xs-12 col-lg-4 px-0">
                  <div class="it-footer-link-wrapper-vertical">
                    <div class="d-flex flex-column justify-content-around">
                      <a class="it-footer-link" href="#">
                        <svg class="icon icon-sm me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
                        <span>Call to action 1</span>
                      </a>
                      <a class="it-footer-link" href="#">
                        <svg class="icon icon-sm me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
                        <span>Call to action 2</span>
                      </a>
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