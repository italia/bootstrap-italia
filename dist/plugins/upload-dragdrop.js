import BaseComponent from 'bootstrap/js/src/base-component.js';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import ProgressDonut from './progress-donut.js';

const NAME = 'upload';
const DATA_KEY = 'bs.upload';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const EVENT_DRAG = `drag`;
const EVENT_DRAG_START = `dragstart`;
const EVENT_DRAG_END = `dragend`;
const EVENT_DRAG_OVER = `dragover`;
const EVENT_DRAG_ENTER = `dragenter`;
const EVENT_DRAG_LEAVE = `dragleave`;
const EVENT_DROP = `drop`;

const CLASS_NAME_SUCCESS = 'success';
const CLASS_NAME_DRAGOVER = 'dragover';
const CLASS_NAME_LOADING = 'loading';

const SELECTOR_FORM = '[data-bs-upload-dragdrop]';
const SELECTOR_DONUT = '[data-bs-progress-donut]';

class UploadDragDrop extends BaseComponent {
  constructor(element) {
    super(element);

    const donutElement = SelectorEngine.findOne(SELECTOR_DONUT, this._element);
    if (donutElement) {
      this._donut = ProgressDonut.getOrCreateInstance(donutElement);
    }

    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  progress(value) {
    this._donut.set(value);
  }

  start() {
    this.reset();
    this._element.classList.add(CLASS_NAME_LOADING);
  }

  success() {
    this._element.classList.remove(CLASS_NAME_LOADING);
    this._element.classList.add(CLASS_NAME_SUCCESS);
  }

  reset() {
    this._element.classList.remove(CLASS_NAME_LOADING);
    this._element.classList.remove(CLASS_NAME_SUCCESS);
    this._donut.set(0);
  }

  dispose() {
    this._donut.dispose();

    super.dispose();
  }

  // Private
  _bindEvents() {
    EventHandler.on(this._element, EVENT_DRAG, (evt) => this._preventEvent(evt));
    EventHandler.on(this._element, EVENT_DRAG_START, (evt) => this._preventEvent(evt));
    EventHandler.on(this._element, EVENT_DRAG_END, (evt) => this._preventEvent(evt));
    EventHandler.on(this._element, EVENT_DRAG_OVER, (evt) => this._preventEvent(evt));
    EventHandler.on(this._element, EVENT_DRAG_ENTER, (evt) => this._preventEvent(evt));
    EventHandler.on(this._element, EVENT_DRAG_LEAVE, (evt) => this._preventEvent(evt));
    EventHandler.on(this._element, EVENT_DROP, (evt) => this._preventEvent(evt));

    EventHandler.on(this._element, EVENT_DRAG_OVER, () => this._dropIn());
    EventHandler.on(this._element, EVENT_DRAG_ENTER, () => this._dropIn());
    EventHandler.on(this._element, EVENT_DRAG_LEAVE, () => this._dropOut());
    EventHandler.on(this._element, EVENT_DRAG_END, () => this._dropOut());
    EventHandler.on(this._element, EVENT_DROP, () => this._dropOut());

    EventHandler.on(this._element, EVENT_DROP, () => this._drop());
  }
  _preventEvent(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  _dropIn() {
    if (!this._isSuccess()) {
      this._element.classList.add(CLASS_NAME_DRAGOVER);
    }
  }
  _dropOut() {
    if (!this._isSuccess()) {
      this._element.classList.remove(CLASS_NAME_DRAGOVER);
    }
  }
  _drop() {
    if (!this._isSuccess()) {
      this.start();
    }
  }

  _isSuccess() {
    return this._element.classList.contains(CLASS_NAME_SUCCESS)
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

/*SelectorEngine.find(SELECTOR_FORM).forEach((form) => {
  UploadDragDrop.getOrCreateInstance(form)
})*/

const createInput = (element) => {
  let found = element.matches && element.matches(SELECTOR_FORM) ? element : element.closest ? element.closest(SELECTOR_FORM) : null;
  if (found) {
    UploadDragDrop.getOrCreateInstance(found);
  }
  return null
};

document.addEventListener('dragenter', function (evt) {
  createInput(evt.target);
});
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_FORM + ' label', function () {
  createInput(this);
});

export { UploadDragDrop as default };
//# sourceMappingURL=upload-dragdrop.js.map
