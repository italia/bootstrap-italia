$(window).on('scroll', function () {
    $('a[data-attribute*="back-to-top"]').toggle($(this).scrollTop() >= 100);
});

$('a[data-attribute*="back-to-top"]').on('click', function() {
    $('body,html').animate(
        {scrollTop : 0},
        800,
        'easeOutExpo'
    );
});
