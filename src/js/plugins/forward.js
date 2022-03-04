import { onDOMContentLoaded } from 'bootstrap/js/src/util/'

onDOMContentLoaded(() => {
  const forwardElementList = [].slice.call(document.querySelectorAll('a[data-bs-attribute*="forward"]'))
  const forwardList = forwardElementList.map((fwEl) => {
    fwEl.addEventListener('click', (evt) => {
      const target = document.querySelector(fwEl.hash)
      if (target) {
        evt.preventDefault()
        const scrollingElement = document.scrollingElement
        scrollingElement.scrollTop = target.offsetTop
        console.log({ scrollingElement, target })
      }
    })
    return fwEl
  })

  return forwardList
})
