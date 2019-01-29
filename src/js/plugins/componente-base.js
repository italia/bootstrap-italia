const ComponenteBase = ($ => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = `componenteBase`
  const VERSION = `1.0.0`
  const DATA_KEY = `bs.componente-base`
  const EVENT_KEY = `.${DATA_KEY}` // '.bs.componente-base'
  const DATA_API_KEY = `.data-api`
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Event = {
    CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`, // 'click.bs.componente-base.data-api'
  }

  const Selector = {
    COMPONENTE_BASE: '.componente-base',
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ComponenteBase {
    constructor(element) {
      this._element = element
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // Public

    publicFunction(element) {
      console.log($(element).data('value'), ComponenteBase.VERSION)
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function() {
        const $element = $(this)
        let data = $element.data(DATA_KEY)

        if (!data) {
          data = new ComponenteBase(this)
          $element.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }
          data[config](this)
        }
      })
    }

    static _handleConsole(baseInstance) {
      return function(event) {
        if (event) {
          event.preventDefault()
        }

        baseInstance.publicFunction(this)
      }
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(
    Event.CLICK_DATA_API,
    Selector.COMPONENTE_BASE,
    ComponenteBase._handleConsole(new ComponenteBase())
  )

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ComponenteBase._jQueryInterface
  $.fn[NAME].Constructor = ComponenteBase
  $.fn[NAME].noConflict = function() {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ComponenteBase._jQueryInterface
  }

  return ComponenteBase
})($)

export default ComponenteBase
