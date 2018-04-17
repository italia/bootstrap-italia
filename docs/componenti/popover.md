---
layout: docs
title: Popover
description: Documentazione ed esempi per aggiungere popover (tooltip informativi) a qualsiasi elemento del tuo sito.
group: componenti
toc: true
---

{% capture callout %}
##### Accessibiltà: I popover funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva

Allo stesso modo di quanto avviene per i [tooltip]({{ site.baseurl }}/docs/componenti/tooltips/),
il codice generato per i popover è accessibile.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Cose da sapere quando si utilizza il plugin popover:

- I popover si basano sulla libreria di terze parti [Popper.js](https://popper.js.org/).
Per fare in modo che i popover funzionino è necessario includere `popper.min.js` prima di
bootstrap-italia.js o usare la versione _bundle_ che contiene già Popper.js.
- I popovers richiedono il [plugin tooltip]({{ site.baseurl }}/docs/componenti/tooltips/) come dipendenza.
- I popover sono opt-in per ragioni di performance, quindi **devi inizializzarli tu stesso** con il codice che trovi di seguito.
- I `title` e i `content` con valori vuoti non mostreranno mai popover.
- Specifica `container: 'body'` per evitare problemi di rendering in componenti più complessi (come nei gruppi di input, gruppi di bottoni, etc).
- Attivare i popover su elementi nascosti non funzionerà.
- I popover per gli elementi `.disabled` o `disabled` devono essere attivati da un elemento contenitore.
- Quanto attivato da ancore che si estendono su più linee, i popover verranno centrati tra la larghezza complessiva delle ancore. Usa `white-space: nowrap;` sugli elementi `<a>` per evitare questo comportamento.
- I Popover devono essere nascosti prima che i loro elementi corrispondenti siano stati rimossi dal DOM.

## Esempio: Abilita i popover ovunque

Un modo per inizializzare tutti i popovers in una pagina è quello di selezionarli tramite il loro attributo `data-toggle`:

{% highlight js %}
$(function () {
  $('[data-toggle="popover"]').popover()
})
{% endhighlight %}

## Esempio: Usare l'opzione `container`

Quando hai alcuni stili su un elemento genitore che interferiscono con un popover, è consigliato specificare un `container` personalizzato in modo che l'HTML del popover appaia invece all'interno di quell'elemento.

{% highlight js %}
$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
{% endhighlight %}

## Esempio

{% capture example %}
<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non trovi?">Clicca par attivare/disattivare il popover</button>
{% endcapture %}{% include example.html content=example %}

### Le quattro direzioni

Sono disponibili quattro opzioni: allineato in alto, a destra, in basso e a sinistra.

<div class="bd-example popover-demo">
  <div class="bd-example-popovers">
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover in alto
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover a destra
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover in basso
    </button>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover a sinistra
    </button>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover in alto
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover a destra
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover in basso
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover a sinistra
</button>
{% endhighlight %}

### Dismiss al click successivo

Usa l'evento `focus` per ignorare i popover sul clic successivo dell'utente di un elemento diverso rispetto all'elemento di attivazione / disattivazione.

{% capture callout %}
#### Markup specifico richiesto per ignorare il click successivo

Per il giusto comportamento cross-browser e cross-platform, è necessario utilizzare il tag `<a>`, _non_ il tag `<button>`, ed è necessario anche includere l'attributo [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture example %}
<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non trovi?">Dismissible popover</a>
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

Le opzioni possono essere passate tramite attibuti data o tramite JavaScript. Per gli attributi data, aggiungi l'opzione nome a `data-`, come in `data-animation=""`.

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
      <td>animation</td>
      <td>boolean</td>
      <td>true</td>
      <td>Applica una transizione di dissolvenza CSS al popover</td>
    </tr>
    <tr>
      <td>container</td>
      <td>string | element | false</td>
      <td>false</td>
      <td>
        <p>Aggiunge il popover a un elemento specifico. Esempio: <code>container: 'body'</code>. Questa opzione è particolarmente utile in quanto consente di posizionare il popover nel flusso del documento vicino all'elemento di attivazione - che impedirà al popover di fluttuare dall'elemento di attivazione durante il ridimensionamento della finestra.</p>
      </td>
    </tr>
    <tr>
      <td>content</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Il valore predefinito del contenuto se l'attributo <code>data-content</code> non è presente.</p>
        <p>Data una funzione, verrà richiamato con la sua referenza <code>this</code> impostata sull'elemento a cui è collegato il popover.</p>
      </td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number | object</td>
      <td>0</td>
      <td>
        <p>Il ritardo che mostra e nasconde il popover (ms) - non si applica al tipo di trigger manuale</p>
        <p>Se viene fornito un numero, il ritardo viene applicato sia sul mostra che sul nascondi</p>
        <p>La struttura dell'oggetto è: <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td>html</td>
      <td>boolean</td>
      <td>false</td>
      <td>Inserisce l' HTML all'interno del popover. Se false, il metodo jQuery <code>text</code> verrà utilizzato per inserire contenuto nel DOM. Usa il testo se sei preoccupato per gli attacchi XSS.</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>string | function</td>
      <td>'right'</td>
      <td>
        <p>Come posizionare il popover - auto | top | bottom | left | right.<br>Quando è specificato <code>auto</code>, il popover verrà direzionato in modo dinamico.</p>
        <p>Quando viene utilizzata una funzione per determinare il posizionamento, viene chiamato con il nodo DOM del popover come primo argomento e il nodo DOM dell'elemento di attivazione come secondo. Il contesto <code>this</code> è impostato sull'istanza del popover.</p>
      </td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string | false</td>
      <td>false</td>
      <td>Dato un selettore, gli oggetti del popover saranno delegati agli obiettivi specificati. In pratica, questo viene usato per abilitare il contenuto HTML dinamico per aggiungere i popover. Guarda <a href="https://github.com/twbs/bootstrap/issues/4215">questo</a> e <a href="https://jsbin.com/zopod/1/edit">un esempio informativo</a>.</td>
    </tr>
    <tr>
      <td>template</td>
      <td>string</td>
      <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-header"&gt;&lt;/h3&gt;&lt;div class="popover-body"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>Codice HTML di base da usare quando viene creato un popover.</p>
        <p>Il <code>title</code> del popover verrà inserito nel <code>.popover-header</code>.</p>
        <p>Il <code>content</code> del popover verrà inserito nel <code>.popover-body</code>.</p>
        <p><code>.arrow</code> sarà la freccia del popover.</p>
        <p>L'elemento contenitore più esterno dovrebbe avere la classe <code>.popover</code>.</p>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Il valore predefinito del sel'attributo  <code>title</code> non è presente.</p>
        <p>Data una funzione, verrà richiamato con la sua referenza <code>this</code> impostata sull'elemento a cui è collegato il popover.</p>
      </td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>string</td>
      <td>'click'</td>
      <td>Come viene richiamato il popover - click | hover | focus | manual. Puoi passare più eventi; separati da uno spazio. `manual` non può essere combinato con nessun altreo evento.</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>number | string</td>
      <td>0</td>
      <td>Offset del popover relativo al suo target. Per maggiori informazioni fare riferimento alla <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">documentazione sugli offset</a> di Popper.js.</td>
    </tr>
    <tr>
      <td>fallbackPlacement</td>
      <td>string | array</td>
      <td>'flip'</td>
      <td>Permette di specificare quale posizione Popper userà nel fallback. Per maggiori informazioni fare riferimento alla
      Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.behavior">documentazione sui comportamenti</a> di Popper.js</td>
    </tr>
    <tr>
      <td>boundary</td>
      <td>string | element</td>
      <td>'scrollParent'</td>
      <td>Limite del vincolo di overflow del popover. Accetta i valori di <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, o un riferimento HTMLElement (JavaScript only). Per maggiori informazioni fare riferimento alla <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a> di Popper.js.</td>
    </tr>
  </tbody>
</table>

### Metodi

{% include callout-danger-async-methods.md %}

#### `$().popover(options)`

Inizializza i popover per una raccolta di elementi.

#### `.popover('show')`

Mostra il popover di un elemento. **Ritorna al chiamante prima che il popover sia stato effettivamente mostrato** (i.e. prima che si verifichi l'evento `shown.bs.popover`). Questo è considerato un'attivazione "manuale" del popover. I popover senza nè titoli nècontenuto non vengono mai visualizzati.

{% highlight js %}$('#element').popover('show'){% endhighlight %}

#### `.popover('hide')`

Nasconde il popover di un elemento. **Ritorna al chiamante prima che il popover sia stato effettivamente nascosto** (i.e. prima che si verifichi l'evento `hidden.bs.popover`). Questo è considerato un'attivazione "manuale" del popover.

{% highlight js %}$('#element').popover('hide'){% endhighlight %}

#### `.popover('toggle')`

Attiva/disattiva il popover di un elemento. **Ritorna al chiamante prima che il popover sia stato effettivamente mostrato o nascosto** (i.e. prima che si verifichi l'evento `shown.bs.popover` o l'evento `hidden.bs.popover`). Questo è considerato un'attivazione "manuale" del popover.

{% highlight js %}$('#element').popover('toggle'){% endhighlight %}

#### `.popover('dispose')`

Nascondi e distrugge il popover di un elemento. I popover che utilizzano la delega (che vengono creati utilizzando [the `selector` option](#options)) on posono essere distrutti individualmente su elementi trigger discendenti.

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
  // do something…
})
{% endhighlight %}
