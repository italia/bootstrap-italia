import { Alert as BSAlert } from 'bootstrap'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class Alert extends BSAlert {
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Alert>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<Alert>;

}

export { Alert }
