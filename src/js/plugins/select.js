$(function() {
  jQuery.fn.setOptionsToSelect = function (data) {
    var selectElement = $(this[0]);
    $(selectElement).empty();
    $(selectElement).off('changed.bs.select');
    data.forEach(function (x) {
      selectElement.append($('<option>', {
        value: x.value,
        text: x.text
      }));
    });
    $(selectElement).selectpicker('refresh');
    $(selectElement).on('changed.bs.select', function () {
      $('.dropdown-menu li.selected')
        .find('input[type="checkbox"]')
        .prop('checked', true)
      $('.dropdown-menu li:not(.selected)')
        .find('input[type="checkbox"]')
        .prop('checked', false)
    });
    return this;
  };
  $('.bootstrap-select-wrapper select')
    .selectpicker()
    .on('changed.bs.select', function() {
      $('.dropdown-menu li.selected')
        .find('input[type="checkbox"]')
        .prop('checked', true)
      $('.dropdown-menu li:not(.selected)')
        .find('input[type="checkbox"]')
        .prop('checked', false)
    })
})
