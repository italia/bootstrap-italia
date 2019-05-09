/**
 * sticky-header js lib
 * @ Fabio Fumis
 */
;(function() {
  const elSticky = document.querySelector('.it-header-sticky')

  if (!!elSticky) {
    function isHidden(el) {
      const style = window.getComputedStyle(el)
      return style.display === 'none'
    }

    const elToggler = document.querySelector('.custom-navbar-toggler')
    const isDesktop = isHidden(elToggler)

    let isSticky = false
    let scrollToGap = 0

    const initSticky = (isDesktop, isResized = false) => {
      // console.log('isDesktop', isDesktop, 'isResized', isResized)

      const elSlim = document.querySelector('.it-header-slim-wrapper')
      const elCenter = document.querySelector('.it-header-center-wrapper')
      const elNavbar = document.querySelector('.it-header-navbar-wrapper')

      const navbarHeight = elNavbar.offsetHeight
      const slimHeight = (elSlim && elSlim.offsetHeight) || 0
      let navOffsetTop = slimHeight

      if (isDesktop && navbarHeight) {
        const centerHeight = elCenter.offsetHeight
        navOffsetTop = slimHeight + centerHeight
      }

      const toggleClonedElement = (isDesktop, toAdd = true, callback) => {
        if (isDesktop) {
          const target = document.querySelector('.menu-wrapper')

          if (toAdd) {
            const elBrand = document.querySelector('.it-brand-wrapper')
            const elSearch = document.querySelector('.it-search-wrapper')

            const clonedBrand = elBrand.cloneNode(true)
            const clonedSearch = elSearch.cloneNode(true)

            target
              .insertBefore(clonedBrand, target.childNodes[0])
              .classList.add('cloned')
            target.appendChild(clonedSearch).classList.add('cloned')
          } else {
            const clonedItems = document.getElementsByClassName('cloned')
            clonedItems &&
              Array.from(clonedItems).forEach(item => {
                item.parentElement.removeChild(item)
              })

            if (typeof callback === 'function') {
              callback()
            }
          }
        }

        // Add/remove padding to container
        if (toAdd) {
          elSticky.nextElementSibling.style.paddingTop =
            navOffsetTop +
            elNavbar.offsetHeight +
            (!isDesktop ? navbarHeight - scrollToGap : 0) -
            5 +
            'px'
        } else {
          elSticky.nextElementSibling.style.paddingTop = 0 + 'px'
        }
      }

      const toggleOff = () => {
        isSticky = false
        elSticky.classList.remove('is-sticky')

        toggleClonedElement(isDesktop, false, () => {
          const gap = scrollToGap > 0 ? scrollToGap : 0
          // console.log('GAP', gap)
          window.scrollTo(0, navOffsetTop - gap - 5)
        })
      }

      const runCheckSticky = () => {
        const nbh = elNavbar.offsetHeight

        if (window.scrollY + scrollToGap >= navOffsetTop && !isSticky) {
          // console.log('ADD Sticky')
          isSticky = true
          elSticky.classList.add('is-sticky')
          toggleClonedElement(isDesktop, true)

          if (nbh !== elNavbar.offsetHeight)
            scrollToGap = elNavbar.offsetHeight - nbh
        } else if (window.scrollY + scrollToGap < navOffsetTop && isSticky) {
          // console.log('REMOVE Sticky')
          toggleOff()
        }

        /* console.log(
          window.scrollY,
          navOffsetTop,
          elNavbar.offsetHeight,
          navbarHeight,
          isSticky,
          nbh
        ) */
      }

      window.onscroll = () => {
        runCheckSticky()
      }

      if (isResized && isSticky) {
        window.scrollTo(0, 0)
        toggleOff()
      }
    }

    window.onresize = () => {
      const stillDesktop = isHidden(elToggler)
      initSticky(stillDesktop, true)
    }

    initSticky(isDesktop)
  }
})()
