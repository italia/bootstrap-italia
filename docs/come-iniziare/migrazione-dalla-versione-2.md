---
layout: docs
title: Migrazione dalla versione 2
description: Questa guida ti aiuterà ad aggiornare i tuoi progetti da Bootstrap Italia 2 alla versione 3.
group: come-iniziare
toc: true
---

## Novità

### Il sistema completo di design token

Bootstrap Italia 3 introduce un sistema completo di [design tokens](https://designers.italia.it/design-system/fondamenti/design-tokens/) che integra e sostituisce le variabili Sass tradizionali:

- Coerenza visiva garantita attraverso token globali e semantici.
- Personalizzazione semplificata tramite CSS custom properties e token specifici.
- Allineamento completo e automazioni da [Design Tokens Italia](https://github.com/italia/design-tokens-italia/).
- Supporto nativo per sviluppare temi personalizzati.
- Riduzione significativa bundle CSS.

### Le nuove versioni del carattere Titillium

Bootstrap Italia 3 estende il supporto della [tipografia del Design system .italia](https://designers.italia.it/design-system/fondamenti/tipografia/) a tre versioni del font Titillium mantenendo retro-compatibiltà con le implementazioni precedenti: 
- Supporto per i caratteri tipografici alternativi al Titillium Web (default): [Titillium Sans Pro](https://github.com/chialab/titillium_pro) e [Titillio](https://github.com/pagopa/titillio/).
- Introduzione di un sistema parametrico di caricamento. 

--- 

## Breaking change globali

### Sistema di design token

- **Variabili SCSS**
  - Versione 2: `$primary`, `$secondary`
  - Versione 3: `--bs-color-primary`, `--bs-color-secondary`

- **Spaziature**
  - Versione 2: Valori hardcoded
  - Versione 3: Token semantici (`--bs-spacing-*`)

- **Tipografia**
  - Versione 2: Variabili Sass
  - Versione 3: Token tipografici (`--bs-font-*`)

- **Border Radius**
  - Versione 2: `$border-radius`
  - Versione 3: `--bs-radius-*`

### Classi di utilità

- **`.btn-me` → `.me-2`**
- **`.text-muted` → `.text-body-secondary`**
- ...

### JavaScript API

- **loadFonts** (retro-compatibile)
  - Versione 2.x: `loadFonts('/fonts');`
  - Versione 3.x: `loadFonts('/fonts', { titillium: 'web' });`
- ...

## Componenti con breaking change
...

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
  --bs-color-primary: #0066cc;
  --bs-font-size-base: 1rem;
}
```

### Step 4: ...
...

### Step 5: Verifica layout e componenti
1. Testa tutti i componenti sui browser supportati
2. Verifica accessibilità con tool automatici e verifiche manuali (screen reader, navigazione da tastiera, ...)
3. Controlla performance del bundle aggiornato
4. Valida markup per conformità HTML5

### Tool di migrazione - Lint 

```bash
# Tool per identificare classi obsolete (v2) nei tuoi file migrati 
npm run bootstrap-italia-v3-migration-checker src/
```

## Serve aiuto? 

- [🐛 Segnala bug](https://github.com/italia/bootstrap-italia/issues)
- 💬 [Parlane nel canale #design-system](#) dello Slack Developers Italia

---

**Per migrazioni dalla versione 1.x, consulta prima la [guida archiviata da 1.x a 2.x](/docs/come-iniziare/migrazione-dalla-versione-1/).**