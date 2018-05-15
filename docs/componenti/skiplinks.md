---
layout: docs
title: Skiplinks
description: Lo skip link  è un collegamento interno che consente agli utenti di accedere direttamente al contenuto principale della pagina saltando il menu di navigazione. È un componente particolarmente utile per coloro che accedono con screen reader e/o da tastiera. 
group: componenti
toc: true
---

## Esempi
GLi elementi Skiplinks sono contraddisrinti dalle classi:

`sr-only`: renderizzati solo per gli screen reader

`sr-only-focusable`: renderizzati solo al focus

Per attivare la funzionalità si digita da tastiera il tasto: **TAB**. 

{% capture example %}
<div class="skiplinks">
  <a class="sr-only sr-only-focusable" href="#main">Skip to main content</a>
  <a class="sr-only sr-only-focusable" href="#footer">Skip to footer</a>
</div>
{% endcapture %}{% include example.html content=example %}


