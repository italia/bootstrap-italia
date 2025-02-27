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

Per ottenere il valore della option che siamo andati a selezionare occorre agire su `_element` dell'oggetto `SelectAutocomplete`

```js
const e = selectAutocomplete._element;
const value = e.options[e.selectedIndex].value;
```

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
      <select class="form-control" id="productAutocomplete" title="Scegli un prodotto">
      </select>
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
      const selectElement = document.getElementById("productAutocomplete");
      const selectAutocomplete = new bootstrap.SelectAutocomplete(selectElement, {
        required: true,
        name: 'productAutocomplete',
        confirmOnBlur: false,
        showAllValues: true,
        defaultValue: '',
        autoselect: false,
        showNoOptionsFound: false,
        dropdownArrow: () => '',
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

### Validazione

Per la validazione del campo con autocompletamento, si consiglia di utilizzare il plugin Just Validate come da [guida]({{ site.baseurl }}/docs/form/introduzione/#validazione).

È possibile testare la validazione del campo con autocompletamento sulla [pagina di esempio validazione]({{ site.baseurl }}/docs/esempi/form/).
