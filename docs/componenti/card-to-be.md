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
- `.card-height-full` e `card-height-auto` per gestire le altezze, per es. quando più card affiancate
- `.card-border-top` e relativo colore `card-border-top-COLORE`
- `.card-img` per card con immagini
- `.card-title-icon` per titoli con icona a lato
- `.card-footer` per racchiudere una eventuale azione o link secondari nel piede 

Appunti: occhio alla semantica: 
- `article` è la card stessa (da verificare se anche per quelle di servizio e/o presentazione) 
  - `footer` è il piede della card, con le cose correlate (data, categoria, argomenti, status, ...) [ DA VERIFICARE ]
  - `time` si usa per le date, abbastanza standard attributo `datetime` per gli SR [ DA VERIFICARE ]
  - i link secondari della card sono ora in un `div` `.card-footer`, forse dovrebbero stare in un `aside`?

Appunti: occhio alle info necessarie per Lettori schermo, in particolar modo sui metadati: 
- nascoste con `.visually-hidden` (es. "Categoria correlata: ", "Argomento correlato: ") o applicate con `aria-label` (es. "Argomenti correlati: ")

Appunti: griglia base a 3 colonne su `lg`.

Appunti to do extra: pseudo element trick for full focus on main link/click/touch... 

{% capture example %}

<div class="row card-to-be">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img card-height-full card-border-top card-border-top-test rounded shadow-sm border">
      <div class="card-header">
        Featured
      </div>
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="card-header">
        Featured
      </div>
      <h2 class="card-header h6">
        Featured
      </h2>
      <h2 class="card-header">
        Featured
      </h2>
      <div class="card-header border-bottom-0">
      <ul class="nav nav-tabs nav-tabs-cards card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      </div>
      <div class="card-body">
        <h3 class="card-title card-title-icon h3 no_toc">
          <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
          <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
        </h3>
        <h4 class="card-subtitle h4 no_toc">Sottotitolo o periodo</h4>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <p class="card-text">Se ci fosse un secondo paragrafo <a href="#" class="card-link">Card body link</a> questa è la resa visiva.</p>
        <a href="#" class="card-link">Card body link</a>
        <a href="#" class="card-link">Another card body link</a>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href="#" class="card-link">Card link</a></li>
          <li class="list-group-item"><a href="#" class="card-link">Another link</a></li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
          <a href="#">Titolo h3</a>
        </h3>
        <h4 class="card-subtitle h4 no_toc">Sottotitolo o periodo h4</h4>
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
      <div class="card-footer">
        <a href="#" class="card-link">Link secondario</a>
      </div>
    </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img rounded shadow-lg mb-3">
      <div class="img-responsive-wrapper">
        <div class="img-responsive img-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="descrizione immagine">
          </figure>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title h3 no_toc">
          <a href="#">Titolo h3</a>
        </h3>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer>
          <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
    </article>
    <!--end card-->
    <!--start card-->
    <article class="card rounded shadow-sm border">
      <div class="card-body">
        <h4 class="card-title card-title-icon h5 no_toc">
          <a href="#">Titolo un po' lungo ad esempio di un bando a cui poter partecipare h4 visto h5</a>
          <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
        </h4>
        <h5 class="card-subtitle h6 no_toc">Sottotitolo o periodo h5 visto h6</h5>
        <footer>
          <div class="card-related">
            <ul class="card-chips chips-list" aria-label="Stato della lavorazione: ">
              <li class="list-item"><a class="chip chip-simple chip-sm chip-success" href="#">
                <span class="chip-label">Aperto</span>
              </a></li>
            </ul>
          </div>
          <span class="card-date text-warning"><strong>Scadenza: </strong><time class="card-date text-warning" datetime="10/12/{{ 'now' | date: "%Y" }}">31 gennaio, {{ 'now' | date: "%Y" }}</time></span>
        </footer>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-outline-primary btn-xs btn-icon Zd-md-block">
          <span>Etichetta pulsante</span>
          <svg class="icon icon-primary ms-2"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </a>
      </div>
    </article>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
