import Splide from '@splidejs/splide';
import BaseComponent from './base-component.js';
import SelectorEngine from './dom/selector-engine.js';
import EventHandler from './dom/event-handler.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'carousel';
const DATA_KEY = 'bs.carousel';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;

const SELECTOR_CAROUSEL = '[data-bs-carousel-splide]';

const CONFIG_DEFAULT = {
  slideFocus: false,
  rewind: true,
  perMove: 1,
  i18n: {
    prev: 'Slide precedente',
    next: 'Slide successiva',
    first: 'Vai alla prima slide',
    last: 'Vai all’ultima slide',
    slideX: 'Vai alla slide %s',
    pageX: 'Vai a pagina %s',
    play: 'Attiva autoplay',
    pause: 'Pausa autoplay',
    carousel: 'Carosello',
    select: 'Seleziona una slide da mostrare',
    slide: 'slide',
    slideLabel: '%s di %s',
  },
};
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
        padding: { left: 0, right: 0 },
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
  'it-carousel-landscape-abstract-three-cols-arrow-visible': {
    type: 'slide',
    perPage: 3,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: true,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: true,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: true,
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
  'it-calendar-wrapper': {
    type: 'slide',
    perPage: 4,
    gap: 0,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      560: {
        perPage: 1,
        gap: 0,
        padding: { left: 24, right: 24 },
        arrows: false,
      },
      768: {
        perPage: 2,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 3,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
    },
  },
};

class CarouselBI extends BaseComponent {
  constructor(element) {
    super(element);
    this._config = this._getConfig();
    this._splide = new Splide(this._element, this._config);

    this._init();
  }

  dispose() {
    this._splide.destroy();
    super.dispose();
  }
  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  // Private
  _init() {
    this._splide.mount();
  }

  _getConfig() {
    let conf = Object.assign({}, CONFIG_DEFAULT);
    Object.keys(CONFIGS).forEach((classKey) => {
      if (this._element.classList.contains(classKey)) {
        conf = Object.assign({}, conf, CONFIGS[classKey]);
      }
    });
    return conf
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    const carousels = SelectorEngine.find(SELECTOR_CAROUSEL);
    carousels.forEach((carousel) => {
      CarouselBI.getOrCreateInstance(carousel);
    });
  });
}

export { CarouselBI as default };
//# sourceMappingURL=carousel.js.map
