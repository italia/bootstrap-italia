/**
 * Prevents page scroll
 */

const CLASS_SCROLL_DISABLED = 'pagescroll-scroll-disabled'

let disabled = false
let currentScrollPos = typeof document === 'undefined' ? 0 : document.scrollingElement.scrollTop
const htmlContainer = typeof document === 'undefined' ? null : document.querySelector('html')

export function disablePageScroll() {
  if (typeof document === 'undefined') {
    return
  }
  disabled = true
  currentScrollPos = document.scrollingElement.scrollTop
  htmlContainer.classList.add(CLASS_SCROLL_DISABLED)
}

export function enablePageScroll() {
  if (typeof document === 'undefined') {
    return
  }
  disabled = false
  htmlContainer.classList.remove(CLASS_SCROLL_DISABLED)
}

if (typeof document !== 'undefined') {
  document.addEventListener('scroll', () => {
    if (disabled) {
      document.scrollingElement.scrollTop = currentScrollPos
    }
  })
}
