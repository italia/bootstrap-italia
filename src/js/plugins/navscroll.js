import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

const NAME = 'navscroll'
const DATA_KEY = 'bs.navscroll'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const SCROLL_PADDING = 10

const EVENT_SCROLL = `scroll${EVENT_KEY}`

const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_NAVSCROLL = '.it-navscroll-wrapper'
const SELECTOR_NAVSCROLL_LIST = '.link-list'
const SELECTOR_NAVSCROLL_ITEM = '.nav-link'
const SELECTOR_NAVSCROLL_ITEM_ACTIVE = `${SELECTOR_NAVSCROLL_ITEM}.${CLASS_NAME_ACTIVE}`
const SELECTOR_CONTAINER = '.it-page-sections-container'
const SELECTOR_PAGE_SECTION = '.it-page-section'

class NavScroll extends BaseComponent {
  constructor(element) {
    super(element)

    this._setScrollEvent()
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  dispose() {
    EventHandler.off(window, EVENT_SCROLL, this._onScroll)
  }
  // Private

  _setScrollEvent() {
    //EventHandler.off(window, EVENT_SCROLL)
    EventHandler.on(window, EVENT_SCROLL, this._onScroll)
  }

  _getListParents(element) {
    let target = element
    const parents = []
    let parentSection = null
    while ((parentSection = target.closest(SELECTOR_NAVSCROLL_LIST))) {
      parents.push(parentSection)
      target = parentSection
    }
    //const parentSection = element.closest(SELECTOR_NAVSCROLL_LIST)
    //return parentSection ? parentSection.closest(SELECTOR_NAVSCROLL_LIST) : null
    return parents
  }

  _onScroll = () => {
    /*var sectionsContainerTop = $('.it-page-sections-container').length ? $('.it-page-sections-container').offset().top : 0
    var scrollDistance = $(window).scrollTop() - sectionsContainerTop
    // Assign active class to nav links while scolling
    $('.it-page-section').each(function (i) {
      if ($(this).position().top <= scrollDistance + 10) {
        $('.it-navscroll-wrapper .menu-wrapper a.active').removeClass('active')
        $('.it-navscroll-wrapper .menu-wrapper a').eq(i).addClass('active')
        var parentsection = $('.it-navscroll-wrapper .menu-wrapper a').eq(i).closest('ul').prev('a')
        var parentparentsection = $(parentsection).closest('ul').prev('a')
        $(parentsection).addClass('active')
        $(parentparentsection).addClass('active')
        var textContent = $('.it-navscroll-wrapper .menu-wrapper a').eq(i).find('span').text()
        var $btn = $('.it-navscroll-wrapper .custom-navbar-toggler')
        var $icon = $btn.find('span.it-list')
        $btn.text(textContent)
        $btn.prepend($icon)
      }
    })*/

    const container = SelectorEngine.findOne(SELECTOR_CONTAINER)
    const sectionsContainerTop = container ? container.offsetTop : 0
    const scrollDistance = document.scrollingElement.scrollTop - sectionsContainerTop
    console.log('---scrooooolllulz', { container, sectionsContainerTop, scrollDistance })
    const navItems = SelectorEngine.find(SELECTOR_NAVSCROLL_ITEM, this._element)
    SelectorEngine.find(SELECTOR_PAGE_SECTION, this._element).forEach((pageSec, idx) => {
      if (pageSec.offsetTop <= scrollDistance + SCROLL_PADDING) {
        const activeEl = SelectorEngine.findOne(SELECTOR_NAVSCROLL_ITEM_ACTIVE, this._element)
        if (activeEl) {
          activeEl.classList.remove(CLASS_NAME_ACTIVE)
          if (navItems.length > idx) {
            const currActive = navItems[idx]
            const parents = this._getListParents(currActive)
            if (parents.) {

            }

            currActive.classList.add(CLASS_NAME_ACTIVE)

          }
        }
      }
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
const navs = SelectorEngine.find(SELECTOR_NAVSCROLL)
console.log('---', navs)
navs.forEach((nav) => {
  new NavScroll(nav)
})

export default NavScroll

/*
$(function () {
  var overlay = $('.overlay')
  var backbutton = $('.it-back-button')

  $('.it-bottom-navscroll ul li a[href^="#"]').on('click', function (e) {
    e.preventDefault()

    var hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      600,
      function () {
        if (history.pushState) {
          history.pushState(null, null, hash)
        } else {
          location.hash = hash
        }
      }
    )
    //close window on click
    $(overlay).trigger('click')
  })

  // navscroll back function
  $(backbutton).click(function (event) {
    $(overlay).trigger('click')
    $(this).fadeOut()
    event.preventDefault()
  })

  // navscroll item on scroll
  $(window)
    .on('scroll', function () {
      var sectionsContainerTop = $('.it-page-sections-container').length ? $('.it-page-sections-container').offset().top : 0
      var scrollDistance = $(window).scrollTop() - sectionsContainerTop
      // Assign active class to nav links while scolling
      $('.it-page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance + 10) {
          $('.it-navscroll-wrapper .menu-wrapper a.active').removeClass('active')
          $('.it-navscroll-wrapper .menu-wrapper a').eq(i).addClass('active')
          var parentsection = $('.it-navscroll-wrapper .menu-wrapper a').eq(i).closest('ul').prev('a')
          var parentparentsection = $(parentsection).closest('ul').prev('a')
          $(parentsection).addClass('active')
          $(parentparentsection).addClass('active')
          var textContent = $('.it-navscroll-wrapper .menu-wrapper a').eq(i).find('span').text()
          var $btn = $('.it-navscroll-wrapper .custom-navbar-toggler')
          var $icon = $btn.find('span.it-list')
          $btn.text(textContent)
          $btn.prepend($icon)
        }
      })
    })
    .scroll()
})
*/
