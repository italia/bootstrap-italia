---
layout: docs
title: Bottone SPID
description: Lo SPID è una credenziale unica di accesso, con identità verificata, che può essere integrata secondo lo standard SAML su siti pubblici ma anche privati.
group: componenti-aggiuntivi
toc: true
---

## Panoramica

SPID (Sistema Pubblico di Identità Digitale) è la soluzione che permette ai cittadini italiani di accedere a tutti i servizi online della Pubblica Amministrazione con un’unica Identità Digitale utilizzabile da computer, tablet e smartphone. Il cittadino può ottenere SPID tramite i Gestori di Identità (detti Identity Provider); una volta completata la procedura di verifica (che certifica l’identità del richiedente), vengono rilasciate un set di credenziali che possono essere utilizzate su tutti i siti (chiamati Service Provider).

Sono presenti quattro classi per ottenere diverse dimensioni per il bottone SPID:

* `.italia-it-button-size-s`
* `.italia-it-button-size-m`
* `.italia-it-button-size-l`
* `.italia-it-button-size-xl`

Per maggiori informazioni sul progetto SPID si possono trovare all'indirizzo  [https://designers.italia.it/progetti/spid/](https://designers.italia.it/progetti/spid/)


### Codice HTML GET

{% example html %}
<a href="#" class="italia-it-button italia-it-button-size-l button-spid" spid-idp-button="#spid-idp-button-get" aria-haspopup="true" aria-expanded="false">
    <span class="italia-it-button-icon"><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-ico-circle-bb.svg" alt="Logo SPID" /></span>
    <span class="italia-it-button-text">Entra con SPID</span>
</a>
<div id="spid-idp-button-get" class="spid-idp-button spid-idp-button-tip spid-idp-button-relative">
    <ul id="spid-idp-list-root-get" class="spid-idp-button-menu" aria-labelledby="spid-idp">
        <li class="spid-idp-button-link" data-idp="arubaid">
            <a href="#"><span class="spid-sr-only">Aruba ID</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-arubaid.svg" alt="Aruba ID" /></a>
        </li>
        <li class="spid-idp-button-link" data-idp="infocertid">
            <a href="#"><span class="spid-sr-only">Infocert ID</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-infocertid.svg" alt="Infocert ID" /></a>
        </li>
        <li class="spid-idp-button-link" data-idp="intesaid">
            <a href="#"><span class="spid-sr-only">Intesa ID</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-intesaid.svg" alt="Intesa ID" /></a>
        </li>
        <li class="spid-idp-button-link" data-idp="namirialid">
            <a href="#"><span class="spid-sr-only">Namirial ID</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-namirialid.svg" alt="Namirial ID" /></a>
        </li>
        <li class="spid-idp-button-link" data-idp="posteid">
            <a href="#"><span class="spid-sr-only">Poste ID</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-posteid.svg" alt="Poste ID" /></a>
        </li>
        <li class="spid-idp-button-link" data-idp="sielteid">
            <a href="#"><span class="spid-sr-only">Sielte ID</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-sielteid.svg" alt="Sielte ID" /></a>
        </li>
        <li class="spid-idp-button-link" data-idp="spiditalia">
            <a href="#"><span class="spid-sr-only">SPIDItalia Register.it</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-spiditalia.svg" alt="SpidItalia" /></a>
        </li>
        <li class="spid-idp-button-link" data-idp="timid">
            <a href="#"><span class="spid-sr-only">Tim ID</span><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-timid.svg" alt="Tim ID" /></a>
        </li>
        <li class="spid-idp-support-link" data-spidlink="info">
            <a href="https://www.spid.gov.it">Maggiori informazioni</a>
        </li>
        <li class="spid-idp-support-link" data-spidlink="rich">
            <a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a>
        </li>
        <li class="spid-idp-support-link" data-spidlink="help">
            <a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>
        </li>
    </ul>
</div>
{% endexample %}

### Codice HTML POST

