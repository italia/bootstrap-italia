---
layout: docs
title: Timeline
description: Componente per la visualizzazione cronologica di eventi.
group: componenti
toc: true
---

## Timeline classica
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
        <h3 class="it-pin-wrapper it-evidence no_toc">
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
        <h3 class="it-pin-wrapper it-evidence no_toc">
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
        <h3 class="it-pin-wrapper it-now no_toc">
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
        <h3 class="it-pin-wrapper no_toc">
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
        <h3 class="it-pin-wrapper no_toc">
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
        <h3 class="it-pin-wrapper no_toc">
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
        <h3 class="it-pin-wrapper no_toc">
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

### Breaking change

{% capture callout %}
Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.pin-wrapper` è ora implementato come heading `h` e non semplice `div`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.pin-icon`, se semanticamente rilevante, deve avere attributo `role="img"` e contenere un tag `title` che lo descriva.
  - Gli elementi categoria e data hanno ora tag `span` `visually-hidden` che ne descrivono lo scopo.
  - L'elemento `.card-title` è ora implementato con heading `h4` per rispettare la gerarchia attuale. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
{% endcapture %}{% include callout-breaking.html content=callout version="2.11.0" type="danger" %}

## Timeline point List
La _Timeline point list_ permette la rappresentazione di una sequenza di eventi o
informazioni in maniera più compatta rispetto alla timeline classica.

Il componente è composto da una sezione primaria `.point-list-content` e da una
sezione secondaria `.point-list-aside`. La sezione primaria è preposta alla
presentazione del contenuto ed è possibile innestare altri componenti; la sezione
secondaria viene usata per mettere in risalto la sequenza temporale ed è possibile
presentare date specifiche o traguardi generici (con icone e micro-testi).

Infine, il componente può essere implementato usando l'elenco non ordinato `ul`
oppure usando il contenitore generico `div`.

### Esempio come elenco
{% comment %}Example name: Timeline point list, elenco non ordinato{% endcomment %}
{% capture example %}
<ul class="point-list-wrapper">
  <li class="point-list">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">DIC</span><span class="visually-hidden">Dicembre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Esempio con il contenitore generico
{% comment %}Example name: Timeline point list, contenitore generico{% endcomment %}
{% capture example %}
<div class="point-list-wrapper" role="list">
  <div class="point-list" role="listitem">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}


### Date specifiche
Per esplicitare le date si usano dei contenitori annidati nella sezione secondaria
`.point-list-aside`.

#### Esempio base
Nella sezione secondaria il contenitore `.point-date` viene usato per evidenziare il
giorno, il contenitore `.point-month` per il mese.

{% comment %}Example name: Timeline point list, calendario{% endcomment %}
{% capture example %}
<div class="point-list-wrapper" role="list">
  <div class="point-list" role="listitem">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

#### Con anno
Tramite il contenitore `.point-year` è possibile specificare l'anno.

{% comment %}Example name: Timeline point list, calendario completo{% endcomment %}
{% capture example %}
<ul class="point-list-wrapper">
  <li class="point-list">
    <div class="point-list-aside point-list-primary">
      <div class="point-year font-monospace" aria-label="anno">2025</div>
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Layout molto compatto
Tramite la classe `.point-list-xs` è possibile rendere ancora più compatta la
timeline.

{% comment %}Example name: Timeline point list, compatto{% endcomment %}
{% capture example %}
<ul class="point-list-wrapper">
  <li class="point-list point-list-xs">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Traguardi
Nella sezione secondaria è possibile evidenziare l'ordine temporale dei contenuti
tramite icone o con del breve testo (2 caratteri massimo).

#### Traguardi con testo
Viene usato il contenitore `.point-date` per inserire un testo brevissimo (2 caratteri
massimo). È possibile usare `.point-month` e `.point-year` per aggiungere ulteriori
informazioni.

{% comment %}Example name: Timeline point list, traguardi con testo compatto{% endcomment %}
{% capture example %}
<ul class="point-list-wrapper">
  <li class="point-list point-list-xs">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="passo">01</div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list point-list-xs">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="passo">01</div>
      <div class="point-month font-monospace" aria-label="passi totali">/3</div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list point-list-xs">
    <div class="point-list-aside point-list-primary">
      <div class="point-year font-monospace" aria-label="categoria">AB</div>
      <div class="point-date font-monospace" aria-label="passo">01</div>
      <div class="point-month font-monospace" aria-label="passi totali">/3</div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

#### Traguardi con icona
È possibile usare un'icona nel contenitore `.point-date`, e dei micro-testi nei
contenitori `.point-month` e `.point-year`.

