---
layout: docs
title: Strumenti di compilazione
description: Come compilare il codice sorgente, generare la documentazione, ed altro.
group: come-iniziare
toc: true
---

*Le informazioni di seguito non sono necessarie per utilizzare Bootstrap Italia nel tuo sito.*

Questa pagina si occupa di approfondire gli strumenti per ricompilare o personalizzare i file sorgente di Bootstrap Italia
e creare la documentazione che stai leggendo in un ambiente di svluppo locale.

## Setup strumenti

Il tema Bootstrap Italia (così come Bootstrap stesso) usa [script NPM](https://docs.npmjs.com/misc/scripts) per la
compilazione dei file.

Il file [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) include
alcuni comodi scripts per la compilazione del codice e di questa documentazione.

Per rendere funzionante il sistema di compilazione di Bootstrap Italia e poter lanciare la documentazione in ambiente locale,
è necessario seguire i passi di seguito:

1. [Scaricare e installare Node.js](https://nodejs.org/download/), che è necessario per gestire le dipendenze attraverso NPM.
2. Navigare alla root del progetto e lanciare il comando `npm install` per installare le dipendenze secondo quanto
descritto nel file [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json).
3. Installare [Ruby][install-ruby]*.
4. Installare [Bundler][gembundler] con `gem install bundler`, con il quale sarai in grado di lanciare
il comando `bundle install`. Questo comando installerà tutte le dipendenze Ruby come descritto nel file
[Gemfile]({{ site.repo }}blob/v{{ site.current_version }}/Gemfile), come Jekyll e i suoi plugin.

\* **Utenti Windows:** è bene seguire [questa guida][jekyll-windows] per installare Jekyll senza problemi. Gli step da
seguire saranno:
- Installazione di Ruby, che renderà disponibile il comando `gem install *`
- Esecuzione di `gem install bundler`, che renderà disponibile il comando `bundle install`
  
Sono disponibili maggiori informazioni su Jekyll a [questa pagina][jekyll].

Una volta completati questi passi, sarà possibile lanciare gli script che seguono.

### Utilizzare gli script NPM

Il file [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) include i seguenti comandi, che
fanno uso di  **[SASS][sass], [Autoprefixer][autoprefixer], e [UglifyJS][uglify]**:

| Task | Description |
| --- | --- |
| `npm run-script build-code` | crea la cartella `/dist` dove sono pubblicati i file compilati da utilizzare nei progetti che fanno uso di Bootstrap Italia. |
| `npm run-script build-docs` | crea la cartella `/docs/assets/dist` dove sono pubblicati i file compilati usati nella documentazione che stai leggendo. |
| `npm run-script build` | esegue entrambe i precedenti comandi, compilando i file nelle cartelle `/dist` e `/docs/assets/dist`. |
| `npm run-script watch` | Controlla le modifiche sui file soggetti a modifiche e ricompila i file `npm run docs-serve`. |
| `npm start` | Pubblica i file della documenazione nella cartella `_gh_pages` e avvia Jekyll. |

Esegui `npm run` per consultare tutti gli script disponibili.

## Tema Bootstrap Italia

Il tema è generato secondo le direttive mostrate alla [pagina relativa alla creazione di temi][bootstrap-themes] sul sito Bootstrap.

Le cartelle d'interesse sono:

- `src` che contiene tutti i file sorgente.
- `dist` che contiene i file di produzione da copiare ed utilizzare sul proprio HTML.

<div class="alert alert-warning" role="alert">
  TODO: definire meglio le inclusioni SASS e JS e le differenze nei compilati
</div>

### Codice sorgente

Il codice sorgente è visibile a questo indirizzo.

<a href="{{ site.repo }}tree/v{{ site.current_version }}/{{ site.download.source }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>

## Documentazione

La documentazione di Bootstrap Italia è gestita con [GitHub Pages](https://pages.github.com/) attraverso [Jekyll][jekyll];
per questo è composta di file statici che risiedono sul branch `gh-pages`.

Per poter testare la documentazione in ambiente locale, è sufficiente seguire le 

1. Installare Jekyll seguendo le istruzioni nel paragrafo [tooling setup](#tooling-setup).
2. Eseguire `npm start` (che a sua volta esegue il comando per lanciare il server locale `bundle exec jekyll build`)
3. Navigare su `http://localhost:9001`.

La struttura delle cartelle della documentazione è la seguente:

- `_data`: assieme al file `config-yml` definiscono le variabili utilizzate nei vari template ([documentazione][jekyll-data])
- `_includes`: contiene porzioni di codice HTML ([documentazione][jekyll-includes])
- `_layouts`: definisce alcuni modelli di pagina ([documentazione][jekyll-themes])
- `_plugins`: contiene funzioni che aumentano le funzionalità di Jekyll ([documentazione][jekyll-plugins])
- `docs`: è la cartella principale dove risiede la documentazione in formato Markdown.
- `docs/assets`: contiene file statici (javascript, css e immagini) necessari al buon funzionamento della documentazione. **Non sono file compilati nella libreria finale Bootstrap Italia**.

Una volta lanciato il comando `npm start`, Jekyll pubblica il sito statico contenente la documentazione nella cartella `_gh_pages`.

### Pubblicare la documentazione

Per pubblicare la documentazione, prima di tutto è necessario generare i file statici nella cartella d'appoggio `_gh_pages`.
Per fare questo, è sufficiente lanciare il comando:

`bundle exec jekyll build`

È necessario quindi portare tutto il contenuto di tale cartella sul branch `gh-pages` con il comando:

`npm run deploy-docs`

Tale comando creerà un nuovo commit sul branch `gh-pages`, lanciando così la pubblicazione immediata della documentazione
su GitHub Pages e visibile all'indirizzo [https://italia.github.io/bootstrap-italia/](https://italia.github.io/bootstrap-italia/).

[bootstrap-themes]: https://getbootstrap.com/docs/4.0/getting-started/theming/
[autoprefixer]: https://github.com/postcss/autoprefixer
[uglify]: https://github.com/mishoo/UglifyJS2
[sass]: http://sass-lang.com/
[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/
[jekyll]: https://jekyllrb.com/docs/home/
[jekyll-windows]: https://jekyllrb.com/docs/windows/#installation-via-rubyinstaller
[jekyll-data]: https://jekyllrb.com/docs/datafiles/
[jekyll-includes]: https://jekyllrb.com/docs/includes/
[jekyll-themes]: https://jekyllrb.com/docs/themes/
[jekyll-plugins]: https://jekyllrb.com/docs/plugins/

---

###### Continua la lettura >

Se ti interessa sapere come modificare o aggiungere nuovi componenti alla libreria Bootstrap Italia,
continua a leggere alla [pagina che spiega come farlo]({{ site.baseurl }}/docs/{{ site.docs_version }}come-iniziare/modificare-componenti/).

