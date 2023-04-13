---
layout: docs
title: Accordion
description: Costruisci accordion collassabili verticalmente basati su Collapse.
group: componenti
toc: true
---

## Come funziona

Per ottimizzare l'ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti _collassabili_ o _collapse_), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti _fisarmoniche_ o _accordion_).

L'accordion utilizza il componente [Collapse]({{site.baseurl}}/docs/componenti/collapse) per renderizzare degli elementi collassabili. Fare riferimento ad esso per la documentazione JavaScript.

## Gruppi di elementi richiudibili

Gli elementi richiudibili sono molto spesso mostrati in gruppo, tipicamente usati per approfondire voci o argomenti mostrati nelle singole barre cliccabili.

{% capture callout %}

#### Accessibilità

Nell'esempio di codice ogni elemento `<button>` è inserito all'interno di un elemento `<h2>` (o altro livello h in funzione del contesto) in quanto, frequentemente, i pulsanti di azione di un accordion sono anche i titoli della sezione che segue.

Tuttavia l'implementazione degli accordion va eseguita tenendo conto del contesto della pagina; potrebbe essere necessario eliminare gli elementi `<h2>` o gestire il componente con altra semantica più consona, ad esempio con liste di descrizione `<dl>`.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Base{% endcomment %}
{% capture example %}

<div class="accordion" id="collapseExample">
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading1c">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1c" aria-expanded="true" aria-controls="collapse1c">
        Elemento Richiudibile #1
      </button>
    </h2>
    <div id="collapse1c" class="accordion-collapse collapse show" role="region" aria-labelledby="heading1c">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading2c">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2c" aria-expanded="false" aria-controls="collapse2c">
        Elemento Richiudibile #2
      </button>
    </h2>
    <div id="collapse2c" class="accordion-collapse collapse" role="region" aria-labelledby="heading2c">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading3c">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3c" aria-expanded="false" aria-controls="collapse3c">
        Elemento Richiudibile #3
      </button>
    </h2>
    <div id="collapse3c" class="accordion-collapse collapse" role="region" aria-labelledby="heading3c">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

#### Attributi ARIA

Assicurati di aggiungere `aria-expanded` all'elemento di controllo. Questo attributo trasmette esplicitamente lo stato corrente dell'elemento comprimibile legato al controllo a screen reader e tecnologie assistive simili. Se l'elemento comprimibile è chiuso in modo predefinito, l'attributo sull'elemento di controllo dovrebbe avere il valore `aria-expanded="false"`. Se imposti l'elemento comprimibile aperto in modo predefinito utilizzando la classe `show`, sul controllo invece imposta `aria-expanded="true"`. Il plugin attiva/disattiva automaticamente questo attributo sul controllo in base all'apertura o alla chiusura dell'elemento richiudibile (via JavaScript, o perché l'utente ha attivato un altro elemento di controllo anch'esso legato allo stesso elemento richiudibile). Se il componente HTML dell'elemento di controllo non è un pulsante (ad esempio un `<a>` o `<div>`), l'attributo `role="button"` dovrebbe essere aggiunto al componente.

Inoltre, se il tuo elemento di controllo si riferisce a un singolo elemento richiudibile – cioè l'attributo `data-bs-target` sta puntando a un selettore `id` – potresti aggiungere un ulteriore attributo `aria-controls` all'elemento di controllo, contenente l'`id` dell'elemento richiudibile. I moderni screen reader e tecnologie assistive simili fanno uso di questo attributo per fornire agli utenti scorciatoie aggiuntive per navigare direttamente all'elemento richiudibile stesso.

L'elemento richiudibile deve avere un `role="region"` con attributo `aria-labelledby` associato all'`id` del suo elemento di controllo.

_Bootstrap Italia estende le funzionalità di Bootstrap implementando i comandi via tastiera descritti nelle [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion)._
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Accordion

Per ottenere un gruppo di elementi mutuamente richiudibili (o _accordion_), è sufficiente aggiungere ad ogni elemento `.accordion-collapse` l’attributo `data-parent` con il relativo ID del contenitore.

{% comment %}Example name: Accordion{% endcomment %}
{% capture example %}

<div class="accordion" id="accordionExample1">
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
        Elemento Accordion #1
      </button>
    </h2>
    <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading1">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
        Elemento Accordion #2
      </button>
    </h2>
    <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading2">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        Elemento Accordion #3
      </button>
    </h2>
    <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample1" role="region" aria-labelledby="heading3">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Accordion annidati

Più gruppi di accordion possono essere annidati.

{% capture callout %}

#### Accessibilità collapse e accordion annidati

Utilizzare questo approccio solo quando strettamente necessario: dal punto di vista dell'accessibilità non si tratta di una soluzione ottimale.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Accordion annidati{% endcomment %}
{% capture example %}

