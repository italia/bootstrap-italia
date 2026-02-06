---
layout: docs
title: Migrazione dalla versione 2
description: Questa guida ti aiuterà ad aggiornare i tuoi progetti da Bootstrap Italia 2 alla versione 3.
group: come-iniziare
toc: true
---

{% capture alpha_warning %}
### ⚠️ Versione Alpha

Work in progress.

{% endcapture %}{% include callout.html content=alpha_warning type="warning" %}

## Novità

### Il sistema completo di design tokens e CSS custom properties

Bootstrap Italia 3 usa il sistema completo di [design tokens del Design system .italia](https://designers.italia.it/design-system/fondamenti/design-tokens/) come valori predefiniti per le CSS custom properties, sostituendo le variabili Sass delle versioni precedenti:

- Coerenza visiva garantita con le altre risorse del Design system .italia.
- Allineamento completo (con automazioni) con il repository [Design Tokens Italia](https://github.com/italia/design-tokens-italia/).
- Personalizzazione semplificata tramite CSS custom properties.
- Bundle CSS ottimizzato.

[Vai alla scheda dedicata ai design tokens]({{ site.baseurl }}/docs/come-iniziare/design-tokens/)

### Le nuove versioni del carattere Titillium

Bootstrap Italia 3 estende il supporto della [tipografia del Design system .italia](https://designers.italia.it/design-system/fondamenti/tipografia/), mantenendo retro-compatibiltà con le implementazioni precedenti: 
- Supporto per il carattere tipografico alternativo al Titillium Web (default): [Titillium Sans Pro](https://github.com/chialab/titillium_pro).
- Introduzione di un sistema parametrico di caricamento.

[Vai alla scheda dedicata ai font]({{ site.baseurl }}/docs/come-iniziare/font/)

### Il nuovo aspetto dei componenti per form

Bootstrap Italia 3 cambia l'aspetto dei componenti per costruire moduli (nello specifico: input, select e toggle) per essere coerenti con il nuovo UI Kit Italia v4.

[Vai alla sezione dedicata ai form]({{ site.baseurl }}/docs/form/introduzione/)

--- 

## Breaking change globali

### CSS custom properties basate su Design Tokens Italia

Dalla versione 2 alla versione 3 si passa dalle variabili SCSS alle CSS custom properties (anche chiamate variabili CSS). Queste sono documentate nella scheda di ciascun componente alla voce Properties, e nel relativo file file `.scss`. Le nuove custom properties di Bootstrap Italia referenziano l'ultima versione dei design token, disponibile sul repository [[Design Tokens Italia](https://github.com/italia/design-tokens-italia/)](https://github.com/italia/design-tokens-italia/).

Alcuni esempi:

- **Da variabili SCSS a CSS custom properties***
  - Versione 2: `$primary`, `$secondary`, `$font-size-base`
  - Versione 3: `--bsi-color-primary`, `--bsi-color-secondary`, `--bsi-font-size-base`

- **Tipografia**
  - Versione 2: `$font-family-sans-serif`, `$headings-font-weight`
  - Versione 3: `--bsi-font-family-*`, `--bsi-font-weight-*`, `--bsi-font-size-*`

- **Ombreggiature**
  - Versione 2: `$box-shadow`, `$box-shadow-sm`, `$box-shadow-lg`
  - Versione 3: `--bsi-elevation-*` (low, medium, high)

Le CSS custom properties di ogni componente sono documentate nella tabella Properties delle relative schede di dettaglio. 

### Convenzioni di naming

Bootstrap Italia 3 adotta convenzioni chiare per distinguere classi CSS e variabili:

**Classi CSS**
- Classi Bootstrap standard: **nessun prefisso** (es. `.btn`, `.alert`)
- Classi specifiche Bootstrap Italia: prefisso **`it-*`** (es. `.it-header`, `.it-card`)

**CSS custom properties (variabili CSS)**
- Variabili Bootstrap Italia: prefisso **`--bsi-*`** (es. `--bsi-color-primary`)
- Variabili Bootstrap 5 native: prefisso **`--bs-*`** (es. `--bs-primary`)

Questa distinzione garantisce compatibilità con Bootstrap 5 ed evita conflitti di naming.

### Font loading JS

- **API loadFonts()**
  - Versione 2: `loadFonts('/fonts')`
  - Versione 3: `loadFonts('/fonts', { titillium: 'web' })` o `{ titillium: 'pro' }` per il secondo parametro. Retro-compatibile anche la versione senza il secondo parametro che carica "web" come predefinito. 

## Breaking change componenti
Il markup e i css di molti componenti sono cambiati. Consulta le schede di documentazione dettagliata di ogni componente e fai riferimento al paragrafo "Breaking changes" per approfondire i cambiamenti al markup.

[Esplora la lista dei componenti con il markup cambiato rispetto alla v2]({{ site.baseurl }}/docs/breaking-change/)

## Supporto browser
_Paragrafo da definire_

## Compatibilità con Design system .italia
_Paragrafo da definire_

---

## Guida pratica alla migrazione dalla versione 2

### Aggiornamento dipendenze

```bash
# Aggiorna il pacchetto
npm install bootstrap-italia@^3.0.0
```

### Aggiornamento SCSS

```bash
// Nel tuo main.scss, sostituisci:
@import "~bootstrap-italia/src/scss/bootstrap-italia.scss";

// Con (se usi variabili personalizzate):
// Importa i tuoi token personalizzati DOPO
@import "~bootstrap-italia/src/scss/bootstrap-italia.scss";
@import "custom-tokens";
```

### Da variabili personalizzate a CSS custom properties

```bash
// ❌ Versione 2
$primary: #0066cc;
$font-size-base: 1rem;

// ✅ Versione 3
:root {
  --bsi-color-primary: #0066cc;
  --bsi-font-size-base: 1rem;
}
```

### _Altri passaggi da definire_
_Paragrafo da definire_

### Verifica la migrazione
1. Verifica la resa e la funzionalità di tutti i componenti sui browser supportati e a diverse risoluzioni, fattori di ingrandimento e uso con tastiera e lettori di schermo.
2. Verifica l'accessibilità tecnica per la conformità alle WCAG 2.2 seguendo ad esempio le indicazioni dettagliate del *Workflow per migliorare lo sviluppo dei componenti di .italia* disponibile dalla scheda [fondamento accessibilità](https://designers.italia.it/design-system/fondamenti/accessibilita/).
3. Controlla le performance del bundle aggiornato.

<!-- ### Usa il tool di migrazione - Lint (desiderata)

```bash
# Tool per identificare classi obsolete (v2) nei tuoi file migrati 
npm run bootstrap-italia-v3-migration-checker src/
``` -->

## Serve aiuto?
Hai incontrato problemi di migrazione, o vuoi suggerire un miglioramento? 

- [Apri una segnalazione sul repository](https://github.com/italia/bootstrap-italia/issues)

---

**Per migrazioni da versioni più vecchie della v2, è ancora disponibile la precedente [guida per la migrazione da 1 a 2](/docs/come-iniziare/migrazione-dalla-versione-1/).** Considera che questa non tiene di conto di tutte le breaking change poi occorse nella vita della v2, che puoi recuperare dalla pagina di documentazione delle [breaking change]({{ site.baseurl }}/docs/breaking-change/).