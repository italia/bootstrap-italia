import BaseComponent from './base-component.js';
import EventHandler from './dom/event-handler.js';
import SelectorEngine from './dom/selector-engine.js';
import Manipulator from './dom/manipulator.js';
import InputLabel from './input-label.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const NAME = 'inputpassword';
const DATA_KEY = 'bs.inputpassword';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const Default = {
  shortPass: 'Password troppo breve',
  badPass: 'Password debole.',
  goodPass: 'Password abbastanza sicura.',
  strongPass: 'Password sicura.',
  minimumLength: 8,
  suggestionsLabel: 'Suggerimenti per una buona password:',
  suggestionFollowed: 'suggerimenti seguito',
  suggestionFollowedPlural: 'suggerimenti seguiti',
  suggestionOf: 'di',
  suggestionMetLabel: 'Soddisfatto: ',
  suggestionMetIconPath: `
    M9.6 16.9 4 11.4l.8-.7 4.8 4.8 8.5-8.4.7.7-9.2 9.1z
  `,
  suggestionLength: 'Almeno {minLength} caratteri.',
  suggestionUppercase: 'Una o più maiuscole.',
  suggestionLowercase: 'Una o più minuscole.',
  suggestionNumber: 'Uno o più numeri.',
  suggestionSpecial: 'Uno o più caratteri speciali.',
};

