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

{% capture callout %}
Breaking feature dalla versione **2.11**

Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.pin-wrapper` è ora implementato come heading `h` e non semplice `div`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.pin-icon`, se semanticamente rilevante, deve avere attributo `role="img"` e contenere un tag `title` che lo descriva.
  - Gli elementi categoria e data hanno ora tag `span` `visually-hidden` che ne descrivono lo scopo.
  - L'elemento `.card-title` è ora implementato con heading `h4` per rispettare la gerarchia attuale. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
{% endcapture %}{% include callout.html content=callout type="danger" %}



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


## Timeline Point list
Il componente **point list** permette la rappresentazione di una sequenza di eventi o informazioni in maniera
più compatta rispetto alla timeline classica. Il componente ha due layout: calendario e passo passo (step-by-step).

In entrambi i layout il componente è composto da una sezione primaria `.point-list-content` destinata al contenuto
e da una sezione secondaria `.point-list-aside` con la quale viene evidenziata la sequenza temporale.
Nella sezione primaria, destinata al contenuto, è possibile innestare altri componenti.

Il componente può essere sviluppato usando l'elenco non ordinato `ul` o il contenitore generico `div`.

### Esempio come elenco
{% comment %}Example name: Point list, elenco non ordinato{% endcomment %}
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
{% comment %}Example name: Point list, contenitore generico{% endcomment %}
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


### Layout calendario
Il layout calendario permette di esplicitare delle date nella sezione secondaria `.point-list-aside`.

#### Esempio base
Nella sezione secondaria il contenitore `.point-date` viene usato per evidenziare il giorno,
il contenitore `.point-month` per il mese.

{% comment %}Example name: Point list, calendario{% endcomment %}
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

{% comment %}Example name: Point list, calendario completo{% endcomment %}
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

### Layout passo passo
Il layout passo passo (o step-by-step) permette di evidenziare l'ordine temporale dei contenuti.
Nella sezione secondaria è possibile usare un testo breve (2 caratteri massimo) o un'icona.
La differenza principale con il layout calendario sta nelle minori dimensioni della sezione secondaria.

#### Step-by-step con testo
Viene usato il contenitore `.point-date` per inserire un testo brevissimo (2 caratteri massimo).
È possibile usare `.point-month` e `.point-year` per aggiungere ulteriori informazioni.

{% comment %}Example name: Point list, step con testo{% endcomment %}
{% capture example %}
<ul class="point-list-wrapper">
  <li class="point-list point-list-step">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="passo">01</div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list point-list-step">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace" aria-label="passo">01</div>
      <div class="point-month font-monospace" aria-label="passi totali">/3</div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </li>
  <li class="point-list point-list-step">
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

#### Step con icona
In questa variante viene inserita un'icona nel contenitore `.point-date`.
È possibile usare `.point-month` e `.point-year`.

{% comment %}Example name: Point list, step con icona{% endcomment %}
{% capture example %}
<div class="point-list-wrapper" role="list">
  <div class="point-list point-list-step" role="listitem">
    <div class="point-list-aside point-list-primary">
      <div class="point-date font-monospace">
        <svg class="icon icon-primary" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
      </div>
    </div>
    <div class="point-list-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div class="point-list point-list-step" role="listitem">
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
  <div class="point-list point-list-step" role="listitem">
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
La sezione secondaria del componente supporta le varianti colore modificando opportunamente `.point-list-{suffisso}`.

{% comment %}Example name: Point list, varianti colore{% endcomment %}
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
        <div class="card-wrapper w-50 mb-5">
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
    </li>
    <li class="point-list">
      <div class="point-list-aside point-list-danger">
        <div class="point-date font-monospace" aria-label="giorno">31</div>
        <div class="point-month font-monospace" aria-label="mese"><span aria-hidden="true">OTT</span><span class="visually-hidden">Ottobre</span></div>
      </div>
      <div class="point-list-content">
        <div class="card-wrapper w-50 mb-5">
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
    </li>
    <li class="point-list">
      <div class="point-list-aside point-list-info">
        <div class="point-date font-monospace">
          <svg class="icon icon-info icon-lg" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
        </div>
      </div>
      <div class="point-list-content">
        <div class="card-wrapper w-75 mb-5">
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
    </li>
    <li class="point-list">
      <div class="point-list-aside point-list-success">
        <div class="point-date font-monospace">
          <svg class="icon icon-success icon-lg" role="img"><title>Milestone</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-flag"></use></svg>
        </div>
      </div>
      <div class="point-list-content">
        <div class="card-wrapper w-75 mb-5">
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
    </li>
  </ul>

{% endcapture %}{% include example.html content=example %}
