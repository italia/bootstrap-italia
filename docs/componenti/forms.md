---
layout: docs
title: Form
description: Esempi e linee guida per utilizzare gli elementi di un modulo form seguendo gli stili predisposti.
group: componenti
toc: true
---

## Panoramica

Bootstrap utilizza [Reboot]({{ site.baseurl }}/docs/contenuti/reboot/#forms) per definire una base consistente di stile su cui è costruito tutto il resto così da attivare le visualizzazioni personalizzate per un rendering più uniforme su browser e dispositivi.

Assicurati di utilizzare uno degli attributi appositi `type` per gli elementi input (ad esempio, `email` per l'indirizzo email o `number` per le informazioni numeriche) in modo da sfruttare i controlli di input più recenti come la verifica dell'email, la selezione del numero e altro.

Attenetevi alla sintassi HTML qui di seguito per ottenere, sia graficamente che funzionalmente, gli effetti predisposti. Ad esempio l'elemento `label` va inserito dopo l'elemento `input` anche se inusuale, grazie all'attributo `for` risulterà sempre accessibile agli screenreader.

## Elementi Form

Gli elementi del form come `<input>`, `<select>` e `<textarea>` sono graficamente personalizzati grazie alla classe `.form-control` e debbono essere contenuti in un `.form-group`.

### Input text

{% example html %}
<form>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputText">
    <label for="exampleInputText">Nominativo</label>
  </div>
  <div class="form-group">
    <input type="number" class="form-control" id="exampleInputNumber">
    <label for="exampleInputNumber">Numero partecipanti</label>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp1">
    <label for="exampleInputEmail1">Indirizzo email</label>
    <small id="emailHelp1" class="form-text text-muted">Non condivideremo mai la tua email con nessun altro.</small>
  </div>
</form>
{% endexample %}

### Input password

Per rendere migliore l'utilizzo del campo password sui dispositivi mobili l'elemento è stato dotato di un visualizzatore di quanto digitato.

{% example html %}
<form>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword">
    <label for="exampleInputPassword">Password</label>
  </div>
</form>
{% endexample %}

### Input file

Avete la possibilità di usare l'elemento input file predefinito oppure avente la personalizzazione grafica aggiungendo a `.form-group` la classe `.form-file`. Con l'aggiunta di questa classe viene nascosto l'elemento `<input>` tramite `opacity` mentre la `<label>` si sovrappone coprendone l'area. Poi un finto pulsante viene generato e posizionato con `::before`. 

Per i `.form-file` è stato previsto un javascript che permetterà di avere una visione di quanti e quali file sono stati scelti una volta selezionati.

{% example html %}
<form>
  <div class="form-group">
    <input type="file" class="form-control-file" id="exampleFormControlFile">
    <label for="exampleFormControlFile">Esempio campo senza personalizzazione grafica</label>
  </div>
  <div class="form-group form-file">
    <input id="file" class="form-control" type="file">
    <label for="file">Esempio campo per l'upload di un singolo file</label>
    <span class="form-file-name"></span>
  </div>
  <div class="form-group form-file">
    <input id="fileM" class="form-control" type="file" multiple="multiple">
    <label for="fileM">Esempio campo per l'upload multiplo di file</label>
    <span class="form-file-name"></span>
  </div>
</form>
{% endexample %}

#### Tradurre o personalizzare le stringhe di testo

La [pseudo-classe `:lang ()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) viene utilizzata per consentire la traduzione del testo "Sfoglia" in altri le lingue. Sovrascrivi o aggiungi voci alla variabile Sass `$custom-file-text` con il [tag lingua](https://en.wikipedia.org/wiki/IETF_language_tag) pertinente per tradurre la stringa di testo nella lingua scelta. Ad esempio, ecco come si potrebbe aggiungere una traduzione in inglese (il codice della lingua è `en`):

{% highlight scss %}
$custom-file-text: (
  it: "Sfoglia",
  en: "Browse"
);
{% endhighlight %}

Eccoti un esempio in funzione per la traduzione in inglese:

{% example html %}
<div class="form-group form-file">
  <input id="fileEn" class="form-control" type="file" lang="en">
  <label for="fileEn">Choose file...</label>
  <span class="form-file-name"></span>
</div>
{% endexample %}

È necessario impostare correttamente la lingua del documento (o dell'albero secondario) in modo che venga visualizzato il testo corretto. Questo può essere fatto usando [l'attributo `lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) sull'elemento `<html>` o modificando il [`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12) ad esempio.

### Select

Per ottenere un menù a tendina conforme alle linee guida, è sufficiente aggiungere al tag `<select>` la classe `.custom-select` e seguire le indicazioni riportate di seguito. Il componente _select_ è molto flessibile, in quanto permette selezioni multiple, ricerca contestuale, e raggruppamenti delle opzioni disponibili.

Di seguito sono mostrate alcune di queste combinazioni.

#### Select classica

{% example html %}
<form>
  <div class="form-group">
    <select class="custom-select">
      <option value="" disabled selected>Seleziona una opzione</option>
      <option value="1">Opzione 1</option>
      <option value="2">Opzione 2</option>
      <option value="3">Opzione 3</option>
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endexample %}

#### Select multipla

La personalizzazione attraverso Bootstrap Italia permette di selezionare più elementi in modo naturale, senza la necessità di tenere premute combinazioni da tastiera.

{% example html %}
<form>
  <div class="form-group">
    <select class="custom-select" multiple>
      <option value="" disabled selected>Seleziona una o più regioni</option>
      {% for regione in site.data.regioni %}
      <option value="{{ forloop.index }}">{{ regione }}</option>{% endfor %}
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endexample %}

