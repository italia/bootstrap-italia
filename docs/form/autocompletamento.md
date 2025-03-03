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

Per una corretta implementazione si consiglia di consultare la [documentazione](https://alphagov.github.io/accessible-autocomplete/).

{% comment %}Example name: Base {% endcomment %}
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
      source: italianRegions
    });
  })
</script>
{% endcapture %}{% include example.html content=example %}

## Cambiare i valori dinamicamente

In questo esempio viene mostrato come popolare il componente con dati che 
cambiano a fronte di un altro input, ad esempio il valore di un altro elemento
di un form (come una select nell'esempio che segue). 
Per far fronte a questa esigenza è sufficiente passare al parametro `source`
del costruttore una funzione per filtrare i dati e popolare il componente.
Per maggiori informazioni si rimanda alla [documentazione ufficiale](https://alphagov.github.io/accessible-autocomplete/#source).

{% comment %}Example name: Cambiare i valori dinamicamente {% endcomment %}
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
        source: (query, populateResults) => {
          const results = form_data[categorySelect.value]
          const filteredResults = results.filter(result => result.indexOf(query) !== -1)
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
        source: (query, populateResults) => {
          const results = data[regioniSelect.value]
          const filteredResults = results.filter(result => result.indexOf(query) !== -1)
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
    validate.revalidateField('#accessibleAutocomplete')
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
    validate.revalidateField('#accessibleAutocomplete')
  }
```

Nell'esempio seguente si può provare questo comportamento (si noti che tra le 
configurazioni è stato passato anche `minLength: 3`, vista la grande mole di dati 
questa opzione impedirà la visualizzazione dei suggerimenti se vengono digitati 
meno di 3 caratteri)

{% capture example %}
<div>
  <form id="justValidate" action="" method="post">
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
        <button class="btn btn-primary mt-3" type="submit">Invia form</button>
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
          document.forms['justValidate'].submit()
        })
      })
  </script>
</div>
{% endcapture %}{% include example.html content=example %}