{% comment %}Example name: Timeline point list, traguardi con icona compatto{% endcomment %}
{% capture example %}
<div class="point-list-wrapper" role="list">
  <div class="point-list point-list-xs" role="listitem">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace">
        <svg class="icon icon-primary" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
      </div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div class="point-list point-list-xs" role="listitem">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace">
        <svg class="icon icon-primary" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
      </div>
      <div class="point-month font-monospace" aria-label="documento">DOC</div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div class="point-list point-list-xs" role="listitem">
    <div class="point-list-aside point-list-primary">
      <div class="point-year font-monospace" aria-label="versione">v2</div>
      <div class="point-date font-monospace">
        <svg class="icon icon-primary" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
      </div>
      <div class="point-month font-monospace" aria-label="linguaggio">JS</div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

### Varianti colore
Modificando opportunamente `.point-list-{suffisso}` è possibile personalizzare il
colore della sezione secondaria. Ad esempio: `.point-list-primary` userà il
colore `primary`.

{% comment %}Example name: Timeline point list, varianti colore{% endcomment %}
{% capture example %}
<ul class="point-list-wrapper">
  <li class="point-list">
    <div class="point-list-aside point-list-primary">
      <div class="point-year font-monospace" aria-label="anno">2025</div>
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list">
    <div class="point-list-aside point-list-success">
      <div class="point-year font-monospace" aria-label="anno">2025</div>
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list">
    <div class="point-list-aside point-list-info">
      <div class="point-year font-monospace" aria-label="anno">2025</div>
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list">
    <div class="point-list-aside point-list-warning">
      <div class="point-year font-monospace" aria-label="anno">2025</div>
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list">
    <div class="point-list-aside point-list-danger">
      <div class="point-year font-monospace" aria-label="anno">2025</div>
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list">
    <div class="point-list-aside point-list-dark">
      <div class="point-year font-monospace" aria-label="anno">2025</div>
      <div class="point-date font-monospace" aria-label="giorno">14</div>
      <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
</ul>

{% endcapture %}{% include example.html content=example %}

### Esempio complesso
Di seguito un esempio un po' più complesso.

{% comment %}Example name: Point list, esempio complesso{% endcomment %}
{% capture example %}
  <ul class="point-list-wrapper">
    <li class="point-list">
      <div class="point-list-aside point-list-dark">
        <div class="point-date font-monospace" aria-label="giorno">14</div>
        <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
      </div>
      <div class="point-list-content">
        <div class="row mb-5">
          <div class="col-lg-7">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title h5">Lorem ipsum dolor sit amet</h4>
                  <div class="category-top">
                    <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                    <span class="visually-hidden">Data evento:</span> <span class="data">10/12/2025</span>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                    <span class="text">Leggi di più</span>
                    <svg class="icon"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="point-list">
      <div class="point-list-aside point-list-danger">
        <div class="point-date font-monospace" aria-label="giorno">31</div>
        <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
      </div>
      <div class="point-list-content">
        <div class="row mb-5">
          <div class="col-lg-7">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title h5">Lorem ipsum dolor sit amet</h4>
                  <div class="category-top">
                    <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                    <span class="visually-hidden">Data evento:</span> <span class="data">10/12/2025</span>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                    <span class="text">Leggi di più</span>
                    <svg class="icon"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="point-list">
      <div class="point-list-aside point-list-info">
        <div class="point-date font-monospace">
          <svg class="icon icon-info icon-lg" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
        </div>
      </div>
      <div class="point-list-content">
        <div class="row mb-5">
          <div class="col-lg-7">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title h5">Lorem ipsum dolor sit amet</h4>
                  <div class="category-top">
                    <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                    <span class="visually-hidden">Data evento:</span> <span class="data">10/12/2025</span>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                    <span class="text">Leggi di più</span>
                    <svg class="icon"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="point-list">
      <div class="point-list-aside point-list-success">
        <div class="point-date font-monospace">
          <svg class="icon icon-success icon-lg" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
        </div>
      </div>
      <div class="point-list-content">
        <div class="row">
          <div class="col-lg-7">
            <div class="card-wrapper">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title h5">Lorem ipsum dolor sit amet</h4>
                  <div class="category-top">
                    <span class="visually-hidden">Categoria evento:</span> <a class="category" href="#">Categoria</a>
                    <span class="visually-hidden">Data evento:</span> <span class="data">10/12/2025</span>
                  </div>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span class="card-signature">di Federico De Paolis</span>
                  <a class="read-more" href="#">
                    <span class="text">Leggi di più</span>
                    <svg class="icon"><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>

{% endcapture %}{% include example.html content=example %}
