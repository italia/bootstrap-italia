---
layout: docs
title: Thumbnav
description: Componente di navigazione con immagini thumbnail.
group: menu-di-navigazione
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

Il componente Thumbnav consiste in una lista `<ul>` con classe `.thumb-nav` contenente tanti elementi `<li>` quante sono i link/thumbnail richiesti.

Ogni elemento `<li>` deve contenere un [resizer proporzionale]({{ site.baseurl }}/docs/organizzare-gli-spazi/proporzioni/) come da esempio per mantenere le corrette proporzioni di 3:2 a prescindere dalle dimensioni dell'immagine utilizzata per la thumbnail.

Per indicare il link/thumbail attivo applicare la classe `.active` al relativo tag `<a>`.

{% capture callout %}

#### Accessibilità

Per ragioni di accessibilità è importante indicare all'interno dell'attributo `alt=""` dell'immagine thumbnail l'azione associata al link relativo.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<ul class="thumb-nav">
    <li>
      <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Versione small

Applicando la classe `.thumb-nav-small` al contenitore `.thumb-nav` si otterranno thumbnail di dimensione ridotta.

{% comment %}Example name: Variante compatta{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-small">
    <li>
      <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Stati hover

Applicando delle classi predefinite al contenitore `.thumb-nav` è possibile customizzare l'effetto di hover.

### Hover senza zoom

Utilizzare la classe `.thumb-nav-nozoom` per disabilitare l'effetto di zoom sull'immagine.

{% comment %}Example name: Con hover senza ingrandimento{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-nozoom">
    <li>
      <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Hover con layer nero

Utilizzare la classe `.thumb-nav-black` per ottenere un effetto di overlay nero trasparente sull'immagine.

{% comment %}Example name: Con hover con livello nero{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-black">
    <li>
      <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Hover con layer primary

Utilizzare la classe `.thumb-nav-primary` per ottenere un effetto di overlay di colore primary sull'immagine.

{% comment %}Example name: Con hover con livello primary{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-primary">
    <li>
      <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Thumbnav verticale

Applicando la classe `.thumb-nav-vertical` al contenitore `.thumb-nav` si ottiene una versione verticale della Thumbnav.

{% comment %}Example name: Verticale{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-vertical">
    <li>
      <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Posizione in overlay

La Thumbnav può essere inserita in overlay all'interno di un contenitore come ad esempio una galleria immagini.
Il contenitore dovrà utilizzare la classe di Bootstrap `.position-relative` per posizionare correttamente la Thumbnav al proprio interno.
Alla Thumbnav dovrà essere applicata una classe a scelta fra:

- `.thumb-nav-bottom` per posizonarla nella parte inferiore
- `.thumb-nav-top` per posizonarla nella parte superiore
- `.thumb-nav-left` per posizonare una thumbnav vertical nella parte sinistra
- `.thumb-nav-right` per posizonare una thumbnav vertical nella parte destra

### Overlay orizzontale inferiore

{% comment %}Example name: Overlay orizzontale in basso{% endcomment %}
{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/1280/720?image=1056" class="test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-small thumb-nav-bottom">
      <li>
        <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay orizzontale top

{% comment %}Example name: Overlay orizzontale in alto{% endcomment %}
{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/1280/720?image=1056" class="test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-small thumb-nav-top">
      <li>
        <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay verticale a sinistra

{% comment %}Example name: Overlay verticale a sinistra{% endcomment %}
{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/720/720?image=1056" class="d-md-none test-image" alt="Descrizione immagine"/>
  <img src="https://picsum.photos/1280/720?image=1056" class="d-none d-md-block test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-vertical thumb-nav-small thumb-nav-left">
      <li>
        <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay verticale a destra

{% comment %}Example name: Overlay verticale a destra{% endcomment %}
{% capture example %}
<div class="test-gallery position-relative">
  <img src="https://picsum.photos/720/720?image=1056" class="d-md-none test-image" alt="Descrizione immagine"/>
  <img src="https://picsum.photos/1280/720?image=1056" class="d-none d-md-block test-image" alt="Descrizione immagine"/>
  <ul class="thumb-nav thumb-nav-vertical thumb-nav-small thumb-nav-right">
      <li>
        <a href="#" class="active ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
      </li>
      <li>
        <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
      </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Griglia a larghezza fissa

Applicando la classe `.thumb-nav-fixed` alla Thumbnav le thumbnail avranno una larghezza fissa di 240px oppure di 120px se è stata utilizzata anche la classe `.thumb-nav-small`.

{% comment %}Example name: Griglia a larghezza fissa{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-fixed">
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1057" alt="Visualizza immagine 4"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1037" alt="Visualizza immagine 5"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Griglia a larghezza automatica

Applicando la classe `.thumb-nav-auto` alla Thumbnav le thumbnail occuperanno automaticamente l'intera larghezza del contenitore.
È necessario indicare il numero degli elementi presenti su ogni riga con una delle seguenti classi aggiuntive:

- `.thumb-nav-auto-2` per ottenere 2 thumb per riga
- `.thumb-nav-auto-3` per ottenere 3 thumb per riga
- `.thumb-nav-auto-4` per ottenere 4 thumb per riga
- `.thumb-nav-auto-5` per ottenere 5 thumb per riga

### Esempio: 3 thumbnail per riga

{% comment %}Example name: Griglia a larghezza automatica, eg. 1{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-auto thumb-nav-auto-3">
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/390/260?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/390/260?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/390/260?image=1044" alt="Visualizza immagine 3"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/390/260?image=1057" alt="Visualizza immagine 4"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/390/260?image=1037" alt="Visualizza immagine 5"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Esempio: 5 thumbnail per riga

{% comment %}Example name: Griglia a larghezza automatica, eg. 2{% endcomment %}
{% capture example %}
<ul class="thumb-nav thumb-nav-auto thumb-nav-auto-5">
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1056" alt="Visualizza immagine 1"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1050" alt="Visualizza immagine 2"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1044" alt="Visualizza immagine 3"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1057" alt="Visualizza immagine 4"></a>
    </li>
    <li>
      <a href="#" class="ratio ratio-3x2"><img src="https://picsum.photos/240/160?image=1037" alt="Visualizza immagine 5"></a>
    </li>
</ul>
{% endcapture %}{% include example.html content=example %}
