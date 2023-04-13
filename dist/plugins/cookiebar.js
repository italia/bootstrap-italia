import BaseComponent from 'bootstrap/js/src/base-component.js';
import { isDisabled, getElementFromSelector, reflow } from 'bootstrap/js/src/util/index';
import EventHandler from 'bootstrap/js/src/dom/event-handler';

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'cookiebar';
const VERSION = '5.0.0';
const DATA_KEY = 'bs.cookiebar';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
//const JQUERY_NO_CONFLICT = $.fn[NAME]
const COOKIE_NAME = 'cookies_consent';
const COOKIE_VALUE = 'true';
const COOKIE_EXPIRE = 30;

const SELECTOR_COOKIE_BAR = '.cookiebar';
const SELECTOR_ACCEPT = '[data-bs-accept="cookiebar"]';

const EVENT_CLOSE = `close${EVENT_KEY}`;
const EVENT_CLOSED = `closed${EVENT_KEY}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_COOKIE_BAR = 'cookiebar';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_FADE = 'fade';

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Cookiebar extends BaseComponent {
  constructor(element) {
    super(element);

    this._isShown = this._element.classList.contains(CLASS_NAME_SHOW);
    this._isTransitioning = false;
  }

  // Getters
  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  // Public

  show() {
    if (this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = true;

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    this._showElement();
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = false;
    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._element.classList.remove(CLASS_NAME_SHOW);

    this._queueCallback(() => this._hideElement(), this._element, isAnimated);
  }

  accept(element) {
    element = element || this._element;

    const rootElement = this._getRootElement(element);
    const customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent.defaultPrevented) {
      return
    }

    this._setCookieEU();

    this.hide();
    //this._removeElement(rootElement)
    //this.dispose()
  }

  /*dispose() {
    $.removeData(this._element, DATA_KEY)
    this._element = null
  }*/

  static clearCookie() {
    document.cookie = COOKIE_NAME + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  // Private

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE)
  }

  _showElement() {
    const isAnimated = this._isAnimated();

    this._element.removeAttribute('aria-hidden');
    this._element.setAttribute('aria-live', 'polite');

    if (isAnimated) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW);

    const transitionComplete = () => {
      this._isTransitioning = false;
    };

    this._queueCallback(transitionComplete, this._element, isAnimated);
  }

  _hideElement() {
    this._element.style.display = 'none';
    this._element.setAttribute('aria-hidden', true);
    this._element.removeAttribute('aria-live');
    this._isTransitioning = false;
  }

  _setCookieEU() {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + COOKIE_EXPIRE);
    var c_value = escape(COOKIE_VALUE) + ('; expires=' + exdate.toUTCString());
    document.cookie = COOKIE_NAME + '=' + c_value + '; path=/; SameSite=Strict';
  }

  _getRootElement(element) {
    const selector = getElementFromSelector(element);
    let parent = null;

    if (selector) {
      parent = selector;
    }

    if (!parent) {
      parent = element.closest(`.${CLASS_NAME_COOKIE_BAR}`); //$(element).closest(`.${CLASS_NAME_COOKIE_BAR}`)[0]
    }

    return parent
  }

  _triggerCloseEvent(element) {
    /*const closeEvent = $.Event(EVENT_CLOSE)

    $(element).trigger(closeEvent)*/

    return EventHandler.trigger(element, EVENT_CLOSE)
  }

  _removeElement(element) {
    //$(element).removeClass(CLASS_NAME_SHOW).attr('aria-hidden', 'true').attr('aria-live', 'off')
    element.classList.remove(CLASS_NAME_SHOW);
    element.setAttribute('aria-hidden', 'true');
    element.setAttribute('aria-live', 'off');

    //this._destroyElement(element)
    EventHandler.trigger(element, EVENT_CLOSED);

    this.dispose();
  }

  // Static

  /*static _jQueryInterface(config) {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY)

      if (!data) {
        data = new Cookiebar(this)
        $element.data(DATA_KEY, data)
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }
        data[config](this)
      }
    })
  }*/

  static _handleAccept(cookiebarInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      cookiebarInstance.close(this);
    }
  }

  static _handleConsent(cookiebarInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      cookiebarInstance.close(this);
    }
  }

  static _getCookieEU() {
    var i,
      x,
      y,
      ARRcookies = document.cookie.split(';');
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substring(0, ARRcookies[i].indexOf('='));
      y = ARRcookies[i].substring(ARRcookies[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, '');
      if (x == COOKIE_NAME) {
        return unescape(y)
      }
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

//$(document).on(EVENT_CLICK_DATA_API, SELECTOR_ACCEPT, Cookiebar._handleAccept(new Cookiebar()))

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_ACCEPT, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return
  }

  const target = getElementFromSelector(this) || this.closest(`.${NAME}`);
  const instance = Cookiebar.getOrCreateInstance(target);
  instance.accept();
  //Cookiebar._handleAccept(new Cookiebar())
});

EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  const consent = Cookiebar._getCookieEU();
  if (!consent) {
    const cookiebars = document.querySelectorAll(SELECTOR_COOKIE_BAR);
    cookiebars.forEach((bar) => {
      const instance = Cookiebar.getOrCreateInstance(bar);
      instance.show();
    });
  }
});

export { Cookiebar as default };
//# sourceMappingURL=cookiebar.js.map
