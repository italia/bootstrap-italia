import assert from 'node:assert/strict'
import test from 'node:test'

test('native validation scroll is auto during invalid and restored after the frame', async () => {
  const listeners = []
  const root = { style: { scrollBehavior: 'smooth' }, dataset: {} }
  const doc = {
    documentElement: root,
    addEventListener(type, fn, capture) {
      listeners.push({ type, fn, capture })
    },
  }

  let frame = null
  globalThis.document = doc
  globalThis.requestAnimationFrame = (fn) => {
    frame = fn
    return 1
  }

  const { default: NativeValidationScroll } = await import('../src/js/plugins/native-validation-scroll.js')
  new NativeValidationScroll(doc)

  const invalid = listeners.filter((listener) => listener.type === 'invalid')
  assert.equal(invalid.length, 1)
  assert.equal(invalid[0].capture, true)

  invalid[0].fn()
  invalid[0].fn()
  assert.equal(root.style.scrollBehavior, 'auto')

  frame()
  assert.equal(root.style.scrollBehavior, 'smooth')
  assert.equal(typeof frame, 'function')
})
