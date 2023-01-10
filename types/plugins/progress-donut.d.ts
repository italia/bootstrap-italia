import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

declare class ProgressDonut extends BaseComponent {
  static get NAME(): string

  constructor(element: any, config: any)

  _config: any
  _bar: any

  set(progess: any): void

  dispose(): void

  _getConfig(config: any): any

  _getStepCallback(): (state: any, circle: any) => void

  _init(): void
}

export { ProgressDonut }
