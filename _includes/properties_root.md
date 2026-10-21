{%- assign properties = include.properties -%}
{%- assign title = include.title -%}
{%- assign selector = include.selector -%}

{% if properties %}

La descrizione delle custom properties è in inglese perché risiede nei files `.scss` dei componenti.

<!-- Tipografia statiche -->

<h3 class="no_toc">Properties Tipografia</h3>

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
    {% if track.variable-name contains "font" or track.variable-name contains "leading" %}
    {% if track.other_values.size == 0 %}
      <tr>
        <td style="min-width: 320px; width: 320px;"><code>{{ track.variable-name }}</code></td>
        <td style="min-width: 320px;"><small>{{ track.description }}</small></td>
        <td style="min-width: 320px"><code>{{ track.value }}</code></td>
      </tr>
    {% endif %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>

<!-- Tipografia dinamiche -->

<h3 class="no_toc">Properties Tipografia dinamiche</h3>

Nella colonna `"Valore predefinito"` è possibile trovare, oltre al valore di base, un'indicazione delle eventuali varianti responsive/tema/stato della property stessa:
fare riferimento ai file elencati nella colonna `"File SCSS"` per il dettaglio dei valori e del contesto di applicazione.

<div class="table-responsive">
  <table class="table">
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
    {% if track.variable-name contains "font" or track.variable-name contains "leading" %}
    {% if track.other_values.size > 0 %}
      <tr>
        <td style="min-width: 320px; width: 320px;"><code>{{ track.variable-name }}</code></td>
        <td style="min-width: 320px;"><small>{{ track.description }}</small></td>
        <td style="min-width: 320px"><code>{{ track.value }}</code>{% if track.other_values.size > 0 %}&nbsp;<small><span class="badge badge-secondary badge-sm small">+{{ track.other_values.size }}</span></small>{% endif %}</td>
        <td>{% for v in track.files %}<code>{{ v }}</code><br/>{% endfor %}</td>
      </tr>
    {% endif %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>

<!-- Icone -->

<h3 class="no_toc">Properties Icons</h3>

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
    {% if track.variable-name contains "icon" %}
    {% if track.other_values.size == 0 %}
      <tr>
        <td style="min-width: 320px; width: 320px;"><code>{{ track.variable-name }}</code></td>
        <td style="min-width: 320px;"><small>{{ track.description }}</small></td>
        <td style="min-width: 320px"><code>{{ track.value }}</code></td>
      </tr>
    {% endif %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>

<!-- Border -->

<h3 class="no_toc">Properties Border</h3>

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
    {% if track.variable-name contains "border" or track.variable-name contains "radius" %}
    {% if track.other_values.size == 0 %}
    {% unless track.variable-name contains "color" %}
      <tr>
        <td style="min-width: 320px; width: 320px;"><code>{{ track.variable-name }}</code></td>
        <td style="min-width: 320px;"><small>{{ track.description }}</small></td>
        <td style="min-width: 320px"><code>{{ track.value }}</code></td>
      </tr>
    {% endunless %}
    {% endif %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>


<!-- Sizing -->

<h3 class="no_toc">Properties Sizing</h3>

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
    {% if track.variable-name contains "sizing" %}
    {% if track.other_values.size == 0 %}
      <tr>
        <td style="min-width: 320px; width: 320px;"><code>{{ track.variable-name }}</code></td>
        <td style="min-width: 320px;"><small>{{ track.description }}</small></td>
        <td style="min-width: 320px"><code>{{ track.value }}</code></td>
      </tr>
    {% endif %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>

<!-- Shadow -->

<h3 class="no_toc">Properties Shadow</h3>

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
    {% if track.variable-name contains "elevation" %}
    {% if track.other_values.size == 0 %}
      <tr>
        <td style="min-width: 320px; width: 320px;"><code>{{ track.variable-name }}</code></td>
        <td style="min-width: 320px;"><small>{{ track.description }}</small></td>
        <td style="min-width: 320px"><code>{{ track.value }}</code></td>
      </tr>
    {% endif %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>

<!-- Spacing -->

<h3 class="no_toc">Properties Spacing</h3>

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
    {% if track.variable-name contains "spacing" %}
    {% if track.other_values.size == 0 %}
      <tr>
        <td style="min-width: 320px; width: 320px;"><code>{{ track.variable-name }}</code></td>
        <td style="min-width: 320px;"><small>{{ track.description }}</small></td>
        <td style="min-width: 320px"><code>{{ track.value }}</code></td>
      </tr>
    {% endif %}
    {% endif %}
    {% endfor %}
    </tbody>
  </table>
</div>

{% endif %}
