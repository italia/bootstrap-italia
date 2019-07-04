---
layout: docs
title: Toolbar
description: Elemento contenitore di link, bottoni o dropdown
group: menu-di-navigazione
toc: true
---

<style>
  /* Style override for Documentation purposes */
  .bd-example {
    max-width: 400px;
    height: 400px;
    margin: 0 5px 20px;
    padding: 0;
    position: relative;
  }
</style>

L'elemento Toolbar è un contenitore di link, bottoni o dropdown. Consiste in un elenco `<ul>` con tanti elementi `<li>` quante sono le voci richieste.

## Dimensioni

La Toolbar si adatta automaticamente in larghezza al suo contenitore. È consigliabile utilizzare contenitori di dimensione orizzontale (o verticale, nel caso del Toolbar verticale) ridotta, per evitare che gli elementi si disperdano in uno spazio troppo ampio.

Per ottimizzare lo spazio disponibile l'elemento è fornito in tre versioni: grande, media e piccola.

### Toolbar grande

La versione predefinita dell'elemento è quella con icone grandi e label.

{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        <span class="toolbar-label">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti<span class="sr-only">elemento disabilitato</span></span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar media

Applicando una classe aggiuntiva `.toolbar-medium` alla Toolbar si ottiene una versione di dimensioni medie.

In questo caso le label, nascoste visivamente, devono essere contenute in uno `<span>` con classe `.sr-only`, per rendere disponibile la descrizione agli screen reader.

{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        <span class="sr-only">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        <span class="sr-only">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        <span class="sr-only">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        <span class="sr-only">privacy</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        <span class="sr-only">preferiti</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-download"></use></svg>
        <span class="sr-only">downloads</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar piccola

Applicando una classe aggiuntiva `.toolbar-small` alla Toolbar si ottiene la versione più piccola.

Anche in questo caso le label, non visibile, devono essere contenute in uno `<span>` con classe `.sr-only`, per rendere disponibile la descrizione agli screen reader.

{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        <span class="sr-only">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        <span class="sr-only">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        <span class="sr-only">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        <span class="sr-only">privacy</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        <span class="sr-only">preferiti</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-download"></use></svg>
        <span class="sr-only">downloads</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Stato degli elementi

Al tag `<a>` dell'elemento attivo va applicata la classe `.active`.

Gli elementi disabilitati avranno invece una classe `.disabled` con ulteriori accorgimenti relativi all'accessibilità a seconda della tipologia:
- **link, tag `<a>`:** aggiungere la proprietà HTML `disabled` al tag. Aggiungere uno span riservato agli screen reader all'interno della label. es.: `<span class="sr-only"> elemento disabilitato</span>`
- **dropdown button, tag `<button>`:** aggiungere l'attributo `aria-disabled="true"`.

## Divisori

Per aggiungere degli elementi divisori fra gli elementi utilizzare dei tag `<li>` con classe `.toolbar-divider`, aggiungendo l'attributo `aria-hidden="true"` per nasconderli agli screen reader.

{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        <span class="toolbar-label">immagini</span>
      </a>
    </li>
    <li class="toolbar-divider" aria-hidden="true"></li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li class="toolbar-divider" aria-hidden="true"></li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Toolbar con Badge

I Badge possono essere utilizzati per indicare contenuti non letti o alert di vario tipo.

### Grande con Badge

Nella versione grande i Badge possono contenere dei numeri. Il numero dei contenuti non letti o nuovi va indicato anche all'interno della label in uno `<span>` con classe `.sr-only` riservato agli screen reader.

{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <div class="badge-wrapper"><span class="toolbar-badge">1</span></div>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi<span class="sr-only">da leggere</span></span>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="badge-wrapper"><span class="toolbar-badge">42</span></div>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti<span class="sr-only">da esaminare</span></span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        <span class="toolbar-label">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Media con Badge

Nella versione media i Badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all'interno della label con classe `.sr-only` riservata agli screen reader.

{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <a href="#" class="active">
        <span class="sr-only">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="sr-only">ci sono 42 nuovi messaggi da leggere</span>
        </div>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">documenti</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="sr-only">ci sono 42 nuovi documenti da esaminare</span>
        </div>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">immagini</span>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">privacy</span>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">preferiti</span>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="sr-only">chiudi</span>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Piccola con Badge

Nella versione piccola i Badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all'interno della label con classe `.sr-only` riservata agli screen reader.

{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <a href="#" class="active">
        <span class="sr-only">documenti</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="sr-only">ci sono nuovi documenti da esaminare</span>
        </div>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="sr-only">ci sono nuovi messaggi da leggere</span>
        </div>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">immagini</span>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">privacy</span>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">preferiti</span>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="sr-only">chiudi</span>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Toolbar con Dropdown

All'interno della Toolbar è possibile implementare dei bottoni dropdown con relativo sottomenù.

### Grande con Dropdown

{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper"><span class="toolbar-badge">1</span></div>
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
          <span class="toolbar-label">messaggi<span class="sr-only">da leggere</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper"><span class="toolbar-badge">42</span></div>
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
          <span class="toolbar-label">immagini<span class="sr-only">da visualizzare</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
          <span class="toolbar-label">documenti</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle disabled" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-disabled="true" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
          <span class="toolbar-label">privacy</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-more-actions"></use></svg>
          <span class="toolbar-label">altro</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-mail"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-settings"></use></svg><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Media con Dropdown

{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <div class="dropdown">
        <span class="sr-only">messaggi</span>
        <button class="btn btn-dropdown dropdown-toggle active" type="button" id="dropdownMenuButton-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="sr-only">ci sono 42 nuovi messaggi da esaminare</span>
          </div>
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="sr-only">immagini</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="sr-only">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="sr-only">documenti</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="sr-only">privacy</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton4-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="sr-only">preferiti</span>
        <button class="btn btn-dropdown dropdown-toggle disabled" type="button" id="dropdownMenuButton5-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-disabled="true" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="sr-only">altro</span>
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton6-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-more-actions"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton6-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2 left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2 left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-mail"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2 left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-settings"></use></svg><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Piccola con Dropdown

{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <div class="dropdown">
        <span class="sr-only">messaggi</span>
        <button class="btn btn-dropdown dropdown-toggle active" type="button" id="dropdownMenuButton-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="sr-only">ci sono 42 nuovi messaggi da esaminare</span>
          </div>
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="sr-only">immagini</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="sr-only">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="sr-only">documenti</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <span class="sr-only">privacy</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton4-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <span class="sr-only">preferiti</span>
        <button class="btn btn-dropdown dropdown-toggle disabled" type="button" id="dropdownMenuButton5-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-disabled="true" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <span class="sr-only">altro</span>
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton6-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-more-actions"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton6-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2 left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-link"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2 left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-mail"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon mr-2 left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-settings"></use></svg><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Toolbar verticale

Applicando una classe aggiuntiva `.toolbar-vertical` alla Toolbar gli elementi vengono visualizzati in colonna.

### Grande verticale

{% capture example %}
<nav class="toolbar toolbar-vertical">
  <ul>
    <li>
      <a href="#" class="active">
        <div class="badge-wrapper"><span class="toolbar-badge">42</span></div>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi<span class="sr-only">da leggere</span></span>
      </a>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton-big" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper"><span class="toolbar-badge">1</span></div>
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
          <span class="toolbar-label">immagini<span class="sr-only">da visualizzare</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1-vert">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li class="toolbar-divider" aria-hidden="true"></li>
	<li>
      <a href="#">
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti</span>
      </a>
    </li>
	<li>
      <a href="#">
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Media verticale

{% capture example %}
<nav class="toolbar toolbar-medium toolbar-vertical">
  <ul>
    <li>    
      <a href="#" class="active">
        <span class="sr-only">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="sr-only">ci sono 42 nuovi messaggi da leggere</span>
        </div>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton-vert" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <span class="sr-only">immagini</span>
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="sr-only">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-vert">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="toolbar-divider" aria-hidden="true"></li>
    <li>
      <a href="#">
        <span class="sr-only">privacy</span>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">preferiti</span>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="sr-only">chiudi</span>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Piccola verticale 

{% capture example %}
<nav class="toolbar toolbar-small toolbar-vertical">
  <ul>
    <li>
      <a href="#" class="active">
        <span class="sr-only">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="sr-only">ci sono 42 nuovi messaggi da leggere</span>
        </div>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1-vert-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <span class="sr-only">immagini</span>
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="sr-only">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1-vert-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	  </li>
	  <li class="toolbar-divider" aria-hidden="true"></li>
    <li>
        <a href="#">
        <span class="sr-only">immagini</span>
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        </a>
      </li>
    <li>
      <a href="#">
        <span class="sr-only">privacy</span>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="sr-only">preferiti</span>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="sr-only">chiudi</span>
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}
