---
layout: docs
title: Finestre modali
description: Usa il plugin JavaScript di Bootstrap per aprire finestre modali per mostrare contenuti in evidenza, notifiche agli utenti, o contenuti personalizzati.
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

Nel caso non fosse presente un titolo al quale legare l'attributo `aria-labelledby="..."` puoi etichettare la modale direttamente utilizzando l'attributo `aria-label="Titolo modale"`. Vedi esempio [Modale semplice - Basico](#modale-popconfirm)

Approfondisci l'argomento sul sito delle [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#dialog_modal).
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Prima di utilizzare il componente modale di Bootstrap, assicurati di leggere quanto segue:

- Le modali sono costruite in HTML, CSS, e JavaScript. Sono posizionate al di sopra di ogni altro elemento della pagina
  e rimuovono lo scroll dal `<body>` in modo che il contenuto della modale invece scorra.
- Cliccando sulla parte che oscura la pagina (il cosiddetto _backdrop_ della modale), questa verrà chiusa automativamente.
- A causa di come HTML5 definisce la sua semantica, [l'attributo HTML `autofocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus)
  non ha effetto sulle modali di Bootstrap. Per ottenere lo stesso effetto, usa un codice JavaScript personalizzato:

```js
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
```

## Esempi

In questa sezione gli esempi sono rappresentati da modali _statiche_, dove `position` e `display` sono stati sovrascritti mediante l'inclusione in un container `.it-example-modal`.

### Componenti della modale

Sono inclusi l'intestazione, il corpo, e il footer della modale. È
richiesta l'inclusione di intestazioni o elementi con funzione di chiusura della modale stessa.

{% comment %}Example name: Componenti della modale{% endcomment %}
{% capture example %}
<div class="it-example-modal">
   <div class="modal" tabindex="-1" role="dialog" id="modal1" aria-labelledby="modal1Title" aria-describedby="modal1Description">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h2 class="modal-title h5 no_toc" id="modal1Title">Intestazione modale</h2>
            </div>
            <div class="modal-body">
               <p id="modal1Description">Descrizione scopo della modale.</p>
               <p>Font Titillium 16px. Leading 24px. omnis iste natus error.</p>
            </div>
            <div class="modal-footer">
               <button class="btn btn-outline-primary btn-sm" type="button" data-bs-dismiss="modal">Azione 2</button>
               <button class="btn btn-primary btn-sm" type="button">Azione 1</button>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Modale con pulsante di chiusura

Per chiudere la modale, si può utilizzare un pulsante con classe `.btn-close`.

{% capture callout %}

#### Accessibilità pulsante di chiusra

**Assicurati di inserire del testo per gli screen readers**, utilizzando l'attributo `aria-label`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Pulsante di chiusura, dettaglio{% endcomment %}
{% capture example %}
<button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
<svg class="icon">
<use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
</svg>
</button>
{% endcapture %}{% include example.html content=example %}

Esempio completo:

{% comment %}Example name: Con pulsante di chiusura{% endcomment %}
{% capture example %}
<div class="it-example-modal">
   <div class="modal" tabindex="-1" role="dialog" id="modal2" aria-labelledby="modal2Title">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h2 class="modal-title h5 no_toc" id="modal2Title">Questo è un messaggio di notifica</h2>
               <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
                  <svg class="icon">
                     <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
                  </svg>
               </button>
            </div>
            <div class="modal-body">
               <p>In questo caso vengono forniti un pulsante di conferma e uno di chiusura della modale.</p>
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

È possibile inserire un icona di alert (o altro tipo) affiancandola all'intestazione.
Per formattare correttamente i contenuti della modale con icona, occorre aggiungere la classe `alert-modal` all'elemento `<div class="modal">`

{% comment %}Example name: Con icona{% endcomment %}
{% capture example %}
<div class="it-example-modal">
  <div class="modal alert-modal" tabindex="-1" role="dialog" id="modal3" aria-labelledby="modal3Title">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <svg class="icon">
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use>
          </svg>
          <h2 class="modal-title h5 no_toc" id="modal3Title">Questo è un messaggio di notifica più esteso del solito</h2>
        </div>
        <div class="modal-body">
          <p>In questo caso viene fornito solo un pulsante di conferma della modale.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary btn-sm" type="button">Ok</button>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Modale con elementi form

All'interno della modale è possibile inserire elementi form.
Di seguito una modale con un elenco di radio button.

{% comment %}Example name: Con elementi form{% endcomment %}
{% capture example %}
<div class="it-example-modal">
   <div class="modal" tabindex="-1" role="dialog" id="modal4" aria-labelledby="modal4Title">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h2 class="modal-title h5 no_toc" id="modal4Title">Scegli una opzione</h2>
               <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
                  <svg class="icon">
                     <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
                  </svg>
               </button>
            </div>
            <div class="modal-body">
               <div class="form-check">
                  <input name="gruppo1" type="radio" id="radio1">
                  <label for="radio1">Opzione 1</label>
               </div>
               <div class="form-check">
                  <input name="gruppo1" type="radio" id="radio2">
                  <label for="radio2">Opzione 2</label>
               </div>
               <div class="form-check">
                  <input name="gruppo1" type="radio" id="radio3">
                  <label for="radio3">Opzione 3</label>
               </div>
            </div>
            <div class="modal-footer">
               <button class="btn btn-primary btn-sm" type="button" disabled="">Ok</button>
            </div>
         </div>
      </div>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Modale con Link List

All'interno della modale è possibile inserire delle [Liste di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste/#liste-per-menù-di-navigazione).
Per formattare correttamente il contenuto di questa modale, aggiungere la classe `it-dialog-link-list` all'elemento `<div class="modal">`

{% comment %}Example name: Con lista link{% endcomment %}
{% capture example %}
<div class="it-example-modal">
   <div class="modal it-dialog-link-list" tabindex="-1" role="dialog" id="modal5" aria-labelledby="modal5Title">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h2 class="modal-title h5 no_toc" id="modal5Title"><span>1.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
            </div>
            <div class="modal-body">
               <div class="link-list-wrapper">
                  <ul class="link-list">
                     <li>
                        <a class="list-item icon-left" href="#">
                           <svg class="icon icon-primary">
                              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
                           </svg>
                           <span>Link lista 1</span>
                        </a>
                     </li>
                     <li>
                        <a class="list-item icon-left" href="#">
                           <svg class="icon icon-primary">
                              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
                           </svg>
                           <span>Link lista 2</span>
                        </a>
                     </li>
                     <li>
                        <a class="list-item icon-left" href="#">
                           <svg class="icon icon-primary">
                              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use>
                           </svg>
                           <span>Link lista 3</span>
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

### Modale popconfirm

La modale di tipo popconfirm può essere utilizzata per brevi messaggi di conferma. Questo particolare design si ottiene applicando la classe `popconfirm-modal` all'elemento `<div class="modal">`.

Il titolo della modale è facoltativo, nel caso non fosse necessario è sufficiente rimuovere l'intero elemento `<div class="modal-header">`.

{% comment %}Example name: Popconfirm{% endcomment %}
{% capture example %}
<div class="it-example-modal">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <p><strong>Basico</strong></p>
        <div class="modal popconfirm-modal" tabindex="-1" role="dialog"  id="modal6" aria-label="Modale popconfirm">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-body">
                    <p>Font Titillium 14px. Leading 21px.</p>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" type="button">Azione 1</button>
                    <button class="btn btn-outline-secondary btn-sm" type="button" data-bs-dismiss="modal">Azione 2</button>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <p><strong>Con Header</strong></p>
        <div class="modal popconfirm-modal" tabindex="-1" role="dialog" id="modal7" aria-labelledby="modal7Title">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modal7Title">Intestazione Popconfirm</h5>
                  </div>
                  <div class="modal-body">
                    <p>Font Titillium 14px. Leading 21px.</p>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary btn-sm" type="button">Azione 1</button>
                    <button class="btn btn-outline-secondary btn-sm" type="button" data-bs-dismiss="modal">Azione 2</button>
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

{% comment %}Example name: Demo, base{% endcomment %}
{% capture example %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Lancia la demo della modale</button>

<!-- Modal -->
<div class="modal fade" tabindex="-1" role="dialog" id="exampleModal" aria-labelledby="exampleModalTitle">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="exampleModalTitle">Intestazione modale</h2>
      </div>
      <div class="modal-body">
        <p>Font Titillium 16px. Leading 24px. omnis iste natus error.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" type="button">Chiudi modale</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Scroll di contenuti lunghi

Quando le modali diventano troppo lunghe per il viewport o il dispositivo dell'utente, scorrono indipendentemente dalla
pagina stessa.

Per meglio distinguere l'elemento _footer_ con un'ombra è sufficiente aggiungere la classe `.modal-footer-shadow` a `<div class="modal-footer">`.

{% comment %}Example name: Demo, con contenuti lunghi{% endcomment %}
{% capture example %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Lancia la demo della modale</button>

<!-- Modal -->
<div class="modal fade" tabindex="-1" role="dialog" id="exampleModalLong" aria-labelledby="exampleModalLongTitle">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="exampleModalLongTitle">Intestazione modale</h2>
        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
          <svg class="icon">
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="modal-footer modal-footer-shadow">
        <button class="btn btn-outline-primary btn-sm" type="button" data-bs-dismiss="modal">Annulla</button>
        <button class="btn btn-primary btn-sm" type="button">Azione 1</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Scroll di contenuti all'interno della modale

Si può scegliere di utilizzare uno scroll interno alla modale, mantenendo sempre visibile l'intestazione ed il footer della modale stessa aggiungendo la classe `.it-dialog-scrollable` all'elemento `<div class="modal">`

{% comment %}Example name: Demo, con contenuti lunghi, scroll interno{% endcomment %}
{% capture example %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLongFixed">Lancia la demo della modale</button>

<!-- Modal -->
<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="exampleModalLongFixed" aria-labelledby="exampleModalLongFixedTitle">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="exampleModalLongFixedTitle">Intestazione modale</h2>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-primary btn-sm" type="button" data-bs-dismiss="modal">Annulla</button>
        <button class="btn btn-primary btn-sm" type="button">Azione 1</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Posizionamento

#### Centratura verticale

Aggiungi `.modal-dialog-centered` a `.modal-dialog` per centrare verticalmente la modale.

{% comment %}Example name: Demo, centrata in verticale{% endcomment %}
{% capture example %}
<!-- Button trigger modal -->
<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalCenter">Lancia la demo della modale</button>

<!-- Modal -->
<div class="modal fade" tabindex="-1" role="dialog" id="modalCenter" aria-labelledby="modalCenterTitle">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="modalCenterTitle">Questo è un messaggio di notifica</h2>
        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
          <svg class="icon">
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>In questo caso vengono forniti un pulsante di conferma e uno di chiusura della modale.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-sm" data-bs-dismiss="modal" type="button">Ok</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Allineamento a sinistra

Per aprire la modale da sinistra a destra aggiungere le seguenti classi:
Aggiungi `.it-dialog-scrollable` a `.modal` occupare tutta l'altezza disponibile.
Aggiungi `.modal-dialog-left` a `.modal-dialog` per allineare a sinistra la modale.

{% comment %}Example name: Demo, allineata a sinistra{% endcomment %}
{% capture example %}
<!-- Button trigger modal -->
<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalLeft">Lancia la demo della modale</button>

<!-- Modal -->
<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="modalLeft" aria-labelledby="modalLeftTitle">
  <div class="modal-dialog modal-dialog-left" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="modalLeftTitle">Questo è un messaggio di notifica</h2>
        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
          <svg class="icon">
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-sm" type="button">Ok</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Allineamento a destra

Per aprire la modale da destra a sinistra aggiungere le seguenti classi:
Aggiungi `.it-dialog-scrollable` a `.modal` occupare tutta l'altezza disponibile.
Aggiungi `.modal-dialog-right` a `.modal-dialog` per allineare a sinistra la modale.

{% comment %}Example name: Demo, allineata a destra{% endcomment %}
{% capture example %}
<!-- Button trigger modal -->
<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalright">Lancia la demo della modale</button>

<!-- Modal -->
<div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="modalright" aria-labelledby="modalrightTitle">
  <div class="modal-dialog modal-dialog-right" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="modalrightTitle">Questo è un messaggio di notifica</h2>
        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
          <svg class="icon">
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary btn-sm" type="button">Ok</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Rimuovere l'animazione

Per avere modali che appaiono semplicemente senza dissolvenza, rimuovi la classe `.fade` dal codice della tua modale.

```html
<div class="modal" tabindex="-1" role="dialog" id="..." aria-labelledby="..." aria-hidden="true">...</div>
```

### Dimensioni opzionali

Le modali hanno due dimensioni opzionali, disponibili tramite classi da posizionare su un `.modal-dialog`. Queste dimensioni entrano in gioco in determinati breakpoint per evitare barre di scorrimento orizzontali su finestre più strette.

{% comment %}Example name: Varianti di dimensione{% endcomment %}
{% capture example %}
<!-- Small modal -->
<button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target=".bd-example-modal-sm">Modale piccola</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="mySmallModalLabel">Modale piccola</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi finestra modale"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">...</div>
    </div>
  </div>
</div>

<!-- Large modal -->
<button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg">Modale grande</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="myLargeModalLabel">Modale grande</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi finestra modale"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">...</div>
    </div>
  </div>
</div>

<!-- Extra Large modal -->
<button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl">Modale molto grande</button>

<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5 no_toc" id="myExtraLargeModalLabel">Modale molto grande</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi finestra modale"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">...</div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Implementazione

Il plugin per le modali attiva/disattiva il tuo contenuto nascosto su richiesta, tramite attributi data o tramite JavaScript.
Aggiunge anche `.modal-open` al `<body>` per sovrascrivere comportamento di scroll predefinito e genera un `.modal-backdrop`
per fornire un'area cliccabile per chiudere le modali mostrate quando si clicca all'esterno di esse.

### Tramite data attributes

Attiva una modale senza scrivere codice JavaScript. Imposta `data-bs-toggle="modal"` su un elemento di controllo, come un
pulsante, insieme a `data-bs-target="#foo"` o `href="#foo"` per attivare/disattivare una specifica modale.

```html
<button type="button" data-bs-toggle="modal" data-bs-target="#myModal">Lancia la modale</button>
```

### Tramite JavaScript

Richiama una modale con id `myModal` con una singola riga di JavaScript:

```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
```

### Metodi

{% include callout-danger-async-methods.md %}

#### `Utilizzo delle opzioni`

Attiva i tuoi contenuti come modali, configurabile con un oggetto (facoltativo).

```js
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false,
})
```

#### `toggle`

Attiva/disattiva manualmente una modale. **Ritorna al chiamante prima che la modale sia stata effettivamente mostrata o nascosta**
(cioè prima che si verifichi l'evento `shown.bs.modal` o l'evento `hidden.bs.modal`).

```js
myModal.toggle()
```

#### `show`

Apre manualmente una modale. **Ritorna al chiamante prima che la modale sia stata effettivamente mostrata**
(cioè prima che si verifichi l'evento `shown.bs.modal`).

```js
myModal.show()
```

#### `hide`

Nasconde manualmente una modale. **Ritorna al chiamante prima che la modale sia stata effettivamente nascosta**
(cioè prima che si verifichi l'evento `hidden.bs.modal`).

```js
myModal.hide()
```

#### `handleUpdate`

Riposiziona manualmente la modale se l'altezza della modale cambia nel momento in cui è aperta
(nel caso appaia una barra di scorrimento).

```js
myModal.handleUpdate()
```

#### `dispose`

Distrugge la modale di un elemento.

```js
myModal.dispose()
```

#### `getInstance`

Metodo statico che consente di ottenere l'istanza di una modale associata ad un elemento del DOM.

```js
var myModalEl = document.getElementById('myModal')
var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
```

#### `getOrCreateInstance`

Metodo statico che consente di ottenere l'istanza di una modale associata ad un elemento del DOM o di crearne una nuova nel caso non fosse stata inizializzata.

```js
var myModalEl = document.querySelector('#myModal')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl) // Returns a Bootstrap modal instance
```

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
    <tr>
      <td>hidePrevented.bs.modal</td>
      <td>Questo evento viene attivato quando la modale viene mostrata, il suo sfondo è <code>static</code> e un click fuori dalla modale o la pressione del tasto esc avvengono e il <code>data-bs-keyboard</code> è settato a  <code>false</code>.</td>
    </tr>
  </tbody>
</table>

```js
var myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  // do something...
})
```
