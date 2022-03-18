import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
//import Manipulator from 'bootstrap/js/src/dom/manipulator'

import Input from './input'

const NAME = 'inputpassword'
const DATA_KEY = 'bs.inputpassword'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_CHANGE = `change${EVENT_KEY}`

const CLASS_ADAPTIVE = 'input-number-adaptive'
const CLASS_PERCENTAGE = 'input-number-percentage'
const CLASS_CURRENCY = 'input-number-currency'
//const CLASS_INCREMENT = 'input-number-add'
const CLASS_DECREMENT = 'input-number-sub'

const SELECTOR_WRAPPER = '.input-number'
const SELECTOR_INPUT = 'input[type=number]'
const SELECTOR_BTN = 'button'

class InputNumber extends Input {
  constructor(element) {
    super(element)

    this._wrapperElement = this._element.closest(SELECTOR_WRAPPER)

    this._init()
    this._bindEvents()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _init() {
    if (this._wrapperElement) {
      this._inputResize()
    }
  }

  _bindEvents() {
    if (this._wrapperElement) {
      SelectorEngine.find(SELECTOR_BTN, this._wrapperElement).forEach((btn) => {
        EventHandler.on(btn, EVENT_CLICK, (evt) => {
          evt.preventDefault()
          this._incrDecr(btn.classList.contains(CLASS_DECREMENT))
        })
      })

      EventHandler.on(this._element, EVENT_CHANGE, () => this._checkLimit())
    }
  }

  _inputResize() {
    if (this._wrapperElement.classList.contains(CLASS_ADAPTIVE)) {
      let newWidth = null
      //let newWidthIE = null
      if (!this._wrapperElement.classList.contains(CLASS_PERCENTAGE)) {
        newWidth = 'calc(44px + ' + this._element.value.length + 'ch)'
        //newWidthIE = 'calc(44px + (1.5 * ' + this._element.value.length + 'ch))'
      }
      if (this._wrapperElement.classList.contains(CLASS_CURRENCY)) {
        newWidth = 'calc(40px + 44px + ' + this._element.value.length + 'ch)'
        //newWidthIE = 'calc(40px + 44px + (1.5 * ' + this._element.value.length + 'ch))'
      }

      if (newWidth) {
        this._element.style.width = newWidth
        //IE - this._element.style.width = calcIe
      }
    }
  }

  _incrDecr(isDecr) {
    const inputVal = parseFloat(this._element.value)

    if (!isNaN(inputVal)) {
      //get step
      let step = parseFloat(this._element.getAttribute('step'))
      if (!step) {
        step = 1
      }

      this._element.value = inputVal + step * (isDecr ? -1 : 1)
      EventHandler.trigger(this._element, EVENT_CHANGE)
    }
  }

  _checkLimit() {
    const inputVal = parseFloat(this._element.value)

    if (!isNaN(inputVal)) {
      let val = inputVal
      const max = parseFloat(this._element.getAttribute('max'))
      const min = parseFloat(this._element.getAttribute('min'))

      if (min && inputVal < min) {
        val = min
      }
      //limit max
      if (max && inputVal > max) {
        val = max
      }

      this._element.value = val
    }

    this._inputResize()
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const inputs = SelectorEngine.find(SELECTOR_INPUT)
inputs.forEach((input) => {
  InputNumber.getOrCreateInstance(input)
})

export default InputNumber
