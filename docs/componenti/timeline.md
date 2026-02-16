---
layout: docs
title: Timeline
description: Componente per la visualizzazione cronologica di eventi.
group: componenti
toc: true
---

## Timeline classica e Point list

Il componente timeline è disponibile indue varianti distinte: 

- **Timeline classica** per presentare una storia o l'avanzamento di una roadmap di cose da fare.
- **Timeline point list** per presentare una breve sequenza di cose da fare e scadenze temporali.

## Timeline classica
Il componente timeline è caratterizzato dalla classe `.it-timeline-wrapper`.  
Contiene un elenco di `.timeline-element`.

Ogni `.timeline-element` contiene:

- **PIN**: ogni pin è un elemento contenitore `.it-pin-wrapper` di tipo heading `h` che contiene un'icona (`.pin-icon`) e una label (`.pin-text`) indicante la data dell'evento.

Il **PIN** ha tre varianti di colore:

- `.it-evidence` : per indicare nella timeline eventi del passato (colore blu scuro)
- `.it-now` : per indicare nella timeline eventi collocati nel presente (azzurro)
- Nessuna classe aggiuntiva: per collocare gli eventi nel futuro (bianco)

{% capture callout %}
#### Accessibilità

- L'elemento contenitore del pin `.it-pin-wrapper`, nell'esempio un `h3`, dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina. Così come il titolo della card `.it-card-title`, nell'esempio un `h4`. 
- Se le icone svg `.pin-icon` non veicolassero significato, è possibile nasconderle alle tecnologie assistive aggiungendo a queste l'attributo `aria-hidden="true"`; in questo caso è possibile rimuovere `role="img"` e l'elemento `<title>`. 
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Esempio

{% comment %}Example name: Base, verticale{% endcomment %}
{% capture example %}
<div class="it-timeline-wrapper">
  <div class="row">
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper it-evidence no_toc">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Segnaposto</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
          </div>
          <div class="pin-text"><span>maggio {{'now' | date: "%Y"}}</span></div>
        </h3>
        <!--start it-card-->
        <article class="it-card it-card-image rounded shadow-sm border">
          <!--card first child is the title (link)-->
          <h4 class="it-card-title no_toc">
            <a href="#">Titolo del contenuto</a>
          </h4>
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
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper it-evidence no_toc">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Segnaposto</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
          </div>
          <div class="pin-text"><span>giugno {{'now' | date: "%Y"}}</span></div>
        </h3>
        <!--start it-card-->
        <article class="it-card rounded shadow-sm border">
          <!--card first child is the title (link)-->
          <h4 class="it-card-title no_toc">
            <a href="#">Titolo del contenuto</a>
          </h4>
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
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper it-evidence no_toc">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Risultato</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
          </div>
          <div class="pin-text"><span>luglio {{'now' | date: "%Y"}}</span></div>
        </h3>
        <!--start it-card-->
        <article class="it-card rounded shadow-sm border">
          <!--card first child is the title (link)-->
          <h4 class="it-card-title no_toc">
            <a href="#">Titolo del contenuto</a>
          </h4>
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
    <div class="col-12">
      <div class="timeline-element">
        <span class="it-now-label d-none d-lg-flex">Oggi</span>
        <h3 class="it-pin-wrapper it-now no_toc">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Successo</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg>
          </div>
          <div class="pin-text"><span>agosto {{'now' | date: "%Y"}}</span></div>
        </h3>
        <!--start it-card-->
        <article class="it-card rounded shadow-sm border">
          <!--card first child is the title (link)-->
          <h4 class="it-card-title no_toc">
            <a href="#">Titolo del contenuto</a>
          </h4>
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
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper no_toc">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Evento</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
          </div>
          <div class="pin-text"><span>settembre {{'now' | date: "%Y"}}</span></div>
        </h3>
        <!--start it-card-->
        <article class="it-card it-card-image rounded shadow-sm border">
          <!--card first child is the title (link)-->
          <h4 class="it-card-title no_toc">
            <a href="#">Titolo del contenuto</a>
          </h4>
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
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper no_toc">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Successo</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg>
          </div>
          <div class="pin-text"><span>ottobre {{'now' | date: "%Y"}}</span></div>
        </h3>
        <!--start it-card-->
        <article class="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border">
          <!--card first child is all the card content: title (link) + footer -->
          <div class="it-card-inline-content">
            <h4 class="it-card-title h4 no_toc">
              <a href="#">Titolo contenuto editoriale</a>
            </h4>
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
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper no_toc">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
          </div>
          <div class="pin-text"><span>novembre {{'now' | date: "%Y"}}</span></div>
        </h3>
        <!--start it-card-->
        <article class="it-card it-card-inline it-card-inline-mini it-card-inline-reverse it-card-image rounded shadow-sm border mb-3 mb-md-4">
          <!--card first child is all the card content: title (link) + footer -->
          <div class="it-card-inline-content">
            <h4 class="it-card-title h4 no_toc">
              <a href="#">Titolo contenuto editoriale</a>
            </h4>
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
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Breaking change

