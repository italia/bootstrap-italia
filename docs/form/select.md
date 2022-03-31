---
layout: docs
group: form
toc: true

title: Select
description: Il classico “menu a tendina”, in nuove varianti.
---

### Select

La select standard è composta dal un wrapper esterno `.select-wrapper` seguita dalla label e dall'elemento `select`. Includendo la Select in questo modo, essa assumerà la visualizzazione corretta.

{% capture example %}

<div class="select-wrapper">
  <label for="defaultSelect">Etichetta</label>
  <select id="defaultSelect">
    <option selected="" value="">Scegli un'opzione</option>
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select disabilitata
Per disabilitare una select, aggiungere l'attributo `disabled` al tag `<select>` per disabilitare le funzionalità.
{% capture example %}
<div class="select-wrapper">
  <label for="defaultSelectDisabled">Etichetta</label>
  <select id="defaultSelectDisabled" disabled>
    <option selected="" value="">Scegli un'opzione</option>
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con gruppi

Per le select con raggruppamenti utilizzare il tag HTML <optgroup> per raggruppare le <option>.

{% capture example %}
<div class="select-wrapper">
  <label for="defaultSelectGroup">Etichetta</label>
  <select id="defaultSelectGroup">
    <option selected="" value="">Scegli un'opzione</option>
    <optgroup label="Gruppo 1">
      <option value="1">Opzione 1</option>
      <option value="2">Opzione 2</option>
    </optgroup>
    <optgroup label="Gruppo 2">
      <option value="3">Opzione 3</option>
      <option value="4">Opzione 4</option>
    </optgroup>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select custom

{% capture callout %}

**Il componente verrà deprecato in tutte le sue forme nella prossima release di Bootstrap Italia**

Il componente select custom presenta alcuni problemi di accessibilità si consiglia l'utilizzo della select standard pienamente accessibile.
{% endcapture %}{% include callout.html content=callout type="danger" %}

