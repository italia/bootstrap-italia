import { v4 as uuidv4 } from 'uuid'

let ticking = false
let callbacks = []

class ScrollCallback {
  constructor(id, callback) {
    this.id = id
    this._callback = callback
  }

  //Public
  dispose() {
    removeCallBack(this._id)
  }

  //Private
  _execute(data) {
    this._callback(data)
  }
}

const removeCallBack = (id) => {
  callbacks.filter((cb) => cb.id === id)
}

const DocumentScrollEventHandler = {
  add: (callback) => {
    if (typeof callback === 'function') {
      const newCb = new ScrollCallback(uuidv4(), callback)
      callbacks.push({
        id: newCb.id,
        cb: newCb,
      })
      return newCb
    }

    console.error('[DocumentScrollEventHandler] the provided data has to be of type function')
    return null
  },
}

document.addEventListener('scroll', (evt) => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      callbacks.forEach((cbObj) => cbObj.cb._execute(evt))
      ticking = false
    })

    ticking = true
  }
})

export default DocumentScrollEventHandler
