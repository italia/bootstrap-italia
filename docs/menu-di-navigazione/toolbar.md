---
layout: docs
title: Toolbar
description: Elemento contenitore di link, pulsanti o dropdown.
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

L'elemento Toolbar è un contenitore di link, pulsanti o dropdown. Consiste in un elenco `<ul>` con tanti elementi `<li>` quante sono le voci richieste.

## Dimensioni

La Toolbar si adatta automaticamente in larghezza al suo contenitore. È consigliabile utilizzare contenitori di dimensione orizzontale (o verticale, nel caso del Toolbar verticale) ridotta, per evitare che gli elementi si disperdano in uno spazio troppo ampio.

Per ottimizzare lo spazio disponibile l'elemento è fornito in tre versioni: grande, media e piccola.

### Toolbar grande

La versione predefinita dell'elemento è quella con icone grandi e label.

{% comment %}Example name: Grande{% endcomment %}
{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        <span class="toolbar-label">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti<span class="visually-hidden">elemento disabilitato</span></span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar media

Applicando una classe aggiuntiva `.toolbar-medium` alla Toolbar si ottiene una versione di dimensioni medie.

In questo caso le label, nascoste visivamente, devono essere contenute in uno `<span>` con classe `.visually-hidden`, per rendere disponibile la descrizione agli screen reader.

{% comment %}Example name: Media{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="visually-hidden">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        <span class="visually-hidden">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="visually-hidden">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        <span class="visually-hidden">privacy</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="visually-hidden">preferiti</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-download"></use></svg>
        <span class="visually-hidden">downloads</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar piccola

Applicando una classe aggiuntiva `.toolbar-small` alla Toolbar si ottiene la versione più piccola.

Anche in questo caso le label, non visibile, devono essere contenute in uno `<span>` con classe `.visually-hidden`, per rendere disponibile la descrizione agli screen reader.

{% comment %}Example name: Piccola{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="visually-hidden">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        <span class="visually-hidden">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="visually-hidden">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        <span class="visually-hidden">privacy</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="visually-hidden">preferiti</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-download"></use></svg>
        <span class="visually-hidden">downloads</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Stato degli elementi

Al tag `<a>` dell'elemento attivo va applicata la classe `.active`.

Gli elementi disabilitati avranno invece una classe `.disabled` con ulteriori accorgimenti relativi all'accessibilità a seconda della tipologia:

- **link, tag `<a>`:** aggiungere la proprietà HTML `disabled` al tag. Aggiungere uno span riservato agli screen reader all'interno della label. es.: `<span class="visually-hidden"> elemento disabilitato</span>`
- **dropdown button, tag `<button>`:** aggiungere l'attributo `aria-disabled="true"`.

## Divisori

Per aggiungere degli elementi divisori fra gli elementi utilizzare dei tag `<li>` con classe `.toolbar-divider`, aggiungendo il ruolo separatore `role="separator"` per indicarne la presenza agli screen reader e `aria-orientation="vertical"` per indicarne l'orientamento.

{% comment %}Example name: Con divisori{% endcomment %}
{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        <span class="toolbar-label">immagini</span>
      </a>
    </li>
    <li class="toolbar-divider" role="separator" aria-orientation="vertical"></li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li class="toolbar-divider" role="separator" aria-orientation="vertical"></li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Toolbar con Badge

I Badge possono essere utilizzati per indicare contenuti non letti o alert di vario tipo.

### Grande con Badge

Nella versione grande i Badge possono contenere dei numeri. Il numero dei contenuti non letti o nuovi va indicato anche all'interno della label in uno `<span>` con classe `.visually-hidden` riservato agli screen reader.

{% comment %}Example name: Grande con badge{% endcomment %}
{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <div class="badge-wrapper"><span class="toolbar-badge">1</span></div>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi<span class="visually-hidden">da leggere</span></span>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="badge-wrapper"><span class="toolbar-badge">42</span></div>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti<span class="visually-hidden">da esaminare</span></span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        <span class="toolbar-label">immagini</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Media con Badge

Nella versione media i Badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all'interno della label con classe `.visually-hidden` riservata agli screen reader.

{% comment %}Example name: Media con badge{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <a href="#" class="active">
        <span class="visually-hidden">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="visually-hidden">ci sono 42 nuovi messaggi da leggere</span>
        </div>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">documenti</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="visually-hidden">ci sono 42 nuovi documenti da esaminare</span>
        </div>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">immagini</span>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">privacy</span>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">preferiti</span>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="visually-hidden">download</span>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-download"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Piccola con Badge

Nella versione piccola i Badge non contengono numeri ma possono essere usati come alert generici. Il numero dei contenuti non letti o nuovi va indicato all'interno della label con classe `.visually-hidden` riservata agli screen reader.

{% comment %}Example name: Piccola con badge{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <a href="#" class="active">
        <span class="visually-hidden">documenti</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="visually-hidden">ci sono nuovi documenti da esaminare</span>
        </div>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="visually-hidden">ci sono nuovi messaggi da leggere</span>
        </div>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">immagini</span>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">privacy</span>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">preferiti</span>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="visually-hidden">download</span>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-download"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Toolbar con Dropdown

All'interno della Toolbar è possibile implementare dei pulsanti dropdown con relativo sottomenù.

### Grande con Dropdown

{% comment %}Example name: Grande con dropdown{% endcomment %}
{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper"><span class="toolbar-badge">1</span></div>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
          <span class="toolbar-label">messaggi<span class="visually-hidden">da leggere</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper"><span class="toolbar-badge">42</span></div>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
          <span class="toolbar-label">immagini<span class="visually-hidden">da visualizzare</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
          <span class="toolbar-label">documenti</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle disabled" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-disabled="true" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
          <span class="toolbar-label">privacy</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-more-actions"></use></svg>
          <span class="toolbar-label">altro</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item icon-left" href="#"><svg class="icon me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg><span>Label</span></a></li>
              <li><a class="list-item icon-left" href="#"><svg class="icon me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg><span>Label</span></a></li>
              <li><a class="list-item icon-left" href="#"><svg class="icon me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-settings"></use></svg><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Media con Dropdown

{% comment %}Example name: Media con dropdown{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">messaggi</span>
        <button class="btn btn-dropdown dropdown-toggle active" type="button" id="dropdownMenuButton-med" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="visually-hidden">ci sono 42 nuovi messaggi da esaminare</span>
          </div>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">immagini</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2-med" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="visually-hidden">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">documenti</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3-med" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">privacy</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton4-med" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">preferiti</span>
        <button class="btn btn-dropdown dropdown-toggle disabled" type="button" id="dropdownMenuButton5-med" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-disabled="true" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">altro</span>
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton6-med" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-more-actions"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton6-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item icon-left" href="#"><svg class="icon me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg><span>Label</span></a></li>
              <li><a class="list-item icon-left" href="#"><svg class="icon me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg><span>Label</span></a></li>
              <li><a class="list-item icon-left" href="#"><svg class="icon me-2" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-settings"></use></svg><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Piccola con Dropdown

{% comment %}Example name: Piccola con dropdown{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">messaggi</span>
        <button class="btn btn-dropdown dropdown-toggle active" type="button" id="dropdownMenuButton-sml" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="visually-hidden">ci sono 42 nuovi messaggi da esaminare</span>
          </div>
          <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">immagini</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2-sml" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="visually-hidden">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <span class="visually-hidden">documenti</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3-sml" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
  </li>
  <li>
      <div class="dropdown">
        <span class="visually-hidden">privacy</span>
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton4-sml" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
  </li>
  <li>
      <div class="dropdown">
        <span class="visually-hidden">preferiti</span>
        <button class="btn btn-dropdown dropdown-toggle disabled" type="button" id="dropdownMenuButton5-sml" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-disabled="true" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
  </li>
  <li>
      <div class="dropdown">
        <span class="visually-hidden">altro</span>
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton6-sml" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-more-actions"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton6-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item left-icon" href="#"><svg class="icon me-2 left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon me-2 left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><svg class="icon me-2 left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-settings"></use></svg><span>Label</span></a></li>
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

{% comment %}Example name: Grande verticale{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-vertical">
  <ul>
    <li>
      <a href="#" class="active">
        <div class="badge-wrapper"><span class="toolbar-badge">42</span></div>
        <svg class="icon" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="toolbar-label">messaggi<span class="visually-hidden">da leggere</span></span>
      </a>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton-big" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <div class="badge-wrapper"><span class="toolbar-badge">1</span></div>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
          <span class="toolbar-label">immagini<span class="visually-hidden">da visualizzare</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1-vert">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
  </li>
  <li class="toolbar-divider" role="separator" aria-orientation="vertical"></li>
  <li>
      <a href="#">
        <svg class="icon" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="toolbar-label">documenti</span>
      </a>
    </li>
  <li>
      <a href="#">
        <svg class="icon" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
        <span class="toolbar-label">privacy</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <svg class="icon" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="toolbar-label">preferiti</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Media verticale

{% comment %}Example name: Media verticale{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-medium toolbar-vertical">
  <ul>
    <li>
      <a href="#" class="active">
        <span class="visually-hidden">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="visually-hidden">ci sono 42 nuovi messaggi da leggere</span>
        </div>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton-vert" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <span class="visually-hidden">immagini</span>
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="visually-hidden">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-vert">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="toolbar-divider" role="separator" aria-orientation="vertical"></li>
    <li>
      <a href="#">
        <span class="visually-hidden">privacy</span>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">preferiti</span>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="visually-hidden">download</span>
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-download"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Piccola verticale

{% comment %}Example name: Piccola verticale{% endcomment %}
{% capture example %}
<nav class="toolbar toolbar-small toolbar-vertical">
  <ul>
    <li>
      <a href="#" class="active">
        <span class="visually-hidden">messaggi</span>
        <div class="badge-wrapper">
          <span class="toolbar-badge"></span>
          <span class="visually-hidden">ci sono 42 nuovi messaggi da leggere</span>
        </div>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      </a>
    </li>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1-vert-sml" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Azione">
          <span class="visually-hidden">immagini</span>
          <div class="badge-wrapper">
            <span class="toolbar-badge"></span>
            <span class="visually-hidden">ci sono 42 nuove immagini da visualizzare</span>
          </div>
          <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1-vert-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="toolbar-divider" role="separator" aria-orientation="vertical"></li>
    <li>
        <a href="#">
        <span class="visually-hidden">immagini</span>
          <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-camera"></use></svg>
        </a>
      </li>
    <li>
      <a href="#">
        <span class="visually-hidden">privacy</span>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-locked"></use></svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="visually-hidden">preferiti</span>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled aria-disabled="true">
        <span class="visually-hidden">download</span>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-download"></use></svg>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}
