---
layout: docs
title: Navbar superiore
description: Include il supporto per collapse plugin, megamenu e accordion sidebar mobile.
group: componenti
toc: true
---

## Top Navigation
### Basic text menu

Navbar semplice con elenco di links.

Il menu visibile su desktop viene collassato e reso invisibile ed accessibile attraverso il pulsante `.custom-navbar-toggler`.

La proprietà `data-target` definisce il menu che andrà visualizzato al click sul pulsante. La proprietà `data-target` è legata all'id dell'elemento da visualizzare.

La classe `.navbar-collapsable` definsce le caratteristiche del menù principale nelle varie declinazioni Desktop / Tablet / mobile.

{% capture example %}
<nav class="navbar navbar-expand-lg"><span></span>
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNav"><span class="it-list"></span>
  </button>
  <div class="navbar-collapsable" id="navbarNav">
    <div class="close-div">
      <button class="btn close-menu" type="button"><span class="it-close"></span>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a>
        </li>
        <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 disabilitato</span></a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1"><span>link 4 </span></a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1"><span>link 4 </span></a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1"><span>link 4 </span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Basic text with dropdown

Nelle navbar oltre alla sequenza di link è possibile inserire elementi dropdown.

Per stilare correttamente il dropdown menù è necessario inserire nel tag `<li class="nav-item">` la classe aggiuntiva `dropdown`.

Gli elementi dropdown contenuti nelle navbar sono gestiti come elementi di tipo **collapse** nella loro versione mobile.

{% capture example %}
<nav class="navbar navbar-expand-lg"><span></span>
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavB" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavB"><span class="it-list"></span>
  </button>
  <div class="navbar-collapsable" id="navbarNavB">
    <div class="close-div">
      <button class="btn close-menu" type="button"><span class="it-close"></span>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item active"><a class="nav-link active" href="#1"><span>link 1 active </span><span class="sr-only">current</span></a>
        </li>
        <li class="nav-item"><a class="nav-link disabled" href="#1"><span>link 2 disabilitato </span></a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1"><span>link 3 </span></a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1"><span>link 4 </span></a>
        </li>
        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Dropdown item </span></a>
          <div class="dropdown-menu">
            <div class="link-list-wrapper">
              <ul class="link-list">
                <li>
                  <h3>Heading</h3>
                </li>
                <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                </li>
                <li><a class="list-item" href="#link 2"><span>Link list 2</span></a>
                </li>
                <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                </li>
                <li><span class="divider"></span>
                </li>
                <li><a class="list-item" href="#link 3"><span>Link list 4 </span></a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link" href="#1"><span>link 5 </span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Navigation with Megamenu (in progress)

Il megamenu all'interno del nav è una variazione del compenente dropdown.

Per stilare correttamente il megamenu è sufficiente aggiungere la classe `.megamenu` al tag `<nav class="navbar">`. Tutti i dropdown all'interno del Navigatore si trasformeranno in megamenu.

Gli elementi megamenu contenuti nelle navbar sono gestiti come elementi di tipo **collapse** nella loro versione mobile.

{% capture example %}
<nav class="navbar navbar-expand-lg megamenu"><span></span>
  <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavC" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavC"><span class="it-list"></span>
  </button>
  <div class="navbar-collapsable" id="navbarNavC">
    <div class="close-div">
      <button class="btn close-menu" type="button"><span class="it-close"></span>close
      </button>
    </div>
    <div class="menu-wrapper">
      <ul class="navbar-nav">
        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu 1 </span></a>
          <div class="dropdown-menu">
            <div class="link-list-wrapper">
              <ul class="link-list">
                <li>
                  <h3>Megamenu content 1 </h3>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu 2 </span></a>
          <div class="dropdown-menu">
            <div class="link-list-wrapper">
              <ul class="link-list">
                <li>
                  <h3>Megamenu content 2 </h3>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><span>Megamenu 3 </span></a>
          <div class="dropdown-menu">
            <div class="link-list-wrapper">
              <ul class="link-list">
                <li>
                  <h3>Megamenu content 3 </h3>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}

### Inline Menu

La classe distintiva del wrapper esterno è `.inline-menu`.

Gli inline menù possono contenere liste di link di ogni tipo; nell'esempio che segue è stata inserita una link list collassabile.

Per maggiori informazioni, si può fare riferimento alla [documentazione dei Link List]({{ site.baseurl }}/docs/componenti/link-list/).

{% capture example %}
<nav class="inline-menu">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li><a class="list-item large medium right-icon" href="#collapseOne" data-toggle="collapse" aria-expanded="false" aria-controls="collapseOne"><span>Link list 1 </span><i class="it-expand right" aria-hidden="true"> </i></a>
        <ul class="link-sublist collapse" id="collapseOne">
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
        </ul>
      </li>
      <li><a class="list-item large medium right-icon" href="#collapseTwo" data-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo"><span>Link list 1 </span><i class="it-expand right" aria-hidden="true"> </i></a>
        <ul class="link-sublist collapse" id="collapseTwo">
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
        </ul>
      </li>
      <li><a class="list-item large medium right-icon" href="#collapseThree" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree"><span>Link list 1 </span><i class="it-expand right" aria-hidden="true"> </i></a>
        <ul class="link-sublist collapse" id="collapseThree">
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}{% include example.html content=example %}
