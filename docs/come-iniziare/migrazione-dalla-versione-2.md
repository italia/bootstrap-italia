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

### Il sistema completo di design token

Bootstrap Italia 3 introduce il sistema completo di [design tokens del Design system .italia](https://designers.italia.it/design-system/fondamenti/design-tokens/) che integra e sostituisce le variabili Sass delle precedenti versioni:

- Coerenza visiva garantita attraverso token globali e semantici.
- Personalizzazione semplificata tramite CSS custom properties e token specifici.
- Allineamento completo (con automazioni) con il repository [Design Tokens Italia](https://github.com/italia/design-tokens-italia/).
- Supporto nativo per sviluppare temi personalizzati.
- Riduzione significativa bundle CSS.

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

### Sistema di design token

- **Da variabili SCSS a CSS custom properties***
  - Versione 2: `$primary`, `$secondary`, `$font-size-base`
  - Versione 3: `--bsi-color-primary`, `--bsi-color-secondary`, `--bsi-font-size-base`

- **Spaziature**
  - Versione 2: Classi di utilità con valori hardcoded
  - Versione 3: Token semantici `--bsi-spacing-*` (xs, sm, md, lg, xl)

- **Tipografia**
  - Versione 2: Variabili Sass `$font-family-sans-serif`, `$headings-font-weight`
  - Versione 3: Token tipografici `--bsi-font-family-*`, `--bsi-font-weight-*`, `--bsi-font-size-*` e nuova scala dimensioni basata su rem

- **Border Radius**
  - Versione 2: `$border-radius`, `$border-radius-sm`, `$border-radius-lg`
  - Versione 3: `--bsi-radius-*` (xs, sm, md, lg, xl)

- **Ombre (Shadows)**
  - Versione 2: Classi di utilità con valori hardcoded
  - Versione 3: Token `--bsi-shadow-*` allineati a Design System .italia

### Icone

- **Classi colore icone bianche su sfondo scuro**
  - Versione 2: `.icon-light`, `.icon-white`
  - Versione 3: `.icon-inverse`


### Componenti form

- **Aspetto visivo**
  - Versione 2: Stile Bootstrap Italia v2
  - Versione 3: Nuovo aspetto allineato a UI Kit Italia v4. 

### Font loading JS

- **API loadFonts()**
  - Versione 2: `loadFonts('/fonts')`
  - Versione 3: `loadFonts('/fonts', { titillium: 'web' })` o `{ titillium: 'pro' }`. Retro-compatibile con chiamata senza parametri che usa 'web' come default.

## Breaking change componenti
Molti componenti hanno modifiche al markup o alle classi CSS. Consulta la documentazione specifica di ogni componente per i dettagli.

Esplora la lista dei [componenti con breaking changes al markup]({{ site.baseurl }}/docs/breaking-change/). Fai riferimento alla "Breaking change" nella documentazione di ogni componente per la v3.0.0.

## Supporto browser
...

## Compatibilità con Design system .italia
...

---

## Guida pratica alla migrazione
...

### Step 1: Aggiornamento dipendenze

```bash
# Aggiorna il pacchetto
npm install bootstrap-italia@^3.0.0
```

### Step 2: Aggiornamento SCSS

```bash
// Nel tuo main.scss, sostituisci:
@import "~bootstrap-italia/src/scss/bootstrap-italia.scss";

// Con (se usi custom variables):
// Importa i tuoi token personalizzati DOPO
@import "~bootstrap-italia/src/scss/bootstrap-italia.scss";
@import "custom-tokens";
```

### Step 3: Migrazione variabili personalizzate

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

### Step 4: ...
...

### Step 5: Verifica layout e componenti
1. Testa tutti i componenti sui browser supportati
2. Verifica accessibilità con tool automatici e verifiche manuali (screen reader, navigazione da tastiera, ...)
3. Controlla performance del bundle aggiornato
4. Valida markup per conformità HTML5

{# ### Usa il tool di migrazione - Lint (desiderata)

```bash
# Tool per identificare classi obsolete (v2) nei tuoi file migrati 
npm run bootstrap-italia-v3-migration-checker src/
``` #}

## Serve aiuto?
Hai incontrato problemi di migrazione, o vuoi suggerire un miglioramento? 

- [Apri una segnalazione sul repository](https://github.com/italia/bootstrap-italia/issues)

---

**Per migrazioni dalla versione 1.x, consulta prima la [guida archiviata da 1.x a 2.x](/docs/come-iniziare/migrazione-dalla-versione-1/).**