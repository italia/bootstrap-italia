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

- **PIN**: ogni pin contiene un icona, ed una label indicante la data dell'evento.

Il **PIN** ha tre varianti di classe per il suo contenitore `.it-pin-wrapper`:

- `.it-evidence` : per indicare nella timeline eventi del passato (colore blu scuro)
- `.it-now` : per indicare nella timeline eventi collocati nel presente (azzurro)
- Nessuna classe aggiuntiva: per collocare gli eventi nel futuro (bianco)

{% capture callout %}
Breaking feature dalla versione **2.x.y**

Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.pin-wrapper` è ora implementato come heading `h` e non semplice `div`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.pin-icon` ha attributi `role="img"` e tag `title` che lo descrive.
  - Gli elementi categoria e data hanno ora tag `span` `visually-hidden` che ne descrivono lo scopo.
  - L'elemento `.card-title` è ora implementato con heading `h4` per rispettare la gerarchia attuale. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Esempio

{% comment %}Example name: Base, verticale{% endcomment %}
{% capture example %}
<div class="it-timeline-wrapper">
  <div class="row">
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper it-evidence">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Segnaposto</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
          </div>
          <div class="pin-text"><span>maggio {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet</h4>
              <div class="category-top">
                <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                <span class="visually-hidden">Data evento:</span> <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper it-evidence">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Segnaposto</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-bookmark"></use></svg>
          </div>
          <div class="pin-text"><span>giugno {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper it-evidence">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Risultato</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
          </div>
          <div class="pin-text"><span>luglio {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <div class="category-top">
                <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                <span class="visually-hidden">Data evento:</span> <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <span class="visually-hidden">su Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <span class="it-now-label d-none d-lg-flex">Oggi</span>
        <h3 class="it-pin-wrapper it-now">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Successo</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg>
          </div>
          <div class="pin-text"><span>agosto {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Evento</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
          </div>
          <div class="pin-text"><span>settembre {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <div class="category-top">
                <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                <span class="visually-hidden">Data evento:</span> <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <span class="visually-hidden">su Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Successo</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg>
          </div>
          <div class="pin-text"><span>ottobre {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
          </div>
          <div class="pin-text"><span>novembre {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
              <div class="category-top">
                <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                <span class="visually-hidden">Data evento:</span> <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <span class="visually-hidden">su Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <h3 class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
          </div>
          <div class="pin-text"><span>dicembre {{'now' | date: "%Y"}}</span></div>
        </h3>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
