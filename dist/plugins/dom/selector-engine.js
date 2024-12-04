import { isDisabled, isVisible } from '../util/index.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * This a fork of Bootstrap: Initial license and original file name below
 * Bootstrap (v5.2.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * Constants
 */

const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector))
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector)
  },

  children(element, selector) {
    return [].concat(...element.children).filter((child) => child.matches(selector))
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);

    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }

    return parents
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous]
      }

      previous = previous.previousElementSibling;
    }

    return []
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next]
      }

      next = next.nextElementSibling;
    }

    return []
  },

  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]']
      .map((selector) => `${selector}:not([tabindex^="-"])`)
      .join(',');

    return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el))
  },
};

export { SelectorEngine as default };
//# sourceMappingURL=selector-engine.js.map
