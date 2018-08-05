---
layout: docs
title: Snackbar / Toast
description: Consente agli utenti di visualizzare agevolmente piccoli messaggi o notifiche a scomparsa, per visualizzare ad esempio l'Esito di un'operazione 
group: componenti-aggiuntivi
toc: true
---

### Esempio

Per aggiungere un elemento Snackbar / Toast a scomparsa, si può utilizzare il seguente stile:

<style>
  /* Elemento Snackbar / Toast posizionato in basso al centro dello schermo */
#snackbar {
    visibility: hidden; /* Nascosto di default. Visualizzato tramite click */
    min-width: 250px; /* Larghezza minima */
    margin-left: -125px; /* Divide la larghezza minima per due */
    background-color: #003366; /* Colore di sfondo */
    color: #fff; /* Colore del testo */
    text-align: center; /* Testo centrato */
    border-radius: 8px; /* Stondatura del toast */
    padding: 16px; /* Padding */
    position: fixed; /* Posizionamento */
    z-index: 1; /* Aggiunge un z-index se necessario */
    left: 50%; /* Centra la snackbar */
    bottom: 30px; /* Spazio dal fondo dello schermo */
}

/* Visualizza la snackbar (ATTENZIONE: La classe viene aggiunta da JS). */
#snackbar.show {
    visibility: visible; /* Visualizzazione */

/* Animazione: mezzo secondo per eseguire il fade-in. Dopo due secondi e mezzo, esegue il fade-out */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animazioni */
@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}
</style>

E il seguente JS:

<script>
function myFunction() {
    // Prendi la snackbar tramite ID
    var x = document.getElementById("snackbar");

    // Aggiungi la classe "show" alla snackbar
    x.className = "show";

    // Dopo 3 secondi, rimuovi la classe dal DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
</script>



<div class="container">
          <div class="row">
            <!-- In questo esempio usiamo un pulsante per aprire la Snackbar -->
<button class="btn mb-1 btn-primary" onclick="myFunction()">Show Snackbar</button>

<!-- Il DIV della Snackbar -->
<div id="snackbar">Some text some message..</div>  
          </div>
      </div>
