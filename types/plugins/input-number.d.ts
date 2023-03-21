import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { InputLabel } from './input-label'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';


declare class InputNumber extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<InputNumber>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<InputNumber>;

  constructor(element: HTMLElement)

  _wrapperElement: any
  _label: InputLabel

  _init(): void

  _bindEvents(): void

  _inputResize(): void

  _incrDecr(isDecr: any): void

  _checkLimit(): void
}

export { InputNumber }
