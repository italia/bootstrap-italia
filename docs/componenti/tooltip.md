---
layout: docs
title: Tooltip
description: Documentazione ed esempi per aggiungere tooltip personalizzati.
group: componenti
toc: true
---

I tooltip sono suggerimenti personalizzati con CSS e JavaScript, utilizzano CSS3 per le animazioni e gli attributi `data-bs` per l'archiviazione di titoli locali.

{% capture callout %}

#### Accessibilità

I tooltip funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva.
I tooltip di Bootstrap Italia restano visibili quando il puntatore si sposta dal
trigger al tooltip stesso, migliorando così la conformità al criterio WCAG 2.1
**1.4.13 – Content on Hover or Focus**. Per gli utenti da tastiera il requisito
è già soddisfatto tramite la gestione del focus.

È importante aggiungere tooltip solo ad elementi HTML che sono tradizionalmente attivabili da tastiera e interattivi (link,
pulsanti, o elementi di form).

Sebbene arbitrariamente gli elementi HTML (come `<span>`) possano essere resi attivabili tramite l'attributo `tabindex="0"`,
ciò aggiungerà interruzioni di tabulazioni potenzialmente dannose per gli utenti che usano la tastiera per navigare.
Inoltre, la maggior parte delle tecnologie assistive in questa situazione non annuncia il tooltip come ci si potrebbe
invece attendere.

Infine, non fare affidamento esclusivamente sull'evento "mouse over" come innesco del tooltip, in quanto ciò renderà impossibile
l'attivazione per gli utenti che usano la tastiera per navigare.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Cose da sapere quando usi il plugin tooltip:

