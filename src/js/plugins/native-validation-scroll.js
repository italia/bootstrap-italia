/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// Chromium does not show the native validation bubble when `scroll-behavior`
// is smooth and the invalid control is outside the viewport.
// https://issues.chromium.org/issues/40196176
// https://issues.chromium.org/issues/40228517
// https://issues.chromium.org/issues/40783475
//
// Turning smooth scroll off for the whole page would fix the bubble and drop
// smooth scrolling. This sets `scroll-behavior: auto` only while the browser
// scrolls the invalid control into view, then restores the previous value.
// Checkbox and radio bubbles are a separate failure, present in every browser,
// and this does not change them.

const installed = new WeakSet()

class NativeValidationScroll {
  constructor(doc = typeof document !== 'undefined' ? document : undefined) {
    if (!doc || installed.has(doc)) {
      return
    }

    installed.add(doc)

    const root = doc.documentElement
    let restoreQueued = false

    doc.addEventListener(
      'invalid',
      () => {
        if (restoreQueued) {
          return
        }

        const previous = root.style.scrollBehavior
        root.style.scrollBehavior = 'auto'
        restoreQueued = true

        // The browser scrolls after the invalid listeners return, still in
        // this turn. Restore on the next frame so anchor scrolling stays smooth.
        globalThis.requestAnimationFrame(() => {
          root.style.scrollBehavior = previous
          restoreQueued = false
        })
      },
      true
    )
  }
}

new NativeValidationScroll()

export default NativeValidationScroll
