import accessibleAutocomplete from 'accessible-autocomplete';
import BaseComponent from 'bootstrap/js/src/base-component.js';

const NAME = 'selectautocomplete';

function onClassChange(element, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        callback(mutation.target);
      }
    });
  });
  observer.observe(element, { attributes: true });
  return observer.disconnect
}

class SelectAutocomplete extends BaseComponent {
  constructor(element, config) {
    super(element);
    this._hasFormControl = element.classList.contains('form-control');
    this.element_original_id = this._element.id;
    this._config = config;
    this._enhance();
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Private
  _enhance() {
    accessibleAutocomplete.enhanceSelectElement(Object.assign({}, { selectElement: this._element }, this._config));
    setTimeout(() => {
      if (this._hasFormControl) {
        const inputField = document.getElementById(this.element_original_id);
        inputField.classList.add('form-control');
        onClassChange(inputField, (node) => {
          if (!node.classList.contains('form-control')) {
            node.classList.add('form-control');
          }
        });
      }
    }, 100);
  }
}

export { SelectAutocomplete as default };
//# sourceMappingURL=select-autocomplete.js.map
