import BaseComponent from 'bootstrap/js/src/base-component.js';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import EventHandler from 'bootstrap/js/src/dom/event-handler';

const NAME = 'list';
const DATA_KEY = 'bs.list';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_ACTIVE = 'active';

const SELECTOR_LIST = '[data-bs-list-checkbox]'; //'.it-list'
const SELECTOR_ITEM_CHECKBOX = 'input[type=checkbox]';

class List extends BaseComponent {
  constructor(element) {
    super(element);

    this._init();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  toggleCheckbox(item) {
    const input = SelectorEngine.findOne('input', item);
    if (input) {
      if (input.checked) {
        input.checked = false;
        item.classList.remove(CLASS_NAME_ACTIVE);
      } else {
        input.checked = true;
        item.classList.add(CLASS_NAME_ACTIVE);
      }
    }
  }

  // Private
  _init() {
    this._initCheckbox();
  }
  _initCheckbox() {
    SelectorEngine.find(SELECTOR_ITEM_CHECKBOX, this._element).forEach((item) => {
      EventHandler.on(item.closest('a'), EVENT_CLICK, (evt) => {
        evt.preventDefault();
        this.toggleCheckbox(item.closest('a'));
      });
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

SelectorEngine.find(SELECTOR_LIST).forEach((list) => {
  SelectorEngine.find(SELECTOR_ITEM_CHECKBOX, list).forEach((checkbox) => {
    EventHandler.one(checkbox.closest('a'), EVENT_CLICK_DATA_API, (evt) => {
      if (!List.getInstance(list)) {
        evt.preventDefault();
        const listObj = List.getOrCreateInstance(list);
        listObj.toggleCheckbox(evt.currentTarget);
      }
    });
  });
});

export { List as default };
//# sourceMappingURL=list.js.map
