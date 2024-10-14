---
layout: docs
title: Skiplinks
description: Gli Skiplinks consentono agli utenti di accedere direttamente al contenuto principale della pagina saltando l'header e il menu di navigazione.
group: menu-di-navigazione
toc: true
---

È un componente particolarmente utile per coloro che utilizzando screen reader e/o navigano utilizzando la tastiera.

Gli elementi Skiplinks sono contraddistinti dalle classi:

- `visually-hidden`: renderizzati solo per gli screen reader;
- `visually-hidden-focusable`: renderizzati solo al focus.

Per avere lo stile corretto quando visibili è importante racchiuderli in un elemento contenitore con classe `skiplinks`.

Per attivare la funzionalità si digita da tastiera il tasto: **TAB**.

## Base 
Inserire come primi elementi della pagina alcuni collegamenti che portino ai contenuti principali, permettendo di saltare blocchi ripetuti su ogni pagina come posso essere l'intestazione e il menu di navigazione. 

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="skiplinks">
  <a class="visually-hidden-focusable" href="#">Vai al contenuto principale</a>
  <a class="visually-hidden-focusable" href="#">Vai al piede di pagina</a>
</div>
{% endcapture %}{% include example.html content=example %}

## Come elenco
Se la pagina è particolarmente complessa si possono inserire più collegamenti che permettano di saltare direttamente ai blocchi principali. 

Nell'esempio che segue, oltre aiin salti diretti al menu di pagina, al contenuto principale e al piede, sono stati inseriti due collegamenti in più su cui è bene mettere attezione: 

- un salto al modulo di feedback per permettere al visitatore di esprimere un giudizio, presente in pagina prima del piede. Il testo dello skiplink anticipa già la domanda;
- un salto al collegamento alla Dichirazione di accessibilità messo a disposizione nel piede, per permettere a chi naviga con strumenti assistivi di trovarlo facilmente senza dover scansionare tutti i contenuti. Cosa particolarmente importante per permettere alle persone di arrivare facilmente al metodo di feedback per effettuare eventuali segnalazioni.  

Si consiglia in ogni caso di non eccedere con il numero di elementi di questo elenco, utile se rimane entro le 3 o 4 voci. Diventerebbe altrimenti esso stesso bisognoso di poter essere saltato.  

{% capture callout %}
#### Accessibilità

In questo caso è utile implementarlo come elemento `nav` con una `aria-label` dedicata che ne spieghi l'uso. 
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Elenco{% endcomment %}
{% capture example %}
<nav class="skiplinks" aria-label="Scorciatoie">
  <ul>
    <li class="visually-hidden-focusable"><a href="#">Vai al menu</a></li>
    <li class="visually-hidden-focusable" ><a href="#">Vai al contenuto</a></li>
    <li class="visually-hidden-focusable" ><a href="#">Questa pagina ti è stata utile?</a></li>
    <li class="visually-hidden-focusable" ><a href="#">Vai al collegamento alla Dichiarazione di accessibilità</a></li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %} 

## Come visualizzare gli skiplinks su MacOS

### Chrome

Per attivare la funzionalità si digita da tastiera il tasto: **TAB**.

### Safari

Per attivare la navigazione via **TAB** è necessario:

1. Aprire il menu Safari > Preferenze
2. Cliccare sulla tab Avanzate
3. Selezionare “Premi tabulatore per evidenziare tutti gli elementi della pagina web”.

Alternativamente è possibile navigare gli elementi usando **opzione+TAB**

### Firefox

Le impostazioni di default di macOS non consentono la navigazione di tutti gli elementi interattivi di un sito con l'uso del pulsante TAB.
Per attivare questa modalità è necessario modificare le preferenze di sistema come segue:

1. Aprire il Menu Apple > Preferenze di Sistema, quindi fare clic su Tastiera.
2. Fare clic su Abbreviazioni.
3. Nella parte inferiore della finestra delle preferenze, selezionare “Usa la navigazione da tastiera per spostare la selezione tra i controlli”.

Una volta selezionata questa opzione gli skiplinks saranno attivabili su Firefox con il pulsante **TAB**.

Vedi anche la [guida ufficiale di Apple](https://support.apple.com/it-it/HT204434).
