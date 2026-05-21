---
layout: docs
group: personalizzare-la-libreria
toc: true
title: Colori
description: Quali sono i colori disponobili in Bootstrap Italia e come personalizzarli
---

<style>
  /* Colonne 1 e 2 a larghezza uguale nelle tabelle di questa pagina */
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
</style>

## Introduzione

Bootstrap Italia v3 espone i valori relativi ai colori tramite le **CSS custom properties** (variabili CSS) con prefisso `--bsi-`, disponibili globalmente tramite il selettore `:root`. 

Questo approccio sostituisce il precedente sistema basato su variabili Sass, consentendo una personalizzazione più semplice e flessibile che non richiede la ricompilazione dei file sorgente `.scss`.  

Le nuove variabili seguono una nomenclatura **semantica**: il nome descrive la funzione del colore e non il valore cromatico (es. `--bsi-color-text-primary`).

## Semantica dei colori

I colori seguono la semantica definita dal [Design System Italia](https://designers.italia.it/design-system/fondamenti/colori/) e sono suddivisi in:

| Nome        | Utilizzo                                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| `primary`   | Indica il colore principale del tema, coincide con l'identità del prodotto                               |
| `secondary` | Indica il colore neutro di supporto al colore primario                                                   |
| `accent`    | Indica il colore di risalto, alternativo al colore primario per elementi interattivi                     |
| `success`   | Indica il colore dello stato di successo, usato per indicare stati positivi                              |
| `warning`   | Indica il colore dello stato di allerta, usato per indicare stati di avviso o di rischio                 |
| `danger`    | Indica il colore dello stato di pericolo, usato per indicare stati di errore                             |
| `inverse`   | Indica il colore invertito rispetto ad un colore di sfondo, generalmente bianco                          |
{: .table .table-cols-equal .mb-4}

### Varianti

Ciascun colore è disponibile in alcune varianti, definite come segue:

| Suffisso    | Descrizione              |
| ----------- | ------------------------ |
| `-light`    | Variante chiara          |
| `-lighter`  | Variante molto chiara    |
| `-subtle`   | Variante attenuata       |
| `-muted`    | Variante molto attenuata |
| `-deep`     | Variante molto scura     |
| `-emphasis` | Variante di enfasi       |
{: .table .table-cols-equal .mb-4}

**Non tutte le varianti sono disponibili per ogni colore**. Ad esempio, il colore `color-background-primary` è disponibile nelle varianti `-light` e `-lighter`, ma non `-emphasis`. Ciascuna variante dipende dalla categoria di colore (sfondo, bordo o testo) e dal contesto di utilizzo. 

#### Colori e design token
Le variabili relative ai colori seguono la stessa nomenclatura definita per i design token del Design system Italia.
Ciascuna di esse referenzia il corrispettivo token di colore proveniente dalla risorsa [`design-tokens-italia`](https://github.com/italia/design-tokens-italia).

Approfondisci la [nomenclatura dei design token](https://designers.italia.it/design-system/fondamenti/design-tokens/).

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

| Variabile CSS | Utilizzo | Anteprima |
|---|---|
| `--bsi-color-text-base` | Testo principale della pagina | <span style="color: var(--bsi-color-text-base);">Testo di anteprima</span> |
| `--bsi-color-text-primary` | Testo con funzione di link o azione primaria | <span style="color: var(--bsi-color-text-primary);">Testo di anteprima</span> |
| `--bsi-color-text-secondary` | Testo alternativo, contenuti di dettaglio | <span style="color: var(--bsi-color-text-secondary);">Testo di anteprima</span> |
| `--bsi-color-text-muted` | Testo di supporto, didascalie brevi | <span style="color: var(--bsi-color-text-muted);">Testo di anteprima</span> |
| `--bsi-color-text-disabled` | Testo su elementi disabilitati | <span style="color: var(--bsi-color-text-disabled);">Testo di anteprima</span> |
| `--bsi-color-text-inverse` | Testo su sfondi a contrasto (primary, emphasis) | <span style="color: var(--bsi-color-text-inverse); background-color: var(--bsi-color-background-primary);">Testo di anteprima</span> |
| `--bsi-color-text-accent` | Testo di accento su sfondi a contrasto | <span style="color: var(--bsi-color-text-accent);">Testo di anteprima</span> |
| `--bsi-color-text-success` | Testo per stati di successo | <span style="color: var(--bsi-color-text-success);">Testo di anteprima</span> |
| `--bsi-color-text-success-hover` | Testo di successo per lo stato hover | <span style="color: var(--bsi-color-text-success-hover);">Testo di anteprima</span> |
| `--bsi-color-text-success-active` | Testo di successo per lo stato active | <span style="color: var(--bsi-color-text-success-active);">Testo di anteprima</span> |
| `--bsi-color-text-warning` | Testo per stati di allerta | <span style="color: var(--bsi-color-text-warning);">Testo di anteprima</span> |
| `--bsi-color-text-warning-hover` | Testo di allerta per lo stato hover | <span style="color: var(--bsi-color-text-warning-hover);">Testo di anteprima</span> |
| `--bsi-color-text-warning-active` | Testo di allerta per lo stato active | <span style="color: var(--bsi-color-text-warning-active);">Testo di anteprima</span> |
| `--bsi-color-text-danger` | Testo per errori o pericoli | <span style="color: var(--bsi-color-text-danger);">Testo di anteprima</span> |
| `--bsi-color-text-danger-hover` | Testo di pericolo per lo stato hover | <span style="color: var(--bsi-color-text-danger-hover);">Testo di anteprima</span> |
| `--bsi-color-text-danger-active` | Testo di pericolo per lo stato active | <span style="color: var(--bsi-color-text-danger-active);">Testo di anteprima</span> |
{: .table .mb-4}

### Colore di sfondo

Le variabili `--bsi-color-background-*` controllano i colori di sfondo di componenti e sezioni di pagina.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-background-primary` | Sfondo primario (pulsanti, link, elementi di identità) |
| `--bsi-color-background-primary-light` | Sfondo primario chiaro (alternativo per elementi interattivi) |
| `--bsi-color-background-primary-lighter` | Sfondo primario molto chiaro (definisce sezioni di pagina) |
| `--bsi-color-background-primary-hover` | Sfondo primario per lo stato hover |
| `--bsi-color-background-primary-active` | Sfondo primario per lo stato active/premuto |
| `--bsi-color-background-primary-muted` | Sfondo primario attenuato (sezioni di pagina) |
| `--bsi-color-background-primary-deep` | Sfondo primario scuro (sezioni di pagina) |
| `--bsi-color-background-secondary` | Sfondo secondario (elementi interattivi alternativi) |
| `--bsi-color-background-secondary-light` | Sfondo secondario chiaro |
| `--bsi-color-background-secondary-lighter` | Sfondo secondario molto chiaro |
| `--bsi-color-background-secondary-hover` | Sfondo secondario per lo stato hover |
| `--bsi-color-background-secondary-active` | Sfondo secondario per lo stato active |
| `--bsi-color-background-secondary-deep` | Sfondo secondario molto scuro |
| `--bsi-color-background-accent` | Sfondo con colore di accento |
| `--bsi-color-background-accent-hover` | Sfondo di accento per lo stato hover |
| `--bsi-color-background-muted` | Sfondo molto chiaro (sezioni, paragrafi) |
| `--bsi-color-background-subtle` | Sfondo chiaro (separatori, sezioni) |
| `--bsi-color-background-emphasis` | Sfondo di enfasi (sezioni in evidenza) |
| `--bsi-color-background-inverse` | Sfondo invertito (bianco su sfondi scuri) |
| `--bsi-color-background-disabled` | Sfondo per elementi disabilitati |
| `--bsi-color-background-success` | Sfondo per stati di successo |
| `--bsi-color-background-success-light` | Sfondo di successo chiaro (contenuti medio-lunghi) |
| `--bsi-color-background-success-hover` | Sfondo di successo per lo stato hover |
| `--bsi-color-background-success-active` | Sfondo di successo per lo stato active |
| `--bsi-color-background-warning` | Sfondo per stati di allerta |
| `--bsi-color-background-warning-light` | Sfondo di allerta chiaro (contenuti medio-lunghi) |
| `--bsi-color-background-warning-hover` | Sfondo di allerta per lo stato hover |
| `--bsi-color-background-warning-active` | Sfondo di allerta per lo stato active |
| `--bsi-color-background-danger` | Sfondo per errori o pericoli |
| `--bsi-color-background-danger-light` | Sfondo di pericolo chiaro (contenuti medio-lunghi) |
| `--bsi-color-background-danger-hover` | Sfondo di pericolo per lo stato hover |
| `--bsi-color-background-danger-active` | Sfondo di pericolo per lo stato active |
{: .table .table-cols-equal .mb-4}

### Colore dei bordi

Le variabili `--bsi-color-border-*` controllano i colori dei bordi di componenti e separatori.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-border-primary` | Bordo primario (elementi interattivi cliccabili) |
| `--bsi-color-border-primary-hover` | Bordo primario per lo stato hover |
| `--bsi-color-border-primary-active` | Bordo primario per lo stato active |
| `--bsi-color-border-secondary` | Bordo secondario |
| `--bsi-color-border-secondary-hover` | Bordo secondario per lo stato hover |
| `--bsi-color-border-secondary-active` | Bordo secondario per lo stato active |
| `--bsi-color-border-inverse` | Bordo su sfondi a contrasto |
| `--bsi-color-border-disabled` | Bordo per elementi disabilitati |
| `--bsi-color-border-subtle` | Bordo separatore (sezioni e componenti) |
| `--bsi-color-border-success` | Bordo di successo |
| `--bsi-color-border-success-hover` | Bordo di successo per lo stato hover |
| `--bsi-color-border-success-active` | Bordo di successo per lo stato active |
| `--bsi-color-border-warning` | Bordo di allerta |
| `--bsi-color-border-warning-hover` | Bordo di allerta per lo stato hover |
| `--bsi-color-border-warning-active` | Bordo di allerta per lo stato active |
| `--bsi-color-border-danger` | Bordo di pericolo/errore |
| `--bsi-color-border-danger-hover` | Bordo di pericolo per lo stato hover |
| `--bsi-color-border-danger-active` | Bordo di pericolo per lo stato active |
{: .table .table-cols-equal .mb-4}

### Colore dei link

Le variabili `--bsi-color-link-*` controllano i colori dei link nella pagina.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-link` | Colore base dei link |
| `--bsi-color-link-hover` | Link per lo stato hover |
| `--bsi-color-link-active` | Link per lo stato active |
| `--bsi-color-link-secondary` | Link secondari (richiede sottolineatura) |
| `--bsi-color-link-secondary-hover` | Link secondario per lo stato hover |
| `--bsi-color-link-secondary-active` | Link secondario per lo stato active |
| `--bsi-color-link-inverse` | Link su sfondi a contrasto |
| `--bsi-color-link-disabled` | Link disabilitato |
| `--bsi-color-link-accent` | Link con colore di accento |
| `--bsi-color-link-accent-hover` | Link di accento per lo stato hover |
{: .table .table-cols-equal .mb-4}

### Colori di stato

Le variabili `--bsi-color-status-*` sono alias semantici dei colori di sfondo di stato, utili per colorare elementi indicatori come badge, dot o icone.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-status-danger` | Colore indicatore di pericolo/errore |
| `--bsi-color-status-danger-hover` | Indicatore pericolo per lo stato hover |
| `--bsi-color-status-danger-active` | Indicatore pericolo per lo stato active |
| `--bsi-color-status-success` | Colore indicatore di successo |
| `--bsi-color-status-success-hover` | Indicatore successo per lo stato hover |
| `--bsi-color-status-success-active` | Indicatore successo per lo stato active |
| `--bsi-color-status-warning` | Colore indicatore di allerta |
| `--bsi-color-status-warning-hover` | Indicatore allerta per lo stato hover |
| `--bsi-color-status-warning-active` | Indicatore allerta per lo stato active |
{: .table .table-cols-equal .mb-4}

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
