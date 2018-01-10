---
layout: docs
title: Code
description: Documentazione ed esempi per la visualizzazione di blocchi di codice in linea e multilinea con Bootstrap..
group: contenuti
toc: true
---

## Codice inline

Racchiudi piccoli pezzi di codice con `<code>`. Assicurati di evitare i caratteri di markup "maggiore di" e "minore di".

{% example html %}
Per esempio, <code>&lt;section&gt;</code> dovrebbe essere renderizzato come inline.
{% endexample %}

## Blocchi di codice

Utilizzare `<pre>` per più righe di codice. Ancora una volta, assicurati di evitare qualsiasi parentesi angolare nel codice per il rendering appropriato. Puoi opzionalmente aggiungere la classe `.pre-scrollable`, che imposterà un'altezza massima di 350px e fornirà una barra di scorrimento dell'asse y.

{% example html %}
<pre><code>&lt;p&gt;Testo di esempio qui...&lt;/p&gt;
&lt;p&gt;E un'altra linea di testo di esempio qui...&lt;/p&gt;
</code></pre>
{% endexample %}

## Variabili

Per indicare le variabili usa il tag `<var>`.

{% example html %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endexample %}

## User input

Utilizzare `<kbd>` per indicare l'input che viene in genere immesso tramite tastiera.

{% example html %}
Per cambiare directory, digitare <kbd>cd</kbd> seguito dal nome della directory.<br>
Per modificare le impostazioni, premi <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endexample %}

## Output di esempio

Per indicare l'output di esempio da un programma usa il tag `<samp>`.

{% example html %}
<samp>Questo testo è pensato per essere trattato come output di esempio di un programma per computer.</samp>
{% endexample %}
