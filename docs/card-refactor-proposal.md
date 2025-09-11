Proposta di refactor: `_card.scss`

Obiettivo
- Fornire un diff proposto e una spiegazione per ridurre specificità e ripetizioni in `src/scss/components/_card.scss` senza applicare modifiche invasive direttamente sul branch principale.

Checklist (requisiti)
- [x] Eliminare duplicazioni eccessive di selector (es. `article.it-card`).
- [x] Ridurre ripetizione di media-queries e fallback identici.
- [x] Segnalare e proporre soluzioni per rimuovere `!important` e l'uso esteso di `> *`.
- [x] Fornire patch proposte (da revisionare) e note di testing/impatti visivi.

Razionale rapido
- `!important` è presente in vari punti: indica problemi di specificità. Rimuoverli richiede o ridefinire l'ordine delle regole o introdurre classi di utilità mirate.
- L'uso ripetuto di `> *` come fallback per gap è leggibile ma può essere sostituito con fallback più espliciti o con una semplice mixin che applica margini ai figli nominati.
- Alcuni blocchi ripetuti (es. reset di media query nel container-aware) possono essere resi DRY con una breve normalizzazione o mixin.

Proposte di modifica (diff illustrative, non applicate)

1) Rimozione duplicato selector
--- prima
@@
.it-card,
article.it-card {
  /* ... */
}
--- dopo
@@
.it-card {
  /* ... */
}

Motivazione: `.it-card` copre il caso comune; `article.it-card` aumenta inutilmente la specificità.

2) Consolidare reset media-queries nel blocco container-aware
--- prima
@@
  &.it-card-group-container-aware {
    > .it-card {
      // Reset Media Queries
      @include media-breakpoint-up(sm) { flex: auto; }
      @include media-breakpoint-up(md) { flex: auto; }
      @include media-breakpoint-up(lg) { flex: auto; }
      /* ... */
    }
  }
--- dopo (proposto)
@@
  &.it-card-group-container-aware {
    > .it-card {
      // Reset media queries small and up
      @include media-breakpoint-up(sm) { flex: auto; }
      /* kept explicit md/lg only if needed for overrides */
      /* ... */
    }
  }

Motivazione: riduce ripetizione; mantiene comportamento perché `sm` vale per tutti i breakpoint successivi nel nostro sistema di mixin (se la mixin è mobile-first).

3) Evitare `!important` (esempio per `.it-card.border`)
--- prima
@@
  &.border {
    border-width: var(--#{$prefix}it-card-border-outside-width) !important;
  }
--- proposte (opzioni)
A) Aggiungere classe utility per casi speciali
@@
  /* nuova utility */
  .it-card--force-border {
    border-width: var(--#{$prefix}it-card-border-outside-width);
  }

  /* rimuovere !important dalla regola base */
  &.border {
    border-width: var(--#{$prefix}it-card-border-outside-width);
  }

B) Aumentare leggera specificità in modo controllato
@@
  .it-card.border { /* invece di &.border */
    border-width: var(--#{$prefix}it-card-border-outside-width);
  }

Motivazione: entrambi richiedono ricerca su dove `.border` viene usata nel markup; opzione A è più sicura ma richiede aggiornamento markup, opzione B può risolvere senza cambiare HTML ma va verificata.

4) Sostituire `> *` fallback gap con mixin esplicita
--- prima (esempio)
@@
  .it-card-profile-header {
    // Gap fallback
    > * { margin: 0.5rem; }

    @supports (gap: 1rem) {
      gap: 1rem;
      > * { margin: 0; }
    }
  }
--- proposta
@@
  @mixin children-gap-fallback($gap) {
    > :where(*) { margin: $gap; }
    @supports (gap: $gap) {
      gap: $gap;
      > :where(*) { margin: 0; }
    }
  }

  .it-card-profile-header {
    @include children-gap-fallback(1rem / 2); // esempio
  }

Motivazione: `:where()` azzera specificità e rende il fallback meno aggressivo; estrarre in mixin evita ripetizione.

Note di testing e rischi
- I cambiamenti che rimuovono `!important` richiederanno test visivi sulle pagine che consumano `.it-card` con varianti `.border`, `.it-card-banner`, `.it-card-inline` ecc.
- Sostituire `> *` con `:where()` migliora la specificità ma bisogna verificare compatibilità browser target (al 2025 `:where()` è largamente supportato dai browser moderni; verificare policy del progetto).
- Refactor più ampi (es. rimuovere molti `!important`) andrebbero applicati in una branch separata con PR e checklist di QA visiva.

Esempio di PR body (bozza)
Title: feat: refactor cards — reduce specificity & extract mixins

Body:
- Rimuove duplicati di selector e centralizza fallback/gap tramite mixin
- Propone rimozione controllata di `!important` (vedere note)
- Non cambia markup; alcune alternative richiedono aggiornamenti HTML (se scelto)

Testing:
- Build SCSS e test visivi su component pages in `docs/` e `site/`.
- Verificare cross-browser per `:where()` e `@supports` branch.

Passi successivi proposti (se approvi)
1. Decidi quali opzioni per `!important` preferisci (A: utility classes, B: leggera maggiore specificità).  
2. Applico i cambi proposti in una nuova branch (es. `feat/card-refactor`) e apro la PR per revisione.  
3. Eseguo una build rapida e aggiungo screenshot POI se vuoi.

Vuoi che proceda creando la branch e applicando le modifiche (opzione A o B per `!important`), o preferisci prima che generi il PR body completo con i file patch generati (posso farlo entrambi)?
