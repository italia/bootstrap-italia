## 2.8.0

### Avatar

Il toggle del dropdown diventa `<button>` invece di `<a>`.


### Paginazione

Il toggle del dropdown diventa `<button>` invece di `<a>`.


### Transfer

Agli elementi di `<a>` occorre aggiungere l'attributo `role="button"`.


### Header

- Il toggle del dropdown diventa `<button>` invece di `<a>`. 
- Gli altri elementi `<a>` che si comportano come toggle dropdown (eg. scelta Lingua), hanno l'aggiunta dell'attributo `role="button"`.
- Il markup del Megamenu cambia come nel nuovo componente, per approfondire andare alla [relativa pagina]({{site.baseurl}}/docs/menu-di-navigazione/megamenu/).


### Megamenu

- tutti gli esempi del componente, anche quelli integrati nel componente [header]({{ site.baseurl }}/docs/menu-di-navigazione/header/), sono stati rivisti: refactoring markup `HTML`, classi e stili nei file `_megamenu.scss`, `_navigation.scss`, `_headernavbar.scss`, `_headernavbartheme.scss`, `_navigationtheme.scss`
- rimossi esempi "con sezioni"
- rimosse classi `.it-megamenu-footer`, `.it-external`, `.it-more`, `.divider`, `h3`, `.link-list-heading` 
- rimosse variabili obsolete e inutilizzate da `_variables.scss`


### Navscroll

Gli elementi con classe `.it-back-button` diventano di tipo `<button>` invece di `<a>`.
Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.


### Sidebar

Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.


### Liste

Gli elementi di tipo `<a>` dei collapse necessitano l'aggiunta dell'attributo `role="button"`.


## 2.4.0

### Callout

Il contenitore `<div>` con classe `.callout` deve essere seguito da un ulteriore contenitore `<div>` con classe `.callout-inner`. Seguire gli esempi e la successiva descrizione per capire la composizione del nuovo componente.


## 2.12.0

### Rating

- Aggiunto attributo `aria-hidden="true"` sulle icone perché lo scopo è già trasmesso agli strumenti assistivi dal testo con classe `.visually-hidden`.


### Torna su

- Rimossi gli attributi `tabindex="-1"` e `aria-hidden="true"` per permettere il focus da tastiera e l'interazione da strumenti assistivi. 
- Aggiunto attributo `aria-label="Torna su"` per comunicare lo scopo a strumenti assistivi.


## 2.3.0

### Steppers

L'elemento con classe `.steppers-index` adesso è diventato uno `<span>` collocato fuori dalla lista `<ul>`.


## 2.13.0

### Tab

Sono stati rimossi gli elementi delle liste con classe `nav-item-filler` per 
tutte le tab di tipo `Card`.


### Input numerico

Le `label` degli input `percentuale` e `valuta` richiedono la classe `input-symbol-label`. 
Le precedenti classi `input-number-percentage` e `input-number-currency` sono state rimosse.


## 2.11.0

### Timeline

Il codice markup è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `.pin-wrapper` è ora implementato come heading `h` e non semplice `div`. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.
  - L'elemento `.pin-icon`, se semanticamente rilevante, deve avere attributo `role="img"` e contenere un tag `title` che lo descriva.
  - Gli elementi categoria e data hanno ora tag `span` `visually-hidden` che ne descrivono lo scopo.
  - L'elemento `.card-title` è ora implementato con heading `h4` per rispettare la gerarchia attuale. Dovrà avere il livello intestazione corretto a seconda della gerarchia in pagina.


### Liste di immagini

Utilizzare i tag `<figure>` e `<figcaption>` per liste di immagini con didascalia.


## 2.10.0

### Checkbox

- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.


### Radio button

- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.


### Toggles

- Il "raggruppamento" di campi di input deve prevedere l'elemento nativo `<fieldset>`. 
- Sostituire `aria-labelledby` con `aria-describedby`.


## 2.2.0

### Input

Quando si utilizza l'attributo `placeholder` o l'input parte già valorizzato assicurarsi di aggiungere alla label la classe **`active`** per impedire la sovrapposizione della label al campo.


