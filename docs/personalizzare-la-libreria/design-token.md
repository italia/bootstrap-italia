---
layout: docs
title: Design token
description: Come vengono gestiti i design token in Bootstrap Italia
group: personalizzare-la-libreria
toc: true
---

## Introduzione
I **design token** sono alla base del [Design system Italia](https://designers.italia.it/design-system/fondamenti/design-tokens/) e definiscono le principali proprietà visive dell’interfaccia (colori, spaziature, tipografia, ecc.).

In Bootstrap Italia, i design token sono utilizzati come valori predefiniti per le **variabili CSS globali** della libreria, garantendo coerenza visiva.

## Come vengono integrati

I design token non fanno direttamente parte del codice sorgente di Bootstrap Italia, ma vengono inclusi come **dipendenza esterna** installata tramite `npm`. Il package ufficiale è [design-tokens-italia](https://www.npmjs.com/package/design-tokens-italiaa).

Nel file `_root.scss` della libreria, viene importato il file `design-tokens-italia/dist/scss/_variables.scss` tramite la direttiva `@use`:

```scss
@use 'design-tokens-italia/dist/scss/_variables.scss' as tokens;
```

Sebbene nel package ufficiale i design token siano disponibili come variabili sia in formato `.css` che `.scss`, Bootstrap Italia usa quest'ultimo perchè si integra con il sistema di compilazione della libreria. 

Con `@use` viene importato l'oggetto `tokens` come modulo, garantendo isolamento, prevenzione di conflitti e rendendo esplicita la provenienza dei valori.

Questa sintassi esegue due **interpolazioni**:
  - `#{$prefix}`: interpolazione Sass per costruire il nome della variabile CSS.
  - `#{tokens.$it-font-size-1}`: interpolazione Sass per stampare il valore proveniente dal modulo `tokens` nel CSS risultante.
  
Il nome del modulo è obbligatorio perché `$it-font-size-1` non appartiene allo scope locale, ma al modulo.

## Come vengono utilizzati

I design token sono utilizzati come valori predefiniti per le variabili CSS globali, garantendo un collegamento tra il Design system Italia e la libreria stessa.

I nomi delle variabili CSS globali coincidono con quelli dei design token, che si distinguono per il prefisso `it-`.

```scss
  --#{$prefix}font-size-1: #{tokens.$it-font-size-1};
  --#{$prefix}font-size-2: #{tokens.$it-font-size-2};
  --#{$prefix}font-size-3: #{tokens.$it-font-size-3};
```

È stato scelto un naming speculare per alcuni semplici vantaggi pratici:
1. **Tracciabilità**: se il token si chiama, `it-font-size-1`, sapere che esiste una variabile globale `--bsi-font-size-1` rende immediato capire dove finisce quel valore nel codice e come si usa in CSS.  
2. **Coerenza**: mantenere i nomi allineati riduce ambiguità e interpretazioni (es. “come si chiama questa dimensione tipografica nella libreria?”). 
3. **Manutenibilità e scalabilità**: se il nome del token cambia, cambia anche il nome della variabile globale, evitando di dover fare ricerche e sostituzioni manuali.
4. **Facilita documentazione e onboarding**: la documentazione parla una sola lingua, il nome che vedi nelle linee guida lo ritrovi nel CSS.

## Personalizzazione

I design token sono una risorsa esterna alla libreria, pertanto **non possono essere personalizzati** tramite Bootstrap Italia. Per personalizzare un design token, è necessario intervenire nel repository dedicato [design-tokens-italia](https://github.com/italia/design-tokens-italia).

Vai alla documentazione dei [design token](https://designers.italia.it/design-system/fondamenti/design-tokens/) per approfondire.