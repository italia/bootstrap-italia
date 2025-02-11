import { ScrollSpy as BSScrollspy } from 'bootstrap'
import { type GetInstanceFactory, type GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class ScrollSpy extends BSScrollspy {
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<ScrollSpy>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    ScrollSpy, Partial<BSScrollspy.Options>
  >;
}

export { ScrollSpy }
