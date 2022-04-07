---
layout: docs
group: form
toc: true

title: Introduzione
description: Elementi e stili per la creazione di form accessibili e responsivi
redirect_from:
  - '/form/'
  - '/docs/form/'
---

All'interno di un form, nella visualizzazione predefinita gli elementi sono allineati verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout.

Bootstrap Italia applica automaticamente a tutti i form `display: block` e `width: 100%`.

## Organizzazione dei campi

Per raggruppare correttamente gli elementi di un modulo form è bene utilizzare la classe `.form-group` per ogni singolo blocco, in questo modo l'elemento input, l'etichetta, il testo di aiuto opzionale e la messaggistica di validazione otterranno lo stile grafico e le funzionalità predisposte per loro. Si può usare con `<fieldset>`, `<div>` o qualsiasi altro elemento.

### Dimensionamento delle colonne

Strutture più complesse possono essere costruite usando il sistema a griglia, da utilizzare per layout che richiedono più colonne, larghezze diverse e opzioni di allineamento aggiuntive. La classe `.row` ne assicura una corretta spaziatura.

Si può scegliere di dare una dimensione a una colonna, ad esempio dandogli una classe `.col-7`, mentre le restanti `.col` si divideranno il resto dello spazio.

{% capture example %}

<div>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="formNome">Nome</label>
      <input type="text" class="form-control" id="formNome">
    </div>
    <div class="form-group col-md-6">
      <label for="formCognome">Cognome</label>
      <input type="text" class="form-control" id="formCognome">
    </div>
  </div>
  <div class="row">
    <div class="form-group col-7">
      <label for="Citta">Città</label>
      <input type="text" class="form-control" id="Citta">
    </div>
    <div class="form-group col">
      <label for="Comune">Comune</label>
      <input type="text" class="form-control" id="Comune">
    </div>
    <div class="form-group col">
      <label for="CAP">CAP</label>
      <input type="text" class="form-control" id="CAP">
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Ecco l'esempio di una struttura più complessa creata con il sistema a griglie.

{% capture example %}

<div>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="inserisci il tuo indirizzo email">
    </div>
    <div class="form-group col-md-6">
      <label for="exampleInputPassword">Password</label>
      <input type="password" data-bs-input class="form-control input-password" id="exampleInputPassword" placeholder="inserisci la tua password">
      <span class="password-icon" aria-hidden="true">
        <svg class="password-icon-visible icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-visible"></use></svg>
        <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
      </span>
    </div>
  </div>
  <div class="row">
    <div class="form-group col">
      <label for="inputAddress">Indirizzo</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Via Roma, 1">
    </div>
  </div>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="inputCity">Comune</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-2">
      <label for="inputCAP">CAP</label>
      <input type="text" class="form-control" id="inputCAP">
    </div>
    <div class="col-md-4">
      <div class="select-wrapper">
        <label for="selectID">Provincia</label>
        <select id="selectID" title="Scegli un'opzione">
          <option value="Value 1">Opzione 1</option>
          <option value="Value 2">Opzione 2</option>
          <option value="Value 3">Opzione 3</option>
          <option value="Value 4">Opzione 4</option>
          <option value="Value 5">Opzione 5</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="form-group col-md-6">
      <div class="toggles">
        <label for="toggleEsempio1a">
          Label dell'interruttore 1
          <input type="checkbox" id="toggleEsempio1a">
          <span class="lever"></span>
        </label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="form-group col text-center">
      <button type="button" class="btn btn-outline-primary">Annulla</button>
      <button type="submit" class="btn btn-primary">Conferma</button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Auto-dimensionamento

L'esempio seguente usa una delle utilità di flexbox per centrare verticalmente il contenuto e cambiando `.col` con `.col-auto` in modo che le colonne occupino solo lo spazio necessario. In altre parole, la colonna si dimensiona in base al contenuto. È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: `col-sm-3`).

{% capture example %}

<div class="row align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="inlineFormInput">Nome</label>
    <input type="text" class="form-control" id="inlineFormInput" placeholder="Mario Rossi">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="inlineFormInputGroup">Username</label>
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
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

##### Alternative alle etichette nascoste

Le tecnologie assistive come gli screenreader avranno problemi con i tuoi moduli se non includi un'etichetta per ogni input. Per questi moduli in linea, si può nascondere le etichette usando la classe `.visually-hidden`. Esistono altri metodi alternativi per fornire un'etichetta per le tecnologie assistive, come l'attributo `aria-label`,` aria-labelledby` o `title`. Se nessuno di questi è presente, le tecnologie assistive possono ricorrere all'uso dell'attributo `placeholder`, se presente, ma è sconsigliato.
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Disabilitazione di campi

Aggiungi l'attributo booleano `disabled` su un input per impedire le interazioni dell'utente e renderlo più chiaro.

{% capture example %}
<input class="form-control" id="disabledInput" type="text" placeholder="Esempio di input disabilitato" aria-label="Label" disabled>
{% endcapture %}{% include example.html content=example %}

### Disabilitazione di un intero form

Aggiungi l'attributo `disabled` al `<fieldset>` per disabilitare tutti gli elementi del form contenuti.

{% capture example %}

