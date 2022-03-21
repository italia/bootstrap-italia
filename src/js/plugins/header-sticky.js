import BaseComponent from 'bootstrap/js/src/base-component.js'

/*
import {
  //defineJQueryPlugin,
  getElementFromSelector,
  isVisible,
  reflow,
  //typeCheckConfig,
  //getSelectorFromElement,
} from 'bootstrap/js/src/util'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
*/

const NAME = 'headersticky'
/*const DATA_KEY = 'bs.headersticky'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'*/

/*
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_FADE = 'fade'

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="navbarcollapsible"]'
*/

class HeaderSticky extends BaseComponent {
  constructor(element) {
    super(element)
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

export default HeaderSticky
