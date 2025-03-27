---
layout: docs
title: Card (To be)
description: Lavori in corso sulle nuove Card di .italia
group: componenti
toc: true
---

{% capture callout %}
#### Lavori in corso 

Durante le lavorazione in questa PR il componente Card classico è stato raccolto in `.row` con classe `.card-old-one`, in tutte le sue varianti. La nuova versione "to be" è raccolta in righe con classi `.card-to-be`. Questo è stato fatto per semplificare il refactoring dei SCSS. A fine lavorazioni l’obiettivo è far convivere per un po’ di tempo i CSS per le nuove Card To Be insieme alle vecchie, per permettere un passaggio graduale. **Al momento è tutto in corso d'opera, be polite.** 
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Strutture card

La **card** è un elemento `article` con come primo figlio il titolo heading `.card-title`.
Sono disponibili le classi `.card-height-full` e `.card-height-auto` per gestire le altezze, per esempio nel caso di più card affiancate.

Se è possibile si consiglia di usare il **titolo** come elemento cliccabile, senza demandare a collegamenti suggessivi.
Per usare titoli con l'icona a lato si usa la classe `.card-title-icon` sull'elemento `.card-title`.

Se è presente un'**immagine** è disponibile la classe `.card-img`. L'immagine deve essere inserita di seguito all'elemento `.card-title`, l'ordine di visualizzazione viene di fatto invertito via CSS applicando `order: -1;` al contenitore dell'immagine, ma rimane corretto nel DOM. 

Il **corpo dell'elemento** vive nell'elemento `.card-body` che applica le corrette spaziature. È possibile usare più `.card-body`, ad esempio per permettere di separare un blocco lista `.list-group` utile per riprodurre per esempio un elenco di collegamenti correlati. 

Gli elementi di **metadati** della Card (tassonomie, stato e data) sono compresi in un elemento `footer` per facilitarne l'individuazione nel markup.
L'elemento `footer`, con classe `.card-related`, può vivere dentro il `.card-body` o, in alternativa, è possibile associargli la classe `.card-footer` per separarlo da questo visivamente e, nel caso di card a tutta altezza, averlo sempre attaccato al bordo inferiore.
Le tassonomie vivono nell'elemento `.card-taxonomy` e, laddove necessario, sono implementate come liste (esempio lista argomenti correlati).
Le date nell'elemento `time` a cui va associato il corretto attributo `datetime`. 

La classe `.card-footer` inoltre è utile per creare uno **spazio secondario** che può ospitare un eventuale collegamento o pulsante secondario.  

Per l'elemento `article` è disponibile la classe `.card-border-top` (e relativo colore `card-border-top-COLORE`) come mero elemento decorativo. Se utilizzato per trasmettere valore semantico alla Card che lo adotta non sarebbe corretto. 


{% capture callout %}
#### Accessibilità
Se il titolo **`.card-title`** non fosse il primo elemento dell'`article`, sarebbe opportuno collegarlo con `aria-labelledby="ID_TITOLO"` e avendo premura di aggiungere `id="ID_TITOLO"` al titolo.

I titoli sono **`h3`** e i sottotitoli o periodi semplici paragrafi stilati, per evitare ridondanza. La gerarchia del titolo è corretta se la Card è contenuta dentro un livello `h2`. Andrà quindi aggiustata rispetto al contesto.

La scelta di usare l'elemento **`article`** e non un semplice `div` è una scelta ponderata attentamente, ma certamente non l'unica possibile. Siamo consapevoli che alcune tipologie di lettori di schermo e browser non ne beneficiano. È vero però che alcuni tra i più diffusi lettori di schermo lo supportano (JAWS, VoiceOver, ...) o lo possono fare previa scelta nella configurazione (NVDA, ...). È altresì vero che l'uso di `article` e `footer` rendono il markup molto più comprensibile e dovrebbero portare a una più facile applicazione di markup semantico.  

