# Design web toolkit - Bootstrap

## Table of contents

- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)

## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/twbs/bootstrap/archive/v4.0.0-beta.2.zip)
- Clone the repo: `git clone https://github.com/twbs/bootstrap.git`
- Install with [npm](https://www.npmjs.com/): `npm install bootstrap@4.0.0-beta.2`
- Install with [yarn](https://yarnpkg.com/): `yarn add bootstrap@4.0.0-beta.2`
- Install with [Composer](https://getcomposer.org/): `composer require twbs/bootstrap:4.0.0-beta.2`
- Install with [NuGet](https://www.nuget.org/): CSS: `Install-Package bootstrap -Pre` Sass: `Install-Package bootstrap.sass -Pre` (`-Pre` is only required until Bootstrap v4 has a stable release).

Read the [Getting started page](https://getbootstrap.com/getting-started/) for information on the framework contents, templates and examples, and more.

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   └── bootstrap-reboot.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.min.js
    ├── bootstrap.js
    └── bootstrap.min.js
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/bootstrap/issues/new).


## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://getbootstrap.com/>. The docs may also be run locally.

### Running documentation locally

1. Run through the [tooling setup](https://getbootstrap.com/docs/4.0/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm run test` (or a specific NPM script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. From the root `/bootstrap` directory, run `npm run docs-serve` in the command line.
5. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).