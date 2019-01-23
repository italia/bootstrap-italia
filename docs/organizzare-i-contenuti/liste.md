---
layout: docs
group: organizzare-i-contenuti
toc: true

title: Liste
description: La lista è un componente flessibile per la visualizzazione di liste con testo, link o elementi correlati.
---

## Lista semplice solo testo

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="it-right-zone"><span class="text">Label 1</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="it-right-zone"><span class="text">Label 2</span>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="it-right-zone"><span class="text">Active Label</span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Tipologie di lista
Le list possono contenere icone, avatar o immagini.

### Lista con avatar
L'elemento **`.avatar`** precede l'elemento  **`.it-right-zone`** che contiene il testo.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="avatar size-lg"><img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></div>
        <div class="it-right-zone"><span class="text">Label 1</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="avatar size-lg"><img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></div>
        <div class="it-right-zone"><span class="text">Label 2</span>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="avatar size-lg"><img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></div>
        <div class="it-right-zone"><span class="text">Active Label</span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con icona
L'elemento **`.it-rounded-icon`** con all'interno il relativo SVG, precede l'elemento  **`.it-right-zone`** che contiene il testo.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="it-rounded-icon">
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span class="text">Label 1</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="it-rounded-icon">
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span class="text">Label 2</span>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="it-rounded-icon">
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span class="text">Active Label</span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con immagine
L'elemento **`.it-thumb`** con all'interno il relativo svg, precede l'elemento  **`.it-right-zone`** che contiene il testo.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="it-thumb"><img src="https://via.placeholder.com/40x40.png?text=40x40" alt="image alt" title="image title"></div>
        <div class="it-right-zone"><span class="text">Label 1</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="it-thumb"><img src="https://via.placeholder.com/40x40.png?text=40x40" alt="image alt" title="image title"></div>
        <div class="it-right-zone"><span class="text">Label 2</span>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="it-thumb"><img src="https://via.placeholder.com/40x40.png?text=40x40" alt="image alt" title="image title"></div>
        <div class="it-right-zone"><span class="text">Active Label</span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}


## Lista con azioni
Le list con azioni hanno al loro interno icone o elementi da associare ad azioni specifiche decise in base alle esigenze.

### Con freccia

L'elemento **`.icon`** con all'interno il relativo svg, segue l'elemento  **`.text`** che contiene il testo.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 1</span>
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 2</span>
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="it-right-zone">
          <span class="text">Active Label</span>
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use>
          </svg>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con "more"

L'elemento **`.icon`** con all'interno il relativo svg, segue l'elemento  **`.text`** che contiene il testo.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 1</span>
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-more-actions"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 2</span>
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-more-actions"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="it-right-zone">
          <span class="text">Active Label</span>
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-more-actions"></use>
          </svg>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con azioni multiple

L'elemento **`.it-multiple`** con all'interno i relativi svg, segue l'elemento  **`.text`**.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 1</span>
          <span class="it-multiple">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 2</span>
          <span class="it-multiple">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </span>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="it-right-zone">
          <span class="text">Active Label</span>
          <span class="it-multiple">
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con toggle 

L'elemento **`.toggles`**, segue l'elemento  **`.text`**.
Per attivare il javascript che attiva il funzionamento dei toggles è necessario aggiungere la classe **`.it-has-checkbox`** nel tag **`<a>`** che lo contiene.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="it-right-zone">
          <span class="text">Label 1</span>
          <div class="toggles">
            <label for="toggle1">
            <input type="checkbox" id="id1"><span class="lever"></span>
            </label>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="it-right-zone">
          <span class="text">Label 2</span>
          <div class="toggles">
            <label for="toggle1">
            <input type="checkbox" id="id2"><span class="lever"></span>
            </label>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="it-right-zone">
          <span class="text">Label</span>
          <div class="toggles">
            <label for="toggle1">
            <input type="checkbox" id="id3"><span class="lever"></span>
            </label>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Altre variazioni

