---
layout: docs
title: Chips
description: Elementi compatti che rappresentano un input, attributo o azione.
group: componenti
toc: true
---

Una chip è composta da un tag `div` con classe `.chip`. Contiene una label e, opzionalmente, un pulsante di chiusura/rimozione, un'icona o un avatar.

La versione con sola label centra il testo al suo interno e richiede una classe aggiuntiva `.chip-simple`.

Aggiungendo la classe `.chip-lg` al contenitore si ottiene una versione più grande della chip.

L'azione richiesta per l'eliminazione della chip andrà associata al `<button>`.

### Varianti standard e grandi

{% comment %}Example name: Standard e grandi{% endcomment %}
{% capture example %}

<div class="row">
  <div class="col-12 col-md-6">
    <p class="mt-4 mb-2">Solo testo</p>
    <div class="chip">
      <span class="chip-label">Etichetta</span>
    </div>
    <p class="mt-4 mb-2">Testo e chiusura</p>
    <div class="chip">
      <span class="chip-label">Etichetta</span>
      <button  data-bs-dismiss='chip'>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
        <span class="visually-hidden">Elimina etichetta</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Icona, etichetta e pulsante</p>
    <div class="chip">
      <svg class="icon icon-xs"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
      <span class="chip-label">Etichetta</span>
      <button data-bs-dismiss='chip'>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
        <span class="visually-hidden">Elimina etichetta</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Avatar, etichetta e chiusura</p>
    <div class="chip">
      <div class="avatar size-xs">
        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
      </div>
      <span class="chip-label">Etichetta</span>
      <button data-bs-dismiss='chip'>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
        <span class="visually-hidden">Elimina etichetta</span>
      </button>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <p class="mt-4 mb-2">Solo testo grande</p>
    <div class="chip chip-lg">
      <span class="chip-label">Etichetta</span>
    </div>
    <p class="mt-4 mb-2">Testo e chiusura grande</p>
    <div class="chip chip-lg alert">
      <span class="chip-label">Etichetta</span>
      <button data-bs-dismiss='alert'>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
        <span class="visually-hidden">Elimina etichetta</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Icona, testo e chiusura grande</p>
    <div class="chip chip-lg alert">
      <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
      <span class="chip-label">Etichetta</span>
      <button data-bs-dismiss='alert'>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
        <span class="visually-hidden">Elimina etichetta</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Avatar, testo e chiusura grande</p>
    <div class="chip chip-lg alert">
      <div class="avatar size-sm">
        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
      </div>
      <span class="chip-label">Etichetta</span>
      <button data-bs-dismiss='alert'>
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
        <span class="visually-hidden">Elimina etichetta</span>
      </button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Variante con link

{% comment %}Example name: Standard e grandi{% endcomment %}
{% capture example %}
  <a href="#" class="chip">
    <span class="chip-label">Etichetta con link</span>
  </a>
{% endcapture %}{% include example.html content=example %}


### Varianti di colore

Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con i temi di Bootstrap:

{% comment %}Example name: Varianti di colore{% endcomment %}
{% capture example %}

{% for color in site.data.theme-colors %}

<div class="chip chip-{{ color.name }}">
  <span class="chip-label">{{ color.name | capitalize }}</span>
</div>{% endfor %}
{% endcapture %}{% include example.html content=example %}

#### Varianti di colore link

{% comment %}Example name: Varianti di colore link{% endcomment %}
{% capture example %}

{% for color in site.data.theme-colors %}

<a class="chip chip-{{ color.name }}" href="#">
  <span class="chip-label">{{ color.name | capitalize }}</span>
</a>
{% endfor %}
{% endcapture %}{% include example.html content=example %}

## Chip Disabilitata

Aggiungendo la classe `.chip-disabled` al contenitore e l'attributo `disabled` al `<button>` si ottiene una chip disabilitata.

{% comment %}Example name: Disabilitata{% endcomment %}
{% capture example %}
<div class="chip chip-disabled">
  <span class="chip-label">Etichetta</span>
</div>

<div class="chip chip-disabled">
  <span class="chip-label">Etichetta</span>
  <button  data-bs-dismiss='chip'>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina etichetta</span>
  </button>
</div>

<div class="chip chip-disabled">
  <svg class="icon icon-xs"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
  <span class="chip-label">Etichetta</span>
  <button data-bs-dismiss='chip'>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina etichetta</span>
  </button>
</div>

<div class="chip chip-disabled">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <span class="chip-label">Etichetta</span>
  <button data-bs-dismiss='chip'>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina etichetta</span>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di Chip

I gruppi di chip vengono visualizzati in linea.

{% comment %}Example name: Gruppi di Chip{% endcomment %}
{% capture example %}
<div class="chip">
  <span class="chip-label">Label</span>
</div>
<div class="chip">
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina label</span>
  </button>
</div>
<div class="chip">
  <svg class="icon icon-xs"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina label</span>
  </button>
</div>
<div class="chip">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina label</span>
  </button>
</div>

<hr/>

<div class="chip chip-lg">
  <span class="chip-label">Label</span>
</div>
<div class="chip chip-lg">
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina label</span>
  </button>
</div>
<div class="chip chip-lg">
  <svg class="icon icon-xs"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina label</span>
  </button>
</div>
<div class="chip chip-lg">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina label</span>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}

### Gruppi di Chip con link

{% comment %}Example name: Gruppi di Chip con link{% endcomment %}
{% capture example %}
<a href="#" class="chip chip-primary">
  <span class="chip-label">Label</span>
</a>
<a href="#" class="chip chip-primary">
  <span class="chip-label">Label</span>
</a>
<a href="#" class="chip chip-primary">
  <span class="chip-label">Label</span>
</a>
<a href="#" class="chip chip-primary">
  <span class="chip-label">Label</span>
</a>

<hr/>

<a href="#" class="chip chip-lg chip-primary">
  <span class="chip-label">Etichetta</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Etichetta</span>
  </button>
</a>
<a href="#" class="chip chip-lg chip-primary">
  <svg class="icon icon-xs"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-github"></use></svg>
  <span class="chip-label">Etichetta</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina etichetta</span>
  </button>
</a>
<a href="#" class="chip chip-lg chip-primary">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <span class="chip-label">Etichetta</span>
  <button>
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
    <span class="visually-hidden">Elimina etichetta</span>
  </button>
</a>
{% endcapture %}{% include example.html content=example %}