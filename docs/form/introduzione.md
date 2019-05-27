---
layout: docs
group: form
toc: true

title: Introduzione
description: Elementi e stili per la creazione di form accessibili e responsivi
redirect_from:
  - "/form/"
  - "/docs/form/"
---

All'interno di un form, nella visualizzazione predefinita gli elementi sono allineati verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout.

Bootstrap Italia applica automa tutti i form `display: block` e `width: 100%`.

## Organizzazione dei campi

Per raggruppare correttamente gli elementi di un modulo form è bene utilizzare la classe `.form-group` per ogni singolo blocco, in questo modo l'elemento input, l'etichetta, il testo di aiuto opzionale e la messaggistica di validazione otterranno lo stile grafico e le funzionalità predisposte per loro. Puoi usarlo con `<fieldset>`, `<div>` o qualsiasi altro elemento.

### Dimensionamento delle colonne

Strutture più complesse possono essere costruite usando il sistema a griglia, da utilizzare per layout che richiedono più colonne, larghezze diverse e opzioni di allineamento aggiuntive. La classe `.form-row` ne assicura una corretta spaziatura.

Puoi scegliere di dare una dimensione a una colonna, ad esempio dandogli una classe `.col-7`, mentre le restanti `.col` si divideranno il resto dello spazio.

{% capture example %}
<div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="formNome">
      <label for="formNome">Nome</label>
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="formCognome">
      <label for="formCognome">Cognome</label>
    </div>
  </div>
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
</div>
{% endcapture %}{% include example.html content=example %}

Ecco l'esempio di una struttura più complessa creata con il sistema a griglie.

{% capture example %}
<div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" id="inputEmail4" placeholder="inserisci il tuo indirizzo email">
      <label for="inputEmail4">Email</label>
    </div>
    <div class="form-group col-md-6">
      <input type="password" class="form-control input-password" id="exampleInputPassword" placeholder="inserisci la tua password">
      <span class="password-icon" aria-hidden="true">
        <svg class="password-icon-visible icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-password-visible"></use></svg>
        <svg class="password-icon-invisible icon icon-sm d-none"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-password-invisible"></use></svg>
      </span>
      <label for="exampleInputPassword">Password</label>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col">
      <input type="text" class="form-control" id="inputAddress" placeholder="Via Roma, 1">
      <label for="inputAddress">Indirizzo</label>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" id="inputCity">
      <label for="inputCity">Comune</label>
    </div>
    <div class="form-group col-md-2">
      <input type="text" class="form-control" id="inputCAP">
      <label for="inputCAP">CAP</label>
    </div>
    <div class="col-md-4">
      <div class="bootstrap-select-wrapper">
        <label>Provincia</label>
        <select title="Scegli un'opzione">
          <option value="Value 1">Opzione 1</option>
          <option value="Value 2">Opzione 2</option>
          <option value="Value 3">Opzione 3</option>
          <option value="Value 4">Opzione 4</option>
          <option value="Value 5">Opzione 5</option>
        </select>
      </div>
    </div>
  </div>
  <div class="form-row">
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
  <div class="form-row">
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
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

##### Alternative alle etichette nascoste

Le tecnologie assistive come gli screenreader avranno problemi con i tuoi moduli se non includi un'etichetta per ogni input. Per questi moduli in linea, puoi nascondere le etichette usando la classe `.sr-only`. Esistono altri metodi alternativi per fornire un'etichetta per le tecnologie assistive, come l'attributo `aria-label`,` aria-labelledby` o `title`. Se nessuno di questi è presente, le tecnologie assistive possono ricorrere all'uso dell'attributo `placeholder`, se presente, ma è sconsigliato.
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
    <legend>Esempio di form disabilitato</legend>
    <div class="form-group">
      <input type="text" id="disabledTextInput" class="form-control" placeholder="input disabilitato">
      <label for="disabledTextInput">Input </label>
    </div>
    <div class="form-group">
      <div class="bootstrap-select-wrapper">
        <label>Field Label</label>
        <select disabled title="Seleziona una opzione">
          <option value="Value 1">Opzione 1</option>
          <option value="Value 2">Opzione 2</option>
          <option value="Value 3">Opzione 3</option>
          <option value="Value 4">Opzione 4</option>
          <option value="Value 5">Opzione 5</option>
        </select>
      </div>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
      <label class="form-check-label" for="disabledFieldsetCheck">
        Check disabilitato
      </label>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </fieldset>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

