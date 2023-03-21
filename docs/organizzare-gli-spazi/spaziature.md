---
layout: docs
title: Spaziatura
description: Una vasta gamma di classi per la gestione di 'padding' e 'margin' anche in ottica responsive.
group: organizzare-gli-spazi
toc: true
---

## Come funziona

Assegna con apposite classi responsive valori di `margin` o di `padding` agli elementi, impostando singole proprietà o coppie di proprietà in base alla direzione (`x` e `y` per orizzontale e verticale).

Le dimensioni delle spaziature possono variare da `4px` per i valori `*-1` a `48px` per i valori `*-5`.

## Note

Le classi applicabili a tutti i breakpoint da `xs` to `xxl` non hanno alcun breakpoint nei loro nome, poiché
sono applicate da `min-width: 0` in su, quindi non sono legate a media query specifiche.

Le classi sono denominate utilizzando il formato `{proprietà}{lato}-{dimensione}` per `xs` e
`{proprietà}{lato}-{breakpoint}-{dimensione}` per `sm`, `md`, `lg`, `xl` e `xxl`.

Dove la _proprietà_ è una tra:

- `m` - per le classi che impostano `margin`
- `p` - per le classi che impostano `padding`

Dove uno dei _lati_ è tra:

- `t` - per le classi che impostano `margin-top` o `padding-top`
- `b` - per le classi che impostano `margin-bottom` o `padding-bottom`
- `s` - per le classi che impostano `margin-left` o `padding-left`
- `e` - per le classi che impostano `margin-right` o `padding-right`
- `x` - per le classi che impostano insieme `*-left` e `*-right`
- `y` - per le classi che impostano insieme `*-top` e `*-bottom`
- blank - per le classi che impostano `margin` o `padding` su tutti e quattro i lati dell'elemento

Dove la _dimensione_ è una tra:

- `0` - per le classi che eliminano `margin` o `padding` impostandolo a `0`
- `1` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * .25`
- `2` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * .5`
- `3` - (di default) per le classi che impostano `margin` o `padding` a `$spacer`
- `4` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * 1.5`
- `5` - (di default) per le classi che impostano `margin` o `padding` a `$spacer * 3`
- `auto` - per le classi che impostano `margin` ad auto

(Puoi aggiungere dimensioni inserendo nuovi `$spacers` nella mappa variabili di Sass.)

## Esempi

Ecco alcuni esempi di utilizzo delle classi di spaziatura:

```scss
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * 0.25) !important;
}

.px-2 {
  padding-left: ($spacer * 0.5) !important;
  padding-right: ($spacer * 0.5) !important;
}

.p-3 {
  padding: $spacer !important;
}
```

### Centratura orizzontale

Per centrare orizzontalmente un elemento con una larghezza fissa e `display: block` puoi utilizzare la classe `.mx-auto` che imposta i margini laterali ad `auto`.

{% comment %}Example name: Centratura orizzontale{% endcomment %}
{% capture example %}
  <div class="mx-auto border bg-dark text-white text-center" style="width: 200px;">
    Elemento centrato
  </div>
{% endcapture %}{% include example.html content=example %}