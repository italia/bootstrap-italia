---
layout: docs
title: Allineamento verticale
description: Cambia l'allineamento verticale di elementi inline, inline-block, inline-table e celle di tabella.
group: utilities
---

Cambia l'allineamento verticale, con le utilità di [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
di elementi inline, inline-block, inline-table e celle di tabella.

Puoi scegliere tra `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, e `.align-text-top`.

Con elementi inline:

{% example html %}
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
{% endexample %}

Con le celle di tabella:

{% example html %}
<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>
{% endexample %}
