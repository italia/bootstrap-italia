//GLOBAL VARIABLES
var keys, valMin, valMax, valNow, skipVal

// regular expression to match required time format
var timeRegEx = /^\d{1,2}:\d{2}([AP]M)?$/i

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

  function hideSpinner(spinner, txt, spinnerh, spinnermin) {
    var newTime = $(spinnerh).attr('value') + ':' + $(spinnermin).attr('value')
    $(txt)
      .val(newTime)
      .focus()
    $(spinner).fadeOut(100)
    $(spinner).attr('aria-hidden', 'true')
    $('.btnTime').focus()
    checkForm(txt)
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

  // TIME VALIDATION FOR DATA ENTRY
  function checkForm(that) {
    var newValue = $(that).val()
    var matches = newValue != '' ? newValue.match(timeRegEx) : ''
    var error = $(that)
      .closest('.time-spinner')
      .find('.error_container')
    var $closerTimeSpinner = $(that)
      .closest('.time-spinner')
      .find('.spinner-control')

    if (matches) {
      $(error).html('')
      //$closerTimeSpinner.find('.spinner-hour input').val(timeRegEx.split(':')[0]);
      //$closerTimeSpinner.find('.spinner-min input').val(timeRegEx.split(':')[1]);
      return true
    } else {
      var errMsg = 'Formato data non valido'
      $(error).html(errMsg)
      //$(that).val('Formato data non valido')
      return false
    }
  }

  $('.spinner-control button')
    .attr('aria-hidden', 'true')
    .attr('tabindex', '-1')

  $('.btn-time').click(function() {
    var spinner = $(this)
      .closest('fieldset')
      .next('.spinner-control')
    var txt = $(this)
      .closest('.calendar-input-container')
      .find('.txtTime')
    var spinnerh = $(spinner).find('.spinnerHour')
    var spinnermin = $(spinner).find('.spinnerMin')
    if ($(spinner).attr('aria-hidden') == 'true') {
      loadSpinner(spinner, txt)
    } else {
      hideSpinner(spinner, txt, spinnerh, spinnermin)
    }
  })

  //Hour and Minute
  $('.spinnerHour, .spinnerMin').each(function(e) {
    return spinbutton($(this).attr('id'), $(this).attr('bb-skip'), e)
  })

  $(
    '.btnHourUp, .btnHourDown, .btnMinUp, .btnMinDown',
    '.spinner-control'
  ).click(function() {
    handleClick($(this).attr('id'))
  })

  $('.spinner-control *').on('keydown', function(e) {
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

      $(txt)
        .attr('value', newTime)
        .focus()
      $('.spinner-control').attr('aria-hidden', 'true')
      $('.spinner-control').fadeOut(100)
      return false
    } else if (e.which == 27) {
      hideSpinner(spinner, txt, spinnerh, spinnermin)
      return false
    }
  })

  //Direct Time Entry
  $('.txtTime').on('keydown', function(event) {
    if (e.which == 13) {
      return checkForm($(this))
    }
  })

  $('.spinner-control, .btn-time').on('click', function(event) {
    event.stopPropagation()
  })

  $('.form-control.txtTime').on('blur', function() {
    checkForm(this)
  })
  $('input.spinnerHour, input.spinnerMin').on('keypress', function(event) {
    return false
  })

  // click out to close
  $(window).click(function() {
    var spinner = $('.spinner-control[aria-hidden="false"]')
    var spinnerh = $(spinner).find('.spinnerHour')
    var spinnermin = $(spinner).find('.spinnerMin')
    var txt = $(spinner)
      .closest('.time-spinner')
      .find('.txtTime')
    if ($(spinner).length > 0) {
      hideSpinner(spinner, txt, spinnerh, spinnermin)
    }
  })
})
