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

<script>
	//attiva tooltip
	document.addEventListener("DOMContentLoaded", function() {
		$("#divProgress").circularloader({
			backgroundColor: "#ffffff",//background colour of inner circle
			fontColor: "#000000",//font color of progress text
			fontSize: "40px",//font size of progress text
			radius: 130,//radius of circle
			progressBarBackground: "transparent",//background colour of circular progress Bar
			progressBarColor: "#0073e6",//colour of circular progress bar
			progressBarWidth: 96,//progress bar width
			progressPercent: 75,//progress percentage out of 100
		});

	})

	function changeState(state) {
			$('#uploadChangeStateTarget').removeClass('dragover');
			$('#uploadChangeStateTarget').removeClass('loading');
			$('#uploadChangeStateTarget').removeClass('success');
			$('#uploadChangeStateTarget').addClass(state);
			if (state == "loading") {
				$("#divProgress2").circularloader({
					backgroundColor: "#ffffff",//background colour of inner circle
					fontColor: "#000000",//font color of progress text
					fontSize: "40px",//font size of progress text
					radius: 130,//radius of circle
					progressBarBackground: "transparent",//background colour of circular progress Bar
					progressBarColor: "#0073e6",//colour of circular progress bar
					progressBarWidth: 96,//progress bar width
					progressPercent: 0,//progress percentage out of 100
				});
				setTimeout(function(){
					$("#divProgress2").circularloader({
						progressPercent: 33
					});
				}, 1000);
				setTimeout(function(){
					$("#divProgress2").circularloader({
						progressPercent: 66
					});
				}, 2000);
				setTimeout(function(){
					$("#divProgress2").circularloader({
						progressPercent: 99
					});
				}, 3000);
				setTimeout(function(){
						$('#uploadChangeStateTarget').removeClass('loading');
						$('#uploadChangeStateTarget').addClass('success');
				}, 3500);
			}
		}
</script>

Nulla sodales justo finibus nibh rhoncus varius ut ut diam. Quisque posuere tellus et quam tristique, vitae gravida odio vulputate. Aliquam sit amet velit ac neque iaculis laoreet. Nunc ac nisi consectetur, pharetra ante vitae, vestibulum mi. Etiam lorem nulla, viverra ut maximus non, tincidunt a erat. Aenean at dui purus. Mauris sit amet arcu quis enim rhoncus vulputate in et nisl. In ultricies pharetra scelerisque.

## Button upload with list

### Classic mode

È composto da un tag `<nav>` con classe `.bottom-nav` e contiene un elenco con tanti elementi quanti sono i link richiesti.

{% capture example %}
<form method="post" action="" enctype="multipart/form-data">
	<input type="file" name="upload1" id="upload1" class="upload" multiple="multiple" />
	<label for="upload1">
		<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-upload"></use></svg>
		<span>Upload</span>
	</label>
</form>
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
<form method="post" action="" enctype="multipart/form-data">
	<input type="file" name="upload2" id="upload2" class="upload" multiple="multiple" />
	<label for="upload2">
		<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-upload"></use></svg>
		<span>Upload</span>
	</label>
</form>
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
		<div class="progress progress-image">
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

<div class="container">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p><strong>Dimensione Standard</strong></p>
			<div class="avatar-upload-wrapper">
				<div class="avatar size-xxl avatar-upload">
					<img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Giovanna Ferrero">
					<form class="upload-avatar-container" method="post" action="" enctype="multipart/form-data">
						<input type="file" name="upload3" id="upload3" class="upload-avatar"/>
						<label for="upload3">
							<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-camera"></use></svg>
							<span>Aggiorna<span class="sr-only"> foto dell'Avatar</span></span>
						</label>
					</form>
				</div>
				<div class="avatar-upload-icon">
					<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-camera"></use></svg>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<p><strong>Dimensione Piccola</strong></p>
			<div class="avatar-upload-wrapper size-sm">
				<div class="avatar size-xxl avatar-upload">
					<img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Marisa Rossi">
					<form class="upload-avatar-container" method="post" action="" enctype="multipart/form-data">
						<input type="file" name="upload4" id="upload4" class="upload-avatar"/>
						<label for="upload4">
							<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-camera"></use></svg>
							<span>Aggiorna<span class="sr-only"> foto dell'Avatar</span></span>
						</label>
					</form>
				</div>
				<div class="avatar-upload-icon">
					<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-camera"></use></svg>
				</div>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}

## Pictures wall upload

È composto da un tag `<nav>` con classe `.bottom-nav` e contiene un elenco con tanti elementi quanti sono i link richiesti.

