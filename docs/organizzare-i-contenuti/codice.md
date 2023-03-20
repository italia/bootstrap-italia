---
layout: docs
group: organizzare-i-contenuti
toc: true
title: Codice
description: Documentazione ed esempi per la visualizzazione di blocchi di codice in linea e multilinea.
---

## Codice inline

Racchiudi piccoli pezzi di codice con `<code>`. Assicurati di evitare i caratteri di markup "maggiore di" e "minore di".

{% comment %}Example name: Codice inline{% endcomment %}
{% capture example %}
Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline.
{% endcapture %}{% include example.html content=example %}

## Blocchi di codice

Utilizzare `<pre>` per più righe di codice. Ancora una volta, assicurati di evitare qualsiasi parentesi angolare nel codice per il rendering appropriato.

{% comment %}Example name: Blocchi di codice{% endcomment %}
{% capture example %}
<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>
{% endcapture %}{% include example.html content=example %}

## Variabili

Per indicare le variabili usa il tag `<var>`.

{% comment %}Example name: Variabili{% endcomment %}
{% capture example %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endcapture %}{% include example.html content=example %}

## User input

Utilizzare `<kbd>` per indicare l'input che viene in genere immesso tramite tastiera.

{% comment %}Example name: Input utente{% endcomment %}
{% capture example %}
Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br>
Per modificare le impostazioni, premi <kbd>ctrl</kbd> + <kbd>i</kbd>.
{% endcapture %}{% include example.html content=example %}

## Output di esempio

Per indicare l'output di esempio da un programma usa il tag `<samp>`.

{% comment %}Example name: Output di esempio{% endcomment %}
{% capture example %}
<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>
{% endcapture %}{% include example.html content=example %}
