import BaseComponent from 'bootstrap/js/src/base-component.js'

import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
import Manipulator from 'bootstrap/js/src/dom/manipulator'
import videojs from 'video.js'


const NAME = 'videoplayer'
const DATA_KEY = 'bs.video'

const SELECTOR_TOGGLE = '[data-bs-video]'

const Default = {
  positionTop: 0,
  scrollLimit: 100,
  duration: 800,
  easing: 'easeInOutSine',
}

class VideoPlayer extends BaseComponent {
  constructor(element, config) {
    super(element)
    element.classList.add(
      "video-js", 
      "vjs-theme-bootstrap-italia", 
      "vjs-fluid", 
      "vjs-big-play-centered"
    )
    this._config = this._getConfig(config)

    this.video = videojs(element, config, () => {
    })
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    }
    return config
  }

}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const players = SelectorEngine.find(SELECTOR_TOGGLE)
if (players.length > 0) {
  players.forEach((masonry) => {
    VideoPlayer.getOrCreateInstance(masonry)
  })
}

export default VideoPlayer
