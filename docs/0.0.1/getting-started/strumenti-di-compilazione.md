---
layout: docs
title: Strumenti di compilazione
description: Come utilizzare gli script NPM inclusi per compilare il codice sorgente, la documentazione, ed altro.
group: getting-started
toc: true
---

## Tooling setup

Il tema Bootstrap Italia (così come Bootstrap stesso) usa [script NPM](https://docs.npmjs.com/misc/scripts) per la compilazione dei file. Il file [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) include alcuni scripts per la compilazione del codice e della documentazione che stai leggendo.

Per usare il sistema di compilazione e lanciare la documentazione in ambiente locale, è sufficiente seguire i passi di seguito:

1. [Scarica e installa Node.js](https://nodejs.org/download/), che è usato per gestire le dipendenze attraverso NPM.
2. Naviga alla root del progetto e lancia il comando `npm install` per installare le dipendenze come indicato nel file [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json).
3. [Installa Ruby][install-ruby], e [Bundler][gembundler] con `gem install bundler`, e sarai in grado di lanciare il comando `bundle install`. Questo comando installerà tutte le dipendenze Ruby come indicato nel file [Gemfile]({{ site.repo }}/blob/v{{ site.current_version }}/Gemfile), come Jekyll e i suoi plugin.
  - **Utenti Windows:** è bene leggere [questa guida](jekyll-windows) per installare Jekyll senza problemi.
  
Puoi trovare maggiori informazioni su Jekyll a [questa pagina](jekyll).

Una volta completati questi passi, sarà possibile lanciare gli script che seguono.

### Utilizzare gli script NPM

Il file [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) include i seguenti comandi, che fanno uso di  **Usa [SASS](sass), [Autoprefixer][autoprefixer], e [UglifyJS](uglify)**:

| Task | Description |
| --- | --- |
| `npm run-script build-code` | `npm run code-build` crea la cartella `/dist` dove sono pubblicati i file compilati da utilizzare nei progetti che fanno uso di Bootstrap Italia. |
| `npm run-script build-docs` | `npm run docs-build` crea la cartella `/docs/assets/dist` dove sono pubblicati i file compilati usati nella documentazione che stai leggendo. |
| `npm run-script build` | Lancia entrambe le compilazioni precedenti, compilando i file nelle cartelle `/dist` e `/docs/assets/dist`. |
| `npm run-script watch` | Controlla le modifiche sui file soggetti a modifiche e ricompila i file `npm run docs-serve`. |
| `npm start` | Pubblica i file della documenazione nella cartella `_gh_pages` e avvia Jekyll. |

Esegui `npm run` per consultare tutti gli script disponibili.

## Tema Bootstrap Italia

Il tema è generato secondo le direttive mostrate alla [pagina relativa alla creazione di temi](https://getbootstrap.com/docs/4.0/getting-started/theming/) sul sito Bootstrap.

Le cartelle d'interesse sono:

- `src` che contiene tutti i file sorgente.
- `dist` che contiene i file di produzione da copiare ed utilizzare sul proprio HTML.

_TODO: definire meglio le inclusioni nel SASS e le differenze nei compilati_

## Documentazione

La documentazione è gestita attraverso [Jekyll](jekyll) e utilizza file basati sul linguaggio Markdown.

1. Installare Jekyll seguendo le istruzioni nel paragrafo [tooling setup](#tooling-setup).
2. Eseguire `npm start`.
3. Navigare su `http://localhost:9001`.

La struttura delle cartelle della documentazione è la seguente:

- `_data`: assieme al file `config-yml` definiscono le variabili utilizzate nei vari template ([documentazione](jekyll-data))
- `_includes`: contiene porzioni di codice HTML ([documentazione](jekyll-includes))
- `_layouts`: definisce alcuni modelli di pagina ([documentazione](jekyll-themes))
- `_plugins`: contiene funzioni che aumentano le funzionalità di Jekyll ([documentazione](jekyll-plugins))
- `docs`: è la cartella principale dove risiede la documentazione in formato Markdown.
- `docs/assets`: contiene file statici (javascript, css e immagini) necessari al buon funzionamento della documentazione. **Non sono file compilati nella libreria finale Bootstrap Italia**.

Una volta lanciato il comando `npm start`, Jekyll pubblica il sito statico contenente la documentazione nella cartella `_gh_pages`.

[autoprefixer]: https://github.com/postcss/autoprefixer
[uglify]: https://github.com/mishoo/UglifyJS2
[sass]: http://sass-lang.com/
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/
[jekyll]: https://jekyllrb.com/docs/home/
[jekyll-windows]: https://jekyllrb.com/docs/windows/
[jekyll-data]: https://jekyllrb.com/docs/datafiles/
[jekyll-includes]: https://jekyllrb.com/docs/includes/
[jekyll-themes]: https://jekyllrb.com/docs/themes/
[jekyll-plugins]: https://jekyllrb.com/docs/plugins/
