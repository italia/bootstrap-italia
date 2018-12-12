---
layout: docs
group: componenti
toc: true
title: Notifiche
description: Per attirare l'attenzione su brevi messaggi di stato
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

La Notification viene utilizzata per portare l'attenzione dell'utente su un messaggio o un cambiamento di stato. Es: la ricezione di una nuova email.

Lo stato naturale dell'elemento è invisibile. Gli esempi di questa pagina sono stati resi statici per facilitare un confronto fra le varie tipologie.

Il comportamento delle Notification è verificabile sulla <a href="{{ site.baseurl }}/docs/esempi/notifications/">pagina di esempio</a>.

La Notification appare quando viene attivata dalla seguente funzione Javascript:

{% highlight js %}
notificationShow('idNotification',6000);
{% endhighlight %}

- Il primo parametro, la stringa **idNotification**, corrisponde alla proprietà id del `<div>` della Notification `<div class="notification"  id="idNotification">...</div>`
- il secondo parametro (opzionale) corrisponde alla durata di visualizzazione in millisecondi. Il valore di default, se non indicato, è di 7000ms ossia 7 secondi.

{% capture callout %}
##### Accessibilità

Per ragioni di accessibilità è necessario:
- che il titolo `<h5>` contenuto nella Notification abbia un ID univoco
- che questo ID venga usato come valore della proprietà `aria-labelledby` nel `<div>` della Notification
- che il `<div>` della Notification abbia la proprietà `role="alert"`
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Esempio

La Notification può essere composta da un solo titolo oppure da un titolo accompagnato da icona, contentuta nel tag `<h5>` del titolo. In questo caso l'elemento dovrà avere la classe `.with-icon`.

{% capture example %}
<div class="container test-docs">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p class="mb-4"><strong>Notification standard</strong></p>
			<div class="notification" role="alert" aria-labelledby="not1-title" id="not1">
				<h5 id="not1-title">Titolo notifica</h5>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p class="mb-4"><strong>Notification con icona</strong></p>
			<div class="notification with-icon" role="alert" aria-labelledby="not2-title" id="not2">
				<h5 id="not2-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Notification con messaggio

Si può aggiungere un breve testo al di sotto del titolo utilizzando un tag `<p>`.

{% capture example %}
<div class="container test-docs">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p class="mb-4"><strong>Notification standard con testo</strong></p>
			<div class="notification" role="alert" aria-labelledby="not1a-title" id="not1a">
				<h5 id="not1a-title">Titolo notifica</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p class="mb-4"><strong>Notification con icona e testo</strong></p>
			<div class="notification with-icon success" role="alert" aria-labelledby="not2a-title" id="not2a">
				<h5 id="not2a-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Dismissable

Le Notification Dismissable non vengono nascoste dopo un intervallo di tempo ma vengono chiuse solo quando si clicca sul rispettivo bottone di chiusura.

Utilizzare una classe aggiuntiva `.dismissable` per ottenere questo comportamento.

{% capture example %}
<div class="container test-docs">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p class="mb-4"><strong>Notification dismissable con testo</strong></p>
			<div class="notification dismissable" role="alert" aria-labelledby="not1dms-title" id="not1dms">
				<h5 id="not1dms-title">Titolo notifica</h5>
				<button type="button" class="btn notification-close">
					<svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
					<span class="sr-only">Chiudi notifica: Titolo notifica</span>
				</button>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p class="mb-4"><strong>Notification dismissable con icona e testo</strong></p>
			<div class="notification with-icon success dismissable" role="alert" aria-labelledby="not2dms-title" id="not2dms">
				<h5 id="not2dms-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
				<button type="button" class="btn notification-close">
					<svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
					<span class="sr-only">Chiudi notifica: Titolo notifica</span>
				</button>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Stati

Alle Notification possono essere applicate classi aggiuntive che ne determinano lo stato modificando il colore delle icone e del bordo:
- `.success` - per messaggi di procedure andate a buon fine
- `.error` - per messaggi di errore
- `.info` - per info generiche
- `.warning` - per messaggi di precauzione

{% capture example %}
<div class="container test-docs">
	<div class="row mb-5">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p><strong>Successo</strong></p>
			<div class="notification with-icon success" role="alert" aria-labelledby="not1b-title" id="not1b">
				<h5 id="not1b-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Errore</strong></p>
			<div class="notification with-icon error" role="alert" aria-labelledby="not2b-title" id="not2b">
				<h5 id="not2b-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close-circle"></use></svg>Titolo notifica</h5>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p><strong>Info</strong></p>
			<div class="notification with-icon info" role="alert" aria-labelledby="not3b-title" id="not3b">
				<h5 id="not3btitle"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg>Titolo notifica</h5>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Avvertenza</strong></p>
			<div class="notification with-icon warning" role="alert" aria-labelledby="not4b-title" id="not4b">
				<h5 id="not4b-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-error"></use></svg>Titolo notifica</h5>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Posizione e arrotondamento degli angoli

La posizione predefinita della Notification è nella parte destra inferiore della finestra.

Utilizzando le classi aggiuntive di posizione fissa elencate di seguito la Notification verrà posizionata a filo di uno dei margini indicati, modificando l'arrotondamento degli angoli di conseguenza.

**N.B. queste classi non influenzano il posizionamento su device mobile, in questo caso la Notification è sempre a piede della finestra e ne occupa tutta la larghezza**

{% capture example %}
<div class="container test-docs">
	<div class="row mb-5">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p><strong>Basico (arrotondamento ai 4 angoli)</strong></p>
			<div class="notification with-icon success" role="alert" aria-labelledby="not1c-title" id="not1c">
				<h5 id="not1c-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>top-fix</strong></p>
			<div class="notification top-fix with-icon success" role="alert" aria-labelledby="not2c-title" id="not2c">
				<h5 id="not2c-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
			</div>
			<p class="mt-4"><strong>bottom-fix</strong></p>
			<div class="notification bottom-fix with-icon success" role="alert" aria-labelledby="not3c-title" id="not3c">
				<h5 id="not3c-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
			</div>
			<p class="mt-4"><strong>left-fix</strong></p>
			<div class="notification left-fix with-icon success" role="alert" aria-labelledby="not4c-title" id="not4c">
				<h5 id="not4c-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
			</div>
			<p class="mt-4"><strong>right-fix</strong></p>
			<div class="notification right-fix with-icon success" role="alert" aria-labelledby="not5c-title" id="not5c">
				<h5 id="not5c-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Posizione predefinita

Posizionamento predefinito della Notification.

{% capture example %}
<div class="container test-desktop">
	<div class="notification with-icon success" role="alert" aria-labelledby="not1d-title" id="not1d">
		<h5 id="not1d-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Titolo notifica</h5>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Posizione fissa

Esempi delle quattro posizioni fisse possibili.

{% capture example %}
<div class="container test-desktop">
	<div class="notification top-fix with-icon success" role="alert" aria-labelledby="not1e-title" id="not1e">
		<h5 id="not1e-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Top fix</h5>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
	</div>
	<div class="notification bottom-fix with-icon success" role="alert" aria-labelledby="not2e-title" id="not2e">
		<h5 id="not2e-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Bottom fix</h5>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
	</div>
	<div class="notification left-fix with-icon success" role="alert" aria-labelledby="not3e-title" id="not3e">
		<h5 id="not3e-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Left fix</h5>
	</div>
	<div class="notification right-fix with-icon success" role="alert" aria-labelledby="not4e-title" id="not4e">
		<h5 id="not4e-title"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg>Right fix</h5>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}
