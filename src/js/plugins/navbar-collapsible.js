/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import { getElementFromSelector, isVisible, reflow } from './util/index'
import EventHandler from './dom/event-handler'
import SelectorEngine from './dom/selector-engine'
import { isScreenMobile } from './util/device'
import ScrollBarHelper from './util/scrollbar'
import FocusTrap from './util/focustrap'
import Backdrop from './util/backdrop'
import { buildMobileMenu } from './util/mobile-menu'
import { applyInert, releaseInert } from './util/inert'

const NAME = 'navbarcollapsible'
const DATA_KEY = 'bs.navbarcollapsible'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_RESIZE = `resize${EVENT_KEY}`

const CLASS_NAME_OPEN = 'navbar-open'
const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_EXPANDED = 'expanded'

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="navbarcollapsible"]'
const SELECTOR_BTN_CLOSE = '.close-div button'
const SELECTOR_BTN_MENU_CLOSE = '.close-menu'
const SELECTOR_BTN_BACK = '.it-back-button'
const SELECTOR_MENU_WRAPPER = '.menu-wrapper'
const SELECTOR_NAVLINK = '.nav-link'
const SELECTOR_MEGAMENUNAVLINK = '.nav-item .list-item'
const SELECTOR_HEADINGLINK = '.it-heading-link'
const SELECTOR_FOOTERLINK = '.it-footer-link'

const Default = {
  backdrop: true,
  focus: true,
}

const DefaultType = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
}

