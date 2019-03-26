'use strict'

$(function() {
  $.fn.autocomplete = function(options) {
    // Default options
    var defaults = {
      data: {},
    }

    // Get options
    options = $.extend(defaults, options)

    return this.each(function() {
      let $input = $(this)
      let $autocomplete = null
      let data = $input.data('autocomplete')

      if (data && Object.keys(data).length) {
        $autocomplete = $('<ul class="autocomplete-list"></ul>')
        $autocomplete.insertAfter($(this).next())

        // Listen if key was pressed
        $input.on('keyup', function(e) {
          // get value from input
          const q = $input.val()

          $autocomplete.empty()

          // check if input isn't empty
          if (q.length) {
            for (const item in data) {
              let markText = new RegExp('(' + q + ')', 'gi')
              let optionText = data[item].text.replace(
                markText,
                '<mark>$1</mark>'
              )
              let optionLabel = data[item].label
                ? '<em>' + data[item].label + '</em>'
                : ''
              let optionIcon = data[item].icon ? data[item].icon : ''
              let optionLink = data[item].link ? data[item].link : '#'

              if (optionText.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
                $(this)
                  .closest('.form-group')
                  .find('.autocomplete-list')
                  .addClass('autocomplete-list-show')
                let option = $(`<li>
              <a href="${optionLink}">
                ${optionIcon}
                <span class="autocomplete-list-text">
                  <span>${optionText}</span>
                  ${optionLabel}
                </span>
              </a>
             </li>`)
                $autocomplete.append(option)
              }
            }
          } else {
            $(this)
              .closest('.form-group')
              .find('.autocomplete-list')
              .removeClass('autocomplete-list-show')
          }
        })
      }
    })
  }

  $('.autocomplete').autocomplete()
})
