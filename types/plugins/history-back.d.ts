import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class HistoryBack extends BaseComponent {
  static get NAME(): string

  constructor(element: any)

  back(): void

  _bindEvents(): void
}

export { HistoryBack }
