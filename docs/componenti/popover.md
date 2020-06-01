---
layout: docs
title: Popover
description: Documentazione ed esempi per aggiungere popover (tooltip informativi) a qualsiasi elemento del tuo sito.
group: componenti
toc: true
---

I popover si basano sulla libreria di terze parti [Popper.js](https://popper.js.org/).
Per fare in modo che i popover funzionino è necessario includere `popper.min.js` prima di
bootstrap-italia.js o usare la versione _bundle_ che contiene già Popper.js.
I popovers richiedono il [plugin tooltip]({{ site.baseurl }}/docs/componenti/tooltip/) come dipendenza.

{% capture callout %}
##### Accessibilità

I popover funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva.
Allo stesso modo di quanto avviene per i [Tooltip]({{ site.baseurl }}/docs/componenti/tooltip/),
il codice generato per i Popover è accessibile.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Cose da sapere quando si utilizza il plugin popover:

- I popover sono opt-in per ragioni di performance, quindi **devi inizializzarli tu stesso** con il codice che trovi di seguito.
- I `title` e i `content` con valori vuoti non mostreranno mai popover.
- Specifica `container: 'body'` per evitare problemi di rendering in componenti più complessi (come nei gruppi di input, gruppi di bottoni, etc).
- Attivare i popover su elementi nascosti non funzionerà.
- I popover per gli elementi `.disabled` o `disabled` devono essere attivati da un elemento contenitore.
- Quanto attivato da ancore che si estendono su più linee, i popover verranno centrati tra la larghezza complessiva delle ancore. Usa `white-space: nowrap;` sugli elementi `<a>` per evitare questo comportamento.
- I Popover devono essere nascosti prima che i loro elementi corrispondenti siano stati rimossi dal DOM.

## Abilitazione generale

Un modo per inizializzare tutti i popovers in una pagina è quello di selezionarli tramite il loro attributo `data-toggle`:

{% highlight js %}
$(function () {
  $('[data-toggle="popover"]').popover()
})
{% endhighlight %}

## Abilitazione con opzione `container`

Quando hai alcuni stili su un elemento genitore che interferiscono con un popover, è consigliato specificare un `container` personalizzato in modo che l'HTML del popover appaia invece all'interno di quell'elemento.

{% highlight js %}
$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
{% endhighlight %}

{% capture example %}
<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">Clicca per attivare/disattivare il popover</button>
{% endcapture %}{% include example.html content=example %}

## Esempi

### Direzioni

Sono disponibili quattro opzioni: allineato in alto, a destra, in basso e a sinistra.

<div class="bd-example popover-demo">
  <div class="bd-example-popovers">

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4"></div>
        <div class="col-12 col-md-4">
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
            Popover in alto
          </button>
        </div>
        <div class="col-12 col-md-4"></div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-4">
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
            Popover a destra
          </button>
        </div>
        <div class="col-12 col-md-4"></div>
        <div class="col-12 col-md-4 mt-4 mt-md-0">
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
            Popover a sinistra
          </button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-4"></div>
        <div class="col-12 col-md-4">
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
            Popover in basso
          </button>
        </div>
        <div class="col-12 col-md-4"></div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
  Popover in alto
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
  Popover a destra
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
  Popover in basso
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
  Popover a sinistra
</button>
{% endhighlight %}

### Titolo con icona e link

È possibile aggiungere un'icona in testa al titolo ed un link in coda al contenuto. In questo casi è necessario aggiungere l'attributo `data-html="true"` al bottone che apre il Popover.

L'icona va inclusa come HTML nell'attributo `title=""` subito prima del vero e proprio titolo.

Il link come HTML nell'attributo `data-content=""` dopo il contenuto testuale, con classe `.popover-inner-link`.

{% capture example %}
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-html="true" title="<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#it-help-circle'></use></svg> Titolo con icona" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.<a href='#' class='popover-inner-link'>More info<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right'></use></svg></a>">
  Popover con icona e link
</button>
{% endcapture %}{% include example.html content=example %}

### Modalità Hover

Per aprire il Popover all'hover del mouse sull'elemento, aggiungere l'attributo `data-trigger="hover"` al tag dello stesso.

{% capture example %}
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-html="true" title="Popover in Hover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
  Apertura in Hover
</button>
{% endcapture %}{% include example.html content=example %}

### Chiusura al click successivo

Usa l'evento `focus` per ignorare i popover sul clic successivo dell'utente di un elemento diverso rispetto all'elemento di attivazione / disattivazione.

{% capture callout %}
#### Markup specifico richiesto per ignorare il click successivo

Per il giusto comportamento cross-browser e cross-platform, è necessario utilizzare il tag `<a>`, _non_ il tag `<button>`, ed è necessario anche includere l'attributo [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture example %}
<a tabindex="0" href="#" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Popover richiudibile" data-content="Ecco il contenuto del popover richiudibile">Popover richiudibile</a>
{% endcapture %}{% include example.html content=example %}

{% highlight js %}
$('.popover-dismiss').popover({
  trigger: 'focus'
})
{% endhighlight %}

### Elementi disabilitati

Elementi con l'attributo `disabled` non sono interattivi, il che significa che gli utenti non possono attivare il popover (o un tooltip) con il passaggio del mouse o facendo click su di essi. Come soluzione, ti consigliamo di attivare il popover da un elemento `<div>` o `<span>` contenitore e sovrascrivere il `pointer-events` su un elemento disabilitato.

Per gli eventi dei popover disabilitati, potresti preferire `data-trigger="hover"` in modo che il popover appaia come feedback visivo immediato per gli utenti in quanto non possono aspettarsi di _cliccare_ su un elemento disabilitato.

{% capture example %}
<span class="d-inline-block" data-toggle="popover" data-content="Popover disabilitato">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Popover disabilitato</button>
</span>
{% endcapture %}{% include example.html content=example %}

## Uso

Abilita i popover tramite JavaScript:

{% highlight js %}$('#example').popover(options){% endhighlight %}

### Opzioni

Le opzioni possono essere passate tramite attributi data o tramite JavaScript. Per gli attributi data, aggiungi l'opzione nome a `data-`, come in `data-animation=""`.

Per ulteriori informazioni si rimanda alla sezione [popovers](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/components/popovers/) del sito di Bootstrap.

### Metodi

{% include callout-danger-async-methods.md %}

#### `$().popover(options)`

Inizializza i popover per una raccolta di elementi.

#### `.popover('show')`

Mostra il popover di un elemento. **Ritorna al chiamante prima che il popover sia stato effettivamente mostrato** (prima che si verifichi l'evento `shown.bs.popover`). Questo è considerato un'attivazione "manuale" del popover. I popover senza nè titoli nècontenuto non vengono mai visualizzati.

{% highlight js %}$('#element').popover('show'){% endhighlight %}

#### `.popover('hide')`

Nasconde il popover di un elemento. **Ritorna al chiamante prima che il popover sia stato effettivamente nascosto** (prima che si verifichi l'evento `hidden.bs.popover`). Questo è considerato un'attivazione "manuale" del popover.

{% highlight js %}$('#element').popover('hide'){% endhighlight %}

#### `.popover('toggle')`

Attiva/disattiva il popover di un elemento. **Ritorna al chiamante prima che il popover sia stato effettivamente mostrato o nascosto** (prima che si verifichi l'evento `shown.bs.popover` o l'evento `hidden.bs.popover`). Questo è considerato un'attivazione "manuale" del popover.

{% highlight js %}$('#element').popover('toggle'){% endhighlight %}

#### `.popover('dispose')`

Nasconde e distrugge il popover di un elemento.

{% highlight js %}$('#element').popover('dispose'){% endhighlight %}

#### `.popover('enable')`

Fornisce al popover di un elemento la possibilità di essere mostrato. **I popover sono abilitati in modo predefinito.**

{% highlight js %}$('#element').popover('enable'){% endhighlight %}

#### `.popover('disable')`

Rimuove la capacità di mostrare il popover di un elemento. Il popover potrà essere mostrato solo se è riattivato.

{% highlight js %}$('#element').popover('disable'){% endhighlight %}

#### `.popover('toggleEnabled')`

Attiva/disattiva la possibilità che il popover di un elemento sia mostrato o nascosto.

{% highlight js %}$('#element').popover('toggleEnabled'){% endhighlight %}

#### `.popover('update')`

Aggiorna la posizione del popover di un elemento.

{% highlight js %}$('#element').popover('update'){% endhighlight %}

### Eventi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo di evento</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.popover</td>
      <td>Questo evento si attiva immediatamente quando viene chiamato il metodo <code>show</code>.</td>
    </tr>
    <tr>
      <td>shown.bs.popover</td>
      <td>Questo evento viene attivato quando il popover è stato reso visibile all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
    <tr>
      <td>hide.bs.popover</td>
      <td>Questo evento si attiva immediatamente quando viene chiamato il metodo <code>hide</code>.</td>
    </tr>
    <tr>
      <td>hidden.bs.popover</td>
      <td>Questo evento viene generato quando il popover ha finito di essere nascosto all'utente (attenderà il completamento delle transizioni CSS)..</td>
    </tr>
    <tr>
      <td>inserted.bs.popover</td>
      <td>Questo evento si attiva dopo l'evento <code>show.bs.popover</code> quando il modello del popover è stato aggiunto al DOM.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myPopover').on('hidden.bs.popover', function () {
  // azioni
})
{% endhighlight %}
