/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component'
import EventHandler from './dom/event-handler'
import InputLabel from './input-label'
import { DefaultAllowlist, sanitizeHtml } from './util/sanitizer'

const NAME = 'inputsearchautocomplete'
const DATA_KEY = 'bs.inputsearchautocomplete'
const EVENT_KEY = `.${DATA_KEY}`

const AutocompleteAllowlist = {
  ...DefaultAllowlist,
  mark: [],
  svg: ['xmlns', 'viewBox', 'fill', 'width', 'height', 'focusable', 'aria-hidden'],
  use: ['href', 'xlink:href'],
}

const Default = {
  autocomplete: [],
  allowList: AutocompleteAllowlist,
  sanitize: true,
  sanitizeFn: null,
}

const REGEXP_SPECIAL_CHARS = /[\\^$.*+?()[\]{}|]/g
const escapeRegExp = (str) => String(str).replace(REGEXP_SPECIAL_CHARS, String.raw`\$&`)

const EVENT_KEYUP = `keyup${EVENT_KEY}`

const CLASS_NAME_SHOW = 'autocomplete-list-show'
const CLASS_NAME_AUTOCOMPLETE = 'autocomplete'

const DATA_AUTOCOMPLETE = 'data-bs-autocomplete'

const SELECTOR_SEARCH = 'input[' + DATA_AUTOCOMPLETE + '][type="search"]'

class InputSearch extends BaseComponent {
  constructor(element, config) {
    super(element)

    this._config = this._getConfig(config)
    this._items = []
    this._autocompleteElement = null

    this._label = new InputLabel(element)

    this._init()
    this._bindEvents()
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  search() {
    const value = this._element.value

    //!!! $autocomplete.empty()
    this._autocompleteElement.innerHTML = ''

    if (value) {
      const itemText = (item) => (typeof item.text === 'string' ? item.text : '')
      const markText = new RegExp('(' + escapeRegExp(value) + ')', 'gi')
      this._items.forEach((item) => {
        const text = itemText(item)
        if (!text.toLowerCase().includes(value.toLowerCase())) {
          return
        }
        const optionText = text.replace(markText, '<mark>$1</mark>')
        const optionLabel = item.label ? '<em>' + item.label + '</em>' : ''
        const optionIcon = item.icon ? item.icon : ''
        const optionLink = item.link ? item.link : '#'

        this._autocompleteElement.classList.add(CLASS_NAME_SHOW)
        this._autocompleteElement.appendChild(this._createOption(optionLink, optionText, optionLabel, optionIcon))
      })
    } else {
      this._autocompleteElement.classList.remove(CLASS_NAME_SHOW)
    }
  }

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
      if (typeof document === 'undefined') {
        return
      }
      this._items = this._getItems()
      this._autocompleteElement = document.createElement('ul')
      this._autocompleteElement.classList.add('autocomplete-list')
      this._element.parentNode.insertBefore(this._autocompleteElement, this._element.nextSibling)
    }
  }

  _bindEvents() {
    EventHandler.on(this._element, EVENT_KEYUP, () => this.search())
  }

  _createOption(link, text, label, icon) {
    if (typeof document === 'undefined') {
      return
    }
    const option = document.createElement('li')
    const rawHtml = `<a href="${link}">
        ${icon}
        <span class="autocomplete-list-text">
          <span>${text}</span>
          ${label}
        </span>
      </a>`
    option.innerHTML = this._config.sanitize ? sanitizeHtml(rawHtml, this._config.allowList, this._config.sanitizeFn) : rawHtml

    // If the sanitizer dropped the href (e.g. javascript: scheme),
    // fall back to "#" so the option stays a proper anchor.
    const anchor = option.querySelector('a')
    if (anchor && !anchor.hasAttribute('href')) {
      anchor.setAttribute('href', '#')
    }

    return option
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const createInput = (element) => {
  if (element && element.matches(SELECTOR_SEARCH)) {
    return InputSearch.getOrCreateInstance(element)
  }
  return null
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    var frmel = document.querySelectorAll(SELECTOR_SEARCH + ', label')
    frmel.forEach(function (item) {
      const target = InputLabel.getInputFromLabel(item) || item
      createInput(target)
    })
  })
}

export default InputSearch
