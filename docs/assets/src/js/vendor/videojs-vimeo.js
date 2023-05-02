let cssInjected = false

const VIMEO_OPTION_KEYS = [
  'autoplay',
  'background',
  'byline',
  'color',
  'controls',
  'height',
  'keyboard',
  'loop',
  'maxheight',
  'maxwidth',
  'muted',
  'playsinline',
  'portrait',
  'quality',
  'responsive',
  'speed',
  'texttrack',
  'title',
  'transparent',
  'width',
]

// Since the iframe can't be touched using Vimeo's way of embedding,
// let's add a new styling rule to have the same style as `vjs-tech`
function injectCss() {
  if (cssInjected) {
    return
  }
  cssInjected = true
  const css = `
    .vjs-vimeo iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `
  const head = document.head || document.getElementsByTagName('head')[0]

  const style = document.createElement('style')

  style.type = 'text/css'

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }

  head.appendChild(style)
}

;(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    var videojs = require('video.js')
    module.exports = factory(videojs.default || videojs)
  } else if (typeof define === 'function' && define.amd) {
    define(['videojs'], function (videojs) {
      return (root.VimeoTCH = factory(videojs))
    })
  } else {
    root.VimeoTCH = factory(root.videojs)
  }
})(this, function (videojs) {
  'use strict'

  const Tech = videojs.getTech('Tech')

  /**
   * Vimeo - Wrapper for Video Player API
   *
   * @param {Object=} options Object of option names and values
   * @param {Function=} ready Ready callback function
   * @extends Tech
   * @class Vimeo
   */
  class VimeoTCH extends Tech {
    constructor(options, ready) {
      super(options, ready)

      injectCss()
      this.setPoster(options.poster)
      this.initVimeoPlayer()
    }

    initVimeoPlayer() {
      const vimeoOptions = {
        url: this.options_.source.src,
        byline: false,
        portrait: false,
        title: false,
      }

      VIMEO_OPTION_KEYS.forEach((key) => {
        if (this.options_[key] !== undefined) {
          vimeoOptions[key] = this.options_[key]
        }
      })

      this._player = new Vimeo.Player(this.el(), vimeoOptions)
      this.initVimeoState()
      ;['play', 'pause', 'ended', 'timeupdate', 'progress', 'seeked'].forEach((e) => {
        this._player.on(e, (progress) => {
          if (this._vimeoState.progress.duration !== progress.duration) {
            this.trigger('durationchange')
          }
          this._vimeoState.progress = progress
          this.trigger(e)
        })
      })

      this._player.on('pause', () => (this._vimeoState.playing = false))
      this._player.on('play', () => {
        this._vimeoState.playing = true
        this._vimeoState.ended = false
      })
      this._player.on('ended', () => {
        this._vimeoState.playing = false
        this._vimeoState.ended = true
      })
      this._player.on('volumechange', (v) => (this._vimeoState.volume = v))
      this._player.on('error', (e) => this.trigger('error', e))

      this.triggerReady()
    }

    initVimeoState() {
      const state = (this._vimeoState = {
        ended: false,
        playing: false,
        volume: 0,
        progress: {
          seconds: 0,
          percent: 0,
          duration: 0,
        },
      })

      this._player.getCurrentTime().then((time) => (state.progress.seconds = time))
      this._player.getDuration().then((time) => (state.progress.duration = time))
      this._player.getPaused().then((paused) => (state.playing = !paused))
      this._player.getVolume().then((volume) => (state.volume = volume))
    }

    createEl() {
      const div = videojs.dom.createEl('div', {
        id: this.options_.techId,
      })

      div.style.cssText = 'width:100%;height:100%;top:0;left:0;position:absolute'
      div.className = 'vjs-vimeo'

      return div
    }

    controls() {
      return true
    }

    supportsFullScreen() {
      return true
    }

    src() {
      return this.options_.source
    }

    currentSrc() {
      return this.options_.source.src
    }

    currentTime() {
      return this._vimeoState.progress.seconds
    }

    setCurrentTime(time) {
      this._player.setCurrentTime(time)
    }

    volume() {
      return this._vimeoState.volume
    }

    setVolume(volume) {
      return this._player.setVolume(volume)
    }

    duration() {
      return this._vimeoState.progress.duration
    }

    buffered() {
      const progress = this._vimeoState.progress

      return videojs.createTimeRange(0, progress.percent * progress.duration)
    }

    paused() {
      return !this._vimeoState.playing
    }

    pause() {
      this._player.pause()
    }

    play() {
      this._player.play()
    }

    muted() {
      return this._vimeoState.volume === 0
    }

    ended() {
      return this._vimeoState.ended
    }

    playbackRate() {
      return 1
    }
  }

  VimeoTCH.prototype.featuresTimeupdateEvents = true

  VimeoTCH.isSupported = function () {
    return true
  }

  // Add Source Handler pattern functions to this tech
  Tech.withSourceHandlers(VimeoTCH)

  VimeoTCH.nativeSourceHandler = {}

  /**
   * Check if Vimeo can play the given videotype
   *
   * @param  {string} source    The mimetype to check
   * @return {string}         'maybe', or '' (empty string)
   */
  VimeoTCH.nativeSourceHandler.canPlayType = function (source) {
    if (source === 'video/vimeo') {
      return 'maybe'
    }

    return ''
  }

  /*
   * Check Vimeo can handle the source natively
   *
   * @param  {Object} source  The source object
   * @return {String}         'maybe', or '' (empty string)
   * @note: Copied over from YouTube — not sure this is relevant
   */
  VimeoTCH.nativeSourceHandler.canHandleSource = function (source) {
    if (source.type) {
      return VimeoTCH.nativeSourceHandler.canPlayType(source.type)
    } else if (source.src) {
      return VimeoTCH.nativeSourceHandler.canPlayType(source.src)
    }

    return ''
  }

  // @note: Copied over from YouTube — not sure this is relevant
  VimeoTCH.nativeSourceHandler.handleSource = function (source, tech) {
    tech.src(source.src)
  }

  // @note: Copied over from YouTube — not sure this is relevant
  VimeoTCH.nativeSourceHandler.dispose = function () {}

  VimeoTCH.registerSourceHandler(VimeoTCH.nativeSourceHandler)

  // Older versions of VJS5 doesn't have the registerTech function
  if (typeof videojs.registerTech !== 'undefined') {
    videojs.registerTech('Vimeo', VimeoTCH)
  } else {
    videojs.registerComponent('Vimeo', VimeoTCH)
  }

  // Include the version number.
  VimeoTCH.VERSION = '0.0.1'
})
