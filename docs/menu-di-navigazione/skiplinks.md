---
layout: docs
title: Skiplinks
description: Gli Skiplinks sono scorciatoie di navigazione che consentono agli utenti di andare direttamente ai contenuti principali della pagina.
group: menu-di-navigazione
toc: true
---

## Introduzione 

È un componente che permette a persone che navigano sequenzialmente i contenuti di aver accesso più facile a tutti i contenuti principali della pagina. È particolarmente utile per coloro che per navigare usano la tastiera o tecnologie assistive come i lettori di schermo.

Deve essere il primo contenuto che si incontra nella pagina. Se è presente l'elemento `<header` suggeriamo di integrarlo come primo suo elemento figlio, in modo da comprenderlo in ogni caso in un landmark di pagina. 

Gli elementi del componente Skiplinks possono essere contraddistinti con la classe `.visually-hidden-focusable` per mostrarli a schermo solo al focus. In questo caso, è importante racchiuderli in un elemento contenitore con classe `.skiplinks` per avere lo stile corretto.

Per navigare tra gli elementi digita da tastiera il tasto: **TAB** (tabulazione).

## Base 
Inserire come primo elemento della pagina alcune scorciatoie di navigazione che portino ai contenuti principali, permettendo di saltare blocchi ripetuti su ogni pagina come posso essere l'intestazione e il menu di navigazione. 

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="skiplinks">
  <a class="visually-hidden-focusable" href="#main">Vai al contenuto principale</a>
  <a class="visually-hidden-focusable" href="#footer">Vai al piede di pagina</a>
</div>
{% endcapture %}{% include example.html content=example %}

## Elenco
Se la pagina è particolarmente complessa si possono inserire più collegamenti che permettano di saltare direttamente ai blocchi principali. 

Nell'esempio che segue, implementato per il sito [Designers Italia](https://designers.italia.it), sono inseriti due collegamenti che è utile approfondire: 

- un salto ad un **modulo per chiedere alle persone come stanno valutando l'esperienza d'uso** della pagina. Il testo dello skiplink anticipa già la domanda;
- un **collegamento diretto alla Dichiarazione di accessibilità disponibile sul form AgID**, che accompagnerà il necessario link presente anche nel piede di pagina, per permettere a chi naviga con strumenti assistivi di trovarla facilmente senza dover scansionare tutti i contennuti. 

Consigliamo di non eccedere con il numero di elementi scorciatoia, rimanendo entro le 3 o 4 voci. Altrimenti ci sarebbe il bisogno di poter saltare le stesse scorciatoie.  

{% capture callout %}
#### Accessibilità

In questo caso è utile implementarlo come elemento `nav` con una `aria-label` dedicata che ne spieghi l'uso. 
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Elenco{% endcomment %}
{% capture example %}
<nav class="skiplinks" aria-label="Scorciatoie di navigazione">
  <ul>
    <li class="visually-hidden-focusable"><a href="#menu">Vai al menu</a></li>
    <li class="visually-hidden-focusable" ><a href="#main">Vai al contenuto</a></li>
    <li class="visually-hidden-focusable" ><a href="#feedback">Questa pagina ti è stata utile?</a></li>
    <li class="visually-hidden-focusable" ><a href="https://form.agid.gov.it/view/xyz">Dichiarazione di accessibilità (link esterno su sito AgID)</a></li>
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
