import JustValidate from 'just-validate'
import ClassWatcher from './class-watcher'
import ContentWatcher from './content-watcher'

const SELECTOR = {
  tag: 'form[data-jv-ext-access]'
}

const CONFIG_DEFAULT = {
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'just-validate-error-label'
}

class JustValidateIt {

  constructor(selector, config) {
    this.formSelector = selector
    this.target = document.querySelector(selector)
    this.validate = new JustValidate(selector, config)
    this.config = Object.assign({}, CONFIG_DEFAULT, this.validate.globalConfig)
    this.formItems = []

    this.init()

    return this.validate
  }

  init() {
    const inputs = this.target.querySelectorAll('input, select')
    inputs.forEach(input => {
      const watcher = new ClassWatcher(input, this.config.errorFieldCssClass, () => this.onInputError(input), () => this.onInputErrorRemove(input), true)
      if (!input.id) {
        input.setAttribute('id', 'justvalidate-input-' + Math.random())
      }
      this.formItems.push({
        item: input,
        watcher
      })
    })
    const fieldsets = this.target.querySelectorAll('fieldset')
    fieldsets.forEach(field => {
      const inputs = field.querySelectorAll('input[type=radio],input[type=checkbox]')
      if (inputs.length > 0) {
        const watcher = new ContentWatcher(field, '.' + this.config.errorLabelCssClass, () => this.onFieldsetError(field), () => this.onFieldsetErrorRemove(field))
        if (!field.id) {
          field.setAttribute('id', 'justvalidate-fieldset-' + Math.random())
        }
        this.formItems.push({
          item: field,
          watcher
        })
      }
    })
  }

  /**
   * Decorazione input e messaggio di errore con attributi ARIA
   * @param {Object} target - l'elemento input
   */
  onInputError(target) {
    const errElements = target.parentNode.querySelectorAll('.' + this.config.errorLabelCssClass)
    const errIds = []
    errElements.forEach((el, idx) => {
      const id = target.id + '-error-' + idx
      el.setAttribute('id', id)
      errIds.push(id)
    })

    if (errIds.length > 0) {
      target.setAttribute('aria-describedby', errIds.join(' '))
      target.setAttribute('aria-invalid', 'true')
    } else {
      console.warn('[JustValidateIt] the element is invalid but no error message was found', { target })
    }
  }
  /**
   * Rimozione degli attributi ARIA dall'input
   * @param {Object} target - l'elemento input
   */
  onInputErrorRemove(target) {
    target.removeAttribute('aria-describedby')
    target.setAttribute('aria-invalid', 'false')
  }
  /**
   * Decorazione fieldset e messaggio di errore con attributi ARIA
   * @param {Object} target - l'elemento fieldset
   */
   onFieldsetError(target) {
    const errElements = target.querySelectorAll('.' + this.config.errorLabelCssClass)
    const errIds = []
    errElements.forEach((el, idx) => {
      const id = target.id + '-error-' + idx
      el.setAttribute('id', id)
      errIds.push(id)
    })

    if (errIds.length > 0) {
      const legend = target.querySelector('legend')
      if (legend) {
        legend.setAttribute('aria-describedby', errIds.join(' '))
        legend.setAttribute('aria-invalid', 'true')
      }
    } else {
      console.warn('[JustValidateIt] the element is invalid but no error message was found', { target })
    }
  }
  /**
   * Rimozione degli attributi ARIA dal fieldset
   * @param {Object} target - l'elemento fieldset
   */
  onFieldsetErrorRemove(target) {
    const legend = target.querySelector('legend')
    if (legend) {
      legend.removeAttribute('aria-describedby')
      legend.setAttribute('aria-invalid', 'false')
    }
  }

}

window.JustValidateIt = JustValidateIt

export default JustValidateIt
