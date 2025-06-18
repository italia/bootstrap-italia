---
layout: docs
splide: true
title: Carousel
description: Un componente di presentazione per scorrere elementi, immagini o diapositive di testo.
group: componenti
toc: true
---

## Come funziona

Il carousel permette di scorrere una serie di contenuti ed è realizzato con trasformazioni CSS 3D e JavaScript. Può essere utilizzato con una serie di immagini, testo o codice personalizzato. Include anche il supporto per i controlli e gli indicatori precedente/successivo ed i dots di indicazione posizione.

Il carousel può contenere vari tipi di componenti, solitamente cards o immagini.

Il plugin utilizzato è [Splide](https://splidejs.com/).

## Implementazione

{% capture callout %}

#### Accessibilità

Splide segue le [indicazioni del W3C](https://www.w3.org/WAI/tutorials/carousels/) per l'implementazione di un [carousel accessibile](https://splidejs.com/guides/accessibility/).

Il plugin, attraverso l'opzione `i18n`, offre la possibilità di tradurre le `aria-label` utilizzate per gli elementi di interfaccia.  
Bootstrap Italia fornisce le label già tradotte in italiano come segue:

- prev: 'Slide precedente',
- next: 'Slide successiva',
- first: 'Vai alla prima slide',
- last: 'Vai all’ultima slide',
- slideX: 'Vai alla slide %s',
- pageX: 'Vai a pagina %s',
- play: 'Attiva autoplay',
- pause: 'Pausa autoplay',
- carousel: 'carosello',
- select: 'Seleziona una slide da mostrare',
- slide: 'slide',
- slideLabel: '%s di %s',

Per tradurre le label in altre lingue è sufficiente utilizzare l'attributo opzionale `data-splide` sul div `it-carousel-wrapper splide` come nell'esempio seguente:

`<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide data-splide='{"i18n":{"slideX":"Go to slide %s","pageX":"Go to page %s"}}'>`

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Esempi di carousel con diversi contenuti

I wrapper esterni `it-carousel-wrapper` e `splide__track` ricevono le classi necessarie per la corretta visualizzazione dei contenuti.

### Titolo e card base solo testo

Esempio di carousel con [card](/docs/componenti/card) semplici.

**Classi da applicare**:

- div **`it-carousel-wrapper`** : viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` che attiva la visualizzazione a 3 colonne su desktop.
- div **`splide__track`** : vengono aggiunte le classi `ps-lg-3 pe-lg-3` che implementano il padding richiesto dal breakpoint `lg` in su.

**Uso delle ombre nelle card**:

Se usi ombre sulle card (`.shadow`) in carousel base, puoi usare le classi padding (esempio `.p-2` per `.shadow-sm`) su `.it-single-slide-wrapper` per lasciare spazio utile a mostrarle. In questo caso puoi inoltre usare l'attributo `data-splide='{"gap":".5rem", "breadkpoints":{"560":{"gap":".5rem"}, "768":{"gap":".5rem"}, "992":{"gap":".5rem"}}}'` sul contenitore per ridurre l'intercolonna della misura necessaria in tutti i breakpoint (esempio `.5rem` per `.p-2`).

{% comment %}Example name: Titolo e card base solo testo{% endcomment %}
{% capture example %}
<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide data-splide='{"gap":".5rem", "breakpoints":{"768":{"gap":".5rem"}, "992":{"gap":".5rem"}}}'>
  <div class="it-header-block">
    <div class="it-header-block-title">
      <h2 class="no_toc">Titolo del Carousel</h2>
    </div>
  </div>
  <div class="splide__track ps-lg-3 pe-lg-3">
    <ul class="splide__list it-carousel-all">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card editoriali solo testo

Esempio di carousel con [card](/docs/componenti/card) editoriali.

**Classi da applicare**:

- div **`it-carousel-wrapper`**: viene aggiunta la classe `it-carousel-landscape-abstract-three-cols-arrow-visible` che attiva la visualizzazione a 3 colonne su desktop e la visualizzazione delle frecce di navigazione.

**Altezze delle card**:

Per visualizzare card di eguale altezza nel caso di contenuti diversi (card con classe `.it-card-height-full`), è necessario applicare l'attributo `data-splide='{"height":"auto"}'` sul wrapper e la classe `.h-100` su ogni elemento `.it-single-slide-wrapper`. 

{% comment %}Example name: Card editoriali solo testo{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper splide it-carousel-landscape-abstract-three-cols-arrow-visible" data-bs-carousel-splide data-splide='{"height":"auto"}'>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title it-card-title-icon no_toc">
              <a href="#">Titolo contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <address class="it-card-signature">di Gino Rosso</address>
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento. </p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title it-card-title-icon no_toc">
              <a href="#">Titolo contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <address class="it-card-signature">di Gino Rosso</address>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title it-card-title-icon no_toc">
              <a href="#">Titolo contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <address class="it-card-signature">di Gino Rosso</address>
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide lined_slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title it-card-title-icon no_toc">
              <a href="#">Titolo contenuto</a>
            </h3>
            <!--card body content-->
            <div class="it-card-body">
              <address class="it-card-signature">di Gino Rosso</address>
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card editoriali inline (orizzontali)

Usa le varianti di card editoriale inline (orizzontali).

**Classi da applicare**:

- div **`it-carousel-wrapper`**: viene aggiunta la classe `it-carousel-landscape-abstract`.

{% comment %}Example name: Card editoriali inline{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card it-card-inline it-card-image rounded shadow-sm border">
            <!--card first child is all the card content: title (link) + body + footer -->
            <div class="it-card-inline-content">
              <h3 class="it-card-title no_toc">
                <a href="#">Titolo contenuto editoriale</a>
              </h3>
              <div class="it-card-body">
                <address class="it-card-signature">di Maria Verde</address>
                <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
              </div>
              <footer class="it-card-related it-card-footer">
                <div class="it-card-taxonomy">
                  <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
                </div>
                <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
              </footer>
            </div>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card it-card-inline it-card-image rounded shadow-sm border">
            <!--card first child is all the card content: title (link) + body + footer -->
            <div class="it-card-inline-content">
              <h3 class="it-card-title no_toc">
                <a href="#">Titolo contenuto editoriale</a>
              </h3>
              <div class="it-card-body">
                <address class="it-card-signature">di Maria Verde</address>
                <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
              </div>
              <footer class="it-card-related it-card-footer">
                <div class="it-card-taxonomy">
                  <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
                </div>
                <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
              </footer>
            </div>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper p-2">
          <!--start it-card-->
          <article class="it-card it-card-inline it-card-image rounded shadow-sm border">
            <!--card first child is all the card content: title (link) + body + footer -->
            <div class="it-card-inline-content">
              <h3 class="it-card-title no_toc">
                <a href="#">Titolo contenuto editoriale</a>
              </h3>
              <div class="it-card-body">
                <address class="it-card-signature">di Maria Verde</address>
                <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
              </div>
              <footer class="it-card-related it-card-footer">
                <div class="it-card-taxonomy">
                  <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
                </div>
                <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
              </footer>
            </div>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
          </article>
          <!--end it-card-->
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card editoriali con immagine in alto

**Classi da applicare**:

- div **`it-carousel-wrapper`**: viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la visualizzazione a 3 colonne.

{% comment %}Example name: Card editoriali con immagine in alto{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols splide" data-bs-carousel-splide data-splide='{"height":"auto", "gap":".5rem", "breakpoints":{"768":{"gap":".5rem"}, "992":{"gap":".5rem"}}}'>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
            <!--card body content-->
            <div class="it-card-body">
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper h-100 p-2">
          <!--start it-card-->
          <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
            <!--card first child is the title (link)-->
            <h3 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h3>
            <!--card second child is the image (optional)-->
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-16x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
            <!--card body content-->
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <!--finally the card footer metadata-->
            <footer class="it-card-related it-card-footer">
              <div class="it-card-taxonomy">
                <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              </div>
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

<!-- Restore special cards in future https://github.com/italia/bootstrap-italia/commit/8fe9b1b9477b7429c5143d92cf436d1302dcca97#diff-18f7a9cbd5b0f47de01cfe512e233476a291fbe36556b743483a5f1580a156f2 --->

### Fullscreen di immagini

**Classi da applicare**:

div **`it-carousel-wrapper`** :

- viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la formattazione colonnare
- viene aggiunta la classe `it-full-carousel` per la visualizzazione a tutto schermo (orizzontale)
- viene aggiunta la classe `it-big-img` per indicare che l'immagine contenuta è di tipo grande

{% comment %}Example name: Immagini{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-big-img splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine5" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine6" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Fullscreen di immagini di dimensioni standard

**Classi da applicare**:

div **`it-carousel-wrapper`** :

- viene aggiunta la classe `it-carousel-landscape-abstract-three-cols` per la formattazione colonnare
- viene aggiunta la classe `it-full-carousel` per la visualizzazione a tutto schermo (orizzontale)
- viene aggiunta la classe `it-standard-image` per indicare che l'immagine contenuta è di tipo standard.

{% comment %}Example name: Immagini di dimensione standard{% endcomment %}
{% capture example %}

<div class="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-full-carousel it-standard-image splide" data-bs-carousel-splide>
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine1" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine2" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine3" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine4" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine5" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="splide__slide">
        <div class="it-single-slide-wrapper">
          <div class="card-wrapper">
            <div class="card card-img no-after">
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper"><img src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine6" title="titolo immagine" alt="descrizione immagine"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

{% include callout-bundle-methods.md toggle="`data-bs-carousel-splide`" %}

È possibile abilitare un Carousel manualmente con:

```js
import { Carousel } from 'bootstrap-italia';

const elementList = document.querySelectorAll('.splide');
const carouselElements = elementList.forEach((element) => {
  return new Carousel(element)
})
```

#### Metodi

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Metodo</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>dispose</td>
        <td>Rimuove le funzionalità di Carousel</td>
      </tr>
      <tr>
        <td>getInstance</td>
        <td>Metodo statico che restituisce l'istanza Carousel associata ad un elemento del DOM. Esempio: <code>bootstrap.Carousel.getInstance(element)</code></td>
      </tr>
      <tr>
        <td>getOrCreateInstance</td>
        <td>Metodo statico che restituisce un'istanza Carousel associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.Carousel.getOrCreateInstance(element)</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Breaking change

{% capture callout %}
Implementato negli esempi il nuovo componente card definito dalle classi `.it-card` e relativi modificatori. Il markup degli esempi e gli attributi per attivare il componente sono cambiati laddove c'è la necessità di gestire le altezze delle card con classi `.it-card-full-height` e/o la necessità di mostrarne le ombre `.shadow-`. 

Le classi legacy di Bootstrap `.card`, utili a implementare anche le precedenti varianti del componente carousel, sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 
{% endcapture %}{% include callout-breaking.html version="2.16.0" content=callout type="danger" %}

{% capture callout %}
Lato JavaScript il componente Carousel deve essere importato tramite la classe 
`Carousel` e non più `CarouselBI`.
{% endcapture %}{% include callout-breaking.html version="2.14.0" content=callout type="danger" %}
