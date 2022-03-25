import BaseComponent from 'bootstrap/js/src/base-component.js'

import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
import EventHandler from 'bootstrap/js/src/dom/event-handler'

const NAME = 'list'
const DATA_KEY = 'bs.list'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const EVENT_CLICK = `click${EVENT_KEY}`

const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_LIST = '.it-list'
const SELECTOR_ITEM_CHECKBOX = '.it-has-checkbox'

class List extends BaseComponent {
  constructor(element) {
    super(element)

    this._init()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _init() {
    this._initCheckbox()
  }
  _initCheckbox() {
    SelectorEngine.find(SELECTOR_ITEM_CHECKBOX, this._element).forEach((item) => {
      EventHandler.on(item, EVENT_CLICK, (evt) => {
        evt.preventDefault()
        this._toggleCheckbox(item)
      })
    })
  }

  _toggleCheckbox(item) {
    const input = SelectorEngine.findOne('input', item)
    if (input) {
      if (input.checked) {
        input.checked = false
        item.classList.remove(CLASS_NAME_ACTIVE)
      } else {
        input.checked = true
        item.classList.add(CLASS_NAME_ACTIVE)
      }
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

SelectorEngine.find(SELECTOR_LIST).forEach((list) => {
  List.getOrCreateInstance(list)
})

export default List
