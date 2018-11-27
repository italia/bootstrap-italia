---
layout: docs
title: Overlay Panel
description: lorem impsum
group: componenti-aggiuntivi
toc: true
---

<style>
	/* Style override for Documentation purposes */

</style>

tro, la stringa **idNotification**, corrisponde alla proprietà id del `<div>` della Notification `<div class="notification"  id="idNotification">...</div>`

La Notification può essere composta da un solo titolo oppure da un titolo accompagnato da icona, contentuta nel tag `<h5>` del titolo. In questo caso l'elemento dovrà avere la classe `.with-icon`.

## Esempio

{% capture example %}
<div class="container">
	<div class="row">
		<div class="col-12 col-md-6">
			<p><strong>Overlay ad altezza fissa</strong></p>
			<figure class="overlay-wrapper">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
			</figure>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Overlay a tutta altezza</strong></p>
			<figure class="overlay-wrapper">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel overlay-panel-fullheight"><span>Label lunga, verrà troncata dall'overlay</span></figcaption>
			</figure>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay Nero

{% capture example %}
<div class="container">
	<div class="row">
		<div class="col-12 col-md-6">
			<p><strong>Overlay ad altezza fissa</strong></p>
			<figure class="overlay-wrapper">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
			</figure>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Overlay a tutta altezza</strong></p>
			<figure class="overlay-wrapper">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel overlay-panel-fullheight overlay-black"><span>Label lunga, verrà troncata dall'overlay</span></figcaption>
			</figure>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay con icona

{% capture example %}
<div class="container">
	<div class="row">
		<div class="col-12 col-md-6">
			<p><strong>Overlay Primary (default)</strong></p>
			<figure class="overlay-wrapper">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel overlay-icon">
					<span class="sr-only">Label immagine</span>
					<svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
				</figcaption>
			</figure>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Overlay Nero</strong></p>
			<figure class="overlay-wrapper">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel overlay-black overlay-icon">
					<span class="sr-only">Label immagine</span>
					<svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
				</figcaption>
			</figure>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Overlay Hover

{% capture example %}
<div class="container">
	<div class="row">
		<div class="col-12 col-md-6">
			<p><strong>Overlay ad altezza fissa</strong></p>
			<figure class="overlay-wrapper overlay-hover">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
			</figure>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Overlay a tutta altezza</strong></p>
			<figure class="overlay-wrapper overlay-hover">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel overlay-panel-fullheight"><span>Label lunga, verrà troncata dall'overlay</span></figcaption>
			</figure>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Overlay Slide

{% capture example %}
<div class="container">
	<div class="row">
		<div class="col-12 col-md-6">
			<p><strong>Overlay ad altezza fissa</strong></p>
			<figure class="overlay-wrapper overlay-slide">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
			</figure>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Overlay a tutta altezza</strong></p>
			<figure class="overlay-wrapper overlay-slide">
				<img src="https://picsum.photos/240/160?image=1056" alt="Immagine">
				<figcaption class="overlay-panel overlay-panel-fullheight"><span>Label lunga, verrà troncata dall'overlay</span></figcaption>
			</figure>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}