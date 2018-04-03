---
layout: docs
title: Modificare componenti
description: Come modificare i componenti e i moduli esistenti, e crearne di nuovi
group: come-iniziare
toc: true
---


## Tema Bootstrap Italia

Il tema è generato secondo le direttive mostrate alla [pagina relativa alla creazione di temi][bootstrap-themes] sul sito Bootstrap.

I componenti di Bootstrap Italia sono divisi in due macro-aree: i [Componenti _Base_]({{ site.baseurl }}/docs/componenti/) e i [Componenti _Aggiuntivi_]({{ site.baseurl }}/docs/componenti-aggiuntivi/).
 
#### Componenti base

I componenti _base_ sono quelli già presenti nella libreria Bootstrap, che di conseguenza avranno una corrispondente voce in inglese anche nella [documentazione][documentazione-bootstrap] di Bootstrap stesso.

Tali componenti, all'interno di questo tema Bootstrap Italia, sono personalizzati nello stile, nell'accessibilità e nelle funzionalità per rispondere alle [Linee guida di design per i servizi web della PA][linee-guida].

#### Componenti aggiuntivi

I componenti _aggiuntivi_, al contrario, sono quei componenti che supportano l'implementazione delle [Linee guida di design per i servizi web della PA][linee-guida], ma che non sono presenti nella libreria Bootstrap.

Sul web, essi possono anche essere identificati come _plugin_, ma qui si è preferito mantenere la denominazione "componente" per sottolinearne l'uniformità di contesto con i componenti di base, con i quali condividono struttura e utilizzo.

## Struttura di un componente

Ogni componente può avere una personalizzazione di stile e di funzionalità attraverso l'utilizzo di file `scss` e `javascript`.

I componenti base ereditano quindi stili e funzionalità da [Bootstrap {{ site.bootstrap_version }}][documentazione-bootstrap], di cui si potrà trovare il codice sorgente nella cartella rispettiva all'interno di `node_modules`. Ovviamente, tale codice servirà soltanto come riferimento e non andrà modificato ma esteso come segue:
 
- per la personalizzazione dello stile di tali componenti, andranno sovrascritte o aggiunte variabili e classi nella cartella `src/scss`. Si può notare in particolare come il file `bootstrap-italia.scss` importi ed estenda gli stili e le funzioni di base di Bootstrap.
- per l'implementazione di funzionalità `javascript`, si farà invece riferimento alla cartella `src/js`.

Queste due cartelle, assieme alla cartella `docs` per la stesura della documentazione (vedi di seguito), sono le uniche cartelle dove avviene la personalizzazione dei componenti.

Il codice presente in queste cartelle, attraverso alcune procedure di compilazione (si può vedere il comando `gulp build` nel file `gulpfile.js`), viene usato per "sovrascrivere" il codice già presente in Bootstrap e ne esporta una versione personalizzata (un tema) alle cartelle `dist/js` e `dist/css`.

Informazioni aggiuntive si possono trovare alla [pagina relativa alla creazione di temi][documentazione-bootstrap-theming] sul sito Bootstrap.

## Documentazione dei componenti

Ogni componente ha una pagina o un paragrafo nella documentazione alla cartella `/docs`, che ne descrive comportamenti, varianti e utilizzo.

Tale documentazione è redatta in codice `markdown` ed è comprensiva di una breve descrizione testuale corredata da un esempio di applicazione in codice `html`.

[documentazione-bootstrap]: https://getbootstrap.com/docs/4.0/getting-started/introduction/
[documentazione-bootstrap-theming]: https://getbootstrap.com/docs/4.0/getting-started/theming/
[linee-guida]: https://design-italia.readthedocs.io/it/stable/index.html

