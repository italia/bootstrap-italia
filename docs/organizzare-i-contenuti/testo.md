---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Testo
description: Documentazione e esempi di strumenti per il controllo dell'allineamento nelle aree di testo, dello stile del carattere e altro.
---

## Allineamento del testo

Riallinea facilmente il contenuto dei componenti con le classi di allineamento testo.

{% comment %}Example name: Allineato a sinistra{% endcomment %}
{% capture example %}
<p class="text-start">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
{% endcapture %}{% include example.html content=example %}

Per l'allineamento a sinistra, a destra e centrale sono disponibili classi che si adattano in base alla griglia utilizzata.

{% comment %}Example name: Varianti di allineamento{% endcomment %}
{% capture example %}
<p class="text-start">Testo allineato a sinistra per tutte le dimensioni del viewport.</p>
<p class="text-center">Testo allineato al centro per tutte le dimensioni del viewport.</p>
<p class="text-end">Testo allineato a destra per tutte le dimensioni del viewport.</p>

<p class="text-sm-left">Testo allineato a sinistra per dimensioni SM (small) o maggiori.</p>
<p class="text-md-left">Testo allineato a sinistra per dimensioni MD (medium) o maggiori.</p>
<p class="text-lg-left">Testo allineato a sinistra per dimensioni LG (large) o maggiori.</p>
<p class="text-xl-left">Testo allineato a sinistra per dimensioni XL (extra-large) o maggiori.</p>
{% endcapture %}{% include example.html content=example %}

## Testo per esteso e overflow

Previeni l'andare a capo del testo con la classe `.text-nowrap`.

{% comment %}Example name: Per esteso e overflow{% endcomment %}
{% capture example %}
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  Questo testo oltrepassa il contenitore.
</div>
{% endcapture %}{% include example.html content=example %}

Per contenuti più lunghi puoi aggiungere la classe `.text-truncate` per troncare il testo con i punti di sospensione. Necessita della classe `display: inline-block` oppure `display: block`.

{% comment %}Example name: Con troncamento in punti di sospensione{% endcomment %}
{% capture example %}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
{% endcapture %}{% include example.html content=example %}

## Trasformazione del testo

Trasforma il testo con una delle classi per la scrittura in maiuscolo.

{% comment %}Example name: Trasformazioni{% endcomment %}
{% capture example %}
<p class="text-lowercase">Testo tutto minuscolo.</p>
<p class="text-uppercase">Testo tutto maiuscolo.</p>
<p class="text-capitalize">Testo con prime lettere MaiuscOLE.</p>
{% endcapture %}{% include example.html content=example %}

Nota come la classe `text-capitalize` cambi solamente la prima lettera di ogni parola lasciando le altre inalterate.

## Carattere grassetto e corsivo

Modifica rapidamente il testo in grassetto o in corsivo.

{% comment %}Example name: Stile{% endcomment %}
{% capture example %}
<p class="fw-bold">Testo in grassetto.</p>
<p class="fw-semibold">Testo in semi-grassetto.</p>
<p class="fw-normal">Testo normale.</p>
<p class="fw-light">Testo sottile.</p>
<p class="fst-italic">Testo in corsivo.</p>
{% endcapture %}{% include example.html content=example %}

## Monospace

Formatta il testo con carattere a larghezza costante con la classe `.font-monospace`.

{% comment %}Example name: Monospaziato{% endcomment %}
{% capture example %}
<p class="font-monospace">Testo monospace</p>
{% endcapture %}
{% include example.html content=example %}
