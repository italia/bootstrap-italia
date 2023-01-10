import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { InputLabel } from './input-label'

declare class InputNumber extends BaseComponent {
  static get NAME(): string

  constructor(element: any)

  _wrapperElement: any
  _label: InputLabel

  _init(): void

  _bindEvents(): void

  _inputResize(): void

  _incrDecr(isDecr: any): void

  _checkLimit(): void
}

export { InputNumber }
