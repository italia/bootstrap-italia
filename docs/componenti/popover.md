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

#### Accessibilità

I popover funzionano sia con la tastiera che per gli utenti dotati di tecnologia assistiva.
Allo stesso modo di quanto avviene per i [Tooltip]({{ site.baseurl }}/docs/componenti/tooltip/),
il codice generato per i Popover è accessibile.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Cose da sapere quando si utilizza il plugin popover:

- I popover sono opt-in per ragioni di performance, quindi **devi inizializzarli tu stesso** con il codice che trovi di seguito.
- I `title` e i `content` con valori vuoti non mostreranno mai popover.
- Specifica `container: 'body'` per evitare problemi di rendering in componenti più complessi (come nei gruppi di input, gruppi di pulsanti, etc).
- Attivare i popover su elementi nascosti non funzionerà.
- I popover per gli elementi `.disabled` o `disabled` devono essere attivati da un elemento contenitore.
- Quanto attivato da ancore che si estendono su più linee, i popover verranno centrati tra la larghezza complessiva delle ancore. Usa `white-space: nowrap;` sugli elementi `<a>` per evitare questo comportamento.
- I Popover devono essere nascosti prima che i loro elementi corrispondenti siano stati rimossi dal DOM.

## Attivazione generale

Un modo per inizializzare tutti i popovers in una pagina è quello di selezionarli tramite il loro attributo `data-bs-toggle`:

```js
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
```

### Attivazione con opzione container

Quando hai alcuni stili su un elemento genitore che interferiscono con un popover, è consigliato specificare un `container` personalizzato in modo che l'HTML del popover appaia invece all'interno di quell'elemento.

```js
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body',
})
```

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-lg btn-danger fade show" data-bs-toggle="popover" title="Titolo del Popover" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">Clicca per attivare/disattivare il popover</button>
{% endcapture %}{% include example.html content=example %}

## Esempi

### Posizione

Sono disponibili quattro opzioni: allineato in alto, a destra, in basso e a sinistra.

