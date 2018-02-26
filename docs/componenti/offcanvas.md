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
  }
</style>

<div class="bd-example">
    <iframe class="iframe" data-role="window" src="../../esempi/offcanvas/index.html" sandbox="allow-same-origin allow-scripts allow-forms" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="yes" frameborder="0" width="100%" height="100%"></iframe>
</div>

{% highlight html %}
<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Offcanvas navbar</a>
  <button class="navbar-toggler p-0 border-0 ml-auto" type="button" data-toggle="offcanvas">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Notifications</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Switch account</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
        <div class="dropdown-menu" aria-labelledby="dropdown01">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endhighlight %}
