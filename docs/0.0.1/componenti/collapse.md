---
layout: docs
title: Collapse
description: Attiva/disattiva la visibilità del contenuto nel tuo progetto con alcune classi e i nostri plug-in JavaScript.
group: componenti
toc: true
---

## Esempio

Clicca sul pulsante in basso per mostrare e nascondere un altro elemento cambiando la classe:

- `.collapse` nasconde il contenuto
- `.collapsing` viene applicata durante la transizione
- `.collapse.show` mostra il contenuto

Puoi usare un link con l'attributo `href`, o un bottone con l'attributo `data-target`. In entrambi i casi, l'attributo `data-toggle="collapse"` è obbligatorio.

{% example html %}
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link con href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Bottone con data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
{% endexample %}

## Molteplici obiettivi

Un `<button>` o un `<a>` può mostrare o nascondere molteplici elementi facendo riferimento ad essi con un selettore JQuery nell'attributo `href` o nell'attributo `data-target`.
Molteplici `<button>` o `<a>` possono mostrare o nascondere un elemento se ognuno di loro fa riferimento ad esso con i loro attributi `href` o `data-target`

{% example html %}
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Attiva/disattiva primo elemento</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Attiva/disattiva secono elemento</button>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Attiva/disattiva entrambi gli elementi</button>
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
{% endexample %}

## Esempio di accordion

Usando il componente [card]({{ site.baseurl }}/docs/{{ site.docs_version }}/componenti/card/), puoi estendere il comportamento predefinito del collapse per creare un accordion.

{% example html %}
<div id="accordion" role="tablist">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
{% endexample %}

Puoi creare accordion anche con codice personalizzato. Aggiungi l'attributo `data-children` e specificare un insieme di elementi fratelli da attivare/disattivare (e.g., `.item`). Poi, usa gli stessi attributi e le stesse classi come mostrato sopra per connettere i toggles ai loro contenuti associati.

{% example html %}
<div id="exampleAccordion" data-children=".item">
  <div class="item">
    <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" role="button" aria-expanded="true" aria-controls="exampleAccordion1">
      Attiva/disattiva elemento
    </a>
    <div id="exampleAccordion1" class="collapse show" role="tabpanel">
      <p class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
      </p>
    </div>
  </div>
  <div class="item">
    <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion2" role="button" aria-expanded="false" aria-controls="exampleAccordion2">
      Attiva/disattiva elemento 2
    </a>
    <div id="exampleAccordion2" class="collapse" role="tabpanel">
      <p class="mb-3">
        Donec at ipsum dignissim, rutrum turpis scelerisque, tristique lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  </div>
</div>
{% endexample %}

## Accessibilità

Assicurati di aggiungere `aria-expanded` all'elemento di controllo. Questo attributo trasmette esplicitamente lo stato corrente dell'elemento comprimibile legato al controllo a screen reader e tecnologie assistive simili. Se l'elemento comprimibile è chiuso in modo predefinito, l'attributo sull'elemento di controllo dovrebbe avere il valore `aria-expanded="false"`. Se imposti l'elemento comprimibile aperto in modo predefinito utilizzando la classe `show`, sul controllo invece imposta `aria-expanded="true"`. Il plugin attiva/disattiva automaticamente questo attributo sul controllo in base all'apertura o alla chiusura dell'elemento collassabile (via JavaScript, o perché l'utente ha attivato un altro elemento di controllo anch'esso legato allo stesso elemento collassabile). Se il componente HTML dell'elemento di controllo non è un bottone (e.g., un `<a>` o `<div>`), l'attributo `role="button"` dovrebbe essere aggiunto al componente.

Inoltre, se il tuo elemento di controllo si riferisce a un singolo elemento collassabile – i.e. l'attributo `data-target` sta puntando a un selettore `id` – potresti aggiungere un ulteriore attributo `aria-controls` all'elemento di controllo, contenente l'`id` dell'elemento collassabile. I moderni screen reader e tecnologie assistive simili fanno uso di questo attributo per fornire agli utenti scorciatoie aggiuntive per navigare direttamente all'elemento collassabile stesso.

## Uso

Il plug-in di compressione utilizza alcune classi per gestire il sollevamento pesante:

- `.collapse` nasconde il contenuto
- `.collapse.show` mostra il contenuto
- `.collapsing` vine aggiunto quando parte la transizione, e rimossa quando finisce

Queste classi possono essere trovate in `_transitions.scss`.

### Tramite data attributes

Basta aggiungere `data-toggle="collapse"` e un `data-target` all'elemento per assegnare automaticamente il controllo di uno o più elementi collassabili. L'attributo `data-target` accetta un selettore CSS per applicare la compressione. Assicurati di aggiungere la classe  `collapse` all'elemento collassabile. Se desideri che l'impostazione predefinita sia aperta, aggiungi la classe aggiuntiva `show`.

Per aggiungere un'impostazione tipo accordion ad un'area collassabile, aggiungi l'attributo `data-parent="#selector"`. Fai riferimento alla demo per vederlo in azione.

### Tramite JavaScript

Abilitarlo manualmente con:

{% highlight js %}
$('.collapse').collapse()
{% endhighlight %}

### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite Javascript. Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-`, come in `data-parent=""`.

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
      <td>Se presente un genitore, allora tutti gli elementi comprimibili sotto il genitore specificato verranno chiusi quando viene mostrato questo elemento collassabile. (simile al tradizionale comportamento dell'accordion - questo dipende dalla classe <code>card</code> class). L'attributo deve essere impostato sull'area comprimibile associata.</td>
    </tr>
    <tr>
      <td>toggle</td>
      <td>boolean</td>
      <td>true</td>
      <td>Attiva/disattiva l'elemento collassabile su richiesta</td>
    </tr>
  </tbody>
</table>

### Metodi

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

#### `.collapse(options)`

Attiva i tuoi contenuti come elementi collassabili. Accetta un'opzione facoltativa `object`.

{% highlight js %}
$('#myCollapsible').collapse({
  toggle: false
})
{% endhighlight %}

#### `.collapse('toggle')`

Attiva/disattiva un elemento collassabile per mostrarlo o nasconderlo. **Ritorna al chiamante prima che l'elemento collassabile sia stato effettivamente mostrato o nascosto** (i.e. si verifica prima dell'evento `shown.bs.collapse` o `hidden.bs.collapse`).

#### `.collapse('show')`

Mostra un elemento collassabile. **Ritorna al chiamante prima che l'elemento collassabile sia stato effettivamente mostrato** (i.e. si verifica prima dell'evento `shown.bs.collapse`).

#### `.collapse('hide')`

Nasconde un elemento collassabile. **Ritorna al chiamante prima che l'elemento collassabile sia stato effettivamente nascosto** (i.e. si verifica prima dell'evento `hidden.bs.collapse`).

#### `.collapse('dispose')`

Elimina la possibilità di un elemento di collassare.

### Eventi

La classe collapse di Bootstrap espone alcuni eventi per l'aggancio alla funzionalità di collasso.

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
      <td>Questo evento viene attivato quando un elemento collassabile è stato reso visibile all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
    <tr>
      <td>hide.bs.collapse</td>
      <td>Questo evento si attiva immediatamente quando il metodo <code>hide</code> viene richiamato.</td>
    </tr>
    <tr>
      <td>hidden.bs.collapse</td>
      <td>Questo evento viene attivato quando un elemento collassabile è stato nascosto all'utente (attenderà il completamento delle transizioni CSS).</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})
{% endhighlight %}
