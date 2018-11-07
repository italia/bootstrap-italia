---
layout: docs
title: Notification
description: lorem ipsum dolor
group: componenti-aggiuntivi
toc: true
---

<style>
	/* Style override for Documentation purposes */
	.test-docs .notification {
		position: static;
		top: auto;
		bottom: auto;
		right: auto;
		left: auto;
		transform: none;
		display: block;
	}
	.test-docs .notification.dismissable {
		position: relative;
	}
	.test-desktop, .test-animation {
		width: 100%;
		height: 500px;
		background: #fafafa;
		border: 1px solid #eee;
		position: relative;
		overflow: hidden;
	}
	.test-desktop .notification {
		position: absolute;
		display: block;
	}
</style>

Lorem iposum dolor `<div>` con classe `.section`.

## Barra di notifica

{% capture example %}
<div class="container test-docs">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<div class="notification" role="alert" aria-labelledby="not1-title">
				<h2 class="no_toc" id="not1-title">Titolo notifica</h2>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="notification with-icon success" role="alert" aria-labelledby="not2-title">
				<h2 class="no_toc" id="not2-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Barra di notifica con messaggio

{% capture example %}
<div class="container test-docs">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<div class="notification" role="alert" aria-labelledby="not1a-title">
				<h2 class="no_toc" id="not1a-title">Titolo notifica</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="notification with-icon success" role="alert" aria-labelledby="not2a-title">
				<h2 class="no_toc" id="not2a-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Dismissable

{% capture example %}
<div class="container test-docs">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<div class="notification dismissable" role="alert" aria-labelledby="not1dms-title">
				<h2 class="no_toc" id="not1dms-title">Titolo notifica</h2>
				<button type="button" class="btn notification-close">
					<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
					<span class="sr-only">Chiudi notifica: Titolo notifica</span>
				</button>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="notification with-icon success dismissable" role="alert" aria-labelledby="not2dms-title">
				<h2 class="no_toc" id="not2dms-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
				<button type="button" class="btn notification-close">
					<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
					<span class="sr-only">Chiudi notifica: Titolo notifica</span>
				</button>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Stati

{% capture example %}
<div class="container test-docs">
	<div class="row mb-5">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p><strong>Successo</strong></p>
			<div class="notification with-icon success" role="alert" aria-labelledby="not1b-title">
				<h2 class="no_toc" id="not1b-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Errore</strong></p>
			<div class="notification with-icon error" role="alert" aria-labelledby="not2b-title">
				<h2 class="no_toc" id="not2b-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-close-circle"></use></svg>Titolo notifica</h2>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p><strong>Info</strong></p>
			<div class="notification with-icon info" role="alert" aria-labelledby="not3b-title">
				<h2 class="no_toc" id="not3btitle"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-info-circle"></use></svg>Titolo notifica</h2>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Avvertenza</strong></p>
			<div class="notification with-icon warning" role="alert" aria-labelledby="not4b-title">
				<h2 class="no_toc" id="not4b-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-error"></use></svg>Titolo notifica</h2>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Posizione e arrotondamento degli angoli

{% capture example %}
<div class="container test-docs">
	<div class="row mb-5">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p><strong>Basico (arrotondamento ai 4 angoli)</strong></p>
			<div class="notification with-icon success" role="alert" aria-labelledby="not1c-title">
				<h2 class="no_toc" id="not1c-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>top-fix</strong></p>
			<div class="notification top-fix with-icon success" role="alert" aria-labelledby="not2c-title">
				<h2 class="no_toc" id="not2c-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
			</div>
			<p class="mt-4"><strong>bottom-fix</strong></p>
			<div class="notification bottom-fix with-icon success" role="alert" aria-labelledby="not3c-title">
				<h2 class="no_toc" id="not3c-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
			</div>
			<p class="mt-4"><strong>left-fix</strong></p>
			<div class="notification left-fix with-icon success" role="alert" aria-labelledby="not4c-title">
				<h2 class="no_toc" id="not4c-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
			</div>
			<p class="mt-4"><strong>right-fix</strong></p>
			<div class="notification right-fix with-icon success" role="alert" aria-labelledby="not5c-title">
				<h2 class="no_toc" id="not5c-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Esempio desktop

{% capture example %}
<div class="container test-desktop">
	<div class="notification with-icon success" role="alert" aria-labelledby="not1d-title">
		<h2 class="no_toc" id="not1d-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Posizione fissa

{% capture example %}
<div class="container test-desktop">
	<div class="notification top-fix with-icon success" role="alert" aria-labelledby="not1e-title">
		<h2 class="no_toc" id="not1e-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Top fix</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
	</div>
	<div class="notification bottom-fix with-icon success" role="alert" aria-labelledby="not2e-title">
		<h2 class="no_toc" id="not2e-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Bottom fix</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
	</div>
	<div class="notification left-fix with-icon success" role="alert" aria-labelledby="not3e-title">
		<h2 class="no_toc" id="not3e-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Left fix</h2>
	</div>
	<div class="notification right-fix with-icon success" role="alert" aria-labelledby="not4e-title">
		<h2 class="no_toc" id="not4e-title"><svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check-circle"></use></svg>Right fix</h2>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}