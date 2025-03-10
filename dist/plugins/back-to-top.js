import BaseComponent from './base-component.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';
import Manipulator from './dom/manipulator.js';
import onDocumentScroll from './util/on-document-scroll.js';
import { documentScrollTo } from './util/tween.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'backtotop';
const DATA_KEY = 'bs.backtotop';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_CLICK = `click${EVENT_KEY}`;

const CLASS_NAME_SHOW = 'back-to-top-show';

const SELECTOR_TOGGLE = '[data-bs-toggle="backtotop"]';

const Default = {
  positionTop: 0,
  scrollLimit: 100,
  duration: 800,
  easing: 'easeInOutSine',
};

class BackToTop extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);
    this._scrollCb = null;
    this._isAnim = false;
    this._prevScrollBehavior = '';

    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  show() {
    if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
      this._element.classList.add(CLASS_NAME_SHOW);
    }
  }

  hide() {
    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
  }

  toggleShow() {
    if (typeof document !== 'undefined' && document.scrollingElement.scrollTop > this._config.scrollLimit) {
      this.show();
    } else {
      this.hide();
    }
  }

  scrollToTop() {
    if (!this._isAnim) {
      this._isAnim = true;
      documentScrollTo(this._config.positionTop, {
        duration: this._config.duration,
        easing: this._config.easing,
        complete: () => {
          this._isAnim = false;
        },
      });
    }
  }

  dispose() {
    if (this._scrollCb) {
      this._scrollCb.dispose();
    }

    super.dispose();
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
    this._scrollCb = onDocumentScroll(() => this.toggleShow());

    EventHandler.on(this._element, EVENT_CLICK, (evt) => {
      evt.preventDefault();
      this.scrollToTop();
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

onDocumentScroll(() => {
  const toggles = SelectorEngine.find(SELECTOR_TOGGLE);
  toggles.map((toggle) => {
    BackToTop.getOrCreateInstance(toggle);
  });
});

export { BackToTop as default };
//# sourceMappingURL=back-to-top.js.map
