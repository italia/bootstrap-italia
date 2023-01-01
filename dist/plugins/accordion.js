import BaseComponent from 'bootstrap/js/src/base-component.js';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import { focusSimbling } from './util/dom.js';

const NAME = 'accordion';
const DATA_KEY = 'bs.accordion';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;

const SELECTOR_HEADBTN_WRAPPER = '.accordion';
const SELECTOR_HEADBTN = '.accordion-item > .accordion-header [data-bs-toggle="collapse"]';

class Accordion extends BaseComponent {
  constructor(element) {
    super(element);

    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  handleKeyDown(keyName, target, evt) {
    const eventKeyCallback = {
      ArrowDown: (target) => this._focusNext(target),
      ArrowUp: (target) => this._focusPrev(target),
      Home: (target) => this._focusFirst(target),
      End: (target) => this._focusLast(target),
    };
    if (typeof eventKeyCallback[keyName] === 'function') {
      if (evt) {
        evt.preventDefault();
      }
      eventKeyCallback[keyName](target);
    }
  }

  // Private
  _bindEvents() {
    //fix collapse accessibility (arrow keys, home key, end key functionality)

    SelectorEngine.find(SELECTOR_HEADBTN, this._element).forEach((accHead) => {
      EventHandler.on(accHead, EVENT_KEYDOWN, (evt) => {
        this.handleKeyDown(evt.key, evt.currentTarget, evt);
      });
    });
  }

  _getHeadButtons() {
    return SelectorEngine.find(':scope > ' + SELECTOR_HEADBTN, this._element)
  }

  _focusNext(target) {
    focusSimbling(target, this._getHeadButtons(), { loop: true });
  }

  _focusPrev(target) {
    focusSimbling(target, this._getHeadButtons(), { isDirectionTop: true, loop: true });
  }

  _focusFirst(target) {
    focusSimbling(target, this._getHeadButtons(), { isDirectionTop: true, isLimit: true });
  }

  _focusLast(target) {
    focusSimbling(target, this._getHeadButtons(), { isLimit: true });
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
/*const accordions = SelectorEngine.find(SELECTOR_HEADBTN_WRAPPER)
accordions.forEach((acc) => {
  Accordion.getOrCreateInstance(acc)
})*/

/*const accordionToggles = SelectorEngine.find(SELECTOR_HEADBTN)
accordionToggles.forEach((toggle) => {
  EventHandler.one(toggle, EVENT_KEYDOWN_DATA_API, (evt) => {
    const parent = toggle.closest(SELECTOR_HEADBTN_WRAPPER)
    if (parent) {
      const accordion = Accordion.getOrCreateInstance(parent)
      accordion.handleKeyDown(evt.key, toggle, evt)
    }
  })
})*/

EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_HEADBTN, function (evt) {
  const parent = this.closest(SELECTOR_HEADBTN_WRAPPER);
  if (parent) {
    const accordion = Accordion.getOrCreateInstance(parent);
    accordion.handleKeyDown(evt.key, this, evt);
  }
});

export { Accordion as default };
//# sourceMappingURL=accordion.js.map
