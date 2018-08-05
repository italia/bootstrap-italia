---
layout: docs
title: Timeline
description: Consente agli utenti di creare una linea temporale di eventi 
group: componenti-aggiuntivi
toc: true
---

### Esempio

Per creare una Timeline di eventi per consentire agli utenti di visualizzare cronologicamente e ordinatamente le informazioni, si può utilizzare questo stile:

<style>
/* Imposta la Timeline */
.timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding:2% 1%;
    background: #0066cc;
}

/* Imposta la Timeline */
.timeline:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
}

/* Il container intorno al contenuto */
.containertime {
    padding: 10px 45px;
    position: relative;
    background-color: inherit;
    width: 50%;
}

/* Imposta lo stile dei punti sulla timeline */
.containertime:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -13px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 19px;
    border-radius: 50%;
    z-index: 1;
}

/* Imposta i container sulla sinistra */
.timeleft {
    left: 0;
}

/* Imposta i container sulla destra */
.timeright {
    left: 50%;
}

/* Imposta la direzione della freccia (destra) */
.timeleft:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 35px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
}

/* Imposta la direzione della freccia (sinistra) */
.timeright:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 35px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
}

/* Aggiusta i container sul lato destro */
.timeright:after {
    left: -12px;
}

/* Contenuto */
.timecontent {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
}

@media all and (max-width: 600px) {
  .timeline:after {
    left: 31px;
  }
  
  .containertime {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  
  .containertime:before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
  
  .containertime:after {
    left: 15px;
  }
  
  .timeright {
    left: 0%;
  }
}
</style>



<div class="timeline">
  <div class="containertime timeleft">
    <div class="timecontent">
      <h2>2017</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>      
    </div>
  </div>
  <div class="containertime timeright">
    <div class="timecontent">
      <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci.</p>      
    </div>
  </div>
  <div class="containertime timeleft">
    <div class="timecontent">
      <h2>2015</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto perfecto perfecti perfect!</p>      
    </div>
  </div>
</div>