#### Select con ricerca

Esempio di _select_ con ricerca:

{% example html %}
<form>
  <div class="form-group">
    <select class="custom-select" searchable="Cerca una regione">
      <option value="" disabled selected>Seleziona una regione</option>
      {% for regione in site.data.regioni %}
      <option value="{{ forloop.index }}">{{ regione }}</option>{% endfor %}
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endexample %}

#### Select con gruppi di opzioni

Esempio di _select_ con gruppi di opzioni:

{% example html %}
<form>
  <div class="form-group">
    <select class="custom-select" multiple>
        <optgroup label="Gruppo 1">
            <option value="1">Opzione 1</option>
            <option value="2">Opzione 2</option>
        </optgroup>
        <optgroup label="Gruppo 2">
            <option value="3">Opzione 3</option>
            <option value="4">Opzione 4</option>
        </optgroup>
    </select>
    <label>Label di esempio</label>
  </div>
</form>
{% endexample %}

### Textarea

{% example html %}
<form>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <label for="exampleFormControlTextarea1">Example textarea</label>
  </div>
</form>
{% endexample %}

## Personalizzazioni

### Icone

Hai la possibilità di inserire un'icona a lato dei campi input, select e textarea. Basterà inserire l'icona come elemeto prima del campo.

{% example html %}
<form>
  <div class="form-group">
    <i class="icoPrefix it-youtube"></i>
    <input class="form-control" type="text" id="videoYoutube">
    <label for="videoYoutube">Link video di youtube</label>
  </div>
  <div class="form-group">
    <i class="icoPrefix it-youtube"></i>
    <select class="custom-select">
      <option value="" disabled selected>Seleziona un video</option>
      <option value="1">Video 1</option>
      <option value="2">Video 2</option>
      <option value="3">Video 3</option>
    </select>
    <label>Elenco video</label>
  </div>
</form>
{% endexample %}

### Dimensione

Gestisci la dimensione dell'elemento usando le classi `.form-control-lg` e `.form-control-sm` che modificheranno la grandezza del carattere e la spaziatura interna.

{% example html %}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Input predefinito">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
{% endexample %}

{% example html %}
<select class="custom-select form-control-lg">
  <option>Select grande</option>
</select>
<select class="custom-select ">
  <option>Select predefinita</option>
