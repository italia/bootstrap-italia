import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
import { isVisible } from 'bootstrap/js/src/util'

import Sticky from './sticky'

import onDocumentScroll from './util/on-document-scroll'

const CLASS_NAME_CLONED_HEADER = 'cloned-element'
const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_ISTICKY = 'is-sticky'

const SELECTOR_HEADER = '.it-header-sticky'
const SELECTOR_TOGGLER = '.custom-navbar-toggler'
const SELECTOR_MENU_WRAPPER = '.menu-wrapper'
const SELECTOR_BRAND_WRAPPER = '.it-brand-wrapper'
const SELECTOR_SEARCH_WRAPPER = '.it-search-wrapper'
const SELECTOR_USER_WRAPPER = '.it-user-wrapper'
const SELECTOR_CLONED = `.${CLASS_NAME_CLONED_HEADER}`

// eslint-disable-next-line no-undef
const dataSet = new Map()

class HeaderSticky {
  //HeaderSticky uses Sticky so it can't be a Bootstrap BaseComponent
  constructor(element) {
    if (dataSet.get(element)) {
      return null
    }

    this._element = element
    this._elementObj = Sticky.getOrCreateInstance(element)

    dataSet.set(element, this._elementObj)

    this._bindEvents()

    this._toggleClonedElement(this._element.classList.contains(CLASS_NAME_ISTICKY))
  }

  //Static

  static getOrCreateInstance(element) {
    return dataSet.get(element) || new this(element)
  }

  //Private

  _bindEvents() {
    this._element.addEventListener('on.bs.sticky', () => this._toggleClonedElement(true))
    this._element.addEventListener('off.bs.sticky', () => this._toggleClonedElement(false))
  }

  _toggleClonedElement(toAdd = true) {
    const isDesktop = !isVisible(SelectorEngine.findOne(SELECTOR_TOGGLER, this._element))

    if (isDesktop) {
      const target = SelectorEngine.findOne(SELECTOR_MENU_WRAPPER, this._element)

      if (toAdd) {
        const elBrand = SelectorEngine.findOne(SELECTOR_BRAND_WRAPPER, this._element)
        const elSearch = SelectorEngine.findOne(SELECTOR_SEARCH_WRAPPER, this._element)
        const elUser = SelectorEngine.findOne(SELECTOR_USER_WRAPPER, this._element)

        const clonedBrand = elBrand ? elBrand.cloneNode(true) : null
        const clonedSearch = elSearch ? elSearch.cloneNode(true) : null
        const clonedUser = elUser ? elUser.cloneNode(true) : null

        if (clonedBrand) {
          target.insertBefore(clonedBrand, target.childNodes[0]).classList.add(CLASS_NAME_CLONED_HEADER)
        }
        if (clonedSearch) {
          target.appendChild(clonedSearch).classList.add(CLASS_NAME_CLONED_HEADER)
        }
        if (clonedUser) {
          target.appendChild(clonedUser).classList.add(CLASS_NAME_CLONED_HEADER)
          target.appendChild(clonedUser).classList.remove(CLASS_NAME_SHOW)
        }
      } else {
        SelectorEngine.find(SELECTOR_CLONED, this._element).forEach((item) => {
          item.parentElement.removeChild(item)
        })
      }
    }
  }

  /*if (toAdd) {
    elSticky.nextElementSibling.style.paddingTop = navbarHeight + (isDesktop ? navOffsetTop - scrollToGap : navbarHeight - scrollToGap) + 'px'
  } else {
    elSticky.nextElementSibling.style.paddingTop = 0 + 'px'
  }*/
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

onDocumentScroll(() => {
  const stickies = SelectorEngine.find(SELECTOR_HEADER)
  stickies.map((sticky) => {
    HeaderSticky.getOrCreateInstance(sticky)
  })
})

export default HeaderSticky
