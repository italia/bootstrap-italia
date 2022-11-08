/**
 * Prevents page scroll
 */

const CLASS_SCROLL_DISABLED = 'pagescroll-scroll-disabled';

let disabled = false;
let currentScrollPos = document.scrollingElement.scrollTop;
const htmlContainer = document.querySelector('html');

function disablePageScroll() {
  disabled = true;
  currentScrollPos = document.scrollingElement.scrollTop;
  htmlContainer.classList.add(CLASS_SCROLL_DISABLED);
}

function enablePageScroll() {
  disabled = false;
  htmlContainer.classList.remove(CLASS_SCROLL_DISABLED);
}

document.addEventListener('scroll', () => {
  if (disabled) {
    document.scrollingElement.scrollTop = currentScrollPos;
  }
});

export { disablePageScroll, enablePageScroll };
//# sourceMappingURL=pageScroll.js.map
