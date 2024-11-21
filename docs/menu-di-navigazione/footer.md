---
layout: docs
title: Footer
description: Documentazione ed esempi per la creazione di piè di pagina di navigazione.
group: menu-di-navigazione
toc: true
---

## Introduzione
Il **footer** (in italiano piè di pagina o piede di pagina) è una sezione che contiene tutte le informazioni inerenti al sito web e alla società o organizzazione che rappresenta. 

Per una Pubblica Amministrazione potrebbe contenere tutte i riferimenti ai vari **servizi**, a varie **pagine utili** alla cittadinanza, riferimenti alla **privacy**, il collegamento alla **Dichiarazione di accessibilità sul form AgID** e informazioni su come **contattare** l'amministrazione.

Potrebbe anche contenere riferimenti alle pagine social dell'amministrazione.

## Footer completo
{% comment %}Example name: Completo{% endcomment %}
{% capture example %}
<footer class="it-footer">
  <div class="it-footer-main">
    <div class="container">
      <section>
        <div class="row clearfix">
          <div class="col-sm-12">
            <div class="it-brand-wrapper">
              <a href="#" class="" data-focus-mouse="false">
                <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
                <div class="it-brand-text">
                  <h2 class="no_toc">Lorem Ipsum</h2>
                  <h3 class="no_toc d-none d-md-block">Inserire qui la tag line</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Amministrazione">Amministrazione</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li><a class="list-item" href="#">Giunta e consiglio</a></li>
                <li><a class="list-item" href="#">Aree di competenza</a></li>
                <li><a class="list-item" href="#">Dipendenti</a></li>
                <li><a class="list-item" href="#">Luoghi</a></li>
                <li><a class="list-item" href="#">Associazioni e società partecipate</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Servizi">Servizi</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li><a class="list-item" href="#">Pagamenti</a></li>
                <li><a class="list-item" href="#">Sostegno</a></li>
                <li><a class="list-item" href="#">Domande e iscrizioni</a></li>
                <li><a class="list-item" href="#">Segnalazioni</a></li>
                <li><a class="list-item" href="#">Autorizzazioni e concessioni</a></li>
                <li><a class="list-item" href="#">Certificati e dichiarazioni</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Novità">Novità</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li><a class="list-item" href="#">Notizie</a></li>
                <li><a class="list-item" href="#">Eventi</a></li>
                <li><a class="list-item" href="#">Comunicati stampa</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <h4>
              <a href="#" title="Vai alla pagina: Documenti">Documenti</a>
            </h4>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li><a class="list-item" href="#">Progetti e attività</a></li>
                <li><a class="list-item" href="#">Delibere, determine e ordinanze</a></li>
                <li><a class="list-item" href="#">Bandi</a></li>
                <li><a class="list-item" href="#">Concorsi</a></li>
                <li><a class="list-item" href="#">Albo pretorio</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="py-4 border-white border-top">
        <div class="row">
          <div class="col-lg-4 col-md-4 pb-2">
            <h4>Contatti</h4>
            <p>
              <strong>Comune di Lorem Ipsum</strong><br>
              Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000
            </p>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li><a class="list-item" href="#">Posta Elettronica Certificata</a></li>
                <li>
                  <a class="list-item" href="#">URP - Ufficio Relazioni con il Pubblico</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 pb-2">
            <h4>Lorem Ipsum</h4>
          </div>
          <div class="col-lg-4 col-md-4 pb-2">
            <div class="pb-2">
              <h4>Seguici su</h4>
              <ul class="list-inline text-left social">
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-designers-italia"></use></svg><span class="visually-hidden">Designers Italia (link esterno)</span></a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-twitter"></use></svg><span class="visually-hidden">X (link esterno)</span></a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-medium"></use></svg><span class="visually-hidden">Medium (link esterno)</span></a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-behance"></use></svg><span class="visually-hidden">Behance (link esterno)</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="it-footer-small-prints clearfix">
    <div class="container">
      <!-- <h3 class="visually-hidden">Sezione Link Utili</h3> -->
      <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
        <li class="list-inline-item"><a href="#">Media policy</a></li>
        <li class="list-inline-item"><a href="#">Note legali</a></li>
        <li class="list-inline-item"><a href="#">Privacy policy</a></li>
        <li class="list-inline-item"><a href="#">Mappa del sito</a></li>
        <li class="list-inline-item"><a href="https://form.agid.gov.it/view/xyz">Dichiarazione di accessibilità <span class="visually-hidden">(link esterno su sito AgID)</span></a></li>
      </ul>
    </div>
  </div>
</footer>
{% endcapture %}{% include example.html content=example %}

## Footer solo contatti
{% comment %}Example name: Compatto{% endcomment %}
{% capture example %}
<footer class="it-footer">
  <div class="it-footer-main">
    <div class="container">
      <section>
        <div class="row clearfix">
          <div class="col-sm-12">
            <div class="it-brand-wrapper">
              <a href="#" class="" data-focus-mouse="false">
                <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-code-circle"></use></svg>
                <div class="it-brand-text">
                  <h2 class="no_toc">Lorem Ipsum</h2>
                  <h3 class="no_toc d-none d-md-block">Inserire qui la tag line</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="py-4 border-white border-top">
        <div class="row">
          <div class="col-lg-4 col-md-4 pb-2">
            <h4>Contatti</h4>
            <p>
              <strong>Comune di Lorem Ipsum</strong><br>
              Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000
            </p>
            <div class="link-list-wrapper">
              <ul class="footer-list link-list clearfix">
                <li><a class="list-item" href="#">Posta Elettronica Certificata</a></li>
                <li>
                  <a class="list-item" href="#">URP - Ufficio Relazioni con il Pubblico</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 pb-2">
            <h4>Lorem Ipsum</h4>
          </div>
          <div class="col-lg-4 col-md-4 pb-2">
            <div class="pb-2">
              <h4>Seguici su</h4>
              <ul class="list-inline text-left social">
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-designers-italia"></use></svg><span class="visually-hidden">Designers Italia (link esterno)</span></a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-twitter"></use></svg><span class="visually-hidden">X (link esterno)</span></a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-medium"></use></svg><span class="visually-hidden">Medium (link esterno)</span></a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 text-white" href="#"><svg class="icon icon-sm icon-white align-top"><use xlink:href="{{site.baseurl}}/dist/svg/sprites.svg#it-behance"></use></svg><span class="visually-hidden">Behance (link esterno)</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="it-footer-small-prints clearfix">
    <div class="container">
      <!-- <h3 class="visually-hidden">Sezione Link Utili</h3> -->
      <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
        <li class="list-inline-item"><a href="#">Media policy</a></li>
        <li class="list-inline-item"><a href="#">Note legali</a></li>
        <li class="list-inline-item"><a href="#">Privacy policy</a></li>
        <li class="list-inline-item"><a href="#">Mappa del sito</a></li>
        <li class="list-inline-item"><a href="https://form.agid.gov.it/view/xyz">Dichiarazione di accessibilità <span class="visually-hidden">(link esterno su sito AgID)</span></a></li>
      </ul>
    </div>
  </div>
</footer>
{% endcapture %}{% include example.html content=example %}
