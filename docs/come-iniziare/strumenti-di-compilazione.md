---
layout: docs
title: Strumenti di compilazione
description: Come compilare il codice sorgente e generare la documentazione che stai leggendo
group: come-iniziare
toc: true
---

{% capture callout %}
**Questa pagina è destinata a chi desidera personalizzare la libreria.**

Di seguito si possono trovare gli strumenti per:

- personalizzare e ricompilare i file sorgente di Bootstrap Italia
- generare la documentazione che stai leggendo in un ambiente di sviluppo locale

Le informazioni di seguito non sono indispensabili per l'utilizzo di Bootstrap Italia come libreria, ma sono caldamente consigliate per **ottimizzare le performance** in termini di tempi di caricamento. Se stai cercando informazioni su come usare Bootstrap Italia, ti può essere utile la [pagina introduttiva]({{ site.baseurl }}/docs/come-iniziare/introduzione/).
{% endcapture %}{% include callout.html content=callout type="info" %}

## Compilare la libreria

Il tema Bootstrap Italia, così come Bootstrap {{ site.bootstrap_version }} stesso, usa script `npm` per la compilazione dei file (è ovviamente possibile usare `yarn` in alternativa). Per rendere operativo il sistema di compilazione di Bootstrap Italia, è necessario:

1. Clonare attraverso GIT o scaricare l'intero repository in una cartella sul proprio computer.
2. [Scaricare e installare Node.js](https://nodejs.org/download/), che è necessario per gestire le dipendenze attraverso `npm` o `yarn`.
3. Verificare che i comandi siano disponibili provando a lanciare `node -v` e `npm -v`.
4. Dalla cartella del progetto, lanciare il comando `npm install` per installare le dipendenze descritte nel file [package.json]({{ site.repo }}/blob/master/package.json).

### Script di compilazione

Il file [package.json]({{ site.repo }}/blob/master/package.json) include il seguente comando, che fa uso di  **[SASS][sass], [Autoprefixer][autoprefixer], e [UglifyJS][uglify]** per la compilazione dei file sorgente di Bootstrap Italia:

`npm run build`

Tale comando crea una cartella `/dist`, dove vengono pubblicati i file compilati da utilizzare nelle proprie pagine HTML.

Per iniziare a modificare la libreria, la cartella d'interesse è `/src`, che contiene tutti i file sorgente, e in particolare i file:

- `/src/scss/bootstrap-italia.scss`
- `/src/js/bootstrap-italia.js`

## Ottimizzare la libreria

È possibile ottimizzare le dimensioni della libreria compilata rimuovendo i moduli che non sono di interesse, attraverso le seguenti azioni:

- commentare o rimuovere le linee relative allo stile del modulo da escludere nel file `src/scss/bootstrap-italia.scss`
- commentare o rimuovere le linee relative agli script del modulo da escludere nel file `gulpfile.js`, nella lista `SOURCE_JS`
- ricompilare la libreria con il comando `npm run build`

Questo ricompilerà i file all'interno della cartella `dist`, lasciando da parte quei moduli che non sono stati inclusi, riducendo così le dimensioni dei file.
Di seguito un paio di esempi pratici.

### Rimozione Cookiebar

Se, ad esempio, si desidera escludere il componente [Cookiebar]({{ site.baseurl }}/docs/componenti/cookiebar/), è sufficiente rimuovere le seguenti linee dai file

`src/scss/bootstrap-italia.scss`:

{% highlight html %}
// @import "custom/cookiebar";
{% endhighlight %}

`gulpfile.js`:

{% highlight html %}
// './src/js/plugins/cookiebar.js',
{% endhighlight %}

In questo secondo esempio, il risparmio in termini di bytes è irrisorio poiché il componente è fatto di poche righe di codice. È comunque sempre buona norma non includere codice che non sia indispensabile.

## Compilare la documentazione

La documentazione di Bootstrap Italia è gestita con [**GitHub Pages**](https://pages.github.com/) attraverso [Jekyll][jekyll]: per questo è composta di file statici che risiedono sul branch `gh-pages`. I file presenti a questo branch corrispondono esattamente ai file generati con il comando `jekyll build` nella cartella locale `_site`.

Per poter generare e testare la documentazione in ambiente locale, è necessario: 

1. Installare [Ruby][install-ruby]*, che renderà disponibile il comando `gem install *`.
2. Lanciare il comando `gem install bundler` per installare [Bundler][gembundler].
3. Lanciare il comando `bundle install`. Questo comando, in modo simile a quanto avviene per `npm install` si occuperà di installare tutte le dipendenze Ruby come descritto nel file [Gemfile]({{ site.repo }}blob/master/Gemfile); in questo caso Jekyll e i suoi plugin.

\* **Utenti Windows:** è bene seguire [questa guida][jekyll-windows] per installare Ruby e Jekyll senza problemi.
  
Sono inoltre disponibili maggiori informazioni su Jekyll a [questa pagina][jekyll].

### Script di compilazione

Il comando `npm start` avvia due azioni: la compilazione dei file sorgente (come visto al paragrafo precedente), e l'esecuzione del comando `jekyll build --watch`. Oltre a questo, lancia un server locale e si mette in ascolto di ogni modifica ai file per:
- ricompilare i file sorgente Javascript/SASS
- ricompilare i file markdown della documentazione
- rendere disponibile all'indirizzo `http://127.0.0.1:4000/` e ricaricare automaticamente la documentazione

La struttura delle cartelle della documentazione è la seguente:

- `_data`: assieme al file `_config.yml` definiscono le variabili utilizzate nei vari template ([documentazione][jekyll-data])
- `_includes`: contiene porzioni di codice HTML ([documentazione][jekyll-includes])
- `_layouts`: definisce alcuni modelli di pagina ([documentazione][jekyll-themes])
- `_plugins`: contiene funzioni che aumentano le funzionalità di Jekyll ([documentazione][jekyll-plugins])
- `docs`: è la cartella principale dove risiede la documentazione in formato Markdown.
- `docs/assets`: contiene file statici (javascript, css e immagini) necessari al buon funzionamento della documentazione. **Non sono file compilati nella libreria finale Bootstrap Italia**, servono soltanto per documentare la libreria in queste pagine che stai leggendo.

## Creare una nuova release

Per aggiornare il numero di versione e creare una nuova release, è necessario effettuare i due seguenti step manuali:

{% highlight sh %}
$ npm run bump-patch
{% endhighlight %}

o `bump-minor` oppure `bump-major`, che produrrà:

* Aggiornamento numero di versione in formato [semver](https://semver.org/) su file `package.json`, `package.lock` e `_config.yml`
* Commit delle modifiche
* Tag del commit con numero di versione in formato `vx.x.x`

{% highlight sh %}
$ git push --follow-tags
{% endhighlight %}

che produrrà il push della commit contenente l'avanzamento della versione ed il push della tag.

### Continuous integration e continuous delivery

Sul branch `master` è eseguita la CI con CircleCI, configurata per eseguire il Job `build`.

Il push delle tag sul repository eseguirà il CD composto da:

#### Job build
Build del progetto con `npm run build` 

#### Job github-update-pages
Build della documentazione e deploy sul branch `gh-pages` con `npm run documentation-deploy-to-gh-pages`.

Il comando produrrà l'aggiornamento su GitHub Pages, rendendo la documentazione visibile all'indirizzo [https://italia.github.io/bootstrap-italia/](https://italia.github.io/bootstrap-italia/)

#### Job github-create-release
Aggiunta di una [GitHub release](https://help.github.com/articles/about-releases/) ed upload degli asset `bootstrap-italia.zip`, prodotti nella cartella `/dist` dai precedenti step, e creazione di una release note (che potrà poi essere successivamente modificata) contenente il changelog con `npm run release`.

#### Job npm-publish

`npm publish` per aggiornare la versione del package su [npm](https://www.npmjs.com/package/bootstrap-italia).

[bootstrap-themes]: https://getbootstrap.com/docs/{{ site.bootstrap_minor }}/getting-started/theming/
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
continua a leggere alla [pagina che spiega come farlo]({{ site.baseurl }}/docs/come-iniziare/modificare-componenti/).

