/*eslint-disable */
function notificationShow(notificationTarget, notificationTimeOut) {
  /*eslint-disable */
  $('#' + notificationTarget).fadeIn(300)
  var timeToFade
  if (!$('#' + notificationTarget).hasClass('dismissable')) {
    //standard (timeout)
    $('#' + notificationTarget).fadeIn(300)
    if (typeof notificationTimeOut == 'number') {
      //timeout set by parameter
      timeToFade = notificationTimeOut
    } else {
      //timeout default value 7s
      timeToFade = 7000
    }
    //fadeout
    setTimeout(function () {
      $('#' + notificationTarget).fadeOut(100)
    }, timeToFade)
  }
}

//dismissable close button
$(document).on('click', '.notification-close', function () {
  $(this).closest('.notification').fadeOut(100)
})
