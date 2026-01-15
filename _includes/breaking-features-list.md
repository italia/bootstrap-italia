## 2.16.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.16.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Card

Questo è un nuovo componente card definito dalle classi `.it-card` e relativi modificatori. 

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 

Per migrare le tue card dalle deprecate `.card` alle nuove `.it-card` (v2.16.0) considera prima di tutto i cambi strutturali. Prima era:
```html
<!-- Card base minimal -->
<div class="card-wrapper">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title h5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</h3>
      <p class="card-text font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>
```

Adesso:
```html
<!-- Card base minimal -->
<article class="it-card rounded shadow-sm border">
  <h3 class="it-card-title">
    <a href="#">Titolo del contenuto</a>
  </h3>
  <div class="it-card-body">
    <p class="it-card-text">Breve descrizione.</p>
  </div>
</article>
```


### Carousel

Implementato negli esempi il nuovo componente card definito dalle classi `.it-card` e relativi modificatori. Il markup degli esempi e gli attributi per attivare il componente sono inoltre cambiati laddove c'è la necessità di gestire le altezze delle card con classi `.it-card-full-height` e/o la necessità di mostrarne le ombre `.shadow-`. 

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 


### Dimmer

Implementato negli esempi il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 


### Hero

Implementato nell'esempio con immagine e margine negativo per contenuti sovrapposti il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 


### Sections

Implementato nell'esempio con card il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 


### Timeline

Implementato nell'esempio il nuovo componente card definito dalle classi `.it-card` e relativi modificatori.  

Le classi legacy di Bootstrap `.card` sono ora deprecate ma **saranno mantenute nei fogli di stile fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 


## 2.15.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.15.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Header

La navbar presente negli esempi, quando aperta in versione mobile o a forte ingrandimento, è stata reimplementata come modale per migliorare l'accessibilità con le combinazioni principali di lettori di schermo, sistema operativo e browser. Modifiche principali: 
- struttura: la navbar ora utilizza un pattern dialog con backdrop 
- gerarchia visiva: la gestione `z-index` è allineata al componente modale
- gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo, e gestione inert
- il comportamento è diverso se implementata dentro o fuori dall'elemento `main` di pagina (se presente)

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript, assicurati che funzioni con il nuovo pattern dialog. Testa la tua implementazione con lettori di schermo e con utenti per verificarne l'accessibilità.


### Megamenu

La navbar presente negli esempi, quando aperta in versione mobile o a forte ingrandimento, è stata reimplementata come modale per migliorare l'accessibilità con le combinazioni principali di lettori di schermo, sistema operativo e browser. Modifiche principali: 
- struttura: la navbar ora utilizza un pattern dialog con backdrop 
- gerarchia visiva: la gestione `z-index` è allineata al componente modale
- gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo, e gestione inert
- il comportamento è diverso se implementata dentro o fuori dall'elemento `main` di pagina (se presente)

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript in, assicurati che funzioni con il nuovo pattern dialog. Testa la tua implementazione con lettori di schermo e con utenti per verificarne l'accessibilità.


### Navscroll

- Spostato il pulsante "Indietro" come primo elemento della struttura interna di `.menu-wrapper`.

Inoltre, la versione mobile o a forte ingrandimento del componente, che si basa sulla navbar presente anche nei componenti Header e Megamenu, è stata reimplementata come modale per migliorare l'accessibilità con le combinazioni principali di lettori di schermo, sistema operativo e browser. Modifiche principali: 
- struttura: la navbar ora utilizza un pattern dialog con backdrop 
- gerarchia visiva: la gestione `z-index` è allineata al componente modale
- gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo, e gestione inert
- il comportamento è diverso se implementata dentro o fuori dall'elemento `main` di pagina (se presente)

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript in, assicurati che funzioni con il nuovo pattern dialog. Testa la tua implementazione con lettori di schermo e con utenti per verificarne l'accessibilità.


### Sticky

La navbar presente nel markup dell'esempio "Attivabile con target", quando aperta in versione mobile o a forte ingrandimento, è stata reimplementata come modale per migliorare l'accessibilità con le combinazioni principali di lettori di schermo, sistema operativo e browser. Modifiche principali: 
- struttura: la navbar ora utilizza un pattern dialog con backdrop 
- gerarchia visiva: la gestione `z-index` è allineata al componente modale
- gestione del focus: implementato `focus-trap.js` per utenti da tastiera e lettori di schermo, e gestione inert
- il comportamento è diverso se implementata dentro o fuori dall'elemento `main` di pagina (se presente)

Se hai personalizzato il CSS della navbar, rivedi le tue modifiche per verificarne la compatibilità. Se hai modificato il comportamento JavaScript, assicurati che funzioni con il nuovo pattern dialog. Testa la tua implementazione con lettori di schermo e con utenti per verificarne l'accessibilità.


## 2.14.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.14.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Autocompletamento

Nuova modalità di utilizzo del componente Autocomplete via codice.


### Carousel

Lato JavaScript il componente Carousel deve essere importato tramite la classe 
`Carousel` e non più `CarouselBI`.


### Generale

Il `focus` con la tastiera viene adesso settato con l'attributo `data-focus-mouse`
invece che con la classe `focus--mouse`. Da tenere presente nel caso di un 
precedente utilizzo della classe `focus--mouse` per un controllo e/o un' implementazione 
ulteriore di accessibilità. 


## 2.13.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.13.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Input numerico

Le `label` degli input `percentuale` e `valuta` richiedono la classe `input-symbol-label`. 
Le precedenti classi `input-number-percentage` e `input-number-currency` sono state rimosse.


