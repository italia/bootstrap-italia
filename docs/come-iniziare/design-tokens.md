---
layout: docs
title: Design tokens
description: Sistema completo basato su Design Tokens Italia
group: come-iniziare
toc: true
---

{% capture alpha_warning %}
### ⚠️ Versione Alpha

Work in progress.

{% endcapture %}{% include callout.html content=alpha_warning type="warning" %}

## Introduzione
I **design tokens** sono i valori atomici del [Design system .italia](https://designers.italia.it/design-system/fondamenti/design-tokens/) che definiscono le proprietà visive (colori, spaziature, tipografia, etc.).

Bootstrap Italia 3 implementa i token con **CSS custom properties**, sostituendo le variabili Sass delle versioni precedenti. Questo garantisce:
- Coerenza visiva con tutte le risorse del Design system .italia
- Personalizzazione semplificata 
- Facilità di manutenzione ed evoluzione

{% capture callout %}
### Da design tokens a CSS custom properties
Bootstrap Italia usa i design tokens disponibili dal repository [italia/design-tokens-italia](https://github.com/italia/design-tokens-italia) per definire CSS custom properties dedicate utilizzabili nel codice dei singoli componenti. Ogni token del Design System .italia diventa così in Bootstrap Italia una variabile CSS con prefisso `--bsi-*`.
{% endcapture %}{% include callout.html content=callout type="info" %}

## Come funzionano

Il flusso di integrazione dei design tokens in Bootstrap Italia avviene in modo automatizzato:

1. **Design Tokens Italia**: repository ufficiale [italia/design-tokens-italia](https://github.com/italia/design-tokens-italia) contenente i valori in formato JSON, CSS e SCSS.
2. **Durante la build**: vengono letti i valori delle variabili CSS dell'ultima release del repository e usati come base.
3. **CSS custom properties**: le variabili CSS vengono usate per definire variabili CSS specifiche di Bootstrap Italia con prefisso `--bsi-*`
4. **Componenti**: ogni componente definisce le proprie variabili CSS in uso all'inizio del proprio codice SCSS.

Questo processo garantisce l'allineamento automatico con il Design System .italia.

## Il prefisso dedicato "bsi-"
Bootstrap Italia 3 usa il nuovo prefisso `bsi-*` per distinguere le proprie custom properties da quelle native di Bootstrap:

- `--bsi-*`: Custom properties Bootstrap Italia
- `--bs-*`: Custom properties Bootstrap 5 native

## Utilizzo nei componenti

### CSS custom properties 
I design tokens sono esposti nel codice come CSS custom property:

```scss
/* Esempio di utilizzo */
.my-class {
  background: var(--bsi-color-primary);
}
```

#### Personalizzazione
Puoi sovrascrivere i valori predefiniti delle custom properties di Bootstrap Italia sovrascrivendone il valore di default:

```css
/* Esempio di personalizzazione */
:root {
  --bsi-color-primary: #0066cc; /* Your primary color */
}
```

## Documentazione dei token

La documentazione completa dei token (colori, tipografia, spaziature, ...) è disponibile nelle tabelle **Properties** di ogni componente, ad esempio:

- [Button - Properties]({{ site.baseurl }}/docs/componenti/button/#properties)
- [Alert - Properties]({{ site.baseurl }}/docs/componenti/alert/#properties)
- [Card - Properties]({{ site.baseurl }}/docs/componenti/card/#properties)

**Come vengono generate**: queste tabelle sono generate automaticamente dal codice SCSS di ogni componente presente sul ramo `main` tramite GitHub Action. Le CSS custom properties sono documentate all'inizio del file SCSS di ciascun componente.

_Visualizzazione unificata dei token globali disponibile nelle prossime release_.