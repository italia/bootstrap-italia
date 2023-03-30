---
layout: docs
title: Collapse
description: Attiva/disattiva la visibilità di contenuti con l'ausilio di alcune classi e di JavaScript.
group: componenti
toc: true
---

Per ottimizzare l'ingombro dei contenuti di una pagina si possono usare degli elementi richiudibili (in gergo definiti _collassabili_ o _collapse_), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti _fisarmoniche_ o _accordion_).

Il componente [Accordion]({{site.baseurl}}/docs/componenti/accordion/) è basato su Collapse.

## Come funziona

Puoi usare un pulsante con l'attributo `data-bs-target` o in alternativa un link con l'attributo `href`. In entrambi i casi, l'attributo `data-bs-toggle="collapse"` è obbligatorio.

L'interazione con i pulsanti cambierà le seguenti classi dell'elemento richiudibile:

- `.collapse` nasconde il contenuto
- `.collapsing` viene applicata durante la transizione
- `.collapse.show` mostra il contenuto

{% comment %}Example name: Base{% endcomment %}
{% capture example %}

<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link con href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Pulsante con data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Attivazione di elementi richiudibili

Un `<button>` o un `<a>` può mostrare o nascondere più elementi facendo riferimento ad essi con un selettore nell'attributo `href` o nell'attributo `data-bs-target`.
Molteplici `<button>` o `<a>` possono mostrare o nascondere un elemento se ognuno di loro fa riferimento ad esso con gli attributi `href` o `data-bs-target`.

{% comment %}Example name: Attivazione elementi richiudibili{% endcomment %}
{% capture example %}

<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Attiva/disattiva primo elemento</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Attiva/disattiva secondo elemento</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Attiva/disattiva entrambi gli elementi</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

#### Accessibilità

Assicurati di aggiungere `aria-expanded` all'elemento di controllo. Questo attributo trasmette esplicitamente lo stato corrente dell'elemento comprimibile legato al controllo a screen reader e tecnologie assistive simili. Se l'elemento comprimibile è chiuso in modo predefinito, l'attributo sull'elemento di controllo dovrebbe avere il valore `aria-expanded="false"`. Se imposti l'elemento comprimibile aperto in modo predefinito utilizzando la classe `show`, sul controllo invece imposta `aria-expanded="true"`. Il plugin attiva/disattiva automaticamente questo attributo sul controllo in base all'apertura o alla chiusura dell'elemento richiudibile (via JavaScript, o perché l'utente ha attivato un altro elemento di controllo anch'esso legato allo stesso elemento richiudibile). Se il componente HTML dell'elemento di controllo non è un pulsante (ad esempio un `<a>` o `<div>`), l'attributo `role="button"` dovrebbe essere aggiunto al componente.

Inoltre, se il tuo elemento di controllo si riferisce a un singolo elemento richiudibile – cioè l'attributo `data-bs-target` sta puntando a un selettore `id` – potresti aggiungere un ulteriore attributo `aria-controls` all'elemento di controllo, contenente l'`id` dell'elemento richiudibile. I moderni screen reader e tecnologie assistive simili fanno uso di questo attributo per fornire agli utenti scorciatoie aggiuntive per navigare direttamente all'elemento richiudibile stesso.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Implementazione

### Tramite data attributes

Basta aggiungere `data-bs-toggle="collapse"` e un `data-bs-target` all'elemento per assegnare automaticamente il controllo di uno o più elementi richiudibili. L'attributo `data-bs-target` accetta un selettore CSS per rendere l'elemento richiudibile. Assicurati di aggiungere la classe `collapse` all'elemento richiudibile. Se desideri che l'impostazione predefinita sia aperta, aggiungi la classe aggiuntiva `show`.

Per aggiungere un'impostazione tipo accordion ad un'area richiudibile, aggiungi l'attributo `data-bs-parent="#selector"`.

### Tramite JavaScript

È possibile abilitare manualmente un collapse con:

```js
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
```

### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite JavaScript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`, come in `data-bs-parent=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>parent</td>
      <td>selector | jQuery object | DOM element </td>
      <td>false</td>
      <td>Se presente un genitore, allora tutti gli elementi comprimibili sotto il genitore specificato verranno chiusi quando viene mostrato questo elemento richiudibile. (simile al tradizionale comportamento dell'accordion - questo dipende dalla classe <code>card</code> class). L'attributo deve essere impostato sull'area collassabile associata.</td>
    </tr>
    <tr>
      <td>toggle</td>
      <td>boolean</td>
      <td>true</td>
      <td>Attiva/disattiva l'elemento richiudibile su richiesta</td>
    </tr>
  </tbody>
</table>

### Metodi

{% include callout-danger-async-methods.md %}

#### `.collapse(options)`

Attiva i tuoi contenuti come elementi richiudibili. Accetta un'opzione facoltativa `object`.

È possibile creare un'istanza con il constructor, ad esempio:

```js
var myCollapse = document.getElementById('myCollapse')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false,
})
```

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>toggle</td>
      <td>Attiva/disattiva un elemento richiudibile per mostrarlo o nasconderlo. **Ritorna al chiamante prima che l'elemento richiudibile sia stato effettivamente mostrato o nascosto** (i.e. si verifica prima dell'evento <code>shown.bs.collapse</code> o <code>hidden.bs.collapse</code>).</td>
    </tr>
    <tr>
      <td>show</td>
      <td>Mostra un elemento richiudibile. **Ritorna al chiamante prima che l'elemento richiudibile sia stato effettivamente mostrato** (i.e. si verifica prima dell'evento <code>shown.bs.collapse</code>).</td>
    </tr>
    <tr>
      <td>hide</td>
      <td>Nasconde un elemento richiudibile. **Ritorna al chiamante prima che l'elemento richiudibile sia stato effettivamente nascosto** (i.e. si verifica prima dell'evento <code>hidden.bs.collapse</code>).</td>
    </tr>
    <tr>
      <td>dispose</td>
      <td>Elimina la possibilità di un elemento di essere richiudibile.</td>
    </tr>
    <tr>
      <td>getInstance</td>
      <td>Metodo statico che restituisce l'istanza collapse associata ad un elemento del DOM. Esempio: <code>bootstrap.Collapse.getInstance(element)</code></td>
    </tr>
    <tr>
      <td>getOrCreateInstance</td>
      <td>Metodo statico che restituisce un'istanza collapse associata ad un elemento del DOM o ne crea una nuova nel caso non fosse stata inizializzata. Esempio: <code>bootstrap.Collapse.getOrCreateInstance(element)</code></td>
    </tr>
  </tbody>
</table>

### Eventi

La classe `.collapse` di Bootstrap espone alcuni eventi per agganciare comportamenti alla funzionalità di apertura/chiusura attraverso JavaScript.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo di evento</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.collapse</td>
      <td>Questo evento si attiva immediatamente quando il metodo di istanza <code>show</code> viene richiamato.</td>
    </tr>
    <tr>
      <td>shown.bs.collapse</td>
      <td>Questo evento viene attivato quando un elemento richiudibile è stato reso visibile all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
    <tr>
      <td>hide.bs.collapse</td>
      <td>Questo evento si attiva immediatamente quando il metodo <code>hide</code> viene richiamato.</td>
    </tr>
    <tr>
      <td>hidden.bs.collapse</td>
      <td>Questo evento viene attivato quando un elemento richiudibile è stato nascosto all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
  </tbody>
</table>

```js
var myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
  // do something...
})
```
