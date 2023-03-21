import { default as BaseComponent } from 'bootstrap/js/dist/base-component'
import { GetInstanceFactory, GetOrCreateInstanceFactory } from 'bootstrap/js/dist/base-component';

declare class Transfer extends BaseComponent {
  static get NAME(): string
  /**
   * Static method which allows you to get the instance associated
   * with a DOM element.
   */
  static getInstance: GetInstanceFactory<Transfer>;
  /**
   * Static method which allows you to get the modal instance associated with
   * a DOM element, or create a new one in case it wasn’t initialised
   */
  static getOrCreateInstance: GetOrCreateInstanceFactory<Transfer>;

  constructor(element: HTMLElement)

  _addBtnElement: any
  _invBtnElement: any
  _resetBtnElement: any
  _listDefault: {
    source: any
    target: any
  }

  _bindEvents(): void

  _disableElement(element: any): void

  _enableElement(element: any): void

  _getScopeData(scope: any): {
    scope: any
    list: any
    listChecked: any
    head: any
    inputHead: any
    labelNumHead: any
    group: any
  }

  _checkList(scopeElControl: any): void

  _checkListHeader(scopeElControl: any): void

  _addItems(inverse: any): void

  _resetAll(): void
}

export { Transfer }
