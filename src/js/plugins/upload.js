
var $form = $('.upload-dragdrop:not(.success)');
var droppedFiles = false;

$form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
	e.preventDefault();
	e.stopPropagation();
})

.on('dragover dragenter', function() {
	$form.addClass('dragover');
})

.on('dragleave dragend drop', function() {
	$form.removeClass('dragover');
})

.on('drop', function(e) {
	//UPLOAD LOGIC GOES HERE
	//ex: droppedFiles = e.originalEvent.dataTransfer.files;
});