- I tooltip si basano sulla libreria di terze parti [Popper.js](https://popper.js.org/).
  Per fare in modo che i tooltip funzionino è quindi necessario includere `popper.min.js` prima di
  bootstrap-italia.js o usare la versione _bundle_ che contiene già Popper.js.
- I tooltip sono opt-in per ragioni di performance, quindi **devi inizializzarli tu stesso** con il codice che trovi di seguito.
- I tooltip con titoli vuoti non saranno mai visualizzati.
- Specifica `container: 'body'` per evitare problemi di rendering in componenti più complessi (come nei gruppi di input, gruppi di pulsanti, etc).
- Attivare i tooltip su elementi nascosti non funzionerà.
- I tooltip per gli elementi `.disabled` o `disabled` devono essere attivati da un elemento contenitore.
- Quando attivati da collegamenti ipertestuali che si estendono su più righe, i tooltip verranno centrati. Usa `white-space: nowrap;`sui tuoi `<a>` per evitare questo comportamento.
- I tooltip devono essere nascosti prima che i loro elementi corrispondenti siano stati rimossi dal DOM.

## Abilitazione di tooltip

Un modo per inizializzare tutti i tooltip su una pagina è quello di selezionarli tramite il loro attributo `data-bs-toggle`:

```js
import { Tooltip } from 'bootstrap-italia'

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl);
})
```

### Altri esempi

Passa il mouse sopra i link sottostanti per visualizzare i tooltip:

{% comment %}Example name: Esempi{% endcomment %}
{% capture example %}
<div class="tooltip-demo">
  <p class="font-serif muted">
    Ecco un <a href="#" data-bs-toggle="tooltip" title="Primo tooltip">bianco scenario</a><br/>
    per tratteggiarvi l’accompagnamento<br/>
    degli oggetti di sfondo che pur vivono.<br/>
    Non ne sarò <a href="#" data-bs-toggle="tooltip" title="Secondo tooltip">l’artefice</a> impaziente.<br/>
    Berrò alle coppe della nostalgia,<br/>
    avrò preteso d’ozio nelle lacrime...<br/>
    perché non mi ribello alla natura:<br/>
    la mia lentezza li esaspera...<br/>
    La mia lentezza? No, la mia fiducia.<br/>
    Per adesso è deserto.<br/>
    <a href="#" data-bs-toggle="tooltip" title="Terzo tooltip">Il mondo può rifarsi senza me</a>,<br/>
    E intanto gli altri mi denigreranno
  </p>
  <small>
    <em>La città nuova, Alda Merini</em>
  </small>
</div>
{% endcapture %}{% include example.html content=example %}

Passa il mouse sopra i pulsanti sottostanti per vedere le quattro direzioni dei tooltip: sopra, destra, sotto, e sinistra.

{% comment %}Example name: Varianti di allineamento{% endcomment %}
{% capture example %}
<div class="tooltip-demo">
  <div class="bd-example-tooltips">
    <div class="container">
      <div class="row mt-3">
        <div class="col-6">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip in alto" style="width: 100%;">Tooltip in alto</button>
        </div>
        <div class="col-6">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom" style="width: 100%;">Tooltip in basso</button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-5"></div>
        <div class="col-6">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip a sinistra" style="width: 100%;">Tooltip a sinistra</button>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col-6">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip a destra" style="width: 100%;">Tooltip a destra</button>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-6">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>con</u> <strong>HTML</strong>" style="width: 100%;">Tooltip con HTML</button>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

E con codice HTML personalizzato:

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>con</u> <strong>HTML</strong>">
  Tooltip con HTML
</button>
```

## Attivazione tramite codice

{% include callout-bundle-methods.md %}

Il plugin del tooltip genera contenuto e markup su richiesta, e in modo predefinito posiziona i tooltip dopo i loro elementi attivati.

#### Tramite data attributes

Di seguito è mostrato un esempio che esplicita il funzionamento interno di Bootstrap per la gestione di Tooltip.

Il markup richiesto per un tooltip è costituito da un attributo `data-bs-` e `title` sull'elemento HTML sul quale si vuole
abilitare un tooltip. Ad esempio, quando nella pagina è scritto questo codice HTML:

```html
<a href="#" data-bs-toggle="tooltip" title="Testo di esempio del tooltip">Link che attiva il tooltip</a>
```

Nel momento in cui tale elemento riceve focus da tastiera (o c'è un evento `hover`), Bootstrap genera il markup seguente:

```html
<a href="#" data-bs-toggle="tooltip" title="Testo di esempio del tooltip!" aria-describedby="tooltip0123456">Link che attiva il tooltip</a>

<div class="tooltip bs-tooltip-top" role="tooltip" id="tooltip0123456">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">Testo di esempio del tooltip</div>
</div>
```

#### Tramite JavaScript

È possibile attivare un tooltip tramite JavaScript:

```js
import { Tooltip } from 'bootstrap-italia';

document.querySelectorAll('.tooltipEl').forEach(el => {
  new Tooltip(el);
});
```

#### Opzioni

Le opzioni possono essere passate tramite attributi data o tramite JavaScript. Per gli attributi data, aggiungi l'opzione nome a `data-bs-`, come in `data-bs-animation=""`.

<div class="table-responsive">
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
        <td><code>allowList</code></td>
        <td>oggetto</td>
        <td><a href="https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/javascript/#sanitizer">Valore predefinito</a></td>
        <td>Oggetto che contiene attributi e tag consentiti.</td>
      </tr>
      <tr>
        <td><code>animazione</code></td>
        <td>booleano</td>
        <td><code>vero</code></td>
        <td>Applica una transizione di dissolvenza CSS al tooltip.</td>
      </tr>
      <tr>
        <td><code>boundary</code></td>
        <td>string, element</td>
        <td><code>'clippingParents'</code></td>
        <td>Limite del vincolo di overflow del tooltip (si applica solo al modificatore preventOverflow di Popper).
          Per impostazione predefinita, è <code>'clippingParents'</code> e può accettare un riferimento
          HTMLElement (solo tramite JavaScript). Per maggiori informazioni, consulta la documentazione di Popper
          su <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow</a>.</td>
      </tr>
      <tr>
        <td><code>contenitore</code></td>
        <td>stringa, elemento, false</td>
        <td><code>false</code></td>
        <td>Aggiunge il suggerimento a un elemento specifico. Esempio: <code>contenitore: 'corpo'</code>. Questa
          opzione è particolarmente utile in quanto consente di posizionare il tooltip nel flusso del documento
          vicino all'elemento di attivazione, il che impedirà al tooltip di allontanarsi dall'elemento di
          attivazione durante il ridimensionamento di una finestra.</td>
      </tr>
      <tr>
        <td><code>customClass</code></td>
        <td>stringa, funzione</td>
        <td><code>''</code></td>
        <td>Aggiungi classi al tooltip quando viene visualizzato. Nota che queste classi verranno aggiunte in
          aggiunta a tutte le classi specificate nel modello. Per aggiungere più classi, separale con spazi:
          <code>'class-1 class-2'</code>. Puoi anche passare una funzione che dovrebbe restituire una singola
          stringa contenente nomi di classi aggiuntivi.
        </td>
      </tr>
      <tr>
        <td><code>delay</code></td>
        <td>number, object</td>
        <td><code>0</code></td>
        <td>Ritardo nella visualizzazione e nell'occultamento del tooltip (ms): non si applica al tipo di trigger
          manuale. Se viene fornito un numero, il ritardo viene applicato sia a hide/show. La struttura
          dell'oggetto è: <code>delay: { "show": 500, "hide": 100 }</code>.</td>
      </tr>
      <tr>
        <td><code>fallbackPlacements</code></td>
        <td>array</td>
        <td><code>['top', 'right', 'bottom', 'left']</code></td>
        <td>Definisci i posizionamenti di fallback fornendo un elenco di posizionamenti nell'array (in ordine di
          preferenza). Per maggiori informazioni, consulta la <a
            href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">documentazione sul
            comportamento</a> di Popper.</td>
      </tr>
      <tr>
        <td><code>html</code></td>
        <td>booleano</td>
        <td><code>false</code></td>
        <td>Consenti HTML nella descrizione comando. Se è vero, i tag HTML nel <code>titolo</code> della descrizione
          comando verranno renderizzati nella descrizione comando. Se è falso, verrà utilizzata la proprietà
          <code>innerText</code> per inserire contenuto nel DOM. Usa il testo se sei preoccupato per gli attacchi
          XSS.
        </td>
      </tr>
      <tr>
        <td><code>offset</code></td>
        <td>array, stringa, funzione</td>
        <td><code>[0, 0]</code></td>
        <td>Offset del tooltip rispetto al suo target. Puoi passare una stringa negli attributi dati con valori
          separati da virgole come: <code>data-bs-offset="10,20"</code>. Quando una funzione viene utilizzata per
          determinare l'offset, viene chiamata con un oggetto contenente il posizionamento del popper, il
          riferimento e i rettangoli del popper come primo argomento. Il nodo DOM dell'elemento di attivazione
          viene passato come secondo argomento. La funzione deve restituire un array con due numeri: <a
            href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a
            href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>. Per maggiori
          informazioni, consulta la <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">documentazione
            offset</a> di Popper.
        </td>
      </tr>
      <tr>
        <td><code>placement</code></td>
        <td>string, function</td>
        <td><code>'top'</code></td>
        <td>Come posizionare il tooltip: auto, top, bottom, left, right. Quando viene specificato <code>auto</code>,
          il tooltip verrà riorientato dinamicamente. Quando una funzione viene utilizzata per determinare il
          posizionamento, viene chiamata con il nodo DOM tooltip come primo argomento e il nodo DOM elemento di
          attivazione come secondo. Il contesto <code>this</code> è impostato sull'istanza tooltip.</td>
      </tr>
      <tr>
        <td><code>popperConfig</code></td>
        <td>null, object, function</td>
        <td><code>null</code></td>
        <td>Per modificare la configurazione Popper predefinita di Bootstrap, vedere <a
            href="https://popper.js.org/docs/v2/constructors/#options">Configurazione di Popper</a>. Quando una
          funzione viene utilizzata per creare la configurazione Popper, viene chiamata con un oggetto che
          contiene la configurazione Popper predefinita di Bootstrap. Ti aiuta a utilizzare e unire la
          configurazione predefinita con la tua. La funzione deve restituire un oggetto di configurazione per
          Popper.</td>
      </tr>
      <tr>
        <td><code>sanitize</code></td>
        <td>boolean</td>
        <td><code>true</code></td>
        <td>Abilita o disabilita la sanificazione. Se attivate, le opzioni <code>'template'</code>,
          <code>'content'</code> e <code>'title'</code> verranno sanificate.
        </td>
      </tr>
      <tr>
        <td><code>sanitizeFn</code></td>
        <td>null, function</td>
        <td><code>null</code></td>
        <td>Qui puoi specificare la tua funzione di sanificazione. Può essere utile se preferisci usare una libreria
          dedicata per eseguire la sanificazione.</td>
      </tr>
      <tr>
        <td><code>selector</code></td>
        <td>string, false</td>
        <td><code>false</code></td>
        <td>Se viene fornito un selettore, gli oggetti tooltip saranno delegati ai target specificati. In pratica,
          questo viene usato anche per applicare tooltip agli elementi DOM aggiunti dinamicamente (supporto
          <code>jQuery.on</code>). Guarda <a href="https://github.com/twbs/bootstrap/issues/4215">questo
            problema</a> e <a href="https://codepen.io/Johann-S/pen/djJYPb">un esempio informativo</a>.
          <strong>Nota</strong>: l'attributo <code>title</code> non deve essere utilizzato come selettore.
        </td>
      </tr>
      <tr>
        <td><code>template</code></td>
        <td>string</td>
        <td>
          <code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="tooltip-arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code>
        </td>
        <td>HTML di base da utilizzare durante la creazione del tooltip. Il <code>title</code> del tooltip verrà
          inserito in <code>.tooltip-inner</code>. <code>.tooltip-arrow</code> diventerà la freccia del tooltip.
          L'elemento wrapper più esterno dovrebbe avere la classe <code>.tooltip</code> e
          <code>role="tooltip"</code>.
        </td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>stringa, elemento, funzione</td>
        <td><code>''</code></td>
        <td>Valore predefinito del titolo se l'attributo <code>title</code> non è presente. Se viene fornita una
          funzione, verrà chiamata con il suo riferimento <code>this</code> impostato sull'elemento a cui è
          collegato il popover.</td>
      </tr>
      <tr>
        <td><code>trigger</code></td>
        <td>stringa</td>
        <td><code>'hover focus'</code></td>
        <td>Come viene attivato il tooltip: clic, passaggio del mouse, focus, manuale. Puoi passare più trigger;
          separali con uno spazio. <code>'manual'</code> indica che il tooltip verrà attivato a livello di
          programmazione tramite i metodi <code>.tooltip('show')</code>, <code>.tooltip('hide')</code> e
          <code>.tooltip('toggle')</code>; questo valore non può essere combinato con nessun altro trigger.
          <code>'hover'</code> da solo genererà tooltip che non possono essere attivati ​​tramite la tastiera e
          dovrebbe essere utilizzato solo se sono presenti metodi alternativi per trasmettere le stesse
          informazioni agli utenti della tastiera.
        </td>
      </tr>
    </tbody>
  </table>
</div>

#### Metodi

{% include callout-danger-async-methods.md %}

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Metodo</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      {% include standard-methods.html class="Tooltip" %}
      <tr>
        <td>show</td>
        <td>Mostra il tootlip di un elemento. Ritorna al chiamante prima che il tooltip sia stato effettivamente mostrato (i.e. prima che si verifichi l'evento "shown.bs.tooltip"). Questo è considerato un'attivazione "manuale" del tooltip. I tooltip senza titoli non vengono mai visualizzati.</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>Nascondi il tootltip di un elemento. Ritorna al chiamante prima che il tooltip sia stato effettivamente nascosto (i.e. prima che si verifichi l'evento "hidden.bs.tooltip"). Questo è considerato un'attivazione "manuale" del tooltip.</td>
      </tr>
      <tr>
        <td>toggle</td>
        <td>Attiva/Disattiva il tooltip di un elemento. Ritorna al chiamante prima che il tooltip sia stato effettivamente mostrato o nascosto (i.e. prima che si verifichi l'evento "shown.bs.tooltip" o l'evento "hidden.bs.tooltip"). Questo è considerato un'attivazione "manuale" del tooltip.</td>
      </tr>
      <tr>
        <td>enable</td>
        <td>Fornisce al tooltip di un elemento la possibilità di essere mostrato. I tooltip sono abilitati in modo predefinito.</td>
      </tr>
      <tr>
        <td>disable</td>
        <td>Rimuove la capacità di mostrare il tooltip di un elemento. Il tooltip potrà essere mostrato solo se è riattivato.</td>
      </tr>
      <tr>
        <td>toggleEnabled</td>
        <td>Attiva/disattiva la possibilità che il tooltip di un elemento sia mostrato o nascosto.</td>
      </tr>
      <tr>
        <td>update</td>
        <td>Aggiorna la posizione del tooltip di un elemento.</td>
      </tr>
    </tbody>
  </table>
</div>

#### Eventi

<div class="table-responsive">
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
        <td>Questo evento si attiva immediatamente quando viene chiamato il metodo <code>show</code>.</td>
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
</div>
