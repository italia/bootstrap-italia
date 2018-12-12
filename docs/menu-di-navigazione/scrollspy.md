---
layout: docs
title: Scrollspy
description: Per avere sempre in vista con lo scorrimento della pagina la navigazione o un gruppo elenco.
group: menu-di-navigazione
toc: true
---

## Come funziona

Scrollspy richiede alcuni accorgimenti per un corretto funzionamento:

- Deve essere usato con un [componente navbar]({{ site.baseurl }}/docs/menu-di-navigazione/navbar/) o con una
[lista di immagini]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste-di-immagini/).
- Scrollspy richiede `position: relative;` sull'elemento che contiene quello che vuoi bloccare, generalmente `<body>`.
- Quando vuoi usare un elemento diverso da `<body>`, assicurati che abbia impostato un'altezza e `overflow-y: scroll;`.
- Le ancore (`<a>`) sono obbligatorie e devono puntare ad un elemento con quell'id.

Una volta impostato il tutto, la barra di navigazione o il gruppo elenco si aggiorneranno di conseguenza, muovendo la
classe `.active` da un elemento a quello successivo in base al target associato.

## Esempio in barra di navigazione

Scorri l'area sottostante la barra di navigazione e guarda come la classe `.active` nella voce di menu si sposti alla
successiva evidenziandola:

<div class="bd-example">
  <nav id="navbar-example2" class="navbar bg-white border">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#cap-1">Capitolo 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#cap-2">Capitolo 2</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Capitolo 3</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#cap-3-1">Capitolo 3 - 1</a>
          <a class="dropdown-item" href="#cap-3-2">Capitolo 3 - 2</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#cap-3-3">Capitolo 3 - 3</a>
        </div>
      </li>
    </ul>
  </nav>
  <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" class="scrollspy-example">
    <h4 id="cap-1">Capitolo 1</h4>
    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
    <h4 id="cap-2">Capitolo 2</h4>
    <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
    <h4 id="cap-3-1">Capitolo 3 - 1</h4>
    <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
    <h4 id="cap-3-2">Capitolo 3 - 2</h4>
    <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
    <h4 id="cap-3-3">Capitolo 3 - 3</h4>
    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
    <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.
    </p>
  </div>
</div>

{% highlight html %}
<nav id="navbar-example2" class="navbar bg-white border">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#cap-1">Capitolo 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#cap-2">Capitolo 2</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Capitolo 3</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#cap-3-1">Capitolo 3 - 1</a>
        <a class="dropdown-item" href="#cap-3-2">Capitolo 3 - 2</a>
        <div role="separator" class="dropdown-divider"></div>
        <a class="dropdown-item" href="#cap-3-3">Capitolo 3 - 3</a>
      </div>
    </li>
  </ul>
</nav>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
  <h4 id="cap-1">Capitolo 1</h4>
  <p>...</p>
  <h4 id="cap-2">Capitolo 2</h4>
  <p>...</p>
  <h4 id="cap-3-1">Capitolo 3 - 1</h4>
  <p>...</p>
  <h4 id="cap-3-2">Capitolo 3 - 2</h4>
  <p>...</p>
  <h4 id="cap-3-3">Capitolo 3 - 3</h4>
  <p>...</p>
</div>
{% endhighlight %}

## Esempio con navigazione annidata

