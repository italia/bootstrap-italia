---
layout: docs
title: Bottoni
description: Bootstrap Italia definisce alcuni stili per i bottoni da utilizzare a seconda delle necessità
group: componenti
toc: true
---

## Utilizzo

Per aggiungere un bottone personalizzato, è sufficiente utilizzare la classe `.btn`, associandola a classi di tipo `.btn-` per applicarne le varianti di stile, dimensione, ecc.

{% example html %}
<button type="button" class="btn">Link</button>
{% endexample %}

Le classi `.btn` sono state pensate per essere utilizzate con l'elemento `<button>`. Tuttavia, è possibile applicare lo stile per i bottoni anche ad elementi di tipo `<a>` o `<input>`, anche se alcuni browser potrebbero mostrare un rendering lievemente diverso.

In questi casi, non dimenticare di utilizzare in modo appropriato gli attributi `role="button"` per trasmettere il loro scopo alle tecnologie assistive.

{% example html %}
<a class="btn" href="#" role="button">Link</a>
<button class="btn" type="submit">Button</button>
<input class="btn" type="button" value="Input">
<input class="btn" type="submit" value="Submit">
<input class="btn" type="reset" value="Reset">
{% endexample %}

### Varianti di colore

Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap 4, con alcune personalizzazioni:

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
<button type="button" class="btn btn-link">Link</button>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

### Varianti di dimensione

Per ottenere bottoni di dimensione più grande o più piccola, è sufficiente utilizzare rispettivamente le classi `.btn-lg` e `.btn-sm`.

{% example html %}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{% endexample %}

{% example html %}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{% endexample %}

Aggiungendo la classe `.btn-block` si ottengono invece bottoni che prendono tutta l'ampiezza a loro disposizione, a seconda delle dimensioni del loro contenitore. In questo caso, anche i bordi non sono più arrotondati.

{% example html %}
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
{% endexample %}

## Stato Attivo

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-{{ color.name }} active" aria-pressed="true">{{ color.name | capitalize }}</button>{% endfor %}
<button type="button" class="btn btn-link">Link</button>
{% endexample %}

## Stato Disabilitato

Lo stato disabilitato è ottenuto aggiungendo l'attributo `disabled`:

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-{{ color.name }} disabled">{{ color.name | capitalize }}</button>{% endfor %}
{% endexample %}

Alcune note a questo proposito:

- I tag `<a>` non supportano l'attributo `disabled`, per cui è necessario usare la classe `.disabled` per farli apparire visivamente disabilitati, e in modo da disabilitare `pointer-events` su di essi sui browser che lo supportano.
- I bottoni disabilitati includeranno l'attributo `aria-disabled="true"` per indicare lo stato dell'elemento alle tecnologie assistive.

{% example html %}
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">Link disabilitato</a>
{% endexample %}

{% callout warning %}
##### Disabilitazione link

La classe `.disabled` usa `pointer-events: none` per provare a disabilitare l'attivazione dei comportamenti di default dei link `<a>`, ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane abilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è possibile aggiungere l'attributo `tabindex="-1"` e utilizzare Javascript per disabilitare le loro funzionalità.
{% endcallout %}

## Altri dettagli

Per ulteriori informazioni sui bottoni si rimanda alla sezione [buttons](https://getbootstrap.com/docs/4.0/components/buttons/) del sito di Bootstrap.
