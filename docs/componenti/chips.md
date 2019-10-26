---
layout: docs
title: Chips
description: Elementi compatti che rappresentano un input, attributo o azione
group: componenti
toc: true
---

Una _"chip"_ è composta da un tag `div` con classe `.chip`. Contiene una label e, opzionalmente, un bottone di chiusura/rimozione, un'icona o un avatar.

La versione con sola label centra il testo al suo interno e richiede una classe aggiuntiva `.chip-simple`.

L'azione richiesta per l'eliminazione della chip andrà associata al `<button>`.

Aggiungendo la classe `.chip-lg` al contenitore si ottiene una versione più grande della Chip.

{% capture example %}

<div class="row">
  <div class="col-12 col-md-6">
    <h4>Versione Standard</h4>
    <p class="mt-4 mb-2">Solo testo</p>
    <div class="chip chip-simple">
      <span class="chip-label">Label</span>
    </div>
    <p class="mt-4 mb-2">Testo e chiusura</p>
    <div class="chip">
      <span class="chip-label">Label</span>
      <button>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Elimina label</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Icona, testo e chiusura</p>
    <div class="chip">
      <svg class="icon icon-xs"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use></svg>
      <span class="chip-label">Label</span>
      <button>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Elimina label</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Avatar, testo e chiusura</p>
    <div class="chip">
      <div class="avatar size-xs">
        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
      </div>
      <span class="chip-label">Label</span>
      <button>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Elimina label</span>
      </button>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <h4>Versione Grande</h4>
    <p class="mt-4 mb-2">Solo testo grande</p>
    <div class="chip chip-simple chip-lg">
      <span class="chip-label">Label</span>
    </div>
    <p class="mt-4 mb-2">Testo e chiusura grande</p>
    <div class="chip chip-lg">
      <span class="chip-label">Label</span>
      <button>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Elimina label</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Icona, testo e chiusura grande</p>
    <div class="chip chip-lg">
      <svg class="icon icon-xs"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use></svg>
      <span class="chip-label">Label</span>
      <button>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Elimina label</span>
      </button>
    </div>
    <p class="mt-4 mb-2">Avatar, testo e chiusura grande</p>
    <div class="chip chip-lg">
      <div class="avatar size-xs">
        <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
      </div>
      <span class="chip-label">Label</span>
      <button>
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Elimina label</span>
      </button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Varianti di colore

Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap:

{% capture example %}

{% for color in site.data.theme-colors %}
<div class="chip chip-{{ color.name }} chip-lg">
  <span class="chip-label">{{ color.name | capitalize }}</span>
</div>{% endfor %}
{% endcapture %}{% include example.html content=example %}

## Chip Disabilitata

Aggiungendo la classe `.chip-disabled` al contenitore e l'attributo `disabled` al `<button>` si ottiene una chip disabilitata.

{% capture example %}

<div class="chip chip-simple chip-lg chip-disabled">
  <span class="chip-label">Label disabilitata</span>
</div>

<div class="chip chip-lg chip-disabled">
  <label class="chip-label" for="chip-01">Label disabilitata</label>
  <button id="chip-01" disabled>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>

<div class="chip chip-lg chip-disabled">
  <svg class="icon icon-xs"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use></svg>
  <label class="chip-label" for="chip-02">Label disabilitata</label>
  <button id="chip-02" disabled>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>

<div class="chip chip-lg chip-disabled">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <label class="chip-label" for="chip-03">Label disabilitata</label>
  <button id="chip-03" disabled>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di Chip

I gruppi di Chip vengono visualizzati in linea.

{% capture example %}
<div class="chip chip-simple">
  <span class="chip-label">Label</span>
</div>

<div class="chip">
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>

<div class="chip">
  <svg class="icon icon-xs"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use></svg>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>

<div class="chip">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>

<hr/>

<div class="chip chip-lg chip-simple">
  <span class="chip-label">Label</span>
</div>

<div class="chip chip-lg">
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>

<div class="chip chip-lg">
  <svg class="icon icon-xs"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-github"></use></svg>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>

<div class="chip chip-lg">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <span class="chip-label">Label</span>
  <button>
    <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
    <span class="sr-only">Elimina label</span>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}
