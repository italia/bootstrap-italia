---
layout: docs
title: Torna indietro
description: Consente agli utenti di avere un link o bottone con un'azione equivalente al "torna indietro" del browser
group: menu-di-navigazione
toc: true
---

Aggiungendo la classe `.go-back` a qualsiasi link o bottone è possibile ottenere lo stesso comportamento del tasto "Indietro" del browser: retrocedere di un passo nella cronologia di navigazione.

## Link

Quando si utilizza un link (tag `<a>`) è necessario aggiungere un valore all'attributo href perché il link sia correttamente navigabile via tastiera.

{% capture example %}
<a href="#" class="go-back"><svg class="icon icon-sm icon-primary mr-2"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-left"></use></svg> Torna indietro</a>
{% endcapture %}{% include example.html content=example %}

## Bottoni

Nel caso dell'utilizzo di un bottone l'accorgimento sopraindicato non è necessario.

{% capture example %}
<button type="button" class="btn btn-primary go-back"><svg class="icon icon-sm icon-white mr-2"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-left"></use></svg> Torna indietro</button>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<button type="button" class="btn btn-primary go-back"><svg class="icon icon-sm icon-white mr-2"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg> Livello superiore</button>
{% endcapture %}{% include example.html content=example %}

### Bottoni con sola icona

E' possibile creare bottoni senza testo dotati di sola icona avendo cura di includere il testo alternativo per gli screen reader in un tag `<span>` con classe `.sr-only`.

{% capture example %}
<button type="button" class="btn btn-primary go-back"><svg class="icon icon-sm icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-left"></use></svg><span class="sr-only">Torna indietro</span></button>
<button type="button" class="btn btn-primary go-back"><svg class="icon icon-sm icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-up"></use></svg><span class="sr-only">Livello superiore</span></button>
{% endcapture %}{% include example.html content=example %}
