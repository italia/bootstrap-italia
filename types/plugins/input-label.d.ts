declare class InputLabel {
  static get NAME(): string

  static getInputFromLabel: (labelElement: any) => Element

  constructor(element: HTMLElement)

  _element: any

  _init(): void

  _bindEvents(): void

  _getLabel(): any

  _isEmpty(): boolean

  _labelOut(): void

  _labelOver(): void

  _labelToggle(): void
}

export { InputLabel }
