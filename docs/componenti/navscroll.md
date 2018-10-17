---
layout: docs
title: Navscroll
description: L'elemento Navscroll contiene linklist con ancore a sezioni della pagina in cui è contenuta
group: componenti
toc: true
---

## Layout della Navscroll

Il componente Navscroll è una declinazione del componente Navbar `<nav class="navbar navbar-expand-lg">` con l'aggiunta della classe `.it-navscroll-wrapper`.  
Nella sua versione mobile, la navigazione viene collassata all'interno di un menù, posizionabile a inizio o fine pagina.

Per posizionare tale menù in alto, è sufficiente aggiungere al tag `<nav>` la classe `.it-top-navscroll`. Al contrario, per posizionare il menù in basso, è sufficiente aggiungere la classe `.it-bottom-navscroll`.

La Navscroll può avere una linea-separatore a destra o a sinistra dell'elemento, semplicemente aggiungendo al tag `<nav>` la classe `.it-left-side` per aggiungere una linea a sinistra, e `.it-right-side` per aggiungerla a destra.

{% capture callout %}
Ogni link all'interno della Navscroll contiene l'attributo `href` con il valore dell'id relativo all'elemento correlato in pagina: `href="#idElemento"`.
Di seguito gli esempi, per visualizzare il comportamento potete guardare la pagina di esempio: **[Esempio Navscroll]({{ site.baseurl }}/docs/esempi/navscroll/){:target="_blank"}**.
{% endcapture %}{% include callout.html content=callout type="info" %}


### Posizionamento a fondo pagina con linea a sinistra

In questo esempio, la linea che limita la barra di navigazione è posizionata a sinistra. Su dispositivi con schermi a dimensione inferiore a 992px, la barra che permette di aprire la navigazione si sposterà in basso nella pagina.

{% capture example %}
<nav class="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-left-side">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNav"><span class="it-list"></span>1. Introduzione
  </button>
  <div class="navbar-collapsable" id="navbarNav">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button"><span class="it-close"></span>close
      </button>
    </div>
    <a class="it-back-button" href="#"><i class="it-chevron-left " aria-hidden="true"> </i><span>Back </span></a>
    <div class="menu-wrapper">
      <div class="link-list-wrapper">
        <h3 class="no_toc">header</h3>
        <ul class="link-list">
          <li class="nav-item active">
            <a class="nav-link active" href="#1"><span>1. Introduzione </span></a>
            <ul class="link-list">
              <li class="nav-link active">
                <a class="nav-link active" href="#1_1"><span>1.1 Nested Item (active) </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#1_1_1"><span>1.1.1 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#1_1_2"><span>1.1.2 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#1_1_3"><span>1.1.3 Nested Item </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#1_2"><span>1.2 Nested Item </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#1_3"><span>1.3 Nested Item </span></a>
              </li>
            </ul>
            <a class="nav-link" href="#2"><span>2. List item </span></a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#2_1"><span>2.1 Nested Item </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#2_1_1"><span>2.1.1 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#2_1_2"><span>2.1.2 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#2_1_3"><span>2.1.3 Nested Item </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#2_2"><span>2.2 Nested Item </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#2_3"><span>2.3 Nested Item </span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Posizionamento in testa alla pagina con linea a destra

In questo esempio, la linea che limita la barra di navigazione è posizionata a destra. Su dispositivi con schermi a dimensione inferiore a 992px, la barra che permette di aprire la navigazione si sposterà in alto nella pagina.

{% capture example %}
<nav class="navbar it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavB" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavB"><span class="it-list"></span>1. Introduzione
  </button>
  <div class="navbar-collapsable" id="navbarNavB">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button"><span class="it-close"></span>close
      </button>
    </div>
    <a class="it-back-button" href="#"><i class="it-chevron-left " aria-hidden="true"> </i><span>Back </span></a>
    <div class="menu-wrapper">
      <div class="link-list-wrapper">
        <h3 class="no_toc">header</h3>
        <ul class="link-list">
          <li class="nav-item active">
            <a class="nav-link active" href="#1"><span>1. Introduzione </span></a>
            <ul class="link-list">
              <li class="nav-link active">
                <a class="nav-link active" href="#1_1"><span>1.1 Nested Item (active) </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#1_1_1"><span>1.1.1 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#1_1_2"><span>1.1.2 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#1_1_3"><span>1.1.3 Nested Item </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#1_2"><span>1.2 Nested Item </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#1_3"><span>1.3 Nested Item </span></a>
              </li>
            </ul>
            <a class="nav-link" href="#2"><span>2. List item </span></a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#2_1"><span>2.1 Nested Item </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#2_1_1"><span>2.1.1 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#2_1_2"><span>2.1.2 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#2_1_3"><span>2.1.3 Nested Item </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#2_2"><span>2.2 Nested Item </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#2_3"><span>2.3 Nested Item </span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Variante scura

Il nav ha due versioni, light e dark.

Lo stile di default è di background bianco con testo di colore primario su desktop e mobile.

**Temi Navscroll**  
Per cambiare il tema è sufficiente aggiungere le seguenti classi al tag `<nav class="navbar">`:

**`.theme-dark-mobile`**: background scuro, testi e links bianco. (modifica unicamente la versione mobile del Navscroll).

**`.theme-dark-desktop`**: background scuro, testi e links di colore bianco. (modifica unicamente la versione desktop del Navscroll)

{% capture example %}
<nav class="navbar it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side theme-dark-mobile theme-dark-desk">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavC" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavC"><span class="it-list"></span>1. Introduzione
  </button>
  <div class="navbar-collapsable" id="navbarNavC">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button"><span class="it-close"></span>close
      </button>
    </div>
    <a class="it-back-button" href="#"><i class="it-chevron-left " aria-hidden="true"> </i><span>Back </span></a>
    <div class="menu-wrapper">
      <div class="link-list-wrapper">
        <h3 class="no_toc">header</h3>
        <ul class="link-list">
          <li class="nav-item active">
            <a class="nav-link active" href="#1"><span>1. Introduzione </span></a>
            <ul class="link-list">
              <li class="nav-link active">
                <a class="nav-link active" href="#1_1"><span>1.1 Nested Item (active) </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#1_1_1"><span>1.1.1 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#1_1_2"><span>1.1.2 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#1_1_3"><span>1.1.3 Nested Item </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#1_2"><span>1.2 Nested Item </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#1_3"><span>1.3 Nested Item </span></a>
              </li>
            </ul>
            <a class="nav-link" href="#2"><span>2. List item </span></a>
            <ul class="link-list">
              <li class="nav-link">
                <a class="nav-link" href="#2_1"><span>2.1 Nested Item </span></a>
                <ul class="tertiary link-list">
                  <li class="nav-link"><a class="nav-link" href="#2_1_1"><span>2.1.1 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#2_1_2"><span>2.1.2 Nested Item </span></a></li>
                  <li class="nav-link"><a class="nav-link" href="#2_1_3"><span>2.1.3 Nested Item </span></a></li>
                </ul>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#2_2"><span>2.2 Nested Item </span></a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="#2_3"><span>2.3 Nested Item </span></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}