class NavBarCollapsible extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._parentElement = this._element.parentNode
    this._inertedElements = []

    this._isShown = this._element.classList.contains(CLASS_NAME_EXPANDED)

    if (!this._element.getAttribute('tabindex')) {
      this._element.setAttribute('tabindex', '-1')
    }

    this._backdrop = this._initializeBackDrop()
    this._focustrap = this._initializeFocusTrap()
    this._scrollBar = new ScrollBarHelper()
    this._isTransitioning = false
    this._isMobile = isScreenMobile()

    this._btnClose = SelectorEngine.findOne(SELECTOR_BTN_CLOSE, this._element)
    this._btnBack = SelectorEngine.findOne(SELECTOR_BTN_BACK, this._element)
    this._menuWrapper = SelectorEngine.findOne(SELECTOR_MENU_WRAPPER, this._element)

    // Must run before `_menuItems` is collected, so that the cloned links are bound as well.
    buildMobileMenu(this._element)

    this._menuItems = SelectorEngine.find(
      [SELECTOR_NAVLINK, SELECTOR_MEGAMENUNAVLINK, SELECTOR_HEADINGLINK, SELECTOR_FOOTERLINK, SELECTOR_BTN_MENU_CLOSE].join(','),
      this._element
    )

    this._toggleButton =
      SelectorEngine.findOne(`${SELECTOR_DATA_TOGGLE}[data-bs-target="#${this._element.id}"]`) ||
      SelectorEngine.findOne(`${SELECTOR_DATA_TOGGLE}[href="#${this._element.id}"]`)

    if (this._toggleButton) {
      if (!this._toggleButton.getAttribute('aria-expanded')) {
        this._toggleButton.setAttribute('aria-expanded', this._isShown ? 'true' : 'false')
      }
    }
    this._bindEvents()
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
  toggle(relatedTarget) {
    this._isShown ? this.hide() : this.show(relatedTarget)
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
      relatedTarget,
    })

    if (showEvent.defaultPrevented) {
      return
    }

    this._isShown = true
    this._isTransitioning = true
    this._scrollBar.hide()

    if (this._btnBack) {
      this._btnBack.classList.add(CLASS_NAME_SHOW)
    }

    document.body.classList.add(CLASS_NAME_OPEN)

    this._backdrop.show()
    this._showElement()

    if (this._toggleButton) {
      this._toggleButton.setAttribute('aria-expanded', 'true')
    }
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE)

    if (hideEvent.defaultPrevented) {
      return
    }

    this._isShown = false

    this._isTransitioning = true
    this._focustrap.deactivate()

    if (this._btnBack) {
      this._btnBack.classList.remove(CLASS_NAME_SHOW)
    }

    this._element.classList.remove(CLASS_NAME_EXPANDED)

    this._backdrop.hide()

    this._queueCallback(() => this._hideElement(), this._menuWrapper, this._isAnimated())

    if (this._toggleButton) {
      this._toggleButton.setAttribute('aria-expanded', 'false')
    }
  }

  dispose() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.off(window, EVENT_RESIZE)
      EventHandler.off(document, EVENT_KEYDOWN)
    }
    this._backdrop.dispose()

    this._focustrap.deactivate()
    this._removeInert()
    super.dispose()
  }

  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop), // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated(),
      className: 'navbar-backdrop',
      rootElement: this._parentElement,
      clickCallback: () => {
        this.hide()
      },
    })
  }

  _initializeFocusTrap() {
    // Focus enters on the close button, and not on the panel: screen readers announce a dialog
    // when focus crosses into it from the outside, taking role and label from the ancestor, so
    // landing on the button gets both the dialog and the button announced. Landing on the panel
    // itself would spend that crossing on a node that only carries the label, and the later move
    // to the button, being internal to the dialog, would be silent.
    return new FocusTrap({
      trapElement: this._element,
      initialFocus: () => this._btnClose,
    })
  }

  // Private
  _bindEvents() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.on(window, EVENT_RESIZE, () => this._onResize())
      EventHandler.on(document, EVENT_KEYDOWN, (evt) => {
        if (this._isShown && evt.key === 'Escape') {
          this.hide()
        }
      })

      EventHandler.on(this._btnClose, EVENT_CLICK, (evt) => {
        evt.preventDefault()
        this.hide()
      })
      EventHandler.on(this._btnBack, EVENT_CLICK, (evt) => {
        evt.preventDefault()
        this.hide()
      })
      this._menuItems.forEach((item) => {
        EventHandler.on(item, EVENT_KEYDOWN, (evt) => this._isMobile && this._onMenuItemKeyDown(evt))
      })
    }
  }

  _onResize() {
    this._isMobile = isScreenMobile()
  }

  _onMenuItemKeyDown(evt) {
    if (evt.key === 'Escape') {
      this.hide()
    }
  }

  _isAnimated() {
    return true
  }

  _isElementHidden(element) {
    return element.offsetParent === null
  }

  _showElement() {
    this._element.style.display = 'block'
    if (!this._element.getAttribute('aria-label') && !this._element.getAttribute('aria-labelledby')) {
      this._element.setAttribute('aria-label', 'Menu')
    }
    this._element.setAttribute('aria-modal', true)
    this._element.setAttribute('role', 'dialog')

    reflow(this._element)

    this._element.classList.add(CLASS_NAME_EXPANDED)

    // Focus has to move inside the panel *before* the background is inerted, and not once the
    // panel has finished opening: the hamburger button is about to become inert, and WebKit leaves
    // the VoiceOver cursor stranded on it, with no way out of the isolated background.
    if (this._config.focus) {
      this._focustrap.activate()
    }

    this._applyInert()

    const transitionComplete = () => {
      this._isTransitioning = false
      EventHandler.trigger(this._element, EVENT_SHOWN)
    }

    this._queueCallback(transitionComplete, this._menuWrapper, this._isAnimated())
  }

  _hideElement() {
    this._element.style.display = 'none'
    this._element.removeAttribute('aria-modal')
    this._element.removeAttribute('role')

    document.body.classList.remove(CLASS_NAME_OPEN)

    // the background must not be inert anymore before EVENT_HIDDEN fires, since focus is
    // restored to the toggle button, which is one of the previously inerted elements
    this._removeInert()

    this._scrollBar.reset()
    this._isTransitioning = false

    EventHandler.trigger(this._element, EVENT_HIDDEN)
  }

  _applyInert() {
    // The panel is a fixed overlay covering the whole viewport, so everything outside it must be
    // unreachable while it is open: the focus trap alone doesn't stop a screen reader virtual
    // cursor, which would otherwise walk the header bands, the page content and the footer.
    // The backdrop is skipped because `inert` also blocks pointer events, and clicking it closes
    // the menu.
    this._inertedElements = applyInert(this._element, (sibling) => sibling.matches('.navbar-backdrop'))
  }

  _removeInert() {
    this._inertedElements = releaseInert(this._inertedElements)
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = getElementFromSelector(this)

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault()
    }

    EventHandler.one(target, EVENT_SHOW, (showEvent) => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return
      }

      EventHandler.one(target, EVENT_HIDDEN, () => {
        if (isVisible(this)) {
          this.focus()
        }
      })
    })

    const data = NavBarCollapsible.getOrCreateInstance(target)

    data.toggle(this)
  })
}

export default NavBarCollapsible
