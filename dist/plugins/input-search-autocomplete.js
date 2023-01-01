import BaseComponent from 'bootstrap/js/src/base-component';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import InputLabel from './input-label.js';

//import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'inputsearchautocomplete';
const DATA_KEY = 'bs.inputsearchautocomplete';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const Default = {
  autocomplete: [],
};

const EVENT_KEYUP = `keyup${EVENT_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_MOUSEDOWN_DATA_API = `mousedown${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_SHOW = 'autocomplete-list-show';
const CLASS_NAME_AUTOCOMPLETE = 'autocomplete';

const DATA_AUTOCOMPLETE = 'data-bs-autocomplete';

const SELECTOR_SEARCH = 'input[' + DATA_AUTOCOMPLETE + '][type="search"]';

class InputSearch extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);
    this._items = [];
    this._autocompleteElement = null;

    this._label = new InputLabel(element);

    this._init();
    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  search() {
    const value = this._element.value;

    //!!! $autocomplete.empty()
    this._autocompleteElement.innerHTML = '';

    if (value) {
      this._items.forEach((item) => {
        let markText = new RegExp('(' + value + ')', 'gi');
        let optionText = item.text.replace(markText, '<mark>$1</mark>');
        let optionLabel = item.label ? '<em>' + item.label + '</em>' : '';
        let optionIcon = item.icon ? item.icon : '';
        let optionLink = item.link ? item.link : '#';

        if (optionText.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          this._autocompleteElement.classList.add(CLASS_NAME_SHOW);
          this._autocompleteElement.appendChild(this._createOption(optionLink, optionText, optionLabel, optionIcon));
        }
      });
    } else {
      this._autocompleteElement.classList.remove(CLASS_NAME_SHOW);
    }
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...(typeof config === 'object' ? config : {}),
    };
    return config
  }

  _getItems() {
    try {
      return JSON.parse(this._element.getAttribute(DATA_AUTOCOMPLETE))
    } catch (error) {
      console.error('[InputSearchAutocomplete] invalid data provided for ' + DATA_AUTOCOMPLETE + ' attribute', error);
      return []
    }
  }

  _init() {
    if (this._element.classList.contains(CLASS_NAME_AUTOCOMPLETE)) {
      this._items = this._getItems();
      this._autocompleteElement = document.createElement('ul');
      this._autocompleteElement.classList.add('autocomplete-list');
      this._element.parentNode.insertBefore(this._autocompleteElement, this._element.nextSibling);
    }
  }

  _bindEvents() {
    EventHandler.on(this._element, EVENT_KEYUP, () => this.search());
  }

  _createOption(link, text, label, icon) {
    const option = document.createElement('li');
    option.innerHTML = `<a href="${link}">
        ${icon}
        <span class="autocomplete-list-text">
          <span>${text}</span>
          ${label}
        </span>
      </a>`;

    return option
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

/*const inputs = SelectorEngine.find(SELECTOR_SEARCH)
inputs.forEach((input) => {
  EventHandler.one(input, EVENT_KEYUP_DATA_API, () => {
    const searchInput = InputSearch.getOrCreateInstance(input)
    searchInput.search()
  })
})*/

const createInput = (element) => {
  if (element && element.matches(SELECTOR_SEARCH)) {
    return InputSearch.getOrCreateInstance(element)
  }
  return null
};

EventHandler.on(document, EVENT_MOUSEDOWN_DATA_API, SELECTOR_SEARCH + ', label', function () {
  const target = InputLabel.getInputFromLabel(this) || this;
  createInput(target);
});
EventHandler.on(document, EVENT_KEYUP_DATA_API, SELECTOR_SEARCH + ', label', function () {
  const target = InputLabel.getInputFromLabel(this) || this;
  const element = createInput(target);
  if (element && element._label) {
    element._label._labelOut();
  }
});

export { InputSearch as default };
//# sourceMappingURL=input-search-autocomplete.js.map
