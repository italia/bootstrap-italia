import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class UploadDragDrop extends BaseComponent {
  static get NAME(): string

  constructor(element: any)

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
