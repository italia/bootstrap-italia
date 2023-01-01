import BaseComponent from 'bootstrap/js/src/base-component.js';
import { getElementFromSelector, reflow } from 'bootstrap/js/src/util';
import EventHandler from 'bootstrap/js/src/dom/event-handler';

//import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

const NAME = 'dimmer';
const DATA_KEY = 'bs.dimmer';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
//const EVENT_CLICK = `click${EVENT_KEY}`

const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dimmer"]';
const SELECTOR_DATA_ARIAHIDDEN = '[aria-hidden=true]';

class Dimmer extends BaseComponent {
  constructor(element) {
    super(element);

    this._isShown = !element.matches(SELECTOR_DATA_ARIAHIDDEN);
    this._isTransitioning = false;
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  show() {
    if (this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = true;

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    this._showElement();
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = false;
    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._element.classList.remove(CLASS_NAME_SHOW);

    this._queueCallback(() => this._hideElement(), this._element, isAnimated);
  }

  //Private

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE)
  }

  _showElement() {
    const isAnimated = this._isAnimated();

    //this._element.style.display = 'flex'
    this._element.removeAttribute('aria-hidden');
    //this._element.setAttribute('aria-modal', true)
    //this._element.setAttribute('role', 'dialog')

    if (isAnimated) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW);

    const transitionComplete = () => {
      this._isTransitioning = false;
    };

    this._queueCallback(transitionComplete, this._element, isAnimated);
  }

  _hideElement() {
    //this._element.style.display = 'none'
    this._element.setAttribute('aria-hidden', true);
    //this._element.removeAttribute('aria-modal')
    //this._element.removeAttribute('role')
    this._isTransitioning = false;
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

/*SelectorEngine.find(SELECTOR_DATA_TOGGLE).forEach((toggle) => {
  const dimmerElement = getElementFromSelector(toggle)
  const dimmer = Dimmer.getOrCreateInstance(dimmerElement)

  EventHandler.on(toggle, EVENT_CLICK, () => {
    toggle.checked ? dimmer.show() : dimmer.hide()
  })

  if (toggle.checked) {
    dimmer.show()
  }
})*/

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function () {
  const dimmerElement = getElementFromSelector(this);
  const dimmer = Dimmer.getOrCreateInstance(dimmerElement);

  this.checked ? dimmer.show() : dimmer.hide();
});

export { Dimmer as default };
//# sourceMappingURL=dimmer.js.map
