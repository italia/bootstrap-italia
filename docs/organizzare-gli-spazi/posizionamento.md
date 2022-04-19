---
layout: docs
title: Posizionamento
description: Classi per impostare la posizione di un elemento.
group: organizzare-gli-spazi
toc: true
---

## Valori comuni

Classi per il posizionamento, non sono presenti varianti per la gestione responsive.

```html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

## Posizione fissa in alto

Posiziona un elemento in alto nel viewport. Attraverso l'utilizzo di ogni classe `fixed-*` l'elemento assumerà una posizione
_fixed_, ancorandosi al viewport (cioè la finestra del browser) ed uscendo quindi dal normale flusso di posizionamento
del documento.
Assicurati di comprendere appieno le implicazioni della [posizione `fixed`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed)
nel tuo progetto: potrebbe essere necessario utilizzare CSS aggiuntivi.

```html
<div class="fixed-top">...</div>
```

## Posizione fissa in basso

Specularmente al paragrafo precedente, posiziona un elemento in basso al viewport.

```html
<div class="fixed-bottom">...</div>
```

## Sticky top

Posiziona un elemento in alto nel viewport, ma solo dopo che nella pagina avviene uno scroll verticale che lo ancori in quella posizione.
La classe `.sticky-top` usa la proprietà `position: sticky` supportata da tutti i browser moderni.

```html
<div class="sticky-top">...</div>
```
