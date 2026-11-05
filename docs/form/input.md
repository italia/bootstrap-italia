---
layout: docs
group: form
toc: true

title: Input
description: Elementi e stili per la creazione di input accessibili e responsivi.
---

<style>
  /* Style override for Documentation purposes - Autocomplete*/
  #testAutocomplete1, #testAutocomplete2 {
    position: static;
    display: block;
  }
</style>

## Esempi di campi di input

Per il corretto funzionamento degli elementi di tipo `<input>` è di fondamentale importanza l'utilizzo uno degli appositi attributi `type` (ad esempio, `email` per l'inserimento di indirizzi email o `number` per informazioni numeriche), in modo da sfruttare i controlli nativi dei browser più recenti come la verifica dell'email, l'utilizzo di metodo di input numerico ed altro.

Per l'inserimento guidato di campi di tipo numerico si può anche utilizzare l'elemento dedicato che fornisce migliorie per la validazione e per l'esperienza complessiva, descritto alla [pagina dedicata all'input numerico]({{ site.baseurl }}/docs/form/input-numerico/).

{% comment %}Example name: Varianti per tipo {% endcomment %}
{% capture example %}
<div>
  <div class="form-group">
    <label for="exampleInputText">Campo di tipo testuale</label>
    <input type="text" class="form-control" id="exampleInputText">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Campo di tipo email</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="form-group">
    <label for="exampleInputNumber">Campo di tipo numerico</label>
    <input type="number" data-bs-input class="form-control" id="exampleInputNumber">
  </div>
  <div class="form-group">
    <label for="exampleInputTelephone">Campo di tipo telefono</label>
    <input type="tel" class="form-control" id="exampleInputTelephone">
  </div>
  <div class="form-group">
    <label class="active" for="exampleInputTime">Campo di tipo ora</label>
    <input type="time" class="form-control" id="exampleInputTime" min="9:00" max="18:00">
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Utilizzo di placeholder e label

Si può includere un'etichetta che si riposiziona automaticamente quando l'utente utilizza il campo di testo.

