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

  const elToggler = document.querySelector('.custom-navbar-toggler')
  const isDesktop = isHidden(elToggler)

  if (elWrappers && elWrappers.length) {
    let isSticky = false

    const initSticky = isDesktop => {
      // Get header height
      const elNavigation = isDesktop
        ? document.querySelector('.it-header-navbar-wrapper')
        : document.querySelector('.it-header-center-wrapper')
      const navHeight = elNavigation ? elNavigation.offsetHeight : 0
      // Set monitoring offset top
      let navOffsetTop = navHeight || 0

      const runCheckOnScroll = () => {
        const runCheckSticky = elSticky => {
          const elHeight = elSticky.offsetHeight
          // Get parent params
          const parent = elSticky.parentNode
          parent.style.position = 'relative'
          const parentWidth = parent.offsetWidth || 0
          const parentHeight = parent.offsetHeight
          const parentPaddingTop = isDesktop
            ? parseInt(
                (window.getComputedStyle
                  ? getComputedStyle(parent, null)
                  : parent.currentStyle
                ).paddingTop
              )
            : 0
          const parentPaddingWidth = isDesktop
            ? parseInt(
                (window.getComputedStyle
                  ? getComputedStyle(parent, null)
                  : parent.currentStyle
                ).paddingRight
              )
            : 0
          // Get distance of a element from top
          const distanceToTop = parent.getBoundingClientRect().top || 0

          // Check if it's sticky
          if (!isSticky && distanceToTop <= navOffsetTop) {
            isSticky = true
            elSticky.classList.add('is-sticky')
            elSticky.style.top = navOffsetTop + parentPaddingTop + 'px'
            elSticky.style.width = parentWidth - parentPaddingWidth + 'px'
          } else if (isSticky && distanceToTop > navOffsetTop) {
            isSticky = false
            elSticky.classList.remove('is-sticky')
            elSticky.style.top = ''
            elSticky.style.width = ''
          }

          // Check if at bottom of parent
          if (isSticky && isDesktop) {
            if (
              distanceToTop < 0 &&
              Math.abs(distanceToTop) +
                elHeight +
                parentPaddingTop +
                navHeight >
                parentHeight
            ) {
              elSticky.classList.add('at-bottom')
            } else {
              elSticky.classList.remove('at-bottom')
            }
          }
        }

        Array.from(elWrappers).forEach(elSticky => {
          runCheckSticky(elSticky)
        })
      }

      window.addEventListener('scroll', runCheckOnScroll)
    }

    const onResize = () => {
      const stillDesktop = isHidden(elToggler)
      initSticky(stillDesktop)
    }

    window.addEventListener('resize', onResize)

    initSticky(isDesktop)
  }
})()
