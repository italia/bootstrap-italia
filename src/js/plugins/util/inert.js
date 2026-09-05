/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Background isolation for dialog-like components (modal, mobile navigation menu).
 *
 * Elements outside the dialog must be isolated from assistive technology (e.g. VoiceOver's
 * virtual cursor) while it is open, since the focus trap alone doesn't stop that kind of
 * navigation. `inert` is reference-counted because two components can end up inerting the same
 * background elements at once (two modals swapping over each other, or a modal opened from the
 * mobile navigation menu), so the first one to close must not remove `inert` while the second
 * still needs it. The registry is module level on purpose: it has to be shared by every
 * component that isolates the background, otherwise two independent counters would release
 * `inert` from an element the other one is still relying on.
 */
const inertCounts = new Map()

const NON_RENDERED_TAGS = ['SCRIPT', 'STYLE', 'TEMPLATE', 'LINK']

export const setInert = (el) => {
  const count = inertCounts.get(el) || 0
  if (count === 0) {
    // WebKit doesn't reliably blur the element that had focus when it becomes inert, which would
    // leave the keyboard (and VoiceOver) stuck on the isolated background — typically the
    // hamburger button that just opened the mobile menu.
    if (document.activeElement && el.contains(document.activeElement)) {
      document.activeElement.blur()
    }

    el.setAttribute('inert', '')
  }
  inertCounts.set(el, count + 1)
}

export const unsetInert = (el) => {
  const count = inertCounts.get(el) || 0
  if (count <= 1) {
    inertCounts.delete(el)
    el.removeAttribute('inert')
  } else {
    inertCounts.set(el, count - 1)
  }
}

/**
 * Walks up the ancestor chain of `element` and inerts every sibling found along the way, so that
 * the whole page but the element itself becomes unreachable.
 *
 * @param {HTMLElement} element the dialog-like element that must stay reachable
 * @param {(sibling: HTMLElement) => boolean} [skip] siblings for which `inert` must not be set
 * @returns {HTMLElement[]} the inerted elements, to be passed back to `releaseInert()`
 */
export const applyInert = (element, skip) => {
  const inertedElements = []

  let current = element
  while (current && current !== document.body && current.parentElement) {
    const parent = current.parentElement
    for (const sibling of parent.children) {
      if (sibling === current || !(sibling instanceof HTMLElement)) {
        continue
      }

      if (NON_RENDERED_TAGS.includes(sibling.tagName)) {
        continue
      }

      if (skip && skip(sibling)) {
        continue
      }

      setInert(sibling)
      inertedElements.push(sibling)
    }

    current = parent
  }

  return inertedElements
}

/**
 * Releases the elements previously returned by `applyInert()`.
 *
 * @param {HTMLElement[]} inertedElements
 * @returns {HTMLElement[]} an empty array, to reassign to the caller's field
 */
export const releaseInert = (inertedElements) => {
  for (const element of inertedElements) {
    unsetInert(element)
  }

  return []
}
