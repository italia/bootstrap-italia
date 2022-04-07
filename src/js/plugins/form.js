import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

const NAME = 'form'
const DATA_KEY = 'bs.form'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const EVENT_FOCUS = `focus${EVENT_KEY}`
const EVENT_BLUR = `blur${EVENT_KEY}`
const EVENT_CHANGE = `change${EVENT_KEY}`

const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_FORM = 'form'
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

/**
 * DEPRECATED
 */
class Form extends BaseComponent {
  constructor(element) {
    super(element)

    this._bindEvents()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _bindEvents() {
    SelectorEngine.find(SELECTOR_INPUT, this._element).forEach((input) => {
      EventHandler.on(input, EVENT_FOCUS, () => {
        const label = this._getInputLabel(input)
        if (label) {
          label.classList.add(CLASS_NAME_ACTIVE)
        }
      })
      EventHandler.on(input, EVENT_BLUR, () => {
        if (this._isInputEmpty(input)) {
          const label = this._getInputLabel(input)
          if (label) {
            label.classList.remove(CLASS_NAME_ACTIVE)
          }
        }
      })
      EventHandler.on(input, EVENT_CHANGE, () => {
        const label = this._getInputLabel(input)
        if (label && !this._isInputEmpty(input)) {
          label.classList.add(CLASS_NAME_ACTIVE)
        } else if (label) {
          label.classList.remove(CLASS_NAME_ACTIVE)
        }
      })
    })

    SelectorEngine.find(SELECTOR_INPUT_FILE, this._element).forEach((input) => {
      EventHandler.on(input, EVENT_BLUR, () => {
        const label = this._getInputLabel(input)
        if (label) {
          label.classList.add(CLASS_NAME_ACTIVE)
        }
      })
      EventHandler.on(input, EVENT_CHANGE, () => {
        const fileNames = []
        let labelPrefix = ''

        input.files.forEach((file) => {
          const fileSize = Math.round(parseInt(file.size, 10) / 1024)
          fileNames.push(file.name + ' (' + fileSize + 'kb)')
        })

        if (input.files.length > 1) {
          labelPrefix = input.files.length + ' file da caricare: '
        }

        const label = SelectorEngine.findOne('label[for="' + input.getAttribute('id') + '"] label.form-file-name', this._element)
        if (label) {
          label.innerText = labelPrefix + fileNames.join('; ')
        }
      })
    })
  }

  _getInputLabel(input) {
    return SelectorEngine.findOne('label[for="' + input.getAttribute('id') + '"]', this._element)
  }

  _isInputEmpty(input) {
    return input.value === '' && input.getAttribute('placeholder') === ''
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const forms = SelectorEngine.find(SELECTOR_FORM)
forms.forEach((form) => {
  Form.getOrCreateInstance(form)
})

export default Form
