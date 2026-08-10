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
import { isVisible } from './index'
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

const Default = {
  autofocus: true,
  trapElement: null, // The element to trap focus inside of
  initialFocus: null, // The inside element (optional) to set the focus after trapped
}

const DefaultType = {
  autofocus: 'boolean',
  trapElement: 'element',
  initialFocus: '(null|element|string|function)',
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

    EventHandler.off(document, EVENT_KEY)
  }

  // Private
  _setInitialFocus() {
    const { trapElement } = this._config
    const target = this._resolveInitialFocus()

    target.focus()

    if (this._containsFocus()) {
      return
    }

    // Safari, on iOS above all, can ignore that first `focus()`: the element that had focus (the
    // hamburger button, for the mobile menu) has just been made `inert` by the caller, and WebKit
    // doesn't reliably blur it, so focus stays outside and the user keeps navigating the page
    // behind the panel. Retrying on the next frame, then falling back to the panel itself, makes
    // the entry point deterministic.
    requestAnimationFrame(() => {
      target.focus()

      if (!this._containsFocus()) {
        trapElement.focus()
      }
    })
  }

  _resolveInitialFocus() {
    const { trapElement, initialFocus } = this._config

    // No entry point configured: the trap element itself takes focus, so that screen readers
    // announce the dialog before its content (default behaviour of modals).
    if (!initialFocus) {
      return trapElement
    }

    let target = typeof initialFocus === 'function' ? initialFocus() : initialFocus
    if (typeof target === 'string') {
      target = SelectorEngine.findOne(target, trapElement)
    }

    const focusables = SelectorEngine.focusableChildren(trapElement)

    // A hidden, disabled or detached target would make `focus()` a silent no-op, leaving focus
    // wherever it was, so it is honoured only when it can really take focus right now. Besides the
    // tabbable elements that is also true of containers made focusable with `tabindex="-1"`, which
    // dialogs use as entry point to have their content read out.
    if (target === trapElement || focusables.includes(target)) {
      return target
    }

    if (target && target.hasAttribute('tabindex') && trapElement.contains(target) && isVisible(target)) {
      return target
    }

    return focusables[0] || trapElement
  }

  _containsFocus() {
    const { trapElement } = this._config

    return document.activeElement === trapElement || trapElement.contains(document.activeElement)
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

    const { trapElement } = this._config
    const elements = SelectorEngine.focusableChildren(trapElement)

    if (elements.length === 0) {
      event.preventDefault()
      trapElement.focus()
      return
    }

    // The cycle has to be closed here instead of relying on `_handleFocusin` bouncing focus back:
    // while the panel is open the rest of the page is `inert`, so past the last focusable element
    // there is nothing left in the document to receive focus. The browser hands it to its own UI
    // (address bar, devtools) and no `focusin` ever fires to bring it back.
    // `-1` covers the entry points that are not tabbable themselves, the trap element and the
    // containers focused with `tabindex="-1"`: they come before their own content, so going
    // backward from them has to wrap, while going forward can just follow the document order.
    const index = elements.indexOf(document.activeElement)

    if (event.shiftKey && index <= 0) {
      event.preventDefault()
      elements[elements.length - 1].focus()
    } else if (!event.shiftKey && index === elements.length - 1) {
      event.preventDefault()
      elements[0].focus()
    }
  }
}

export default FocusTrap
