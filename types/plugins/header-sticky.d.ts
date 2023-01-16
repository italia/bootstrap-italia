declare class HeaderSticky {
  static getOrCreateInstance(element: HTMLElement): any

  constructor(element: HTMLElement)

  _element: any
  _elementObj: any

  _bindEvents(): void

  _toggleClonedElement(toAdd?: boolean): void
}

export { HeaderSticky }