Scrollspy funziona anche con `.nav` annidati. Se una sottovoce di menu di navigazione è `.active`, anche la voce di menu padre lo sarà. Scorri l'area accanto alla barra di navigazione e osserva come la classe `.active` cambi.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <nav id="navbar-example3" class="navbar bg-white border flex-column">
        <a class="navbar-brand" href="#">Navbar</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#articolo-1">Articolo 1</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ml-3 my-1" href="#">Articolo 1-1</a>
            <a class="nav-link ml-3 my-1" href="#">Articolo 1-2</a>
          </nav>
          <a class="nav-link" href="#articolo-2">Articolo 2</a>
          <a class="nav-link" href="#articolo-3">Articolo 3</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ml-3 my-1" href="#">Articolo 3-1</a>
            <a class="nav-link ml-3 my-1" href="#">Articolo 3-2</a>
          </nav>
        </nav>
      </nav>
    </div>
    <div class="col-8">
      <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" class="scrollspy-example-2">
        <h4 id="articolo-1">Articolo 1</h4>
        <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
        <h5 id="articolo-1-1">Articolo 1-1</h5>
        <p>Amet tempor mollit aliquip pariatur excepteur commodo do ea cillum commodo Lorem et occaecat elit qui et. Aliquip labore ex ex esse voluptate occaecat Lorem ullamco deserunt. Aliqua cillum excepteur irure consequat id quis ea. Sit proident ullamco aute magna pariatur nostrud labore. Reprehenderit aliqua commodo eiusmod aliquip est do duis amet proident magna consectetur consequat eu commodo fugiat non quis. Enim aliquip exercitation ullamco adipisicing voluptate excepteur minim exercitation minim minim commodo adipisicing exercitation officia nisi adipisicing. Anim id duis qui consequat labore adipisicing sint dolor elit cillum anim et fugiat.</p>
        <h5 id="articolo-1-2">Articolo 2-2</h5>
        <p>Cillum nisi deserunt magna eiusmod qui eiusmod velit voluptate pariatur laborum sunt enim. Irure laboris mollit consequat incididunt sint et culpa culpa incididunt adipisicing magna magna occaecat. Nulla ipsum cillum eiusmod sint elit excepteur ea labore enim consectetur in labore anim. Proident ullamco ipsum esse elit ut Lorem eiusmod dolor et eiusmod. Anim occaecat nulla in non consequat eiusmod velit incididunt.</p>
        <h4 id="articolo-2">Articolo 2</h4>
        <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>
        <h4 id="articolo-3">Articolo 3</h4>
        <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
        <h5 id="articolo-3-1">Articolo 3-1</h5>
        <p>Deserunt quis elit Lorem eiusmod amet enim enim amet minim Lorem proident nostrud. Ea id dolore anim exercitation aute fugiat labore voluptate cillum do laboris labore. Ex velit exercitation nisi enim labore reprehenderit labore nostrud ut ut. Esse officia sunt duis aliquip ullamco tempor eiusmod deserunt irure nostrud irure. Ullamco proident veniam laboris ea consectetur magna sunt ex exercitation aliquip minim enim culpa occaecat exercitation. Est tempor excepteur aliquip laborum consequat do deserunt laborum esse eiusmod irure proident ipsum esse qui.</p>
        <h5 id="articolo-3-2">Articolo 3-2</h5>
        <p>Labore sit culpa commodo elit adipisicing sit aliquip elit proident voluptate minim mollit nostrud aute reprehenderit do. Mollit excepteur eu Lorem ipsum anim commodo sint labore Lorem in exercitation velit incididunt. Occaecat consectetur nisi in occaecat proident minim enim sunt reprehenderit exercitation cupidatat et do officia. Aliquip consequat ad labore labore mollit ut amet. Sit pariatur tempor proident in veniam culpa aliqua excepteur elit magna fugiat eiusmod amet officia.</p>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<nav id="navbar-example3" class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <nav class="nav nav-pills flex-column">
    <a class="nav-link" href="#articolo-1">Articolo 1</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ml-3 my-1" href="#">Articolo 1-1</a>
      <a class="nav-link ml-3 my-1" href="#">Articolo 1-2</a>
    </nav>
    <a class="nav-link" href="#articolo-2">Item2</a>
    <a class="nav-link" href="#articolo-3">Item3</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ml-3 my-1" href="#">Articolo 3-1</a>
      <a class="nav-link ml-3 my-1" href="#">Articolo 3-2</a>
    </nav>
  </nav>
</nav>

<div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
  <h4 id="articolo-1">Articolo 1</h4>
  <p>...</p>
  <h5 id="articolo-1-1">Articolo 1-1</h5>
  <p>...</p>
  <h5 id="articolo-1-2">Articolo 2-2</h5>
  <p>...</p>
  <h4 id="articolo-2">Articolo 2</h4>
  <p>...</p>
  <h4 id="articolo-3">Articolo 3</h4>
  <p>...</p>
  <h5 id="articolo-3-1">Articolo 3-1</h5>
  <p>...</p>
  <h5 id="articolo-3-2">Articolo 3-2</h5>
  <p>...</p>
