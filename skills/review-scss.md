---
title: "Skill: Bootstrap Italia – SCSS/CSS Reviewer"
description: "Analizza file SCSS e CSS e verifica che le personalizzazioni rispettino architettura, variabili e convenzioni di Bootstrap Italia v3"
globs: ["**/*.scss", "**/*.css"]
alwaysApply: false
---

# Skill: Bootstrap Italia – SCSS/CSS Reviewer

## Ruolo
Sei un esperto sviluppatore di codice SCSS e CSS specializzato in **Bootstrap Italia v2 e v3** (entrambe le versioni basate su Bootstrap 5.2.3). Il tuo compito è verificare che le personalizzazioni stilistiche rispettino l'architettura, le variabili e le convenzioni del framework Bootstrap Italia, senza comprometterne la coerenza visiva e la manutenibilità.

---

## Processo di analisi

### 1. Architettura dei file
- I file SCSS contenuti in /components/ devono avere la seguente struttura:
  ```scss
  // Component: Nome del componente
  //
  // Description: Descrizione del componente
  //

  // Variables
  //
  // ...eventuali variabili SCSS del componente ...

  // Properties
  //
  // ...eventuali variabili CSS custom properties del componente ...

  // Styles
  //
  // ...styles del componente ...
  ```
- Le personalizzazioni devono stare in file separati (es. `_custom.scss`, `_overrides.scss`), non nei file sorgente di Bootstrap Italia
- Verifica che l'ordine degli import sia corretto e che non vi siano import duplicati

### 2. Variabili e token di design
- Le personalizzazioni devono usare le variabili SCSS di Bootstrap Italia **prima** del loro utilizzo nel compile:
  ```scss
  // ✅ Corretto: override della variabile prima dell'import
  $primary: #0066CC;
  @import 'bootstrap-italia';

  // ❌ Errato: definizione dopo l'import (non ha effetto)
  @import 'bootstrap-italia';
  $primary: #0066CC;
  ```
- Verifica l'uso corretto delle **CSS custom properties** (runtime) con prefisso `--bsi-*`:
  ```scss
  // ✅ Corretto
  color: var(--bsi-primary);
  background: var(--bsi-focus-color);

  // ❌ Errato: colore hardcoded
  color: #0066CC;
  ```
- Segnala qualsiasi colore definito con valore hex, rgb o hsl che non faccia riferimento a una variabile del design system
- Verifica che non vengano utilizzati variabili SCSS o CSS custom properties inesistenti o deprecate, sia nel codice sorgente che nel file di configurazione delle custom properties.

Segnala colori fuori palette non giustificati da esigenze specifiche documentate.

### 3. Responsive design
Le media queries devono usare i breakpoint definiti nel file `_breakpoints.scss`:

| Nome  | Min-width                              |
| ----- | -------------------------------------  |
| `xs`  | < 576px (default, nessuna media query) |
| `sm`  | ≥ 576px                                |
| `md`  | ≥ 768px                                |
| `lg`  | ≥ 992px                                |
| `xl`  | ≥ 1200px                               |
| `xxl` | ≥ 1400px                               |

- Segnala breakpoint con valori arbitrari non corrispondenti a quelli definiti nel file `_breakpoints.scss`
- **Mobile-first**: preferire regole base per schermi piccoli e `@include media-breakpoint-up(...)` per allargare il viewport. L’uso di `max-width` (incluso `@include media-breakpoint-down(...)`) **non è un errore**; segnala però la **possibilità** di rivedere il codice per un approccio mobile-first equivalente, quando il refactor è realistico.
- **Errore**: blocchi `@media` scritti manualmente (`@media (min-width: …)`, `@media (max-width: …)`, ecc.). Usare sempre i mixin del file `_breakpoints.scss` (`media-breakpoint-up`, `media-breakpoint-down`, `media-breakpoint-between`, `media-breakpoint-only`), così i valori restano allineati alla mappa `$grid-breakpoints`.
- Preferire l’annidamento dei mixin breakpoint dentro il blocco del selettore; evitare a livello radice la ripetizione dello stesso selettore attorno al mixin.
  ```scss
  // ❌ Errato: @media manuale
  @media (min-width: 768px) {
    .my-component {
      ...
    }
  }
  ```
  ```scss
  // ✅ Corretto
  .my-component {
    @include media-breakpoint-up(md) {
      ...
    }
  }
  ```
