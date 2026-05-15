---
layout: docs
group: utilites
toc: true

title: Personalizzazione dei colori
description: Come sovrascrivere le variabili CSS di Bootstrap Italia per personalizzare i colori del tema senza ricompilare i sorgenti SCSS.
---

## Introduzione

Bootstrap Italia v3 espone i propri valori di colore come **CSS custom properties** (variabili CSS) con prefisso `--bsi-`, disponibili globalmente sull'elemento `:root`. Questo approccio sostituisce il vecchio sistema basato su classi utility come `.primary-bg` o `.analogue-1-color`, e permette di personalizzare l'aspetto visivo semplicemente sovrascrivendo le variabili in un foglio di stile aggiuntivo, senza dover ricompilare i sorgenti SCSS.

Le variabili seguono una nomenclatura **semantica**: il nome descrive la funzione del colore (es. `--bsi-color-text-primary`, `--bsi-color-background-danger`) e non il valore cromatico. Questo disaccoppia la palette dalla sua applicazione e rende più semplice creare temi personalizzati coerenti.

## Architettura del sistema

I valori di default derivano dal pacchetto [`design-tokens-italia`](https://github.com/italia/design-tokens-italia), che rappresenta la fonte unica dei token di design del Design System Italia. In `_root.scss` questi token vengono mappati nelle variabili `--bsi-*` esposte al browser.

I componenti di Bootstrap Italia referenziano le variabili `--bsi-*` a runtime: sovrascriverle nel tuo CSS fa sì che le modifiche si propaghino automaticamente a tutti i componenti che le utilizzano.

## Variabili del tema

Il gruppo `--bsi-theme-primary-*` rappresenta la palette del colore primario del tema. Questi sono i valori che la maggior parte dei componenti usa direttamente per colori di sfondo, bordi e testo interattivo.

| Variabile CSS | Valore default | Descrizione |
|---|---|---|
| `--bsi-theme-primary` | `#0066cc` | Colore base del tema (Blu Italia) |
| `--bsi-theme-primary-light` | `#bfdfff` | Variante chiara |
| `--bsi-theme-primary-lighter` | `#f2f7fc` | Variante molto chiara |
| `--bsi-theme-primary-subtle` | `#004d99` | Variante attenuata |
| `--bsi-theme-primary-muted` | `#004080` | Variante molto attenuata |
| `--bsi-theme-primary-deep` | `#003366` | Variante scura |

## Variabili semantiche per categoria

Le variabili semantiche descrivono il **ruolo** del colore all'interno dell'interfaccia. Sono organizzate per categoria: testo, sfondo, bordo, link e stato.

### Colore del testo

Le variabili `--bsi-color-text-*` controllano il colore del testo in diversi contesti.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-text-base` | Testo principale della pagina |
| `--bsi-color-text-primary` | Testo con funzione di link o azione primaria |
| `--bsi-color-text-secondary` | Testo alternativo, contenuti di dettaglio |
| `--bsi-color-text-muted` | Testo di supporto, didascalie brevi |
| `--bsi-color-text-disabled` | Testo su elementi disabilitati |
| `--bsi-color-text-inverse` | Testo su sfondi a contrasto (primary, emphasis) |
| `--bsi-color-text-accent` | Testo di accento su sfondi a contrasto |
| `--bsi-color-text-success` | Testo per stati di successo |
| `--bsi-color-text-success-hover` | Testo di successo — stato hover |
| `--bsi-color-text-success-active` | Testo di successo — stato active |
| `--bsi-color-text-warning` | Testo per stati di allerta |
| `--bsi-color-text-warning-hover` | Testo di allerta — stato hover |
| `--bsi-color-text-warning-active` | Testo di allerta — stato active |
| `--bsi-color-text-danger` | Testo per errori o pericoli |
| `--bsi-color-text-danger-hover` | Testo di pericolo — stato hover |
| `--bsi-color-text-danger-active` | Testo di pericolo — stato active |

### Colore di sfondo

Le variabili `--bsi-color-background-*` controllano i colori di sfondo di componenti e sezioni di pagina.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-background-primary` | Sfondo primario (bottoni, link, elementi brand) |
| `--bsi-color-background-primary-light` | Sfondo primario chiaro (alternativo per elementi interattivi) |
| `--bsi-color-background-primary-lighter` | Sfondo primario molto chiaro (definisce sezioni di pagina) |
| `--bsi-color-background-primary-hover` | Sfondo primario — stato hover |
| `--bsi-color-background-primary-active` | Sfondo primario — stato active/premuto |
| `--bsi-color-background-primary-muted` | Sfondo primario attenuato (sezioni di pagina) |
| `--bsi-color-background-primary-deep` | Sfondo primario scuro (sezioni di pagina) |
| `--bsi-color-background-secondary` | Sfondo secondario (elementi interattivi alternativi) |
| `--bsi-color-background-secondary-light` | Sfondo secondario chiaro |
| `--bsi-color-background-secondary-lighter` | Sfondo secondario molto chiaro |
| `--bsi-color-background-secondary-hover` | Sfondo secondario — stato hover |
| `--bsi-color-background-secondary-active` | Sfondo secondario — stato active |
| `--bsi-color-background-secondary-deep` | Sfondo secondario molto scuro |
| `--bsi-color-background-accent` | Sfondo con colore di accento |
| `--bsi-color-background-accent-hover` | Sfondo di accento — stato hover |
| `--bsi-color-background-muted` | Sfondo molto chiaro (sezioni, paragrafi) |
| `--bsi-color-background-subtle` | Sfondo chiaro (separatori, sezioni) |
| `--bsi-color-background-emphasis` | Sfondo di enfasi (sezioni in evidenza) |
| `--bsi-color-background-inverse` | Sfondo invertito (bianco su sfondi scuri) |
| `--bsi-color-background-disabled` | Sfondo per elementi disabilitati |
| `--bsi-color-background-success` | Sfondo per stati di successo |
| `--bsi-color-background-success-light` | Sfondo di successo chiaro (contenuti medio-lunghi) |
| `--bsi-color-background-success-hover` | Sfondo di successo — stato hover |
| `--bsi-color-background-success-active` | Sfondo di successo — stato active |
| `--bsi-color-background-warning` | Sfondo per stati di allerta |
| `--bsi-color-background-warning-light` | Sfondo di allerta chiaro (contenuti medio-lunghi) |
| `--bsi-color-background-warning-hover` | Sfondo di allerta — stato hover |
| `--bsi-color-background-warning-active` | Sfondo di allerta — stato active |
| `--bsi-color-background-danger` | Sfondo per errori o pericoli |
| `--bsi-color-background-danger-light` | Sfondo di pericolo chiaro (contenuti medio-lunghi) |
| `--bsi-color-background-danger-hover` | Sfondo di pericolo — stato hover |
| `--bsi-color-background-danger-active` | Sfondo di pericolo — stato active |

### Colore dei bordi

Le variabili `--bsi-color-border-*` controllano i colori dei bordi di componenti e separatori.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-border-primary` | Bordo primario (elementi interattivi cliccabili) |
| `--bsi-color-border-primary-hover` | Bordo primario — stato hover |
| `--bsi-color-border-primary-active` | Bordo primario — stato active |
| `--bsi-color-border-secondary` | Bordo secondario |
| `--bsi-color-border-secondary-hover` | Bordo secondario — stato hover |
| `--bsi-color-border-secondary-active` | Bordo secondario — stato active |
| `--bsi-color-border-inverse` | Bordo su sfondi a contrasto |
| `--bsi-color-border-disabled` | Bordo per elementi disabilitati |
| `--bsi-color-border-subtle` | Bordo separatore (sezioni e componenti) |
| `--bsi-color-border-success` | Bordo di successo |
| `--bsi-color-border-success-hover` | Bordo di successo — stato hover |
| `--bsi-color-border-success-active` | Bordo di successo — stato active |
| `--bsi-color-border-warning` | Bordo di allerta |
| `--bsi-color-border-warning-hover` | Bordo di allerta — stato hover |
| `--bsi-color-border-warning-active` | Bordo di allerta — stato active |
| `--bsi-color-border-danger` | Bordo di pericolo/errore |
| `--bsi-color-border-danger-hover` | Bordo di pericolo — stato hover |
| `--bsi-color-border-danger-active` | Bordo di pericolo — stato active |

### Colore dei link

Le variabili `--bsi-color-link-*` controllano i colori dei link nella pagina.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-link` | Colore base dei link |
| `--bsi-color-link-hover` | Link — stato hover |
| `--bsi-color-link-active` | Link — stato active |
| `--bsi-color-link-secondary` | Link secondari (richiede sottolineatura) |
| `--bsi-color-link-secondary-hover` | Link secondario — stato hover |
| `--bsi-color-link-secondary-active` | Link secondario — stato active |
| `--bsi-color-link-inverse` | Link su sfondi a contrasto |
| `--bsi-color-link-disabled` | Link disabilitato |
| `--bsi-color-link-accent` | Link con colore di accento |
| `--bsi-color-link-accent-hover` | Link di accento — stato hover |

### Colori di stato

Le variabili `--bsi-color-status-*` sono alias semantici dei colori di sfondo di stato, utili per colorare elementi indicatori come badge, dot o icone.

| Variabile CSS | Utilizzo |
|---|---|
| `--bsi-color-status-danger` | Colore indicatore di pericolo/errore |
| `--bsi-color-status-danger-hover` | Indicatore pericolo — stato hover |
| `--bsi-color-status-danger-active` | Indicatore pericolo — stato active |
| `--bsi-color-status-success` | Colore indicatore di successo |
| `--bsi-color-status-success-hover` | Indicatore successo — stato hover |
| `--bsi-color-status-success-active` | Indicatore successo — stato active |
| `--bsi-color-status-warning` | Colore indicatore di allerta |
| `--bsi-color-status-warning-hover` | Indicatore allerta — stato hover |
| `--bsi-color-status-warning-active` | Indicatore allerta — stato active |

## Come personalizzare i colori

Per personalizzare i colori non è necessario ricompilare i sorgenti SCSS. È sufficiente caricare un foglio di stile aggiuntivo **dopo** `bootstrap-italia.min.css` e sovrascrivere le variabili sull'elemento `:root`.

### Cambiare il colore primario del tema

La maggior parte dei componenti usa direttamente le variabili del gruppo `--bsi-theme-primary-*`. Per cambiare il colore primario del tema è quindi sufficiente sovrascrivere questo gruppo:

```css
/* custom.css — da caricare dopo bootstrap-italia.min.css */
:root {
  --bsi-theme-primary:         #005C2B;
  --bsi-theme-primary-deep:    #003D1C;
  --bsi-theme-primary-muted:   #004D24;
  --bsi-theme-primary-subtle:  #004D24;
  --bsi-theme-primary-light:   #C8E6D4;
  --bsi-theme-primary-lighter: #EDF7F1;
}
```

### Personalizzare variabili semantiche singole

Per interventi più mirati — ad esempio cambiare solo il colore dei bordi primari o il colore dei link — è possibile sovrascrivere singole variabili semantiche:

```css
:root {
  --bsi-color-border-primary:       #005C2B;
  --bsi-color-link:                 #005C2B;
  --bsi-color-link-hover:           #003D1C;
}
```

### Personalizzare i colori di stato

I colori di successo, allerta ed errore possono essere personalizzati indipendentemente:

```css
:root {
  --bsi-color-background-success:       #1a6b3c;
  --bsi-color-background-success-light: #d4edda;
  --bsi-color-text-success:             #1a6b3c;
  --bsi-color-border-success:           #1a6b3c;
  --bsi-color-status-success:           #1a6b3c;
}
```

{% capture callout %}
#### Accessibilità

Quando si personalizzano i colori verificare sempre che il contrasto tra testo e sfondo soddisfi i requisiti WCAG 2.1 (rapporto minimo 4.5:1 per testo normale, 3:1 per testo grande). Strumenti come [Contrast Checker](https://webaim.org/resources/contrastchecker/) possono aiutare nella verifica.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Migrazione dalla versione 2

Nella versione 2 di Bootstrap Italia i colori erano applicati tramite classi CSS utility legate direttamente alla palette (es. `.primary-bg`, `.analogue-1-color`). In v3 questo sistema è stato rimosso e sostituito con variabili CSS semantiche.

La tabella seguente riporta le corrispondenze principali per le classi che avevano un equivalente semantico. Le classi elencate come rimosse non hanno un sostituto diretto: i casi d'uso che le richiedevano devono essere valutati in base al contesto e alla funzione del colore, scegliendo la variabile semantica più appropriata.

### Colori primari

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.primary-bg` | `background-color: var(--bsi-color-background-primary)` |
| `.primary-color` | `color: var(--bsi-color-text-primary)` |
| `.primary-border-color` | `border-color: var(--bsi-color-border-primary)` |
| `.primary-bg-a*` / `.primary-bg-b*` / `.primary-bg-c*` | Rimosso — usare le varianti `--bsi-theme-primary-light`, `-lighter`, `-subtle`, `-muted`, `-deep` |

### Colori analoghi

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.analogue-1-bg` / `.analogue-1-color` / `.analogue-1-border-color` | Rimosso — nessun sostituto diretto |
| `.analogue-2-bg` / `.analogue-2-color` / `.analogue-2-border-color` | Rimosso — nessun sostituto diretto |
| Varianti `.analogue-*-bg-a*` / `.analogue-*-bg-b*` | Rimosso — nessun sostituto diretto |

### Colori complementari e triadici

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.complementary-1-bg` / `.complementary-1-color` / `.complementary-1-border-color` | Rimosso — nessun sostituto diretto |
| `.complementary-2-bg` / `.complementary-2-color` / `.complementary-2-border-color` | Rimosso — nessun sostituto diretto |
| `.complementary-3-bg` / `.complementary-3-color` / `.complementary-3-border-color` | Rimosso — nessun sostituto diretto |
| Varianti `.complementary-*-bg-a*` / `.complementary-*-bg-b*` | Rimosso — nessun sostituto diretto |

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
| Varianti `.neutral-*-bg-a*` / `.neutral-*-bg-b*` | Rimosso — nessun sostituto diretto |

### Grigi chiari

| v2 — Classe CSS | v3 — Variabile CSS |
|---|---|
| `.lightgrey-bg-a*` / `.lightgrey-bg-b*` / `.lightgrey-bg-c*` | Rimosso — nessun sostituto diretto |
| `.lightgrey-color-*` | Rimosso — nessun sostituto diretto |
| `.lightgrey-border-color-*` | Rimosso — nessun sostituto diretto |
