$(document).ready(function () {
  let selector = $('.it-datepicker-wrapper')
  if (selector.length > 0) {
    selector.each(function () {
      let inputElem = $(this).find('.input-group').find('.it-date-datepicker')
      let alertdiv = $(this).find('.invalid-feedback')
      let successdiv = $(this).find('.valid-feedback')
      inputElem.after(alertdiv)
      inputElem.after(successdiv)
    })
  }
})