#### Compatibilità Cross-browser

Mentre Bootstrap applicherà questi stili in tutti i browser, Internet Explorer 11 e successivi non supportano completamente l'attributo `disabled` nel `<fieldset>`. Usa un JavaScript personalizzato per disabilitare il fieldset in questi browser.
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Validazione

Fornisci un feedback ai tuoi utenti con la validazione del form HTML5 [disponibile nei browser supportati](https://caniuse.com/#feat=form-validation). Scegli tra le risposte di convalida predefinite del browser o implementa messaggi personalizzati con le classi integrate inizializzate con JavaScript.

### Come funziona

Ecco come funziona la validazione dei form:

- La validazione viene applicata tramite due pseudo-classi CSS: `:invalid` e `:valid`. Si applicano agli elementi `<input>`, `<select>` e `<textarea>`.
- In alternativa esistono le classi `.is-invalid` e `.is-valid` che possono essere usate al posto delle pseudo-classi per una validazione lato server. Non richiedono la presenza della classe  `.was-validated` nel contenitore padre.
- A causa dei vincoli nel modo in cui i CSS funzionano, non possiamo (al momento) applicare gli stili a un `<label>` che precede un controllo del form nel DOM senza l'aiuto del codice JavaScript personalizzato.
- Tutti i browser moderni supportano le [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), una serie di metodi JavaScript per la convalida dei controlli del modulo.
- I messaggi di feedback possono utilizzare le (diversi da un browser all'altro e non stilizzati tramite CSS) o gli stili di feedback personalizzati con HTML e CSS aggiuntivi.
- Puoi fornire messaggi di validazioni personalizzati con `setCustomValidity` in JavaScript.

Tenendo presente tutto questo, prendi in considerazione i seguenti esempi personalizzati per convalidare i moduli.

### Stili personalizzati

Per i messaggi personalizzati di convalida del form, dovrai aggiungere l'attributo booleano `novalidate` al tuo `<form>`. Questo disabiliterà le descrizioni di feedback predefinite del browser, ma fornirà comunque l'accesso alle API di validazione JavaScript. Prova a cliccare sul pulsante `Invia` del modulo sottostante; Javascript intercetterà l'evento e mostrerà i feedback all'utente. Vedrai così gli stili `:invalid` e `:valid` applicati ai controlli del modulo.

{% capture example %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationCustom01" value="Mario" required>
      <label for="validationCustom01">Nome</label>
      <div class="valid-feedback">Validato!</div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationCustom02" value="Rossi" required>
      <label for="validationCustom02">Cognome</label>
      <div class="valid-feedback">Validato!</div>
    </div>
    <div class="form-group col-md-4 mb-3">
      <input type="text" class="form-control" id="validationCustomUsername" required>
      <label for="validationCustomUsername">Username</label>
      <div class="invalid-feedback">Per favore scegli un username.</div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6 mb-3">
      <input type="text" class="form-control" id="validationCustom03" required>
      <label for="validationCustom03">Città</label>
      <div class="invalid-feedback">Per favore inserisci un nome di città valido.</div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationCustom04" required>
      <label for="validationCustom04">Provincia</label>
      <div class="invalid-feedback">Per favore inserisci un nome di provincia valida.</div>
    </div>
    <div class="form-group col-md-3 mb-3">
      <input type="text" class="form-control" id="validationCustom05" required>
      <label for="validationCustom05">CAP</label>
      <div class="invalid-feedback">Per favore inserisci un CAP valido.</div>
    </div>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
    <label class="form-check-label" for="invalidCheck">Accetto i termini e le condizioni.</label>
    <div class="invalid-feedback">Devi accettare i termini e le condizioni prima di inviare il modulo.</div>
  </div>
  <button class="btn btn-primary mt-3" type="submit">Invia</button>
</form>

<script>
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      }, false);
      form.classList.add('was-validated');
    });
  }, false);
})();
</script>
{% endcapture %}{% include example.html content=example %}

---

###### Continua la lettura >

I singoli campi di tipo _input_, _checkbox_, _radio_, _toggle_, ecc. sono trattati in pagine separate della documentazione, continua a leggere alla pagina dedicata ai [campi di input]({{ site.baseurl }}/docs/form/input/).
