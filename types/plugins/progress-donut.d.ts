import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class ProgressDonut extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<ProgressDonut>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    ProgressDonut, Partial<ProgressDonut.Options>
  >;
  constructor(element: HTMLElement, config?: Partial<ProgressDonut.Options>)

  _config: any
  _bar: any

  set(progess: any): void

  dispose(): void

  _getConfig(config: any): any

  _getStepCallback(): (state: any, circle: any) => void

  _init(): void
}

declare namespace ProgressDonut {

  interface Options {
    /**
     * Main color
     *
     * @default '#5C6F82'
     */
    color: string;
    /**
     * Trail color
     *
     * @default '#D9DADB'
     */
    trailColor: string;
    /**
     * Stroke width
     *
     * @default 24
     */
    strokeWidth: number;
    /**
     * Trail width
     *
     * @default 12
     */
    trailWidth: number;
    /**
     * Duration
     *
     * @default 1400
     */
    duration: number;
    /**
     * Value
     *
     * @default 0
     */
    value: number;
    /**
     * Animate
     *
     * @default true
     */
    animate: boolean;
    /**
     * Scroll easing
     *
     * @default 'easeInOut'
     */
    easing: string;
  }

}

export { ProgressDonut }