Attenzione alle info necessarie per lettori schermo, in particolar modo sui **metadati** sono nascoste con `.visually-hidden` (es. “Categoria correlata: “, “Argomento correlato: “) o applicate con `aria-label` (es. “Argomenti correlati: “).
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Strutture complete card{% endcomment %}
{% capture example %}
<div class="row card-to-be">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img card-height-full card-border-top card-border-top-test rounded shadow-sm border">
      <!--first element is the title-->
      <h3 class="card-title card-title-icon no_toc">
        <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h3>
      <!--second element is the image if present-->
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--follow the body-->
      <div class="card-body">
        <p class="card-subtitle no_toc">Sottotitolo o periodo</p>
        <address class="card-signature">di Maria Verde</address>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <p class="card-text">Se ci fosse un secondo paragrafo <a href="#" class="card-link">con un link</a> questa è la resa visiva.</p>
        <a href="#" class="card-link">Un link</a>
        <a href="#" class="card-link">Un altro link</a>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href="#" class="card-link">Un link in elenco</a></li>
          <li class="list-group-item"><a href="#" class="card-link">Un altro link in elenco</a></li>
          <li class="list-group-item">Un item elenco senza link</li>
        </ul>
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
      <footer class="card-related card-footer">
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
      <div class="card-footer" aria-label="Azioni correlate:">
        <button href="#" type="button" class="btn btn-outline-secondary btn-icon Zd-md-block">Azione secondaria</button>
        <a href="#" class="card-link">Link secondario</a>
      </div>
    </article>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Esempi applicazione (per ora per provare la flessibilità del markup)

- Una card con un collegamento secondario nel piede.
- Una card con classe `.card-height-full` con due esempi di `footer` dove è presenta la data: dentro l'elemento `.card-body` e con classe `.card-footer`.  
- Una card "servizio o bando" con elemento `.card-title` la cui dimensione è fissata con classe `.h5`, con nei metadati lo stato delle lavorazioni e un pulsante di azione secondaria. 
- Una card senza collegamento, di presentazione. 

{% comment %}Example name: Strutture card{% endcomment %}
{% capture example %}
<div class="row card-to-be">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img card-height-full rounded border shadow-sm">
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
      </div>
      <div class="card-footer" aria-label="Link correlati:">
        <a href="#" class="card-link">Link secondario</a>
        <a href="#" class="card-link">Altro link secondario</a>
      </div>
    </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card card-img card-height-full rounded border shadow-sm">
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
      <footer class="card-related card-footer">
        <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card rounded shadow-sm border mb-3">
      <h4 class="card-title card-title-icon no_toc">
        <a href="#">Titolo lungo ad esempio di bando a cui poter partecipare h4</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="card-body">
        <p class="card-subtitle no_toc">Sottotitolo o periodo</p>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
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
        <button href="#" type="button" class="btn btn-outline-secondary btn-icon Zd-md-block">
          <span>Azione secondaria</span>
          <svg class="icon icon-secondary ms-2" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
    <!--end card-->
    <!--start card-->
    <article class="card rounded shadow-sm border">
      <h4 class="card-title card-title-icon no_toc">
        Titolo solo descrittivo un po' lungo ad esempio h4
        <div><svg class="icon icon-secondary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="card-body">
        <p class="card-subtitle no_toc">Sottotitolo o periodo</p>
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
    </article>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Bordi e ombre

La configurazione di base del componente Card prevede un bordo applicato con la classe `.border` e un'ombra `.shadow.sm`. 
Per scelte di elevazione rispetto al contesto si possono usare le versioni con ombre `.shadow` e `.shadow-lg`, valutando di rimuovere il bordo se è chiara la distinzione con lo sfondo.

{% capture callout %}

#### Accessibilità contrasto

È necessario avere un rapporto di contrasto colore di almeno 3:1 tra gli elementi grafici e con lo sfondo. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Strutture card{% endcomment %}
{% capture example %}
<div class="row card-to-be">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card rounded shadow-sm border">
      <h3 class="card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="card-body">
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="card-related">
          <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
    </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card rounded shadow border">
      <h3 class="card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="card-body">
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="card-related">
          <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
    </article>
    <!--end card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start card-->
    <article class="card rounded shadow-lg border">
      <h3 class="card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="card-body">
        <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="card-related">
          <time class="card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
    </article>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}