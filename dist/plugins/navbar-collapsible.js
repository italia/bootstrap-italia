import BaseComponent from './base-component.js';
import { getElementFromSelector, isVisible, reflow } from './util/index.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';
import { isScreenMobile } from './util/device.js';
import ScrollBarHelper from './util/scrollbar.js';
import FocusTrap from './util/focustrap.js';
import Backdrop from './util/backdrop.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'navbarcollapsible';
const DATA_KEY = 'bs.navbarcollapsible';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_RESIZE = `resize${EVENT_KEY}`;

const CLASS_NAME_OPEN = 'navbar-open';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_EXPANDED = 'expanded';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="navbarcollapsible"]';
const SELECTOR_BTN_CLOSE = '.close-div button';
const SELECTOR_BTN_MENU_CLOSE = '.close-menu';
const SELECTOR_BTN_BACK = '.it-back-button';
const SELECTOR_MENU_WRAPPER = '.menu-wrapper';
const SELECTOR_NAVLINK = '.nav-link';
const SELECTOR_MEGAMENUNAVLINK = '.nav-item .list-item';
const SELECTOR_HEADINGLINK = '.it-heading-link';
const SELECTOR_FOOTERLINK = '.it-footer-link';

const Default = {
  backdrop: true,
  focus: true,
};

const DefaultType = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
};

class NavBarCollapsible extends BaseComponent {
  constructor(element, config) {
    super(element, config);

    this._mainElement = SelectorEngine.findOne('main');
    this._isNavbarOutsideMain = this._mainElement && !this._mainElement.contains(this._element);
    this._parentElement = this._element.parentNode;

    this._isShown = this._element.classList.contains(CLASS_NAME_EXPANDED);

    if (!this._element.getAttribute('tabindex')) {
      this._element.setAttribute('tabindex', '-1');
    }

    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._scrollBar = new ScrollBarHelper();
    this._isTransitioning = false;
    this._isMobile = isScreenMobile();

    this._btnClose = SelectorEngine.findOne(SELECTOR_BTN_CLOSE, this._element);
    this._btnBack = SelectorEngine.findOne(SELECTOR_BTN_BACK, this._element);
    this._menuWrapper = SelectorEngine.findOne(SELECTOR_MENU_WRAPPER, this._element);

    this._menuItems = SelectorEngine.find(
      [SELECTOR_NAVLINK, SELECTOR_MEGAMENUNAVLINK, SELECTOR_HEADINGLINK, SELECTOR_FOOTERLINK, SELECTOR_BTN_MENU_CLOSE].join(','),
      this._element
    );

    this._toggleButton =
      SelectorEngine.findOne(`${SELECTOR_DATA_TOGGLE}[data-bs-target="#${this._element.id}"]`) ||
      SelectorEngine.findOne(`${SELECTOR_DATA_TOGGLE}[href="#${this._element.id}"]`);

    if (this._toggleButton) {
      if (!this._toggleButton.getAttribute('aria-expanded')) {
        this._toggleButton.setAttribute('aria-expanded', this._isShown ? 'true' : 'false');
      }
    }
    this._bindEvents();
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  toggle(relatedTarget) {
    this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
      relatedTarget,
    });

    if (showEvent.defaultPrevented) {
      return
    }

    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();

    if (this._btnBack) {
      this._btnBack.classList.add(CLASS_NAME_SHOW);
    }

    document.body.classList.add(CLASS_NAME_OPEN);

    this._backdrop.show();
    this._showElement();

    if (this._toggleButton) {
      this._toggleButton.setAttribute('aria-expanded', 'true');
    }
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return
    }

    this._isShown = false;

    this._isTransitioning = true;
    this._focustrap.deactivate();

    if (this._btnBack) {
      this._btnBack.classList.remove(CLASS_NAME_SHOW);
    }

    this._element.classList.remove(CLASS_NAME_EXPANDED);

    this._backdrop.hide();

    this._queueCallback(() => this._hideElement(), this._menuWrapper, this._isAnimated());

    if (this._toggleButton) {
      this._toggleButton.setAttribute('aria-expanded', 'false');
    }
  }

  dispose() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.off(window, EVENT_RESIZE);
      EventHandler.off(document, EVENT_KEYDOWN);
    }
    this._backdrop.dispose();

    this._focustrap.deactivate();
    super.dispose();
  }

  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop), // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated(),
      className: 'navbar-backdrop',
      rootElement: this._parentElement,
      clickCallback: () => {
        this.hide();
      },
    })
  }

  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element,
      initialFocus: () => this._btnClose || this._element.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
    })
  }

  // Private
  _bindEvents() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      EventHandler.on(window, EVENT_RESIZE, () => this._onResize());
      EventHandler.on(document, EVENT_KEYDOWN, (evt) => {
        if (this._isShown && evt.key === 'Escape') {
          this.hide();
        }
      });

      EventHandler.on(this._btnClose, EVENT_CLICK, (evt) => {
        evt.preventDefault();
        this.hide();
      });
      EventHandler.on(this._btnBack, EVENT_CLICK, (evt) => {
        evt.preventDefault();
        this.hide();
      });
      this._menuItems.forEach((item) => {
        EventHandler.on(item, EVENT_KEYDOWN, (evt) => this._isMobile && this._onMenuItemKeyDown(evt));
      });
    }
  }

  _onResize() {
    this._isMobile = isScreenMobile();
  }

  _onMenuItemKeyDown(evt) {
    if (evt.key === 'Escape') {
      this.hide();
    }
  }

  _isAnimated() {
    return true
  }

  _isElementHidden(element) {
    return element.offsetParent === null
  }

  _showElement() {
    this._element.style.display = 'block';
    if (!this._element.getAttribute('aria-label') && !this._element.getAttribute('aria-labelledby')) {
      this._element.setAttribute('aria-label', 'Menu');
    }
    this._element.setAttribute('aria-modal', true);
    this._element.setAttribute('role', 'dialog');

    if (this._mainElement && this._isNavbarOutsideMain) {
      this._mainElement.setAttribute('inert', '');
    }

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_EXPANDED);

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN);
    };

    this._queueCallback(transitionComplete, this._menuWrapper, this._isAnimated());
  }

  _hideElement() {
    this._element.style.display = 'none';
    this._element.removeAttribute('aria-modal');
    this._element.removeAttribute('role');

    document.body.classList.remove(CLASS_NAME_OPEN);

    if (this._mainElement && this._isNavbarOutsideMain) {
      this._mainElement.removeAttribute('inert');
    }

    this._scrollBar.reset();
    this._isTransitioning = false;

    EventHandler.trigger(this._element, EVENT_HIDDEN);
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW, (showEvent) => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return
      }

      EventHandler.one(target, EVENT_HIDDEN, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });

    const data = NavBarCollapsible.getOrCreateInstance(target);

    data.toggle(this);
  });
}

export { NavBarCollapsible as default };
//# sourceMappingURL=navbar-collapsible.js.map
