---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Tabelle
description: Documentazione ed esempi per lo stile delle tabelle.
---

## Esempi

A causa dell'uso diffuso di tabelle su widget di terze parti come calendari e campi di selezione data, Bootstrap ha progettato le tabelle senza forzarne lo stile. È sufficiente aggiungere la classe `.table` a qualsiasi `<table>`, quindi estendere con stili personalizzati o con le nostre varie classi incluse di modificatori.

Usando il markup di base della tabella, ecco come appaiono le tabelle che utilizzano la classe `.table` in Bootstrap.  
**Tutti gli stili di tabella sono ereditari**, il che significa che tutte le tabelle annidate avranno lo stesso stile della tabella genitrice.

{% capture example %}

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
{% endcapture %}{% include example.html content=example %}

## Varianti

Utilizza le classi contestuali per colorare tabelle, righe o celle individuali.

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Classe</th>
        <th scope="col">Intestazione</th>
        <th scope="col">Intestazione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-primary">
        <th scope="row">Primary</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-secondary">
        <th scope="row">Secondary</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-success">
        <th scope="row">Success</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-danger">
        <th scope="row">Danger</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-warning">
        <th scope="row">Warning</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-info">
        <th scope="row">Info</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-light">
        <th scope="row">Light</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
      <tr class="table-dark">
        <th scope="row">Dark</th>
        <td>Cella</td>
        <td>Cella</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<!-- Su tabelle -->
<table class="table-primary">
  ...
</table>
<table class="table-secondary">
  ...
</table>
<table class="table-success">
  ...
</table>
<table class="table-danger">
  ...
</table>
<table class="table-warning">
  ...
</table>
<table class="table-info">
  ...
</table>
<table class="table-light">
  ...
</table>
<table class="table-dark">
  ...
</table>

<!-- Su righe -->
<tr class="table-primary">
  ...
</tr>
<tr class="table-secondary">
  ...
</tr>
<tr class="table-success">
  ...
</tr>
<tr class="table-danger">
  ...
</tr>
<tr class="table-warning">
  ...
</tr>
<tr class="table-info">
  ...
</tr>
<tr class="table-light">
  ...
</tr>
<tr class="table-dark">
  ...
</tr>

<!-- Su celle (`td` o `th`) -->
<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>
```

{% include callout-warning-color-assistive-technologies.md %}

### Righe striate

Usa `.table-striped` per aggiungere delle striature zebrate ad ogni riga della tabella contenute in `<tbody>`.

<div class="bd-example">
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
</div>

```html
<table class="table table-striped">
  ...
</table>
```

Queste classi sono applicabili anche alle varianti:

<div class="bd-example">
  <table class="table table-dark table-striped">
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
</div>

```html
<table class="table table-dark table-striped">
  ...
</table>
```

### Righe ed hover

Aggiungi `.table-hover` per abilitare lo stato hover sulle righe della tabella contenute in `<tbody>`.

<div class="bd-example">
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
</div>

```html
<table class="table table-hover">
  ...
</table>
```

Le tabelle con hover possono essere combinate con la variante striata.

<div class="bd-example">
  <table class="table table-striped table-hover">
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
</div>

```html
<table class="table table-striped table-hover">
  ...
</table>
```

### Tabelle attive

{% capture example %}

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
    <tr class="table-active">
      <th scope="row">1</th>
      <td>Alessandro</td>
      <td>Rossi</td>
      <td>alessandro.rossi</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Francesco</td>
      <td>Bianchi</td>
      <td>francesco.bianchi</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Mario Verdi</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endcapture %}{% include example.html content=example %}

## Tabella con bordi

Aggiungi `.table-bordered` per avere i bordi a tutti i lati della tabella e su tutte le celle.

<div class="bd-example">
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
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Mario Verdi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </table>
</div>

```html
<table class="table table-bordered">
  ...
</table>
```

Le [utilities di colorazione dei bordi]({{site.baseurl}}/docs/organizzare-gli-spazi/bordi/#colore-dei-bordi) possono essere utilizzate per cambiarne i colori.

<div class="bd-example">
  <table class="table table-bordered border-primary">
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
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Mario Verdi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </table>
</div>

```html
<table class="table table-bordered">
  ...
</table>
```

## Tabella senza bordi

Aggiungi la classe `.table-borderless` per una tabella senza bordi.

<div class="bd-example">
  <table class="table table-borderless">
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
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Mario Verdi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </table>
</div>

```html
<table class="table table-borderless">
  ...
</table>
```

<div class="bd-example">
  <table class="table table-dark table-borderless">
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
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Mario Verdi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </table>
</div>

```html
<table class="table table-dark table-borderless">
  ...
</table>
```

## Tabella compatta

Aggiungi `.table-sm` per rendere le tabelle più compatte dimezzando il cell padding.

<div class="bd-example">
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
          <td>Alessandro</td>
          <td>Rossi</td>
          <td>alessandro.rossi</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Francesco</td>
          <td>Bianchi</td>
          <td>francesco.bianchi</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Mario Verdi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </table>
</div>

```html
<table class="table table-sm">
  ...
