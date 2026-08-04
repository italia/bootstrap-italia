import { getElementFromSelector, isVisible, reflow, isRTL } from './util/index.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';
import ScrollBarHelper from './util/scrollbar.js';
import BaseComponent from './base-component.js';
import Backdrop from './util/backdrop.js';
import FocusTrap from './util/focustrap.js';
import { enableDismissTrigger } from './util/component-functions.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * This a fork of Bootstrap: Initial license and original file name below
 * Bootstrap (v5.2.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const NAME = 'modal';
const DATA_KEY = 'bs.modal';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';
const ESCAPE_KEY = 'Escape';

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_RESIZE = `resize${EVENT_KEY}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_STATIC = 'modal-static';

const OPEN_SELECTOR = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';

const Default = {
  backdrop: true,
  focus: true,
  keyboard: true,
};

const DefaultType = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
  keyboard: 'boolean',
};

// Elements outside the modal must be isolated from assistive technology (e.g. VoiceOver's
// virtual cursor) while the modal is open, since the focus trap alone doesn't stop that kind
// of navigation. `inert` is reference-counted because two modal instances can end up inerting
// the same background elements at once (see the data-api handler swapping an open modal for
// another one), so the first one to close must not remove `inert` while the second still needs it.
const inertCounts = new Map();
const setInert = (el) => {
  const count = inertCounts.get(el) || 0;
  if (count === 0) {
    el.setAttribute('inert', '');
  }
  inertCounts.set(el, count + 1);
};
const unsetInert = (el) => {
  const count = inertCounts.get(el) || 0;
  if (count <= 1) {
    inertCounts.delete(el);
    el.removeAttribute('inert');
  } else {
    inertCounts.set(el, count - 1);
  }
};

// `ScrollBarHelper` sets `overflow: hidden` on `document.body` to lock the background while a
// modal is open, but per spec an `overflow: hidden` box is only blocked from *user-driven*
// scrolling (wheel/trackpad/keyboard); it remains programmatically scrollable. VoiceOver on
// macOS Safari moves its virtual cursor with a "scroll the a11y focus target into view" step
// that is exactly such a programmatic scroll, and WebKit acts on it by scrolling the window even
// though the modal itself is visually isolated in a `position: fixed` dialog -- Chromium doesn't.
// The result is the background page sliding around behind the modal, and possibly ending up at a
// different scroll position on close (#1705). Taking `document.body` out of the scrollable flow
// entirely (`position: fixed`) removes any scrollable overflow for WebKit's accessibility code to
// act on, which the plain `overflow: hidden` above cannot do.
//
// This is scoped to modal.js only (offcanvas/navbar-collapsible keep using `ScrollBarHelper`
// as-is) and is reference-counted like `inert` above, for the same reason: the data-api handler
// below can swap an already-open modal for another one, and the first modal's deferred
// `_hideModal` (it runs after the backdrop transition, i.e. potentially after the next modal's
// `show()` already ran) must not release the lock -- or restore the saved scroll position --
// while the next modal is still relying on it. Because the saved position is only (re)captured
// when the count goes from 0 to 1, a second modal taking over an already-locked body never saves
// the bogus `window.scrollY === 0` that `position: fixed` body would otherwise report.
let scrollLockCount = 0;
let savedScrollY = 0;
const lockBackgroundScroll = () => {
  if (scrollLockCount === 0) {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    const { style } = document.body;
    style.position = 'fixed';
    style.top = `${-savedScrollY}px`;
    style.left = '0';
    style.right = '0';
    style.width = '100%';
  }

  scrollLockCount++;
};
const unlockBackgroundScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount > 0) {
    return
  }

  const { style } = document.body;
  style.removeProperty('position');
  style.removeProperty('top');
  style.removeProperty('left');
  style.removeProperty('right');
  style.removeProperty('width');
  window.scrollTo(0, savedScrollY);
};

/**
 * Class definition
 */

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);

    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._inertedElements = [];
    this._scrollLocked = false;

    this._addEventListeners();
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
    return this._isShown ? this.hide() : this.show(relatedTarget)
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
    this._scrollLocked = true;
    lockBackgroundScroll();

    document.body.classList.add(CLASS_NAME_OPEN);

    this._adjustDialog();

    this._backdrop.show(() => this._showElement(relatedTarget));
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

    this._element.classList.remove(CLASS_NAME_SHOW);

    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }

  dispose() {
    for (const htmlElement of [window, this._dialog]) {
      EventHandler.off(htmlElement, EVENT_KEY);
    }

    this._backdrop.dispose();
    this._focustrap.deactivate();
    this._removeInert();
    if (this._scrollLocked) {
      this._scrollLocked = false;
      unlockBackgroundScroll();
    }

    super.dispose();
  }

  handleUpdate() {
    this._adjustDialog();
  }

  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop), // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated(),
    })
  }

  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element,
    })
  }

  _showElement(relatedTarget) {
    // try to append dynamic modal
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }

    // the modal may have just been (re)parented above, so (re)compute the ancestor chain now
    this._applyInert();

    this._element.style.display = 'block';
    this._element.removeAttribute('aria-hidden');
    this._element.setAttribute('aria-modal', true);
    this._element.setAttribute('role', 'dialog');
    this._element.scrollTop = 0;

    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW);

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }

      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN, {
        relatedTarget,
      });
    };

    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
      if (event.key !== ESCAPE_KEY) {
        return
      }

      if (this._config.keyboard) {
        event.preventDefault();
        this.hide();
        return
      }

      this._triggerBackdropTransition();
    });

    EventHandler.on(window, EVENT_RESIZE, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });

    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
        if (this._element !== event.target || this._element !== event2.target) {
          return
        }

        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
          return
        }

        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }

  _hideModal() {
    this._element.style.display = 'none';
    this._element.setAttribute('aria-hidden', true);
    this._element.removeAttribute('aria-modal');
    this._element.removeAttribute('role');
    this._isTransitioning = false;

    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      if (this._scrollLocked) {
        this._scrollLocked = false;
        unlockBackgroundScroll();
      }

      // background must not be inert anymore before EVENT_HIDDEN fires, since focus is
      // restored to the trigger element (which may be one of the previously inerted elements)
      this._removeInert();
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    });
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE)
  }

  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
    if (hideEvent.defaultPrevented) {
      return
    }

    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    // return if the following background transition hasn't yet completed
    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return
    }

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }

    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);

    this._element.focus();
  }

  /**
   * The following methods are used to handle overflowing modals
   */

  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;

    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? 'paddingLeft' : 'paddingRight';
      this._element.style[property] = `${scrollbarWidth}px`;
    }

    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? 'paddingRight' : 'paddingLeft';
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  }

  _applyInert() {
    this._inertedElements = [];

    let current = this._element;
    while (current && current !== document.body && current.parentElement) {
      const parent = current.parentElement;
      for (const sibling of parent.children) {
        if (sibling === current || !(sibling instanceof HTMLElement)) {
          continue
        }

        if (['SCRIPT', 'STYLE', 'TEMPLATE', 'LINK'].includes(sibling.tagName)) {
          continue
        }

        // other modals/backdrops are already display:none + aria-hidden; inert-ing them here
        // would create a race when one modal replaces another (see data-api handler below)
        if (sibling.matches('.modal, .modal-backdrop')) {
          continue
        }

        setInert(sibling);
        this._inertedElements.push(sibling);
      }

      current = parent;
    }
  }

  _removeInert() {
    for (const element of this._inertedElements) {
      unsetInert(element);
    }

    this._inertedElements = [];
  }
}

/**
 * Data API implementation
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

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }

    const data = Modal.getOrCreateInstance(target);

    data.toggle(this);
  });

  enableDismissTrigger(Modal);
}

export { Modal as default };
//# sourceMappingURL=modal.js.map
