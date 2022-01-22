---
layout: docs
title: Skiplinks
description: Gli Skiplink sono collegamento interno alla pagina che consentono agli utenti di accedere direttamente al contenuto principale della pagina saltando il menu di navigazione.
group: menu-di-navigazione
toc: true
---

È un componente particolarmente utile per coloro che accedono con screen reader e/o da tastiera.

Gli elementi Skiplink sono contraddistinti dalle classi:

- `sr-only`: renderizzati solo per gli screen reader
- `sr-only-focusable`: renderizzati solo al focus

Per attivare la funzionalità si digita da tastiera il tasto: **TAB**.

{% capture example %}

<div class="skiplinks">
  <a class="sr-only sr-only-focusable" href="#">Vai al contenuto principale</a>
  <a class="sr-only sr-only-focusable" href="#">Vai al footer</a>
</div>
{% endcapture %}{% include example.html content=example %}
    
{% capture callout %}
#### Visualizzazione degli Skiplinks su macOS

##### Chrome

Per attivare la funzionalità si digita da tastiera il tasto: **TAB**.

##### Safari

Per attivare la navigazione via **TAB** è necessario:

1. Aprire il menù Safari > Preferenze
2. Cliccare sulla tab Avanzate
3. Selezionare “Premi tabulatore per evidenziare tutti gli elementi della pagina web”.

Alternativamente è possibile navigare gli elementi usando **opzione+TAB**

##### Firefox

Le impostazioni di default di macOS non consentono la navigazione di tutti gli elementi interattivi di un sito con l'uso del pulsante TAB.
Per attivare questa modalità è necessario modificare le preferenze di sistema come segue:

1. Aprire il Menu Apple > Preferenze di Sistema, quindi fare clic su Tastiera.
2. Fare clic su Abbreviazioni.
3. Nella parte inferiore della finestra delle preferenze, selezionare “Usa la navigazione da tastiera per spostare la selezione tra i controlli”.

Una volta selezionata questa opzione gli skiplinks saranno attivabili su Firefox con il pulsante **TAB**.

Vedi anche la [guida ufficiale di Apple](https://support.apple.com/it-it/HT204434).

{% endcapture %}{% include callout.html content=callout type="warning" %}
