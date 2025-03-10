/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Prevents page scroll
 */

const CLASS_SCROLL_DISABLED = 'pagescroll-scroll-disabled';

let disabled = false;
let currentScrollPos = typeof document === 'undefined' ? 0 : document.scrollingElement ? document.scrollingElement.scrollTop : 0;
const htmlContainer = typeof document === 'undefined' ? null : document.querySelector('html');

function disablePageScroll() {
  if (typeof document === 'undefined') {
    return
  }
  disabled = true;
  currentScrollPos = document.scrollingElement.scrollTop;
  htmlContainer.classList.add(CLASS_SCROLL_DISABLED);
}

function enablePageScroll() {
  if (typeof document === 'undefined') {
    return
  }
  disabled = false;
  htmlContainer.classList.remove(CLASS_SCROLL_DISABLED);
}

if (typeof document !== 'undefined') {
  document.addEventListener('scroll', () => {
    if (disabled) {
      document.scrollingElement.scrollTop = currentScrollPos;
    }
  });
}

export { disablePageScroll, enablePageScroll };
//# sourceMappingURL=pageScroll.js.map
