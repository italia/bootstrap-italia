---
layout: docs
title: Design Tokens
description: Sistema di design token per Bootstrap Italia basato sui token ufficiali del Design system .italia
group: come-iniziare
toc: true
---

## Introduzione

I **design tokens** sono i valori atomici del Design System .italia che definiscono le proprietà visive di tutti i componenti. Bootstrap Italia dalla v3 integra completamente questi token per garantire coerenza, personalizzazione e facilità di manutenzione.

{% capture callout %}
### Sincronizzazione automatica

Questa documentazione è sincronizzata automaticamente con la repository ufficiale del progetto Design Tokens Italia [italia/design-tokens-italia](https://github.com/italia/design-tokens-italia). I valori mostrati corrispondono alla versione `@latest` dei token.
{% endcapture %}{% include callout.html content=callout type="info" %}

## Struttura dei Token
I design tokens sono organizzati in due livelli:

### Token Globali (Global Tokens)
Valori primitivi che definiscono la palette di base del sistema.

### Token Semantici (Semantic Tokens)
Valori che hanno un significato specifico nel contesto del design system e referenziano i token globali.

## Colori

{% comment %}
<!-- AUTO-GENERATED: Questa sezione viene generata automaticamente dai JSON -->
<!-- Source: https://github.com/italia/design-tokens-italia/tree/main/tokens -->
{% endcomment %}

<div class="design-tokens-section" id="color-tokens">
  <!-- Placeholder per l'import automatico dei color tokens -->
  <div class="token-group">
    <h4>Primary</h4>
    <div class="color-token-grid">
      <!-- Sarà popolato automaticamente da script -->
    </div>
  </div>
  <div class="token-group">
    <h4>Semantic Colors</h4>
    <div class="color-token-grid">
      <!-- Sarà popolato automaticamente da script -->
    </div>
  </div>
</div>

## Tipografia

### Font Families

<div class="design-tokens-section" id="typography-tokens">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Token</th>
        <th>Valore</th>
        <th>CSS Custom Property</th>
        <th>Utilizzo</th>
      </tr>
    </thead>
    <tbody id="typography-tokens-table">
      <!-- Popolato automaticamente -->
    </tbody>
  </table>
</div>

### Font Sizes
<div class="design-tokens-section" id="font-size-tokens">
  <div class="font-size-preview">
    <!-- Popolato automaticamente con preview delle dimensioni -->
  </div>
</div>

## Spaziature

### Spacing scale
<div class="design-tokens-section" id="spacing-tokens">
  <div class="spacing-scale">
    <!-- Popolato automaticamente con scala spaziature -->
  </div>
</div>

### Border radius
<div class="design-tokens-section" id="radius-tokens">
  <div class="radius-examples">
    <!-- Esempi di border radius popolati automaticamente -->
  </div>
</div>

### Ombre
<div class="design-tokens-section" id="shadow-tokens">
  <div class="shadow-examples">
    <!-- Esempi di shadow popolati automaticamente -->
  </div>
</div>

## Utilizzo nei componenti

### CSS Custom properties 
Tutti i design tokens sono esposti come CSS custom properties:

```scss
/* Esempio di utilizzo */
.my-component {
  color: var(--bs-color-text-primary);
  background: var(--bs-color-background-base);
  padding: var(--bs-spacing-md);
  border-radius: var(--bs-radius-sm);
}
```

#### Personalizzazione
Puoi sovrascrivere i token definendo le CSS custom property:

```scss
:root {
  --bs-color-primary: #your-brand-color;
  --bs-spacing-base: 1rem;
}
```

## Temi 

### Tema scuro
...

### Temi personalizzati
...

## Script di import
{% comment %}
<!-- Script per l'import automatico dai JSON del repository design-tokens-italia -->
{% endcomment %}

```html
<script>
// Script che verrà implementato per importare automaticamente 
// i token dalla repository italia/design-tokens
(function() {
  'use strict';
  
  // URL dei JSON dei token
  const TOKEN_URLS = {
    global: 'https://raw.githubusercontent.com/italia/design-tokens-italia/main/tokens/global.json',
    semantic: 'https://raw.githubusercontent.com/italia/design-tokens-italia/main/tokens/semantic.json'
  };
  
  // Funzioni per popolare le sezioni
  async function loadTokens() {
    try {
      const responses = await Promise.all([
        fetch(TOKEN_URLS.global),
        fetch(TOKEN_URLS.semantic)
      ]);
      
      const [globalTokens, semanticTokens] = await Promise.all(
        responses.map(r => r.json())
      );
      
      populateColorTokens(globalTokens, semanticTokens);
      populateTypographyTokens(globalTokens, semanticTokens);
      populateSpacingTokens(globalTokens, semanticTokens);
      // ... altre funzioni di popolamento
      
    } catch (error) {
      console.error('Errore nel caricamento dei design tokens:', error);
      showFallbackContent();
    }
  }
  
  function populateColorTokens(global, semantic) {
    // Implementazione per popolare la sezione colori
  }
  
  function populateTypographyTokens(global, semantic) {
    // Implementazione per popolare la sezione tipografia
  }
  
  function populateSpacingTokens(global, semantic) {
    // Implementazione per popolare la sezione spacing
  }
  
  function showFallbackContent() {
    // Mostra contenuto statico in caso di errore
  }
  
  // Carica i token quando la pagina è pronta
  document.addEventListener('DOMContentLoaded', loadTokens);
})();
</script>
```