{% example html %}
<form name="spid_idp_access" action="#" method="post">
    <input type="hidden" name="param_001" value="" />
    <input type="hidden" name="param_002" value="" />
    <input type="hidden" name="param_003" value="" />
    <a href="#" class="italia-it-button italia-it-button-size-l button-spid" spid-idp-button="#spid-idp-button-post" aria-haspopup="true" aria-expanded="false">
        <span class="italia-it-button-icon"><img src="{{ site.baseurl }}/docs/assets/img/spid/spid-ico-circle-bb.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-ico-circle-bb.png'; this.onerror=null;" alt="" /></span>
        <span class="italia-it-button-text">Entra con SPID</span>
    </a>
    <div id="spid-idp-button-post" class="spid-idp-button spid-idp-button-tip spid-idp-button-relative">
        <ul id="spid-idp-list-root-post" class="spid-idp-button-menu" aria-labelledby="spid-idp">
            <li class="spid-idp-button-link" data-idp="arubaid">
                <button class="idp-button-idp-logo" name="aruba_id" type="submit"><span class="spid-sr-only">Aruba ID</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-arubaid.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-arubaid.png'; this.onerror=null;" alt="Aruba ID" /></button>
            </li>
            <li class="spid-idp-button-link" data-idp="infocertid">
                <button class="idp-button-idp-logo" name="infocert_id" type="submit"><span class="spid-sr-only">Infocert ID</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-infocertid.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-infocertid.png'; this.onerror=null;" alt="Infocert ID" /></button>
            </li>
            <li class="spid-idp-button-link" data-idp="intesaid">
                <button class="idp-button-idp-logo" name="intesa_id" type="submit"><span class="spid-sr-only">Intesa ID</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-intesaid.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-intesaid.png'; this.onerror=null;" alt="Intesa ID" /></button>
            </li>
            <li class="spid-idp-button-link" data-idp="namirialid">
                <button class="idp-button-idp-logo" name="namirial_id" type="submit"><span class="spid-sr-only">Namirial ID</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-namirialid.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-namirialid.png'; this.onerror=null;" alt="Namirial ID" /></button>
            </li>
            <li class="spid-idp-button-link" data-idp="posteid">
                <button class="idp-button-idp-logo" name="poste_id" type="submit"><span class="spid-sr-only">Poste ID</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-posteid.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-posteid.png'; this.onerror=null;" alt="Poste ID" /></button>
            </li>
            <li class="spid-idp-button-link" data-idp="sielteid">
                <button class="idp-button-idp-logo" name="sielte_id" type="submit"><span class="spid-sr-only">Sielte ID</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-sielteid.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-sielteid.png'; this.onerror=null;" alt="Sielte ID" /></button>
            </li>
            <li class="spid-idp-button-link" data-idp="spiditalia">
                <button class="idp-button-idp-logo" name="spiditalia" type="submit"><span class="spid-sr-only">SPIDItalia Register.it</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-spiditalia.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-spiditalia.png'; this.onerror=null;" alt="SpidItalia" /></button>
            </li>
            <li class="spid-idp-button-link" data-idp="timid">
                <button class="idp-button-idp-logo" name="tim_id" type="submit"><span class="spid-sr-only">Tim ID</span><img class="spid-idp-button-logo" src="{{ site.baseurl }}/docs/assets/img/spid/spid-idp-timid.svg" onerror="this.src='{{ site.baseurl }}/docs/assets/img/spid/spid-idp-timid.png'; this.onerror=null;" alt="Tim ID" /></button>
            </li>
            <li class="spid-idp-support-link" data-spidlink="info">
                <a href="https://www.spid.gov.it">Maggiori informazioni</a>
            </li>
            <li class="spid-idp-support-link" data-spidlink="rich">
                <a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a>
            </li>
            <li class="spid-idp-support-link" data-spidlink="help">
                <a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>
            </li>
        </ul>
    </div>
</form>
{% endexample %}
