//-- Animazione dropdown mobile

// Animazione slide down
$('.navbar .dropdown').on('show.bs.dropdown', function() {
	if (window.matchMedia("(max-width: 768px)").matches) {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	}
});

// Animazione slide up
$('.navbar .dropdown').on('hide.bs.dropdown', function() {
	if (window.matchMedia("(max-width: 768px)").matches) {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	}
});

$( window ).resize(function() {
	// reset parametri click iniettati su mobile
	if (window.matchMedia("(min-width: 769px)").matches) {
		$('.navbar .dropdown-menu.show').removeAttr('style')
	}
})