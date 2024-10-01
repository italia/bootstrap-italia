import BaseComponent from 'bootstrap/js/src/base-component'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import SelectorEngine from 'bootstrap/js/src/dom/selector-engine'
import Manipulator from 'bootstrap/js/src/dom/manipulator'

//import Input from './input'
import InputLabel from './input-label'

const NAME = 'inputpassword'
const DATA_KEY = 'bs.inputpassword'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const Default = {
  shortPass: 'Password molto debole. ',
  badPass: 'Password debole. ',
  goodPass: 'Password sicura. ',
  strongPass: 'Password molto sicura. ',
  enterPass: 'Inserisci almeno 8 caratteri, una lettera maiuscola e un carattere speciale. ',
  alertCaps: 'Attenzione: CAPS LOCK inserito. ',
  showText: true,
  minimumLength: 8,
}

const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_KEYUP = `keyup${EVENT_KEY}`
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`
const EVENT_SCORE = `score${EVENT_KEY}`
const EVENT_TEXT = `text${EVENT_KEY}`

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
const EVENT_MOUSEDOWN_DATA_API = `mousedown${EVENT_KEY}${DATA_API_KEY}`
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_PASSWORD = 'input-password'
//const CLASS_NAME_METER = 'input-password-strength-meter'

const SELECTOR_PASSWORD = 'input[data-bs-input][type="password"]'
const SELECTOR_BTN_SHOW_PWD = '.password-icon'
const SELECTOR_METER = '.password-strength-meter'
const SELECTOR_METER_GRAYBAR = '.password-meter'
const SELECTOR_METER_COLBAR = '.progress-bar'
const SELECTOR_CAPS = '.password-caps'
const SELECTOR_TEXT = '.form-text'

class InputPassword extends BaseComponent {
  constructor(element, config) {
    super(element)

    this._config = this._getConfig(config)
    this._isCustom = this._element.classList.contains(CLASS_NAME_PASSWORD)
    this._meter = this._element.parentNode.querySelector(SELECTOR_METER)
    this._isShiftPressed = false
    this._isCapsOn = false

    this._grayBarElement = null
    this._colorBarElement = null
    this._textElement = null
    this._capsElement = null
    this._showPwdElement = null

    this._text = {}

    this._label = new InputLabel(element)

    this._init()
    this._bindEvents()
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
    }
    return config
  }

  _init() {
    if (this._meter) {
      this._grayBarElement = this._meter.querySelector(SELECTOR_METER_GRAYBAR)
      this._colorBarElement = this._meter.querySelector(SELECTOR_METER_COLBAR)
      this._textElement = this._meter.querySelector(SELECTOR_TEXT)

      if (this._textElement) {
        this._config = Object.assign({}, this._config, { ...Manipulator.getDataAttributes(this._textElement) }, { enterPass: this._textElement.innerText })
      }
    }
    if (this._isCustom) {
      this._capsElement = this._element.parentNode.querySelector(SELECTOR_CAPS)
      if (this._capsElement) {
        // Ensure the element is hidden and empty initially
        this._capsElement.style.display = 'none'
        this._capsElement.textContent = ''
      }
    }

    this._showPwdElement = SelectorEngine.findOne(SELECTOR_BTN_SHOW_PWD, this._element.parentNode)
  }

  _bindEvents() {
    EventHandler.on(this._element, 'keypress', (evt) => this._preventSpace(evt))

    if (this._meter) {
      EventHandler.on(this._element, EVENT_KEYUP, () => this._checkPassword())
    }

    if (this._isCustom) {
      EventHandler.on(this._element, EVENT_KEYDOWN, (evt) => this._handleKeyDown(evt))
      EventHandler.on(this._element, EVENT_KEYUP, (evt) => this._handleKeyUp(evt))
    }

    if (this._showPwdElement) {
      EventHandler.on(this._showPwdElement, EVENT_CLICK, () => this._toggleShowPassword())
    }
  }

  _preventSpace(evt) {
    if (evt.key === ' ' || evt.keyCode === 32) {
      evt.preventDefault()
    }
  }

  _handleKeyDown(evt) {
    if (evt.key === 'Shift') {
      this._isShiftPressed = true
    }
    this._checkCapsLock(evt)
  }

  _handleKeyUp(evt) {
    if (evt.key === 'Shift') {
      this._isShiftPressed = false
    }
    this._checkCapsLock(evt)
  }

  _checkCapsLock(evt) {
    if (!this._capsElement) return

    const capsOn = this._isCapsLockOn(evt)
    if (capsOn !== this._isCapsOn) {
      this._isCapsOn = capsOn
      this._toggleCapsLockWarning(this._isCapsOn)
    }
  }

  _isCapsLockOn(evt) {
    if (evt.getModifierState) {
      return evt.getModifierState('CapsLock')
    }
    const charCode = evt.which || evt.keyCode
    const isUpperCase = charCode >= 65 && charCode <= 90
    const isLowerCase = charCode >= 97 && charCode <= 122
    return (isUpperCase && !evt.shiftKey) || (isLowerCase && evt.shiftKey)
  }

  _toggleCapsLockWarning(show) {
    if (this._capsElement) {
      if (show) {
        this._capsElement.textContent = this._config.alertCaps || Default.alertCaps
        this._capsElement.style.display = 'block'
      } else {
        this._capsElement.style.display = 'none'
        setTimeout(() => {
          if (this._capsElement.style.display === 'none') {
            this._capsElement.textContent = ''
          }
        }, 100)
      }
    }
  }

  _toggleShowPassword() {
    const toShow = this._element.getAttribute('type') === 'password'

    SelectorEngine.find('[class^="password-icon"]', this._showPwdElement).forEach((icon) => icon.classList.toggle('d-none'))

    this._element.setAttribute('type', toShow ? 'text' : 'password')
    this._showPwdElement.setAttribute('aria-checked', toShow.toString())
  }

  _checkPassword() {
    const score = this._calculateScore(this._element.value)
    const perc = score < 0 ? 0 : score

    this._colorBarElement.classList.forEach((className) => {
      if (className.match(/(^|\s)bg-\S+/g)) {
        this._colorBarElement.classList.remove(className)
      }
    })
    this._colorBarElement.classList.add('bg-' + this._scoreColor(score))
    this._colorBarElement.style.width = perc + '%'
    this._colorBarElement.setAttribute('aria-valuenow', perc)

    EventHandler.trigger(this._element, EVENT_SCORE)

    if (this._textElement) {
      let text = this._scoreText(score)
      if (this._element.value.length === 0 && score <= 0) {
        text = this._config.enterPass
      }

      if (this._textElement.innerHTML.search(text) === -1) {
        this._textElement.innerHTML = text
        this._textElement.classList.forEach((className) => {
          if (className.match(/(^|\s)text-\S+/g)) {
            this._textElement.classList.remove(className)
          }
        })
        this._textElement.classList.add('text-' + this._scoreColor(score))
        EventHandler.trigger(this._element, EVENT_TEXT)
      }
    }

    const strengthMeter = this._element.parentNode.querySelector('#strengthMeter')
    if (strengthMeter) {
      const requirements = this._getCompletedRequirements(this._element.value)
      const strengthText = this._scoreText(score)
      let detailedMessage = `${strengthText}. ${requirements.completed} su ${requirements.total} requisiti soddisfatti. `

      if (requirements.completedDescriptions.length > 0) {
        detailedMessage += `Soddisfatti: ${requirements.completedDescriptions.join(' ')} `
      }

      if (requirements.missingDescriptions.length > 0) {
        detailedMessage += `Mancanti: ${requirements.missingDescriptions.join(' ')} `
      }

      strengthMeter.textContent = detailedMessage
    }
  }

  _getCompletedRequirements(password) {
    const requirements = [
      { test: password.length >= 8, description: 'Almeno 8 caratteri.' },
      { test: /[A-Z]/.test(password), description: 'Almeno una lettera maiuscola.' },
      { test: /[a-z]/.test(password), description: 'Almeno una lettera minuscola.' },
      { test: /[0-9]/.test(password), description: 'Almeno un numero.' },
      { test: /[^A-Z-a-z0-9]/.test(password), description: 'Almeno un carattere speciale.' },
    ]

    const completedRequirements = requirements.filter((req) => req.test)
    const missingRequirements = requirements.filter((req) => !req.test)

    return {
      completed: completedRequirements.length,
      total: requirements.length,
      completedDescriptions: completedRequirements.map((req) => req.description),
      missingDescriptions: missingRequirements.map((req) => req.description),
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

    score = score < 0 ? 0 : score

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

    score = score < 0 ? 0 : score

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
    var score = 0

    // empty password
    if (password.trim().length === 0) {
      return -2
    }

    // password < this._config.minimumLength
    if (password.length < this._config.minimumLength) {
      return -1
    }

    // password length
    score += password.length * 4
    score += this._checkRepetition(1, password).length - password.length
    score += this._checkRepetition(2, password).length - password.length
    score += this._checkRepetition(3, password).length - password.length
    score += this._checkRepetition(4, password).length - password.length

    // password has 3 numbers
    if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
      score += 5
    }

    // password has at least 2 sybols
    var symbols = '.*[!,@,#,$,%,^,&,*,?,_,~]'
    symbols = new RegExp('(' + symbols + symbols + ')')
    if (password.match(symbols)) {
      score += 5
    }

    // password has Upper and Lower chars
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      score += 10
    }

    // password has number and chars
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      score += 15
    }

    // password has number and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
      score += 15
    }

    // password has char and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
      score += 15
    }

    // password is just numbers or chars
    if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
      score -= 10
    }

    if (score > 100) {
      score = 100
    }

    if (score < 0) {
      score = 0
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
      repeated = false
    for (var i = 0; i < str.length; i++) {
      repeated = true
      for (var j = 0; j < rLen && j + i + rLen < str.length; j++) {
        repeated = repeated && str.charAt(j + i) === str.charAt(j + i + rLen)
      }
      if (j < rLen) {
        repeated = false
      }
      if (repeated) {
        i += rLen - 1
        repeated = false
      } else {
        res += str.charAt(i)
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
}

EventHandler.on(document, EVENT_MOUSEDOWN_DATA_API, SELECTOR_PASSWORD + ', label', function () {
  const target = InputLabel.getInputFromLabel(this) || this
  createInput(target)
})
EventHandler.on(document, EVENT_KEYUP_DATA_API, SELECTOR_PASSWORD + ', label', function () {
  const target = InputLabel.getInputFromLabel(this) || this
  const element = createInput(target)
  if (element && element._label) {
    element._label._labelOut()
  }
})
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_BTN_SHOW_PWD, function () {
  const target = this.parentNode && this.parentNode.querySelector(SELECTOR_PASSWORD)
  if (target) {
    InputPassword.getOrCreateInstance(target)
  }
})

export default InputPassword
