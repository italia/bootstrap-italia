import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
declare class Cookiebar extends BaseComponent {
  static get NAME(): string

  static get VERSION(): string

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Cookiebar>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<Cookiebar>;

  static clearCookie(): void

  static _handleAccept(cookiebarInstance: any): (event: any) => void

  static _handleConsent(cookiebarInstance: any): (event: any) => void

  static _getCookieEU(): string

  constructor(element: HTMLElement)

  _isShown: boolean
  _isTransitioning: boolean

  show(): void

  hide(): void

  accept(element: HTMLElement): void

  _isAnimated(): boolean

  _showElement(): void

  _hideElement(): void

  _setCookieEU(): void

  _getRootElement(element: HTMLElement): any

  _triggerCloseEvent(element: HTMLElement): any

  _removeElement(element: HTMLElement): void
}

export { Cookiebar }
