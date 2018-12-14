---
layout: docs
title: Timeline
description: Componente per la visualizzazione cronologica di eventi.
group: componenti
toc: true
---

## Esempio
Il componente _Timeline_ è caratterizzato dalla classe `.it-timeline-wrapper`.  
Contiene un elenco di `.timeline-element`.

Ogni `.timeline-element` contiene:  
- **PIN**: ogni pin contiene un icona, ed una label indicante la data dell'evento.  

Il **PIN** ha tre varianti di classe per il suo contenitore `.it-pin-wrapper`:
- `.it-evidence` : per indicare nella timeline eventi del passato (colore bli scuro)  
- `.it-now` : per indicare nella timeline eventi coloocati nel presente (azzurro)  
- Nessuna classe aggiuntiva: per collocare gli eventi nel futuro. (azzurro chiaro)  

{% capture example %}
<div class="it-timeline-wrapper">
  <div class="row">
    <div class="col-12">
      <div class="timeline-element">
        <div class="it-pin-wrapper it-evidence">
          <div class="pin-icon">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>maggio 2018</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Category</a>
                <span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>giugno 2018</span></div>
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
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>luglio 2018</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Category</a>
                <span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>agosto 2018</span></div>
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
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>settembre 2018</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Category</a>
                <span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>ottobre 2018</span></div>
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
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>novembre 2018</span></div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="card-body">
              <div class="category-top">
                <a class="category" href="#">Category</a>
                <span class="data">10/12/2018</span>
              </div>
              <h5 class="card-title big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span class="card-signature">di Federico De Paolis</span>
              <a class="read-more" href="#">
                <span class="text">Leggi di più</span>
                <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use>
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
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </div>
          <div class="pin-text"><span>dicembre 2018</span></div>
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


