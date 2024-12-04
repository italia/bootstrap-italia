import BaseComponent from './base-component.js';
import EventHandler from './dom/event-handler.js';
import Manipulator from './dom/manipulator.js';
import { getElementFromSelector } from './util/index.js';
import { documentScrollTo } from './util/tween.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'historyback';
const DATA_KEY = 'bs.historyback';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const SELECTOR_TOGGLE = '[data-bs-toggle="forward"]';

const Default = {
  duration: 800,
  easing: 'easeInOutSine',
};

class Forward extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);

    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  goToTarget() {
    const target = getElementFromSelector(this._element);
    if (target) {
      documentScrollTo(target.offsetTop, {
        duration: this._config.duration,
        easing: this._config.easing,
      });
    }
  }

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
    EventHandler.on(this._element, EVENT_CLICK, (evt) => {
      evt.preventDefault();
      this.goToTarget();
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_TOGGLE, function (evt) {
    evt.preventDefault();
    const forward = Forward.getOrCreateInstance(this);
    forward.goToTarget();
  });
}

export { Forward as default };
//# sourceMappingURL=forward.js.map
