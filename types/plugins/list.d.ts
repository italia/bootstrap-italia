import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class List extends BaseComponent {
  static get NAME(): string

  constructor(element: HTMLElement)

  toggleCheckbox(item: any): void

  _init(): void

  _initCheckbox(): void
}

export { List }
