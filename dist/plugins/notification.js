import BaseComponent from './base-component.js';
import { getElementFromSelector, isVisible, reflow } from './util/index.js';
import Manipulator from './dom/manipulator.js';
import EventHandler from './dom/event-handler.js';
import { enableDismissTrigger } from './util/component-functions.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'notification';
const DATA_KEY = 'bs.notification';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;

const Default = {
  timeout: 0,
};

const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';

const ATTRIBUTE_TIMEOUT = 'data-bs-timeout';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="notification"]';

/**
 * toggle per attivazione
 * attrib per timeout (assegnabili al toggler o al componente, vince sempre il toggler)
 * gestione chiusura (dismissable)
 * la classe si riferisce all'elemento notification, con options, metodi open(timeout) e close (che deve gestire il timeout)
 **/

class Notification extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);

    this._isShown = this._element.classList.contains(CLASS_NAME_SHOW);
    this._isTransitioning = false;
    this._toId = null;
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  show(timeout, relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return
    }

    const timeoutVal = timeout || this._getElementTimeout(relatedTarget);

    this._isShown = true;

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    this._showElement(timeoutVal);
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

  toggle(relatedTarget) {
    this._isShown ? this.hide() : this.show(null, relatedTarget);
  }

  //Private

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE)
  }

  _showElement(timeout) {
    const isAnimated = this._isAnimated();

    this._element.style.display = 'block';
    this._element.removeAttribute('aria-hidden');
    //this._element.setAttribute('aria-modal', true)
    //this._element.setAttribute('role', 'dialog')

    if (isAnimated) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW);

    const transitionComplete = () => {
      this._isTransitioning = false;
      if (timeout) {
        this._setTimeout(timeout, () => this.hide());
      }
    };

    this._queueCallback(transitionComplete, this._element, isAnimated);
  }

  _hideElement() {
    this._element.style.display = 'none';
    this._element.setAttribute('aria-hidden', true);
    this._isTransitioning = false;
  }

  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    };
    return config
  }

  _getElementTimeout(relatedTarget) {
    const relTimeout = relatedTarget ? parseInt(relatedTarget.getAttribute(ATTRIBUTE_TIMEOUT)) : null;
    return relTimeout > 0 ? relTimeout : this._config.timeout
  }

  _setTimeout(duration, callback) {
    this._clearTimeout();
    setTimeout(callback, duration);
  }
  _clearTimeout() {
    if (this._toId) {
      clearTimeout(this._toId);
      this._toId = null;
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

    const data = Notification.getOrCreateInstance(target);

    data.toggle(this);
  });

  enableDismissTrigger(Notification);
}

export { Notification as default };
//# sourceMappingURL=notification.js.map
