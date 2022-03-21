import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

import NavBarCollapsible from './navbar-collapsible'

const NAME = 'navscroll'
const DATA_KEY = 'bs.navscroll'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const SCROLL_PADDING = 10

const EVENT_SCROLL = `scroll${EVENT_KEY}`

const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_NAVSCROLL = '.it-navscroll-wrapper'
const SELECTOR_LIST = 'ul.link-list'
//const SELECTOR_ITEM = '.nav-item'
const SELECTOR_LINK_CONTAINER = 'li.nav-link, li.nav-item'
const SELECTOR_LINK = 'a.nav-link'
const SELECTOR_LINK_ACTIVE = `${SELECTOR_LINK}.${CLASS_NAME_ACTIVE}`
const SELECTOR_LINK_CLICKABLE = `${SELECTOR_LINK}[href^="#"]`
const SELECTOR_CONTAINER = '.it-page-sections-container'
const SELECTOR_PAGE_SECTION = '.it-page-section'
const SELECTOR_TOGGLER = '.custom-navbar-toggler'
const SELECTOR_TOGGLER_ICON = '.it-list'
const SELECTOR_COLLAPSIBLE = '.navbar-collapsable'

class NavScroll extends BaseComponent {
  constructor(element) {
    super(element)

    this._togglerElement = SelectorEngine.findOne(SELECTOR_TOGGLER, this._element)
    this._sectionContainer = SelectorEngine.findOne(SELECTOR_CONTAINER)
    this._collapsible = this._getCollapsible()
    this._isCollapseOpened = false
    this._callbackQueue = []

    this._bindEvents()
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  dispose() {
    EventHandler.off(window, EVENT_SCROLL, this._onScroll)

    super.dispose()
  }
  // Private

  _bindEvents() {
    EventHandler.on(window, EVENT_SCROLL, this._onScroll)

    if (this._collapsible) {
      EventHandler.on(this._collapsible._element, 'shown.bs.navbarcollapsible', () => this._onCollapseOpened())
      EventHandler.on(this._collapsible._element, 'hidden.bs.navbarcollapsible', () => this._onCollapseClosed())
    }

    SelectorEngine.find(SELECTOR_LINK_CLICKABLE, this._element).forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        const scrollHash = () => this._scrollToHash(link.hash)
        if (this._isCollapseOpened) {
          this._callbackQueue.push(scrollHash)
          this._collapsible.hide()
        } else {
          scrollHash()
        }
      })
    })
  }

  _onCollapseOpened() {
    this._isCollapseOpened = true
  }
  _onCollapseClosed() {
    while (this._callbackQueue.length > 0) {
      const cb = this._callbackQueue.shift()
      if (typeof cb === 'function') {
        cb()
      }
    }
    this._isCollapseOpened = false
  }

  _getParentLinks(element) {
    const parents = []
    let parentContainer = element.closest(SELECTOR_LIST)
    let parentContainerPrev = null
    let exit = false
    while (parentContainer && !exit) {
      const parentLinkContainer = parentContainer.closest(SELECTOR_LINK_CONTAINER)
      if (parentLinkContainer) {
        const link = parentLinkContainer.querySelector(SELECTOR_LINK)
        if (link) {
          parents.push(link)
        }
      }
      parentContainerPrev = parentContainer
      parentContainer = (parentContainer.parentElement || parentContainer).closest(SELECTOR_LIST) //avoid self select of closest
      if (parentContainer === parentContainerPrev) {
        exit = true
      }
    }
    return parents
  }

  _decorateToggler(text) {
    if (this._togglerElement) {
      const icon = SelectorEngine.findOne(SELECTOR_TOGGLER_ICON, this._togglerElement)
      this._togglerElement.innerText = ''
      this._togglerElement.textContent = ''
      this._togglerElement.append(icon)
      this._togglerElement.append(text)
    }
  }

  _scrollToHash(hash) {
    const target = SelectorEngine.findOne(hash, this._sectionContainer)
    if (target) {
      //scroll animation - TODO
      const scrollingElement = document.scrollingElement
      scrollingElement.scrollTop = target.offsetTop

      if (history.pushState) {
        history.pushState(null, null, hash)
      } else {
        location.hash = hash
      }
    }
  }

  _onScroll = () => {
    const sectionsContainerTop = this._sectionContainer ? this._sectionContainer.offsetTop : 0
    const scrollDistance = document.scrollingElement.scrollTop - sectionsContainerTop

    const navItems = SelectorEngine.find(SELECTOR_LINK, this._element)

    SelectorEngine.find(SELECTOR_PAGE_SECTION).forEach((pageSec, idx) => {
      if (pageSec.offsetTop <= scrollDistance + SCROLL_PADDING) {
        SelectorEngine.find(SELECTOR_LINK_ACTIVE, this._element).forEach((link) => {
          link.classList.remove(CLASS_NAME_ACTIVE)
        })
        if (idx < navItems.length) {
          const currActive = navItems[idx]
          this._getParentLinks(currActive).forEach((parentLink) => {
            parentLink.classList.add(CLASS_NAME_ACTIVE)
          })
          currActive.classList.add(CLASS_NAME_ACTIVE)
          this._decorateToggler(currActive.innerText)
        }
      }
    })
  }

  _getCollapsible() {
    const coll = SelectorEngine.findOne(SELECTOR_COLLAPSIBLE, this._element)
    if (coll) {
      return NavBarCollapsible.getOrCreateInstance(coll)
    }
    return null
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
const navs = SelectorEngine.find(SELECTOR_NAVSCROLL)
navs.forEach((nav) => {
  NavScroll.getOrCreateInstance(nav)
})

export default NavScroll