<div class="accordion" id="accordionExample2">
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading1a">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1a" aria-expanded="true" aria-controls="collapse1a">
        Elemento Accordion #1
      </button>
    </h2>
    <div id="collapse1a" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2" role="region" aria-labelledby="heading1a">
      <div class="accordion-body">
        <div class="accordion" id="accordionExample2N">
          <div class="accordion-item">
            <h3 class="accordion-header no_toc" id="heading1n">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1n" aria-expanded="true" aria-controls="collapse1n">
                Elemento Accordion annidato #1
              </button>
            </h3>
            <div id="collapse1n" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2N" role="region" aria-labelledby="heading1n">
              <div class="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header no_toc" id="heading2n">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2n" aria-expanded="false" aria-controls="collapse2n">
                Elemento Accordion annidato #2
              </button>
            </h3>
            <div id="collapse2n" class="accordion-collapse collapse" data-bs-parent="#accordionExample2N" role="region" aria-labelledby="heading2n">
              <div class="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header no_toc" id="heading3n">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3n" aria-expanded="false" aria-controls="collapse3n">
                Elemento Accordion annidato #3
              </button>
            </h3>
            <div id="collapse3n" class="accordion-collapse collapse" data-bs-parent="#accordionExample2N" role="region" aria-labelledby="heading3n">
              <div class="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading2a">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2a" aria-expanded="false" aria-controls="collapse2a">
        Elemento Accordion #2
      </button>
    </h2>
    <div id="collapse2a" class="accordion-collapse collapse" data-bs-parent="#accordionExample2" role="region" aria-labelledby="heading2a">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading3a">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3a" aria-expanded="false" aria-controls="collapse3a">
        Elemento Accordion #3
      </button>
    </h2>
    <div id="collapse3a" class="accordion-collapse collapse" data-bs-parent="#accordionExample2" role="region" aria-labelledby="heading3a">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Sfondo primario

Applicando classi aggiuntive all'elemento `.accordion` è possibile utilizzare il colore primario come sfondo degli header.

### Header attivi

Aggiungere la classe `.accordion-background-active` ad `.accordion` per ottenere header con sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile.

{% comment %}Example name: Con sfondo header attivi{% endcomment %}
{% capture example %}

<div class="accordion accordion-background-active" id="accordionExampleHa">
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading1b">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1b" aria-expanded="true" aria-controls="collapse1b">
        Elemento Accordion #1
      </button>
    </h2>
    <div id="collapse1b" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleHa" role="region" aria-labelledby="heading1b">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading2b">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2b" aria-expanded="false" aria-controls="collapse2b">
        Elemento Accordion #2
      </button>
    </h2>
    <div id="collapse2b" class="accordion-collapse collapse" data-bs-parent="#accordionExampleHa" role="region" aria-labelledby="heading2b">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading3b">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3b" aria-expanded="false" aria-controls="collapse3b">
        Elemento Accordion #3
      </button>
    </h2>
    <div id="collapse3b" class="accordion-collapse collapse" data-bs-parent="#accordionExampleHa" role="region" aria-labelledby="heading3b">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Hover degli Header

Aggiungere la classe `.accordion-background-hover` ad `.accordion` per ottenere header con sfondo di colore primario all'hover.

{% comment %}Example name: Con sfondo header all'hover{% endcomment %}
{% capture example %}

<div class="accordion accordion-background-hover" id="accordionExampleHh">
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading1d">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1d" aria-expanded="true" aria-controls="collapse1d">
        Elemento Accordion #1
      </button>
    </h2>
    <div id="collapse1d" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleHh" role="region" aria-labelledby="heading1d">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading2d">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2d" aria-expanded="false" aria-controls="collapse2d">
        Elemento Accordion #2
      </button>
    </h2>
    <div id="collapse2d" class="accordion-collapse collapse" data-bs-parent="#accordionExampleHh" role="region" aria-labelledby="heading2d">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading3d">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3d" aria-expanded="false" aria-controls="collapse3d">
        Elemento Accordion #3
      </button>
    </h2>
    <div id="collapse3d" class="accordion-collapse collapse" data-bs-parent="#accordionExampleHh" role="region" aria-labelledby="heading3d">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Icona a sinistra

Aggiungendo la classe `.accordion-left-icon` ad `.accordion` si ottiene una variante in cui l'icona _chevron_ che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell'header.

{% comment %}Example name: Con icona a sinistra{% endcomment %}
{% capture example %}

<div class="accordion accordion-left-icon" id="accordionExampleLft">
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading1l">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1l" aria-expanded="true" aria-controls="collapse1l">
        Elemento Accordion #1
      </button>
    </h2>
    <div id="collapse1l" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading1l">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading2l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2l" aria-expanded="false" aria-controls="collapse2l">
        Elemento Accordion #2
      </button>
    </h2>
    <div id="collapse2l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading2l">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header no_toc" id="heading3l">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3l" aria-expanded="false" aria-controls="collapse3l">
        Elemento Accordion #3
      </button>
    </h2>
    <div id="collapse3l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading3l">
      <div class="accordion-body">
        Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

# Implementazione

Il componente Accordion si basa su quello nativo di [Bootstrap {{ site.bootstrap_version }}](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/components/accordion/){:target="\_blank"}, a sua volta basato sul componente [Collapse](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/components/collapse/){:target="\_blank"}.

Bootstrap Italia migliora l'accessibilità dell'Accordion implementando la navigazione via tastiera degli header con le frecce cursore (su/giù) e con i tasti <kbd>Home</kbd> (primo elemento) ed <kbd>End</kbd> (ultimo elemento).

Le funzionalità aggiuntive del componente vengono implementate nei seguenti file:

- [src/js/plugins/accordion.js](https://github.com/italia/bootstrap-italia/blob/main/src/js/plugins/accordion.js){:target="\_blank"}

Seguendo l'approccio utilizzato nel resto della libreria il componente è sviluppato in vanilla JS ed estende il `BaseComponent` di Bootstrap.
