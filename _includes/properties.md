{%- assign properties = include.properties -%}

## Properties

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
    {% for track in site.data.cprops.dropdown %}
    <tr>
      <td><code>{{ track.variable-name }}</code></td>
      <td>{{ track.description }}</td>
      <td><code>{{ track.value }}</code></td>
    </tr>
    {% endfor %}
    </tbody>
  </table>
</div>