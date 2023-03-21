---
layout: docs
group: componenti
toc: true
title: Steppers
description: Gli "Stepper" mostrano l'avanzamento del progresso di una procedura a più passi attraverso la numerazione dei passi stessi.
---

<style>
  /* Style override for Documentation purposes */

  .bd-example .steppers-content {
    height: 400px;
    border: 2px dashed #eee;
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
  }

  .bd-example .steppers-content p {
    margin-bottom: 0;
  }

  .bd-example .mobile-examples .steppers-content {
    height: 150px;
  }

  .bd-example .steppers.bg-dark .steppers-content{
    color: #EEE;
    border-color: #aaa;
    background: #17324d;
    opacity: 0.5;
  }
  .bd-example .steppers.bg-dark {
    padding: 30px;
  }

@media screen and (min-width: 992px) {
  .bd-example .mobile-examples .steppers-progress {
    display: block;
  }

  .bd-example .mobile-examples .steppers-dots {
    display: flex;
  }
}

@media screen and (max-width: 991px) {
  .bd-example {
    overflow: hidden;
    padding: 0;
    margin-bottom: 6px;
  }
  .bd-example .steppers-content {
    height: 300px;
    border: none;
  }
  .bd-example .steppers.bg-dark {
    padding: 0;
  }
}
</style>

## Intestazione

Il contenitore degli Stepper ha sempre una classe `.steppers`. La sua intestazione è contenuta in una lista `<ul>` all'interno della quale i singoli passi (o _step_) sono rappresentati da elementi `<li>`.

{% capture callout %}
Breaking feature dalla versione **2.3.0**

L'elemento con classe `.steppers-index` adesso è diventato uno `<span>` collocato fuori dalla lista `<ul>`.
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture callout %}
L'aspetto della modalità mobile degli Steppers è differente rispetto a quello desktop. Se si sta consultando questa documentazione su un PC desktop, per visualizzare correttamente gli esempi seguenti in formato mobile sarà necessario ridimensionare la finestra del browser al di sotto dei 992 pixel.
{% endcapture %}{% include callout.html content=callout type="info" %}

### Varianti intestazione

#### Solo testo

I passi visibili nell'intestazione possono essere corredati da tre classi aggiuntive:

- `.confirmed` per individuare uno step già confermato. È bene corredare tali step con un'icona che ne identifichi il completamento (vedi di seguito).
- `.active` per individuare lo step attualmente attivo; su dispositivi mobili è l'unico visualizzato.
- `.steppers-index` per individuare un indice, visibile solo su mobile, che può contenere lo stato attuale di progresso indicato in forma testuale

È necessario ridurre la finestra del browser per apprezzare il comportamente degli Stepper su dispositivi di dimensioni ridotte.

{% comment %}Example name: Intestazione solo testo{% endcomment %}
{% capture example %}
<div class="steppers">
  <div class="steppers-header">
    <ul>
      <li class="confirmed">Primo contenuto <svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato</span></li>
      <li class="active">Secondo contenuto <span class="visually-hidden">Attivo</span></li>
      <li>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true">2/6</span>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Testo e icone

Le label presenti negli step dell'intestazione possono essere anticipate da un'icona.

{% comment %}Example name: Intestazione testo e icone{% endcomment %}
{% capture example %}
<div class="steppers">
  <div class="steppers-header">
    <ul>
      <li class="confirmed"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>Primo contenuto <svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato</span></li>
      <li class="active"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-lock"></use></svg>Secondo contenuto <span class="visually-hidden">Attivo</span></li>
      <li><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-settings"></use></svg>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true">2/6</span>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

#### Ordine degli step

Le label presenti negli steps dell'header possono essere anticipate dal numero ordinale relativo allo stesso. Come mostrato nell'esempio, nel caso di uno step completato al posto del numero va inclusa un'icona di conferma con un testo riservato agli screen reader.

È necessario aggiungere la classe `.no-line` al `<li>` attivo per nascondere il bordo inferiore azzurro, in questo caso ridondante.

