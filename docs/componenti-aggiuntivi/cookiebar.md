---
layout: docs
title: Cookiebar
description: Banner informativo sull'utilizzo dei cookie all'interno del sito web 
group: componenti-aggiuntivi
toc: true
---

## Perchè usarlo

Come previsto dal Provvedimento dell'8 maggio 2014 sull'[individuazione delle modalità semplificate per l’informativa e l’acquisizione del consenso per l’uso dei cookie](http://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/3118884), è necessario inserire una barra informativa per i cookie (in gergo **Cookiebar**) qualora ci sia l'effettiva registrazione di dati personali.

Per maggiori informazioni si rimanda alla pagina [www.garanteprivacy.it/cookie](http://www.garanteprivacy.it/cookie) dove sono raccolti documenti e informazioni utili.

## Come usarlo

Bootstrap Italia ha predisposto un codice HTML da prendere e copiare all'interno delle proprie pagine web inserendolo appena dopo l'apertura del tag `body`.

Esso può essere personalizzato nel testo, ma è importante lasciare inalterata la classe `cookiebar` perchè ad essa è collegata la funzione Javascript che gestisce la visualizzazione della Cookiebar.

Il bottone permette la chiusura della Cookiebar attraverso il _data attribute_ `data-accept="cookiebar"`.

### Codice HTML

<style>
  /* Style override for Documentation purposes */
  .cookiebar {
    display: block !important;
    position: relative !important;
  }
</style>
<div class="bd-example">
    <div class="cookiebar bg-dark p-4" aria-hidden="true">
        <p class="text-white">Questo sito utilizza cookie tecnici, analytics e di terze parti.
            <br>Proseguendo nella navigazione accetti l’utilizzo dei cookie.<br>
        </p>
        <p>
            <button data-accept="cookiebar" class="btn btn-info mr-2">Accetto</button>
            <a href="#" class="btn btn-outline-info">Privacy policy</a>
        </p>
    </div>
</div>

{% highlight html %}
<div class="cookiebar bg-dark p-4 hide" aria-hidden="true">
    <p class="text-white">Questo sito utilizza cookie tecnici, analytics e di terze parti.
        <br>Proseguendo nella navigazione accetti l’utilizzo dei cookie.<br>
    </p>
    <p>
        <button data-accept="cookiebar" class="btn btn-info mr-2">Accetto</button>
        <a href="" class="btn btn-outline-info">Privacy policy</a>
    </p>
</div>
{% endhighlight %}
