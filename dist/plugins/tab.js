import BSTab from 'bootstrap/js/src/tab';
import { isDisabled, defineJQueryPlugin, getNextActiveElement } from 'bootstrap/js/src/util/index.js';
import EventHandler from 'bootstrap/js/src/dom/event-handler.js';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine.js';

const DATA_KEY = 'bs.tab';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`;

const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const ENTER_KEY = 'Enter';
const SPACE_BAR_KEY = ' ';

const CLASS_NAME_ACTIVE = 'active';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

class Tab extends BSTab {
  constructor(element) {
    super(element);
  }

  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, ENTER_KEY, SPACE_BAR_KEY].includes(event.key)) {
      return
    }

    event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
    event.preventDefault();

    if (event.key === ENTER_KEY || event.key === SPACE_BAR_KEY) {
      Tab.getOrCreateInstance(event.target).show();
      return
    }

    const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
    const nextActiveElement = getNextActiveElement(
      this._getChildren().filter((element) => !isDisabled(element)),
      event.target,
      isNext,
      true
    );
    if (nextActiveElement) {
      nextActiveElement.focus({ preventScroll: true });
    }
  }
}

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return
  }

  const t = Tab.getOrCreateInstance(this);
  t.dispose();
  Tab.getOrCreateInstance(this).show();
});

/**
 * Initialize on focus
 */
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    const t = Tab.getOrCreateInstance(element);
    t.dispose();
    Tab.getOrCreateInstance(element);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Tab);

export { Tab as default };
//# sourceMappingURL=tab.js.map
