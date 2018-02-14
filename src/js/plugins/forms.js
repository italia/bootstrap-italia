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

// Inizializzazione effetto active sulle label quando i loro input valorizzati
$(document).ready(function() {
  $('.form-group :input[value]').siblings("label").addClass("active");
});

// Gestione visibilità password
$(document).ready(function() {
  $("input:password").each(function(e){
    //$(this).siblings("label").after('<span class="btnEye eyeOn" toggle="'+$(this).attr("id")+'"><svg aria-hidden="true" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-eye fa-w-18 fa-3x"><path fill="currentColor" d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z" class=""></path></svg></span>');
    $(this).siblings("label").after('<span class="btnEye eyeOn" toggle="'+$(this).attr("id")+'"></span>');
  });
  
  $(".btnEye").on("click", function() {
    $(this).toggleClass("eyeOff");
    var input = $("#"+$(this).attr("toggle"));
    input.focus();
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
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
