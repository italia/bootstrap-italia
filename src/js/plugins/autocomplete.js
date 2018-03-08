'use strict';

/* 
 * Material Design for Bootstrap 
 * MDB Autocomplete Plugin
 */

$.fn.mdb_autocomplete = function (options) {

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
    var data = options.data;

    if (Object.keys(data).length) {

      $autocomplete = $('<ul class="mdb-autocomplete-wrap"></ul>');

      $autocomplete.insertAfter($(this));
    };

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
        $('.mdb-autocomplete-clear').css('visibility', 'hidden');
      } else {
        $('.mdb-autocomplete-clear').css('visibility', 'visible');
      }
    });

    $autocomplete.on('click', 'li', function () {

      // Set input value after click
      $input.val($(this).text());

      // Clear autocomplete
      $autocomplete.empty();
    });

    $('.mdb-autocomplete-clear').on('click', function (e) {
      e.preventDefault();
      $input.val('');
      $(this).css('visibility', 'hidden');
      $autocomplete.empty();
      $(this).parent().find('label').removeClass('active');
    });
  });
};