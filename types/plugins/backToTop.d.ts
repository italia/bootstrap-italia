import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class BackToTop extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<BackToTop>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    BackToTop, Partial<BackToTop.Options>
  >;

  constructor(element: HTMLElement, config?: Partial<BackToTop.Options>)

  _config: any
  _scrollCb: {
    id: any
    _callback: any
    dispose(): void
    _execute(data: any): void
  }
  _isAnim: boolean
  _prevScrollBehavior: string

  show(): void

  hide(): void

  toggleShow(): void

  scrollToTop(): void

  dispose(): void

  _getConfig(config: any): any

  _bindEvents(): void
}

declare namespace BackToTop {

  interface Options {
    /**
     * Top position
     *
     * @default 0
     */
    positionTop: number;
    /**
     * Scroll limit
     *
     * @default 100
     */
    scrollLimit: number;
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

export { BackToTop }
