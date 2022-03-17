import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

import Input from './input'

//const SELECTOR_FORM = 'form'
const SELECTOR_INPUT =
  'input[type="text"],' +
  'input[type="password"],' +
  'input[type="email"],' +
  'input[type="email"],' +
  'input[type="url"],' +
  'input[type="tel"],' +
  'input[type="number"],' +
  'textarea'

const SELECTOR_INPUT_FILE = 'input[type="file"]'

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const inputs = SelectorEngine.find([SELECTOR_INPUT, SELECTOR_INPUT_FILE].join(','))
inputs.forEach((input) => {
  Input.getOrCreateInstance(input)
})
