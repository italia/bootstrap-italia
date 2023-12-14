# Bootstrap Italia

[![Versione](https://img.shields.io/npm/v/bootstrap-italia.svg?logo=npm)](https://www.npmjs.com/package/bootstrap-italia)
[![Build](https://github.com/italia/bootstrap-italia/actions/workflows/build.yml/badge.svg)](https://github.com/italia/bootstrap-italia/actions)
[![GitHub issues](https://img.shields.io/github/issues/italia/bootstrap-italia.svg)](https://github.com/italia/bootstrap-italia/issues)
[![License](https://img.shields.io/github/license/italia/bootstrap-italia.svg)](https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
[![Join the #design channel](https://img.shields.io/badge/Slack%20channel-%23design-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)

_🇬🇧 [English version](README.EN.md)_

_⚠️ [La versione 1.x di Bootstrap Italia (basata su Bootstrap 4) è deprecata](https://github.com/italia/bootstrap-italia/tree/1.x)_

Bootstrap Italia è un framework basato su [Bootstrap 5](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

Bootstrap Italia eredita tutte le funzionalità, componenti, mixins, grid system, e altro già presenti in Bootstrap 5, personalizzandole per implementare soluzioni secondo le [Linee guida di design per i siti internet e i servizi digitali delle Pubbliche Amministrazioni](https://designers.italia.it/norme-e-riferimenti/).

Bootstrap Italia è la risorsa di sviluppo dell'ecosistema [design system del Paese](https://designers.italia.it/design-system/come-iniziare/) e implementa pattern e componenti di [UI Kit Italia](https://github.com/italia/design-ui-kit/) in codice pronto all'uso! 

La roadmap del progetto è consultabile nel [piano attività di Designers Italia](https://designers.italia.it/piano-attivita/).

**[Esplora la documentazione di sviluppo »](https://italia.github.io/bootstrap-italia/)**

**[Esplora la documentazione del design system del Paese »](https://designers.italia.it/design-system/come-iniziare/)**

oppure

**[Scarica l'ultima versione del framework »](https://github.com/italia/bootstrap-italia/releases)**

## Indice

- [Segnalazione bug e richieste](#segnalazione-bug-e-richieste-di-aiuto)
- [Come contribuire](#come-contribuire)
- [Licenze software dei componenti di terze parti](#licenze-software-dei-componenti-di-terze-parti)

## Segnalazioni e richieste di aiuto

Vuoi fare una segnalazione o una richiesta?

Prima di tutto assicurati che sia un team relativo a Bootstrap Italia e non alla libreria Bootstrap da cui deriva (in tal caso puoi fare riferimento al [repository di Bootstrap](https://github.com/twbs/bootstrap)), scopri il [modello di contribuzione del design system del Paese](https://designers.italia.it/design-system/come-contribuire/), e poi dai un'occhiata alle indicazioni di dettaglio su [come creare una issue a Bootstrap italia](https://github.com/italia/bootstrap-italia/blob/main/CONTRIBUTING.md#creare-una-issue).

## Come contribuire

Vorresti dare una mano su Bootstrap Italia? **Sei nel posto giusto!**

Se non l'hai già fatto, inizia spendendo qualche minuto per approfondire la tua conoscenza sulle "Linee guida di design per i siti internet e i servizi digitali della PA" e del manuale operativo di design a supporto partendo dalla [pagina dedicata di Designers Italia](https://designers.italia.it/norme-e-riferimenti), scopri il [modello di contribuzione del design system del Paese](https://designers.italia.it/design-system/come-contribuire/), e fai riferimento alle [indicazioni di dettaglio su come contribuire a Bootstrap Italia](https://github.com/italia/bootstrap-italia/blob/main/CONTRIBUTING.md).

A questo punto, è necessario impostare il tuo ambiente locale per la compilazione dei file sorgente e la generazione
della documentazione. Puoi usare [Docker](https://docs.docker.com/get-started/) per far partire l'ambiente di sviluppo.

```sh
docker-compose up
```

## Licenze software dei componenti di terze parti

### Componenti distribuiti con Bootstrap Italia

Vengono di seguito elencati i componenti distribuiti con Bootstrap Italia che hanno una propria licenza diversa da CC0.

- [Bootstrap 5](https://getbootstrap.com) © Twitter, Inc., licenza MIT
- [Popper.js](https://popper.js.org) © Floating UI contributors, licenza MIT
- [SplideJS](https://splidejs.com) © Naotoshi Fujita, licenza MIT
- [Accessible Autocomplete](https://alphagov.github.io/accessible-autocomplete) © Crown Copyright (Government Digital Service), licenza MIT
- [AnimeJS](https://animejs.com) © Julian Garnier, licenza MIT
- [Just Validate](https://just-validate.dev) © Horprogs, licenza MIT
- [Masonry Layout](https://masonry.desandro.com) © David DeSandro, licenza MIT
- [Progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js) © Kimmo Brunfeldt, licenza MIT

### Principali dipendenze per la fase di compilazione e sviluppo

- Generatore di siti statici per ruby [Jekyll](https://jekyllrb.com), © Tom Preston-Werner and Jekyll contributors, licenza MIT
- Tool per il testing della correttezza formale dell'HTML [html-proofer](https://github.com/gjtorikian/html-proofer), © Garen Torikian, licenza MIT
- Tool per il reload automatico del browser [Browser Sync](https://www.browsersync.io/) Apache License Version 2.0
- Gestione del versionamento [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/) © conventional-changelog team, ISC License
- Build system per le librerie Javascript e CSS [Rollup.js](https://rollupjs.org/), © [questi contributori](https://github.com/rollup/rollup/graphs/contributors), licenza MIT
- Code formatter per Javascript [Prettier](https://prettier.io/), © James Long and contributors, licenza MIT
- Compilazione SASS [sass](https://github.com/sass/dart-sass), © Google Inc., licenza MIT
- GitHub REST API client per JavaScript [Octokit rest.js](https://octokit.github.io/rest.js/) © Cloud9 IDE, Inc. (Mike de Boer), 2017-2018 Octokit contributors, licenza MIT

### Componenti utilizzati per la documentazione

Di seguito sono elencati invece i componenti utilizzati per il sito della documentazione ma non ridistribuiti nella libreria Bootstrap Italia

- [tsParticles](https://particles.js.org/) © Matteo Bruni, licenza MIT
- [clipboard.js](https://clipboardjs.com/) © Zeno Rocha, licenza MIT
- [AnchorJS](https://www.bryanbraun.com/anchorjs/) © Bryan Braun, licenza MIT
- [Algolia DocSearch](https://docsearch.algolia.com/) © Algolia, licenza MIT

## Licenza

La licenza di Bootstrap Italia è **BSD 3-Clause** ed è visibile nel file [LICENSE](https://github.com/italia/bootstrap-italia/blob/main/LICENSE).

<a href="https://www.browserstack.com/" target="_blank"><img src="docs/assets/img/browserstack-logo.png" alt="BrowserStack logo" width="270" height="79" /></a>

We are using BrowserStack for interactive cross browser testing. They are sponsoring our open source project!
