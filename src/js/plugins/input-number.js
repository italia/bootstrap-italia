//resize all input numbers field on DR
$(document).ready(function() {
	$( ".input-number input[type=number]" ).each(function( index ) {
		inputNumberResize(this);
	});
});

//resize function
function inputNumberResize(target) {
	if (!$(target).closest('.input-number').hasClass('percentage')) {
		var fieldLength = ($( target ).val().length * 2) + 'ch';
		$(target).css('width', fieldLength);
	}
	if ($(target).closest('.input-number').hasClass('currency')) {
		var fieldLength = 'calc(40px + ' + ($( target ).val().length * 2) + 'ch)';
		$(target).css('width', fieldLength);
	}
}

//add & sub button
$('.input-number button').click(function(e){
	e.preventDefault();
	//get target input field
	var inputTarget = $(this).closest('.input-number').find('input[type=number]');
	var inputTargetVal = parseFloat($(inputTarget).val());

	//get min & max
	var inputTargetMax = parseFloat($(inputTarget).attr('max'));
	var inputTargetMin = parseFloat($(inputTarget).attr('min'));

	//get step
	var inputTargetStep = parseFloat($(inputTarget).attr('step'));
	if (!inputTargetStep) {
		inputTargetStep = 1;
	}

	if ($(this).hasClass('add')) {
		//add step
		inputTargetVal = inputTargetVal + inputTargetStep;
		//limit max
		if ((inputTargetMax != null) && (inputTargetVal > inputTargetMax)) {
			inputTargetVal = inputTargetMax;
		}
		//set value
		$(inputTarget).val(inputTargetVal);
	}

	if ($(this).hasClass('sub')) {
		//subtract step
		inputTargetVal = inputTargetVal - inputTargetStep;
		//limit min
		if ((inputTargetMin != null) &&  (inputTargetVal < inputTargetMin)) {
			inputTargetVal = inputTargetMin;
		}
		//set value
		$(inputTarget).val(inputTargetVal);
	}

	//resize input
	inputNumberResize(inputTarget);

});

//manual input
$('.input-number input[type=number]').change(function(e){

	//get field val
	var inputTargetVal = parseFloat($(this).val());

	//get min & max
	var inputTargetMax = parseFloat($(this).attr('max'));
	var inputTargetMin = parseFloat($(this).attr('min'));

	//limit min
	if (inputTargetMin && (inputTargetVal < inputTargetMin)) {
		inputTargetVal = inputTargetMin;
	}
	//limit max
	if (inputTargetMax && (inputTargetVal > inputTargetMax)) {
		inputTargetVal = inputTargetMax;
	}

	//set value
	$(this).val(inputTargetVal);

	//resize input
	inputNumberResize(this);
});