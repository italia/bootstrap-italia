/**
 * sticky-header js lib
 * @ Fabio Fumis
 */
;(function() {
  const elSticky = document.querySelector('.it-header-sticky')

  if (!!elSticky) {
    function isHidden(el) {
      let hidden = false
      if (el) {
        const style = window.getComputedStyle(el)
        hidden = style.display === 'none' || style.visibility === 'hidden'
      }
      return hidden
    }

    const elToggler = document.querySelector('.custom-navbar-toggler')
    const isDesktop = isHidden(elToggler)

    let isSticky = false
    let scrollToGap = 0

    let runCheckSticky = undefined

    const initSticky = isDesktop => {
      const elSlim = document.querySelector('.it-header-slim-wrapper')
      const elCenter = document.querySelector('.it-header-center-wrapper')
      const elNavbar = document.querySelector('.it-header-navbar-wrapper')

      const navbarHeight = (elNavbar && elNavbar.offsetHeight) || 0
      const slimHeight = (elSlim && elSlim.offsetHeight) || 0
      let navOffsetTop = slimHeight

      if (isDesktop && navbarHeight) {
        navOffsetTop = slimHeight + elCenter ? elCenter.offsetHeight : 0
      }

      const toggleClonedElement = (isDesktop, toAdd = true, callback) => {
        if (isDesktop) {
          const target = document.querySelector('.menu-wrapper')

          if (toAdd) {
            const elBrand = document.querySelector('.it-brand-wrapper')
            const elSearch = document.querySelector('.it-search-wrapper')
            const elUser = document.querySelector('.it-user-wrapper')

            const clonedBrand = elBrand ? elBrand.cloneNode(true) : null
            const clonedSearch = elSearch ? elSearch.cloneNode(true) : null
            const clonedUser = elUser ? elUser.cloneNode(true) : null

            if (clonedBrand)
              target
                .insertBefore(clonedBrand, target.childNodes[0])
                .classList.add('cloned')
            if (clonedSearch)
              target.appendChild(clonedSearch).classList.add('cloned')
            if (clonedUser)
              target
                .appendChild(clonedUser)
                .classList.add('cloned')
                .remove('show')
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

        if (toAdd) {
          elSticky.nextElementSibling.style.paddingTop =
            navbarHeight +
            (isDesktop
              ? navOffsetTop - scrollToGap
              : navbarHeight - scrollToGap) +
            'px'
        } else {
          elSticky.nextElementSibling.style.paddingTop = 0 + 'px'
        }
      }

      const toggleOn = () => {
        isSticky = true
        elSticky.classList.add('is-sticky')
        toggleClonedElement(isDesktop, true)
      }

      const toggleOff = () => {
        isSticky = false
        elSticky.classList.remove('is-sticky')
        toggleClonedElement(isDesktop, false)
      }

      runCheckSticky = () => {
        const nbh = navbarHeight
        if (window.scrollY + scrollToGap >= navOffsetTop && !isSticky) {
          toggleOn()
          if (nbh !== navbarHeight) scrollToGap = navbarHeight - nbh
        } else if (window.scrollY + scrollToGap < navOffsetTop && isSticky) {
          toggleOff()
        }
      }

      window.addEventListener('scroll', runCheckSticky)

      runCheckSticky()
    }

    initSticky(isDesktop)
  }
})()
