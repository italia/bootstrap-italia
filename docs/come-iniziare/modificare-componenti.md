---
layout: docs
title: Modificare componenti
description: Come modificare i componenti e i moduli esistenti, e crearne di nuovi.
group: come-iniziare
toc: true
---

## Struttura di un componente

Ogni componente può avere una personalizzazione di stile e di funzionalità, preferibilmente attraverso l'utilizzo di un singolo file `scss` nella cartella `src/scss/custom/` e, opzionalmente, di un file `javascript` nella cartella `src/js/plugins/`. Questo permette di avere una struttura dei file semplice da comprendere e di più facile manutenzione.

Queste due cartelle, assieme alla cartella `docs` per la stesura della documentazione, sono le uniche cartelle dove avviene l'editing dei componenti.

Il codice presente in esse, attraverso alcune procedure di compilazione utilizzando `Rollup` viene usato per _sovrascrivere_ il codice già presente in Bootstrap {{ site.bootstrap_version }} e ne esporta una versione personalizzata (un tema) nelle cartelle `dist/js` (con relativi moduli nella cartella `plugins`) e `dist/css`.

In breve, gli elementi su cui intervenire per la creazione o la modifica di componenti personalizzati possono essere:

- Un file `.md` per la documentazione del componente
- Un file `.scss` per lo stile
- Un file `.js` per comportamenti dinamici

### Documentazione del componente

Ogni componente ha una pagina (o un paragrafo) nella documentazione alla cartella `/docs/componenti`. Tale documentazione è redatta in codice [`markdown`](https://it.wikipedia.org/wiki/Markdown) ed è comprensiva di una breve descrizione testuale, oltre ad eventuali varianti, comportamenti, esempi di codice `html` ed eventuali peculiarità in termini di codice Javascript.

Nel caso di un nuovo componente, sarà necessario aggiungere un nuovo file `.md` dedicato e la rispettiva voce al menu principale nel file `_data/nav.yml`.

### Personalizzazione di stile

I componenti base ereditano ovviamente stili e funzionalità da [Bootstrap {{ site.bootstrap_version }}][documentazione-bootstrap], di cui si può trovare il codice sorgente all'interno di `node_modules/bootstrap/`. Ovviamente, la consultazione di tale codice servirà soltanto come riferimento e nessun file all'interno di `node_modules` andrà modificato, ma esteso utilizzando quanto più possibile le variabili che Bootstrap {{ site.bootstrap_version }} mette a disposizione.

Per la personalizzazione dello stile di tali componenti, andranno infatti sovrascritte o aggiunte variabili nella cartella `src/scss/_variables.scss`; oppure, in caso non sia sufficiente sovrascrivere variabili, aggiungere o modificare classi e proprietà nella cartella `src/scss/custom/`. Si può notare le modalità con cui il file `bootstrap-italia.scss` importa ed estende secondo un preciso ordine gli stili e le funzioni di base di Bootstrap {{ site.bootstrap_version }}.

Il componente dovrebbe utilizzare una classe base `.nome-componente`, che ne definisce gli stili, e dei modificatori (se necessari) che ne possano alterare alcune proprietà (es.: `.nome-componente-sm`, `.nome-componente-primary`, ecc.).

### Personalizzazione di comportamento

Per l'implementazione di funzionalità dinamiche che richiedano l'uso di `javascript`, si può invece fare riferimento alla cartella `src/js/plugins/`.

Anche in questo caso, è bene seguire la struttura per la creazione di Plugin secondo quanto è già presente nella cartella `node_modules/bootstrap/js/` e la [pagina relativa all'utilizzo di Javascript](https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/javascript/) sul sito Bootstrap {{ site.bootstrap_version }}.

### Test di accessibilità

Bootstrap Italia utilizza [`pa11y-ci`](https://github.com/pa11y/pa11y-ci) per validare l'accessibilità dei propri componenti. Il file di configurazione esclude alcuni selettori che non sono parte della libreria ed è visibile al file `.pa11yci`.

Dopo aver avviato il server locale attraverso `npm start`, è possibile utilizzare il seguente comando per validare tutte le pagine della documentazione:

`npm run test-a11y`

Per effettuare invece il test di un singolo componente, è sufficiente utilizzare il comando seguente:

`npm run test-a11y-one [indirizzo della documentazione del componente]`

### Test di linting del codice

Bootstrap Italia utilizza [Prettier](https://prettier.io/), [`Eslint`](https://eslint.org/) e [Stylelint](https://stylelint.io/) per fare linting del codice. Utilizzare il comando

`npm run format-code`

per ricevere feedback sui problemi e avviare il processo di auto fix.

#### Esempio

Attraverso questo comando è possibile effettuare il test di accessibilità per il componente di esempio "[componente base]({{ site.baseurl }}/docs/come-iniziare/componente-base/)".

`npm run test-a11y-one http://localhost:4000/docs/come-iniziare/componente-base/`

---

###### Continua la lettura >

Per analizzare un componente di esempio da cui partire per lo sviluppo di componenti avanzati personalizzati, puoi fare riferimento alla pagina descrittiva del [componente base]({{ site.baseurl }}/docs/come-iniziare/componente-base/).

[documentazione-bootstrap]: https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/introduction/ 
[documentazione-bootstrap-theming]: https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/theming/ 
[linee-guida]: https://docs.italia.it/italia/design/lg-design-servizi-web/ 
