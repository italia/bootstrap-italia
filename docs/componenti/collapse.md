---
layout: docs
title: Collapse
description: Attiva/disattiva la visibilità di contenuti con l'ausilio di alcune classi e di plug-in JavaScript.
group: componenti
toc: true
---

Per ottimizzare l'ingombro dei contenuti di una pagina si possono usare degli elementi richiudibili (in gergo definiti _collassabili_ o _collapse_), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti _fisarmoniche_ o _accordion_).

## Come funziona

Puoi usare un bottone con l'attributo `data-target` o in alternativa un link con l'attributo `href`. In entrambi i casi, l'attributo `data-toggle="collapse"` è obbligatorio.

L'interazione con i bottoni cambierà le seguenti classi dell'elemento richiudibile:

- `.collapse` nasconde il contenuto
- `.collapsing` viene applicata durante la transizione
- `.collapse.show` mostra il contenuto

{% capture example %}
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
{% endcapture %}{% include example.html content=example %}

### Attivazione di elementi richiudibili

Un `<button>` o un `<a>` può mostrare o nascondere più elementi facendo riferimento ad essi con un selettore jQuery nell'attributo `href` o nell'attributo `data-target`.
Molteplici `<button>` o `<a>` possono mostrare o nascondere un elemento se ognuno di loro fa riferimento ad esso con i loro attributi `href` o `data-target`.

{% capture example %}
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Attiva/disattiva primo elemento</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Attiva/disattiva secondo elemento</button>
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
{% endcapture %}{% include example.html content=example %}

## Gruppi di elementi richiudibili

Gli elmenti richiudibili sono molto spesso mostrati in gruppo, tipicamente usati per approfondire voci o argomenti mostrati nelle singole barre cliccabili. 

{% capture example %}
<div id="collapseDiv1" class="collapse-div" role="tablist">
  <div class="collapse-header" id="heading1">
    <button data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
      Collapsible Group Item #1
    </button>
  </div>
  <div id="collapse1" class="collapse show" role="tabpanel" aria-labelledby="heading1">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
    </div>
  </div>
  <div class="collapse-header" id="heading2">
    <button data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
      Collapsible Group Item #2
    </button>
  </div>
  <div id="collapse2" class="collapse show" role="tabpanel" aria-labelledby="heading2">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="heading3">
    <button data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      Collapsible Group Item #3
    </button>
  </div>
  <div id="collapse3" class="collapse" role="tabpanel" aria-labelledby="heading3">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Accordion

Per ottenere un gruppo di elementi _mutuamente_ richiudibili (o _accordion_), è sufficiente aggiungere ad ogni elemento `.collapse` l'attributo `data-parent` con il relativo *ID* del contenitore padre.

{% capture example %}
<div id="accordionDiv1" class="collapse-div" role="tablist">
  <div class="collapse-header" id="headingA1">
    <button data-toggle="collapse" data-target="#accordion1" aria-expanded="true" aria-controls="accordion1">
      Accordion Group Item #1
    </button>
  </div>
  <div id="accordion1" class="collapse show" role="tabpanel" aria-labelledby="headingA1" data-parent="#accordionDiv1">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
    </div>
  </div>
  <div class="collapse-header" id="headingA2">
    <button data-toggle="collapse" data-target="#accordion2" aria-expanded="false" aria-controls="accordion2">
      Accordion Group Item #2
    </button>
  </div>
  <div id="accordion2" class="collapse" role="tabpanel" aria-labelledby="headingA2" data-parent="#accordionDiv1">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="headingA3">
    <button data-toggle="collapse" data-target="#accordion3" aria-expanded="false" aria-controls="accordion3">
      Accordion Group Item #3
    </button>
  </div>
  <div id="accordion3" class="collapse" role="tabpanel" aria-labelledby="headingA3" data-parent="#accordionDiv1">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Collapse e Accordion innestati

Più gruppi di collapse possono essere annidati.

