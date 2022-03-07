import BaseComponent from 'bootstrap/js/src/base-component.js'

const NAME = 'dimmer'

const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'

class Dimmer extends BaseComponent {
  constructor(element) {
    super(element)

    this._isShown = this._element.classList.contains(CLASS_NAME_SHOW)
    this._isTransitioning = false
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public

  show() {
    if (this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = true

    if (this._isAnimated()) {
      this._isTransitioning = true
    }

    this._showElement()
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return
    }

    this._isShown = false
    const isAnimated = this._isAnimated()

    if (isAnimated) {
      this._isTransitioning = true
    }

    this._element.classList.remove(CLASS_NAME_SHOW)

    this._queueCallback(() => this._hideElement(), this._element, isAnimated)
  }

  //Private

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE)
  }

  _showElement() {
    const isAnimated = this._isAnimated()

    this._element.style.display = 'block'
    this._element.removeAttribute('aria-hidden')
    //this._element.setAttribute('aria-modal', true)
    //this._element.setAttribute('role', 'dialog')

    this._element.classList.add(CLASS_NAME_SHOW)

    const transitionComplete = () => {
      //
    }

    this._queueCallback(transitionComplete, this._element, isAnimated)
  }

  _hideElement() {
    this._element.style.display = 'none'
    this._element.setAttribute('aria-hidden', true)
    //this._element.removeAttribute('aria-modal')
    //this._element.removeAttribute('role')
    this._isTransitioning = false
  }
}

export default Dimmer
