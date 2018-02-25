// ===== Scroll to Top ====
$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 50) {        
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
