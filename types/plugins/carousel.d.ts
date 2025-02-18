import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { type GetInstanceFactory, type GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

import Splide from '@splidejs/splide'

declare class Carousel extends BaseComponent {

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Carousel>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<Carousel>;

  static get NAME(): string

  constructor(element: HTMLElement)

  _config: {
    slideFocus: boolean
    i18n: {
      prev: string
      next: string
      first: string
      last: string
      slideX: string
      pageX: string
      play: string
      pause: string
    }
  }
  _splide: Splide

  dispose(): void

  _init(): void

  _getConfig(): {
    slideFocus: boolean
    i18n: {
      prev: string
      next: string
      first: string
      last: string
      slideX: string
      pageX: string
      play: string
      pause: string
    }
  }
}

export { Carousel }
