/**
 * Mutation CSS Class Observer Object
 */
//https://stackoverflow.com/a/53914092

class ClassWatcher {
  constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
    this.targetNode = targetNode
    this.classToWatch = classToWatch
    this.classAddedCallback = classAddedCallback
    this.classRemovedCallback = classRemovedCallback
    this.observer = null
    this.lastClassState = targetNode.classList.contains(this.classToWatch)

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
        if (this.lastClassState !== currentClassState) {
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

export default ClassWatcher
