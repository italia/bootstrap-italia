---
layout: docs
group: form
toc: true

title: Select
description: Il classico “menu a tendina”, in nuove varianti.
---

Il plugin Javascript per costruire la select nelle sue varianti è basato su una libreria di terze parti, [Bootstrap Select](https://developer.snapappointments.com/bootstrap-select/). Nella pagina ufficiale del progetto, è possibile consultare documentazione aggiuntiva sul plugin.

### Select classica

La select è composta dal un wrapper esterno `.bootstrap-select-wrapper` seguita dalla label e dall'elemento `select`. Includendo la Select in questo modo, essa assumerà una serie di funzionalità descritte di seguito.

{% capture example %}
<div class="bootstrap-select-wrapper">
  <label>Etichetta</label>
  <select title="Scegli una opzione">
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

Non utilizzando questa struttura di elementi, la select viene mostrata come prevede il sistema operativo, senza modifiche:

{% capture example %}
<select title="Scegli una opzione">
  <option value="Value 1">Opzione 1</option>
  <option value="Value 2">Opzione 2</option>
  <option value="Value 3">Opzione 3</option>
  <option value="Value 4">Opzione 4</option>
  <option value="Value 5">Opzione 5</option>
</select>
{% endcapture %}{% include example.html content=example %}

### Select disabilitata

Per disabilitare una select, aggiungere la classe `.disabled` a `.bootstrap-select-wrapper` e aggiungere l'attributo `disabled` al tag `<select>` per disabilitare le funzionalità.

{% capture example %}
<div class="bootstrap-select-wrapper disabled">
  <label>Etichetta</label>
  <select disabled title="Scegli una opzione">
    <option value="Value 1">Opzione 1</option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}


### Select con reset

Per creare l'opzione che resetterà i valori selezionati andremo ad inserire nella option desiserata, all'interno dell'attributo "**data-content**" il seguente html:
`"Label del tasto reset <span class='reset-label'></span>"`

All'interno dell'attributo `title` dell'opzione inseriremo il titolo di default della select, in questo caso `"Scegli una opzione"`.

{% capture example %}
<div class="bootstrap-select-wrapper">
  <label>Etichetta</label>
  <select title="Scegli una opzione">
    <option value="" title="Scegli una opzione" data-content="Annulla <span class='reset-label'></span>"></option>
    <option value="Value 2">Opzione 2</option>
    <option value="Value 3">Opzione 3</option>
    <option value="Value 4">Opzione 4</option>
    <option value="Value 5">Opzione 5</option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con ricerca

Per attivare la ricerca è sufficiente aggiungere il parametro `data-live-search="true"` al tag `<select>` ed il relativo placeholder `data-live-search-placeholder="qui il placeholder..."`

{% capture example %}
<div class="bootstrap-select-wrapper">
  <label>Etichetta</label>
  <select title="Scegli una opzione" data-live-search="true" data-live-search-placeholder="Search here...">
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

Per inserire un icona che affianchi una option è sufficiente inserire all'interno dell'attributo "**data-content**" il seguente html: `"<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#CLASSE-ICONA'></use></svg> Label option"`

Al tag `<option>` aggiungeremo la classe `".icon-option-li"` per dare uno stile corretto al suo contenuto.

{% capture example %}
<div class="bootstrap-select-wrapper">
  <label>Etichetta</label>
  <select title="Scegli una opzione" data-live-search="true" data-live-search-placeholder="Search here...">
     <option class="icon-option-li" value="1" data-content="<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg>"></option>
     <option class="icon-option-li" value="2" data-content="<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Duis vestibulum eleifend libero"></option>
     <option class="icon-option-li" value="3" data-content="<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Phasellus pretium orci sed odio tempus"></option>
     <option class="icon-option-li" value="4" data-content="<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Vestibulum bibendum ex vel augue porttitor sodales"></option>
     <option class="icon-option-li" value="5" data-content="<svg class='icon'><use xlink:href='{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle'></use></svg> Praesent quis elementum turpis"></option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

-->

### Select Multipla

Per attivare la multiselezione, aggiungere gli attributi `multiple="true"` e `data-multiple-separator=""` alla select.

Nelle option inseriremo per l'attributo `data-content` il seguente HTML, che servirà a renderizzare con il corretto stile le opzioni selezionate.
`"<span class='select-pill'><span class='select-pill-text'>label option</span></span>"`

{% capture example %}
<div class="bootstrap-select-wrapper">
  <label>Etichetta</label>
  <select title="Scegli una opzione" multiple="true" data-multiple-separator="">
    <option value="1" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 1</span></span>"></option>
    <option value="2" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 2</span></span>"></option>
    <option value="3" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 3</span></span>"></option>
    <option value="4" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 4</span></span>"></option>
  </select>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con gruppi

Per le select con raggruppamenti utilizzare il tag HTML `<optgroup>` per raggruppare le `<option>`.

{% capture example %}
<div class="bootstrap-select-wrapper">
  <label>Etichetta</label>
  <select title="Scegli una opzione">
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

### Select multipla con gruppi e checkboxes

Per la creazione di questo tipo di select:

Aggiungere la classe `.no-tick` al div `.bootstrap-select-wrapper` per disabilitare la "spunta" sulla destra della option.

Se si vogliono aggiungere i pulsanti per la selezione / deselezione di tutte le opzioni disponibili, aggiungere alla select l'attributo `data-actions-box="true"`

Per inserire il componente [Checkbox]({{ site.baseurl }}/docs/form/checkbox/) inseriamo all'interno delle opzioni l'attributo `data-content` l'html del componente checkbox.

{% capture example %}
<div class="bootstrap-select-wrapper no-tick">
  <label>Etichetta</label>
  <select title="Scegli una opzione" multiple="true" data-multiple-separator="" data-actions-box="true">
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

### Modifica dinamica del campi della select

Dal momento che il plugin viene attivato al caricamento del documento mentre a volte può essere necessario attendere, viene messa a disposizione una funzione `$.setOptionsToSelect(_parametro)` che permette di riscrivere le opzioni della select, ad esempio nel caso vengano caricate successivamente. La funzione dev'essere chiamata dall'elemento con classe `.bootstrap-select-wrapper`, e con parametro in input `_parametro` un oggetto Javascript con proprietà "value" e "text" come segue:

```
$(document).ready(function() {
    $('.bootstrap-select-wrapper.my-select-wrapper').setOptionsToSelect([{
      text: 'push Label 1',
      value: 'pushValue 1'
    },{
      text: 'push Label 2',
      value: 'pushValue 2'
    },{
      text: 'push Label 3',
      value: 'pushValue 3'
    }]);
  });
```

