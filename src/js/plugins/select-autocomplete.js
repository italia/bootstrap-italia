import accessibleAutocomplete from 'accessible-autocomplete'

import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'selectautocomplete'

function onClassChange(element, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        callback(mutation.target)
      }
    })
  })
  observer.observe(element, { attributes: true })
  return observer.disconnect
}

class SelectAutocomplete extends BaseComponent {
  constructor(element, config) {
    super(element)
    this._hasFormControl = element.classList.contains('form-control')
    this.element_original_id = this._element.id
    this._config = config
    if (!this._config.tAssistiveHint)
      this._config.tAssistiveHint = () =>
        'Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento'
    if (!this._config.tNoResults) this._config.tNoResults = () => 'Nessun risultato trovato'
    if (!this._config.tStatusQueryTooShort)
      this._config.tStatusQueryTooShort = (minQueryLength) => `Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`
    if (!this._config.tStatusNoResults) this._config.tStatusNoResults = () => 'Nessun risultato di ricerca'
    if (!this._config.tStatusSelectedOption)
      this._config.tStatusSelectedOption = (selectedOption, length, index) => `${selectedOption} ${index + 1} di ${length} è sottolineato`
    if (!this._config.tStatusResults)
      this._config.tStatusResults = (length, contentSelectedOption) => {
        const words = {
          result: length === 1 ? 'risultato' : 'risultati',
          is: length === 1 ? 'è' : 'sono',
          available: length === 1 ? 'disponibile' : 'disponibili',
        }

        return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`
      }
    this._enhance()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Private
  _enhance() {
    accessibleAutocomplete.enhanceSelectElement(Object.assign({}, { selectElement: this._element }, this._config))
    setTimeout(() => {
      if (this._hasFormControl) {
        if (typeof document === 'undefined') {
          return
        }
        const inputField = document.getElementById(this.element_original_id)
        inputField.classList.add('form-control')
        onClassChange(inputField, (node) => {
          if (!node.classList.contains('form-control')) {
            node.classList.add('form-control')
          }
        })
      }
    }, 100)
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

export default SelectAutocomplete
