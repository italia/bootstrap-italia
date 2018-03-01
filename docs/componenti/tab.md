---
layout: docs
title: Tab
description: Documentazione ed esempi sull'utilizzo del componente Tab.
group: componenti
toc: true
---

L'interfaccia a tab (o schede) di Bootstrap si basa sull'utilizzo del [layout di navigazione]({{ site.baseurl }}/docs/componenti/navigazione), con l'aggiunta della classe `.nav-tabs`. Per ottenere una versione con sfondo scuro e testo chiaro bisognerà aggiungere un'ulteriore classe: `.nav-dark`.

{% callout accessibility %}
#### Accessibilità

Le interfacce a tab, come descritto nelle [pratiche di implementazione WAI ARIA](https:// www. w3.org/TR/wai-aria-practices/#tabpanel), richiedono l'utilizzo di attributi `role="tablist"`, `role="tab"`, `role="tabpanel"`, e ulteriori attributi `aria-`, al fine di trasmettere la loro struttura, funzionalità e stato attuale agli utenti delle tecnologie assistive (come i lettori di schermo).

Nota che le interfacce dinamiche a tab **non devono** contenere menu a discesa, poiché ciò causa problemi di usabilità e accessibilità. Dal punto di vista dell'usabilità, il fatto che l'elemento trigger del tab attualmente visualizzato non sia immediatamente visibile (dato che si trova all'interno del menu a discesa chiuso) può causare confusione. Dal punto di vista dell'accessibilità, attualmente non esiste un modo sensato per mappare questo tipo di costrutto a un modello standard WAI ARIA, il che significa che non può essere facilmente reso comprensibile agli utenti delle tecnologie assistive. (TODO verificare)
{% endcallout %}

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
<ul class="nav nav-tabs nav-dark">
  <li class="nav-item"><a class="nav-link active" href="#">Link Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Link Disabilitato</a></li>
</ul>
{% endexample %}

L'esempio sopra riportato non ha molto senso senza un contenuto che cambi al di sotto di esso; per rendere tali interfacce navigabili è necessario utilizzare Javascript, come mostrato di seguito:

<div class="bd-example">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item"><a class="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab titolo 1</a></li>
    <li class="nav-item"><a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab titolo 2</a></li>
    <li class="nav-item"><a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab titolo 3</a></li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane p-3 fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="tab-pane p-3 fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div class="tab-pane p-3 fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a></li>
  <li class="nav-item"><a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a></li>
  <li class="nav-item"><a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab 3</a></li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane p-3 fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">...</div>
  <div class="tab-pane p-3 fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">...</div>
  <div class="tab-pane p-3 fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">...</div>
</div>
{% endhighlight %}

Oppure al posto della label usare una icona.

{% example html %}
  <ul class="nav nav-tabs" id="myTab2" role="tablist">
    <li class="nav-item"><a class="nav-link pl-4 pr-4 active" id="tab1a-tab" data-toggle="tab" href="#tab1a" role="tab" aria-controls="tab1a" aria-selected="true"><i class="it-ico-lg it-file d-block text-center"></i><span class="sr-only"> Tab titolo 1</span></a></li>
    <li class="nav-item"><a class="nav-link pl-4 pr-4" id="tab2a-tab" data-toggle="tab" href="#tab2a" role="tab" aria-controls="tab2a" aria-selected="false"><i class="it-ico-lg it-calendar  d-block text-center"></i><span class="sr-only"> Tab titolo 2</span></a></li>
    <li class="nav-item"><a class="nav-link pl-4 pr-4" id="tab3a-tab" data-toggle="tab" href="#tab3a" role="tab" aria-controls="tab3a" aria-selected="false"><i class="it-ico-lg it-comment d-block text-center"></i><span class="sr-only"> Tab titolo 3</span></a></li>
  </ul>
  <div class="tab-content" id="myTab2Content">
    <div class="tab-pane p-3 fade show active" id="tab1a" role="tabpanel" aria-labelledby="tab1a-tab"><p>Testo 1</p></div>
    <div class="tab-pane p-3 fade" id="tab2a" role="tabpanel" aria-labelledby="tab2a-tab"><p>Testo 2</p></div>
    <div class="tab-pane p-3 fade" id="tab3a" role="tabpanel" aria-labelledby="tab3a-tab"><p>Testo 3</p></div>
  </div>
{% endexample %}

Oppure con label e icona insieme

{% example html %}
<ul class="nav nav-tabs" id="myTab3" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="tab1b-tab" data-toggle="tab" href="#tab1b" role="tab" aria-controls="tab1b" aria-selected="true"><i class="it-ico it-file d-block text-center"></i> Tab titolo 1</a></li>
  <li class="nav-item"><a class="nav-link" id="tab2b-tab" data-toggle="tab" href="#tab2b" role="tab" aria-controls="tab2b" aria-selected="false"><i class="it-ico it-calendar d-block text-center"></i> Tab titolo 2</a></li>
  <li class="nav-item"><a class="nav-link" id="tab3b-tab" data-toggle="tab" href="#tab3b" role="tab" aria-controls="tab3b" aria-selected="false"><i class="it-ico it-comment d-block text-center"></i> Tab titolo 3</a></li>
</ul>
<div class="tab-content" id="myTab3Content">
  <div class="tab-pane p-3 fade show active" id="tab1b" role="tabpanel" aria-labelledby="tab1b-tab">
    <p>Testo 1</p>
  </div>
  <div class="tab-pane p-3 fade" id="tab2b" role="tabpanel" aria-labelledby="tab2b-tab">
    <p>Testo 2</p>
  </div>
  <div class="tab-pane p-3 fade" id="tab3b" role="tabpanel" aria-labelledby="tab3b-tab">
    <p>Testo 3</p>
  </div>
</div>
{% endexample %}

Allo stesso modo di quanto avviene con i normali `.nav`, a seconda delle tue necessità, è possibile modificare tale codice con un markup diverso, diverso dalla classica lista basata su `<ul>`. È importante notare però, che nel caso si desideri usare l'elemento `<nav>`, l'attributo `role="tablist"` non deve essere applicato direttamente su di esso, in quanto sovrascriverebbe il ruolo dell'elemento stesso per la navigazione.

Si può, alternativamente, usare un diverso elemento (nell'esempio seguente un semplice `<div>`) e racchiuderlo con `<nav>`:

<div class="bd-example">
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <a class="nav-item nav-link active" id="nav-tab1-tab" data-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true">Tab 1</a>
      <a class="nav-item nav-link" id="nav-tab2-tab" data-toggle="tab" href="#nav-tab2" role="tab" aria-controls="nav-tab2" aria-selected="false">Tab 2</a>
      <a class="nav-item nav-link" id="nav-tab3-tab" data-toggle="tab" href="#nav-tab3" role="tab" aria-controls="nav-tab3" aria-selected="false">Tab 3</a>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane p-3 fade show active" id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="tab-pane p-3 fade" id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab2-tab">
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div class="tab-pane p-3 fade" id="nav-tab3" role="tabpanel" aria-labelledby="nav-tab3-tab">
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

{% highlight html %}
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-tab1-tab" data-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true">Tab 1</a>
    <a class="nav-item nav-link" id="nav-tab2-tab" data-toggle="tab" href="#nav-tab2" role="tab" aria-controls="nav-tab2" aria-selected="false">Tab 2</a>
    <a class="nav-item nav-link" id="nav-tab3-tab" data-toggle="tab" href="#nav-tab3" role="tab" aria-controls="nav-tab3" aria-selected="false">Tab 3</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane p-3  fade show active" id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">...</div>
  <div class="tab-pane p-3 fade" id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab2-tab">...</div>
  <div class="tab-pane p-3  fade" id="nav-tab3" role="tabpanel" aria-labelledby="nav-tab3-tab">...</div>
</div>
{% endhighlight %}

### Tab a bottoni

I tab possono ereditare dalla navigazione l'utilizzo della classe `.nav-pills` per generare tab a bottoni:

<div class="bd-example bd-example-tabs">
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item"><a class="nav-link active" id="tab1-tab" data-toggle="tab" href="#pills-tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a></li>
    <li class="nav-item"><a class="nav-link" id="tab2-tab" data-toggle="tab" href="#pills-tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a></li>
    <li class="nav-item"><a class="nav-link" id="tab3-tab" data-toggle="tab" href="#pills-tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab 3</a></li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-tab1" role="tabpanel" aria-labelledby="pills-tab1-tab">
      <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.</p>
    </div>
    <div class="tab-pane fade" id="pills-tab2" role="tabpanel" aria-labelledby="pills-tab2-tab">
      <p>Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.</p>
    </div>
    <div class="tab-pane fade" id="pills-tab3" role="tabpanel" aria-labelledby="pills-tab3-tab">
      <p>Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</p>
    </div>
  </div>
</div>

{% highlight html %}
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item"><a class="nav-link active" id="pills-tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="pills-tab1" aria-selected="true">Tab 1</a></li>
    <li class="nav-item"><a class="nav-link" id="pills-tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="pills-tab2" aria-selected="false">Tab 2</a></li>
    <li class="nav-item"><a class="nav-link" id="pills-tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="pills-tab3" aria-selected="false">Tab 3</a></li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-tab1" role="tabpanel" aria-labelledby="pills-tab1-tab">...</div>
  <div class="tab-pane fade" id="pills-tab2" role="tabpanel" aria-labelledby="pills-tab2-tab">...</div>
  <div class="tab-pane fade" id="pills-tab3" role="tabpanel" aria-labelledby="pills-tab3-tab">...</div>
</div>
{% endhighlight %}

### Allineamento Verticale

Esempio:

<div class="bd-example bd-example-tabs">
  <div class="row">
    <div class="col-3">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="v-pills-tab1-tab" data-toggle="pill" href="#v-pills-tab1" role="tab" aria-controls="v-pills-tab1" aria-selected="true">Tab 1</a>
        <a class="nav-link" id="v-pills-tab2-tab" data-toggle="pill" href="#v-pills-tab2" role="tab" aria-controls="v-pills-tab2" aria-selected="false">Tab 2</a>
        <a class="nav-link" id="v-pills-tab3-tab" data-toggle="pill" href="#v-pills-tab3" role="tab" aria-controls="v-pills-tab3" aria-selected="false">Tab 3</a>
        <a class="nav-link" id="v-pills-tab4-tab" data-toggle="pill" href="#v-pills-tab4" role="tab" aria-controls="v-pills-tab4" aria-selected="false">Tab 4</a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-tab1" role="tabpanel" aria-labelledby="v-pills-tab1-tab">
          <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-tab2" role="tabpanel" aria-labelledby="v-pills-tab2-tab">
          <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-tab3" role="tabpanel" aria-labelledby="v-pills-tab3-tab">
          <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-tab4" role="tabpanel" aria-labelledby="v-pills-tab4-tab">
          <p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-tab1-tab" data-toggle="pill" href="#v-pills-tab1" role="tab" aria-controls="v-pills-tab1" aria-selected="true">Tab 1</a>
  <a class="nav-link" id="v-pills-tab2-tab" data-toggle="pill" href="#v-pills-tab2" role="tab" aria-controls="v-pills-tab2" aria-selected="false">Tab 2</a>
  <a class="nav-link" id="v-pills-tab3-tab" data-toggle="pill" href="#v-pills-tab3" role="tab" aria-controls="v-pills-tab3" aria-selected="false">Tab 3</a>
  <a class="nav-link" id="v-pills-tab4-tab" data-toggle="pill" href="#v-pills-tab4" role="tab" aria-controls="v-pills-tab4" aria-selected="false">Tab 4</a>
</div>
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-tab1" role="tabpanel" aria-labelledby="v-pills-home-tab1">...</div>
  <div class="tab-pane fade" id="v-pills-tab2" role="tabpanel" aria-labelledby="v-pills-tab2-tab">...</div>
  <div class="tab-pane fade" id="v-pills-tab3" role="tabpanel" aria-labelledby="v-pills-tab3-tab">...</div>
  <div class="tab-pane fade" id="v-pills-tab4" role="tabpanel" aria-labelledby="v-pills-tab4-tab">...</div>
</div>
{% endhighlight %}

## Attivazione Tab

### Con l'utilizzo di attributi `data-`

Puoi attivare una navigazione a tab senza scrivere Javascript, semplicemente specificando `data-toggle="tab"` o `data-toggle="pill"` su link all'interno di liste di tipo`.nav-tabs` or `.nav-pills`:

{% highlight html %}
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Tab 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Tab 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Tab 4</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">...</div>
  <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">...</div>
  <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">...</div>
  <div class="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">...</div>
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
  <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">...</div>
  <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">...</div>
  <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">...</div>
  <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">...</div>
</div>
{% endhighlight %}

Si possono trovare dettagli aggiuntivi sulla gestione attraverso Javascript di metodi ed eventi sui tab alla [pagina corrispondente](https://getbootstrap.com/docs/4.0/components/navs/#methods) sul sito di Bootstrap.
