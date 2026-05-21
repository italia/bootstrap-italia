---
layout: docs
title: Personalizzazione della libreria
description: Come personalizzare Bootstrap Italia 3 sovrascrivendo i valori predefiniti.
group: personalizzare
toc: true
---

## Introduzione

Bootstrap Italia eredita ed estende tutte le variabili di Bootstrap, personalizzando alcuni valori per adattarsi alle esigenze della Pubblica Amministrazione italiana. Un esempio è il colore primario blu `#0066CC`, caratteristico della libreria.

Il blu #0066CC è riservato alle amministrazioni centrali dello Stato. Le altre organizzazioni devono personalizzare i valori secondo le proprie necessità.

Dalla versione 3, Bootstrap Italia usa le CSS custom properties. Questo semplifica la personalizzazione e permette modifiche runtime senza ricompilare il codice.

## Architettura del sistema

I valori di default dei colori derivano dal pacchetto [`design-tokens-italia`](https://github.com/italia/design-tokens-italia), che rappresenta la fonte unica dei token di design del Design System Italia. 

In `_root.scss` questi token vengono mappati nelle variabili `--bsi-*` esposte al browser.

I componenti di Bootstrap Italia referenziano le variabili `--bsi-*` a runtime: sovrascriverle nel tuo CSS fa sì che le modifiche si propaghino automaticamente a tutti i componenti che le utilizzano.

## Personalizzazione base

Sovrascrivi le variabili `--bsi-*` nel tuo CSS o SCSS dedicato, ad esempio:
```css
:root {
  /* Colore del testo primario personalizzato */
  --bsi-color-text-primary: #FF3333; 
}
```

## CSS Custom properties disponibili

Ogni componente documenta le proprie custom properties nella tabella **Properties**:
- [Button]({{ site.baseurl }}/docs/componenti/buttons/#properties)
- [Alert]({{ site.baseurl }}/docs/componenti/alert/#properties)
- [Vedi tutti i componenti]({{ site.baseurl }}/docs/componenti/introduzione/)

## Personalizzazione avanzata

Per modifiche strutturali complesse, consulta:
- [Design tokens]({{ site.baseurl }}/docs/come-iniziare/design-tokens/) - architettura del sistema
- [Modificare componenti]({{ site.baseurl }}/docs/come-iniziare/modificare-componenti/) - modificare SCSS sorgente