---
layout: docs
title: Avatar
description: Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at
group: componenti-aggiuntivi
toc: true
---

<style>
  /* Style override for Documentation purposes */

</style>

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture callout %}
Per ragioni di accessibilità è importante indicare all'interno dell'attributo `alt=""` dell'immagine thumbnail l'azione associata al link relativo.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Avatar con immagine

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar size-xs">
		<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Utente: Mario Rossi">
	</div>
	<div class="avatar size-sm">
		<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Utente: Mario Rossi">
	</div>
	<div class="avatar">
		<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Utente: Mario Rossi">
	</div>
	<div class="avatar size-lg">
		<img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Utente: Mario Rossi">
	</div>
	<div class="avatar size-xl">
		<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Utente: Mario Rossi">
	</div>
	<div class="avatar size-xxl">
		<img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Utente: Mario Rossi">
	</div>
</div>
{% endcapture %}{% include example.html content=example %}


## Avatar con testo

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar avatar-text size-xs">
		<p>M</p>
	</div>
	<div class="avatar avatar-text size-sm">
		<p>M</p>
	</div>
	<div class="avatar avatar-text ">
		<p>MR</p>
	</div>
	<div class="avatar avatar-text size-lg">
		<p>MR</p>
	</div>
	<div class="avatar avatar-text size-xl">
		<p>MR</p>
	</div>
	<div class="avatar avatar-text size-xxl">
		<p>MR</p>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Avatar con icona

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar size-xs">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
	</div>
	<div class="avatar size-sm">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
	</div>
	<div class="avatar">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
	</div>
	<div class="avatar size-lg">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
	</div>
	<div class="avatar size-xl">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
	</div>
	<div class="avatar size-xxl">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di Avatar

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

### Stacked

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<ul class="avatar-group stacked">
	<li>
		<div class="avatar size-sm">
			<img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Utente: Mario Rossi">
		</div>
	</li>
	<li>
		<div class="avatar size-sm">
			<img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Utente: Mario Rossi">
		</div>
	</li>
	<li>
		<div class="avatar avatar-text size-sm complementary-2-bg">
			<p>A</p>
		</div>
	</li>
	<li>
		<div class="avatar avatar-text size-sm complementary-3-bg">
			<p>S</p>
		</div>
	</li>
	<li>
		<div class="avatar size-sm">
			<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		</div>
	</li>
	<li>
		<div class="avatar size-sm">
			<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		</div>
	</li>
</ul>
{% endcapture %}{% include example.html content=example %}
