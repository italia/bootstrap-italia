---
layout: docs
title: Bottoni
description: Bootstrap Italia definisce alcuni stili per i bottoni da utilizzare a seconda delle necessità
group: componenti
toc: true
---

## Utilizzo

Per aggiungere un bottone personalizzato, è sufficiente utilizzare la classe `.btn`, associandola a classi di tipo `.btn-` per applicarne le varianti di stile, dimensione, ecc.

{% capture example %}
<button type="button" class="btn">Link</button>
{% endcapture %}{% include example.html content=example %}

Le classi `.btn` sono state pensate per essere utilizzate con l'elemento `<button>`. Tuttavia, è possibile applicare lo stile per i bottoni anche ad elementi di tipo `<a>` o `<input>`, anche se alcuni browser potrebbero mostrare un rendering lievemente diverso.

In questi casi, non dimenticare di utilizzare in modo appropriato gli attributi `role="button"` per trasmettere il loro scopo alle tecnologie assistive.

{% capture example %}
<a class="btn" href="#" role="button">Link</a>
<button class="btn" type="submit">Button</button>
<input class="btn" type="button" value="Input">
<input class="btn" type="submit" value="Submit">
<input class="btn" type="reset" value="Reset">
{% endcapture %}{% include example.html content=example %}

### Varianti di colore

Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:

{% capture example %}

<div class="py-1">{% for color in site.data.theme-colors %}{% if color.name == "primary" or color.name == "secondary" %}
<div class="btn-example">
  <button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>
  <button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }} outline</button>
  <button type="button" class="btn btn-{{ color.name }} disabled">{{ color.name | capitalize }} disabled</button>
</div>{% endif %}{% endfor %}</div>
{% endcapture %}{% include example.html content=example %}

#### Note sullo stato disabilitato

- I tag `<a>` non supportano l'attributo `disabled`, per cui è necessario usare la classe `.disabled` per farli apparire visivamente disabilitati, e in modo da disabilitare `pointer-events` su di essi sui browser che lo supportano.
- I bottoni disabilitati includeranno l'attributo `aria-disabled="true"` per indicare lo stato dell'elemento alle tecnologie assistive.

{% capture example %}
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">Link disabilitato</a>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

##### Disabilitazione link

La classe `.disabled` usa `pointer-events: none` per provare a disabilitare l'attivazione dei comportamenti di default dei link `<a>`, ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane abilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è possibile aggiungere l'attributo `tabindex="-1"` e utilizzare Javascript per disabilitare le loro funzionalità.
{% endcapture %}{% include callout.html content=callout type="warning" %}

#### Su sfondo scuro

{% capture example %}

<div class="bg-dark py-1">{% for color in site.data.theme-colors %}{% if color.name == "primary" or color.name == "secondary" %}
<div class="btn-example">
  <button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>
  <button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }} outline</button>
  <button type="button" class="btn btn-{{ color.name }} disabled">{{ color.name | capitalize }} disabled</button>
</div>{% endif %}{% endfor %}</div>
{% endcapture %}{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

### Bottoni con icona

E' possibile aggiungere un'icona personalizzata al bottone con la classe `.btn-icon` in aggiunta alla classe `.btn` e alle relative varianti cromatiche e di dimensione.

{% capture example %}
<button class="btn btn-success btn-lg btn-icon">
<svg class="icon icon-white">
<use
      xlink:href="{{
        site.baseurl
      }}/dist/svg/sprite.svg#it-star-full"
    ></use>
</svg>
<span>Icon Button Lg</span>
</button>

<button class="btn btn-primary btn-icon">
<svg class="icon icon-white">
<use
      xlink:href="{{
        site.baseurl
      }}/dist/svg/sprite.svg#it-star-full"
    ></use>
</svg>
<span>Icon Button</span>
</button>

<button class="btn btn-danger btn-sm btn-icon">
<svg class="icon icon-secondary">
<use
      xlink:href="{{
        site.baseurl
      }}/dist/svg/sprite.svg#it-star-full"
    ></use>
</svg>
<span>Icon Button Sm</span>
</button>

<button class="btn btn-info btn-xs btn-icon">
<svg class="icon icon-danger">
<use
      xlink:href="{{
        site.baseurl
      }}/dist/svg/sprite.svg#it-star-full"
    ></use>
</svg>
<span>Icon Button Xs</span>
</button>
{% endcapture %}{% include example.html content=example %}

{% include callout-warning-button-icon-structure.md %}

#### Icona cerchiata

Inoltre è possibile applicare un contorno cerchiato dell'icona utilizzando un contenitore con classe `.rounded-icon` da inserire all'interno della classe `.btn` con possibilità di personalizzazione del suo aspetto cromatico attraverso i modificatori `.rounded-*` e `.icon.icon-*`.

{% capture example %}
<button class="btn btn-success btn-lg btn-icon">
<span class="rounded-icon">
<svg class="icon icon-success">
<use xlink:href="{{site.baseurl}}/dist/svg/sprite.svg#it-user"></use>
</svg>
</span>
<span>Round Icon Lg</span>
</button>

<button class="btn btn-primary btn-icon">
<span class="rounded-icon">
<svg class="icon icon-primary">
<use xlink:href="{{site.baseurl}}/dist/svg/sprite.svg#it-user"></use>
</svg>
</span>
<span>Round Icon</span>
</button>

<button class="btn btn-danger btn-sm btn-icon">
<span class="rounded-icon rounded-secondary">
<svg class="icon icon-white">
<use xlink:href="{{site.baseurl}}/dist/svg/sprite.svg#it-user"></use>
</svg>
</span>
<span>Round Icon Sm</span>
</button>

<button class="btn btn-secondary btn-xs btn-icon">
<span class="rounded-icon rounded-danger">
<svg class="icon icon-white">
<use xlink:href="{{site.baseurl}}/dist/svg/sprite.svg#it-user"></use>
</svg>
</span>
<span>Round Icon Xs</span>
</button>
{% endcapture %}{% include example.html content=example %}

### Varianti di dimensione

Per ottenere bottoni di dimensione più grande o più piccola, è sufficiente utilizzare le classi `.btn-lg`, `.btn-sm` e `.btn-xs`.

#### Large

{% capture example %}
<button type="button" class="btn btn-primary btn-lg">Primary Large</button>
<button type="button" class="btn btn-secondary btn-lg">Secondary Large</button>
{% endcapture %}{% include example.html content=example %}

#### Small

{% capture example %}
<button type="button" class="btn btn-primary btn-sm">Primary Small</button>
<button type="button" class="btn btn-secondary btn-sm">Secondary Small</button>
{% endcapture %}{% include example.html content=example %}

#### Mini

{% capture example %}
<button type="button" class="btn btn-primary btn-xs">Primary Mini</button>
<button type="button" class="btn btn-secondary btn-xs">Secondary Mini</button>
{% endcapture %}{% include example.html content=example %}

Aggiungendo la classe `.btn-block` si ottengono invece bottoni che prendono tutta l'ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore. In questo caso, anche i bordi non sono più arrotondati.

{% capture example %}
<button type="button" class="btn btn-primary btn-lg btn-block">Primary Block</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Secondary Block</button>
{% endcapture %}{% include example.html content=example %}

## Approfondimento

Per ulteriori informazioni sui bottoni si rimanda alla sezione [buttons](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/components/buttons/) del sito di Bootstrap.
