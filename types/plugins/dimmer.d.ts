import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class Dimmer extends BaseComponent {
  static get NAME(): string

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Dimmer>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<Dimmer>;

  constructor(element: HTMLElement)

  _isShown: boolean
  _isTransitioning: boolean

  show(): void

  hide(): void

  _isAnimated(): boolean

  _showElement(): void

  _hideElement(): void
}

export { Dimmer }
