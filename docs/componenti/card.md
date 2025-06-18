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
Questo componente card e le sue varianti sono definiti dalle classi `.it-card` e relativi modificatori. Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 

[Vai alla documentazione del componente card legacy (deprecato)](../card-old/)
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Quick start 

```html
<!-- Card base minimal -->
<article class="it-card rounded shadow-sm border">
  <h3 class="it-card-title">
    <a href="#">Titolo del contenuto</a>
  </h3>
  <div class="it-card-body">
    <p class="it-card-text">Breve descrizione.</p>
  </div>
</article>
```

## Struttura base della card
Nota bene: negli esempi seguenti le card sono all’interno di colonne Bootstrap, se non segnalato diversamente.
Abbiamo segnalato l’inizio della card vera e propria nell'HTML con il commento `<!--start it-card-->`.

Esempio base con immagine, descrizione e data:

{% comment %}Example name: Card semplice{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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

La card usa l'elemento **semantico** `article`, con un titolo (`.it-card-title`) come primo figlio.   
Consigliamo di implementare il titolo come elemento cliccabile principale, evitando di distribuire collegamenti in tutta la card.

{% capture callout %}

#### Accessibilità titoli

Negli esempi abbiamo utilizzato l'elemento `h3` per il titolo delle card. Utilizza il livello `h` corretto a seconda del contesto in cui la card è inserita. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Per inserire un'**immagine** puoi applicare la classe `.it-card-image` alla card. L'immagine segue sempre l'elemento titolo, ma l'ordine di visualizzazione viene invertito in automatico. 

Segue il **corpo** della card `.it-card-body`, che può contenere diversi contenuti di approfondimento a seconda del contesto d'uso. Puoi utilizzare più elementi `.it-card-body` per separare blocchi di contenuto.

I **metadati** (come categorie, argomenti e date) vanno nell'elemento `footer` con classe `.it-card-related`. Può stare nel corpo della card o, seguendolo con la classe `.it-card-footer`, ancorarsi al bordo inferiore nei casi di card con altezza fissa.

## Card per contenuti editoriali

Le card per contenuti editoriali sono utili a fornire un'anteprima di notizie, articoli, pagine evento o pagine che presentano media (video o audio). Sono le classiche card con cui puoi comporre una sezione di copertina delle notizie in evidenza nella pagina principale del sito.  

### Card editoriali standard

Esempi con descrizione e data di pubblicazione della scheda, con categoria oppure con argomenti (tag) di appartenenza, con e senza immagine. 

La struttura dei metadati include:
- Categorie nell'elemento `.it-card-taxonomy`
- Tag/argomenti in liste quando sono più di uno
- Date in elementi HTML semantici `time`, con il corretto attributo `datetime`

{% comment %}Example name: Card editoriale standard{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 2</span>
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
</div>
{% endcapture %}{% include example.html content=example %}

### Card editoriali featured

Usa queste card per presentare contenuti di approfondimento, anche quelli ospitati su piattaforme terze. 
Se i contenuti sono su piattaforme terze, comunica chiaramente all'utente dove si trova il contenuto e che sta per uscire dal sito. Puoi aggiungere un'icona a fianco del titolo, usando la classe `.it-card-title-icon` come negli esempi che seguono. 

{% capture callout %}

#### Accessibilità: valore semantico delle icone

Le icone nelle card possono avere diversi ruoli semantici:
- **Decorative**: quando il significato è già chiaro dal contesto testuale, usa `aria-hidden="true"`. 
- **Informative**: quando comunicano informazioni aggiuntive (es. tipo di file, link esterno), aggiungi testo nascosto con `<span class="visually-hidden">` che descriva l'informazione se non già veicolata diversamente. 
- **Funzionali**: quando indicano un'azione o stato, assicurati che il significato sia comunicato anche testualmente.

Negli esempi che seguono usiamo `aria-hidden="true"` perché il contesto è già chiaro dal titolo e dal testo della card. In altri esempi in questa documentazione troverai la soluzione per icone informative con testo nascosto. È inoltre possibile implementare una soluzione usando una combinazione di `role="img"` e aggiungendo l'elemento `<title>Titolo icona</title>` prima del tag `use`. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture callout %}

#### Accessibilità link per contenuti esterni

Negli esempi non abbiamo usato il `target` del link per favorire la normale navigazione del browser. Se la pagina di destinazione si apre in una nuova tab o finestra, comunicalo in modo chiaro all'utente con un'icona di link esterno e un testo alternativo o nascosto per i lettori di schermo.  

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Per mostrare un sottotitolo sulle card, applica la classe `.it-card-subtitle` a un elemento paragrafo.

Per indicare l'autore del contenuto, usa l'elemento semantico `address` con classe `.it-card-signature`. 

{% comment %}Example name: Card editoriale featured{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto featured <span class="visually-hidden">(link esterno su piattaforma XYZ)</span>
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
          </div>
        </a>
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto featured <span class="visually-hidden">(link esterno su Designers Italia)</span>
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-designers-italia"></use></svg>
          </div>
        </a>
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
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 2</span>
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto featured <span class="visually-hidden">(link esterno)</span>
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-external-link"></use></svg>
          </div>
        </a>
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
</div>
{% endcapture %}{% include example.html content=example %}


### Card inline

Usa questa variante inline per evidenziare una o due card rispetto alle altre. Usa questa variante solo quando per il contenuto è disponibile un'immagine.

Per ottenere la disposizione inline, usa la classe `.it-card-inline` e cambia leggermente la struttura rispetto al codice HTML della card base: raccogli il titolo, il corpo della card e il piede, se presenti, in un unico contenitore `.it-card-inline-content` che precede sempre l'immagine. 

La card inline è orizzontale su viewport medio-grandi. Su dispositivi piccoli o con ingrandimento elevato adotta una disposizione verticale simile alla card base. L'immagine, se presente, assume quindi le proporzioni definite con le classi `.ratio-`. 

Per sfruttare al meglio questa variante, assicurati di permettere la disposizione orizzontale solo se lo spazio disponibile è davvero sufficiente. Consigliamo di usare "queries" di impaginazione sensibili al proprio contenitore, piuttosto che al viewport come le colonne in esempio. Puoi trovare più avanti nella pagina una sezione dedicata a questo tipo di approccio (sperimentale).

Per invertire solamente l'ordine visivo tra destra e sinistra, applica la classe `.it-card-inline-reverse`. 

{% comment %}Example name: Card editoriale inline{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
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
  <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
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

#### Card inline mini

Usa la variante mini delle card orizzontali per raggruppare in poco spazio card editoriali con contenuti correlati secondari. In ragione di ciò, la card mini non ha il corpo `.it-card-body` e il footer `.it-card-footer` è visibile solo se presente. La dimensione del titolo è ridotta tramite la classe `h4` per adattarsi a questo layout.

La variante mini rimane orizzontale anche in viewport piccole o viste ingrandite. Questa variante si ottiene applicando la classe `.it-card-inline-mini`.

Consigliamo di non aggiungere altri contenuti oltre al titolo (da mantenere breve), l'eventuale categoria o argomento principale e la data. 

{% comment %}Example name: Card editoriale inline mini{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 mb-3 mb-md-4 ">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title h4 no_toc">
          <a href="#">Titolo contenuto editoriale</a>
        </h3>
        <footer class="it-card-related it-card-footer">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">22 aprile, {{ 'now' | date: "%Y" }}</time>
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
  <div class="col-12 col-md-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-mini it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title h4 no_toc">
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

Per mostrare la data o la durata di un evento in una card, aggiungili in un paragrafo all'inizio del corpo della card e applica la classe `.it-card-subtitle` al paragrafo. 

{% capture callout %}

#### Accessibilità date e orari eventi

Quando presenti date e orari di un evento, usa l'elemento `time` con l'appropriato attributo `datetime`. 
Inserisci eventuali contenuti guida per lettori di schermo solo se realmente necessari per evitare il rumore, ad esempio il `<span class="visually-hidden">Data evento:</span>` presente nel primo esempio che segue. 

Poni particolare attenzione che non si crei confusione se nella card fosse presente anche la data di pubblicazione, in caso valuta di non mostrarla. 

Consigliamo, inoltre, di svolgere sempre test di usabilità anche con utenti che utilizzano tecnologie assistive. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Usa `.it-card-footer` per creare uno spazio dedicato a **collegamenti o pulsanti secondari**, come negli esempi seguenti. Questa impostazione è utile quando il titolo della card porta a una pagina di approfondimento (ad esempio, la descrizione dettagliata dell'evento), ma si vuole dare accesso diretto e immediato all'azione principale (ad esempio, l'iscrizione all'evento). 

Per applicare il colore secondario ai collegamenti `a` inseriti nel corpo o nel footer della card , usa la classe `.it-card-link`.

{% capture callout %}

#### Accessibilità collegamenti secondari

Ricorda di usare:
- link con semantica `a` per presentare collegamenti di navigazione
- pulsanti con semantica `button` per azioni che avvengono in pagina, come l'apertura di modali. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}


{% comment %}Example name: Card eventi{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded border shadow-sm mb-3">
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded border shadow-sm mb-3">
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
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
</div>
{% endcapture %}{% include example.html content=example %}

#### Card per eventi inline

Per disporre le card eventi in orizzontale, usa la classe `.it-card-inline` e raccogli tutti i contenuti di testo e interattivi in un contenitore `.it-card-inline-content`. 

L'immagine segue questo contenitore. Per invertire l'ordine visivo, usa la classe `.it-card-inline-reverse`.

{% comment %}Example name: Card eventi inline{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
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
  <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
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
          <button type="button" class="btn btn-outline-secondary">Iscriviti</button>
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

Usa queste varianti di card per presentare contenuti media come video o audio e rimandare alle relative pagine di dettaglio, anche se ospitate su piattaforme terze. 
Anche in questo caso, assicurati di comunicare all'utente la tipologia del contenuto e l'eventuale uscita dal sito stesso. Per farlo, puoi anche aggiungere un'icona a fianco del titolo, usando la classe `.it-card-title-icon`.

{% capture callout %}

#### Accessibilità link per media esterni

Negli esempi non abbiamo usato il `target` del link per favorire la normale navigazione del browser. Se la pagina di destinazione si apre in una nuova tab o finestra, comunicalo in modo chiaro all'utente con un'icona di link esterno e un testo alternativo o nascosto per i lettori di schermo.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card media{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto video
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" role="img"><title>Tipo: Video</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg>
          </div>
        </a>
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto video
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" role="img"><title>Tipo: Video</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg>
          </div>
        </a>
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
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 2</span>
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto audio
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" role="img"><title>Tipo: Audio</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-horn"></use></svg>
          </div>
        </a>
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo contenuto audio
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" role="img"><title>Tipo: Audio</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-horn"></use></svg>
          </div>
        </a>
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
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 1</span>
            </a></li>
            <li class="list-item"><a class="chip chip-simple chip-sm" href="#">
              <span class="chip-label"><span class="visually-hidden">Argomento: </span>Argomento 2</span>
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

Per disporre disporre le card media di tipo video in orizzontale, usa la classe `.it-card-inline` e raccogli tutti i contenuti di testo e interattivi in un contenitore `.it-card-inline-content`. 

Usa le stesse regole delle card inline standard per struttura e inversione dell'ordine.

{% comment %}Example name: Card media inline{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title it-card-title-icon no_toc">
          <a href="#">Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <svg class="icon icon-primary" role="img"><title>Tipo: Video</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg>
            </div>
          </a>
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
  <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-inline it-card-inline-reverse it-card-image rounded shadow-sm border">
     <!--card first child is all the card content: title (link) + body + footer -->
      <div class="it-card-inline-content">
        <h3 class="it-card-title it-card-title-icon no_toc">
          <a href="#">Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <svg class="icon icon-primary" role="img"><title>Tipo: Video</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-video"></use></svg>
            </div>
          </a>
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

Le card informative e di servizio sono utili a fornire un’anteprima per pagine di dettaglio di servizi e bandi, oppure per rappresentare documenti e altri tipi di allegati. 

{% capture callout %}
#### Accessibilità titoli delle card informative
Negli esempi abbiamo utilizzato il tag `h4` per i titoli `.it-card-title`. Utilizza il tag `h` corretto a seconda del contesto.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Card per servizi e bandi

Consigliamo di usare alternativamente un breve testo descrittivo `.it-card-text` o sottotitolo `.it-card-subtitle` per descrivere il contesto della card. 

Per aggiungere indicazioni sullo stato del servizio o bando e un'eventuale data di scadenza, come negli esempi seguenti, puoi usare l'elemento `footer`: 
- per lo stato del servizio o bando, usa un componente chip 
- per un'eventuale data di scadenza, usa lo lo spazio `it-card-date` e un testo descrittivo. 

{% capture callout %}

#### Accessibilità date e orari delle scadenze

Quando presenti date di scadenza, usa l'elemento `time` con l'appropriato attributo `datetime`. Comunica chiaramente agli utenti il loro ruolo di "Scadenza" aggiungendo il testo come negli esempi che seguono. Non usare solo il colore (negli esempi `.text-warning`) per veicolare l'importanza dell'informazione. 

Consigliamo, inoltre, di svolgere sempre test di usabilità anche con utenti che utilizzato tecnologie assistive. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Per creare un ulteriore spazio dedicato a **collegamenti o pulsanti secondari**, come negli esempi seguenti, puoi usare la classe `.it-card-footer`. Questa impostazione è utile quando il titolo della card porta a una pagina di approfondimento (ad esempio, la descrizione dettagliata di un bando), ma si vuole dare accesso diretto e immediato all'azione principale (ad esempio, la candidatura al bando). 

Per applicare il colore secondario ai collegamenti `a` inseriti nel corpo o nel footer della card , usa la classe `.it-card-link`.

{% capture callout %}

#### Accessibilità collegamenti secondari per le card informative

Ricorda di usare:
- link con semantica `a` per presentare collegamenti di navigazione
- pulsanti con semantica `button` per azioni che avvengono in pagina, come l'apertura di modali. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card servizi{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded border shadow-sm mb-3">
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded border shadow-sm mb-3">
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
</div>
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded border shadow-sm mb-3">
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
          <span class="it-card-date text-warning"><strong>Scadenza: </strong><time class="it-card-date text-warning" datetime="{{ 'now' | date: "%Y" }}-10-12">31 gennaio, {{ 'now' | date: "%Y" }}</time></span>
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

Usa questa variante per presentare documenti e allegati. Per mostrare un'icona affiancata al titolo, applica la classe `.it-card-title-icon`. 

Per creare un ulteriore spazio dedicato a **collegamenti o pulsanti secondari**, come negli esempi seguenti, puoi usare la classe `.it-card-footer`. Questa impostazione è utile quando il titolo della card porta a una pagina di approfondimento (ad esempio, la descrizione dettagliata del documento), ma si vuole dare accesso diretto e immediato all'azione principale (ad esempio, scaricare il file sul proprio dispositivo).

{% comment %}Example name: Card servizi{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo del documento
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
          </div>
        </a>
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo del documento
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
          </div>
        </a>
      </h4>
      <div class="it-card-body">
        <p class="it-card-text">Eventuale breve estratto descrittivo del documento. Formato PDF (200Kb)</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link link-secondary"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
        </footer>
      </div>
      <div class="it-card-footer">
        <span class="me-2">Scarica come:</span> 
        <a href="#" class="it-card-link">ODT (300Kb)<span class="visually-hidden">: Titolo del documento</span></a>
        <a href="#" class="it-card-link">ODS (400Kb)<span class="visually-hidden">: Titolo del documento</span></a>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded border shadow-sm mb-3">
      <h4 class="it-card-title it-card-title-icon no_toc">
        <a href="#">Titolo del file allegato <span class="visually-hidden">(Formato ODT, 200Kb)</span>
          <div class="it-card-title-icon-wrapper">
            <svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file-odt"></use></svg>
          </div>
        </a>
      </h4>
      <div class="it-card-body">
        <p class="it-card-text" aria-hidden="true">Formato ODT (200Kb)</p>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Card per profili personali 
Usa questa variante per indicare schede personali o i relatori a un evento. Si attivano con la classe `.it-card-profile`. La testata della card è costruita con classi di stile dedicate come `.it-card-profile-header` per nome e ruolo. 

L'immagine di profilo sulla destra è visualizzata integrando il componente [avatar](/docs/componenti/avatar/), si consiglia di usarlo nelle varianti di dimensioni `xl`. 

La lista di metadati del profilo è costruita utilizzando liste descrittive `.it-card-description-list` con ogni coppia di item `dd`-`dt` raccolta in un `div` contenitore. 

Per un effetto decorativo, puoi usare la classe `.it-card-border-top` (con varianti di colore `.it-card-border-top-COLORE`). Non usare questa classe per comunicare significato semantico, ma solo come eventuale elemento decorativo. 

{% capture callout %}
#### Accessibilità nomi
Negli esempi abbiamo utilizzato il tag `h4` per i titoli `.it-card-profile-name`. Utilizza il tag `h` corretto a seconda del contesto.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card profilo{% endcomment %}
{% capture example %}

<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full rounded shadow-sm border ">
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
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full it-card-border-top it-card-border-top-secondary rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Nome Personale</a>
          </h4>
          <p class="it-card-profile-role">Ruolo nell'organizzazione</p>
        </div>
        <div class="avatar size-xl">
          <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="">
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full rounded shadow-sm border">
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full it-card-border-top it-card-border-top-secondary rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Nome Personale</a>
          </h4>
          <p class="it-card-profile-role">Ruolo nell'organizzazione</p>
        </div>
        <div class="avatar size-xl">
          <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="">
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

Usa questa variante per presentare schede località. Si attiva con la classe `.it-card-profile` come nel caso dei profili personali. La testata della card è costruita con classi di stile dedicate come `.it-card-profile-header` per nome e tipologia. 

Per i luoghi puoi inserire un'immagine `.it-card-profile-image` o un'icona sulla destra. Racchiudi l'icona in un `div` con classe `.it-card-profile-icon-wrapper` per l'allineamento corretto.

La lista di metadati del luogo è costruita utilizzando liste descrittive `.it-card-description-list` con ogni coppia di item`dd`-`dt` raccolta in un `div` contenitore. 

Puoi combinare un piede con eventuali collegamenti o dettagli della mappa usando l'elemento `footer` con le classi dedicate `.it-card-related` e `it-card-footer`. Nell'esempio abbiamo applicato un `.border-top` a questo elemento, ma è opzionale.  

{% capture callout %}
#### Accessibilità nomi luoghi
Negli esempi abbiamo utilizzato il tag `h4` per i titoli `.it-card-profile-name`. Utilizza il tag `h` corretto a seconda del contesto.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Card luogo{% endcomment %}
{% capture example %}

<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-profile-type">Tipologia di luogo</p>
        </div>
        <div class="it-card-profile-image ratio ratio-1x1">
          <div class="it-card-profile-image-icon-wrapper">
            <svg class="icon icon-lg icon-padded icon-primary" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-pa"></use></svg>
          </div>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full it-card-border-top it-card-border-top-secondary rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-profile-type">Tipologia di luogo</p>
        </div>
        <div class="it-card-profile-image ratio ratio-1x1">
          <figure class="figure img-full">
            <img src="https://placeholderimage.eu/api/monument/320/320" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
        </div>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full rounded shadow-sm border">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-profile-type">Tipologia di luogo</p>
        </div>
        <div class="it-card-profile-image ratio ratio-1x1">
          <div class="it-card-profile-image-icon-wrapper">
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-profile it-card-height-full it-card-border-top it-card-border-top-secondary rounded shadow-sm border mb-3">
      <div class="it-card-profile-header">
        <div class="it-card-profile">
          <h4 class="it-card-profile-name no_toc">
            <a href="#">Toponimo o luogo</a>
          </h4>
          <p class="it-card-profile-type">Tipologia di luogo</p>
        </div>
        <div class="it-card-profile-image ratio ratio-1x1">
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
Per presentare liste di contenuti affini, puoi integrare liste strutturate di link nel corpo della card usando le classi `.list-group`. 

Usa questa variante con moderazione e solo quando è necessario facilitare l'accesso ai contenuti in evidenza di un sito web, come ad esempio:
- i contenuti correlati a un argomento in evidenza 
- le varie pagine di approfondimento correlate a un evento in evidenza.

{% capture callout %}

#### Accessibilità: lista link correlati

Valuta caso per caso l'applicazione di un'eventuale aria-label all'elemento `ul`, per permettere ai lettori di schermo di comprendere la natura di questi link.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Valuta caso per caso l'uso del colore primario per la lista di link, oppure l'applicazione del colore secondario usando la classe dedicata `.it-card-link`. 

Puoi combinare questa impostazione con le funzionalità del contenitore `.it-card-footer` per ospitare link e pulsanti di servizio.

{% comment %}Example name: Card con liste di contenuti affini{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
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
        <ul class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
          <li class="list-group-item"><a href="#">Titolo notizia affine</a></li>
          <li class="list-group-item"><a href="#">Titolo media affine</a></li>
          <li class="list-group-item"><a href="#">Altro titolo scheda affine</a></li>
          <li class="list-group-item"><a href="#">Pagina profilo affine</a></li>
        </ul>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
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
        <ul class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
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
          <span class="visually-hidden"> di Titolo evento (si apre in una nuova finestra)</span>
          <svg class="icon icon-sm icon-secondary ms-2" aria-hidden="true"><use href="/dist/svg/sprites.svg#it-external-link"></use></svg>
        </a>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Argomento X</a>
      </h3>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
        <ul class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
          <li class="list-group-item"><a href="#" class="it-card-link">Titolo notizia affine</a></li>
          <li class="list-group-item"><a href="#" class="it-card-link">Titolo media affine</a></li>
          <li class="list-group-item"><a href="#" class="it-card-link">Altro titolo scheda affine</a></li>
          <li class="list-group-item"><a href="#" class="it-card-link">Pagina profilo affine</a></li>
        </ul>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Personalizzazioni e stili

Alcune classi e codice HTML utile a personalizzare le card.

### Bordi e ombre

La configurazione base delle card prevede un bordo (`.border`) e un'ombra leggera (`.shadow-sm`).
Per aumentare la separazione visiva dal contesto, puoi utilizzare ombre più evidenti:

- `.shadow` - ombra media
- `.shadow-lg` - ombra pronunciata

Quando utilizzi ombre più evidenti, puoi rimuovere il bordo se la distinzione dallo sfondo è sufficientemente chiara.

{% capture callout %}

#### Accessibilità: contrasto con lo sfondo

Per garantire una buona accessibilità, mantieni un rapporto di contrasto colore di almeno 3:1 tra la card e lo sfondo. Le combinazioni di bordi, ombre e colori di sfondo possono aiutarti a raggiungere questo obiettivo. 

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Bordi e ombre{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-lg border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
<div class="row">
  <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    &nbsp;
  </div>
  <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-lg">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo h3</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Immagini

Per definire il rapporto tra altezza e larghezza delle immagini in tutte le card di base, usa le classi `.ratio`. Scopri le classi e modalità dedicate nella scheda [Proporzioni](http://localhost:4000/docs/organizzare-gli-spazi/proporzioni/).

Le varianti inline delle card hanno proporzioni immagini specifiche su desktop. Su dispositivi piccoli o con ingrandimento elevato (tranne le mini) usano il layout verticale con le proporzioni degli esempi seguenti.

{% comment %}Example name: Proporzioni immagini{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
<div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
<div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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

Per la gestione delle **altezze** in caso di gruppi di card, l'impostazione di base è l'altezza basata sul contenuto. 

Puoi cambiare questo comportamento per ogni card usando la classe `.it-card-height-full` (altezza basata su tutto lo spazio disponibile) sull'elemento `article .it-card`. Questa impostazione è presente in diversi degli esempi che precedono. 

L'elemento `footer .it-card-related` si allinea verticamente in modo diverso a seconda della posizione nel markup: quando all'interno di `.it-card-body` segue il contenuto; fuori, con l'aggiunta di `.it-card-footer`, si ancora al bordo inferiore come la data nell'esempio che segue.

{% comment %}Example name: Altezza delle card basata su tutto lo spazio{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
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
</div>
{% endcapture %}{% include example.html content=example %}

## Organizzazione e layout

### Uso di contenitori responsive

Se il tuo layout di pagina lo permette ti consigliamo di comprendere ogni gruppo di card in [contenitori responsive](/docs/organizzare-gli-spazi/introduzione#contenitori-responsive), usando le classi `.container-xl` oppure `.container-xxl` su un elemento `div` che contenga tutto il gruppo e il suo sistema di griglie. Così potrai sfruttare al massimo tutto lo spazio a disposizione in tutte le combinazioni di dimensioni della viewport e fattori di ingrandimento. 

```html
<div class="container-xl">
  <div class="row">...</div>
  <div class="row">...</div>
</div>
```

Usando contenitori con breakpoint fissi `.container` potresti sprecare un eccessivo spazio vuoto a destra e sinistra in alcune combinazioni. 

### Uso della griglia

Usando le [griglie](/docs/organizzare-gli-spazi/griglie/) puoi organizzare le card in righe e colonne con le classi `.row` e `.col-*` per definire il numero di colonne desiderate. 

```html
<div class="container-xl">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <article class="it-card">...</article>
    </div>
    <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <article class="it-card">...</article>
    </div>
  </div>
</div>
```

Negli esempi precedenti abbiamo usato per esempio `.col-12 col-md-6 col-lg-4` per ottenere 1 colonna su dispositivi piccoli o viewport strette, 2 colonne su viewport medie e 3 colonne su viewport grandi. Sono esempi puramente dimostrativi, **puoi usare qualsiasi combinazione** di colonne per ottenere il layout desiderato.

La scelta del **numero di colonne** dipende dal layout della tua pagina e ha un **impatto sullo spazio interno** alla card per il contenuto. È importante quindi **bilanciare la dimensione** dei contenuti della card per garantire una buona leggibilità e un aspetto visivamente gradevole a tutte le dimensioni e/o fattori di ingrandimento della viewport.

### Liste per gruppi numerosi di card

Per **gruppi numerosi di card** (come pagine di listini, cataloghi, risultati di ricerca), usa liste semantiche `<ul>` con classe `.it-card-list` combinandole con il sistema di colonne. 

{% capture callout %}

#### Accessibilità liste di card

Con le liste, le tecnologie assistive permettono agli utenti di conoscere il numero totale di componenti card che si stanno esplorando e navigare più facilmente.

Se necessario nel contesto aggiungi una `aria-label` che spieghi i contenuti della lista come nell'esempio che segue. 
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

```html
<div class="container-xl">
  <ul class="it-card-list row" aria-label="Risultati della ricerca: ">
    <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <article class="it-card">...</article>
    </li>
    <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
      <article class="it-card">...</article>
    </li>
  </ul>
</div>
```

Esempio di lista card: 

{% comment %}Example name: Lista di card{% endcomment %}
{% capture example %}
<ul class="it-card-list row" aria-label="Risultati della ricerca: ">
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Primo risultato</a>
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
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Secondo risultato</a>
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
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Terzo risultato</a>
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
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Quarto risultato</a>
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
  </li>
    <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Quinto risultato</a>
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
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title no_toc">
        <a href="#">Sesto risultato</a>
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
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Uso di classi dedicate (per piccoli gruppi)

Solo per piccoli gruppi di card (2-6 card) puoi inoltre usare `.it-card-group` per creare facilmente un layout responsive in un `div` contenitore. Di default il numero di colonne su desktop è impostato a 4. 

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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Titolo della quarta card</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione.</p>
      </div>
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
      </footer>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Numero di colonne specifiche

Usando `.it-card-group-N-cols`, dove modificando `N` si possono ottenere layout con 2 o 3 colonne su desktop. 
  
{% comment %}Example name: Gruppi di card con colonne specifiche{% endcomment %}
{% capture example %}
<div>
  <div class="it-card-group it-card-group-2-cols">
    <article class="it-card rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card in due colonne</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo mostra sempre due colonne su viewport medie e grandi.</p>
      </div>
    </article>
    <article class="it-card it-card-image rounded shadow-sm border">
      <h3 class="it-card-title no_toc">
        <a href="#">Card in due colonne</a>
      </h3>
      <div class="it-card-body">
        <p class="it-card-text">Questo gruppo mostra sempre due colonne su viewport medie e grandi.</p>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Centrate orizzontalmente

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

#### Uso di classi dedicate rispetto al contenitore (sperimentale)

Gruppo di card che risponde a Container Queries attivabile usando la classe dedicata `.it-card-group-container-aware` per adattarsi responsive alla dimensione del contenitore invece che alla viewport. Ridimensiona la viewport o prova a visualizzare questa pagina su dispositivi di diverse dimensioni per apprezzare la differenza di approccio.

Le Container Queries sono una tecnologia CSS moderna supportata nella maggior parte dei browser recenti. Per i browser che non supportano questa funzionalità, si applica automaticamente un fallback basato su Media Queries standard.

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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
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
        <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-10-12">12 ottobre, {{ 'now' | date: "%Y" }}</time>
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

Le card implementano diverse caratteristiche per garantire un'esperienza accessibile a tutte le persone, come evidenziato nelle note specifiche presenti nella documentazione.

### Struttura e semantica
Le card utilizzano l'elemento `article` per fornire una struttura semantica chiara che facilita la navigazione con tecnologie assistive. Questa scelta permette di identificare ogni card come contenuto autonomo. Anche se non tutti i lettori di schermo supportano allo stesso modo l'elemento `article`, i più diffusi (JAWS, VoiceOver) lo interpretano correttamente, e altri (come NVDA) possono essere configurati per farlo. 

L'utilizzo degli elementi semantici `article` e `footer` rende il markup più comprensibile e semanticamente strutturato.

### Gerarchia dei titoli
Utilizza gli elementi di intestazione (`h2`, `h3`, etc.) appropriati per il contesto intorno alle card. Negli esempi abbiamo usato quasi sempre `h3` per le card editoriali e `h4` per quelle informative. Adatta la gerarchia alla struttura complessiva della tua pagina in modo da rispettare l'ordine. 

Se il titolo `.it-card-title` non fosse il primo elemento dell'`article`, collegalo semanticamente usando `aria-labelledby="ID_TITOLO"` sull'articolo e aggiungendo `id="ID_TITOLO"` al titolo stesso.

### Metadati e contenuti descrittivi

Per migliorare la comprensione dei metadati da parte delle tecnologie assistive aggiungi testi descrittivi nascosti con `.visually-hidden` (es. "Categoria correlata: ", "Argomento correlato: ") o applicati con `aria-label` (es. "Argomenti correlati: "); usa l'elemento semantico `time` con l'attributo `datetime` per date ed orari. Valuta attentamente se gli elementi come le liste (es. di contenuti affini, link secondari o una stessa lista di card) abbiano o meno bisogno di etichette `aria-label` o `aria-labelledby` per descriverne le finalità. 

### Icone e contenuti visivi

Laddove le icone abbiano puro scopo decorativo, quando cioè il loro significato sia già chiaro dal contesto, usa `aria-hidden="true"`. Se comunicano informazioni aggiuntive, aggiungi una descrizione testuale con `<span class="visually-hidden">` o usa `role="img"` con un elemento `title`. Se funzionali assicurati che il significato sia comunicato testualmente.  

Per le immagini aggiungi una breve descrizione immagine (con l'attributo `alt="Breve descrizione."`) se ha senso nel contesto, marcale altrimenti come decorative lasciando l'`alt` applicato ma vuoto.

### Collegamenti e navigazione

Usa `a` per i collegamenti di navigazione e `button` per azioni nella stessa pagina. Per contenuti esterni, comunica chiaramente la destinazione, ad esempio con testo nascosto e icone appropriate. Privilegia il titolo come elemento principale di navigazione, evitando troppi collegamenti nella stessa card.

### Contrasto e visibilità

Mantieni un rapporto di contrasto di almeno 3:1 tra le card e lo sfondo. Le combinazioni di bordi, ombre e colori di sfondo possono aiutarti a raggiungere questo obiettivo.

### Test e validazione

Svolgi sempre test di usabilità con utenti che utilizzano tecnologie assistive per verificare l'efficacia delle soluzioni implementate.

## Funzionalità future
**Sono in lavorazione le varianti di tipo presentazione (dati e banner).**