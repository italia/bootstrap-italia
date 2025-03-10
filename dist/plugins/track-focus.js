/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const DATA_MOUSE_FOCUS = 'data-focus-mouse';

class TrackFocus {
  constructor() {
    this._usingMouse = false;
    this._bindEvents();
  }

  // Private
  _bindEvents() {
    if (typeof document === 'undefined') {
      return
    }
    const events = ['keydown', 'mousedown'];
    events.forEach((evtName) => {
      document.addEventListener(evtName, (evt) => {
        this._usingMouse = evt.type === 'mousedown';
      });
    });
    document.addEventListener('focusin', (evt) => {
      if (this._usingMouse) {
        if (evt.target) {
          evt.target.setAttribute(DATA_MOUSE_FOCUS, true);
        }
      }
    });
    document.addEventListener('focusout', (evt) => {
      if (evt.target) {
        evt.target.setAttribute(DATA_MOUSE_FOCUS, false);
      }
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

new TrackFocus();

export { TrackFocus as default };
//# sourceMappingURL=track-focus.js.map
