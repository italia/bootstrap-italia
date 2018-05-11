//-- Animazione dropdown
// Animazione slide down
$('.navbar .dropdown').on('show.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

// Animazione slide up
$('.navbar .dropdown').on('hide.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
});