</select>
<select class="custom-select form-control-sm">
  <option>Select piccola</option>
</select>
{% endexample %}

### Readonly

Aggiungi l'attributo booleano `readonly` su un input per impedire la modifica del valore contenuto. Gli input di sola lettura appaiono più chiari (proprio come gli input disabilitati), ma mantengono il cursore standard.

{% example html %}
<input class="form-control" type="text" placeholder="Contenuto in sola lettura" readonly>
{% endexample %}

### Readonly normalizzato

Se vuoi avere gli elementi `<input readonly>` nella forma stilizzata come testo normale usa la classe `.form-control-plaintext`.

{% example html %}
<form>
  <div class="form-group">
    <input type="text" class="form-control-plaintext" id="staticEmail" value="email@example.com" readonly>
    <label for="staticEmail">Email</label>
  </div>
</form>
{% endexample %}


## Checkbox e radio

Lo stile dei **checkbox** e **radio** è stato migliorato graficamente per rendere l'esperienza visiva e funzionale migliore. Per ottenere questo risultato è necessario inserire la classe `.form-check` nel contenitore padre. Mentre le **checkbox** servono a selezionare una o più opzioni in un elenco, i **radio** consentono di selezionare una sola opzione tra molte.

{% example html %}
<form>
  <div class="form-check">
    <input id="checkbox1" type="checkbox">
    <label for="checkbox1">Checkbox di esempio</label>
  </div>
  <div class="form-check">
    <input name="gruppo1" type="radio" id="radio1" checked>
    <label for="radio1">Radio di esempio 1</label>
  </div>
  <div class="form-check">
    <input name="gruppo1" type="radio" id="radio2">
    <label for="radio2">Radio di esempio 2</label>
  </div>
</form>
{% endexample %}

### Inline 

Per allineare orizzontalmente le **checkbox** o i **radio** basterà aggiungere la classe `.form-check-inline` a qualsiasi `.form-check`.

{% example html %}
<form>
  <div class="row">
    <div class="form-check form-check-inline">
      <input id="checkbox2" type="checkbox">
      <label for="checkbox2">Checkbox non selezionato</label>
    </div>
    <div class="form-check form-check-inline">
      <input id="checkbox3" type="checkbox" checked="checked">
      <label for="checkbox3">Checkbox selezionato</label>
    </div>
  </div>
  <div class="row">
    <div class="form-check form-check-inline">
      <input name="gruppo2" type="radio" id="radio4" checked>
      <label for="radio4">Opzione 1</label>
    </div>
    <div class="form-check form-check-inline">
      <input name="gruppo2" type="radio" id="radio5">
      <label for="radio5">Opzione 2</label>
    </div>
  </div>
</form>
{% endexample %}

### Disabilitato

Affinchè i campi **checkbox** e **radio** risultino disabilitati occorrerà aggiungere l'attributo `disabled` all'input e la classe `.disabled` alla label relativa.

{% example html %}
<form>
  <div class="form-check">
    <input id="checkbox4" type="checkbox" disabled>
    <label for="checkbox4" class="disabled">Checkbox disabilitato non selezionato</label>
  </div>
  <div class="form-check">
    <input id="checkbox5" type="checkbox" disabled checked="checked">
    <label for="checkbox5" class="disabled">Checkbox disabilitato selezionato</label>
  </div>
  <div class="form-check">
    <input name="gruppo3" type="radio" class="with-gap" id="radio7" checked disabled>
    <label for="radio7" class="disabled">Opzione 1 selezionato</label>
  </div>
  <div class="form-check">
    <input name="gruppo3" type="radio" class="with-gap" id="radio8" disabled>
    <label for="radio8" class="disabled">Opzione 2 non selezionato</label>
  </div>
</form>
{% endexample %}

### Gruppi

Per poter raggruppare gli elementi **checkbox** e **radio** occorrerà aggiungere al `.form-check` la classe `.form-check-group`. L'elemento grafico di spunta verrà allineato alla destra del contenuto testuale.

