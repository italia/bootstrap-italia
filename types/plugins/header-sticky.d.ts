import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class HeaderSticky {
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<HeaderSticky>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<HeaderSticky>;
  constructor(element: HTMLElement)

  _element: any
  _elementObj: any

  _bindEvents(): void

  _toggleClonedElement(toAdd?: boolean): void
}

export { HeaderSticky }
