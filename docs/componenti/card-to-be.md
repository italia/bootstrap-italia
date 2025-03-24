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

Appunti: i titoli sono `h3` e i sottotitoli o periodi semplici paragrafi stilati, per evitare ridondanza. La gerarchia del titolo è corretta se il gruppo di card è contenuto dentro un livello `h2`. Andrà quindi aggiustata rispetto al contesto.

Appunti: classi utilità: 
- `.card-height-full` e `card-height-auto` per gestire le altezze, per es. quando più card affiancate (auto da verificarne l'utilità)
- `.card-border-top` e relativo colore `card-border-top-COLORE`, può essere solo decorativo questo elemento
- `.card-img` per card con immagini, occhio alla posizione dell'immagine sotto il titolo, invertita con `order: -1`
- `.card-title-icon` per titoli con icona a lato
- `.card-footer` per racchiudere una eventuale azione o link secondari nel piede 
- `.card-title` esce dal `.card-body` per poter permetttere "l'inversione dell'ordine" dell'immagine

Appunti: occhio alla semantica: 
- `article` è la card stessa
  - se il primo child non è un `h` avrà bisogno di aria-labelledby che punti all'`h` che segue
  - `footer` è il piede della card, con le cose correlate (data, categoria, argomenti, status, ...) 
  - `time` si usa per le date, abbastanza standard attributo `datetime` per gli SR
  - i link secondari della card sono ora in un `div` `.card-footer`, forse dovrebbe cambiare il nome della classe per evitare confusione con il footer dell'article che precede? 

Appunti: occhio alle info necessarie per Lettori schermo, in particolar modo sui metadati: 
- nascoste con `.visually-hidden` (es. "Categoria correlata: ", "Argomento correlato: ") o applicate con `aria-label` (es. "Argomenti correlati: ")

Appunti: griglia base a 3 colonne su `lg`.

Appunti to do extra: pseudo element trick for full focus on main link/click/touch come opzionale?  

{% capture example %}

<div class="row card-to-be">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img card-height-full card-border-top card-border-top-test rounded shadow-sm border">
      <h3 class="card-title card-title-icon no_toc">
        <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h3>
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="card-body">
        <p class="card-subtitle no_toc">Sottotitolo o periodo</p>
        <address class="card-signature">di Maria Verde</address>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <p class="card-text">Se ci fosse un secondo paragrafo <a href="#" class="card-link">con un link</a> questa è la resa visiva.</p>
        <a href="#" class="card-link">Un link</a>
        <a href="#" class="card-link">Un altro link</a>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href="#" class="card-link">Un link in elenco</a></li>
          <li class="list-group-item"><a href="#" class="card-link">Un altro link in elenco</a></li>
          <li class="list-group-item">Un item elenco senza link</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Un link</a>
          <a href="#" class="card-link">Un altro link</a>
          <a href="#" class="btn btn-primary">Una azione</a>
        <footer class="card-related">
          <div class="card-taxonomy">
            <a href="#" class="card-category card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
            <ul class="card-chips chips-list" aria-label="Argomenti correlati: ">
              <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                <span class="visually-hidden">Argomento: </span><span class="chip-label">Sviluppo interfaccia</span>
              </a></li>
              <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                <span class="visually-hidden">Argomento: </span><span class="chip-label">Open source</span>
              </a></li>
              <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                <span class="visually-hidden">Argomento: </span><span class="chip-label">Progettazione interfaccia</span>
              </a></li>
            </ul>
          </div>
          <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <div class="card-footer" aria-label="Azioni correlate:">
        <a href="#" class="btn btn-outline-primary">Azione secondaria</a>
        <a href="#" class="card-link">Link secondario</a>
      </div>
    </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img card-height-full rounded shadow">
      <h3 class="card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="descrizione immagine">
          </figure>
        </div>
      </div>
      <div class="card-body">
        <p class="card-subtitle no_toc">Sottotitolo o periodo</p>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="card-related">
          <div class="card-taxonomy">
              <ul class="card-chips chips-list" aria-label="Argomenti correlati: ">
                <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                  <span class="visually-hidden">Argomento: </span><span class="chip-label">Art direction</span>
                </a></li>
              </ul>
          </div>
          <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <footer class="card-related card-footer">
        <div class="card-taxonomy">
            <ul class="card-chips chips-list" aria-label="Argomenti correlati: ">
              <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
                <span class="visually-hidden">Argomento: </span><span class="chip-label">Art direction</span>
              </a></li>
            </ul>
        </div>
        <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
      <div class="card-footer" aria-label="Link correlati:">
        <a href="#" class="card-link">Link secondario</a>
      </div>
    </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img rounded shadow-lg mb-3">
      <h3 class="card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="img-responsive-wrapper">
        <div class="img-responsive img-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="descrizione immagine">
          </figure>
        </div>
      </div>
      <div class="card-body">
        <address class="card-signature">di Maria Verde</address>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="card-related">
          <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
    </article>
    <!--end card-->
    <!--start card-->
    <article class="card rounded shadow-sm border">
      <h4 class="card-title card-title-icon h5 no_toc">
        <a href="#">Titolo un po' lungo ad esempio di un bando a cui poter partecipare h4 visto h5</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="card-body">
        <p class="card-subtitle no_toc">Sottotitolo o periodo</p>
        <footer class="card-related">
          <div class="card-taxonomy">
            <div class="chip chip-simple chip-sm chip-success">
              <span class="visually-hidden">Stato della lavorazione: </span><span class="chip-label">Aperto</span>
           </div>
          </div>
          <span class="card-date text-warning"><strong>Scadenza: </strong><time class="card-date text-warning" datetime="10/12/{{ 'now' | date: "%Y" }}">31 gennaio, {{ 'now' | date: "%Y" }}</time></span>
        </footer>
      </div>
      <div class="card-footer" aria-label="Azioni correlate:">
        <a href="#" class="btn btn-outline-primary btn-xs btn-icon Zd-md-block">
          <span>Azione secondaria</span>
          <svg class="icon icon-primary ms-2" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </a>
      </div>
    </article>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
