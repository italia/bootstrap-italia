$(function () {
  /**
   * fix collapse accessibility (arrow keys, home key, end key functionality)
   */

  var SELECTOR = {
    HEADBTN_WRAPPER: '.collapse-div',
    HEADBTN: '.collapse-header [data-toggle="collapse"]',
  }

  var focusSimbling = function (target, isDirectionTop, isLimit) {
    var btns = $(target)
      .closest(SELECTOR.HEADBTN_WRAPPER)
      .find('> ' + SELECTOR.HEADBTN)
    var currIdx = btns.index($(target))

    var found = null
    if (isLimit && isDirectionTop && currIdx > 0) {
      //get first element
      found = btns[0]
    } else if (isLimit && currIdx < btns.length - 1) {
      //get last element
      found = btns[btns.length - 1]
    } else if (isDirectionTop) {
      //get prev element
      found = btns[currIdx === 0 ? btns.length - 1 : currIdx - 1]
    } else {
      //get next element
      found = btns[currIdx < btns.length - 1 ? currIdx + 1 : 0]
    }

    if (found) {
      $(found).trigger('focus')
    }
  }
  var focusNext = function (target) {
    focusSimbling(target)
  }
  var focusPrev = function (target) {
    focusSimbling(target, true)
  }
  var focusFirst = function (target) {
    focusSimbling(target, true, true)
  }
  var focusLast = function (target) {
    focusSimbling(target, false, true)
  }

  var EVENT_CALLBACK = {
    ArrowDown: focusNext,
    ArrowUp: focusPrev,
    Home: focusFirst,
    End: focusLast,
  }

  $(SELECTOR.HEADBTN).on('keydown', function (evt) {
    var key = evt.key
    if (typeof EVENT_CALLBACK[key] === 'function') {
      evt.preventDefault()
      EVENT_CALLBACK[key](evt.currentTarget)
    }
  })
})
