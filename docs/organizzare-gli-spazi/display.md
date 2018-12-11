---
layout: docs
title: Display
description: Modifica in modalità responsive la proprietà 'display' degli elementi con le classi apposite. Puoi gestire anche gli elementi per ottimizzare la visualizzazione per la stampa.
group: organizzare-gli-spazi
toc: true
---

## Come funziona

Modifica il valore della [proprietà `display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) con le classi apposite.
Sono presenti solo una parte di tutti i tipi di valori sopportati dalla proprietà. Puoi combinare le classi per ottenere l'effetto di cui hai bisogno.

## Responsive

Le classi _display_ che si applicano a tutte le dimensioni dello schermo, da `xs` fino a `xl`, non hanno bisogno di alcuna
indicazione di breakpoints, per cui ad esempio sarà sufficiente usare `.d-none` per nascondere un elemento ad ogni risoluzione.
In caso contrario, è sufficiente utilizzare i classici breakpoints utilizzando il formato:

* `.d-{value}` per `xs`
* `.d-{breakpoint}-{value}` per `sm`, `md`, `lg`, e `xl`.

Dove il *valore* è uno tra:

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

L'utilizzo delle classi `d-` con breakpoint ha effetto su dispositivi dal breakpoint indicato *fino a xl*.
Per esempio, `.d-lg-none` imposta `display: none;` sia nella visualizzazione in `lg` che in `xl`.

## Esempi

{% capture example %}
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
{% endcapture %}{% include example.html content=example %}

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

| Dimensione dello schermo        | Classe |
| ---                | --- |
| Nascosto a tutti      | `.d-none` |
| Nascosto solo su xs  | `.d-none .d-sm-block` |
| Nascosto solo su sm  | `.d-sm-none .d-md-block` |
| Nascosto solo su md  | `.d-md-none .d-lg-block` |
| Nascosto solo su lg  | `.d-lg-none .d-xl-block` |
| Nascosto solo su xl  | `.d-xl-none` |
| Visibile a tutti     | `.d-block` |
| Visibile solo su xs | `.d-block .d-sm-none` |
| Visibile solo su sm | `.d-none .d-sm-block .d-md-none` |
| Visibile solo su md | `.d-none .d-md-block .d-lg-none` |
| Visibile solo su lg | `.d-none .d-lg-block .d-xl-none` |
| Visibile solo su xl | `.d-none .d-xl-block` |

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

{% capture example %}
<div class="d-print-none">Solo schermo (Nascondi solo su stampa)</div>
<div class="d-none d-print-block">Solo stampa (Nascondi solo sullo schermo)</div>
<div class="d-none d-lg-block d-print-block">Nascondi fino al grande schermo, ma mostra sempre sulla stampa</div>
{% endcapture %}{% include example.html content=example %}

## Visibilità

Imposta la `visibility` degli elementi con le nostre utilità di visibilità. Queste non modificano il valore `display`
e sono utili per nascondere i contenuti alla maggior parte degli utenti, ma conservandoli per gli screen reader.

Applica `.visible` oppure `.invisible` al bisogno.

{% highlight html %}
<div class="visible">...</div>
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
{% endhighlight %}

## Screenreaders

Nascondi un elemento su tutti i dispositivi **eccetto screen readers** con la classe `.sr-only`. Combina `.sr-only` con `.sr-only-focusable` per mostrare l'elemento quando è attivo in focus (es.: da un utente che utilizza la tastiera). Possono anche essere usati come mixin.

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Vai al contenuto principale</a>
{% endhighlight %}

{% highlight scss %}
// Usato come mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}
