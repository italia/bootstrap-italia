---
layout: docs
title: Card
description: Un contenitore di testi e immagini con molte opzioni e varianti.
group: componenti
toc: true
---

## Introduzione
Le card sono contenitori flessibili e versatili per organizzare e presentare contenuti strutturati in modo coerente, adattabili a diversi contesti e necessità.

Aiutano a presentare un gruppo di contenuti correlati, come articoli o sezioni di un sito web e permettono di continuare la navigazione verso le rispettive pagine di dettaglio.

{% capture callout %}
#### Questo è un nuovo componente card
Le card sono definite dalle classi `.it-card` e relativi modificatori. Le classi legacy di Bootstrap `.card` sono deprecate, **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore per permettere una migrazione graduale**. 

[Vai alla documentazione delle card legacy (deprecato)](../card-old/)
{% endcapture %}{% include callout.html content=callout type="warning" %}

## La struttura base della card
Nota bene: negli esempi seguenti le card sono all’interno di colonne Bootstrap, se non segnalato diversamente.
L’inizio della card vera e propria è segnalato nell'HTML dal commento `<!--start it-card-->`.

Esempio base con immagine, descrizione e data:

{% comment %}Example name: Card semplice{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

La card è un contenitore con **semantica** `article`, con un titolo (heading) con classe `.it-card-title` come primo elemento figlio.
È consigliato implementare il **titolo** (`.it-card-title`) come elemento cliccabile principale, evitando di distribuire collegamenti in tutta la card.

{% capture callout %}

#### Accessibilità titoli

Negli esempi è stato utilizzato il tag `h3` per il titolo delle card. <br>
Utilizzare il tag `h` corretto a seconda del contesto.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Per inserire un'**immagine** è disponibile la classe `.it-card-image` da applicare alla card. L'immagine segue sempre l'elemento titolo, l'ordine di visualizzazione è invertito in automatico. 

Segue il **corpo** della card `.it-card-body`, che può contenere diversi contenuti di approfondimento a seconda del contesto d'uso. È possibile utilizzare più elementi `.it-card-body` per separare blocchi di contenuto.

Gli eventuali **metadati** (ad esempio categorie, argomenti e date) sono presentati in un elemento `footer` con classe `.it-card-related`. Questo può vivere nel corpo della card, oppure, seguirlo aggiungendo la classe `.it-card-footer` in modo da attaccarlo al bordo inferiore nei casi di card con altezza fissa.

## Card per la pubblicazione di contenuti

Utili a fornire un'anteprima per pagine come notizie, articoli ed eventi. Le classiche card con cui puoi comporre una sezione di copertina delle notizie in evidenza nella pagina principale del sito.  

### Card editoriali standard

Esempi con descrizione e data di pubblicazione della scheda, con categoria oppure con argomenti (tag) di appartenenza, con e senza immagine. 

Da notare che la struttura dei metadati include:
- Categorie nell'elemento `.it-card-taxonomy`
- Tag/argomenti in liste quando sono più di uno
- Date in elementi HTML semantici `time`, con il corretto attributo `datetime`

{% comment %}Example name: Card editoriale standard{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
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
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
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
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
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
          <ul class="it-card-chips chips-list" aria-label="Argomenti correlati: ">
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 2</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 3</span>
            </a></li>
          </ul>
        </div>
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card editoriali featured

Le card possono essere usate anche per presentare contenuti di approfondimento che vivono su altre piattaforme terze. 
In questo caso è bene comunicare dove si trova il contenuto e l'uscita dal sito stesso. Per farlo è possibile anche aggiungere un'icona a fianco del titolo, usando la classe `.it-card-title-icon` come negli esempi che seguono. 

{% capture callout %}

#### Accessibilità link esterni

Negli esempi il `target` del link non è usato, nell'ottica di favorire la normale navigazione del browser. Se si rimanda a nuovi tab o finestre si deve comunicare all'utente in modo chiaro con un'icona di link esterno e un testo alternativo o nascosto che ne comunichi l'intento anche ai lettori di schermo.  

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

È possibile mostrare un sottotitolo per le card applicando la classe `.it-card-subtitle` su un elemento paragrafo.

È possibile inoltre indicare l'autore del contenuto usando l'elemento semantico `address` con classe `.it-card-signature`. 

{% comment %}Example name: Card editoriale standard{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto featured <span class="visually-hidden">(link esterno)</span></a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-external-link"></use></svg></div>
      </h3>
      <!--card body content-->
      <div class="it-card-body">
        <address class="it-card-signature">di Maria Verde</address>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto featured <span class="visually-hidden">(link esterno su piattaforma XYZ)</span></a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
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
        <p class="it-card-subtitle">Sottotitolo del contenuto</p>
        <address class="it-card-signature">di Maria Verde</address>
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
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto featured <span class="visually-hidden">(link esterno su Designers Italia)</span></a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-designers-italia"></use></svg></div>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-subtitle">Sottotitolo del contenuto</p>
        <address class="it-card-signature">di Maria Verde</address>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <ul class="it-card-chips chips-list" aria-label="Argomenti correlati: ">
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 2</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 3</span>
            </a></li>
          </ul>
        </div>
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Card inline orizzontali

È possibile ottenere una disposizione orizzontale della struttura della card usando la classe `.it-card-inline` e cambiando leggermente la struttura rispetto al codice HTML della card base: il titolo, il corpo della card e il piede, laddove presenti, sono infatti raccolti in un unico contenitore `.it-card-inline-content` che precede sempre l'immagine. 

Questo tipo di card è da utilizzare solo quando è disponibile un'immagine, utile per creare sezioni in cui una o due card sono in evidenza rispetto a un gruppo di card più piccole.

L'aspetto orizzontale è presentato all'utente solo su schermi medio-grandi non ingranditi, torna invece in un approccio responsivo ad una disposizione verticale simile alla card base su dispositivi più piccoli, oppure in viste ingrandite. L'immagine, se presente, assume quindi le proporzioni definite con le classi `.ratio-`. 

Per usare al meglio questo tipo di card è consigliabile usare "queries" di impaginazione sensibili al proprio contenitore, piuttosto che al viewport come le colonne in esempio. Per permettere lo sviluppo orizzontale solo se lo spazio a disposizione è davvero sufficiente. È disponibile più avanti nella pagina una sezione dedicata a questo tipo di queries (sperimentali).

Per invertire il solo ordine visivo tra destra e sinistra è possibile applicare la classe `.it-card-inline-reverse`. 

{% comment %}Example name: Card inline orizzontali{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-12 mb-3 mb-md-4 col-lg-10 col-xl-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto editoriale</a>
        </h3>
        <div class="it-card-body">
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
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-12 mb-3 mb-md-4 col-lg-10 col-xl-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto editoriale</a>
        </h3>
        <div class="it-card-body">
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
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card inline mini

È disponibile una variante "mini" delle card orizzontali, ideale per raggruppare in poco spazio card correlate, è utile per piccole card editoriali secondarie. Si ottiene usando la classe `.it-card-inline-mini` e la configurazione inline orizzontale, in questo caso, viene mantenuta anche su dispositivi piccoli o in viste ingrandite. 

È consigliabile non aggiungere altri contenuti oltre al titolo (da tenere breve), l'eventuale categoria o argomento principale, e la data. 

L'immagine è opzionale e per invertire il solo ordine visivo tra destra e sinistra è possibile applicare la classe `.it-card-inline-reverse`. 

{% comment %}Example name: Card editoriale inline mini{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto editoriale breve</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto editoriale</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo contenuto editoriale</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

### Card per eventi

È possibile aggiungere un paragrafo all'inizio del corpo della card con la data o la durata dell'evento. La classe da usare sul paragrafo in questo caso è `.it-card-subtitle`. 

{% capture callout %}

#### Accessibilità date e orari

Quando si presentano date e orari dell'evento può essere indicato usare l'elemento `time` con l'appropriato attributo `datetime`. 
Inserire eventuali contenuti guida per lettori di schermo solo se realmente necessari per evitare il rumore (ad esempio il `<span class="visually-hidden">Data evento:</span>` presente nel primo esempio che segue). 

È inoltre sempre consigliabile svolgere test di usabilità anche con utenti che utilizzato tecnologie assistive. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

La classe `.it-card-footer` può essere usata anche per creare un ulteriore spazio dedicato a **collegamenti o pulsanti secondari** come negli esempi che seguono. Possono essere utili per quelle situazioni dove il collegamento principale della card, il titolo, porta a una pagina di approfondimento, ma è auspicabile dare direttamente l'accesso dalla card per esempio a iscrizioni o azioni dirette rispetto al contenuto. 

È disponibile la classe `.it-card-link` per i collegamenti `a` usati nel corpo o nel footer della card. Questa classe applica il colore secondario.

{% capture callout %}

#### Accessibilità collegamenti secondari

È importante ricordare di usare link con semantica `a` per presentare collegamenti di navigazione, e pulsanti con semantica `button` per azioni che avvengono in pagina come l'apertura di modali. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}


{% comment %}Example name: Card eventi{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo evento</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-subtitle"><span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>, <span class="visually-hidden">Orario:</span>  <time>11:30</time>–<time>13:00</time></p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded border shadow-sm mb-3">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo evento</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-subtitle">Dal 4 al 6 agosto</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
        </footer>
      </div>
      <div class="it-card-footer" aria-label="Link correlati:">
        <a href="#" class="it-card-link">Iscriviti all'evento</a>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded border shadow-sm mb-3">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo evento</a>
      </h3>
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <p class="it-card-subtitle">Dal 4 al 6 novembre</p>
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <div class="it-card-footer" aria-label="Link correlati:">
        <button type="button" class="btn btn-outline-secondary">Compila il form di iscrizione</button>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Card per eventi inline

È possibile disporre le card eventi in orizzontale usando la classe `.it-card-inline` e avendo cura di raccogliere tutti i contenuti di testo e interattivi in un contenitore `.it-card-inline-content`. 

Come negli altri casi l'immagine segue sempre questo contenitore, ed è possibile invertirne l'ordine solo visivo usando la classe `.it-card-inline-reverse`

{% comment %}Example name: Card eventi inline orizzontali{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-12 mb-3 mb-md-4 col-lg-10 col-xl-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo evento</a>
        </h3>
        <div class="it-card-body">
        <p class="it-card-subtitle"><span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>, <span class="visually-hidden">Orario:</span>  <time>11:30</time>–<time>13:00</time></p>
          <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        </div>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
        </footer>
        <div class="it-card-footer" aria-label="Link correlati:">
          <a href="#" class="it-card-link">Iscriviti all'evento</a>
        </div>
      </div>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-12 mb-3 mb-md-4 col-lg-10 col-xl-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title no_toc">
          <a href="#">Titolo evento</a>
        </h3>
        <div class="it-card-body">
        <p class="it-card-subtitle">Dal 4 al 6 agosto</p>
          <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        </div>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
        </footer>
        <div class="it-card-footer" aria-label="Link correlati:">
          <button type="button" class="btn btn-outline-secondary">Compila il form di iscrizione</button>
        </div>
      </div>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card per media (video, audio)

Le card possono essere usate anche per presentare contenuti media tipo video o audio, che rimandano a pagine di dettaglio oppure direttamente su piattaforme terze. 
Anche in questo caso è bene comunicare la tipologia del contenuto e l'eventuale uscita dal sito stesso. Per farlo è possibile anche aggiungere un'icona a fianco del titolo, usando la classe `.it-card-title-icon`.

{% capture callout %}

#### Accessibilità link esterni

Negli esempi il `target` del link non è usato, nell'ottica di favorire la normale navigazione del browser. Se si rimanda a nuovi tab o finestre si deve comunicare all'utente in modo chiaro con un'icona di link esterno e un testo alternativo o nascosto che ne comunichi l'intento anche ai lettori di schermo.  

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card media video{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto video</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg></div>
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
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto video</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg></div>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
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
          <ul class="it-card-chips chips-list" aria-label="Argomenti correlati: ">
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 2</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 3</span>
            </a></li>
          </ul>
        </div>
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>

<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto audio</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-horn"></use></svg></div>
      </h3>
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
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto audio</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-horn"></use></svg></div>
      </h3>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <ul class="it-card-chips chips-list" aria-label="Argomenti correlati: ">
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 2</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="visually-hidden">Argomento: </span><span class="chip-label">Argomento 3</span>
            </a></li>
          </ul>
        </div>
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Card per media video inline

È possibile disporre le card media di tipo video in orizzontale usando la classe `.it-card-inline` e avendo cura di raccogliere tutti i contenuti di testo e interattivi in un contenitore `.it-card-inline-content`. 

Come negli altri casi l'immagine segue sempre questo contenitore, ed è possibile invertirne l'ordine solo visivo usando la classe `.it-card-inline-reverse`

{% comment %}Example name: Card eventi inline orizzontali{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-12 mb-3 mb-md-4 col-lg-10 col-xl-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title it-card-title-icon no_toc">
          <a href="#">Titolo contenuto video</a>
          <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg></div>
        </h3>
        <div class="it-card-body">
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
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-12 mb-3 mb-md-4 col-lg-10 col-xl-8">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title it-card-title-icon no_toc">
          <a href="#">Titolo contenuto video</a>
          <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg></div>
        </h3>
        <div class="it-card-body">
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
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card informative e di servizio

Utili a fornire un’anteprima per pagine di dettaglio per servizi e bandi, oppure per rappresentare documenti e altri tipi di allegati. 

{% capture callout %}
#### Accessibilità titoli
I titoli `.it-card-title` negli esempi di questo tipo sono `h4`. La gerarchia dei titoli deve adattarsi ovviamente al contesto in cui la card è inserita.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Card per servizi e bandi

Si consiglia di usare alternativamente un breve testo descrittivo `.it-card-text` o sottotitolo `.it-card-subtitle` per descrivere il contesto della card. 

È possibile integrare nell'elemento `footer` lo stato del servizio o bando con un componente chip, e l'eventuale data di scadenza usando lo spazio `it-card-date` e integrandolo con eventuale testo descrittivo come negli esempi che seguono. 

{% capture callout %}

#### Accessibilità date e orari

Quando si presentano date di scadenza può essere indicato usare l'elemento `time` con l'appropriato attributo `datetime`. È in questo caso importante indicare a tutte le persone il loro ruolo di "Scadenza" dichiarandolo nel testo come negli esempi che seguono. Non usare solo il colore (negli esempi `.text-warning`) per veicolarne l'importanza. 

È inoltre sempre consigliabile svolgere test di usabilità anche con utenti che utilizzato tecnologie assistive. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

La classe `.it-card-footer` può essere usata anche per creare un ulteriore spazio dedicato a **collegamenti o pulsanti secondari** come negli esempi che seguono. Possono essere utili per quelle situazioni dove il collegamento principale della card, il titolo, porta a una pagina di approfondimento, ma è auspicabile dare direttamente l'accesso dalla card per esempio a iscrizioni o azioni dirette rispetto al contenuto. 

È disponibile la classe `.it-card-link` per i collegamenti `a` usati nel corpo o nel footer della card. Questa classe applica il colore secondario.

{% capture callout %}

#### Accessibilità collegamenti secondari

È importante ricordare di usare link con semantica `a` per presentare collegamenti di navigazione, e pulsanti con semantica `button` per azioni che avvengono in pagina come l'apertura di modali. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card servizi{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title no_toc">
        <a href="#">Titolo del servizio</a>
      </h4>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
        </footer>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title no_toc">
        <a href="#">Titolo del servizio</a>
      </h4>
      <div class="it-card-body">
       <p class="it-card-subtitle">Sottotitolo del servizio</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <div class="chip chip-simple chip-sm chip-success">
              <span class="visually-hidden">Stato del servizio: </span><span class="chip-label">Attivo</span>
            </div>
          </div>
        </footer>
      </div>
      <div class="it-card-footer" aria-label="Link correlati:">
        <a href="#" class="it-card-link">Requisiti per l'accesso</a>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title no_toc">
        <a href="#">Titolo del bando</a>
      </h4>
      <div class="it-card-body">
        <p class="it-card-subtitle">Sottotitolo del bando</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <div class="chip chip-simple chip-sm chip-success">
              <span class="visually-hidden">Stato del bando: </span><span class="chip-label">Aperto</span>
            </div>
          </div>
          <span class="it-card-date text-warning"><strong>Scadenza: </strong><time class="it-card-date text-warning" datetime="10/12/{{ 'now' | date: "%Y" }}">31 gennaio, {{ 'now' | date: "%Y" }}</time></span>
        </footer>
      </div>
      <div class="it-card-footer" aria-label="Link correlati:">
        <button type="button" class="btn btn-outline-secondary">Compila il form di candidatura</button>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card per documenti e allegati

Le card per rappresentare documenti e allegati possono usare un'icona affiancata al titolo usando la classe `.it-card-title-icon`. 

La classe `.it-card-footer` può essere usata per creare un ulteriore spazio dedicato a **collegamenti secondari** come negli esempi che seguono. Possono essere utili per quelle situazioni dove il collegamento principale della card, il titolo, porta a una pagina di approfondimento della risorsa, ma è auspicabile dare direttamente l'accesso dalla card per esempio a scaricare la risorsa collegata.

{% comment %}Example name: Card servizi{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo del documento</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="it-card-body">
        <p class="it-card-text">Eventuale breve estratto descrittivo del documento.</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
        </footer>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo del documento</a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg></div>
      </h4>
      <div class="it-card-body">
        <p class="it-card-text">Eventuale breve estratto descrittivo del documento.</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
        </footer>
      </div>
      <div class="it-card-footer">
        <span class="me-2">Scarica come:</span> 
        <a href="#" class="it-card-link">ODT (300Kb)<span class="visually-hidden">: Titolo del documento</span></a>
        <a href="#" class="it-card-link">PDF (20Kb)<span class="visually-hidden">: Titolo del documento</span></a>
        <a href="#" class="it-card-link">ODS (400Kb)<span class="visually-hidden">: Titolo del documento</span></a>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo del file allegato <span class="visually-hidden">(Formato ODT, 200Kb)</span></a>
        <div><svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file-odt"></use></svg></div>
      </h4>
      <div class="it-card-body">
        <p class="it-card-text" aria-hidden="true">Formato ODT, 200Kb</p>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card per profili personali 
Utili ad esempio per indicare schede personale o relatori a un evento. Si attivano con la classe `.it-card-profile`. È da notare che la testata della card è costruita con classi di stile dedicate come `.it-card-profile-header` per nome e ruolo. L'immagine di profilo sulla destra è visualizzata integrando il componente avatar in una delle sue varianti. 

Per l'icona o l'immagine del profilo si usa il componente avatar nelle varianti `lg` o `xl`. 

La lista di metadati del profilo è costruita utilizzando liste descrittive `.it-card-description-list` con ogni coppia di item `dd`-`dt` raccolta in un `div` contenitore. 

Per un effetto decorativo, è disponibile la classe `.it-card-border-top` (con varianti di colore `.it-card-border-top-COLORE`). Questa classe non deve essere utilizzata per comunicare significato semantico, ma solo come eventuale elemento decorativo. 

{% capture callout %}
#### Accessibilità titoli
I titoli `.it-card-profile-name` in questi esempi sono `h4`. La gerarchia dei titoli deve adattarsi ovviamente al contesto in cui la card è inserita.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card profilo con iniziali{% endcomment %}
{% capture example %}

<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-profile rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Nome Personale</a>
          </h4>
          <p class="it-card-profile-role">Ruolo nell'organizzazione</p>
        </div>
        <div class="avatar size-lg">
          <p aria-hidden="true">NP</p>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Area:</dt>
            <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
          </div>
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-profile rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Nome Personale</a>
          </h4>
          <p class="it-card-profile-role">Ruolo nell'organizzazione</p>
        </div>
        <div class="avatar size-xl">
          <p aria-hidden="true">NP</p>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Area:</dt>
            <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
          </div>
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-border-top it-card-border-top-secondary rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Nome Personale</a>
          </h4>
          <p class="it-card-profile-role">Ruolo nell'organizzazione</p>
        </div>
        <div class="avatar size-xl">
          <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="">
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Area:</dt>
            <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
          </div>
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card per luoghi

Utili ad esempio per indicare schede località. Si attivano con la classe `.it-card-site`. È da notare che la testata della card è costruita con classi di stile dedicate come `.it-card-place-header` per nome, tipologia ed eventuale indirizzo. 

Lo spazio per l'immagine sulla destra `.it-card-place-image` può essere usato anche per contenere un'icona. L'accortezza è racchiuderna dentro un `div` contenitore con wrapper `.it-card-place-icon-wrapper` che ne permetta i corretti allineamenti. 

La lista di metadati del luogo è costruita utilizzando liste descrittive `.it-card-description-list` con ogni coppia di item`dd`-`dt` raccolta in un `div` contenitore. 

È possibile combinare un piede con eventuali collegamenti o dettagli della mappa usando l'elemento `footer` con le classi dedicate `.it-card-related` e `it-card-footer`. Negll'esempio è stato applicato un `.border-top` a questo elemento, opzionale.  

{% capture callout %}
#### Accessibilità
I titoli `.it-card-place-name` in questi esempi sono `h4`. La gerarchia dei titoli deve adattarsi ovviamente al contesto in cui la card è inserita.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card luogo{% endcomment %}
{% capture example %}

<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-place rounded shadow-sm border">
      <div class="it-card-place-header">
        <div class="it-card-place">
          <h4 class="it-card-place-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-place-type">Tipologia di luogo</p>
          <p class="it-card-place-address">Via della città, 5 - 00100 Città</p>
        </div>
        <div class="it-card-place-image ratio ratio-1x1">
          <div class="it-card-place-image-icon-wrapper">
            <svg class="icon icon-lg icon-padded icon-primary" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-pa"></use></svg>
          </div>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-place it-card-border-top it-card-border-top-secondary rounded shadow-sm border mb-3">
      <div class="it-card-place-header">
        <div class="it-card-place">
          <h4 class="it-card-place-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-place-type">Tipologia di luogo</p>
          <p class="it-card-place-address">Via della città, 5 - 00100 Città</p>
        </div>
        <div class="it-card-place-image ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/monument/320/320" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <div class="it-card-body">
        <dl class="it-card-description-list">
          <div>
            <dt>Email:</dt>
            <dd>me@mail.com</dd>
          </div>
          <div>
            <dt>Tel:</dt>
            <dd>340.4050600</dd>
          </div>
          <div>
            <dt>Indirizzo:</dt>
            <dd>Via della città, 5 - 00100 Città</dd>
          </div>
        </dl>
      </div>
      <footer class="it-card-related it-card-footer border-top pt-3">
        <div style="flex-grow:1">
          <svg class="icon icon-sm icon-secondary" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-map-marker"></use></svg>
          <strong>Distanza:</strong> 900 metri
        </div>
        <a href="#" target="_blank" class="it-card-link">
          Apri in mappa
          <span class="visually-hidden"> Toponimo o Luogo (si apre in una nuova finestra)</span>
          <svg class="icon icon-sm icon-secondary ms-2" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-external-link"></use></svg>
        </a>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Card con liste di contenuti affini
È possibile integrare nel corpo della card delle liste strutturate di link usando le classi `.list-group`. 

Da usare con molta parsimonia, questa possibilità si presta a creare liste di accesso a contenuti in evidenza laddove la card rappresentino un'intera sezione o vista dei contenuti di un sito web, come nel caso di card per argomenti in evidenza. Oppure, per esempio, indichino pagine di dettaglio utili alla partecipazione ad un evento. 

{% capture callout %}

#### Accessibilità: lista link correlati

È da valutare caso per caso l'applicazione di un'eventuale aria-label all'elemento `ul` che permetta di comprendere la natura di questi link ai lettori di schermo.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

È da valutare nei singoli casi l'uso del colore primario per questa lista di link, oppure l'applicazione del colore secondario usando la classe dedicata `.it-card-link`. 

Questa possibilità si può combinare con le funzionalità del contenitore `.it-card-footer` per ospitare link e pulsanti di servizio.

{% comment %}Example name: Card con liste di contenuti affini{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Argomento X</a>
      </h3>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
        <ul role="list" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
          <li class="list-group-item"><a href="#" class="it-card-link">Titolo notizia affine</a></li>
          <li class="list-group-item"><a href="#" class="it-card-link">Titolo media affine</a></li>
          <li class="list-group-item"><a href="#" class="it-card-link">Altro titolo scheda affine</a></li>
          <li class="list-group-item"><a href="#" class="it-card-link">Pagina profilo affine</a></li>
        </ul>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Argomento Y</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
        <ul role="list" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
          <li class="list-group-item"><a href="#">Titolo notizia affine</a></li>
          <li class="list-group-item"><a href="#">Titolo media affine</a></li>
          <li class="list-group-item"><a href="#">Altro titolo scheda affine</a></li>
          <li class="list-group-item"><a href="#">Pagina profilo affine</a></li>
        </ul>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo evento</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/monument/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-subtitle">Dal 17 al 22 novembre</p>
        <p class="it-card-text">Descrizione breve dell'evento in poche righe non troncate.</p>
        <ul role="list" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
          <li class="list-group-item"><a href="#">Gli artisti</a></li>
          <li class="list-group-item"><a href="#">Il luogo</a></li>
          <li class="list-group-item"><a href="#">Il programma dettagliato</a></li>
        </ul>
      </div>
      <footer class="it-card-related it-card-footer border-top pt-3">
        <div style="flex-grow:1">
          <a class="it-card-link" href="#">Iscriviti per rimanere aggiornato</a>
        </div>
        <a href="#" target="_blank" class="it-card-link">
          Apri la mappa
          <span class="visually-hidden"> del Titolo evento (si apre in una nuova finestra)</span>
          <svg class="icon icon-sm icon-secondary ms-2" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-external-link"></use></svg>
        </a>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Personalizzazioni e stili

Alcune classi e codice HTML utile a personalizzare le card.

### Bordi e ombre

La configurazione base delle card prevede un bordo (`.border`) e un'ombra leggera (`.shadow-sm`).
Per aumentare la separazione visiva dal contesto, è possibile utilizzare ombre più evidenti:

- `.shadow` - ombra media
- `.shadow-lg` - ombra pronunciata

Quando si utilizzano ombre più evidenti, è possibile rimuovere il bordo se la distinzione dallo sfondo è sufficientemente chiara.

{% capture callout %}

#### Accessibilità: contrasto con lo sfondo

Per garantire una buona accessibilità, è consigliabile mantenere un rapporto di contrasto di almeno 3:1 tra la card e lo sfondo. Le combinazioni di bordi, ombre e colori di sfondo aiutano a raggiungere questo obiettivo. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Bordi e ombre{% endcomment %}
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
    &nbsp;
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

### Immagini

Per le immagini è possibile usare le classi `.ratio` per definire il rapporto tra altezza e larghezza in tutte le card di base. 

Scopri le classi e modalità dedicate nella scheda [Proporzioni](http://localhost:4000/docs/organizzare-gli-spazi/proporzioni/).

È da notare che le varianti inline delle card hanno proporzioni immagini loro su desktop, però,ad eccezione delle varianti inline mini, su dispositivi piccoli o con importante ingrandimento, mostreranno il layout card di base con le proporzioni impostate come negli esempi che seguono.   

{% comment %}Example name: Proporzioni immagini{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Card con immagine con proporzioni 21:9.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
<div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
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
        <p class="it-card-text">Card con immagine con proporzioni 16:9.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-4x3">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Card con immagine con proporzioni 4:3.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
<div class="col-12 col-md-6 mb-3 mb-md-4 col-lg-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Card con immagine con proporzioni 1:1.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Altezze delle card

Per la gestione delle **altezze** in caso di gruppi di card, sono disponibili le classi: 
- `.it-card-height-auto` (altezza basata sul contenuto) 
- `.it-card-height-full` (occupa tutto lo spazio disponibile)
da applicare all'elemento `article`.

È da notare che l'elemento `footer .it-card-related` laddove viva dentro il contenitore `.it-card-body` resta attaccato al contenuto della card anche nel caso di card a tutta altezza. Se invece vive fuori con l'aggiunta della classe `.it-card-footer` si allineerà verticalmente sempre con l'altezza massima della card, attaccandosi al bordo inferiore. 

**XXX È DA INSERIRE QUI UN MARKUP ESEMPIO**

## Organizzazione e layout

### Gruppi di card

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

### Numero di colonne specifiche

Usando `.it-card-group-N-cols`.
  
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
    <article class="it-card it-card-image rounded shadow-sm border">
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

### Centrate orizzontalmente

Usando `.it-card-group-center`.

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

### Layout responsive rispetto al contenitore (sperimentale)

Gruppo di card che risponde a Container Queries attivabile usando la classe dedicata `.it-card-group-container-aware` per adattarsi responsive alla dimensione del contenitore invece che alla viewport. Ridimensiona la finestra del browser o prova a visualizzare questa pagina su dispositivi di diverse dimensioni per apprezzare la differenza di approccio.

Le Container Queries sono una tecnologia CSS moderna supportata nella maggior parte dei browser recenti. Per i browser che non supportano questa funzionalità, viene automaticamente applicato un fallback basato su Media Queries standard.

{% comment %}Example name: Gruppi di card con Container Queries{% endcomment %}
{% capture example %}
<div>
  <div class="it-card-group it-card-group-container-aware">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
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
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
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
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
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
        <a href="#">Card con Container Queries</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questa card si adatta alla dimensione del suo contenitore, non della viewport.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
        <time class="it-card-date" datetime="10/12/{{ 'now' | date: "%Y" }}">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Confronto in colonne diverse

Qui puoi esplorare come lo stesso gruppo di card "container-aware" si adatta a diverse larghezze di colonna, permettendo di realizzare layout complessi:

{% comment %}Example name: Gruppi di card con Container Queries in colonne diverse{% endcomment %}
{% capture example %}
  <div class="row">
    <div class="col-12 col-lg-8 mb-4">
      <div class="p-3 bg-light">
        <div class="it-card-group it-card-group-container-aware">
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna larga</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna larga, le card si distribuiscono su più colonne.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna larga</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna larga, le card si distribuiscono su più colonne.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna larga</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna larga, le card si distribuiscono su più colonne.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 mb-4">
      <div class="p-3 bg-light">
        <div class="it-card-group it-card-group-container-aware">
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna stretta</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna stretta, le card si dispongono su una singola colonna.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna stretta</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna stretta, le card si dispongono su una singola colonna.</p>
            </div>
          </article>
          <article class="it-card rounded shadow-sm border">
            <h3 class="it-card-title no_toc">
              <a href="#">Card in colonna stretta</a>
            </h3>
            <div class="it-card-body">
              <p class="it-card-text">In questa colonna stretta, le card si dispongono su una singola colonna.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}

## Accessibilità

**XXX È DA RIVEDERE QUESTO CONTENUTO ANCHE RISPETTO A QUANTO GIÀ DETTO SOPRA**

Se il titolo `.it-card-title` non è il primo elemento dell'`article`, è necessario collegarlo con `aria-labelledby="ID_TITOLO"` e aggiungere `id="ID_TITOLO"` al titolo stesso.

I titoli sono preferibilmente `h3`, mentre sottotitoli o testi brevi dovrebbero essere paragrafi semplici. La gerarchia dei titoli deve adattarsi al contesto in cui la card è inserita.

L'uso dell'elemento **`article`** è una scelta semantica ponderata. Anche se non tutti i lettori di schermo lo supportano allo stesso modo, i più diffusi (JAWS, VoiceOver) lo interpretano correttamente, e altri (come NVDA) possono essere configurati per farlo. L'utilizzo degli elementi `article` e `footer` rende il markup più comprensibile e semanticamente strutturato.

Per i lettori di schermo, è importante aggiungere testi descrittivi per i **metadati**, nascosti con `.visually-hidden` (es. "Categoria correlata: ", "Argomento correlato: ") o applicati con `aria-label` (es. "Argomenti correlati: ").

Valuta infine sempre attentamente nel contesto se gli elementi come le liste abbiano o meno bisogno di etichette `aria-label` o `aria-labelledby` per descriverne la funzione.

## Funzionalità future
**Sono in lavorazione le varianti di tipo presentazione (dati e banner).**