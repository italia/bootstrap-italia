---
layout: docs
title: Card
description: Un contenitore di contenuti con molte opzioni e varianti.
group: componenti
toc: true
---

## Panoramica

Le **card** sono contenitori flessibili ed estendibili. Costruiti con flexbox, offrono un facile posizionamento nella griglia e si combinano bene con altri componenti. Si possono personalizzare con intestazioni e piè di pagina, contenere altri componenti e contenuti, avere colori di sfondo contestuali e varie opzioni di visualizzazione. 

Non hanno `margin` di default, se ne avrai bisogno usa le [utilità di spaziatura]({{ site.baseurl }}/docs/utilities/spacing/).

Di default le card si estendono completamente al 100% del loro elemento contenitore. Se vuoi cambiarne la larghezza puoi incorporarle in delle [griglie]({{ site.baseurl }}/docs/utilities/griglie/), usare le [utilitià di dimensionamento]({{ site.baseurl }}/docs/utilities/dimensionamento/), o un CSS personalizzato (es.: `style="width: 18rem;"`).

Puoi allineare tutto il contenuto di una card usando una delle classi delle [utilità di allineamento]({{ site.baseurl }}/docs/utilities/testo/#allineamento-del-testo) direttamente sul contenitore `.card`.

Le card possono essere personalizzate nel colore del testo e di sfondo con le [utilità di colore]({{ site.baseurl }}/docs/utilities/colori/) e nelle bordature con le relative [utilità per i bordi]({{ site.baseurl }}/docs/utilities/bordi/). 

{% include callout-warning-color-assistive-technologies.md %}

{% capture example %}
<div class="card w-50">
  <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Immagine testata Card">
  <div class="card-body">
    <h4 class="card-title">Titolo esempio Card</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#" class="btn btn-primary">Vai avanti</a>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Struttura

Le card supportano un'ampia varietà di contenuti come immagini, testo, gruppi di elenchi, link e altro ancora. 

### Body

Per il blocco principale di contenuto l'elemento di riferimento è contrassegnato dalla classe `.card-body`.

{% capture example %}
<div class="card">
  <div class="card-body">
    Questo è un testo all'interno del corpo di una "card-body".
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Titoli, testo e link

All'interno del `.card-body` puoi inserire un titolo aggiungendo `.card-title` a un tag `<h*>`. Per un eventuale sottotitolo puoi aggiungere `.card-subtitle` a un tag `<h*>` successivo.

Per il testo è prevista la classe `.card-text` da aggiungere a un tag `<p>` oppure abbinarlo ad un altro tag HTML standard.

Allo stesso modo con la classe `.card-link` sui tag `<a>`per avere i link posizionati uno accanto all'altro.

{% capture example %}
<div class="card w-50">
  <div class="card-body">
    <h4 class="card-title">Titolo card</h4>
    <h5 class="card-subtitle mb-2 text-muted">Sottotitolo card</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Altro link</a>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Immagini

Puoi inserire delle immagini all'interno delle card: in alto, in basso, incorporato nel contenuto oppure come sfondo. Con `.card-img-top` inserito prima del `.card-body` posiziona l'immagine nella parte superiore della card. Se invece vuoi che sia posizionata in fondo l'immagine dovrà avere la classe `.card-img-bottom` e inserita dopo il body.

{% capture example %}
<div class="card w-50">
  <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
  <div class="card-body">
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Per utilizzare l'immagine come sfondo della card questa dovrà avere la classe `.card-img` mentre al posto del `.card-body` dovrà esserci `.card-img-overlay`. Così facendo il contenuto si sovrapporrà all'immagine. Fate attenzione al contrasto tra sfondo e colore del testo affinchè risulti il contenuto leggibile ai fini dell'accessibilità.

{% capture example %}
<div class="card">
  <img class="card-img" data-src="holder.js/100px270/?text=Immagine" alt="Card image">
  <div class="card-img-overlay">
    <h5 class="card-title">Titolo card</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="card-text">Ultimo aggiornamento 3 minuti fa</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Testata e piè di pagina

Puoi aggiungere opzionalmente una testata `.card-header` e un piè di pagina `.card-footer` alla card.

{% capture example %}
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Titolo card</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    <a href="#" class="btn btn-primary">Vai avanti</a>
  </div>
  <div class="card-footer text-center text-muted">
    2 giorni fa
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Esempi componenti

### Gruppo di elenchi

Puoi avere un elenco al posto o in aggiunta a `.card-body` inserendo il [componente elenco]({{ site.baseurl }}/docs/componenti/elenchi/).

{% capture example %}
<div class="card w-50">
  <div class="card-body">
    <h4 class="card-title">Titolo card</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Barra di navigazione

Aggiungi nella testata (o all'interno) della card una [barra di navigazione]({{ site.baseurl }}/docs/componenti/navigazione/).

{% capture example %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Attivo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabilitato</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Titolo card</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#" class="btn btn-primary">Vai avanti</a>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture example %}
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Attivo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabilitato</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Titolo card</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    <a href="#" class="btn btn-primary">Vai avanti</a>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Card layout

Oltre alla personalizzazione grafica del contenuto, ci sono anche altre opzioni per sistemare le card. Per il momento **queste opzioni di layout non sono ancora responsive**.

### Gruppo di card

Usa i gruppi di card per dare l'idea di un singolo elemento collegato con colonne di larghezza e altezza uguali. I gruppi di card usano `display: flex;` per ottenere il loro dimensionamento uniforme.

{% capture example %}
<div class="card-group">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Quando si utilizzano gruppi di card con piè di pagina, il loro contenuto si allinea automaticamente.

{% capture example %}
<div class="card-group">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultimo aggiornamento 3 minuti fa</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultimo aggiornamento 3 minuti fa</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultimo aggiornamento 3 minuti fa</small>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Set di card

Per usare un gruppo di card uguali per larghezza e altezza, ma che non siano attaccate si applica la classe `card-deck` al contenitore padre.

{% capture example %}
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px200/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">This is a longer card Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px200/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px200/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Come con i gruppi di card anche in questo caso si allineano automaticamente.

{% capture example %}
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultimo aggiornamento 3 minuti fa</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultimo aggiornamento 3 minuti fa</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px180/?text=Immagine" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultimo aggiornamento 3 minuti fa</small>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Colonne di card

Le card possono essere organizzate in colonne simili a [Masonry](https://masonry.desandro.com/) con la classe `.card-columns`. Le card sono costruite con proprietà CSS `column` invece che con flexbox per un allineamento più semplice. Le card sono ordinate da cima a fondo e da sinistra a destra.

**Nota** L'altezza delle colonne con card può variare. Per evitare che le card spezzino le colonne  dobbiamo impostarle su `display: inline-block;` come `column-break-inside: avoid;`: non è ancora una soluzione a prova di proiettile.

{% capture example %}
<div class="card-columns">
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px160/" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card molto lunga</h5>
      <p class="card-text">This is a longer card Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img class="card-img-top" data-src="holder.js/100px160/" alt="Card Immagine">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
  <div class="card bg-dark text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class="blockquote-footer">
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img" data-src="holder.js/100px260/" alt="Card image">
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Titolo card</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="card-text"><small class="text-muted">Ultimo aggiornamento 3 minuti fa</small></p>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Le colonne di card possono anche essere estese e personalizzate con un codice aggiuntivo. Di seguito viene mostrata un'estensione della classe `.card-columns` che utilizza lo stesso CSS che usiamo —CSS columns— per generare un insieme di livelli responsive per la modifica del numero di colonne.

{% highlight scss %}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
{% endhighlight %}
