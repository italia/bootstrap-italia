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
      .empty()

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

  // Fixes for W3C and WCAG 2.0 compliance:
  var $selectWrapper = $('.bootstrap-select-wrapper')

  // Enter generic and non-visible text for empty options
  $selectWrapper
    .find('select option.bs-title-option')
    .text('Nessuna opzione')
  $selectWrapper
    .find('select option[data-content]')
    .text('Annulla');

  // Remove the role="combobox" from the dropdown button
  $selectWrapper
    .find('button.dropdown-toggle')
    .removeAttr('role')

  // Replace any <div>s elements with <span>s as <div>s are not allowed in a button element
  $selectWrapper
    .find('div.filter-option')
    .replaceWith(function() {
      return $('<span />')
        .addClass('filter-option')
        .append($(this).contents())
    })
  $selectWrapper
    .find('div.filter-option-inner')
    .replaceWith(function() {
      return $('<span />')
        .addClass('filter-option-inner')
        .append($(this).contents())
    })
  $selectWrapper
    .find('div.filter-option-inner-inner')
    .replaceWith(function() {
      return $('<span />')
        .addClass('filter-option-inner-inner')
        .append($(this).contents())
    })

  // Add title and WAI-ARIA attribute for the input search
  $selectWrapper
    .find('.bs-searchbox input')
    .attr('title', 'Cerca')
    .attr('aria-expanded', 'false')
})
