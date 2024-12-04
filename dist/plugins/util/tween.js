import anime from 'animejs/lib/anime.es.js';

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const AnimeDefault = {
  duration: 800,
  easing: 'easeInOutSine',
};

/**
 *
 * @param {number} scrollTop
 * @param {Object} config - duration, easing, complete, update, ...
 */
const documentScrollTo = (scrollTop, config) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }
  const onComplete = (typeof config === 'object' ? config : {}).complete;
  const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
  const prevScrollBehavior = scrollElement.style.scrollBehavior;

  config = {
    scrollTop: scrollTop || 0,
    ...AnimeDefault,
    ...(typeof config === 'object' ? config : {}),
  };

  scrollElement.style.scrollBehavior = 'auto';

  config.complete = (anim) => {
    scrollElement.style.scrollBehavior = prevScrollBehavior;
    if (typeof onComplete === 'function') {
      onComplete(anim);
    }
  };

  anime({
    targets: scrollElement,
    ...config,
  });
};

export { documentScrollTo };
//# sourceMappingURL=tween.js.map
