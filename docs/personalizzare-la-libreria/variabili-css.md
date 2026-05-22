---
layout: docs
group: personalizzare-la-libreria
toc: true

title: Variabili CSS
description: Utilizza le variabili CSS di Bootstrap Italia per personalizzare la libreria a runtime.
---

## Introduzione

Bootstrap include molte CSS custom properties (variabili) nel suo CSS compilato per la personalizzazione a runtime senza la necessità di ricompilare i file SCSS. Queste forniscono un accesso facile ai valori comunemente usati come i colori del tema, i breakpoint, e la tipografia principale quando si lavora nell'inspector del browser, in un sandbox di codice, o in generale per la prototipazione. 

Questo approccio sostituisce il precedente sistema basato su variabili Sass, consentendo una personalizzazione più semplice e flessibile che non richiede la ricompilazione dei file sorgente `.scss`.  

Bootstrap Italia usa il prefisso `bsi-` per distinguere le proprie custom properties da quelle native di Bootstrap:

- `--bsi-*`: Custom properties Bootstrap Italia
- `--bs-*`: Custom properties Bootstrap 5 native

Questo approccio sostituisce il precedente sistema basato su variabili Sass, consentendo una personalizzazione più semplice e flessibile che non richiede la ricompilazione dei file sorgente `.scss`.  

