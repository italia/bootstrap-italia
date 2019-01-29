---
layout: docs
group: componenti
toc: true
title: Avatar
description: Rappresentazione grafica di un'immagine utente
---

<script>
	//attiva tooltip
	document.addEventListener("DOMContentLoaded", function() {
		$('[data-toggle="tooltip"]').tooltip()
	})
</script>

L'elemento Avatar è la rappresentazione grafica di un utente e può includere un'immagine, un testo, un'icona o un dropdown con ulteriori contenuti.

Gli Avatar sono disponibili in sei diverse dimensioni:
- **xs** con classe `size-xs`
- **sm** con classe `size-sm`
- **md** (dimensioni di default) `size-md`
- **lg** con classe `size-lg`
- **xl** con classe `size-xl`
- **xxl** con classe `size-xxl`

Per ottenere un elemento grafico non interattivo, utilizzare il tag `<div>`.
Ogni Avatar può essere associato ad un'azione, utilizzando per esso il tag `<a>`.

{% capture callout %}
##### Accessibilità delle immagini

Per ragioni di accessibilità è importante indicare all'interno dell'Avatar il nome dell'utente associato allo stesso.

Nel caso di Avatar con immagine è consigliabile utilizzare l'attributo `alt=""` della stessa.

Un Avatar con testo conterrà uno `<span>` per soli screen reader con il nome dell'utente indicato per esteso: `<span class="sr-only">Nome Utente</span>`.

Per gli Avatar con icona inserire un testo alternativo: `<span class="sr-only">Testo icona</span>`
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Avatar con immagine

L'Avatar ridimensiona automaticamente l'immagine adattandola al formato circolare e centrandola. Si consiglia in ogni caso di utilizzare immagini delle dimensioni corrette.

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
  <div class="avatar size-xs">
    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
  </div>
  <div class="avatar size-sm">
    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri">
  </div>
  <div class="avatar">
    <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Gioacchino Romani">
  </div>
  <div class="avatar size-lg">
    <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
  </div>
  <div class="avatar size-xl">
    <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Carlo Poli">
  </div>
  <div class="avatar size-xxl">
    <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="Giovanna Ferrero">
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

## Avatar con testo

La versione con testo contiene le iniziali dell'utente (una sola nel caso delle dimensioni xs ed sm).
Oltre ai colori di default è possibile utilizzare uno sfondo a scelta fra:
- Primario: aggiungendo la classe `avatar-primary`
- Secondario: aggiungendo la classe `avatar-secondary`
- Verde: aggiungendo la classe `avatar-green`
- Arancione: aggiungendo la classe `avatar-orange`
- Rosso: aggiungendo la classe `avatar-red`

In questi casi il testo sarà di colore bianco.

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
  <div class="avatar size-xs">
    <p aria-hidden="true">M</p>
    <span class="sr-only">Mario Rossi</span>
  </div>
  <div class="avatar avatar-primary size-sm">
    <p aria-hidden="true">M</p>
    <span class="sr-only">Mario Rossi</span>
  </div>
  <div class="avatar avatar-secondary">
    <p aria-hidden="true">MR</p>
    <span class="sr-only">Mario Rossi</span>
  </div>
  <div class="avatar avatar-green size-lg">
    <p aria-hidden="true">MR</p>
    <span class="sr-only">Mario Rossi</span>
  </div>
  <div class="avatar avatar-orange size-xl">
    <p aria-hidden="true">MR</p>
    <span class="sr-only">Mario Rossi</span>
  </div>
  <div class="avatar avatar-red size-xxl">
    <p aria-hidden="true">MR</p>
    <span class="sr-only">Mario Rossi</span>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Avatar con icona

Per utilizzare un'icona all'interno degli Avatar è sufficiente includere il codice dell'icona prescelta dalla [libreria icone]({{ site.baseurl }}/docs/utilities/icone/) e indicarne il colore con una delle classi disponibili.

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
  <div class="avatar size-xs">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </div>
  <div class="avatar size-sm">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </div>
  <div class="avatar">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </div>
  <div class="avatar size-lg">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </div>
  <div class="avatar size-xl">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </div>
  <div class="avatar size-xxl">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Avatar Link

Per associare un Avatar ad un'azione o un link, utilizzare il tag `<a>` con relativo link o chiamata Javascript.

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
  <a class="avatar size-xl" href="#">
    <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
  </a>
  <a class="avatar avatar-red size-xl" href="#">
    <p aria-hidden="true">MR</p>
    <span class="sr-only">Mario Rossi</span>
  </a>
  <a class="avatar size-xl" href="#">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}

### Avatar Link con Tooltip

