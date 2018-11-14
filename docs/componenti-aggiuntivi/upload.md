---
layout: docs
title: Upload
description: Mauris sit amet arcu quis enim rhoncus vulputate in et nisl
group: componenti-aggiuntivi
toc: true
---

<style>
  /* Style override for Documentation purposes */

</style>

Nulla sodales justo finibus nibh rhoncus varius ut ut diam. Quisque posuere tellus et quam tristique, vitae gravida odio vulputate. Aliquam sit amet velit ac neque iaculis laoreet. Nunc ac nisi consectetur, pharetra ante vitae, vestibulum mi. Etiam lorem nulla, viverra ut maximus non, tincidunt a erat. Aenean at dui purus. Mauris sit amet arcu quis enim rhoncus vulputate in et nisl. In ultricies pharetra scelerisque.

## Button upload with list

### Classic mode

È composto da un tag `<nav>` con classe `.bottom-nav` e contiene un elenco con tanti elementi quanti sono i link richiesti.

{% capture example %}
<input type="file" name="upload11" id="upload1" class="upload" multiple="multiple" />
<label for="upload1">
	<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-upload"></use></svg>
	<span>Upload</span>
</label>
<ul class="upload-file-list">
	<li class="upload-file success">
		<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg>
		<p>
			<span class="sr-only">File caricato:</span>
			nome-file-01.pdf <span class="upload-file-weight">68 MB</span>
		</p>
		<button disabled>
			<span class="sr-only">Caricamento ultimato</span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</button>
	</li>
	<li class="upload-file success">
		<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg>
		<p>
			<span class="sr-only">File caricato:</span>
			nome-file-02-nome-file-lungo-per-ellissi.doc <span class="upload-file-weight">68 MB</span>
		</p>
		<button disabled>
			<span class="sr-only">Caricamento ultimato</span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</button>
	</li>
	<li class="upload-file uploading">
		<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg>
		<p>
			<span class="sr-only">Caricamento file:</span>
			nome-file-03.png <span class="upload-file-weight"></span>
		</p>
		<button>
			<span class="sr-only">Annulla caricamento file nome-file-03.png</span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
		</button>
		<div class="progress">
			<div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
		</div>
	</li>
	<li class="upload-file error">
		<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg>
		<p>
			<span class="sr-only">Errore caricamento file:</span>
			nome-file-04.jpg <span class="upload-file-weight"></span>
		</p>
		<button>
			<span class="sr-only">Elimina file caricato nome-file-04.jpg</span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
		</button>
	</li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Pictures with list style

È composto da un tag `<nav>` con classe `.bottom-nav` e contiene un elenco con tanti elementi quanti sono i link richiesti.

{% capture example %}
<input type="file" name="upload2" id="upload2" class="upload" multiple="multiple" />
<label for="upload2">
	<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-upload"></use></svg>
	<span>Upload</span>
</label>
<ul class="upload-file-list upload-file-list-image">
	<li class="upload-file success">
		<div class="upload-image">
			<img src="https://picsum.photos/40/40?image=1055" alt="">
		</div>
		<p>
			<span class="sr-only">Immagine caricata:</span>
			nome-file-01.jpg <span class="upload-file-weight">68 MB</span>
		</p>
		<button disabled>
			<span class="sr-only">Caricamento ultimato</span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</button>
	</li>
	<li class="upload-file success">
		<div class="upload-image">
			<img src="https://picsum.photos/80/40?image=1056" alt="">
		</div>
		<p>
			<span class="sr-only">Immagine caricata:</span>
			nome-file-02-nome-file-lungo-per-ellissi.jpg <span class="upload-file-weight">68 MB</span>
		</p>
		<button disabled>
			<span class="sr-only">Caricamento ultimato</span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</button>
	</li>
	<li class="upload-file uploading">
		<div class="upload-image">
			<img src="https://picsum.photos/40/40?image=1057" alt="">
		</div>
		<p>
			<span class="sr-only">Caricamento immagine:</span>
			nome-file-03.jpg <span class="upload-file-weight"></span>
		</p>
		<button>
			<span class="sr-only">Annulla caricamento immagine nome-file-03.jpg</span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
		</button>
		<div class="progress">
			<div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
		</div>
	</li>
	<li class="upload-file error">
		<div class="upload-image">
			<img src="https://picsum.photos/120/200?image=1058" alt="">
		</div>
		<p>
			<span class="sr-only">Errore caricamento immagine:</span>
			nome-file-04.jpg <span class="upload-file-weight"></span>
		</p>
		<button>
			<span class="sr-only">Elimina immagine caricata nome-file-04.jpg </span>
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-close"></use></svg>
		</button>
	</li>
</ul>
{% endcapture %}{% include example.html content=example %}

## Avatar Upload

È composto da un tag `<nav>` con classe `.bottom-nav` e contiene un elenco con tanti elementi quanti sono i link richiesti.

{% capture example %}
<div class="avatar size-xxl avatar-upload">
	<img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Giovanna Ferrero">
	<div class="upload-avatar-wrapper">
		<input type="file" name="upload3" id="upload3" class="upload-avatar"/>
		<label for="upload3">
			<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-camera"></use></svg>
			<span>Aggiorna<span class="sr-only"> foto dell'Avatar</span></span>
		</label>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}