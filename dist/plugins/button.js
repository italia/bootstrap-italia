import EventHandler from './dom/event-handler.js';
import BaseComponent from './base-component.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * This a fork of Bootstrap: Initial license and original file name below
 * Bootstrap (v5.2.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME = 'button';
const DATA_KEY = 'bs.button';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const CLASS_NAME_ACTIVE = 'active';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

/**
 * Class definition
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
  }
}

/**
 * Data API implementation
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, (event) => {
    event.preventDefault();

    const buttonEl = event.target.closest(SELECTOR_DATA_TOGGLE);
    const button = Button.getOrCreateInstance(buttonEl);

    button.toggle();
  });
}

export { Button as default };
//# sourceMappingURL=button.js.map
