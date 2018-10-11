---
layout: docs
title: Megamenu
description: Presenta un sottomenu contenente elenchi di links relativo ad una voce della navbar.
group: componenti
toc: true
---

## Introduzione

Megamenu contenente un elenco di links.

Il megamenu all'interno del nav è una variazione del compenente [dropdown]({{ site.baseurl }}/docs/componenti/dropdown/).

Per stilare correttamente il megamenu è sufficiente aggiungere la classe `.has-megamenu` al tag `<nav class="navbar">`. Ai dropdown a cui si desidera modificare l'aspetto transformandoli in megamenu è sufficiente aggiungere la classe `.has-megamenu` al tag `<li class="nav-item dropdown">`.

Gli elementi megamenu contenuti nelle navbar sono gestiti come elementi di tipo **collapse** nella loro versione mobile.

### Basic  
Il megamenu ha una stuttura colonnare, ogni colonna richiama al suo interno il componente **[linklist]({{ site.baseurl }}/docs/componenti/linklist/)** per comporre l'elenco di link desiderato

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavC" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavC"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavC">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
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

### Basic con "more" link.  
Il megamenu può conmtenere un link relativo agli elenchi in esso contenuti.  
Qualora i link mostrati nel megamenu non siano tutti quelli relativi alla voce primaria (perchè troppo numerosi), si può includere l'elemento  `<div class="it-external">` subito dopo il `<div class="row">` che contiene le linklist.  
La struttura colonnare dell'elemento `<div class="it-external">` dev'essere la stessa di quella contenente le linklist.  
All'interno dell'ultima colonna andremo ad inserire la linklist contenente il link che porterà ad una eventuale pagina in cui sarà mostrato tutto il contenuto di sezione.  
Per stilare correttamente il link è sufficiente aggiungere la classe `.it-more` al tag `<li>` che lo contiene.


