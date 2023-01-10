import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class Forward extends BaseComponent {
  static get NAME(): string

  constructor(element: any, config: any)

  _config: any

  goToTarget(): void

  _getConfig(config: any): any

  _bindEvents(): void
}

export { Forward }
