---
layout: docs
title: Affix
description: Blocca la posizione di un elemento rispetto al viewport
group: componenti-aggiuntivi
toc: true
---

<script>
  window.addEventListener('load', function() {
    stickybits('#v-affix-top', { useStickyClasses: true });
    stickybits('#h-affix-top', { useStickyClasses: true });
    stickybits('#v-affix-bottom', { verticalPosition: 'bottom', useStickyClasses: true });
    stickybits('#h-affix-bottom', { verticalPosition: 'bottom', useStickyClasses: true });
  });
</script>

<style>
  /* Style override for Documentation purposes */
  .affix-parent {
    height: 300px;
    overflow-y: scroll;
  }
</style>

**Nota: al momento non è possibile visualizzare correttamente gli esempi di Affix di questa pagina nei browser IE ed Edge.**

Un elemento Affix rimane ancorato ad una specifica area della pagina. Viene spesso utilizzato per i menù di navigazione o per i bottoni condivisione dei social network, per ancorarli in una specifica area mentre il contenuto della pagina viene scrollato in alto o in basso.

È importante ricordare che un elemento Affix non dovrebbe nascondere il contenuto di una pagina, specialmente quando la dimensione del viewport è ridotta.

## Vertical affix

Un elemento Affix posizionato al lato del contenuto di pagina può essere ancorato alla parte superiore od inferiore dello stesso.

### Vertical affix top

Per ancorare un elemento alla parte alta della pagina è sufficiente utilizzare un `id` univoco nel tag dello stesso (es: `id="nome-elemento"`) ed attivarlo via javascript con la funzione `stickybits('#nome-elemento', { useStickyClasses: true });`.

{% capture example %}
<div class="affix-parent container">
  <div class="row">
    <div class="col-3 p-2">
      <div class="primary-bg-a3 p-3 mb-1">
        <p class="mb-0 white-color">Lorem ipsum</p>
      </div>
      <div class="primary-bg-a3 p-3 mb-1">
        <p class="mb-0 white-color">Dolor sit</p>
      </div>
      <div class="primary-bg p-3" id="v-affix-top">
        <p class="mb-0 white-color">Affix top</p>
      </div>
    </div>
    <div class="col-9 p-2">
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla justo, ullamcorper et pharetra nec, sagittis id augue. Ut imperdiet dolor neque, at imperdiet lectus finibus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fringilla nisi sed magna congue ultricies. Nam faucibus lacinia auctor. Morbi eget ullamcorper erat. Donec auctor, nulla non pellentesque vestibulum, nisl nulla iaculis lectus, nec tincidunt elit purus eu leo. Phasellus quis justo consequat, commodo mi pretium, porta turpis.</p>
      <p class="mb-0">Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    </div>
  </div>
  <div class="row p-2">
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p>Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% highlight js %}
  stickybits('#v-affix-top');
{% endhighlight %}

### Vertical affix bottom

Per ancorare un elemento nella parte inferiore di una pagina è sufficiente utilizzare un `id` univoco nel tag dello stesso (es: `id="nome-elemento"`) ed attivarlo via javascript con la funzione `stickybits('#nome-elemento', { verticalPosition: 'bottom', useStickyClasses: true });`

{% capture example %}
<div class="affix-parent container">
  <div class="row">
    <div class="col-3 p-2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet.</p>
    </div>
    <div class="col-9 p-2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie quis orci sit amet sodales. Sed imperdiet nisl suscipit risus pharetra, eget placerat nulla aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla justo, ullamcorper et pharetra nec, sagittis id augue. Ut imperdiet dolor neque, at imperdiet lectus finibus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fringilla nisi sed magna congue ultricies. Nam faucibus lacinia auctor. Morbi eget ullamcorper erat. Donec auctor, nulla non pellentesque vestibulum, nisl nulla iaculis lectus, nec tincidunt elit purus eu leo. Phasellus quis justo consequat, commodo mi pretium, porta turpis.</p>
      <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
      <div class="p-3 primary-bg-a3 text-center mb-2">
        <p class="mb-0 white-color">Lorem ipsum</p>
      </div>
      <div class="p-3 primary-bg-a3 text-center mb-2">
        <p class="mb-0 white-color">Dolor sit amet</p>
      </div>
      <div class="p-3 primary-bg text-center" id="v-affix-bottom">
        <p class="mb-0 white-color">Affix bottom</p>
      </div>
    </div>
  </div>
  <div class="row p-2">
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p>Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% highlight js %}
  stickybits('#v-affix-bottom', { verticalPosition: 'bottom' });
{% endhighlight %}

## Horizontal affix

Un elemento Affix a sviluppo orizzontale può essere ancorato alla parte alta o bassa della una pagina.

### Horizontal affix top

Per ancorare un elemento alla parte alta della pagina è sufficiente utilizzare un `id` univoco nel tag dello stesso (es: `id="nome-elemento"`) ed attivarlo via javascript con la funzione `stickybits('#nome-elemento', { useStickyClasses: true });`.

{% capture example %}
<div class="affix-parent container">
  <div class="primary-bg p-3 mb-1 text-center" id="h-affix-top">
    <p class="mb-0 white-color">Affix top</p>
  </div>
  <div class="row p-5">
    <p class="h3">Orci varius natoque penatibus et magnis</p>
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p>Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
    <p class="h3">Orci varius natoque penatibus et magnis</p>
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p>Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% highlight js %}
  stickybits('#h-affix-top');
{% endhighlight %}

### Horizontal affix bottom

Per ancorare un elemento nella parte inferiore di una pagina è sufficiente utilizzare un `id` univoco nel tag dello stesso (es: `id="nome-elemento"`) ed attivarlo via javascript con la funzione `stickybits('#nome-elemento', { verticalPosition: 'bottom', useStickyClasses: true });`

{% capture example %}
<div class="affix-parent container">
  <div class="row p-5">
    <p class="h3">Orci varius natoque penatibus et magnis</p>
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p>Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
    <p class="h3">Orci varius natoque penatibus et magnis</p>
    <p>Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.</p>
    <p>Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.</p>
  </div>
  <div class="primary-bg p-3 mb-1 text-center" id="h-affix-bottom">
    <p class="mb-0 white-color">Affix bottom</p>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% highlight js %}
  stickybits('#h-affix-bottom');
{% endhighlight %}