
var $form = $('.upload-dragdrop');
var droppedFiles = false;

$form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
	e.preventDefault();
	e.stopPropagation();
})

.on('dragover dragenter', function() {
	$form.addClass('is-dragover');
})

.on('dragleave dragend drop', function() {
	$form.removeClass('is-dragover');
})

.on('drop', function(e) {
	//UPLAOD LOGIC GOES HERE
	//droppedFiles = e.originalEvent.dataTransfer.files;
});