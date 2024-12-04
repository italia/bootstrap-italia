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


const NAME = 'input';
const DATA_KEY = 'bs.input';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_CHANGE = `change${EVENT_KEY}`;

class Input extends BaseComponent {
  constructor(element) {
    super(element);

    this._label = new InputLabel(element);
    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _bindEvents() {
    if (this._element.getAttribute('type') === 'file') {
      EventHandler.on(this._element, EVENT_CHANGE, () => {
        this._handleFileDescription();
      });
    }
  }

  _handleFileDescription() {
    const fileNames = [];
    let labelPrefix = '';

    Array.from(this._element.files).forEach((file) => {
      const fileSize = Math.round(parseInt(file.size, 10) / 1024);
      fileNames.push(file.name + ' (' + fileSize + 'kb)');
    });

    if (this._element.files.length > 1) {
      labelPrefix = this._element.files.length + ' file da caricare: ';
    }

    const label = SelectorEngine.findOne('label[for="' + this._element.getAttribute('id') + '"] label.form-file-name', this._element);
    if (label) {
      label.innerText = labelPrefix + fileNames.join('; ');
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
const excludes = [
  'select',
  'input[data-bs-input][type="password"]',
  'input.input-password[data-bs-input]',
  'input[data-bs-autocomplete][type="search"]',
  'input[type="time"]',
  'input[type="radio"]',
  'input[type="checkbox"]',
];

const createInput = (element) => {
  const toExclude = !!excludes.find((selector) => element.matches(selector));
  const isInputNumber = !!(element.getAttribute('type') === 'number' && element.parentNode.querySelector('button[class^="input-number-"]')); //check if it's a InputNumber component
  if (!toExclude && !isInputNumber) {
    return Input.getOrCreateInstance(element)
  }
  return null
};

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    var frmel = document.querySelectorAll('input, textarea, label');
    frmel.forEach(function (item) {
      const target = InputLabel.getInputFromLabel(item) || item;
      createInput(target);
    });
  });
}

export { Input as default };
//# sourceMappingURL=input.js.map
