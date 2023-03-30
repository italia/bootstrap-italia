---
layout: docs
title: Megamenu
description: Visualizza un sottomenu contenente elenchi di links relativo ad una voce della navbar.
group: menu-di-navigazione
toc: true
---

## Introduzione

Il megamenu, all'interno del `<nav>`, è una variazione del componente [dropdown]({{ site.baseurl }}/docs/componenti/dropdown/) contenente un elenco di links.

Per stilare correttamente il megamenu è sufficiente aggiungere la classe `.has-megamenu` al tag `<nav class="navbar">`. Ai dropdown dei quali si desidera modificare l'aspetto transformandoli in megamenu è sufficiente aggiungere la classe `.has-megamenu` al tag `<li class="nav-item dropdown">`.

Gli elementi megamenu contenuti nelle navbar sono gestiti come elementi di tipo **collapse** nella loro versione mobile.

{% capture callout %}

#### Accessibilità

Essendo il megamenu un componente di navigazione critico dal punto di vista dell'accessibilità se ne suggerisce l'uso solo quando strettamente necessario. In questi casi:

- Prestare particolare attenzione agli attributi `ARIA` presenti negli esempi.
- È preferibile non utilizzare le [sezioni](#classico-con-sezioni) all'interno dei megamenu a meno che non siano necessarie.
- Non devono essere presenti link con la medesima label che portino a destinazioni diverse. Nel caso dei link ["Vedi tutti"](#classico-con-link-vedi-tutti) è ad esempio importante ricordare di aggiungere uno `<span class="visually-hidden">` alla label per specificare a quale sezione si fa riferimento.
  {% endcapture %}{% include callout.html content=callout type="accessibility" %}

## Megamenu classico

Il megamenu ha una struttura colonnare, ogni colonna richiama al suo interno il componente **[Lista di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste/#liste-per-menù-di-navigazione)** per comporre l'elenco di link desiderato

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav1">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav1">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu1">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu1">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Classico con link "Vedi tutti"

Il megamenu può contenere un link relativo agli elenchi in esso contenuti.

Qualora i link mostrati nel megamenu non siano tutti quelli relativi alla voce primaria (perché troppo numerosi), si può includere l'elemento `<div class="it-external">` subito dopo il `<div class="row">` che contiene le liste di link.  
La struttura colonnare dell'elemento `<div class="it-external">` dev'essere la stessa di quella contenente le liste di link.

All'interno dell'ultima colonna inseriremo la lista di link contenente il link che porterà alla pagina in cui sarà mostrato tutto il contenuto di sezione.  
Per stilare correttamente il link è sufficiente aggiungere la classe `.it-more` al tag `<li>` che lo contiene.

{% comment %}Example name: Con link vedi tutti{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav2" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav2">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav2">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu2">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu2">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="it-external">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li class="it-more"><a class="dropdown-item list-item medium" href="#"><span>Vedi tutti</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Classico con Sezioni

Se fosse necessario categorizzare i contenuti del megamenu, possiamo inserire sezioni in testa alle Link list.  
Per inserire il titolo della sezione, è sufficiente inserire il tag `<div>` con classe `link-list-heading` prima del tag `<ul>` all'inizio della lista relativa.

{% comment %}Example name: Con sezioni{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav3" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav3">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav3">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu3">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu3">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <div class="link-list-heading">Sezione 1</div>
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <div class="link-list-heading">Sezione 2</div>
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <div class="link-list-heading">Sezione 3</div>
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Classico con Sezioni e link "Vedi tutti"

Si possono combinare sezioni e link "Vedi tutti".

Nell'esempio di seguito, il link "Vedi tutti" è relativo alla sola colonna in cui è inserito.
Per aggiungere il link more è sufficiente aggiungere la classe `.it-more` al tag `<li>` al fondo della lista relativa.

{% comment %}Example name: Con sezioni e link vedi tutti{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav4" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav4">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav4">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu4">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu4">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <div class="link-list-heading">Sezione 1</div>
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                    </li>
                    <li class=" it-more">
                      <a class="dropdown-item list-item medium" href="#">
                        <span>Vedi tutti</span>
                        <span class="visually-hidden">Sezione 1</span>
                        <svg class="icon icon-sm icon-primary right" aria-hidden="true">
                          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <div class="link-list-heading">Sezione 2</div>
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                    </li>
                    <li class=" it-more">
                      <a class="dropdown-item list-item medium" href="#">
                        <span>Vedi tutti</span>
                        <span class="visually-hidden">Sezione 2</span>
                        <svg class="icon icon-sm icon-primary right" aria-hidden="true">
                          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <div class="link-list-heading">Sezione 3</div>
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                    </li>
                    <li class=" it-more">
                      <a class="dropdown-item list-item medium" href="#">
                        <span>Vedi tutti</span>
                        <span class="visually-hidden">Sezione 3</span>
                        <svg class="icon icon-sm icon-primary right" aria-hidden="true">
                          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

## Megamenu con call to action

I megamenu possono contenere delle liste di call to action, posizionate in fondo o a sinistra del megamenu.

### Call to action in basso

Per aggiungere un elenco di call to action è sufficiente aggiungere dopo il tag con classe `.row` contenente l'elenco primario, il tag `<div class="it-megamenu-footer">`. In questo inseriremo una struttura colonnare identica a quella della lista principale che ospiterà le liste delle call to action.

{% comment %}Example name: Con call to action in basso{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav5" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav5">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav5">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu5">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu5">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                    </li>
                    <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="it-megamenu-footer">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Call to action 1</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Call to action 2</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="dropdown-item list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg><span>Call to action 3</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Call to action a destra

Per aggiungere un elenco di call to action posizionato a destra, inseriremo una lista di link particolare all'interno dell'ultima colonna delle liste di link primarie.

All'interno dell'ultimo tag `<div class="col-xs-12 col-lg-4">` inseriremo il tag `<div class="row max-height-col">` che a sua volta conterrà la colonna `<div class="col-12 it-vertical">` all'interno della quale andremo ad inserire la nostra lista di link contenente le call to action.

{% comment %}Example name: Con call to action a destra{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav6" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav6">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav6">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu6">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu6">
            <div class="row max-height-col">
              <div class="col-xs-12 col-lg-8">
                <div class="row margin-right-col">
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 10</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 11</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 12</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-lg-4">
                <div class="row max-height-col">
                  <div class="col-12 it-vertical">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 1</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 2</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 3</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 4</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

## Megamenu con immagine e descrizione

Possiamo inserire a destra del megamenu un'immagine ed una descrizione riguardante la sezione.

All'interno dell'ultimo tag `<div class="col-xs-12 col-lg-4">` inseriremo il tag `<div class="row max-height-col">` che a sua volta conterrà la colonna `<div class="col-12 it-vertical it-description">` all'interno della quale andremo ad inserire il blocco contenente immagine e testo.  
Il tag contenente immagine e descrizione sarà : `<div class="description-content">`.

{% comment %}Example name: Con immagine e descrizione{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav7" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav7">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav7">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu7">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu7">
            <div class="row max-height-col">
              <div class="col-xs-12 col-lg-8">
                <div class="row margin-right-col">
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <div class="link-list-heading">Sezione 1</div>
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                        </li>
                        <li class=" it-more">
                          <a class="dropdown-item list-item medium" href="#">
                            <span>Vedi tutti</span>
                            <span class="visually-hidden">Sezione 1</span>
                            <svg class="icon icon-sm icon-primary right" aria-hidden="true">
                              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <div class="link-list-heading">Sezione 2</div>
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                        </li>
                        <li class=" it-more">
                          <a class="dropdown-item list-item medium" href="#">
                            <span>Vedi tutti</span>
                            <span class="visually-hidden">Sezione 2</span>
                            <svg class="icon icon-sm icon-primary right" aria-hidden="true">
                              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <div class="link-list-heading">Sezione 3</div>
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 10</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 11</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 12</span></a>
                        </li>
                        <li class=" it-more">
                          <a class="dropdown-item list-item medium" href="#">
                            <span>Vedi tutti</span>
                            <span class="visually-hidden">Sezione 3</span>
                            <svg class="icon icon-sm icon-primary right" aria-hidden="true">
                              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-arrow-right"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-lg-4">
                <div class="row">
                  <div class="col-12 it-vertical it-description">
                    <div class="description-content">
                      <img src="https://via.placeholder.com/225x110/ebebeb/808080/?text=Immagine" alt="Descrizione immagine">
                      <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

## Megamenu con struttura colonnare asimmetrica

Possiamo creare strutture colonnari asimmetriche per dar spazio a sottosezioni più popolate.
Nell'esempio seguente abbiamo una struttura composta da due colonne a sinistra ed una a destra.

{% comment %}Example name: Con colonne asimmetriche{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav8" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav8">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav8">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu8">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu8">
            <div class="row">
              <div class="col-12 col-lg-8">
                <div class="row">
                  <div class="col-12 it-heading-megacolumn-wrapper">
                    <div class="it-heading-megacolumn">Sezione sinistra</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row">
                  <div class="col-12 it-heading-megacolumn-wrapper">
                    <div class="it-heading-megacolumn">Sezione destra</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Call to action a destra

Possiamo creare strutture colonnari asimmetriche ed aggiungere una colonna destra contenete una lista di call to action.

{% comment %}Example name: Con colonne asimmetriche e call to action a destra{% endcomment %}
{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="nav9" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav9">
    <svg class="icon">
      <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-burger"></use>
    </svg>
  </button>
  <div class="navbar-collapsable" id="nav9">
    <div class="overlay"></div>
    <div class="close-div">
      <button class="btn close-menu" type="button">
        <span class="visually-hidden">Nascondi la navigazione</span>
        <svg class="icon">
          <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-close-big"></use>
        </svg>
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu9">
            <span>Megamenu</span>
            <svg class="icon icon-xs">
              <use href="{{site.baseurl}}/dist/svg/sprites.svg#it-expand"></use>
            </svg>
          </a>
          <div class="dropdown-menu" role="region" aria-labelledby="megamenu9">
            <div class="row max-height-col">
              <div class="col-xs-12 col-lg-8">
                <div class="row margin-right-col max-height-col">
                  <div class="col-12 col-lg-8">
                    <div class="row">
                      <div class="col-12 it-heading-megacolumn-wrapper">
                        <div class="it-heading-megacolumn">Sezione sinistra</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 1</span></a>
                            </li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 2</span></a>
                            </li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 3</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 4</span></a>
                            </li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 5</span></a>
                            </li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 6</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="row">
                      <div class="col-12 it-heading-megacolumn-wrapper">
                        <div class="it-heading-megacolumn">Sezione destra</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-12">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 7</span></a>
                            </li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 8</span></a>
                            </li>
                            <li><a class="dropdown-item list-item" href="#"><span>Link lista 9</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-lg-4">
                <div class="row max-height-col">
                  <div class="col-12 it-vertical">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 1</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 2</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 3</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="dropdown-item list-item" href="#"><span>Call to action 4</span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}
