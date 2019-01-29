$(function() {
  $('.it-has-checkbox').on('click', function(event) {
    var _target = $(this).find('input')
    if ($(_target).prop('checked')) {
      $(_target).prop('checked', false)
      $(this).removeClass('active')
    } else {
      $(_target).prop('checked', true)
      $(this).addClass('active')
    }
    event.preventDefault()
  })
})
