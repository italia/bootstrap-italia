'use strict';

/* 
 * Material Design for Bootstrap 
 * MDB Autocomplete Plugin
 */

$.fn.autocomplete = function (options) {

  // Default options
  var defaults = {
    data: {}
  };

  var ENTER_CHAR_CODE = 13;

  // Get options
  options = $.extend(defaults, options);

  return this.each(function () {

    // text input
    var $input = $(this);
    var $autocomplete = void 0;

    // assign data from options
    var data = eval($(this).attr("data-db"));

    if (Object.keys(data).length) {

      $autocomplete = $('<ul class="autocomplete-wrap"></ul>');

      $autocomplete.insertAfter($(this));
    };

    // add button clear
    $input.after('<button class="autocomplete-clear"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg></button>');

    // Listen if key was pressed
    $input.on('keyup', function (e) {

      // get value from input
      var q = $input.val();

      $autocomplete.empty();

      // check if input isn't empty
      if (q.length) {

        for (var item in data) {

          // check if item contains value that we're looking for
          if (data[item].toLowerCase().indexOf(q.toLowerCase()) !== -1) {
            var option = $('<li>' + data[item] + '</li>');

            $autocomplete.append(option);
          }
        }
      }

      if (e.which === ENTER_CHAR_CODE) {
        $autocomplete.children(":first").trigger('click');
        $autocomplete.empty();
      }

      if (q.length === 0) {
        $('.autocomplete-clear').css('visibility', 'hidden');
      } else {
        $('.autocomplete-clear').css('visibility', 'visible');
      }
    });

    $autocomplete.on('click', 'li', function () {

      // Set input value after click
      $input.val($(this).text());

      // Clear autocomplete
      $autocomplete.empty();
    });

    $('.autocomplete-clear').on('click', function (e) {
      e.preventDefault();
      $input.val('');
      $(this).css('visibility', 'hidden');
      $autocomplete.empty();
      $(this).parent().find('label').removeClass('active');
    });
  });
};