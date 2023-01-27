import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

/**
 * toggle per attivazione
 * attrib per timeout (assegnabili al toggler o al componente, vince sempre il toggler)
 * gestione chiusura (dismissable)
 * la classe si riferisce all'elemento notification, con options, metodi open(timeout) e close (che deve gestire il timeout)
 **/
declare class Notification extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Notification>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    Notification, Partial<Notification.Options>
  >;
  constructor(element: HTMLElement, config?: Partial<Notification.Options>)

  _config: any
  _isShown: boolean
  _isTransitioning: boolean
  _toId: any

  show(timeout?: number, relatedTarget?: string | Element): void

  hide(): void

  toggle(relatedTarget?: string | Element): void

  _isAnimated(): boolean

  _showElement(timeout: number): void

  _hideElement(): void

  _getConfig(config: any): any

  _getElementTimeout(relatedTarget: string | Element): any

  _setTimeout(duration: any, callback: any): void

  _clearTimeout(): void
}

declare namespace Notification {
  enum Events {
    /**
     * This event fires immediately when the show instance method is called.
     * If caused by a click, the clicked element is available as the
     * relatedTarget property of the event.
     */
    show = 'show.bs.modal',

    /**
     * This event is fired when the modal has finished being hidden from the
     * user (will wait for CSS transitions to complete).
     */
    hidden = 'hidden.bs.modal',
  }

  interface Options {
    /**
     * Closes the modal timeout milliseconds
     *
     * @default null
     */
    timeout: number;
  }

  interface Event extends CustomEvent {
    /**
     * The modal DOM element.
     */
    target: HTMLElement;

    /**
     * Only present for `show.bs.modal` and `shown.bs.modal` events when
     * the event was triggered by a click. In that case, it's the element
     * that was clicked. Otherwise, it's undefined.
     */
    relatedTarget?: HTMLElement;
  }
}

export { Notification }
