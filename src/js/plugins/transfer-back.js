$(function(){
	var check = $('.it-transfer-wrapper  input[type="checkbox"]');

	// transfer buttons
	var addButton = $('.it-transfer-block').find('a.transfer');
	var inverseButton = $('.it-transfer-block').find('a.backtransfer');
	var resetButton = $('.it-transfer-block').find('a.reset');

	// stato iniziale
	var elemLeft = $('.source .transfer-group .form-check')
	var elemRight =  $('.target .transfer-group .form-check')
	var elemLeftNum = elemLeft.length;
	var elemRightNum = elemRight.length;
	var leftStart = '';
	var rightStart = '';
	$(elemLeft).each(function(el){
		leftStart = leftStart + this;
	})
	$(elemRight).each(function(el){
		rightStart = rightStart + this;
	})

	// ripristino stato iniziale
	function resetToMove(contextControl){
		var left = contextControl.find('.source .transfer-group');
		var right = contextControl.find('.target .transfer-group');
		var textLeft = contextControl.find('.source .transfer-header span.num');
		var textRight = contextControl.find('.target .transfer-header span.num');
		var header = contextControl.find('.transfer-header input');
		
		$(left).html(elemLeft)
		$(right).html(elemRight)

		$(textLeft).text(elemLeftNum)
		$(textRight).text(elemRightNum)

		$(header).prop('disabled',false)
	}
	
	// control active check & header check
	function checkIfActive(targetControl,targetHeaderControl,containerTypeControl,addButtonControl){
		$(targetControl).each(function(el){
			if($(this).prop('checked')){
				
				if(!($(targetHeaderControl).hasClass('semi-checked'))){
					$(targetHeaderControl).addClass('semi-checked')
					$(targetHeaderControl).prop('checked',false)
					if(containerTypeControl.hasClass('source')){
						$(addButtonControl).addClass('active')
					}
					if(containerTypeControl.hasClass('target')){
						$(inverseButton).addClass('active')
					}
				}
				return false
			}else{
				$(targetHeaderControl).removeClass('semi-checked')
				if(containerTypeControl.hasClass('source')){
					$(addButtonControl).removeClass('active')
				}
				if(containerTypeControl.hasClass('target')){
					$(inverseButton).removeClass('active')
				}
			}
		})
	}
	
	// clivk on checkbox
	$(check).on('click',function(event){
		var isHeader = $(this).parent().parent('.transfer-header');
		var target = $(this).closest('.it-transfer-wrapper').find('.transfer-group').find('input[type="checkbox"]')
		var targetHeader = $(this).closest('.it-transfer-wrapper').find('.transfer-header').find('input[type="checkbox"]')
		

		// buttons state
		addButton = $(this).closest('.it-transfer-block').find('a.transfer');
		inverseButton = $(this).closest('.it-transfer-block').find('a.backtransfer');
		resetButton = $(this).closest('.it-transfer-block').find('a.reset');

		// container type
		var containerType = $(this).closest('.it-transfer-wrapper');



		//- se è in header
		if (isHeader.length > 0){
			if($(this).prop("checked")){
				if (!($(this)).hasClass('semi-checked')){
					$(target).prop('checked',true);
					
					if(containerType.hasClass('source')){
						$(addButton).addClass('active')
					}
					if(containerType.hasClass('target')){
						$(inverseButton).addClass('active')
					}

				}else{
					$(target).prop('checked',false);
					$(this).prop('checked',false);
					$(this).removeClass('semi-checked');
					
					if(containerType.hasClass('source')){
						$(addButton).removeClass('active')
					}
					if(containerType.hasClass('target')){
						$(inverseButton).removeClass('active')
					}
				}
				
			}else{
				if (($(this).hasClass('semi-checked'))){
					$(this).prop('checked',false);
					$(this).removeClass('semi-checked');
				}
				$(target).prop('checked',false);
				if(containerType.hasClass('source')){
					$(addButton).removeClass('active')
				}
				if(containerType.hasClass('target')){
					$(inverseButton).removeClass('active')
				}
			}
		//- se è in lista	
		}else{
			checkIfActive(target,targetHeader,containerType,addButton);
		}
	})

	// controllo elementi source
	function sourceControl(contextControl){

		var tocheck = contextControl.find('.transfer-scroll').find('input');
		var checknum = tocheck.length
		var targetText = contextControl.find('.transfer-header').find('label span.num');
		var header = contextControl.find('.transfer-header input');
		
		$(header).prop('checked',false).removeClass('semi-checked');
		
	

		if (checknum < 1){
			$(header).prop('disabled',true)
		}else{
			$(header).prop('disabled',false)
		}

		$(targetText).text(checknum)
	}

	// controllo elementi target
	function targetControl(targetControl){
		var tocheck = targetControl.find('input');
		var checknum = tocheck.length
		var targetText = tocheck.closest('.it-transfer-wrapper').find('.transfer-header').find('label span.num');
		var header = $(targetControl).find('.transfer-header input');
	

	

		if (checknum < 1){
			$(header).prop('disabled',true)
		
		}else{
			
			$(header).prop('disabled',false)
		}

		$(targetText).text(checknum)
		
	}

	// elementi da aggiungere
	function checkToMove(contextControl, targetControl){
		
		var elements = contextControl.find('.transfer-group').find('input:checked');
		var sourceTag = $(elements).closest('.form-check');

		$(elements).each(function(){
			$(this).prop('checked',false);
			$(sourceTag).detach().appendTo(targetControl).addClass('added');
		})
	}

	
	

	// adding an item
	$(addButton).click(function(){
		// buttons 
		inverseButton = $(this).closest('.it-transfer-block').find('a.backtransfer');
		resetButton = $(this).closest('.it-transfer-block').find('a.reset');

		var context = $(this).closest('.it-transfer-block').find('.source');
		var target =  $(this).closest('.it-transfer-block').find('.it-transfer-wrapper.target').find('.transfer-group');
		var targetHeader = $(this).closest('.it-transfer-block').find('.it-transfer-wrapper.target').find('.transfer-header input');

		$(this).removeClass('active');
		$(resetButton).addClass('active');
		$(targetHeader).prop('disabled',false);
		
		checkToMove(context,target)
		sourceControl(context)
		targetControl(target)
		
	})

	// adding an item
	$(inverseButton).click(function(){
		// buttons 
		resetButton = $(this).closest('.it-transfer-block').find('a.reset');

		var context = $(this).closest('.it-transfer-block').find('.target');
		var target =  $(this).closest('.it-transfer-block').find('.it-transfer-wrapper.source').find('.transfer-group');

		$(this).removeClass('active');
		if(!(resetButton).hasClass('active')){
			$(resetButton).addClass('active');
		}
		
		
		checkToMove(context,target)
		sourceControl(context)
		targetControl(target)
		
	})


	// reset all
	$(resetButton).click(function(){
		context = $(this).closest('.it-transfer-block'); 
		addButton = $(this).closest('.it-transfer-block').find('a.transfer');
		inverseButton = $(this).closest('.it-transfer-block').find('a.backtransfer');
		contextSource = $(this).closest('.it-transfer-block').find('.source');
		contextTarget= $(this).closest('.it-transfer-block').find('.target');

		resetToMove(context)

		$(this).removeClass('active')

	})
})