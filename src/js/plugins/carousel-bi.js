import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide-core.min.css'

import BaseComponent from 'bootstrap/js/src/base-component.js'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'

const NAME = 'carousel'
//const DATA_KEY = 'bs.carousel'
//const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

//const EVENT_SCROLL = `scroll${EVENT_KEY}`

const SELECTOR_CAROUSEL = '.splide'

const CONFIG_DEFAULT = {
  slideFocus: true,
  i18n: {
    prev: 'Slide precedente',
    next: 'Slide successiva',
    first: 'Vai alla prima slide',
    last: 'Vai all’ultima slide',
    slideX: 'Vai alla slide %s',
    pageX: 'Vai a pagina %s',
    play: 'Attiva autoplay',
    pause: 'Pausa autoplay',
  },
}
const CONFIGS = {
  'it-carousel-landscape-abstract-three-cols': {
    type: 'slide',
    perPage: 3,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: false,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: false,
      },
    },
  },
  'it-big-img': {
    type: 'loop',
    perPage: 1,
    gap: 48,
    padding: { left: 320, right: 320 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 1,
        gap: 24,
        padding: { left: 160, right: 160 },
        arrows: false,
      },
    },
  },
  'it-standard-image': {
    type: 'loop',
    perPage: 3,
    gap: 24,
    padding: { left: 48, right: 48 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: false,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 48, right: 48 },
        arrows: false,
      },
    },
  },
  'it-carousel-landscape-abstract': {
    type: 'slide',
    perPage: 1,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 1,
        gap: 24,
        padding: { left: 24, right: 24 },
        arrows: false,
      },
    },
  },
}

class CarouselBI extends BaseComponent {
  constructor(element) {
    super(element)
    this._config = this._getConfig()
    this._splide = new Splide(this._element, this._config)

    this._init()
  }

  dispose() {
    super.dispose()
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _init() {
    this._splide.mount()
  }

  _getConfig() {
    let conf = Object.assign({}, CONFIG_DEFAULT)
    Object.keys(CONFIGS).forEach((classKey) => {
      if (this._element.classList.contains(classKey)) {
        conf = Object.assign({}, conf, CONFIGS[classKey])
      }
    })
    return conf
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const carousels = SelectorEngine.find(SELECTOR_CAROUSEL)
carousels.forEach((carousel) => {
  CarouselBI.getOrCreateInstance(carousel)
})

export default CarouselBI
