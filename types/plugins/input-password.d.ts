import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { InputLabel } from './input-label'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';


declare class InputPassword extends BaseComponent {
  static get NAME(): string

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<InputPassword>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<InputPassword, Partial<InputPassword.Options>>;

  constructor(element: HTMLElement, config?: Partial<InputPassword.Options>)

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

declare namespace InputPassword {

  interface Options {
    /**
     * Label message in case of short password
     *
     * @default 'Password molto debole'
     */
    shortPass: string;
    /**
     * Label message in case of bad password
     *
     * @default 'Password debole'
     */
    badPass: string;
    /**
     * Label message in case of good (secure) password
     *
     * @default 'Password sicura'
     */
    goodPass: string;
    /**
     * Label message in case of very secure password
     *
     * @default 'Password molto sicura'
     */
    strongPass: string;
    /**
     * Label message to instruct users on how to choose a password
     *
     * @default 'Inserisci almeno 8 caratteri e una lettera maiuscola'
     */
    enterPass: string;
    /**
     * Label message in case of caps lock
     *
     * @default 'CAPS LOCK inserito'
     */
    alertCaps: string;
    /**
     * Minimum password length
     *
     * @default 4
     */
    minimumLength: number;
    /**
     * Show text toggle
     *
     * @default true
     */
    showText: boolean;
  }

}

export { InputPassword }
