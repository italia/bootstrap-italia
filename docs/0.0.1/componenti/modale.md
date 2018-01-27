---
layout: docs
title: Finestre modali
description: Usa il plugin Javascript di Bootstrap per aprire finestre modali per mostrare contenuti in evidenza, notifiche agli utenti, o contenuti personalizzati.
group: componenti
toc: true
---

{% callout accessibility %}
#### Accessibilità

Assicurati di aggiungere sempre:
- l'attributo `role="dialog"` all'elemento con classe `.modal` ([maggiori info su MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role))
- l'attributo `aria-labelledby="..."` all'elemento con classe `.modal`, con riferimento al titolo della modale stesso ([maggiori info su MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute))
- l'attributo `role="document"` applicato al `.modal-dialog` stesso

Inoltre, puoi aggiungere una descrizione della tua finestra di dialogo modale con `aria-describedby` su `.modal`.

Approfondisci l'argomento sul sito delle [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#dialog_modal).
{% endcallout %}

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
Sono inclusi l'intestazione, il corpo (obbligatorio per il `padding`), e il footer della modale (opzionale). È
richiesta l'inclusione di intestazioni o elementi con funzione di chiusura della modale stessa.

<div class="bd-example bd-example-modal">
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Titolo della modale</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Il testo del corpo della modale va qui.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
          <button type="button" class="btn btn-primary">Salva le modifiche</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Il testo del corpo della modale va qui.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Bottone di chiusura

Per chiudere la modale, si può utilizzare un bottone con classe `.close`.

**Assicurati di inserire del testo per gli screen readers**, utilizzando l'attributo `aria-label`.

{% example html %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endexample %}

### Demo

Attiva o disattiva la demo di una modale facendo clic sul pulsante qui sotto. Essa scivolerà verso il basso e si
dissolverà dalla parte superiore della pagina.

<div id="exampleModalLive" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLiveLabel">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Woohoo, stai leggendo questo testo in una modale!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
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
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Scroll di contenuti lunghi

Quando le modali diventano troppo lunghe per il viewport o il dispositivo dell'utente, scorrono indipendentemente dalla
pagina stessa.

<div id="exampleModalLong" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
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
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Centratura verticale

Aggiungi `.modal-dialog-centered` a `.modal-dialog` per centrare verticalmente la modale.

<div id="exampleModalCenter" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Lancia la demo della modale
  </button>
</div>