{% capture example %}
<ul class="upload-pictures-wall">
	<li>
		<form method="post" action="" enctype="multipart/form-data">
			<input type="file" name="upload5" id="upload5" class="upload pictures-wall" multiple="multiple" />
			<label for="upload5">
				<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-plus"></use></svg>
				<span>Add photo</span>
			</label>
		</form>
	</li>
</ul>

<p class="mt-5"><strong>Esempio Immagini Caricate</strong></p>

<ul class="upload-pictures-wall">
	<li>
		<div class="upload-image">
			<img src="https://picsum.photos/128/128?image=1020" alt="">
		</div>
	</li>
	<li>
		<div class="upload-image">
			<img src="https://picsum.photos/128/128?image=1038" alt="">
		</div>
	</li>
	<li>
		<form method="post" action="" enctype="multipart/form-data">
			<input type="file" name="upload6" id="upload6" class="upload pictures-wall" multiple="multiple" />
			<label for="upload6">
				<svg class="icon icon-sm" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-plus"></use></svg>
				<span>Add photo</span>
			</label>
		</form>
	</li>
</ul>

{% endcapture %}{% include example.html content=example %}

## Drag and drop upload

È composto da un tag `<nav>` con classe `.bottom-nav` e contiene un elenco con tanti elementi quanti sono i link richiesti.

{% capture example %}
<p><strong>Default</strong></p>

<form class="upload-dragdrop" method="post" action="" enctype="multipart/form-data">
	<div class="upload-dragdrop-image">
		<img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="" aria-hidden="true">
		<div class="upload-dragdrop-loading"></div>
		<div class="upload-dragdrop-success">
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</div>
	</div>
	<div class="upload-dragdrop-text">
		<p class="upload-dragdrop-weight">
			<svg class="icon icon-xs" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
		</p>
		<h5>Trascina il file per caricarlo</h5>
		<p>oppure <input type="file" name="upload7" id="upload7" class="upload-dragdrop-input" /><label for="upload7">selezionalo dal desk</label></p>
	</div>
</form>

<p class="mt-5"><strong>Loading</strong></p>

<form class="upload-dragdrop loading" method="post" action="" enctype="multipart/form-data">
	<div class="upload-dragdrop-image">
		<img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="" aria-hidden="true">
		<div class="upload-dragdrop-loading">
			<div id="divProgress" class="upload-progress"></div>
		</div>
		<div class="upload-dragdrop-success">
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</div>
	</div>
	<div class="upload-dragdrop-text">
		<p class="upload-dragdrop-weight">
			<svg class="icon icon-xs" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
		</p>
		<h5>Nome file in caricamento</h5>
		<p>Caricamento in corso...</p>
	</div>
</form>

<p class="mt-5"><strong>Process completed</strong></p>

<form class="upload-dragdrop success" method="post" action="" enctype="multipart/form-data">
	<div class="upload-dragdrop-image">
		<img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="" aria-hidden="true">
		<div class="upload-dragdrop-loading"></div>
		<div class="upload-dragdrop-success">
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</div>
	</div>
	<div class="upload-dragdrop-text">
		<p class="upload-dragdrop-weight">
			<svg class="icon icon-xs" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
		</p>
		<h5>Nome file caricato</h5>
		<p>Caricamento completato</p>
	</div>
</form>
{% endcapture %}{% include example.html content=example %}

### Animazione esempio

{% capture example %}
<p>
	<button type="button" class="btn btn-primary" onClick="changeState('default')">Default</button>
	<button type="button" class="btn btn-primary" onClick="changeState('dragover')">Drag over</button>
	<button type="button" class="btn btn-primary" onClick="changeState('loading')">Loading</button>
	<button type="button" class="btn btn-primary" onClick="changeState('success')">Success</button>
</p>

<form class="upload-dragdrop" method="post" action="" enctype="multipart/form-data" id="uploadChangeStateTarget">
	<div class="upload-dragdrop-image">
		<img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="" aria-hidden="true">
		<div class="upload-dragdrop-loading">
			<div id="divProgress2" class="upload-progress"></div>
		</div>
		<div class="upload-dragdrop-success">
			<svg class="icon" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-check"></use></svg>
		</div>
	</div>
	<div class="upload-dragdrop-text">
		<p class="upload-dragdrop-weight">
			<svg class="icon icon-xs" aria-hidden="true"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
		</p>
		<h5>Trascina il file per caricarlo</h5>
		<p>oppure <input type="file" name="upload8" id="upload8" class="upload-dragdrop-input" /><label for="upload8">selezionalo dal desk</label></p>
	</div>
</form>
{% endcapture %}{% include example.html content=example %}