---
layout: docs
title: Cookiebar
description: Banner informativo sull'utilizzo dei cookie all'interno del sito web 
group: componenti-aggiuntivi
toc: true
---

## Perchè usarlo

Come previsto dal Provvedimento dell'8 maggio 2014 sull'[individuazione delle modalità semplificate per l’informativa e l’acquisizione del consenso per l’uso dei cookie](http://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/3118884), è necessario inserire la **Cookiebar** qualora ci sia l'effettiva registrazione di dati nascosti.

Per maggiori informazioni si rimanda alla pagina [www.garanteprivacy.it/cookie](http://www.garanteprivacy.it/cookie) dove sono raccolti documenti e informazioni utili per mettersi in regola e per saperne di più sull'uso dei cookie.

## Come usarlo

Bootstrap Italia ha predisposto un codice HTML da prendere e copiare all'interno del template inserendolo appena dopo l'apertura del tag `body`. Può essere personalizzato nel testo, ma è importante lasciare inalterato l'attributo `id="cookie-bar"` perchè ad esso è collegata la funzione javascript che gestisce la **Cookiebar**.

### Codice HTML

<div class="bd-example">
    <div class="bg-dark p-4" aria-hidden="true">
        <p class="text-white">Questo sito utilizza cookie tecnici, analytics e di terze parti.
            <br>Proseguendo nella navigazione accetti l’utilizzo dei cookie.<br>
        </p>
        <p>
            <button id="btn-accept" class="btn btn-info mr-2">Accetto</button>
            <a href="#" class="btn btn-outline-info">Privacy policy</a>
        </p>
    </div>
</div>

{% highlight html %}
<div id="cookie-bar" class="bg-dark p-4" aria-hidden="true">
    <p class="text-white">Questo sito utilizza cookie tecnici, analytics e di terze parti.
        <br>Proseguendo nella navigazione accetti l’utilizzo dei cookie.<br>
    </p>
    <p>
        <button id="btn-accept" class="btn btn-info mr-2">Accetto</button>
        <a href="" class="btn btn-outline-info">Privacy policy</a>
    </p>
</div>
{% endhighlight %}