{% example html %}
<form>
  <div class="row">
    <div class="col-5">
      <div class="form-check form-check-group">
        <input id="checkbox6" type="checkbox" checked="checked">
        <label for="checkbox6">Checkbox selezionato</label>
      </div>
      <div class="form-check form-check-group">
        <input id="checkbox7" type="checkbox">
        <label for="checkbox7">Checkbox non selezionato</label>
      </div>
      <div class="form-check form-check-group">
        <input id="checkbox8" type="checkbox" disabled="disabled">
        <label for="checkbox8" class="disabled">Checkbox disabilitato non selezionato</label>
      </div>
    </div>
    <div class="col-2"></div>
    <div class="col-5">
      <div class="form-check form-check-group">
        <input id="checkbox9" type="checkbox" aria-describedby="checkbox9-help" checked="checked">
        <label for="checkbox9">Checkbox selezionato</label>
        <small id="checkbox9-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <input id="checkbox10" type="checkbox" aria-describedby="checkbox10-help">
        <label for="checkbox10">Checkbox non selezionato</label>
        <small id="checkbox10-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <input id="checkbox11" type="checkbox" aria-describedby="checkbox11-help" disabled="disabled">
        <label for="checkbox11" class="disabled">Checkbox disabilitato non selezionato</label>
        <small id="checkbox11-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
    </div>
  </div>
</form>
{% endexample %}

{% example html %}
<form>
  <div class="row">
    <div class="col-5">
      <div class="form-check form-check-group">
        <input name="gruppo4" type="radio" id="radio10" checked>
        <label for="radio10">Opzione 1</label>
      </div>
      <div class="form-check form-check-group">
        <input name="gruppo4" type="radio" id="radio11">
        <label for="radio11">Opzione 2</label>
      </div>
      <div class="form-check form-check-group">
        <input name="gruppo4" type="radio" id="radio12" disabled>
        <label for="radio12" class="disabled">Opzione 3</label>
      </div>
    </div>
    <div class="col-2"></div>
    <div class="col-5">
      <div class="form-check form-check-group">
        <input checked name="gruppo5" type="radio" id="radio13" aria-describedby="radio13-help">
        <label for="radio13">Opzione 1</label>
        <small id="radio13-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <input name="gruppo5" type="radio" id="radio14" aria-describedby="radio14-help">
        <label for="radio14">Opzione 2</label>
        <small id="radio14-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
      <div class="form-check form-check-group">
        <input name="gruppo5" type="radio" id="radio15" aria-describedby="radio15-help" disabled="disabled">
        <label for="radio15" class="disabled">Opzione 3</label>
        <small id="radio15-help" class="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</small>
      </div>
    </div>
  </div>
</form>
{% endexample %}

## Layout

Di base quasi tutti gli elementi del form vengono applicati `display: block` e `width: 100%`. Nella visualizzazione predefinita gli elementi verranno impilati verticalmente. È possibile utilizzare classi aggiuntive per variare questo tipo di layout.

### Form group

Per raggruppare correttamente gli elementi di un modulo form è bene utilizzare la classe `.form-group` per ogni singolo blocco, in questo modo l'elemento input, l'etichetta, il testo di aiuto opzionale e la messaggistica di validazione otterranno lo stile grafico e le funzionalità predisposte per loro. Puoi usarlo con `<fieldset>`, `<div>` o qualsiasi altro elemento.

{% example html %}
<form>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput">
    <label for="formGroupExampleInput">Esempio di etichetta</label>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput2">
    <label for="formGroupExampleInput2">Altro esempio di etichetta</label>
  </div>
</form>
{% endexample %}

### Form a griglia

Strutture più complesse possono essere costruite usando il sistema a griglia. Utilizzali per i layout dei moduli che richiedono più colonne, larghezze diverse e opzioni di allineamento aggiuntive.

