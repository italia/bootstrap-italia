import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { InputLabel } from './input-label'

declare class InputSearch extends BaseComponent {
  static get NAME(): string

  constructor(element: any, config: any)

  _config: any
  _items: any[]
  _autocompleteElement: HTMLUListElement
  _label: InputLabel

  search(): void

  _getConfig(config: any): any

  _getItems(): any

  _init(): void

  _bindEvents(): void

  _createOption(link: any, text: any, label: any, icon: any): HTMLLIElement
}

export { InputSearch }
