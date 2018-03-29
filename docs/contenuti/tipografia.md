---
layout: docs
title: Tipografia
description: Documentazione ed esempi per la tipografia di Bootstrap, incluse impostazioni globali, intestazioni, testo del corpo, elenchi e altro.
group: contenuti
toc: true
---

Bootstrap imposta alcune proprietà di base per la tipografia e gli stili dei link. Quando è necessario un maggiore controllo, fornisce delle [classi di utilità testuali]({{ site.baseurl }}/docs/utilities/testo/).

### Tipografia responsive

Bootstrap Italia ridimensiona testo e alcune propietà dei componenti modificando il `font-size` dell'elemento radice, con una media query che imposta dimensioni lievemente maggiori per schermi con dimensioni maggiorni di _576px_. Questa impostazione, unita all'utilizzo di dimensioni in `rem` o in semplici valori numerici all'interno del CSS, fa sì che testo e altre proprietà occupino sensibilmente più spazio quando lo schermo lo permette:

{% highlight scss %}
html {
  font-size: 16px;
  @include media-breakpoint-up(sm) {
    font-size: 18px;
  }
}
{% endhighlight %}

## Intestazioni

Tutte le intestazioni HTML, `<h1>` fino a `<h6>`, sono disponibili.

<table>
  <thead>
    <tr>
      <th>Intestazione</th>
      <th>Esempio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{ "`<h1></h1>`" | markdownify }}
      </td>
      <td><span class="h1">h1. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h2></h2>`" | markdownify }}
      </td>
      <td><span class="h2">h2. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h3></h3>`" | markdownify }}
      </td>
      <td><span class="h3">h3. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h4></h4>`" | markdownify }}
      </td>
      <td><span class="h4">h4. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h5></h5>`" | markdownify }}
      </td>
      <td><span class="h5">h5. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h6></h6>`" | markdownify }}
      </td>
      <td><span class="h6">h6. Intestazione di Bootstrap</span></td>
    </tr>
  </tbody>
</table>

{% highlight html %}
<h1>h1. Intestazione di Bootstrap</h1>
<h2>h2. Intestazione di Bootstrap</h2>
<h3>h3. Intestazione di Bootstrap</h3>
<h4>h4. Intestazione di Bootstrap</h4>
<h5>h5. Intestazione di Bootstrap</h5>
<h6>h6. Intestazione di Bootstrap</h6>
{% endhighlight %}

Anche le classi `.h1` fino a `.h6` sono disponibili, per quando tu voglia presentare il testo nello stesso stile delle intestazioni ma non puoi utilizzare l'elemento HTML associato.

{% capture example %}
<p class="h1">h1. Intestazione di Bootstrap</p>
<p class="h2">h2. Intestazione di Bootstrap</p>
<p class="h3">h3. Intestazione di Bootstrap</p>
<p class="h4">h4. Intestazione di Bootstrap</p>
<p class="h5">h5. Intestazione di Bootstrap</p>
<p class="h6">h6. Intestazione di Bootstrap</p>
{% endcapture %}{% include example.html content=example %}

### Personalizzazione delle intestazioni

Utilizza le classi di utilità incluse per ricreare il piccolo testo di intestazione secondaria da Bootstrap 3.

<div class="bd-example">
  <span class="h3">
    Titolo di fantasia
    <small class="text-muted">Con testo secondario schiarito</small>
  </span>
</div>

{% highlight html %}
<h3>
  Titolo di fantasia
  <small class="text-muted">Con testo secondario schiarito</small>
</h3>
{% endhighlight %}

## Intestazioni in evidenza

Gli elementi di intestazione tradizionali sono progettati per funzionare al meglio nel contenuto della pagina. Quando hai bisogno di un titolo da mettere in evidenza, prendi in considerazione l'uso di **display heading**—uno stile di titolo più grande, leggermente più supponente.

<div class="bd-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
      <td><span class="display-1">Titolo in evidenza 1</span></td>
      </tr>
      <tr>
      <td><span class="display-2">Titolo in evidenza 2</span></td>
      </tr>
      <tr>
      <td><span class="display-3">Titolo in evidenza 3</span></td>
      </tr>
      <tr>
      <td><span class="display-4">Titolo in evidenza 4</span></td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<h1 class="display-1">Titolo in evidenza 1</h1>
<h1 class="display-2">Titolo in evidenza 2</h1>
<h1 class="display-3">Titolo in evidenza 3</h1>
<h1 class="display-4">Titolo in evidenza 4</h1>
{% endhighlight %}

## In primo piano

Fai risaltare un paragrafo aggiungendo la classe `.lead`.

{% capture example %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endcapture %}{% include example.html content=example %}

## Elementi di testo inline

Stili per elementi comuni HTML5 inline. 

{% capture example %}
<p>Questa linea di testo mostra come è rappresentato del <mark>testo evidenziato</mark>.</p>
<p><del>Questa linea di testo mostra come è rappresentato del testo cancellato.</del></p>
<p><s>Questa linea di testo mostra come è rappresentato del testo non più valido.</s></p>
<p><ins>Questa linea di testo mostra come è rappresentato un testo aggiuntivo al documento.</ins></p>
<p><u>Questa linea di testo mostra come è rappresentato un testo sottolineato.</u></p>
<p><small>Questa linea di testo mostra come sono rappresentate le "righe piccole" di un documento.</small></p>
<p><strong>Questa linea di testo mostra come è rappresentato un testo grassetto.</strong></p>
<p><em>Questa linea di testo mostra come è rappresentato un testo corsivo.</em></p>
{% endcapture %}{% include example.html content=example %}

Le classi `.mark` e `.small` sono disponibili anche per applicare gli stessi stili di `<mark>` e `<small>` evitando eventuali implicazioni semantiche indesiderate che i tag porterebbero.

## Utilità per il testo

Cambia allineamento, trasformazione, stile, peso e colore del testo con le [utilità di testo]({{ site.baseurl }}/docs/utilities/text/) e le [utilità di colore]({{ site.baseurl }}/docs/utilit/colors/).

## Abbreviazioni

Implementazione stilizzata dell'elemento HTML `<abbr>` per abbreviazioni e acronimi per mostrare la versione espansa sull' hover. Le abbreviazioni hanno una sottolineatura predefinita e ottengono un cursore di aiuto per fornire un contesto aggiuntivo al passaggio del mouse e agli utenti delle tecnologie assistive.

Aggiungi `.initialism` a un'abbreviazione per una dimensione del font leggermente più piccola.

{% capture example %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endcapture %}{% include example.html content=example %}

## Blockquotes

Per citare blocchi di contenuti da un'altra fonte all'interno del documento. Racchiudi ogni <abbr title="HyperText Markup Language">HTML</abbr> all'interno di un  `<blockquote class="blockquote">` come la citazione.

{% capture example %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endcapture %}{% include example.html content=example %}

### Citare una fonte

Aggiungi un `<footer class="blockquote-footer">` per identificare la fonte. Includi il nome delle fonte di origine in `<cite>`.

{% capture example %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

### Allineamento

Utilizza le utilità di testo necessarie per modificare l'allineamento del tuo blockquote.

{% capture example %}
<blockquote class="blockquote text-center">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<blockquote class="blockquote text-right">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

## Liste

### Senza stile

Rimuovi il predefinito `list-style` e il margine sinistro sugli elementi elenco (solo per i figli diretti). **Questo si applica solo agli elementi della lista che sono figli diretti**, il che significa che dovrai aggiungere la classe per tutti gli elenchi annidati.

{% capture example %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Inline

Rimuovi i punti elenco di una lista e applica un leggero `margin` con una combinazione di due classi, `.list-inline` e `.list-inline-item`.

{% capture example %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Allineamento lista descrizione

Allineare i termini e le descrizioni orizzontalmente utilizzando le classi predefinite del nostro sistema di griglia. Per termini più lunghi, puoi facoltativamente aggiungere la classe `.text-truncate` per troncare il testo con un ellipsis.

{% capture example %}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
{% endcapture %}{% include example.html content=example %}
