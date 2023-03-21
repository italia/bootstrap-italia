import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class SelectAutocomplete extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<SelectAutocomplete>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    SelectAutocomplete, any
  >;

  constructor(element: HTMLElement, config?: any)

  _config: any

  _enhance(): void
}

declare namespace SelectAutocomplete {

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

export { SelectAutocomplete }
