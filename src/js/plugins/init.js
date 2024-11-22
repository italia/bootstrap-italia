/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import TrackFocus from './track-focus'

import BOOTSTRAP_ITALIA_VERSION from '../version'

const init = () => {
  if (typeof window !== 'undefined' && !window.BOOTSTRAP_ITALIA_VERSION) {
    new TrackFocus()
    window.BOOTSTRAP_ITALIA_VERSION = BOOTSTRAP_ITALIA_VERSION
  }
}

export default init

init()
