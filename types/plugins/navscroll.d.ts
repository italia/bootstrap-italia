import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class NavScroll extends BaseComponent {
  static get NAME(): string

  constructor(element: HTMLElement, config: any)

  _config: any
  _togglerElement: any
  _sectionContainer: any
  _collapsible: any
  _isCollapseOpened: boolean
  _callbackQueue: any[]
  _scrollCb: {
    id: any
    _callback: any
    dispose(): void
    _execute(data: any): void
  }

  setScrollPadding(scrollPadding: any): void

  dispose(): void

  _getConfig(config: any): any

  _bindEvents(): void

  _onCollapseOpened(): void

  _onCollapseClosed(): void

  _getParentLinks(element: any): any[]

  _decorateToggler(text: any): void

  _scrollToHash(hash: any): void

  _updateProgress(content: any): void

  _onScroll(): void

  _getCollapsible(): any

  _getScrollPadding(): any
}

export { NavScroll }