{% capture callout %}
Implementato nell'esempio il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 
{% endcapture %}{% include callout-breaking.html version="2.16.0" content=callout type="danger" %}

{% capture callout %}
Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.pin-wrapper` è ora implementato come heading `h` e non semplice `div`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.pin-icon`, se semanticamente rilevante, deve avere attributo `role="img"` e contenere un tag `title` che lo descriva.
  - Gli elementi categoria e data hanno ora tag `span` `visually-hidden` che ne descrivono lo scopo.
  - L'elemento `.card-title` è ora implementato con heading `h4` per rispettare la gerarchia attuale. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
{% endcapture %}{% include callout-breaking.html content=callout version="2.11.0" type="danger" %}

-----

## Timeline point List
La timeline point list permette la rappresentazione di una sequenza di eventi o
informazioni in maniera più compatta rispetto alla timeline classica. 
È particolarmente indicata per presentare una breve sequenza di cose da fare 
e scadenze temporali.

Il componente timeline è caratterizzato da una lista `<ul>` con classe `.it-point-list-wrapper`.  
Contiene un elenco di elementi lista `<li>` con classe `.it-point-list`.

Il componente è composto da una sezione primaria `.it-point-list-content` e da una
sezione secondaria `.it-point-list-aside`. La sezione primaria è preposta alla
presentazione del contenuto ed è possibile innestare altri componenti; la sezione
secondaria viene usata per mettere in risalto la sequenza temporale ed è possibile
presentare date specifiche o traguardi generici (con icone e micro-testi).

Infine, il componente può essere implementato usando l'elenco non ordinato `ul`
oppure usando il contenitore generico `div`.

### Esempio come elenco
{% comment %}Example name: Timeline point list, elenco non ordinato{% endcomment %}
{% capture example %}
<ul class="it-point-list-wrapper">
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">DIC</span><span class="visually-hidden">Dicembre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Esempio con il contenitore generico
{% comment %}Example name: Timeline point list, contenitore generico{% endcomment %}
{% capture example %}
<div class="it-point-list-wrapper" role="list">
  <div class="it-point-list" role="listitem">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}


### Date specifiche
Per esplicitare le date si usano dei contenitori annidati nella sezione secondaria
`.it-point-list-aside`.

#### Esempio base
Nella sezione secondaria il contenitore `.it-point-date` viene usato per evidenziare il
giorno, il contenitore `.it-point-month` per il mese.

{% comment %}Example name: Timeline point list, calendario{% endcomment %}
{% capture example %}
<div class="it-point-list-wrapper" role="list">
  <div class="it-point-list" role="listitem">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

#### Con anno
Tramite il contenitore `.it-point-year` è possibile specificare l'anno.

{% comment %}Example name: Timeline point list, calendario completo{% endcomment %}
{% capture example %}
<ul class="it-point-list-wrapper">
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-year font-monospace" aria-label="anno">{{'now' | date: "%Y"}}</div>
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Layout molto compatto
Tramite la classe `.it-point-list-xs` è possibile rendere ancora più compatta la
timeline.

{% comment %}Example name: Timeline point list, compatto{% endcomment %}
{% capture example %}
<ul class="it-point-list-wrapper">
  <li class="it-point-list it-point-list-xs">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Traguardi
Nella sezione secondaria è possibile evidenziare l'ordine temporale dei contenuti
tramite icone o con del breve testo (2 caratteri massimo).

#### Traguardi con testo
Viene usato il contenitore `.it-point-date` per inserire un testo brevissimo (2 caratteri
massimo). È possibile usare `.it-point-month` e `.it-point-year` per aggiungere ulteriori
informazioni.

{% comment %}Example name: Timeline point list, traguardi con testo compatto{% endcomment %}
{% capture example %}
<ul class="it-point-list-wrapper">
  <li class="it-point-list it-point-list-xs">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace" aria-label="passo">01</div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list it-point-list-xs">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace" aria-label="passo">01</div>
      <div class="it-point-month font-monospace" aria-label="passi totali">/3</div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list it-point-list-xs">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-year font-monospace" aria-label="categoria">AB</div>
      <div class="it-point-date font-monospace" aria-label="passo">01</div>
      <div class="it-point-month font-monospace" aria-label="passi totali">/3</div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

#### Traguardi con icona
È possibile usare un'icona nel contenitore `.it-point-date`, e dei micro-testi nei
contenitori `.it-point-month` e `.it-point-year`.

