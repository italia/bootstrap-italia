---
layout: docs
title: Torna su
description: Consente agli utenti di scorrere agevolmente verso la parte superiore della pagina 
group: menu-di-navigazione
toc: true
---

Per aggiungere un bottone che si abilita automaticamente allo scorrimento della pagina, e che aiuta l'utente a tornare in alto con un solo click su di esso, è sufficiente usare un link con attributo `data-attribute="back-to-top"` e con una classe `.back-to-top` che lo posiziona nella parte inferiore destra nella pagina.

<style>
  /* Style override for Documentation purposes */
  .back-to-top:not(#example) {
    position: relative;
    bottom: unset;
    right: unset;
    visibility: visible;
    margin: 0 auto;
    opacity: 1;
    transform: scale(1);
  }
</style>

## Esempio

Per visualizzare il Back to top nella posizione corretta è necessario scrollare questa pagina. L'esempio del codice sottostante sarà visibile solo a scroll avvenuto.

{% capture example %}
<a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top" id="example">
  <svg class="icon icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
</a>
{% endcapture %}{% include example.html content=example %}

**Per facilitare la visualizzazione delle varie versioni di Back to top disponibili i seguenti esempi saranno visualizzati in linea.**

{% capture example %}
<a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top">
  <svg class="icon icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
</a>
{% endcapture %}{% include example.html content=example %}

### Versione ridotta
Aggiungendo la classe `.back-to-top-small` al link si ottiene un pulsante di dimensioni ridotte.

{% capture example %}
<a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top back-to-top-small">
  <svg class="icon icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
</a>

{% endcapture %}{% include example.html content=example %}

### Versione con ombra
Aggiungendo la classe `.shadow` al link si aggiunge un'ombra al pulsante.

{% capture example %}
<div class="d-flex align-items-center">
  <a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top shadow">
    <svg class="icon icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
  </a>
  <a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top back-to-top-small shadow">
    <svg class="icon icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}

### Versione per sfondo scuro
Aggiungendo la classe `.dark` al link si ottiente un pulsante utilizzabile su sfondo scuro.

{% capture example %}
<div class="d-flex align-items-center p-4 neutral-1-bg-a8">
  <a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top dark">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
  </a>
  <a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top back-to-top-small dark">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}

#### Ombra su sfondo scuro
Aggiungendo le classi `.dark` e `.shadow` al link si ottiente un pulsante con ombra utilizzabile su sfondo scuro.

{% capture example %}
<div class="d-flex align-items-center p-4 neutral-1-bg-a8">
  <a href="#" aria-hidden="true" data-attribute="back-to-top " class="back-to-top dark shadow">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
  </a>
  <a href="#" aria-hidden="true" data-attribute="back-to-top" class="back-to-top back-to-top-small dark shadow">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}
