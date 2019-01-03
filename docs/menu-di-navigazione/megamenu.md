---
layout: docs
title: Megamenu
description: Presenta un sottomenu contenente elenchi di links relativo ad una voce della navbar.
group: menu-di-navigazione
toc: true
---

## Introduzione

Megamenu contenente un elenco di links.

Il megamenu all'interno del nav è una variazione del componente [dropdown]({{ site.baseurl }}/docs/componenti/dropdown/).

Per stilare correttamente il megamenu è sufficiente aggiungere la classe `.has-megamenu` al tag `<nav class="navbar">`. Ai dropdown a cui si desidera modificare l'aspetto transformandoli in megamenu è sufficiente aggiungere la classe `.has-megamenu` al tag `<li class="nav-item dropdown">`.

Gli elementi megamenu contenuti nelle navbar sono gestiti come elementi di tipo **collapse** nella loro versione mobile.

## Megamenu classico

Il megamenu ha una struttura colonnare, ogni colonna richiama al suo interno il componente **[Lista di link]({{ site.baseurl }}/docs/organizzare-i-contenuti/liste-di-link/)** per comporre l'elenco di link desiderato

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavC" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavC">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavC">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu Label</span></a>
          <div class="dropdown-menu">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
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

### Classico con link "more" 
 
Il megamenu può contenere un link relativo agli elenchi in esso contenuti.  

Qualora i link mostrati nel megamenu non siano tutti quelli relativi alla voce primaria (perché troppo numerosi), si può includere l'elemento  `<div class="it-external">` subito dopo il `<div class="row">` che contiene le liste di link.  
La struttura colonnare dell'elemento `<div class="it-external">` dev'essere la stessa di quella contenente le liste di link.

All'interno dell'ultima colonna andremo ad inserire la lista di link contenente il link che porterà ad una eventuale pagina in cui sarà mostrato tutto il contenuto di sezione.  
Per stilare correttamente il link è sufficiente aggiungere la classe `.it-more` al tag `<li>` che lo contiene.

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavD" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavD">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavD">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close  
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu Label</span></a>
          <div class="dropdown-menu">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
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
                      <li class="it-more"><a class="list-item medium" href="#"><span>Link list 1 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use></svg></a>
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

### Classico con Intestazione

Se ci fosse necessità di categorizzare i contenuti del megamenu, possiamo inserire un header all'interno delle link list.  
Per inserire l'header, è sufficiente inserire il tag `<h3>` all'interno del tag `<li>` all'inizio della lista relativa.

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavEi" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavEi">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavEi">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu Label</span></a>
          <div class="dropdown-menu">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li>
                      <h3 class="no_toc">Heading 1</h3>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li>
                      <h3 class="no_toc">Heading 2</h3>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li>
                      <h3 class="no_toc">Heading 3</h3>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
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

### Classico con Intestazione e link "more"
 
Si possono combinare header e link "more".

Nell'esempio di seguito, il link "more" è relativo alla sola colonna in cui è inserito.
Per aggiungere il link more è sufficiente aggiungere la classe `.it-more` al tag `<li>` al fondo della lista relativa.

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavF" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavF">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavF">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu Label</span></a>
          <div class="dropdown-menu">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li>
                      <h3 class="no_toc">Heading 1</h3>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                    <li class=" it-more"><a class="list-item medium" href="#"><span>View More </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use></svg></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li>
                      <h3 class="no_toc">Heading 2</h3>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                    <li class=" it-more"><a class="list-item medium" href="#"><span>View More </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use></svg></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li>
                      <h3 class="no_toc">Heading 3</h3>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                    <li class=" it-more"><a class="list-item medium" href="#"><span>View More </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use></svg></a>
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

I megamenu possono contenere delle liste di call to action che possono essere posizionate in fondo o a sinistra del megamenu.

### Call to action in basso
 
Per aggiungere un elenco di call to action è sufficiente inserire dopo il tag con classe `.row` contenente l'elenco primario il tag `<div class="it-megamenu-footer">` dove andremo ad inserire in una struttura colonnare identica a quella contenente la lista principale, le liste contenenti le call to action.

