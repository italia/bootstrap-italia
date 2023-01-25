import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
import Manipulator from 'bootstrap/js/src/dom/manipulator'

import onDocumentScroll from './util/on-document-scroll'
import NavBarCollapsible from './navbar-collapsible'

import { documentScrollTo } from './util/tween'

const NAME = 'navscroll'
//const DATA_KEY = 'bs.navscroll'
//const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

//const EVENT_SCROLL = `scroll${EVENT_KEY}`

const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_NAVSCROLL = '[data-bs-navscroll]' //'.it-navscroll-wrapper'
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
const SELECTOR_PROGRESS_BAR = '.it-navscroll-progressbar'

const Default = {
  scrollPadding: 10,
  duration: 800,
  easing: 'easeInOutSine',
}
class NavScroll extends BaseComponent {
  constructor(element, config) {
    super(element)

    this._config = this._getConfig(config)

    this._togglerElement = SelectorEngine.findOne(SELECTOR_TOGGLER, this._element)
    this._sectionContainer = SelectorEngine.findOne(SELECTOR_CONTAINER)
    this._collapsible = this._getCollapsible()
    this._isCollapseOpened = false
    this._callbackQueue = []
    this._scrollCb = null

    this._bindEvents()
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  setScrollPadding(scrollPadding) {
    this._config.scrollPadding = scrollPadding
  }

  dispose() {
    //EventHandler.off(window, EVENT_SCROLL, this._onScroll)
    if (this._scrollCb) {
      this._scrollCb.dispose()
    }

    super.dispose()
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    }
    return config
  }

  _bindEvents() {
    //EventHandler.on(window, EVENT_SCROLL, this._onScroll)

    this._scrollCb = onDocumentScroll(() => this._onScroll())

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

    EventHandler.on(window, 'load', () => {
      //if page is already scrolled
      setTimeout(() => this._onScroll(), 150)
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
      documentScrollTo(target.offsetTop - this._getScrollPadding(), {
        duration: this._config.duration,
        easing: this._config.easing,
        /*complete: () => {
        },*/
      })

      if (history.pushState) {
        history.pushState(null, null, hash)
      } else {
        location.hash = hash
      }
    }
  }

  _updateProgress(content) {
    const progressBars = SelectorEngine.find(SELECTOR_PROGRESS_BAR)
    if (progressBars) {
      const offset = Math.abs(content.getBoundingClientRect().top)
      const height = content.getBoundingClientRect().height
      const scrollAmount = (offset / height) * 100
      const scrollValue = Math.min(100, Math.max(0, scrollAmount))

      progressBars.forEach((progressBar) => {
        if (content.getBoundingClientRect().top <= 0) {
          progressBar.style.width = scrollValue + '%'
          progressBar.setAttribute('aria-valuenow', scrollValue)
        } else {
          progressBar.style.width = 0 + '%'
          progressBar.setAttribute('aria-valuenow', 0)
        }
      })
    }
  }

  _onScroll() {
    const sectionsContainerTop = this._sectionContainer ? this._sectionContainer.offsetTop : 0
    const scrollDistance = document.scrollingElement.scrollTop - sectionsContainerTop

    const navItems = SelectorEngine.find(SELECTOR_LINK, this._element)

    const scrollPadding = this._getScrollPadding()

    SelectorEngine.find(SELECTOR_PAGE_SECTION).forEach((pageSec, idx) => {
      if (pageSec.offsetTop - sectionsContainerTop <= scrollDistance + scrollPadding) {
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
    this._updateProgress(this._sectionContainer)
  }

  _getCollapsible() {
    const coll = SelectorEngine.findOne(SELECTOR_COLLAPSIBLE, this._element)
    if (coll) {
      return NavBarCollapsible.getOrCreateInstance(coll)
    }
    return null
  }

  _getScrollPadding() {
    if (typeof this._config.scrollPadding === 'function') {
      return this._config.scrollPadding()
    }
    return this._config.scrollPadding
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

onDocumentScroll(() => {
  const navs = SelectorEngine.find(SELECTOR_NAVSCROLL)
  navs.map((nav) => {
    NavScroll.getOrCreateInstance(nav)
  })
})

export default NavScroll
