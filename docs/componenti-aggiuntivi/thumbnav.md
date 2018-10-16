---
layout: docs
title: Thumbnav
description: Lorem ipsum dolor sit amet
group: componenti-aggiuntivi
toc: true
---

<style>
  /* Style override for Documentation purposes */
  .test-gallery {
    max-width: 960px;
  }
  .test-image {
    width: 100%;
    height: auto;
  }
</style>

Lorem ipsum dolor sit amet.

{% capture example %}
<ul class="thumb-nav">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Versione small

Applicando la classe `.thumb-nav-small` al contenitore `.thumb-nav` si otterranno thumbnail di dimensione ridotta.

{% capture example %}
<ul class="thumb-nav thumb-nav-small">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Stati hover

Applicando delle classi predefinite al contenitore `.thumb-nav` è possibile customizzare l'effetto di hover.

### Hover senza zoom

Utilizzare la classe `.thumb-nav-nozoom` per disabilitare l'effetto di zoom sull'immagine.

{% capture example %}
<ul class="thumb-nav thumb-nav-nozoom">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Hover con layer nero

Utilizzare la classe `.thumb-nav-black` per ottenere un effetto di overlay nero trasparente sull'immagine.

{% capture example %}
<ul class="thumb-nav thumb-nav-black">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Hover con layer colorato

Utilizzare la classe `.thumb-nav-black` per ottenere un effetto di overlay colorato sull'immagine.

{% capture example %}
<ul class="thumb-nav thumb-nav-color">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Thumbnav verticale

Applicando la classe `.thumb-nav-vertical` al contenitore `.thumb-nav` la navigazione sarà sviluppata in verticale.

{% capture example %}
<ul class="thumb-nav thumb-nav-vertical">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Posizionato in overlay

La Thumbnav può essere inserita in overlay all'interno di un contenitore come ad esempio una galleria immagini.
Il contenitore dovrà utilizzare la classe di Bootstrap `.position-relative` per posizionare correttamente la Thumbnav al proprio interno.
Alla Thumbnav dovrà essere applicata una classe a scelta fra:
- `.thumb-nav-bottom` per posizonarla nella parte inferiore
- `.thumb-nav-top` per posizonarla nella parte superiore
- `.thumb-nav-left` per posizonare una thumbnav vertical nella parte sinistra
- `.thumb-nav-right` per posizonare una thumbnav vertical nella parte destra

### Overlay orizzontale inferiore

{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/1280/720?image=1056" class="test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-small thumb-nav-bottom">
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay orizzontale top

{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/1280/720?image=1056" class="test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-small thumb-nav-top">
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay verticale a sinistra

{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/1280/720?image=1056" class="test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-vertical thumb-nav-small thumb-nav-left">
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay verticale a destra

{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/1280/720?image=1056" class="test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-vertical thumb-nav-small thumb-nav-right">
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#" class="active"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
        <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Griglia a larghezza fissa

Applicando la classe `.thumb-nav-fixed` al Thumbnav le thumbnail avranno una larghezza fissa di 240px oppure di 120px se è stata utilizzata anche la classe `.thumb-nav-small`.

{% capture example %}
<ul class="thumb-nav thumb-nav-fixed">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1057" alt="Visualizza immagine 4"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/240/160?image=1037" alt="Visualizza immagine 5"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

Lore ipsum dolor sit amet

## Griglia a larghezza automatica

Applicando la classe `.thumb-nav-auto` al Thumbnav le thumbnail occuperanno automaticamente l'intera larghezza del contenitore.
E' necessario indicare il numero degli elementi presenti su ogni riga con una delle seguenti classi aggiuntive:
- `.thumb-nav-auto-2` per ottenere 2 thumb per riga
- `.thumb-nav-auto-3` per ottenere 3 thumb per riga
- `.thumb-nav-auto-4` per ottenere 4 thumb per riga
- `.thumb-nav-auto-5` per ottenere 5 thumb per riga

### Esempio: 3 thumbnail per riga 

{% capture example %}
<ul class="thumb-nav thumb-nav-auto thumb-nav-auto-3">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1044" alt="Visualizza immagine 3"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1057" alt="Visualizza immagine 4"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1037" alt="Visualizza immagine 5"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Esempio: 5 thumbnail per riga 

{% capture example %}
<ul class="thumb-nav thumb-nav-auto thumb-nav-auto-5">
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1044" alt="Visualizza immagine 3"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1057" alt="Visualizza immagine 4"></a>
    </li>
    <li>
      <img src="/dist/assets/resizer-3x2.svg" class="thumb-nav-resizer" aria-hidden="true"/>
      <a href="#"><img src="https://picsum.photos/480/320?image=1037" alt="Visualizza immagine 5"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}