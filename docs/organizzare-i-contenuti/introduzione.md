---
layout: docs
group: organizzare-i-contenuti
description: Classi e utilità per organizzare le diverse tipologie di contenuti all'interno di una pagina web
toc: false
title: Introduzione
redirect_from:
  - "/organizzare-i-contenuti/"
  - "/docs/organizzare-i-contenuti/"
---

In questa sezione sono mostrate utilità per l'organizzazione dei contenuti, come testi, liste, tabelle e immagini.

Di seguito viene introdotto _"Reboot"_, una collezione di regole CSS applicate agli elementi HTML che Bootstrap utilizza per definire una base consistente di stile su cui è costruito tutto il resto.

## Reboot

Reboot è una piccola parte del CSS di Bootstrap che si basa su Normalize e "inizializza" lo stile di molti elementi HTML
attraverso il solo utilizzo di selettori di tipo (quindi non selettori di classe).

Ogni altro stile aggiuntivo è invece applicato da Bootstrap, e quindi da Bootstrap Italia, con l'utilizzo di selettori di classe.
Ad esempio, la parte Reboot di Bootstrap inizializza gli stili per le tabelle utilizzando `<table>`, ed in seguito
definisce `.table`, `.table-bordered` ed altri.

Di seguito, alcuni dettagli di ciò che Reboot implementa e che sarebbe bene seguire:

- Aggiorna alcuni valori di default del browser con l'utilizzo di `rem` anziché `em` per avere componenti più semplicemente ridimensionabili.
- Evita `margin-top`. Margini verticali possono collassare tra loro, portando risultati inattesi a seconda del dispositivo.  
- Per avere una migliore ridimensionabilità a diverse dimensioni, elementi block dovrebbero usare `rem` per i margini.
- Lascia ogni dichiarazione relativa alle proprietà dei testi (`font-`) al minimo, usando il default `inherit` quando possibile.


### Default di pagina

Gli elementi `<html>` e `<body>` stessi impostano attraverso Reboot alcuni comportamenti, tra cui:

- `box-sizing` è settato a `border-box` globalmente, anche per `*::before` e `*::after`. Questo assicura che la dimensione dichiarata non aumenti mai per la presenza di padding o bordi.
- `<html>` non imposta una dimensione di base per `font-size`, assumendola in 16px, come da default del browser.
- `<body>` imposta un `font-size: 1rem`, per un migliore ridimensionamento dei testi via media-queries, rispettando le preferenze degli utenti e assicurando così un approccio più accessibile.
- `<body>` imposta anche `font-family`, `line-height`, e `text-align` globali, per evitare inconsistenze in alcuni elementi dei form.
- `<body>` imposta `background-color` a `#fff`.

Reboot si occupa uniformare e semplificare comportamenti tra diversi browser e dispositivi anche inizializzando alcune regole su tabelle, form, attributi, ecc.

Per maggiori informazioni si rimanda alla [pagina descrittiva di Reboot](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/content/reboot/) sul sito di Bootstrap (in inglese).