Il plugin Javascript per costruire la select nelle sue varianti è basato su una libreria di terze parti, [Bootstrap Select](https://developer.snapappointments.com/bootstrap-select/). Nella pagina ufficiale del progetto, è possibile consultare documentazione aggiuntiva sul plugin.

La select è composta dal un wrapper esterno `.bootstrap-select-wrapper` seguita dalla label e dall'elemento `select`. Includendo la Select in questo modo, essa assumerà una serie di funzionalità descritte di seguito.

{% capture example %}

<div class="bootstrap-select-wrapper">
  <label for="selectExample1">Etichetta</label>
  <select id="selectExample1" title="Scegli un'opzione">
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select custom disabilitata

Per disabilitare una select, aggiungere la classe `.disabled` a `.bootstrap-select-wrapper` e aggiungere l'attributo `disabled` al tag `<select>` per disabilitare le funzionalità.

{% capture example %}

<div class="bootstrap-select-wrapper disabled">
  <label for="selectExample2">Etichetta</label>
  <select id="selectExample2" disabled title="Scegli un'opzione">
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select custom con reset

Per creare l'opzione che resetterà i valori selezionati andremo ad inserire nella option desiderata, all'interno dell'attributo "**data-content**" il seguente html:
`"Label del tasto reset <span class='reset-label'></span>"`

All'interno dell'attributo `title` dell'opzione inseriremo il titolo di default della select, in questo caso `"Scegli un'opzione"`.

{% capture example %}

<div class="bootstrap-select-wrapper">
  <label for="selectExample3">Etichetta</label>
  <select id="selectExample3" title="Scegli un'opzione">
    <option value="" title="Scegli un'opzione" data-content="Annulla <span class='reset-label'></span>"></option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select custom con ricerca

Per attivare la ricerca è sufficiente aggiungere il parametro `data-live-search="true"` al tag `<select>` ed il relativo placeholder `data-live-search-placeholder="qui il placeholder..."`
{% capture callout %}

**Il componente verrà deprecato per problemi di accessibilità**

Il componente select custom con ricerca presenta alcuni problemi di accessibilità si consiglia l'utilizzo del componente [autocompletamento]({{ site.baseurl }}/docs/form/autocompletamento/).
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture callout %}
In caso di problemi di layout quando nella select sono presenti più di 599 elementi, disabilitare `virtualScroll` come riportato nella [issue #619](https://github.com/italia/bootstrap-italia/issues/619).
```js
$('.select').selectpicker({ virtualScroll: false });
```
{% endcapture %}{% include callout.html content=callout type="warning" %}

Il plugin Javascript per costruire la select nelle sue varianti è basato su una libreria di terze parti, [Bootstrap Select](https://developer.snapappointments.com/bootstrap-select/). Nella pagina ufficiale del progetto, è possibile consultare documentazione aggiuntiva sul plugin.

La select è composta dal un wrapper esterno `.bootstrap-select-wrapper` seguita dalla label e dall'elemento `select`. Includendo la Select in questo modo, essa assumerà una serie di funzionalità descritte di seguito.

{% capture example %}

<div class="bootstrap-select-wrapper">
  <label for="selectExample4">Etichetta</label>
  <select id="selectExample4" title="Scegli un'opzione" data-live-search="true" data-live-search-placeholder="Cerca opzioni">
    <option value="1">Lorem ipsum dolor sit amet</option>
    <option value="2">Duis vestibulum eleifend libero</option>
    <option value="3">Phasellus pretium orci sed odio tempus</option>
    <option value="4">Vestibulum bibendum ex vel augue porttitor sodales</option>
    <option value="5">Praesent quis elementum turpis</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

<!--

### Select con icona

Per inserire un icona che affianchi una option è sufficiente inserire all'interno dell'attributo "**data-content**" il seguente html: `"<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprite.svg#CLASSE-ICONA'></use></svg> Label option"`

Al tag `<option>` aggiungeremo la classe `".icon-option-li"` per dare uno stile corretto al suo contenuto.

{% capture example %}
<div class="bootstrap-select-wrapper">
  <label>Etichetta</label>
  <select title="Scegli un'opzione" data-live-search="true" data-live-search-placeholder="Search here...">
     <option class="icon-option-li" value="1" data-content="<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg>"></option>
     <option class="icon-option-li" value="2" data-content="<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Duis vestibulum eleifend libero"></option>
     <option class="icon-option-li" value="3" data-content="<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Phasellus pretium orci sed odio tempus"></option>
     <option class="icon-option-li" value="4" data-content="<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Vestibulum bibendum ex vel augue porttitor sodales"></option>
     <option class="icon-option-li" value="5" data-content="<svg class='icon'><use href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Praesent quis elementum turpis"></option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

-->

### Select custom Multipla

Per attivare la multiselezione, aggiungere gli attributi `multiple="true"` e `data-multiple-separator=""` alla select.

Nelle option inseriremo per l'attributo `data-content` il seguente HTML, che servirà a renderizzare con il corretto stile le opzioni selezionate.
`"<span class='select-pill'><span class='select-pill-text'>label option</span></span>"`

{% capture example %}

<div class="bootstrap-select-wrapper">
  <label for="selectExample5">Etichetta</label>
  <select id="selectExample5" title="Scegli un'opzione" multiple="true" data-multiple-separator="">
    <option value="1" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 1</span></span>"></option>
    <option value="2" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 2</span></span>"></option>
    <option value="3" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 3</span></span>"></option>
    <option value="4" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 4</span></span>"></option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select custom con gruppi

Per le select con raggruppamenti utilizzare il tag HTML `<optgroup>` per raggruppare le `<option>`.

{% capture example %}

<div class="bootstrap-select-wrapper">
  <label for="selectExample6">Etichetta</label>
  <select id="selectExample6" title="Scegli un'opzione">
    <optgroup label="Gruppo 1">
      <option value="1">Opzione 1</option>
      <option value="2">Opzione 2</option>
    </optgroup>
    <optgroup label="Gruppo 2">
      <option value="3">Opzione 3</option>
      <option value="4">Opzione 4</option>
    </optgroup>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

{% comment %}
{% TODO questo esempio è stato temporaneamente rimosso perché potenzialmente a rischio di XSS %}

### Select custom multipla con gruppi e checkboxes

Per la creazione di questo tipo di select:

Aggiungere la classe `.no-tick` al div `.bootstrap-select-wrapper` per disabilitare la "spunta" sulla destra della option.

Se si vogliono aggiungere i pulsanti per la selezione / deselezione di tutte le opzioni disponibili, aggiungere alla select l'attributo `data-actions-box="true"`

Per inserire il componente [Checkbox]({{ site.baseurl }}/docs/form/checkbox/) inseriamo all'interno delle opzioni l'attributo `data-content` l'html del componente checkbox.

{% capture example %}

<div class="bootstrap-select-wrapper no-tick">
  <label for="selectExample7">Etichetta</label>
  <select id="selectExample7" title="Scegli un'opzione" multiple="true" data-multiple-separator="" data-actions-box="true">
    <optgroup label="Gruppo 1">
      <option value="1" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox1' ><label for='checkbox1'>Label di esempio 1</label></span>" check-id="checkbox1"></option>
      <option value="2" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox2' ><label for='checkbox2'>Label di esempio 2</label></span>" check-id="checkbox2"></option>
    </optgroup>
    <optgroup label="Gruppo 2">
      <option value="3" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox3' ><label for='checkbox3'>Label di esempio 3</label></span>" check-id="checkbox3"></option>
      <option value="4" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox4' ><label for='checkbox4'>Label di esempio 4</label></span>" check-id="checkbox4"></option>
    </optgroup>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

{% endcomment %}

### Modifica dinamica del campi della select custom

Dal momento che il plugin viene attivato al caricamento del documento mentre a volte può essere necessario attendere, viene messa a disposizione una funzione `$.setOptionsToSelect(_parametro)` che permette di riscrivere le opzioni della select, ad esempio nel caso vengano caricate successivamente. La funzione dev'essere chiamata dall'elemento con classe `.bootstrap-select-wrapper`, e con parametro in input `_parametro` un oggetto Javascript con proprietà "value" e "text" come segue:

```js
$(document).ready(function () {
  $('.bootstrap-select-wrapper.my-select-wrapper').setOptionsToSelect([
    {
      text: 'push Label 1',
      value: 'pushValue 1',
    },
    {
      text: 'push Label 2',
      value: 'pushValue 2',
    },
    {
      text: 'push Label 3',
      value: 'pushValue 3',
    },
  ])
})
```
