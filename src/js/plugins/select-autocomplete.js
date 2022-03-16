//import { accessibleAutocomplete } from 'accessible-autocomplete'

import BaseComponent from 'bootstrap/js/src/base-component.js'

//import EventHandler from 'bootstrap/js/src/dom/event-handler'
//import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

const NAME = 'selectautocomplete'
//const DATA_KEY = 'bs.selectautocomplete'
//const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

//const EVENT_FOCUS = `focus${EVENT_KEY}`

//const CLASS_NAME_ACTIVE = 'active'

//const SELECTOR_INPUT_FILE = 'input[type="file"]'

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
    //
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

export default SelectAutocomplete
