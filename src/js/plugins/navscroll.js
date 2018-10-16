$(document).ready(
	function() {
		$(".it-bottom-navscroll ul li a[href^='#']").on(
				'click', function(e) {

					// prevent default anchor click behavior
					e.preventDefault();

					// store hash
					var hash = this.hash;

					// animate
					$('html, body').animate({
						scrollTop : $(hash).offset().top - 150
					}, 600, function() {

						// when done, add hash to url
						// (default click behaviour)
						// window.location.hash = hash;

						if (history.pushState) {
							history.pushState(null, null, hash);
						} else {
							location.hash = hash;
						}

					});
					//close window on click
					$(overlay).trigger('click');
				});

				// sticky navbar activation for ie and edge
				/*$('.affix-top, .affix-bottom').iSticky({
					holderAutoHeight: true
				});*/

				// navscroll back function
				$(backbutton).click(function(event){
					$(overlay).trigger('click');
					$(this).fadeOut();
					event.preventDefault();
				})
				// navscroll item on scroll 
			
			$(window).scroll(function() {
					var scrollDistance = $(window).scrollTop();
			
					// Show/hide menu on scroll
					//if (scrollDistance >= 850) {
					//		$('nav').fadeIn("fast");
					//} else {
					//		$('nav').fadeOut("fast");
					//}
				
					// Assign active class to nav links while scolling
					$('.it-page-section').each(function(i) {
							if ($(this).position().top <= scrollDistance) {
									
									$('.it-navscroll-wrapper .menu-wrapper a.active').removeClass('active');
									$('.it-navscroll-wrapper .menu-wrapper a').eq(i).addClass('active');

									var parentsection = $('.it-navscroll-wrapper .menu-wrapper a').eq(i).closest('ul').prev('a');
									var parentparentsection = $(parentsection).closest('ul').prev('a');

									$(parentsection).addClass('active');
									$(parentparentsection).addClass('active');


									var textContent =  $('.it-navscroll-wrapper .menu-wrapper a').eq(i).find('span').text();
									
									
									var $btn = $('.it-bottom-navscroll .custom-navbar-toggler');
									var $icon = $btn.find('span.it-list'); 
									$btn.text(textContent);
									$btn.prepend($icon);
							}
					});
			}).scroll();

				
	});