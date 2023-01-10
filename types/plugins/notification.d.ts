import { default as BaseComponent } from 'bootstrap/js/dist/base-component'

/**
 * toggle per attivazione
 * attrib per timeout (assegnabili al toggler o al componente, vince sempre il toggler)
 * gestione chiusura (dismissable)
 * la classe si riferisce all'elemento notification, con options, metodi open(timeout) e close (che deve gestire il timeout)
 **/
declare class Notification extends BaseComponent {
  static get NAME(): string

  constructor(element: any, config: any)

  _config: any
  _isShown: any
  _isTransitioning: boolean
  _toId: any

  show(timeout: any, relatedTarget: any): void

  hide(): void

  toggle(relatedTarget: any): void

  _isAnimated(): any

  _showElement(timeout: any): void

  _hideElement(): void

  _getConfig(config: any): any

  _getElementTimeout(relatedTarget: any): any

  _setTimeout(duration: any, callback: any): void

  _clearTimeout(): void
}

export { Notification }
