export const loadPlugin = (module) => {
  // Trick Rollup.js to keep JavaScript.
  let obj = {
    method: () => {},
  }
  obj.method(module)
}
