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
- Nessuna classe aggiuntiva: per collocare gli eventi nel futuro. (azzurro chiaro)

## Esempio

{% comment %}Example name: Base, verticale{% endcomment %}
{% capture example %}
<div class="it-timeline-wrapper">
  <div class="row">
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper it-evidence">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>maggio {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Categoria</a>
                <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper it-evidence">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>giugno {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper it-evidence">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>luglio {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Categoria</a>
                <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <span class="visually-hidden">su Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span>
                <svg class="icon">
                  <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <span class="it-now-label d-none d-lg-flex">Oggi</span>
        <div class="it-pin-wrapper it-now">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>agosto {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>settembre {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Categoria</a>
                <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <span class="visually-hidden">su Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span>
                <svg class="icon">
                  <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>ottobre {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>novembre {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Categoria</a>
                <span class="data">10/12/{{'now' | date: "%Y"}}</span>
              </div>
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <span class="visually-hidden">su Lorem ipsum dolor sit amet, consectetur adipiscing elit…</span>
                <svg class="icon">
                  <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper">
          <div class="pin-icon">
            <svg class="icon">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>dicembre {{'now' | date: "%Y"}}</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
