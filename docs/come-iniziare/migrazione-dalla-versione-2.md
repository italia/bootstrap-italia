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

[Vai alla scheda di dettaglio delle breaking change]({{ site.baseurl }}/docs/breaking-change/)

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

### Usa il tool di migrazione - Lint (desiderata, da valutare)

```bash
# Tool per identificare classi obsolete (v2) nei tuoi file migrati 
npm run bootstrap-italia-v3-migration-checker src/
```

## Serve aiuto?
Hai incontrato problemi di migrazione, o vuoi suggerire un miglioramento? 

- [Apri una segnalazione sul repository](https://github.com/italia/bootstrap-italia/issues)

---

**Per migrazioni dalla versione 1.x, consulta prima la [guida archiviata da 1.x a 2.x](/docs/come-iniziare/migrazione-dalla-versione-1/).**