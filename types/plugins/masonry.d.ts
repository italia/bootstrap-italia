import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class Masonry extends BaseComponent {
  static get NAME(): string

  constructor(element: HTMLElement, config: any)

  _config: any
  _masonry: any
  _images: any
  _loadCounter: number

  dispose(): void

  _getConfig(config: any): any

  _init(): void

  _onLoadEnd(): void

  _initMasonry(): void

  _createLoader(): HTMLDivElement

  _getOrCreateLoader(): any

  _destroyLoader(): void

  _showLoader(): void

  _hideLoader(): void
}

export { Masonry }