{% comment %}Example name: Intestazione ordinata{% endcomment %}
{% capture example %}
<div class="steppers">
  <div class="steppers-header">
    <ul>
      <li class="confirmed"><span class="steppers-number"><svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato</span></span>Primo contenuto</li>
      <li class="active no-line"><span class="steppers-number"><span class="visually-hidden">Step </span>2</span>Secondo contenuto <span class="visually-hidden">Attivo</span></li>
      <li><span class="steppers-number"><span class="visually-hidden">Step </span>3</span>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true"><span>1</span> <span class="active">2</span> <span>3</span> <span>4</span></span>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

## Navigazione degli step

I pulsanti "Avanti" e "Indietro" dovranno essere utilizzati per implementare la logica di navigazione degli Steppers nelle web app e sono dotati di classi `.steppers-btn-prev` e `.steppers-btn-next`.

Il passaggio da uno step all'altro attraverso i pulsanti contenuti in `.steppers-nav` determina un cambiamento del contenuto presente in `.steppers-content`.

{% capture callout %}

#### Accessibilità

Nel caso si stia sviluppando una _Single page application_ oppure una sequenza di step in AJAX il contenitore `.steppers-content` dovrebbe avere un attributo ARIA `aria-live="polite"` per avvisare gli utilizzatori di screen reader dall'avvenuto cambiamento del contenuto.

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con navigazione degli step{% endcomment %}
{% capture example %}
<div class="steppers">
  <div class="steppers-header">
    <ul>
      <li class="confirmed">Primo contenuto <svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato</span></li>
      <li class="active">Secondo contenuto <span class="visually-hidden">Attivo</span></li>
      <li>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true">2/6</span>
  </div>
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
    <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm d-none d-lg-block">Conferma</button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

### Varianti navigazione per mobile

La versione mobile degli Steppers non visualizza l'elenco completo degli step disponibili, ma solo quello corrente. Per questa ragione è possibile aggiungere degli indicatori di progresso allo `.steppers-nav`.

Questi indicatori saranno visualizzati solo su mobile, ma nei seguenti esempi sono stati resi disponibili anche nella visualizzazione desktop. Si raccomanda comunque la visualizzazione in un viewport ridotto per ottenere un esempio realistico dell'aspetto finale.

#### Progress bar

La Progress bar è quella nativa di Bootstrap 5 ed è contenuta in un elemento `.steppers-progress` situato fra i pulsanti "Indietro" ed "Avanti".

{% comment %}Example name: Con navigazione mobile barra di progresso{% endcomment %}
{% capture example %}
<div class="steppers mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <div class="steppers-progress">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

#### Pallini

I pallini sono elementi `<li>` contenuti in una lista `.steppers-dots` situato fra i pulsanti "Indietro" e "Avanti".

Per ragioni di accessibilità, i `<li>` devono contenere uno `<span>` con classe `.visually-hidden `riservato agli screen reader con un testo indicante il numero di step e lo stato.

{% comment %}Example name: Con navigazione mobile pallini{% endcomment %}
{% capture example %}
<div class="steppers mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <ul class="steppers-dots">
      <li class="done"><span class="visually-hidden">Step 1 di 6 - Confermato</span></li>
      <li class="done"><span class="visually-hidden">Step 2 di 6 - Confermato</span></li>
      <li class="done"><span class="visually-hidden">Step 3 di 6 - Confermato</span></li>
      <li><span class="visually-hidden">Step 4 di 6</span></li>
      <li><span class="visually-hidden">Step 5 di 6</span></li>
      <li><span class="visually-hidden">Step 6 di 6</span></li>
    </ul>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

#### Pulsante Salva

Su dispositivi mobili è possibile inserire un terzo pulsante "Salva" di aspetto differente con classe `.steppers-btn-save` fra i pulsanti "Indietro" e "Avanti".

{% comment %}Example name: Con navigazione mobile e pulsante salva{% endcomment %}
{% capture example %}
<div class="steppers mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <button type="button" class="btn btn-primary btn-sm steppers-btn-save">Salva</button>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

#### Pulsante conferma

Su dispositivi mobili è possibile sostituire il pulsante "Avanti" con un pulsante "Conferma" di stile differente, con la classe `.steppers-btn-confirm`.

{% comment %}Example name: Con navigazione mobile e pulsante conferma{% endcomment %}
{% capture example %}
<div class="steppers mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm">Conferma</button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

