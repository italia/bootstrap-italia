import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class BackToTop extends BaseComponent {
  static get NAME(): string

  constructor(element: any, config: any)

  _config: any
  _scrollCb: {
    id: any
    _callback: any
    dispose(): void
    _execute(data: any): void
  }
  _isAnim: boolean
  _prevScrollBehavior: string

  show(): void

  hide(): void

  toggleShow(): void

  scrollToTop(): void

  dispose(): void

  _getConfig(config: any): any

  _bindEvents(): void
}

export { BackToTop }
