function dimmerShow(target) {

	if ( $(target).css('display') != 'flex' ) {
		$(target).css("display", "flex").hide().fadeIn(200);
	}

}
function dimmerHide(target) {
	$(target).fadeOut(200);
}