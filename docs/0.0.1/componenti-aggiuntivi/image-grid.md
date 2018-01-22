---
layout: docs
title: Image Grids
description: Test Documentation
group: componenti-aggiuntivi
toc: true
---

## Image grids

Use the image grid plugin to quickly layout multi sized images in a grid. For the image grid to work properly, it needs to get the raw image sizes (either from a data attribute, like `data-width` and `data-height` or you need to wait for image load before calling `.imageGrid`).

### Options

- padding: 10,
- targetHeight: 300,
- display: 'inline-block'

### JavaScript API
{% example js %}
$('.myGrid').imageGrid()
{% endexample %}

### Data Api

{% example html %}
<div data-grid="images">
  <img data-width="350" data-height="300" src="http://placehold.it/350x300/EEE04A/ffffff">
  <img data-width="420" data-height="320" src="http://placehold.it/420x320/5cb85c/ffffff">
  <img data-width="320" data-height="380" src="http://placehold.it/320x380/5bc0de/ffffff">
  <img data-width="472" data-height="500" src="http://placehold.it/472x500/f0ad4e/ffffff">
  <img data-width="540" data-height="360" src="http://placehold.it/540x360/FF3167/ffffff">
</div>
{% endexample %}
