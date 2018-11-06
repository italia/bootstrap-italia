---
layout: docs
title: Avatar
description: Rappresentazione grafica di un utente
group: componenti-aggiuntivi
toc: true
---

L'elmento Avatar è la rappresentazione garfica di un utente e può includere un'immagine, un testo o un icona.

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture callout %}
Per ragioni di accessibilità è importante indicare all'interno dell'Avatar il nome dell'utente associato allo stesso. Nel caso di un Avatr con immagine è consigliabile utilizzare l'attributo `alt=""` della stessa.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Avatar con immagine

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar size-xs">
		<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
	</div>
	<a class="avatar size-sm" href="#">
		<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri">
	</a>
	<div class="avatar">
		<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Gioacchino Romani">
	</div>
	<a class="avatar size-lg" href="#">
		<img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
	</a>
	<div class="avatar size-xl">
		<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Carlo Poli">
	</div>
	<a class="avatar size-xxl" href="#">
		<img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Giovanna Ferrero">
	</a>
</div>
{% endcapture %}{% include example.html content=example %}

## Avatar con testo

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar size-xs">
		<p aria-hidden="true">M</p>
		<span class="sr-only">Mario Rossi</span>
	</div>
	<a class="avatar avatar-primary size-sm" href="#">
		<p aria-hidden="true">M</p>
		<span class="sr-only">Mario Rossi</span>
	</a>
	<div class="avatar avatar-secondary">
		<p aria-hidden="true">MR</p>
		<span class="sr-only">Mario Rossi</span>
	</div>
	<a class="avatar avatar-green size-lg" href="#">
		<p aria-hidden="true">MR</p>
		<span class="sr-only">Mario Rossi</span>
	</a>
	<div class="avatar avatar-orange size-xl">
		<p aria-hidden="true">MR</p>
		<span class="sr-only">Mario Rossi</span>
	</div>
	<a class="avatar avatar-red size-xxl" href="#">
		<p aria-hidden="true">MR</p>
		<span class="sr-only">Mario Rossi</span>
	</a>
</div>
{% endcapture %}{% include example.html content=example %}

## Avatar con icona

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar size-xs">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		<span class="sr-only">Cerca</span>
	</div>
	<a class="avatar size-sm" href="#">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		<span class="sr-only">Cerca</span>
	</a>
	<div class="avatar">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		<span class="sr-only">Cerca</span>
	</div>
	<a class="avatar size-lg" href="#">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		<span class="sr-only">Cerca</span>
	</a>
	<div class="avatar size-xl">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		<span class="sr-only">Cerca</span>
	</div>
	<a class="avatar size-xxl" href="#">
		<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
		<span class="sr-only">Cerca</span>
	</a>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di Avatar

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

### Lista

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

#### Lista piccola

{% capture example %}
<div class="link-list-wrapper">
	<ul class="link-list avatar-group">
		<li>
			<a class="list-item" href="#">
				<div class="avatar size-sm"><img src="https://randomuser.me/api/portraits/men/43.jpg" alt=""></div>
				<span>Mario Rossi</span>
			</a>
		</li>
		<li>
			<a class="list-item" href="#">
				<div class="avatar avatar-orange size-sm complementary-3-bg">
					<p aria-hidden="true">A</p>
				</div>
				<span>Arianna Gallo</span>
			</a>
		</li>
		<li>
			<div class="list-item">
				<div class="avatar avatar-red size-sm complementary-3-bg">
					<p aria-hidden="true">S</p>
				</div>
				<span>Sara Ghione</span>
			</div>
		</li>
		<li>
			<div class="list-item">
				<div class="avatar size-sm">
					<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg>
				</div>
				<span>Antonio Esposito</span>
			</div>
		</li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Lista media

{% capture example %}
<div class="link-list-wrapper">
	<ul class="link-list avatar-group">
		<li>
			<a class="list-item" href="#">
				<div class="avatar size-md"><img src="https://randomuser.me/api/portraits/men/46.jpg" alt=""></div>
				<span>Mario Rossi</span>
			</a>
		</li>
		<li>
			<a class="list-item size-md" href="#">
				<div class="avatar avatar-green complementary-3-bg">
					<p aria-hidden="true">AG</p>
				</div>
				<span>Arianna Gallo</span>
			</a>
		</li>
		<li>
			<div class="list-item size-md">
				<div class="avatar avatar-primary complementary-3-bg">
					<p aria-hidden="true">SG</p>
				</div>
				<span>Sara Ghione</span>
			</div>
		</li>
		<li>
			<div class="list-item size-md">
				<div class="avatar">
					<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg>
				</div>
				<span>Antonio Esposito</span>
			</div>
		</li>
	</ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Sovrapposto

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

#### Sovrapposto Piccolo

