$(function () {
  // Animazione slide down
  $('.navbar .dropdown').on('show.bs.dropdown', function () {
    if (window.matchMedia('(max-width: 992px)').matches) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(180)
    }
  })

  // Animazione slide up
  $('.navbar .dropdown').on('hide.bs.dropdown', function () {
    if (window.matchMedia('(max-width: 992px)').matches) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(180)
    }
  })

  $(window).resize(function () {
    // reset parametri click iniettati su mobile
    if (window.matchMedia('(min-width: 993px)').matches) {
      $('.navbar .dropdown-menu').removeAttr('style')
    }
  })

  /**
   * fix dropdown accessibility (arrow keys)
   */
  var CLASS_NAME = {
    show: 'show',
    listItem: 'list-item',
  }
  var SELECTOR = {
    dropDown: '.dropdown',
    dropDownMenu: '.dropdown-menu',
    toggle: '[data-toggle="dropdown"]',
    listItem: 'a.list-item',
  }

  var isToggle = function (element) {
    return element.getAttribute('data-toggle') === 'dropdown'
  }
  /**
   *
   * @param {*} target
   * @param {Object} config - isDirectionTop, isLimit, loop
   */
  var focusSimbling = function (target, config) {
    var items = Array.prototype.slice.call(target.closest(SELECTOR.dropDownMenu).querySelectorAll(SELECTOR.listItem))
    var currIdx = items.indexOf(target)

    var found = null
    if (config.isLimit && config.isDirectionTop && currIdx > 0) {
      //get first element
      found = items[0]
    } else if (config.isLimit && currIdx < items.length - 1) {
      //get last element
      found = items[items.length - 1]
    } else if (config.isDirectionTop) {
      //get prev element
      if (!config.loop && currIdx === 0) {
        return
      }
      found = items[currIdx === 0 ? items.length - 1 : currIdx - 1]
    } else {
      //get next element
      if (!config.loop && currIdx === items.length - 1) {
        return
      }
      found = items[currIdx === items.length - 1 ? 0 : currIdx + 1]
    }

    if (found) {
      found.focus()
    }
  }
  var focusNext = function (target) {
    if (isToggle(target)) {
      var dropDown = target.parentNode.querySelector(SELECTOR.dropDownMenu)
      if (dropDown && dropDown.classList.contains(CLASS_NAME.show)) {
        var firstItem = dropDown.querySelector(SELECTOR.listItem)
        if (firstItem) {
          firstItem.focus()
        }
      } else {
        return
      }
    } else {
      focusSimbling(target, { loop: false })
    }
  }
  var focusPrev = function (target) {
    if (isToggle(target)) {
      return
    }
    focusSimbling(target, { isDirectionTop: true, loop: false })
  }

  var EVENT_CALLBACK = {
    ArrowDown: focusNext,
    ArrowUp: focusPrev,
  }
  var keyEventHandler = function (evt) {
    var key = evt.key
    if (typeof EVENT_CALLBACK[key] === 'function') {
      evt.preventDefault()
      EVENT_CALLBACK[key](evt.currentTarget)
    }
  }

  $(SELECTOR.toggle).on('keydown', function (evt) {
    keyEventHandler(evt)
  })
  $(SELECTOR.dropDownMenu + ' ' + SELECTOR.listItem).on('keydown', function (evt) {
    keyEventHandler(evt)
  })
})
