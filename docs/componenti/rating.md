---
layout: docs
title: Rating
description: Una scala di valori grafica a stelline, utile per esprimere una valutazione su un servizio o un contenuto.
group: componenti
toc: true
---

## Esempio

Il Rating è composto da un `<fieldset>` con classe `.rating` contenente 5 `<input type="radio">` con valori da 1 a 5.

Le `<label>` contengono la descrizione per Screen Reader. L'icona della stella è generata via CSS.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<fieldset class="rating">
  <legend>Rating</legend>
  <input type="radio" id="star1a" name="ratingA" value="1" />
  <label class = "full" for="star1a">
    <span class="visually-hidden">Valuta 1 stella su 5</span>
  </label>
  <input type="radio" id="star2a" name="ratingA" value="2" />
  <label class = "full" for="star2a">
    <span class="visually-hidden">Valuta 2 stelle su 5</span>
  </label>
  <input type="radio" id="star3a" name="ratingA" value="3" />
  <label class = "full" for="star3a">
    <span class="visually-hidden">Valuta 3 stelle su 5</span>
  </label>
  <input type="radio" id="star4a" name="ratingA" value="4" />
  <label class = "full" for="star4a">
    <span class="visually-hidden">Valuta 4 stelle su 5</span>
  </label>
  <input type="radio" id="star5a" name="ratingA" value="5" />
  <label class = "full" for="star5a">
    <span class="visually-hidden">Valuta 5 stelle su 5</span>
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
  <input type="radio" id="star1b" name="ratingB" value="1" />
  <label class = "full" for="star1b">
    <span class="visually-hidden">Valuta 1 stella su 5</span>
  </label>
  <input type="radio" id="star2b" name="ratingB" value="2" />
  <label class = "full" for="star2b">
    <span class="visually-hidden">Valuta 2 stelle su 5</span>
  </label>
  <input type="radio" id="star3b" name="ratingB" value="3" />
  <label class = "full" for="star3b">
    <span class="visually-hidden">Valuta 3 stelle su 5</span>
  </label>
  <input type="radio" id="star4b" name="ratingB" value="4" checked/>
  <label class = "full" for="star4b">
    <span class="visually-hidden">Valuta 4 stelle su 5</span>
  </label>
  <input type="radio" id="star5b" name="ratingB" value="5" />
  <label class = "full" for="star5b">
    <span class="visually-hidden">Valuta 5 stelle su 5</span>
  </label>
</fieldset>

{% endcapture %}{% include example.html content=example %}

### Sola lettura

Aggiungendo la classe `.rating-read-only` al `<fieldset>` si ottiene un Rating non modificabile di sola lettura.

Si consiglia di utilizzare l'attributo `disabled` sugli input radio.

{% capture callout %}

#### Accessibilità versione sola lettura

Per rendere accessibile il contenuto è necessario aggiungere un tag `<legend>` con classe `.visually-hidden` e nascondere sia gli `<input>` sia le `<label>` utilizzando `aria-hidden="true"` su entrambi — altrimenti gli screen reader continuano ad annunciare ogni singola stella oltre all'annuncio aggregato della legend.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Sola lettura{% endcomment %}
{% capture example %}
<fieldset class="rating rating-read-only">
  <legend class="visually-hidden">Valutazione 4 stelle su 5</legend>
  <input type="radio" id="star1c" name="ratingC" value="1" aria-hidden="true" disabled />
  <label class = "full" for="star1c" aria-hidden="true">
    <span class="visually-hidden">Valuta 1 stella su 5</span>
  </label>
  <input type="radio" id="star2c" name="ratingC" value="2" aria-hidden="true" disabled />
  <label class = "full" for="star2c" aria-hidden="true">
    <span class="visually-hidden">Valuta 2 stelle su 5</span>
  </label>
  <input type="radio" id="star3c" name="ratingC" value="3" aria-hidden="true" disabled />
  <label class = "full" for="star3c" aria-hidden="true">
    <span class="visually-hidden">Valuta 3 stelle su 5</span>
  </label>
  <input type="radio" id="star4c" name="ratingC" value="4" checked aria-hidden="true" disabled />
  <label class = "full" for="star4c" aria-hidden="true">
    <span class="visually-hidden">Valuta 4 stelle su 5</span>
  </label>
  <input type="radio" id="star5c" name="ratingC" value="5" aria-hidden="true" disabled />
  <label class = "full" for="star5c" aria-hidden="true">
    <span class="visually-hidden">Valuta 5 stelle su 5</span>
  </label>
</fieldset>
{% endcapture %}{% include example.html content=example %}

{% include properties.md properties=site.data.cprops.rating selector=".rating" %}

## Breaking change

{% capture callout %}
- Le stelle non selezionate ora hanno una forma a contorno (outline), non più una stella piena semplicemente più chiara: la distinzione tra stelle attive/inattive non si basa più solo sul colore.
- Il colore di default a riposo è cambiato: prima `--bsi-color-background-secondary-light`, ora `--bsi-icon-secondary`.
- L'ordine delle stelle nel markup è ora da 1 a 5 (era da 5 a 1): la navigazione da tastiera segue ora l'ordine visivo da sinistra a destra.
- L'icona non è più un `<svg><use>` dentro la `<label>`: è generata via CSS (`mask-image`), pilotata dalla custom property `--bsi-rating-icon-fill`. Chi personalizzava lo stile (incluso il focus ring) puntando all'`<svg>` interno deve aggiornare il selettore.
- Il gruppo non è più allineato a destra di default nel contenitore: seguiva `justify-content: flex-end` come effetto collaterale del vecchio ordinamento inverso, ora segue il flusso naturale a sinistra.
- Nella variante sola lettura, `aria-hidden="true"` va aggiunto anche sulle `<label>`, non solo sugli `<input>`.
{% endcapture %}{% include callout-breaking.html content=callout version="3.0.0" type="danger" %}

{% capture callout %}
- Aggiunto attributo `aria-hidden="true"` sulle icone perché lo scopo è già trasmesso agli strumenti assistivi dal testo con classe `.visually-hidden`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.12.0" type="danger" %}