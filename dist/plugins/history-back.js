import BaseComponent from 'bootstrap/js/src/base-component.js';
import EventHandler from 'bootstrap/js/src/dom/event-handler';

//import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

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
    window.history.back();
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

/*const toggles = SelectorEngine.find(SELECTOR_TOGGLE)
toggles.forEach((toggle) => {
  EventHandler.one(toggle, EVENT_CLICK_DATA_API, (evt) => {
    evt.preventDefault()
    const historyBack = HistoryBack.getOrCreateInstance(toggle)
    historyBack.back()
  })
})*/

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_TOGGLE, function (evt) {
  evt.preventDefault();
  const historyBack = HistoryBack.getOrCreateInstance(this);
  historyBack.back();
});

export { HistoryBack as default };
//# sourceMappingURL=history-back.js.map
