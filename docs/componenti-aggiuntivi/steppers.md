---
layout: docs
title: Steppers
description: Et et consectetur ipsum labore excepteur est proident excepteur ad velit
group: componenti-aggiuntivi
toc: true
---

<style>
  /* Style override for Documentation purposes */

  .bd-example .steppers-content {
	height: 400px;
	border: 2px dashed #eee;
	background: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #999;
  }
  .bd-example .steppers.bg-dark .steppers-content{
	  color: #aaa;
	  border-color: #aaa;
	  background: #17324d;
	  opacity: 0.5;
  }
  .bd-example .steppers.bg-dark {
	  padding: 30px;
  }

  @media screen and (max-width: 991px) {
		.bd-example {
			overflow: hidden;
			padding: 0;
			margin-bottom: 6px;
		}
		.bd-example .steppers-content {
			height: 300px;
			border: none;
		}
		.bd-example .steppers.bg-dark {
			padding: 0;
		}
	}
</style>

## Esempio

Et et consectetur ipsum labore excepteur est proident excepteur ad velit `.forward`:

### Solo testo

Et et consectetur ipsum labore excepteur est proiden.

{% capture example %}
<div class="steppers">
	<ul class="steppers-header">
		<li class="success">Label Step 1 <i class="it-ico it-check steppers-success"><span class="sr-only">Confermato</span></i></li>
		<li class="active">Label Step 2</li>
		<li>Label Step 3</li>
		<li class="steppers-index">2/6</li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Testo e icone

Et et consectetur ipsum labore excepteur est proiden.

{% capture example %}
<div class="steppers">
	<ul class="steppers-header">
		<li class="success"><i class="it-ico it-calendar" aria-hidden="true"></i>Label Step 1 <i class="it-ico it-check steppers-success"><span class="sr-only">Confermato</span></i></li>
		<li class="active"><i class="it-ico it-copy" aria-hidden="true"></i>Label Step 2</li>
		<li><i class="it-ico it-settings" aria-hidden="true"></i>Label Step 3</li>
		<li class="steppers-index">2/6</li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Numeri

Et et consectetur ipsum labore excepteur est proiden.

{% capture example %}
<div class="steppers">
	<ul class="steppers-header">
		<li class="success"><span class="steppers-number"><i class="it-ico it-check steppers-success"><span class="sr-only">Confermato Step 1</span></i></span>Label Step 1</li>
		<li class="active"><span class="steppers-number"><span class="sr-only">Step </span>2</span>Label Step 2</li>
		<li><span class="steppers-number"><span class="sr-only">Step </span>3</span>Label Step 3</li>
		<li class="steppers-index"><span>1</span> <span class="active">2</span> <span>3</span> <span>4</span></li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}

## Navigazione degli step

{% capture example %}
<div class="steppers">
	<ul class="steppers-header">
		<li class="success">Label Step 1 <i class="it-ico it-check steppers-success"></i></li>
		<li class="active">Label Step 2</li>
		<li>Label Step 3</li>
		<li class="steppers-index">2/6</li>
	</ul>
	<div class="steppers-content" aria-live="polite">
		<!-- Esempio START -->
		<p>Contenuto di esempio dello step corrente</p>
		<!-- Esempio END -->
	</div>
	<nav class="steppers-nav">
		<button type="button" class="btn btn-outline-primary btn-sm"><i class="it-ico it-chevron-left"></i>Indietro</button>
		<div class="steppers-progress">
			<div class="progress">
				<div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
		<button type="button" class="btn btn-primary btn-sm">Avanti<i class="it-ico it-chevron-right"></i></button>
		<button type="button" class="btn btn-primary btn-sm steppers-btn-done">Conferma</button>
	</nav>
</div>
{% endcapture %}{% include example.html content=example %}

## Versione su sfondo scuro

{% capture example %}
<div class="steppers bg-dark">
	<ul class="steppers-header">
		<li class="success">Label Step 1 <i class="it-ico it-check steppers-success"></i></li>
		<li class="active">Label Step 2</li>
		<li>Label Step 3</li>
		<li class="steppers-index">2/6</li>
	</ul>
	<div class="steppers-content" aria-live="polite">
		<!-- Esempio START -->
		<p>Contenuto di esempio dello step corrente</p>
		<!-- Esempio END -->
	</div>
	<nav class="steppers-nav">
		<button type="button" class="btn btn-outline-primary btn-sm"><i class="it-ico it-chevron-left"></i>Indietro</button>
		<div class="steppers-progress">
			<div class="progress">
				<div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
		</div>
		<button type="button" class="btn btn-primary btn-sm">Avanti<i class="it-ico it-chevron-right"></i></button>
		<button type="button" class="btn btn-primary btn-sm steppers-btn-done">Conferma</button>
	</nav>
</div>
{% endcapture %}{% include example.html content=example %}

### Vari tipi di header su sfondo scuro

{% capture example %}
<!-- Solo testo -->
<div class="steppers bg-dark">
	<ul class="steppers-header">
		<li class="success">Label Step 1 <i class="it-ico it-check steppers-success"></i></li>
		<li class="active">Label Step 2</li>
		<li>Label Step 3</li>
		<li class="steppers-index">2/6</li>
	</ul>
</div>

<!-- Testo e icone -->
<div class="steppers bg-dark">
	<ul class="steppers-header">
		<li class="success"><i class="it-ico it-calendar" aria-hidden="true"></i>Label Step 1 <i class="it-ico it-check steppers-success"><span class="sr-only">Confermato</span></i></li>
		<li class="active"><i class="it-ico it-copy" aria-hidden="true"></i>Label Step 2</li>
		<li><i class="it-ico it-settings" aria-hidden="true"></i>Label Step 3</li>
		<li class="steppers-index">2/6</li>
	</ul>
</div>

<!-- Numeri -->
<div class="steppers bg-dark">
	<ul class="steppers-header">
		<li class="success"><span class="steppers-number"><i class="it-ico it-check steppers-success"><span class="sr-only">Confermato Step 1</span></i></span>Label Step 1</li>
		<li class="active"><span class="steppers-number"><span class="sr-only">Step </span>2</span>Label Step 2</li>
		<li><span class="steppers-number"><span class="sr-only">Step </span>3</span>Label Step 3</li>
		<li class="steppers-index"><span>1</span> <span class="active">2</span> <span>3</span> <span>4</span></li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}