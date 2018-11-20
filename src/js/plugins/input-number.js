$('.input-number button').click(function(e){
	e.preventDefault();
	//get target input field
	var inputTarget = $(this).closest('.input-number').find('input[type=number]');
	var inputTargetVal = parseInt($(inputTarget).val());

	//get min & max
	var inputTargetMax = parseInt($(inputTarget).attr('max'));
	var inputTargetMin = parseInt($(inputTarget).attr('min'));

	//get step
	var inputTargetStep = parseInt($(inputTarget).attr('step'));
	if (!inputTargetStep) {
		inputTargetStep = 1;
	}

	if ($(this).hasClass('add')) {
		//add step
		inputTargetVal = inputTargetVal + inputTargetStep;
		//limit max
		if (inputTargetMax && (inputTargetVal > inputTargetMax)) {
			inputTargetVal = inputTargetMax;
		}
		//set value
		$(inputTarget).val(inputTargetVal);
	}

	if ($(this).hasClass('sub')) {
		//subtract step
		inputTargetVal = inputTargetVal - inputTargetStep;
		//limit min
		if (inputTargetMin && (inputTargetVal < inputTargetMin)) {
			inputTargetVal = inputTargetMin;
		}
		//set value
		$(inputTarget).val(inputTargetVal);
	}

});