E' possibile associare un Tooltip con maggiori informazioni relative all'utente o all'azione associata utilizzando i <a href="{{ site.baseurl }}/docs/componenti/tooltip/">Tooltip di Bootstrap</a>.

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap">
  <a class="avatar size-xl" href="#" data-toggle="tooltip" data-html="true" data-placement="left" title="<strong>Anna Barbieri</strong><br/><em>Amministratore</em>">
    <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
  </a>
  <a class="avatar avatar-red size-xl" href="#" data-toggle="tooltip" data-html="true" data-placement="top" title="<strong>Mario Rossi</strong><br/><em>Editor</em>">
    <p aria-hidden="true">MR</p>
    <span class="sr-only">Mario Rossi</span>
  </a>
  <a class="avatar size-xl" href="#" data-toggle="tooltip" data-html="true" data-placement="right" title="<strong>Cerca</strong><br/><em>Archivio notizie</em>">
    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
    <span class="sr-only">Cerca</span>
  </a>
</div>
{% endcapture %}{% include example.html content=example %}

## Gruppi di Avatar

Gli Avatar possono essere raggruppati in liste verticali ed orizzontali.

### Lista

Utilizzando un componente <a href="{{ site.baseurl }}/docs/organizzare-i-contenuti/liste-di-link/">Link list</a> con l'aggiunta della classe `.avatar-group` si ottiene una lista verticale con Avatar affiancati da link e testi.

#### Lista piccola

Lista verticale di Avatar di dimensione piccola con classe `.size-sm`.

