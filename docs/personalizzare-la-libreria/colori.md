---
layout: docs
group: personalizzare-la-libreria
toc: true
title: Colori
description: Quali sono i colori disponobili in Bootstrap Italia e come personalizzarli
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
    width: 35%;
  }
  .table-cols-preview th:nth-child(2),
  .table-cols-preview td:nth-child(2) {
    width: 20%;
  }
  .table-cols-preview th:nth-child(3),
  .table-cols-preview td:nth-child(3) {
    width: 45%;
  }
</style>

## Introduzione

Bootstrap Italia dalla `v3.x` espone i valori dei colori tramite le **[CSS custom properties]({{ site.baseurl }}/docs/personalizzare-la-libreria/variabili-css/)**.
Il nome delle variabili descrive la funzione del colore e non il valore cromatico (es. `--bsi-color-text-primary`).

## Semantica dei colori

I colori seguono la semantica definita dal [Design System Italia](https://designers.italia.it/design-system/fondamenti/colori/) e sono suddivisi in:

<div class="table-responsive mb-4">
  <table class="table table-cols-preview">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Esempio del colore</th>
        <th>Utilizzo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>primary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary' %}</td>
        <td>Indica il colore principale del tema, coincide con l'identità del prodotto</td>
      </tr>
      <tr>
        <td><code>secondary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-secondary' %}</td>
        <td>Colore neutro di supporto al colore primario</td>
      </tr>
      <tr>
        <td><code>accent</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-accent' %}</td>
        <td>Colore di risalto, alternativo al colore primario per elementi interattivi, sfondo o bordo</td>
      </tr>
      <tr>
        <td><code>subtle</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-subtle' %}</td>
        <td>Colore neutro utilizzato per elementi di sfondo o bordo.</td>
      </tr>
      <tr>
        <td><code>muted</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-muted' %}</td>
        <td>Colore neutro utilizzato per elementi di sfondo o bordo.</td>
      </tr>
      <tr>
        <td><code>success</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-success' %}</td>
        <td>Colore di sistema, identifica lo stato di successo</td>
      </tr>
      <tr>
        <td><code>warning</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-warning' %}</td>
        <td>Colore di sistema, identifica lo stato di allerta</td>
      </tr>
      <tr>
        <td><code>danger</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-danger' %}</td>
        <td>Colore di sistema, identifica lo stato di pericolo</td>
      </tr>
      <tr>
        <td><code>inverse</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-inverse' type='bg-border' %}</td>
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
 --bsi-color-background-primary-muted: #004d99;
 --bsi-color-border-subtle: ##c5c7c9;
 ```
Mentre `--bsi-color-background-primary-muted` definisce una variante molto attenuata del colore primario abbinata alla proprietà `background`, la variabile `--bsi-color-border-subtle` definisce la variante di un bordo, senza esplicitare il colore di riferimento, che in questo caso è un grigio chiaro.

<!-- ## Variabili del tema

Il gruppo `--bsi-theme-primary-*` rappresenta la palette del colore primario del tema. Questi sono i valori che la maggior parte dei componenti usa direttamente per colori di sfondo, bordi e testo interattivo.

| Variabile CSS | Valore default | Descrizione |
|---|---|---|
| `--bsi-theme-primary` | `#0066cc` | Colore base del tema (Blu Italia) |
| `--bsi-theme-primary-light` | `#bfdfff` | Variante chiara |
| `--bsi-theme-primary-lighter` | `#f2f7fc` | Variante molto chiara |
| `--bsi-theme-primary-subtle` | `#004d99` | Variante attenuata |
| `--bsi-theme-primary-muted` | `#004080` | Variante molto attenuata |
| `--bsi-theme-primary-deep` | `#003366` | Variante scura | -->

## Variabili semantiche per categoria

Le variabili semantiche descrivono il **ruolo del colore** all'interno dell'interfaccia. Sono organizzate per categoria: testo, sfondo, bordo, link e stato.

### Colore del testo

Le variabili `--bsi-color-text-*` controllano il colore del testo in diversi contesti:

<div class="table-responsive mb-4">
  <table class="table table-cols-preview">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Esempio del colore</th>
        <th>Utilizzo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--bsi-color-text-base</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-base' %}</td>
        <td>Testo principale della pagina</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-primary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-primary' %}</td>
        <td>Testo con funzione di link o azione primaria</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-secondary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-secondary' %}</td>
        <td>Testo alternativo, contenuti di dettaglio</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-muted</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-muted' %}</td>
        <td>Testo di supporto, didascalie brevi</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-disabled</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-disabled' %}</td>
        <td>Testo su elementi disabilitati</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-inverse</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-inverse' type='bg-border' %}</td>
        <td>Testo su sfondi a contrasto (primary, emphasis)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-accent</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-accent' %}</td>
        <td>Testo di accento su sfondi a contrasto</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-success</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-success' %}</td>
        <td>Testo per stati di successo</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-success-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-success-hover' %}</td>
        <td>Testo di successo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-success-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-success-active' %}</td>
        <td>Testo di successo per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-warning</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-warning' %}</td>
        <td>Testo per stati di allerta</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-warning-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-warning-hover' %}</td>
        <td>Testo di allerta per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-warning-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-warning-active' %}</td>
        <td>Testo di allerta per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-danger</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-danger' %}</td>
        <td>Testo per errori o pericoli</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-danger-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-danger-hover' %}</td>
        <td>Testo di pericolo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-text-danger-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-text-danger-active' %}</td>
        <td>Testo di pericolo per lo stato active</td>
      </tr>
    </tbody>
  </table>
</div>

### Colore di sfondo

Le variabili `--bsi-color-background-*` controllano i colori di sfondo di componenti e sezioni di pagina.

<div class="table-responsive mb-4">
  <table class="table table-cols-preview">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Esempio del colore</th>
        <th>Utilizzo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--bsi-color-background-primary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary' %}</td>
        <td>Sfondo primario (pulsanti, link, elementi di identità)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-primary-light</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary-light' %}</td>
        <td>Sfondo primario chiaro (alternativo per elementi interattivi)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-primary-lighter</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary-lighter' %}</td>
        <td>Sfondo primario molto chiaro (definisce sezioni di pagina)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-primary-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary-hover' %}</td>
        <td>Sfondo primario per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-primary-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary-active' %}</td>
        <td>Sfondo primario per lo stato active/premuto</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-primary-muted</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary-muted' %}</td>
        <td>Sfondo primario attenuato (sezioni di pagina)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-primary-deep</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-primary-deep' %}</td>
        <td>Sfondo primario scuro (sezioni di pagina)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-secondary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-secondary' %}</td>
        <td>Sfondo secondario (elementi interattivi alternativi)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-secondary-light</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-secondary-light' %}</td>
        <td>Sfondo secondario chiaro</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-secondary-lighter</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-secondary-lighter' %}</td>
        <td>Sfondo secondario molto chiaro</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-secondary-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-secondary-hover' %}</td>
        <td>Sfondo secondario per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-secondary-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-secondary-active' %}</td>
        <td>Sfondo secondario per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-secondary-deep</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-secondary-deep' %}</td>
        <td>Sfondo secondario molto scuro</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-accent</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-accent' %}</td>
        <td>Sfondo con colore di accento</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-accent-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-accent-hover' %}</td>
        <td>Sfondo di accento per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-muted</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-muted' %}</td>
        <td>Sfondo molto chiaro (sezioni, paragrafi)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-subtle</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-subtle' %}</td>
        <td>Sfondo chiaro (separatori, sezioni)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-emphasis</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-emphasis' %}</td>
        <td>Sfondo di enfasi (sezioni in evidenza)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-inverse</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-inverse' type='bg-border' %}</td>
        <td>Sfondo invertito (bianco su sfondi scuri)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-disabled</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-disabled' %}</td>
        <td>Sfondo per elementi disabilitati</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-success</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-success' %}</td>
        <td>Sfondo per stati di successo</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-success-light</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-success-light' %}</td>
        <td>Sfondo di successo chiaro (contenuti medio-lunghi)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-success-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-success-hover' %}</td>
        <td>Sfondo di successo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-success-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-success-active' %}</td>
        <td>Sfondo di successo per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-warning</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-warning' %}</td>
        <td>Sfondo per stati di allerta</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-warning-light</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-warning-light' %}</td>
        <td>Sfondo di allerta chiaro (contenuti medio-lunghi)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-warning-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-warning-hover' %}</td>
        <td>Sfondo di allerta per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-warning-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-warning-active' %}</td>
        <td>Sfondo di allerta per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-danger</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-danger' %}</td>
        <td>Sfondo per errori o pericoli</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-danger-light</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-danger-light' %}</td>
        <td>Sfondo di pericolo chiaro (contenuti medio-lunghi)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-danger-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-danger-hover' %}</td>
        <td>Sfondo di pericolo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-background-danger-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-background-danger-active' %}</td>
        <td>Sfondo di pericolo per lo stato active</td>
      </tr>
    </tbody>
  </table>
</div>

### Colore dei bordi

Le variabili `--bsi-color-border-*` controllano i colori dei bordi di componenti e separatori.

<div class="table-responsive mb-4">
  <table class="table table-cols-preview">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Esempio del colore</th>
        <th>Utilizzo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--bsi-color-border-primary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-primary' type='border' %}</td>
        <td>Bordo primario (elementi interattivi cliccabili)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-primary-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-primary-hover' type='border' %}</td>
        <td>Bordo primario per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-primary-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-primary-active' type='border' %}</td>
        <td>Bordo primario per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-secondary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-secondary' type='border' %}</td>
        <td>Bordo secondario</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-secondary-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-secondary-hover' type='border' %}</td>
        <td>Bordo secondario per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-secondary-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-secondary-active' type='border' %}</td>
        <td>Bordo secondario per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-inverse</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-inverse' type='inverse-border' %}</td>
        <td>Bordo su sfondi a contrasto</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-disabled</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-disabled' type='border' %}</td>
        <td>Bordo per elementi disabilitati</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-subtle</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-subtle' type='border' %}</td>
        <td>Bordo separatore (sezioni e componenti)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-success</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-success' type='border' %}</td>
        <td>Bordo di successo</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-success-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-success-hover' type='border' %}</td>
        <td>Bordo di successo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-success-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-success-active' type='border' %}</td>
        <td>Bordo di successo per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-warning</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-warning' type='border' %}</td>
        <td>Bordo di allerta</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-warning-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-warning-hover' type='border' %}</td>
        <td>Bordo di allerta per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-warning-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-warning-active' type='border' %}</td>
        <td>Bordo di allerta per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-danger</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-danger' type='border' %}</td>
        <td>Bordo di pericolo/errore</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-danger-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-danger-hover' type='border' %}</td>
        <td>Bordo di pericolo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-border-danger-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-border-danger-active' type='border' %}</td>
        <td>Bordo di pericolo per lo stato active</td>
      </tr>
    </tbody>
  </table>
</div>

### Colore dei link

Le variabili `--bsi-color-link-*` controllano i colori dei link nella pagina.

<div class="table-responsive mb-4">
  <table class="table table-cols-preview">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Esempio del colore</th>
        <th>Utilizzo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--bsi-color-link</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link' %}</td>
        <td>Colore base dei link</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-hover' %}</td>
        <td>Link per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-active' %}</td>
        <td>Link per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-secondary</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-secondary' %}</td>
        <td>Link secondari (richiede sottolineatura)</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-secondary-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-secondary-hover' %}</td>
        <td>Link secondario per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-secondary-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-secondary-active' %}</td>
        <td>Link secondario per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-inverse</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-inverse' type='bg-border' %}</td>
        <td>Link su sfondi a contrasto</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-disabled</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-disabled' %}</td>
        <td>Link disabilitato</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-accent</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-accent' %}</td>
        <td>Link con colore di accento</td>
      </tr>
      <tr>
        <td><code>--bsi-color-link-accent-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-link-accent-hover' %}</td>
        <td>Link di accento per lo stato hover</td>
      </tr>
    </tbody>
  </table>
</div>

### Colori di stato

Le variabili `--bsi-color-status-*` sono alias semantici dei colori di sfondo di stato, utili per colorare elementi indicatori come badge, dot o icone.

<div class="table-responsive mb-4">
  <table class="table table-cols-preview">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Esempio del colore</th>
        <th>Utilizzo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--bsi-color-status-danger</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-danger' %}</td>
        <td>Colore indicatore di pericolo/errore</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-danger-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-danger-hover' %}</td>
        <td>Indicatore pericolo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-danger-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-danger-active' %}</td>
        <td>Indicatore pericolo per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-success</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-success' %}</td>
        <td>Colore indicatore di successo</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-success-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-success-hover' %}</td>
        <td>Indicatore successo per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-success-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-success-active' %}</td>
        <td>Indicatore successo per lo stato active</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-warning</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-warning' %}</td>
        <td>Colore indicatore di allerta</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-warning-hover</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-warning-hover' %}</td>
        <td>Indicatore allerta per lo stato hover</td>
      </tr>
      <tr>
        <td><code>--bsi-color-status-warning-active</code></td>
        <td>{% include color-swatch.html var='--bsi-color-status-warning-active' %}</td>
        <td>Indicatore allerta per lo stato active</td>
      </tr>
    </tbody>
  </table>
</div>

## Come personalizzare i colori

Puoi personalizzare i colori creando un foglio di stile dedicato e caricarlo **dopo** `bootstrap-italia.min.css`, seguendo la logica a cascata dei file CSS. In questo modo è possibile sovrascrivere le variabili sull'elemento `:root`.

```html
<link rel="stylesheet" href="bootstrap-italia.min.css">
<link rel="stylesheet" href="my-custom-colors.css">
```

```css
/* my-custom-colors.css */
:root {
  --bsi-color-primary: #005C2B;
  --bsi-color-primary-deep: #003D1C;
  --bsi-color-primary-muted: #004D24;
  --bsi-color-primary-subtle: #004D24;
  --bsi-color-primary-light: #C8E6D4;
  --bsi-color-primary-lighter: #EDF7F1;
}
```

In questo modo il colore primario del tema sarà personalizzato con i nuovi valori specificati. Puoi personalizzare tutte le variabili semantiche per categoria seguendo la stessa logica.


## Migrazione dalla versione 2

Nella versione 2.x di Bootstrap Italia erano disponibili classi CSS utility legate alla palette dei colori (es. `.primary-bg-*`, `.analogue-1-color-*`). Nella versione 3.x questo sistema è stato rimosso in favore delle variabili CSS.

La tabella seguente riporta le corrispondenze principali per le classi che avevano un equivalente semantico. Le classi elencate come rimosse non hanno un sostituto diretto: i casi d'uso che le richiedevano devono essere valutati in base al contesto e alla funzione del colore, scegliendo la variabile semantica più appropriata.

### Colori primari

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.primary-bg` | `background-color: var(--bsi-color-background-primary)` |
| `.primary-color` | `color: var(--bsi-color-text-primary)` |
| `.primary-border-color` | `border-color: var(--bsi-color-border-primary)` |
| `.primary-bg-a*`  <br> `.primary-bg-b*`  <br> `.primary-bg-c*` | Rimosso - usare le varianti `-light`, `-lighter`, `-subtle`, `-muted`, `-deep` |
{: .table .table-cols-equal .mb-4}


### Colori analoghi

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.analogue-1-bg` <br> `.analogue-1-color`  <br> `.analogue-1-border-color` | Rimosso - nessun sostituto diretto |
| `.analogue-2-bg` <br> `.analogue-2-color`  <br> `.analogue-2-border-color` | Rimosso - nessun sostituto diretto |
| Varianti `.analogue-*-bg-a*`  <br> `.analogue-*-bg-b*` | Rimosso - nessun sostituto diretto |
{: .table .table-cols-equal .mb-4}

### Colori complementari e triadici

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.complementary-1-bg` <br> `.complementary-1-color`  <br> `.complementary-1-border-color` | Rimosso - nessun sostituto diretto |
| `.complementary-2-bg` <br> `.complementary-2-color`  <br> `.complementary-2-border-color` | Rimosso - nessun sostituto diretto |
| `.complementary-3-bg` <br> `.complementary-3-color`  <br> `.complementary-3-border-color` | Rimosso - nessun sostituto diretto |
| Varianti `.complementary-*-bg-a*`  <br> `.complementary-*-bg-b*` | Rimosso - nessun sostituto diretto |
{: .table .table-cols-equal .mb-4}

### Colori neutrali

I colori neutrali non hanno un sostituto diretto. In base al contesto d'uso, valutare le variabili semantiche `subtle` o `muted`:

| v2 — Classe CSS | v3 — Suggerimento |
|---|---|
| `.neutral-1-bg` | `background-color: var(--bsi-color-background-subtle)` oppure `var(--bsi-color-background-muted)` |
| `.neutral-1-color` | `color: var(--bsi-color-text-muted)` |
| `.neutral-1-border-color` | `border-color: var(--bsi-color-border-subtle)` |
| `.neutral-2-bg` | `background-color: var(--bsi-color-background-muted)` |
| `.neutral-2-color` | `color: var(--bsi-color-text-muted)` |
| `.neutral-2-border-color` | `border-color: var(--bsi-color-border-subtle)` |
| Varianti `.neutral-*-bg-a*`  <br> `.neutral-*-bg-b*` | Rimosso - nessun sostituto diretto |
{: .table .table-cols-equal .mb-4}

### Grigi chiari

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.lightgrey-bg-a*`  <br> `.lightgrey-bg-b*`  <br> `.lightgrey-bg-c*` | Rimosso - nessun sostituto diretto |
| `.lightgrey-color-*` | Rimosso - nessun sostituto diretto |
| `.lightgrey-border-color-*` | Rimosso - nessun sostituto diretto |
{: .table .table-cols-equal .mb-4}
