'use strict';

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

      $autocomplete = $('<ul class="autocomplete-list"></ul>');

      $autocomplete.insertAfter($(this).next());
    }

    // Listen if key was pressed
    $input.on('keyup', function (e) {

      // get value from input
      var q = $input.val();

      $autocomplete.empty();

      // check if input isn't empty
      if (q.length) {

        for (var item in data) {

          //get these values form json (TODO)
          var optionText = data[item]; // from page array
          var optionAvatar = '<div class="avatar size-sm"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri"></div>'
          var optionIcon = '<svg class="icon icon-sm"><use xlink:href="/dist/svg/sprite.svg#it-file"></use></svg>'
          var optionLabel = 'label';
          var optionLink = '#';

          //mark query text
          var markText = new RegExp(optionText, 'gi');
          optionText = optionText.replace(q, '<mark>' + q + '</mark>');

          // check if item contains value that we're looking for
          if (data[item].toLowerCase().indexOf(q.toLowerCase()) !== -1) {
            //show list
            $(this).closest('.form-group').find('.autocomplete-list').addClass('autocomplete-list-show');
            var option = $('<li><a href="' + optionLink + '" >' + optionIcon + '<span class="autocomplete-list-text"><span>' + optionText + '</span><em>' + optionLabel + '</em></span></a></li>');

            $autocomplete.append(option);
          }
        }
      } else {
        $(this).closest('.form-group').find('.autocomplete-list').removeClass('autocomplete-list-show');
      }

    });
  });
};
