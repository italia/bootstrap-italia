---
layout: docs
title: Offcanvas
description: Menu di navigazione a comparsa per dispositivi come tablet o smartphone.
group: componenti
---

## Esempio

<style>
  /* Style override for Documentation purposes */

  .bd-example {
    height: 480px;
    width: 360px;
  }
</style>

<div class="bd-example">
    <iframe class="iframe" data-role="window" src="../../esempi/offcanvas/index.html" sandbox="allow-same-origin allow-scripts allow-forms" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="yes" frameborder="0" width="100%" height="100%"></iframe>
</div>

{% highlight html %}
<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Esempio Offcanvas</a>
  <button class="navbar-toggler p-0 border-0 ml-auto" type="button" data-toggle="offcanvas">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Link 1 <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 3</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 4</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu" aria-labelledby="dropdown01">
          <a class="dropdown-item" href="#">Azione 1</a>
          <a class="dropdown-item" href="#">Azione 2</a>
          <a class="dropdown-item" href="#">Azione 3</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
{% endhighlight %}