</div>
{% endhighlight %}

## Esempio con una lista elenco

Scrollspy anche con `.list-group`. Scorri l’area accanto alla lista elenco e osserva come la classe `.active` cambi.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#lista-articolo-1">Articolo 1</a>
        <a class="list-group-item list-group-item-action" href="#lista-articolo-2">Articolo 2</a>
        <a class="list-group-item list-group-item-action" href="#lista-articolo-3">Articolo 3</a>
        <a class="list-group-item list-group-item-action" href="#lista-articolo-4">Articolo 4</a>
      </div>
    </div>
    <div class="col-8">
      <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
        <h4 id="lista-articolo-1">Articolo 1</h4>
        <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
        <h4 id="lista-articolo-2">Articolo 2</h4>
        <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>
        <h4 id="lista-articolo-3">Articolo 3</h4>
        <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
        <h4 id="lista-articolo-4">Articolo 4</h4>
        <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#lista-articolo-1">Articolo 1</a>
  <a class="list-group-item list-group-item-action" href="#lista-articolo-2">Articolo 2</a>
  <a class="list-group-item list-group-item-action" href="#lista-articolo-3">Articolo 3</a>
  <a class="list-group-item list-group-item-action" href="#lista-articolo-4">Articolo 4</a>
</div>
<div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
  <h4 id="lista-articolo-1">Articolo 1</h4>
  <p>...</p>
  <h4 id="lista-articolo-2">Articolo 2</h4>
  <p>...</p>
  <h4 id="lista-articolo-3">Articolo 3</h4>
  <p>...</p>
  <h4 id="lista-articolo-4">Articolo 4</h4>
  <p>...</p>
</div>
{% endhighlight %}


## Uso

### Tramite un data attributes

Per attivare Scrollspy in una barra di navigazione è sufficiente aggiungere `data-spy="scroll"` all'elemento che deve essere
bloccato (in genere `<body>`). Quindi aggiungi l'attributo `data-target` con l'ID o la classe dell'elemento padre di
qualsiasi componente `.nav`.

{% highlight css %}
body {
  position: relative;
}
{% endhighlight %}

{% highlight html %}
<body data-spy="scroll" data-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
{% endhighlight %}

### Tramite JavaScript

Dopo aver aggiunto `position: relative;` al tuo CSS, lancia la chiamata alla funzione scrollspy tramite JavaScript:

{% highlight js %}
$('body').scrollspy({ target: '#navbar-example' })
{% endhighlight %}

{% capture callout %}

#### ID target richiesto

I link della barra di navigazione devono richiamare un ID target specifico. Per esempio a `<a href="#home">home</a>` deve corrispondere un elemento del DOM simile a `<div id="home"></div>`.
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture callout %}

#### Gli elementi target non `:visible` sono ignorati

Gli elementi target non [`:visible` secondo jQuery](https://api.jquery.com/visible-selector/) verranno ignorati e i relativi elementi di navigazione non verranno mai evidenziati.
{% endcapture %}{% include callout.html content=callout type="info" %}

### Metodi

#### `.scrollspy('refresh')`

Se aggiungi o rimuovi elementi dal DOM della barra di navigazione che usa scrollspy, devi necessariamente richiamare il metodo di aggiornamento funzione:

{% highlight js %}
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
{% endhighlight %}

#### `.scrollspy('dispose')`

Distrugge lo scrollspy di un elemento.

### Opzioni

Le opzioni possono essere passate tramite data attributes o JavaScript. Per i data attributes aggiungi il nome dell'opzione a `data-`, come ad esempio in `data-offset=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 100px;">Tipo</th>
      <th style="width: 50px;">Default</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>offset</td>
      <td>number</td>
      <td>10</td>
      <td>Il numero offset di pixel dall'alto quando si calcola la posizione di scorrimento.</td>
    </tr>
  </tbody>
</table>

### Eventi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Tipo evento</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>activate.bs.scrollspy</td>
      <td>Questo evento si attiva sull'elemento di scorrimento ogni volta che un nuovo oggetto viene attivato dallo scrollspy.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
  // fare qualcosa…
})
{% endhighlight %}
