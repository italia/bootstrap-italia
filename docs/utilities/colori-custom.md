---
layout: docs
group: utilites
toc: true

title: Colori Custom
description: Modifica colori di background, testo e bordi con colori custom.
---

Definisci colori di background, bordi, colore di testo attraverso specifiche classi.

## Colori Primari

<div class="bd-example-border-utils">
  <p>
  I colori primari sono il Blu Italia e il bianco.<br>
  Il <strong class="primary-color">Blu Italia</strong> è il colore identificativo dell’intera brand identity e rappresenta la radice per creare altri colori della palette primaria.
  </p>
  <div class="primary-color-container">
    <div class="square-color primary-bg">
      <span class="white-color">#0066CC</span>
    </div>
    <div class="square-color white-bg shadow">
      <span>#FFFFFF</span>
    </div>
    <div class="clearfix"></div>
   </div>
</div>

<div class="exclude-a11y-check">
{% comment %}Example name: Colori primari{% endcomment %}
{% capture example %}
<div class="primary-bg p-3"><span class="white-color">Testo bianco su background colore primario</span></div>
<div class="primary-border-color border p-3"><span class="primary-color">Testo colore primario su background con bordo primario</span></div>
{% endcapture %}{% include example.html content=example %}
</div>

**Utilizzo delle classi:**

`.primary-bg` : per background color <br>
`.primary-color` : per text color<br>
`.primary-border-color` : per border color<br>

### Varianti monocromatiche del colore base

Il colore primario possiede tre tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe

**Utilizzo delle classi:**

`.primary-bg- + variante-colore` : per background color <br>
`.primary-color- + variante-colore` : per text color<br>
`.primary-border-color- + variante-colore` : per border color

(es. `.primary-bg-a5` per utilizzare come background il colore primario con variante **a5** )

<div class="exclude-a11y-check">
{% comment %}Example name: Varianti monocromatiche del colore base{% endcomment %}
{% capture example %}
<div class="bd-example-border-utils">
  <div class="row">
    <div class="col-xs-12 col-md-3">
      <p>Tinte e ombre</p>
      <div class="c-line primary-bg-a1">a1</div>
      <div class="c-line primary-bg-a2">a2</div>
      <div class="c-line primary-bg-a3">a3</div>
      <div class="c-line primary-bg-a4">a4</div>
      <div class="c-line primary-bg-a5">a5</div>
      <div class="c-line white-color primary-bg-a6">a6</div>
      <div class="c-line white-color primary-bg-a7">a7</div>
      <div class="c-line white-color primary-bg-a8">a8</div>
      <div class="c-line white-color primary-bg-a9">a9</div>
      <div class="c-line white-color primary-bg-a10">a10</div>
      <div class="c-line white-color primary-bg-a11">a11</div>
      <div class="c-line white-color primary-bg-a12">a12</div>
    </div>
    <div class="col-xs-12 col-md-3">
      <p>Toni</p>
      <div class="c-line primary-bg-b1 white-color">b1</div>
      <div class="c-line primary-bg-b2 white-color">b2</div>
      <div class="c-line primary-bg-b3 white-color">b3</div>
      <div class="c-line primary-bg-b4 white-color">b4</div>
      <div class="c-line primary-bg-b5 white-color">b5</div>
      <div class="c-line primary-bg-b6 white-color">b6</div>
      <div class="c-line primary-bg-b7 white-color">b7</div>
    </div>
    <div class="col-xs-12 col-md-3">
      <p>Variazione di saturazione</p>
      <div class="c-line primary-bg-c1">c1</div>
      <div class="c-line primary-bg-c2">c2</div>
      <div class="c-line primary-bg-c3">c3</div>
      <div class="c-line primary-bg-c4">c4</div>
      <div class="c-line primary-bg-c5">c5</div>
      <div class="c-line primary-bg-c6">c6</div>
      <div class="c-line primary-bg-c7">c7</div>
      <div class="c-line primary-bg-c8">c8</div>
      <div class="c-line primary-bg-c9">c9</div>
      <div class="c-line primary-bg-c10">c10</div>
      <div class="c-line white-color primary-bg-c11">c11</div>
      <div class="c-line white-color primary-bg-c12">c12</div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Colori secondari

