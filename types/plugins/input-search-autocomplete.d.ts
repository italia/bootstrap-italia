import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { InputLabel } from './input-label'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';


declare class InputSearch extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<InputSearch>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<
    InputSearch, Partial<InputSearch.Options>
  >;

  constructor(element: HTMLElement, config?: Partial<InputSearch.Options>)

  _config: any
  _items: any[]
  _autocompleteElement: HTMLUListElement
  _label: InputLabel

  search(): void

  _getConfig(config: any): any

  _getItems(): any

  _init(): void

  _bindEvents(): void

  _createOption(link: any, text: any, label: any, icon: any): HTMLLIElement
}

declare namespace InputSearch {

  interface Options {
    /**
     * Autocomplete elements
     *
     * @default []
     */
    autocomplete: any[],
  }

}

export { InputSearch }
