$(function() {
  $('.rating.rating-label input[type=radio]').on('click', function(event) {
    var stars = $(this).val()
    var starsLabel = 'stelle'
    if (stars == 1) {
      starsLabel = 'stella'
    }
    $(this)
      .closest('.rating-label')
      .find('legend span:not(.sr-only)')
      .text(stars + ' ' + starsLabel)
  })
})
