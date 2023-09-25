---
layout: docs
title: Badge
description: Documentazione ed esempi del componente badge, utile per piccoli contatori ed etichette.
group: componenti
toc: true
---

La grandezza di ogni badge si adatta come dimensione a quella del font (misurato in unità `em`) dell'elemento in cui è contenuto.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="h1">Titolo di esempio h1<span class="badge bg-secondary">New</span></div>
<div class="h2">Titolo di esempio h2<span class="badge bg-secondary">New</span></div>
<div class="h3">Titolo di esempio h3<span class="badge bg-secondary">New</span></div>
<div class="h4">Titolo di esempio h4<span class="badge bg-secondary">New</span></div>
<div class="h5">Titolo di esempio h5<span class="badge bg-secondary">New</span></div>
<div class="h6">Titolo di esempio h6<span class="badge bg-secondary">New</span></div>
{% endcapture %}{% include example.html content=example %}

I badge possono essere utilizzati come parte di link o pulsanti per fornire un contatore.

{% comment %}Example name: In pulsante{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary">
Notifiche <span class="badge bg-white text-secondary">4</span>
</button>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

#### Accessibilità

A seconda di come i badge vengono utilizzati, questi potrebbero confondere gli utenti che usano lo screen reader e tecnologie assistive simili. Mentre lo stile dei badge fornisce un indizio visivo sul loro scopo, a questi utenti saranno semplicemente presentati come semplice contenuto. A seconda della situazione specifica, questi badge possono sembrare parole o numeri aggiuntivi casuali alla fine di una frase, un collegamento o un pulsante.

A meno che il contesto non sia chiaro (come con l'esempio "Notifiche", dove si capisce che il "4" è il numero di notifiche), considera l'eventualità di includere un testo aggiuntivo nascosto.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: In pulsante, per screen reader{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary">
Profilo <span class="badge bg-white text-primary">9</span>
<span class="visually-hidden">Messaggi non letti</span>
</button>
{% endcapture %}{% include example.html content=example %}

## Variazioni contestuali

Aggiungi una delle seguenti classi per modificare l'aspetto di un badge.

{% comment %}Example name: Varianti di colore{% endcomment %}
{% capture example %}
{% for color in site.data.theme-colors %}
<span class="badge bg-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

## Badges arrotondati

Per rendere i badge arrotondati puoi usare la classe `.rounded-pill`.

{% comment %}Example name: Arrotondati{% endcomment %}
{% capture example %}
{% for color in site.data.theme-colors %}
<span class="badge rounded-pill bg-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}{% include example.html content=example %}

## Link

Se hai bisogno che un badge sia anche un link, aggiungi una delle classi contestuali `.badge-*` sull'elemento `<a>`. Di conseguenza anche gli stati **hover** e **focus** saranno attivi sul badge.

{% comment %}Example name: Link{% endcomment %}
{% capture example %}
{% for color in site.data.theme-colors %}
<a href="#" class="badge bg-{{ color.name }}">{{ color.name | capitalize }}</a>{% endfor %}
{% endcapture %}{% include example.html content=example %}
