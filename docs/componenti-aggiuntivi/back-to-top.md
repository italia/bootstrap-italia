---
layout: docs
title: Back to top
description: Consente agli utenti di scorrere agevolmente verso la parte superiore della pagina 
group: componenti-aggiuntivi
toc: true
---

### Esempio

Per aggiungere un bottone che si abilita automaticamente allo scorrimento della pagina, e che aiuta l'utente a tornare in alto con un solo click su di esso, è sufficiente usare un link con attributo `data-attribute="return-to-top"` e con una classe `.return-to-top` chesi occupa del suo posizionamento in basso a destra nella pagina.

<style>
  /* Style override for Documentation purposes */
  .return-to-top {
    position: relative;
    bottom: unset;
    right: unset;
    display: block !important;
    margin: 0 auto;
  }
</style>


{% example html %}
<a href="#" data-attribute="return-to-top" class="return-to-top"><i class="it-collapse"></i></a>
{% endexample %}

