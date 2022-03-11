import BaseComponent from 'bootstrap/js/src/base-component.js'

import { /*defineJQueryPlugin,*/ isDisabled, getElementFromSelector, reflow } from 'bootstrap/js/src/util/index'
import EventHandler from 'bootstrap/js/src/dom/event-handler'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'cookiebar'
const VERSION = '5.0.0'
const DATA_KEY = 'bs.cookiebar'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
//const JQUERY_NO_CONFLICT = $.fn[NAME]
const COOKIE_NAME = 'cookies_consent'
const COOKIE_VALUE = 'true'
const COOKIE_EXPIRE = 30

const Selector = {
  COOKIE_BAR: '.cookiebar',
  ACCEPT: '[data-bs-accept="cookiebar"]',
}

const Event = {
  CLOSE: `close${EVENT_KEY}`,
  CLOSED: `closed${EVENT_KEY}`,
  LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
  CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
}

const ClassName = {
  COOKIE_BAR: 'cookiebar',
  SHOW: 'show',
  FADE: 'fade',
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Cookiebar extends BaseComponent {
  constructor(element) {
    super(element)

    this._isShown = this._element.classList.contains(ClassName.SHOW)
    this._isTransitioning = false
  }

  // Getters
  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  // Public

  show() {
    if (this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = true

    if (this._isAnimated()) {
      this._isTransitioning = true
    }

    this._showElement()
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = false
    const isAnimated = this._isAnimated()

    if (isAnimated) {
      this._isTransitioning = true
    }

    this._element.classList.remove(ClassName.SHOW)

    this._queueCallback(() => this._hideElement(), this._element, isAnimated)
  }

  accept(element) {
    element = element || this._element

    const rootElement = this._getRootElement(element)
    const customEvent = this._triggerCloseEvent(rootElement)

    if (customEvent.isDefaultPrevented()) {
      return
    }

    this._setCookieEU()

    this.hide()
    //this._removeElement(rootElement)
    //this.dispose()
  }

  /*dispose() {
    $.removeData(this._element, DATA_KEY)
    this._element = null
  }*/

  static clearCookie() {
    document.cookie = COOKIE_NAME + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }

  // Private

  _isAnimated() {
    return this._element.classList.contains(ClassName.FADE)
  }

  _showElement() {
    const isAnimated = this._isAnimated()

    this._element.removeAttribute('aria-hidden')
    this._element.setAttribute('aria-live', 'polite')

    if (isAnimated) {
      reflow(this._element)
    }

    this._element.classList.add(ClassName.SHOW)

    const transitionComplete = () => {
      this._isTransitioning = false
    }

    this._queueCallback(transitionComplete, this._element, isAnimated)
  }

  _hideElement() {
    this._element.style.display = 'none'
    this._element.setAttribute('aria-hidden', true)
    this._element.removeAttribute('aria-live')
    this._isTransitioning = false
  }

  _setCookieEU() {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + COOKIE_EXPIRE)
    var c_value = escape(COOKIE_VALUE) + (COOKIE_EXPIRE == null ? '' : '; expires=' + exdate.toUTCString())
    document.cookie = COOKIE_NAME + '=' + c_value + '; path=/'
  }

  _getSelectorFromElement(element) {
    var selector = element.getAttribute('data-target')

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href')
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : ''
    }

    try {
      return document.querySelector(selector) ? selector : null
    } catch (err) {
      return null
    }
  }

  _getRootElement(element) {
    const selector = this._getSelectorFromElement(element)
    let parent = false

    if (selector) {
      parent = $(selector)[0]
    }

    if (!parent) {
      parent = $(element).closest(`.${ClassName.COOKIE_BAR}`)[0]
    }

    return parent
  }

  _triggerCloseEvent(element) {
    const closeEvent = $.Event(Event.CLOSE)

    $(element).trigger(closeEvent)
    return closeEvent
  }

  _removeElement(element) {
    $(element).removeClass(ClassName.SHOW).attr('aria-hidden', 'true').attr('aria-live', 'off')

    this._destroyElement(element)
  }

  _destroyElement(element) {
    $(element).detach().trigger(Event.CLOSED).remove()
  }

  // Static

  /*static _jQueryInterface(config) {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY)

      if (!data) {
        data = new Cookiebar(this)
        $element.data(DATA_KEY, data)
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }
        data[config](this)
      }
    })
  }*/

  static _handleAccept(cookiebarInstance) {
    return function (event) {
      if (event) {
        event.preventDefault()
      }

      cookiebarInstance.close(this)
    }
  }

  static _handleConsent(cookiebarInstance) {
    return function (event) {
      if (event) {
        event.preventDefault()
      }

      cookiebarInstance.close(this)
    }
  }

  static _getCookieEU() {
    var i,
      x,
      y,
      ARRcookies = document.cookie.split(';')
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='))
      y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1)
      x = x.replace(/^\s+|\s+$/g, '')
      if (x == COOKIE_NAME) {
        return unescape(y)
      }
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

//$(document).on(Event.CLICK_DATA_API, Selector.ACCEPT, Cookiebar._handleAccept(new Cookiebar()))

EventHandler.on(document, Event.CLICK_DATA_API, Selector.ACCEPT, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault()
  }

  if (isDisabled(this)) {
    return
  }

  const target = getElementFromSelector(this) || this.closest(`.${NAME}`)
  const instance = Cookiebar.getOrCreateInstance(target)
  instance.accept()
  //Cookiebar._handleAccept(new Cookiebar())
})

EventHandler.on(window, Event.LOAD_DATA_API, function () {
  const consent = Cookiebar._getCookieEU()
  if (!consent) {
    const cookiebars = document.querySelectorAll(Selector.COOKIE_BAR)
    cookiebars.forEach((bar) => {
      const instance = Cookiebar.getOrCreateInstance(bar)
      instance.show()
    })
  }
})

/*$(window).on(Event.LOAD_DATA_API, () => {
  const cookiebars = $.makeArray($(Selector.COOKIE_BAR))
  var consent = Cookiebar._getCookieEU()
  if (!consent) {
    for (let i = cookiebars.length; i--;) {
      const $cookiebar = $(cookiebars[i])
      Cookiebar._jQueryInterface.call($cookiebar, 'show')
    }
  }
})*/

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Cookiebar to jQuery only if jQuery is present
 */

//defineJQueryPlugin(Cookiebar)

export default Cookiebar
