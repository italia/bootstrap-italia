import BaseComponent from './base-component.js';
import { getSelectorFromElement } from './util/index.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';
import Manipulator from './dom/manipulator.js';
import { isScreenMobile } from './util/device.js';
import onDocumentScroll from './util/on-document-scroll.js';

const NAME = 'sticky';
const DATA_KEY = 'bs.sticky';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_RESIZE = `resize${EVENT_KEY}`;
const EVENT_STICKY_ON = `on${EVENT_KEY}`;
const EVENT_STICKY_OFF = `off${EVENT_KEY}`;

const CLASS_NAME_WRAPPER = 'bs-it-sticky-wrapper';
const CLASS_NAME_STICKY = 'bs-is-sticky';
const CLASS_NAME_FIXED = 'bs-is-fixed';

const DATA_TARGET_MOBILE = 'data-bs-target-mobile';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="sticky"]';

const Default = {
  positionType: 'sticky', //fixed
  stickyClassName: '',
  stackable: false,
  paddingTop: 0,
};

class Sticky extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);

    this._isSticky = false;
    this._wrapper = null;

    this._stickyTarget = SelectorEngine.findOne(getSelectorFromElement(this._element), this._element) || this._element;
    this._stickyTargetMobile = SelectorEngine.findOne(this._element.getAttribute(DATA_TARGET_MOBILE), this._element) || this._stickyTarget; //needed?
    this._stickyLimit = 0;
    this._stickyLimitMobile = 0;
    this._setLimit();

    this._scrollCb = null;

    this._isMobile = isScreenMobile();

    this._prevTop = 0;

    this._onScroll();
    this._bindEvents();
  }

  dispose() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.off(window, EVENT_RESIZE);
      this._scrollCb.dispose();

      super.dispose();
    }
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    };
    return config
  }

  _bindEvents() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.on(window, EVENT_RESIZE, () => this._onResize());
      this._scrollCb = onDocumentScroll(() => this._onScroll());
    }
  }

  _onResize() {
    this._isMobile = isScreenMobile();
    this._setLimit();
  }

  _onScroll() {
    this._checkSticky();
  }

  _setLimit() {
    this._stickyLimit = this._cumulativeOffset(this._stickyTarget).top;
    this._stickyLimitMobile = this._cumulativeOffset(this._stickyTargetMobile).top;
  }

  _getLimit() {
    let newLimit = this._isMobile ? this._stickyLimitMobile : this._stickyLimit;
    if (this._config.stackable) {
      this._getStickySimblings().forEach((sticky, idx) => {
        const data = sticky.getBoundingClientRect();
        newLimit -= data.height + (idx === 0 ? parseFloat(sticky.style.top) : 0);
      });
    }
    return newLimit > 0 ? newLimit : 0
  }

  /**
   * get the absolute position of an element
   * @param {*} element - the target element
   * @returns {Object} - absolute position top and left of the element
   */
  _cumulativeOffset(element) {
    let top = 0;
    let left = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element)

    return {
      top: top,
      left: left,
    }
  }

  _isTypeSticky() {
    return this._config.positionType === 'sticky'
  }

  _checkSticky() {
    if (!this._isSticky) {
      //the target position can change dinamically
      this._setLimit();
    }
    const limit = this._getLimit();
    if (typeof window !== 'undefined' && window.pageYOffset > limit) {
      this._setSticky();
    } else {
      this._unsetSticky();
    }
  }
  _setSticky() {
    if (!this._isSticky) {
      this._isSticky = true;
      let cssClass = CLASS_NAME_STICKY;
      if (!this._isTypeSticky()) {
        cssClass = CLASS_NAME_FIXED;
        this._wrapper = this._createWrapper();
      }
      this._element.classList.add(cssClass);
      if (this._config.stickyClassName) {
        this._element.classList.add(this._config.stickyClassName);
      }
      this._prevTop = this._element.style.top;
      this._element.style.top = this._getPositionTop() + 'px';
      EventHandler.trigger(this._element, EVENT_STICKY_ON);
    }
  }
  _unsetSticky() {
    if (this._isSticky) {
      let cssClass = CLASS_NAME_STICKY;
      if (!this._isTypeSticky()) {
        cssClass = CLASS_NAME_FIXED;
        this._destroyWrapper();
      }
      this._element.classList.remove(cssClass);
      if (this._config.stickyClassName) {
        this._element.classList.remove(this._config.stickyClassName);
      }
      this._element.style.top = this._prevTop;
      this._isSticky = false;
      EventHandler.trigger(this._element, EVENT_STICKY_OFF);
    }
  }

  _createWrapper() {
    if (typeof document === 'undefined') {
      return
    }
    const wrapper = document.createElement('div');
    wrapper.classList.add(CLASS_NAME_WRAPPER);
    wrapper.style.width = '100%'; //this._element.getBoundingClientRect().width + 'px'
    wrapper.style.height = this._element.getBoundingClientRect().height + 'px';
    wrapper.style.overflow = 'hidden';
    // insert wrapper before el in the DOM tree
    this._element.parentNode.insertBefore(wrapper, this._element);
    // move el into wrapper
    wrapper.appendChild(this._element);
    return wrapper
  }
  _destroyWrapper() {
    if (this._wrapper) {
      this._wrapper.parentNode.insertBefore(this._element, this._wrapper);
      this._wrapper.remove();
    }
  }

  _getStickySimblings() {
    const stickies = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
    return stickies.filter((sticky) => {
      const instance = Sticky.getInstance(sticky);
      if (instance && instance._isSticky && sticky !== this._element) {
        return true
      }
      return false
    })
  }

  /**
   * returns the top position of the element considering the config and the other sticky elements
   */
  _getPositionTop() {
    let newTop = 0;
    if (this._config.stackable) {
      this._getStickySimblings().forEach((sticky, idx) => {
        const data = sticky.getBoundingClientRect();
        newTop += data.height + (idx === 0 ? parseFloat(sticky.style.top) : 0);
      });
      return newTop
    } else {
      return newTop + this._config.paddingTop
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  onDocumentScroll(() => {
    const stickies = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
    stickies.map((sticky) => {
      Sticky.getOrCreateInstance(sticky);
    });
  });
}

export { Sticky as default };
//# sourceMappingURL=sticky.js.map
