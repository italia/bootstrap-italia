---
layout: docs
title: Le Griglie
description: Nella definizione del layout di una interfaccia utente, la griglia è una suddivisione dello spazio tramite precise spaziature verticali ed orizzontali.
group: organizzare-gli-spazi
toc: true
---

Bootstrap Italia eredita la potente griglia flexbox mobile-first di Bootstrap per costruire layout di tutte le forme e dimensioni grazie a un sistema a dodici colonne.

## Come funziona

Il sistema di griglie di Bootstrap usa una serie di contenitori, righe e colonne per disporre ed allineare i contenuti, costruito su [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) e completamente responsive.

{% capture callout %}

#### Approfondimento

Se sei poco pratico di flexbox, puoi iniziare da questi link per trovare informazioni di carattere generale, specifiche e frammenti di codice.

- [guida su flexbox su MSDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox){:target="\_blank"} (in inglese)
- [guida su flexbox su CSS tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background){:target="\_blank"} (in inglese)
- [un simpatico quiz per verificare le tue conoscenze](http://flexboxfroggy.com/#it)
  {% endcapture %}{% include callout.html content=callout type="info" %}

Di seguito puoi trovare un esempio e uno sguardo approfondito su come la griglia viene costruita.

<div class="bd-example-row">
{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm"> Una di tre colonne </div>
    <div class="col-sm">Una di tre colonne</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

L'esempio precedente crea tre colonne di uguale larghezza su dispositivi piccoli, medi, grandi e extra large usando le classi di griglia predefinite. Le colonne sono centrate nella pagina attraverso l'utilizzo dell'elemento genitore `.container`.

Analizzandolo nel dettaglio, ecco come funziona:

- I contenitori forniscono un mezzo per centrare e riempire orizzontalmente il contenuto del tuo sito. Utilizza `.container` per una larghezza al pixel responsive o `.container-fluid` per una larghezza del `width: 100%` su tutti i viewport e dimensioni dei device.
- Le righe sono involucri per colonne. Ogni colonna ha un spaziature orizzontale (`gutter`) per regolare lo spazio tra di esse. Questo `padding` viene poi neutralizzato dalle righe con margini negativi. In questo modo, tutto il contenuto nelle colonne viene allineato sul lato sinistro.
- In un layout a griglia, il contenuto deve essere posizionato all'interno di colonne e solo le colonne possono essere figlie dirette delle righe.
- Grazie a flexbox, le colonne della griglia senza uno specifico `width` verranno automaticamente impostate come colonne di uguale larghezza. Per esempio, quattro casi di `.col-sm` avranno automaticamente una larghezza del 25% dal più piccolo breakpoint in su. Guarda la sezione [colonne a disposizione automatica](#colonne-a-disposizione-automatica) per maggiori informazioni.
- Le classi delle colonne indicano il numero delle colonne che dovresti utilizzare in base alle 12 possibili per riga. Quindi, se vuoi tre colonne di uguale larghezza, puoi usare `.col-4`.
- Le `width` delle colonne sono stabilite in percentuale, quindi sono sempre fluide e dimensionate rispetto al loro elemento genitore.
- Le colonne hanno un `padding` orizzontale per creare il gutter tra le singole colonne. Per rimuovere il `margin` dalle righe e il `padding` dalle colonne aggiungendo la classe `.g-0` alla classe `.row`.
- Per renderla responsive, esistono sei breakpoint della griglia, uno per ogni responsive breakpoint: tutti i breakpoint (extra small), small, medium, large, extra large ed extra extra large.
- I breakpoint della griglia si basano su media query con larghezza minima, significa che **si applicano a quel breakpoint e a tutti quelli sopra di esso** (e.g., `.col-sm-4` si applica a device piccoli, medi, grandi e extra large, ma non al primo breakpoint `xs`).
- È possibile utilizzare classi di griglia predefinite (come `.col-4`) per altri markup semantici.

Sii consapevole dei limiti e dei [bug di flexbox](https://github.com/philipwalton/flexbugs), come l' [incapacità di utilizzare alcuni elementi HTML come i contenitori di flex](https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers).

### Le opzioni

Mentre Bootstrap utilizza `em` or `rem` per definire gran parte delle misure, i `px` sono utilizzati per i breakpoint della griglia e la larghezza dei contenitori. Questo perché la larghezza della viewport è definita in pixel e non cambia con il [font size](https://drafts.csswg.org/mediaqueries-3/#units).

Scopri come gli aspetti della griglia di Bootstrap funzionano su più dispositivi con una comoda tabella.

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th class="text-center" scope="col">
          Extra small<br>
          <small>&lt;576px</small>
        </th>
        <th class="text-center" scope="col">
          Small<br>
          <small>&ge;576px</small>
        </th>
        <th class="text-center" scope="col">
          Medium<br>
          <small>&ge;768px</small>
        </th>
        <th class="text-center" scope="col">
          Large<br>
          <small>&ge;992px</small>
        </th>
        <th class="text-center" scope="col">
          Extra large<br>
          <small>&ge;1200px</small>
        </th>
        <th class="text-center" scope="col">
          Extra Extra large<br>
          <small>&ge;1400px</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Larghezza massima del contenitore</th>
        <td>Nessuno (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1176px</td>
        <td>1320px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Prefisso classi per le colonne</th>
        <td><code>.col-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
        <td><code>.col-xxl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Numero di colonne</th>
        <td colspan="6">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Larghezza del gutter</th>
        <td colspan="6">24px (12px su ogni lato della colonna)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Annidabile</th>
        <td colspan="6">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Ordinamento delle colonne</th>
        <td colspan="6">Yes</td>
      </tr>
    </tbody>
  </table>
</div>

## Colonne a disposizione automatica

Utilizza classi di colonne specifiche ad ogni breakpoint per un facile ridimensionamento delle colonne senza una specifica classe numerata come `.col-sm-6`.

### Uniformare larghezze tra colonne

Ad esempio, qui ci sono due layout di griglia che si applicano a ogni dispositivo e viewport, da `xs` a `xxl`. Aggiungi un numero qualsiasi di classi senza unità per ogni breakpoint di cui hai bisogno e ogni colonna avrà la stessa larghezza.

<div class="bd-example-row">
{% comment %}Example name: Colonne con larghezze omogenee{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">1 di 2</div>
    <div class="col">2 di 2</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col">2 di 3</div>
    <div class="col">3 di 3</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Colonne con uguale larghezza possono essere spezzate su più linee, ma c'è un [bug di flexbox su Safari](https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items), risolto dalla versione 10.1, che ne impediva il funzionamento senza uno specifico `flex-basis` o `border`. Esistono soluzioni alternative per le versioni precedenti dei browser, ma non dovrebbero essere necessarie se si è aggiornati.

<div class="bd-example-row">
{% comment %}Example name: Colonne con larghezze omogenee, alternativa{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="w-100"></div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Impostare la larghezza di una colonna

La disposizione automatica per le colonne della griglia di flexbox significa anche che puoi impostare la larghezza di una colonna e avere le colonne sorelle automaticamente ridimensionate in base ad essa. È possibile utilizzare classi di griglia predefinite (come mostrato di seguito), mixins di griglia o larghezze in linea. Notare che le altre colonne si ridimensioneranno indipendentemente dalla larghezza della colonna centrale.

<div class="bd-example-row">
{% comment %}Example name: Impostare la larghezza di una colonna{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-6">2 di 3 (larga 6/12)</div>
    <div class="col">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-5">2 di 3 (larga 5/12)</div>
    <div class="col">3 di 3</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Contenuto a larghezza variabile

Puoi usare la classe `col-{breakpoint}-auto` per ridimensionare le colonne in base alla naturale larghezza del loro contenuto.

<div class="bd-example-row">
{% comment %}Example name: Contenuto a larghezza variabile{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
  <div class="row">
    <div class="col">1 di 3</div>
    <div class="col-md-auto">Contenuto a larghezza variabile</div>
    <div class="col col-lg-2">3 di 3</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Larghezza identica su più righe

Crea colonne di uguale larghezza che si estendono su più righe inserendo un `.w-100` dove vuoi che le colonne vengano divise su un'altra riga.

<div class="bd-example-row">
{% comment %}Example name: Larghezza identica su più righe{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Classi responsive

La griglia di Bootstrap include cinque livelli di classi predefinite per la creazione di layout responsive complessi. Personalizza le dimensioni delle tue colonne su dispositivi piccoli, medi, grandi, extra large o extra extra large a tuo piacimento.

### Tutti i breakpoint

Per griglie con layout identico dal più piccolo dei dispositivi al più grande, usa le classi `.col` e `.col-*`. Specifica una classe numerata quando hai bisogno di una colonna particolarmente grande; altrimenti sentiti libero di attenerti alla classe `.col`.

<div class="bd-example-row">
{% comment %}Example name: Responsive, per tutti i breakpoint{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Raccolti in orizzontale

Utilizzando un singolo set di classi `.col-sm-*`, puoi creare un layout di base distribuito in verticale su dispositivi `extra-small` che diventa orizzontale su dispositivi `small`.

<div class="bd-example-row">
{% comment %}Example name: Responsive, raccolti in orizzontale{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Mischiare e abbinare

Non vuoi che le tue colonne si dispongano verticalmente su alcuni breakpoints? Puoi utilizzare una combinazione di classi diverse per ogni riga secondo necessità. Guarda l'esempio di seguito per farti un'idea di come funziona.

<div class="bd-example-row">
{% comment %}Example name: Responsive, mischiare e abbinare{% endcomment %}
{% capture example %}
<!-- Ordina le colonne sui dispositivi mobile creando una larghezza intera e l'altra mezza larghezza -->
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne partono con una larghezza del 50% sui dispositivi mobile e arrivano al 33.3% sui desktop -->
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Le colonne sono sempre larghe 50%, su dispositivi mobile e desktop -->
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Righe di colonne

Usa le classi reattive `.row-cols-*` per impostare rapidamente il numero di colonne del tuo layout. Mentre le normali classi `.col-` \* si applicano alle singole colonne (ad es. `.col-md-4`), le classi delle "righe di colonne" sono impostate sul genitore `.row` come scorciatoia.

<div class="bd-example-row">
{% comment %}Example name: Responsive, righe di colonne, eg. 1{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row row-cols-2">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Responsive, righe di colonne, eg. 2{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row row-cols-3">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Responsive, righe di colonne, eg. 3{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Responsive, righe di colonne, eg. 4{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col-6">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row">
{% comment %}Example name: Responsive, righe di colonne, eg. 5{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
    <div class="col">Colonna</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Allineamento

Usa le [utilità d'allineamento]({{ site.baseurl }}/docs/organizzare-gli-spazi/flex/) di Flexbox per allineare orizzontalmente e verticalmente le colonne.

### Allineamento verticale

<div class="bd-example-row">
{% comment %}Example name: Allineamento verticale{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row align-items-start" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-center" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
  <div class="row align-items-end" style="min-height: 5rem;">
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
    <div class="col">Una di tre colonne</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

<div class="bd-example-row bd-example-bg">
{% comment %}Example name: Allineamento verticale, misto{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row" style="min-height: 5rem;">
    <div class="col align-self-start">Una di tre colonne</div>
    <div class="col align-self-center">Una di tre colonne</div>
    <div class="col align-self-end">Una di tre colonne</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Allineamento orizzontale

<div class="bd-example-row bd-example-bg">
{% comment %}Example name: Allineamento orizzontale{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">Una di due colonne</div>
    <div class="col-4">Una di due colonne</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Senza gutter

I _gutter_ (margini) tra le colonne delle griglia predefinite di Bootstrap possono essere rimossi con `.g-0`.
Questo rimuove i margini negativi `margin` dalla classe `.row` e il `padding` orizzontale da tutte le colonne figlie dirette.

Di seguito il codice sorgente per la creazione di questi stili. Tieni presente che l'override delle colonne vale solo per le prime colonne figlie, agganciate tramite il [selettore di attributi](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).
Mentre questo genera un selettore più specifico, il padding della colonna può essere ulteriormente personalizzata con le [utilità di spaziatura]({{ site.baseurl }}/docs/organizzare-gli-spazi/spaziature/).

{% capture callout %}
**Hai bisogno di un design edge-to-edge?** Elimina l'elemento genitore `.container` o `.container-fluid`.
{% endcapture %}{% include callout.html content=callout type="info" %}

```scss
.g-0 {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*='col-'] {
    padding-right: 0;
    padding-left: 0;
  }
}
```

In pratica, ecco come appare. Nota che puoi continuare ad usarlo con tutte le altre classi di griglia predefinite (incluse le larghezze delle colonne, i livelli responsive, i riordini e altro).

<div class="bd-example-row">
{% comment %}Example name: Senza gutter{% endcomment %}
{% capture example %}
<div class="row g-0">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Gutter variabile

Bootstrap Italia rende disponibili gutter variabili a seconda delle dimensioni del viewport, secondo le indicazioni riportate di seguito:

```scss
$grid-gutter-widths: (
  sm: 12px,
  md: 20px,
  lg: 20px,
  xl: 28px,
  xxl: 28px,
) !default;
```

Si consiglia di usare sempre questa tipologia di spaziature, in quanto ottimizzano la leggibilità e organizzazione dei contenuti a seconda delle dimensioni del dispositivo. Per attivare i gutter variabili, è sufficiente affiancare alla classe `.row`, la classe `.variable-gutters`.

In questo modo, secondo la variabile Sass visibile sopra, le spaziature saranno così implementate:

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th class="text-center" scope="col">
          Extra small<br>
          <small>&lt;576px</small>
        </th>
        <th class="text-center" scope="col">
          Small<br>
          <small>&ge;576px</small>
        </th>
        <th class="text-center" scope="col">
          Medium<br>
          <small>&ge;768px</small>
        </th>
        <th class="text-center" scope="col">
          Large<br>
          <small>&ge;992px</small>
        </th>
        <th class="text-center" scope="col">
          Extra large<br>
          <small>&ge;1200px</small>
        </th>
        <th class="text-center" scope="col">
          Extra large<br>
          <small>&ge;1400px</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Larghezza del gutter</th>
        <td><code>12px</code></td>
        <td><code>12px</code></td>
        <td><code>20px</code></td>
        <td><code>24px</code></td>
        <td><code>24px</code></td>
        <td><code>28px</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bd-example-row">
{% comment %}Example name: Gutter variabile{% endcomment %}
{% capture example %}
<div class="row variable-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Colonna a capo

Se in una singola riga vengono inserite più di 12 colonne, ogni singola colonna o gruppo di colonne extra andrà a capo su una nuova linea.

<div class="bd-example-row">
{% comment %}Example name: Colonna a capo{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-9">.col-9</div>
  <div class="col-4">.col-4<br>Dato che 9 + 4 = 13 &gt; 12, questo div largo come 4 colonne viene portato a capo su una nuova linea come un'unità contigua.</div>
  <div class="col-6">.col-6<br>Le colonne successive continuano lungo la nuova riga.</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Interruzioni di colonna

Dividere le colonne su una nuova riga in flexbox richiede un piccolo trucco: aggiungi un elemento con `width: 100%` ovunque tu voglia fare andare a capo le tue colonne in una nuova riga. Di solito questo layout viene realizzato con `.row` multiple, ma non sempre è possibile implementarlo.

<div class="bd-example-row">
{% comment %}Example name: Interruzione di colonna{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <!-- Forza le prossime colonne per passare a una nuova riga -->
  <div class="w-100"></div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Puoi anche applicare questa interruzione a specifici breakpoint con le [utilità per la visualizzazione responsive]({{ site.baseurl }}/docs/organizzare-gli-spazi/display/).

<div class="bd-example-row">
{% comment %}Example name: Interruzione di colonna, responsive{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <!-- Forza le prossime colonne per passare alla nuova riga al breakpoint md e superiori -->
  <div class="w-100 d-none d-md-block"></div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Riordinamento

### Classi order

Usa le classi `.order-` per controllare l' **ordine di visualizzazione** del tuo contenuto. Queste classi sono responsive, così puoi impostare `order` tramite breakpoint (e.g., `.order-1.order-md-2`). Include il supporto per numeri da `1` a `5`.

<div class="bd-example-row">
{% comment %}Example name: Riordinamento{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col">Prima, ma non ordinata</div>
    <div class="col order-2">Seconda, ma ultima</div>
    <div class="col order-1">Terza ma prima</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Esistono anche delle classi responsive `.order-first` e `.order-last` che cambiano velocemente l'ordine di un elemento applicando `order: -1` o `order: 6`. Queste classi possono essere utilizzate insieme con le classi numerate `.order-*` se necessario.

<div class="bd-example-row">
{% comment %}Example name: Riordinamento first e last{% endcomment %}
{% capture example %}
<div class="container">
  <div class="row">
    <div class="col order-last">Prima, ma non ordinata</div>
    <div class="col">Seconda, ma non ordinata</div>
    <div class="col order-first">Terza ma prima</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

### Colonne di compensazione

È possibile sfalsare le colonne della griglia in due modi: con le classi responsive della griglia di Bootstrap `.offset-` e con le [utilità per le spaziature]({{ site.baseurl }}/docs/organizzare-gli-spazi/spaziature/) di Bootstrap. Le classi di offset della griglia sono dimensionate in modo che corrispondano alle colonne, mentre i margini sono più utili per i layout rapidi in cui la larghezza dell'offset è variabile.

#### Classi offset

Sposta le colonne sulla destra usando le classi `.offset-md-*`. Queste class aumentano il margine sinistro della colonna con `*`. Ad esempio, `.offset-md-4` sposta `.col-md-4` di quattro colonne.

<div class="bd-example-row">
{% comment %}Example name: Offset{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

Oltre alle interruzioni di colonna ai breakpoint, potrebbe essere necessario reimpostare gli offset.

<div class="bd-example-row">
{% comment %}Example name: Offset responsive{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

#### Utilità del margin

Dato che Bootstrap utilizza flexbox per generare le griglie, puoi usare le utilità del margin come `.me-auto` per forzare lo spazio tra colonne adiacenti.

<div class="bd-example-row">
{% comment %}Example name: Margini forzati tra colonne adiacenti{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
</div>
<div class="row">
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
  <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
</div>
<div class="row">
  <div class="col-auto me-auto">.col-auto .me-auto</div>
  <div class="col-auto">.col-auto</div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>

## Annidamento

Per annidare il contenuto con la griglia predefinita, aggiungi una nuova `.row` e un set di colonne `.col-sm-*` all'interno di una esistente `.col-sm-*`. Le righe annidate dovrebbero includere un set di colonne che ne aggiunge fino a 12 o meno (non è necessario usare tutte e 12 le colonne disponibili).

<div class="bd-example-row">
{% comment %}Example name: Annidamento{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-sm-9">
    Livello 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">Livello 2: .col-8 .col-sm-6</div>
      <div class="col-4 col-sm-6">Livello 2: .col-4 .col-sm-6</div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
</div>
