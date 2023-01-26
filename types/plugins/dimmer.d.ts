import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class Dimmer extends BaseComponent {
  static get NAME(): string

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
