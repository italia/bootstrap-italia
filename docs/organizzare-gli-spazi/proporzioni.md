---
layout: docs
group: organizzare-gli-spazi
toc: true
title: Proporzioni
description: Obbligano un elemento a mantenere la proporzione scelta. Soluzione ideale per includere video o slideshow responsive basati sulla larghezza dell'elemento parent.
---

<style>
  /* Style override for Documentation purposes - Proporzioni*/
  .ratio-example {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    width: 10rem;
    color: #6c757d;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
  }
  .ratio-example div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .ratio-example-breakpoint {
      --bs-aspect-ratio: 50%;
    }
  }

}
</style>

Utilizza queste classi helper per gestire le proporzioni di contenuti esterni come `<iframe>`, `<embed>`, `<video>` e `<object>`. Queste classi possono inoltre essere utilizzate per ridimensionare qualsiasi elemento HTML standard come `<div>` o `<img>`. Gli stili vengono applicati dall'elemento contenitore `.ratio` all'elemento contenuto.

Le proporzioni predefinite sono dichiarate in un amappa Sass ed incluse in ogni classe con una variabile CSS, la quale permette di generare [proporzioni custom](#proporzioni-custom).

{% capture callout %}

##### Nota

Le seguenti classi utilizzate negli esempi servono unicamente per gli stessi e vanno ignorate:

- `ratio-example`
- `ratio-example-breakpoint`

{% endcapture %}{% include callout.html content=callout type="warning" %}

**Pro-Tip!** Non hai bisogno di includere l'attributo `frameborder="0"` nei tuoi `<iframe>`, questo viene automaticamente
sovrascritto.

## Esempio

Estendi ogni oggetto, ad esempio un `<iframe>`, aggiungendo al suo contenitore la classe `.ratio` e le proporzioni
richieste. L'elemento contenuto viene automaticamente ridimensionato grazie al selettore universale `ratio > *`.

{% comment %}Example name: Esempio proporzione 16x9{% endcomment %}
{% capture example %}
<div class="ratio ratio-16x9">
  <iframe title="Video YouTube" src="https://www.youtube-nocookie.com/embed/RaHmGbBOP84" allowfullscreen></iframe>
</div>
{% endcapture %}{% include example.html content=example %}

## Proporzioni predefinite

Le proporzioni possono essere personalizzate con delle classi apposite.  
Vengono fornite le seguenti proporzioni pre-impostate:

{% comment %}Example name: Varianti di proporzioni{% endcomment %}
{% capture example %}
<div class="ratio ratio-1x1 ratio-example">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3 ratio-example">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9 ratio-example">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9 ratio-example">
  <div>21x9</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Proporzioni custom

Ogni classe `.ratio-*` include una variabile CSS nel selettore. Puoi fare un override di questa variabile per creare una proporzione custom _al volo_ facendo un rapido calcolo.

Ad esempio, per creare una proporzione custom 2x1, utilizza il valore `--bs-aspect-ratio: 50%` sull'elemento `.ratio`.

{% comment %}Example name: Proporzione personalizzata{% endcomment %}
{% capture example %}
<div class="ratio ratio-example" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>
{% endcapture %}{% include example.html content=example %}

Questa variabile CSS rende semplice modificare la proporzione a seconda del breakpoint. Il seguente esempio è un 4x3 inizialmente ma cambia a 2x1 al breakpoint `md`.

```scss
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}
```

{% comment %}Example name: Proporzione personalizzata responsive{% endcomment %}
{% capture example %}
<div class="ratio ratio-4x3 ratio-example ratio-example-breakpoint">
  <div>4x3, poi 2x1</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Sass map

All'interno del file `src\scss\_variables.scss` è possibile modificare e aggiungere proporzioni predefinite. Questa è la mappa utilizzata di default. Modifica la mappa a piacimento e ricompila il CSS per utilizzarla.

```scss
$aspect-ratios: (
  '1x1': 100%,
  '4x3': calc(3 / 4 * 100%),
  '16x9': calc(9 / 16 * 100%),
  '21x9': calc(9 / 21 * 100%),
);
```