{% highlight html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Lancia la demo della modale
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Tooltip and popover

[Tooltip]({{ site.baseurl }}/docs/{{ site.docs_version }}/componenti/tooltips/) e [popover]({{ site.baseurl }}/docs/{{ site.docs_version }}/componenti/popovers/) possono essere inseriti all'interno delle modali. Quando le modali vengono chiuse, ogni tooltip e popover all'interno vengono automaticamente chiusi.

<div id="exampleModalPopovers" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalPopoversLabel">Titolo della modale</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>Popover in una modale</h5>
        <p>Questo <a href="#" role="button" class="btn btn-secondary popover-test" title="Titolo del popover" data-content="Il contenuto del corpo del popover è impostato in questo attributo." data-container="#exampleModalPopovers">pulsante</a> attiva un popover al click.</p>
        <hr>
        <h5>Tooltip in una modal</h5>
        <p><a href="#" class="tooltip-test" title="Tooltip" data-container="#exampleModalPopovers">Questo link</a> e <a href="#" class="tooltip-test" title="Tooltip" data-container="#exampleModalPopovers">questo link</a> attivano un tooltip al passaggio del mouse.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalPopovers">
    Lancia la demo della modale
  </button>
</div>

{% highlight html %}
<div class="modal-body">
  <h5>Popover in una modale</h5>
  <p>Questo <a href="#" role="button" class="btn btn-secondary popover-test" title="Titolo del popover" data-content="Il contenuto del corpo del popover è impostato in questo attributo.">pulsante</a> attiva un popover al click.</p>
  <hr>
  <h5>Tooltip in una modal</h5>
  <p><a href="#" class="tooltip-test" title="Tooltip">Questo link</a> e <a href="#" class="tooltip-test" title="Tooltip">questo link</a> attivano un tooltip al passaggio del mouse.</p>
</div>
{% endhighlight %}

### Uso della griglia

Utilizza la griglia di Bootstrap all'interno di una modale  annidando `.container-fluid` all'interno di `.modal-body`. Poi, usa le normali classi della griglia come faresti in qualsiasi altro posto.

<div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="gridModalLabel">Le grglie nelle modali</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid bd-example-row">
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
            <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              Level 1: .col-sm-9
              <div class="row">
                <div class="col-8 col-sm-6">
                  Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                  Level 2: .col-4 .col-sm-6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Salva le modifiche</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gridSystemModal">
  Lncia la demo della modale
</button>
</div>

{% highlight html %}
<div class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
      <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Contenuto della modale variabile

Hai un gruppo di pulsanti che attivano tutti la stessa modale con contenuti leggermente diversi? Usa `event.relatedTarget`
e gli [attributi HTML `data-*`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) (possibilmente
[tramite jQuery](https://api.jquery.com/data/)) per variare il contenuto della modale in base al pulsante cliccato.

In basso una demo seguita da un esempio in HTML e JavaScript. Per maggiori informazioni, [leggi la documentazione sugli
eventi della modale](#eventi) per dettagli su `relatedTarget`.

{% example html %}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="Mario">Apri la modale per Mario</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="Paolo">Apri la modale per Paolo</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="Luca">Apri la modale per Luca</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nuovo messaggio</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Destinatario:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Messaggio:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary">Invia messaggio</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}

{% highlight js %}
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Pulsante che attiva la modale
  var recipient = button.data('whatever') // Prende le informazioni dagli attributi data-*
  // Se necessario, qui è possibile avviare una richiesta AJAX (e quindi eseguire l'aggiornamento in un callback).
  // Aggiorna il contenuto della modale. Qui viene usato jQuery, ma tu potresti utilizzare una libreria data binding o altri metodi.
  var modal = $(this)
  modal.find('.modal-title').text('Nuovo messaggio a ' + destinatario)
  modal.find('.modal-body input').val(recipient)
})
{% endhighlight %}

### Rimuovere l'animazione

Per avere modali che appaiono semplicemente senza dissolvenza, rimuovi la classe `.fade` dal codice della tua modale.

{% highlight html %}
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="..." aria-hidden="true">
  ...
</div>
{% endhighlight %}

### Altezza variabile

Se l'altezza della modale cambia quando è aperta, dovresti chiamare `$('#myModal').modal('handleUpdate')` per regolare nuovamente la posizione della modale nel caso appaia una barra di scorrimento.

### Incorporare i video di YouTube

Incorporare i video di YouTube nelle modali richiede codice JavaScript aggiuntivo non presente in Bootstrap per interrompere automaticamente la riproduzione e altro. [Vedi questo utile post di Stack Overflow](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) per maggiori informazioni.

## Dimensioni opzionali

Le modali hanno due dimensioni opzionali, disponibili tramite classi da posizionare su un `.modal-dialog`. Queste dimensioni entrano in gioco in determinati breakpoint per evitare barre di scorrimento orizzontali su finestre più strette.

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Modale grande</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Modale piccola</button>
</div>

{% highlight html %}
<!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Modale grande</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Modale piccola</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
{% endhighlight %}

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myLargeModalLabel">Modale grande</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="mySmallModalLabel">Modale piccola</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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

### Opzioni

Le opzioni possono essere passate tramite attributi data o tramite JavaScript. Per quanto riguarda i data attributes,
aggiungi l'opzione a `data-` (come ad esempio in `data-backdrop=""`):

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>backdrop</td>
      <td><code>'true'</code>, <code>'false'</code> o la stringa <code>'static'</code></td>
      <td>true</td>
      <td>Include un elemento modal-backdrop. In alternativa, specifica <code>static</code> per un backdrop che non chiude la modale al click.</td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td><code>'true'</code> o <code>'false'</code></td>
      <td>true</td>
      <td>Chiude la modale quando viene premuto il tasto escape</td>
    </tr>
    <tr>
      <td>focus</td>
      <td><code>'true'</code> o <code>'false'</code></td>
      <td>true</td>
      <td>Mette il focus sulla modale quando viene inizializzata.</td>
    </tr>
    <tr>
      <td>show</td>
      <td><code>'true'</code> o <code>'false'</code></td>
      <td>true</td>
      <td>Mostra la modale quando viene inizializzata.</td>
    </tr>
  </tbody>
</table>

### Metodi

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

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
