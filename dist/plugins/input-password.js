import BaseComponent from 'bootstrap/js/src/base-component';
import EventHandler from 'bootstrap/js/src/dom/event-handler';
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine';
import Manipulator from 'bootstrap/js/src/dom/manipulator';
import InputLabel from './input-label.js';

const NAME = 'inputpassword';
const DATA_KEY = 'bs.inputpassword';
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const Default = {
  shortPass: 'Password molto debole',
  badPass: 'Password debole',
  goodPass: 'Password sicura',
  strongPass: 'Password molto sicura',
  enterPass: 'Inserisci almeno 8 caratteri e una lettera maiuscola',
  alertCaps: 'CAPS LOCK inserito',
  showText: true,
  minimumLength: 4,
};

const EVENT_CLICK = `click${EVENT_KEY}`;
const EVENT_KEYUP = `keyup${EVENT_KEY}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
const EVENT_KEYPRESS = `keypress${EVENT_KEY}`;
const EVENT_SCORE = `score${EVENT_KEY}`;
const EVENT_TEXT = `text${EVENT_KEY}`;

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_MOUSEDOWN_DATA_API = `mousedown${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_PASSWORD = 'input-password';
//const CLASS_NAME_METER = 'input-password-strength-meter'
const CLASS_NAME_SHOW = 'show';

const SELECTOR_PASSWORD = 'input[data-bs-input][type="password"]';
const SELECTOR_BTN_SHOW_PWD = '.password-icon';
const SELECTOR_METER = '.password-strength-meter';
const SELECTOR_METER_GRAYBAR = '.password-meter';
const SELECTOR_METER_COLBAR = '.progress-bar';
const SELECTOR_CAPS = '.password-caps';
const SELECTOR_TEXT = '.form-text';

class InputPassword extends BaseComponent {
  constructor(element, config) {
    super(element);

    this._config = this._getConfig(config);
    this._isCustom = this._element.classList.contains(CLASS_NAME_PASSWORD);
    this._meter = this._element.parentNode.querySelector(SELECTOR_METER);
    this._isShiftPressed = false;
    this._isCapsOn = false;

    this._grayBarElement = null;
    this._colorBarElement = null;
    this._textElement = null;
    this._capsElement = null;
    this._showPwdElement = null;

    this._text = {};

    this._label = new InputLabel(element);

    this._init();
    this._bindEvents();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

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
    if (this._meter) {
      /*this._grayBarElement = document.createElement('div')
      this._grayBarElement.classList.add('password-meter', 'progress', 'rounded-0', 'position-absolute')
      this._grayBarElement.innerHTML = `<div class="row position-absolute w-100 m-0">
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
          <div class="col-3 border-start border-end border-white"></div>
        </div>`

      this._colorBarElement = document.createElement('div')
      this._colorBarElement.classList.add('progress-bar')
      this._colorBarElement.setAttribute('role', 'progressbar')
      this._colorBarElement.setAttribute('aria-valuenow', '0')
      this._colorBarElement.setAttribute('aria-valuemin', '0')
      this._colorBarElement.setAttribute('aria-valuemax', '100')

      const wrapper = document.createElement('div')
      wrapper.classList.add('password-strength-meter')

      this._grayBarElement.appendChild(this._colorBarElement)

      if (this._config.showText) {
        this._textElement = document.createElement('small')
        this._textElement.classList.add('form-text', 'text-muted')
        this._textElement.innerHTML = this._config.enterPass
        wrapper.appendChild(this._textElement)
      }

      wrapper.appendChild(this._grayBarElement)

      this._element.parentNode.insertBefore(wrapper, this._element.nextSibling)*/

      this._grayBarElement = this._meter.querySelector(SELECTOR_METER_GRAYBAR);
      this._colorBarElement = this._meter.querySelector(SELECTOR_METER_COLBAR);
      this._textElement = this._meter.querySelector(SELECTOR_TEXT);

      if (this._textElement) {
        this._config = Object.assign({}, this._config, { ...Manipulator.getDataAttributes(this._textElement) }, { enterPass: this._textElement.innerText });
      }
    }
    if (this._isCustom) {
      /*this._capsElement = document.createElement('small')
      this._capsElement.style.display = 'none'
      this._capsElement.classList.add('password-caps', 'form-text', 'text-warning', 'position-absolute', 'bg-white', 'w-100')
      this._capsElement.innerHTML = this._config.alertCaps

      this._element.parentNode.appendChild(this._capsElement)*/

      this._capsElement = this._element.parentNode.querySelector(SELECTOR_CAPS);
    }

    this._showPwdElement = SelectorEngine.findOne(SELECTOR_BTN_SHOW_PWD, this._element.parentNode);
  }

  _bindEvents() {
    if (this._meter) {
      EventHandler.on(this._element, EVENT_KEYUP, () => this._checkPassword());
    }

    if (this._isCustom) {
      EventHandler.on(this._element, EVENT_KEYDOWN, (evt) => {
        if (evt.key === 'Shift') {
          this._isShiftPressed = true;
        }
      });
      EventHandler.on(this._element, EVENT_KEYUP, (evt) => {
        if (evt.key === 'Shift') {
          this._isShiftPressed = false;
        }
        if (evt.key === 'CapsLock') {
          this._isCapsOn = !this._isCapsOn;
          if (this._isCapsOn) {
            this._showCapsMsg();
          } else {
            this._hideCapsMsg();
          }
        }
      });
      EventHandler.on(this._element, EVENT_KEYPRESS, (evt) => {
        const matches = evt.key.match(/[A-Z]$/) || [];
        if (matches.length > 0 && !this._isShiftPressed) {
          this._isCapsOn = true;
          this._showCapsMsg();
        } else if (this._isCapsOn) {
          this._isCapsOn = false;
          this._hideCapsMsg();
        }
      });
    }

    if (this._showPwdElement) {
      EventHandler.on(this._showPwdElement, EVENT_CLICK, () => this._toggleShowPassword());
    }
  }

  _showCapsMsg() {
    if (this._capsElement) {
      this._capsElement.classList.add(CLASS_NAME_SHOW);
    }
  }
  _hideCapsMsg() {
    if (this._capsElement) {
      this._capsElement.classList.remove(CLASS_NAME_SHOW);
    }
  }

  _toggleShowPassword() {
    const toShow = this._element.getAttribute('type') === 'password';
    SelectorEngine.find('[class^="password-icon"]', this._showPwdElement).forEach((icon) => icon.classList.toggle('d-none'));
    if (toShow) {
      this._element.setAttribute('type', 'text');
    } else {
      this._element.setAttribute('type', 'password');
    }
  }

  _checkPassword() {
    const score = this._calculateScore(this._element.value);
    const perc = score < 0 ? 0 : score;

    this._colorBarElement.classList.forEach((className) => {
      if (className.match(/(^|\s)bg-\S+/g)) {
        this._colorBarElement.classList.remove(className);
      }
    });
    this._colorBarElement.classList.add('bg-' + this._scoreColor(score));
    this._colorBarElement.style.width = perc + '%';
    this._colorBarElement.setAttribute('aria-valuenow', perc);

    EventHandler.trigger(this._element, EVENT_SCORE);

    if (this._textElement) {
      let text = this._scoreText(score);
      if (this._element.value.length === 0 && score <= 0) {
        text = this._config.enterPass;
      }

      if (this._textElement.innerHTML.search(text) === -1) {
        this._textElement.innerHTML = text;
        this._textElement.classList.forEach((className) => {
          if (className.match(/(^|\s)text-\S+/g)) {
            this._textElement.classList.remove(className);
          }
        });
        this._textElement.classList.add('text-' + this._scoreColor(score));
        EventHandler.trigger(this._element, EVENT_TEXT);
      }
    }
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

    score = score < 0 ? 0 : score;

    if (score < 26) {
      return this._config.shortPass
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
    if (score === -1) {
      return 'danger'
    }
    if (score === -2) {
      return 'muted'
    }

    score = score < 0 ? 0 : score;

    if (score < 26) {
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

    // password has at least 2 sybols
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

/*const inputs = SelectorEngine.find(SELECTOR_PASSWORD)
inputs.forEach((input) => {
  InputPassword.getOrCreateInstance(input)
})*/

const createInput = (element) => {
  if (element && element.matches(SELECTOR_PASSWORD)) {
    return InputPassword.getOrCreateInstance(element)
  }
  return null
};

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

export { InputPassword as default };
//# sourceMappingURL=input-password.js.map
