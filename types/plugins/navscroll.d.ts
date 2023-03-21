import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class NavScroll extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<NavScroll>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    NavScroll, Partial<NavScroll.Options>
  >;

  constructor(element: HTMLElement, config?: Partial<NavScroll.Options>)

  _config: any
  _togglerElement: any
  _sectionContainer: any
  _collapsible: any
  _isCollapseOpened: boolean
  _callbackQueue: any[]
  _scrollCb: {
    id: any
    _callback: any
    dispose(): void
    _execute(data: any): void
  }

  setScrollPadding(scrollPadding: any): void

  dispose(): void

  _getConfig(config: any): any

  _bindEvents(): void

  _onCollapseOpened(): void

  _onCollapseClosed(): void

  _getParentLinks(element: any): any[]

  _decorateToggler(text: any): void

  _scrollToHash(hash: any): void

  _updateProgress(content: any): void

  _onScroll(): void

  _getCollapsible(): any

  _getScrollPadding(): any
}

declare namespace NavScroll {

  interface Options {
    /**
     * Scroll padding
     *
     * @default 10
     */
    scrollPadding: number;
    /**
     * Scroll duration
     *
     * @default 800
     */
    duration: number;
    /**
     * Scroll easing
     *
     * @default 'easeInOutSine'
     */
    easing: string;
  }
}

export { NavScroll }
