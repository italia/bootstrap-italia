---
layout: docs
title: Tab
description: Documentazione ed esempi sull'utilizzo del componente Tab.
group: componenti
toc: true
---

L'interfaccia a tab (o schede) di Bootstrap si basa sull'utilizzo del layout di navigazione, con l'aggiunta della classe `.nav-tabs`. Per ottenere una versione con sfondo scuro e testo chiaro bisognerà aggiungere un'ulteriore classe: `.nav-dark`.

{% capture callout %}
La maggior parte degli esempi riguardanti il componente Tab non hanno pannelli di contenuto associati, pertanto la funzionalità per selezionare il pannello risulterà disattivata. Per vedere il componente Tab in azione fare riferimento alla sezione [Controllo dei pannelli associati](#controllo-dei-pannelli-associati).
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture callout %}

#### Accessibilità

Le interfacce a tab, come descritto nelle [pratiche di implementazione WAI ARIA](https://www.w3.org/TR/wai-aria-practices/#tabpanel), richiedono l'utilizzo di attributi `role="tablist"`, `role="tab"`, `role="tabpanel"`, e ulteriori attributi `aria-`, al fine di trasmettere la loro struttura, funzionalità e stato attuale agli utenti delle tecnologie assistive (come i lettori di schermo).

Nota che le interfacce dinamiche a tab **non devono** contenere menu a discesa, poiché ciò causa problemi di usabilità e accessibilità. Dal punto di vista dell'usabilità, il fatto che l'elemento trigger del tab attualmente visualizzato non sia immediatamente visibile (dato che si trova all'interno del menu a discesa chiuso) può causare confusione.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Tab orizzontali a tutta larghezza

Aggiungendo la classe `.auto` al contenitore `.nav-tabs` i tab occupano automaticamente l'intera larghezza disponibile. Se su schermi particolarme piccoli (es: smartphone) le dimensioni dei tab dovessero superare quelle dello schermo, verrà attivato lo scrolling orizzontale dei tab stessi.

### Tab testuale

Lo stato dei tab può essere attivo, non attivo e disabilitato.
Utilizzare la classe `.active` sul link del tab attivo per default.
Utilizzare la classe `.disabled` sul link dei tab da disabilitare, aggiungendo la proprietà `tabindex="-1"` per eliminarlo dalla sequenza di navigazione via tab.

{% comment %}Example name: Orizzontali a tutta larghezza, testuali{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs auto">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page">Attivo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabilitato</a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab con icona

Le label dei tab possono essere sostituite da icone con classi che ne indicano il tipo, avendo cura di includere all'interno del link un elemento `<span>` con classe `.visually-hidden` contenente la descrizione dedicata agli screen reader. La classe `.visually-hidden` impedisce la visualizzazione del testo sui browser visuali.

{% comment %}Example name: Orizzontali a tutta larghezza, con icona{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs auto">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
      <span class="visually-hidden">Tab titolo 1</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
      <span class="visually-hidden">Tab titolo 2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      <span class="visually-hidden">Tab titolo 3</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
      <span class="visually-hidden">Tab titolo 4</span>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab con icona grande

Per ottenere icone più grandi utilizzare la classe `.icon-lg` alle icone. Aggiungere la classe `.nav-tabs-icon-lg` al contenitore `.nav-tabs` per ottimizzare i margini fra tab.

{% comment %}Example name: Orizzontali a tutta larghezza, con icona grande{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-lg auto">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 1</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 3</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 4</span>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab con testo e icona

Icone e testi possono convivere all'interno dei tab, l'allineamento verticale dei due elementi è automatico. Per ottenere il corretto margine fra testo e icona nei tab a sviluppo orizzontale è necessario aggiungere la classe `.nav-tabs-icon-text` al contenitore `.nav-tabs`.

{% comment %}Example name: Orizzontali a tutta larghezza, con testo e icona{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-text auto">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
      Tab 1
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
      Tab 2
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      Tab 3
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
      Tab 4
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Tab orizzontali

In assenza della classe `.auto` i tab vengono dimensionati in base al contenuto.

### Tab testuale

{% comment %}Example name: Orizzontali, testuali{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" aria-current="page">Tab 1 Attivo</a></li>
  <li class="nav-item"><a class="nav-link">Tab 2</a></li>
  <li class="nav-item"><a class="nav-link">Tab 3</a></li>
  <li class="nav-item"><a class="nav-link disabled" tabindex="-1">Tab 4 Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab con icona

{% comment %}Example name: Orizzontali, con icona{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
      <span class="visually-hidden">Tab titolo 1</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
      <span class="visually-hidden">Tab titolo 2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      <span class="visually-hidden">Tab titolo 3</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
      <span class="visually-hidden">Tab titolo 4</span>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab con icona grande

{% comment %}Example name: Orizzontali, con icona grande{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-lg">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 1</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 2</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 3</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1">
      <svg class="icon icon-lg">
        <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
      </svg>
      <span class="visually-hidden">Tab titolo 4</span>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab con testo e icona

{% comment %}Example name: Orizzontali, con testo e icona{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-text">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
      Tab 1
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>
      Tab 2
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      Tab 3
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" tabindex="-1">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
      Tab 4
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Rimozione delle scrollbar su dispositivi touch

Se per motivi estetici si volessero nascondere le scrollbar che appaiono sui dispositivi touch quando vengono scrollati orizzontalmente i tab sarà necessario inserire l'html dei tab all'interno di un wrapper con classe `.nav-tabs-hidescroll`.

```html
<div class="nav-tabs-hidescroll">
  <!-- HTML dei tab -->
</div>
```

Se i tab contengono icone è necessario aggiungere un'ulteriore classe al wrapper:

- `.hidescroll-ico` nel caso di icone normali
- `.hidescroll-ico-lg` nel caso di icone piccole

### Esempio rimozione scrollbar su dispositivi touch

{% comment %}Example name: Senza scrollbar su mobile{% endcomment %}
{% capture example %}
<div class="nav-tabs-hidescroll hidescroll-ico">
  <ul class="nav nav-tabs nav-tabs-icon-text">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        Tab 1
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        Tab 2
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        Tab 3
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        Tab 4
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        Tab 5
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        Tab 6
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        Tab 7
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Controllo dei pannelli associati

Gli esempi sopra riportati non hanno molto senso senza un contenuto che cambi al di sotto di essi; per rendere tali interfacce navigabili è necessario collegare Tab e Pannelli collegando il tag `<a>` dei primi all'attributo `id` dei secondi, come mostrato di seguito:

### Tab testuale

{% comment %}Example name: Con controllo pannelli, testuali{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a></li>
  <li class="nav-item"><a class="nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a></li>
  <li class="nav-item"><a class="nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab 3</a></li>
  <li class="nav-item"><a class="nav-link disabled" id="tab4-tab" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false" aria-disabled="true"  tabindex="-1">Tab 4 Disabilitato</a></li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane p-4 fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">Contenuto 1</div>
  <div class="tab-pane p-4 fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">Contenuto 2</div>
  <div class="tab-pane p-4 fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">Contenuto 3</div>
  <div class="tab-pane p-4 fade" id="tab4" role="tabpanel" aria-labelledby="tab3-tab">Contenuto 4 (non raggiungibile, il tab relativo è disabilitato)</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Tab con icona grande

{% comment %}Example name: Con controllo pannelli, icona grande{% endcomment %}
{% capture example %}
  <ul class="nav nav-tabs nav-tabs-icon-lg" id="myTab2" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="tab1a-tab" data-bs-toggle="tab" href="#tab1a" role="tab" aria-controls="tab1a" aria-selected="true">
        <svg class="icon icon-lg"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        <span class="visually-hidden"> Tab titolo 1</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="tab2a-tab" data-bs-toggle="tab" href="#tab2a" role="tab" aria-controls="tab2a" aria-selected="false">
        <svg class="icon icon-lg"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        <span class="visually-hidden"> Tab titolo 2</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="tab3a-tab" data-bs-toggle="tab" href="#tab3a" role="tab" aria-controls="tab3a" aria-selected="false">
        <svg class="icon icon-lg"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        <span class="visually-hidden"> Tab titolo 3</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" id="tab4a-tab" data-bs-toggle="tab" href="#tab4a" role="tab" aria-controls="tab4a" aria-selected="false"  aria-disabled="true" tabindex="-1">
        <svg class="icon icon-lg"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg>
        <span class="visually-hidden"> Tab titolo 4</span>
      </a>
    </li>
  </ul>
  <div class="tab-content" id="myTab2Content">
    <div class="tab-pane p-4 fade show active" id="tab1a" role="tabpanel" aria-labelledby="tab1a-tab"><p>Contenuto 1</p></div>
    <div class="tab-pane p-4 fade" id="tab2a" role="tabpanel" aria-labelledby="tab2a-tab"><p>Contenuto 2</p></div>
    <div class="tab-pane p-4 fade" id="tab3a" role="tabpanel" aria-labelledby="tab3a-tab"><p>Contenuto 3</p></div>
    <div class="tab-pane p-4 fade" id="tab4a" role="tabpanel" aria-labelledby="tab4a-tab">Contenuto 4 (non raggiungibile, il tab relativo è disabilitato)</div>
  </div>
{% endcapture %}{% include example.html content=example %}

### Tab con testo e icona

{% comment %}Example name: Con controllo pannelli, testo e icona{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-text" id="myTab3" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="tab1c-tab" data-bs-toggle="tab" href="#tab1b" role="tab" aria-controls="tab1b" aria-selected="true">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 1
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="tab2b-tab" data-bs-toggle="tab" href="#tab2b" role="tab" aria-controls="tab2b" aria-selected="false">
     <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 2
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="tab3b-tab" data-bs-toggle="tab" href="#tab3b" role="tab" aria-controls="tab3b" aria-selected="false">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 3
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" id="tab4b-tab" data-bs-toggle="tab" href="#tab4b" role="tab" aria-controls="tab3b" aria-selected="false" aria-disabled="true" tabindex="-1">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 4
    </a>
  </li>
</ul>
<div class="tab-content" id="myTab3Content">
  <div class="tab-pane p-4 fade show active" id="tab1b" role="tabpanel" aria-labelledby="tab1c-tab"><p>Contenuto 1</p></div>
  <div class="tab-pane p-4 fade" id="tab2b" role="tabpanel" aria-labelledby="tab2b-tab"><p>Contenuto 2</p></div>
  <div class="tab-pane p-4 fade" id="tab3b" role="tabpanel" aria-labelledby="tab3b-tab"><p>Contenuto 3</p></div>
  <div class="tab-pane p-4 fade" id="tab4b" role="tabpanel" aria-labelledby="tab4b-tab">Contenuto 4 (non raggiungibile, il tab relativo è disabilitato)</div>
</div>
{% endcapture %}{% include example.html content=example %}

Allo stesso modo di quanto avviene con i normali `.nav`, a seconda delle tue necessità, è possibile modificare tale codice con un markup diverso, diverso dalla classica lista basata su `<ul>`. È importante notare però, che nel caso si desideri usare l'elemento `<nav>`, l'attributo `role="tablist"` non deve essere applicato direttamente su di esso, in quanto sovrascriverebbe il ruolo dell'elemento stesso per la navigazione.

Si può, alternativamente, usare un diverso elemento (nell'esempio seguente un semplice `<div>`) e racchiuderlo con `<nav>`:

{% comment %}Example name: Con controllo pannelli, markup alternativo{% endcomment %}
{% capture example %}
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-tab1-tab" data-bs-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true">Tab 1</a>
    <a class="nav-item nav-link" id="nav-tab2-tab" data-bs-toggle="tab" href="#nav-tab2" role="tab" aria-controls="nav-tab2" aria-selected="false">Tab 2</a>
    <a class="nav-item nav-link" id="nav-tab3-tab" data-bs-toggle="tab" href="#nav-tab3" role="tab" aria-controls="nav-tab3" aria-selected="false">Tab 3</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane p-4 fade show active" id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">Contenuto 1</div>
  <div class="tab-pane p-4 fade" id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab2-tab">Contenuto 2</div>
  <div class="tab-pane p-4 fade" id="nav-tab3" role="tabpanel" aria-labelledby="nav-tab3-tab">Contenuto 3</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Tab verticali

Utilizzando gli strumenti di layout di Bootstrap 5 è possibile realizzare tab a orientamento verticale. Al `<div>` contenitore dei link dei tab va aggiunta la classe `.nav-tabs-vertical`.

### Tab testuale

{% comment %}Example name: Con controllo pannelli, verticale, testuale{% endcomment %}
{% capture example %}
<div class="bd-example-tabs">
  <div class="row">
    <div class="col-4 col-md-3">
      <div class="nav nav-tabs nav-tabs-vertical" id="nav-vertical-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="nav-vertical-tab1-tab" data-bs-toggle="tab" href="#nav-vertical-tab1" role="tab" aria-controls="nav-vertical-tab1" aria-selected="true">Tab 1</a>
        <a class="nav-link" id="nav-vertical-tab2-tab" data-bs-toggle="tab" href="#nav-vertical-tab2" role="tab" aria-controls="nav-vertical-tab2" aria-selected="false">Tab 2</a>
        <a class="nav-link" id="nav-vertical-tab3-tab" data-bs-toggle="tab" href="#nav-vertical-tab3" role="tab" aria-controls="nav-vertical-tab3" aria-selected="false">Tab 3</a>
        <a class="nav-link">...</a>
      </div>
    </div>
    <div class="col-8 col-md-9">
      <div class="tab-content" id="nav-vertical-tabContent">
        <div class="tab-pane p-3 fade show active" id="nav-vertical-tab1" role="tabpanel" aria-labelledby="nav-vertical-tab1-tab">Contenuto 1</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab2" role="tabpanel" aria-labelledby="nav-vertical-tab2-tab">Contenuto 2</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab3" role="tabpanel" aria-labelledby="nav-vertical-tab3-tab">Contenuto 3</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Tab testuale con colore di sfondo

Aggiungendo la classe `.nav-tabs-vertical-background` al `<div>` contenitore dei link i tab selezionati avranno un colore di sfondo.

{% comment %}Example name: Con controllo pannelli, verticale, colore di sfondo{% endcomment %}
{% capture example %}
<div class="bd-example-tabs">
  <div class="row">
    <div class="col-4 col-md-3">
      <div class="nav nav-tabs nav-tabs-vertical nav-tabs-vertical-background" id="nav-vertical-tab-bg" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="nav-vertical-tab-bg1-tab" data-bs-toggle="tab" href="#nav-vertical-tab-bg1" role="tab" aria-controls="nav-vertical-tab-bg1" aria-selected="true">Tab 1</a>
        <a class="nav-link" id="nav-vertical-tab-bg2-tab" data-bs-toggle="tab" href="#nav-vertical-tab-bg2" role="tab" aria-controls="nav-vertical-tab-bg2" aria-selected="false">Tab 2</a>
        <a class="nav-link" id="nav-vertical-tab-bg3-tab" data-bs-toggle="tab" href="#nav-vertical-tab-bg3" role="tab" aria-controls="nav-vertical-tab-bg3" aria-selected="false">Tab 3</a>
        <a class="nav-link">...</a>
      </div>
    </div>
    <div class="col-8 col-md-9">
      <div class="tab-content" id="nav-vertical-tab-bgContent">
        <div class="tab-pane p-3 fade show active" id="nav-vertical-tab-bg1" role="tabpanel" aria-labelledby="nav-vertical-tab-bg1-tab">Contenuto 1</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab-bg2" role="tabpanel" aria-labelledby="nav-vertical-tab-bg2-tab">Contenuto 2</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab-bg3" role="tabpanel" aria-labelledby="nav-vertical-tab-bg3-tab">Contenuto 3</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Tab con testo e icona

{% comment %}Example name: Con controllo pannelli, verticale, testo e icona{% endcomment %}
{% capture example %}
<div class="bd-example-tabs">
  <div class="row">
    <div class="col-5 col-md-4 col-lg-3">
      <div class="nav nav-tabs nav-tabs-vertical" id="nav-vertical-tab-ico" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="nav-vertical-tab-ico1-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico1" role="tab" aria-controls="nav-vertical-tab-ico1" aria-selected="true">Tab 1 <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
        <a class="nav-link" id="nav-vertical-tab-ico2-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico2" role="tab" aria-controls="nav-vertical-tab-ico2" aria-selected="false">Tab 2 <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
        <a class="nav-link" id="nav-vertical-tab-ico3-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico3" role="tab" aria-controls="nav-vertical-tab-ico3" aria-selected="false">Tab 3 <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
        <a class="nav-link">...</a>
      </div>
    </div>
    <div class="col-7 col-md-8 col-lg-9">
      <div class="tab-content" id="nav-vertical-tab-icoContent">
        <div class="tab-pane p-3 fade show active" id="nav-vertical-tab-ico1" role="tabpanel" aria-labelledby="nav-vertical-tab-ico1-tab">Contenuto 1</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico2" role="tabpanel" aria-labelledby="nav-vertical-tab-ico2-tab">Contenuto 2</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico3" role="tabpanel" aria-labelledby="nav-vertical-tab-ico3-tab">Contenuto 3</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Tab con icona

Le label dei Tab possono essere sostituite da icone, avendo cura di includere all'interno del link un elemento `<span>` contenente la descrizione per non gli screen reader del tab con classe `.visually-hidden` per nascondere la descrizione agli altri browser. Al tag `<a>` contenente l'icona va aggiunta la classe `.justify-content-end` per allineare l'icona a destra.

{% comment %}Example name: Con controllo pannelli, verticale, icona{% endcomment %}
{% capture example %}
<div class="bd-example-tabs">
  <div class="row">
    <div class="col-3">
      <div class="nav nav-tabs nav-tabs-vertical" id="nav-vertical-tab-ico-only" role="tablist" aria-orientation="vertical">
        <a class="nav-link justify-content-end active" id="nav-vertical-tab-ico-only1-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico-only1" role="tab" aria-controls="nav-vertical-tab-ico-only1" aria-selected="true"><span class="visually-hidden">Tab titolo 1</span> <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
        <a class="nav-link justify-content-end" id="nav-vertical-tab-ico-only2-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico-only2" role="tab" aria-controls="nav-vertical-tab-ico-only2" aria-selected="false"><span class="visually-hidden">Tab titolo 2</span> <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg></a>
        <a class="nav-link justify-content-end" id="nav-vertical-tab-ico-only3-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico-only3" role="tab" aria-controls="nav-vertical-tab-ico-only3" aria-selected="false"><span class="visually-hidden">Tab titolo 3</span> <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg></a>
        <a class="nav-link justify-content-end">...</a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="nav-vertical-tab-ico-onlyContent">
        <div class="tab-pane p-3 fade show active" id="nav-vertical-tab-ico-only1" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-only1-tab">Contenuto 1</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-only2" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-only2-tab">Contenuto 2</div>
        <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-only3" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-only3-tab">Contenuto 3</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Posizione dei Tab

Per questioni di accessibilità è preferibile utilizzare le proprietà Flex di CSS a un cambio di posizione dei Tab nell'HTML. Per garantire un flusso di lettura naturale della pagina i tab di navigazione devono precedere il contenuto a loro associato.

### Orizzontale in fondo

Per posizionare i tab al di sotto del contenuto è necessario utilizzare un elemento contenitore (ad esempio un <div>) con classi `.d-flex` e `.flex-column-reverse`.

{% comment %}Example name: Con controllo pannelli, orizzontale in basso{% endcomment %}
{% capture example %}
<div class="d-flex flex-column-reverse">
  <ul class="nav nav-tabs" id="pos-hr" role="tablist">
    <li class="nav-item"><a class="nav-link active" id="pos-hr1-tab" data-bs-toggle="tab" href="#pos-hrtab1" role="tab" aria-controls="pos-hrtab1" aria-selected="true">Tab 1</a></li>
    <li class="nav-item"><a class="nav-link" id="pos-hr2-tab" data-bs-toggle="tab" href="#pos-hrtab2" role="tab" aria-controls="pos-hrtab2" aria-selected="false">Tab 2</a></li>
    <li class="nav-item"><a class="nav-link" id="pos-hr3-tab" data-bs-toggle="tab" href="#pos-hrtab3" role="tab" aria-controls="pos-hrtab3" aria-selected="false">Tab 3</a></li>
    <li class="nav-item"><a class="nav-link disabled" id="pos-hr4-tab" data-bs-toggle="tab" href="#pos-hrtab4" role="tab" aria-controls="pos-hrtab4" aria-selected="false" aria-disabled="true"  tabindex="-1">Tab 4 Disabilitato</a></li>
  </ul>
  <div class="tab-content" id="pos-hrContent">
    <div class="tab-pane p-4 fade show active" id="pos-hrtab1" role="tabpanel" aria-labelledby="pos-hr1-tab">Contenuto 1</div>
    <div class="tab-pane p-4 fade" id="pos-hrtab2" role="tabpanel" aria-labelledby="pos-hr2-tab">Contenuto 2</div>
    <div class="tab-pane p-4 fade" id="pos-hrtab3" role="tabpanel" aria-labelledby="pos-hr3-tab">Contenuto 3</div>
    <div class="tab-pane p-4 fade" id="pos-hrtab4" role="tabpanel" aria-labelledby="pos-hr3-tab">Contenuto 4 (non raggiungibile, il tab relativo è disabilitato)</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Verticale a destra

Per posizionare i tab verticali a destra contenuto è necessario applicare la classe `.flex-row-reverse` all'elemento con classe `.row` che li contiene.

{% comment %}Example name: Con controllo pannelli, verticale a destra{% endcomment %}
{% capture example %}
<div class="bd-example-tabs">
  <div class="row flex-row-reverse">
    <div class="col-5 col-md-4 col-lg-3">
      <div class="nav nav-tabs nav-tabs-vertical" id="pos-vr" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="pos-vr1-tab" data-bs-toggle="tab" href="#pos-vr1" role="tab" aria-controls="pos-vr1" aria-selected="true"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 1</a>
        <a class="nav-link" id="pos-vr2-tab" data-bs-toggle="tab" href="#pos-vr2" role="tab" aria-controls="pos-vr2" aria-selected="false"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 2</a>
        <a class="nav-link" id="pos-vr3-tab" data-bs-toggle="tab" href="#pos-vr3" role="tab" aria-controls="pos-vr3" aria-selected="false"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 3</a>
        <a class="nav-link">...</a>
      </div>
    </div>
    <div class="col-7 col-md-8 col-lg-9">
      <div class="tab-content" id="pos-vrContent">
        <div class="tab-pane p-3 fade show active" id="pos-vr1" role="tabpanel" aria-labelledby="pos-vr1-tab">Contenuto 1</div>
        <div class="tab-pane p-3 fade" id="pos-vr2" role="tabpanel" aria-labelledby="pos-vr2-tab">Contenuto 2</div>
        <div class="tab-pane p-3 fade" id="pos-vr3" role="tabpanel" aria-labelledby="pos-vr3-tab">Contenuto 3</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Tab con sfondo scuro

### Tab orizzontali a tutta larghezza

{% comment %}Example name: Con controllo pannelli, sfondo scuro, orizzontale a tutta larghezza{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs auto nav-dark">
  <li class="nav-item"><a class="nav-link active">Tab 1 Attivo</a></li>
  <li class="nav-item"><a class="nav-link">Tab 2</a></li>
  <li class="nav-item"><a class="nav-link">Tab 3</a></li>
  <li class="nav-item"><a class="nav-link disabled" tabindex="-1">Tab 4 Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab con testo e icona

{% comment %}Example name: Con controllo pannelli, sfondo scuro, orizzontale a tutta larghezza, testo e icona{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-text nav-dark">
  <li class="nav-item"><a class="nav-link active"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 1</a></li>
  <li class="nav-item"><a class="nav-link"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 2</a></li>
  <li class="nav-item"><a class="nav-link"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 3</a></li>
  <li class="nav-item"><a class="nav-link disabled" tabindex="-1"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 4</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Tab verticali

{% comment %}Example name: Con controllo pannelli, sfondo scuro, verticale a sinistra{% endcomment %}
{% capture example %}
<div class="bd-example-tabs">
  <div class="row">
    <div class="col-5 col-md-4 col-lg-3">
      <div class="nav nav-tabs nav-tabs-vertical nav-dark" id="nav-vertical-tab-ico-dark" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="nav-vertical-tab-dark1-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark1" role="tab" aria-controls="nav-vertical-tab-dark1" aria-selected="true">Tab 1 <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
        <a class="nav-link" id="nav-vertical-tab-ico-dark2-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark2" role="tab" aria-controls="nav-vertical-tab-ico-dark2" aria-selected="false">Tab 2 <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
        <a class="nav-link" id="nav-vertical-tab-ico-dark3-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark3" role="tab" aria-controls="nav-vertical-tab-ico-dark3" aria-selected="false">Tab 3 <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
        <a class="nav-link disabled" id="nav-vertical-tab-ico-dark4-tab" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark4" role="tab" aria-controls="nav-vertical-tab-ico-dark4" aria-selected="false">Tab 4 <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg></a>
      </div>
    </div>
    <div class="col-7 col-md-8 col-lg-9 p-4">
      <div class="tab-content" id="nav-vertical-tab-ico-darkContent">
          <div class="tab-pane p-3 fade show active" id="nav-vertical-tab-ico-dark1" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark1-tab">Contenuto 1</div>
          <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-dark2" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark2-tab">Contenuto 2</div>
          <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-dark3" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark3-tab">Contenuto 3</div>
          <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-dark4" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark4-tab">Contenuto 4</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Con controllo pannelli, sfondo scuro, verticale a destra{% endcomment %}
{% capture example %}
<div class="bd-example-tabs">
  <div class="row flex-row-reverse">
    <div class="col-5 col-md-4 col-lg-3">
      <div class="nav nav-tabs nav-tabs-vertical nav-dark" id="nav-vertical-tab-ico-dark-rev" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="nav-vertical-tab-dark1-tab-rev" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark1-rev" role="tab" aria-controls="nav-vertical-tab-dark1-rev" aria-selected="true"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 1</a>
        <a class="nav-link" id="nav-vertical-tab-ico-dark2-tab-rev" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark2-rev" role="tab" aria-controls="nav-vertical-tab-ico-dark2-rev" aria-selected="false"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 2</a>
        <a class="nav-link" id="nav-vertical-tab-ico-dark3-tab-rev" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark3-rev" role="tab" aria-controls="nav-vertical-tab-ico-dark3-rev" aria-selected="false"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 3</a>
        <a class="nav-link disabled" id="nav-vertical-tab-ico-dark4-tab-rev" data-bs-toggle="tab" href="#nav-vertical-tab-ico-dark4-rev" role="tab" aria-controls="nav-vertical-tab-ico-dark4-rev" aria-selected="false"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg> Tab 4</a>
      </div>
    </div>
    <div class="col-7 col-md-8 col-lg-9 p-4">
      <div class="tab-content" id="nav-vertical-tab-ico-darkContent-rev">
          <div class="tab-pane p-3 fade show active" id="nav-vertical-tab-ico-dark1-rev" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark1-tab-rev">Contenuto 1</div>
          <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-dark2-rev" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark2-tab-rev">Contenuto 2</div>
          <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-dark3-rev" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark3-tab-rev">Contenuto 3</div>
          <div class="tab-pane p-3 fade" id="nav-vertical-tab-ico-dark4-rev" role="tabpanel" aria-labelledby="nav-vertical-tab-ico-dark4-tab-rev">Contenuto 4</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Tab tipo Card

Aggiungere la classe `.nav-tabs-cards` al tag `ul` per ottenere un design tipo card.

{% comment %}Example name: Con controllo pannelli, tipo card{% endcomment %}
{% capture example %}
<ul class="nav nav-tabs nav-tabs-cards" id="card-simple" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="card-simple1-tab" data-bs-toggle="tab" href="#card-simpletab1" role="tab" aria-controls="card-simpletab1" aria-selected="true">Tab 1</a></li>
  <li class="nav-item"><a class="nav-link" id="card-simple2-tab" data-bs-toggle="tab" href="#card-simpletab2" role="tab" aria-controls="card-simpletab2" aria-selected="false">Tab 2</a></li>
  <li class="nav-item"><a class="nav-link" id="card-simple3-tab" data-bs-toggle="tab" href="#card-simpletab3" role="tab" aria-controls="card-simpletab3" aria-selected="false">Tab 3</a></li>
  <li class="nav-item"><a class="nav-link disabled" id="card-simple4-tab" data-bs-toggle="tab" href="#card-simpletab4" role="tab" aria-controls="card-simpletab4" aria-selected="false" aria-disabled="true"  tabindex="-1">Tab 4 Disabilitato</a></li>
  <li class="nav-item-filler"></li>
</ul>
<div class="tab-content" id="card-simpleContent">
  <div class="tab-pane p-4 fade show active" id="card-simpletab1" role="tabpanel" aria-labelledby="card-simple1-tab">Contenuto 1</div>
  <div class="tab-pane p-4 fade" id="card-simpletab2" role="tabpanel" aria-labelledby="card-simple2-tab">Contenuto 2</div>
  <div class="tab-pane p-4 fade" id="card-simpletab3" role="tabpanel" aria-labelledby="card-simple3-tab">Contenuto 3</div>
  <div class="tab-pane p-4 fade" id="card-simpletab4" role="tabpanel" aria-labelledby="card-simple4-tab">Contenuto 4 (non raggiungibile, il tab relativo è disabilitato)</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Tab tipo Card con pulsanti aggiungi/elimina

Aggiungere le classi `.nav-tabs-editable` e `.nav-tabs-cards` al tag `ul` per ottenere un design tipo card editabili. Includere l'hmtl degli ulteriori elementi di interfaccia come da esempio.

{% comment %}Example name: Con controllo pannelli, tipo card con pulsanti aggiungi/elimina{% endcomment %}
{% capture example %}
<div class="nav-tabs-wrapper">
  <ul class="nav nav-tabs nav-tabs-cards nav-tabs-editable" id="card-simple-btn" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="card-simple-btn1-tab" data-bs-toggle="tab" href="#card-simple-btntab1" role="tab" aria-controls="card-simple-btntab1" aria-selected="true">Tab 1 </a>
        <a class="nav-link-close" href="#"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg><span class="visually-hidden"> Chiudi tab 1</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="card-simple-btn2-tab" data-bs-toggle="tab" href="#card-simple-btntab2" role="tab" aria-controls="card-simple-btntab2" aria-selected="false">Tab 2</a>
        <a class="nav-link-close" href="#"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg><span class="visually-hidden"> Chiudi tab 2</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="card-simple-btn3-tab" data-bs-toggle="tab" href="#card-simple-btntab3" role="tab" aria-controls="card-simple-btntab3" aria-selected="false">Tab 3</a>
        <a class="nav-link-close" href="#"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg><span class="visually-hidden"> Chiudi tab 3</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" id="card-simple-btn4-tab" data-bs-toggle="tab" href="#card-simple-btntab4" role="tab" aria-controls="card-simple-btntab4" aria-selected="false" aria-disabled="true"  tabindex="-1">Tab 4 Disabilitato</a>
        <a class="nav-link-close disabled" href="#"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg><span class="visually-hidden"> Chiudi tab 4</span></a>
      </li>
      <li class="nav-item-filler"></li>
      <li class="nav-item">
        <a class="nav-tab-add"><span class="visually-hidden"> Aggiungi un tab</span></a>
      </li>
  </ul>
</div>
<div class="tab-content" id="card-simple-btnContent">
  <div class="tab-pane p-4 fade show active" id="card-simple-btntab1" role="tabpanel" aria-labelledby="card-simple-btn1-tab">Contenuto 1</div>
  <div class="tab-pane p-4 fade" id="card-simple-btntab2" role="tabpanel" aria-labelledby="card-simple-btn2-tab">Contenuto 2</div>
  <div class="tab-pane p-4 fade" id="card-simple-btntab3" role="tabpanel" aria-labelledby="card-simple-btn3-tab">Contenuto 3</div>
  <div class="tab-pane p-4 fade" id="card-simple-btntab4" role="tabpanel" aria-labelledby="card-simple-btn3-tab">Contenuto 4 (non raggiungibile, il tab relativo è disabilitato)</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Effetto "a comparsa"

Per fare in modo che i tab appaiano con un'animazione "a comparsa" (fade in), è sufficiente aggiungere la classe `.fade` ad ogni `.tab-pane`. Il primo `.tab-pane` dovrà anche avere la classe `.show` per rendere il contenuto iniziale visibile.

```html
<div class="tab-content">
  <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="content-tab-tab">...</div>
  <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">...</div>
  <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">...</div>
  <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">...</div>
</div>
```

Si possono trovare dettagli aggiuntivi sulla gestione attraverso JavaScript di metodi ed eventi sui tab alla [pagina corrispondente](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/components/navs-tabs/#methods) sul sito di Bootstrap.

## Implementazione

### Tramite data attributes

Puoi attivare una navigazione a tab senza scrivere JavaScript, semplicemente utilizzando la proprietà `data-bs-toggle="tab"` nel link all'interno di liste di tipo `.nav-tabs`:

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="data-ex-tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="data-ex-tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="data-ex-tab3-tab" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="data-ex-tab4-tab" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Tab 4</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="data-ex-tab1" role="tabpanel" aria-labelledby="data-ex-tab1-tab">...</div>
  <div class="tab-pane" id="data-ex-tab2" role="tabpanel" aria-labelledby="data-ex-tab2-tab">...</div>
  <div class="tab-pane" id="data-ex-tab3" role="tabpanel" aria-labelledby="data-ex-tab3-tab">...</div>
  <div class="tab-pane" id="data-ex-tab4" role="tabpanel" aria-labelledby="data-ex-tab4-tab">...</div>
</div>
```

### Tramite JavaScript

Alternativamente, è possibile attivare i tab utilizzando JavaScript:

```js
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

È possibile attivare tab individualmente in diversi modi:

```js
var triggerEl = document.querySelector('#myTab a[href="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
```
