{%- assign properties = include.properties -%}
{%- assign title = include.title -%}
{%- assign selector = include.selector -%}

{% if properties %}
{% assign dynamic_props = false %}

## Properties {{title}}

Il selettore da utilizzare per le sovrascrittura delle property è `{{selector}}`.
La descrizione delle custom properties è in inglese perché risiede nei files `.scss` dei componenti.

### Properties statiche

<div class="table-responsive" style="font-size: 1rem">
  <table class="table table-simple">
    <thead>
      <tr>
        <th>Variabile CSS</th>
        <th>Descrizione (Inglese)</th>
        <th>Predefinito</th>
      </tr>
    </thead>
    <tbody>
    {% for track in properties %}
    {% if track.other_values.size == 0 %}
      <tr>
        <td><code>{{ track.variable-name }}</code></td>
        <td>{{ track.description }}</td>
        <td><code>{{ track.value }}</code></td>
      </tr>
    {% else %}
    {% assign dynamic_props = true %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>

{% if dynamic_props == true %}
### Properties dinamiche

Nella colonna `"Valori predefiniti"` è possibile trovare varianti responsive/tema/stato della property stessa,
si prega di far riferimento al codice per personalizzare il comportamento.


<div class="table-responsive" style="font-size: 1rem">
  <table class="table table-simple">
    <thead>
      <tr>
        <th>Variabile CSS</th>
        <th>Descrizione (Inglese)</th>
        <th>Valori predefiniti</th>
      </tr>
    </thead>
    <tbody>
    {% for track in properties %}
    {% if track.other_values.size > 0 %}
      <tr>
        <td><code>{{ track.variable-name }}</code></td>
        <td>{{ track.description }}</td>
        <td><code>{{ track.value }}</code>&nbsp;{% for v in track.other_values %}<code>{{ v }}</code>&nbsp;{% endfor %}</td>
      </tr>
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>
{% endif %}
{% endif %}
