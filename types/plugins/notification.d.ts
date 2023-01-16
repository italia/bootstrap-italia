import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

/**
 * toggle per attivazione
 * attrib per timeout (assegnabili al toggler o al componente, vince sempre il toggler)
 * gestione chiusura (dismissable)
 * la classe si riferisce all'elemento notification, con options, metodi open(timeout) e close (che deve gestire il timeout)
 **/
declare class Notification extends BaseComponent {
  static get NAME(): string

  constructor(element: HTMLElement, config: any)

  _config: any
  _isShown: boolean
  _isTransitioning: boolean
  _toId: any

  show(timeout: number, relatedTarget: string | Element): void

  hide(): void

  toggle(relatedTarget: string | Element): void

  _isAnimated(): boolean

  _showElement(timeout: any): void

  _hideElement(): void

  _getConfig(config: any): any

  _getElementTimeout(relatedTarget: string | Element): any

  _setTimeout(duration: any, callback: any): void

  _clearTimeout(): void
}

export { Notification }
