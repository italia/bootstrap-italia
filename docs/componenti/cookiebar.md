---
layout: docs
group: componenti
toc: true
title: Cookiebar
description: Banner informativo sull’utilizzo dei cookie all’interno del sito web; perché e come usarlo 
---

{% capture callout %}

### Attenzione

Componente e contenuti in aggiornamento.

{% endcapture %}{% include callout.html content=callout type="alert" %}

## Perché usarlo

È auspicabile che un sito della Pubblica Amministrazione contenga solamente **cookie tecnici**, necessari per il suo funzionamento, e **cookie analitici** volti alla raccolta di informazioni, in forma aggregata, sul numero degli utenti e su come gli stessi visitano il sito, al fine di elaborare statistiche generali sul servizio e sul suo utilizzo. 

L’articolo 7, comma 3, del Codice dell’Amministrazione Digitale (CAD) richiede, infatti, alle Pubbliche Amministrazioni di pubblicare sui propri siti le statistiche di utilizzo dei servizi digitali forniti. Le “[Linee Guida di design per i siti internet e i servizi digitali della Pubblica Amministrazione](https://designers.italia.it/linee-guida/)” prescrivono inoltre la pubblicazione di informazioni, opportunamente aggregate e anonimizzate, derivanti dal monitoraggio statistico attivato sul singolo sito e/o servizio.  

Secondo le disposizioni dell’art. 122 del Decreto legislativo 30 giugno 2003, n. 196 (Codice Privacy) e delle “[Linee guida cookie e altri strumenti di tracciamento](https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9677876)” emanate dal Garante per la protezione dei dati personali con provvedimento del 10 giugno 2021, **la richiesta del consenso è necessaria per l’utilizzo di tutti i cookie che non sono classificati come tecnici**. Le citate Linee guida del Garante forniscono inoltre indicazioni sulla possibilità che i cookie analitici di terze parti  possano, in taluni casi, essere ricompresi nella categoria di quelli tecnici, e come tali essere utilizzati in assenza della previa acquisizione del consenso dell’interessato. 

Se invece intendi utilizzare altri tipi di cookie - scelta che dovrà essere preceduta da un’attenta valutazione in merito all’effettiva necessità di ricorrervi - il consenso è la base legale necessaria per poter trattare i dati personali derivanti dagli stessi, e tali dati potranno essere raccolti **solo dopo che gli utenti avranno espresso il loro consenso esplicito alle relative specifiche finalità di utilizzo**. Per la raccolta del consenso è possibile dunque inserire una barra informativa per i cookie (in gergo Cookiebar) attraverso la quale l’utente potrà decidere se prestare o negare l’autorizzazione al tracciamento. 

Oltre che alle Linee Guida suindicate, per maggiori informazioni ti rimandiamo alla [Scheda di Sintesi](https://www.garanteprivacy.it/garante/document?ID=9679270) allegata al provvedimento e alle [FAQ](https://www.gpdp.it/faq/cookie) emanate dal Garante in materia.
Inoltre, per ulteriori approfondimenti, ti invitiamo a consultare la risorsa “Cookie policy - Come rispettare la normativa privacy” del [kit privacy](https://designers.italia.it/kit/privacy/) di Designers Italia.

## Come usarlo

Bootstrap Italia ha predisposto un codice HTML da copiare all'interno delle proprie pagine web inserendolo appena dopo l'apertura del tag `body`.

Esso può essere personalizzato nel testo a seconda delle necessità, ma è importante lasciare inalterata la classe `cookiebar` perché ad essa è collegata la funzione JavaScript che gestisce la visualizzazione della Cookiebar.

Il pulsante permette la chiusura della Cookiebar attraverso il _data attribute_ `data-bs-accept="cookiebar"`; un ulteriore link di approfondimento dovrà portare alla pagina di gestione preferenze dei cookies.

{% capture callout %}
Per le visualizzazione a schermo intero potete guardare la pagina di esempio: **[Esempio Cookiebar]({{ site.baseurl }}/docs/esempi/cookiebar/){:target="\_blank"}**.
{% endcapture %}{% include callout.html content=callout type="info" %}

### Codice HTML

<script>
  document.addEventListener("DOMContentLoaded", function() {
    bootstrap.Cookiebar.clearCookie()
  })
</script>

<style>
  /* Style override for Documentation purposes */

  .bd-example .cookiebar {
    /*display: block !important;*/
    position: relative !important;
  }

  /*@media (min-width: 768px) {
    .bd-example .cookiebar {
      display: flex !important;
    }
  }*/

}
</style>
<div class="bd-example">
    <section class="cookiebar fade" aria-label="Gestione dei cookies">
        <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br>Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p>
        <div class="cookiebar-buttons">
            <a href="#" class="cookiebar-btn">Preferenze<span class="visually-hidden">cookies</span></a>
            <button data-bs-accept="cookiebar" class="cookiebar-btn cookiebar-confirm">Accetto<span class="visually-hidden"> i cookies</span></button>
        </div>
    </section>
</div>

```html
<section class="cookiebar fade" aria-label="Gestione dei cookies">
  <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br />Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p>
  <div class="cookiebar-buttons">
    <a href="#" class="cookiebar-btn">Preferenze<span class="visually-hidden">cookies</span></a>
    <button data-bs-accept="cookiebar" class="cookiebar-btn cookiebar-confirm">Accetto<span class="visually-hidden"> i cookies</span></button>
  </div>
</section>
```
