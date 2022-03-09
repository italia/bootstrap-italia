/**
 * Mutation Content Class Observer Object
 */

class ContentWatcher {
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

export default ContentWatcher
