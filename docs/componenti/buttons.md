---
layout: docs
title: Buttons
description: Bootstrap Italia definisce alcuni stili per i pulsanti da utilizzare a seconda delle necessità.
group: componenti
toc: true
---

## Utilizzo

Il pulsante necessita della classe `.btn` e delle classi `.btn-` per applicare le varianti di stile, dimensione e altri attributi.

{% comment %}Example name: Button base{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary">Etichetta pulsante</button>
{% endcapture %}{% include example.html content=example %}

Le classi `.btn` sono state pensate per essere utilizzate con l'elemento `<button>`. Tuttavia, è possibile applicare lo stile di un pulsante anche ad elementi di tipo `<a>` o `<input>`, anche se alcuni browser potrebbero mostrare un rendering lievemente diverso.

{% comment %}Example name: Button link{% endcomment %}
{% capture example %}
<a class="btn btn-link" href="#" role="button">Pulsante link</a>
<button class="btn btn-secondary" type="submit">Pulsante button</button>
<input class="btn btn-outline-secondary" type="button" value="Pulsante input">
<input class="btn btn-outline-success" type="submit" value="Pulsante submit">
<input class="btn btn-danger" type="reset" value="Pulsante reset">
{% endcapture %}{% include example.html content=example %}

In questo esempio vengono utilizzate diverse varianti di stile, come `.btn-link`,`.btn-outline-secondary` e `.btn-danger`, che conferiscono a ciascun elemento un aspetto visivo unico.

{% capture callout %}

#### Accessibilità

Le classi `.btn` e `.btn-` conferiscono agli elementi html l'aspetto visivo di un pulsante. Anche elementi `<a>` o `<span>` possono subire questa trasformazione provocando discrepanza tra ciò che si rappresenta e la funzione semantica dell'elemento. Questo può provocare complesse problematiche di accessibilità.

Dove il click sul pulsante non genera un cambio di pagina utilizzare esclusivamente il tag `<button>`.

Qualora non fosse possibile, è necessario applicare in modo appropriato l'attributo `role="button"` per trasmetterne lo scopo alle tecnologie assistive.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

### Varianti di dimensione

Per ottenere pulsanti di dimensione più grande o più piccola, è sufficiente utilizzare le classi `.btn-lg` e `.btn-xs`. La dimensione `.btn-sm` coincide con la dimensione base di Bootstrap Italia, per cui non è necessario specificarla.

#### Grande

{% comment %}Example name: Button grande{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary btn-lg me-2">Etichetta pulsante</button>
<button type="button" class="btn btn-secondary btn-lg">Etichetta pulsante</button>
{% endcapture %}{% include example.html content=example %}

#### Base

{% comment %}Example name: Button base{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary me-2">Etichetta pulsante</button>
<button type="button" class="btn btn-secondary">Etichetta pulsante</button>
{% endcapture %}{% include example.html content=example %}

#### Piccolo

{% comment %}Example name: Button piccolo{% endcomment %}
{% capture example %}
<button type="button" class="btn btn-primary btn-xs me-2">Etichetta pulsante</button>
<button type="button" class="btn btn-secondary btn-xs">Etichetta pulsante</button>
{% endcapture %}{% include example.html content=example %}

#### Larghezza fluida

Per creare pulsanti o gruppi di pulsanti a tutta larghezza, come i _block buttons_ di Bootstrap 4, utilizzare un mix delle utilities **display** e **gap**. Con queste utilities abbiamo più controllo su spaziature, allineamento e comportamento responsive rispetto al classico _block button_.

{% comment %}Example name: Button full width{% endcomment %}
{% capture example %}

<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Primary</button>
  <button class="btn btn-secondary" type="button">Secondary</button>
</div>
{% endcapture %}{% include example.html content=example %}

In questo esempio è stata implementata una variante responsive che visualizza i pulsanti a larghezza piena e sovrapposti su mobile, per poi disporli affiancati dal breakpoint `md` in su.

{% comment %}Example name: Button full width su mobile{% endcomment %}
{% capture example %}

<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Primary</button>
  <button class="btn btn-secondary" type="button">Secondary</button>
</div>
{% endcapture %}{% include example.html content=example %}

### Varianti di colore

Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:

{% comment %}Example name: Varianti di colore{% endcomment %}
{% capture example %}

<div class="py-1">{% for color in site.data.theme-colors %}
<div class="btn-example">
  <button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>
  <button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }} outline</button>
  <button type="button" class="btn btn-{{ color.name }} disabled">{{ color.name | capitalize }} disabled</button>
  <button type="button" class="btn btn-outline-{{ color.name }} disabled">{{ color.name | capitalize }} outline disabled</button>
</div>{% endfor %}
</div>
{% endcapture %}{% include example.html content=example %}

#### Varianti colore su sfondo scuro

{% comment %}Example name: Varianti colore su sfondo scuro{% endcomment %}
{% capture example %}

<div class="bg-dark py-1">{% for color in site.data.theme-colors %}{% if color.name == "primary" or color.name == "secondary" %}
<div class="btn-example">
  <button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>
  <button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }} outline</button>
  <button type="button" class="btn btn-{{ color.name }} disabled">{{ color.name | capitalize }} disabled</button>
  <button type="button" class="btn btn-outline-{{ color.name }} disabled">{{ color.name | capitalize }} outline disabled</button>
