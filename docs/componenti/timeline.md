---
layout: docs
title: Timeline
description: Componente per la visualizzazione cronologica di eventi.
group: componenti
toc: true
---

Il componente _Timeline_ è caratterizzato dalla classe `.it-timeline-wrapper`.  
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

## Esempio

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

## Breaking change

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
