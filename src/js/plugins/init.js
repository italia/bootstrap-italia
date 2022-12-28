import TrackFocus from './track-focus'

import BOOTSTRAP_ITALIA_VERSION from '../version'

const init = () => {
  if (!window.BOOTSTRAP_ITALIA_VERSION) {
    new TrackFocus()
    window.BOOTSTRAP_ITALIA_VERSION = BOOTSTRAP_ITALIA_VERSION
  }
}

export default init

init()
