---
layout: docs
group: componenti
toc: true
title: Affix
description: Blocca la posizione di un elemento rispetto al viewport.
---

<style>
  /* Style override for Documentation purposes */
  @media screen and (min-width: 768px) {
    .affix-top {
      top: 129px;
    }
  }
  @media screen and (min-width: 992px) {
    .affix-top {
      top: 89px;
    }
  }
</style>

Un elemento Affix rimane ancorato ad una specifica area della pagina. Viene spesso utilizzato per i menù di navigazione o per i pulsanti di condivisione dei social network, per ancorarli in una specifica area mentre il contenuto della pagina viene scrollato in alto o in basso.

È importante ricordare che un elemento Affix non dovrebbe nascondere il contenuto di una pagina, specialmente quando la dimensione del viewport è ridotta.

## Vertical Affix

Un elemento Affix posizionato al lato del contenuto di pagina può essere ancorato alla parte superiore od inferiore dello stesso.

### Vertical Affix top

Per ancorare un elemento alla parte alta della pagina è sufficiente applicare la classe `.affix-parent` all'elemento che lo contiene e la classe `.affix-top` all'elemento stesso.

{% comment %}Example name: Verticale in alto{% endcomment %}
{% capture example %}

<div class="affix-example container">
  <div class="row">
    <div class="col-6 col-md-3 p-2 affix-parent">
      <div class="neutral-1-bg-a7 p-3 mb-1">
        <p class="mb-0 white-color">Lorem ipsum</p>
      </div>
      <div class="neutral-1-bg-a7 p-3 mb-1">
        <p class="mb-0 white-color">Dolor sit</p>
      </div>
      <div class="primary-bg p-3 affix-top">
        <p class="mb-0 white-color">Affix top</p>
      </div>
    </div>
    <div class="col-6 col-md-9 p-2">
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla justo, ullamcorper et pharetra nec, sagittis id augue. Ut imperdiet dolor neque, at imperdiet lectus finibus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fringilla nisi sed magna congue ultricies. Nam faucibus lacinia auctor. Morbi eget ullamcorper erat. Donec auctor, nulla non pellentesque vestibulum, nisl nulla iaculis lectus, nec tincidunt elit purus eu leo. Phasellus quis justo consequat, commodo mi pretium, porta turpis.</p>
      <p class="mb-0 d-none d-md-block">Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    </div>
  </div>
  <div class="row p-2 d-none d-md-block">
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Vertical Affix bottom

Per ancorare un elemento alla parte alta della pagina è sufficiente applicare la classe `.affix-parent` all'elemento che lo contiene e la classe `.affix-bottom` all'elemento stesso.

{% comment %}Example name: Verticale in basso{% endcomment %}
{% capture example %}

<div class="affix-example container">
  <div class="row">
    <div class="col-6 col-md-3 p-2 affix-parent">
      <div class="neutral-1-bg-a7 p-3 mb-1">
        <p class="mb-0 white-color">Lorem ipsum</p>
      </div>
      <div class="neutral-1-bg-a7 p-3 mb-1">
        <p class="mb-0 white-color">Dolor sit</p>
      </div>
      <div class="neutral-1-bg-a7 p-3 mb-1">
        <p class="mb-0 white-color">Lorem ipsum</p>
      </div>
      <div class="neutral-1-bg-a7 p-3 mb-1">
        <p class="mb-0 white-color">Dolor sit</p>
      </div>
      <div class="primary-bg p-3 affix-bottom">
        <p class="mb-0 white-color">Affix bottom</p>
      </div>
    </div>
    <div class="col-6 col-md-9 p-2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie quis orci sit amet sodales. Sed imperdiet nisl suscipit risus pharetra, eget placerat nulla aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla justo, ullamcorper et pharetra nec, sagittis id augue. Ut imperdiet dolor neque, at imperdiet lectus finibus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fringilla nisi sed magna congue ultricies. Nam faucibus lacinia auctor. Morbi eget ullamcorper erat. Donec auctor, nulla non pellentesque vestibulum, nisl nulla iaculis lectus, nec tincidunt elit purus eu leo. Phasellus quis justo consequat, commodo mi pretium, porta turpis.</p>
      <p class="d-none d-md-block">Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    </div>
  </div>
  <div class="row p-2 d-none d-md-block">
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Horizontal Affix

Un elemento Affix a sviluppo orizzontale può essere ancorato alla parte alta o bassa della una pagina.

### Horizontal Affix top

Per ancorare un elemento a svliuppo orizzontale alla parte alta della pagina è sufficiente applicare la classe `.affix-parent` all'elemento che lo contiene e la classe `.affix-top` all'elemento stesso.

{% comment %}Example name: Orizzontale in alto{% endcomment %}
{% capture example %}

<div class="affix-example container affix-parent">
  <div class="primary-bg p-3 mb-1 text-center affix-top">
    <p class="mb-0 white-color">Horizontal Affix top</p>
  </div>
  <div class="row p-5">
    <p class="h3">Orci varius natoque penatibus et magnis</p>
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p class="d-none d-md-block">Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Horizontal Affix bottom

Per ancorare un elemento a sviluppo orizzontale alla parte inferiore della pagina è sufficiente applicare la classe `.affix-parent` all'elemento che lo contiene e la classe `.affix-bottom` all'elemento stesso.

{% comment %}Example name: Orizzontale in basso{% endcomment %}
{% capture example %}

<div class="affix-example container affix-parent">
  <div class="row p-5">
    <p class="h3">Orci varius natoque penatibus et magnis</p>
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p class="d-none d-md-block">Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
  </div>
  <div class="primary-bg p-3 text-center affix-bottom">
    <p class="mb-0 white-color">Horizontal Affix bottom</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
