---
layout: docs
group: componenti
toc: true
title: Cookiebar
description: Banner informativo sull'utilizzo dei cookie all'interno del sito web
---

## Perché usarlo

Come previsto inizialmente dal Provvedimento dell'8 maggio 2014 sull'[individuazione delle modalità semplificate per l’informativa e l’acquisizione del consenso per l’uso dei cookie](http://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/3118884), è necessario inserire una barra informativa per i cookie (in gergo **Cookiebar**) qualora ci sia l'effettiva registrazione di dati personali.

Per maggiori informazioni si rimanda alla pagina [www.garanteprivacy.it/cookie](http://www.garanteprivacy.it/cookie) dove sono raccolti documenti e informazioni utili.

## Come usarlo

Bootstrap Italia ha predisposto un codice HTML da copiare all'interno delle proprie pagine web inserendolo appena dopo l'apertura del tag `body`.

Esso può essere personalizzato nel testo a seconda delle necessità, ma è importante lasciare inalterata la classe `cookiebar` perché ad essa è collegata la funzione Javascript che gestisce la visualizzazione della Cookiebar.

Il bottone permette la chiusura della Cookiebar attraverso il _data attribute_ `data-accept="cookiebar"`; un ulteriore link di approfondimento dovrà portare alla pagina di gestione preferenze dei cookies.

{% capture callout %}
Per le visualizzazione a schermo intero potete guardare la pagina di esempio: **[Esempio Cookiebar]({{ site.baseurl }}/docs/esempi/cookiebar/){:target="_blank"}**.
{% endcapture %}{% include callout.html content=callout type="info" %}

### Codice HTML

<style>
  /* Style override for Documentation purposes */

  .bd-example .cookiebar {
    display: block !important;
    position: relative !important;
  }

  @media (min-width: 768px) {
    .bd-example .cookiebar {
      display: flex !important;
    }
  }

}
</style>
<div class="bd-example">
    <div class="cookiebar">
        <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br>Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p>
        <div class="cookiebar-buttons">
            <a href="#" class="cookiebar-btn">Preferenze<span class="sr-only">cookies</span></a>
            <button data-accept="cookiebar" class="cookiebar-btn cookiebar-confirm">Accetto<span class="sr-only"> i cookies</span></button>
        </div>
    </div>
</div>

{% highlight html %}
<div class="cookiebar">
    <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br>Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p>
    <div class="cookiebar-buttons">
        <a href="#" class="cookiebar-btn">Preferenze<span class="sr-only">cookies</span></a>
        <button data-accept="cookiebar" class="cookiebar-btn cookiebar-confirm">Accetto<span class="sr-only"> i cookies</span></button>
    </div>
</div>
{% endhighlight %}
