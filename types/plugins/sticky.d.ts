import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class Sticky extends BaseComponent {
  static get NAME(): string

  constructor(element: any, config: any)

  _config: any
  _isSticky: boolean
  _wrapper: HTMLDivElement
  _stickyTarget: any
  _stickyTargetMobile: any
  _stickyLimit: number
  _stickyLimitMobile: number
  _scrollCb: {
    id: any
    _callback: any
    dispose(): void
    _execute(data: any): void
  }
  _isMobile: boolean
  _prevTop: number

  dispose(): void

  _getConfig(config: any): any

  _bindEvents(): void

  _onResize(): void

  _onScroll(): void

  _setLimit(): void

  _getLimit(): number

  /**
   * get the absolute position of an element
   * @param {*} element - the target element
   * @returns {Object} - absolute position top and left of the element
   */
  _cumulativeOffset(element: any): any

  _isTypeSticky(): boolean

  _checkSticky(): void

  _setSticky(): void

  _unsetSticky(): void

  _createWrapper(): HTMLDivElement

  _destroyWrapper(): void

  _getStickySimblings(): any

  /**
   * returns the top position of the element considering the config and the other sticky elements
   */
  _getPositionTop(): any
}

export { Sticky }
