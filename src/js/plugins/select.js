$(function () {
  $('.bootstrap-select > select').selectpicker().on("changed.bs.select", function () {
    $('.dropdown-menu li.selected').find('input[type="checkbox"]').prop('checked', true)
    $('.dropdown-menu li:not(.selected)').find('input[type="checkbox"]').prop('checked', false)
  });
});
