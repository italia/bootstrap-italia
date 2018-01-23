---
layout: docs
title: Introduzione
description: In questa sezione sono mostrati alcuni componenti e utilità per l'organizzazione del layout e delle funzionalità di una pagina.
group: utilities
toc: true
redirect_from:
  - "/utilities/"
  - "/docs/utilities/"
  - "/docs/0.0.1/utilities/"
---

## Containers

Il "container" (contenitore) è uno degli elementi base nell'utilizzo di Bootstrap, ed è **richiesto quando si utilizza il [grid system]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/grid/)**.

La prima scelta è tra un container a larghezza _fissa_, la cui `max-width` cambia ad ogni breakpoint, o _fluida_, la cui larghezza rimane al 100% per ogni dimensione del viewport.

<div class="bd-example">
  <div class="bd-example-container">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

{% highlight html %}
<div class="container">
  <!-- Content here -->
</div>
{% endhighlight %}

Utilizzando la classe `.container-fluid` esso occuperà in larghezza tutta l'area a sua disposizione.

<div class="bd-example">
  <div class="bd-example-container bd-example-container-fluid">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

{% highlight html %}
<div class="container-fluid">
  ...
</div>
{% endhighlight %}


## Responsive breakpoints

Visto che la progettazione web è bene che venga gestita _mobile-first_, in Bootstrap Italia sono definite alcune [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) per definire breakpoints ai quali il layout si modifica. Questi breakpoints sono basati sulla dimensioni minima del viewport e permettono di scalare verso l'alto quando la dimensione della finesta aumenta.

Bootstrap Italia utilizza le media query seguenti per definire i breakpoint usati nelle sue griglie e componenti.

{% highlight scss %}
// Schermi piccoli (meno di 576px)
// Non è necessaria alcuna media query, in quanto la progettazione mobile-first fa sì che questo sia il codice di default

// Schermi medio-piccoli (almeno 576px)
@media (min-width: 576px) { ... }

// Schermi medi (almeno 768px)
@media (min-width: 768px) { ... }

// Schermi grandi (almeno 992px)
@media (min-width: 992px) { ... }

// Schermi molto grandi (almeno 1200px)
@media (min-width: 1200px) { ... }
{% endhighlight %}

Since we write our source CSS in Sass, all our media queries are available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example usage:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}
{% endhighlight %}

We occasionally use media queries that go in the other direction (the given screen size *or smaller*):

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
{% endhighlight %}

{% capture callout-include %}{% include callout-info-mediaqueries-breakpoints.md %}{% endcapture %}
{{ callout-include | markdownify }}

Once again, these media queries are also available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
{% endhighlight %}

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
{% endhighlight %}

These media queries are also available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{% endhighlight %}

Similarly, media queries may span multiple breakpoint widths:

{% highlight scss %}
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
{% endhighlight %}

The Sass mixin for targeting the same screen size range would be:

{% highlight scss %}
@include media-breakpoint-between(md, xl) { ... }
{% endhighlight %}

## Z-index

Several Bootstrap components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There's no reason we couldn't have used `100`+ or `500`+.

We don't encourage customization of these individual values; should you change one, you likely need to change them all.

{% highlight scss %}
$zindex-dropdown:          1000 !default;
$zindex-sticky:            1020 !default;
$zindex-fixed:             1030 !default;
$zindex-modal-backdrop:    1040 !default;
$zindex-modal:             1050 !default;
$zindex-popover:           1060 !default;
$zindex-tooltip:           1070 !default;
{% endhighlight %}

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.

---

## Changing `display`

Use our [display utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) for responsively toggling common values of the `display` property. Mix it with our grid system, content, or components to show or hide them across specific viewports.

## Flexbox options

Bootstrap 4 is built with flexbox, but not every element's `display` has been changed to `display: flex` as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of [our components]({{ site.baseurl }}/docs/{{ site.docs_version }}/componenti/alerts/) are built with flexbox enabled.

Should you need to add `display: flex` to an element, do so with `.d-flex` or one of the responsive variants (e.g., `.d-sm-flex`). You'll need this class or `display` value to allow the use of our extra [flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) for sizing, alignment, spacing, and more.

## Margin and padding

Use the `margin` and `padding` [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) to control how elements and components are spaced and sized. Bootstrap 4 includes a five-level scale for spacing utilities, based on a `1rem` value default `$spacer` variable. Choose values for all viewports (e.g., `.mr-3` for `margin-right: 1rem`), or pick responsive variants to target specific viewports (e.g., `.mr-md-3` for `margin-right: 1rem` starting at the `md` breakpoint).

## Toggle `visibility`

When toggling `display` isn't needed, you can toggle the `visibility` of an element with our [visibility utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/visibility/). Invisible elements will still affect the layout of the page, but are visually hidden from visitors.
