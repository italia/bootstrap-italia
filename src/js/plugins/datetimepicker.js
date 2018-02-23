$(document).ready(function() {
    var $input = $( '.datepicker' ).pickadate({
        formatSubmit: 'yyyy/mm/dd',
        container: 'body',
        closeOnSelect: false,
        closeOnClear: false,
    });
    var picker = $input.pickadate('picker');

    var $inputTime = $( '.timepicker' ).pickatime();
    var pickerTime = $input.pickatime('picker');
});