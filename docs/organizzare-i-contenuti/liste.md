---
layout: docs
group: organizzare-i-contenuti
toc: true

title: Liste
description: La lista è un componente flessibile per la visualizzazione di liste con testo, link o elementi correlati.
---

## Tipologie di lista

Le liste, costituite da tag `<ul>` con classe `.it-list` all'interno di un wrapper con classe `.it-list-wrapper`, possono contenere testi, link, icone, avatar, immagini o una combinazione di questi elementi.

### Lista semplice solo testo

{% comment %}Example name: Base, con testo{% endcomment %}

{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Link</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con avatar

L'elemento `.avatar` precede l'elemento `.it-right-zone` che contiene il testo.

{% comment %}Example name: Base, con avatar{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Link</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con icona

L'elemento `.it-rounded-icon` con all'interno la relativa icona, precede l'elemento `.it-right-zone` che contiene il testo.

{% comment %}Example name: Base, con icona{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon">
            <title>Cartella</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon">
            <title>Cartella</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone">
          <span class="text">Link</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon">
            <title>Cartella</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con immagine

L'elemento `.it-thumb` con all'interno la relativa immagine, precede l'elemento `.it-right-zone` che contiene il testo. Ha una dimensione massima di `5rem` che corrispondono a `80px`. La proporzione dell'immagine può essere modificata utilizzando le classi specifiche per le <a href="{{ site.baseurl }}/docs/componenti/organizzare-gli-spazi/proporzioni/">proporzioni</a>

{% comment %}Example name: Base, con immagine{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-thumb ratio ratio-16x9">
          <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-thumb ratio ratio-4x3">
          <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine">
        </div>
        <div class="it-right-zone">
          <span class="text">Link</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="it-thumb ratio ratio-1x1">
          <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Lista con azioni

Le liste con azioni hanno al loro interno icone o elementi interattivi da associare ad azioni specifiche decise in base alle esigenze.

### Con freccia

L'elemento `.icon` con all'interno la relativa icona segue l'elemento `.text` che contiene il testo.

{% comment %}Example name: Azioni, con freccia{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Link</span>
          <svg class="icon icon-primary icon-sm">
            <title>Freccia destra</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Link</span>
          <svg class="icon icon-primary icon-sm">
            <title>Freccia destra</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
          </svg>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con azioni multiple

L'elemento `.it-multiple` con all'interno le relative icone, segue l'elemento `.text`.

{% comment %}Example name: Azioni, multiple{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <span class="text">Testo</span>
          <span class="it-multiple">
            <a href="#" aria-label="Testo - Azione 1">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo - Azione 2">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo - Azione 3">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <a href="#">
            <span class="text">Link</span>
          </a>
          <span class="it-multiple">
            <a href="#" aria-label="Link - Azione 1">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 2">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 3">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
    <li>
      <div class="list-item" href="#">
        <div class="it-right-zone">
          <a href="#">
            <span class="text">Link</span>
          </a>
          <span class="it-multiple">
            <a href="#" aria-label="Link - Azione 1">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 2">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 3">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Altre variazioni

### Con metadata

Ad ogni lista si può aggiungere un campo testuale _metadata_, come nell'esempio seguente.
L'elemento `.metadata`, segue l'elemento `.text`.

{% comment %}Example name: Con metadata{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
          <span class="metadata">metadata testo</span>
        </div>
      </div>
    </li>
    <li>
      <div class="list-item">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
          <span class="metadata"><a href="#">metadata link</a></span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Link</span>
          <span class="metadata">metadata testo</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <a href="#">
            <span class="text">Link</span>
          </a>
          <span class="metadata"><a href="#">metadata link</a></span>
        </div>
      </div>
    </li>
    <li>
      <a class="list-item" href="#">
        <div class="avatar">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Link</span>
          <span class="metadata">metadata testo</span>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Con testo aggiuntivo, azioni multiple e metadata

Per avere una lista che permetta paragrafi di testo aggiuntivo per ogni elemento, bisogna utilizzare un approccio con titolo (heading) e paragrafo `<p>`, mantenendo la classe `.text` per l'elementi titolo. Entrambi devono essere inclusi in un elemento `<div>` per il corretto allineamento.

{% comment %}Example name: Con testo aggiuntivo, azioni multiple e metadata{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <div>
            <h4 class="text m-0">Testo</h4>
            <p class="small m-0">Lorem ipsum dolor sit amet.</p>
          </div>
          <span class="it-multiple">
            <span class="metadata">metadata testo</span>
            <a href="#" aria-label="Testo - Azione 1">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo - Azione 2">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo - Azione 3">
              <svg class="icon icon-primary">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
    <li>
      <div  class="list-item">
        <div class="it-right-zone">
          <div>
            <h4 class="text m-0">Testo</h4>
            <p class="small m-0">Lorem ipsum dolor sit amet.</p>
          </div>
          <span class="it-multiple">
            <span class="metadata"><a href="#">metadata link</a></span>
            <a href="#" aria-label="Testo 2 - Azione 1">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo 2 - Azione 2">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo 2 - Azione 3">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
    <li>
      <div  class="list-item">
        <div class="it-right-zone">
          <div>
            <h4 class="text m-0"><a href="#">Link</a></h4>
            <p class="small m-0">Lorem ipsum dolor sit amet.</p>
          </div>
          <span class="it-multiple">
            <span class="metadata"><a href="#">metadata link</a></span>
            <a href="#" aria-label="Link - Azione 1">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 2">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 3">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <div>
            <h4 class="text m-0"><a href="#">Link</a></h4>
            <p class="small m-0">Lorem ipsum dolor sit amet.</p>
          </div>
          <span class="it-multiple">
            <span class="metadata">metadata testo</span>
            <a href="#" aria-label="Link - Azione 1">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 2">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 3">
              <svg class="icon">
                <title>Codice</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Liste per menu di navigazione

Le liste per menu di navigazione, costituite da tag `<ul>` con classe `.link-list` all'interno di un wrapper con classe `.link-list-wrapper`, vengono utilizzate per creare le voci dei menu [Dropdown]({{site.baseurl}}/docs/componenti/dropdown/), [Megamenu]({{site.baseurl}}/docs/menu-di-navigazione/megamenu/), [Sidebar]({{site.baseurl}}/docs/menu-di-navigazione/sidebar/) e [Navscroll]({{site.baseurl}}/docs/menu-di-navigazione/navscroll/).

### Linea singola

{% comment %}Example name: Per menu, base{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 2</span></a>
    </li>
   <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Elemento con stato attivo

Per rendere attivo un elemento è sufficiente aggiungere la classe `.active` al relativo link.

{% comment %}Example name: Per menu, con stato attivo{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item active" href="#"><span>Link lista 2 attivo</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Elemento con stato disabilitato

Per disabilitare un elemento è sufficiente aggiungere la classe `.disabled` al relativo link.

{% comment %}Example name: Per menu, con stato disabilitato{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item disabled" href="#" aria-disabled="true"><span>Link lista 2 disabilitato</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Intestazione e divisore

Le liste di link possono avere un'intestazione (con o senza link) e/o divisori per separare gruppi di link.

L'intestazione è costituita dall'elemento `.link-list-heading` che precede il tag `<ul>`.  
Il divisore è costituito dal tag `<span>` con classe `.divider` e attributo `role="separator"`  all'interno del tag `<li>`.

{% comment %}Example name: Per menu, con intestazione e divisore{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <h4 class="link-list-heading">Intestazione senza link</h4>
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 2</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
    <li>
      <span class="divider" role="separator"></span>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 4</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Per menu, con intestazione e link, e divisore{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <h4 class="link-list-heading"><a href="#">Intestazione con link</a></h4>
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 2</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
    <li>
      <span class="divider" role="separator"></span>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 4</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Dimensioni

Per ogni elemento di una lista di link è possibile definire una variante di dimensione maggiore utilizzando la classe `.large` applicata al tag `<a>`.

{% comment %}Example name: Per menu, con dimensione grande{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <h4 class="link-list-heading">Intestazione</h4>
  <ul class="link-list">
    <li>
      <a class="list-item large" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item large" href="#"><span>Link lista 2</span></a>
    </li>
    <li>
      <a class="list-item large" href="#"><span>Link lista 3</span></a>
    </li>
    <li>
      <span class="divider" role="separator"></span>
    </li>
    <li>
      <a class="list-item large" href="#"><span>Link lista 4</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Multiline con icona

Ogni elemento di una lista di link può avere un'icona (a destra o sinistra del testo) ed un abstract.

Per includere un'icona bisogna aggiungere al tag `<a>` una delle seguenti classi:

- `icon-right`: se si vuole posizionare l'icona a destra del testo
- `icon-left`: se si vuole posizionare l'icona a sinistra del testo

All'interno del tag `<span class="list-item-title-icon-wrapper">` subito dopo lo `<span class="list-item-title">` contenente il testo, puoi inserire [l'icona necessaria]({{ site.baseurl }}/docs/utilities/icone/).

{% comment %}Example name: Per menu, multilinea con icona{% endcomment %}
{% capture example %}
<div class="link-list-wrapper multiline">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <h4 class="list-item-title">Link lista 1 attivo</h4>
          <svg class="icon icon-primary">
            <title>Codice</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
          </svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li>
      <span class="divider" role="separator"></span>
    </li>
    <li>
      <a class="list-item icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <h4 class="list-item-title">Link lista 2</h4>
          <svg class="icon icon-primary">
            <title>Codice</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
          </svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li>
      <a class="list-item disabled icon-right" href="#" aria-disabled="true">
        <span class="list-item-title-icon-wrapper">
          <h4 class="list-item-title">Link lista 3 disabilitato</h4>
          <svg class="icon icon-primary">
            <title>Codice</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use>
          </svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li>
      <span class="divider"></span> 
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con controlli

Le liste di link con controlli sono caratterizzate da icone a destra e sinistra del testo.  
Quella di destra è descrittiva mentre quella di sinistra può essere un'eventuale azione aggiuntiva da gestire in Javascript.

È necessario aggiungere al tag `<a>` la classe `.icon-right` se si vuole posizionare l'icona a destra del testo, oppure la classe `.icon-left` se si vuole posizionare l'icona a sinistra del testo.

#### Azione primaria

##### Icona a sinistra

All'interno del tag `<span class="list-item-title-icon-wrapper">` subito prima del tag `<span class="list-item-title">` contenente il testo, puoi inserire [l'icona necessaria]({{ site.baseurl }}/docs/utilities/icone/).  
Per posizionare correttamente l'icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-left`.

{% comment %}Example name: Per menu, con controlli e icona a sinistra{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-left" href="#">
        <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary">
            <title>Freccia destra</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
          </svg>
          <span class="list-item-title">Link lista 1 attivo</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-left" href="#">
       <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary">
            <title>Freccia destra</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
          </svg>
          <span class="list-item-title">Link lista 2</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-left disabled" href="#" aria-disabled="true">
       <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary">
            <title>Freccia destra</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
          </svg>
          <span class="list-item-title">Link lista 3 disabilitato</span>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Azione secondaria

##### Icona a destra

All'interno del tag `<span class="list-item-title-icon-wrapper">` subito dopo il tag `<span class="list-item-title">` contenente il testo, puoi inserire [l'icona necessaria]({{ site.baseurl }}/docs/utilities/icone/).  
Per posizionare correttamente l'icona a destra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-right`

{% comment %}Example name: Per menu, con controlli e icona a destra{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1 attivo</span>
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 2</span>
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-right disabled" href="#" aria-disabled="true">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3 disabilitato</span>
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Azioni primaria e secondaria

##### Icona a sinistra

Per aggiungere un'icona a sinistra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-left`.  
Inserisci l'icona all'interno del tag `<span class="list-item-title-icon-wrapper">` subito prima del tag `<span class="list-item-title">` contenente il testo.

##### Icona a destra

Per aggiungere un'icona a destra del testo bisogna aggiungere al tag `<a>` la classe: `.icon-right`.  
Inserisci l'icona all'interno del tag `<span class="list-item-title-icon-wrapper">` subito prima del tag `<span class="list-item-title">` contenente il testo.

{% comment %}Example name: Per menu, con azioni primaria e secondaria, varianti posizione icona{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item active icon-left" href="#">
        <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
          <span class="list-item-title">Link lista 1 attivo</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item icon-left" href="#">
        <span class="list-item-title-icon-wrapper">
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
          <span class="list-item-title">Link lista 2</span>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item disabled icon-right" href="#" aria-disabled="true">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3 disabilitato con icona a destra</span>
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Lista con toggle

Una lista di link può contenere anche elementi appartenenti ai form, di seguito un esempio contenente un [toggle]({{ site.baseurl }}/docs/form/toggles/).

{% comment %}Example name: Lista di link, con toggle{% endcomment %}
{% capture example %}
 <div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <div class="toggles">
        <label for="toggle1">Label per toggle
          <input type="checkbox" id="toggle1"><span class="lever"></span>
        </label>
      </div>
    </li>
    <li>
      <div class="toggles">
        <label for="toggle2">Label per toggle disabilitato
          <input type="checkbox" id="toggle2" disabled aria-disabled="true"><span class="lever"></span>
        </label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### List con checkbox

Lista di link contenente un [checkbox]({{ site.baseurl }}/docs/form/checkbox/).

{% comment %}Example name: Lista di link, con checkbox{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <div class="form-check form-check-group" aria-describedby="">
        <input type="checkbox" id="checkbox6" checked>
        <label for="checkbox6">Checkbox selezionato</label>
      </div>
    </li>
    <li>
      <div class="form-check form-check-group" aria-describedby="">
        <input type="checkbox" id="checkbox7">
        <label for="checkbox7">Checkbox non selezionato</label>
      </div>
    </li>
    <li>
      <div class="form-check form-check-group disabled" aria-disabled="true">
        <input type="checkbox" id="checkbox8" disabled aria-disabled="true">
        <label for="checkbox8">Checkbox disabilitato non selezionato</label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Liste annidate

Le liste di link possono contenere link con sottosezioni espanse o collassabili.

#### Espansa

Di seguito un esempio di navigazione annidata espansa.

{% comment %}Example name: Per menu, annidata espansa{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item large medium icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1</span>
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
        </span>
      </a>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 2</span>
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
        </span>
      </a>
      <ul class="link-sublist" id="">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3</span>
          <svg class="icon icon-primary icon-sm">
            <title>Link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-link"></use>
          </svg>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Collassabile

Di seguito un esempio di navigazione annidata collassabile.  
Per questo tipo di link list sono state utilizzate, oltre alle classi custom, le classi e gli attributi di Bootstrap per l'attivazione del comportamento [collapse]({{ site.baseurl }}/docs/componenti/collapse/).

{% comment %}Example name: Per menu, annidata collassabile{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item large medium icon-right" href="#collapseOne" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 1</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseOne">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#collapseTwo" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 2</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseTwo">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large medium icon-right" href="#collapseThree" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item-title">Link lista 3</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseThree">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

{% include properties.md properties=site.data.cprops.linklist %}

## Breaking change

{% capture callout %}
- Negli esempi di varianti lista con avatar è stata rimossa la classe `.size-lg` dai `<div>` con classe `.avatar`. 
- Nelle liste con immagini sono state aggiunge le classi per controllare la dimensione dell'immagine sui `<div>` con classe `.it-thumb`: `.ratio` e `.ratio-16x9` con istruzioni su come cambiare quest'ultima con le classi specifiche per cambiare le proporzioni.
- Nelle liste con azioni e freccia è definita esplicitamente la dimensione e il colore delle icone freccia aggiungendo le classi `.icon-primary` e `.icon-sm` rispettivamente dove necessario.
{% endcapture %}{% include callout-breaking.html content=callout version="3.0.0" type="danger" %}

{% capture callout %}
Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.8.0" type="danger" %}

{% capture callout %}
Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.link-list-heading` è ora implementato come heading `h` e non semplice `<span>`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.list-item-title` è ora implementato come heading `h` e non semplice `<span>`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
{% endcapture %}{% include callout-breaking.html content=callout version="2.10.0" type="danger" %}

{% capture callout %}
Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.text` è ora implementato come heading `h` e non semplice `<span>`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
{% endcapture %}{% include callout-breaking.html content=callout version="2.11.0" type="danger" %}
