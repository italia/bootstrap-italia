$(function() {
  $.fn.dimmerShow = function() {
    return this.each(function() {
      if ($(this).css('display') != 'flex') {
        $(this)
          .css('display', 'flex')
          .hide()
          .fadeIn(200)
      }
    });
  }

  $.fn.dimmerHide = function (target) {
    return this.each(function() {
      $(this).fadeOut(200)
    });
  }
})
