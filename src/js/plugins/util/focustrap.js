/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * This a fork of Bootstrap: Initial license and original file name below
 * Bootstrap (v5.2.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import EventHandler from '../dom/event-handler'
import SelectorEngine from '../dom/selector-engine'
import Config from './config'

/**
 * Constants
 */

const NAME = 'focustrap'
const DATA_KEY = 'bs.focustrap'
const EVENT_KEY = `.${DATA_KEY}`
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`

const TAB_KEY = 'Tab'
const TAB_NAV_FORWARD = 'forward'
const TAB_NAV_BACKWARD = 'backward'

const ARIA_ATTR = 'aria-hidden'
const DATA_ORIGINAL_ARIA = 'data-original-aria-hidden'

const Default = {
  autofocus: true,
  trapElement: null, // The element to trap focus inside of
  initialFocus: null, // The element (if passed) to initialize the focus after trapped
  setAriaHidden: true, // Whether to set aria-hidden on outside elements
}

const DefaultType = {
  autofocus: 'boolean',
  trapElement: 'element',
  initialFocus: '(null|element|string|function)',
  setAriaHidden: 'boolean',
}

/**
 * Class definition
 */

class FocusTrap extends Config {
  constructor(config) {
    super()
    this._config = this._getConfig(config)
    this._isActive = false
    this._lastTabNavDirection = null
    this._affectedElements = []
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  activate() {
    if (this._isActive) {
      return
    }

    // Apply aria-hidden to other elements behind the curtain
    if (this._config.setAriaHidden) {
      this._setAriaHiddenOnOutsideElements()
    }

    if (this._config.autofocus) {
      this._setInitialFocus()
    }

    EventHandler.off(document, EVENT_KEY) // guard against infinite focus loop
    EventHandler.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event))
    EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event))

    this._isActive = true
  }

  deactivate() {
    if (!this._isActive) {
      return
    }
    this._isActive = false

    if (this._config.setAriaHidden) {
      this._removeAriaHidden()
    }

    EventHandler.off(document, EVENT_KEY)
  }

  // Private
  _setInitialFocus() {
    if (this._config.initialFocus) {
      let target
      if (typeof this._config.initialFocus === 'function') {
        target = this._config.initialFocus()
      } else {
        target = this._config.initialFocus
      }
      if (target && typeof target.focus === 'function') {
        target.focus()
      } else {
        this._config.trapElement.focus()
      }
    } else {
      this._config.trapElement.focus()
    }
  }

  _handleFocusin(event) {
    const { trapElement } = this._config

    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return
    }

    const elements = SelectorEngine.focusableChildren(trapElement)
    if (elements.length === 0) {
      trapElement.focus()
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus()
    } else {
      elements[0].focus()
    }
  }

  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return
    }

    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD
  }

  _setAriaHiddenOnOutsideElements() {
    const { trapElement } = this._config

    // Build array of trap element and all parents up to body
    const trapPath = []
    let currentEl = trapElement
    while (currentEl && currentEl !== document.body) {
      trapPath.push(currentEl)
      currentEl = currentEl.parentElement
    }

    // For each container parent in the path, we need to hide all siblings
    // but keep the parent itself accessible
    trapPath.forEach(pathElement => {
      if (pathElement.parentElement) {
        // Hide all siblings of this path element
        Array.from(pathElement.parentElement.children).forEach(sibling => {
          // Skip the element that is in our path
          if (sibling === pathElement || sibling.tagName === 'SCRIPT' || sibling.tagName === 'STYLE' || sibling.tagName === 'LINK') {
            return
          }

          const originalValue = sibling.getAttribute(ARIA_ATTR)
          if (originalValue !== null) {
            sibling.setAttribute(DATA_ORIGINAL_ARIA, originalValue)
          } else {
            sibling.setAttribute(DATA_ORIGINAL_ARIA, 'false')
          }

          sibling.setAttribute(ARIA_ATTR, 'true')
          this._affectedElements.push(sibling)
        })
      }
    })

    // Additionally, hide all top-level elements that aren't in our path
    const topLevelElements = document.querySelectorAll('body > *')
    topLevelElements.forEach(element => {
      if (!trapPath.includes(element) &&
        element.tagName !== 'SCRIPT' &&
        element.tagName !== 'STYLE' &&
        element.tagName !== 'LINK') {

        const originalValue = element.getAttribute(ARIA_ATTR)
        if (originalValue !== null) {
          element.setAttribute(DATA_ORIGINAL_ARIA, originalValue)
        } else {
          element.setAttribute(DATA_ORIGINAL_ARIA, 'false')
        }

        element.setAttribute(ARIA_ATTR, 'true')
        this._affectedElements.push(element)
      }
    })
  }

  _removeAriaHidden() {
    this._affectedElements.forEach(element => {
      const originalValue = element.getAttribute(DATA_ORIGINAL_ARIA)

      if (originalValue === 'false') {
        element.removeAttribute(ARIA_ATTR)
      } else if (originalValue !== null) {
        element.setAttribute(ARIA_ATTR, originalValue)
      }

      element.removeAttribute(DATA_ORIGINAL_ARIA)
    })

    this._affectedElements = []
  }
}


export default FocusTrap
