import BaseComponent from 'bootstrap/js/src/base-component.js';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import Manipulator from 'bootstrap/js/src/dom/manipulator';
import MasonryPlugin from 'masonry-layout';

const NAME = 'masonry';
//const DATA_KEY = 'bs.masonry'
//const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_LOADER = 'masonry-loader';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="masonry"]';
const SELECTOR_LOADER = `.${CLASS_NAME_LOADER}`;

const Default = {
  percentPosition: true,
};

//const MASONRY_EXISTS = !!window.Masonry

class Masonry extends BaseComponent {
  constructor(element, config) {
    /*if (!MASONRY_EXISTS) {
      throw new Error("[Masonry] you can't instantiate Mesonry component without Masonry Library")
    }*/

    super(element);

    this._config = this._getConfig(config);
    this._masonry = null;

    this._images = SelectorEngine.find('img', this._element);
    this._loadCounter = 0;

    this._init();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  dispose() {
    if (this._masonry) {
      this._masonry.destroy();
      this._masonry = null;
    }

    super.dispose();
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    };
    return config
  }

  _init() {
    if (this._images.length > 0) {
      //this._showLoader()

      this._images.forEach((img) => {
        const imgDummy = new Image();
        imgDummy.onload = () => this._onLoadEnd();
        imgDummy.src = img.src;
      });
    } else {
      this._initMasonry();
    }
  }

  _onLoadEnd() {
    this._loadCounter++;
    if (this._loadCounter >= this._images.length) {
      //this._hideLoader()
      this._initMasonry();
    }
  }

  _initMasonry() {
    this._masonry = new MasonryPlugin(this._element, this._config);
  }

  _createLoader() {
    const loader = document.createElement('div');
    loader.classList.add(CLASS_NAME_LOADER, 'fade', 'd-flex', 'justify-content-center', 'align-items-center');
    loader.innerHTML = '<div class="progress-spinner progress-spinner-active"><span class="visually-hidden">Caricamento...</span></div>';
    this._element.appendChild(loader);
    return loader
  }
  _getOrCreateLoader() {
    const loader = SelectorEngine.findOne(SELECTOR_LOADER, this._element);
    if (!loader) {
      return this._createLoader()
    }
    return loader
  }
  _destroyLoader() {
    const loader = SelectorEngine.findOne(SELECTOR_LOADER, this._element);
    if (loader) {
      loader.remove();
    }
  }
  _showLoader() {
    const loader = this._getOrCreateLoader();
    loader.classList.add(CLASS_NAME_SHOW);
  }
  _hideLoader() {
    this._destroyLoader();
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

const masonries = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
if (masonries.length > 0) {
  /*if (!MASONRY_EXISTS) {
    console.warn('[Masonry] Masonry component needs Masonry library to work properly')
  } else {
    masonries.forEach((masonry) => {
      Masonry.getOrCreateInstance(masonry)
    })
  }*/
  masonries.forEach((masonry) => {
    Masonry.getOrCreateInstance(masonry);
  });
}

export { Masonry as default };
//# sourceMappingURL=masonry.js.map
