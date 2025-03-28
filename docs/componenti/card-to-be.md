---
layout: docs
title: Card (To be)
description: Lavori in corso sulle nuove Card di .italia
group: componenti
toc: true
---

{% capture callout %}
#### Lavori in corso 

Il nuovo componente Card di Bootstrap Italia usa la nuova classe di stile dedicata `.it-card`, e tutte le combinazioni di modificatori come `.it-card-title` e `.it-card-body`. La versione precedente, che utilizzava e modificava le classi originali di Bootstrap `.card`, a fine lavorazioni della presente PR saranno deprecate, in tutte le varianti. Gli stili CSS delle precedenti versioni saranno salvaguardati fino al prossimo rilascio maggiore di Bootstrap Italia, per permettere un passaggio graduale. **Al momento è tutto in corso d'opera, be polite.** 
{% endcapture %}{% include callout.html content=callout type="warning" %}

## To do

1. ✅ rifinire gestione spaziature e dimensioni con variabili e resa visiva
2. 🚧 aggiungere modalità ed esempi per gestione gruppi di card (colonne, flex, etc.) e validare soluzione @container per le varianti responsive
3. ✅ aggiungere strutture per card varianti editoriali "mini" e "large"
4. 🚧 implementare strategie di fallback per eventuali proprietà "moderne" in ottica supporto browser >1% IT (vedi config browserlist dedicato)
5. 🔮 riscrivere documentazione esempi con i nuovi gruppi, eliminare uso colonne classiche
6. 🔮 preparare una pagina di documentazione divisa per le varianti corrette (editoriali, servizio, ...) e con le "utility" a margine (ombre, gruppi, ...)
5. ... 

## Strutture card

La **card** è un elemento `article` con come primo figlio il titolo heading `.it-card-title`.
Sono disponibili le classi `.it-card-height-full` e `.it-card-height-auto` per gestire le altezze, per esempio nel caso di più card affiancate.

Se è possibile si consiglia di usare il **titolo** come elemento cliccabile, senza demandare a collegamenti suggessivi.
Per usare titoli con l'icona a lato si usa la classe `.it-card-title-icon` sull'elemento `.it-card-title`.

Se è presente un'**immagine** è disponibile la classe `.it-card-img`. L'immagine deve essere inserita di seguito all'elemento `.it-card-title`, l'ordine di visualizzazione viene di fatto invertito via CSS applicando `order: -1;` al contenitore dell'immagine, ma rimane corretto nel DOM. 

Il **corpo dell'elemento** vive nell'elemento `.it-card-body` che applica le corrette spaziature. È possibile usare più `.it-card-body`, ad esempio per permettere di separare un blocco lista `.list-group` utile per riprodurre per esempio un elenco di collegamenti correlati. 

Gli elementi di **metadati** della Card (tassonomie, stato e data) sono compresi in un elemento `footer` per facilitarne l'individuazione nel markup.
L'elemento `footer`, con classe `.it-card-related`, può vivere dentro il `.it-card-body` o, in alternativa, è possibile associargli la classe `.it-card-footer` per separarlo da questo visivamente e, nel caso di card a tutta altezza, averlo sempre attaccato al bordo inferiore.
Le tassonomie vivono nell'elemento `.it-card-taxonomy` e, laddove necessario, sono implementate come liste (esempio lista argomenti correlati).
Le date nell'elemento `time` a cui va associato il corretto attributo `datetime`. 

La classe `.it-card-footer` inoltre è utile per creare uno **spazio secondario** che può ospitare un eventuale collegamento o pulsante secondario.  

Per l'elemento `article` è disponibile la classe `.it-card-border-top` (e relativo colore `it-card-border-top-COLORE`) come mero elemento decorativo. Se utilizzato per trasmettere valore semantico alla Card che lo adotta non sarebbe corretto. 


{% capture callout %}
#### Accessibilità
Se il titolo **`.it-card-title`** non fosse il primo elemento dell'`article`, sarebbe opportuno collegarlo con `aria-labelledby="ID_TITOLO"` e avendo premura di aggiungere `id="ID_TITOLO"` al titolo.

I titoli sono **`h3`** e i sottotitoli o periodi semplici paragrafi stilati, per evitare ridondanza. La gerarchia del titolo è corretta se la Card è contenuta dentro un livello `h2`. Andrà quindi aggiustata rispetto al contesto.