{% capture example %}
<ul class="avatar-group-stacked">
	<li>
		<div class="avatar size-sm">
			<img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Arianna Rossi">
		</div>
	</li>
	<li>
		<div class="avatar size-sm">
			<img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Giulio Neri">
		</div>
	</li>
	<li>
		<div class="avatar avatar-orange size-sm">
			<p aria-hidden="true">A</p>
			<span class="sr-only">Andrea Gallo</span>
		</div>
	</li>
	<li>
		<a class="avatar avatar-red size-sm" href="#">
			<p aria-hidden="true">S</p>
			<span class="sr-only">Sara Ghione</span>
		</a>
	</li>
	<li>
		<a class="avatar size-sm" href="#">
			<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
			<span class="sr-only">Cerca</span>
		</a>
	</li>
	<li>
		<div class="avatar avatar-dropdown size-sm">
			<div class="dropdown">
				<a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="sr-only">Visualizza altri 4 utenti</span>
					<span aria-hidden="true">+4</span>
				</a>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<div class="link-list-wrapper">
						<ul class="link-list">
							<li>
								<a class="list-item" href="#">
									<div class="avatar size-sm"><img src="https://randomuser.me/api/portraits/men/46.jpg" alt=""></div>
									<span>Mario Rossi</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar avatar-green size-sm complementary-3-bg">
										<p aria-hidden="true">A</p>
									</div>
									<span>Arianna Gallo</span>
								</a>
							</li>
							<li>
								<div class="list-item">
									<div class="avatar avatar-primary size-sm complementary-3-bg">
										<p aria-hidden="true">S</p>
									</div>
									<span>Sara Ghione</span>
								</div>
							</li>
							<li>
								<div class="list-item">
									<div class="avatar size-sm">
										<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg>
									</div>
									<span>Antonio Esposito</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</li>
</ul>
{% endcapture %}{% include example.html content=example %}

#### Sovrapposto Medio

{% capture example %}
<ul class="avatar-group-stacked">
	<li>
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Arianna Rossi">
		</div>
	</li>
	<li>
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Giulio Neri">
		</div>
	</li>
	<li>
		<div class="avatar avatar-orange size-md">
			<p aria-hidden="true">AM</p>
			<span class="sr-only">Angelica Mola</span>
		</div>
	</li>
	<li>
		<a class="avatar avatar-red size-md" href="#">
			<p aria-hidden="true">SP</p>
			<span class="sr-only">Sandro Penna</span>
		</a>
	</li>
	<li>
		<a class="avatar size-md" href="#">
			<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-search"></use></svg>
			<span class="sr-only">Cerca</span>
		</a>
	</li>
	<li>
		<div class="avatar avatar-dropdown size-md">
			<div class="dropdown">
				<a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="sr-only">Visualizza altri 4 utenti</span>
					<span aria-hidden="true">+4</span>
				</a>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
					<div class="link-list-wrapper">
						<ul class="link-list">
							<li>
								<a class="list-item" href="#">
									<div class="avatar size-md">
										<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="">
									</div>
									<span>Mario Rossi</span>
								</a>
							</li>
							<li>
								<a class="list-item" href="#">
									<div class="avatar avatar-green size-md">
										<p aria-hidden="true">AG</p>
									</div>
									<span>Arianna Gallo</span>
								</a>
							</li>
							<li>
								<div class="list-item">
									<div class="avatar avatar-primary size-md">
										<p aria-hidden="true">SG</p>
									</div>
									<span>Sara Ghione</span>
								</div>
							</li>
							<li>
								<div class="list-item">
									<div class="avatar size-md">
										<svg class="icon icon-secondary"><use xlink:href="/dist/svg/sprite.svg#it-user"></use></svg>
									</div>
									<span>Antonio Esposito</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Comportamento

### Presenza utente

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-5">
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi">
			<div class="avatar-presence active">
				<span class="sr-only">Presenza: attivo</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri">
			<div class="avatar-presence busy">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
				<span class="sr-only">Presenza: non disponibile</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani">
			<div class="avatar-presence hidden">
				<span class="sr-only">Presenza: invisibile</span>
			</div>
		</div>
	</div>
</div>
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar-wrapper">
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
				<span class="sr-only">Presenza: non disponibile</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-lg">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
				<span class="sr-only">Presenza: non disponibile</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
				<span class="sr-only">Presenza: non disponibile</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xxl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-presence busy">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-minus"></use></svg>
				<span class="sr-only">Presenza: non disponibile</span>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

### Status utente

Maecenas tristique accumsan leo, aliquam ullamcorper mi semper at `<ul>` con classe `.thumb-nav-`

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-5">
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi">
			<div class="avatar-status approved">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
				<span class="sr-only">Stato: approvato</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri">
			<div class="avatar-status declined">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
				<span class="sr-only">Stato: respinto</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani">
			<div class="avatar-status notify">
				<span class="sr-only">Testo notifica</span>
			</div>
		</div>
	</div>
</div>
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar-wrapper">
		<div class="avatar size-md">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-status approved">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
				<span class="sr-only">Stato: approvato</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-lg">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-status declined">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
				<span class="sr-only">Stato: respinto</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-status approved">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
				<span class="sr-only">Stato: approvato</span>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<div class="avatar size-xxl">
			<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
			<div class="avatar-status declined">
				<svg class="icon icon-white"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
				<span class="sr-only">Stato: respinto</span>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Avatar con testo aggiuntivo

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
	<div class="avatar-wrapper avatar-extra-text">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="">
		</div>
		<div class="extra-text">
			<h4><a href="#">Mario Rossi</a></h4>
			<time datetime="2018-09-15">15 Set 2018</time>
		</div>
	</div>
	<div class="avatar-wrapper avatar-extra-text">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/women/33.jpg" alt="">
		</div>
		<div class="extra-text">
			<h4>Giulia Neri</h4>
			<p>Lorem ipsum dolor</p>
		</div>
	</div>
	<div class="avatar-wrapper avatar-extra-text">
		<div class="avatar size-xl">
			<img src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
		</div>
		<div class="extra-text">
			<h4><a href="#">Michele Dotti</a></h4>
			<time datetime="2018-05-12">12 Mag 2018</time>
		</div>
	</div>
</div>

{% endcapture %}{% include example.html content=example %}