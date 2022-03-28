import BaseComponent from 'bootstrap/js/src/base-component.js'

import {
  //defineJQueryPlugin,
  //getElementFromSelector,
  //isVisible,
  //reflow,
  //typeCheckConfig,
  getSelectorFromElement, //in base al bs-target
} from 'bootstrap/js/src/util'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

import { isScreenMobile } from './util/device'
import onDocumentScroll from './util/on-document-scroll'

const NAME = 'sticky'
const DATA_KEY = 'bs.sticky'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const EVENT_SCROLL = `scroll${EVENT_KEY}`
const EVENT_RESIZE = `resize${EVENT_KEY}`
const EVENT_STICKY_ON = `on${EVENT_KEY}`
const EVENT_STICKY_OFF = `off${EVENT_KEY}`

const CLASS_NAME_WRAPPER = 'bs-it-sticky-wrapper'
const CLASS_NAME_STICKY = 'is-sticky'

const DATA_TARGET_MOBILE = 'data-bs-target-mobile'

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="sticky"]'

class Sticky extends BaseComponent {
  constructor(element) {
    super(element)

    this._isSticky = false
    this._wrapper = null

    this._stickyTarget = SelectorEngine.findOne(getSelectorFromElement(this._element), this._element) || this._element
    this._stickyTargetMobile = SelectorEngine.findOne(this._element.getAttribute(DATA_TARGET_MOBILE), this._element) || this._stickyTarget //needed?
    this._stickyLimit = 0
    this._stickyLimitMobile = 0
    this._setLimit()

    this._scrollCb = null

    this._isMobile = isScreenMobile()

    this._onScroll()
    this._bindEvents()
  }

  dispose() {
    EventHandler.off(window, EVENT_RESIZE)
    EventHandler.off(window, EVENT_SCROLL)

    super.dispose()
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _bindEvents() {
    EventHandler.on(window, EVENT_RESIZE, () => this._onResize())
    //EventHandler.on(window, EVENT_SCROLL, () => this._onScroll())
    this._scrollCb = onDocumentScroll(() => this._onScroll())
  }

  _onResize() {
    this._isMobile = isScreenMobile()
    this._setLimit()
  }

  _onScroll() {
    this._checkSticky()
  }

  _setLimit() {
    this._stickyLimit = this._cumulativeOffset(this._stickyTarget).top
    this._stickyLimitMobile = this._cumulativeOffset(this._stickyTargetMobile).top
  }

  /**
   * get the absolute position of an element
   * @param {*} element - the target element
   * @returns {Object} - absolute position top and left of the element
   */
  _cumulativeOffset(element) {
    let top = 0
    let left = 0
    do {
      top += element.offsetTop || 0
      left += element.offsetLeft || 0
      element = element.offsetParent
    } while (element)

    return {
      top: top,
      left: left,
    }
  }

  _checkSticky() {
    if (!this._isSticky) {
      //the target position can change dinamically
      this._setLimit()
    }
    const limit = this._isMobile ? this._stickyLimitMobile : this._stickyLimit
    if (window.pageYOffset > limit) {
      this._setSticky()
    } else {
      this._unsetSticky()
    }
  }
  _setSticky() {
    if (!this._isSticky) {
      this._isSticky = true
      this._wrapper = this._createWrapper()
      this._element.classList.add(CLASS_NAME_STICKY)
      EventHandler.trigger(EVENT_STICKY_ON)
    }
  }
  _unsetSticky() {
    if (this._isSticky) {
      this._element.classList.remove(CLASS_NAME_STICKY)
      this._destroyWrapper()
      this._isSticky = false
      EventHandler.trigger(EVENT_STICKY_OFF)
    }
  }

  _createWrapper() {
    const wrapper = document.createElement('div')
    wrapper.classList.add(CLASS_NAME_WRAPPER)
    wrapper.style.width = this._element.getBoundingClientRect().width + 'px'
    wrapper.style.height = this._element.getBoundingClientRect().height + 'px'
    wrapper.style.overflow = 'hidden'
    // insert wrapper before el in the DOM tree
    this._element.parentNode.insertBefore(wrapper, this._element)
    // move el into wrapper
    wrapper.appendChild(this._element)
    return wrapper
  }
  _destroyWrapper() {
    if (this._wrapper) {
      this._wrapper.parentNode.insertBefore(this._element, this._wrapper)
      this._wrapper.remove()
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const stickies = SelectorEngine.find(SELECTOR_DATA_TOGGLE)
stickies.forEach((sticky) => {
  Sticky.getOrCreateInstance(sticky)
})

export default Sticky
