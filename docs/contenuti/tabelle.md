---
layout: docs
title: Tabelle
description: Documentazione ed esempi per lo stile delle tabelle.
group: contenuti
toc: true
---

## Esempi

A causa dell'uso diffuso di tabelle su widget di terze parti come calendari e campi di selezione data, Bootstrap ha progettato le tabelle senza forzarne lo stile. È sufficiente aggiungere la classe `.table` a qualsiasi `<table>`, quindi estendere con stili personalizzati o con le nostre varie classi incluse di modificatori.

Usando il markup di base della tabella, ecco come appaiono le tabelle che utilizzano la classe `.table` in Bootstrap. **Tutti gli stili di tabella sono ereditari**, il che significa che tutte le tabelle nidificate saranno stilizzate nello stesso modo del genitore.

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

Puoi anche invertire i colori, con testo chiaro su sfondi scuri con `.table-dark`.

{% example html %}
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Opzioni delle intestazioni di tabella

Simile alle tabelle e alle tabelle scure, utilizzare le classi di modifica `.thead-light` o `.thead-dark` per far apparire `<thead>` chiaro o grigio scuro.

{% example html %}
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Righe striate

Usa `.table-striped` per aggiungere delle striature zebrate ad ogni riga della tabella contenute in `<tbody>`.

{% example html %}
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

{% example html %}
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Tabella con bordi

Aggiungi `.table-bordered`  per avere i bordi a tutti i lati della tabella e su tutte le celle.

{% example html %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

{% example html %}
<table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Righe ed hover

Aggiungi `.table-hover` per abilitare lo stato hover sulle righe della tabella  contenute in `<tbody>`.

{% example html %}
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

{% example html %}
<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Tabella compatta

Aggiungi `.table-sm` per rendere le tabelle più compatte dimezzando il cell padding.

{% example html %}
<table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

{% example html %}
<table class="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mario</td>
      <td>Verdi</td>
      <td>mario.verdi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Classi contestuali

Usa le classi contestuali per colorare le righe delle tabelle o le singole celle.

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">Active</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      {% for color in site.data.theme-colors %}<tr class="table-{{ color.name }}">
        <th scope="row">{{ color.name | capitalize }}</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>{% endfor %}
    </tbody>
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="table-active">...</tr>{% for color in site.data.theme-colors %}
<tr class="table-{{ color.name }}">...</tr>{% endfor %}


<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>{% for color in site.data.theme-colors %}
  <td class="table-{{ color.name }}">...</td>{% endfor %}
</tr>
{% endhighlight %}

Le consuete varianti di sfondo della tabella non sono disponibili con la tabella scura, tuttavia, è possibile utilizzare [text or background utilities]({{ site.baseurl }}/docs/utilities/colors/) per ottenere stili simili.
 

<div class="bd-example">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-primary">
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-success">
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-info">
        <th scope="row">5</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-warning">
        <th scope="row">7</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="bg-danger">
        <th scope="row">9</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<!-- On rows -->
<tr class="bg-primary">...</tr>
<tr class="bg-success">...</tr>
<tr class="bg-warning">...</tr>
<tr class="bg-danger">...</tr>
<tr class="bg-info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="bg-primary">...</td>
  <td class="bg-success">...</td>
  <td class="bg-warning">...</td>
  <td class="bg-danger">...</td>
  <td class="bg-info">...</td>
</tr>
{% endhighlight %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

Crea tabelle responsive racchiudendo ogni `.table` con `.table-responsive{-sm|-md|-lg|-xl}`, facendo scorrere orizzontalmente la tabella ad ogni breakpoint, rispettivamente con `max-width` di {% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}{{ bp.min-width }}{% if forloop.last != true %}, {% endif %}{% endunless %}{% endfor %}.

{% callout info %}
Nota che in quanto i browser non supportano attualmente i [range context queries](https://www.w3.org/TR/mediaqueries-4/#range-context), stiamo aggirando i limiti dei [prefissi `min-` and `max-`](https://www.w3.org/TR/mediaqueries-4/#mq-min-max) e viewports con larghezze frazionarie (che possono verificarsi in determinate condizioni su dispositivi ad alta risoluzione, ad esempio) utilizzando valori con maggiore precisione per questi confronti.
{% endcallout %}

## Captions

Un `<caption>` funziona come un'intestazione per una tabella. Aiuta gli utenti con screen reader a trovare una tabella e capire di cosa si tratta e decidere se vogliono leggerla.

{% example html %}
<table class="table">
  <caption>Lista di utenti</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Tabelle responsive

Le tabelle responsive consentono di scorrere le tabelle orizzontalmente con facilità. Rendi ogni tabella responsive su tutti i viewports racchiudendo un `.table` con `.table-responsive`. Oppure, scegli un breakpoint massimo con il quale ottenere una tabella responsive usando `.table-responsive{-sm|-md|-lg|-xl}`.

{% callout warning %}
##### Ritaglio / troncamento verticale

Le tabelle responsive fanno uso di `overflow-y: hidden`, che rimuove qualsiasi contenuto che va oltre i bordi inferiore o superiore della tabella. In particolare, questo può ritagliare i menu a discesa e altri widget di terze parti.
{% endcallout %}

### Sempre responsive

Attraverso ogni breakpoint, usa `.table-responsive` per tabelle con scorrimento verticale.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
          <th scope="col">Intestazione</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
          <td>Cella</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{% highlight html %}
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
{% endhighlight %}

### Breakpoint specifici

Usa `.table-responsive{-sm|-md|-lg|-xl}` come necessario per creare tabelle responsive fino a un punto di interruzione particolare. Da quel punto di interruzione in su, la tabella si comporterà normalmente e non scorrerà orizzontalmente.

<div class="bd-example">
{% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}
<div class="table-responsive{{ bp.abbr }}">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Intestazione</th>
        <th scope="col">Intestazione</th>
        <th scope="col">Intestazione</th>
        <th scope="col">Intestazione</th>
        <th scope="col">Intestazione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
    </tbody>
  </table>
</div>
{% endunless %}{% endfor %}
</div>

{% highlight html %}
{% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}
<div class="table-responsive{{ bp.abbr }}">
  <table class="table">
    ...
  </table>
</div>
{% endunless %}{% endfor %}
{% endhighlight %}