## Versione su sfondo scuro

Per ottenere una versione scura degli Stepper è sufficiente aggiungere la classe `.bg-dark` al contenitore principale.

{% comment %}Example name: Con sfondo scuro{% endcomment %}
{% capture example %}
<div class="steppers bg-dark">
  <div class="steppers-header">
    <ul>
      <li class="confirmed">Primo contenuto <svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato</span></li>
      <li class="active">Secondo contenuto <span class="visually-hidden">Attivo</span></li>
      <li>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true">2/6</span>
  </div>
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
    <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm d-none d-lg-block">Conferma</button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

### Varianti intestazione

{% comment %}Example name: Con sfondo scuro, varianti intestazione{% endcomment %}
{% capture example %}
<!-- Solo testo -->
<div class="steppers bg-dark">
  <div class="steppers-header">
    <ul>
      <li class="confirmed">Primo contenuto <svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato</span></li>
      <li class="active">Secondo contenuto <span class="visually-hidden">Attivo</span></li>
      <li>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true">2/6</span>
  </div>
</div>

<!-- Testo e icone -->
<div class="steppers bg-dark">
  <div class="steppers-header">
    <ul>
      <li class="confirmed"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-calendar"></use></svg>Primo contenuto <svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato</span></li>
      <li class="active"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-lock"></use></svg>Secondo contenuto <span class="visually-hidden">Attivo</span></li>
      <li><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-settings"></use></svg>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true">2/6</span>
  </div>
</div>

<!-- Numeri -->
<div class="steppers bg-dark">
  <div class="steppers-header">
    <ul>
      <li class="confirmed"><span class="steppers-number"><svg class="icon steppers-success"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check"></use></svg><span class="visually-hidden">Confermato Step 1</span></span>Primo contenuto</li>
      <li class="active no-line"><span class="steppers-number"><span class="visually-hidden">Attivo Step </span>2</span>Secondo contenuto</li>
      <li><span class="steppers-number"><span class="visually-hidden">Step </span>3</span>Terzo contenuto</li>
    </ul>
    <span class="steppers-index" aria-hidden="true"><span>1</span> <span class="active">2</span> <span>3</span> <span>4</span></span>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Varianti navigazione per mobile

Si raccomanda la visualizzazione in un viewport ridotto per ottenere un esempio realistico dell'aspetto finale.

#### Progress bar

{% comment %}Example name: Con sfondo scuro, navigazione mobile barra di progresso{% endcomment %}
{% capture example %}
<div class="steppers bg-dark mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <div class="steppers-progress">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

#### Pallini

{% comment %}Example name: Con sfondo scuro, navigazione mobile pallini{% endcomment %}
{% capture example %}
<div class="steppers bg-dark mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <ul class="steppers-dots">
      <li class="done"><span class="visually-hidden">Step 1 di 6 - Confermato</span></li>
      <li class="done"><span class="visually-hidden">Step 2 di 6 - Confermato</span></li>
      <li class="done"><span class="visually-hidden">Step 3 di 6 - Confermato</span></li>
      <li><span class="visually-hidden">Step 4 di 6</span></li>
      <li><span class="visually-hidden">Step 5 di 6</span></li>
      <li><span class="visually-hidden">Step 6 di 6</span></li>
    </ul>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

#### Pulsante Salva

{% comment %}Example name: Con sfondo scuro, navigazione mobile e pulsante salva{% endcomment %}
{% capture example %}
<div class="steppers bg-dark mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <button type="button" class="btn btn-primary btn-sm steppers-btn-save">Salva</button>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next">Avanti<svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-right"></use></svg></button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}

#### Pulsante conferma

{% comment %}Example name: Con sfondo scuro, navigazione mobile e pulsante conferma{% endcomment %}
{% capture example %}
<div class="steppers bg-dark mobile-examples">
  <div class="steppers-content" aria-live="polite">
    <!-- Esempio START -->
    <p>Contenuto di esempio dello step corrente</p>
    <!-- Esempio END -->
  </div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"><svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-chevron-left"></use></svg>Indietro</button>
    <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm">Conferma</button>
  </nav>
</div>
{% endcapture %}{% include example.html content=example %}
