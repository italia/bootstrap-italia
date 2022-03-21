/**
 * Mutation CSS Class Observer Object
 */
//https://stackoverflow.com/a/53914092

class CssClassObserver {
  constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback, ignoreToggle) {
    this.targetNode = targetNode
    this.classToWatch = classToWatch
    this.classAddedCallback = classAddedCallback
    this.classRemovedCallback = classRemovedCallback
    this.observer = null
    this.lastClassState = targetNode.classList.contains(this.classToWatch)
    this.ignoreToggle = !!ignoreToggle

    this.init()
  }

  init() {
    this.observer = new MutationObserver((mutationsList) => this.mutationCallback(mutationsList))
    this.observe()
  }

  observe() {
    this.observer.observe(this.targetNode, { attributes: true })
  }

  disconnect() {
    this.observer.disconnect()
  }

  mutationCallback(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        let currentClassState = mutation.target.classList.contains(this.classToWatch)
        if (this.ignoreToggle || this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState
          if (currentClassState) {
            this.classAddedCallback()
          } else {
            this.classRemovedCallback()
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
    this.targetNode = targetNode
    this.contentSelector = contentSelector
    this.contentAddedCallback = contentAddedCallback
    this.contentRemovedCallback = contentRemovedCallback
    this.observer = null

    this.init()
  }

  init() {
    this.observer = new MutationObserver((mutationsList) => this.mutationCallback(mutationsList))
    this.observe()
  }

  observe() {
    this.observer.observe(this.targetNode, { childList: true })
  }

  disconnect() {
    this.observer.disconnect()
  }

  mutationCallback(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.matches(this.contentSelector)) {
            this.contentAddedCallback()
          }
        })
        mutation.removedNodes.forEach((node) => {
          if (node.matches(this.contentSelector)) {
            this.contentRemovedCallback()
          }
        })
      }
    }
  }
}

export { CssClassObserver, ContentObserver }
