---
layout: docs
title: Alert
description: Puoi fornire dei feedback all'utente tramite messaggi di avviso.
group: componenti
toc: true
---

## Esempi

Gli avvisi sono disponibili in quattro tipologie diverse e per qualsiasi lunghezza di testo. Inoltre può prevedere un pulsante di chiusura utilizzando la [plugin alerts di jQuery](#dismissing).

{% example html %}
{% for color in site.data.theme-colors %}
{% if color.name == "danger" or color.name == "warning" or color.name == "success" or color.name == "info" %}
<div class="alert alert-{{ color.name }}" role="alert">
  Questo è un alert di {{ color.name }}!
</div>{% endif %}{% endfor %}
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

### Link evidenziato

Usa la classe `.alert-link` per dare risalto a un link all'interno dell'alert.

{% example html %}
<div class="alert alert-danger" role="alert">
  Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
</div>
{% endexample %}

### Contenuto aggiuntivo

I messaggi di avviso possono avere del contenuto HTML aggiuntivo come degli heading, paragrafi e divisori.

{% example html %}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Avviso di successo!</h4>
  <p>Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.</p>
  <hr>
  <p class="mb-0">Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.</p>
</div>
{% endexample %}


### Chiusura

Utilizzando il plugin JavaScript di alert, è possibile eliminare qualsiasi avviso. Ecco come:

- Assicurati di aver caricato il plugin di alert o di aver compilato il codice Bootstrap JavaScript. 
- Se stai costruendo il JavaScript dal sorgente, nella versione che compilerai assicurati di includere [`util.js`]({{ site.baseurl }}/docs/come-iniziare/javascript/#util).
- Inserisci il pulsante di chiusura e la classe `.alert-dismissible`, verrà così aggiunto un ulteriore padding alla destra dell'avviso e posizionerà correttamente il pulsante `.close`.
- Sul pulsante di chiusura, aggiungi l'attributo `data-dismiss="alert"`, che attiverà la funzionalità JavaScript. Assicurati di utilizzare l'elemento `<button>` per un comportamento corretto su tutti i dispositivi.
- Per animare gli avvisi quando li si elimina, assicurarsi di aggiungere le classi `.fade` e `.show`.

Clicca sul bottone di chiusura per vedere la funzionalità di rimozione alert in azione:

{% example html %}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
{% endexample %}

## JavaScript behavior

### Trigger

Ablita la chiusura di un alert tramite JavaScript:

{% highlight js %}
$('.alert').alert()
{% endhighlight %}

Oppure con l'assegnazione dell'attributo `data` in un pulsante **all'interno dell'alert**, come nell'esempio seguente:

{% highlight html %}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endhighlight %}

Nota che chiudendo un alert lo rimuoverai dal DOM.

### Metodo

| Metodo | Descrizione |
| --- | --- |
| `$().alert()` | Attiva l'ascolto dell'evento click negli elementi che hanno l'attributo `data-dismiss="alert"` (Non è necessario quando c'è l'inizializzazione automativa tramite API.) |
| `$().alert('close')` | Chiude un alert rimuovendolo dal DOM. Se le classi `.fade` e `.show` sono presenti nell'elemento, l'avviso verrà chiuso con effetto scomparsa. |
| `$().alert('dispose')` | L'alert viene rimosso. |

{% highlight js %}$(".alert").alert('close'){% endhighlight %}

### Eventi

Il plugin  alert di Bootstrap mette a disposizione alcuni eventi per agganciare la funzionalità di avviso.

| Evento | Descrizione |
| --- | --- |
| `close.bs.alert` | Questo evento si attiva immediatamente quando viene chiamato il metodo di istanza <code>close</code>. |
| `closed.bs.alert` | Questo evento viene attivato quando l'avviso è stato chiuso (attenderà il completamento delle transizioni CSS). |

{% highlight js %}
$('#myAlert').on('closed.bs.alert', function () {
  // esegue qualcosa
})
{% endhighlight %}
