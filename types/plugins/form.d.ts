import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

/**
 * DEPRECATED
 */
declare class Form extends BaseComponent {
  static get NAME(): string

  constructor(element: any)

  _bindEvents(): void

  _getInputLabel(input: any): any

  _isInputEmpty(input: any): boolean
}

export { Form }
