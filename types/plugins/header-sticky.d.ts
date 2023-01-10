declare class HeaderSticky {
  static getOrCreateInstance(element: any): any

  constructor(element: any)

  _element: any
  _elementObj: any

  _bindEvents(): void

  _toggleClonedElement(toAdd?: boolean): void
}

export { HeaderSticky }
