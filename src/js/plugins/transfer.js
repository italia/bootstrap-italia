$(function() {
  // header input
  var headerInput = $('.transfer-header input')
  var listInput = $('.transfer-group input')

  // transfer buttons
  var addButton = $('.it-transfer-block').find('a.transfer')
  var inverseButton = $('.it-transfer-block').find('a.backtransfer')
  var resetButton = $('.it-transfer-block').find('a.reset')

  // stato iniziale
  var elemLeft = $('.source .transfer-group .form-check')
  var elemRight = $('.target .transfer-group .form-check')
  var elemLeftNum = elemLeft.length
  var elemRightNum = elemRight.length
  var leftStart = ''
  var rightStart = ''

  $(elemLeft).each(function(el) {
    leftStart = leftStart + this
  })
  $(elemRight).each(function(el) {
    rightStart = rightStart + this
  })

  function disableElement($el) {
    $el
      .removeClass('active')
      .attr('disabled', 'disabled')
      .attr('aria-disabled', 'true')
  }

  function enableElement($el) {
    $el
      .addClass('active')
      .removeAttr('disabled')
      .removeAttr('aria-disabled')
  }

  function checkListHeader(scopeElControl) {
    var listToCheck = $(scopeElControl).find('.transfer-group input')
    var listToCheckControl = $(scopeElControl).find(
      '.transfer-group input:checked'
    )
    var inputHeader = $(scopeElControl).find('.transfer-header input')
    // contextual buttons
    addButton = scopeElControl.closest('.it-transfer-block').find('a.transfer')
    inverseButton = scopeElControl
      .closest('.it-transfer-block')
      .find('a.backtransfer')

    if (listToCheckControl.length > 0) {
      $(listToCheck).prop('checked', false)
      $(inputHeader)
        .removeClass('semi-checked')
        .prop('checked', false)
      // controllo quale pulsante centrale disattivare
      if (scopeElControl.hasClass('source')) {
        disableElement(addButton)
      } else {
        disableElement(inverseButton)
      }
    } else {
      $(listToCheck).prop('checked', true)
      // controllo quale pulsante centrale attivare
      if (scopeElControl.hasClass('source')) {
        enableElement(addButton)
      } else {
        enableElement(inverseButton)
      }
    }
  }

  function checkList(scopeElControl) {
    var listToCheck = $(scopeElControl).find('.transfer-group input')
    var listToCheckControl = $(scopeElControl).find(
      '.transfer-group input:checked'
    )
    var inputHeader = $(scopeElControl).find('.transfer-header input')

    // contextual buttons
    addButton = scopeElControl.closest('.it-transfer-block').find('a.transfer')
    inverseButton = scopeElControl
      .closest('.it-transfer-block')
      .find('a.backtransfer')

    if (listToCheckControl.length == 0) {
      inputHeader.removeClass('semi-checked').prop('checked', false)
      // controllo quale pulsante centrale disattivare
      if (scopeElControl.hasClass('source')) {
        disableElement(addButton)
      } else {
        disableElement(inverseButton)
      }
    } else if (listToCheckControl.length == listToCheck.length) {
      inputHeader.removeClass('semi-checked').prop('checked', true)
      // controllo quale pulsante centrale disattivare
    } else {
      // controllo quale pulsante centrale disattivare
      inputHeader.addClass('semi-checked').prop('checked', false)
      if (scopeElControl.hasClass('source')) {
        enableElement(addButton)
      } else {
        enableElement(inverseButton)
      }
    }
  }

  function addItems(sourceControl, targetControl) {
    var sourceItems = sourceControl.find('.transfer-group input:checked')
    var sourceItemsBlock = sourceItems.closest('.form-check')
    var sourceHeadInput = sourceControl.find('.transfer-header input')
    var sourceHeadLabel = sourceControl.find('.transfer-header span.num')
    var sourceItemsQty = sourceItems.length
    var sourceTotalQty = sourceControl.find('.transfer-group input').length

    var targetDiv = targetControl.find('.transfer-group')
    var targetQty =
      targetControl.find('.transfer-group input').length + sourceItemsQty
    var targetHeadLabel = targetControl.find('.transfer-header span.num')
    var targetHeadInput = targetControl.find('.transfer-header input')

    // ciclo di aggiunta
    sourceItemsBlock.each(function() {
      $(this)
        .detach()
        .appendTo(targetDiv)
        .find('input')
        .prop('checked', false)
    })
    // update label
    var totalSource = sourceTotalQty - sourceItemsQty
    var totalTarget = targetQty

    sourceHeadLabel.text(totalSource)
    targetHeadLabel.text(totalTarget)

    // disattivazione header input se non ci sono più elementi
    if (totalSource == 0) {
      sourceHeadInput.prop('disabled', true)
    }
    if (totalTarget > 0) {
      targetHeadInput.prop('disabled', false)
    }

    // ripristino stato iniziale input header
    sourceHeadInput.removeClass('semi-checked').prop('checked', false)
  }

  function resetAll(contextControl) {
    var left = contextControl.find('.source .transfer-group')
    var right = contextControl.find('.target .transfer-group')
    var textLeft = contextControl.find('.source .transfer-header span.num')
    var textRight = contextControl.find('.target .transfer-header span.num')
    var header = contextControl.find('.transfer-header input')
    var allElement = contextControl.find('.transfer-group input')

    $(left)
      .find('.form-check')
      .detach()
    $(right)
      .find('.form-check')
      .detach()
    $(left).append(elemLeft)
    $(right).append(elemRight)

    $(textLeft).text(elemLeftNum)
    $(textRight).text(elemRightNum)

    $(header)
      .prop('disabled', false)
      .removeClass('semi-checked')
    $(header).prop('checked', false)

    $(allElement).prop('checked', false)
  }

  // click su header
  $(headerInput).on('click', function() {
    var scopeEl = $(this).closest('.it-transfer-wrapper')
    checkListHeader(scopeEl)
  })

  //click su lista
  $(listInput).on('click', function() {
    var scopeEl = $(this).closest('.it-transfer-wrapper')
    checkList(scopeEl)
  })

  //spostamento da sinistra a destra
  $(addButton).on('click', function(event) {
    var source = $(this)
      .closest('.it-transfer-block')
      .find('.source')
    var target = $(this)
      .closest('.it-transfer-block')
      .find('.target')
    resetButton = $(this)
      .closest('.it-transfer-block')
      .find('a.reset')

    // attivo il pulsante di reset
    enableElement(resetButton)

    // disattivo il pulsante corrente
    disableElement($(this))

    addItems(source, target)
    event.preventDefault()
  })

  //spostamento da destra a sinistra
  $(inverseButton).on('click', function(event) {
    var target = $(this)
      .closest('.it-transfer-block')
      .find('.source')
    var source = $(this)
      .closest('.it-transfer-block')
      .find('.target')
    resetButton = $(this)
      .closest('.it-transfer-block')
      .find('a.reset')

    // attivo il pulsante di reset
    enableElement(resetButton)

    // disattivo il pulsante corrente
    disableElement($(this))

    addItems(source, target)
    event.preventDefault()
  })

  $(resetButton).on('click', function(event) {
    var context = $(this).closest('.it-transfer-block')
    var addButton = context.find('a.transfer')
    var reverseButton = context.find('a.backtransfer')
    disableElement(addButton)
    disableElement(reverseButton)
    disableElement($(this))

    resetAll(context)
    event.preventDefault()
  })
})
