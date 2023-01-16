import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { InputLabel } from './input-label'

declare class InputPassword extends BaseComponent {
  static get NAME(): string

  constructor(element: HTMLElement, config: any)

  _config: any
  _isCustom: any
  _meter: any
  _isShiftPressed: boolean
  _isCapsOn: boolean
  _grayBarElement: any
  _colorBarElement: any
  _textElement: any
  _capsElement: any
  _showPwdElement: any
  _text: {}
  _label: InputLabel

  _getConfig(config: any): any

  _init(): void

  _bindEvents(): void

  _showCapsMsg(): void

  _hideCapsMsg(): void

  _toggleShowPassword(): void

  _checkPassword(): void

  /**
   * Returns strings based on the score given.
   *
   * @param int score Score base.
   * @return string
   */
  _scoreText(score: any): any

  _scoreColor(score: any): 'success' | 'danger' | 'muted' | 'warning'

  /**
   * Returns a value between -1 and 100 to score
   * the user's password.
   *
   * @param  string password The password to be checked.
   * @return int
   */
  _calculateScore(password: any): number

  /**
   * Checks for repetition of characters in
   * a string
   *
   * @param int rLen Repetition length.
   * @param string str The string to be checked.
   * @return string
   */
  _checkRepetition(rLen: any, str: any): string
}

export { InputPassword }
