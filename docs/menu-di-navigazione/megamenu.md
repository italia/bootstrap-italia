---
layout: docs
title: Megamenu
description: Visualizza un sottomenu contenente elenchi di link ed eventuali contenuti corretati relativi a una voce della navbar.
group: menu-di-navigazione
toc: true
---

## Introduzione

Il megamenu, all'interno del `<nav>`, è una variazione del componente [dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) contenente un elenco di link e altre informazioni correlate.

Per stilare correttamente il megamenu è sufficiente aggiungere la classe `.has-megamenu` al tag `<nav class="navbar">`. Ai dropdown dei quali si desidera modificare l'aspetto trasformandoli in megamenu si può aggiungere la classe `.has-megamenu` al tag `<li class="nav-item dropdown">`.

Gli elementi megamenu contenuti nelle navbar sono gestiti come elementi di tipo **collapse** nella loro versione mobile. 

{% capture callout %}
#### Accessibilità

Il megamenu è un componente di navigazione critico dal punto di vista dell'accessibilità. Si sugerisce particolare attenzione laddove si ritenga necessario usarlo:

- svolgere verifiche di accessibilità e test di usabilità con utenti, ponendo particolare attenzione a verificare navigazione da tastiera e con tecnologie assistive;
- prestare particolare attenzione agli attributi `ARIA` presenti negli esempi;
- i pulsanti che aprono i megamenu devono avere corretta semantica, ovvero`<button>`;
- l'icona a sinistra dei link serve a contraddistinguerli come "voci di menu" anche nelle situazioni o condizioni in cui non sia possibile percepirne il colore, in particolar modo laddove sia presente anche del testo descrittivo; 
- non devono essere presenti in pagina link con la medesima etichetta (label) che portino a destinazioni diverse. Nel caso di più link "Esplora tutti", ad esempio accostando più megamenu, si deve aggiungere " i contenuti della sezione X" all'etichetta, oppure, si può usare `<span class="visually-hidden"> i contenuti della sezione X</span>` per specificare alle sole tecnologie assistive a quale sezione di contenuti del sito si fa riferimento.
{% endcapture %}{% include callout.html content=callout type="accessibility" %} 

{% capture callout %}
Dalla versione **2.8.0** della libreria:

- il componente è stato riprogettato per essere accessibile by default, sia nella struttura che negli stili;
- è cambiato il modo di aggiungere un link "Esplora tutti...", rimangono ad esempio disponibili negli stili le classi `it-external` e `it-more` per retrocompatibilità, ma non sono utilizzate nel nuovo componente;
- sono state deprecate le varianti con sezioni. 

{% endcapture %}{% include callout.html content=callout type="danger" %}

## Megamenu per sezioni del sito
 
Questa è la variante più completa, è stata progettata curandone in particolar modo l'accessibilità. È utile per fornire visibilità e accesso a una intera sezione di contenuti di un sito con una alberatura ben strutturata, permettendo all'utente di comprendere l'organizzazione dei contenuti e navigare sia l'eventuale copertina di secondo livello che le pagine foglia.

Ha una struttura asimmetrica che permette di mostrare in apertura una immagine e un testo descrittivo di introduzione alla sezione del sito.  
Può contenere un link "Esplora la sezione ..." per l'accesso a una pagina di copertina. Se il link ha la classe `active` è riferito alla pagina corrente.  
Si possono accostare più megamenu nella `navbar` per dare accesso a sezioni diverse del sito. Se il pulsante ha la classe `active` è riferito alla sezione corrente del sito.  