{% comment %}Example name: Varianti di allineamento{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4"></div>
    <div class="col-12 col-md-4">
      <button type="button" class="btn btn-secondary fade show" data-container="body" data-bs-toggle="popover" data-bs-placement="top" title="Titolo del Popover" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
        Popover in alto
      </button>
    </div>
    <div class="col-12 col-md-4"></div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4">
      <button type="button" class="btn btn-secondary fade show" data-container="body" data-bs-toggle="popover" data-bs-placement="right" title="Titolo del Popover" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
        Popover a destra
      </button>
    </div>
    <div class="col-12 col-md-4"></div>
    <div class="col-12 col-md-4 mt-4 mt-md-0">
      <button type="button" class="btn btn-secondary fade show" data-container="body" data-bs-toggle="popover" data-bs-placement="left" title="Titolo del Popover" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
        Popover a sinistra
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4"></div>
    <div class="col-12 col-md-4">
      <button type="button" class="btn btn-secondary fade show" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" title="Titolo del Popover" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue." style="width:100%;">
        Popover in basso
      </button>
    </div>
    <div class="col-12 col-md-4"></div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Titolo con icona e link

È possibile aggiungere un'icona in testa al titolo ed un link in coda al contenuto. In questo casi è necessario aggiungere l'attributo `data-bs-html="true"` al pulsante che apre il Popover e disabilitare la funzione di sanitize attraverso l'opzione `{ sanitize: false }`.

L'icona va inclusa come HTML nell'attributo `title=""` subito prima del vero e proprio titolo.

Il link come HTML nell'attributo `data-bs-content=""` dopo il contenuto testuale, con classe `.popover-inner-link`.

{% comment %}Example name: Con icona e link{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-secondary fade show" data-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-html="true" title="<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprites.svg#it-help-circle'></use></svg> Titolo con icona" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.<a href='#' class='popover-inner-link'>Leggi tutto<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right'></use></svg></a>">
Popover con icona e link
</button>
{% endcapture %}{% include example.html content=example %}

Prestare attenzione alla inizializzazione del Popover contenente le icone
come nel caso sopra: per la corretta visualizzazione del componente occorre 
disabilitare l'opzione di `sanitize`.

```js
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  sanitize: false,
})
```

### Modalità Hover

Per aprire il Popover all'hover del mouse sull'elemento, aggiungere l'attributo `data-bs-trigger="hover"` al tag dello stesso.

{% comment %}Example name: Modalità hover{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-secondary fade show" data-container="body" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="right" data-html="true" title="Popover in Hover" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
Apertura in Hover
</button>
{% endcapture %}{% include example.html content=example %}

### Chiusura al click successivo

Usa l'evento `focus` per ignorare i popover sul clic successivo dell'utente di un elemento diverso rispetto all'elemento di attivazione / disattivazione.

{% capture callout %}

#### Markup specifico richiesto per ignorare il click successivo

Per il giusto comportamento cross-browser e cross-platform, è necessario utilizzare il tag `<a>`, _non_ il tag `<button>`, ed è necessario anche includere l'attributo [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% comment %}Example name: Con chiusura al click successivo{% endcomment %}
{% capture example %}
<a tabindex="0" href="#" class="btn btn-lg btn-danger fade show" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Popover richiudibile" data-bs-content="Ecco il contenuto del popover richiudibile">Popover richiudibile</a>
{% endcapture %}{% include example.html content=example %}

```js
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus',
})
```

### Elementi disabilitati

Elementi con l'attributo `disabled` non sono interattivi, il che significa che gli utenti non possono attivare il popover (o un tooltip) con il passaggio del mouse o facendo click su di essi. Come soluzione, ti consigliamo di attivare il popover da un elemento `<div>` o `<span>` contenitore e sovrascrivere il `pointer-events` su un elemento disabilitato.

Per gli eventi dei popover disabilitati, potresti preferire `data-bs-trigger="hover"` in modo che il popover appaia come feedback visivo immediato per gli utenti in quanto non possono aspettarsi di _cliccare_ su un elemento disabilitato.

{% comment %}Example name: Per elementi disabilitati{% endcomment %}
{% capture example %}
<span class="d-inline-block fade show" data-bs-toggle="popover" data-bs-content="Popover disabilitato">
<button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Popover disabilitato</button>
</span>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

Abilita i popover tramite JavaScript:

```js
import { Popover } from 'bootstrap-italia';

const exampleEl = document.getElementById('example');
const popover = new Popover(exampleEl, options);

// Oppure

const popover = Popover.getOrCreateInstance(exampleEl, options);

```

### Opzioni

Le opzioni possono essere passate tramite attributi data o tramite JavaScript. Per gli attributi data, aggiungi l'opzione nome a `data-bs-`, come in `data-bs-animation=""`.

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
            <td><a href="/docs/5.2/getting-started/javascript/#sanitizer">Valore predefinito</a></td>
            <td>Oggetto che contiene attributi e tag consentiti.</td>
        </tr>
        <tr>
            <td><code>animazione</code></td>
            <td>booleano</td>
            <td><code>vero</code></td>
            <td>Applica una transizione di dissolvenza CSS al popover.</td>
        </tr>
        <tr>
            <td><code>boundary</code></td>
            <td>string, element</td>
            <td><code>'clippingParents'</code></td>
            <td>Limite di vincolo di overflow del popover (si applica solo al modificatore preventOverflow di Popper).
                Per impostazione predefinita, è <code>'clippingParents'</code> e può accettare un riferimento
                HTMLElement (solo tramite JavaScript). Per maggiori informazioni, fare riferimento alla <a
                    href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">documentazione
                    detectOverflow</a> di Popper.</td>
        </tr>
        <tr>
            <td><code>contenitore</code></td>
            <td>stringa, elemento, false</td>
            <td><code>false</code></td>
            <td>Aggiunge il popover a un elemento specifico. Esempio: <code>contenitore: 'corpo'</code>. Questa opzione
                è particolarmente utile in quanto consente di posizionare il popover nel flusso del documento vicino
                all'elemento di attivazione, il che impedirà al popover di allontanarsi dall'elemento di attivazione
                durante il ridimensionamento della finestra.</td>
        </tr>
        <tr>
            <td><code>content</code></td>
            <td>stringa, elemento, funzione</td>
            <td><code>''</code></td>
            <td>Valore del contenuto predefinito se l'attributo <code>data-bs-content</code> non è presente. Se viene
                specificata una funzione,
                verrà chiamata con il suo riferimento <code>this</code> impostato sull'elemento a cui è collegato il
                popover.</td>
        </tr>
        <tr>
            <td><code>customClass</code></td>
            <td>stringa, funzione</td>
            <td><code>''</code></td>
            <td>Aggiungi classi al popover quando viene visualizzato. Nota che queste classi saranno aggiunte in
                aggiunta a qualsiasi classe specificata nel modello. Per aggiungere più classi, separale con spazi:
                <code>'class-1 class-2'</code>. Puoi anche passare una funzione che dovrebbe restituire una singola
                stringa
                contenente nomi di classi aggiuntivi.
            </td>
        </tr>
        <tr>
            <td><code>delay</code></td>
            <td>number, object</td>
            <td><code>0</code></td>
            <td>Ritardo nella visualizzazione e nell'occultamento del popover (ms): non si applica al tipo di trigger
                manuale. Se viene fornito un numero, il ritardo viene applicato sia a hide/show. La struttura
                dell'oggetto è:
                <code>delay: { "show": 500, "hide": 100 </code>.
            </td>
        </tr>
        <tr>
            <td><code>fallbackPlacements</code></td>
            <td>string, array</td>
            <td><code>['top', 'right', 'bottom', 'left']</code></td>
            <td>Definisci i posizionamenti di fallback fornendo un elenco di posizionamenti in array (in ordine di
                preferenza). Per maggiori informazioni, fare riferimento alla <a
                    href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">documentazione sul
                    comportamento</a> di Popper.</td>
        </tr>
        <tr>
            <td><code>html</code></td>
            <td>booleano</td>
            <td><code>false</code></td>
            <td>Consenti HTML nel popover. Se è vero, i tag HTML nel <code>title</code> del popover verranno
                renderizzati nel popover. Se è falso, verrà utilizzata la proprietà <code>innerText</code> per inserire
                il contenuto nel DOM. Usa
                text se sei preoccupato per gli attacchi XSS.</td>
        </tr>
        <tr>
            <td><code>offset</code></td>
            <td>numero, stringa, funzione</td>
            <td><code>[0, 0]</code></td>
            <td>Offset del popover rispetto al suo target. Puoi passare una stringa negli attributi dati con valori
                separati da virgole come: <code>data-bs-offset="10,20"</code>. Quando una funzione viene utilizzata per
                determinare l'offset, viene chiamata con un oggetto contenente il posizionamento del popper, il
                riferimento e i rettangoli del popper come
                primo argomento. Il nodo DOM dell'elemento di attivazione viene passato come secondo argomento. La
                funzione deve restituire un array con due numeri: <a
                    href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a
                    href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>. Per maggiori
                informazioni, fare riferimento a <a
                    href="https://popper.js.org/docs/v2/modifiers/offset/#options">offset docs</a>.
            </td>
        </tr>
        <tr>
            <td><code>posizionamento</code></td>
            <td>stringa, funzione</td>
            <td><code>'top'</code></td>
            <td>Come posizionare il popover: auto, top, bottom, left, right. Quando viene specificato <code>auto</code>,
                riorienterà dinamicamente il popover. Quando viene utilizzata una funzione per determinare il
                posizionamento, viene chiamata
                con il nodo DOM del popover come primo argomento e il nodo DOM dell'elemento di attivazione come
                secondo. Il contesto
                <code>this</code> è impostato sull'istanza del popover.
            </td>
        </tr>
        <tr>
            <td><code>popperConfig</code></td>
            <td>null, oggetto, function</td>
            <td><code>null</code></td>
            <td>Per modificare la configurazione Popper predefinita di Bootstrap, vedere <a
                    href="https://popper.js.org/docs/v2/constructors/#options">Configurazione di Popper</a>. Quando una
                funzione viene utilizzata per creare la configurazione Popper, viene chiamata con un oggetto che
                contiene la
                configurazione Popper predefinita di Bootstrap. Ti aiuta a utilizzare e unire la configurazione
                predefinita con la tua
                configurazione. La funzione deve restituire un oggetto di configurazione per Popper.</td>
        </tr>
        <tr>
            <td><code>sanitize</code></td>
            <td>boolean</td>
            <td><code>true</code></td>
            <td>Abilita o disabilita la sanificazione. Se attivate le opzioni <code>'template'</code>,
                <code>'content'</code> e
                <code>'title'</code> verranno sanificate.
            </td>
        </tr>
        <tr>
            <td><code>sanitizeFn</code></td>
            <td>null, function</td>
            <td><code>null</code></td>
            <td>Qui puoi fornire la tua funzione di sanificazione. Ciò può essere utile se preferisci utilizzare una
                libreria dedicata per eseguire la sanificazione.</td>
        </tr>
        <tr>
            <td><code>selector</code></td>
            <td>string, false</td>
            <td><code>false</code></td>
            <td>Se viene fornito un selettore, gli oggetti popover verranno delegati ai target specificati. In pratica,
                questo
                viene utilizzato anche per applicare popover agli elementi DOM aggiunti dinamicamente (supporto
                <code>jQuery.on</code>). Vedere
                <a href="https://github.com/twbs/bootstrap/issues/4215">questo problema</a> e <a
                    href="https://codepen.io/Johann-S/pen/djJYPb">un esempio informativo</a>. <strong>Nota</strong>:
                l'attributo <code>title</code> non deve essere utilizzato come selettore.
            </td>
        </tr>
        <tr>
            <td><code>template</code></td>
            <td>string</td>
            <td><code>'&lt;div class="popover" role="popover"&gt;&lt;div class="popover-arrow"&gt;&lt;/div&gt;&lt;div class="popover-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code>
            </td>
            <td>HTML di base da utilizzare durante la creazione del popover. Il <code>title</code> del popover verrà
                iniettato in
                <code>.popover-inner</code>. <code>.popover-arrow</code> diventerà la freccia del popover. L'elemento
                wrapper più esterno dovrebbe avere la classe <code>.popover</code> e <code>role="popover"</code>.
            </td>
        </tr>
        <tr>
            <td><code>title</code></td>
            <td>stringa, elemento, funzione</td>
            <td><code>''</code></td>
            <td>Valore predefinito del titolo se l'attributo <code>title</code> non è presente. Se viene fornita una
                funzione, verrà
                chiamata con il suo riferimento <code>this</code> impostato sull'elemento a cui è collegato il popover.
            </td>
        </tr>
        <tr>
            <td><code>trigger</code></td>
            <td>stringa</td>
            <td><code>'hover focus'</code></td>
            <td>Come viene attivato il popover: clic, hover, focus, manuale. Puoi passare più trigger; separali
                con uno spazio. <code>'manual'</code> indica che il popover verrà attivato a livello di programmazione
                tramite
                i metodi <code>.popover('show')</code>, <code>.popover('hide')</code> e <code>.popover('toggle')</code>;
                questo valore non può essere combinato con nessun altro trigger. <code>'hover'</code> da solo
                genererà popover che non possono essere attivati ​​tramite la tastiera e dovrebbe essere utilizzato solo
                se sono presenti metodi alternativi per trasmettere le stesse informazioni agli utenti della tastiera.
            </td>
        </tr>
    </tbody>
</table>

### Metodi

{% include callout-danger-async-methods.md %}

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>disable</code></td>
      <td>Rimuove la possibilità di mostrare il popover di un elemento. Il popover potrà essere mostrato solo se
        viene riattivato.</td>
    </tr>
    <tr>
      <td><code>dispose</code></td>
      <td>Nasconde e distrugge il popover di un elemento (rimuove i dati archiviati nell'elemento DOM). I popover che
        utilizzano la delega (creati utilizzando l'opzione "selector") non possono
        essere
        distrutti individualmente sugli elementi trigger discendenti.</td>
    </tr>
    <tr>
      <td><code>enable</code></td>
      <td>Conferisce al popover di un elemento la possibilità di essere visualizzato. <strong>I popover sono abilitati
          per impostazione predefinita.</strong>
      </td>
    </tr>
    <tr>
      <td><code>getInstance</code></td>
      Metodo <td><em>statico</em> che consente di ottenere l'istanza del popover associata a un elemento DOM.</td>
    </tr>
    <tr>
      <td><code>getOrCreateInstance</code></td>
      Metodo <td><em>statico</em> che consente di ottenere l'istanza del popover associata a un elemento DOM o di
        crearne una nuova nel caso in cui non fosse stata inizializzata.</td>
    </tr>
    <tr>
      <td><code>hide</code></td>
      <td>Nasconde il popover di un elemento. <strong>Torna al chiamante prima che il popover sia stato effettivamente
          nascosto</strong> (ad esempio prima che si verifichi l'evento <code>hidden.bs.popover</code>). Questo è
        considerato un trigger "manuale" del popover.</td>
    </tr>
    <tr>
      <td><code>setContent</code></td>
      <td>Fornisce un modo per modificare il contenuto del popover dopo la sua inizializzazione.</td>
    </tr>
    <tr>
      <td><code>show</code></td>
      <td>Rivela il popover di un elemento. <strong>Ritorna al chiamante prima che il popover sia stato effettivamente
          mostrato</strong> (ad esempio prima che si verifichi l'evento <code>shown.bs.popover</code>). Questo è
        considerato un trigger "manuale" del popover. I popover il cui titolo e contenuto sono entrambi di lunghezza
        zero non vengono mai
        visualizzati.</td>
    </tr>
    <tr>
      <td><code>toggle</code></td>
      <td>Attiva/disattiva il popover di un elemento. <strong>Ritorna al chiamante prima che il popover sia stato
          effettivamente mostrato
          o nascosto</strong> (ad esempio prima che si verifichi l'evento <code>shown.bs.popover</code> o
        <code>hidden.bs.popover</code>). Questo è considerato un'attivazione "manuale" del popover.</td>
    </tr>
    <tr>
      <td><code>toggleEnabled</code></td>
      <td>Attiva o disattiva la possibilità che il popover di un elemento venga mostrato o nascosto.</td>
    </tr>
    <tr>
      <td><code>update</code></td>
      <td>Aggiorna la posizione del popover di un elemento.</td>
    </tr>
  </tbody>
</table>

### Eventi

```js
const myPopoverTrigger = document.getElementById('myPopover')
myPopoverTrigger.addEventListener('hidden.bs.popover', function () {
  // do something...
})
```

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
      <td>Questo evento viene generato quando il popover ha finito di essere nascosto all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
    <tr>
      <td>inserted.bs.popover</td>
      <td>Questo evento si attiva dopo l'evento <code>show.bs.popover</code> quando il modello del popover è stato aggiunto al DOM.</td>
    </tr>
  </tbody>
</table>

