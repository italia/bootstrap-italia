---
layout: docs
title: Form
description: Elementi e stili per la creazione di form accessibili e responsivi.
group: componenti
toc: true
---

## Layout dei Form

Di base quasi tutti gli elementi del form vengono applicati `display: block` e `width: 100%`. Nella visualizzazione predefinita gli elementi verranno impilati verticalmente. È possibile utilizzare classi aggiuntive per variare questo tipo di layout.

### Form group

Per raggruppare correttamente gli elementi di un modulo form è bene utilizzare la classe `.form-group` per ogni singolo blocco, in questo modo l'elemento input, l'etichetta, il testo di aiuto opzionale e la messaggistica di validazione otterranno lo stile grafico e le funzionalità predisposte per loro. Puoi usarlo con `<fieldset>`, `<div>` o qualsiasi altro elemento.

{% capture example %}
<div>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput">
    <label for="formGroupExampleInput">Esempio di etichetta</label>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="formGroupExampleInput2">
    <label for="formGroupExampleInput2">Altro esempio di etichetta</label>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Form a griglia

Strutture più complesse possono essere costruite usando il sistema a griglia. Utilizzali per i layout dei moduli che richiedono più colonne, larghezze diverse e opzioni di allineamento aggiuntive.

{% capture example %}
<div>
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
</div>
{% endcapture %}{% include example.html content=example %}

Ecco l'esempio di una struttura più complessa creata con il sistema a griglie.

{% capture example %}
<div>
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
</div>
{% endcapture %}{% include example.html content=example %}

#### Dimensione delle colonne

Puoi scegliere di dare una dimensione a una colonna, ad esempio dandogli una classe `.col-7`, mentre le restanti `.col` si divideranno il resto dello spazio.

{% capture example %}
<div>
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

#### Auto-dimensionamento

L'esempio seguente usa una delle utilità di flexbox per centrare verticalmente il contenuto e cambiando `.col` con `.col-auto` in modo che le colonne occupino solo lo spazio necessario. In altre parole, la colonna si dimensiona in base al contenuto. È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: `col-sm-3`).

{% capture example %}
<div>
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
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
##### Alternative alle etichette nascoste
Le tecnologie assistive come gli screenreader avranno problemi con i tuoi moduli se non includi un'etichetta per ogni input. Per questi moduli in linea, puoi nascondere le etichette usando la classe `.sr-only`. Esistono altri metodi alternativi per fornire un'etichetta per le tecnologie assistive, come l'attributo `aria-label`,` aria-labelledby` o `title`. Se nessuno di questi è presente, le tecnologie assistive possono ricorrere all'uso dell'attributo `placeholder`, se presente, ma è sconsigliato.
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Testo di aiuto

Il testo di aiuto può essere creato usando `.form-text` (precedentemente noto come `.help-block` nella versione 3 di Bootstrap). Può essere esteso usando le classi di utilità come `.text-muted`.

{% capture callout %}
**Associazione del testo di aiuto con gli elementi del modulo form**

Il testo di aiuto deve essere esplicitamente associato agli elementi del mudulo form a cui si riferisce utilizzando l'attributo `aria-labelledby`. Ciò garantirà che le tecnologie assistive, come gli screenreader, leggano questo testo di aiuto quando l'utente avrà il focus sull'elemento.
{% endcapture %}{% include callout.html content=callout type="warning" %}

Il testo di aiuto sotto gli input può essere abbinato a `.form-text`. Questa classe include `display: block` e aggiunge un margine superiore per una facile spaziatura dagli input sopra.

{% capture example %}
<div class="form-group">
  <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
  <label for="inputPassword5">Password</label>
  <small id="passwordHelpBlock" class="form-text text-muted">
    La tua password deve essere lunga 8-20 caratteri, contenere lettere e numeri e non deve contenere spazi, caratteri speciali o emoji.
  </small>
</div>
{% endcapture %}{% include example.html content=example %}

Il testo inline può usare qualsiasi tipico elemento HTML in linea (che sia un `<small>`, `<span>`, o qualcos'altro) con nient'altro che una classe di utilità.

{% capture example %}
<div class="form-inline">
  <div class="form-group">
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-labelledby="passwordHelpInline">
    <label for="inputPassword6">Password</label>
    <small id="passwordHelpInline" class="text-muted">
      Deve essere lunga 8-20 caratteri.
    </small>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Disabilitazione di campi

Aggiungi l'attributo booleano `disabled` su un input per impedire le interazioni dell'utente e renderlo più chiaro.

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

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
      <select id="exampleSelect" class="custom-select">
        <option selected>Scegli...</option>
        <option>...</option>
      </select>
      <label for="exampleSelect">Select disabilitata</label>
    </div>
    <div class="form-group">
      <select id="disabledSelect" class="form-control">
        <option>select disabilitata</option>
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
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
##### Caveat con ancore

Per impostazione predefinita, i browser tratteranno tutti i controlli nativi del form (`<input>`, `<select>` e `<button>`) contenuti in un `<fieldset disabled>` come disabilitati, impedendo su di essi le interazioni tra tastiera e mouse. Tuttavia, se il tuo modulo include anche gli elementi `<a ... class="btn btn-*">`, a questi verranno assegnati uno stile di `pointer-events: none`. Come indicato nella sezione [stato disabilitato per i pulsanti]({{ site.baseurl }}/docs/components/buttons/#disabled-state) (e in particolare nella sottosezione per gli elementi di ancoraggio), questa proprietà CSS non è standardizzata e non è completamente supportato in Internet Explorer 10 che non impedirà agli utenti da tastiera di mettere in focus o attivare questi collegamenti. Per sicurezza, usa JavaScript personalizzato per disabilitare tali collegamenti.
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture callout %}
#### Compatibilità Cross-browser

Mentre Bootstrap applicherà questi stili in tutti i browser, Internet Explorer 11 e successivi non supportano completamente l'attributo `disabled` nel `<fieldset>`. Usa un JavaScript personalizzato per disabilitare il fieldset in questi browser.
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Validazione

Fornisci un feedback ai tuoi utenti con la validazione del form HTML5 [disponibile nei browser supportati](https://caniuse.com/#feat=form-validation). Scegli tra le risposte di convalida predefinite del browser o implementa messaggi personalizzati con le classi integrate inizializzate con JavaScript.

{% capture callout %}
Vi **consigliamo caldamente** gli stili di convalida personalizzati in quanto le impostazioni predefinite del browser non vengono segnalati agli screenreader.
{% endcapture %}{% include callout.html content=callout type="warning" %}

### Come funziona

Ecco come funziona la validazione delle form:

- La validzione viene applicata tramite due pseudo-classi CSS: `:invalid` e `:valid`. Si applicano agli elementi `<input>`, `<select>` e `<textarea>`.
- Agli stili `:invalid` e `:valid` si abbina a una classe `.was-validated` al loro contenitore padre, di solito applicata a `<form>`. Altrimenti, qualsiasi campo richiesto senza un valore appare come non valido sul caricamento della pagina. In questo modo, puoi scegliere quando attivarli (in genere dopo aver tentato l'invio del modulo).
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
        <input type="text" class="form-control" id="validationCustomUsername" aria-labelledby="inputGroupPrepend" required>
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
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
{% endcapture %}{% include example.html content=example %}
