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


## 3.0.0

[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v3.0.0) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>

### Alert

- Nel markup del componente il contenuto va incluso in un tag `<p>`. 
- L'icona d'ora in poi va definita esplicitamente con il tag `<svg>` e la corretta semantica per l'accessibilità. 


### Avatar

- Nelle varianti avatar con testo i colori di fondo possono essere solo `.avatar-primary` e `.avatar-secondary`. Sono state rimosse le classi `.avatar-green`, `.avatar-orange` e `.avatar-red`.
- Corretta l'icona nella variante Avatar con icona (`sprites.svg#it-user`).
- Rimossi dagli esempi liste i colori di sfondo custom, ad esempio `.complementary-3-bg`.


### Badge

- Le classi che controllano il colore diventano specifiche per il componente e hanno cambiato nome, ad esempio le classi `.bg-secondary` e `.bg-white` diventano `.badge-secondary` e `.badge-inverse`.
- Viene definita la classe `.badge-sm` per l'uso mirato all'intero di pulsanti.  


### Breadcrumbs

- Per la versione su sfondo scuro il colore delle icone dovrà essere impostato manualmente con la classe `.icon-inverse` per renderle visibili su sfondo scuro.


### Buttons

- Il nome delle varianti di dimensione ora coincide con UI Kit Italia: 
  - Large (`.btn-lg`) diventa Grande (stessa classe `.btn-lg`).
  - Small (`.btn-sm`) diventa Base (senza classe di dimensione specifica).
  - Mini (`.btn-xs`) diventa Piccolo (stessa classe `.btn-xs`).
- La classe `.btn-me` è stata sostituita a favore delle classi di spacing generico usando `.me-2`.
- Nelle varianti con icona le classi che ne controllano il colore potrebbero aver cambiato nome, ad esempio `.icon-white` diventa `.icon-inverse`.


### Callout

- Il carattere di default del contenuto diventa senza grazie e con dimensione `16px`. 
- È disponibile la nuova classe `.callout-big-text` per aumentare la dimensione del carattere del contenuto. 
- È disponibile la nuova classe `.callout-primary`.
- Le classi che controllano il colore diventano specifiche per il componente, ad esempio le classi `.success` e `.danger` diventano `.callout-success` e `.callout-danger`.
- Sono state rimosse la classi `.important` e `.note` a favore delle varianti standard. 


### Card

- Per i metadati è stata rimossa la classe `.it-card-related` a favore del solo uso dell'elemento `<footer>` con classe `.it-card-footer` a seguire il corpo della card.
- Usa un `<div>` con la sola classe `.it-card-actions` a seguire il corpo della card per ospitare link correlati e/o secondari.
- È stata rimossa la classe `.chips-list` dall'elemento `<ul>` con classe `.it-card-chips` che ospita una lista di più argomenti.


### Chips

- È stata rimossa la classe `.chip-simple`.
- Nelle chip con pulsante di chiusura il tag `<label>` diventa `<span>`.
- Alle icone del pulsante di chiusura per le chip con classe `.chip-lg` viene aggiunta la classe `.icon-md`. 


### Dropdown

- Per quanto riguarda le icone le classi che ne controllano il colore potrebbero aver cambiato nome, ad esempio `.icon-white` diventa `.icon-inverse`.
- Aggiunta classe `.dropdown-item` alla voce attiva nell'esempio di menu voci attive ed a tutti agli elementi dei menu dropdown laddove mancava.
- Corretto markup dell'intestazione nel Menu con intestazioni e separatori, `<div>` diventa `<h4>`. Sarà da far attenzione alla corretta gerarchia in pagina di questa intestazione scegliendone il livello a seconda del contesto. 


### Footer

- Per la `<section>` di branding dell'ente: aggiunta classe `.pb-4`.
- Per la `<section>` che ospita sitemap o link: aggiunta classe `.pt-2`. 
  - Per i `<div>` interni di questa seconda sezione è stato corretto il responsive: rimossa classe `.col-md-3` e aggiunta la classe `.pb-3`.
