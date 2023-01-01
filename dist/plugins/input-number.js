import BaseComponent from 'bootstrap/js/src/base-component';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import InputLabel from './input-label.js';

const NAME = 'inputnumber';
const DATA_KEY = 'bs.inputnumber';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_CHANGE = `change${EVENT_KEY}`;

//const EVENT_FOCUS_DATA_API = `focus${EVENT_KEY}${DATA_API_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_MOUSEDOWN_DATA_API = `mousedown${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_ADAPTIVE = 'input-number-adaptive';
const CLASS_NAME_PERCENTAGE = 'input-number-percentage';
const CLASS_NAME_CURRENCY = 'input-number-currency';
//const CLASS_NAME_INCREMENT = 'input-number-add'
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

  // Public

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
        });
      });

      EventHandler.on(this._element, EVENT_CHANGE, () => this._checkLimit());
    }
  }

  _inputResize() {
    if (this._wrapperElement.classList.contains(CLASS_NAME_ADAPTIVE)) {
      let newWidth = null;
      //let newWidthIE = null
      if (!this._wrapperElement.classList.contains(CLASS_NAME_PERCENTAGE)) {
        newWidth = 'calc(44px + ' + this._element.value.length + 'ch)';
        //newWidthIE = 'calc(44px + (1.5 * ' + this._element.value.length + 'ch))'
      }
      if (this._wrapperElement.classList.contains(CLASS_NAME_CURRENCY)) {
        newWidth = 'calc(40px + 44px + ' + this._element.value.length + 'ch)';
        //newWidthIE = 'calc(40px + 44px + (1.5 * ' + this._element.value.length + 'ch))'
      }

      if (newWidth) {
        this._element.style.width = newWidth;
        //IE - this._element.style.width = calcIe
      }
    }
  }

  _incrDecr(isDecr) {
    const inputVal = parseFloat(this._element.value);

    if (!isNaN(inputVal)) {
      //get step
      let step = parseFloat(this._element.getAttribute('step'));
      if (!step) {
        step = 1;
      }

      this._element.value = inputVal + step * (isDecr ? -1 : 1);
      EventHandler.trigger(this._element, EVENT_CHANGE);
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

/*const inputs = SelectorEngine.find(SELECTOR_INPUT)
inputs.forEach((input) => {
  EventHandler.one(input, EVENT_FOCUS_DATA_API, (evt) => {
    evt.preventDefault()
    InputNumber.getOrCreateInstance(input)
    EventHandler.trigger(input, 'focus')
  })
})

const inputsButtons = SelectorEngine.find(SELECTOR_WRAPPER + ' ' + SELECTOR_BTN)
inputsButtons.forEach((button) => {
  EventHandler.one(button, EVENT_CLICK_DATA_API, (evt) => {
    if (button.classList.contains(CLASS_NAME_INCREMENT) || button.classList.contains(CLASS_NAME_DECREMENT)) {
      const wrapper = button.closest(SELECTOR_WRAPPER)
      if (wrapper) {
        const input = SelectorEngine.findOne(SELECTOR_INPUT, wrapper)
        if (input) {
          const inputNumber = InputNumber.getInstance(input)
          if (!inputNumber) {
            evt.preventDefault()
            InputNumber.getOrCreateInstance(input)
            EventHandler.trigger(button, 'click')
          }
        }
      }
    }
  })
})*/

const createInput = (element) => {
  if (element && element.matches(SELECTOR_INPUT) && element.parentNode.querySelector(SELECTOR_BTN)) {
    return InputNumber.getOrCreateInstance(element)
  }
  return null
};

EventHandler.on(document, EVENT_MOUSEDOWN_DATA_API, SELECTOR_INPUT + ', label', function () {
  const target = InputLabel.getInputFromLabel(this) || this;
  createInput(target);
});
EventHandler.on(document, EVENT_KEYUP_DATA_API, SELECTOR_INPUT + ', label', function () {
  const target = InputLabel.getInputFromLabel(this) || this;
  const element = createInput(target);
  if (element && element._label) {
    element._label._labelOut();
  }
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

export { InputNumber as default };
//# sourceMappingURL=input-number.js.map
