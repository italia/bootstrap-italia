---
layout: docs
title: Tab
description: Documentazione ed esempi sull'utilizzo del componente Tab.
group: componenti
toc: true
---

L'interfaccia a tab (o schede) di Bootstrap si basa sull'utilizzo del [layout di navigazione]({{ site.baseurl }}/docs/componenti/navigazione), con l'aggiunta della classe `.nav-tabs`. Per ottenere una versione con sfondo scuro e testo chiaro bisognerà aggiungere un'ulteriore classe: `.nav-dark`.

{% capture callout %}
#### Accessibilità

Le interfacce a tab, come descritto nelle [pratiche di implementazione WAI ARIA](https:// www. w3.org/TR/wai-aria-practices/#tabpanel), richiedono l'utilizzo di attributi `role="tablist"`, `role="tab"`, `role="tabpanel"`, e ulteriori attributi `aria-`, al fine di trasmettere la loro struttura, funzionalità e stato attuale agli utenti delle tecnologie assistive (come i lettori di schermo).

Nota che le interfacce dinamiche a tab **non devono** contenere menu a discesa, poiché ciò causa problemi di usabilità e accessibilità. Dal punto di vista dell'usabilità, il fatto che l'elemento trigger del tab attualmente visualizzato non sia immediatamente visibile (dato che si trova all'interno del menu a discesa chiuso) può causare confusione. Dal punto di vista dell'accessibilità, attualmente non esiste un modo sensato per mappare questo tipo di costrutto a un modello standard WAI ARIA, il che significa che non può essere facilmente reso comprensibile agli utenti delle tecnologie assistive. (TODO verificare)
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link1</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link2</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
<ul class="nav nav-tabs nav-dark">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link3</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link4</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}

L'esempio sopra riportato non ha molto senso senza un contenuto che cambi al di sotto di esso; per rendere tali interfacce navigabili è necessario utilizzare Javascript, come mostrato di seguito:

{% capture example %}
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="tab1a-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a></li>
  <li class="nav-item"><a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a></li>
  <li class="nav-item"><a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab 3</a></li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane p-3 fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1a-tab">Contenuto 1</div>
  <div class="tab-pane p-3 fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">Contenuto 2</div>
  <div class="tab-pane p-3 fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">Contenuto 3</div>
</div>
{% endcapture %}{% include example.html content=example %}

Oppure al posto della label usare una icona.

{% capture example %}
  <ul class="nav nav-tabs" id="myTab2" role="tablist">
    <li class="nav-item"><a class="nav-link pl-4 pr-4 active" id="tab1b-tab" data-toggle="tab" href="#tab1a" role="tab" aria-controls="tab1a" aria-selected="true"><i class="it-ico-lg it-file d-block text-center"></i><span class="sr-only"> Tab titolo 1</span></a></li>
    <li class="nav-item"><a class="nav-link pl-4 pr-4" id="tab2a-tab" data-toggle="tab" href="#tab2a" role="tab" aria-controls="tab2a" aria-selected="false"><i class="it-ico-lg it-calendar  d-block text-center"></i><span class="sr-only"> Tab titolo 2</span></a></li>
    <li class="nav-item"><a class="nav-link pl-4 pr-4" id="tab3a-tab" data-toggle="tab" href="#tab3a" role="tab" aria-controls="tab3a" aria-selected="false"><i class="it-ico-lg it-comment d-block text-center"></i><span class="sr-only"> Tab titolo 3</span></a></li>
  </ul>
  <div class="tab-content" id="myTab2Content">
    <div class="tab-pane p-3 fade show active" id="tab1a" role="tabpanel" aria-labelledby="tab1b-tab"><p>Contenuto 1</p></div>
    <div class="tab-pane p-3 fade" id="tab2a" role="tabpanel" aria-labelledby="tab2a-tab"><p>Contenuto 2</p></div>
    <div class="tab-pane p-3 fade" id="tab3a" role="tabpanel" aria-labelledby="tab3a-tab"><p>Contenuto 3</p></div>
  </div>
{% endcapture %}{% include example.html content=example %}

Oppure con label e icona insieme

{% capture example %}
<ul class="nav nav-tabs" id="myTab3" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="tab1c-tab" data-toggle="tab" href="#tab1b" role="tab" aria-controls="tab1b" aria-selected="true"><i class="it-ico it-file d-block text-center"></i> Tab titolo 1</a></li>
  <li class="nav-item"><a class="nav-link" id="tab2b-tab" data-toggle="tab" href="#tab2b" role="tab" aria-controls="tab2b" aria-selected="false"><i class="it-ico it-calendar d-block text-center"></i> Tab titolo 2</a></li>
  <li class="nav-item"><a class="nav-link" id="tab3b-tab" data-toggle="tab" href="#tab3b" role="tab" aria-controls="tab3b" aria-selected="false"><i class="it-ico it-comment d-block text-center"></i> Tab titolo 3</a></li>
</ul>
<div class="tab-content" id="myTab3Content">
  <div class="tab-pane p-3 fade show active" id="tab1b" role="tabpanel" aria-labelledby="tab1c-tab"><p>Contenuto 1</p></div>
  <div class="tab-pane p-3 fade" id="tab2b" role="tabpanel" aria-labelledby="tab2b-tab"><p>Contenuto 2</p></div>
  <div class="tab-pane p-3 fade" id="tab3b" role="tabpanel" aria-labelledby="tab3b-tab"><p>Contenuto 3</p></div>
</div>
{% endcapture %}{% include example.html content=example %}

Allo stesso modo di quanto avviene con i normali `.nav`, a seconda delle tue necessità, è possibile modificare tale codice con un markup diverso, diverso dalla classica lista basata su `<ul>`. È importante notare però, che nel caso si desideri usare l'elemento `<nav>`, l'attributo `role="tablist"` non deve essere applicato direttamente su di esso, in quanto sovrascriverebbe il ruolo dell'elemento stesso per la navigazione.

Si può, alternativamente, usare un diverso elemento (nell'esempio seguente un semplice `<div>`) e racchiuderlo con `<nav>`:

{% capture example %}
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-tab1-tab" data-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true">Tab 1</a>
    <a class="nav-item nav-link" id="nav-tab2-tab" data-toggle="tab" href="#nav-tab2" role="tab" aria-controls="nav-tab2" aria-selected="false">Tab 2</a>
    <a class="nav-item nav-link" id="nav-tab3-tab" data-toggle="tab" href="#nav-tab3" role="tab" aria-controls="nav-tab3" aria-selected="false">Tab 3</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane p-3  fade show active" id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">Contenuto 1</div>
  <div class="tab-pane p-3 fade" id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab2-tab">Contenuto 2</div>
  <div class="tab-pane p-3  fade" id="nav-tab3" role="tabpanel" aria-labelledby="nav-tab3-tab">Contenuto 3</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Tab a bottoni

I tab possono ereditare dalla navigazione l'utilizzo della classe `.nav-pills` per generare tab a bottoni:

{% capture example %}
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item"><a class="nav-link active" id="pills-tab1a-tab" data-toggle="tab" href="#pills-tab1" role="tab" aria-controls="pills-tab1" aria-selected="true">Tab 1</a></li>
    <li class="nav-item"><a class="nav-link" id="pills-tab2-tab" data-toggle="tab" href="#pills-tab2" role="tab" aria-controls="pills-tab2" aria-selected="false">Tab 2</a></li>
    <li class="nav-item"><a class="nav-link" id="pills-tab3-tab" data-toggle="tab" href="#pills-tab3" role="tab" aria-controls="pills-tab3" aria-selected="false">Tab 3</a></li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-tab1" role="tabpanel" aria-labelledby="pills-tab1a-tab">Contenuto 1</div>
  <div class="tab-pane fade" id="pills-tab2" role="tabpanel" aria-labelledby="pills-tab2-tab">Contenuto 2</div>
  <div class="tab-pane fade" id="pills-tab3" role="tabpanel" aria-labelledby="pills-tab3-tab">Contenuto 3</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Allineamento Verticale

Esempio:

{% capture example %}
<div class="bd-example-tabs">
  <div class="row">
    <div class="col-3">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="v-pills-home1-tab" data-toggle="pill" href="#v-pills-tab1" role="tab" aria-controls="v-pills-tab1" aria-selected="true">Tab 1</a>
        <a class="nav-link" id="v-pills-home2-tab" data-toggle="pill" href="#v-pills-tab2" role="tab" aria-controls="v-pills-tab2" aria-selected="false">Tab 2</a>
        <a class="nav-link" id="v-pills-home3-tab" data-toggle="pill" href="#v-pills-tab3" role="tab" aria-controls="v-pills-tab3" aria-selected="false">Tab 3</a>
        <a class="nav-link" id="v-pills-home4-tab" data-toggle="pill" href="#v-pills-tab4" role="tab" aria-controls="v-pills-tab4" aria-selected="false">Tab 4</a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-tab1" role="tabpanel" aria-labelledby="v-pills-home1-tab">Contenuto 1</div>
        <div class="tab-pane fade" id="v-pills-tab2" role="tabpanel" aria-labelledby="v-pills-home2-tab">Contenuto 2</div>
        <div class="tab-pane fade" id="v-pills-tab3" role="tabpanel" aria-labelledby="v-pills-home3-tab">Contenuto 3</div>
        <div class="tab-pane fade" id="v-pills-tab4" role="tabpanel" aria-labelledby="v-pills-home4-tab">Contenuto 4</div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
    

## Attivazione Tab

### Con l'utilizzo di attributi `data-`

Puoi attivare una navigazione a tab senza scrivere Javascript, semplicemente specificando `data-toggle="tab"` o `data-toggle="pill"` su link all'interno di liste di tipo`.nav-tabs` or `.nav-pills`:

{% highlight html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="data-ex-tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="data-ex-tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="data-ex-tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="data-ex-tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Tab 4</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="data-ex-tab1" role="tabpanel" aria-labelledby="data-ex-tab1-tab">...</div>
  <div class="tab-pane" id="data-ex-tab2" role="tabpanel" aria-labelledby="data-ex-tab2-tab">...</div>
  <div class="tab-pane" id="data-ex-tab3" role="tabpanel" aria-labelledby="data-ex-tab3-tab">...</div>
  <div class="tab-pane" id="data-ex-tab4" role="tabpanel" aria-labelledby="data-ex-tab4-tab">...</div>
</div>
{% endhighlight %}

### Con Javascript

Per attivare tab funzionanti con Javascript:

{% highlight js %}
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
{% endhighlight %}

È possibile attivare tab individualmente in diversi modi:

{% highlight js %}
$('#myTab a[href="#tab1"]').tab('show')
$('#myTab li:first-child a').tab('show')
$('#myTab li:last-child a').tab('show')
$('#myTab li:nth-child(3) a').tab('show')
{% endhighlight %}

### Effetto "a comparsa"

Per fare in modo che i tab appaiano con un'animazione "a comparsa" (fade in), è sufficiente aggiungere la classe `.fade` ad ogni `.tab-pane`. Il primo `.tab-pane` dovrà anche avere la classe `.show` per rendere il contenuto iniziale visibile.

{% highlight html %}
<div class="tab-content">
  <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="content-tab-tab">...</div>
  <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">...</div>
  <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">...</div>
  <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">...</div>
</div>
{% endhighlight %}

Si possono trovare dettagli aggiuntivi sulla gestione attraverso Javascript di metodi ed eventi sui tab alla [pagina corrispondente](https://getbootstrap.com/docs/4.1/components/navs/#methods) sul sito di Bootstrap.
