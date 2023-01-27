import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class Forward extends BaseComponent {
  static get NAME(): string

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Forward>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    Forward, Partial<Forward.Options>
  >;

  constructor(element: HTMLElement, config?: Partial<Forward.Options>)

  _config: any

  goToTarget(): void

  _getConfig(config: any): any

  _bindEvents(): void
}

declare namespace Forward {

  interface Options {
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

export { Forward }