Di seguito un esempio:

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavG" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavG">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavG">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu Label</span></a>
          <div class="dropdown-menu">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                    </li>
                    <li><a class="list-item" href="#"><span>Link list 3 </span></a>
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
                      <li><a class="list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg><span>Link list 1 </span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg><span>Link list 1 </span></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li><a class="list-item" href="#"><svg class="icon icon-sm icon-primary left" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg><span>Link list 1 </span></a>
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

Di seguito un esempio:

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavM" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavM">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavM">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu Label</span></a>
          <div class="dropdown-menu">
            <div class="row max-height-col">
              <div class="col-xs-12 col-lg-8">
                <div class="row margin-right-col">
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span></a>
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
                        <li><a class="list-item" href="#"><span>Link list 1 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
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

Possiamo inserire a destra del megamenu un immagine ed una descrizione riguardante la sezione.

All'interno dell'ultimo tag `<div class="col-xs-12 col-lg-4">` inseriremo il tag `<div class="row max-height-col">` che a sua volta conterrà la colonna `<div class="col-12 it-vertical it-description">` all'interno della quale andremo ad inserire il blocco contenente immagine e testo.    
Il tag  contenente immagine e descrizione sarà : `<div class="description-content">`

Di seguito un esempio:

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavQ" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavQ">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavQ">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu show">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true"><span>Megamenu Label</span></a>
          <div class="dropdown-menu show">
            <div class="row max-height-col">
              <div class="col-xs-12 col-lg-8">
                <div class="row margin-right-col">
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li>
                          <h3 class="no_toc">Heading 1</h3>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span></a>
                        </li>
                        <li class="it-more"><a class="list-item medium it-more" href="#"><span>View More </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use></svg></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li>
                          <h3 class="no_toc">Heading 2</h3>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span></a>
                        </li>
                        <li class="it-more"><a class="list-item medium it-more" href="#"><span>View More </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use></svg></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li>
                          <h3 class="no_toc">Heading 3</h3>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span></a>
                        </li>
                        <li class="it-more"><a class="list-item medium it-more" href="#"><span>View More </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-arrow-right"></use></svg></a>
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
                      <img src="https://via.placeholder.com/225x110/ebebeb/808080/?text=Immagine" alt="placeholder" title="placeholder title">
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

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavCa" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavCa">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavCa">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu Label</span></a>
          <div class="dropdown-menu">
            <div class="row">
              <div class="col-12 col-lg-8">
                <div class="row">
                  <div class="col-12">
                    <h3 class="it-heading-megacolumn no_toc">Heading title left</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row">
                  <div class="col-12">
                    <h3 class="it-heading-megacolumn no_toc">Heading title right</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-12">
                    <div class="link-list-wrapper">
                      <ul class="link-list">
                        <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span></a>
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

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavE" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavE">
    <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-list"></use></svg>
  </button>
  <div class="navbar-collapsable" id="navbarNavE">
    <div class="overlay"></div>
    <div class="close-div sr-only">
      <button class="btn close-menu" type="button">
        <svg class="icon icon-sm icon-light"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close"></use></svg>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu show">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true"><span>Megamenu Label</span></a>
          <div class="dropdown-menu show">
            <div class="row max-height-col">
              <div class="col-xs-12 col-lg-8">
                <div class="row margin-right-col max-height-col">
                  <div class="col-12 col-lg-8">
                    <div class="row">
                      <div class="col-12">
                        <h3 class="it-heading-megacolumn no_toc">Heading title left</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="row">
                      <div class="col-12">
                        <h3 class="it-heading-megacolumn no_toc">Heading title right</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-12">
                        <div class="link-list-wrapper">
                          <ul class="link-list">
                            <li><a class="list-item" href="#"><span>Link list 1 </span></a>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 2 </span></a>
                            </li>
                            <li><a class="list-item" href="#"><span>Link list 3 </span></a>
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
                        <li><a class="list-item" href="#"><span>Link list 1 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 2 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 3 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
                        </li>
                        <li><a class="list-item" href="#"><span>Link list 4 </span><svg class="icon icon-sm icon-primary right" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg></a>
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
