// ===== Forward ====
$('a[data-attribute*="forward"]').on('click', function(event) {
  var target = $(this.hash);
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500 );
  }
});
