import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
declare class Cookiebar extends BaseComponent {
  static get NAME(): string

  static get VERSION(): string

  static clearCookie(): void

  static _handleAccept(cookiebarInstance: any): (event: any) => void

  static _handleConsent(cookiebarInstance: any): (event: any) => void

  static _getCookieEU(): string

  constructor(element: any)

  _isShown: any
  _isTransitioning: boolean

  show(): void

  hide(): void

  accept(element: any): void

  _isAnimated(): any

  _showElement(): void

  _hideElement(): void

  _setCookieEU(): void

  _getRootElement(element: any): any

  _triggerCloseEvent(element: any): any

  _removeElement(element: any): void
}

export { Cookiebar }