<div>
  <fieldset disabled aria-label="Form disabilitato">
    <legend class="mb-4">Esempio di form disabilitato</legend>
      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="disabledFieldsetInput">Input </label>
            <input type="text" id="disabledFieldsetInput" class="form-control" placeholder="Input disabilitato">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <div class="select-wrapper">
              <label for="disabledFieldsetSelect">Select</label>
              <select id="disabledFieldsetSelect" title="Select disabilitata">
                <option value="Value 1">Opzione 1</option>
                <option value="Value 2">Opzione 2</option>
                <option value="Value 3">Opzione 3</option>
                <option value="Value 4">Opzione 4</option>
                <option value="Value 5">Opzione 5</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12 col-md-6">
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck1">
            <label class="form-check-label" for="disabledFieldsetCheck1">
              Check disabilitato 1
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck2">
            <label class="form-check-label" for="disabledFieldsetCheck2">
              Check disabilitato 2
            </label>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-check">
            <input name="gruppo1" type="radio" id="disabledFieldsetRadio1" checked>
            <label for="disabledFieldsetRadio1">
              Radio disabilitato 1
            </label>
          </div>
          <div class="form-check">
            <input name="gruppo1" type="radio" id="disabledFieldsetRadio2">
            <label for="disabledFieldsetRadio2">
              Radio disabilitato 2
            </label>
          </div>
        </div>
      </div>
    <button class="btn btn-primary mt-3">Submit</button>
  </fieldset>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

#### Compatibilità Cross-browser

Mentre Bootstrap applicherà questi stili in tutti i browser, Internet Explorer 11 e successivi non supportano completamente l'attributo `disabled` nel `<fieldset>`. Si utilizzi codice JavaScript personalizzato per disabilitare il fieldset in questi browser.
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Validazione

Per la validazione dei forms è stato utilizzato il plugin [Just Validate](https://just-validate.dev/)

### Come funziona

Per il funzionamento e le opzioni disponibili, si consiglia di consultare la [documentazione](https://just-validate.dev/).

### Stili personalizzati

I campi che necessitano di validazione acquisiranno all'invio del form le classi css definite nello script che attiva il plugin. Nel nostro caso le classi saranno `is-invalid` e `just-validate-success-field`. I messaggi di errore avranno classe `just-validate-error-label`.

Di seguito un esempio di form validato con Just Validate.

{% capture example %}

<form class="needs-validation" id="justValidateForm">
  <div class="row mt-4">
    <div class="form-group col-md-3 mb-4">
      <label for="validationCustom01">Nome</label>
      <input type="text" class="form-control" id="validationCustom01" value="Mario" required>
    </div>
    <div class="form-group col-md-3 mb-4">
      <label for="validationCustom02">Cognome</label>
      <input type="text" class="form-control" id="validationCustom02" value="Rossi" required>
    </div>
    <div class="form-group col-md-3 mb-4">
      <label for="validationCustomUsername">Username</label>
      <input type="text" class="form-control" id="validationCustomUsername" required>
    </div>
    <div class="form-group col-md-3 mb-4">
      <label for="validationAge">Età (minimo 18 anni)</label>
      <input type="number" data-bs-input class="form-control" id="validationAge" value="18" min="18" step="1" required>
    </div>
  </div>
  <div class="row">
    <div class="form-group col-md-6 mb-4">
      <label for="validationCustom03">Città</label>
      <input type="text" class="form-control" id="validationCustom03" required>
    </div>
    <div class="form-group col-md-3 mb-4">
      <label for="validationCustom04">Provincia</label>
      <input type="text" class="form-control" id="validationCustom04" required>
    </div>
    <div class="form-group col-md-3 mb-4">
      <label for="validationCustom05">CAP (5 cifre)</label>
      <input type="text" class="form-control" id="validationCustom05" required>
    </div>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
    <label class="form-check-label" for="invalidCheck">Accetto i termini e le condizioni.</label>
  </div>
  <button class="btn btn-primary mt-3" type="submit">Invia</button>
</form>
<div class="row mt-4">
  <div class="col-12">
    <div aria-live="polite" id="errorMsgContainer"></div>
  </div>
</div>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const errorMessage = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi avviso">';
    const errorWrapper = document.querySelector('#errorMsgContainer');
    const validate = new bootstrap.FormValidate('#justValidateForm', {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'form-feedback',
      errorLabelStyle: '',
      focusInvalidField: false,
    })
    validate
      .addField('#validationCustom01', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
      ])
      .addField('#validationCustom02', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
      ])
      .addField('#validationCustom03', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
      ])
      .addField('#validationCustom04', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
      ])
      .addField('#validationCustomUsername', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
      ])
      .addField('#validationAge', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
        {
          rule: 'minNumber',
          value: 18,
          errorMessage: 'Deve essere maggiore di 17'
        },
      ])
      .addField('#validationCustom05', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Inserire 5 cifre'
        },
        {
          rule: 'maxLength',
          value: 5,
          errorMessage: 'Inserire 5 cifre'
        },
        {
          rule: 'number',
          errorMessage: 'Inserire un numero'
        },
      ])
      .addField('#invalidCheck', [
        {
          rule: 'required',
          errorMessage: 'Questo campo è richiesto'
        },
      ])
      .onFail((fields) => {
        $('errorMsgContainer').alert();
        errorWrapper.innerHTML = ''
        errorWrapper.innerHTML = errorMessage
      })
  })
</script>

{% endcapture %}{% include example.html content=example %}

---

###### Continua la lettura >

I singoli campi di tipo _input_, _checkbox_, _radio_, _toggle_, ecc. sono trattati in pagine separate della documentazione, continua a leggere alla pagina dedicata ai [campi di input]({{ site.baseurl }}/docs/form/input/).