{% capture example %}
<div id="collapseDiv2" class="collapse-div" role="tablist">
  <div class="collapse-header" id="heading1a">
    <button data-toggle="collapse" data-target="#collapse1a" aria-expanded="true" aria-controls="collapse1a">
      Collapse header 1
    </button>
  </div>
  <div id="collapse1a" class="collapse show" role="tabpanel" aria-labelledby="heading1a">
    <div class="collapse-body">
      <div id="collapseDiv3" class="collapse-div" role="tablist">
        <div class="collapse-header" id="heading1b">
          <button data-toggle="collapse" data-target="#collapse1b" aria-expanded="true" aria-controls="collapse1b">
            Nested panel header 1
          </button>
        </div>
        <div id="collapse1b" class="collapse show" role="tabpanel" aria-labelledby="heading1b">
          <div class="collapse-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
          </div>
        </div>
        <div class="collapse-header" id="heading2b">
          <button data-toggle="collapse" data-target="#collapse2b" aria-expanded="true" aria-controls="collapse2b">
            Nested panel header 2
          </button>
        </div>
        <div id="collapse2b" class="collapse show" role="tabpanel" aria-labelledby="heading2b">
          <div class="collapse-body">
            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
        <div class="collapse-header" id="heading3b">
          <button data-toggle="collapse" data-target="#collapse3b" aria-expanded="false" aria-controls="collapse3b">
            Nested panel header 3
          </button>
        </div>
        <div id="collapse3b" class="collapse" role="tabpanel" aria-labelledby="heading3b">
          <div class="collapse-body">
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="collapse-header" id="heading2a">
    <button data-toggle="collapse" data-target="#collapse2a" aria-expanded="false" aria-controls="collapse2a">
      Collapse header 2
    </button>
  </div>
  <div id="collapse2a" class="collapse" role="tabpanel" aria-labelledby="heading2a">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="heading3a">
    <button data-toggle="collapse" data-target="#collapse3a" aria-expanded="false" aria-controls="collapse3a">
      Collapse header 3
    </button>
  </div>
  <div id="collapse3a" class="collapse" role="tabpanel" aria-labelledby="heading3a">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
**Accessibilità**

Assicurati di aggiungere `aria-expanded` all'elemento di controllo. Questo attributo trasmette esplicitamente lo stato corrente dell'elemento comprimibile legato al controllo a screen reader e tecnologie assistive simili. Se l'elemento comprimibile è chiuso in modo predefinito, l'attributo sull'elemento di controllo dovrebbe avere il valore `aria-expanded="false"`. Se imposti l'elemento comprimibile aperto in modo predefinito utilizzando la classe `show`, sul controllo invece imposta `aria-expanded="true"`. Il plugin attiva/disattiva automaticamente questo attributo sul controllo in base all'apertura o alla chiusura dell'elemento richiudibile (via JavaScript, o perché l'utente ha attivato un altro elemento di controllo anch'esso legato allo stesso elemento richiudibile). Se il componente HTML dell'elemento di controllo non è un bottone (ad esempio un `<a>` o `<div>`), l'attributo `role="button"` dovrebbe essere aggiunto al componente.

Inoltre, se il tuo elemento di controllo si riferisce a un singolo elemento richiudibile – cioè l'attributo `data-target` sta puntando a un selettore `id` – potresti aggiungere un ulteriore attributo `aria-controls` all'elemento di controllo, contenente l'`id` dell'elemento richiudibile. I moderni screen reader e tecnologie assistive simili fanno uso di questo attributo per fornire agli utenti scorciatoie aggiuntive per navigare direttamente all'elemento richiudibile stesso.

*Al momento Bootstrap Italia, al pari di Bootstrap, non copre la gestione dei comandi attraverso tastiera descritte nelle [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) - è quindi necessario includerle separatamente attraverso JavaScript.*
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Sfondo primario

Applicando classi aggiuntive al wrapper `.collapse-div` è possibile utilizzare il colore primario come sfondo degli header.

### Header attivi

Aggiungere la classe `.collapse-background-active` al wrapper per ottenere header con sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile.

{% capture example %}
<div id="collapseDiv1-sc1" class="collapse-div collapse-background-active" role="tablist">
  <div class="collapse-header" id="heading1-sc1">
    <button data-toggle="collapse" data-target="#collapse1-sc1" aria-expanded="true" aria-controls="collapse1-sc1">
      Collapsible Group Item #1
    </button>
  </div>
  <div id="collapse1-sc1" class="collapse show" role="tabpanel" aria-labelledby="heading1-sc1">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
    </div>
  </div>
  <div class="collapse-header" id="heading2-sc1">
    <button data-toggle="collapse" data-target="#collapse2-sc1" aria-expanded="false" aria-controls="collapse2-sc1">
      Collapsible Group Item #2
    </button>
  </div>
  <div id="collapse2-sc1" class="collapse" role="tabpanel" aria-labelledby="heading2-sc1">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="heading3-sc1">
    <button data-toggle="collapse" data-target="#collapse3-sc1" aria-expanded="false" aria-controls="collapse3-sc1">
      Collapsible Group Item #3
    </button>
  </div>
  <div id="collapse3-sc1" class="collapse" role="tabpanel" aria-labelledby="heading3-sc1">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Hover degli Header

Aggiungere la classe `.collapse-background-hover` al wrapper per ottenere header con sfondo di colore primario all'hover.

