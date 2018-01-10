---
layout: docs
title: Tipografia
description: Documentazione ed esempi per la tipografia di Bootstrap, incluse impostazioni globali, intestazioni, testo del corpo, elenchi e altro.
group: contenuti
toc: true
---

## Impostazioni globali

Bootstrap imposta la visualizzazione globale di base, la tipografia e gli stili dei collegamenti. Quando è necessario un maggiore controllo, definisce le [classi di utilità testuali]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilità/text/).

- Utilizza un [gruppo di caratteri nativi]({{ site.baseurl }}/docs/{{ site.docs_version }}/contenuti/reboot/#native-font-stack) che seleziona la migliore `famiglia di font` per ogni sistema operativo e dispositivo.
- Per avere una più completa e accessibile scelta di font, assumiamo la radice predefinita del browser `font-size` (in genere 16px) in modo che i visitatori possano personalizzare le impostazioni predefinite del browser in base alle esigenze.
- Usa gli attributi `$font-family-base`, `$font-size-base`, e `$line-height-base` come nostra base tipografica applicata al `<body>`.
- Imposta il colore dei collegamenti tramite `$link-color` e applica le sottolineature dei collegamenti solo sull' `:hover`.
- Usa `$body-bg` per impostare il `background-color` sul `<body>` (`#fff` predefinito).

Questi stili possono essere trovati all'interno di `_reboot.scss`, e le variabili globali sono definite in `_variables.scss`. Assicurati di impostare `$font-size-base` in `rem`.

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
        {% markdown %}`<h1></h1>`{% endmarkdown %}
      </td>
      <td><span class="h1">h1. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h2></h2>`{% endmarkdown %}
      </td>
      <td><span class="h2">h2. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h3></h3>`{% endmarkdown %}
      </td>
      <td><span class="h3">h3. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h4></h4>`{% endmarkdown %}
      </td>
      <td><span class="h4">h4. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h5></h5>`{% endmarkdown %}
      </td>
      <td><span class="h5">h5. Intestazione di Bootstrap</span></td>
    </tr>
    <tr>
      <td>
        {% markdown %}`<h6></h6>`{% endmarkdown %}
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

{% example html %}
<p class="h1">h1. Intestazione di Bootstrap</p>
<p class="h2">h2. Intestazione di Bootstrap</p>
<p class="h3">h3. Intestazione di Bootstrap</p>
<p class="h4">h4. Intestazione di Bootstrap</p>
<p class="h5">h5. Intestazione di Bootstrap</p>
<p class="h6">h6. Intestazione di Bootstrap</p>
{% endexample %}

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

## Titoli in evidenza

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

{% example html %}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{% endexample %}

## Elementi di testo inline

Stili per elementi comuni HTML5 inline. 

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{% endexample %}

Le classi `.mark` e `.small` sono disponibili anche per applicare gli stessi stili di `<mark>` e `<small>` evitando eventuali implicazioni semantiche indesiderate che i tag porterebbero.

Anche se non mostrato sopra, sentiti libero di usare `<b>` e `<i>` in HTML5. `<b>` ha lo scopo di evidenziare parole o frasi senza conferire ulteriore importanza mentre `<i>` è principalmente per voce, termini tecnici, etc.

## Utilità per il testo

Cambia allineamento, trasformazione, stile, peso e colore del testo con il nostro [text utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilità/text/) e [color utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilità/colors/).

## Abbreviazioni

Implementazione stilizzata dell'elemento HTML `<abbr>` per abbreviazioni e acronimi per mostrare la versione espansa sull' hover. Le abbreviazioni hanno una sottolineatura predefinita e ottengono un cursore di aiuto per fornire un contesto aggiuntivo al passaggio del mouse e agli utenti delle tecnologie assistive.

Aggiungi `.initialism` a un'abbreviazione per una dimensione del font leggermente più piccola.

{% example html %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endexample %}

## Blockquotes

Per citare blocchi di contenuti da un'altra fonte all'interno del documento. Racchiudi ogni <abbr title="HyperText Markup Language">HTML</abbr> all'interno di un  `<blockquote class="blockquote">` come la citazione.

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### Citare una fonte

Aggiungi un `<footer class="blockquote-footer">` per identificare la fonte. Includi il nome delle fonte di origine in `<cite>`.

{% example html %}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

### Allineamento

Utilizza le utilità di testo necessarie per modificare l'allineamento del tuo blockquote.

{% example html %}
<blockquote class="blockquote text-center">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

{% example html %}
<blockquote class="blockquote text-right">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

## Liste

### Senza stile

Rimuovi il predefinito `list-style` e il margine sinistro sugli elementi elenco (solo per i figli diretti). **Questo si applica solo agli elementi della lista che sono figli diretti**, il che significa che dovrai aggiungere la classe per tutti gli elenchi annidati.

{% example html %}
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
{% endexample %}

### Inline

Rimuovi i punti elenco di una lista e applica un leggero `margin` con una combinazione di due classi, `.list-inline` e `.list-inline-item`.

{% example html %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endexample %}

### Allineamento lista descrizione

Allineare i termini e le descrizioni orizzontalmente utilizzando le classi predefinite del nostro sistema di griglia. Per termini più lunghi, puoi facoltativamente aggiungere la classe `.text-truncate` per troncare il testo con un ellipsis.

{% example html %}
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
{% endexample %}

## Tipografia responsive

*Tipografia responsive* si riferisce al ridimensionamento di testo e componenti semplicemente regolando il `font-size` dell'elemento radice all'interno di una serie di media queries. Bootstrap non fa questo per te, ma è abbastanza facile da aggiungere se ne hai bisogno.

Ecco un esempio pratico. Scegli qualunque `font-size` e media queries desideri.

{% highlight scss %}
html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}
{% endhighlight %}
