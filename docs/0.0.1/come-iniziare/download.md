---
layout: docs
title: Download
description: Da questa pagina è possibile scaricare i file compilati pronti per essere utilizzati su un progetto esterno o il codice sorgente di Bootstrap Italia, o includerlo come package npm o RubyGems.
group: come-iniziare
toc: true
---

## Codice compilato

Scarica il codice compilato di **Bootstrap Italia v{{ site.current_version}}**, che include CSS e Javascript già pronti per essere inclusi nel tuo progetto.

<a href="{{ site.repo }}tree/v{{ site.current_version }}/{{ site.download.dist }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Download</a>

### CSS

All'interno della cartella `css` è presente un file compilato (`bootstrap-italia-{{ site.current_version }}.css`) e un file minificato (`bootstrap-italia-{{ site.current_version }}.min.css`), con le rispettive [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap-italia-{{ site.current_version }}.*.map`).

### JavaScript

All'interno della cartella Javascript sono presenti due file con le rispettive versioni minificate, che si differenziano soltanto per l'inclusione in linea delle librerie jQuery e popper.js.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Popper</th>
      <th scope="col">jQuery</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.bundle.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.bundle.min.js</code></div>
      </th>
      <td class="text-success">Incluso</td>
      <td class="text-success">Incluso</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-italia-{{ site.current_version }}.min.js</code></div>
      </th>
      <td class="bg-light text-muted">Non Incluso</td>
      <td class="bg-light text-muted">Non Incluso</td>
    </tr>
  </tbody>
</table>

## Codice sorgente

Il codice sorgente è visibile a questo indirizzo.

<a href="{{ site.repo }}tree/v{{ site.current_version }}/{{ site.download.source }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>

## BootstrapCDN

Skip the download with [BootstrapCDN](https://www.bootstrapcdn.com/) to deliver cached version of Bootstrap's compiled CSS and JS to your project.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

If you're using our compiled JavaScript, don't forget to include CDN versions of jQuery and Popper.js before it.

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

## Package managers

Pull in Bootstrap's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/bootstrap):

{% highlight sh %}
npm install bootstrap@{{ site.current_version }}
{% endhighlight %}

`require('bootstrap')` will load all of Bootstrap's jQuery plugins onto the jQuery object. The `bootstrap` module itself does not export anything. You can manually load Bootstrap's jQuery plugins individually by loading the `/js/*.js` files under the package's top-level directory.

Bootstrap's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Bootstrap's main [Sass](http://sass-lang.com/) source file
- `style` - path to Bootstrap's non-minified CSS that's been precompiled using the default settings (no customization)

### RubyGems

Install Bootstrap in your Ruby apps using [Bundler](https://bundler.io/) (**recommended**) and [RubyGems](https://rubygems.org/) by adding the following line to your [`Gemfile`](https://bundler.io/gemfile.html):

{% highlight ruby %}
gem 'bootstrap', '~> {{ site.current_ruby_version }}'
{% endhighlight %}

Alternatively, if you're not using Bundler, you can install the gem by running this command:

{% highlight sh %}
gem install bootstrap -v {{ site.current_ruby_version }}
{% endhighlight %}

[See the gem's README](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md) for further details.

### Composer

You can also install and manage Bootstrap's Sass and JavaScript using [Composer](https://getcomposer.org/):

{% highlight sh %}
composer require twbs/bootstrap:{{ site.current_version }}
{% endhighlight %}

### NuGet

If you develop in .NET, you can also install and manage Bootstrap's [CSS](https://www.nuget.org/packages/bootstrap/) or [Sass](https://www.nuget.org/packages/bootstrap.sass/) and JavaScript using [NuGet](https://www.nuget.org/):

{% highlight powershell %}
Install-Package bootstrap -Pre
{% endhighlight %}

{% highlight powershell %}
Install-Package bootstrap.sass -Pre
{% endhighlight %}

The `-Pre` is required until Bootstrap v4 has a stable release.