{% comment %}Example name: Con etichetta {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="formGroupExampleInput">Etichetta di esempio</label>
  <input type="text" class="form-control" id="formGroupExampleInput">
</div>
{% endcapture %}{% include example.html content=example %}

Si può abbinare all'etichetta un _placeholder_ (testo di esempio) per ulteriore chiarezza.

{% comment %}Example name: Con etichetta e segnaposto {% endcomment %}
{% capture example %}
<div class="form-group">
  <label class="active" for="formGroupExampleInput2">Etichetta di esempio</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Testo di esempio">
</div>
{% endcapture %}{% include example.html content=example %}

In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, aggiungendo un elemento `<small>` con classe `.form-text` all'interno di `.form-group`.

{% capture callout %}
#### Accessibilità: associazione del testo di aiuto con con i campi
Il testo di aiuto deve essere esplicitamente associato ai campi a cui si riferisce utilizzando l'attributo `aria-describedby`. Ciò garantirà che le tecnologie assistive, come i lettori di schermo, leggano questo testo di aiuto quando l'utente avrà il focus sull'elemento.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Con testo di aiuto {% endcomment %}
{% capture example %}
<div class="form-group">
  <label class="active" for="formGroupExampleInputWithHelp">Etichetta di esempio</label>
  <input
    type="text"
    class="form-control"
    id="formGroupExampleInputWithHelp"
    placeholder="Testo di esempio"
    aria-describedby="formGroupExampleInputWithHelpDescription"
  >
  <small id="formGroupExampleInputWithHelpDescription" class="form-text">Ulteriore testo informativo</small>
</div>
{% endcapture %}{% include example.html content=example %}

### Input con icona o pulsanti

{% capture callout %}

#### Accessibilità delle icone

Nel caso in cui l'icona è semanticamente rilevante e non spiegata dal testo che la segue, occorre:
- rimuovere `aria-hidden="true"`
- aggiungere `role="img"` sul tag `<svg>`
- inserire all'interno il tag `<title>` con un titolo per l'icona che ne spieghi il significato (nel formato `<title>significato icona</title>"`)

{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% comment %}Example name: Varianti con icona o pulsanti {% endcomment %}
{% capture example %}
<div class="form-group">
  <div class="input-group">
    <span class="input-group-text"><svg class="icon icon-sm" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use></svg></span>
    <label for="input-group-1">Con Etichetta</label>
    <input type="text" class="form-control" id="input-group-1" name="input-group-1">
  </div>
</div>
<div class="form-group">
  <div class="input-group">
    <span class="input-group-text"><svg class="icon icon-sm" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use></svg></span>
    <label class="active" for="input-group-2">Con Etichetta e placeholder</label>
    <input type="text" class="form-control" id="input-group-2" name="input-group-2" placeholder="Lorem Ipsum">
  </div>
</div>
<div class="form-group">
  <div class="input-group">
      <span class="input-group-text"><svg class="icon icon-sm" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use></svg></span>
      <label for="input-group-3">Con Etichetta e pulsante "primary"</label>
      <input type="text" class="form-control" id="input-group-3" name="input-group-3">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" id="button-3">Invio</button>
      </div>
    </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Disabilitato

Aggiungi l'attributo `disabled` ad un input per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti.

{% comment %}Example name: Disabilitato {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="input-text-disabled">Contenuto disabilitato</label>
  <input class="form-control" type="text" id="input-text-disabled" disabled>
</div>
{% endcapture %}{% include example.html content=example %}

### Readonly

Aggiungi l'attributo `readonly` ad un input per impedire la modifica del valore contenuto.

{% comment %}Example name: Sola lettura {% endcomment %}
{% capture example %}
<div class="form-group">
  <label class="active" for="input-text-read-only">Contenuto in sola lettura</label>
  <input class="form-control" type="text" id="input-text-read-only" value="Sola lettura" readonly>
</div>
{% endcapture %}{% include example.html content=example %}

#### Readonly normalizzato

Se per qualche motivo vuoi avere gli elementi `<input readonly>` nella forma stilizzata come testo normale usa la classe `.form-control-plaintext` anziché `.form-control`.

{% comment %}Example name: Solo lettura, normalizzato {% endcomment %}
{% capture example %}
<div>
  <div class="form-group">
    <label class="active" for="input-text-read-only-2">Contenuto in sola lettura</label>
    <input class="form-control-plaintext" value="Sola lettura" type="text" id="input-text-read-only-2" readonly>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Dimensione

È possibile modificare la dimensione dell'elemento utilizzando le classi `.form-control-lg` e `.form-control-sm`, che modificano la grandezza del carattere e la spaziatura interna.

{% comment %}Example name: Varianti di dimensione {% endcomment %}
{% capture example %}

  <div class="form-group">
    <label class="active" for="input-text-lg">Grande</label>
    <input type="text" class="form-control form-control-lg" id="input-text-lg" placeholder="Inserisci il tuo nome">
  </div>
    <div class="form-group">
    <label class="active" for="input-text-normal">Normale</label>
    <input type="text" class="form-control" id="input-text-normal" placeholder="Inserisci il tuo nome">
  </div>
  <div class="form-group">
    <label class="active" for="input-text-sm">Piccolo</label>
    <input type="text" class="form-control form-control-sm" id="input-text-sm" placeholder="Inserisci il tuo nome">
  </div>
{% endcapture %}{% include example.html content=example %}

### Attivazione tramite codice

È possibile abilitare l'input con la label associata manualmente utilizzando 
questo script:

```js
import { Input } from 'bootstrap-italia';

const inputElement = document.querySelector('#my-input');
const input = new Input(inputElement);
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
      {% include standard-methods.html class="Input" %}
    </tbody>
  </table>
</div>

## Input password

Per rendere più semplice l'inserimento della password, il campo Input di tipo password è dotato di un pulsante che permette di mostrare i caratteri inseriti. Inoltre, è possibile abbinare una descrizione estesa che ne aiuti la compilazine, ad esempio in fase di scelta di una nuova password.  

{% comment %}Example name: Password base{% endcomment %}
{% capture example %}

<p class="mt-4 pb-3">Base, login</p>
<div class="form-group">
  <label for="exampleInputPassword">Password</label>
  <input type="password" data-bs-input class="form-control input-password" id="exampleInputPassword">
  <button type="button" class="password-icon btn" role="switch" aria-checked="false">
    <span class="visually-hidden">Mostra/Nascondi Password</span>
    <svg class="password-icon-visible icon icon-sm" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-visible"></use></svg>
    <svg class="password-icon-invisible icon icon-sm d-none" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
  </button>
</div>

<p class="mt-4 pb-3">Con descrizione estesa</p>
<div class="form-group">
  <label for="exampleInputPassword2">Password</label>
  <input type="password" data-bs-input class="form-control input-password" id="exampleInputPassword2" aria-describedby="infoPassword2">
  <button type="button" class="password-icon btn" role="switch" aria-checked="false">
    <span class="visually-hidden">Mostra/Nascondi Password</span>
    <svg class="password-icon-visible icon icon-sm" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-visible"></use></svg>
    <svg class="password-icon-invisible icon icon-sm d-none" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
  </button>
  <p id="infoPassword2" class="form-text text-muted d-block small pb-0">Inserisci almeno 8 caratteri e alcuni caratteri speciali.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Password con misuratore sicurezza e suggerimenti

Nel caso di un campo per la scelta di una nuova password, è possibile abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l'uso di caratteri speciali. Inoltre, è possibile restituire all'utente una lista dei suggerimenti, con indicati quelli che sono soddistatti. 

{% capture callout %}
#### Importante sulla sicurezza per l'uso in produzione
Le due varianti del componente che seguono, con funzionalità avanzate di suggerimento e guida dell'utente nella scelta della password, sono da considerarsi esempi da usare per studio e ricerca. **Vi consigliamo di coinvolgere un esperto di sicurezza prima di implementarle in ambienti di produzione** e, in ogni caso, di valutate se riscrivere le funzioni di calcolo del punteggio, disponibili nel plugin `input-password.js`, adattandole al contesto o a cambiamenti negli standard internazionali riconosciuti. Ad esempio potreste voler cambiare i calcoli per la forza e aggiustare i relativi suggerimenti, oppure integrare con controlli per password più comuni od oggetto di leak conosciuti.
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture callout %}
#### Accessibilità dei testi di aiuto
Nel caso del campo di tipo password, è molto importante configurare correttamente l'attributo `aria-describedby` dell'elemento `input.input-password`, indicando non solo l'`id` del testo di aiuto alla compilazione se presente, ma tutti gli `id` di eventuali altri elementi con testi utili, come ad esempio i testi di suggerimento o di valutazione della forza della password presenti nelle varianti che seguono.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture callout %}
#### Accessibilità degli annunci di sicurezza
È da notare che l'elemento `p.strength-meter-info` ha l'attributo `aria-live="polite"` per permettere di percepire gli annunci di cambio stato della valutazione sicurezza alle tecnologie assistive, come i lettori di schermo.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}


{% comment %}Example name: Password con misuratore sicurezza e suggerimenti{% endcomment %}
{% capture example %}

<p class="mt-4 pb-3">Con descrizione e misuratore sicurezza</p>
<div class="form-group">
  <label for="exampleInputPassword3">Scegli password</label>
  <input type="password" data-bs-input class="form-control input-password" id="exampleInputPassword3" aria-describedby="strengthMeterInfo3 infoPassword3">
  <button type="button" class="password-icon btn" role="switch" aria-checked="false">
    <span class="visually-hidden">Mostra/Nascondi Password</span>
    <svg class="password-icon-visible icon icon-sm" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-visible"></use></svg>
    <svg class="password-icon-invisible icon icon-sm d-none" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
  </button>
  <p id="infoPassword3" class="form-text text-muted d-block small pb-0">Inserisci almeno 8 caratteri, combinando maiuscole, numeri e caratteri speciali.</p>
  <div class="password-strength-meter">
    <p id="strengthMeterInfo3" class="strength-meter-info small form-text text-muted pt-0" aria-live="polite"
      data-bs-short-pass="Password troppo breve."
      data-bs-bad-pas="Password debole."
      data-bs-good-pass="Password abbastanza sicura."
      data-bs-strong-pass="Password sicura."
    ></p>      
    <div class="password-meter progress rounded-0 position-absolute">
      <div class="row position-absolute w-100 m-0">
        <div class="col-3 border-start border-end border-white"></div>
        <div class="col-3 border-start border-end border-white"></div>
        <div class="col-3 border-start border-end border-white"></div>
        <div class="col-3 border-start border-end border-white"></div>
      </div>
      <div class="progress-bar bg-muted" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>

<p class="mt-4 pb-3">Con misuratore sicurezza e suggerimenti puntuali</p>
<div class="form-group">
  <label for="exampleInputPassword4">Scegli password</label>
  <input type="password" data-bs-input class="form-control input-password" id="exampleInputPassword4" aria-describedby="strengthMeterSuggestions4 strengthMeterInfo4 infoPassword4">
  <button type="button" class="password-icon btn" role="switch" aria-checked="false">
    <span class="visually-hidden">Mostra/Nascondi Password</span>
    <svg class="password-icon-visible icon icon-sm" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-visible"></use></svg>
    <svg class="password-icon-invisible icon icon-sm d-none" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
  </button>
  <p id="infoPassword4" class="form-text text-muted d-block small pb-0"></p>
  <div class="password-strength-meter">
    <div id="strengthMeterSuggestions4" class="strenght-meter-suggestions small form-text text-muted"></div>
    <p id="strengthMeterInfo4" class="strength-meter-info small form-text text-muted pt-0" aria-live="polite"
      data-bs-short-pass="Password troppo breve."
      data-bs-bad-pas="Password debole."
      data-bs-good-pass="Password abbastanza sicura."
      data-bs-strong-pass="Password sicura."
    ></p>      
    <div class="password-meter progress rounded-0 position-absolute">
      <div class="row position-absolute w-100 m-0">
        <div class="col-3 border-start border-end border-white"></div>
        <div class="col-3 border-start border-end border-white"></div>
        <div class="col-3 border-start border-end border-white"></div>
        <div class="col-3 border-start border-end border-white"></div>
      </div>
      <div class="progress-bar bg-muted" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Attivazione tramite codice

Per abilitare l'input password manualmente utilizzare il seguente codice:

```js
import { InputPassword } from 'bootstrap-italia';

const inputPswElement = document.querySelector('#my-input-psw');
const inputPsw = new InputPassword(inputPswElement, options);
```

#### Opzioni

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>minimumLength</td>
      <td>number</td>
      <td>8</td>
      <td>Lunghezza minima per il calcolo della forza della password (soglia password troppo breve)</td>
    </tr>
    <tr>
      <td>shortPass</td>
      <td>string</td>
      <td>Password troppo breve.</td>
      <td>Testo per il punteggio di forza della password troppo breve</td>
    </tr>
    <tr>
      <td>badPass</td>
      <td>string</td>
      <td>Password debole.</td>
      <td>Testo per punteggio di forza della password basso</td>
    </tr>
    <tr>
      <td>goodPass</td>
      <td>string</td>
      <td>Password abbastanza sicura.</td>
      <td>Testo per punteggio di forza della password buono</td>
    </tr>
    <tr>
      <td>strongPass</td>
      <td>string</td>
      <td>Password sicura.</td>
      <td>Testo per il punteggio di forza della password massimo</td>
    </tr>  
    <tr>
      <td>suggestionsLabel</td>
      <td>string</td>
      <td>Suggerimenti per una buona password:</td>
      <td>Testo nascosto visivamente che precede l'elenco di suggerimenti</td>
    </tr>
    <tr>
      <td>suggestionFollowed</td>
      <td>string</td>
      <td>suggerimenti seguito</td>
      <td>Testo singolare per la parte finale di "1 di 5 suggerimenti seguito"</td>
    </tr>
    <tr>
      <td>suggestionFollowedPlural</td>
      <td>string</td>
      <td>suggerimenti seguiti</td>
      <td>Testo plurale per la parte finale di "2 di 5 suggerimenti seguiti"</td>
    </tr>
    <tr>
      <td>suggestionOf</td>
      <td>string</td>
      <td>di</td>
      <td>Preposizione centrale per "2 di 5"</td>
    </tr>
    <tr>
      <td>suggestionMetLabel</td>
      <td>string</td>
      <td>Soddisfatto: </td>
      <td>Aria-label per l'icona di suggerimento soddisfatto</td>
    </tr>
    <tr>
      <td>suggestionMetIconPath</td>
      <td>string</td>
      <td>M9.6 16.9 4 11.4l.8-.7 4.8 4.8 8.5-8.4.7.7-9.2 9.1z</td>
      <td>Path per la forma dell'icona di suggerimento soddisfatto</td>
    </tr>
    <tr>
      <td>suggestionLength</td>
      <td>string</td>
      <td>Almeno {minLength} caratteri.</td>
      <td>Lunghezza minima della password</td>
    </tr>
    <tr>
      <td>suggestionUppercase</td>
      <td>string</td>
      <td>Una o più maiuscole.</td>
      <td>Uso di lettere maiuscole</td>
    </tr>
    <tr>
      <td>suggestionLowerCase</td>
      <td>string</td>
      <td>Una o più minuscole.</td>
      <td>Uso di lettere minuscole</td>
    </tr>
    <tr>
      <td>suggestionNumber</td>
      <td>string</td>
      <td>Una o più mumero.</td>
      <td>Uso di numeri</td>
    </tr>
    <tr>
      <td>suggestionSpecial</td>
      <td>string</td>
      <td>Uno o più caratteri speciali.</td>
      <td>Uso di caratteri speciali</td>
    </tr>
  </tbody>
</table>

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
      {% include standard-methods.html class="InputPassword" %}
    </tbody>
  </table>
</div>

## Ricerca con autocompletamento

Per ottenere un input con un risultato ricerca o un autocomplete statico è necessario aggiungere all'input la classe `.autocomplete` e l'attributo `data-bs-autocomplete` contenente un JSON da filtrare.

L'icona della lente è contenuta in uno `<span>` con classe `.autocomplete-icon`, nascosta agli screen reader dall'attributo `aria-hidden="true"`.

{% capture callout %}

#### Accessibilità

La descrizione accessibile del campo è ottenuta con una label nascosta visivamente dalla classe `.visually-hidden`.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

L'elenco dei risultati generati dalla ricerca è una lista `<ul>` con classe `.autocomplete-list`, mentre i singoli risultati sono contenuti negli elementi `<li>` della lista e si compongono di:

- **Avatar** o **Icona**: nel caso in cui non sia presente un'icona adeguata,
  utilizzare come icona di default `#it-file` per indicare una pagina generica.
- **Testo**: elemento `<span>` contenuto in `.autocomplete-list-text`
- **Label**: elemento `<em>` contenuto nel testo

Il testo corrispondente alla ricerca (_"ite"_, nell'esempio) deve essere racchiuso in un tag `<mark>`.

{% comment %}Example name: Ricerca con autocompletamento {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="autocomplete-one" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="form-control autocomplete" placeholder="Testo da cercare"
    id="autocomplete-one"
    name="autocomplete-one"
    data-bs-autocomplete="[]">
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
  <ul class="autocomplete-list" id="testAutocomplete1">
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri">
        </div>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/men/46.jpg"
               alt="Mario Rossi">
        </div>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm">
          <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use>
        </svg>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm">
          <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use>
        </svg>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm">
          <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use>
        </svg>
        <span class="autocomplete-list-text">
          <span>List <mark>Ite</mark>m</span><em>Label</em>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Ricerca con autocompletamento grande

Per ottenere una versione grande dell'Autocomplete, indicata ad esempio per intestazioni di pagina ed overlay dedicati, aggiungere la classe `.autocomplete-wrapper-big` al contenitore `.form-group`.

{% comment %}Example name: Ricerca con autocompletamento grande {% endcomment %}
{% capture example %}
<div class="form-group autocomplete-wrapper-big">
  <label for="autocomplete-two" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="form-control autocomplete" placeholder="Testo da cercare"
    id="autocomplete-two"
    name="autocomplete-two"
    data-bs-autocomplete="[]">
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
  <ul class="autocomplete-list" id="testAutocomplete2">
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Paola Pistoia">
        </div>
        <span class="autocomplete-list-text">
          <span>Paola <mark>Pi</mark>stoia</span><em>Profilo</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <div class="avatar size-sm">
          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Pierluigi Rossi">
        </div>
        <span class="autocomplete-list-text">
          <span><mark>Pi</mark>erluigi Rossi</span><em>Profilo</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
        <span class="autocomplete-list-text">
          <span>Comune di <mark>Pi</mark>sa</span><em>Amministrazione</em>
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>
        <span class="autocomplete-list-text">
          <span>Linee guida per i cataloghi pubblica amministrazione</span><em>Documento</em>
        </span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Ricerca con autocompletamento e dati

Questo autocompletamento è collegato, tramite l'attributo `data-bs-autocomplete`, ad una lista di oggetti nella quale sono presenti:

- nel campo `text` i nomi di tutte le regioni italiane
- nel campo `link` un link associato a ciascuna di esse

Questi sono i minimi dati necessari per il corretto funzionamento dell'autocomplete.

Cerca una regione italiana per verificarne il comportamento.

{% comment %}Example name: Ricerca con autocompletamento e dati, cerca una regione italiana {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="autocomplete-regioni" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="form-control autocomplete" placeholder="Testo da cercare"
    id="autocomplete-regioni"
    name="autocomplete-regioni"
    data-bs-autocomplete='{{ site.data.autocomplete.regioni | jsonify }}'>
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
</div>
{% endcapture %}{% include example.html content=example %}

Questo Autocomplete è collegato, sempre tramite l'attributo `data-bs-autocomplete`, ad una lista di oggetti nella quale sono presenti:

- nel campo `text` i nomi di alcune nazioni
- nel campo `link` un link associato a ciascuna di esse
- nel campo `icon` l'icona identificativa del risultato trovato
- nel campo `label` la label aggiuntiva

Cerca ad esempio _"Italia"_ per verificarne il comportamento.

{% comment %}Example name: Ricerca con autocompletamento e dati, cerca una nazione {% endcomment %}
{% capture example %}
<div class="form-group">
  <label for="autocomplete-test" class="visually-hidden">Cerca nel sito</label>
  <input type="search" class="form-control autocomplete" placeholder="Testo da cercare"
    id="autocomplete-test"
    name="autocomplete-test"
    data-bs-autocomplete='{{ site.data.autocomplete.nazioni | jsonify }}'>
  <span class="autocomplete-icon" aria-hidden="true">
    <svg class="icon icon-sm"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
  </span>
</div>
{% endcapture %}{% include example.html content=example %}

### Attivazione tramite codice

È possibile creare un'istanza con il constructor, ad esempio:

```js
import { InputSearch } from 'bootstrap-italia';

const inputElement = document.querySelector('#my-input-search');
const inputSearch = new InputSearch(inputElement, options);
```

#### Opzioni

```js
import { InputSearch } from 'bootstrap-italia';

const inputElement = document.querySelector('#my-input-search');
const inputSearch = new InputSearch(inputElement, {
  autocomplete: '{{ site.data.autocomplete.regioni | jsonify }}'
});
```

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Predefinito</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>autocomplete</td>
        <td>string</td>
        <td></td>
        <td>Stringa in formato JSON contenente i dati per la ricerca.</td>
      </tr>
    </tbody>
  </table>
</div>

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
      {% include standard-methods.html class="InputSearch" %}
      <tr>
        <td>search</td>
        <td>Richiama la funzionalità di ricerca.</td>
      </tr>
    </tbody>
  </table>
</div>

## Breaking change

{% capture callout %}
Quando si utilizza l'attributo `placeholder` o l'input parte già valorizzato assicurarsi di aggiungere alla label la classe **`active`** per impedire la sovrapposizione della label al campo.
{% endcapture %}{% include callout-breaking.html content=callout version="2.2.0" type="danger" %}

{% capture callout %}
Rimosso l'elemento con classe `.input-group-prepend` in favore dell'elemento 
con classe `.input-group-text`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.8.0" type="danger" %}

{% capture callout %}
Il campo di input di tipo Password è stato rivisto in chiave accessibilità e robustezza. In particolare cosa cambia: 
  - L'elemento `input.input-password` ha ora il corretto attributo `aria-describedby` al posto di `aria-labelledby`.
  - L'elemento `.password-icon` diventa un `button` con `role=switch` e uso dell'attributo `aria-checked` per lo stato.
  - Rivisto l'ordine degli elementi nell'HTML per rispecchiare la struttura corretta degli elementi. 
  - Alcuni elementi `small` o `span` diventano `p`, ad esempio per la personalizzazione con attributi `data` delle varianti più avanzate ci si rivolgerà verso l'elemento `p.strength-meter-info` e non più al generico `small.form-text`. 
  - Rimosso il controllo per il Caps-lock inserito, per non interferire con i tasti modificatori delle tecnologie assistive.
  - Aggiunta una variante con misuratore di sicurezza e suggerimenti. 
{% endcapture %}{% include callout-breaking.html content=callout version="2.10.0" type="danger" %}

{% capture callout %}
Quando si utilizza un campo input diverso da `submit`, `file`, `radio` e `checkbox` è necessario sempre applicare la classe `form-control`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.11.0" type="danger" %}
