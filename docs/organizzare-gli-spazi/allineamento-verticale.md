---
layout: docs
title: Allineamento verticale
description: Cambia l'allineamento verticale di elementi inline, inline-block, inline-table e celle di tabella.
group: organizzare-gli-spazi
toc: false
---

Cambia l'allineamento verticale, con le utilità di [allineamento verticale](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
di elementi inline, inline-block, inline-table e celle di tabella.

Puoi scegliere tra `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, e `.align-text-top`.

Con elementi inline:

{% comment %}Example name: Con elementi inline{% endcomment %}
{% capture example %}
<span class="bg-primary text-white p-1 align-baseline">baseline</span>
<span class="bg-primary text-white p-1 align-top">top</span>
<span class="bg-primary text-white p-1 align-middle">middle</span>
<span class="bg-primary text-white p-1 align-bottom">bottom</span>
<span class="bg-primary text-white p-1 align-text-top">text-top</span>
<span class="bg-primary text-white p-1 align-text-bottom">text-bottom</span>
{% endcapture %}{% include example.html content=example %}

Con le celle di tabella:

{% comment %}Example name: Con celle di tabella{% endcomment %}
{% capture example %}
<table style="height: 100px;" class="table table-bordered">
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
{% endcapture %}{% include example.html content=example %}