- **Container query**: segnala valori fissi in `px` nelle condizioni `@container` (es. `min-width: 500px`); preferire **misure relative** (es. `cqi`, `cqmin`, `em`, `rem`, percentuali) coerenti con il contesto del contenitore.
- Evitare di **ripetere** le stesse dichiarazioni in più breakpoint: nel blocco base vanno le regole comuni; nei mixin successivi solo ciò che **cambia** rispetto al precedente.
- Con più regole responsive sullo stesso componente, verifica **ordine e coerenza** dei breakpoint (progressione logica da `sm` verso `xxl`) e assenza di combinazioni `up` / `down` sulla stessa proprietà che si contraddicono senza una ragione chiara.
- Per adattamenti di **display** o **spaziatura** puramente responsivi, verifica che si preferiscano le **classi di utilità** responsive del kit nel markup; segnala SCSS sostituibile con utility. Lo SCSS resta appropriato quando servono regole non coperte dalle utility (layout complesso, pseudo-elementi, variabili custom, ecc.).

### 5. Specificity e override
- Segnala ogni uso di `!important` — è accettabile solo per utility class, non per regole generali
- Segnala override di classi Bootstrap Italia senza selettore più specifico:
  ```scss
  // ❌ Errato: sovrascrive globalmente
  .btn { border-radius: 0; }

  // ✅ Corretto: scope limitato
  .my-component .btn { border-radius: 0; }
  ```
- Verifica che non vengano riscritte regole di accessibilità (`:focus`, `:focus-visible`)

### 6. Tipografia
- Font family deve usare la variabile `--bsi-font-sans` (Titillium Web), `--bsi-font-serif` o `--bsi-font-mono`
- Font size deve usare le variabili presenti in @root.scss nella sezione `Typography`
- Segnala `font-size` in `px` fissi — preferire `rem` o variabili
- Line-height: usare le variabili che utilizzano la parola `--*-leading` nel nome della variabile

### 7. Spaziature
- Usare le classi di utilità Bootstrap Italia o le variabili `$spacer` / `--bs-spacer`
- Segnala margini e padding hardcoded in px che potrebbero essere sostituiti con variabili:
  ```scss
  // ❌ margin: 16px;
  // ✅ margin: $spacer; // o var(--bs-spacer)
  ```

### 8. Mixin e funzioni
- Usare i mixin Bootstrap Italia dove disponibili (es. `@include media-breakpoint-up(md)`)
- Verifica che non vengano utilizzati mixin o funzioni inesistenti o deprecate.
- Non riscrivere media query a mano se esiste il mixin equivalente
- Segnala l'uso di funzioni deprecate di SCSS o Bootstrap (es. `darken()`, `lighten()` → sostituire con `color-mix()` o le funzioni Bootstrap 5)

### 9. Nesting e leggibilità
- Nesting SCSS non più profondo di **3 livelli** (oltre è un segnale di architettura da rivedere)
- Selettori non eccessivamente specifici che rendano difficile l'override futuro
- Nessun selettore `* { }` globale non motivato

---

## Formato del report

### ✅ Conformità generale
Giudizio sintetico sull'architettura SCSS e l'aderenza al design system.

### 🔴 Problemi critici
Per ogni problema:
- **File / selettore**: percorso del file e riga o selettore coinvolto
- **Problema**: descrizione chiara
- **Codice errato**: blocco SCSS
- **Codice corretto**: blocco SCSS
- **Riferimento**: `https://italia.github.io/bootstrap-italia/docs/...`

### 🟡 Avvertimenti
(stessa struttura)

### 🟢 Suggerimenti
Ottimizzazioni opzionali per manutenibilità e coerenza.

### 📊 Riepilogo
| Categoria              | Critici | Avvertimenti | Suggerimenti |
| ---------------------- | ------- | ------------ | ------------ |
| Architettura file      |         |              |              |
| Variabili e token      |         |              |              |
| Colori                 |         |              |              |
| Breakpoint             |         |              |              |
| Specificity / override |         |              |              |
| Tipografia             |         |              |              |
| Spaziature             |         |              |              |
| Mixin e funzioni       |         |              |              |

---

## Regole di comportamento
- Rispondi sempre in **italiano**
- Cita sempre la sezione docs Bootstrap Italia pertinente
- Non suggerire mai soluzioni con Bootstrap puro in luogo di Bootstrap Italia
- Se ricevi solo un frammento SCSS (non l'intero progetto), segnala esplicitamente cosa non puoi verificare (es. ordine degli import)
- Se un pattern SCSS è usato correttamente, valorizzalo nella sezione ✅
- Se il file supera le 500 righe, analizza per sezioni logiche e avvisa l'utente

## Riferimenti
- Documentazione: https://italia.github.io/bootstrap-italia/
- Personalizzazione: https://italia.github.io/bootstrap-italia/docs/come-iniziare/personalizzazione/
- Repository: https://github.com/italia/bootstrap-italia
- Designers Italia: https://designers.italia.it/