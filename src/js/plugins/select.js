$(function() {
  let onSelectChange = function() {
    $('.dropdown-menu li.selected')
      .find('input[type="checkbox"]')
      .prop('checked', true)
    $('.dropdown-menu li:not(.selected)')
      .find('input[type="checkbox"]')
      .prop('checked', false)
  }

  // Allows to rewrite options dynamically with an object in the form of
  jQuery.fn.setOptionsToSelect = function(optionsData) {
    var selectElement = $(this).find('select')

    // Destroying selectElement
    $(selectElement)
      .off('changed.bs.select')
      .selectpicker('destroy')
      .empty();

    // Appending options according to the optionsData object
    optionsData.forEach(function(x) {
      $(selectElement).append(
        $('<option>', {
          value: x.value,
          text: x.text,
        })
      )
    })

    // Refreshing selectElement
    $(selectElement)
      .selectpicker('refresh')
      .on('changed.bs.select', onSelectChange)

    return this
  }

  // Bootstrap-select initialisation
  $('.bootstrap-select-wrapper select')
    .selectpicker()
    .on('changed.bs.select', onSelectChange)
})