{% comment %}Example name: Timeline point list, traguardi con icona compatto{% endcomment %}
{% capture example %}
<div class="it-point-list-wrapper" role="list">
  <div class="it-point-list it-point-list-xs" role="listitem">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace">
        <svg class="icon icon-primary" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
      </div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div class="it-point-list it-point-list-xs" role="listitem">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-date font-monospace">
        <svg class="icon icon-primary" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
      </div>
      <div class="it-point-month font-monospace" aria-label="documento">DOC</div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div class="it-point-list it-point-list-xs" role="listitem">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-year font-monospace" aria-label="versione">v2</div>
      <div class="it-point-date font-monospace">
        <svg class="icon icon-primary" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
      </div>
      <div class="it-point-month font-monospace" aria-label="linguaggio">JS</div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

### Varianti colore
Modificando opportunamente `.it-point-list-{suffisso}` è possibile personalizzare il
colore della sezione secondaria. Ad esempio: `.it-point-list-primary` userà il
colore `primary`.

{% comment %}Example name: Timeline point list, varianti colore{% endcomment %}
{% capture example %}
<ul class="it-point-list-wrapper">
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-primary">
      <div class="it-point-year font-monospace" aria-label="anno">{{'now' | date: "%Y"}}</div>
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-success">
      <div class="it-point-year font-monospace" aria-label="anno">{{'now' | date: "%Y"}}</div>
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-info">
      <div class="it-point-year font-monospace" aria-label="anno">{{'now' | date: "%Y"}}</div>
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-warning">
      <div class="it-point-year font-monospace" aria-label="anno">{{'now' | date: "%Y"}}</div>
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-danger">
      <div class="it-point-year font-monospace" aria-label="anno">{{'now' | date: "%Y"}}</div>
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="it-point-list">
    <div class="it-point-list-aside it-point-list-dark">
      <div class="it-point-year font-monospace" aria-label="anno">{{'now' | date: "%Y"}}</div>
      <div class="it-point-date font-monospace" aria-label="giorno">14</div>
      <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="it-point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Esempio complesso
Di seguito un esempio un po' più complesso.

{% comment %}Example name: Point list, esempio complesso{% endcomment %}
{% capture example %}
  <ul class="it-point-list-wrapper">
    <li class="it-point-list">
      <div class="it-point-list-aside it-point-list-dark">
        <div class="it-point-date font-monospace" aria-label="giorno">14</div>
        <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
      </div>
      <div class="it-point-list-content">
        <div class="row mb-5">
          <div class="col-lg-7">
            <!--start it-card-->
            <article class="it-card rounded shadow-sm border">
              <!--card first child is the title (link)-->
              <h4 class="it-card-title no_toc">
                <a href="#">Titolo del contenuto</a>
              </h4>
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
      </div>
    </li>
    <li class="it-point-list">
      <div class="it-point-list-aside it-point-list-danger">
        <div class="it-point-date font-monospace" aria-label="giorno">31</div>
        <div class="it-point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
      </div>
      <div class="it-point-list-content">
        <div class="row mb-5">
          <div class="col-lg-7">
            <!--start it-card-->
            <article class="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border">
              <!--card first child is all the card content: title (link) + footer -->
              <div class="it-card-inline-content">
                <h4 class="it-card-title h4 no_toc">
                  <a href="#">Titolo contenuto editoriale</a>
                </h4>
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
        </div>
      </div>
    </li>
    <li class="it-point-list">
      <div class="it-point-list-aside it-point-list-info">
        <div class="it-point-date font-monospace">
          <svg class="icon icon-info icon-lg" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
        </div>
      </div>
      <div class="it-point-list-content">
        <div class="row mb-5">
          <div class="col-lg-7">
            <!--start it-card-->
            <article class="it-card it-card-inline it-card-inline-mini it-card-inline-reverse it-card-image rounded shadow-sm border mb-3 mb-md-4">
              <!--card first child is all the card content: title (link) + footer -->
              <div class="it-card-inline-content">
                <h4 class="it-card-title h4 no_toc">
                  <a href="#">Titolo contenuto editoriale</a>
                </h4>
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
        </div>
      </div>
    </li>
    <li class="it-point-list">
      <div class="it-point-list-aside it-point-list-success">
        <div class="it-point-date font-monospace">
          <svg class="icon icon-success icon-lg" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
        </div>
      </div>
      <div class="it-point-list-content">
        <div class="row">
          <div class="col-lg-7">
            <!--start it-card-->
            <article class="it-card it-card-image rounded shadow-sm border">
              <!--card first child is the title (link)-->
              <h4 class="it-card-title no_toc">
                <a href="#">Titolo del contenuto</a>
              </h4>
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
      </div>
    </li>
  </ul>

{% endcapture %}{% include example.html content=example %}
