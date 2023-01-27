import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class UploadDragDrop extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<UploadDragDrop>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<UploadDragDrop>;

  constructor(element: HTMLElement)

  _donut: any

  progress(value: any): void

  start(): void

  success(): void

  reset(): void

  dispose(): void

  _bindEvents(): void

  _preventEvent(evt: any): void

  _dropIn(): void

  _dropOut(): void

  _drop(): void

  _isSuccess(): any
}

export { UploadDragDrop }
