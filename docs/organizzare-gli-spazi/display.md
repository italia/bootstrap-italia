---
layout: docs
title: Display
description: Modifica in modalità responsive la proprietà 'display' degli elementi con le classi apposite. Puoi gestire anche gli elementi per ottimizzare la visualizzazione per la stampa.
group: organizzare-gli-spazi
toc: true
---

## Come funziona

Modifica il valore della [proprietà `display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) con le classi apposite.
Sono presenti solo una parte dei tipi di valori previsti dalla proprietà. Puoi combinare le classi per ottenere l'effetto di cui hai bisogno.

## Responsive

Le classi _display_ che si applicano a tutte le dimensioni dello schermo, da `xs` fino a `xxl`, non hanno bisogno di alcuna
indicazione di breakpoints, per cui ad esempio sarà sufficiente usare `.d-none` per nascondere un elemento ad ogni risoluzione.
In caso contrario, è sufficiente utilizzare i classici breakpoints utilizzando il formato:

- `.d-{value}` per `xs`
- `.d-{breakpoint}-{value}` per `sm`, `md`, `lg`, `xl` e `xxl`.

Dove il _valore_ è uno tra:

- `none`
- `inline`
- `inline-block`
- `block`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

L'utilizzo delle classi `d-` con breakpoint ha effetto su dispositivi dal breakpoint indicato _fino a xxl_.
Per esempio, `.d-lg-none` imposta `display: none;` nella visualizzazione in `lg`, in `xl` ed in `xxl`.

## Esempi

{% comment %}Example name: Inline{% endcomment %}
{% capture example %}
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Block{% endcomment %}
{% capture example %}
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
{% endcapture %}{% include example.html content=example %}

### Elementi nascosti

Utilizza le classi responsive per mostrare e nascondere un elemento a seconda dei vari dispositivi. Evita di creare
versioni completamente diverse dello stesso sito, piuttosto scegli di nascondere l'elemento per dimensioni dello
schermo di non interesse.

Per nascondere elementi puoi usare semplicemente la classe `.d-none` o una delle classi `.d-{sm,md,lg,xl}-none` per
qualsiasi variazione di dimensione dello schermo.

Per mostrare un elemento solo su un dato intervallo di dimensioni dello schermo, puoi combinare una classe `.d-*-none`
con una classe `.d-*-*`. Ad esempio `.d-none .d-md-block .d-xl-none` nasconderà l'elemento per tutti gli schermi tranne
che per i dispositivi di medie e grandi dimensioni (fino alla dimensione `xl`, oltre la quale tornerà ad essere
nascosto).

| Dimensione dello schermo | Classe                           |
| ------------------------ | -------------------------------- |
| Nascosto a tutti         | `.d-none`                        |
| Nascosto solo su xs      | `.d-none .d-sm-block`            |
| Nascosto solo su sm      | `.d-sm-none .d-md-block`         |
| Nascosto solo su md      | `.d-md-none .d-lg-block`         |
| Nascosto solo su lg      | `.d-lg-none .d-xl-block`         |
| Nascosto solo su xl      | `.d-xl-none`                     |
| Nascosto solo su xxl     | `.d-xxl-none`                    |
| Visibile a tutti         | `.d-block`                       |
| Visibile solo su xs      | `.d-block .d-sm-none`            |
| Visibile solo su sm      | `.d-none .d-sm-block .d-md-none` |
| Visibile solo su md      | `.d-none .d-md-block .d-lg-none` |
| Visibile solo su lg      | `.d-none .d-lg-block .d-xl-none` |
| Visibile solo su xl      | `.d-none .d-xl-block`            |
| Visibile solo su xxl     | `.d-none .d-xxl-block`           |


{% comment %}Example name: Responsive{% endcomment %}
{% capture example %}
<div class="d-lg-none">Nascosto su schermi più larghi di lg</div>
<div class="d-none d-lg-block">Nascosto su schermi più piccoli di lg</div>
{% endcapture %}{% include example.html content=example %}

## Visualizzazione di stampa

Modifica il valore `display` degli elementi per la stampa con le classi apposite. Sono presenti gli stessi valori usati per le classi `display`.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

Le classi di stampa e di visualizzazione possono essere combinate insieme:

{% comment %}Example name: Stampa{% endcomment %}
{% capture example %}
<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
<div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
<div class="d-none d-lg-block d-print-block">Nascondi fino al grande schermo, ma mostra sempre sulla stampa</div>
{% endcapture %}{% include example.html content=example %}

## Visibilità

Imposta la `visibility` degli elementi con le nostre utilità di visibilità. Queste non modificano il valore `display`
e sono utili per nascondere i contenuti alla maggior parte degli utenti, ma conservandoli per gli screen reader.

Applica `.visible` oppure `.invisible` al bisogno.

```html
<div class="visible">...</div>
<div class="invisible">...</div>
```

```scss
// Classi
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
```

## Screenreaders

Nascondi un elemento su tutti i dispositivi **eccetto screen readers** con la classe `.visually-hidden`. Utilizza `.visually-hidden-focusable` per mostrare l'elemento quando è attivo in focus (es.: da un utente che utilizza la tastiera). Possono anche essere usati come mixin.

```html
<a class="visually-hidden-focusable" href="#content">Vai al contenuto principale</a>
```

```scss
// Usato come mixin
.skip-navigation {
  @include visually-hidden-focusable;
}
```
