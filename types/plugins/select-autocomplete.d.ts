import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class SelectAutocomplete extends BaseComponent {
  static get NAME(): string

  constructor(element: HTMLElement, config: any)

  _config: any

  _enhance(): void
}

export { SelectAutocomplete }
