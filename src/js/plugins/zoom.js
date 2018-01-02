import Util from './util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): zoom.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Zoom = (($) => {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'zoom'
  const DATA_KEY            = 'bs.zoom'
  const VERSION             = 'v4.0.0-beta.3'
  const DATA_API            = '[data-action="zoom"]'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150
  const ZOOM_OFFSET = 80

  const Event = {
    CLICK: `click${EVENT_KEY}`,
    SCROLL: `scroll${EVENT_KEY}`,
    KEYUP: `keyup${EVENT_KEY}`,
    TOUCHSTART: `touchstart${EVENT_KEY}`,
    TOUCHMOVE: `touchmove${EVENT_KEY}`,
  }

  const ClassName = {
    ZOOM_OVERLAY_OPEN          : 'zoom-overlay-open',
    ZOOM_OVERLAY_TRANSITIONING : 'zoom-overlay-transitioning',
    ZOOM_OVERLAY               : 'zoom-overlay',
    ZOOM_IMG_WRAP              : 'zoom-img-wrap',
    ZOOM_IMG                   : 'zoom-img'
  }

  const Data = {
    ZOOM     : 'zoom',
    ZOOM_OUT : 'zoom-out'
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

   class ZoomService {

     constructor(element, config) {
       this._activeZoom            = null
       this._initialScrollPosition = null
       this._initialTouchPosition  = null
       this._touchMoveListener     = null

       this._$document = $(document)
       this._$window   = $(window)
       this._$body     = $(document.body)

       this._boundClick = $.proxy(this._clickHandler, this)
     }

     // getters

     static get VERSION() {
       return VERSION
     }

     static get Default() {
       return Default
     }

     _zoom(e) {
       var target = e.target

       if (!target || target.tagName !== 'IMG') return

       if (this._$body.hasClass(ClassName.ZOOM_OVERLAY_OPEN)) return

       if (e.metaKey || e.ctrlKey) {
         return window.open((e.target.getAttribute('data-original') || e.target.src), '_blank')
       }

       if (target.width >= ($(window).width() - ZOOM_OFFSET)) return

       this._activeZoomClose(true)

       this._activeZoom = new Zoom(target)
       this._activeZoom.zoomImage()

       // todo(fat): probably worth throttling this
       this._$window.on(Event.SCROLL, $.proxy(this._scrollHandler, this))

       this._$document.on(Event.KEYUP, $.proxy(this._keyHandler, this))
       this._$document.on(Event.TOUCHSTART, $.proxy(this._touchStart, this))

       // we use a capturing phase here to prevent unintended js events
       // sadly no useCapture in jquery api (http://bugs.jquery.com/ticket/14953)
       if (document.addEventListener) {
         document.addEventListener('click', this._boundClick, true)
       } else {
         document.attachEvent('onclick', this._boundClick, true)
       }

       if ('bubbles' in e) {
         if (e.bubbles) e.stopPropagation()
       } else {
         // Internet Explorer before version 9
         e.cancelBubble = true
       }
     }

     _activeZoomClose(forceDispose) {
       if (!this._activeZoom) return

       if (forceDispose) {
         this._activeZoom.dispose()
       } else {
         this._activeZoom.close()
       }

       this._$window.off(EVENT_KEY)
       this._$document.off(EVENT_KEY)

       document.removeEventListener('click', this._boundClick, true)

       this._activeZoom = null
     }

     _scrollHandler(e) {
       if (this._initialScrollPosition === null) this._initialScrollPosition = $(window).scrollTop()
       var deltaY = this._initialScrollPosition - $(window).scrollTop()
       if (Math.abs(deltaY) >= 40) this._activeZoomClose()
     }

     _keyHandler(e) {
       if (e.keyCode === 27) this._activeZoomClose()
     }

     _clickHandler(e) {
       if (e.preventDefault) e.preventDefault()
       else event.returnValue = false

       if ('bubbles' in e) {
         if (e.bubbles) e.stopPropagation()
       } else {
         // Internet Explorer before version 9
         e.cancelBubble = true
       }

       this._activeZoomClose()
     }

     _touchStart(e) {
       this._initialTouchPosition = e.touches[0].pageY
       $(e.target).on(Event.TOUCHMOVE, $.proxy(this._touchMove, this))
     }

     _touchMove(e) {
       if (Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10) {
         this._activeZoomClose()
         $(e.target).off(Event.TOUCHMOVE)
       }
     }

     listen() {
       this._$body.on(Event.CLICK, DATA_API, $.proxy(this._zoom, this))
     }
   }

   class Zoom {

     constructor(img) {
       this._fullHeight      = null
       this._fullWidth       = null
       this._overlay         = null
       this._targetImageWrap = null

       this._targetImage = img

       this._$body = $(document.body)
     }

     zoomImage() {
       var img = document.createElement('img')
       img.onload = $.proxy(function () {
         this._fullHeight = Number(img.height)
         this._fullWidth = Number(img.width)
         this._zoomOriginal()
       }, this)
       img.src = this._targetImage.src
     }

     _zoomOriginal() {
       this._targetImageWrap           = document.createElement('div')
       this._targetImageWrap.className = ClassName.ZOOM_IMG_WRAP

       this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage)
       this._targetImageWrap.appendChild(this._targetImage)

       $(this._targetImage)
         .addClass(ClassName.ZOOM_IMG)
         .attr('data-action', Data.ZOOM_OUT)

       this._overlay           = document.createElement('div')
       this._overlay.className = ClassName.ZOOM_OVERLAY

       document.body.appendChild(this._overlay)

       this._calculateZoom()
       this._triggerAnimation()
     }

     _calculateZoom() {
       this._targetImage.offsetWidth // repaint before animating

       var originalFullImageWidth  = this._fullWidth
       var originalFullImageHeight = this._fullHeight

       var scrollTop = $(window).scrollTop()

       var maxScaleFactor = originalFullImageWidth / this._targetImage.width

       var viewportHeight = ($(window).height() - ZOOM_OFFSET)
       var viewportWidth  = ($(window).width() - ZOOM_OFFSET)

       var imageAspectRatio    = originalFullImageWidth / originalFullImageHeight
       var viewportAspectRatio = viewportWidth / viewportHeight

       if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
         this._imgScaleFactor = maxScaleFactor

       } else if (imageAspectRatio < viewportAspectRatio) {
         this._imgScaleFactor = (viewportHeight / originalFullImageHeight) * maxScaleFactor

       } else {
         this._imgScaleFactor = (viewportWidth / originalFullImageWidth) * maxScaleFactor
       }
     }

     _triggerAnimation() {
       this._targetImage.offsetWidth // repaint before animating

       var imageOffset = $(this._targetImage).offset()
       var scrollTop   = $(window).scrollTop()

       var viewportY = scrollTop + ($(window).height() / 2)
       var viewportX = ($(window).width() / 2)

       var imageCenterY = imageOffset.top + (this._targetImage.height / 2)
       var imageCenterX = imageOffset.left + (this._targetImage.width / 2)

       this._translateY = viewportY - imageCenterY
       this._translateX = viewportX - imageCenterX

       var targetTransform = 'scale(' + this._imgScaleFactor + ')'
       var imageWrapTransform = 'translate(' + this._translateX + 'px, ' + this._translateY + 'px)'

       if (!Util.supportsTransitionEnd()) {
         imageWrapTransform += ' translateZ(0)'
       }

       $(this._targetImage)
         .css({
           '-webkit-transform': targetTransform,
               '-ms-transform': targetTransform,
                   'transform': targetTransform
         })

       $(this._targetImageWrap)
         .css({
           '-webkit-transform': imageWrapTransform,
               '-ms-transform': imageWrapTransform,
                   'transform': imageWrapTransform
         })

       this._$body.addClass(ClassName.ZOOM_OVERLAY_OPEN)
     }

     close() {
       this._$body
         .removeClass(ClassName.ZOOM_OVERLAY_OPEN)
         .addClass(ClassName.ZOOM_OVERLAY_TRANSITIONING)

       // we use setStyle here so that the correct vender prefix for transform is used
       $(this._targetImage)
         .css({
           '-webkit-transform': '',
               '-ms-transform': '',
                   'transform': ''
         })

       $(this._targetImageWrap)
         .css({
           '-webkit-transform': '',
               '-ms-transform': '',
                   'transform': ''
         })

       if (!Util.supportsTransitionEnd()) {
         return this.dispose()
       }

       $(this._targetImage)
         .one(Util.TRANSITION_END, $.proxy(this.dispose, this))
         .emulateTransitionEnd(300)
     }

     dispose() {
       if (this._targetImageWrap && this._targetImageWrap.parentNode) {
         $(this._targetImage)
           .removeClass(ClassName.ZOOM_IMG)
           .attr('data-action', Data.ZOOM)

         this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap)
         this._overlay.parentNode.removeChild(this._overlay)

         this._$body.removeClass(ClassName.ZOOM_OVERLAY_TRANSITIONING)
       }
     }
   }

  // wait for dom ready (incase script included before body)
  $(function () {
    new ZoomService().listen()
  })

})(jQuery)

export default Zoom
