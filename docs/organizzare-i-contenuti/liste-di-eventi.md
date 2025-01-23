---
layout: docs
group: organizzare-i-contenuti
toc: true

title: Liste di eventi
description: La lista di eventi è un componente flessibile per la visualizzazione di liste ordinate cronologicamente.
---

La lista di eventi o **point list** è un componente che organizza i contenuti cronologicamente.

## Introduzione
Il componente ha due layout: calendario e passo passo (step-by-step). In entrambi i 
layout il componente è composto da una sezione primaria `.point-list-content` e 
da una sezione secondaria `.point-list-aside`. La sezione primaria è preposta alla 
presentazione del contenuto ed è possibile innestare altri componenti; la sezione 
secondaria viene usata per mettere in risalto la sequenza temporale.

Infine, il componente può essere implementato usando l'elenco non ordinato `ul` 
oppure usando il contenitore generico `div`.

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


## Layout calendario
Il layout calendario permette di esplicitare delle date nella sezione secondaria `.point-list-aside`.

### Esempio base
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

### Con anno
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

## Layout passo passo
Il layout passo passo (o step-by-step) evidenzia l'ordine temporale dei contenuti
tramite icone o con del breve testo. Nella sezione secondaria è possibile usare un 
testo breve (2 caratteri massimo) o un'icona. La differenza con il layout calendario sta 
nelle minori dimensioni della sezione secondaria.

### Step-by-step con testo
Viene usato il contenitore `.point-date` per inserire un testo brevissimo (2 caratteri 
massimo). È possibile usare `.point-month` e `.point-year` per aggiungere ulteriori 
informazioni.

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

### Step con icona
In questa variante viene inserita un'icona nel contenitore `.point-date`. Inoltre, è 
possibile usare `.point-month` e `.point-year`.

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

## Varianti colore
Modificando opportunamente `.point-list-{suffisso}` è possibile personalizzare il
colore della sezione secondaria. Ad esempio: `.point-list-primary` userà il 
colore `primary`.

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

## Esempio complesso
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
