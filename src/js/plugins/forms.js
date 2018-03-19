// Funzione "password-strength-meter" modificata 
;(function($) {
  'use strict';

  var Password = function ($object, options) {
    var defaults = {
      shortPass: 'The password is too short',
      badPass: 'Weak; try combining letters & numbers',
      goodPass: 'Medium; try using special charecters',
      strongPass: 'Strong password',
      containsUsername: 'The password contains the username',
      enterPass: 'Type your password',
      showPercent: false,
      showText: true,
      animate: true,
      animateSpeed: 'fast',
      username: false,
      usernamePartialMatch: true,
      minimumLength: 4
    };

    options = $.extend({}, defaults, options);

    /**
     * Returns strings based on the score given.
     *
     * @param int score Score base.
     * @return string
     */
    function scoreText(score) {
      if (score === -1) {
        return options.shortPass;
      }
      if (score === -2) {
        return options.containsUsername;
      }

      score = score < 0 ? 0 : score;

      if (score < 26) {
        return options.shortPass;
      }
      if (score < 51) {
        return options.badPass;
      }
      if (score < 76) {
        return options.goodPass;
      }

      return options.strongPass;
    }

    function scoreColor(score) {
      if (score === -1) {
        return "text-danger";
      }
      if (score === -2) {
        return "text-muted";
      }

      score = score < 0 ? 0 : score;

      if (score < 26) {
        return "text-danger";
      }
      if (score < 51) {
        return "text-warning";
      }
      if (score < 76) {
        return "text-success";
      }

      return "text-success";
    }

    /**
     * Returns a value between -2 and 100 to score
     * the user's password.
     *
     * @param  string password The password to be checked.
     * @param  string username The username set (if options.username).
     * @return int
     */
    function calculateScore(password, username) {
      var score = 0;

      // password < options.minimumLength
      if (password.length < options.minimumLength) {
        return -1;
      }

      if (options.username) {
        // password === username
        if (password.toLowerCase() === username.toLowerCase()) {
          return -2;
        }
        // password contains username (and usernamePartialMatch is set to true)
        if (options.usernamePartialMatch && username.length) {
          var user = new RegExp(username.toLowerCase());
          if (password.toLowerCase().match(user)) {
            return -2;
          }
        }
      }

      // password length
      score += password.length * 4;
      score += checkRepetition(1, password).length - password.length;
      score += checkRepetition(2, password).length - password.length;
      score += checkRepetition(3, password).length - password.length;
      score += checkRepetition(4, password).length - password.length;

      // password has 3 numbers
      if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
        score += 5;
      }

      // password has at least 2 sybols
      var symbols = '.*[!,@,#,$,%,^,&,*,?,_,~]';
      symbols = new RegExp('(' + symbols + symbols + ')');
      if (password.match(symbols)) {
        score += 5;
      }

      // password has Upper and Lower chars
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        score += 10;
      }

      // password has number and chars
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        score += 15;
      }

      // password has number and symbol
      if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
        score += 15;
      }

      // password has char and symbol
      if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
        score += 15;
      }

      // password is just numbers or chars
      if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
        score -= 10;
      }

      if (score > 100) {
        score = 100;
      }

      if (score < 0) {
        score = 0;
      }

      return score;
    }

    /**
     * Checks for repetition of characters in
     * a string
     *
     * @param int rLen Repetition length.
     * @param string str The string to be checked.
     * @return string
     */
    function checkRepetition(rLen, str) {
      var res = "", repeated = false;
      for (var i = 0; i < str.length; i++) {
        repeated = true;
        for (var j = 0; j < rLen && (j + i + rLen) < str.length; j++) {
          repeated = repeated && (str.charAt(j + i) === str.charAt(j + i + rLen));
        }
        if (j < rLen) {
          repeated = false;
        }
        if (repeated) {
          i += rLen - 1;
          repeated = false;
        }
        else {
          res += str.charAt(i);
        }
      }
      return res;
    }

    /**
     * Initializes the plugin creating and binding the
     * required layers and events.
     *
     * @return void
     */
    function init() {
      var shown = true;
      var $text = options.showText;
      var $percentage = options.showPercent;
      var $graybar = $('<div>').addClass('pass-graybar');
      var $colorbar = $('<div>').addClass('pass-colorbar');
      var $insert = $('<div>').addClass('pass-wrapper').append(
        $graybar.append($colorbar)
      );

      $object.parent().addClass('pass-strength-visible');
      if (options.animate) {
        $insert.css('display', 'none');
        shown = false;
        $object.parent().removeClass('pass-strength-visible');
      }

      if (options.showPercent) {
        $percentage = $('<span>').addClass('pass-percent').text('0%');
        $insert.append($percentage);
      }

      if (options.showText) {
        $text = $('<span>').addClass('pass-text').html(options.enterPass);
        $insert.prepend($text);
      }

      $object.after($insert);

      $object.keyup(function() {
        var username = options.username || '';
        if (username) {
          username = $(username).val();
        }

        var score = calculateScore($object.val(), username);
        $object.trigger('password.score', [score]);
        var perc = score < 0 ? 0 : score;
        $colorbar.css({
          backgroundPosition: "0px -" + perc + "px",
          width: perc + '%'
        });

        if (options.showPercent) {
          $percentage.html(perc + '%');
        }

        if (options.showText) {
          var text = scoreText(score);
          if (!$object.val().length && score <= 0) {
            text = options.enterPass;
          }

          if ($text.html() !== $('<div>').html(text).html()) {
            $text.html(text)
            $text.removeClass (function (index, className) {
              return (className.match (/(^|\s)text-\S+/g) || []).join(' ');
            });
            $text.addClass(scoreColor(score));
            $object.trigger('password.text', [text, score]);
          }
        }
      });

      if (options.animate) {
        $object.focus(function() {
          if (!shown) {
            $insert.slideDown(options.animateSpeed, function () {
              shown = true;
              $object.parent().addClass('pass-strength-visible');
            });
          }
        });

        $object.blur(function() {
          if (!$object.val().length && shown) {
            $insert.slideUp(options.animateSpeed, function () {
              shown = false;
              $object.parent().removeClass('pass-strength-visible')
            });
          }
        });
      }

      return this;
    }

    return init.call(this);
  }

  // Bind to jquery
  $.fn.password = function(options) {
    return this.each(function() {
      new Password($(this), options);
    });
  };
})(jQuery);

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

function creaPopoverCapsLock(id){
  $("small[id*='capslock_'").remove();
  $("#"+id).after('<small id="capslock_'+id+'" class="form-text text-warning position-absolute bg-white w-100">CAPS LOCK inserito</small>');
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
        $("small[id*='capslock_'").remove();
      } else if (isCapsOn == false) {
        isCapsOn = true;
        $("input:focus").each(function(e) {
          creaPopoverCapsLock(id);
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
    } else {
      
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
    $(this).after('<span class="btn-eye eye-on" toggle="'+$(this).attr("id")+'"></span>');
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
