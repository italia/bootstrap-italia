---
layout: docs
title: Card (To be)
description: Lavori in corso sulle nuove Card di .italia
group: componenti
toc: true
---

## Card struttura

{% comment %}Example name: Struttura base `.card-img`{% endcomment %}

ATTENZIONE: durante le lavorazione in questa PR il componente Card classico è rotto, in tutte le sue varianti. È stato infatti commentato il CSS per intero in modo da lavorare per semplificare. A fine lavorazioni l'obiettivo è far convivere per un po' di tempo i CSS per le nuove Card To Be insieme alle vecchie, per permettere un graduale passaggio. 

Appunti: da sinistra a destra: con bordo e ombra `shadow-sm`; con solo ombra `shadow`; con ombra `shadow-lg` e immagine panoramica `.img-responsive-panoramic`. 

Appunti: i titoli sono `h3` e i sottotitoli o periodi `h4`. Questa gerarchia è corretta se il gruppo di card è contenuto dentro un livello `h2`. Andrà quindi aggiustata rispetto al contesto.

Appunti: classi utilità: 
- `.card-border-top` e relativo colore `card-border-top-COLORE`
- `.card-img` per card con immagini
- `.card-title-icon` per titoli con icona a lato
- `.card-footer` per racchiudere una eventuale azione o link secondari nel piede 

Appunti: occhio alla semantica: 
- `article` è la card stessa
  - `footer` è il piede con le cose correlate (data, categoria, argomenti, status, ...) [ DA VERIFICARE ]
  - i link secondari della card, ora in un `div` `.card-footer`, forse dovrebbero stare in un `aside`?

Appunti: occhio alle info necessarie per SR, in particolar modo sui metadati: 
- nascoste con `.visually-hidden` (es. categoria) o applicate con `aria-label` (es. lista argomenti)

Appunti: griglia base a 3 colonne su `lg`. 

{% capture example %}

<div class="row card-to-be">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
      <article class="card card-img card-height-full card-border-top card-border-top-test rounded shadow-sm border">
        <div class="img-responsive-wrapper">
          <div class="img-responsive Zimg-responsive-panoramic">
            <figure class="img-wrapper">
              <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title card-title-icon h3 no_toc">
            <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
            <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
          </h3>
          <h4 class="card-subtitle h5 mb-1 no_toc">Sottotitolo o periodo</h4>
          <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
          <p class="card-text">Se ci fosse un secondo paragrafo questa è la resa visiva.</p>
          <footer>
            <div class="card-related">
              <a href="#" class="card-category card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
              <ul class="card-chips chips-list" aria-label="Argomenti correlati: ">
                <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                  <span class="chip-label">Sviluppo interfaccia</span>
                </a></li>
                <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                  <span class="chip-label">Open source</span>
                </a></li>
              </ul>
            </div>
            <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
          </footer>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-outline-primary">Azione secondaria</a>
          <a href="#" class="card-link">Link secondario</a>
        </div>
      </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
      <article class="card card-img card-height-full rounded shadow">
        <div class="img-responsive-wrapper">
          <div class="img-responsive Zimg-responsive-panoramic">
            <figure class="img-wrapper">
              <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="descrizione immagine">
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title h3 no_toc">
            <a href="#">Titolo</a>
          </h3>
          <h4 class="card-subtitle h5 mb-1 no_toc">Sottotitolo o periodo</h4>
          <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
          <footer>
            <div class="card-related">
              <ul class="card-chips chips-list" aria-label="Argomenti correlati: ">
                <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                  <span class="chip-label">Art direction</span>
                </a></li>
              </ul>
            </div>
            <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
          </footer>
        </div>
      </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
      <article class="card card-img rounded shadow-lg">
        <div class="img-responsive-wrapper">
          <div class="img-responsive img-responsive-panoramic">
            <figure class="img-wrapper">
              <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="descrizione immagine">
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title card-title-icon h3 no_toc">
            <a href="#">Titolo </a>
            <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
          </h3>
          <h4 class="card-subtitle h5 mb-1 no_toc">Sottotitolo o periodo</h4>
          <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
          <footer>
            <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
          </footer>
        </div>
        <div class="card-footer">
          <a href="#" class="card-link">Link secondario</a>
        </div>
      </article>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
