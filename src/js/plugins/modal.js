
function radiomodalcheck(){
	var target = $('.modal-body').find('input[type=radio]');
	$(target).click(function(){
		var button = $(this).closest('.modal-content').find('.modal-footer .btn-primary');
		$(button).removeAttr('disabled')
	})
}


$(document).ready( 
	function() {
		radiomodalcheck()
	});