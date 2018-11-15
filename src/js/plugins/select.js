$( document ).ready(function() {
	// change checkbox states in dropdown

	$(function () {
		$(".selectpicker").on("changed.bs.select", function(e){
			var tocheck = $('.dropdown-menu li.selected').find('input[type="checkbox"]');
			var todecheck = $('.dropdown-menu li:not(.selected)').find('input[type="checkbox"]');
			$(tocheck).prop('checked',true)
			$(todecheck).prop('checked',false)
		});
	});

});