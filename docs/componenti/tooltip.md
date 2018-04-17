---
layout: docs
title: Tooltip
description: Documentazione ed esempi per aggiungere tooltips personalizzati di Bootstrap con CSS e JavaScript utilizzando CSS3 per animazioni e attributi data per l'archiviazione di titoli locali.
group: componenti
toc: true
---

{% capture callout %}
##### Accessibiltà: I tooltip funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva

È importante aggiungere tooltip solo ad elementi HTML che sono tradizionalmente attivabili da tastiera e interattivi (link,
bottoni, o elementi di form).

Sebbene arbitrariamente gli elementi HTML (come `<span>`) possano essere resi attivabili tramite l'attributo `tabindex="0"`,
ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano la tastiera per navigare.
Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il tooltip come ci si potrebbe
invece attendere.

Infine, non fare affidamento esclusivamente sull'`hover` come innesco del tooltip, in quanto ciò renderà impossibile
l'attivazione per gli utenti che usano la tastiera per navigare.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Cose da sapere quando usi il plugin tooltip:

- I tooltip si basano sulla libreria di terze parti [Popper.js](https://popper.js.org/).
Per fare in modo che i tooltip funzionino è quindi necessario includere `popper.min.js` prima di
bootstrap-italia.js o usare la versione _bundle_ che contiene già Popper.js.
- I tooltip sono opt-in per ragioni di performance, quindi **devi inizializzarli tu stesso** con il codice che trovi di seguito.
- I tooltip con titoli vuoti non saranno mai visualizzati.
- Specifica `container: 'body'` per evitare problemi di rendering in componenti più complessi (come nei gruppi di input, gruppi di bottoni, etc).
- Attivare i tooltip su elementi nascosti non funzionerà.
- I tooltip per gli elementi `.disabled` o `disabled` devono essere attivati da un elemento contenitore.
- Quando attivati da collegamenti ipertestuali che si estendono su più righe, i tooltip verranno centrati. Usa `white-space: nowrap;`sui tuoi `<a>` per evitare questo comportamento.
- I tooltip devono essere nascosti prima che i loro elementi corrispondenti siano stati rimossi dal DOM.

## Esempio: Abilita i tooltip ovunque

Un modo per inizializzare tutti i tooltip su una pagina è quello di selezionarli tramite il loro attributo `data-toggle`:

{% highlight js %}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
{% endhighlight %}

## Esempi

Passa il mouse sopra i link sottostanti per visualizzare i tooltip:

<div class="bd-example tooltip-demo">
  <p class="muted">
    Ecco un <a href="#" data-toggle="tooltip" title="Primo tooltip">bianco scenario</a><br/>
    per tratteggiarvi l’accompagnamento<br/>
    degli oggetti di sfondo che pur vivono.<br/>
    Non ne sarò <a href="#" data-toggle="tooltip" title="Secondo tooltip">l’artefice</a> impaziente.<br/>
    Berrò alle coppe della nostalgia,<br/>
    avrò preteso d’ozio nelle lacrime...<br/>
    perché non mi ribello alla natura:<br/>
    la mia lentezza li esaspera...<br/>
    La mia lentezza? No, la mia fiducia.<br/>
    Per adesso è deserto.<br/>
    <a href="#" data-toggle="tooltip" title="Terzo tooltip">Il mondo può rifarsi senza me</a>,<br/>
    E intanto gli altri mi denigreranno
  </p>
  <p>
    <em>La città nuova, Alda Merini</em>
  </p>
</div>

Passa il mouse sopra i bottoni sottostanti per vedere le quattro direzioni dei tooltip: sopra, destra, sotto, e sinistra.

<div class="bd-example tooltip-demo">
  <div class="bd-example-tooltips">
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip in alto</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip a destra</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip in basso</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip a sinistra</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip con HTML</button>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip in alto
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Tooltip a destra
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  Tooltip in basso
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  Tooltip a sinistra
</button>
{% endhighlight %}

E con codice HTML personalizzato:

{% highlight html %}
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip con HTML
</button>
{% endhighlight %}

## Uso

Il plugin del tooltip genera contenuto e markup su richiesta, e in modo predefinito posiziona i tooltip dopo i loro elementi attivati.

Attivare il tooltip tramite JavaScript:

{% highlight js %}
$('#example').tooltip(options)
{% endhighlight %}

### Markup

Di seguito è mostrato un esempio che esplicita il funzionamento interno di Bootstrap per la gestione di Tooltip.

Il markup richiesto per un tooltip è costituito da un attributo `data-` e `title` sull'elemento HTML sul quale si vuole
abilitare un tooltip. Ad esempio, quando nella pagina è scritto questo codice HTML:

{% highlight html %}
<a href="#" data-toggle="tooltip" title="Testo di esempio del tooltip">Link che attiva il tooltip</a>
{% endhighlight %}

Nel momento in cui tale elemento riceve focus da tastiera (o c'è un evento `hover`), Bootstrap genera il markup seguente:

{% highlight html %}
<a href="#" data-toggle="tooltip" title="Testo di esempio del tooltip!" aria-describedby="tooltip0123456">Link che attiva il tooltip</a>

<div class="tooltip bs-tooltip-top" role="tooltip" id="tooltip0123456">
  <div class="arrow"></div>
  <div class="tooltip-inner">Testo di esempio del tooltip</div>
</div>
{% endhighlight %}

### Opzioni

Le opzioni possono essere passate tramite attibuti data o tramite JavaScript.
Per gli attributi data, aggiungi l'opzione nome a `data-`, come in `data-animation=""`.

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
      <td><code>'true'</code> o <code>'false'</code></td>
      <td>true</td>
      <td>Applica una transizione di dissolvenza CSS al tooltip</td>
    </tr>
    <tr>
      <td>container</td>
      <td>string | element | false</td>
      <td>false</td>
      <td>
        <p>Aggiunge il tooltip a un elemento specifico. Esempio: <code>container: 'body'</code>. Questa opzione è particolarmente utile in quanto consente di posizionare il tootlip nel flusso del documento vicino all'elemento di attivazione -che impedirà al tooltip di allontanarsi dall'elemento di attivazione durante il ridimensionamento della finestra.</p>
      </td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number | object</td>
      <td>0</td>
      <td>
        <p>Il ritardo che mostra e nasconde il tooltip (ms) - non si applica al tipo di trigger manuale</p>
        <p>Se viene fornito un numero, il ritardo viene applicato sia sul mostra che sul nascondi</p>
        <p>La struttura dell'oggetto è: <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td>html</td>
      <td>boolean</td>
      <td>false</td>
      <td>
        <p>Consente codice HTML nel tooltip.</p>
        <p>Se true, i tag HTML nel <code>title</code> del tooltip sarà renderizzato nel tooltip. Se false, il metodo di jQuery <code>text</code> verrà utilizzato per inserire il contenuto nel DOM.</p>
        <p>Usa il testo se sei preoccupato per gli attacchi XSS.</p>
      </td>
    </tr>
    <tr>
      <td>placement</td>
      <td>string | function</td>
      <td>'top'</td>
      <td>
        <p>Come posizionare il tooltip - auto | top | bottom | left | right.<br>Quando è specificato <code>auto</code>, il tooltip cambierà in modo dinamico.</p>
        <p>Quando viene utilizzata una funzione per determinare il posizionamento, viene chiamato con il nodo DOM del tooltip come primo argomento e il nodo DOM dell'elemento di attivazione come secondo. Il contesto <code>this</code> è impostato sull'istanza del tooltip.</p>
      </td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string | false</td>
      <td>false</td>
      <td>Dato un selettore, gli oggetti del tooltip saranno delegati agli obiettivi specificati. In pratica, questo viene usato per abilitare il contenuto HTML dinamico per aggiungere i popover. Guarda <a href="https://github.com/twbs/bootstrap/issues/4215">questo</a> e <a href="https://jsbin.com/zopod/1/edit">un esempio informativo</a>.</td>
    </tr>
    <tr>
      <td>template</td>
      <td>string</td>
      <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>HTML di base da utilizzare quando crei il tooltip.</p>
        <p>Il <code>title</code> del tooltip verrà inserito nel <code>.tooltip-inner</code>.</p>
        <p><code>.arrow</code> diventerà la freccia del tooltip.</p>
        <p>L'elemento contenitore più esterno dovrebbe avere la classe <code>.tooltip</code> e il <code>role="tooltip"</code>.</p>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Il valore predefinito del titolo se l'attributo <code>title</code> non è presente.</p>
        <p>Data una funzione, verrà richiamato con la sua referenza <code>this</code> impostata sull'elemento a cui è collegato il tooltip.</p>
      </td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>string</td>
      <td>'hover focus'</td>
      <td>
        <p>Come viene richiamato il tooltip  - click | hover | focus | manual. Puoi passare più eventi; separati da uno spazio.</p>
        <p><code>'manual'</code> indica che il tooltip verrà attivato a livello di codice tramite i metodi <code>.tooltip('show')</code>, <code>.tooltip('hide')</code> e <code>.tooltip('toggle')</code>; questo valore non può essere combinato con nessun altro trigger.</p>
        <p><code>'hover'</code> ne deriverà che i tooltip non possono essere attivati tramite la tastiera, e dovrebbero essere usati solo se sono presenti metodi alternativi per trasmettere le stesse informazioni per gli utenti di tastiera.</p>
      </td>
    </tr>
    <tr>
      <td>offset</td>
      <td>number | string</td>
      <td>0</td>
      <td>Offset del tooltip relativo al suo target. Per maggiori informazioni fare riferimento alla <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">documentazione sugli offset</a> di Popper.js.</td>
    </tr>
    <tr>
      <td>fallbackPlacement</td>
      <td>string | array</td>
      <td>'flip'</td>
      <td>Permette di specificare quale posizione Popper userà nel fallback. Per maggiori informazioni fare riferimento alla <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.behavior">documentazione sui comportamenti</a>  di Popper.js</td>
    </tr>
    <tr>
      <td>boundary</td>
      <td>string | element</td>
      <td>'scrollParent'</td>
      <td>Limite del vincolo di overflow del tooltip. Accetta i valori di <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, o un riferimento HTMLElement (JavaScript only). Per maggiori informazioni fare riferimento alla <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">documentezione su preventOverflow</a> di Popper.js.</td>
    </tr>
  </tbody>
</table>

### Metodi

{% include callout-danger-async-methods.md %}

#### `$().tooltip(options)`

Allega un gestore del tooltip a una raccolta di elementi.

#### `.tooltip('show')`

Mostra il tootlip di un elemento. **Ritorna al chiamante prima che il tooltip sia stato effettivamente mostrato** (i.e. prima che si verifichi l'evento `shown.bs.tooltip`). Questo è considerato un'attivazione "manuale" del tooltip. I tooltip senza titoli non vengono mai visualizzati.

{% highlight js %}$('#element').tooltip('show'){% endhighlight %}

#### `.tooltip('hide')`

Nascondi il tootltip di un elemento. **Ritorna al chiamante prima che il tooltip sia stato effettivamente nascosto** (i.e. prima che si verifichi l'evento `hidden.bs.tooltip`). Questo è considerato un'attivazione "manuale" del tooltip.

{% highlight js %}$('#element').tooltip('hide'){% endhighlight %}

#### `.tooltip('toggle')`

Attiva/Disattiva il tooltip di un elemento. **Ritorna al chiamante prima che il tooltip sia stato effettivamente mostrato o nascosto** (i.e. prima che si verifichi l'evento `shown.bs.tooltip` o l'evento `hidden.bs.tooltip`). Questo è considerato un'attivazione "manuale" del tooltip.

{% highlight js %}$('#element').tooltip('toggle'){% endhighlight %}

#### `.tooltip('dispose')`

Nascondi e distrugge il tooltip di un elemento. I tooltip che utilizzano la delega (che vengono creati utilizzando [l'opzione `selector`](#options)) non posono essere distrutti individualmente su elementi trigger discendenti.

{% highlight js %}$('#element').tooltip('dispose'){% endhighlight %}

#### `.tooltip('enable')`

Fornisce al tooltip di un elemento la possibilità di essere mostrato. **I tooltip sono abilitati in modo predefinito.**

{% highlight js %}$('#element').tooltip('enable'){% endhighlight %}

#### `.tooltip('disable')`

Rimuove la capacità di mostrare il tooltip di un elemento. Il tooltip potrà essere mostrato solo se è riattivato.

{% highlight js %}$('#element').tooltip('disable'){% endhighlight %}

#### `.tooltip('toggleEnabled')`

Attiva/disattiva la possibilità che il tooltip di un elemento sia mostrato o nascosto.

{% highlight js %}$('#element').tooltip('toggleEnabled'){% endhighlight %}

#### `.tooltip('update')`

Aggiorna la posizione del tooltip di un elemento.

{% highlight js %}$('#element').tooltip('update'){% endhighlight %}

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
      <td>show.bs.tooltip</td>
      <td>Questo evento si attiva immediatamente quando viene chiamato il metodo <code>show</code>.</td>.
    </tr>
    <tr>
      <td>shown.bs.tooltip</td>
      <td>Questo evento viene attivato quando il tooltip è stato reso visibile all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
    <tr>
      <td>hide.bs.tooltip</td>
      <td>Questo evento si attiva immediatamente quando viene chiamato il metodo <code>hide</code>.</td>
    </tr>
    <tr>
      <td>hidden.bs.tooltip</td>
      <td>Questo evento viene generato quando il tooltip ha finito di essere nascosto all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
    <tr>
      <td>inserted.bs.tooltip</td>
      <td>Questo evento si attiva dopo l'evento <code>show.bs.tooltip</code> quando il modello del tooltip è stato aggiunto al DOM.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myTooltip').on('hidden.bs.tooltip', function () {
  // fai qualcosa
})
{% endhighlight %}
