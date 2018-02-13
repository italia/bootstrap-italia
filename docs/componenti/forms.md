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

{% example html %}
<form>
  <div class="form-group">
    <select class="form-control" id="exampleFormControlSelects">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <label for="exampleFormControlSelects">Esempio di un campo select</label>
  </div>
</form>
{% endexample %}

### Textarea

{% example html %}
<form>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
{% endexample %}

## Personalizzazioni

### Dimensione

Gestisci la dimensione dell'elemento usando le classi `.form-control-lg` e `.form-control-sm` che modificheranno la grandezza del carattere e la spaziatura interna.

{% example html %}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
{% endexample %}

{% example html %}
<select class="form-control form-control-lg">
  <option>Large select</option>
</select>
<select class="form-control">
  <option>Default select</option>
</select>
<select class="form-control form-control-sm">
  <option>Small select</option>
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
      <select id="inputState" class="form-control">
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
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Mario Rossi">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
        <label class="form-check-label" for="autoSizingCheck">
          Ricordami
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Invia</button>
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
      <div class="form-check">
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
      <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
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

## Disabled forms

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within.

{% example html %}
<form>
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
      <label class="form-check-label" for="disabledFieldsetCheck">
        Can't check this
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endexample %}

{% callout warning %}
##### Caveat with anchors

By default, browsers will treat all native form controls (`<input>`, `<select>` and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes `<a ... class="btn btn-*">` elements, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons]({{ site.baseurl }}/docs/components/buttons/#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in Internet Explorer 10, and won't prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
{% endcallout %}

{% callout danger %}
#### Cross-browser compatibility

While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{% endcallout %}

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

{% callout warning %}
We **highly recommend** custom validation styles as native browser defaults are not announced to screen readers.
{% endcallout %}

### How it works

Here's how form validation works with Bootstrap:

- HTML form validation is applied via CSS's two pseudo-classes, `:invalid` and `:valid`. It applies to `<input>`, `<select>`, and `<textarea>` elements.
- Bootstrap scopes the `:invalid` and `:valid` styles to parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
- As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server side validation](#server-side). They do not require a `.was-validated` parent class.
- Due to constraints in how CSS works, we cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript.
- All modern browsers support the [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
- Feedback messages may utilize the [browser defaults](#browser-defaults) (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
- You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults.

### Custom styles

For custom Bootstrap form validation messages, you'll need to add the `novalidate` boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you.

When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
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

### Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

{% example html %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

### Server side

We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

{% example html %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

### Supported elements

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

### Tooltips

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

## Custom forms

For even more customization and cross browser consistency, use our completely custom form elements to replace the browser defaults. They're built on top of semantic and accessible markup, so they're solid replacements for any default form control.

### Checkboxes and radios

Each checkbox and radio is wrapped in a `<div>` with a sibling `<span>` to create our custom control and a `<label>` for the accompanying text. Structurally, this is the same approach as our default `.form-check`.

We use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS's `content` doesn't work on that element.

In the checked states, we use **base64 embedded SVG icons** from [Open Iconic](https://useiconic.com/open). This provides us the best control for styling and positioning across browsers and devices.

#### Checkboxes

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>
{% endexample %}

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

<div class="bd-example bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Check this custom checkbox</label>
  </div>
</div>

If you're using jQuery, something like this should suffice:

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
{% endhighlight %}

#### Radios

{% example html %}
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
</div>
{% endexample %}

#### Inline

{% example html %}
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
</div>
{% endexample %}

#### Disabled

Custom checkboxes and radios can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
  <label class="custom-control-label" for="customCheckDisabled">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" id="radio3" name="radioDisabled" id="customRadioDisabled" class="custom-control-input" disabled>
  <label class="custom-control-label" for="customRadioDisabled">Toggle this custom radio</label>
</div>
{% endexample %}

### Select menu

Custom `<select>` menus need only a custom class, `.custom-select` to trigger the custom styles.

{% example html %}
<select class="custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endexample %}

You may also choose from small and large custom selects to match our similarly sized text inputs.

{% example html %}
<select class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="custom-select custom-select-sm">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endexample %}

The `multiple` attribute is also supported:

{% example html %}
<select class="custom-select" multiple>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endexample %}

As is the `size` attribute:

{% example html %}
<select class="custom-select" size="3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endexample %}
