---
layout: docs
group: form
toc: true

title: Upload
description: Elementi dei form dedicati al caricamento file
---

<script>
	//attiva tooltip esempio loading
	document.addEventListener("DOMContentLoaded", function() {
		$("#divProgress1").circularloader({
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

	function testAnimation() {
			$("#divProgress2").circularloader({
				backgroundColor: "#ffffff",//background colour of inner circle
				fontColor: "#000000",//font color of progress text
				fontSize: "40px",//font size of progress text
				radius: 130,//radius of circle
				progressBarBackground: "transparent",//background colour of circular progress Bar
				progressBarColor: "#0073e6",//colour of circular progress bar
				progressBarWidth: 96,//progress bar width
				progressPercent: 1,//progress percentage out of 100
			});

			$('#uploadChangeStateTarget').removeClass('success');
			$('#uploadChangeStateTarget').addClass('loading');
			$('#simTitle').text('nome_file.pdf');
			$('#simText').text('Caricamento in corso...');

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
						$('#divProgress2canvas').remove();
						$('#uploadChangeStateTarget').removeClass('loading');
						$('#uploadChangeStateTarget').addClass('success');
						$('#simText').text('Caricamento completato');
				}, 3500);
		}
</script>

Fra i tipi di campo disponibili per la compilazione dei form HTML è disponibile anche il tipo **file**. Questi campi di input consentono l'upload di uno o più file attraverso l'invio del form.

In questa pagina vengono presentate varianti grafiche e funzionali per questo tipo di input.

## Upload con lista di file

All'interno di un `<form>` inserire un campo input di tipo file con classe `.upload`, seguito da una label il cui attributo `for=""` deve corrispondere con il name e l'id del campo input.

I file caricati sono elencati come elementi `<li>` di una lista `<ul>` con classe `.upload-file-list`.

Ogni elemento può avere tre differenti stati e raltive classi:
-  `.loading` per i file in caricamento
-  `.success` per i file caricati correttamente
-  `.error` in caso di errori

{% capture callout %}
##### Accessibilità

Come è evidente dall'esempio sottostante è sempre necessario includere informazioni accessibili relative allo stato quando questo è comunicato solamente attraverso elementi grafici.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<form method="post" action="" enctype="multipart/form-data">
  <input type="file" name="upload1" id="upload1" class="upload" multiple="multiple" />
  <label for="upload1">
    <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-upload"></use></svg>
    <span>Upload</span>
  </label>
  <ul class="upload-file-list">
    <li class="upload-file success">
      <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
      <p>
        <span class="sr-only">File caricato:</span>
        nome-file-01.pdf <span class="upload-file-weight">68 MB</span>
      </p>
      <button disabled>
        <span class="sr-only">Caricamento ultimato</span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
      </button>
    </li>
    <li class="upload-file success">
      <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
      <p>
        <span class="sr-only">File caricato:</span>
        nome-file-02-nome-file-lungo-per-ellissi.doc <span class="upload-file-weight">68 MB</span>
      </p>
      <button disabled>
        <span class="sr-only">Caricamento ultimato</span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
      </button>
    </li>
    <li class="upload-file uploading">
      <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
      <p>
        <span class="sr-only">Caricamento file:</span>
        nome-file-03.png <span class="upload-file-weight"></span>
      </p>
      <button>
        <span class="sr-only">Annulla caricamento file nome-file-03.png</span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </button>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </li>
    <li class="upload-file error">
      <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg>
      <p>
        <span class="sr-only">Errore caricamento file:</span>
        nome-file-04.jpg <span class="upload-file-weight"></span>
      </p>
      <button>
        <span class="sr-only">Elimina file caricato nome-file-04.jpg</span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </button>
    </li>
  </ul>
</form>
{% endcapture %}{% include example.html content=example %}

### Con anteprima delle immagini

Alle icone SVG rappresentative dei file si sostituiscono le thumbnail delle immagini caricate.

Alla lista `<ul>` con classe `.upload-file-list` va aggiunta la classe `.upload-file-list-image`.

Il componente ottimizza la visualizzazione delle immagini anche quando queste non hanno proporzione quadrata, si consiglia comunque di utilizzare immagini dal peso contenuto.

{% capture example %}
<form method="post" action="" enctype="multipart/form-data">
  <input type="file" name="upload2" id="upload2" class="upload" multiple="multiple" />
  <label for="upload2">
    <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-upload"></use></svg>
    <span>Upload</span>
  </label>
  <ul class="upload-file-list upload-file-list-image">
    <li class="upload-file success">
      <div class="upload-image">
        <img src="https://picsum.photos/40/40?image=1055" alt="imagealt">
      </div>
      <p>
        <span class="sr-only">Immagine caricata:</span>
        nome-file-01.jpg <span class="upload-file-weight">68 MB</span>
      </p>
      <button disabled>
        <span class="sr-only">Caricamento ultimato</span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
      </button>
    </li>
    <li class="upload-file success">
      <div class="upload-image">
        <img src="https://picsum.photos/80/40?image=1056" alt="imagealt">
      </div>
      <p>
        <span class="sr-only">Immagine caricata:</span>
        nome-file-02-nome-file-lungo-per-ellissi.jpg <span class="upload-file-weight">68 MB</span>
      </p>
      <button disabled>
        <span class="sr-only">Caricamento ultimato</span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
      </button>
    </li>
    <li class="upload-file uploading">
      <div class="upload-image">
        <img src="https://picsum.photos/40/40?image=1057" alt="imagealt">
      </div>
      <p>
        <span class="sr-only">Caricamento immagine:</span>
        nome-file-03.jpg <span class="upload-file-weight"></span>
      </p>
      <button>
        <span class="sr-only">Annulla caricamento immagine nome-file-03.jpg</span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </button>
      <div class="progress progress-image">
        <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </li>
    <li class="upload-file error">
      <div class="upload-image">
        <img src="https://picsum.photos/120/200?image=1058" alt="imagealt">
      </div>
      <p>
        <span class="sr-only">Errore caricamento immagine:</span>
        nome-file-04.jpg <span class="upload-file-weight"></span>
      </p>
      <button>
        <span class="sr-only">Elimina immagine caricata nome-file-04.jpg </span>
        <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
      </button>
    </li>
  </ul>
</form>
{% endcapture %}{% include example.html content=example %}

## Upload con Avatar

Questo elemento combina la visualizzazione dell'immagine Avatar con l'input tipo file per permettere l'upload di una nuova immagine.

L'Avatar contenuto ha la classe specifica `.avatar-upload` ed è sempre di tipo `.size-xxl`.

È possibile utilizzare due dimensioni: quella piccola si ottiene aggiungendo la classe `.size-sm` al wrapper `<div class="avatar-upload-wrapper">`.

Ci si aspetta venga caricato un solo file (immagine) il form non ha quindi l'attributo `multiple="multiple"`.

**L'elemento ha design e comportamento differenti in versione mobile** si consiglia quindi di ridurre le dimensioni della finestra del browser per testare questa versione.

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 mb-4 mb-md-0">
      <p><strong>Dimensione Standard</strong></p>
      <div class="avatar-upload-wrapper">
        <div class="avatar size-xxl avatar-upload">
          <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="imagealt">
          <form class="upload-avatar-container" method="post" action="" enctype="multipart/form-data">
            <input type="file" name="upload3" id="upload3" class="upload-avatar"/>
            <label for="upload3">
              <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
              <span>Aggiorna<span class="sr-only"> foto dell'Avatar</span></span>
            </label>
            <input value="Submit" type="submit" class="d-none" />
          </form>
        </div>
        <div class="avatar-upload-icon">
          <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p><strong>Dimensione Piccola</strong></p>
      <div class="avatar-upload-wrapper size-sm">
        <div class="avatar size-xxl avatar-upload">
          <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="imagealt">
          <form class="upload-avatar-container" method="post" action="" enctype="multipart/form-data">
            <input type="file" name="upload4" id="upload4" class="upload-avatar"/>
            <label for="upload4">
              <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
              <span>Aggiorna<span class="sr-only"> foto dell'Avatar</span></span>
            </label>
            <input value="Submit" type="submit" class="d-none" />
          </form>
        </div>
        <div class="avatar-upload-icon">
          <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-camera"></use></svg>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Upload Gallery

Per gestire il caricamento di una serie di foto e l'anteprima delle stesse in forma di Gallery con thumbail, includere un input file con classi `.upload` e `.pictures-wall`  come elemento `<li>` di una lista `<ul>` con classe `.upload-file-wall`.

Le immagini caricate andranno aggiunte in testa alla lista `<ul>` come elementi `<li>` con classe `upload-image`.

Anche in questo caso, nonostante il componente ottimizzi la visualizzazione delle immagini quando queste non hanno proporzione quadrata, si consiglia comunque di utilizzare immagini dal peso contenuto.

{% capture example %}
<form method="post" action="" enctype="multipart/form-data">
  <ul class="upload-pictures-wall">
    <li>
      <input type="file" name="upload5" id="upload5" class="upload pictures-wall" multiple="multiple" />
      <label for="upload5">
        <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-plus"></use></svg>
        <span>Add photo</span>
      </label>
    </li>
  </ul>
  <input value="Submit" type="submit" class="d-none" />
</form>

<p class="mt-5"><strong>Esempio Immagini Caricate</strong></p>

<form method="post" action="" enctype="multipart/form-data">
  <ul class="upload-pictures-wall">
    <li>
      <div class="upload-image">
        <img src="https://picsum.photos/128/128?image=1020" alt="imagealt">
      </div>
    </li>
    <li>
      <div class="upload-image">
        <img src="https://picsum.photos/128/128?image=1038" alt="imagealt">
      </div>
    </li>
    <li>
      <input type="file" name="upload6" id="upload6" class="upload pictures-wall" multiple="multiple" />
      <label for="upload6">
        <svg class="icon icon-sm" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-plus"></use></svg>
        <span>Add photo</span>
      </label>
    </li>
  </ul>
  <input value="Submit" type="submit" class="d-none" />
</form>
{% endcapture %}{% include example.html content=example %}

## Upload Drag&drop

Questa versione dell'upload permette all'utente di trascinare sull'icona che la caratterizza un file dal proprio dispositivo.

In questo caso è l'interno form ad avere una classe specifica `upload-dragdrop` alla quale possono essere aggiunte due ulteriori classi per la gestione degli stati:
- `.dragover` quando un file è trascinato sull'icona
- `.loading` quando un file è rilasciato sull'icona
- `.success` quando un file è stato caricato con successo

I primi due stati sono gestiti dal codice JS incluso nello UI-Kit, lo stato di **success** dipende dal caricamento corretto del file sul server e va quindi gestito da chi svilupperà il font/back-end del sito o webapp.

Su questa pagina è presente <a href="#esempio-animato">un'esempio simulato</a> del risultato finale.

Lo stato dell'upload è rappresentato graficamente dall'elemento `<div id="divProgress0" class="upload-progress"></div>` come progress circolare. Si consiglia di attribuire ad ogni `upload-progress` un id univoco per facilitare l'aggiornamento del progresso attraverso il seguente codice JS:

{% highlight js %}
$("#IDPROGRESS").circularloader({
	progressPercent: 33 // percentuale si caricamento
});
{% endhighlight %}

{% capture example %}
<p><strong>Default</strong></p>

<form class="upload-dragdrop" method="post" action="" enctype="multipart/form-data">
  <div class="upload-dragdrop-image">
    <img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="imagealt" aria-hidden="true">
    <div class="upload-dragdrop-loading">
      <div id="divProgress0" class="upload-progress"></div>
    </div>
    <div class="upload-dragdrop-success">
      <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
    </div>
  </div>
  <div class="upload-dragdrop-text">
    <p class="upload-dragdrop-weight">
      <svg class="icon icon-xs" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
    </p>
    <h5>Trascina il file per caricarlo</h5>
    <p>oppure <input type="file" name="upload7" id="upload7" class="upload-dragdrop-input" /><label for="upload7">selezionalo dal dispositivo</label></p>
  </div>
  <input value="Submit" type="submit" class="d-none" />
</form>

<p class="mt-5"><strong>Simula caricamento</strong></p>

<form class="upload-dragdrop loading" method="post" action="" enctype="multipart/form-data">
  <div class="upload-dragdrop-image">
    <img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="imagealt" aria-hidden="true">
    <div class="upload-dragdrop-loading">
      <div id="divProgress1" class="upload-progress"></div>
    </div>
    <div class="upload-dragdrop-success">
      <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
    </div>
  </div>
  <div class="upload-dragdrop-text">
    <p class="upload-dragdrop-weight">
      <svg class="icon icon-xs" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
    </p>
    <h5>Nome file in caricamento</h5>
    <p>Caricamento in corso...</p>
  </div>
  <input value="Submit" type="submit" class="d-none" />
</form>

<p class="mt-5"><strong>Process completed</strong></p>

<form class="upload-dragdrop success" method="post" action="" enctype="multipart/form-data">
  <div class="upload-dragdrop-image">
    <img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="imagealt" aria-hidden="true">
    <div class="upload-dragdrop-loading"></div>
    <div class="upload-dragdrop-success">
      <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
    </div>
  </div>
  <div class="upload-dragdrop-text">
    <p class="upload-dragdrop-weight">
      <svg class="icon icon-xs" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
    </p>
    <h5>Nome file caricato</h5>
    <p>Caricamento completato</p>
  </div>
  <input value="Submit" type="submit" class="d-none" />
</form>
{% endcapture %}{% include example.html content=example %}

### Esempio animato

{% capture example %}
<p><button type="button" class="btn btn-primary" onClick="testAnimation()">Simula Upload</button></p>

<form class="upload-dragdrop" method="post" action="" enctype="multipart/form-data" id="uploadChangeStateTarget">
  <div class="upload-dragdrop-image">
    <img src="{{ site.baseurl }}/dist/assets/upload-drag-drop-icon.svg" alt="imagealt" aria-hidden="true">
    <div class="upload-dragdrop-loading">
      <div id="divProgress2" class="upload-progress"></div>
    </div>
    <div class="upload-dragdrop-success">
      <svg class="icon" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
    </div>
  </div>
  <div class="upload-dragdrop-text">
    <p class="upload-dragdrop-weight">
      <svg class="icon icon-xs" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-file"></use></svg> PDF (3.7MB)
    </p>
    <h5 id="simTitle">Trascina il file per caricarlo</h5>
    <p id="simText">oppure <input type="file" name="upload8" id="upload8" class="upload-dragdrop-input" /><label for="upload8">selezionalo dal dispositivo</label></p>
  </div>
  <input value="Submit" type="submit" class="d-none" />
</form>
{% endcapture %}{% include example.html content=example %}