</table>
```

## Allineamento verticale

Le celle contenute nel `<thead>` sono sempre allineate verticalmente al bottom. Le celle del `<tbody>` ereditano l'allineamento da `<table>` e sono allineate al top per default. Utilizza le classi di [allineamento verticale]({{site.baseurl}}/docs/organizzare-gli-spazi/allineamento-verticale/) per riallineare dove necessario.

<div class="bd-example">
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col" class="w-25">Intestazione 1</th>
          <th scope="col" class="w-25">Intestazione 2</th>
          <th scope="col" class="w-25">Intestazione 3</th>
          <th scope="col" class="w-25">Intestazione 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr class="align-bottom">
          <td>Questa cella eredita <code>vertical-align: bottom;</code>dalla riga</td>
          <td>Questa cella eredita <code>vertical-align: bottom;</code>dalla riga</td>
          <td>Questa cella eredita <code>vertical-align: bottom;</code>dalla riga</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td class="align-top">This cell is aligned to the top.</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table align-middle">
    <thead>
      <tr>
        ...
      </tr>
    </thead>
    <tbody>
      <tr>
        ...
      </tr>
      <tr class="align-bottom">
        ...
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td class="align-top">This cell is aligned to the top.</td>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Annidamento

Gli stili di bordi, gli stili attivi e le varianti non sono ereditati dalle tabelle annidate.

<div class="bd-example">
  <table class="table table-striped table-bordered">
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
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
      <tr>
        <td colspan="4">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">A</th>
                <td>Dato A</td>
                <td>Dato B</td>
              </tr>
              <tr>
                <th scope="row">B</th>
                <td>Dato C</td>
                <td>Dato D</td>
              </tr>
              <tr>
                <th scope="row">C</th>
                <td>Dato E</td>
                <td>Dato F</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-striped">
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>
```

## Struttura

### Intestazione

Come per le tabelle utilizza le classi varianti come `.table-light` o `.table-dark` per modificare l'aspetto di `<thead>`.

<div class="bd-example">
  <table class="table">
    <thead class="table-dark">
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
        <td>	francesco.bianchi</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Alessandro</td>
        <td>Rossi</td>
        <td>alessandro.rossi</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <thead class="table-dark">
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

### Footer

<div class="bd-example">
  <table class="table">
    <thead class="table-light">
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
    <tfoot>
      <tr>
        <td>Footer</td>
        <td>Footer</td>
        <td>Footer</td>
        <td>Footer</td>
      </tr>
    </tfoot>
  </table>
</div>

```html
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    ...
  </tfoot>
</table>
```

### Caption

Un `<caption>` funziona come un'intestazione per una tabella. Aiuta gli utenti con screen reader a trovare una tabella e capire di cosa si tratta e decidere se vogliono leggerla.

<div class="bd-example">
  <table class="table table-sm">
    <caption>Lista degli utenti</caption>
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
        <td colspan="2">Alessandro Rossi</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<!-- On rows -->
<table class="table table-sm">
  <caption>
    Lista degli utenti
  </caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

Per renderizzare la `<caption>` in cima alla tabella utilizza la classe `.caption-top`.

<div class="bd-example">
  <table class="table sm caption-top">
    <caption>Lista degli utenti</caption>
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
        <td colspan="2">Alessandro Rossi</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-sm caption-top">
  <caption>
    Lista degli utenti
  </caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

## Tabelle responsive

Le tabelle responsive consentono di scorrere le tabelle orizzontalmente con facilità. Rendi ogni tabella responsive su tutti i viewports racchiudendo un `.table` con `.table-responsive`. Oppure, scegli un breakpoint massimo con il quale ottenere una tabella responsive usando `.table-responsive{-sm|-md|-lg|-xl|-xxl}`, rispettivamente con `max-width` di {% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}{{ bp.min-width }}{% if forloop.last != true %}, {% endif %}{% endunless %}{% endfor %}.

{% capture callout %}

##### Ritaglio / troncamento verticale

Le tabelle responsive fanno uso di `overflow-y: hidden`, che rimuove qualsiasi contenuto che va oltre i bordi inferiore o superiore della tabella. In particolare, questo può ritagliare i menu a discesa e altri widget di terze parti.
{% endcapture %}{% include callout.html content=callout type="warning" %}

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

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

### Breakpoint specifici

Usa `.table-responsive{-sm|-md|-lg|-xl|-xxl}` come necessario per creare tabelle responsive fino a un punto di interruzione particolare. Da quel punto di interruzione in su, la tabella si comporterà normalmente e non scorrerà orizzontalmente.

{% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}

<div class="bd-example">
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
</div>
{% endunless %}{% endfor %}

```html
{% for bp in site.data.breakpoints %}{% unless bp.breakpoint == "xs" %}
<div class="table-responsive{{ bp.abbr }}">
  <table class="table">
    ...
  </table>
</div>
{% endunless %}{% endfor %}
```
