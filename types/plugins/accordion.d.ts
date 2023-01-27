import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

type KeyName = 'ArrowDown' | 'ArrowUp' | 'Home' | 'End'

declare class Accordion extends BaseComponent {
  static get NAME(): string

  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Accordion>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    Accordion
  >;

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
