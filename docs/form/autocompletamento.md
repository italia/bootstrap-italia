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
<div class="select-wrapper">
  <label for="accessibleAutocomplete">Provincia</label>
  <select class="form-control" id="accessibleAutocomplete" title="Scegli una provincia" required>
    <option selected value="">Scegli una opzione</option>
    <option value='AG'>Agrigento</option>
    <option value='AL'>Alessandria</option>
    <option value='AN'>Ancona</option>
    <option value='AO'>Aosta</option>
    <option value='AR'>Arezzo</option>
    <option value='AP'>Ascoli Piceno</option>
    <option value='AT'>Asti</option>
    <option value='AV'>Avellino</option>
    <option value='BA'>Bari</option>
    <option value='BT'>Barletta-Andria-Trani</option>
    <option value='BL'>Belluno</option>
    <option value='BN'>Benevento</option>
    <option value='BG'>Bergamo</option>
    <option value='BI'>Biella</option>
    <option value='BO'>Bologna</option>
    <option value='BZ'>Bolzano</option>
    <option value='BS'>Brescia</option>
    <option value='BR'>Brindisi</option>
    <option value='CA'>Cagliari</option>
    <option value='CL'>Caltanissetta</option>
    <option value='CB'>Campobasso</option>
    <option value='CI'>Carbonia-Iglesias</option>
    <option value='CE'>Caserta</option>
    <option value='CT'>Catania</option>
    <option value='CZ'>Catanzaro</option>
    <option value='CH'>Chieti</option>
    <option value='CO'>Como</option>
    <option value='CS'>Cosenza</option>
    <option value='CR'>Cremona</option>
    <option value='KR'>Crotone</option>
    <option value='CN'>Cuneo</option>
    <option value='EN'>Enna</option>
    <option value='FM'>Fermo</option>
    <option value='FE'>Ferrara</option>
    <option value='FI'>Firenze</option>
    <option value='FG'>Foggia</option>
    <option value='FC'>Forlì-Cesena</option>
    <option value='FR'>Frosinone</option>
    <option value='GE'>Genova</option>
    <option value='GO'>Gorizia</option>
    <option value='GR'>Grosseto</option>
    <option value='IM'>Imperia</option>
    <option value='IS'>Isernia</option>
    <option value='SP'>La Spezia</option>
    <option value='AQ'>L\'Aquila</option>
    <option value='LT'>Latina</option>
    <option value='LE'>Lecce</option>
    <option value='LC'>Lecco</option>
    <option value='LI'>Livorno</option>
    <option value='LO'>Lodi</option>
    <option value='LU'>Lucca</option>
    <option value='MC'>Macerata</option>
    <option value='MN'>Mantova</option>
    <option value='MS'>Massa-Carrara</option>
    <option value='MT'>Matera</option>
    <option value='ME'>Messina</option>
    <option value='MI'>Milano</option>
    <option value='MO'>Modena</option>
    <option value='MB'>Monza e della Brianza</option>
    <option value='NA'>Napoli</option>
    <option value='NO'>Novara</option>
    <option value='NU'>Nuoro</option>
    <option value='OT'>Olbia-Tempio</option>
    <option value='OR'>Oristano</option>
    <option value='PD'>Padova</option>
    <option value='PA'>Palermo</option>
    <option value='PR'>Parma</option>
    <option value='PV'>Pavia</option>
    <option value='PG'>Perugia</option>
    <option value='PU'>Pesaro e Urbino</option>
    <option value='PE'>Pescara</option>
    <option value='PC'>Piacenza</option>
    <option value='PI'>Pisa</option>
    <option value='PT'>Pistoia</option>
    <option value='PN'>Pordenone</option>
    <option value='PZ'>Potenza</option>
    <option value='PO'>Prato</option>
    <option value='RG'>Ragusa</option>
    <option value='RA'>Ravenna</option>
    <option value='RC'>Reggio Calabria</option>
    <option value='RE'>Reggio Emilia</option>
    <option value='RI'>Rieti</option>
    <option value='RN'>Rimini</option>
    <option value='RM'>Roma</option>
    <option value='RO'>Rovigo</option>
    <option value='SA'>Salerno</option>
    <option value='VS'>Medio Campidano</option>
    <option value='SS'>Sassari</option>
    <option value='SV'>Savona</option>
    <option value='SI'>Siena</option>
    <option value='SR'>Siracusa</option>
    <option value='SO'>Sondrio</option>
    <option value='TA'>Taranto</option>
    <option value='TE'>Teramo</option>
    <option value='TR'>Terni</option>
    <option value='TO'>Torino</option>
    <option value='OG'>Ogliastra</option>
    <option value='TP'>Trapani</option>
    <option value='TN'>Trento</option>
    <option value='TV'>Treviso</option>
    <option value='TS'>Trieste</option>
    <option value='UD'>Udine</option>
    <option value='VA'>Varese</option>
    <option value='VE'>Venezia</option>
    <option value='VB'>Verbano-Cusio-Ossola</option>
    <option value='VC'>Vercelli</option>
    <option value='VR'>Verona</option>
    <option value='VV'>Vibo Valentia</option>
    <option value='VI'>Vicenza</option>
    <option value='VT'>Viterbo</option>
  </select>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('#accessibleAutocomplete');
    var selectAutocomplete = new bootstrap.SelectAutocomplete(selectElement, {
      showAllValues: true,
      defaultValue: '',
      autoselect: false,
      showNoOptionsFound: false,
      dropdownArrow: () => '',
    });
  })
</script>
{% endcapture %}{% include example.html content=example %}

### Validazione

Per la validazione del campo con autocompletamento, si consiglia di utilizzare il plugin Just Validate come da [guida]({{ site.baseurl }}/docs/form/introduzione/#validazione).

È possibile testare la validazione del campo con autocompletamento sulla [pagina di esempio validazione]({{ site.baseurl }}/docs/esempi/form/).