- Per la `<section>` che presenta dati dell'ente e contatti: cambiato da `.py-4` a `.pt-4`.
  - Per i `<div>` interni di questa terza sezione sono state corrette le spaziature verticali: cambiato da `.pb-2` a `.mt-2` 
- La classe che controlla il colore delle icone social ha cambiato nome: `.icon-white` diventa `.icon-inverse`.
- Aggiunto il markup per mostrare il campo input per l'iscrizione alla newsletter.


### Header

- Cambiata la dimensione del pulsante Accedi: cambiato classe da `.btn-sm` a `.btn-sx`.
- Rimossa la classe `.ms-1` dall'icona `<svg>` che segue la voce Megamenu negli esempi.


### Icone

- Per le icone bianche da usare su sfondi scuri sono state rimosse le classi `.icon-light` e `.icon-white` a favore di `.icon-inverse`.


### Input

- Nel caso di input con icona o pulsanti, l'elemento `label` è stato spostato fuori dal contenitore `.input-group` per leggibilità del markup.
- Nel paragrafo dimensioni sono stati integrati gli esempi con icone, pulsanti di invio e istruzioni specifiche.


### Generale

La versione 3.0.0 ha portato molte breaking changes sia a livello generale che a livello di singolo componente. Fai riferimento alla [guida alla migrazione dalla versione 2]({{ site.baseurl }}/docs/come-iniziare/migrazione-dalla-versione-2/).


### Liste

- Negli esempi di varianti lista con avatar è stata rimossa la classe `.size-lg` dai `<div>` con classe `.avatar`. 
- Nelle liste con immagini sono state aggiunge le classi per controllare la dimensione dell'immagine sui `<div>` con classe `.it-thumb`: `.ratio` e `.ratio-16x9` con istruzioni su come cambiare quest'ultima con le classi specifiche per cambiare le proporzioni.
- Nelle liste con azioni e freccia è definita esplicitamente la dimensione e il colore delle icone freccia aggiungendo le classi `.icon-primary` e `.icon-sm` rispettivamente dove necessario.


### Megamenu

- Rimosse varianti scure definite dalla presenza delle classi sul `<nav>` contenitore `.theme-light-desk` e `.theme-dark-mobile`.
- Corrette spaziature sul `<div>` contenitore con classe `.megamenu`: rimosse classi `.pb-5 .pt-3 .py-lg-0`. 
- Nella variante con Call to action in basso: rimossa la classe `.justify-content-around` sul contenitore e aggiunta la classe `.flex-grow-1` agli elementi `<a>` con classe `.it-footer-link`. 


### Modale

- È stata rimossa la classe `.h5` dal titolo della modale `<h2>`.
- È stata aggiunga la classe `.icon-lg` all'icona `<svg>` del pulsante di chiusura `.btn-close`.


### Navscroll

- La classe che controlla il colore dell'icona chevron per le varianti scure ha cambiato nome: `.icon-white` diventa `.icon-inverse`.


### Paginazione

- È stato corretto il colore delle icone chevron per gli elementi disabilitati sostituendo la classe `.icon-primary` con `.icon-disabled`.
- È stato corretto l'esempio "Changer" aggiungendo la classe `.dropdown-item` che mancava sul primo elemento `.list-item`. 


### Progress indicators

- Nella variante "Pulsante con Progress Bar" la classe che controlla il colore dell'icona ha cambiato nome: `.icon-white` diventa `.icon-inverse`.


### Sections

- Negli esempi sono stati rimossi dai contenitori delle colonne tutte le classi custom per padding, margin e font a favore dello standard. 


### Sidebar

- Rimossi elementi `<span>` con classe `list-item-title-icon-wrapper`.
- Nella variante con una lista di link primaria annidata è stata rimossa la classe `.large` dagli elementi `<a>` con classi `.list-item .medium`. 
- Nelle varianti scure la classe che controlla il colore delle icone bianche ha cambiato nome: `.icon-white` diventa `.icon-inverse`.


### Torna indietro

- La classe che controlla il colore delle icone bianche ha cambiato nome: `.icon-white` diventa `.icon-inverse`.


### Torna su

- La classe che controlla il colore delle icone bianche ha cambiato nome: `.icon-white` diventa `.icon-inverse`.


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


