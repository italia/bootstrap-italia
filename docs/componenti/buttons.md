---
layout: docs
title: Buttons
description: Bootstrap Italia definisce alcuni stili per i pulsanti da utilizzare a seconda delle necessità.
group: componenti
toc: true
---

## Utilizzo

Per aggiungere un pulsante personalizzato, è sufficiente utilizzare la classe `.btn`, associandola a classi di tipo `.btn-` per applicarne le varianti di stile, dimensione, ecc.

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<button type="button" class="btn">Link</button>
{% endcapture %}{% include example.html content=example %}

Le classi `.btn` sono state pensate per essere utilizzate con l'elemento `<button>`. Tuttavia, è possibile applicare lo stile per i pulsanti anche ad elementi di tipo `<a>` o `<input>`, anche se alcuni browser potrebbero mostrare un rendering lievemente diverso.

{% capture callout %}

#### Accessibilità

La classe `.btn` permette di conferire visivamente agli elementi html l'aspetto di "pulsante". Anche elementi `<a>` o `<span>` possono trasformarsi visivamente in pulsanti, provocando discrepanza tra ciò che si rappresenta e la funzione semantica dell'elemento. Questo può provocare complesse problematiche di accessibilità.

Dove il click sul pulsante non genera un cambio di pagina utilizzare esclusivamente il tag `<button>`.

Quando non fosse possibile, non dimenticare di utilizzare in modo appropriato gli attributi `role="button"` per trasmettere il loro scopo alle tecnologie assistive.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con classe .btn{% endcomment %}
{% capture example %}
<a class="btn" href="#" role="button">Link</a>
<button class="btn" type="submit">Button</button>
<input class="btn" type="button" value="Input">
<input class="btn" type="submit" value="Submit">
<input class="btn" type="reset" value="Reset">
{% endcapture %}{% include example.html content=example %}

### Varianti di colore

Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:

{% comment %}Example name: Varianti di colore{% endcomment %}
{% capture example %}

<div class="py-1">{% for color in site.data.theme-colors %}{% if color.name == "primary" or color.name == "secondary" %}
<div class="btn-example">
  <button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>
  <button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }} outline</button>
  <button type="button" class="btn btn-{{ color.name }} disabled">{{ color.name | capitalize }} disabled</button>
  <button type="button" class="btn btn-outline-{{ color.name }} disabled">{{ color.name | capitalize }} o. disabled</button>
</div>{% endif %}{% endfor %}
</div>
{% endcapture %}{% include example.html content=example %}

#### Note sullo stato disabilitato

- I tag `<a>` non supportano l'attributo `disabled`, per cui è necessario usare la classe `.disabled` per farli apparire visivamente disabilitati, e in modo da disabilitare `pointer-events` su di essi sui browser che lo supportano.
- I pulsanti disabilitati includeranno l'attributo `aria-disabled="true"` per indicare lo stato dell'elemento alle tecnologie assistive.

{% comment %}Example name: Disabilitato{% endcomment %}
{% capture example %}
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">Link disabilitato</a>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

##### Disabilitazione link

La classe `.disabled` usa `pointer-events: none` per provare a disabilitare l'attivazione dei comportamenti di default dei link `<a>`, ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane abilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è possibile aggiungere l'attributo `tabindex="-1"` e utilizzare JavaScript per disabilitare le loro funzionalità.
{% endcapture %}{% include callout.html content=callout type="warning" %}

#### Su sfondo scuro

{% comment %}Example name: Su fondo scuro{% endcomment %}
{% capture example %}

<div class="bg-dark py-1">{% for color in site.data.theme-colors %}{% if color.name == "primary" or color.name == "secondary" %}
<div class="btn-example">
  <button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>
  <button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }} outline</button>
  <button type="button" class="btn btn-{{ color.name }} disabled">{{ color.name | capitalize }} disabled</button>
</div>{% endif %}{% endfor %}</div>
{% endcapture %}{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

### Pulsanti con icona

È possibile aggiungere un'icona personalizzata al pulsante con la classe `.btn-icon` in aggiunta alla classe `.btn` e alle relative varianti cromatiche e di dimensione.

{% comment %}Example name: Con icona{% endcomment %}
{% capture example %}
<button class="btn btn-success btn-lg btn-icon btn-me">
<span>Icon Button Lg</span>
<svg class="icon icon-white ms-1">
<use
        href="{{
          site.baseurl
        }}/dist/svg/sprites.svg#it-star-full"
      ></use>
</svg>
</button>

