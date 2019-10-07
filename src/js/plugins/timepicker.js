// key numbers
var numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
var timeRegEx = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/i

$(document).ready(function() {
  function allowKey(key) {
    return [8, 9, 13].includes(key)
  }

  function loadSpinner($spinner) {
    $spinner
      .toggleClass('is-open')
      .attr('aria-hidden', 'false')
      .fadeIn(100)
  }

  function hideSpinner($spinner, $input, $spinnerH, $spinnerM, index) {
    if ($spinner.hasClass('is-open')) {
      $spinner
        .fadeOut(100)
        .toggleClass('is-open')
        .attr('aria-hidden', 'true')
      if ($spinnerH && $spinnerM) {
        var newTime = $spinnerH.attr('value') + ':' + $spinnerM.attr('value')
        $input.val(newTime)
      }
      checkForm($input, index)
    }
  }

  // save default labels
  var defLabels = {}

  // TIME VALIDATION FOR DATA ENTRY
  function checkForm($input, index) {
    var newValue = $input.val()
    if (newValue) {
      var $label = $input.siblings('label')

      var matches = newValue != '' ? newValue.match(timeRegEx) : ''

      if (matches) {
        $label.removeClass('error-label').html(defLabels[index])
      } else {
        $label.addClass('error-label').html('Formato ora non valido (hh:mm)')
      }
    }
  }

  // Loop each input field
  $('.it-timepicker-wrapper').each(function(index) {
    //GLOBAL VARIABLES
    var valMin,
      valMax,
      valNow,
      skipVal,
      $spinnerInput,
      timeH = '00',
      timeM = '00'

    // wrapper el
    var $el = $(this)

    // get input field
    var $input = $el.find('.txtTime')
    // get bnt-time
    var $btnTime = $el.find('.btn-time')

    // get spinner
    var $spinner = $el.find('.spinner-control')
    var $spinnerH = $el.find('.spinnerHour')
    var $spinnerM = $el.find('.spinnerMin')

    var $btnHourUp = $el.find('.btnHourUp')
    var $btnHourDown = $el.find('.btnHourDown')
    var $btnMinUp = $el.find('.btnMinUp')
    var $btnMinDown = $el.find('.btnMinDown')

    // $input.attr('data-input', 'input-' + index)
    // $spinner.attr('data-spinner', 'spinner-' + index)

    var setDigit = number => {
      if (number < 0) number = 0
      return number < 10 ? '0' + number : number
    }

    var getValues = $button => {
      // get spinner input
      $spinnerInput = $button.closest('.spinner').find('input')
      // get set values
      valMin = parseInt($spinnerInput.attr('aria-valuemin'))
      valMax = parseInt($spinnerInput.attr('aria-valuemax'))
      valNow = parseInt($spinnerInput.attr('aria-valuenow'))
      skipVal = parseInt($spinnerInput.attr('bb-skip'))
    }

    var handleClick = (action, $button) => {
      getValues($button)
      // manage up/down
      switch (action) {
        case 'up':
          if (!valMax || valNow < valMax) valNow++
          break
        case 'down':
          if (!valMin || valNow > valMin) valNow--
          break
      }

      // manage skipVal
      if (action && skipVal > -1) {
        switch (true) {
          case action === 'up' && skipVal === valNow:
            valNow++
            break
          case action === 'down' && skipVal === valNow:
            valNow--
            break
        }
      }

      switch (true) {
        case $button.hasClass('btnHourUp') || $button.hasClass('btnHourDown'):
          timeH = setDigit(valNow)
          break
        case $button.hasClass('btnMinUp') || $button.hasClass('btnMinDown'):
          timeM = setDigit(valNow)
          break
      }

      $spinnerInput.val(setDigit(valNow))
      $spinnerInput.attr('value', setDigit(valNow))
      $spinnerInput.attr('aria-valuenow', setDigit(valNow))

      $input.val(timeH + ':' + timeM)
    }

    var handleType = ($spinnerInput, $button) => {
      var value = setDigit($spinnerInput.val())

      $spinnerInput.attr('aria-valuenow', value)
      handleClick(null, $button)
    }

    defLabels[index] = $input.siblings('label').text()

    $el
      .find('.spinner-control button')
      .attr('aria-hidden', 'true')
      .attr('tabindex', '-1')

    $btnTime.on('click', e => {
      e.stopPropagation()
      if ($spinner.hasClass('is-open')) {
        hideSpinner($spinner, $input, $spinnerH, $spinnerM, index)
      } else {
        loadSpinner($spinner)
      }
    })

    //Direct Time Entry
    $input
      .on('keyup', function(e) {
        var key = e.which || e.keyCode
        var val = $input.val()

        if (val.includes(':')) {
          var hArr = val.split(':')
          $spinnerH.attr('aria-valuenow', hArr[0].substring(0, 2))
          $spinnerH.attr('value', hArr[0].substring(0, 2))
          $spinnerH.val(hArr[0].substring(0, 2))
          timeH = hArr[0].substring(0, 2)
          $spinnerM.attr('aria-valuenow', hArr[1].substring(0, 2))
          $spinnerM.attr('value', hArr[1].substring(0, 2))
          $spinnerM.val(hArr[1].substring(0, 2))
          timeM = hArr[1].substring(0, 2)
        } else {
          $spinnerH.attr('aria-valuenow', val.substring(0, 2))
          $spinnerH.attr('value', val.substring(0, 2))
          $spinnerH.val(val.substring(0, 2))
          timeH = val.substring(0, 2)
        }

        if (key === 13) {
          return checkForm($input, index)
        }
      })
      .on('focus', e => {
        e.stopPropagation()
        if ($input.val()) {
          checkForm($input, index)
        }
      })
      .on('blur', e => {
        // console.log('$input blur')
        if ($input.val()) {
          checkForm($input, index)
        }
      })

    $btnHourUp.on('click', e => {
      handleClick('up', $btnHourUp, 'click hour up')
    })

    $btnHourDown.on('click', e => {
      handleClick('down', $btnHourDown, 'click hour down')
    })

    $btnMinUp.on('click', e => {
      handleClick('up', $btnMinUp, 'click min up')
    })

    $btnMinDown.on('click', e => {
      handleClick('down', $btnMinDown, 'click min down')
    })

    $spinnerH
      .on('keydown', e => {
        var key = e.which || e.keyCode
        var isNum = numbers.includes(key)
        switch (true) {
          case key === 38: // up
            $btnHourUp.trigger('click')
            break
          case key === 40: // down
            $btnHourDown.trigger('click')
            break
          case allowKey(key) || isNum: // tab or numbers
            return true
        }
        return false
      })
      .on('keyup', e => {
        var key = e.which || e.keyCode
        var isNum = numbers.includes(key)
        if (isNum) {
          handleType($spinnerH, $btnHourUp)
        }
      })

    $spinnerM
      .on('keydown', e => {
        var key = e.which || e.keyCode
        var isNum = numbers.includes(key)
        switch (true) {
          case key === 38: // up
            $btnMinUp.trigger('click')
            break
          case key === 40: // down
            $btnMinDown.trigger('click')
            break
          case allowKey(key) || isNum: // tab or numbers
            return true
        }
        return false
      })
      .on('keyup', e => {
        var key = e.which || e.keyCode
        var isNum = numbers.includes(key)
        if (isNum) {
          handleType($spinnerM, $btnMinUp)
        }
      })

    $(document).on('click', e => {
      hideSpinner($spinner, $input, $spinnerH, $spinnerM, index)
    })

    $spinner.on('click', e => {
      e.stopPropagation()
    })
  })
})
