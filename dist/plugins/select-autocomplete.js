import accessibleAutocomplete from './vendor/accessible-autocomplete.js';
import BaseComponent from './base-component.js';
import InputLabel from './input-label.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'selectautocomplete';

function onClassChange(element, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        callback(mutation.oldValue, mutation.target);
      }
    });
  });
  observer.observe(element, { attributes: true, attributeOldValue: true });
  return observer.disconnect
}

class SelectAutocomplete extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = config || {};
    this._config.inputClasses = 'form-control';
    this._config.showNoOptionsFound = true;
    this._config.hintClasses = 'app-hint';
    this._config.autoselect = false;
    this._config.showAllValues = false;
    this._config.templates = undefined;
    this._config.confirmOnBlur = false;
    this._config.menuAttributes = {};
    this._config.menuClasses = null;

    this._extraClasses = [];

    if (!this._config.tAssistiveHint)
      this._config.tAssistiveHint = () =>
        'Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento';
    if (!this._config.tNoResults) this._config.tNoResults = () => 'Nessun risultato trovato';
    if (!this._config.tStatusQueryTooShort)
      this._config.tStatusQueryTooShort = (minQueryLength) => `Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`;
    if (!this._config.tStatusNoResults) this._config.tStatusNoResults = () => 'Nessun risultato di ricerca';
    if (!this._config.tStatusSelectedOption)
      this._config.tStatusSelectedOption = (selectedOption, length, index) => `${selectedOption} ${index + 1} di ${length} è sottolineato`;
    if (!this._config.tStatusResults) {
      this._config.tStatusResults = (length, contentSelectedOption) => {
        const words = {
          result: length === 1 ? 'risultato' : 'risultati',
          is: length === 1 ? 'è' : 'sono',
          available: length === 1 ? 'disponibile' : 'disponibili',
        };

        return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`
      };
    }
    if (typeof document !== 'undefined') {
      this._enhance();
    }
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Private
  _enhance() {
    const inputId = this._config.id;
    const originalConfirm = this._config.onConfirm;

    this._config.onConfirm = (value) => {
      document.getElementById(inputId).value = value;
      document.getElementById(inputId).dispatchEvent(new Event('input'));
      if (originalConfirm) {
        originalConfirm(value);
      }
    };

    accessibleAutocomplete(
      Object.assign(
        {},
        {
          element: this._element,
          id: inputId,
        },
        this._config
      )
    );
    setTimeout(() => {
      this._inputField = document.getElementById(inputId);
      this._label = new InputLabel(this._inputField);
      this._inputField.addEventListener('focus', () => {
        this._extraClasses.forEach((cls) => {
          this._inputField.classList.add(cls);
        });
        this._extraClasses = [];
      });
      this._inputField.addEventListener('blur', () => {
        this._extraClasses.forEach((cls) => {
          this._inputField.classList.add(cls);
        });
        this._extraClasses = [];
      });

      onClassChange(this._inputField, (oldClasses) => {
        this._extraClasses = [];
        if (oldClasses === this._inputField.classList.value) {
          return
        }
        oldClasses.split(' ').forEach((cls) => {
          if (!cls.startsWith('autocomplete')) {
            this._extraClasses.push(cls);
          }
        });
      });
    }, 100);
  }
}

export { SelectAutocomplete as default };
//# sourceMappingURL=select-autocomplete.js.map
