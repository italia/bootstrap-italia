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

    const initSticky = isDesktop => {
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

      const toggleClonedElement = (isDesktop, toAdd = true) => {
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
          }
        }
      }

      window.onscroll = () => {
        if (window.pageYOffset >= navOffsetTop && !isSticky) {
          isSticky = true
          elSticky.classList.add('is-sticky')
          toggleClonedElement(isDesktop, true)
        } else if (window.pageYOffset < navOffsetTop && isSticky) {
          isSticky = false
          elSticky.classList.remove('is-sticky')
          toggleClonedElement(isDesktop, false)
        }
      }
    }

    window.onresize = () => {
      const stillDesktop = isHidden(elToggler)
      initSticky(stillDesktop)
    }

    initSticky(isDesktop)
  }
})()
