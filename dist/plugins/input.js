import BaseComponent from 'bootstrap/js/src/base-component.js';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import InputLabel from './input-label.js';

const NAME = 'input';
const DATA_KEY = 'bs.input';
const EVENT_KEY = `.${DATA_KEY}`;
//const DATA_API_KEY = '.data-api'

//const SELECTOR_INPUT = 'input[data-bs-input]'

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
  'input[data-bs-input][type="number"]',
  'input[data-bs-input][type="password"]',
  'input[data-bs-autocomplete][type="search"]',
  'input[type="time"]',
];

const inputs = SelectorEngine.find('input, textarea').filter((input) => {
  let result = true;
  excludes.forEach((selector) => {
    if (input.matches(selector)) {
      result = false;
    }
  });
  return result
});
inputs.forEach((input) => {
  Input.getOrCreateInstance(input);
});

export { Input as default };
//# sourceMappingURL=input.js.map
