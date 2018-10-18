---
layout: docs
title: Toolbar
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
group: componenti-aggiuntivi
toc: true
---

<style>
  /* Style override for Documentation purposes */
  .bd-example {
    max-width: 400px;
    height: 240px;
    margin: 0 5px 20px;
    padding: 0;
    position: relative;
  }
</style>

Morbi porttitor commodo arcu vel bibendum. Aenean mollis faucibus magna, sed ullamcorper nisi mollis nec. Fusce id turpis euismod, blandit velit nec, malesuada augue e la classe `.forward`:

## Toolbar grande

{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <i class="it-ico it-comment" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-camera" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
	<li class="toolbar-divider"></li>
	<li>
      <a href="#">
        <i class="it-ico it-file" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-unlock" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled>
        <i class="it-ico it-favorite" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Toolbar media

{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <a href="#" class="active">
        <i class="it-ico it-comment" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-camera" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-file" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-unlock" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-favorite" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled>
        <i class="it-ico it-download" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Toolbar piccola

{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <a href="#" class="active">
        <i class="it-ico it-comment" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-camera" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-file" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-unlock" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-favorite" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled>
        <i class="it-ico it-download" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Badge

### Toolbar grande

{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <a href="#" class="active">
        <i class="it-ico it-comment" aria-hidden="true">
			<span class="toolbar-badge">1</span>
		</i>
        <span class="toolbar-label">Label <span class="sr-only"> - 1 elemento nuovo</span></span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-camera" aria-hidden="true">
			<span class="toolbar-badge">88</span>
		</i>
        <span class="toolbar-label">Label <span class="sr-only"> - 88 elementi nuovi</span></span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-file" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-unlock" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
    <li>
      <a href="#" class="disabled" disabled>
        <i class="it-ico it-favorite" aria-hidden="true"></i>
        <span class="toolbar-label">Label</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar media

{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <a href="#" class="active">
        <i class="it-ico it-comment" aria-hidden="true">
			<span class="toolbar-badge"></span>
		</i>
        <span class="sr-only">Label - 1 elemento nuovo</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-camera" aria-hidden="true">
			<span class="toolbar-badge"></span>
		</i>
        <span class="sr-only">Label - 88 elementi nuovi</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-file" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-unlock" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-favorite" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
	<li>
      <a href="#" class="disabled" disabled>
        <i class="it-ico it-download" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar piccola

{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <a href="#" class="active">
        <i class="it-ico it-comment" aria-hidden="true">
			<span class="toolbar-badge"></span>
		</i>
        <span class="sr-only">Label - 1 elemento nuovo</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-camera" aria-hidden="true">
			<span class="toolbar-badge"></span>
		</i>
        <span class="sr-only">Label - 88 elementi nuovi</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-file" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
	<li>
      <a href="#">
        <i class="it-ico it-unlock" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="it-ico it-favorite" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
	<li>
      <a href="#" class="disabled" disabled>
        <i class="it-ico it-download" aria-hidden="true"></i>
		<span class="sr-only">Label</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

## Dropdwon

### Toolbar grande

{% capture example %}
<nav class="toolbar">
  <ul>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle active" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-comment" aria-hidden="true">
            <span class="toolbar-badge">1</span>
          </i>
          <span class="toolbar-label">Label <span class="sr-only"> - 1 elemento nuovo</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-camera" aria-hidden="true">
            <span class="toolbar-badge">88</span>
          </i>
          <span class="toolbar-label">Label <span class="sr-only"> - 88 elementi nuovi</span></span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-file" aria-hidden="true"></i>
          <span class="toolbar-label">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle disabled" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-unlock" aria-hidden="true"></i>
          <span class="toolbar-label">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-more-actions" aria-hidden="true"></i>
          <span class="toolbar-label">More</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item left-icon" href="#"><i class="it-favorite left" aria-hidden="true"> </i><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><i class="it-mail left" aria-hidden="true"> </i><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><i class="it-settings left" aria-hidden="true"> </i><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar media

{% capture example %}
<nav class="toolbar toolbar-medium">
  <ul>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle active" type="button" id="dropdownMenuButton-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-comment" aria-hidden="true">
            <span class="toolbar-badge"></span>
          </i>
          <span class="sr-only">Label - 1 elemento nuovo</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-camera" aria-hidden="true">
            <span class="toolbar-badge"></span>
          </i>
          <span class="sr-only">Label - 88 elementi nuovi</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-file" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton4-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-unlock" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton5-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-favorite" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton6-med" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-more-actions" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton6-med">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item left-icon" href="#"><i class="it-favorite left" aria-hidden="true"> </i><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><i class="it-mail left" aria-hidden="true"> </i><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><i class="it-settings left" aria-hidden="true"> </i><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}

### Toolbar piccola

{% capture example %}
<nav class="toolbar toolbar-small">
  <ul>
    <li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle active" type="button" id="dropdownMenuButton-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-comment" aria-hidden="true">
            <span class="toolbar-badge"></span>
          </i>
          <span class="sr-only">Label - 1 elemento nuovo</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-camera" aria-hidden="true">
            <span class="toolbar-badge"></span>
          </i>
          <span class="sr-only">Label - 88 elementi nuovi</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton3-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-file" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton4-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-unlock" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton5-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-favorite" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton5-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item" href="#"><span>Azione 1</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 2</span></a></li>
              <li><a class="list-item" href="#"><span>Azione 3</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
	<li>
      <div class="dropdown">
        <button class="btn btn-dropdown dropdown-toggle toolbar-more" type="button" id="dropdownMenuButton6-sml" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="it-ico it-more-actions" aria-hidden="true"></i>
          <span class="sr-only">Label</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton6-sml">
          <div class="link-list-wrapper">
            <ul class="link-list">
              <li><a class="list-item left-icon" href="#"><i class="it-favorite left" aria-hidden="true"> </i><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><i class="it-mail left" aria-hidden="true"> </i><span>Label</span></a></li>
              <li><a class="list-item left-icon" href="#"><i class="it-settings left" aria-hidden="true"> </i><span>Label</span></a></li>
            </ul>
          </div>
        </div>
      </div>
	</li>
  </ul>
</nav>
{% endcapture %}{% include example.html content=example %}