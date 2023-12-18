# Contribuire a Bootstrap Italia

Prenditi un momento per leggere questo documento così da rendere il processo semplice e consistente con quello utilizzato
dal resto della comunità degli sviluppatori.

## Creare una issue

L'[issue tracker](https://github.com/italia/bootstrap-italia/issues) è il posto giusto dove inserire segnalazioni di bug,
richieste di nuove funzionalità e creazione di pull request, nel rispetto di queste condizioni:

- Per favore, **non** usare l'issue tracker per richieste di supporto personali.
  [Slack di Developers Italia](https://slack.developers.italia.it/), [Slack di Bootstrap](https://bootstrap-slack.herokuapp.com/)
  o Stack Overflow sono i posti giusti a cui fare riferimento, dove sarà anche più facile trovare risposte immediate.
- Allo stesso modo, per favore **non** provocare gli altri o "trollare" nei commenti alle issue.
  Mantenere la discussione pertinente e rispettare le opinioni di tutti. Per confronti o questioni più articolate,
  è sempre auspicabile usare [Slack di Developers Italia](https://slack.developers.italia.it/) o il [Forum di Developers Italia](https://forum.italia.it/).
- Rispettare le indicazioni che trovate di seguito per l'utilizzo di label, la segnalazione di bug, e la creazione di pull request.

## Lavorazione di una issue

Per prendere in carico una issue, è necessario effettuare il fork del repository sul proprio account, secondo il normale flusso GitHub.

Il flow da seguire per lo sviluppo è semplificato rispetto a un git-flow standard, per permettere una maggior velocità di sviluppo, e la creazione di una history leggibile.

- Qualsiasi cosa nel ramo principale (main) è definita come stabile e potenzialmente deployabile.
- Per lavorare su qualcosa di nuovo, creare un nuovo branch da main e assegnare un nome descrittivo:

1. in caso di una nuova feature `feat/nome_della_feature` (es: feat/new-button-component)
2. in caso di fix `fix/nome_descrittivo_<numero_issue>` (es: fix/focus_textarea_252)

- Al termine della lavorazione, per proporre il proprio codice per l'approvazione, è sufficiente aprire una Pull Request ([qui](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) le istruzioni nel caso di fork), assicurandosi di rispettare la checklist descritta nel [template preimpostato](https://github.com/italia/bootstrap-italia/blob/main/.github/PULL_REQUEST_TEMPLATE.md).

I criteri da seguire durante il lavoro sulle feature e sulle issue sono i seguenti:

- Utilizzare lo standard [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) per scrivere messaggi di commit leggibili e standardizzati
- In caso di vari commit su un branch che non aggiungono informazione alla feature o al fix in questione (ad esempio fix: revert last work o chore: typo in documentation) meglio fare uno squash dei vari commit (o richiedere di farlo a chi mergerà la PR in questione)
- Cercare di allinearsi a main prima di richiedere una review, utilizzando rebase o merge (https://amerlin.keantex.com/git-merge-vs-rebase/) e risolvendo eventuali conflitti.

## Issue e label

Il repository di Bootstrap Italia usa alcune label per identificare le issue (criticità), tra le principali troviamo:

- `accessibility` - Criticità riguardanti accessibilità.
- `bug` - Segnalazione di malfunzionamenti nel codice o problemi tecnici con i tool di compilazione.
- `design` - Criticità riguardanti il design dei componenti e la loro conformità alle [linee guida di design per i siti internet e i servizi digitali della PA](https://docs.italia.it/italia/design/lg-design-servizi-web/).
- `docs` - Criticità riguardanti la documentazione dei componenti.
- `duplicate` - Criticità o pull request duplicata.
- `enhancement` - Criticità che possono riguardare nuovi componenti o nuove funzionalità.
- `good first issue` - Criticità particolarmente semplici da prendere in carico per chi non ha conoscenza approfondita del progetto.
- `help wanted` - Criticità pronte per ricevere contributi da parte della comunità e di nuovi aspiranti sviluppatori.
- `invalid` - Criticità considerata invalida.
- `question` - Indica una criticità o pull request per la quale si ha bisogno di maggiori informazioni.
- `wontfix` - Indica che la criticità o la pull request viene chiusa senza alcun lavoro aggiuntivo.

## Licenza

Contribuendo al codice o alla documentazione accetti di rilasciare il tuo codice secondo la licenza open source già presente nel repository.
