import ProgressBar from 'progressbar.js';
import BaseComponent from 'bootstrap/js/src/base-component.js';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import Manipulator from 'bootstrap/js/src/dom/manipulator';

const NAME = 'progressdonut';
//const DATA_KEY = 'bs.progressdonut'
//const EVENT_KEY = `.${DATA_KEY}`
//const DATA_API_KEY = '.data-api'

const SELECTOR_DONUT = '[data-bs-progress-donut]';

const Default = {
  color: '#5C6F82',
  trailColor: '#D9DADB',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 24,
  trailWidth: 12,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  animate: true,
  value: 0,
  //from: { color: '#aaa', width: 1 },
  //to: { color: '#333', width: 4 },
};

class ProgressDonut extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);
    this._bar = null;

    this._init();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  set(progess) {
    if (this._config.animate) {
      this._bar.animate(progess);
    } else {
      this._bar.set(progess);
    }
  }

  dispose() {
    this._bar.destroy();

    super.dispose();
  }

  // Private
  _getConfig(config) {
    config = {
      ...Default,
      ...{ step: this._getStepCallback() },
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {}),
    };
    //config.value = parseFloat(config.value)
    return config
  }

  _getStepCallback() {
    return (state, circle) => {
      //circle.path.setAttribute('stroke', state.color)
      //circle.path.setAttribute('stroke-width', state.width)

      const value = Math.round(circle.value() * 100);
      circle.setText(value + '%');
      /*if (value === 0) {
        circle.setText('')
      } else {
        circle.setText(value)
      }*/
    }
  }

  _init() {
    this._bar = new ProgressBar.Circle(this._element, this._config);

    if (this._config.value > 0) {
      this.set(this._config.value);
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

SelectorEngine.find(SELECTOR_DONUT).forEach((donut) => {
  ProgressDonut.getOrCreateInstance(donut);
});

export { ProgressDonut as default };
//# sourceMappingURL=progress-donut.js.map
