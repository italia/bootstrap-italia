---
layout: docs
group: form
toc: true

title: Autocompletamento
description: Elementi e stili per la creazione di input con autocompletamento.
---

## Esempio di autocompletamento

Il completamento automatico è un componente che aiuta gli utenti a scegliere le risposte da un elenco fornito.
Per la creazione del componente, è stato utilizzato il plugin [Accessible autocomplete](https://github.com/alphagov/accessible-autocomplete).

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="accessibleAutocomplete">Regione</label>
  <div id="accessibleAutocompleteWrapper" class="autocomplete-wrapper"></div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const italianRegions = {{ site.data.autocomplete.regioniplain | jsonify }};
    const selectElement = document.querySelector('#accessibleAutocompleteWrapper');
    const selectAutocomplete = new bootstrap.SelectAutocomplete(selectElement, {
      id: 'accessibleAutocomplete',
      name: 'regioni',
      source: italianRegions
    });
  })
</script>
{% endcapture %}{% include example.html content=example %}

## Cambiare i valori dinamicamente

In questo esempio viene mostrato come popolare il componente con dati che 
cambiano a fronte di un altro input, ad esempio il valore di un altro elemento
di un form (come una select nell'esempio che segue). 
Per far fronte a questa esigenza è sufficiente passare come opzione `source` 
una funzione per filtrare i dati e popolare il componente
([Tutte le opzioni disponibili del componente](#attivazione-tramite-codice)).

{% comment %}Example name: Cambiare i valori dinamicamente{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12">
    <div class="form-group">
      <div class="select-wrapper">
        <label for="category">Categoria alimento</label>
        <select id="category" name="category">
          <option value="frutta" selected>Frutta</option>
          <option value="verdura">Verdura</option>
        </select>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="form-group">
      <label for="productAutocomplete">Alimento</label>
      <div id="productAutocompleteWrapper" class="autocomplete-wrapper"></div>
    </div>
  </div>
  <script>
    const form_data = {
      'frutta' : [
        'Mela',
        'Pera',
        'Melone',
        'Banana',
      ],
      'verdura' : [
        'Carota',
        'Zucchina',
        'Melanzana',
        'Carciofo',
      ],
    }
    document.addEventListener('DOMContentLoaded', function () {
      const categorySelect = document.getElementById("category");
      const selectWrapperElement = document.getElementById("productAutocompleteWrapper");
      const selectAutocomplete = new bootstrap.SelectAutocomplete(selectWrapperElement, {
        id: 'productAutocomplete',
        name: 'prodotto',
        source: (query, populateResults) => {
          const results = form_data[categorySelect.value]
          const filteredResults = results.filter(
            result => result.toLowerCase() .indexOf(query.toLowerCase()) !== -1
          )
          populateResults(filteredResults)
        }
      });
      // Facoltativo: se si vuole cancellare l'elemento al cambio del filtro
      categorySelect.addEventListener('change', (event) => {
        document.getElementById("productAutocomplete").value = '';
      });
    })
  </script>
</div>
{% endcapture %}{% include example.html content=example %}

### Esempio Regioni e Comuni

{% comment %}Example name: Regioni e Comuni{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12">
    <div class="form-group">
      <div class="select-wrapper">
        <label for="regione">Regione</label>
        <select id="regione" name="regione">
          {% for region in site.data.autocomplete.regioniplain %}
          <option value="{{region}}">{{region}}</option>
          {% endfor %}
        </select>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="form-group">
      <label for="comuniAutocomplete">Comune</label>
      <div id="comuniAutocompleteWrapper" class="autocomplete-wrapper"></div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', async function () {
      const italianRegions = {{ site.data.autocomplete.regioniplain | jsonify }};
      const data = {}
      italianRegions.forEach(region => { data[region] = [] })
      const comuniJson = await (await fetch('{{ site.baseurl }}/docs/esempi/form/comuni.json')).json();
      comuniJson.forEach(comune => data[comune.regione].push(comune.comune))
      const regioniSelect = document.getElementById("regione");
      const selectWrapperElement = document.getElementById("comuniAutocompleteWrapper");
      const selectAutocomplete = new bootstrap.SelectAutocomplete(selectWrapperElement, {
        id: 'comuniAutocomplete',
        name: 'comuni',
        source: (query, populateResults) => {
          const results = data[regioniSelect.value]
          const filteredResults = results.filter(
            result => result.toLowerCase() .indexOf(query.toLowerCase()) !== -1
          )          
          populateResults(filteredResults)
        }
      });
      regioniSelect.addEventListener('change', (event) => {
        document.getElementById("comuniAutocomplete").value = '';
      });
    })
  </script>
</div>
{% endcapture %}{% include example.html content=example %}

## Validazione

{% capture callout %}
Per la validazione del campo con autocompletamento, si consiglia di utilizzare 
il plugin Just Validate come da [guida]({{ site.baseurl }}/docs/form/introduzione/#validazione). 
È possibile testare la validazione del campo con autocompletamento sulla 
[pagina di esempio validazione]({{ site.baseurl }}/docs/esempi/form/).
{% endcapture %}{% include callout.html content=callout type="warning" %}


Quando l'utente seleziona un valore dalla tendinda di Autocomplete occorre
richiamare nuovamente la funzione di validazione. Questa chiamata può essere
effettuata all'interno del metodo `onConfirm` che viene passato in configurazione 
e verrà chiamata ogni volta che l'utente seleziona un opzione.

Ad esempio con JustValidate occorrerà istanziare il componente in questo modo

```js
const selectAutocomplete = new SelectAutocomplete(selectAutocompleteWrapper, {
  source: myData,
  id: 'idAutocomplete',
  onConfirm: () => {
    validate.revalidateField('#idAutocomplete')
  }
});
```

Il campo verrà validato così anche nel caso in cui l'utente seleziona un'opzione.
Nel caso in cui è stato impostato che JustValidate validi il form solo dopo la
submit occorre controllare il suo stato

```js
  onConfirm: () => {
    if (!validate.isSubmitted && !validate.validateBeforeSubmitting)
      return
    validate.revalidateField('#idAutocomplete')
  }
```

Nell'esempio seguente si può provare questo comportamento (si noti che tra le 
configurazioni è stato passato anche `minLength: 3`, vista la grande mole di dati 
questa opzione impedirà la visualizzazione dei suggerimenti se vengono digitati 
meno di 3 caratteri)

{% comment %}Example name: Validazione{% endcomment %}
{% capture example %}
<div>
  <form id="justValidate">
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="comuneJVAutocomplete">Comune di residenza</label>
          <div id="comuneJVAutocompleteWrapper" class="autocomplete-wrapper"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary mt-3" type="submit" id="submitform">Invia form</button>
      </div>
    </div>
  </form>
  <script>
    document.addEventListener('DOMContentLoaded', async function () {
      const validate = new bootstrap.FormValidate('#justValidate', {
        errorFieldCssClass: 'is-invalid',
        errorLabelCssClass: 'form-feedback',
        errorLabelStyle: '',
        focusInvalidField: false,
      })
      const comuniJson = await (await fetch('{{ site.baseurl }}/docs/esempi/form/comuni.json')).json();
      const comuni = comuniJson.map(comune => comune.comune)
      const selectAutocompleteWrapper = document.querySelector('#comuneJVAutocompleteWrapper');
      const selectAutocomplete = new bootstrap.SelectAutocomplete(selectAutocompleteWrapper, {
        source: comuni,
        id: 'comuneJVAutocomplete',
        name: 'comuni',
        minLength: 3,
        onConfirm: () => {
          if (!validate.isSubmitted && !validate.validateBeforeSubmitting)
            return
          validate.revalidateField('#comuneJVAutocomplete')
        }
      });
      validate
        .addField('#comuneJVAutocomplete', [
          {
            rule: 'required',
            errorMessage: 'Questo campo è richiesto',
          },
          {
            validator: (value) => {
              return comuni.includes(value);
            },
            errorMessage: 'Scegli una città valida',
          },
        ])
        .onSuccess((event) => {
          // Inserire qua l'azione nel caso di input valido, ad es.
          // document.forms['justValidate'].submit()
        })
      })
  </script>
</div>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

È possibile abilitare l'autocomplete manualmente utilizzando l'oggetto `SelectAutocomplete`.

```js
import { SelectAutocomplete } from 'bootstrap-italia';

const autocompleteWrapperElement = document.querySelector('#wrapper-autocomplete');
const autocomplete = new SelectAutocomplete(autocompleteWrapperElement, options);
```

#### Opzioni

```js
import { SelectAutocomplete } from 'bootstrap-italia';

const selectAutocompleteWrapper = document.querySelector('#accessibleAutocompleteWrapper');
const selectAutocomplete = new SelectAutocomplete(selectAutocompleteWrapper, {
  source: ['Option 1', 'Option 2', 'Option 3'],
  id: 'accessibleAutocomplete',
  minLength: 3,
  onConfirm: (selectedElement) => {
    console.log(selectedElement);
  }
});
```

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Predefinito</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>source</td>
        <td>Array | Function</td>
        <td>-</td>
        <td>Sorgente di dati dell'autocomplete. Se "source è una funzione, gli argomenti sono: (query: string, populateResults: Funzione): "query" è ciò che viene digitato nel campo di input, che richiamerà la funzione "populateResults" in modo sincrono con l'array di risultati da visualizzare nel menu (esempi sopra).</td>
      </tr>
      <tr>
        <td>id</td>
        <td>string</td>
        <td>-</td>
        <td>Id dell'elemento input che verrà generato dall' Autocomplete.</td>
      </tr>
      <tr>
        <td>name</td>
        <td>string</td>
        <td>input-autocomplete</td>
        <td>Nome del campo di input di completamento automatico, da utilizzare con un form padre.</td>
      </tr>
      <tr>
        <td>minLength</td>
        <td>number</td>
        <td>0</td>
        <td>Questa opzione impedisce la visualizzazione dei suggerimenti se vengono digitati meno di N caratteri.</td>
      </tr>
      <tr>
        <td>defaultValue</td>
        <td>string</td>
        <td>-</td>
        <td>Valore di default inserito nell'input.</td>
      </tr>
      <tr>
        <td>required</td>
        <td>boolean</td>
        <td>false</td>
        <td>Il campo di input verrà renderizzato con un attributo obbligatorio.</td>
      </tr>
      <tr>
        <td>onConfirm</td>
        <td>function</td>
        <td>{}</td>
        <td>Questa funzione viene chiamata quando l'utente conferma un'opzione, con l'opzione che ha confermato come argomento (si vedano gli esempi precedenti).</td>
      </tr>
    </tbody>
  </table>
</div>

#### Metodi

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Metodo</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      {% include standard-methods.html class="SelectAutocomplete" %}
    </tbody>
  </table>
</div>

## Internazionalizzazione (i18n)

Il componente è internazionalizzabile tramite alcuni parametri della configurazione.
La configurazione per Bootstrap Italia è stata settata in italiano.
Per maggiori dettagli sulle stringhe che possono essere passate al componente
fare riferimento alla [guida ufficiale](https://github.com/alphagov/accessible-autocomplete?tab=readme-ov-file#internationalization).

## Breaking change

{% capture callout %}
Nuova modalità di utilizzo del componente Autocomplete via codice.
{% endcapture %}{% include callout-breaking.html content=callout version="2.14.0" type="danger" %}