<button class="btn btn-primary btn-icon btn-me">
  <span>Icon Button</span>
  <svg class="icon icon-white ms-1">
  <use
        href="{{
          site.baseurl
        }}/dist/svg/sprites.svg#it-star-full"
      ></use>
  </svg>
</button>

<button class="btn btn-danger btn-sm btn-icon btn-me">
  <span>Icon Button Sm</span>
  <svg class="icon icon-secondary ms-1">
  <use
        href="{{
          site.baseurl
        }}/dist/svg/sprites.svg#it-star-full"
      ></use>
  </svg>
</button>

<button class="btn btn-info btn-xs btn-icon ms-1">
  <span>Icon Button Xs</span>
  <svg class="icon icon-danger">
  <use
        href="{{
          site.baseurl
        }}/dist/svg/sprites.svg#it-star-full"
      ></use>
  </svg>
</button>
{% endcapture %}{% include example.html content=example %}

{% include callout-warning-button-icon-structure.md %}

#### Icona cerchiata

Inoltre è possibile applicare un contorno cerchiato dell'icona utilizzando un contenitore con classe `.rounded-icon` da inserire all'interno della classe `.btn` con possibilità di personalizzazione del suo aspetto cromatico attraverso i modificatori `.rounded-*` e `.icon.icon-*`.

{% comment %}Example name: Con icona, cerchiata{% endcomment %}
{% capture example %}
<button class="btn btn-success btn-lg btn-icon btn-me">
<span class="rounded-icon">
<svg class="icon icon-success">
<use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use>
</svg>
</span>
<span>Round Icon Lg</span>
</button>

<button class="btn btn-primary btn-icon btn-me">
<span class="rounded-icon">
<svg class="icon icon-primary">
<use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use>
</svg>
</span>
<span>Round Icon</span>
</button>

<button class="btn btn-danger btn-sm btn-icon btn-me">
<span class="rounded-icon rounded-secondary">
<svg class="icon icon-white">
<use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use>
</svg>
</span>
<span>Round Icon Sm</span>
</button>

<button class="btn btn-secondary btn-xs btn-icon">
<span class="rounded-icon rounded-danger">
<svg class="icon icon-white">
<use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use>
</svg>
</span>
<span>Round Icon Xs</span>
</button>
{% endcapture %}{% include example.html content=example %}

### Varianti di dimensione

Per ottenere pulsanti di dimensione più grande o più piccola, è sufficiente utilizzare le classi `.btn-lg`, `.btn-sm` e `.btn-xs`.

#### Large

{% comment %}Example name: Dimensione grande{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary btn-lg btn-me">Primary Large</button>
<button type="button" class="btn btn-secondary btn-lg">Secondary Large</button>
{% endcapture %}{% include example.html content=example %}

#### Small

{% comment %}Example name: Dimensione normale{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary btn-sm btn-me">Primary Small</button>
<button type="button" class="btn btn-secondary btn-sm">Secondary Small</button>
{% endcapture %}{% include example.html content=example %}

#### Mini

{% comment %}Example name: Dimensione minima{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary btn-xs btn-me">Primary Mini</button>
<button type="button" class="btn btn-secondary btn-xs">Secondary Mini</button>
{% endcapture %}{% include example.html content=example %}

#### A tutta larghezza

Per creare pulsanti o gruppi di pulsanti a tutta larghezza, come i _block buttons_ di Bootstrap 4, utilizzare un mix delle utilities **display** e **gap**. Con queste utilities abbiamo più controllo su spaziature, allineamento e comportamento responsive rispetto al classico _block button_.

{% comment %}Example name: A tutta larghezza{% endcomment %}
{% capture example %}

<div class="d-grid gap-2">
  <button class="btn btn-primary btn-me" type="button">Primary</button>
  <button class="btn btn-secondary" type="button">Secondary</button>
</div>
{% endcapture %}{% include example.html content=example %}

In questo caso è stata implemenentata una variante responsive che visualizza i tasti a tutta larghezza e sovrapposti in mobile per poi affiancarli dl breakpoint `md` in su.

{% comment %}Example name: A tutta larghezza, solo su mobile{% endcomment %}
{% capture example %}

<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary btn-me" type="button">Primary</button>
  <button class="btn btn-secondary" type="button">Secondary</button>
</div>
{% endcapture %}{% include example.html content=example %}

## Approfondimento

Per ulteriori informazioni sui pulsanti si rimanda alla sezione [buttons](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/components/buttons/) del sito di Bootstrap.
