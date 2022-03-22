import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

import { focusSimbling } from './util/dom'

const NAME = 'accordion'
const DATA_KEY = 'bs.accordion'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const EVENT_KEYDOWN = `keydown${EVENT_KEY}`

const SELECTOR_HEADBTN_WRAPPER = '.accordion'
const SELECTOR_HEADBTN = '.accordion-item > .accordion-header [data-bs-toggle="collapse"]'

class Accordion extends BaseComponent {
  constructor(element) {
    super(element)

    this._bindEvents()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _bindEvents() {
    //fix collapse accessibility (arrow keys, home key, end key functionality)
    const eventKeyCallback = {
      ArrowDown: (target) => this._focusNext(target),
      ArrowUp: (target) => this._focusPrev(target),
      Home: (target) => this._focusFirst(target),
      End: (target) => this._focusLast(target),
    }
    SelectorEngine.find(SELECTOR_HEADBTN, this._element).forEach((accHead) => {
      EventHandler.on(accHead, EVENT_KEYDOWN, (evt) => {
        if (typeof eventKeyCallback[evt.key] === 'function') {
          evt.preventDefault()
          eventKeyCallback[evt.key](evt.currentTarget)
        }
      })
    })
  }

  _getHeadButtons() {
    return SelectorEngine.find(':scope > ' + SELECTOR_HEADBTN, this._element)
  }

  _focusNext(target) {
    focusSimbling(target, this._getHeadButtons(), { loop: true })
  }

  _focusPrev(target) {
    focusSimbling(target, this._getHeadButtons(), { isDirectionTop: true, loop: true })
  }

  _focusFirst(target) {
    focusSimbling(target, this._getHeadButtons(), { isDirectionTop: true, isLimit: true })
  }

  _focusLast(target) {
    focusSimbling(target, this._getHeadButtons(), { isLimit: true })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
const accordions = SelectorEngine.find(SELECTOR_HEADBTN_WRAPPER)
accordions.forEach((acc) => {
  Accordion.getOrCreateInstance(acc)
})

export default Accordion
