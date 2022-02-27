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

I bottoni permettono l'accettazione dei cookie attraverso il _data attribute_
`data-accept="cookiebar"` o il rifiuto con `data-close="cookiebar"`.

La scelta viene tracciata tramite il cookie `bootstrap_italia_accept_cookies`, dalla
durata di sei mesi, che è impostatato a "`true`" all'accettazione e "`false`" al rifiuto.

La Cookiebar non viene mostrata quando esiste il cookie con la preferenza.

Un ulteriore link di approfondimento dovrà portare alla pagina di gestione preferenze dei cookies.

{% capture callout %}
Vedi un esempio a schermo intero: **[Esempio Cookiebar]({{ site.baseurl }}/docs/esempi/cookiebar/){:target="\_blank"}**.
{% endcapture %}{% include callout.html content=callout type="info" %}

### Codice HTML

```html
<div class="bd-example">
    <div class="cookiebar">
        <p>
          Questo sito usa cookie e altri strumenti di profilazione di terze parti.
          <br class="mb-3">
          Chiudendo questo messaggio o selezionando “Non accetto”, proseguirai la navigazione.
          Se invece vuoi acconsentire alla profilazione, seleziona “Accetta”.
          <br class="mb-3">
          Per saperne di più consulta la nostra <a href="https://example.org/privacy-policy">informativa sulla privacy</a>
        </p>
        <div class="cookiebar-buttons">
            <button data-accept="cookiebar" class="cookiebar-btn">Accetto<span class="sr-only"> la profilazione</span></button>
            <button data-close="cookiebar" class="cookiebar-btn">Non accetto<span class="sr-only"> la profilazione</span></button>
        </div>
        <button data-close="cookiebar" class="cookiebar-close">&times;<span class="sr-only">Chiudi</span></button>
    </div>
</div>
```
