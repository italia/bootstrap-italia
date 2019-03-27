$(function() {
  var usingMouse

  $(document)
    .on('keydown mousedown', function(e) {
      usingMouse = e.type === 'mousedown'
    })
    .on('focusin', function(e) {
      if (usingMouse) {
	if (e.target){
		$(e.target).addClass('focus--mouse');
	}
      }
    })
    .on('focusout', function(e) {
      if (e.target){
	   $(e.target).removeClass('focus--mouse');
      }
    })
})
