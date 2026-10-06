---
layout: docs
group: form
toc: true

title: Transfer
description: Un componente che consente la creazione di liste di checkbox.
---

Il componente Transfer consente di trasferire gli elementi di una lista di checkbox ad un'altra lista di checkbox.

**Il componente Transfer contiene**

- Lista checkbox di sinistra
- Pulsanti per il trasferimento dei contenuti da lista a lista
- Lista checkbox di destra

**Le liste di checkbox, sono composte da:**

- Header: contiene un checkbox per la selezione / deselezione di tutti i campi sottostanti e la label che contiene il numero di elementi della lista
- Lista checkbox

**Pulsanti per il trasferimento dei contenuti:**

- `button.transfer`: Traferisce i campi selezionati a sinistra nella colonna destra
- `button.backtransfer`: Traferisce i campi selezionati a destra nella colonna sinistra
- `button.reset`: Ripristina lo stato iniziale delle liste

Nell'esempio che segue la struttura è colonnare simmetrica nella versione desktop (5 / 2 / 5), l'utente potrà scegliere i tipi di colonna da utilizzare, usando le regole di bootstrap.

{% comment %}Example name: Base {% endcomment %}
{% capture example %}
<div data-bs-transfer>
  <div class="row">
    <div class="col-xs-12 col-md-5">
      <div class="it-transfer-wrapper source">
        <div class="transfer-header">
          <div class="form-check" aria-describedby="">
            <input type="checkbox" id="checkbox1">
            <label for="checkbox1">
              <span>
                <span class="num">
                  6
                </span>
                <span> ITEMS</span>
              </span>
              <span class="descr">Source</span>
            </label>
          </div>
        </div>
        <div class="transfer-scroll">
          <div class="transfer-group">
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox2">
              <label for="checkbox2">
                <span>
                  <span>List item 1</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox3">
              <label for="checkbox3">
                <span>
                  <span>List item 2</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox4">
              <label for="checkbox4">
                <span>
                  <span>List item 3</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox5">
              <label for="checkbox5">
                <span>
                  <span>List item 4</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox6">
              <label for="checkbox6">
                <span>
                  <span>List item 5</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox7">
              <label for="checkbox7">
                <span>
                  <span>List item 6</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-2">
      <!-- transfer buttons-->
      <div class="it-transfer-buttons">
        <button type="button" class="transfer" aria-label="Sposta avanti">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
        </button>
        <span class="visually-hidden">Etichetta per freccia destra</span>
        <button type="button" class="backtransfer" aria-label="Sposta indietro">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg>
        </button>
        <span class="visually-hidden">Etichetta for freccia sinistra</span>
        <button type="button" class="reset" aria-label="Reset">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-restore"></use></svg>
        </button>
        <span class="visually-hidden">Etichetta per icona di reset</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-5">
      <div class="it-transfer-wrapper target">
        <div class="transfer-header">
          <div class="form-check" aria-describedby="">
            <input type="checkbox" id="checkbox1b">
            <label for="checkbox1b">
              <span>
                <span class="num">
                  6
                </span>
                <span> ITEMS</span>
              </span>
              <span class="descr">Target</span>
            </label>
          </div>
        </div>
        <div class="transfer-scroll">
          <div class="transfer-group">
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox2b">
              <label for="checkbox2b">
                <span>
                  <span>List item 7</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox3b">
              <label for="checkbox3b">
                <span>
                  <span>List item 8</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox4b">
              <label for="checkbox4b">
                <span>
                  <span>List item 9</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox5b">
              <label for="checkbox5b">
                <span>
                  <span>List item 10</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox6b">
              <label for="checkbox6b">
                <span>
                  <span>List item 11</span>
                </span>
              </label>
            </div>
            <div class="form-check" aria-describedby="">
              <input type="checkbox" id="checkbox7b">
              <label for="checkbox7b">
                <span>
                  <span>List item 12</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Attivazione tramite codice

{% include callout-bundle-methods.md toggle="`data-bs-transfer`" %}

{% capture callout %}
Per l'attivazione automatica del relativo JavaScript è importante 
che il componente che contiene la struttura abbia l'attributo `data-bs-transfer`.

In alternativa si può istanziare il componente utilizzando il costruttore come nel
seguente esempio.
{% endcapture %}{% include callout.html content=callout type="info" %}

```js
import { Transfer } from 'bootstrap-italia';

const transferElement = document.querySelector('.it-transfer-wrapper');
const transfer = new Transfer(transferElement, config);
```

#### Metodi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    {% include standard-methods.html class="Transfer" %}
  </tbody>
</table>

## Breaking change

{% capture callout %}
Agli elementi di `<a>` occorre aggiungere l'attributo `role="button"`.
{% endcapture %}{% include callout-breaking.html content=callout version="2.8.0" type="danger" %}
