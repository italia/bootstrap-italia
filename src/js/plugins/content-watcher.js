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
    this.contentCounter = targetNode.querySelectorAll(this.contentSelector).length

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
        let currContentCounter = mutation.target.querySelectorAll(this.contentSelector).length
        if (currContentCounter > this.contentCounter) {
          this.contentCounter = currContentCounter
          this.contentAddedCallback()
        } else if (currContentCounter < this.contentCounter) {
          this.contentCounter = currContentCounter
          this.contentRemovedCallback()
        }
      }
    }
  }
}

export default ContentWatcher
