import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

type KeyName = 'ArrowDown' | 'ArrowUp' | 'Home' | 'End'

declare class Accordion extends BaseComponent {
  static get NAME(): string

  constructor(element: HTMLElement)

  handleKeyDown(keyName: KeyName, target: HTMLElement, evt: Event): void

  _bindEvents(): void

  _getHeadButtons(): any

  _focusNext(target: HTMLElement): void

  _focusPrev(target: HTMLElement): void

  _focusFirst(target: HTMLElement): void

  _focusLast(target: HTMLElement): void
}

export { Accordion }
