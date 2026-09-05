/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Helpers used to build the mobile menu of the Header component.
 * The elements they produce are appended to `.menu-wrapper` and hidden on desktop by CSS.
 * Kept aligned with the `<it-header>` web component of Dev Kit Italia.
 */

const CLASS_NAME_BRAND_MOBILE = 'it-brand-mobile'
const CLASS_NAME_SLIM_MENU = 'header-slim-menu'

const SELECTOR_HEADER = '.it-header-wrapper'
const SELECTOR_BRAND = '.it-header-center-wrapper .it-brand-wrapper'
const SELECTOR_SOCIALS = '.it-header-center-wrapper .it-socials'
// Narrower than the web component selector (`.it-header-slim-wrapper ul`): in Bootstrap Italia
// markup the language dropdown also contains a `ul.link-list`, and it would be picked up
// whenever the header has no accessory links at all.
const SELECTOR_SLIM_LINKS = '.it-header-slim-wrapper .nav-mobile .link-list-wrapper ul'

/**
 * Strips ids from a cloned subtree, so that the clone never duplicates an id of the source.
 * @param {Element} element
 */
const removeIds = (element) => {
  if (element.id) {
    element.removeAttribute('id')
  }
  element.querySelectorAll('[id]').forEach((child) => child.removeAttribute('id'))
}

/**
 * Clones a `ul` of links (a `.link-list` of the slim header) and normalizes it to the
 * `ul.navbar-nav` markup used inside the mobile menu.
 * @param {HTMLUListElement} list
 * @param {string} className extra classes for the resulting `ul`
 * @returns {HTMLUListElement}
 */
const cloneLinkListAsNavbarNav = (list, className = '') => {
  const clone = list.cloneNode(true)
  removeIds(clone)
  clone.setAttribute('class', `navbar-nav ${className}`.trim())

  clone.querySelectorAll(':scope > li').forEach((item) => {
    const link = item.querySelector('a')
    const isActive = Boolean(link && (link.classList.contains('active') || link.getAttribute('aria-current')))
    const isDisabled = Boolean(link && (link.classList.contains('disabled') || link.getAttribute('aria-disabled') === 'true'))

    item.setAttribute('class', `nav-item${isActive ? ' active' : ''}${isDisabled ? ' disabled' : ''}`)

    if (link) {
      link.setAttribute('class', `nav-link${isActive ? ' active' : ''}${isDisabled ? ' disabled' : ''}`)
      // the mobile menu wraps every label in a `span`, like the main navigation does
      if (!link.querySelector('span')) {
        const span = document.createElement('span')
        span.append(...link.childNodes)
        link.append(span)
      }
    }
  })

  return clone
}

/**
 * Fills `.menu-wrapper` with the elements that on mobile belong to the navigation menu but
 * live elsewhere in the header: the brand, the slim header links and the socials.
 *
 * The resulting order is: brand, main menu, secondary menu, slim header links, socials.
 *
 * It is a no-op when the navbar is not part of a full header, or when it has already run.
 *
 * @param {Element} navbarCollapsable the `.navbar-collapsable` element
 * @returns {boolean} whether the mobile menu has been built
 */
export const buildMobileMenu = (navbarCollapsable) => {
  const header = navbarCollapsable.closest(SELECTOR_HEADER)
  const menuWrapper = navbarCollapsable.querySelector('.menu-wrapper')

  if (!header || !menuWrapper || menuWrapper.hasAttribute('data-bs-mobile-menu-built')) {
    return false
  }

  menuWrapper.setAttribute('data-bs-mobile-menu-built', '')

  // 1. brand
  const brand = header.querySelector(SELECTOR_BRAND)
  if (brand) {
    const brandClone = brand.cloneNode(true)
    removeIds(brandClone)
    brandClone.classList.add(CLASS_NAME_BRAND_MOBILE)
    menuWrapper.prepend(brandClone)
  }

  // 2/3. main and secondary menus are already authored inside `.menu-wrapper`

  // 4. slim header links, right after the last navigation list
  const slimLinks = header.querySelector(SELECTOR_SLIM_LINKS)
  const navLists = menuWrapper.querySelectorAll(':scope > ul.navbar-nav')
  if (slimLinks && navLists.length) {
    const slimClone = cloneLinkListAsNavbarNav(slimLinks, `navbar-secondary ${CLASS_NAME_SLIM_MENU}`)
    navLists[navLists.length - 1].after(slimClone)
  }

  // 5. socials, at the very bottom. `setAttribute` also drops the responsive display
  // utilities the socials carry in the header center, where they are hidden below `md`.
  const socials = header.querySelector(SELECTOR_SOCIALS)
  if (socials) {
    const socialsClone = socials.cloneNode(true)
    removeIds(socialsClone)
    socialsClone.setAttribute('class', 'it-socials')
    menuWrapper.append(socialsClone)
  }

  return true
}

export default buildMobileMenu