const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_KEYUP = `keyup${EVENT_KEY}`;
const EVENT_SCORE = `score${EVENT_KEY}`;
const EVENT_TEXT = `text${EVENT_KEY}`;
const EVENT_SUGGS = `suggs${EVENT_KEY}`;

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_MOUSEDOWN_DATA_API = `mousedown${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_PASSWORD = 'input-password';

const SELECTOR_PASSWORD = 'input[data-bs-input][type="password"]';
const SELECTOR_BTN_SHOW_PWD = '.password-icon';
const SELECTOR_METER = '.password-strength-meter';
const SELECTOR_METER_GRAYBAR = '.password-meter';
const SELECTOR_METER_COLBAR = '.progress-bar';
const SELECTOR_METER_TEXT = '.strength-meter-info';
const SELECTOR_METER_SUGGS = '.strenght-meter-suggestions';

class InputPassword extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);
    this._isCustom = this._element.classList.contains(CLASS_NAME_PASSWORD);
    this._meter = this._element.parentNode.querySelector(SELECTOR_METER);

    this._grayBarElement = null;
    this._colorBarElement = null;
    this._textElement = null;
    this._suggsElement = null;
    this._showPwdElement = null;

    this._text = {};

    this._label = new InputLabel(element);

    this._suggestions = [
      {
        key: 'length',
        text: (config) => config.suggestionLength.replace('{minLength}', config.minimumLength.toString()),
        test: (password, config) => password.length >= config.minimumLength,
      },
      {
        key: 'uppercase',
        text: (config) => config.suggestionUppercase,
        test: (password) => /[A-Z]/.test(password),
      },
      {
        key: 'lowercase',
        text: (config) => config.suggestionLowercase,
        test: (password) => /[a-z]/.test(password),
      },
      {
        key: 'number',
        text: (config) => config.suggestionNumber,
        test: (password) => /[0-9]/.test(password),
      },
      {
        key: 'special',
        text: (config) => config.suggestionSpecial,
        test: (password) => /[^A-Za-z0-9]/.test(password),
      },
    ];

    this._init();
    this._bindEvents();
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
    };
    return config
  }

  _init() {
    if (this._isCustom) {
      this._handleAutofill();
      this._showPwdElement = SelectorEngine.findOne(SELECTOR_BTN_SHOW_PWD, this._element.parentNode);
      if (this._meter) {
        this._grayBarElement = this._meter.querySelector(SELECTOR_METER_GRAYBAR);
        this._colorBarElement = this._meter.querySelector(SELECTOR_METER_COLBAR);
        this._textElement = this._meter.querySelector(SELECTOR_METER_TEXT);
        this._suggsElement = this._meter.querySelector(SELECTOR_METER_SUGGS);
        if (this._textElement) {
          this._config = Object.assign({}, this._config, { ...Manipulator.getDataAttributes(this._textElement) });
        }
        if (this._suggsElement) {
          this._createsuggestionsList();
        }
      }
    }
  }

  _bindEvents() {
    if (this._isCustom) {
      if (this._showPwdElement) {
        EventHandler.on(this._showPwdElement, EVENT_CLICK, () => this._toggleShowPassword());
      }
      if (this._meter) {
        EventHandler.on(this._element, EVENT_KEYUP, () => this._checkPassword());
        EventHandler.on(this._element, 'input', () => this._checkPassword());
      }
    }
  }

  _handleAutofill() {
    const checkAndActivate = () => {
      if (this._element.value !== '') {
        this._label._labelOut();
        this._checkPassword();
      }
    };
    checkAndActivate();
    setTimeout(checkAndActivate, 100);
    EventHandler.on(this._element, 'animationstart', (event) => {
      if (event.animationName === 'onAutoFillStart') {
        checkAndActivate();
      }
    });
  }

  _toggleShowPassword() {
    const toShow = this._element.getAttribute('type') === 'password';
    SelectorEngine.find('[class^="password-icon"]', this._showPwdElement).forEach((icon) => icon.classList.toggle('d-none'));
    this._element.setAttribute('type', toShow ? 'text' : 'password');
    this._showPwdElement.setAttribute('aria-checked', toShow.toString());
  }

  _checkPassword() {
    const password = this._element.value;
    const score = this._calculateScore(password);
    this._updateMeter(score);
    this._updateText(score, password);
    this._updateSuggestions(password);
  }

  _updateMeter(score) {
    const perc = score < 0 ? 0 : score;
    if (this._colorBarElement) {
      this._colorBarElement.classList.forEach((className) => {
        if (className.match(/(^|\s)bg-\S+/g)) {
          this._colorBarElement.classList.remove(className);
        }
      });
      this._colorBarElement.classList.add(`bg-${this._scoreColor(score)}`);
      this._colorBarElement.style.width = `${perc}%`;
      this._colorBarElement.setAttribute('aria-valuenow', perc);
    }
    EventHandler.trigger(this._element, EVENT_SCORE);
  }

  _updateText(score, password) {
    if (this._textElement) {
      let text = this._scoreText(score);
      if (this._suggsElement) {
        const { completedCount, totalCount } = this._getCompletedSuggestions(password);
        const suggestionText = completedCount === 1 ? this._config.suggestionFollowed : this._config.suggestionFollowedPlural;
        text += ` ${completedCount} ${this._config.suggestionOf} ${totalCount} ${suggestionText}.`;
      }
      if (this._textElement.textContent !== text) {
        this._textElement.textContent = text;
        this._textElement.classList.forEach((className) => {
          if (className.match(/(^|\s)text-\S+/g)) {
            this._textElement.classList.remove(className);
          }
        });
        this._textElement.classList.add(`text-${this._scoreColor(score)}`);
        EventHandler.trigger(this._element, EVENT_TEXT);
      }
    }
  }

  _updateSuggestions(password) {
    if (this._suggsElement) {
      this._updateSuggestionsList(password);
      EventHandler.trigger(this._element, EVENT_SUGGS);
    }
  }

  _getCompletedSuggestions(password) {
    let completedCount = 0;
    const totalCount = this._suggestions.length;
    this._suggestions.forEach((sugg) => {
      if (sugg.test(password, this._config)) completedCount++;
    });
    return { completedCount, totalCount }
  }

  _createsuggestionsList() {
    if (this._suggsElement.querySelector('.password-suggestions')) {
      return
    }
    const suggLabel = document.createElement('label');
    suggLabel.className = 'visually-hidden';
    suggLabel.htmlFor = 'suggestions';
    suggLabel.textContent = Default.suggestionsLabel;
    const suggContainer = document.createElement('div');
    suggContainer.id = 'suggestions';
    suggContainer.className = 'password-suggestions';

    this._suggestions.forEach((sugg) => {
      const suggElement = document.createElement('div');
      suggElement.className = 'suggestion';
      suggElement.dataset.suggestion = sugg.key;
      const checkIcon = this._createIconCheck();
      const textSpan = document.createElement('span');
      textSpan.textContent = sugg.text(this._config);
      suggElement.appendChild(checkIcon);
      suggElement.appendChild(textSpan);
      suggContainer.appendChild(suggElement);
    });

    this._suggsElement.appendChild(suggLabel);
    this._suggsElement.appendChild(suggContainer);
  }

  _createIconCheck() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', `icon icon-xs me-1 d-none`);
    svg.setAttribute('aria-label', this._config.suggestionMetLabel);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.style.width = '1em';
    svg.style.height = '1em';
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', this._config.suggestionMetIconPath.trim());
    svg.appendChild(path);
    return svg
  }

  _updateSuggestionsList(password) {
    if (!this._suggsElement) return
    this._suggestions.forEach((sugg) => {
      const suggElement = this._suggsElement.querySelector(`[data-suggestion="${sugg.key}"]`);
      if (suggElement) {
        const isMet = sugg.test(password, this._config);
        const checkIcon = suggElement.querySelector('.icon');
        if (checkIcon) {
          checkIcon.classList.toggle('d-none', !isMet);
        }
      }
    });
  }

  /**
   * Returns strings based on the score given.
   *
   * @param int score Score base.
   * @return string
   */
  _scoreText(score) {
    if (score === -1) {
      return this._config.shortPass
    }

    if (score === -2) {
      return ''
    }

    score = score < 0 ? 0 : score;

    if (score < 26) {
      return this._config.badPass
    }
    if (score < 51) {
      return this._config.badPass
    }
    if (score < 76) {
      return this._config.goodPass
    }

    return this._config.strongPass
  }

  _scoreColor(score) {
    if (score === -1 || score === -2 || score < 26) {
      return 'danger'
    }
    if (score < 51) {
      return 'warning'
    }
    if (score < 76) {
      return 'success'
    }
    return 'success'
  }

  /**
   * Returns a value between -1 and 100 to score
   * the user's password.
   *
   * @param  string password The password to be checked.
   * @return int
   */
  _calculateScore(password) {
    var score = 0;

    // empty password
    if (password.trim().length === 0) {
      return -2
    }

    // password < this._config.minimumLength
    if (password.length < this._config.minimumLength) {
      return -1
    }

    // password length
    score += password.length * 4;
    score += this._checkRepetition(1, password).length - password.length;
    score += this._checkRepetition(2, password).length - password.length;
    score += this._checkRepetition(3, password).length - password.length;
    score += this._checkRepetition(4, password).length - password.length;

    // password has 3 numbers
    if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
      score += 5;
    }

    // password has at least 2 symbols
    var symbols = '.*[!,@,#,$,%,^,&,*,?,_,~]';
    symbols = new RegExp('(' + symbols + symbols + ')');
    if (password.match(symbols)) {
      score += 5;
    }

    // password has Upper and Lower chars
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      score += 10;
    }

    // password has number and chars
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      score += 15;
    }

    // password has number and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
      score += 15;
    }

    // password has char and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
      score += 15;
    }

    // password is just numbers or chars
    if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
      score -= 10;
    }

    if (score > 100) {
      score = 100;
    }

    if (score < 0) {
      score = 0;
    }

    return score
  }

  /**
   * Checks for repetition of characters in
   * a string
   *
   * @param int rLen Repetition length.
   * @param string str The string to be checked.
   * @return string
   */
  _checkRepetition(rLen, str) {
    var res = '',
      repeated = false;
    for (var i = 0; i < str.length; i++) {
      repeated = true;
      for (var j = 0; j < rLen && j + i + rLen < str.length; j++) {
        repeated = repeated && str.charAt(j + i) === str.charAt(j + i + rLen);
      }
      if (j < rLen) {
        repeated = false;
      }
      if (repeated) {
        i += rLen - 1;
        repeated = false;
      } else {
        res += str.charAt(i);
      }
    }
    return res
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const createInput = (element) => {
    if (element && element.matches(SELECTOR_PASSWORD)) {
      return InputPassword.getOrCreateInstance(element)
    }
    return null
  };

  const initInputPassword = () => {
    const element = SelectorEngine.findOne(SELECTOR_PASSWORD);
    if (element) {
      InputPassword.getOrCreateInstance(element);
    }
  };

  if (document.readyState !== 'loading') {
    initInputPassword();
  } else {
    document.addEventListener('DOMContentLoaded', initInputPassword);
  }

  EventHandler.on(document, EVENT_MOUSEDOWN_DATA_API, SELECTOR_PASSWORD + ', label', function () {
    const target = InputLabel.getInputFromLabel(this) || this;
    createInput(target);
  });
  EventHandler.on(document, EVENT_KEYUP_DATA_API, SELECTOR_PASSWORD + ', label', function () {
    const target = InputLabel.getInputFromLabel(this) || this;
    const element = createInput(target);
    if (element && element._label) {
      element._label._labelOut();
    }
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_BTN_SHOW_PWD, function () {
    const target = this.parentNode && this.parentNode.querySelector(SELECTOR_PASSWORD);
    if (target) {
      InputPassword.getOrCreateInstance(target);
    }
  });
}

export { InputPassword as default };
//# sourceMappingURL=input-password.js.map