{% example html %}
<form>
  <div class="row">
    <div class="form-group col">
      <input type="text" class="form-control" id="formNome">
      <label for="formNome">Nome</label>
    </div>
    <div class="form-group col">
      <input type="text" class="form-control" id="formCognome">
      <label for="formCognome">Cognome</label>
    </div>
  </div>
</form>
{% endexample %}

Ecco l'esempio di una struttura più complessa creata con il sistema a griglie.

{% example html %}
<form>
  <div class="row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" id="inputEmail4">
      <label for="inputEmail4">Email</label>
    </div>
    <div class="form-group col-md-6">
      <input type="password" class="form-control" id="inputPassword4">
      <label for="inputPassword4">Password</label>
    </div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputAddress" value="1234 Main St">
    <label for="inputAddress">Indirizzo</label>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputAddress2" value="Apartment, studio, or floor">
    <label for="inputAddress2">Indirizzo secondario</label>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputCity">
      <label for="inputCity">Città</label>
    </div>
    <div class="form-group col-md-4">
      <select id="inputState" class="custom-select">
        <option selected>Scegli...</option>
        <option>...</option>
      </select>
      <label for="inputState">Comune</label>
    </div>
    <div class="form-group col-md-2">
      <input type="text" class="form-control" id="inputCAP">
      <label for="inputCAP">CAP</label>
    </div>
  </div>
  <div class="form-row">
    <div class="form-check col-md-6">
      <input id="checkbox1a" type="checkbox">
      <label for="checkbox1a">Attivazione</label>
    </div>
    <div class="form-group col">
      <input type="text" class="form-control" id="campofac">
      <label for="campofac">Campo facoltativo</label>
    </div>
  </div>
</form>
{% endexample %}

#### Dimensione delle colonne

Puoi scegliere di dare una dimensione a una colonna, ad esempio dandogli una classe `.col-7`, mentre le restanti `.col` si divideranno il resto dello spazio.

{% example html %}
<form>
  <div class="form-row">
    <div class="form-group col-7">
      <input type="text" class="form-control" id="Citta">
      <label for="Citta">Città</label>
    </div>
    <div class="form-group col">
      <input type="text" class="form-control" id="Comune">
      <label for="Comune">Comune</label>
    </div>
    <div class="form-group col">
      <input type="text" class="form-control" id="CAP">
      <label for="CAP">CAP</label>
    </div>
  </div>
</form>
{% endexample html %}

#### Auto-dimensionamento

L'esempio seguente usa una delle utilità di flexbox per centrare verticalmente il contenuto e cambiando `.col` con `.col-auto` in modo che le colonne occupino solo lo spazio necessario. In altre parole, la colonna si dimensiona in base al contenuto.

