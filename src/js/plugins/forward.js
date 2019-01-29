$(function() {
  $('a[data-attribute*="forward"]').on('click', function(event) {
    let target = $(this.hash)
    if (target.length) {
      event.preventDefault()
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        500
      )
    }
  })
})