{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavD" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavD"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavD">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
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
                                 <li class="it-more"><a class="list-item medium" href="#link 1"><span>Link list 1 </span><i class="it-arrow-right" aria-hidden="true"> </i></a>
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

### Basic con Header.  
Se ci fosse necessità di categorizzare i contenuti del megamenu, possiamo inserire un header all'interno delle link list.  
Per inserire l'header, è sufficiente inserire il tag `<h3>` all'interno del tag `<li>` all'inizio della lista relativa.

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavE" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavE"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavE">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                                 <h3>Heading </h3>
                              </li>
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li>
                                 <h3>Heading </h3>
                              </li>
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li>
                                 <h3>Heading </h3>
                              </li>
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
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

### Basic con Header e More link.  
Si possono combinare header e "more" link.  
Nell'esempio di seguito, il link "more" è relativo alla sola colonna in cui è inserito.
Per aggiungere il link more è sufficiente aggiungere la classe `.it-more` al tag `<li>` al fondo della lista relativa.

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavF" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavF"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavF">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                                 <h3>Heading </h3>
                              </li>
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                              <li class=" it-more"><a class="list-item medium" href="#link 3"><span>View More </span><i class="it-arrow-right" aria-hidden="true"> </i></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li>
                                 <h3>Heading </h3>
                              </li>
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                              <li class=" it-more"><a class="list-item medium" href="#link 3"><span>View More </span><i class="it-arrow-right" aria-hidden="true"> </i></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li>
                                 <h3>Heading </h3>
                              </li>
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                              <li class=" it-more"><a class="list-item medium" href="#link 3"><span>View More </span><i class="it-arrow-right" aria-hidden="true"> </i></a>
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

### Megamenu con call to action.  
I megamenu possono contenere delle liste di call to action che possono essere posizionate in fondo o a sinistra del megamenu.

**Call to action in posizione footer**  
Per aggiungere un elenco di call to action è sufficiente inserire dopo il tag con classe `.row` contenente l'elenco primario il tag `<div class="it-megamenu-footer">` dove andremo ad inserie in una struttura colonnare identica a quella contenente la lista principale, le liste contententi le call to action.

Di seguito un esempio:

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavG" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavG"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavG">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="link-list-wrapper">
                           <ul class="link-list">
                              <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                              </li>
                              <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
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
                                 <li><a class="list-item" href="#link 1"><i class="it-favorite" aria-hidden="true"> </i><span>Link list 1 </span></a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div class="col-12 col-lg-4">
                           <div class="link-list-wrapper">
                              <ul class="link-list">
                                 <li><a class="list-item" href="#link 1"><i class="it-favorite" aria-hidden="true"> </i><span>Link list 1 </span></a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div class="col-12 col-lg-4">
                           <div class="link-list-wrapper">
                              <ul class="link-list">
                                 <li><a class="list-item" href="#link 1"><i class="it-favorite" aria-hidden="true"> </i><span>Link list 1 </span></a>
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

### Megamenu con call to action.

**Call to action a destra** 
Per aggiungere un elenco di call to action posizionato a destra, inseriremo una linklist particolare all'interno dell'ultima colonna delle linklist primarie.

**Struttura**  
All'interno dell'ultimo tag `<div class="col-xs-12 col-lg-4">` inseriremo il tag `<div class="row max-height-col">` che a sua volta conterrà la colonna `<div class="col-12 it-vertical">` all'interno della quale andremo ad inserire la nostra linklist contenete le call to action.


Di seguito un esempio:

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavM" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavM"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavM">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-12 col-lg-4">
                              <div class="link-list-wrapper">
                                 <ul class="link-list">
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-12 col-lg-4">
                              <div class="link-list-wrapper">
                                 <ul class="link-list">
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
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
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span><i class="it-favorite" aria-hidden="true"> </i></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span><i class="it-favorite" aria-hidden="true"> </i></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span><i class="it-favorite" aria-hidden="true"> </i></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span><i class="it-favorite" aria-hidden="true"> </i></a>
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

### Megamenu con immagine e descrizione.

Possiamo inserire a destra del megamenu un immagine ed una descrizione riguardante la sezione.

**Struttura**  
All'interno dell'ultimo tag `<div class="col-xs-12 col-lg-4">` inseriremo il tag `<div class="row max-height-col">` che a sua volta conterrà la colonna `<div class="col-12 it-vertical it-description">` all'interno della quale andremo ad inserire il blocco contenente immagine e testo.    
Il tag  contenente immagine e descrizione sarà : `<div class="description-content">`

Di seguito un esempio:

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavQ" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavQ"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavQ">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                                       <h3>Heading </h3>
                                    </li>
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li class="it-more"><a class="list-item medium it-more" href="#link 3"><span>View More </span><i class="it-arrow-right" aria-hidden="true"> </i></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-12 col-lg-4">
                              <div class="link-list-wrapper">
                                 <ul class="link-list">
                                    <li>
                                       <h3>Heading </h3>
                                    </li>
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li class="it-more"><a class="list-item medium it-more" href="#link 3"><span>View More </span><i class="it-arrow-right" aria-hidden="true"> </i></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-12 col-lg-4">
                              <div class="link-list-wrapper">
                                 <ul class="link-list">
                                    <li>
                                       <h3>Heading </h3>
                                    </li>
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                    <li class="it-more"><a class="list-item medium it-more" href="#link 3"><span>View More </span><i class="it-arrow-right" aria-hidden="true"> </i></a>
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
                                 <img src="http://placehold.jp/12/ebebeb/808080/225x110.png?text=I%20M%20A%20G%20E" alt="placeholder" title="placeholder title">
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

### Megamenu con struttura colonnare asimmetrica.

Possiamo creare strutture colonnari asimmetriche per dar spazio a sottosezioni più popolate.  
Nell'esempio seguente abbiamo una struttura composta da due colonne a sinistra ed una a destra.

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavC" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavC"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavC">
      <div class="overlay"></div>
      <div class="close-div sr-only">
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                              <h3 class="it-heading-megacolumn">Heading title left</h3>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                 <ul class="link-list">
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="col-12 col-lg-6">
                              <div class="link-list-wrapper">
                                 <ul class="link-list">
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 col-lg-4">
                        <div class="row">
                           <div class="col-12">
                              <h3 class="it-heading-megacolumn">Heading title right</h3>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-12 col-lg-12">
                              <div class="link-list-wrapper">
                                 <ul class="link-list">
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
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

### Megamenu con struttura colonnare asimmetrica e call to action a destra.

Possiamo creare strutture colonnari asimmetriche ed aggiungere una colonna destra contenete una lista di call to action.

{% capture example %}
<nav class="navbar navbar-expand-lg has-megamenu">
   <button class="custom-navbar-toggler" type="button" aria-controls="navbarNavE" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarNavE"><span class="it-list"></span>
   </button>
   <div class="navbar-collapsable" id="navbarNavE">
      <div class="overlay"></div>
      <div class="close-div sr-only"> 
         <button class="btn close-menu" type="button"><span class="it-close"></span>close
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
                                    <h3 class="it-heading-megacolumn">Heading title left</h3>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-12 col-lg-6">
                                    <div class="link-list-wrapper">
                                       <ul class="link-list">
                                          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                          </li>
                                          <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                          </li>
                                          <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div class="col-12 col-lg-6">
                                    <div class="link-list-wrapper">
                                       <ul class="link-list">
                                          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                          </li>
                                          <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                          </li>
                                          <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-lg-4">
                              <div class="row">
                                 <div class="col-12">
                                    <h3 class="it-heading-megacolumn">Heading title right</h3>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-12 col-lg-12">
                                    <div class="link-list-wrapper">
                                       <ul class="link-list">
                                          <li><a class="list-item" href="#link 1"><span>Link list 1 </span></a>
                                          </li>
                                          <li><a class="list-item" href="#link 2"><span>Link list 2 </span></a>
                                          </li>
                                          <li><a class="list-item" href="#link 3"><span>Link list 3 </span></a>
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
                                    <li><a class="list-item" href="#link 1"><span>Link list 1 </span><i class="it-favorite" aria-hidden="true"> </i></a>
                                    </li>
                                    <li><a class="list-item" href="#link 2"><span>Link list 2 </span><i class="it-favorite" aria-hidden="true"> </i></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span><i class="it-favorite" aria-hidden="true"> </i></a>
                                    </li>
                                    <li><a class="list-item" href="#link 3"><span>Link list 3 </span><i class="it-favorite" aria-hidden="true"> </i></a>
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
