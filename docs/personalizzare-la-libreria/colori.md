---
layout: docs
group: personalizzare-la-libreria
toc: true
title: Colori
description: Quali sono i colori disponibili in Bootstrap Italia e come personalizzarli
---

<style>
  .table-cols-equal {
    table-layout: fixed;
    width: 100%;
  }
  .table-cols-equal th:first-child,
  .table-cols-equal td:first-child,
  .table-cols-equal th:nth-child(2),
  .table-cols-equal td:nth-child(2) {
    width: 50%;
  }
  .table-cols-preview {
    table-layout: fixed;
    width: 100%;
  }
  .table-cols-preview th:first-child,
  .table-cols-preview td:first-child {
    width: 20%;
  }
  .table-cols-preview th:nth-child(2),
  .table-cols-preview td:nth-child(2) {
    width: 35%;
  }
  .table-cols-preview th:nth-child(3),
  .table-cols-preview td:nth-child(3) {
    width: 45%;
  }
</style>

## Introduzione

Bootstrap Italia dalla `v3.x` espone i valori dei colori tramite le **[CSS custom properties]({{ site.baseurl }}/docs/personalizzare-la-libreria/variabili-css/)**.
Il nome delle variabili descrive la funzione del colore e non il valore cromatico.

## Semantica dei colori

I colori seguono la semantica definita dal [Design System Italia](https://designers.italia.it/design-system/fondamenti/colori/) e sono suddivisi in:

<div class="table-responsive mb-4">
  <table class="table table-cols-preview">
    <thead>
      <tr>
        <th>Esempio del colore</th>
        <th>Nome</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-primary' %}</td>
        <td><code>primary</code></td>
        <td>Indica il colore principale del tema, coincide con l'identità del prodotto</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-secondary' %}</td>
        <td><code>secondary</code></td>
        <td>Colore neutro di supporto al colore primario</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-accent' %}</td>
        <td><code>accent</code></td>
        <td>Colore di risalto, alternativo al colore primario per elementi interattivi, sfondo o bordo</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-subtle' %}</td>
        <td><code>subtle</code></td>
        <td>Colore neutro utilizzato per elementi di sfondo o bordo.</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-muted' %}</td>
        <td><code>muted</code></td>
        <td>Colore neutro utilizzato per elementi di sfondo o bordo.</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-success' %}</td>
        <td><code>success</code></td>
        <td>Colore di sistema, identifica lo stato di successo</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-warning' %}</td>
        <td><code>warning</code></td>
        <td>Colore di sistema, identifica lo stato di allerta</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-danger' %}</td>
        <td><code>danger</code></td>
        <td>Colore di sistema, identifica lo stato di pericolo</td>
      </tr>
      <tr class="align-middle">
        <td>{% include color-swatch.html var='--bsi-color-background-inverse' type='bg-border' %}</td>
        <td><code>inverse</code></td>
        <td>Indica il colore invertito rispetto ad un colore di sfondo, generalmente bianco</td>
      </tr>
    </tbody>
  </table>
</div>

### Varianti

Ciascun colore può avere diverse varianti:

| Suffisso    | Descrizione              |
| ----------- | ------------------------ |
| `-light`    | Variante chiara          |
| `-lighter`  | Variante molto chiara    |
| `-subtle`   | Variante attenuata       |
| `-muted`    | Variante molto attenuata |
| `-deep`     | Variante molto scura     |
| `-emphasis` | Variante di enfasi       |
{: .table .table-cols-equal .mb-4}

**Attenzione:** I nomi `subtle` e `muted` sono utilizzati sia per i colori che per le varianti. In questo modo possono essere abbinati sia ad una proprietà come `border` che ad un colore come `primary`. Ad esempio:

 ```css
 :root {
   --bsi-color-background-primary-muted: #004d99;
   --bsi-color-border-subtle: #c5c7c9;
 }
 ```
Mentre `--bsi-color-background-primary-muted` definisce una variante molto attenuata del colore primario abbinata alla proprietà `background`, la variabile `--bsi-color-border-subtle` definisce la variante di un bordo, senza esplicitare il colore di riferimento, che in questo caso è un grigio chiaro.

## Variabili CSS disponibili

Le variabili semantiche descrivono il **ruolo del colore** all'interno dell'interfaccia. Sono organizzate per categoria: testo, sfondo, bordo, link e stato.

### Colore del testo

Le variabili `--bsi-color-text-*` controllano il colore del testo in diversi contesti:

{% include color-vars-table.html category="text" %}

### Colore di sfondo

Le variabili `--bsi-color-background-*` controllano i colori di sfondo di componenti e sezioni di pagina.

{% include color-vars-table.html category="background" %}

### Colore dei bordi

Le variabili `--bsi-color-border-*` controllano i colori dei bordi di componenti e separatori.

{% include color-vars-table.html category="border" %}

### Colore dei link

Le variabili `--bsi-color-link-*` controllano i colori dei link nella pagina.

{% include color-vars-table.html category="link" %}

### Colori di stato

Le variabili `--bsi-color-status-*` sono alias semantici dei colori di sfondo di stato, utili per colorare elementi indicatori come badge, dot o icone.

