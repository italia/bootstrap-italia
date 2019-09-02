//GLOBAL VARIABLES
var keys, valMin, valMax, valNow, skipVal

// regular expression to match required time format
// var timeRegEx = /^\d{1,2}:\d{2}([AP]M)?$/i
var timeRegEx = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/i

$(document).ready(function() {
  // "private" functions
  function getKeys() {
    keys = {
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
    }
    return keys
  }

  function setDigit(number, id) {
    if (id == 'spinnerMin' || id == 'btnMinUp' || id == 'btnMinDown') {
      return (number < 10 ? '0' : '') + number
    } else {
      return number
    }
  }

  function loadSpinner(spinner) {
    $(spinner).attr('aria-hidden', 'false')
    $(spinner).fadeIn(100)
    $(spinner)
      .find('input:first')
      .focus()
  }

  function hideSpinner(spinner, $input, spinnerh, spinnermin, index) {
    var newTime = $(spinnerh).attr('value') + ':' + $(spinnermin).attr('value')
    $input.val(newTime).focus()
    $(spinner).fadeOut(100)
    $(spinner).attr('aria-hidden', 'true')
    $('.btnTime').focus()
    checkForm($input, index)
  }

  function getValues(that, arrowBtn) {
    var findInput = that
    if (arrowBtn == true) {
      findInput = that.closest('.spinner').find('input')
      if (that.find('span').hasClass('icon-up')) {
        findInput = that.closest('.spinner').find('input')
      }
    }
    valMin = parseInt(findInput.attr('aria-valuemin'))
    valMax = parseInt(findInput.attr('aria-valuemax'))
    valNow = parseInt(findInput.attr('aria-valuenow'))
    skipVal = parseInt(findInput.attr('bb-skip'))
  }

  function spinbutton(id, skipVal, e) {
    getKeys()

    var that = $('#' + id)
    that.on('keydown', function(e) {
      return handleKeyDown(e, id)
    })
    that.on('keypress', function(e) {
      return handleKeyPress(e)
    })
  }

  function handleKeyDown(e, id) {
    var that = $('#' + id)
    getValues(that, false)

    if (e.altKey || e.ctrlKey || e.shiftKey) {
      // do nothing
      return true
    }

    switch (e.which) {
      case this.keys.pageup: {
        if (valNow < valMax) {
          // if valnow is small enough, increase by the skipVal,
          // otherwise just set to valmax
          if (valNow < valMax - skipVal) {
            valNow += skipVal
          } else {
            valNow = valMax
          }
          valNow = (valNow < 10 ? '0' : '') + valNow
          // update the control
          that.attr('aria-valuenow', setDigit(valNow, id))
          that.attr('value', setDigit(valNow), id)
        }

        e.stopPropagation()
        return false
      }
      case this.keys.pagedown: {
        if (valNow > valMin) {
          // if valNow is big enough, decrease by the skipVal,
          // otherwise just set to valmin
          if (
            setDigit(valNow, false) >
            setDigit(valMin, false) + setDigit(skipVal, false)
          ) {
            valNow -= setDigit(skipVal, false)
          } else {
            valNow = setDigit(valMin, false)
          }
          valNow = (valNow < 10 ? '0' : '') + valNow
          // update the control
          that.attr('aria-valuenow', setDigit(valNow, id))
          that.attr('value', setDigit(valNow, id))
        }

        e.stopPropagation()
        return false
      }
      case this.keys.home: {
        if (valNow < valMax) {
          valNow = valMax
          that.attr('aria-valuenow', setDigit(valNow, id))
          that.attr('value', setDigit(valNow, id))
        }

        e.stopPropagation()
        return false
      }
      case this.keys.end: {
        if (valNow > valMin) {
          valNow = valMin
          that.attr('aria-valuenow', setDigit(valNow, id))
          that.attr('value', setDigit(valNow, id))
        }
        e.stopPropagation()
        return false
      }
      case this.keys.right:
      case this.keys.up: {
        // if valuemin isn't met, increment valnow
        if (valNow < valMax) {
          valNow++
          valNow = (valNow < 10 ? '0' : '') + valNow
          that.attr('value', setDigit(valNow, id))
          that.attr('aria-valuenow', setDigit(valNow, id))
        }
        e.stopPropagation()
        return false
      }
      case this.keys.left:
      case this.keys.down: {
        // if valuemax isn't met, decrement valnow
        if (valNow > valMin) {
          valNow--
          valNow = (valNow < 10 ? '0' : '') + valNow
          that.attr('value', setDigit(valNow, id))
          that.attr('aria-valuenow', setDigit(valNow, id))
        }
        e.stopPropagation()
        return false
      }
    }
    return true
  }

  function handleKeyPress(e) {
    if (e.altKey || e.ctrlKey || e.shiftKey) {
      // do nothing
      return true
    }

    switch (e.keyCode) {
      case this.keys.pageup:
      case this.keys.pagedown:
      case this.keys.home:
      case this.keys.end:
      case this.keys.left:
      case this.keys.up:
      case this.keys.right:
      case this.keys.down: {
        e.stopPropagation()
        return false
      }
    }
    return true
  }

  function handleClick($button) {
    var that = $('#' + $button)
    var id = that.attr('id')
    var findInput = ''
    getValues(that, true)

    if (that.find('span').hasClass('icon-up')) {
      // if valuemax isn't met, increment valnow
      if (valNow < valMax) {
        valNow++
      }
      findInput = that.closest('.spinner').find('input')
    } else {
      // if valuemax isn't met, decrement valnow
      if (valNow > valMin) {
        valNow--
      }
      findInput = that.closest('.spinner').find('input')
    }
    if (valNow < 10) {
      valNow = '0' + valNow
    }
    findInput.attr('value', setDigit(valNow, id))
    findInput.attr('aria-valuenow', setDigit(valNow, id))
  }

  // save default labels
  var defLabels = {}

  // TIME VALIDATION FOR DATA ENTRY
  function checkForm($input, index) {
    var newValue = $input.val()
    var $label = $input.siblings('label')

    var matches = newValue != '' ? newValue.match(timeRegEx) : ''

    if (matches) {
      $label.removeClass('error-label').html(defLabels[index])
    } else {
      $label.addClass('error-label').html('Formato ora non valido (hh:mm)')
    }
  }

  // Loop each input field
  $('.it-timepicker-wrapper').each(function(index) {
    // wrapper el
    var $el = $(this)
    // get input field
    var $input = $el.find('.txtTime')

    defLabels[index] = $input.siblings('label').text()

    $el
      .find('.spinner-control button')
      .attr('aria-hidden', 'true')
      .attr('tabindex', '-1')

    $el.find('.btn-time').click(function() {
      var spinner = $el.find('fieldset').next('.spinner-control')
      var spinnerh = $(spinner).find('.spinnerHour')
      var spinnermin = $(spinner).find('.spinnerMin')
      if ($(spinner).attr('aria-hidden') == 'true') {
        loadSpinner(spinner)
      } else {
        hideSpinner(spinner, $input, spinnerh, spinnermin, index)
      }
    })

    //Hour and Minute
    $el.find('.spinnerHour, .spinnerMin').each(function(e) {
      return spinbutton($(this).attr('id'), $(this).attr('bb-skip'), e)
    })

    $el
      .find(
        '.btnHourUp, .btnHourDown, .btnMinUp, .btnMinDown',
        '.spinner-control'
      )
      .click(function() {
        handleClick($(this).attr('id'))
      })

    $el.find('.spinner-control *').on('keydown', function(e) {
      if (e.which == 13) {
        var spinnerh = $(this)
          .closest('.time-spinner')
          .find('.spinnerHour')
          .attr('value')
        var spinnermin = $(this)
          .closest('.time-spinner')
          .find('.spinnerMin')
          .attr('value')

        var spinner = $(this).closest('.time-spinner')
        var txt = $(this)
          .closest('.time-spinner')
          .find('.txtTime')
        var newTime = spinnerh + ':' + spinnermin

        $input.val(newTime).focus()
        $('.spinner-control').attr('aria-hidden', 'true')
        $('.spinner-control').fadeOut(100)
        return false
      } else if (e.which == 27) {
        hideSpinner(spinner, $input, spinnerh, spinnermin, index)
        return false
      }
    })

    //Direct Time Entry
    $input.on('keydown', function(e) {
      if (e.which == 13) {
        return checkForm($input, index)
      }
    })

    $el.find('.spinner-control, .btn-time').on('click', function(event) {
      event.stopPropagation()
    })

    $input.on('blur', function() {
      checkForm($input, index)
    })

    $el
      .find('input.spinnerHour, input.spinnerMin')
      .on('keypress', function(event) {
        return false
      })

    $(window).click(function() {
      var spinner = $el.find('.spinner-control[aria-hidden="false"]')
      var spinnerh = $(spinner).find('.spinnerHour')
      var spinnermin = $(spinner).find('.spinnerMin')
      if ($(spinner).length > 0) {
        hideSpinner(spinner, $input, spinnerh, spinnermin, index)
      }
    })
  })
})
