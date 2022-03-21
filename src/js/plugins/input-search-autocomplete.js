//import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

import Input from './input'

const NAME = 'inputsearchautocomplete'
const DATA_KEY = 'bs.inputsearchautocomplete'
const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const Default = {
  data: {},
}

const EVENT_KEYUP = `keyup${EVENT_KEY}`

const CLASS_NAME_SHOW = 'autocomplete-list-show'
const CLASS_NAME_AUTOCOMPLETE = 'autocomplete'

const DATA_AUTOCOMPLETE = 'data-bs-autocomplete'

const SELECTOR_SEARCH = 'input[type="search"]'

class InputSearch extends Input {
  constructor(element, config) {
    super(element)

    this._config = this._getConfig(config)
    this._items = []
    this._autocompleteElement = null

    this._init()
    this._bindEvents()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...(typeof config === 'object' ? config : {}),
    }
    return config
  }

  _getItems() {
    try {
      return JSON.parse(this._element.getAttribute(DATA_AUTOCOMPLETE))
    } catch (error) {
      console.error('[InputSearchAutocomplete] invalid data provided for ' + DATA_AUTOCOMPLETE + ' attribute', error)
      return []
    }
  }

  _init() {
    if (this._element.classList.contains(CLASS_NAME_AUTOCOMPLETE)) {
      this._items = this._getItems()
      this._autocompleteElement = document.createElement('ul')
      this._autocompleteElement.classList.add('autocomplete-list')
      this._element.parentNode.insertBefore(this._autocompleteElement, this._element.nextSibling)
    }
  }

  _bindEvents() {
    EventHandler.on(this._element, EVENT_KEYUP, () => this._search())
  }

  _search() {
    const value = this._element.value

    //!!! $autocomplete.empty()
    this._autocompleteElement.innerHTML = ''

    if (value) {
      this._items.forEach((item) => {
        let markText = new RegExp('(' + value + ')', 'gi')
        let optionText = item.text.replace(markText, '<mark>$1</mark>')
        let optionLabel = item.label ? '<em>' + item.label + '</em>' : ''
        let optionIcon = item.icon ? item.icon : ''
        let optionLink = item.link ? item.link : '#'

        if (optionText.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
          this._autocompleteElement.classList.add(CLASS_NAME_SHOW)
          this._autocompleteElement.appendChild(this._createOption(optionLink, optionText, optionLabel, optionIcon))
        }
      })
    } else {
      this._autocompleteElement.classList.remove(CLASS_NAME_SHOW)
    }
  }

  _createOption(link, text, label, icon) {
    const option = document.createElement('li')
    option.innerHTML = `<a href="${link}">
        ${icon}
        <span class="autocomplete-list-text">
          <span>${text}</span>
          ${label}
        </span>
      </a>`

    return option
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const inputs = SelectorEngine.find(SELECTOR_SEARCH)
inputs.forEach((input) => {
  InputSearch.getOrCreateInstance(input)
})

export default InputSearch