{% include color-vars-table.html category="status" %}

## Come personalizzare i colori

Puoi personalizzare i colori creando un foglio di stile dedicato e caricarlo **dopo** `bootstrap-italia.min.css`, seguendo la logica a cascata dei file CSS. In questo modo è possibile sovrascrivere le variabili sull'elemento `:root`.

```html
<link rel="stylesheet" href="bootstrap-italia.min.css">
<!-- Caricamento del foglio di stile personalizzato -->
<link rel="stylesheet" href="my-custom-colors.css">
```

In alternativa, puoi creare un file SCSS dedicato e importarlo nel file sorgente della libreria, inserendolo dopo il parziale `_root.scss` seguendo la nuova [logica di importazione]({{ site.baseurl }}/docs/come-iniziare/introduzione/#con-sass):

```scss
// my-bootstrap-italia.scss

@use 'bootstrap-italia/src/scss/base/root' as *;

// altri parziali da importare
// ...

// Personalizzazione dei colori
@use 'my-custom-colors.scss' as *;
```

### Cambiare il colore primario

Ad esempio, **cambiare il colore primario del tema è molto semplice**. 
Basta sovrascrivere le principali variabili `primary` per categoria seguendo la stessa logica:

```css
/* my-custom-colors.css */
:root {

  /* Nuovo colore primario */
  --my-custom-primary-color: #005C2B;

  /* Override delle variabili CSS di Bootstrap Italia */
  --bsi-color-text-primary: var(--my-custom-primary-color);
  --bsi-color-background-primary: var(--my-custom-primary-color);
  --bsi-color-border-primary: var(--my-custom-primary-color);
  --bsi-color-icon-primary: var(--my-custom-primary-color);
}
```

Questo approccio è valido per tutte le [variabili disponibili nella libreria]({{ site.baseurl }}/docs/personalizzare-la-libreria/variabili-css/).


## Migrazione dalla versione 2

La versione `2.x` di Bootstrap Italia metteva a disposizione molte classi di utility legate alla palette dei colori che ora sono state rimosse in favore delle variabili CSS.

Se hai utilizzato queste classi in precedenza, puoi sostituirle con le variabili CSS simili o equivalenti verificando che i valori siano compatibili, secondo il contesto di utilizzo.

### Classi rimosse

In questa tabella sono riportate le classi per le quali è disponibile una variabile o classe CSS equivalente. Quelle elencate come rimosse invece non hanno un sostituto diretto.

| v2.x | v3.0.0 |
|---|---|
| `.primary-bg` | `--bsi-color-background-primary`<br> `.bg-primary` |
| `.primary-color` | `--bsi-color-text-primary`<br> `.text-primary` |
| `.primary-border-color` | `--bsi-color-border-primary`<br> `.border-primary` |
| `.primary-bg-a*`  <br> `.primary-bg-b*`  <br> `.primary-bg-c*` | Rimosse, nessun sostituto diretto. <br> Prova le varianti `-light`, `-lighter`, `-subtle`, `-muted`, `-deep` |
| `.analogue-1-bg` <br> `.analogue-1-color`  <br> `.analogue-1-border-color` |  Rimosse, nessun sostituto diretto |
| `.analogue-2-bg` <br> `.analogue-2-color`  <br> `.analogue-2-border-color` |  `--bsi-color-background-accent`<br> `--bsi-color-text-accent` |
| `.analogue-*-bg-a*`  <br> `.analogue-*-bg-b*` | Rimosse, nessun sostituto diretto |
| `.complementary-1-bg` <br> `.complementary-1-color`  <br> `.complementary-1-border-color` | `--bsi-color-background-danger` <br> `--bsi-color-text-danger` <br> `--bsi-color-border-danger` |
| `.complementary-2-bg` <br> `.complementary-2-color`  <br> `.complementary-2-border-color` | `--bsi-color-background-warning` <br> `--bsi-color-text-warning` <br> `--bsi-color-border-warning` |
| `.complementary-3-bg` <br> `.complementary-3-color`  <br> `.complementary-3-border-color` | `--bsi-color-background-success` <br> `--bsi-color-text-success` <br> `--bsi-color-border-success` |
| `.complementary-*-bg-a*`  <br> `.complementary-*-bg-b*` | Rimosse, nessun sostituto diretto |
| `.neutral-1-bg` <br> `.neutral-1-color` <br> `.neutral-1-border-color` | `--bsi-color-background-emphasis)` <br> `--bsi-color-text-secondary` <br> `--bsi-color-border-secondary` |
| `.neutral-2-bg` <br> `neutral-2-color` <br> `neutral-2-border-color` | `--bsi-color-background-muted` <br> `--bsi-color-text-muted` <br> `--bsi-color-border-subtle` |
| `.neutral-*-bg-a*`  <br> `.neutral-*-bg-b*` | Rimosse, nessun sostituto diretto |
| `.lightgrey-bg-*` | `--bsi-color-background-subtle` |
| `.lightgrey-color-*` | `--bsi-color-text-muted` |
| `.lightgrey-border-color-*` | `--bsi-color-border-subtle` |
{: .table .table-cols-equal .mb-4}

