---
layout: docs
title: Flex
description: Gestisci il layout, l'allineamento e la dimensione delle colonne della griglia, della navigazione, dei componenti e altro ancora con le utility responsive dedicate alla flexbox. Per implementazioni più complesse, potrebbe essere necessario personalizzare il CSS.
group: organizzare-gli-spazi
toc: true
---

{% capture callout %}
**Se sei poco pratico di flexbox**, puoi iniziare da [questa pratica guida su flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)
(in inglese) per informazioni di carattere generale, terminologia, linee guida, e frammenti di codice, oppure giocando con
[questo simpatico tutorial](http://flexboxfroggy.com/#it).
{% endcapture %}{% include callout.html content=callout type="info" %}

## Abilita il comportamento flex

Applica le regole [`display`]({{ site.baseurl }}/docs/organizzare-gli-spazi/display/) per creare un contenitore flexbox e trasformare **i suoi figli** in elementi flex. Il contenitore flex e i suoi elementi potranno essere personalizzati con le ulteriori proprietà flex.

{% comment %}Example name: Flexbox{% endcomment %}
{% capture example %}
<div class="d-flex p-2 bd-highlight">Io sono un contenitore flexbox!</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Inline flexbox{% endcomment %}
{% capture example %}
<div class="d-inline-flex p-2 bd-highlight">Io sono un contenitore inline flexbox!</div>
{% endcapture %}{% include example.html content=example %}

Sono previste anche seguenti le varianti responsive per `.d-flex` e `.d-inline-flex`:

{% for bp in site.data.breakpoints %}

- `.d{{ bp.abbr }}-flex`
- `.d{{ bp.abbr }}-inline-flex`{% endfor %}

## Direzione

La direzione degli elementi flex è dettata dall'impostazione predefinita del browser. Tuttavia è possibile che si verifichino situazioni in cui è necessario impostare in modo esplicito questo valore, come ad esempio nei layout responsive.

Usa `.flex-row` per impostare la direzione orizzontale dell'elemento flex come quella predefinita dal browser. Oppure usa `.flex-row-reverse` per invertire la direzione del contenuto rispetto a quella predefinita.

<div class="bd-example-row">
{% comment %}Example name: Varianti di direzione{% endcomment %}
{% capture example %}
<div class="d-flex flex-row mb-3">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
<div class="d-flex flex-row-reverse">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Usa `.flex-column` per impostare la direzione verticale, oppure `.flex-column-reverse` per far partire gli elementi dal lato opposto.

<div class="bd-example-row">
{% comment %}Example name: Varianti di direzione verticale{% endcomment %}
{% capture example %}
<div class="d-flex flex-column mb-3">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-2 bd-highlight">Elemento flex 1</div>
  <div class="p-2 bd-highlight">Elemento flex 2</div>
  <div class="p-2 bd-highlight">Elemento flex 3</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Sono previste anche seguenti le varianti responsive per `flex-direction`:

{% for bp in site.data.breakpoints %}

- `.flex{{ bp.abbr }}-row`
- `.flex{{ bp.abbr }}-row-reverse`
- `.flex{{ bp.abbr }}-column`
- `.flex{{ bp.abbr }}-column-reverse`{% endfor %}

## Contenuto giustificato

Usa le utility `justify-content` col contenitore flexbox per cambiare l'allineamento dei suoi elementi flex rispetto all'asse orizzontale (l'asse x predefinito, l'asse y se `flex-direction: column`). Scegli tra `start` (predefinito dal browser), `end`, `center`, `between` o `around`.

<div class="bd-example-row">
{% comment %}Example name: Contenuto giustificato{% endcomment %}
{% capture example %}
  <div class="d-flex justify-content-start mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-end mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-center mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-between mb-3">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex justify-content-around">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

Sono previste anche seguenti le varianti responsive per `justify-content`:

{% for bp in site.data.breakpoints %}

- `.justify-content{{ bp.abbr }}-start`
- `.justify-content{{ bp.abbr }}-end`
- `.justify-content{{ bp.abbr }}-center`
- `.justify-content{{ bp.abbr }}-between`
- `.justify-content{{ bp.abbr }}-around`{% endfor %}

## Allineamento elementi

Usa le utility `align-items` col contenitore flexbox per cambiare l'allineamento dei suoi elementi flex rispetto all'asse verticale (l'asse y predefinito, l'asse x se `flex-direction: column`). Scegli tra `start`, `end`, `center`, `baseline` o `stretch` (predefinito dal browser).

<div class="bd-example-row">
{% comment %}Example name: Allineamento elementi{% endcomment %}
{% capture example %}
  <div class="d-flex align-items-start mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-end mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-center mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-baseline mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex align-items-stretch" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Sono previste anche seguenti le varianti responsive per `align-items`:

{% for bp in site.data.breakpoints %}

- `.align-items{{ bp.abbr }}-start`
- `.align-items{{ bp.abbr }}-end`
- `.align-items{{ bp.abbr }}-center`
- `.align-items{{ bp.abbr }}-baseline`
- `.align-items{{ bp.abbr }}-stretch`{% endfor %}

## Auto allineamento

Usa le utility `align-self` con i singoli elementi flex per cambiarne l'allineamento rispetto all'asse verticale (l'asse y predefinito, l'asse x se `flex-direction: column`). Scegli tra `start`, `end`, `center`, `baseline` o `stretch` (predefinito dal browser).

<div class="bd-example-row">
{% comment %}Example name: Auto allineamento{% endcomment %}
{% capture example %}
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-start p-2 bd-highlight">Elemento flex allineato</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-end p-2 bd-highlight">Elemento flex allineato</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-center p-2 bd-highlight">Elemento flex allineato</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-baseline p-2 bd-highlight">Elemento flex allineato</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  <div class="d-flex" style="height: 100px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="align-self-stretch p-2 bd-highlight">Elemento flex allineato</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


Sono previste anche seguenti le varianti responsive per `align-self`:

{% for bp in site.data.breakpoints %}

- `.align-self{{ bp.abbr }}-start`
- `.align-self{{ bp.abbr }}-end`
- `.align-self{{ bp.abbr }}-center`
- `.align-self{{ bp.abbr }}-baseline`
- `.align-self{{ bp.abbr }}-stretch`{% endfor %}

## Margini automatici

Flexbox può fare cose meravigliose quando si mescolano gli allineamenti flessibili con i margini automatici. Di seguito sono mostrati tre esempi di controllo degli elementi flex tramite margini automatici: predefinito (nessun margine automatico), inserito con due elementi a destra (`.me-auto`) e inserito con due elementi a sinistra (`.ms-auto`).

<div class="bd-example-row">
{% comment %}Example name: Margini automatici{% endcomment %}
{% capture example %}
<div class="d-flex mb-3">
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
</div>
<div class="d-flex mb-3">
  <div class="me-auto p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
</div>
<div class="d-flex mb-3">
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="ms-auto p-2 bd-highlight">Elemento flex</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Con 'align-items'

Spostare verticalmente un elemento flex in cima o in fondo a un contenitore mescolando `align-items`,` flex-direction: column` e `margin-top: auto` o` margin-bottom: auto`.

<div class="bd-example-row">
{% comment %}Example name: Con elementi spostati in cima o in fondo{% endcomment %}
{% capture example %}
<div class="d-flex align-items-start flex-column mb-3" style="height: 200px;">
  <div class="mb-auto p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
</div>
<div class="d-flex align-items-end flex-column mb-3" style="height: 200px;">
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="p-2 bd-highlight">Elemento flex</div>
  <div class="mt-auto p-2 bd-highlight">Elemento flex</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Wrap

Cambia il modo con cui gli elementi flex si dispongono nel contenitore. Scegli da nessun wrap a tutto (predefinito dal browser) con `.flex-nowrap`, wrap con `.flex-wrap` o invertire il wrap con `.flex-wrap-reverse`.

<div class="bd-example-row">
{% comment %}Example name: No-wrap{% endcomment %}
{% capture example %}
  <div class="d-flex flex-nowrap" style="width: 8rem;">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Wrap{% endcomment %}
{% capture example %}
  <div class="d-flex flex-wrap">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>


<div class="bd-example-row">
{% comment %}Example name: Wrap-reverse{% endcomment %}
{% capture example %}
  <div class="d-flex flex-wrap-reverse">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

Sono previste anche seguenti le varianti responsive per `flex-wrap`:

{% for bp in site.data.breakpoints %}

- `.flex{{ bp.abbr }}-nowrap`
- `.flex{{ bp.abbr }}-wrap`
- `.flex{{ bp.abbr }}-wrap-reverse`{% endfor %}

## Ordinamento

Modifica l'ordine in _visualizzazione_ di elementi flex specifici con l'utility `order-`. Sono disponibili le opzioni per il primo elemento o l'ultimo, come anche il reset dell'ordinamento DOM.
Le classi `order-` sono accompagnate da un ordinale intero (`1`, `2`, `3`, e così via), per cui puoi creare delle classi personalizzate per aggiungere i valori di cui hai bisogno.

<div class="bd-example-row">
{% comment %}Example name: Ordinamento{% endcomment %}
{% capture example %}
<div class="d-flex flex-nowrap">
  <div class="order-3 p-2 bd-highlight">Primo elemento flex</div>
  <div class="order-2 p-2 bd-highlight">Secondo elemento flex</div>
  <div class="order-1 p-2 bd-highlight">Terzo elemento flex</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Sono previste anche seguenti le varianti responsive per `order`:

{% for bp in site.data.breakpoints %}{% for i in (0..5) %}

- `.order{{ bp.abbr }}-{{ i }}`{% endfor %}{% endfor %}

## Align content

Usa le utility `align-content` sul contenitore flexbox per cambiare l'allineamento dei suoi elementi flex _insieme_ all'asse verticale. Scegli tra `start` (predefinito dal browser), `end`, `center`, `between`, `around` o `stretch`. Per mostrare meglio il funzionamento di queste utility abbiamo forzato il contenitore con `flex-wrap: wrap` e aumentato il numero di elementi flex.

**Heads up!** Questa proprietà non ha effetto sulle singole righe di elementi flex.

<div class="bd-example-row">
{% comment %}Example name: Align-content-start {% endcomment %}
{% capture example %}
  <div class="d-flex align-content-start flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Align-content-end {% endcomment %}
{% capture example %}
  <div class="d-flex align-content-end flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Align-content-center {% endcomment %}
{% capture example %}
  <div class="d-flex align-content-center flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
  {% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Align-content-between {% endcomment %}
{% capture example %}
  <div class="d-flex align-content-between flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Align-content-around {% endcomment %}
{% capture example %}
  <div class="d-flex align-content-around flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Align-content-stretch {% endcomment %}
{% capture example %}
  <div class="d-flex align-content-stretch flex-wrap mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
    <div class="p-2 bd-highlight">Elemento flex</div>
  </div>
{% endcapture %}{% include example.html content=example %}
</div>

Sono previste anche seguenti le varianti responsive per `align-content`.

{% for bp in site.data.breakpoints %}

- `.align-content{{ bp.abbr }}-start`
- `.align-content{{ bp.abbr }}-end`
- `.align-content{{ bp.abbr }}-center`
- `.align-content{{ bp.abbr }}-around`
- `.align-content{{ bp.abbr }}-stretch`{% endfor %}