</div>{% endif %}{% endfor %}</div>
{% endcapture %}{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

#### Note sullo stato disabilitato

- I tag `<a>` non supportano l'attributo `disabled`, per cui è necessario usare la classe `.disabled` per farli apparire visivamente disabilitati, e in modo da disabilitare `pointer-events` su di essi sui browser che lo supportano.
- I pulsanti disabilitati includeranno l'attributo `aria-disabled="true"` per indicare lo stato dell'elemento alle tecnologie assistive.

{% comment %}Example name: Disabilitato{% endcomment %}
{% capture example %}
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">Pulsante disabilitato</a>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

##### Stato disabilitato su elemento link

La classe `.disabled` usa `pointer-events: none` per provare a disabilitare l'attivazione dei comportamenti di default dei link `<a>`, ma tale funzionalità non è gestita in alcuni browsers. Oltre a questo, la navigazione attraverso tastiera rimane abilitata, per cui utenti che utilizzano tecnologie assistive saranno comunque in grado di attivare tali link. Per ovviare a questo problema, è possibile aggiungere l'attributo `tabindex="-1"` e utilizzare JavaScript per disabilitare le loro funzionalità.
{% endcapture %}{% include callout.html content=callout type="warning" %}

### Pulsante con icona

È possibile aggiungere un'icona personalizzata al pulsante con la classe `.btn-icon` in aggiunta alla classe `.btn` e alle relative varianti cromatiche e di dimensione definite in precedenza. L'icona può essere posizionata a sinistra o a destra del testo, a seconda della posizione in cui viene inserita all'interno del pulsante.

Per modificare la dimensione dell'icona, è possibile utilizzare le classi `.icon-*`. Le icone piccole sono raccomandate per i pulsanti di dimensione `.btn-xs`.

{% comment %}Example name: Button con icona{% endcomment %}
{% capture example %}
<button class="btn btn-success btn-lg btn-icon">
<span>Etichetta pulsante</span>
<svg class="icon icon-sm icon-inverse"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
</button>

<button class="btn btn-primary btn-icon">
  <span>Etichetta pulsante</span>
  <svg class="icon icon-sm icon-inverse"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
</button>

<button class="btn btn-danger btn-icon">
  <span>Etichetta pulsante</span>
  <svg class="icon icon-sm icon-inverse"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
</button>

<button class="btn btn-secondary btn-xs btn-icon">
  <span>Etichetta pulsante</span>
  <svg class="icon icon-xs icon-inverse"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use></svg>
</button>
{% endcapture %}{% include example.html content=example %}

{% include callout-warning-button-icon-structure.md %}

#### Pulsante con icona cerchiata

È inoltre possibile aggiungere un contorno circolare all'icona usando un contenitore con classe `.rounded-icon` all'interno dell'elemento `.btn`. L'aspetto cromatico può essere personalizzato attraverso i modificatori `.rounded-*` e `.icon.icon-*`.

{% comment %}Example name: Con icona, cerchiata{% endcomment %}
{% capture example %}
<button class="btn btn-success btn-lg btn-icon me-2">
<span class="rounded-icon">
<svg class="icon icon-xs icon-success"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use></svg>
</span>
<span>Etichetta pulsante</span>
</button>

<button class="btn btn-primary btn-icon me-2">
  <span class="rounded-icon">
    <svg class="icon icon-xs icon-primary"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use></svg>
  </span>
  <span>Etichetta pulsante</span>
</button>

<button class="btn btn-danger btn-icon me-2">
  <span class="rounded-icon">
    <svg class="icon icon-xs icon-danger"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use></svg>
  </span>
  <span>Etichetta pulsante</span>
</button>

<button class="btn btn-secondary btn-xs btn-icon">
  <span class="rounded-icon">
    <svg class="icon icon-xs icon-secondary"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-user"></use></svg>
  </span>
  <span>Etichetta pulsante</span>
</button>
{% endcapture %}{% include example.html content=example %}

## Attivazione tramite codice

```js
import { Button } from 'bootstrap-italia'

const buttonEl = document.getElementById('myButton')
const button = new Button(buttonEl)
```

#### Metodi

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">Metodo</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      {% include standard-methods.html class="Button" %}
      <tr>
        <td>toggle</td>
        <td>Attiva/disattiva la classe e sincronizza l'attributo "aria-pressed" con il valore restituito dal metodo `.toggle()`</td>
      </tr>
    </tbody>
  </table>
</div>

{% include properties.md properties=site.data.cprops.btn %}

## Breaking change

{% capture callout %}

- Modificato il nome delle varianti di dimensione per coincidere con UI Kit Italia
- Sostituite negli esempi le classi `.btn-me` con `.me-2`.
- La class `.btn-sm` è stata rimossa dagli esempi, perché coincide con la versione base.
- La dimensione delle icone non dipendono dalle dimensioni dei pulsanti.
  {% endcapture %}{% include callout-breaking.html content=callout version="3.0.0" type="danger" %}