{% example html %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Nome</label>
      <input type="text" class="form-control" id="inlineFormInput" placeholder="Mario Rossi">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check m-0">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
        <label class="form-check-label" for="autoSizingCheck">
          Ricordami
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Invia</button>
    </div>
  </div>
</form>
{% endexample %}

È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche.

{% example html %}
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Nome</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Mario Rossi">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="form-check m-0">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
          Ricordami
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Invia</button>
    </div>
  </div>
</form>
{% endexample %}

And of course [custom form controls](#custom-forms) are supported.

{% example html %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <select class="custom-select">
        <option value="" disabled selected>Seleziona una opzione</option>
        <option value="1">Opzione 1</option>
        <option value="2">Opzione 2</option>
        <option value="3">Opzione 3</option>
      </select>
      <label>Label di esempio</label>
    </div>
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
        <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

### Inline forms

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with [spacing]({{ site.baseurl }}/docs/utilities/spacing/) and [flexbox]({{ site.baseurl }}/docs/utilities/flex/) utilities.
- Controls and input groups receive `width: auto` to override the Bootstrap default `width: 100%`.
- Controls **only appear inline in viewports that are at least 576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with [spacing utilities]({{ site.baseurl }}/docs/utilities/spacing/) (as shown below). Lastly, be sure to always include a `<label>` with each form control, even if you need to hide it from non-screenreader visitors with `.sr-only`.

{% example html %}
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>

  <div class="form-check mb-2 mr-sm-2">
    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
    <label class="form-check-label" for="inlineFormCheck">
      Remember me
    </label>
  </div>

  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
{% endexample %}

Custom form controls and selects are also supported.

{% example html %}
<form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="customControlInline">
    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
  </div>

  <button type="submit" class="btn btn-primary my-1">Submit</button>
</form>
{% endexample %}

{% callout warning %}
##### Alternative alle etichette nascoste
Le tecnologie assistive come gli screenreader avranno problemi con i tuoi moduli se non includi un'etichetta per ogni input. Per questi moduli in linea, puoi nascondere le etichette usando la classe `.sr-only`. Esistono altri metodi alternativi per fornire un'etichetta per le tecnologie assistive, come l'attributo `aria-label`,` aria-labelledby` o `title`. Se nessuno di questi è presente, le tecnologie assistive possono ricorrere all'uso dell'attributo `placeholder`, se presente, ma è sconsigliato.
{% endcallout %}

## Testo di aiuto

Il testo di aiuto può essere creato usando `.form-text` (precedentemente noto come `.help-block` nella versione 3 di Bootstrap). Può essere esteso usando le classi di utilità come `.text-muted`.

{% callout warning %}
##### Associazione del testo di aiuto con gli elementi del mudulo form

Il testo di aiuto deve essere esplicitamente associato agli elementi del mudulo form a cui si riferisce utilizzando l'attributo `aria-describedby`. Ciò garantirà che le tecnologie assistive, come gli screenreader, leggano questo testo di aiuto quando l'utente avrà il focus sull'elemento.
{% endcallout %}

Il testo di aiuto sotto gli input può essere abbinato a `.form-text`. Questa classe include `display: block` e aggiunge un margine superiore per una facile spaziatura dagli input sopra.

{% example html %}
<div class="form-group">
  <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
  <label for="inputPassword5">Password</label>
  <small id="passwordHelpBlock" class="form-text text-muted">
    La tua password deve essere lunga 8-20 caratteri, contenere lettere e numeri e non deve contenere spazi, caratteri speciali o emoji.
  </small>
</div>
{% endexample %}

Il testo inline può usare qualsiasi tipico elemento HTML in linea (che sia un `<small>`, `<span>`, o qualcos'altro) con nient'altro che una classe di utilità.

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
    <label for="inputPassword6">Password</label>
    <small id="passwordHelpInline" class="text-muted">
      Deve essere lunga 8-20 caratteri.
    </small>
  </div>
</form>
{% endexample %}

## Form disabilitato

Aggiungi l'attributo booleano `disabled` su un input per impedire le interazioni dell'utente e renderlo più chiaro.

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

Aggiungi l'attributo `disabled` al `<fieldset>` per disabilitare tutti gli elementi del form contenuti.

{% example html %}
<form>
  <fieldset disabled>
    <div class="form-group">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
      <label for="disabledTextInput">Input </label>
    </div>
    <div class="form-group">
      <select id="exampleSelect" class="custom-select">
        <option selected>Scegli...</option>
        <option>...</option>
      </select>
      <label for="exampleSelect">Select disabilitata</label>
    </div>
    <div class="form-group">
      <select id="disabledSelect" class="form-control">
        <option>Disabled select</option>
      </select>
      <label for="disabledSelect">Select default disabilitata</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
      <label class="form-check-label" for="disabledFieldsetCheck">
        Check disabilitato
      </label>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </fieldset>
</form>
{% endexample %}

{% callout warning %}
##### Caveat con ancore

Per impostazione predefinita, i browser tratteranno tutti i controlli nativi del form (`<input>`, `<select>` e `<button>`) contenuti in un `<fieldset disabled>` come disabilitati, impedendo su di essi le interazioni tra tastiera e mouse. Tuttavia, se il tuo modulo include anche gli elementi `<a ... class="btn btn-*">`, a questi verranno assegnati uno stile di `pointer-events: none`. Come indicato nella sezione [stato disabilitato per i pulsanti]({{ site.baseurl }}/docs/components/buttons/#disabled-state) (e in particolare nella sottosezione per gli elementi di ancoraggio), questa proprietà CSS non è standardizzata e non è completamente supportato in Internet Explorer 10 che non impedirà agli utenti da tastiera di mettere in focus o attivare questi collegamenti. Per sicurezza, usa JavaScript personalizzato per disabilitare tali collegamenti.
{% endcallout %}

{% callout danger %}
#### Compatibilità Cross-browser

Mentre Bootstrap applicherà questi stili in tutti i browser, Internet Explorer 11 e successivi non supportano completamente l'attributo `disabled` nel `<fieldset>`. Usa un JavaScript personalizzato per disabilitare il fieldset in questi browser.
{% endcallout %}

## Validazione

Fornisci un feedback ai tuoi utenti con la validazione del form HTML5 [disponibile nei browser supportati](https://caniuse.com/#feat=form-validation). Scegli tra le risposte di convalida predefinite del browser o implementa messaggi personalizzati con le classi integrate inizializzate con JavaScript.

{% callout warning %}
Vi **consigliamo caldamente** gli stili di convalida personalizzati in quanto le impostazioni predefinite del browser non vengono segnalati agli screenreader.
{% endcallout %}

### Come funziona

Ecco come funziona la validazione delle form:

- La validzione viene applicata tramite due pseudo-classi CSS: `:invalid` e `:valid`. Si applicano agli elementi `<input>`, `<select>` e `<textarea>`.
- Agli stili `:invalid` e `:valid` si abbina a una classe `.was-validated` al loro contenitore padre, di solito applicata a `<form>`. Altrimenti, qualsiasi campo richiesto senza un valore appare come non valido sul caricamento della pagina. In questo modo, puoi scegliere quando attivarli (in genere dopo aver tentato l'invio del modulo).
- In alternativa esistono le classi `.is-invalid` e `.is-valid` che possono essere usate al posto delle pseudo-classi per una [validazione lato server](#server-side). Non richiedono la presenza della classe  `.was-validated` nel contenitore padre.
- A causa dei vincoli nel modo in cui i CSS funzionano, non possiamo (al momento) applicare gli stili a un `<label>` che precede un controllo del form nel DOM senza l'aiuto del codice JavaScript personalizzato.
- Tutti i browser moderni supportano le [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), una serie di metodi JavaScript per la convalida dei controlli del modulo.
- I messaggi di feedback possono utilizzare le [impostazioni predefinite del browser](#browser-defaults) (diversi da un browser all'altro e non stilizzati tramite CSS) o gli stili di feedback personalizzati con HTML e CSS aggiuntivi.
- Puoi fornire messaggi di validazioni personalizzati con `setCustomValidity` in JavaScript.

Tenendo presente tutto questo, prendi in considerazione i seguenti esempi personalizzati per convalidare i moduli.

### Stili personalizzati

Per i messaggi personalizzati di convalida del form, dovrai aggiungere l'attributo booleano `novalidate` al tuo `<form>`. Questo disabiliterà le descrizioni di feedback predefinite del browser, ma fornirà comunque l'accesso alle API di validazione JavaScript. Prova a cliccare sul pulsante `Invia` del modulo sottostante; JavaScript intercetterà l'evento e mostrerà i feedback all'utente. Vedrai così gli stili `:invalid` e `:valid` applicati ai controlli del modulo.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
      <label for="validationCustom01">Nome</label>
      <div class="valid-feedback">
        Validato!
      </div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
      <label for="validationCustom02">Cognome</label>
      <div class="valid-feedback">
        Validato!
      </div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Per favore scegli un username.
        </div>
      </div>
      <label for="validationCustomUsername">Username</label>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6 mb-3">
      <input type="text" class="form-control" id="validationCustom03" required>
      <label for="validationCustom03">Città</label>
      <div class="invalid-feedback">
        Per favore inserisci un nome di città valido.
      </div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationCustom04" required>
      <label for="validationCustom04">State</label>
      <div class="invalid-feedback">
        Per favore inserisci un nome di Stato valido.
      </div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationCustom05" required>
      <label for="validationCustom05">CAP</label>
      <div class="invalid-feedback">
        Per favore inserisci un CAP valido.
      </div>
    </div>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
    <label class="form-check-label" for="invalidCheck">
      Accetto i termini e le condizioni.
    </label>
    <div class="invalid-feedback">
      Devi accettare i termini e le condizioni prima di inviare il modulo.
    </div>
  </div>
  <button class="btn btn-primary mt-3" type="submit">Invia</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
{% endexample %}

### Predefinito dal Browser

Non sei interessato ai messaggi di feedback di convalida personalizzati o alla scrittura di JavaScript per modificare i comportamenti dei moduli? In tal caso è possibile utilizzare le impostazioni predefinite del browser. Prova ad inviare il modulo qui sotto. A seconda del browser e del sistema operativo, vedrai uno stile di feedback leggermente diverso.

Sebbene questi stili di feedback non possano essere abbinati a CSS, puoi comunque personalizzare il testo del feedback tramite JavaScript.

{% example html %}
<form>
  <div class="form-row">
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
      <label for="validationDefault01">First name</label>
    </div>
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
      <label for="validationDefault02">Last name</label>
    </div>
    <div class="form-group col-md-4 mb-3">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
      </div>
      <label for="validationDefaultUsername">Username</label>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6 mb-3">
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
      <label for="validationDefault03">City</label>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
      <label for="validationDefault04">State</label>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
      <label for="validationDefault05">Zip</label>
    </div>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
    <label class="form-check-label" for="invalidCheck2">
      Agree to terms and conditions
    </label>
  </div>
  <button class="btn btn-primary mt-3" type="submit">Invia</button>
</form>
{% endexample %}

### Lato Server

Si consiglia di utilizzare la convalida lato client, ma nel caso in cui si richieda il lato server, è possibile indicare campi modulo validi e non validi con `.is-invalid` e `.is-valid`. Si noti che `.invalid-feedback` è supportato anche con queste classi.

{% example html %}
<form>
  <div class="form-row">
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
      <label for="validationServer01">First name</label>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
      <label for="validationServer02">Last name</label>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
      <label for="validationServerUsername">Username</label>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6 mb-3">
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <label for="validationServer03">City</label>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <label for="validationServer04">State</label>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <label for="validationServer05">Zip</label>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-check">
    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
    <label class="form-check-label" for="invalidCheck3">
      Agree to terms and conditions
    </label>
    <div class="invalid-feedback">
      You must agree before submitting.
    </div>
  </div>
  <button class="btn btn-primary mt-3" type="submit">Invia</button>
</form>
{% endexample %}

### Elementi supportati

Our example forms show native textual `<input>`s above, but form validation styles are available for our custom form controls, too.

{% example html %}
<form class="was-validated">
  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
    <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
  </div>
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-group">
    <select class="custom-select" required>
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile" required>
    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>
</form>
{% endexample %}

### Tooltip

Se il layout del modulo lo consente, è possibile scambiare le classi `.{valid|invalid}-feedback` con `.{valid|invalid}-tooltip` per visualizzare i messaggi di validazione in un tooltip. Assicurati di avere un genitore con `position: relative` su di esso per il posizionamento tooltip. Nell'esempio seguente, le nostre classi di colonne lo hanno già, ma il tuo progetto potrebbe richiedere una configurazione alternativa.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <label for="validationTooltip01">First name</label>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <label for="validationTooltip02">Last name</label>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
      <label for="validationTooltipUsername">Username</label>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6 mb-3">
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
      <label for="validationTooltip03">City</label>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
      <label for="validationTooltip04">State</label>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <label for="validationTooltip05">Zip</label>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Invia</button>
</form>
{% endexample %}
