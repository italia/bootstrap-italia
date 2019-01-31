$(function() {
  var $form = $('.upload-dragdrop:not(.success)')
  var droppedFiles = false

  $form
    .on('drag dragstart dragend dragover dragenter dragleave drop', function(
      e
    ) {
      e.preventDefault()
      e.stopPropagation()
    })
    .on('dragover dragenter', function() {
      $(this).addClass('dragover')
    })
    .on('dragleave dragend drop', function() {
      $(this).removeClass('dragover')
    })
    .on('drop', function(e) {
      //change drag and drop state
      $(this).addClass('loading')
      //init upload circular loader
      $(this)
        .find('.upload-progress')
        .circularloader({
          backgroundColor: '#ffffff', //background colour of inner circle
          fontColor: '#000000', //font color of progress text
          fontSize: '40px', //font size of progress text
          radius: 130, //radius of circle
          progressBarBackground: 'transparent', //background colour of circular progress Bar
          progressBarColor: '#0073e6', //colour of circular progress bar
          progressBarWidth: 96, //progress bar width
          progressPercent: 0, //progress percentage out of 100, start with 0
        })
    })
})
