import BaseComponent from './base-component.js';
import SelectorEngine from './dom/selector-engine.js';
import Manipulator from './dom/manipulator.js';
import MiniMasonry from 'minimasonry/src/minimasonry';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'masonry';

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_LOADER = 'masonry-loader';

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="masonry"]';
const SELECTOR_LOADER = `.${CLASS_NAME_LOADER}`;

const Default = {
  percentPosition: true,
};

class Masonry extends BaseComponent {
  constructor(element, config) {
    super(element);

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this._config = this._getConfig(config);
      this._masonry = null;
      this._images = SelectorEngine.find('img', this._element);
      this._loadCounter = 0;
      this._init();
    }
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

  // Public
  layout() {
    if (this._masonry) {
      this._masonry.layout();
    }
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
      this._initMasonry();
    }
  }

  _initMasonry() {
    const config = this._config;
    config.container = this._element;
    this._masonry = new MiniMasonry(config);
  }

  _createLoader() {
    if (typeof document === 'undefined') {
      return
    }
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

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const masonries = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
  if (masonries.length > 0) {
    masonries.forEach((masonry) => {
      Masonry.getOrCreateInstance(masonry);
    });
  }
}

export { Masonry as default };
//# sourceMappingURL=masonry.js.map