{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list avatar-group">
    <li>
      <a class="list-item" href="#">
        <div class="avatar size-sm"><img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi">
        </div>
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
          <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-user"></use></svg>
        </div>
        <span>Antonio Esposito</span>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### Lista media

Lista verticale di Avatar di dimensione media con classe `.size-md`.

{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list avatar-group">
    <li>
      <a class="list-item" href="#">
        <div class="avatar size-md"><img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
        </div>
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
          <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-user"></use></svg>
        </div>
        <span>Antonio Esposito</span>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Avatar Sovrapposti

Racchiudendo una serie di Avatar in una lista di tipo `<ul>` con classe `.avatar-group-stacked` questi verranno visualizzati come una lista orizzontale in cui i singoli elementi sono parzialmente sovrapposti. In questo tipo di gruppo è possibile inserire dei <a href="/docs/componenti/dropdown/">Dropdown</a> per racchiudere ulteriori elementi Avatar.

#### Avatar Sovrapposti Piccoli

Gruppo di Avatar sovrapposti di dimensione piccola con classe `.size-sm`.

{% capture example %}
<ul class="avatar-group-stacked">
  <li>
    <a class="avatar size-sm" href="#">
      <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Arianna Rossi">
    </a>
  </li>
  <li>
    <a class="avatar size-sm" href="#">
      <img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Giulio Neri">
    </a>
  </li>
  <li>
    <a class="avatar avatar-primary size-sm" href="#">
      <p aria-hidden="true">A</p>
      <span class="sr-only">Andrea Gallo</span>
    </a>
  </li>
  <li>
    <a class="avatar avatar-secondary size-sm" href="#">
      <p aria-hidden="true">S</p>
      <span class="sr-only">Sara Ghione</span>
    </a>
  </li>
  <li>
    <a class="avatar avatar-green size-sm" href="#">
      <p aria-hidden="true">T</p>
      <span class="sr-only">Tommaso Sordi</span>
    </a>
  </li>
  <li>
    <a class="avatar avatar-orange size-sm" href="#">
      <p aria-hidden="true">B</p>
      <span class="sr-only">Barbara Tosi</span>
    </a>
  </li>
  <li>
    <a class="avatar avatar-red size-sm" href="#">
      <p aria-hidden="true">R</p>
      <span class="sr-only">Roberto Milano</span>
    </a>
  </li>
  <li>
    <a class="avatar size-sm" href="#">
      <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
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
                  <div class="avatar size-sm"><img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi"></div>
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
                    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-user"></use></svg>
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

#### Avatar Sovrapposti Medi

Gruppo di Avatar sovrapposti di dimensione media con classe `.size-md`.

{% capture example %}
<ul class="avatar-group-stacked">
  <li>
    <a class="avatar size-md" href="#">
      <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Arianna Rossi">
    </a>
  </li>
  <li>
    <a class="avatar size-md" href="#">
      <img src="https://randomuser.me/api/portraits/men/13.jpg" alt="Giulio Neri">
    </a>
  </li>
  <li>
    <a class="avatar avatar-orange size-md" href="#">
      <p aria-hidden="true">AM</p>
      <span class="sr-only">Angelica Mola</span>
    </a>
  </li>
  <li>
    <a class="avatar avatar-red size-md" href="#">
      <p aria-hidden="true">SP</p>
      <span class="sr-only">Sandro Penna</span>
    </a>
  </li>
  <li>
    <a class="avatar size-md" href="#">
      <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-search"></use></svg>
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
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi">
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
                    <svg class="icon icon-secondary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-user"></use></svg>
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

Inserendo un `<div>` con classe `.avatar-presence` all'interno dell'Avatar si otterrà un indicatore dello stato di presenza dell'utente:
- lo stato **attivo** si ottiene aggiungendo la classe `.active`
- lo stato **non disponibile** si ottiene aggiungendo la classe `.busy`
- lo stato **invisibile** si ottiene aggiungendo la classe `.hidden`

Inserire un `<span>` riservato agli screen reader con indicazione della presenza dell'utente: `<span class="sr-only">Presenza: (stato presenza)</span>`.

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
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-minus"></use></svg>
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
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-minus"></use></svg>
        <span class="sr-only">Presenza: non disponibile</span>
      </div>
    </div>
  </div>
  <div class="avatar-wrapper">
    <div class="avatar size-lg">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
      <div class="avatar-presence busy">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-minus"></use></svg>
        <span class="sr-only">Presenza: non disponibile</span>
      </div>
    </div>
  </div>
  <div class="avatar-wrapper">
    <div class="avatar size-xl">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
      <div class="avatar-presence busy">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-minus"></use></svg>
        <span class="sr-only">Presenza: non disponibile</span>
      </div>
    </div>
  </div>
  <div class="avatar-wrapper">
    <div class="avatar size-xxl">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
      <div class="avatar-presence busy">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-minus"></use></svg>
        <span class="sr-only">Presenza: non disponibile</span>
      </div>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}

### Status utente

Inserendo un `<div>` con classe `.avatar-status` all'interno dell'Avatar si otterrà un indicatore dello stato dell'account utente:
- lo stato **approvato** si ottiene aggiungendo la classe `.approved`
- lo stato **respinto** si ottiene aggiungendo la classe `.declined`
- lo stato **notifica** si ottiene aggiungendo la classe `.notify`

{% capture callout %}
##### Accessibilità dello stato

Inserire un `<span>` riservato agli screen reader con indicazione dello stato dell'utenza: `<span class="sr-only">Stato: (stato utenza)</span>`
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-5">
  <div class="avatar-wrapper">
    <div class="avatar size-xl">
      <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi">
      <div class="avatar-status approved">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
        <span class="sr-only">Stato: approvato</span>
      </div>
    </div>
  </div>
  <div class="avatar-wrapper">
    <div class="avatar size-xl">
      <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri">
      <div class="avatar-status declined">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
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
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
        <span class="sr-only">Stato: approvato</span>
      </div>
    </div>
  </div>
  <div class="avatar-wrapper">
    <div class="avatar size-lg">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
      <div class="avatar-status declined">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Stato: respinto</span>
      </div>
    </div>
  </div>
  <div class="avatar-wrapper">
    <div class="avatar size-xl">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
      <div class="avatar-status approved">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
        <span class="sr-only">Stato: approvato</span>
      </div>
    </div>
  </div>
  <div class="avatar-wrapper">
    <div class="avatar size-xxl">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli">
      <div class="avatar-status declined">
        <svg class="icon icon-white"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>
        <span class="sr-only">Stato: respinto</span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Avatar con testo aggiuntivo

Per ottenere una versione più completa dell'Avatar con nome esteso ed eventuale testo accessorio racchiudere l'Avatar all'interno di un contenitore `.avatar-wrapper` con classe `.avatar-extra-text` e aggiungere il testo esteso in un `<div>` con classe `.extra-text`. 

Per il nome è possibile utilizzare i tag `<h3>` o `<h4>`. Il testo esteso può essere contenuto in un `<p>` o in un tag `<time>` nel caso di date/orari.

{% capture example %}
<div class="d-flex align-items-center justify-content-start justify-content-md-around flex-wrap flex-sm-nowrap">
  <div class="avatar-wrapper avatar-extra-text">
    <div class="avatar size-xl">
      <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Mario Rossi">
    </div>
    <div class="extra-text">
      <h4><a href="#">Mario Rossi</a></h4>
      <time datetime="2018-09-15">15 Set 2018</time>
    </div>
  </div>
  <div class="avatar-wrapper avatar-extra-text">
    <div class="avatar size-xl">
      <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Giulia Neri">
    </div>
    <div class="extra-text">
      <h4>Giulia Neri</h4>
      <p>Lorem ipsum dolor</p>
    </div>
  </div>
  <div class="avatar-wrapper avatar-extra-text">
    <div class="avatar size-xl">
      <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Michele Dotti">
    </div>
    <div class="extra-text">
      <h4><a href="#">Michele Dotti</a></h4>
      <time datetime="2018-05-12">12 Mag 2018</time>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}
