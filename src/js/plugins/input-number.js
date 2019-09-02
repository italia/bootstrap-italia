$(function() {
  //resize function
  function inputNumberResize($target) {
    var $inputNumber = $target.closest('.input-number')
    if ($inputNumber.hasClass('input-number-adaptive')) {
      // width = padding (12px + 32px) + number of characters
      if (!$inputNumber.hasClass('input-number-percentage')) {
        $target.css('width', 'calc(44px + ' + $target.val().length + 'ch)')
        if (isIe())
          $target.css(
            'width',
            'calc(44px + (1.5 * ' + $target.val().length + 'ch))'
          )
      }
      if ($inputNumber.hasClass('input-number-currency')) {
        $target.css(
          'width',
          'calc(40px + 44px + ' + $target.val().length + 'ch)'
        )
        if (isIe())
          $target.css(
            'width',
            'calc(40px + 44px + (1.5 * ' + $target.val().length + 'ch))'
          )
      }
    }
  }

  //resize all input numbers field on DR
  $('.input-number input[type=number]').each(function(index) {
    inputNumberResize($(this))
  })

  //add & sub button
  $('.input-number button').click(function(e) {
    e.preventDefault()
    //get target input field
    var $inputTarget = $(this)
      .closest('.input-number')
      .find('input[type=number]')
    var inputTargetVal = parseFloat($inputTarget.val())

    if (!isNaN(inputTargetVal)) {
      var val = 0
      //get min & max
      var inputTargetMax = parseFloat($inputTarget.attr('max'))
      var inputTargetMin = parseFloat($inputTarget.attr('min'))

      //get step
      var inputTargetStep = parseFloat($inputTarget.attr('step'))
      if (!inputTargetStep) {
        inputTargetStep = 1
      }

      if ($(this).hasClass('input-number-add')) {
        //add step
        val =
          !isNaN(inputTargetMax) &&
          inputTargetVal + inputTargetStep >= inputTargetMax
            ? inputTargetMax
            : inputTargetVal + inputTargetStep
        $inputTarget.val(val)
      }

      if ($(this).hasClass('input-number-sub')) {
        //subtract step
        val =
          !isNaN(inputTargetMin) &&
          inputTargetVal - inputTargetStep <= inputTargetMin
            ? inputTargetMin
            : inputTargetVal - inputTargetStep
        $inputTarget.val(val)
      }
    }

    //resize input
    inputNumberResize($inputTarget)
  })

  //manual input
  $('.input-number input[type=number]').change(function(e) {
    //get field val
    var $inputTarget = $(this)
    var inputTargetVal = parseFloat($inputTarget.val())

    if (!isNaN(inputTargetVal)) {
      //get min & max
      var inputTargetMax = parseFloat($inputTarget.attr('max'))
      var inputTargetMin = parseFloat($inputTarget.attr('min'))
      //limit min
      if (inputTargetMin && inputTargetVal < inputTargetMin) {
        inputTargetVal = inputTargetMin
      }
      //limit max
      if (inputTargetMax && inputTargetVal > inputTargetMax) {
        inputTargetVal = inputTargetMax
      }
      $inputTarget.val(inputTargetVal)
    }

    //resize input
    inputNumberResize($inputTarget)
  })

  // Fixing IE11 numeric behavior
  $('input[type=number]').on('keyup', function(e) {
    var value = e && e.target.value
    var regexp = /[^0-9,.]/g
    this.value = value.replace(regexp, '')
  })
})
