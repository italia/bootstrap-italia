/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): DatePicker.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const DatePicker = (($) => {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = `datePicker`
  const DATA_KEY = `bs.date-picker`
  const VERSION = `v4.0.0`
  const DATA_API_TIME = `[data-action="timepicker"]`
  const DATA_API_DATE = `[data-action="datepicker"]`
  const EVENT_KEY = `.${DATA_KEY}`
  const DATA_API_KEY = `.data-api`
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class DatePicker {

    constructor(element) {
      this._element = element
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $element = $(this)
        let data = $element.data(DATA_KEY)

        if (!data) {
          data = new DatePicker(this)
          $element.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }
          data[config](this)
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(function () {

    // Italian

    jQuery.extend(jQuery.fn.pickadate.defaults, {
      monthsFull: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
      monthsShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
      weekdaysFull: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
      weekdaysShort: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
      today: 'Oggi',
      clear: 'Cancella',
      close: 'Chiudi',
      firstDay: 1,
      format: 'dddd d mmmm yyyy',
      formatSubmit: 'yyyy/mm/dd',
      labelMonthNext: 'Mese successivo',
      labelMonthPrev: 'Mese precedente',
      labelMonthSelect: 'Seleziona un mese',
      labelYearSelect: 'Seleziona un anno'
    });

    jQuery.extend(jQuery.fn.pickatime.defaults, {
      clear: 'Cancella',
      format: 'HH:i',
      formatSubmit: 'HH:i'
    });

    $(DATA_API_DATE)
      .pickadate();

    $(DATA_API_TIME)
      .pickatime();
  })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = DatePicker._jQueryInterface
  $.fn[NAME].Constructor = DatePicker
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return DatePicker._jQueryInterface
  }

  return DatePicker

})($)

export default DatePicker
