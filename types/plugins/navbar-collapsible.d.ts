import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class NavBarCollapsible extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<NavBarCollapsible>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<NavBarCollapsible>;

  constructor(element: HTMLElement)

  _isShown: boolean
  _isTransitioning: boolean
  _isMobile: boolean
  _isKeyShift: boolean
  _currItemIdx: number
  _btnClose: any
  _btnBack: any
  _menuWrapper: any
  _overlay: any
  _menuItems: any

  show(relatedTarget: any): void

  hide(): void

  toggle(relatedTarget: any): void

  dispose(): void

  _bindEvents(): void

  _onResize(): void

  _onMenuItemKeyUp(evt: any): void

  _onMenuItemKeyDown(evt: any): void

  /**
   * Update the last focused element when an interactive element is clicked
   */
  _onMenuItemClick(evt: any): void

  currItemIdx: number

  _isAnimated(): boolean

  _isElementHidden(element: any): boolean

  _showElement(): void

  _hideElement(): void

  _setOverlay(): void

  /**
   * Moves focus to the next focusable element based on the DOM exploration direction
   */
  _focusNext(): void

  /**
   * Get the next focusable element from a starting point
   * @param {int} start - the index of the array of the elements as starting point (included)
   * @param {boolean} wayTop - the array search direction (true: bottom to top, false: top to bottom)
   * @returns {Object} the item found and its index in the array
   */
  _getNextVisibleItem(start: number, wayTop: boolean): any
}

export { NavBarCollapsible }
