$(window).on('scroll', function () {
  if ($('a[data-attribute*="back-to-top"]').length && $(this).scrollTop() >= 100) {
    $('a[data-attribute*="back-to-top"]').addClass('back-to-top-show');
  } else {
    $('a[data-attribute*="back-to-top"]').removeClass('back-to-top-show');
  }
});

$('a[data-attribute*="back-to-top"]').on('click', function () {
  $('body,html').animate(
    {scrollTop: 0},
    800,
    'easeOutExpo'
  );
});