### Analoghi

Ai colori monocromatici può essere affiancato un accent color, definito così perche si tratta di un colore molto luminoso, serve ad attirare l’attenzione.

Devono essere usati in modo parsimonioso.

<div class="primary-color-container">
  <div class="square-color analogue-1-bg">
    <span class="white-color">#3126ff</span>
  </div>
  <div class="square-color analogue-2-bg">
    <span>#0bd9d2</span>
  </div>
  <div class="clearfix"></div>
</div>

<br>
**Utilizzo delle classi:**

`.analogue-(+ 1/2 +)-bg` : per background color <br>
`.analogue-(+ 1/2 +)-color` : per text color<br>
`.analogue-(+ 1/2 +)-border-color` : per border color

<div class="exclude-a11y-check">
{% comment %}Example name: Colori secondari{% endcomment %}
{% capture example %}
<div class="analogue-1-bg p-3"><span class="white-color">Testo bianco su background colore analogo 1</span></div>
<div class="analogue-2-bg p-3"><span>Testo nero su background colore analogo 2</span></div>
{% endcapture %}{% include example.html content=example %}
</div>

---

### Complementari e triadici

<div class="primary-color-container">
  <div class="square-color complementary-1-bg">
    <span>#f73e5a</span>
  </div>
  <div class="square-color complementary-2-bg">
    <span>#ff9900</span>
  </div>
  <div class="square-color complementary-3-bg">
    <span>#00cf86</span>
  </div>
  <div class="clearfix"></div>
</div>

<br>
**Utilizzo delle classi:**

`.complementary-(+ 1/2/3 +)-bg` : per background color <br>
`.complementary-(+ 1/2/3 +)-color` : per text color<br>
`.complementary-(+ 1/2/3 +)-border-color` : per border color

<div class="exclude-a11y-check">
{% comment %}Example name: Colori complementari e triadici{% endcomment %}
{% capture example %}
<div class="complementary-1-bg p-3"><span>Testo su background colore complementare 1</span></div>
<div class="complementary-2-bg p-3"><span>Testo su background colore complementare 2</span></div>
<div class="complementary-3-bg p-3"><span>Testo su background colore complementare 3</span></div>
{% endcapture %}{% include example.html content=example %}
</div>

---

## Varianti colori secondari

### Analoghi

I colori analoghi possiedono due tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe

**Utilizzo delle classi:**

`.analogue-(+ 1/2 )-bg- + variante-colore` : per background color <br>
`.analogue-(+ 1/2 )-color- + variante-colore` : per text color<br>
`.analogue-(+ 1/2 )-border-color- + variante-colore` : per border color

(es. `.analogue-1-bg-a5` per utilizzare come background il colore analogo **1** con variante **a5** )