### Steppers

Gli elementi di tipo `<svg>` non interattivi necessitano dell'aggiunta di `aria-hidden="true"`.


### Tab

Sono stati rimossi gli elementi delle liste con classe `nav-item-filler` per 
tutte le tab di tipo `Card`.


## 2.12.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.12.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Rating

- Aggiunto attributo `aria-hidden="true"` sulle icone perché lo scopo è già trasmesso agli strumenti assistivi dal testo con classe `.visually-hidden`.


### Torna su

- Rimossi gli attributi `tabindex="-1"` e `aria-hidden="true"` per permettere il focus da tastiera e l'interazione da strumenti assistivi. 
- Aggiunto attributo `aria-label="Torna su"` per comunicare lo scopo a strumenti assistivi.


## 2.11.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.11.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Input

Quando si utilizza un campo input diverso da `submit`, `file`, `radio` e `checkbox` è necessario sempre applicare la classe `form-control`.


### Liste

Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.text` è ora implementato come heading `h` e non semplice `<span>`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.


### Liste di immagini

Utilizzare i tag `<figure>` e `<figcaption>` per liste di immagini con didascalia.


### Timeline

Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.pin-wrapper` è ora implementato come heading `h` e non semplice `div`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.pin-icon`, se semanticamente rilevante, deve avere attributo `role="img"` e contenere un tag `title` che lo descriva.
  - Gli elementi categoria e data hanno ora tag `span` `visually-hidden` che ne descrivono lo scopo.
  - L'elemento `.card-title` è ora implementato con heading `h4` per rispettare la gerarchia attuale. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.


## 2.10.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.10.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Checkbox

- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.


### Input

Il campo di input di tipo Password è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `input.input-password` ha ora il corretto attributo `aria-describedby` al posto di `aria-labelledby`.
  - L'elemento `.password-icon` diventa un `button` con `role=switch` e uso dell'attributo `aria-checked` per lo stato.
  - Rivisto l'ordine degli elementi nell'HTML per rispecchiare la struttura corretta degli elementi. 
  - Alcuni elementi `small` o `span` diventano `p`, ad esempio per la personalizzazione con attributi `data` delle varianti più avanzate ci si rivolgerà verso l'elemento `p.strength-meter-info` e non più al generico `small.form-text`. 
  - Rimosso il controllo per il Caps-lock inserito, per non interferire con i tasti modificatori delle tecnologie assistive.
  - Aggiunta una variante con misuratore di sicurezza e suggerimenti. 


### Liste

Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.link-list-heading` è ora implementato come heading `h` e non semplice `<span>`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.list-item-title` è ora implementato come heading `h` e non semplice `<span>`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.


### Radio button

- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.


### Toggles

- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.


## 2.8.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.8.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Avatar

Il toggle del dropdown diventa `<button>` invece di `<a>`.


### Header

- Il toggle del dropdown diventa `<button>` invece di `<a>`. 
- Gli altri elementi `<a>` che si comportano come toggle dropdown (eg. scelta Lingua), hanno l'aggiunta dell'attributo `role="button"`.
- Il markup del Megamenu cambia come nel nuovo componente, per approfondire andare alla [relativa pagina]({{site.baseurl}}/docs/menu-di-navigazione/megamenu/).


### Input

Rimosso l'elemento con classe `.input-group-prepend` in favore dell'elemento 
con classe `.input-group-text`.


### Liste

Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.


### Megamenu

- tutti gli esempi del componente, anche quelli integrati nel componente [header]({{ site.baseurl }}/docs/menu-di-navigazione/header/), sono stati rivisti: refactoring markup `HTML`, classi e stili nei file `_megamenu.scss`, `_navigation.scss`, `_headernavbar.scss`, `_headernavbartheme.scss`, `_navigationtheme.scss`
- rimossi esempi "con sezioni"
- rimosse classi `.it-megamenu-footer`, `.it-external`, `.it-more`, `.divider`, `h3`, `.link-list-heading` 
- rimosse variabili obsolete e inutilizzate da `_variables.scss`


### Navscroll

Gli elementi con classe `.it-back-button` diventano di tipo `<button>` invece di `<a>`.
Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.


### Paginazione

Il toggle del dropdown diventa `<button>` invece di `<a>`.


### Sidebar

Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.


### Transfer

Agli elementi di `<a>` occorre aggiungere l'attributo `role="button"`.


## 2.7.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.7.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Tipografia

- Reimpostata la dimensione del carattere di base su `16px` su `body`.
- Sostituite le unità `em` con `rem`.
- Aggiornati i valori `font-size` per corrispondere al nuovo calcolo dell'unità `rem`.
- Rimosse le variabili obsolete e inutilizzate da `_variables.scss`.
- Variabili specifiche dei componenti aggiornate e allineate a `UI Kit Italia v3`.


## 2.4.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.4.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Callout

Il contenitore `<div>` con classe `.callout` deve essere seguito da un ulteriore contenitore `<div>` con classe `.callout-inner`. Seguire gli esempi e la successiva descrizione per capire la composizione del nuovo componente.


## 2.3.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.3.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Steppers

L'elemento con classe `.steppers-index` adesso è diventato uno `<span>` collocato fuori dalla lista `<ul>`.


## 2.2.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v2.2.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Input

Quando si utilizza l'attributo `placeholder` o l'input parte già valorizzato assicurarsi di aggiungere alla label la classe **`active`** per impedire la sovrapposizione della label al campo.


### Generale

Per caricare i font utilizzando JavaScript occorre chiamare **esplicitamente** la funzione `loadFonts` passando il percorso della cartella dove si trovano i font.


