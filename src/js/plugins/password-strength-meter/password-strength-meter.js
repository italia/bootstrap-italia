/**
 * Original code by Òscar Casajuana a.k.a. elboletaire <elboletaire at underave dot net>
 * @link https://github.com/elboletaire/password-strength-meter
 */
;(function($) {
  'use strict'

  var Password = function($object, options) {
    var defaults = {
      shortPass: 'Password molto debole',
      badPass: 'Password debole',
      goodPass: 'Password sicura',
      strongPass: 'Password molto sicura',
      enterPass: 'Inserisci almeno 8 caratteri e una lettera maiuscola',
      showText: true,
      minimumLength: 4,
    }

    options = $.extend({}, defaults, options)

    /**
     * Returns strings based on the score given.
     *
     * @param int score Score base.
     * @return string
     */
    function scoreText(score) {
      if (score === -1) {
        return options.shortPass
      }

      score = score < 0 ? 0 : score

      if (score < 26) {
        return options.shortPass
      }
      if (score < 51) {
        return options.badPass
      }
      if (score < 76) {
        return options.goodPass
      }

      return options.strongPass
    }

    function scoreColor(score) {
      if (score === -1) {
        return 'danger'
      }
      if (score === -2) {
        return 'muted'
      }

      score = score < 0 ? 0 : score

      if (score < 26) {
        return 'danger'
      }
      if (score < 51) {
        return 'warning'
      }
      if (score < 76) {
        return 'success'
      }

      return 'success'
    }

    /**
     * Returns a value between -1 and 100 to score
     * the user's password.
     *
     * @param  string password The password to be checked.
     * @return int
     */
    function calculateScore(password) {
      var score = 0

      // empty password
      if (password.trim().length === 0) {
        return -2
      }

      // password < options.minimumLength
      if (password.length < options.minimumLength) {
        return -1
      }

      // password length
      score += password.length * 4
      score += checkRepetition(1, password).length - password.length
      score += checkRepetition(2, password).length - password.length
      score += checkRepetition(3, password).length - password.length
      score += checkRepetition(4, password).length - password.length

      // password has 3 numbers
      if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
        score += 5
      }

      // password has at least 2 sybols
      var symbols = '.*[!,@,#,$,%,^,&,*,?,_,~]'
      symbols = new RegExp('(' + symbols + symbols + ')')
      if (password.match(symbols)) {
        score += 5
      }

      // password has Upper and Lower chars
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        score += 10
      }

      // password has number and chars
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        score += 15
      }

      // password has number and symbol
      if (
        password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) &&
        password.match(/([0-9])/)
      ) {
        score += 15
      }

      // password has char and symbol
      if (
        password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) &&
        password.match(/([a-zA-Z])/)
      ) {
        score += 15
      }

      // password is just numbers or chars
      if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
        score -= 10
      }

      if (score > 100) {
        score = 100
      }

      if (score < 0) {
        score = 0
      }

      return score
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
      var res = '',
        repeated = false
      for (var i = 0; i < str.length; i++) {
        repeated = true
        for (var j = 0; j < rLen && j + i + rLen < str.length; j++) {
          repeated = repeated && str.charAt(j + i) === str.charAt(j + i + rLen)
        }
        if (j < rLen) {
          repeated = false
        }
        if (repeated) {
          i += rLen - 1
          repeated = false
        } else {
          res += str.charAt(i)
        }
      }
      return res
    }

    /**
     * Initializes the plugin creating and binding the
     * required layers and events.
     *
     * @return void
     */
    function init() {
      var shown = true
      var $text = options.showText

      var $graybar = $('<div>').addClass(
        'password-meter progress rounded-0 position-absolute'
      )
      $graybar.append(`<div class="row position-absolute w-100 m-0">
        <div class="col-3 border-left border-right border-white"></div>
        <div class="col-3 border-left border-right border-white"></div>
        <div class="col-3 border-left border-right border-white"></div>
        <div class="col-3 border-left border-right border-white"></div>
      </div>`)
      var $colorbar = $('<div>').attr({
        class: 'progress-bar',
        role: 'progressbar',
        'aria-valuenow': '0',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
      })
      var $insert = $('<div>').attr({
        class: 'password-strength-meter',
      }).append($graybar.append($colorbar))

      if (options.showText) {
        $text = $('<small>')
          .addClass('form-text text-muted')
          .html(options.enterPass)
        $insert.prepend($text)
      }

      $object.after($insert)

      $object.keyup(function() {
        var score = calculateScore($object.val())
        $object.trigger('password.score', [score])
        var perc = score < 0 ? 0 : score
        $colorbar.removeClass(function(index, className) {
          return (className.match(/(^|\s)bg-\S+/g) || []).join(' ')
        })
        $colorbar.addClass('bg-' + scoreColor(score))
        $colorbar.css({
          width: perc + '%',
        })
        $colorbar.attr('aria-valuenow', perc)

        if (options.showText) {
          var text = scoreText(score)
          if (!$object.val().length && score <= 0) {
            text = options.enterPass
          }

          if (
            $text.html() !==
            $('<div>')
              .html(text)
              .html()
          ) {
            $text.html(text)
            $text.removeClass(function(index, className) {
              return (className.match(/(^|\s)text-\S+/g) || []).join(' ')
            })
            $text.addClass('text-' + scoreColor(score))
            $object.trigger('password.text', [text, score])
          }
        }
      })

      return this
    }

    return init.call(this)
  }

  // Bind to jquery
  $.fn.password = function() {
    return this.each(function() {
      new Password($(this), $(this).data())
    })
  }
})(jQuery)

// Gestione Password Caps Lock
function showCapsLockMsg($input) {
  $('.password-caps').remove()
  $input
    .parents('.form-group')
    .append(
      '<small class="password-caps form-text text-warning position-absolute bg-white w-100">CAPS LOCK inserito</small>'
    )
}

$(function() {
  var isShiftPressed = false
  var isCapsOn = null

  $('.input-password')
    .on('keydown', function(e) {
      var keyCode = e.keyCode ? e.keyCode : e.which
      if (keyCode == 16) {
        isShiftPressed = true
      }
    })
    .on('keyup', function(e) {
      var keyCode = e.keyCode ? e.keyCode : e.which
      if (keyCode == 16) {
        isShiftPressed = false
      }
      if (keyCode == 20) {
        if (isCapsOn) {
          isCapsOn = false
          $('.password-caps').remove()
        } else {
          isCapsOn = true
          $('input:focus').each(function(e) {
            showCapsLockMsg($(this))
          })
        }
      }
    })
    .on('keypress', function(e) {
      var keyCode = e.keyCode ? e.keyCode : e.which
      // i keyCode dal 65 al 90 identificano i caratteri alfabetici maiuscoli da "A" a "Z"
      if (keyCode >= 65 && keyCode <= 90 && !isShiftPressed) {
        isCapsOn = true
        showCapsLockMsg($(this))
      }
    })

  $('.input-password-strength-meter').password()

  $('.password-icon').on('click', function(e) {
    $(this)
      .find('[class^="password-icon"]')
      .toggleClass('d-none')
    var input = $(this).siblings('.input-password')
    var inputType = input.attr('type') === 'password' ? 'text' : 'password'
    input.attr('type', inputType)
  })
})
