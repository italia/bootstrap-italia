---
layout: docs
title: Modificare componenti
description: Come modificare i componenti e i moduli esistenti, e crearne di nuovi.
group: come-iniziare
toc: true
---

## Struttura di un componente

Ogni componente può avere una personalizzazione di stile e di funzionalità, preferibilmente attraverso l'utilizzo di un singolo file `scss` nella cartella `src/scss/components/` e, opzionalmente, di un file `javascript` nella cartella `src/js/plugins/`. Questo permette di avere una struttura dei file semplice da comprendere e di più facile manutenzione.

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

Per la personalizzazione dello stile dei componenti, andranno sovrascritte o aggiunte variabili nella cartella `src/scss/base/_variables.scss`; oppure, in caso non sia sufficiente sovrascrivere variabili, aggiungere o modificare classi e proprietà nella cartella `src/scss/components/`. Si può notare le modalità con cui il file `bootstrap-italia.scss` importa ed estende secondo un preciso ordine gli stili e le funzioni di base di Bootstrap {{ site.bootstrap_version }}.

Il componente dovrebbe utilizzare una classe base `.nome-componente`, che ne definisce gli stili, e dei modificatori (se necessari) che ne possano alterare alcune proprietà (es.: `.nome-componente-sm`, `.nome-componente-primary`, ecc.).

### Personalizzazione di comportamento

Per l'implementazione di funzionalità dinamiche che richiedano l'uso di `javascript`, si può invece fare riferimento alla cartella `src/js/plugins/`.

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

Attraverso questo comando è possibile effettuare il test di accessibilità per il componente "[Button]({{ site.baseurl }}/docs/componenti/buttons/)".

`npm run test-a11y-one http://localhost:4000/docs/componenti/buttons//`

---

###### Continua la lettura >

[documentazione-bootstrap]: https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/introduction/ 
[documentazione-bootstrap-theming]: https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/theming/ 
[linee-guida]: https://docs.italia.it/italia/design/lg-design-servizi-web/ 
