---
layout: docs
title: Rating
description: Una scala di valori grafica a stelline, utile per esprimere una valutazione su un servizio o un contenuto.
group: componenti
toc: true
---

## Esempio

Il Rating è composto da un `<fieldset>` con classe `.rating` contenente 5 `<input type="radio">` con valori da 1 a 5.

Le `<label>` contengono le icone delle stelle e la descrizione per Screen Reader.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<fieldset class="rating">
  <legend>Rating</legend>
  <input type="radio" id="star5a" name="ratingA" value="5" />
  <label class = "full" for="star5a">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 5 stelle su 5</span>
  </label>
  <input type="radio" id="star4a" name="ratingA" value="4"/>
  <label class = "full" for="star4a">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 4 stelle su 5</span>
  </label>
  <input type="radio" id="star3a" name="ratingA" value="3" />
  <label class = "full" for="star3a">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 3 stelle su 5</span>
  </label>
  <input type="radio" id="star2a" name="ratingA" value="2" />
  <label class = "full" for="star2a">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 2 stelle su 5</span>
  </label>
  <input type="radio" id="star1a" name="ratingA" value="1" />
  <label class = "full" for="star1a">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 1 stelle su 5</span>
  </label>
</fieldset>
{% endcapture %}{% include example.html content=example %}

### Con Label

Per visualizzare una label descrittiva aggiungere la classe `.rating-label` al `<fieldset>` e un tag `<legend>` all'inizio dello stesso.

{% capture callout %}

#### Accessibilità

Il tag `<legend>` contiene testo aggiuntivo per Screen Reader all'interno di uno `<span class="visually-hidden">`.

La label con il numero di stelle dev'essere contenuta in uno `<span>` semplice.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con etichetta{% endcomment %}
{% capture example %}
<fieldset class="rating rating-label">
  <legend><span class="visually-hidden">Valutazione</span> <span>4 stelle</span> <span class="visually-hidden">su 5</span></legend>
  <input type="radio" id="star5b" name="ratingB" value="5" />
  <label class = "full" for="star5b">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 5 stelle su 5</span>
  </label>
  <input type="radio" id="star4b" name="ratingB" value="4" checked/>
  <label class = "full" for="star4b">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 4 stelle su 5</span>
  </label>
  <input type="radio" id="star3b" name="ratingB" value="3" />
  <label class = "full" for="star3b">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 3 stelle su 5</span>
  </label>
  <input type="radio" id="star2b" name="ratingB" value="2" />
  <label class = "full" for="star2b">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 2 stelle su 5</span>
  </label>
  <input type="radio" id="star1b" name="ratingB" value="1" />
  <label class = "full" for="star1b">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 1 stelle su 5</span>
  </label>
</fieldset>

{% endcapture %}{% include example.html content=example %}

### Sola lettura

Aggiungendo la classe `.rating-read-only` al `<fieldset>` si ottiene un Rating non modificabile di sola lettura.

Si consiglia di utilizzare l'attributo `disabled` sugli input radio.

{% capture callout %}

#### Accessibilità versione sola lettura

Per rendere accessibile il contenuto è necessario aggiungere un tag `<legend>` con classe `.visually-hidden` e nascondere gli input radio utilizzando `aria-hidden="true"`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Sola lettura{% endcomment %}
{% capture example %}
<fieldset class="rating rating-read-only">
  <legend class="visually-hidden">Valutazione 4 stelle su 5</legend>
  <input type="radio" id="star5c" name="ratingC" value="5" aria-hidden="true" disabled />
  <label class = "full" for="star5c">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 5 stelle su 5</span>
  </label>
  <input type="radio" id="star4c" name="ratingC" value="4" checked aria-hidden="true" disabled />
  <label class = "full" for="star4c">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 4 stelle su 5</span>
  </label>
  <input type="radio" id="star3c" name="ratingC" value="3" aria-hidden="true" disabled />
  <label class = "full" for="star3c">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 3 stelle su 5</span>
  </label>
  <input type="radio" id="star2c" name="ratingC" value="2" aria-hidden="true" disabled />
  <label class = "full" for="star2c">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 2 stelle su 5</span>
  </label>
  <input type="radio" id="star1c" name="ratingC" value="1" aria-hidden="true" disabled />
  <label class = "full" for="star1c">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
    <span class="visually-hidden">Valuta 1 stelle su 5</span>
  </label>
</fieldset>
{% endcapture %}{% include example.html content=example %}
