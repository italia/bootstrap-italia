import BaseComponent from './base-component.js';
import EventHandler from './dom/event-handler.js';

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

const SELECTOR_TOGGLE = '[data-bs-toggle="historyback"]';

class HistoryBack extends BaseComponent {
  constructor(element) {
    super(element);

    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }

  // Private
  _bindEvents() {
    EventHandler.on(this._element, EVENT_CLICK, (evt) => {
      evt.preventDefault();
      this.back();
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
    const historyBack = HistoryBack.getOrCreateInstance(this);
    historyBack.back();
  });
}

export { HistoryBack as default };
//# sourceMappingURL=history-back.js.map
