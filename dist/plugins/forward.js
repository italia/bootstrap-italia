import BaseComponent from 'bootstrap/js/src/base-component.js';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import Manipulator from 'bootstrap/js/src/dom/manipulator';
import { getElementFromSelector } from 'bootstrap/js/src/util/index';
import { documentScrollTo } from './util/tween.js';

const NAME = 'historyback';
const DATA_KEY = 'bs.historyback';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const SELECTOR_TOGGLE = '[data-bs-toggle="forward"]';

const Default = {
  duration: 800,
  easing: 'easeInOutSine',
};

class Forward extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);

    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  goToTarget() {
    const target = getElementFromSelector(this._element);
    if (target) {
      documentScrollTo(target.offsetTop, {
        duration: this._config.duration,
        easing: this._config.easing,
      });
    }
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    };
    return config
  }

  _bindEvents() {
    EventHandler.on(this._element, EVENT_CLICK, (evt) => {
      evt.preventDefault();
      this.goToTarget();
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
    const forward = Forward.getOrCreateInstance(toggle)
    forward.goToTarget()
  })
})*/

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_TOGGLE, function (evt) {
  evt.preventDefault();
  const forward = Forward.getOrCreateInstance(this);
  forward.goToTarget();
});

export { Forward as default };
//# sourceMappingURL=forward.js.map
