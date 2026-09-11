{%- assign properties = include.properties -%}
{%- assign title = include.title -%}
{%- assign selector = include.selector -%}

{% if properties %}
{% assign dynamic_props = false %}

## Properties {{title}}

Il selettore da utilizzare per le sovrascrittura delle property è `{{selector}}`.
La descrizione delle custom properties è in inglese perché risiede nei files `.scss` dei componenti.

<h3 class="no_toc">Properties statiche</h3>

<div class="table-responsive" style="font-size: 1rem">
  <table class="table table-simple">
    <thead>
      <tr>
        <th>Variabile CSS</th>
        <th>Descrizione (Inglese)</th>
        <th>Valore predefinito</th>
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
<h3 class="no_toc">Properties dinamiche</h3>

Nella colonna `"Valore predefinito"` è possibile trovare, oltre al valore di base, un'indicazione delle eventuali varianti responsive/tema/stato della property stessa:
fare riferimento ai file elencati nella colonna `"File SCSS"` per il dettaglio dei valori e del contesto di applicazione.

<div class="table-responsive" style="font-size: 1rem">
  <table class="table table-simple">
    <thead>
      <tr>
        <th>Variabile CSS</th>
        <th>Descrizione (Inglese)</th>
        <th>Valore predefinito</th>
        <th>File SCSS</th>
      </tr>
    </thead>
    <tbody>
    {% for track in properties %}
    {% if track.other_values.size > 0 %}
      <tr>
        <td><code>{{ track.variable-name }}</code></td>
        <td>{{ track.description }}</td>
        <td><code>{{ track.value }}</code>&nbsp;<code>...</code></td>
        <td><code>{{ track.value }}</code>{% if track.other_values.size > 0 %}&nbsp;<span class="badge bg-primary text-white rounded-pill">+{{ track.other_values.size }}</span>{% endif %}</td>
        <td>{% for v in track.files %}<code>{{ v }}</code><br/>{% endfor %}</td>
      </tr>
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>
{% endif %}
{% endif %}
