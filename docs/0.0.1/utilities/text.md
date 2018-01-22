---
layout: docs
title: Testo (Text)
description: Documentazione e esempi di strumenti di testo per il controllo dell'allineamento, dell'area di testo, dello stile del carattere e altro. (Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.)
group: utilities
toc: true
---

## Allineamento del testo (Text alignment)

Riallinea facilmente il contenuto dei componenti con le classi di allineamento testo.
(Easily realign text to components with text alignment classes.)

{% example html %}
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
{% endexample %}

Per l'allineamento a sinistra, a destra e centrale sono disponibili classi che si adattano in base alla griglia utilizzata.
(For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.)

{% example html %}
<p class="text-left">Testo allineato a sinistra per tutte le visualizzazioni. (Left aligned text on all viewport sizes.)</p>
<p class="text-center">Testo allineato al centro per tutte le visualizzazioni. (Center aligned text on all viewport sizes.)</p>
<p class="text-right">Testo allineato a destra per tutte le visualizzazioni. (Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Testo allineato a sinistra per la visualizzazione SM (small) o estesa (Left aligned text on viewports sized SM (small) or wider.)</p>
<p class="text-md-left">Testo allineato a sinistra per la visualizzazione MD (medium) o estesa (Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Testo allineato a sinistra per la visualizzazione LG (large) o estesa (Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Testo allineato a sinistra per la visualizzazione XL (extra-large) o estesa (Left aligned text on viewports sized XL (extra-large) or wider.</p>
{% endexample %}

## Testo per esteso e overflow (Text wrapping and overflow)

Previeni l'andare a capo del testo con la classe `.text-nowrap` (Prevent text from wrapping with a `.text-nowrap`) class.

{% example html %}
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  Questo testo oltrepassa il contenitore. (This text should overflow the parent.)
</div>
{% endexample %}

Per contenuti più lunghi puoi aggiungere la classe `.text-truncate` per troncare il testo con i punti di sospensione. **Necessita della classe `display: inline-block` oppure `display: block`.** (For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**)

{% example html %}
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
{% endexample %}

## Trasformazione del testo (Text transform)

Trasforma il testo presente nei componenti con una delle classi di capitalizzazione. (Transform text in components with text capitalization classes.)

{% example html %}
<p class="text-lowercase">Testo tutto minuscolo. (Lowercased text.)</p>
<p class="text-uppercase">Testo tutto maiuscolo. (Uppercased text.)</p>
<p class="text-capitalize">Testo capiTaliZzato. (CapiTaliZed text.)</p>
{% endexample %}

Nota come la classe `text-capitalize` cambi solamente la prima lettera di ogni parola lasciando le altre inalterate. (Note how `text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.)

## Carattere grassetto e corsivo (Font weight and italics)

Modifica rapidamente il testo in grassetto o in corsivo. (Quickly change the weight (boldness) of text or italicize text.)

{% example html %}
<p class="font-weight-bold">Testo in grassetto. (Bold text.)</p>
<p class="font-weight-normal">Testo normale. (Normal weight text.)</p>
<p class="font-weight-light">Testo sottile. (Light weight text.)</p>
<p class="font-italic">Testo in corsivo (Italic text.)</p>
{% endexample %}