### Con metadata
Ad ogni list si può aggiungere un campo "metadata", come nell'esempio seguente.  
L'elemento **`.metadata`**, segue l'elemento  **`.text`**.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="avatar size-lg"><img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></div>
        <div class="it-right-zone"><span class="text">Label 1</span><span class="metadata">metadata</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="avatar size-lg"><img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></div>
        <div class="it-right-zone"><span class="text">Label 2</span><span class="metadata">metadata</span>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="avatar size-lg"><img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></div>
        <div class="it-right-zone"><span class="text">Active Label</span><span class="metadata">metadata</span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con immagine e toggles
Gli elementi a destra e sinistra del testo possono essere combinati.  
Di seguito un esempio con immagine e toggle.  
Per attivare il javascript che attiva il funzionamento dei toggles è necessario aggiungere la classe **`.it-has-checkbox`** nel tag **`<a>`** che lo contiene.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="it-thumb"><img src="https://via.placeholder.com/40x40.png?text=40x40" alt="image alt" title="image title"></div>
        <div class="it-right-zone">
          <span class="text">Label 1</span>
          <div class="toggles">
            <label for="toggle1">
            <input type="checkbox" id="idt1"><span class="lever"></span>
            </label>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="it-thumb"><img src="https://via.placeholder.com/40x40.png?text=40x40" alt="image alt" title="image title"></div>
        <div class="it-right-zone">
          <span class="text">Label 2</span>
          <div class="toggles">
            <label for="toggle1">
            <input type="checkbox" id="idt2"><span class="lever"></span>
            </label>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="it-thumb"><img src="https://via.placeholder.com/40x40.png?text=40x40" alt="image alt" title="image title"></div>
        <div class="it-right-zone">
          <span class="text">Label</span>
          <div class="toggles">
            <label for="toggle1">
            <input type="checkbox" id="idt3"><span class="lever"></span>
            </label>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con testo aggiuntivo, azioni multiple e metadata
Per il testo aggiuntivo, utilizzare il tag **`<em>`** all'interno dell'elemento **`.text`**.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 1<em>Font Titillium 14px. Leading 20px.</em></span>
          <span class="it-multiple">
            <span class="metadata">metadata</span>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </span>
        </div>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="it-right-zone">
          <span class="text">Label 2<em>Font Titillium 14px. Leading 20px.</em></span>
          <span class="it-multiple">
            <span class="metadata">metadata</span>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </span>
        </div>
      </a>
    </li>
    <li>
      <a class="active" href="#">
        <div class="it-right-zone">
          <span class="text">Active Label<em>Font Titillium 14px. Leading 20px.</em></span>
          <span class="it-multiple">
            <span class="metadata">metadata</span>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-code-circle"></use>
            </svg>
          </span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con testo aggiuntivo e checkbox.
L'elemento **`.form-check`** con all'interno il relativo input, precede l'elemento  **`.it-right-zone`** che contiene il testo.  
Per attivare il javascript che attiva il funzionamento dei checkbox è necessario aggiungere la classe **`.it-has-checkbox`** nel tag **`<a>`** che lo contiene.

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="form-check">
          <input id="idc1" type="checkbox">
          <label for="idc1"></label>
        </div>
        <div class="it-right-zone"><span class="text">Label 1<em>Font Titillium 14px. Leading 20px.</em></span>
        </div>
      </a>
    </li>
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="form-check">
          <input id="idc2" type="checkbox">
          <label for="idc2"></label>
        </div>
        <div class="it-right-zone"><span class="text">Label 2<em>Font Titillium 14px. Leading 20px.</em></span>
        </div>
      </a>
    </li>
    <li>
      <a class="it-has-checkbox" href="#">
        <div class="form-check">
          <input id="idc3" type="checkbox">
          <label for="idc3"></label>
        </div>
        <div class="it-right-zone"><span class="text">Active Label<em>Font Titillium 14px. Leading 20px.</em></span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}
