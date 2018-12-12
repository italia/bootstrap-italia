function notificationShow(notificationTarget,notificationTimeOut) {

	if ($('#'+notificationTarget).hasClass('dismissable')) {
		//dismissable
		$('#'+notificationTarget).fadeIn(300);
	} else {
		//standard (timeout)
		$('#'+notificationTarget).fadeIn(300);
		if (typeof notificationTimeOut == "number") {
			//timeout set by parameter
			var timeToFade = notificationTimeOut;
		} else {
			//timeout default value 7s
			var timeToFade = 7000;
		}
		//fadeout
		setTimeout(function(){
			$('#'+notificationTarget).fadeOut(100);
		}, timeToFade);
	}
}

//dismissable close button
$('.notification-close').click(function(){
	$(this).closest('.notification').fadeOut(100);
});
