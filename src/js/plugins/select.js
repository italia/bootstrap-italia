$( document ).ready(function() {
	// change checkbox states in dropdown
	$(function () {
		$(".selectpicker").on("changed.bs.select", function(e, clickedIndex, newValue, oldValue) {
		/*	var selectedD = $(this).find('option').eq(clickedIndex).attr("check-id");
			var toChange = $('.dropdown-menu').find('input[data-id=' + selectedD +']');

			if ($(toChange).prop('checked')){
				$(toChange).prop('checked',false)
			}else{
				$(toChange).prop('checked',true)
			}*/
		});
	});

	$(function () {
		$(".selectpicker").on("changed.bs.select", function(e){
			var tocheck = $('.dropdown-menu li.selected').find('input[type="checkbox"]');
			var todecheck = $('.dropdown-menu li:not(.selected)').find('input[type="checkbox"]');
			$(tocheck).prop('checked',true)
			$(todecheck).prop('checked',false)
		});
	});

	console.log('new')
});