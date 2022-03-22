import anime from 'animejs/lib/anime.es.js'

import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

import DocumentScrollEventHandler from './document-scroll-event-handler'

const NAME = 'backtotop'
const DATA_KEY = 'bs.backtotop'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

//const EVENT_SCROLL = `scroll${EVENT_KEY}`
const EVENT_CLICK = `click${EVENT_KEY}`

const CLASS_NAME_SHOW = 'back-to-top-show'

const SELECTOR_TOGGLE = '[data-bs-toggle="backtotop"]'

const Default = {
  positionTop: 0,
  scrollLimit: 100,
  duration: 800,
  easing: 'easeInOutQuad',
}

class BackToTop extends BaseComponent {
  constructor(element, config) {
    super(element)

    this._config = this._getConfig(config)
    this._scrollCb = null
    this._isAnim = false

    this._bindEvents()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  show() {
    if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
      this._element.classList.add(CLASS_NAME_SHOW)
    }
  }

  hide() {
    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this._element.classList.remove(CLASS_NAME_SHOW)
    }
  }

  scrollToTop() {
    if (!this._isAnim) {
      this._isAnim = true
      anime({
        targets: window.document.scrollingElement || window.document.body || window.document.documentElement,
        scrollTop: 0,
        duration: 500,
        easing: 'easeInOutQuad',
        //easing: this._config.easing,
        complete: () => {
          this._isAnim = false
        },
        update: (anim) => {
          console.log('---', { anim })
        },
      })
    }
  }

  dispose() {
    if (this._scrollCb) {
      this._scrollCb.dispose()
    }

    super.dispose()
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...(typeof config === 'object' ? config : {}),
    }
    return config
  }

  _bindEvents() {
    this._scrollCb = DocumentScrollEventHandler.add(() => this._toggleShow())

    EventHandler.on(this._element, EVENT_CLICK, (evt) => {
      evt.preventDefault()
      this.scrollToTop()
    })
  }

  _toggleShow() {
    if (document.scrollingElement.scrollTop > this._config.scrollLimit) {
      this.show()
    } else {
      this.hide()
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
const toggles = SelectorEngine.find(SELECTOR_TOGGLE)
toggles.forEach((toggle) => {
  BackToTop.getOrCreateInstance(toggle)
})

export default BackToTop
