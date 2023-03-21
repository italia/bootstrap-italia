import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class Masonry extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Masonry>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    Masonry, Partial<Masonry.Options>
  >;
  constructor(element: HTMLElement, config?: Partial<Masonry.Options>)

  _config: any
  _masonry: any
  _images: any
  _loadCounter: number

  dispose(): void

  _getConfig(config: any): any

  _init(): void

  _onLoadEnd(): void

  _initMasonry(): void

  _createLoader(): HTMLDivElement

  _getOrCreateLoader(): any

  _destroyLoader(): void

  _showLoader(): void

  _hideLoader(): void
}

declare namespace Masonry {

  interface Options {
    /**
     * Sets item positions in percent values, rather than pixel value
     *
     * @default true
     */
    percentPosition: boolean;
  }

}

export { Masonry }
