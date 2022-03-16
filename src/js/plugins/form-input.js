import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

const NAME = 'forminput'
const DATA_KEY = 'bs.forminput'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const EVENT_FOCUS = `focus${EVENT_KEY}`
const EVENT_BLUR = `blur${EVENT_KEY}`
const EVENT_CHANGE = `change${EVENT_KEY}`

const CLASS_NAME_ACTIVE = 'active'

//const SELECTOR_FORM = 'form'
const SELECTOR_INPUT =
  'input[type="text"],' +
  'input[type="password"],' +
  'input[type="email"],' +
  'input[type="email"],' +
  'input[type="url"],' +
  'input[type="tel"],' +
  'input[type="number"],' +
  'input[type="search"],' +
  'textarea'

const SELECTOR_INPUT_FILE = 'input[type="file"]'

class FormInput extends BaseComponent {
  constructor(element) {
    super(element)

    this._bindEvents()

    this._labelOut()
    this._labelOver()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _bindEvents() {
    if (this._element.getAttribute('type') === 'file') {
      EventHandler.on(this._element, EVENT_BLUR, () => {
        this._labelOut()
      })
      EventHandler.on(this._element, EVENT_CHANGE, () => {
        this._handleFileDescription()
      })
    } else {
      EventHandler.on(this._element, EVENT_FOCUS, () => {
        this._labelOut()
      })
      EventHandler.on(this._element, EVENT_BLUR, () => {
        this._labelOver()
      })
      EventHandler.on(this._element, EVENT_CHANGE, () => {
        this._labelToggle()
      })
    }
  }

  _getLabel() {
    return SelectorEngine.findOne('label[for="' + this._element.getAttribute('id') + '"]')
  }

  _isEmpty() {
    return !this._element.value && !this._element.getAttribute('placeholder')
  }

  _labelOut() {
    const label = this._getLabel()
    if (label) {
      label.classList.add(CLASS_NAME_ACTIVE)
    }
  }
  _labelOver() {
    if (this._isEmpty()) {
      const label = this._getLabel()
      if (label) {
        label.classList.remove(CLASS_NAME_ACTIVE)
      }
    }
  }
  _labelToggle() {
    if (!this._isEmpty()) {
      this._labelOut()
    } else {
      this._labelOver()
    }
  }

  _handleFileDescription() {
    const fileNames = []
    let labelPrefix = ''

    Array.from(this._element.files).forEach((file) => {
      const fileSize = Math.round(parseInt(file.size, 10) / 1024)
      fileNames.push(file.name + ' (' + fileSize + 'kb)')
    })

    if (this._element.files.length > 1) {
      labelPrefix = this._element.files.length + ' file da caricare: '
    }

    const label = SelectorEngine.findOne('label[for="' + this._element.getAttribute('id') + '"] label.form-file-name', this._element)
    if (label) {
      label.innerText = labelPrefix + fileNames.join('; ')
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const inputs = SelectorEngine.find([SELECTOR_INPUT, SELECTOR_INPUT_FILE].join(','))
inputs.forEach((input) => {
  FormInput.getOrCreateInstance(input)
})

export default FormInput
