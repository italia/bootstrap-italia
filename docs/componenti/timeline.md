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

-----

## Timeline Point List

La Timeline Point List permette la rappresentazione di una sequenza di eventi o informazioni in maniera più compatta rispetto alla timeline classica. È particolarmente indicata per presentare una breve sequenza di cose da fare e scadenze temporali.

Il componente è caratterizzato da un elenco ordinato `<ol>` con classe `.it-timeline-point-list`. Ogni elemento `<li>` della lista ha classe `.timeline-point` e contiene una sezione laterale `.point-aside` per date o milestone, e una sezione principale `.point-content` per il contenuto.

Il componente dovrebbe essere implemento come elenco ordinato `ol` per usare la corretta semantica HTML. Tuttavia, per la massima flessibilità è possibile implementarlo come elenco non ordinato `ul` o, nel caso di pochi eventi, scegliere con consapevolezza una sequenza di elementi `div` con elementi heading interni.  

### Struttura della sezione laterale

La sezione laterale `.point-aside` visualizza informazioni in tre posizioni verticali tramite classi posizionali:

- `.point-top`: elemento superiore (opzionale) - es. anno, categoria, versione
- `.point-main`: elemento principale (obbligatorio) - es. giorno, numero step, icona milestone
- `.point-bottom`: elemento inferiore (opzionale) - es. mese, frazione, label

Questi elementi sono racchiusi in `.point-visual` con `aria-hidden="true"` perché sono solo presentazione visiva. Il contenuto accessibile è fornito da:
- Elemento `<time>` con attributo `datetime` per le date
- `<span class="visually-hidden">` per contenuti non temporali

{% capture callout %}
#### Accessibilità

**Struttura accessibile:**
- Il wrapper `.point-visual` ha `aria-hidden="true"` per nascondere la presentazione visiva agli screen reader
- Implementa descrizioni dedicate ai lettori di schermo e machine readable con: 
  - **Per punti data**: usa l'elemento semantico `<time>` con l'attributo `datetime` in formato ISO (es. `2025-10-14`).
  - **Per punti non temporali:** usa un `<div>` contenitore generico e usa `<span class="visually-hidden">` per descrivere il contenuto in linguaggio naturale seguendo l'ordine visivo (top → bottom, es. "Categoria AB, passo 1 di 3").
  - **Per punti icona:** usa `aria-hidden="true"` sull'elemento `<svg>` e veicola il significato usando `<span class="visually-hidden">`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Esempio base

