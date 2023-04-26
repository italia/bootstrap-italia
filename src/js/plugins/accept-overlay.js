import BaseComponent from 'bootstrap/js/src/base-component.js'

import { reflow } from 'bootstrap/js/src/util'
import { setCookiePreference, getCookiePreference } from './util/cookies'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'


const NAME = 'acceptoverlay'
const DATA_KEY = 'bs.accept-overlay'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'

const SELECTOR_DATA_TOGGLE = '[data-bs-accept-from]'
const SELECTOR_DATA_REMEMBER = '[data-bs-accept-remember]'

class AcceptOverlay extends BaseComponent {
  constructor(element, config) {
    const parentElement = element.closest('.acceptoverlay')
    super(parentElement)
    const remember = getCookiePreference(config.service);
    this._isShown = true
    this._toggleElement = element
    if (remember) {
      this.hide()
      setTimeout(() => {
        this._toggleElement.dispatchEvent(new Event('click'));
      }, 100);
      return
    }
    this._toggleElement.addEventListener("click", () => {
      this.hide();
      this._remember = this._toggleElement.parentElement.querySelector(SELECTOR_DATA_REMEMBER).checked
      setCookiePreference(config.service, this._remember)
    });
  }

  // Getters

  static get NAME() {
    return NAME
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

    this._element.classList.remove(CLASS_NAME_SHOW)

    this._queueCallback(() => this._hideElement(), this._element, isAnimated)
  }

  //Private

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE)
  }

  _showElement() {
    const isAnimated = this._isAnimated()

    this._element.removeAttribute('aria-hidden')

    if (isAnimated) {
      reflow(this._element)
    }

    this._element.classList.add(CLASS_NAME_SHOW)

    const transitionComplete = () => {
      this._isTransitioning = false
    }

    this._queueCallback(transitionComplete, this._element, isAnimated)
  }

  _hideElement() {
    this._element.setAttribute('aria-hidden', true)
    this._isTransitioning = false
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const acceptOverlays = SelectorEngine.find(SELECTOR_DATA_TOGGLE)
if (acceptOverlays.length > 0) {
  acceptOverlays.forEach((element) => {
    AcceptOverlay.getOrCreateInstance(
      element, {service: element.dataset.bsAcceptFrom}
    )
  })
}

export default AcceptOverlay
