import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { InputLabel } from './input-label'

declare class Input extends BaseComponent {
  static get NAME(): string

  constructor(element: any)

  _label: InputLabel

  _bindEvents(): void

  _handleFileDescription(): void
}

export { Input }
