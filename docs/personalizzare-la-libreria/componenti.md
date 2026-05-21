---
layout: docs
title: Componenti
description: Come modificare i componenti e i moduli esistenti, e crearne di nuovi.
group: personalizzare-la-libreria
toc: true
---

## Organizzazione dei file

Ogni componente ha tre tipi di file dedicati:

- `.md` per la documentazione, in una cartella `/docs/componenti/nome-componente/` (obbligatorio)
- `.scss` per lo stile, in una cartella `src/scss/components/nome-componente/` (obbligatorio)
- `.js` per il comportamento dinamico, in una cartella `src/js/plugins/nome-componente/` (opzionale)

Il codice presente in ciascuna cartella, attraverso alcune procedure di compilazione utilizzando `Rollup` viene usato per _sovrascrivere_ il codice già presente in Bootstrap {{ site.bootstrap_version }} e ne esporta una versione personalizzata (un tema) nelle cartelle `dist/js` (con relativi moduli nella cartella `plugins`) e `dist/css`.

### Documentazione del componente

Ogni componente ha una pagina (o un paragrafo) nella documentazione alla cartella `/docs/componenti`. Tale documentazione è redatta in codice [`markdown`](https://it.wikipedia.org/wiki/Markdown) ed è comprensiva di una breve descrizione testuale, oltre ad eventuali varianti, comportamenti, esempi di codice `html` ed eventuali peculiarità in termini di codice Javascript.

Nel caso di un nuovo componente, sarà necessario aggiungere un nuovo file `.md` dedicato e la rispettiva voce al menu principale nel file `_data/nav.yml`.

### Personalizzazione di stile

Bootstrap Italia 3 utilizza **CSS custom properties** (variabili CSS) per la personalizzazione dei componenti, derivate dai [design tokens del Design System .italia]({{ site.baseurl }}/docs/come-iniziare/design-tokens/). 

Le custom properties di ogni componente sono definite all'inizio del relativo codice SCSS nella cartella `src/scss/components/`, e documentate nella tabella Properties delle schede di documentazione. 

Il prefisso delle custom properties di Bootstrap italia è `--bsi-*`. 

**Vedi anche:**
- [Guida ai design tokens]({{ site.baseurl }}/docs/come-iniziare/design-tokens/)
- [Guida alla migrazione dalla v2]({{ site.baseurl }}/docs/come-iniziare/migrazione-dalla-versione-2/)

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
