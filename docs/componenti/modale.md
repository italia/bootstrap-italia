---
layout: docs
title: Finestre modali
description: Usa il plugin Javascript di Bootstrap per aprire finestre modali per mostrare contenuti in evidenza, notifiche agli utenti, o contenuti personalizzati.
group: componenti
toc: true
---

<style>
  /* Style override for Documentation purposes */
  .it-example-modal .modal {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 1;
    display: block;
  }
</style>

{% capture callout %}
#### Accessibilità

Assicurati di aggiungere sempre:
- l'attributo `role="dialog"` all'elemento con classe `.modal` ([maggiori info su MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role))
- l'attributo `aria-labelledby="..."` all'elemento con classe `.modal`, con riferimento al titolo della modale stesso ([maggiori info su MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute))
- l'attributo `role="document"` applicato al `.modal-dialog` stesso

Inoltre, puoi aggiungere una descrizione della tua finestra di dialogo modale con `aria-describedby` su `.modal`.

Approfondisci l'argomento sul sito delle [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#dialog_modal).
{% endcapture %}{% include callout.html content=callout type="warning" %}

Prima di descrivere il componente modale di Bootstrap, assicurati di leggere quanto segue:

- Le modali sono costruite in HTML, CSS, e JavaScript. Sono posizionate al di sopra di ogni altro elemento della pagina
e rimuove lo scroll dal `<body>` in modo che il contenuto della modale invece scorra.
- Cliccando sulla parte che oscura la pagina (il cosiddetto _backdrop_ della modale), questa verrà chiusa automativamente.
- A causa di come HTML5 definisce la sua semantica, [l'attributo HTML `autofocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus)
non ha effetto sulle modali di Bootstrap. Per ottenere lo stesso effetto, usa un codice JavaScript personalizzato:

{% highlight js %}
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
{% endhighlight %}

## Esempi

### Componenti della modale

In basso un esempio di una modale _statica_, dove `position` e `display` sono stati sovrascritti.
Sono inclusi l'intestazione, il corpo, e il footer della modale. È
richiesta l'inclusione di intestazioni o elementi con funzione di chiusura della modale stessa.

<div class="it-example-modal">
   <div class="modal" tabindex="-1" role="dialog" id="">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">dialog header
               </h5>
            </div>
            <div class="modal-body">
               <p>Font Titillium 16px. Leading 24px. omnis iste natus error.</p>
            </div>
            <div class="modal-footer">
               <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Action two</button>
               <button class="btn btn-primary btn-sm" type="button">Action one</button>
            </div>
         </div>
      </div>
   </div>
</div>

{% highlight html %}
<div class="it-example-modal">
   <div class="modal" tabindex="-1" role="dialog" id="">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">dialog header
               </h5>
            </div>
            <div class="modal-body">
               <p>Font Titillium 16px. Leading 24px. omnis iste natus error.</p>
            </div>
            <div class="modal-footer">
               <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Action two</button>
               <button class="btn btn-primary btn-sm" type="button">Action one</button>
            </div>
         </div>
      </div>
   </div>
</div>
{% endhighlight %}

### Modale con bottone di chiusura

Per chiudere la modale, si può utilizzare un bottone con classe `.close`.

**Assicurati di inserire del testo per gli screen readers**, utilizzando l'attributo `aria-label`.

{% capture example %}
<button class="close" type="button" data-dismiss="modal" aria-label="Close">
   <svg class="icon">
      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
   </svg>
</button>
{% endcapture %}{% include example.html content=example %}

Esempio completo:

{% capture example %}
<div class="it-example-modal">
   <div class="modal" tabindex="-1" role="dialog" id="">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">This is a notification message
               </h5>
               <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <svg class="icon">
                     <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
                  </svg>
               </button>
            </div>
            <div class="modal-body">
               <p>In the various types of information modal dialog, only one button to close dialog is provided.</p>
            </div>
            <div class="modal-footer">
               <button class="btn btn-primary btn-sm" type="button">Ok</button>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Modale con icona

E' possibie inserire un icona di alert (o altro tipo) affiancandola all'intestazione.
Per formattare correttamente i contenuti della modale con icona, occorre aggiungere la classe `alert-modal` all'elemento `<div class="modal">`

{% capture example %}
<div class="it-example-modal">
  <div class="modal alert-modal" tabindex="-1" role="dialog" id="">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <svg class="icon">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use>
          </svg>
          <h5 class="modal-title">This is a notification message more long than usual
          </h5>
        </div>
        <div class="modal-body">
          <p>In the various types of information modal dialog, only one button to close dialog is provided.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary btn-sm" type="button">Ok</button>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Modale con radiobuttons

All'interno della modale è possibile inserire elementi form.
Di seguito una modale con un elenco di radio button.

{% capture example %}
<div class="it-example-modal">
   <div class="modal" tabindex="-1" role="dialog" id="">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">Choose an item
               </h5>
            </div>
            <div class="modal-body">
               <div class="form-check" aria-describedby="">
                  <input name="gruppo1" type="radio" id="radio1">
                  <label for="radio1">Opzione 1</label>
               </div>
               <div class="form-check" aria-describedby="">
                  <input name="gruppo1" type="radio" id="radio2">
                  <label for="radio2">Opzione 2</label>
               </div>
               <div class="form-check" aria-describedby="">
                  <input name="gruppo1" type="radio" id="radio3">
                  <label for="radio3">Opzione 3</label>
               </div>
            </div>
            <div class="modal-footer">
               <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Cancel</button>
               <button class="btn btn-primary btn-sm" type="button" disabled="">Ok</button>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Modale con Link List

All'interno della modale è possibile inserire delle [Liste di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste-di-link/).
Per formattare correttamente il contenuto di questa modale, aggiungere la classe `it-dialog-link-list` all'elemento `<div class="modal">`

{% capture example %}
<div class="it-example-modal">
   <div class="modal it-dialog-link-list" tabindex="-1" role="dialog" id="">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title"><span>1.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
               </h5>
            </div>
            <div class="modal-body">
               <div class="link-list-wrapper">
                  <ul class="link-list">
                     <li>
                        <a class="list-item icon-left" href="#">
                           <svg class="icon icon-primary">
                              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use>
                           </svg>
                           <span>Link list 1</span>
                        </a>
                     </li>
                     <li>
                        <a class="list-item icon-left" href="#">
                           <svg class="icon icon-primary">
                              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use>
                           </svg>
                           <span>Link list 1</span>
                        </a>
                     </li>
                     <li>
                        <a class="list-item icon-left" href="#">
                           <svg class="icon icon-primary">
                              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-chevron-right"></use>
                           </svg>
                           <span>Link list 1</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Modale Popconfirm

La Modale di tipo Popconfirm può essere utilizzata per brevi messaggi di conferma. Questo particolare design si ottiene applicando la classe `popconfirm-modal` all'elemento `<div class="modal">`.

Il titolo della modale è facoltativo, nel caso non fosse necessario è sufficiente rimuovere l'intero elemento `<div class="modal-header">`.

{% capture example %}
<div class="it-example-modal">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <p><strong>Basico</strong></p>
        <div class="modal popconfirm-modal" tabindex="-1" role="dialog" id="">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-body">
                    <p>Font Titillium 14px. Leading 21px.</p>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" type="button">Action one</button>
                    <button class="btn btn-outline-secondary btn-sm" type="button" data-dismiss="modal">Action two</button>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <p><strong>Con Header</strong></p>
        <div class="modal popconfirm-modal" tabindex="-1" role="dialog" id="">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Popconfirm header</h5>
                  </div>
                  <div class="modal-body">
                    <p>Font Titillium 14px. Leading 21px.</p>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" type="button">Action one</button>
                    <button class="btn btn-outline-secondary btn-sm" type="button" data-dismiss="modal">Action two</button>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Demo

### Modale semplice

Attiva o disattiva la demo di una modale facendo clic sul pulsante qui sotto.

<div class="modal fade" tabindex="-1" role="dialog" id="exampleModalLive">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">dialog header
        </h5>
      </div>
      <div class="modal-body">
        <p>Font Titillium 16px. Leading 24px. omnis iste natus error.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-sm" data-dismiss="modal" type="button">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">
    Lancia la demo della modale
  </button>
</div>

{% highlight html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Lancia la demo della modale
</button>

<!-- Modal -->
<div class="modal fade" tabindex="-1" role="dialog" id="exampleModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">dialog header
        </h5>
      </div>
      <div class="modal-body">
        <p>Font Titillium 16px. Leading 24px. omnis iste natus error.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-sm" data-dismiss="modal" type="button">Close</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Scroll di contenuti lunghi

Quando le modali diventano troppo lunghe per il viewport o il dispositivo dell'utente, scorrono indipendentemente dalla
pagina stessa.

<div class="modal fade" tabindex="-1" role="dialog" id="exampleModalLong">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">dialog header</h5>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Cancel</button>
        <button class="btn btn-primary btn-sm" type="button">Action 1</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
    Lancia la demo della modale
  </button>
</div>

{% highlight html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Lancia la demo della modale
</button>

<!-- Modal -->
<div class="modal fade" tabindex="-1" role="dialog" id="exampleModalLong">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">dialog header</h5>
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <svg class="icon">
              <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Cancel</button>
        <button class="btn btn-primary btn-sm" type="button">Action 1</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Scroll di contenuti all'interno della modale

Si può scelgliere di utilizzare uno scroll interno alla madole, mantenendo sempre visibile l'intestazione ed il footer della modale stessa aggiungendo la classe `.it-dialog-scrollable` all'elemento `<div class="modal">`

<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="exampleModalLongFixed">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">dialog header
            </h5>
         </div>
         <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Cancel</button>
            <button class="btn btn-primary btn-sm" type="button">Action 1</button>
         </div>
      </div>
   </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLongFixed">
    Lancia la demo della modale
  </button>
</div>

{% highlight html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLongFixed">
  Lancia la demo della modale
</button>

<!-- Modal -->
<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="exampleModalLongFixed">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">dialog header
            </h5>
         </div>
         <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Cancel</button>
            <button class="btn btn-primary btn-sm" type="button">Action 1</button>
         </div>
      </div>
   </div>
</div>
{% endhighlight %}

### Posizionamento

#### Centratura verticale

Aggiungi `.modal-dialog-centered` a `.modal-dialog` per centrare verticalmente la modale.

<div class="modal fade" tabindex="-1" role="dialog" id="modalCenter">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">This is a notification message
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
               </svg>
            </button>
         </div>
         <div class="modal-body">
            <p>In the various types of information modal dialog, only one button to close dialog is provided.</p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-primary btn-sm" data-dismiss="modal" type="button">Ok</button>
         </div>
      </div>
   </div>
</div>

<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalCenter">
  Lancia la demo della modale
</button>

{% highlight html %}
<!-- Button trigger modal -->
<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalCenter">
  Lancia la demo della modale
</button>

<!-- Modal -->
<div class="modal fade" tabindex="-1" role="dialog" id="modalCenter">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">This is a notification message
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
               </svg>
            </button>
         </div>
         <div class="modal-body">
            <p>In the various types of information modal dialog, only one button to close dialog is provided.</p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-primary btn-sm" data-dismiss="modal" type="button">Ok</button>
         </div>
      </div>
   </div>
</div>
{% endhighlight %}

#### Allineamento a sinistra

Per aprire la modale da sinistra a destra aggiungere le seguenti classi:
Aggiungi `.it-dialog-scrollable` a `.modal` occupare tutta l'altezza disponibile.
Aggiungi `.modal-dialog-left` a `.modal-dialog` per allineare a sinistra la modale.

<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="modalLeft">
   <div class="modal-dialog modal-dialog-left" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">This is a notification message
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
               </svg>
            </button>
         </div>
         <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-primary btn-sm" type="button">Ok</button>
         </div>
      </div>
   </div>
</div>

<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalLeft">
  Lancia la demo della modale
</button>

{% highlight html %}
<!-- Button trigger modal -->
<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalLeft">
  Lancia la demo della modale
</button>

<!-- Modal -->
<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="modalLeft">
   <div class="modal-dialog modal-dialog-left" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">This is a notification message
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
               </svg>
            </button>
         </div>
         <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-primary btn-sm" type="button">Ok</button>
         </div>
      </div>
   </div>
</div>
{% endhighlight %}

#### Allineamento a destra

Per aprire la modale da destra a sinistra aggiungere le seguenti classi:
Aggiungi `.it-dialog-scrollable` a `.modal` occupare tutta l'altezza disponibile.
Aggiungi `.modal-dialog-right` a `.modal-dialog` per allineare a sinistra la modale.

<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="modalright">
   <div class="modal-dialog modal-dialog-right" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">This is a notification message
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
               </svg>
            </button>
         </div>
         <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-primary btn-sm" type="button">Ok</button>
         </div>
      </div>
   </div>
</div>

<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalright">
  Lancia la demo della modale
</button>

{% highlight html %}
<!-- Button trigger modal -->
<button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalright">
  Lancia la demo della modale
</button>

<!-- Modal -->
<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="modalright">
   <div class="modal-dialog modal-dialog-right" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">This is a notification message
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use>
               </svg>
            </button>
         </div>
         <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-primary btn-sm" type="button">Ok</button>
         </div>
      </div>
   </div>
</div>
{% endhighlight %}

### Rimuovere l'animazione

Per avere modali che appaiono semplicemente senza dissolvenza, rimuovi la classe `.fade` dal codice della tua modale.

{% highlight html %}
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="..." aria-hidden="true">
  ...
</div>
{% endhighlight %}

### Dimensioni opzionali

Le modali hanno due dimensioni opzionali, disponibili tramite classi da posizionare su un `.modal-dialog`. Queste dimensioni entrano in gioco in determinati breakpoint per evitare barre di scorrimento orizzontali su finestre più strette.

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Modale grande</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Modale piccola</button>
</div>

{% highlight html %}
<!-- Large modal -->
<button type="button" class="btn btn-primary " data-toggle="modal" data-target=".bd-example-modal-lg">Modale grande</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
    <div class="modal-footer">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary " data-toggle="modal" data-target=".bd-example-modal-sm">Modale piccola</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
    <div class="modal-footer">
        ...
    </div>
  </div>
</div>
{% endhighlight %}

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myLargeModalLabel">Modale grande</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mySmallModalLabel">Modale piccola</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        ...
      </div>
    </div>
  </div>
</div>

## Uso

Il plugin per le modali attiva/disattiva il tuo contenuto nascosto su richiesta, tramite attributi data o tramite JavaScript.
Aggiunge anche `.modal-open` al `<body>` per sovrascrivere comportamento di scroll predefinito e genera un `.modal-backdrop`
per fornire un'area cliccabile per chiudere le modali mostrate quando si clicca all'esterno di esse.

### Tramite data attributes

Attiva una modale senza scrivere codice JavaScript. Imposta `data-toggle="modal"` su un elemento di controllo, come un
pulsante, insieme a `data-target="#foo"` o `href="#foo"` per attivare/disattivare una specifica modale.

{% highlight html %}
<button type="button" data-toggle="modal" data-target="#myModal">Lancia la modale</button>
{% endhighlight %}

### Tramite JavaScript

Richiama una modale con id `myModal` con una singola riga di JavaScript:

{% highlight js %}$('#myModal').modal(options){% endhighlight %}



### Metodi

{% include callout-danger-async-methods.md %}

#### `.modal(options)`

Attiva i tuoi contenuti come modali, configurabile con un oggetto (facoltativo).

{% highlight js %}
$('#myModal').modal({
  keyboard: false
})
{% endhighlight %}

#### `.modal('toggle')`

Attiva/disattiva manualmente una modale. **Ritorna al chiamante prima che la modale sia stata effettivamente mostrata o nascosta**
(cioè prima che si verifichi l'evento `shown.bs.modal` o l'evento `hidden.bs.modal`).

{% highlight js %}$('#myModal').modal('toggle'){% endhighlight %}

#### `.modal('show')`

Apre manualmente una modale. **Ritorna al chiamante prima che la modale sia stata effettivamente mostrata**
(cioè prima che si verifichi l'evento `shown.bs.modal`).

{% highlight js %}$('#myModal').modal('show'){% endhighlight %}

#### `.modal('hide')`

Nasconde manualmente una modale. **Ritorna al chiamante prima che la modale sia stata effettivamente nascosta**
(cioè prima che si verifichi l'evento `hidden.bs.modal`).

{% highlight js %}$('#myModal').modal('hide'){% endhighlight %}

#### `.modal('handleUpdate')`

Riposiziona manualmente la modale se l'altezza della modale cambia nel momento in cui è aperta
(nel caso appaia una barra di scorrimento).

{% highlight js %}$('#myModal').modal('handleUpdate'){% endhighlight %}

#### `.modal('dispose')`

Distrugge la modale di un elemento.

### Eventi

La classe della modale di Bootstrap espone alcuni eventi per l'aggancio alla funzionalità modale.
Tutti gli eventi vengono attivati dalla modale stessa (cioè `<div class="modal">`).

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo di evento</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.modal</td>
      <td>Questo evento si attiva immediatamente quando il metodo di istanza <code>show</code> viene chiamato. Se causato da un click, l'elemento selezionato è disponibile come proprietà <code>relatedTarget</code> dell'evento.</td>
    </tr>
    <tr>
      <td>shown.bs.modal</td>
      <td>Questo evento viene attivato quando la modale è stata resa visibile all'utente (attenderà il completamento delle transizioni CSS). l'elemento selezionato è disponibile come proprietà <code>relatedTarget</code> dell'evento.</td>
    </tr>
    <tr>
      <td>hide.bs.modal</td>
      <td>Questo evento viene generato immediatamente quando il metodo di istanza <code>hide</code> è stato chiamato.</td>
    </tr>
    <tr>
      <td>hidden.bs.modal</td>
      <td>Questo evento viene attivato quando la modale ha finito di essere nascosta all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myModal').on('hidden.bs.modal', function (e) {
  // fai qualcosa...
})
{% endhighlight %}
