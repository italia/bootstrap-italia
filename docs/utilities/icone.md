---
layout: docs
group: utilites
toc: true

title: Icone
description: Informazioni e suggerimenti per l'utilizzo di icone con Bootstrap Italia.
---

Le icone di Bootstrap Italia utilizzano uno sprite SVG, che contiene al suo interno tutte le icone, referenziate con un'àncora attraverso il tag `<use>`.

Per l'utilizzo delle icone è necessario aggiungere lo sprite presente nella libreria alla cartella `dist/svg` e utilizzarlo come descritto di seguito, modificandone il path nell'attributo `href`, a seconda di dove viene copiato la sprite SVG nel proprio ambiente.

{% capture callout %}

#### Compatibilità con browser meno recenti

L'attributo `xlink:href` utilizzato nelle precedenti versioni della libreria è stato deprecato dal W3C in favore dell'attributo `href`. I browser meno recenti non supportano quest'ultimo, come indicato su [caniuse.com](https://caniuse.com/mdn-svg_elements_use_href). Per garantire la piena compatibilità con questi browser è consigliabile utilizzare entrambi gli attributi.

Il [primo esempio](#esempi) in pagina utilizza questo approccio.

Approfondisci l'argomento sul sito del W3C [WAI-ARIA Authoring Practices](https://www.w3.org/TR/SVG2/linking.html#XLinkRefAttrs) e su [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use#attributes).
{% endcapture %}{% include callout.html content=callout type="warning" %}

## Esempi

Ogni icona può essere inclusa semplicemente creando un tag `<svg>` con riferimento all'àncora desiderata. In questo primo esempio utilizzeremo sia l'attributo `href` che `xlink:href` per compatibilità con i browser obsoleti:

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-tool" xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-tool"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Dimensioni

Sono disponibili le classi `icon-*`, dove `*` può essere `xs`, `sm`, `lg`, `xl`, per ottenere icone di diverse dimensioni.

{% comment %}Example name: Varianti dimensioni{% endcomment %}
{% capture example %}
<svg class="icon icon-xs"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-lg"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-xl"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

È anche possibile applicare la classe `icon-padded` all'icona per creare uno spazio esterno proporzionale alla dimensione dell'icona attorno ad essa.

{% comment %}Example name: Varianti dimensioni, con padding{% endcomment %}
{% capture example %}
<svg class="icon icon-xs icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-sm icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-lg icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-xl icon-padded"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Colori

{% comment %}Example name: Varianti colori{% endcomment %}
{% capture example %}
<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-secondary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-warning"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-danger"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-inverse"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
<svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
{% endcapture %}{% include example.html content=example %}

### Allineamenti

È possibile usare le classi di allineamento per posizionare le icone all'interno di un elemento.

{% comment %}Example name: Allineamenti{% endcomment %}
{% capture example %}
<div style="line-height: 4em;">
  <svg class="icon align-bottom"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
  <svg class="icon align-middle"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
  <svg class="icon align-top"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista delle icone disponibili

Di seguito sono visualizzate tutte le icone disponibili in Bootstrap Italia.
Tramite la search box è possibile filtrare le icone per nome (in inglese). 
Per copiare il nome di un'icona rapidamente, fare click su di essa.

<hr/>

<div class="mb-4">
  <label for="searchIcon">Filtra le icone</label>
  <input type="text" class="form-control" id="searchIcon">
  <small class="form-text">Esempio: per cercare le icone it-arrow-* occorre digitare "arrow"
</small>
</div>
<div class="notification with-icon success" role="alert" aria-labelledby="copiednot-title" id="copiednot">
  <h2 id="copiednot-title" class="h5 no_toc"><svg class="icon"><use href="/dist/svg/sprites.svg#it-check-circle"></use></svg>Nome dell'icona copiato negli appunti</h2>
</div>

{% comment %}Example name: Icone disponibili{% endcomment %}
{% capture example %}
<div class="row">
  {% for icona in site.data.icons.regular %}
  <div class="container-icon col-12 col-md-6 col-lg-4" id="container-{{icona}}">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> <span>{{icona}}</span>
  </div>{% endfor %}
</div>
<h4 class="icon-divider mt-4">File</h4>
<div class="row">
  {% for icona in site.data.icons.files %}
  <div class="container-icon col-12 col-md-6 col-lg-4" id="container-{{icona}}">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> <span>{{icona}}</span>
  </div>{% endfor %}
</div>
<h4 class="icon-divider mt-4">Piattaforme</h4>
<div class="row">
  {% for icona in site.data.icons.platforms %}
  <div class="container-icon col-12 col-md-6 col-lg-4" id="container-{{icona}}">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> <span>{{icona}}</span>
  </div>{% endfor %}
</div>
<h4 class="icon-divider mt-4">Extra</h4>
<div class="row">
  {% for icona in site.data.icons.extra %}
  <div class="container-icon col-12 col-md-6 col-lg-4" id="container-{{icona}}">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> <span>{{icona}}</span>
  </div>{% endfor %}
</div>
{% endcapture %}{% include example.html content=example %}
<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('#searchIcon');
  const iconContainers = document.querySelectorAll('.container-icon')
  iconContainers.forEach((element) => {
    element.style.cursor = 'pointer';
    element.onclick = () => {
      navigator.clipboard.writeText(element.id.replace('container-', '')).then(() => {
        const copiedNotification = new bootstrap.Notification(
          document.getElementById('copiednot'), {timeout: 2000,}
        )
        copiedNotification.show();
      });
    };
  })
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    iconContainers.forEach((element) => { 
      if(!element.id.replace('container-it-', '').includes(query)) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  })
})
</script>
