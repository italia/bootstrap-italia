import anime from 'animejs/lib/anime.es.js'

const AnimeDefault = {
  duration: 800,
  easing: 'easeInOutSine',
}

/**
 *
 * @param {number} scrollTop
 * @param {Object} config - duration, easing, complete, update, ...
 */
export const documentScrollTo = (scrollTop, config) => {
  if (typeof document === 'undefined') {
    return
  }
  const onComplete = (typeof config === 'object' ? config : {}).complete
  const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement
  const prevScrollBehavior = scrollElement.style.scrollBehavior

  config = {
    scrollTop: scrollTop || 0,
    ...AnimeDefault,
    ...(typeof config === 'object' ? config : {}),
  }

  scrollElement.style.scrollBehavior = 'auto'

  config.complete = (anim) => {
    scrollElement.style.scrollBehavior = prevScrollBehavior
    if (typeof onComplete === 'function') {
      onComplete(anim)
    }
  }

  anime({
    targets: scrollElement,
    ...config,
  })
}
