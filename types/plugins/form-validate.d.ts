import JustValidate from 'just-validate'

export class FormValidate {
  constructor(selector: HTMLElement, config: any)

  formSelector: any
  target: any
  validate: JustValidate
  config: {
    errorFieldCssClass: string
    errorLabelCssClass: string
  } & import('just-validate/dist/modules/interfaces').GlobalConfigInterface
  formItems: any[]

  init(): void

  /**
   * Adds ARIA attributes to the input and to the error message
   * @param {Object} target - the input element
   */
  onInputError(target: any): void

  /**
   * Removes input ARIA attributes
   * @param {Object} target - the input element
   */
  onInputErrorRemove(target: any): void

  /**
   * Adds ARIA attributes to the fieldset and to the error message
   * @param {Object} target - the fieldset element
   */
  onFieldsetError(target: any): void

  /**
   * Removes the fieldset ARIA attributes
   * @param {Object} target - the fieldset element
   */
  onFieldsetErrorRemove(target: any): void

  /**
   * get the error messages for the target
   * @param {Object} target - target node
   */
  getErrorMessages(target: any): any
}

/**
 * Validate a custom autocomplete select
 * @param {string} inputId - the input id
 * @param {Object} config - { required }
 */
export function ValidatorSelectAutocomplete(inputId: string, config?: any): (value: any, fields: any) => boolean
