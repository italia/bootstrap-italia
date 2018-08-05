function myFunction() {
    // Prendi la snackbar tramite ID
    var x = document.getElementById("snackbar");

    // Aggiungi la classe "show" alla snackbar
    x.className = "show";

    // Dopo 3 secondi, rimuovi la classe dal DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}