{% comment %}Example name: Timeline point list{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point">
    <div class="point-aside point-aside-primary">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point">
    <div class="point-aside point-aside-primary">
      <time datetime="2025-12-14">
        <span class="visually-hidden">14 dicembre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">DIC</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}

### Date specifiche

Per esplicitare le date complete si usa l'elemento `<time>` con l'attributo `datetime` e i contenitori posizionali per la visualizzazione.

#### Con giorno e mese

{% comment %}Example name: Timeline point list, calendario{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point">
    <div class="point-aside point-aside-primary">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}

#### Con anno, giorno e mese

Tramite il contenitore `.point-top` è possibile visualizzare anche l'anno.

{% comment %}Example name: Timeline point list, calendario completo{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point">
    <div class="point-aside point-aside-primary">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">2025</div>
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}

### Layout compatto

Tramite la classe `.timeline-point-xs` applicata all'elemento `.timeline-point` è possibile rendere più compatta la visualizzazione.

{% comment %}Example name: Timeline point list, compatta{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point timeline-point-xs">
    <div class="point-aside point-aside-primary">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}

### Traguardi e milestone

La sezione laterale può essere usata anche per visualizzare progressi, step o milestone tramite numeri, sigle o icone.

#### Traguardi con numeri e sigle

È possibile usare i contenitori posizionali per presentare informazioni diverse dalle date, come numeri di step, frazioni o sigle. In questo caso si usa un `<div>` generico al posto di `<time>`.

{% comment %}Example name: Timeline point list, traguardi numerici{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point timeline-point-xs">
    <div class="point-aside point-aside-primary">
      <div>
        <span class="visually-hidden">Passo 1</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">01</div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point timeline-point-xs">
    <div class="point-aside point-aside-primary">
      <div>
        <span class="visually-hidden">Passo 1 di 3</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">01</div>
          <div class="point-bottom font-monospace">/3</div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point timeline-point-xs">
    <div class="point-aside point-aside-primary">
      <div>
        <span class="visually-hidden">Categoria AB, passo 1 di 3</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">AB</div>
          <div class="point-main font-monospace">01</div>
          <div class="point-bottom font-monospace">/3</div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}

#### Traguardi con icone

È possibile usare un'icona nel contenitore `.point-main` per rappresentare milestone o stati, accompagnata da eventuali micro-testi nei contenitori `.point-top` e `.point-bottom`.

{% comment %}Example name: Timeline point list, milestone con icone{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point timeline-point-xs">
    <div class="point-aside point-aside-primary">
      <div>
        <span class="visually-hidden">Milestone completata</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">
            <svg class="icon icon-primary" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point timeline-point-xs">
    <div class="point-aside point-aside-primary">
      <div>
        <span class="visually-hidden">Documento rilasciato</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">
            <svg class="icon icon-primary" aria-hidden="true">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use>
            </svg>
          </div>
          <div class="point-bottom font-monospace">DOC</div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point timeline-point-xs">
    <div class="point-aside point-aside-primary">
      <div>
        <span class="visually-hidden">Versione 2, codice JavaScript</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">v2</div>
          <div class="point-main font-monospace">
            <svg class="icon icon-primary" aria-hidden="true">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="point-bottom font-monospace">JS</div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}

### Varianti colore

Modificando la classe `.point-aside-{suffisso}` è possibile personalizzare il colore della sezione laterale utilizzando i colori del tema. Ad esempio: `.point-aside-primary`, `.point-aside-success`, `.point-aside-danger`.

{% comment %}Example name: Timeline point list, varianti colore{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point">
    <div class="point-aside point-aside-primary">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">2025</div>
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point">
    <div class="point-aside point-aside-success">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">2025</div>
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point">
    <div class="point-aside point-aside-info">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">2025</div>
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point">
    <div class="point-aside point-aside-warning">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">2025</div>
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point">
    <div class="point-aside point-aside-danger">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">2025</div>
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="timeline-point">
    <div class="point-aside point-aside-dark">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-top font-monospace">2025</div>
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}

### Esempio complesso

Di seguito un esempio che integra card nel contenuto della timeline.

{% comment %}Example name: Point list, esempio complesso{% endcomment %}
{% capture example %}
<ol class="it-timeline-point-list">
  <li class="timeline-point">
    <div class="point-aside point-aside-dark">
      <time datetime="2025-10-14">
        <span class="visually-hidden">14 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">14</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <div class="row mb-5">
        <div class="col-lg-7">
          <!--start it-card-->
          <article class="it-card rounded shadow-sm border">
            <h4 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h4>
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </div>
    </div>
  </li>
  <li class="timeline-point">
    <div class="point-aside point-aside-danger">
      <time datetime="2025-10-31">
        <span class="visually-hidden">31 ottobre 2025</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">31</div>
          <div class="point-bottom font-monospace">OTT</div>
        </div>
      </time>
    </div>
    <div class="point-content">
      <div class="row mb-5">
        <div class="col-lg-7">
          <!--start it-card-->
          <article class="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border">
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
  <li class="timeline-point">
    <div class="point-aside point-aside-info">
      <div>
        <span class="visually-hidden">Milestone in corso</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">
            <svg class="icon icon-info icon-lg" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <div class="row mb-5">
        <div class="col-lg-7">
          <!--start it-card-->
          <article class="it-card it-card-inline it-card-inline-mini it-card-inline-reverse it-card-image rounded shadow-sm border mb-3 mb-md-4">
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
  <li class="timeline-point">
    <div class="point-aside point-aside-success">
      <div>
        <span class="visually-hidden">Milestone completata</span>
        <div class="point-visual" aria-hidden="true">
          <div class="point-main font-monospace">
            <svg class="icon icon-success icon-lg" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="point-content">
      <div class="row">
        <div class="col-lg-7">
          <!--start it-card-->
          <article class="it-card it-card-image rounded shadow-sm border">
            <h4 class="it-card-title no_toc">
              <a href="#">Titolo del contenuto</a>
            </h4>
            <div class="it-card-image-wrapper">
              <div class="ratio ratio-21x9">
                <figure class="figure img-full">
                  <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
                </figure>
              </div>
            </div>
            <div class="it-card-body">
              <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <footer class="it-card-related it-card-footer">
              <time class="it-card-date" datetime="{{ 'now' | date: "%Y" }}-04-22">22 aprile {{ 'now' | date: "%Y" }}</time>
            </footer>
          </article>
          <!--end it-card-->
        </div>
      </div>
    </div>
  </li>
</ol>
{% endcapture %}{% include example.html content=example %}
