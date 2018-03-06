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

// Gestione password capslock
var getCursorX = function getCursorX(input, selectionPoint) {
  var inputX = input.offsetLeft;
  var div = document.createElement('div');
  var copyStyle = getComputedStyle(input);
  var swap = '.';
  var inputValue = input.tagName === 'INPUT' ? input.value.replace(/ /g, swap) : input.value;
  var textContent = inputValue.substr(0, selectionPoint);
  div.textContent = textContent;
  div.style.width = 'auto';
  var span = document.createElement('span');
  span.textContent = inputValue.substr(selectionPoint) || '.';
  div.appendChild(span);
  document.body.appendChild(div);
  var spanX = span.offsetLeft;
  document.body.removeChild(div);
  return {
    x: inputX + spanX
  };
};
function creaPopoverCapsLock(id){
  $("div[id*='capslock_'").remove();
  $("#"+id).after('<div id="capslock_'+id+'" class="popover fade show bs-popover-right popover-capslock" role="tooltip"><div class="arrow" style="top: 4px;"></div><div class="popover-body"><strong>CAPS LOCK inserito</strong></div></div>');
}
function allineamentoPopover(id){
  if($("#capslock_"+id).length>0){
    var _input = document.getElementById(id);
    var _getCursorX = getCursorX(_input, _input.selectionEnd),
    startLeft = _getCursorX.x;
    $("#capslock_"+id).css("left",(startLeft+21)+"px")
  }
}
$(function () {
  var isShiftPressed = false;
  var isCapsOn = null;
  $("input[type=password]").bind("keydown", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode == 16) {
      isShiftPressed = true;
    }
  });
  $("input[type=password]").bind("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    id = $(this).attr("id");
    if (keyCode == 16) {
      isShiftPressed = false;
    }
    if (keyCode == 20) {
      if (isCapsOn == true) {
        isCapsOn = false;
        $("div[id*='capslock_'").remove();
      } else if (isCapsOn == false) {
        isCapsOn = true;
        $("input:focus").each(function(e) {
          creaPopoverCapsLock(id);
          allineamentoPopover(id);
        });
      }
    }
  });
  $("input[type=password]").bind("keypress", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    id = $(this).attr("id");
    if (keyCode >= 65 && keyCode <= 90 && !isShiftPressed) {
      isCapsOn = true;
      creaPopoverCapsLock(id);
      allineamentoPopover(id);
    } else {
      allineamentoPopover(id);
    }
  });
});

// Gestione password strength meter
$(function() {
  $('.form-password').password({ 
    shortPass: 'password troppo debole',
    badPass: 'password debole',
    goodPass: 'password sicura',
    strongPass: 'password molto sicura',
    containsUsername: 'la password contiene l\'username',
    enterPass: 'inserisci almeno 8 caratteri e una lettera maiuscola',
    showPercent: false,
    showText: true, // shows the text tips
    animate: false, // whether or not to animate the progress bar on input blur/focus
    animateSpeed: 'fast', // the above animation speed
    username: false, // select the username field (selector or jQuery instance) for better password checks
    usernamePartialMatch: true, // whether to check for username partials
    minimumLength: 4 // minimum password length (below this threshold, the score is 0)
  });
});

// Gestione visibilità password
$(function() {
  $("input:password").each(function(e){
    $(this).siblings("label").after('<span class="btn-eye eye-on" toggle="'+$(this).attr("id")+'"></span>');
  });
  
  $(".btn-eye").on("click", function() {
    $(this).toggleClass("eye-off");
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
