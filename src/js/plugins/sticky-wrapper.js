/**
 * sticky-wrapper js lib
 * @ Fabio Fumis
 */
;(function() {
  const elWrappers = document.getElementsByClassName('sticky-wrapper')

  function isHidden(el) {
    const style = window.getComputedStyle(el)
    return style.display === 'none' || style.visibility === 'hidden'
  }

  if (elWrappers && elWrappers.length) {
    let isSticky = false

    const initSticky = () => {
      const runCheckOnScroll = () => {
        // Get header height
        const elHeader = document.querySelector('.it-header-wrapper')
        const elNavigation = document.querySelector('.it-header-navbar-wrapper')
        const headerHeight = elHeader ? elHeader.offsetHeight : 0
        const navHeight =
          !headerHeight && elNavigation ? elNavigation.offsetHeight : 0
        // Set monitoring offset top
        let navOffsetTop = navHeight || 0

        const runCheckSticky = elSticky => {
          // Get parent params
          const parent = elSticky.parentNode
          parent.style.position = 'relative'
          const parentWidth = parent.offsetWidth || 0
          const parentPaddingTop =
            parseInt(
              (window.getComputedStyle
                ? getComputedStyle(parent, null)
                : parent.currentStyle
              ).paddingTop
            ) || 0
          // Get distance of a element from top
          const distanceToTop = parent.getBoundingClientRect().top || 0

          console.log(distanceToTop, '<=', navOffsetTop, 'navHeight', navHeight)

          if (!isSticky && distanceToTop <= navOffsetTop) {
            isSticky = true
            elSticky.classList.add('is-sticky')
            elSticky.style.top = navOffsetTop + parentPaddingTop + 'px'
            elSticky.style.width = parentWidth + 'px'
          } else if (isSticky && distanceToTop > navOffsetTop) {
            isSticky = false
            elSticky.classList.remove('is-sticky')
            elSticky.style.top = ''
            elSticky.style.width = ''
          }
        }

        Array.from(elWrappers).forEach(elSticky => {
          runCheckSticky(elSticky)
        })
      }

      window.addEventListener('scroll', runCheckOnScroll)
    }

    const onResize = () => {
      initSticky()
    }

    window.addEventListener('resize', onResize)

    initSticky()
  }
})()