È possibile navigare un esempio validato in produzione sul sito [Designers Italia](https://designers.italia.it), per cui è stata progettata.

{% comment %}Example name: Megamenu per sezioni del sito{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#megamenu-sezione-sito-A">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="megamenu-sezione-sito-A">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3 fw-semibold" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-sezione-sito-A-link" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-sezione-sito-A-link">
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
                          Testo utile a fornire una descrizione dei contenuti del <strong>megamenu</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-8">
                  <div class="it-heading-link-wrapper">
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm icon-primary me-2 mb-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Esplora la sezione megamenu</span>
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 1</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 2</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 3</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 4</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 5</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 6</span>
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
 
La variante base può contenere liste di link organizzate in tre colonne.

{% comment %}Example name: Megamenu base{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#megamenu-base-A">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="megamenu-base-A">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3 fw-semibold" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-A-link" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-A-link">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 1</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 2</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 3</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 4</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 5</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 6</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 8</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 9</span>
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

### Con link "Esplora la sezione..."

Come nella variante per sezioni del sito è possibile aggiungere un link "Esplora la sezione..." come primo link del contenitore, con la sua corretta gerarchia prima delle liste di link. Se il link ha la classe `active` è riferito alla pagina corrente.  

{% comment %}Example name: Megamenu base, con link esplora la sezione{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#megamenu-base-B">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="megamenu-base-B">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3 fw-semibold" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-B-link" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-B-link">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="it-heading-link-wrapper">
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm icon-primary me-2 mb-1">
                      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Esplora la sezione megamenu</span>
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 1</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 2</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 3</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 4</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 5</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 6</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 8</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 9</span>
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

### Con link "Esplora tutti..."

Nel caso le voci da mostrare fossero numerose, è possibile aggiungere un link "Esplora tutti i contenuti del..." che porti a una lista completa, come ultimo link del contenitore, con la corretta gerarchia fuori dalle liste di link. Se il link ha la classe `active` è riferito alla pagina corrente.  

{% comment %}Example name: Megamenu base, con link esplora tutti...{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#megamenu-base-C">
      <span>
        <svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="megamenu-base-C">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use></svg></span>
      </button>
    </div>
    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3 fw-semibold" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-C-link" data-focus-mouse="false">
              <span>Megamenu</span><svg role="img" class="icon icon-xs ms-1"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-C-link">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 1</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 2</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 3</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 4</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 5</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 6</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 8</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 9</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 10</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 11</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item left-icon dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm icon-primary align-middle me-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg><span>Link lista 12</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="it-footer-link-wrapper text-end">
                    <a class="it-footer-link" href="#">
                      <span>Esplora tutti i contenuti del megamenu<svg role="img" class="icon icon-sm icon-primary ms-2"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use></svg></span>
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


### Con call to action

_In stesura._

<!--
## Megamenu con call to action

I megamenu possono contenere delle liste di call to action, posizionate in fondo o a destra del megamenu.

### Call to action in basso

Per aggiungere un elenco di call to action è sufficiente aggiungere dopo il tag con classe `.row` contenente l'elenco primario, il tag `<div class="it-megamenu-footer">`. In questo inseriremo una struttura colonnare identica a quella della lista principale che ospiterà le liste delle call to action.

{% comment %}Example name: Con call to action in basso{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav5" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav5">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav5">
    <div class="overlay"></div>
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
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu5">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu5">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="it-megamenu-footer">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Call to action 1</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Call to action 2</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Call to action 3</span></a>
                      </li>
                    </ul>
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

### Call to action a destra

Per aggiungere un elenco di call to action posizionato a destra, inseriremo una lista di link particolare all'interno dell'ultima colonna delle liste di link primarie.

All'interno dell'ultimo tag `<div class="col-xs-12 col-lg-4">` inseriremo il tag `<div class="row max-height-col">` che a sua volta conterrà la colonna `<div class="col-12 it-vertical">` all'interno della quale andremo ad inserire la nostra lista di link contenente le call to action.

{% comment %}Example name: Con call to action a destra{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav6" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav6">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav6">
    <div class="overlay"></div>
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
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu6">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu6">
            <div class="row max-height-col">
              <div class="col-xs-12 col-lg-8">
                <div class="row margin-right-col">
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 10</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 11</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 12</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-lg-4">
                <div class="row max-height-col">
                  <div class="col-12 it-vertical">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 1</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 2</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 3</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 4</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                      </ul>
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