{% capture example %}
<div id="collapseDiv1-sc2" class="collapse-div collapse-background-hover" role="tablist">
  <div class="collapse-header" id="heading1-sc2">
    <button data-toggle="collapse" data-target="#collapse1-sc2" aria-expanded="true" aria-controls="collapse1-sc2">
      Collapsible Group Item #1
    </button>
  </div>
  <div id="collapse1-sc2" class="collapse show" role="tabpanel" aria-labelledby="heading1-sc2">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
    </div>
  </div>
  <div class="collapse-header" id="heading2-sc2">
    <button data-toggle="collapse" data-target="#collapse2-sc2" aria-expanded="false" aria-controls="collapse2-sc2">
      Collapsible Group Item #2
    </button>
  </div>
  <div id="collapse2-sc2" class="collapse" role="tabpanel" aria-labelledby="heading2-sc2">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="heading3-sc2">
    <button data-toggle="collapse" data-target="#collapse3-sc2" aria-expanded="false" aria-controls="collapse3-sc2">
      Collapsible Group Item #3
    </button>
  </div>
  <div id="collapse3-sc2" class="collapse" role="tabpanel" aria-labelledby="heading3-sc2">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Icona a sinistra

Aggiungendo la classe `.collapse-left-icon` al wrapper si ottiene una variante in cui l'icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell'header.

{% capture example %}
<div id="collapseDiv1-lft" class="collapse-div collapse-left-icon" role="tablist">
  <div class="collapse-header" id="heading1-lft">
    <button data-toggle="collapse" data-target="#collapse1-lft" aria-expanded="true" aria-controls="collapse1-lft">
      Collapsible Group Item #1
    </button>
  </div>
  <div id="collapse1-lft" class="collapse show" role="tabpanel" aria-labelledby="heading1-lft">
    <div class="collapse-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
    </div>
  </div>
  <div class="collapse-header" id="heading2-lft">
    <button data-toggle="collapse" data-target="#collapse2-lft" aria-expanded="false" aria-controls="collapse2-lft">
      Collapsible Group Item #2
    </button>
  </div>
  <div id="collapse2-lft" class="collapse" role="tabpanel" aria-labelledby="heading2-lft">
    <div class="collapse-body">
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
  <div class="collapse-header" id="heading3-lft">
    <button data-toggle="collapse" data-target="#collapse3-lft" aria-expanded="false" aria-controls="collapse3-lft">
      Collapsible Group Item #3
    </button>
  </div>
  <div id="collapse3-lft" class="collapse" role="tabpanel" aria-labelledby="heading3-lft">
    <div class="collapse-body">
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Implementazione

### Tramite data attributes

Basta aggiungere `data-toggle="collapse"` e un `data-target` all'elemento per assegnare automaticamente il controllo di uno o più elementi richiudibili. L'attributo `data-target` accetta un selettore CSS per rendere l'elemento richiudibile. Assicurati di aggiungere la classe `collapse` all'elemento richiudibile. Se desideri che l'impostazione predefinita sia aperta, aggiungi la classe aggiuntiva `show`.

Per aggiungere un'impostazione tipo accordion ad un'area richiudibile, aggiungi l'attributo `data-parent="#selector"`. Fai riferimento alla demo per vederlo in azione.

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
      <td>Se presente un genitore, allora tutti gli elementi comprimibili sotto il genitore specificato verranno chiusi quando viene mostrato questo elemento richiudibile. (simile al tradizionale comportamento dell'accordion - questo dipende dalla classe <code>card</code> class). L'attributo deve essere impostato sull'area comprimibile associata.</td>
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

{% highlight js %}
$('#myCollapsible').collapse({
  toggle: false
})
{% endhighlight %}

#### `.collapse('toggle')`

Attiva/disattiva un elemento richiudibile per mostrarlo o nasconderlo. **Ritorna al chiamante prima che l'elemento richiudibile sia stato effettivamente mostrato o nascosto** (i.e. si verifica prima dell'evento `shown.bs.collapse` o `hidden.bs.collapse`).

#### `.collapse('show')`

Mostra un elemento richiudibile. **Ritorna al chiamante prima che l'elemento richiudibile sia stato effettivamente mostrato** (i.e. si verifica prima dell'evento `shown.bs.collapse`).

#### `.collapse('hide')`

Nasconde un elemento richiudibile. **Ritorna al chiamante prima che l'elemento richiudibile sia stato effettivamente nascosto** (i.e. si verifica prima dell'evento `hidden.bs.collapse`).

#### `.collapse('dispose')`

Elimina la possibilità di un elemento di essere richiudibile.

### Eventi

La classe `.collapse` di Bootstrap espone alcuni eventi per agganciare comportamenti alla funzionalità di apertura/chiusura attraverso Javascript.

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

{% highlight js %}
$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})
{% endhighlight %}
