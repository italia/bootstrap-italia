---
layout: docs
title: Select
description: Il classico “menu a tendina”, in nuove varianti.
group: componenti
toc: true
---

Il plugin Javascript per costruire la select nelle sue varianti è, [Bootstrap Select](https://developer.snapappointments.com/bootstrap-select/), nella pagina ufficiale potete trovare tutta la documentazione necessaria al suo utilizzo.

### Select classica

La select è composta dal suo wrapper esterno `.it-select-wrapper` seguita dalla label e dal div `.dropdown.bootstrap-select` che conterrà la nostra select con classe `.selectpicker`.

{% capture example %}
<div class="it-select-wrapper">
   <label>Field Label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker" title="Select an option">
         <option class="bs-title-option" value=""></option>
         <option value="Value 1">Option 1</option>
         <option value="Value 2">Option 2</option>
         <option value="Value 3">Option 3</option>
         <option value="Value 4">Option 4</option>
         <option value="Value 5">Option 5</option>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Select disabilitata

Per disabilitare una select, aggiungere la classe `.disabled` a `.it-select-wrapper` per stilare l'aspetto.
Aggiungere l'attributo `disabled` al tag `<select>` per disabilitare le funzionalità.

{% capture example %}
<div class="it-select-wrapper disabled">
   <label>Field Label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker" disabled title="Select an option">
         <option class="bs-title-option" value=""></option>
         <option value="Value 1">Option 1</option>
         <option value="Value 2">Option 2</option>
         <option value="Value 3">Option 3</option>
         <option value="Value 4">Option 4</option>
         <option value="Value 5">Option 5</option>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Select con reset

Per creare l'opzione che resetterà i valori selezionati andremo ad inserire nella option desiserata, all'interno dell'attributo "**data-content**" il seguente html:  
`"Label del tasto reset <span class='reset-label'></span>"`  

All'interno dell'attributo "**title**" inseriremo il title di default della select (in questo caso "Select an option")

{% capture example %}
<div class="it-select-wrapper">
   <label>Field Label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker" title="Select an option">
         <option value="" title="Select an option" data-content="None <span class='reset-label'></span>"></option>
         <option value="Value 2">Option 2</option>
         <option value="Value 3">Option 3</option>
         <option value="Value 4">Option 4</option>
         <option value="Value 5">Option 5</option>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con ricerca

Per attivare la ricerca è sufficiente aggiungere il parametro `data-live-search="true"` al tag `<select>` ed il relativo placeholder `data-live-search-placeholder="qui il placeholder..."`


{% capture example %}
<div class="it-select-wrapper">
   <label>Field Label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker" title="Select an option" data-live-search="true" data-live-search-placeholder="Search here...">
         <option value="Value 1">Lorem ipsum dolor sit amet</option>
         <option value="Value 2">Duis vestibulum eleifend libero</option>
         <option value="Value 3">Phasellus pretium orci sed odio tempus</option>
         <option value="Value 4">Vestibulum bibendum ex vel augue porttitor sodales</option>
         <option value="Value 5">Praesent quis elementum turpis</option>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con icona

Per inserire un icona che affianchi una option è sufficiente inserire all'interno dell'attributo "**data-content**" il seguente html:  
 `"<svg class='icon'><use xlink:href='/dist/svg/sprite.svg#CLASSE-ICONA'></use></svg> Label option"`

Al tag `<option>` aggiungeremo la classe `".icon-option-li"` per stilare correttamente il suo contenuto.


{% capture example %}
<div class="it-select-wrapper">
   <label>Field Label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker" title="Select an option" data-live-search="true" data-live-search-placeholder="Search here...">
         <option class="icon-option-li" data-content="<svg class='icon'><use xlink:href='/dist/svg/sprite.svg#it-info-circle'></use></svg> Lorem ipsum dolor sit amet" value="Value 1"></option>
         <option class="icon-option-li" data-content="<svg class='icon'><use xlink:href='/dist/svg/sprite.svg#it-info-circle'></use></svg> Duis vestibulum eleifend libero" value="Value 2"></option>
         <option class="icon-option-li" data-content="<svg class='icon'><use xlink:href='/dist/svg/sprite.svg#it-info-circle'></use></svg> Phasellus pretium orci sed odio tempus" value="Value 3"></option>
         <option class="icon-option-li" data-content="<svg class='icon'><use xlink:href='/dist/svg/sprite.svg#it-info-circle'></use></svg> Vestibulum bibendum ex vel augue porttitor sodales" value="Value 4"></option>
         <option class="icon-option-li" data-content="<svg class='icon'><use xlink:href='/dist/svg/sprite.svg#it-info-circle'></use></svg> Praesent quis elementum turpis" value="Value 5"></option>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Select Multipla

Per attivare la multiselezione, aggiungere gli attributi `multiple="true"` e `data-multiple-separator=""` alla select.

Nelle option inseriremo per l'attributo `data-content` il seguente html custom (che servirà a renderizzare con il corretto stile le opzioni selezionate)   
`"<span class='select-pill'><span class='select-pill-text'>label option</span></span>"`


{% capture example %}
<div class="it-select-wrapper">
   <label>Field Label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker" title="Select an option" multiple="true" data-multiple-separator="">
         <option value="Value 1" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 1</span></span>"></option>
         <option value="Value 2" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 2</span></span>"></option>
         <option value="Value 3" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 4</span></span>"></option>
         <option value="Value 4" data-content="<span class='select-pill'><span class='select-pill-text'>Opzione 5</span></span>"></option>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Select con gruppi

Per le select con raggruppamenti ultilizzare il tag html `<optgroup>` per raggruppare le `<option>`.

{% capture example %}
<div class="it-select-wrapper">
   <label>Field label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker">
         <optgroup label="Group 1">
            <option>Option 1</option>
            <option>Option 2</option>
         </optgroup>
         <optgroup label="Group 2">
            <option value="Value 1">Option 1</option>
            <option value="Value 2">Option 2</option>
         </optgroup>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Select multipla con gruppi e checkboxes

Per la creazione di questo tipo di select:

Aggiungere la classe `.no-tick` al div `.it-select-wrapper` per disabilitare la "spunta" sulla destra della option.

Se si vogliono aggiungere i pulsanti per la selezione / deselezione di tutte le optio disponibili, aggiungere alla select l'attributo `data-actions-box="true"`

Per inserire il componente [Checkbox]({{ site.baseurl }}/docs/componenti/form-checkbox/) inseriamo all'interno dell'option l'attribto `data-content` l'html del componente checkbox.


{% capture example %}
<div class="it-select-wrapper no-tick">
   <label>Field Label</label>
   <!-- start select-->
   <div class="dropdown bootstrap-select">
      <select class="selectpicker" title="Select an option" multiple="true" data-multiple-separator="" data-actions-box="true">
         <optgroup label="Group 1">
            <option value="Value 1" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox1' ><label for='checkbox1'>Label di esempio</label></span>" check-id="checkbox1"></option>
            <option value="Value 2" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox2' ><label for='checkbox2'>Label di esempio 2</label></span>" check-id="checkbox2"></option>
         </optgroup>
         <optgroup label="Group 2">
            <option value="Value 3" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox3' ><label for='checkbox3'>Label di esempio 3</label></span>" check-id="checkbox3"></option>
            <option value="Value 4" data-content="<span class='form-check' aria-describedby=''><input type='checkbox' data-id='checkbox4' ><label for='checkbox4'>Label di esempio 4</label></span>" check-id="checkbox4"></option>
         </optgroup>
      </select>
   </div>
</div>
{% endcapture %}{% include example.html content=example %}



