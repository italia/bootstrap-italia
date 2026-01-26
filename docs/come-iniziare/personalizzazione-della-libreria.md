---
layout: docs
title: Personalizzazione della libreria
description: Come personalizzare Bootstrap Italia 3 sovrascrivendo i valori predefiniti.
group: come-iniziare
toc: true
---

## Introduzione

Bootstrap Italia eredita ed estende tutte le variabili di Bootstrap, personalizzando alcuni valori per adattarsi alle esigenze della Pubblica Amministrazione italiana. Un esempio è il colore primario blu `#0066CC`, caratteristico della libreria.

L'utilizzo del blu `#0066CC` dovrebbe essere riservato alle amministrazioni centrali dello Stato. Per altre organizzazioni è necessario personalizzare i valori per le proprie necessità.

Bootstrap Italia dalla versione 3 usa **CSS custom properties**, semplificando la personalizzazione e permettendo modifiche **runtime** senza ricompilazione.

## Personalizzazione base

Sovrascrivi le variabili `--bsi-*` nel tuo CSS o SCSS dedicato, ad esempio:
```css
:root {
  /* Colore primario personalizzato */
  --bsi-color-primary: #FF3333; 
}
```

## CSS Custom properties disponibili

Ogni componente documenta le proprie custom properties nella tabella **Properties**:
- [Button]({{ site.baseurl }}/docs/componenti/button/#properties)
- [Alert]({{ site.baseurl }}/docs/componenti/alert/#properties)
- [Vedi tutti i componenti]({{ site.baseurl }}/docs/componenti/introduzione/)

## Personalizzazione avanzata

Per modifiche strutturali complesse, consulta:
- [Design tokens]({{ site.baseurl }}/docs/come-iniziare/design-tokens/) - architettura del sistema
- [Modificare componenti]({{ site.baseurl }}/docs/come-iniziare/modificare-componenti/) - modificare SCSS sorgente