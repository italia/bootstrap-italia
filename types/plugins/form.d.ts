import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

/**
 * DEPRECATED
 */
declare class Form extends BaseComponent {
  static get NAME(): string

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Form>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<Form>;

  constructor(element: HTMLElement)

  _bindEvents(): void

  _getInputLabel(input: any): any

  _isInputEmpty(input: any): boolean
}

export { Form }
