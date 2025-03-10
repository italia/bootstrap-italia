import BaseComponent from './base-component.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';
import InputLabel from './input-label.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'inputnumber';
const DATA_KEY = 'bs.inputnumber';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_CHANGE = `change${EVENT_KEY}`;
const EVENT_INPUT = `input`;

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_ADAPTIVE = 'input-number-adaptive';
const CLASS_NAME_DECREMENT = 'input-number-sub';

const SELECTOR_WRAPPER = '.input-number';
const SELECTOR_INPUT = 'input[data-bs-input][type="number"]';
const SELECTOR_BTN = 'button[class^="input-number-"]';

class InputNumber extends BaseComponent {
  constructor(element) {
    super(element);
    this._wrapperElement = this._element.closest(SELECTOR_WRAPPER);
    this._label = new InputLabel(element);
    this._init();
    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Private
  _init() {
    if (this._wrapperElement) {
      this._inputResize();
    }
  }

  _bindEvents() {
    if (this._wrapperElement) {
      SelectorEngine.find(SELECTOR_BTN, this._wrapperElement).forEach((btn) => {
        EventHandler.on(btn, EVENT_CLICK, (evt) => {
          evt.preventDefault();
          this._incrDecr(btn.classList.contains(CLASS_NAME_DECREMENT));
          this._label._labelOut();
        });
      });

      EventHandler.on(this._element, EVENT_CHANGE, () => this._checkLimit());
    }
  }

  _inputResize() {
    if (this._wrapperElement.classList.contains(CLASS_NAME_ADAPTIVE)) {
      let newWidth = null;
      newWidth = 'calc(70px + ' + this._element.value.length + 'ch)';

      if (newWidth) {
        this._element.style.width = newWidth;
      }
    }
  }

  _incrDecr(isDecr) {
    let inputVal = 0;
    if (this._element.disabled || this._element.readonly) {
      return
    }
    if (this._element.value !== '') inputVal = parseFloat(this._element.value);

    if (!isNaN(inputVal)) {
      //get step
      let step = parseFloat(this._element.getAttribute('step'));
      if (!step) {
        step = 1;
      }

      this._element.value = inputVal + step * (isDecr ? -1 : 1);
      EventHandler.trigger(this._element, EVENT_CHANGE);
      EventHandler.trigger(this._element, EVENT_INPUT);
    }
  }

  _checkLimit() {
    const inputVal = parseFloat(this._element.value);

    if (!isNaN(inputVal)) {
      let val = inputVal;
      const max = parseFloat(this._element.getAttribute('max'));
      const min = parseFloat(this._element.getAttribute('min'));

      if (min && inputVal < min) {
        val = min;
      }
      //limit max
      if (max && inputVal > max) {
        val = max;
      }

      this._element.value = val;
    }

    this._inputResize();
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const createInput = (element) => {
  if (element && element.matches(SELECTOR_INPUT) && element.parentNode.querySelector(SELECTOR_BTN)) {
    return InputNumber.getOrCreateInstance(element)
  }
  return null
};

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    let frmel = document.querySelectorAll(SELECTOR_INPUT + ', label');
    frmel.forEach(function (item) {
      const target = InputLabel.getInputFromLabel(item) || item;
      createInput(target);
    });
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_BTN, function () {
    const wrapper = this.closest(SELECTOR_WRAPPER);
    if (wrapper) {
      const input = SelectorEngine.findOne(SELECTOR_INPUT, wrapper);
      if (input) {
        InputNumber.getOrCreateInstance(input);
      }
    }
  });
}

export { InputNumber as default };
//# sourceMappingURL=input-number.js.map
