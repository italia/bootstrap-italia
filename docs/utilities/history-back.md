---
layout: docs
title: History Back
description: Per attribuire ad un link o bottone l'azione equivalente al "torna indietro" del browser.
group: utilities
toc: true
---

Aggiungendo la classe `.go-back` a qualsiasi link o bottone è possibile ottenere lo stesso comportamento del tasto "Indietro" del browser: retrocedere di un passo nella cronologia di navigazione.

## Link

Quando si utilizza un link (tag `<a>`) è necessario aggiungere un valore all'attributo href perché il link sia correttamente navigabile via tastiera.

{% capture example %}
<a href="#" class="go-back"><i class="it-arrow-left"></i> Torna indietro</a>
{% endcapture %}{% include example.html content=example %}

## Bottoni

Nel caso dell'utilizzo di un bottone l'accorgimento sopraindicato non è necessario.

{% capture example %}
<button type="button" class="btn btn-primary go-back"><i class="it-arrow-left"></i> Torna indietro</button>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<button type="button" class="btn btn-primary go-back"><i class="it-arrow-up"></i> Livello superiore</button>
{% endcapture %}{% include example.html content=example %}

### Bottoni con sola icona

E' possibile creare bottoni senza testo dotati di sola icona avendo cura di includere il testo alternativo per gli screen reader in un tag `<span>` con classe `.sr-only`.

{% capture example %}
<button type="button" class="btn btn-primary go-back"><i class="it-arrow-left"></i><span class="sr-only">Torna indietro</span></button>
<button type="button" class="btn btn-primary go-back"><i class="it-arrow-up"></i><span class="sr-only">Livello superiore</span></button>
{% endcapture %}{% include example.html content=example %}