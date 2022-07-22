/**
 * get the element index in a array of elements
 * @param {Object} target - the target element to find
 * @param {array} list - the elements list
 * @returns {int} the element index
 */
const getElementIndex = (target, list) => {
  let foundIdx = null;
  list.forEach((element, idx) => {
    if (element === target) {
      foundIdx = idx;
    }
  });
  return foundIdx
};

/**
 * set focus on a simbling
 * @param {*} currentElement - the current focused element
 * @param {*} simblings - list of simblings
 * @param {Object} config - isDirectionTop, isLimit, loop
 */
const focusSimbling = (currentElement, simblings, config) => {
  config = {
    isDirectionTop: false,
    isLimit: false,
    loop: false,
    ...(typeof config === 'object' ? config : {}),
  };
  const currIdx = getElementIndex(currentElement, simblings);

  let found = null;
  if (config.isLimit && config.isDirectionTop && currIdx > 0) {
    //get first element
    found = simblings[0];
  } else if (config.isLimit && currIdx < simblings.length - 1) {
    //get last element
    found = simblings[simblings.length - 1];
  } else if (config.isDirectionTop) {
    //get prev element
    if (!config.loop && currIdx === 0) {
      return
    }
    found = simblings[currIdx === 0 ? simblings.length - 1 : currIdx - 1];
  } else {
    //get next element
    if (!config.loop && currIdx === simblings.length - 1) {
      return
    }
    found = simblings[currIdx === simblings.length - 1 ? 0 : currIdx + 1];
  }

  if (found) {
    found.focus();
  }
};

export { focusSimbling, getElementIndex };
//# sourceMappingURL=dom.js.map