<div class="exclude-a11y-check">
{% comment %}Example name: Varianti colori secondari, analoghi{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-md-3">
    <div class="c-line analogue-1-bg-a1">a1 </div>
    <div class="c-line analogue-1-bg-a2">a2 </div>
    <div class="c-line analogue-1-bg-a3">a3 </div>
    <div class="c-line white-color analogue-1-bg-a4">a4 </div>
    <div class="c-line white-color analogue-1-bg-a5">a5 </div>
    <div class="c-line white-color analogue-1-bg-a6">a6 </div>
    <div class="c-line white-color analogue-1-bg-a7">a7 </div>
    <div class="c-line white-color analogue-1-bg-a8">a8 </div>
    <div class="c-line white-color analogue-1-bg-a9">a9 </div>
    <div class="c-line white-color analogue-1-bg-a10">a10 </div>
    <div class="c-line white-color analogue-1-bg-a11">a11 </div>
    <div class="c-line white-color analogue-1-bg-a12">a12 </div>
  </div>
  <div class="col-md-3">
    <div class="c-line white-color analogue-1-bg-b1">b1</div>
    <div class="c-line white-color analogue-1-bg-b2">b2</div>
    <div class="c-line white-color analogue-1-bg-b3">b3</div>
    <div class="c-line white-color analogue-1-bg-b4">b4</div>
    <div class="c-line white-color analogue-1-bg-b5">b5</div>
    <div class="c-line white-color analogue-1-bg-b6">b6</div>
    <div class="c-line white-color analogue-1-bg-b7">b7</div>
    <div class="c-line white-color analogue-1-bg-b8">b8</div>
  </div>
  <div class="col-md-3">
    <div class="c-line analogue-2-bg-a1">a1</div>
    <div class="c-line analogue-2-bg-a2">a2</div>
    <div class="c-line analogue-2-bg-a3">a3</div>
    <div class="c-line analogue-2-bg-a4">a4</div>
    <div class="c-line analogue-2-bg-a5">a5</div>
    <div class="c-line analogue-2-bg-a6">a6</div>
    <div class="c-line analogue-2-bg-a7">a7</div>
    <div class="c-line analogue-2-bg-a8">a8</div>
    <div class="c-line white-color analogue-2-bg-a9">a9</div>
    <div class="c-line white-color analogue-2-bg-a10">a10</div>
    <div class="c-line white-color analogue-2-bg-a11">a11</div>
    <div class="c-line white-color analogue-2-bg-a12">a12</div>
  </div>
  <div class="col-md-3">
    <div class="c-line white-color analogue-2-bg-b1">b1</div>
    <div class="c-line white-color analogue-2-bg-b2">b2</div>
    <div class="c-line white-color analogue-2-bg-b3">b3</div>
    <div class="c-line white-color analogue-2-bg-b4">b4</div>
    <div class="c-line white-color analogue-2-bg-b5">b5</div>
    <div class="c-line white-color analogue-2-bg-b6">b6</div>
    <div class="c-line white-color analogue-2-bg-b7">b7</div>
    <div class="c-line white-color analogue-2-bg-b8">b8</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Complementari e triadici

I colori Complementari possiedono due tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe

**Utilizzo delle classi:**

`.complementary-(+ 1/2/3 )-bg- + variante-colore` : per background color <br>
`.complementary-(+ 1/2/3 )-color- + variante-colore` : per text color<br>
`.complementary-(+ 1/2/3 )-border-color- + variante-colore` : per border color

(es. `.complementary-1-bg-a5` per utilizzare come background il colore complementare **1** con variante **a4** )

<div class="exclude-a11y-check">
{% comment %}Example name: Varianti colori secondari, complementari e triadici{% endcomment %}
{% capture example %}
<div class="row">
   <div class="col-md-2">
      <div class="c-line complementary-1-bg-a1">a1</div>
      <div class="c-line complementary-1-bg-a2">a2</div>
      <div class="c-line complementary-1-bg-a3">a3</div>
      <div class="c-line complementary-1-bg-a4">a4</div>
      <div class="c-line complementary-1-bg-a5">a5</div>
      <div class="c-line white-color complementary-1-bg-a6">a6</div>
      <div class="c-line white-color complementary-1-bg-a7">a7</div>
      <div class="c-line white-color complementary-1-bg-a8">a8</div>
      <div class="c-line white-color complementary-1-bg-a9">a9</div>
      <div class="c-line white-color complementary-1-bg-a10">a10</div>
      <div class="c-line white-color complementary-1-bg-a11">a11</div>
      <div class="c-line white-color complementary-1-bg-a12">a12</div>
   </div>
   <div class="col-md-2">
      <div class="c-line white-color complementary-1-bg-b1">b1</div>
      <div class="c-line white-color complementary-1-bg-b2">b2</div>
      <div class="c-line white-color complementary-1-bg-b3">b3</div>
      <div class="c-line white-color complementary-1-bg-b4">b4</div>
      <div class="c-line white-color complementary-1-bg-b5">b5</div>
      <div class="c-line white-color complementary-1-bg-b6">b6</div>
      <div class="c-line white-color complementary-1-bg-b7">b7</div>
      <div class="c-line white-color complementary-1-bg-b8">b8</div>
   </div>
   <div class="col-md-2">
      <div class="c-line complementary-2-bg-a1">a1</div>
      <div class="c-line complementary-2-bg-a2">a2</div>
      <div class="c-line complementary-2-bg-a3">a3</div>
      <div class="c-line complementary-2-bg-a4">a4</div>
      <div class="c-line complementary-2-bg-a5">a5</div>
      <div class="c-line complementary-2-bg-a6">a6</div>
      <div class="c-line white-color complementary-2-bg-a7">a7</div>
      <div class="c-line white-color complementary-2-bg-a8">a8</div>
      <div class="c-line white-color complementary-2-bg-a9">a9</div>
      <div class="c-line white-color complementary-2-bg-a10">a10</div>
      <div class="c-line white-color complementary-2-bg-a11">a11</div>
      <div class="c-line white-color complementary-2-bg-a12">a12</div>
   </div>
   <div class="col-md-2">
      <div class="c-line white-color complementary-2-bg-b1">b1</div>
      <div class="c-line white-color complementary-2-bg-b2">b2</div>
      <div class="c-line white-color complementary-2-bg-b3">b3</div>
      <div class="c-line white-color complementary-2-bg-b4">b4</div>
      <div class="c-line white-color complementary-2-bg-b5">b5</div>
      <div class="c-line white-color complementary-2-bg-b6">b6</div>
      <div class="c-line white-color complementary-2-bg-b7">b7</div>
      <div class="c-line white-color complementary-2-bg-b8">b8</div>
   </div>
   <div class="col-md-2">
      <div class="c-line complementary-3-bg-a1">a1</div>
      <div class="c-line complementary-3-bg-a2">a2</div>
      <div class="c-line complementary-3-bg-a3">a3</div>
      <div class="c-line complementary-3-bg-a4">a4</div>
      <div class="c-line complementary-3-bg-a5">a5</div>
      <div class="c-line complementary-3-bg-a6">a6</div>
      <div class="c-line complementary-3-bg-a7">a7</div>
      <div class="c-line complementary-3-bg-a8">a8</div>
      <div class="c-line white-color complementary-3-bg-a9">a9</div>
      <div class="c-line white-color complementary-3-bg-a10">a10</div>
      <div class="c-line white-color complementary-3-bg-a11">a11</div>
      <div class="c-line white-color complementary-3-bg-a12">a12</div>
   </div>
   <div class="col-md-2">
      <div class="c-line white-color complementary-3-bg-b1">b1</div>
      <div class="c-line white-color complementary-3-bg-b2">b2</div>
      <div class="c-line white-color complementary-3-bg-b3">b3</div>
      <div class="c-line white-color complementary-3-bg-b4">b4</div>
      <div class="c-line white-color complementary-3-bg-b5">b5</div>
      <div class="c-line white-color complementary-3-bg-b6">b6</div>
      <div class="c-line white-color complementary-3-bg-b7">b7</div>
      <div class="c-line white-color complementary-3-bg-b8">b8</div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Colori neutrali

<div class="primary-color-container">
<div class="square-color neutral-1-bg">
<span class="white-color">#17324d</span>
</div>
<div class="square-color neutral-2-bg">
<span>#e6ecf2</span>
</div>
<div class="clearfix"></div>
</div>

<br>
**Utilizzo delle classi:**

`.neutral-(+ 1/2 +)-bg` : per background color <br>
`.neutral-(+ 1/2 +)-color` : per text color<br>
`.neutral-(+ 1/2 +)-border-color` : per border color

<div class="exclude-a11y-check">
{% comment %}Example name: Varianti colori neutrali{% endcomment %}
{% capture example %}
<div class="neutral-1-bg p-3"><span class="white-color">Testo bianco su background colore neutrale 1</span></div>
<div class="neutral-2-bg p-3"><span>Testo su background colore neutrale 2</span></div>
{% endcapture %}{% include example.html content=example %}
</div>

## Varianti colori neutrali

I colori neutrali possiedono tre tipologie di varianti cromatiche. Per utilizzarle è sufficiente utilizzare la relativa classe

**Utilizzo delle classi:**

`.neutral-(+ 1/2 +)-bg- + variante-colore` : per background color <br>
`.neutral-(+ 1/2 +)-color- + variante-colore` : per text color<br>
`.neutral-(+ 1/2 +)-border-color- + variante-colore` : per border color

(es. `.neutral-1-bg-a5` per utilizzare come background il colore neutrale **1** con variante **a5** )

<div class="exclude-a11y-check">
{% comment %}Example name: Varianti colori neutrali{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-md-3">
    <div class="c-line neutral-1-bg-a1">a1</div>
    <div class="c-line neutral-1-bg-a2">a2</div>
    <div class="c-line neutral-1-bg-a3">a3</div>
    <div class="c-line neutral-1-bg-a4">a4</div>
    <div class="c-line neutral-1-bg-a5">a5</div>
    <div class="c-line neutral-1-bg-a6">a6</div>
    <div class="c-line white-color neutral-1-bg-a7">a7</div>
    <div class="c-line white-color neutral-1-bg-a8">a8</div>
    <div class="c-line white-color neutral-1-bg-a9">a9</div>
    <div class="c-line white-color neutral-1-bg-a10">a10</div>
  </div>
  <div class="col-md-3">
    <div class="c-line neutral-2-bg-b1">b1</div>
    <div class="c-line neutral-2-bg-b2">b2</div>
    <div class="c-line neutral-2-bg-b3">b3</div>
    <div class="c-line neutral-2-bg-b4">b4</div>
    <div class="c-line white-color neutral-2-bg-b5">b5</div>
    <div class="c-line white-color neutral-2-bg-b6">b6</div>
    <div class="c-line white-color neutral-2-bg-b7">b7</div>
  </div>
  <div class="col-md-3">
    <div class="c-line neutral-2-bg-a1">a1</div>
    <div class="c-line neutral-2-bg-a2">a2</div>
    <div class="c-line neutral-2-bg-a3">a3</div>
    <div class="c-line neutral-2-bg-a4">a4</div>
    <div class="c-line white-color neutral-2-bg-a5">a5</div>
    <div class="c-line white-color neutral-2-bg-a6">a6</div>
    <div class="c-line white-color neutral-2-bg-a7">a7</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Grigi chiari

I grigi chiari sono di tre tipologie. Per utilizzarle è sufficiente utilizzare la relativa classe

**Utilizzo delle classi:**

`.lightgrey-bg- + variante-colore` : per background color <br>
`.lightgrey-color- + variante-colore` : per text color<br>
`.lightgrey-border-color- + variante-colore` : per border color

(es. `.lightgrey-1-bg-a4` per utilizzare come background il grigio chiaro **1** con variante **a5** )

<div class="exclude-a11y-check">
{% comment %}Example name: Grigi chiari{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-md-2">
    <div class="c-line lightgrey-bg-a1">a1</div>
    <div class="c-line lightgrey-bg-a2">a2</div>
    <div class="c-line lightgrey-bg-a3">a3</div>
    <div class="c-line lightgrey-bg-a4">a4</div>
  </div>
  <div class="col-md-2">
    <div class="c-line lightgrey-bg-b1">b1</div>
    <div class="c-line lightgrey-bg-b2">b2</div>
    <div class="c-line lightgrey-bg-b3">b3</div>
    <div class="c-line lightgrey-bg-b4">b4</div>
  </div>
  <div class="col-md-2">
    <div class="c-line lightgrey-bg-c1">c1</div>
    <div class="c-line lightgrey-bg-c2">c2</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>
