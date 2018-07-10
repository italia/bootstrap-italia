$(window).on('scroll', function () {
    if ($('a[data-attribute*="return-to-top"]').length && $(this).scrollTop() >= 50) {
        $('a[data-attribute*="return-to-top"]').fadeIn(200);
    } else {
        $('a[data-attribute*="return-to-top"]').fadeOut(200);
    }
});

$('a[data-attribute*="return-to-top"]').on('click', function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
