{%- assign properties = include.properties -%}
{%- assign title = include.title -%}
{%- assign selector = include.selector -%}

{% if properties %}

Di seguito la lista delle custom properties divise per tipologie.
La descrizione delle custom properties è in inglese perché risiede nei files `.scss` dei componenti.

<!-- Tipografia statiche -->

<h3>Tipografia</h3>

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

<h3>Tipografia dinamiche</h3>

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

<h3>Icons</h3>

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

<h3>Border</h3>

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

<h3>Sizing</h3>

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

<h3>Shadow</h3>

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

<h3>Spacing</h3>

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


<!-- Text Colors -->

<h3>Text colors</h3>

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
    {% if track.variable-name contains "color-text" or track.variable-name contains "color-link" or track.variable-name contains "color-code" %}
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


<!-- Border Colors -->

<h3>Border colors</h3>

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
    {% if track.variable-name contains "color-border" or track.variable-name contains "color-outline" %}
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

<!-- Background Colors -->

<h3>Background colors</h3>

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
    {% if track.variable-name contains "-background" %}
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


<!-- Status Colors -->

<h3>Status colors</h3>

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
    {% if track.variable-name contains "color-status" %}
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

<!-- Icon Colors -->

<h3>Icon colors</h3>

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
    {% if track.variable-name contains "icon-" %}
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


<!-- Transitions -->

<h3>Transitions</h3>

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
    {% if track.variable-name contains "transition-" %}
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
