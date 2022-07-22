const DATA_MOUSE_FOCUS = 'data-focus-mouse';
const CLASS_NAME_MOUSE_FOCUS = 'focus--mouse';

class TrackFocus {
  constructor() {
    this._usingMouse = false;

    this._bindEvents();
  }

  // Public

  // Private
  _bindEvents() {
    const events = ['keydown', 'mousedown'];
    events.forEach((evtName) => {
      document.addEventListener(evtName, (evt) => {
        this._usingMouse = evt.type === 'mousedown';
      });
    });
    document.addEventListener('focusin', (evt) => {
      if (this._usingMouse) {
        if (evt.target) {
          evt.target.classList.add(CLASS_NAME_MOUSE_FOCUS);
          evt.target.setAttribute(DATA_MOUSE_FOCUS, true);
        }
      }
    });
    document.addEventListener('focusout', (evt) => {
      if (evt.target) {
        evt.target.classList.remove(CLASS_NAME_MOUSE_FOCUS);
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
