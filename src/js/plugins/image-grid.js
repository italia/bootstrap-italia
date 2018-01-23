import Util from './util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): ImageGrid.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ImageGrid = (($) => {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'imageGrid'
  const DATA_KEY            = `bs.image-grid`
  const VERSION             = 'v4.0.0'
  const DATA_API            = '[data-grid="images"]'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Default = {
    padding      : 10,
    targetHeight : 300,
    display      : 'inline-block'
  }

  const Event = {
    RESIZE : `resize${EVENT_KEY}`
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ImageGrid {

    constructor(element, config) {
      this._cleanWhitespace(element)

      this._row        = 0
      this._rownum     = 1
      this._elements   = []
      this._element    = element
      this._albumWidth = $(element).width()
      this._images     = $(element).children()
      this._config     = $.extend({}, Default, config)

      $(window).on(Event.RESIZE, $.proxy(this._handleResize, this))

      this._processImages()
    }

    // public

    dispose() {
      $(window).off(EVENT_KEY)
      $.removeData(this._element, DATA_KEY)

      this._row        = null
      this._rownum     =null
      this._elements   = null
      this._element    = null
      this._albumWidth = null
      this._images     = null
      this._config     = null
    }

    // private

    _handleResize() {
      this._row = 0
      this._rownum     = 1
      this._elements   = []
      this._albumWidth = $(this._element).width()
      this._images     = $(this._element).children()
      this._processImages()
    }

    _processImages() {
      var that = this
      this._images.each(function (index) {
        var $this = $(this)
        var $img  = $this.is('img') ? $this : $this.find('img')

        var w = typeof $img.data('width') !== 'undefined' ?
          $img.data('width') : $img.width()

        var h = typeof $img.data('height') !== 'undefined' ?
          $img.data('height') : $img.height()

        $img.data('width',  w)
        $img.data('height', h)

        var idealW = Math.ceil(w / h * that._config.targetHeight)
        var idealH = Math.ceil(that._config.targetHeight)

        that._elements.push([this, idealW, idealH])

        that._row += idealW + that._config.padding

        if (that._row > that._albumWidth && that._elements.length) {
          that._resizeRow(that._row - that._config.padding)

          that._row      = 0
          that._elements = []
          that._rownum  += 1
        }

        if (that._images.length - 1 == index && that._elements.length) {
          that._resizeRow(that._row)

          that._row      = 0
          that._elements = []
          that._rownum  += 1
        }
      })
    }

    _resizeRow(row) {
      var imageExtras        = (this._config.padding * (this._elements.length - 1))
      var albumWidthAdjusted = this._albumWidth - imageExtras
      var overPercent        = albumWidthAdjusted / (row - imageExtras)
      var trackWidth         = imageExtras
      var lastRow            = row < this._albumWidth

      for (var i = 0; i < this._elements.length; i++) {
        var $obj      = $(this._elements[i][0])
        var fw        = Math.floor(this._elements[i][1] * overPercent)
        var fh        = Math.floor(this._elements[i][2] * overPercent)
        var isNotLast = i < (this._elements.length - 1)

        trackWidth += fw

        if (!isNotLast && trackWidth < this._albumWidth) {
          fw += (this._albumWidth - trackWidth)
        }

        fw--

        var $img = $obj.is('img') ? $obj : $obj.find('img')

        $img.width(fw)
        $img.height(fh)

        this._applyModifications($obj, isNotLast)
      }
    }

    _applyModifications($obj, isNotLast) {
      var css = {
        'margin-bottom'  : this._config.padding + 'px',
        'margin-right'   : (isNotLast) ? this._config.padding + 'px' : 0,
        'display'        : this._config.display,
        'vertical-align' : 'bottom'
      }
      $obj.css(css)
    }

    _cleanWhitespace(element) {
      var textNodes = $(element)
        .contents()
        .filter(function() {
          return (this.nodeType == 3 && !/\S/.test(this.nodeValue))
        })
        .remove()
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        var $this   = $(this)
        var data    = $this.data(DATA_KEY)
        var config = $.extend({}, Default, $this.data(), typeof config === 'object' && config)

        if (!data) $this.data(DATA_KEY, (data = new ImageGrid(this, config)))
        if (typeof config === 'string') data[config].call($this)
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = ImageGrid._jQueryInterface
  $.fn[NAME].Constructor = ImageGrid
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Enter._jQueryInterface
  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(function () {
    $(DATA_API).imageGrid()
  })

  return ImageGrid

})(jQuery)

export default ImageGrid
