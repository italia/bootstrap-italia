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
    

