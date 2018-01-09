# Bootstrap Italia

:exclamation: Attenzione! Questo codice è ancora in fase di sviluppo e non è pronto per essere utilizzato!

## Come iniziare

Questo è un tema basato su [Bootstrap v4.0.0-beta.3](https://getbootstrap.com/docs/4.0/getting-started/introduction/).

## Setup strumenti

Il tema Bootstrap Italia (così come Bootstrap stesso) usa [script NPM](https://docs.npmjs.com/misc/scripts) per la compilazione dei file. Il file package.json include alcuni scripts per la compilazione del codice e della documentazione che stai leggendo.

Per usare il sistema di compilazione e lanciare la documentazione in ambiente locale, è sufficiente seguire i passi di seguito:

1. [Scaricare e installare Node.js](https://nodejs.org/download/), che è necessario per gestire le dipendenze attraverso NPM.
2. Navigare alla root del progetto e lanciare il comando `npm install` per installare le dipendenze secondo quanto indicato nel file `package.json`.
3. Installare [Ruby][install-ruby], e poi [Bundler][gembundler] con `gem install bundler`, e sarai in grado di lanciare il comando `bundle install`. Questo comando installerà tutte le dipendenze Ruby come indicato nel file file `Gemfile`, come Jekyll e i suoi plugin.

\* **Utenti Windows:** è bene seguire [questa guida][jekyll-windows] per installare Jekyll senza problemi. Gli step da seguire saranno:
- Installazione di Ruby, che renderà disponibile il comando `gem install *`
- Esecuzione di `gem install bundler`, che renderà disponibile il comando `bundle install`
- Esecuzione di `bundle exec jekyll build`
  
Sono disponibili maggiori informazioni su Jekyll a [questa pagina][jekyll].

Una volta completati questi passi, sarà possibile lanciare gli script che seguono.

### Utilizzare gli script NPM

Il file `package.json` include vari comandi per la compilazione degli asset, che fanno uso di  **Usa [SASS][sass], [Autoprefixer][autoprefixer], e [UglifyJS][uglify]**:

Esegui `npm run` per consultare tutti gli script disponibili.

## Tema Bootstrap Italia

Il tema è generato secondo le direttive mostrate alla [pagina relativa alla creazione di temi](https://getbootstrap.com/docs/4.0/getting-started/theming/) sul sito Bootstrap.

Le cartelle d'interesse sono:

- `src` che contiene tutti i file sorgente.
- `dist` che contiene i file di produzione da copiare ed utilizzare sul proprio HTML.

## Documentazione

La documentazione è generata con [Jekyll][jekyll] e utilizza file basati sul linguaggio Markdown.

1. Installare Jekyll seguendo le istruzioni nel paragrafo [tooling setup](#tooling-setup).
2. Eseguire `npm start`.
3. Navigare su `http://localhost:9001`.

La struttura delle cartelle della documentazione è la seguente:

- `_data`: assieme al file `config-yml` definiscono le variabili utilizzate nei vari template ([documentazione][jekyll-data])
- `_includes`: contiene porzioni di codice HTML ([documentazione][jekyll-includes])
- `_layouts`: definisce alcuni modelli di pagina ([documentazione][jekyll-themes])
- `_plugins`: contiene funzioni che aumentano le funzionalità di Jekyll ([documentazione][jekyll-plugins])
- `docs`: è la cartella principale dove risiede la documentazione in formato Markdown.
- `docs/assets`: contiene file statici (javascript, css e immagini) necessari al buon funzionamento della documentazione. **Non sono file compilati nella libreria finale Bootstrap Italia**.

Una volta lanciato il comando `npm start`, Jekyll pubblica il sito statico contenente la documentazione nella cartella `_gh_pages`.

Maggiori dettagli sono disponibili a [questo indirizzo](https://italia.github.io/bootstrap-italia/docs/0.0.1/come-iniziare/introduzione/).

## Pubblicare la documentazione

La documentazione del tema Bootstrap Italia è gestita con [GitHub Pages](https://pages.github.com/), utilizzando file statici che risiedono sul branch `gh-pages`.

Per pubblicare la documentazione, prima di tutto è necessario generare i file statici nella cartella d'appoggio `_gh_pages`. Per fare questo, è sufficiente lanciare il comando:

`bundle exec jekyll build`

È necessario quindi portare tutto il contenuto di tale cartella sul branch `gh-pages` con il comando:

`npm run deploy-docs`

Tale comando creerà un nuovo commit sul branch `gh-pages`, lanciando così la pubblicazione immediata della documentazione su GitHub Pages e visibile all'indirizzo [https://italia.github.io/bootstrap-italia/](https://italia.github.io/bootstrap-italia/).

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

## License
  		  
This project is licensed under the BSD-3-Clause License - see the [LICENSE](LICENSE) file for details