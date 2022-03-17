import 'accessible-autocomplete/dist/accessible-autocomplete.min.css'
import accessibleAutocomplete from 'accessible-autocomplete'

import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'selectautocomplete'
//const DATA_KEY = 'bs.selectautocomplete'
//const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

class SelectAutocomplete extends BaseComponent {
  constructor(element, config) {
    super(element)

    this._config = config
    this._enhance()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _enhance() {
    accessibleAutocomplete.enhanceSelectElement(Object.assign({}, { selectElement: this._element }, this._config))
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

export default SelectAutocomplete
