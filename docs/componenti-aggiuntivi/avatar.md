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
		<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Utente: Luisa Neri">
	</div>
	<div class="avatar">
		<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Utente: Gioacchino Romani">
	</div>
	<div class="avatar size-lg">
		<img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Utente: Anna Barbieri">
	</div>
	<div class="avatar size-xl">
		<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Utente: Carlo Poli">
	</div>
	<div class="avatar size-xxl">
		<img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Utente: Giovanna Ferrero">
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Presenza utente

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-5">
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Utente: Mario Rossi">
			<div class="avatar-presence active"></div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Utente: Luisa Neri">
			<div class="avatar-presence busy">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Utente: Gioacchino Romani">
			<div class="avatar-presence hidden"></div>
		</div>
	</div>
</div>
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar-wrapper">
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-lg">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xxl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Status utente

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-5">
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Utente: Mario Rossi">
			<div class="avatar-status approved">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Utente: Luisa Neri">
			<div class="avatar-status declined">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
			</div>
		</div>
	</div>
</div>
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar-wrapper">
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-status approved">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-lg">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-status declined">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-status approved">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xxl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Utente: Ludovica Galli">
			<div class="avatar-status declined">
				<svg class="icon"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}


## Avatar con testo

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar size-xs">
		<p>M</p>
	</div>
	<div class="avatar avatar-primary size-sm">
		<p>M</p>
	</div>
	<div class="avatar avatar-secondary">
		<p>MR</p>
	</div>
	<div class="avatar avatar-green size-lg">
		<p>MR</p>
	</div>
	<div class="avatar avatar-orange size-xl">
		<p>MR</p>
	</div>
	<div class="avatar avatar-red size-xxl">
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

### Inline

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

#### Inline Small

{% capture example %}
<div class="link-list-wrapper">
	<ul class="link-list avatar-group">
		<li>
			<a class="list-item" href="#">
				<div class="avatar size-sm"><img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Utente: Mario Rossi"></div>
				<span>Mario Rossi</span>
			</a>
		</li>
		<li>
			<a class="list-item" href="#">
				<div class="avatar avatar-orange size-sm complementary-3-bg"><p>A</p></div>
				<span>Arianna Gallo</span>
			</a>
		</li>
		<li>
			<a class="list-item" href="#">
				<div class="avatar avatar-red size-sm complementary-3-bg"><p>S</p></div>
				<span>Sara Ghione</span>
			</a>
		</li>
		<li>
			<a class="list-item" href="#">
				<div class="avatar size-sm"><svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg></div>
				<span>Antonio Esposito</span>
			</a>
		</li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Inline Medium

{% capture example %}
<div class="link-list-wrapper">
	<ul class="link-list avatar-group">
		<li>
			<a class="list-item" href="#">
				<div class="avatar size-md"><img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Utente: Mario Rossi"></div>
				<span>Mario Rossi</span>
			</a>
		</li>
		<li>
			<a class="list-item size-md" href="#">
				<div class="avatar avatar-green complementary-3-bg"><p>AG</p></div>
				<span>Arianna Gallo</span>
			</a>
		</li>
		<li>
			<a class="list-item size-md" href="#">
				<div class="avatar avatar-primary complementary-3-bg"><p>SG</p></div>
				<span>Sara Ghione</span>
			</a>
		</li>
		<li>
			<a class="list-item size-md" href="#">
				<div class="avatar"><svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg></div>
				<span>Antonio Esposito</span>
			</a>
		</li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Stacked

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

#### Stacked Small

{% capture example %}
<ul class="avatar-group-stacked">
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
		<div class="avatar avatar-orange size-sm">
			<p>A</p>
		</div>
	</li>
	<li>
		<div class="avatar avatar-red size-sm">
			<p>S</p>
		</div>
	</li>
	<li>
		<div class="avatar size-sm">
			<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		</div>
	</li>
	<li>
		<div class="avatar avatar-dropdown size-sm">
			<div class="dropdown">
				<a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="sr-only">Visualizza altri 4 utenti</span>
					+4
				</a>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<div class="link-list-wrapper">
						<ul class="link-list">
							<li>
								<a class="list-item" href="#">
									<div class="avatar size-sm"><img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Utente: Mario Rossi"></div>
									<span>Mario Rossi</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar avatar-green size-sm complementary-3-bg"><p>A</p></div>
									<span>Arianna Gallo</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar avatar-primary size-sm complementary-3-bg"><p>S</p></div>
									<span>Sara Ghione</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar size-sm"><svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg></div>
									<span>Antonio Esposito</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</li>
</ul>
{% endcapture %}{% include example.html content=example %}

#### Stacked Medium

{% capture example %}
<ul class="avatar-group-stacked">
	<li>
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Utente: Mario Rossi">
		</div>
	</li>
	<li>
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Utente: Mario Rossi">
		</div>
	</li>
	<li>
		<div class="avatar avatar-orange size-md">
			<p>AM</p>
		</div>
	</li>
	<li>
		<div class="avatar avatar-red size-md">
			<p>SP</p>
		</div>
	</li>
	<li>
		<div class="avatar size-md">
			<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		</div>
	</li>
	<li>
		<div class="avatar avatar-dropdown size-md">
			<div class="dropdown">
				<a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="sr-only">Visualizza altri 4 utenti</span>
					+4
				</a>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<div class="link-list-wrapper">
						<ul class="link-list">
							<li>
								<a class="list-item" href="#">
									<div class="avatar size-md"><img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Utente: Mario Rossi"></div>
									<span>Mario Rossi</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar avatar-green size-md"><p>AG</p></div>
									<span>Arianna Gallo</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar avatar-primary size-md"><p>SG</p></div>
									<span>Sara Ghione</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar size-md"><svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg></div>
									<span>Antonio Esposito</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</li>
</ul>
{% endcapture %}{% include example.html content=example %}