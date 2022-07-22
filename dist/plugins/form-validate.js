import JustValidate from 'just-validate';
import { CssClassObserver, ContentObserver } from './util/observer.js';

const CONFIG_DEFAULT = {
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'just-validate-error-label',
};

const NAME = 'justvalidatebi';

const CLASS_NAME_SRONLY = 'sr-only-justvalidate-bi';

const SELECTOR_SPAN_SRONLY = `.${CLASS_NAME_SRONLY}`;

class FormValidate {
  constructor(selector, config) {
    this.formSelector = selector;
    this.target = document.querySelector(selector);
    this.validate = new JustValidate(selector, config);
    this.config = Object.assign({}, CONFIG_DEFAULT, this.validate.globalConfig);
    this.formItems = [];

    this.init();

    return this.validate
  }

  init() {
    const inputs = this.target.querySelectorAll('input, select');
    inputs.forEach((input) => {
      const watcher = new CssClassObserver(
        input,
        this.config.errorFieldCssClass,
        () => this.onInputError(input),
        () => this.onInputErrorRemove(input),
        true
      );
      if (!input.id) {
        input.setAttribute('id', NAME + '-input-' + Math.random());
      }
      this.formItems.push({
        item: input,
        watcher,
      });
    });
    const fieldsets = this.target.querySelectorAll('fieldset');
    fieldsets.forEach((field) => {
      const inputs = field.querySelectorAll('input[type=radio],input[type=checkbox]');
      if (inputs.length > 0) {
        const watcher = new ContentObserver(
          field,
          '.' + this.config.errorLabelCssClass,
          () => this.onFieldsetError(field),
          () => this.onFieldsetErrorRemove(field)
        );
        if (!field.id) {
          field.setAttribute('id', NAME + '-fieldset-' + Math.random());
        }
        this.formItems.push({
          item: field,
          watcher,
        });
      }
    });
  }

  /**
   * Adds ARIA attributes to the input and to the error message
   * @param {Object} target - the input element
   */
  onInputError(target) {
    const errElements = this.getErrorMessages(target);
    const errIds = [];
    errElements.forEach((el, idx) => {
      const id = target.id + '-error-' + idx;
      el.setAttribute('id', id);
      errIds.push(id);
    });

    if (errIds.length > 0) {
      target.setAttribute('aria-describedby', errIds.join(' '));
      target.setAttribute('aria-invalid', 'true');
    } /*else {
      console.warn('[JustValidateIt] the element is invalid but no error message was found', { target })
    }*/
  }
  /**
   * Removes input ARIA attributes
   * @param {Object} target - the input element
   */
  onInputErrorRemove(target) {
    target.removeAttribute('aria-describedby');
    target.setAttribute('aria-invalid', 'false');
  }
  /**
   * Adds ARIA attributes to the fieldset and to the error message
   * @param {Object} target - the fieldset element
   */
  onFieldsetError(target) {
    const errElements = this.getErrorMessages(target);
    const errIds = [];
    const errTexts = [];
    errElements.forEach((el, idx) => {
      const id = target.id + '-error-' + idx;
      el.setAttribute('id', id);
      errIds.push(id);
      errTexts.push(el.textContent);
    });

    if (errIds.length > 0) {
      const legend = target.querySelector('legend');
      if (legend) {
        legend.setAttribute('aria-describedby', errIds.join(' '));
        legend.setAttribute('aria-invalid', 'true');

        //not needed anymore
        /*const span = document.createElement('span')
        span.classList.add('sr-only')
        span.classList.add(CLASS_NAME_SRONLY)
        span.textContent = errTexts.join(' ')
        legend.append(span)*/
      }
    } /*else {
      console.warn('[JustValidateIt] the element is invalid but no error message was found', { target })
    }*/
  }
  /**
   * Removes the fieldset ARIA attributes
   * @param {Object} target - the fieldset element
   */
  onFieldsetErrorRemove(target) {
    const legend = target.querySelector('legend');
    if (legend) {
      legend.removeAttribute('aria-describedby');
      legend.setAttribute('aria-invalid', 'false');
      const span = legend.querySelector(SELECTOR_SPAN_SRONLY);
      if (span) {
        span.remove();
      }
    }
  }

  /**
   * get the error messages for the target
   * @param {Object} target - target node
   */
  getErrorMessages(target) {
    let parent = target;
    let messages = parent.querySelectorAll('.' + this.config.errorLabelCssClass);
    while (parent != null && messages.length === 0) {
      parent = parent.parentNode;
      messages = parent.querySelectorAll('.' + this.config.errorLabelCssClass);
    }
    return messages
  }
}

//Plugins
/**
 * Validate a custom autocomplete select
 * @param {string} inputId - the input id
 * @param {Object} config - { required }
 */
const ValidatorSelectAutocomplete = (inputId, config = {}) => {
  return (value, fields) => {
    let result = false;
    const field = fields[inputId];
    if (field) {
      if (!config.required && !value) {
        result = true;
      } else {
        document
          .querySelector('#' + field.elem.id + '-select')
          .querySelectorAll('option')
          .forEach((option) => {
            if (option.text === value) {
              result = true;
            }
          });
      }
    } else {
      throw new Error('ValidatorSelectAutocomplete: ' + inputId + ' not found as form field')
    }

    return result
  }
};

export { FormValidate, ValidatorSelectAutocomplete };
//# sourceMappingURL=form-validate.js.map
