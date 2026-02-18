---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Tipografia
description: Documentazione sulla gestione della tipografia, come intestazioni, paragrafi, citazioni, elenchi e altro.
---

Bootstrap imposta alcune proprietà di base per la tipografia e gli stili dei
link. Quando è necessario un maggiore controllo, fornisce delle
[classi di utilità testuali]({{ site.baseurl }}/docs/organizzare-i-contenuti/testo/).

{% capture callout %}
Le scelte tipografiche di Bootstrap Italia seguono le indicazioni del [Design system .italia](https://designers.italia.it/design-system/fondamenti/tipografia/). Per approfondimenti su gerarchia visiva, spaziature e uso dei caratteri, consulta la documentazione ufficiale.
{% endcapture %}{% include callout.html content=callout type="info" %}

## Famiglie di caratteri

Bootstrap Italia include tre famiglie di caratteri tipografici per garantire leggibilità e coerenza visiva:
- **Titillium** (Web o Sans Pro): font principale sans-serif per interfacce e testi brevi
- **Lora**: font serif per contenuti editoriali e testi lunghi
- **Roboto Mono**: font monospace per codice, dati tabulari e numeri

{% capture callout %}
Per informazioni su come caricare i font (via JavaScript, CSS o bundle) e scegliere tra le varianti Titillium Web e Titillium Sans Pro, consulta la [**pagina dedicata Font**]({{ site.baseurl }}/docs/come-iniziare/font/).
{% endcapture %}{% include callout.html content=callout type="info" %}

### Titillium (font principale)

Bootstrap Italia supporta due varianti del carattere Titillium:
- **Titillium Web** (default): versione originale e carattere di riferimento del Design system .italia
- **Titillium Sans Pro**: evoluzione con supporto linguistico esteso e simboli matematici.

Nella documentazione puoi esplorare la resa delle due versioni usando il selettore "Font principale" nella barra laterale.

Il font Titillium è utilizzato di default, per cui di norma non è necessario applicarlo esplicitamente. In caso si renda necessario è possibile utilizzare la classe `.font-sans-serif`.

{% comment %}Example name: Titillium Web{% endcomment %}
{% capture example %}
<p class="font-sans-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p class="font-sans-serif">abcdefghijklmnopqrstuvwxyz</p>
<p class="font-sans-serif">0123456789</p>
{% endcapture %}{% include example.html content=example %}

### Lora (font serif)

Lora è un carattere serif progettato espressamente per la lettura su display, particolarmente adatto per testi lunghi e contenuti editoriali. Può essere utilizzato applicando la classe `.font-serif`.

{% comment %}Example name: Lora{% endcomment %}
{% capture example %}
<p class="font-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p class="font-serif">abcdefghijklmnopqrstuvwxyz</p>
<p class="font-serif">0123456789</p>
{% endcapture %}{% include example.html content=example %}

### Roboto Mono (font monospace)

Roboto Mono è una famiglia di caratteri monospace adatta alla rappresentazione di codice, numeri, calcoli matematici e dati tabulari. Per utilizzarlo, è sufficiente usare la classe `.font-monospace`.

{% comment %}Example name: Roboto Mono{% endcomment %}
{% capture example %}
<p class="font-monospace">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p class="font-monospace">abcdefghijklmnopqrstuvwxyz</p>
<p class="font-monospace">0123456789</p>
{% endcapture %}{% include example.html content=example %}

## Tipografia responsive

Bootstrap Italia ridimensiona la dimensione di intestazioni e testo modificando
le proprietà `font-size` e `line-height` dell'elemento tramite una media query che imposta dimensioni
lievemente maggiori per schermi con dimensioni maggiori di _576px_. Questa
impostazione, unita all'utilizzo di dimensioni in `rem` o in semplici valori
numerici all'interno del CSS, fa sì che testo e altre proprietà occupino più
spazio quando lo schermo lo permette.

## Intestazioni

Tutte le intestazioni HTML, da `<h1>` fino a `<h6>`, sono disponibili, anche se
è buona norma non utilizzare più di 4 livelli di intestazione.

L'interlinea è impostata con il rapporto di  `1.2`.

{% comment %}Example name: Intestazioni{% endcomment %}
{% capture example %}
<h1 class="no_toc">Intestazione di tipo h1</h1>
<h2 class="no_toc">Intestazione di tipo h2</h2>
<h3 class="no_toc">Intestazione di tipo h3</h3>
<h4 class="no_toc">Intestazione di tipo h4</h4>
<h5 class="no_toc">Intestazione di tipo h5</h5>
<h6 class="no_toc">Intestazione di tipo h6</h6>
{% endcapture %}{% include example.html content=example %}

Nel caso in cui si voglia presentare il testo nello stesso stile delle
intestazioni, ma non sia possibile utilizzare l'elemento HTML appropriato,
sono disponibili anche classi di tipo `.h1`, `.h2`, ecc.

{% comment %}Example name: Stili intestazioni{% endcomment %}
{% capture example %}
<p class="h1">Testo con classe .h1</p>
<p class="h2">Testo con classe .h2</p>
<p class="h3">Testo con classe .h3</p>
<p class="h4">Testo con classe .h4</p>
<p class="h5">Testo con classe .h5</p>
<p class="h6">Testo con classe .h6</p>
{% endcapture %}{% include example.html content=example %}

Queste le dimensioni nel dettaglio, espresse in pixel con il relativo peso (font-weight) e interlinea (line-height):

<table class="mb-5">
  <thead>
    <tr>
      <th>Intestazione</th>
      <th>Mobile</th>
      <th>Schermo > 576px</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p class="h1 mb-0">h1</p>
      </td>
      <td>40px (2.5rem)</td>
      <td>48px (3rem)</td>
    </tr>
    <tr>
      <td>
        <p class="h2 mb-0">h2</p>
      </td>
      <td>32px (2rem)</td>
      <td>40px (2.5rem)</td>
    </tr>
    <tr>
      <td>
        <p class="h3 mb-0">h3</p>
      </td>
      <td>28px (1.75rem)</td>
      <td>32px (2rem)</td>
    </tr>
    <tr>
      <td>
        <p class="h4 mb-0">h4</p>
      </td>
      <td>24px (1.5rem)</td>
      <td>28px (1.75rem)</td>
    </tr>
    <tr>
      <td>
        <p class="h5 mb-0">h5</p>
      </td>
      <td>20px (1.25rem)</td>
      <td>24px (1.5rem)</td>
    </tr>
    <tr>
      <td>
        <p class="h6 mb-0">h6</p>
      </td>
      <td>16px (1rem)</td>
      <td>18px (1.125rem)</td>
    </tr>
  </tbody>
</table>

### Intestazione in evidenza

Gli elementi di intestazione tradizionali sono progettati per funzionare al
meglio nel contesto della pagina. Nel caso sia necessario mettere in ulteriore
evidenza un'intestazione di tipo `<h1>`, si può prendere in considerazione l'uso
della classe `.display-1`, che restituirà una dimensione sensibilmente più
grande.

{% comment %}Example name: Intestazione h1 in evidenza{% endcomment %}
{% capture example %}
<h1 class="no_toc display-1">Intestazione di tipo h1 in evidenza</h1>
{% endcapture %}{% include example.html content=example %}

<!-- ### Personalizzazione delle intestazioni

È possibile utilizzare le classi di utilità incluse in Bootstrap per
dare uno stile diverso per testi di intestazione secondaria.

{% capture example %}

<h4>Intestazione <small class="text-muted">con testo secondario</small></h4>
{% endcapture %}{% include example.html content=example %}

--> 

## Paragrafi

Il semplice paragrafo prevede una dimensione di testo di
`16px/1rem` per dispositivi mobili e di `18px/1.125rem` per schermi con dimensioni
maggiori di 576px. 

L'interlinea è impostata con il rapporto di  `1.5`.

{% comment %}Example name: Paragrafi contenuti{% endcomment %}
{% capture example %}
<p>Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus.</p>
<p>Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus.</p>
{% endcapture %}{% include example.html content=example %}

Per una lettura più confortevole, è buona norma mantenere la lunghezza di un paragrafo
compresa tra 45 e 74 caratteri. Per testo su colonne multiple, si considera una
lunghezza compresa tra 40 e 50 caratteri. Per i testi a margine la lunghezza
minima è di 12-15 caratteri.

### Paragrafi in evidenza

Per mettere in risalto un paragrafo è sufficiente aggiungere la classe `.lead`.

{% comment %}Example name: Paragrafi in evidenza{% endcomment %}
{% capture example %}
<p class="lead">Paragrafo in evidenza</p>
{% endcapture %}{% include example.html content=example %}

### Personalizzazione dei paragrafi

È possibile stilizzare correttamente lo stile anche nel caso vengano utilizzati
semplicemente gli elementi HTML5 per il trattamento di testo.

{% comment %}Example name: Markup semantico nei paragrafi{% endcomment %}
{% capture example %}
<p>Esempio di testo <u>sottolineato</u>.</p>
<p>Esempio di testo <mark>evidenziato</mark>.</p>
<p>Esempio di testo <em>corsivo</em>.</p>
<p>Esempio di testo <strong>in grassetto</strong>.</p>
<p>Esempio di testo <small>rimpicciolito</small>.</p>
<p>Esempio di <code>codice</code> in un paragrafo di testo.</p>
<ins>Testo aggiunto</ins>
<del>Testo rimosso</del>
{% endcapture %}{% include example.html content=example %}

Le classi `.mark` e `.small` sono disponibili anche per applicare gli stessi
stili di `<mark>` e `<small>` evitando eventuali implicazioni semantiche
indesiderate che i tag porterebbero con sé.

È possibile sfruttare le classi di Bootstrap anche per modificare allineamento,
stile, peso e colore del testo. Per questo, si può fare riferimento alla
documentazione delle [utilità di testo]({{ site.baseurl }}/docs/organizzare-i-contenuti/testo/)
e [utilità di colore]({{ site.baseurl }}/docs/utilities/colori/).

### Link

{% capture callout %}

#### Accessibilità

È fondamentale evidenziare i link presenti in un paragrafo in modo adeguato, utilizzando la sottolineatura oltre al colore per indicare la presenza di un collegamento ipertestuale.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

Nel rispetto delle regole di accessibilità vigenti, Bootstrap Italia mantiene la sottolineatura ai link di tipo `<a>`. Nel caso in cui si voglia aggiungere un'icona a fianco del link, questa può essere inserita direttamente all'interno del tag `<a>`, come mostrato nell'esempio seguente.

{% comment %}Example name: Link{% endcomment %}
{% capture example %}
<p>Esempio di <a href="#">link normale</a>.</p>
<p>Esempio di <a href="#">link con icona <svg role="img" class="icon icon-sm icon-primary"><title>Freccia destra</title><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg></a></p>
{% endcapture %}{% include example.html content=example %}

 Nel caso di link già in evidenza (menu di navigazione, dropdown menu, liste di link, ecc.), è possibile rimuovere la sottolineatura utilizzando la classe `.text-decoration-none`. Vai agli esempi di [link senza sottolineatura]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste/#liste-per-menu-di-navigazione).


## Abbreviazioni

Implementazione stilizzata dell'elemento HTML `<abbr>` per abbreviazioni e
acronimi per mostrare la versione espansa sull' hover. Le abbreviazioni hanno
una sottolineatura predefinita e ottengono un cursore di aiuto per fornire un
contesto aggiuntivo al passaggio del mouse e agli utenti delle tecnologie
assistive.

Aggiungi `.initialism` a un'abbreviazione per una dimensione del font
leggermente più piccola.

{% comment %}Example name: Abbreviazioni{% endcomment %}
{% capture example %}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{% endcapture %}{% include example.html content=example %}

## Citazioni

Per citare blocchi di contenuti da un'altra fonte all'interno del documento.
Racchiudi ogni <abbr title="HyperText Markup Language">HTML</abbr> all'interno
di un `<blockquote class="blockquote">` come la citazione.

{% comment %}Example name: Citazioni{% endcomment %}
{% capture example %}
<blockquote class="blockquote">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
</blockquote>
{% endcapture %}{% include example.html content=example %}

### Citare una fonte

Aggiungi un `<footer class="blockquote-footer">` per identificare la fonte.
Includi il nome della fonte di origine in `<cite>`.

{% comment %}Example name: Citazioni con fonte{% endcomment %}
{% capture example %}
<blockquote class="blockquote">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer">Nome Cognome da <cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

### Allineamento

Utilizza le utilità di testo necessarie per modificare l'allineamento del tuo
blockquote.

{% comment %}Example name: Citazione, centrata{% endcomment %}
{% capture example %}
<blockquote class="blockquote text-center">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer">Nome Cognome da <cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Citazione, a destra{% endcomment %}
{% capture example %}
<blockquote class="blockquote text-end">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

### Semplice

Aggiungendo la classe `.blockquote-simple` si ottiene una versione base del Blockquote.

{% comment %}Example name: Citazione, base{% endcomment %}
{% capture example %}
<blockquote class="blockquote blockquote-simple">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
</blockquote>
{% endcapture %}{% include example.html content=example %}

### Card

Aggiungendo la classe `.blockquote-card` si ottiene un Blockquote di tipo card.

{% comment %}Example name: Citazione, card{% endcomment %}
{% capture example %}
<blockquote class="blockquote blockquote-card">
  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer"><cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

Aggiungendo un'ulteriore classe `.dark` si ottiene un Blockquote card scuro.

{% comment %}Example name: Citazione, card con sfondo scuro{% endcomment %}
{% capture example %}
<blockquote class="blockquote blockquote-card dark">
  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer"><cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>
{% endcapture %}{% include example.html content=example %}

## Liste

Rimuovi il predefinito `list-style` e il margine sinistro sugli elementi
elenco (solo per i figli diretti). **Questo si applica solo agli elementi della 
lista che sono figli diretti**, il che significa che dovrai aggiungere la classe
per tutti gli elenchi annidati.

{% comment %}Example name: Lista senza stile{% endcomment %}
{% capture example %}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul class="list-unstyled">
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Inline

Rimuovi i punti elenco di una lista e applica un leggero `margin` con una
combinazione di due classi, `.list-inline` e `.list-inline-item`.

{% comment %}Example name: Lista inline{% endcomment %}
{% capture example %}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Allineamento lista descrizione

Allineare i termini e le descrizioni orizzontalmente utilizzando le classi
predefinite del nostro sistema di griglia. Per termini più lunghi, puoi
facoltativamente aggiungere la classe `.text-truncate` per troncare il testo
con un `ellipsis`.

{% comment %}Example name: Lista, allineamento descrizione{% endcomment %}
{% capture example %}
<dl class="row">
  <dt class="col-sm-3">Lista descrizioni</dt>
  <dd class="col-sm-9">Una lista di discrezioni è lo strumento ideale per definire dei termini.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Testo troncato: questo testo troppo lungo verrà troncato</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Annidamento</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Lista descrizione annidata</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
{% endcapture %}{% include example.html content=example %}

## Breaking change

{% capture callout %}
- Reimpostata la dimensione del carattere di base su `16px` su `body`.
- Sostituite le unità `em` con `rem`.
- Aggiornati i valori `font-size` per corrispondere al nuovo calcolo dell'unità `rem`.
- Rimosse le variabili obsolete e inutilizzate da `_variables.scss`.
- Variabili specifiche dei componenti aggiornate e allineate a `UI Kit Italia v3`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.7.0" type="danger" %}