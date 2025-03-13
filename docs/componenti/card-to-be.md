---
layout: docs
title: Card (To be)
description: Lavori in corso sulle nuove Card di .italia
group: componenti
toc: true
---

## Card struttura

{% comment %}Example name: Struttura{% endcomment %}
{% capture example %}

<div class="row card-to-be">
  <div class="col-12 col-lg-4">
    <!--start card-->
      <article class="card card-img rounded">
        <div class="img-responsive-wrapper">
          <div class="img-responsive img-responsive-panoramic">
            <figure class="img-wrapper">
              <img src="https://placehold.co/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO" title="titolo immagine" alt="descrizione immagine">
            </figure>
          </div>
        </div>
        <div class="card-body">
          <a href="#"><h3 class="card-title h3 no_toc">Titolo</h3></a>
          <h4 class="card-subtitle mb-3 no_toc">Card subtitle</h4>
          <p class="card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        </div>
        <div class="card-body card-footer">
          <a href="#" class="btn btn-outline-primary">Azione secondaria</a>
          <a href="#" class="card-link">Link secondario</a>
        </div>
      </article>
    <!--end card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
