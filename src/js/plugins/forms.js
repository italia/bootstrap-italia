$(".form-group input + label, .form-group select, .form-group textarea + label").click(function() {
  $(this).closest(".form-group").addClass("active");
});
$(".form-group input, .form-group select, .form-group textarea").on("focusin", function() {
  $(this).closest(".form-group").addClass("active");
});
$(".form-group input, .form-group select, .form-group textarea").on("focusout", function() {
  if($(this).val()==""){
    $(this).siblings("label").removeClass("active");
  } else {
    $(this).siblings("label").addClass("active");
  }
  $(this).closest(".form-group").removeClass("active");
});
$("input[class$='picker']").on("focusout", function() {
  $(this).siblings("label").addClass("active");
});

// Inizializzazione effetto active sulle label quando i loro input valorizzati
$(function() {
  $(".form-group :input[value], input[class$='picker']").siblings("label").addClass("active");
});


// Gestione input[type="file"]
$(".form-group input[type='file']").on("focusout", function() {
  $(this).siblings("label").addClass("active");
});

$('input:file').on('change', function(e){
  var numFiles = e.currentTarget.files.length;
  var nomiFiles = ""
  var multi = ""
  for (i=0;i<numFiles;i++){
    fileSize = parseInt(e.currentTarget.files[i].size, 10)/1024;
    filesize = Math.round(fileSize);
    nomiFiles = nomiFiles + e.currentTarget.files[i].name + ' (' + filesize + 'kb); '
  }
  if (numFiles>1) {
    multi = numFiles + " file da caricare: "
  }
  $(this).siblings('.form-file-name').text(multi+nomiFiles);
})
