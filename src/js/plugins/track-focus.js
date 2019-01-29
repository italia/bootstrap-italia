$(function() {
  var usingMouse

  $(document)
    .on('keydown mousedown', function(e) {
      usingMouse = e.type === 'mousedown'
    })
    .on('focusin', function(e) {
      if (usingMouse) e.target.classList.add('focus--mouse')
    })
    .on('focusout', function(e) {
      e.target.classList.remove('focus--mouse')
    })
})
