---
layout: docs
title: Separatore
description: Consente una separazione dei contenuti migliore e di evidenziare eventuali argomenti in rilievo 
group: componenti-aggiuntivi
toc: true
---

### Esempio

Per aggiungere il separatore è sufficiente applicare questo stile:

<style>
  .separatore {
    border-left: 6px solid;
    height: 100px;
    border-color: #0066cc;
}

.separatore-centrato {
    border-left: 6px solid;
    height: 100px;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    top: 0;
    border-color: #0066cc;
}
</style>

Esempio con due separatori, il separatore normale, visualizzato a sinistra e quello centrato:

<div class="container">
          <div class="row">
            <div class="separatore"></div>
          </div>
          <div class="row">
            <div class="separatore-centrato"></div>
          </div>
      </div>
