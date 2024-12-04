/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Mutation CSS Class Observer Object
 */
//https://stackoverflow.com/a/53914092

class CssClassObserver {
  constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback, ignoreToggle) {
    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetNode.classList.contains(this.classToWatch);
    this.ignoreToggle = !!ignoreToggle;

    this.init();
  }

  init() {
    this.observer = new MutationObserver((mutationsList) => this.mutationCallback(mutationsList));
    this.observe();
  }

  observe() {
    this.observer.observe(this.targetNode, { attributes: true });
  }

  disconnect() {
    this.observer.disconnect();
  }

  mutationCallback(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        let currentClassState = mutation.target.classList.contains(this.classToWatch);
        if (this.ignoreToggle || this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            if (typeof this.classAddedCallback === 'function') {
              this.classAddedCallback();
            }
          } else if (typeof this.classRemovedCallback === 'function') {
            this.classRemovedCallback();
          }
        }
      }
    }
  }
}

/**
 * Mutation Content Class Observer Object
 */

class ContentObserver {
  constructor(targetNode, contentSelector, contentAddedCallback, contentRemovedCallback) {
    this.targetNode = targetNode;
    this.contentSelector = contentSelector;
    this.contentAddedCallback = contentAddedCallback;
    this.contentRemovedCallback = contentRemovedCallback;
    this.observer = null;

    this.init();
  }

  //public

  init() {
    this.observer = new MutationObserver((mutationsList) => this.mutationCallback(mutationsList));
    this.observe();
  }

  observe() {
    this.observer.observe(this.targetNode, { childList: true, subtree: true });
  }

  disconnect() {
    this.observer.disconnect();
  }

  mutationCallback(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          this._callbackExec(node);
        });
        mutation.removedNodes.forEach((node) => {
          this._callbackExec(node, true);
        });
      }
    }
  }

  //private
  _callbackExec(node, actionRemove) {
    const foundNodes = node.matches && node.matches(this.contentSelector) ? [node] : node.querySelectorAll ? node.querySelectorAll(this.contentSelector) : null;
    const callback =
      actionRemove && typeof this.contentRemovedCallback === 'function'
        ? this.contentRemovedCallback
        : typeof this.contentAddedCallback === 'function'
          ? this.contentAddedCallback
          : null;
    if (foundNodes && callback) {
      foundNodes.forEach((node) => callback(node));
    }
  }
}

export { ContentObserver, CssClassObserver };
//# sourceMappingURL=observer.js.map