La scelta di usare l'elemento **`article`** e non un semplice `div` è una scelta ponderata attentamente, ma certamente non l'unica possibile. Siamo consapevoli che alcune tipologie di lettori di schermo e browser non ne beneficiano. È vero però che alcuni tra i più diffusi lettori di schermo lo supportano (JAWS, VoiceOver, ...) o lo possono fare previa scelta nella configurazione (NVDA, ...). È altresì vero che l'uso di `article` e `footer` rendono il markup molto più comprensibile e dovrebbero portare a una più facile applicazione di markup semantico.  

Attenzione alle info necessarie per lettori schermo, in particolar modo sui **metadati** sono nascoste con `.visually-hidden` (es. “Categoria correlata: “, “Argomento correlato: “) o applicate con `aria-label` (es. “Argomenti correlati: “).
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Strutture complete card{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-img it-card-border-top it-card-border-top-danger rounded shadow-sm border">
      <!--first element is the title-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h3>
      <!--second element is the image if present-->
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--follow the body-->
      <div class="it-card-body">
        <p class="it-card-subtitle no_toc">Sottotitolo o periodo</p>
        <address class="it-card-signature">di Maria Verde</address>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <p class="it-card-text">Se ci fosse un secondo paragrafo <a href="#" class="it-card-link">con un link</a> questa è la resa visiva.</p>
        <a href="#" class="it-card-link">Un link</a>
        <a href="#" class="it-card-link">Un altro link</a>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href="#" class="it-card-link">Un link in elenco</a></li>
          <li class="list-group-item"><a href="#" class="it-card-link">Un altro link in elenco</a></li>
          <li class="list-group-item">Un item elenco senza link</li>
        </ul>
        <a href="#" class="it-card-link">Un link</a>
        <a href="#" class="it-card-link">Un altro link</a>
        <a href="#" class="btn btn-primary">Una azione</a>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          <ul class="it-card-chips chips-list" aria-label="Argomenti correlati: ">
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
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
      <div class="it-card-footer" aria-label="Azioni correlate:">
        <button href="#" type="button" class="btn btn-outline-secondary btn-icon Zd-md-block">Azione secondaria</button>
        <a href="#" class="it-card-link">Link secondario</a>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Esempi applicazione (per ora per provare la flessibilità del markup)

- Una card con un collegamento secondario nel piede.
- Una card con classe `.it-card-height-full` con due esempi di `footer` dove è presenta la data: dentro l'elemento `.it-card-body` e con classe `.it-card-footer`.  
- Una card "servizio o bando" con elemento `.it-card-title` la cui dimensione è fissata con classe `.h5`, con nei metadati lo stato delle lavorazioni e un pulsante di azione secondaria. 
- Una card senza collegamento, di presentazione. 

{% comment %}Example name: Strutture card{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-img it-card-height-full rounded border shadow-sm">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" alt="descrizione immagine">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-subtitle no_toc">Sottotitolo o periodo</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <div class="it-card-footer" aria-label="Link correlati:">
        <a href="#" class="it-card-link">Link secondario</a>
        <a href="#" class="it-card-link">Altro link secondario</a>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-img it-card-height-full rounded border shadow-sm">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="img-responsive-wrapper">
        <div class="img-responsive img-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" alt="descrizione immagine">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <address class="it-card-signature">di Maria Verde</address>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo lungo ad esempio di bando a cui poter partecipare h4</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="it-card-body">
        <p class="it-card-subtitle no_toc">Sottotitolo o periodo</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <div class="chip chip-simple chip-sm chip-success">
            <span class="visually-hidden">Stato della lavorazione: </span><span class="chip-label">Aperto</span>
          </div>
        </div>
        <span class="it-card-date text-warning"><strong>Scadenza: </strong><time class="it-card-date text-warning" datetime="10/12/{{ 'now' | date: "%Y" }}">31 gennaio, {{ 'now' | date: "%Y" }}</time></span>
      </footer>
      <div class="it-card-footer" aria-label="Azioni correlate:">
        <button href="#" type="button" class="btn btn-outline-secondary btn-icon Zd-md-block">
          <span>Azione secondaria</span>
          <svg class="icon icon-secondary ms-2" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
      </div>
    </article>
    <!--end it-card-->
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <h4 class="it-card-title it-card-title-icon no_toc">
        Titolo solo descrittivo un po' lungo ad esempio h4
        <div><svg class="icon icon-secondary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="it-card-body">
        <p class="it-card-subtitle no_toc">Sottotitolo o periodo</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Varianti inline

Due varianti di tipo editoriale che si possono usare per esempio in contesti di presentazione di gruppi di notizie. È possibile combinare il formato di default con i formati inline. La variante `.it-card-inline-mini` rimane inline anche su mobile. Le altre varianti solo `.it-card-inline` su mobile prendono il layout standard. 
Nell'esempio che segue è presente anche la card semplice, la prima a sinistra. 

{% comment %}Example name: Varianti inline{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-img rounded shadow-sm border mb-3">
     <!--first element is all the card content: title + footer-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <!--second element is the image if present-->
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-inline-reverse it-card-img rounded shadow-sm border">
     <!--first element is all the card content: title + footer-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo breve</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <!--second element is the image if present-->
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-img rounded shadow-sm border mb-3">
     <!--first element is all the card content-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto può essere anche lungo così o andare oltre</a>
        </h3>
        <div class="it-card-body">
          <p class="it-card-subtitle no_toc">Sottotitolo o periodo</p>
          <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        </div>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
        <div class="it-card-footer" aria-label="Azioni correlate:">
          <a href="#" class="it-card-link">Link secondario</a>
          <a href="#" class="it-card-link">Link secondario</a>
        </div>
      </div>
      <!--second element is the image if present-->
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-reverse it-card-img rounded shadow-sm border">
     <!--first element is all the card content-->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo breve</a>
        </h3>
        <div class="it-card-body">
          <p class="it-card-subtitle no_toc">Sottotitolo o periodo</p>
          <p class="it-card-text">Questo è un testo breve.</p>
        </div>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
        <div class="it-card-footer" aria-label="Azioni correlate:">
          <a href="#" class="it-card-link">Link secondario</a>
          <a href="#" class="it-card-link">Link secondario</a>
        </div>
      </div>
      <!--second element is the image if present-->
      <div class="img-responsive-wrapper">
        <div class="img-responsive Zimg-responsive-panoramic">
          <figure class="img-wrapper">
            <img src="https://placehold.co/357x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" alt="Descrizione immagine se ha senso nel contesto, sennò marcare con decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Bordi e ombre

La configurazione di base del componente Card prevede un bordo applicato con la classe `.border` e un'ombra `.shadow.sm`. 
Per scelte di elevazione rispetto al contesto si possono usare le versioni con ombre `.shadow` e `.shadow-lg`, valutando di rimuovere il bordo se è chiara la distinzione con lo sfondo.

{% capture callout %}

#### Accessibilità contrasto con lo sfondo

In un mondo ideale, se la "it-card" è una struttura visiva e semantica, sarebbe auspicabile avere un rapporto di contrasto colore di almeno 3:1 tra questa e lo sfondo. Si suggerisce di usare bordi, livelli di ombre e anche il colore di sfondo retrostante per evidenziarle.   

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Strutture card{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-lg border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-lg">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di card

Gruppi di card con layout responsive usando `.it-card-group` in un `div` contenitore.

{% comment %}Example name: Gruppi di card responsive{% endcomment %}
{% capture example %}
<div>
  <div class="it-card-group">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo della prima card</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo della seconda card</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo della terza card</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Numero di colonne specifico usando `.it-card-group-N-cols`.
  
{% comment %}Example name: Gruppi di card con colonne specifiche{% endcomment %}
{% capture example %}
<div>
  <div class="it-card-group it-card-group-3-cols">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card in due colonne</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo mostra sempre due colonne su schermi medi e grandi.</p>
      </div>
    </article>
    <article class="it-card it-card-img rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card in due colonne</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo mostra sempre due colonne su schermi medi e grandi.</p>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
Centrate orizzontalmente con `.it-card-group-center`.

{% comment %}Example name: Gruppi di card centrate{% endcomment %}
{% capture example %}  
<div>
  <div class="it-card-group it-card-group-3-cols it-card-group-center">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card centrata</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo ha le card centrate nella pagina.</p>
      </div>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card centrata</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo ha le card centrate nella pagina.</p>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}