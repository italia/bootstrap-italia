/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import EventHandler from './dom/event-handler'
import BaseComponent from './base-component'
import { enableDismissTrigger } from './util/component-functions'

/**
 * Constants
 */

const NAME = 'chip'
const DATA_KEY = 'bs.chip'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_CLOSE = `close${EVENT_KEY}`
const EVENT_CLOSED = `closed${EVENT_KEY}`

/**
 * Class definition
 */

class Chip extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE)

    if (closeEvent.defaultPrevented) {
      return
    }

    this._destroyElement()
  }

  // Private
  _destroyElement() {
    this._element.remove()
    EventHandler.trigger(this._element, EVENT_CLOSED)
    this.dispose()
  }
}

/**
 * Data API implementation
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  enableDismissTrigger(Chip, 'close')
}

export default Chip
