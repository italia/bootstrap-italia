import { Toast as BSToast } from 'bootstrap'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class Toast extends BSToast {
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Toast>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    Toast, Partial<BSToast.Options>
  >;
}

export { Toast }
