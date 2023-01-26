import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import Splide from '@splidejs/splide'

declare class CarouselBI extends BaseComponent {
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

export { CarouselBI }
