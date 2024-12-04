import BaseComponent from './base-component.js';
import { getElementFromSelector, isVisible, reflow } from './util/index.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';
import { isScreenMobile } from './util/device.js';
import { getElementIndex } from './util/dom.js';
import { disablePageScroll, enablePageScroll } from './util/pageScroll.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'navbarcollapsible';
const DATA_KEY = 'bs.navbarcollapsible';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_KEYUP = `keyup${EVENT_KEY}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_RESIZE = `resize${EVENT_KEY}`;

const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_EXPANDED = 'expanded';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="navbarcollapsible"]';

//const SELECTOR_NAVBAR = '.navbar-collapsable'
const SELECTOR_BTN_CLOSE = '.close-div button';
const SELECTOR_BTN_MENU_CLOSE = '.close-menu';
const SELECTOR_BTN_BACK = '.it-back-button';
const SELECTOR_OVERLAY = '.overlay';
const SELECTOR_MENU_WRAPPER = '.menu-wrapper';
const SELECTOR_NAVLINK = '.nav-link';
const SELECTOR_MEGAMENUNAVLINK = '.nav-item .list-item';
const SELECTOR_HEADINGLINK = '.it-heading-link';
const SELECTOR_FOOTERLINK = '.it-footer-link';

class NavBarCollapsible extends BaseComponent {
  constructor(element) {
    super(element);

    this._isShown = this._element.classList.contains(CLASS_NAME_EXPANDED);
    this._isTransitioning = false;

    this._isMobile = isScreenMobile();
    this._isKeyShift = false;

    this._currItemIdx = 0;

    this._btnClose = SelectorEngine.findOne(SELECTOR_BTN_CLOSE, this._element);
    this._btnBack = SelectorEngine.findOne(SELECTOR_BTN_BACK, this._element);
    this._menuWrapper = SelectorEngine.findOne(SELECTOR_MENU_WRAPPER, this._element);
    this._overlay = null;
    this._setOverlay();
    this._menuItems = SelectorEngine.find(
      [SELECTOR_NAVLINK, SELECTOR_MEGAMENUNAVLINK, SELECTOR_HEADINGLINK, SELECTOR_FOOTERLINK, SELECTOR_BTN_MENU_CLOSE].join(','),
      this._element
    );

    this._bindEvents();
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
      relatedTarget,
    });

    if (showEvent.defaultPrevented) {
      return
    }

    if (this._btnBack) {
      this._btnBack.classList.add(CLASS_NAME_SHOW);
    }

    this._isShown = true;

    disablePageScroll();
    this._showElement();
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return
    }

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    if (this._btnBack) {
      this._btnBack.classList.remove(CLASS_NAME_SHOW);
    }
    if (this._overlay) {
      this._overlay.classList.remove(CLASS_NAME_SHOW);
    }

    this._element.classList.remove(CLASS_NAME_EXPANDED);

    enablePageScroll();
    this._queueCallback(() => this._hideElement(), this._menuWrapper, isAnimated);
  }

  toggle(relatedTarget) {
    this._isShown ? this.hide() : this.show(relatedTarget);
  }

  dispose() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.off(window, EVENT_RESIZE);
      super.dispose();
    }
  }

  // Private

  _bindEvents() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.on(window, EVENT_RESIZE, () => this._onResize());

      if (this._overlay) {
        EventHandler.on(this._overlay, EVENT_CLICK, () => this.hide());
      }
      EventHandler.on(this._btnClose, EVENT_CLICK, (evt) => {
        evt.preventDefault();
        this.hide();
      });
      EventHandler.on(this._btnBack, EVENT_CLICK, (evt) => {
        evt.preventDefault();
        this.hide();
      });

      this._menuItems.forEach((item) => {
        EventHandler.on(item, EVENT_KEYDOWN, (evt) => this._isMobile && this._onMenuItemKeyDown(evt));
        EventHandler.on(item, EVENT_KEYUP, (evt) => this._isMobile && this._onMenuItemKeyUp(evt));
        EventHandler.on(item, EVENT_CLICK, (evt) => this._isMobile && this._onMenuItemClick(evt));
      });
    }
  }

  _onResize() {
    this._isMobile = isScreenMobile();
  }

  _onMenuItemKeyUp(evt) {
    if (evt.key === 'Shift') {
      this._isKeyShift = false;
    }
  }
  _onMenuItemKeyDown(evt) {
    if (evt.key === 'Shift') {
      this._isKeyShift = true;
    }
    if (evt.key === 'Tab') {
      evt.preventDefault();
      this._focusNext();
    }
  }
  /**
   * Update the last focused element when an interactive element is clicked
   */
  _onMenuItemClick(evt) {
    this.currItemIdx = getElementIndex(evt.currentTarget, this._menuItems);
  }

  _isAnimated() {
    //there's no an animation css class you can toggle with a "show" css class, so it is supposed true
    return true //this._element.classList.contains(CLASS_NAME_EXPANDED)
  }

  _isElementHidden(element) {
    return element.offsetParent === null
  }

  _showElement() {
    const isAnimated = this._isAnimated();

    this._element.style.display = 'block';
    this._element.removeAttribute('aria-hidden');
    this._element.setAttribute('aria-expanded', true);
    //this._element.setAttribute('role', 'dialog')
    if (this._overlay) {
      this._overlay.style.display = 'block';
    }

    if (isAnimated) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_EXPANDED);
    if (this._overlay) {
      this._overlay.classList.add(CLASS_NAME_SHOW);
    }

    const transitionComplete = () => {
      this._isTransitioning = false;
      const firstItem = this._getNextVisibleItem(0); //at pos 0 there's the close button
      if (firstItem.item) {
        firstItem.item.focus();
        this._currItemIdx = firstItem.index;
      }
      EventHandler.trigger(this._element, EVENT_SHOWN);
    };

    this._queueCallback(transitionComplete, this._menuWrapper, isAnimated);
  }

  _hideElement() {
    if (this._overlay) {
      this._overlay.style.display = 'none';
    }

    this._element.style.display = 'none';
    this._element.setAttribute('aria-hidden', true);
    this._element.removeAttribute('aria-expanded');
    //this._element.removeAttribute('aria-modal')
    //this._element.removeAttribute('role')
    this._isTransitioning = false;
    EventHandler.trigger(this._element, EVENT_HIDDEN);
  }

  _setOverlay() {
    this._overlay = SelectorEngine.findOne(SELECTOR_OVERLAY, this._element);
    if (this._isAnimated) {
      this._overlay.classList.add(CLASS_NAME_FADE);
    }
  }

  /**
   * Moves focus to the next focusable element based on the DOM exploration direction
   */
  _focusNext() {
    let nextIdx = this._currItemIdx + (this._isKeyShift ? -1 : 1);
    if (nextIdx < 0) {
      nextIdx = this._menuItems.length - 1;
    } else if (nextIdx >= this._menuItems.length) {
      nextIdx = 0;
    }
    const target = this._getNextVisibleItem(nextIdx, this._isKeyShift);
    if (target.item) {
      target.item.focus();
      this._currItemIdx = target.index;
    }
  }
  /**
   * Get the next focusable element from a starting point
   * @param {int} start - the index of the array of the elements as starting point (included)
   * @param {boolean} wayTop - the array search direction (true: bottom to top, false: top to bottom)
   * @returns {Object} the item found and its index in the array
   */
  _getNextVisibleItem(start, wayTop) {
    let found = null;
    let foundIdx = null;

    let i = start;
    let incr = wayTop ? -1 : 1;
    let firstCheck = false;
    while (!found && (i != start || !firstCheck)) {
      if (i == start) {
        firstCheck = true;
      }
      if (!this._isElementHidden(this._menuItems[i])) {
        found = this._menuItems[i];
        foundIdx = i;
      }
      i = i + incr;
      if (i < 0) {
        i = this._menuItems.length - 1;
      } else if (i >= this._menuItems.length) {
        i = 0;
      }
    }

    return {
      item: found,
      index: foundIdx,
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW, (showEvent) => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return
      }

      EventHandler.one(target, EVENT_HIDDEN, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });

    const data = NavBarCollapsible.getOrCreateInstance(target);

    data.toggle(this);
  });
}

export { NavBarCollapsible as default };
//# sourceMappingURL=navbar-collapsible.js.map
