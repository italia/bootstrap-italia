/*!
 * Accessible Datepicker v2.1.10
 * Copyright 2015-2017 Eureka2, Jacques Archimède.
 * Based on the example of the Open AJAX Alliance Accessibility Tools Task Force : http://www.oaa-accessibility.org/examplep/datepicker1/
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * Inspired by :
 * http://wet-boew.github.io/wet-boew/demos/datepicker/datepicker-fr.html
 * http://eternicode.github.io/bootstrap-datepicker
 */

/**
 *	Description:
 *	===========
 *	This DatePicker widget allows the user to select a date.
 *	The DatePicker shows one month at least.
 *
 *	The calendar portion of the date picker follows a table structure
 *	where days of the week and calendar day numbers are layed out in HTML table cells where WAI-ARIA semantics for a grid are applied.
 *	This provides context so an assistive technology can render the day of the week;
 *	its corresponding numeric calendar day, and week number if necessary.
 *
 *	The calendar portion can be displayed in a numbers of ways, including as a popup associated with another widget,
 *	or as a static region of a page.
 *
 * 	This component complies with the recommendations of the guide http://www.w3.org/TR/wai-aria-practices/#datepicker of W3C, namely :
 *
 *	Keyboard Interaction:
 *	=====================
 *
 *	Keyboard navigation on days that are not included the currently displayed month should move to the month automatically and lead to the day in the next or previous month.
 *
 *		- Tab - Like other widgets, the date picker widget receives focus by tabbing into it. Once focus is received, focus is repositioned on today's date in a grid of days and weeks. A second tab will take the user out of the date picker widget. Focus initially is placed on today's date.
 *		- Shift+Tab - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.
 *		- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the user advances past the end of the month they continue into the next or previous month as appropriate.
 *		- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in a grid of days and weeks.
 *		- Alt+Page Up - Moves to the same date in the previous year.
 *		- Alt+Page Down - Moves to the same date in the next year.
 *		- Space -
 *			Singleton Mode: acts as a toggle either selecting or deselecting the date.
 *			Contiguous Mode: Similar to selecting a range of text. Space selects the first date. Shift+Arrows add to the selection. Pressing Space again deselects the previous selections and selects the current focused date.
 *		- Home - Moves to the first day of the current month.
 *		- End - Moves to the last day of the current month.
 *		- Page Up - Moves to the same date in the previous month.
 *		- Page Down - Moves to the same date in the next month.
 *		- Enter -
 *			If the the calendar is a popup attached to some other widget (e.g., a text field), then Enter dismisses the popup, and the selected date(s) are shown in the associated widget.
 *			If the calendar is a static region on the page, then Enter confirms the selected date(s).
 *		- Escape - in the case of a popup date picker, closes the widget without any action.
 *
 *
 *	WAI-ARIA Roles, States, and Properties:
 *	======================================
 *
 *		The current month has a label representing the month and year. It is advisable to use a role heading but is not essential. This "label" should have a unique ID.
 *		If the author would like to ensure that a label is announced by a screen reader, as the label changes, include live region properties with the label element: aria-live="assertive" and aria-atomic="true".
 *		The container for the day of week headers and numeric days of the week has a role of grid.
 *		The grid has an aria-labelledby property with a value equivalent to the id of the label for the grid.
 *		Each name for the day of the week has a role columnheader and is not navigable via the keyboard.
 *		Each numeric day of the week has the role gridcell.
 *		When a day is selected its aria-selected is set to true, otherwise it is set to false or removed.
 *		Changes in aria states, identified here, as well as focus, are clearly styled to show the user where their point of regard is and what days are selected.
 *
 *	When the datepicker is active a calender day of the week always has focus.
 *	This can be achieved by setting the tabindex on that day as appropriate and then using script to give it focus.
 *	The grid container set aria-activedescendant to the id of the currently focused gridcell.
 *
 */

;(function() {
  'use strict'
  if (typeof Date.dp_locales === 'undefined') {
    Date.dp_locales = {
      texts: {
        buttonTitle: 'Select date ...',
        buttonLabel:
          'Click or press the Enter key or the spacebar to open the calendar',
        prevButtonLabel: 'Go to previous month',
        prevMonthButtonLabel: 'Go to the previous year',
        prevYearButtonLabel: 'Go to the previous twenty years',
        nextButtonLabel: 'Go to next month',
        nextMonthButtonLabel: 'Go to the next year',
        nextYearButtonLabel: 'Go to the next twenty years',
        changeMonthButtonLabel:
          'Click or press the Enter key or the spacebar to change the month',
        changeYearButtonLabel:
          'Click or press the Enter key or the spacebar to change the year',
        changeRangeButtonLabel:
          'Click or press the Enter key or the spacebar to go to the next twenty years',
        closeButtonTitle: 'Close',
        closeButtonLabel: 'Close the calendar',
        calendarHelp:
          '- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the end of the month is reached, continues into the next or previous month as appropriate.\r\n- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in the grid of days.\r\n- Control+Page Up - Moves to the same date in the previous year.\r\n- Control+Page Down - Moves to the same date in the next year.\r\n- Home - Moves to the first day of the current month.\r\n- End - Moves to the last day of the current month.\r\n- Page Up - Moves to the same date in the previous month.\r\n- Page Down - Moves to the same date in the next month.\r\n- Enter or Espace - closes the calendar, and the selected date is shown in the associated text box.\r\n- Escape - closes the calendar without any action.',
      },
      directionality: 'LTR',
      month_names: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      month_names_abbreviated: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      month_names_narrow: [
        'J',
        'F',
        'M',
        'A',
        'M',
        'J',
        'J',
        'A',
        'S',
        'O',
        'N',
        'D',
      ],
      day_names: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      day_names_abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      day_names_short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      day_names_narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      day_periods: {
        am: 'AM',
        noon: 'noon',
        pm: 'PM',
      },
      day_periods_abbreviated: {
        am: 'AM',
        noon: 'noon',
        pm: 'PM',
      },
      day_periods_narrow: {
        am: 'a',
        noon: 'n',
        pm: 'p',
      },
      quarter_names: [
        '1st quarter',
        '2nd quarter',
        '3rd quarter',
        '4th quarter',
      ],
      quarter_names_abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
      quarter_names_narrow: ['1', '2', '3', '4'],
      era_names: ['Before Christ', 'Anno Domini'],
      era_names_abbreviated: ['BC', 'AD'],
      era_names_narrow: ['B', 'A'],
      full_format: 'EEEE, MMMM d, y',
      long_format: 'MMMM d, y',
      medium_format: 'MMM d, y',
      short_format: 'M/d/yy',
      firstday_of_week: 0,
    }
  }
})()
;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    factory(require('jquery'))
  } else {
    if (typeof jQuery === 'undefined') {
      throw new Error("Datepicker's JavaScript requires jQuery")
    }
    factory(jQuery)
  }
})(function($, undefined) {
  'use strict'

  var datepickerButton = [
    '<a class="datepicker-button input-group-addon btn" role="button" aria-haspopup="true" tabindex="0" aria-labelledby="datepicker-bn-open-label-CALENDARID">',
    '	<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>it-calendar</title><g><path d="M21,9V8a3,3,0,0,0-3-3h-.55V4a1,1,0,0,0-2,0V5h-7V4a1,1,0,1,0-2,0V5H6A3,3,0,0,0,3,8V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V9ZM15.46,5h2V6a1,1,0,1,1-2,0Zm-9,0h2V6a1,1,0,1,1-2,0ZM20,18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V10H20Z"/></g></svg>',
    '</a>',
  ]
  var datepickerCalendar = [
    '<div class="datepicker-calendar" id="datepicker-calendar-CALENDARID" aria-hidden="false">',
    '	<div class="datepicker-month-wrap">',
    '		<div class="datepicker-month-fast-next pull-right" role="button" aria-labelledby="datepicker-bn-fast-next-label-CALENDARID" tabindex="0"><span class="icon-right"></span><span class="icon-right"></span></div>',
    '		<div class="datepicker-month-next pull-right" role="button" aria-labelledby="datepicker-bn-next-label-CALENDARID" tabindex="0"><span class="icon-right"></span></div>',
    '		<div class="datepicker-month-fast-prev pull-left" role="button" aria-labelledby="datepicker-bn-fast-prev-label-CALENDARID" tabindex="0"><span class="icon-left"></span><span class="icon-left"></span></div>',
    '		<div class="datepicker-month-prev pull-left" role="button" aria-labelledby="datepicker-bn-prev-label-CALENDARID" tabindex="0"><span class="icon-left"></span></div>',
    '		<div id="datepicker-month-CALENDARID" class="datepicker-month" tabindex="0" role="heading" aria-live="assertive" aria-atomic="true" title="Click or press the Enter key or the spacebar to change the month">July 2015</div>',
    '	</div>',
    '	<table class="datepicker-grid" role="grid" aria-readonly="true" aria-activedescendant="datepicker-err-msg-CALENDARID" aria-labelledby="datepicker-month-CALENDARID" tabindex="0">',
    '		<thead>',
    '			<tr class="datepicker-weekdays" role="row">',
    '				<th scope="col" id="day0-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Sunday"><abbr title="Sunday">Su</abbr></th>',
    '				<th scope="col" id="day1-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Monday"><abbr title="Monday">Mo</abbr></th>',
    '				<th scope="col" id="day2-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Tuesday"><abbr title="Tuesday">Tu</abbr></th>',
    '				<th scope="col" id="day3-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Wednesday"><abbr title="Wednesday">We</abbr></th>',
    '				<th scope="col" id="day4-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Thursday"><abbr title="Thursday">Th</abbr></th>',
    '				<th scope="col" id="day5-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Friday"><abbr title="Friday">Fr</abbr></th>',
    '				<th scope="col" id="day6-header-CALENDARID" class="datepicker-day" role="columnheader" aria-label="Saturday"><abbr title="Saturday">Sa</abbr></th>',
    '			</tr>',
    '		</thead>',
    '		<tbody>',
    '			<tr>',
    '				<td id="datepicker-err-msg-CALENDARID" colspan="7"><span>Javascript must be enabled</span></td>',
    '			</tr>',
    '		</tbody>',
    '	</table>',
    '	<div class="datepicker-close-wrap">',
    '		<button class="datepicker-close" id="datepicker-close-CALENDARID" aria-labelledby="datepicker-bn-close-label-CALENDARID">Close</button>',
    '	</div>',
    '	<div id="datepicker-bn-open-label-CALENDARID" class="datepicker-bn-open-label offscreen">Click or press the Enter key or the spacebar to open the calendar</div>',
    '	<div id="datepicker-bn-prev-label-CALENDARID" class="datepicker-bn-prev-label offscreen">Go to previous month</div>',
    '	<div id="datepicker-bn-next-label-CALENDARID" class="datepicker-bn-next-label offscreen">Go to next month</div>',
    '	<div id="datepicker-bn-fast-prev-label-CALENDARID" class="datepicker-bn-fast-prev-label offscreen">Go to previous year</div>',
    '	<div id="datepicker-bn-fast-next-label-CALENDARID" class="datepicker-bn-fast-next-label offscreen">Go to next year</div>',
    '	<div id="datepicker-bn-close-label-CALENDARID" class="datepicker-bn-close-label offscreen">Close the date picker</div>',
    '</div>',
  ]

  var Datepicker = function(target, options) {
    var self = this
    this.$target = $(target) // textbox that will receive the selected date string and focus (if modal)
    this.options = $.extend({}, Datepicker.DEFAULTS, options)
    this.locales = Date.dp_locales
    this.startview(this.options.startView)
    if (typeof this.options.inputFormat === 'string') {
      this.options.inputFormat = [this.options.inputFormat]
    }
    if (!$.isArray(this.options.datesDisabled)) {
      this.options.datesDisabled = [this.options.datesDisabled]
    }
    $.each(this.options.datesDisabled, function(i, v) {
      if (typeof v === 'string') {
        var date = self.parseDate(v)
        if (date === null) {
          self.options.datesDisabled[i] = null
        } else {
          self.options.datesDisabled[i] = self.format(date)
        }
      } else if (v instanceof Date && !isNaN(v.valueOf())) {
        self.options.datesDisabled[i] = self.format(v)
      } else {
        self.options.datesDisabled[i] = null
      }
    })
    if (this.options.min != null) {
      this.options.min = this.parseDate(this.options.min)
    } else if (this.$target.attr('min')) {
      this.options.min = this.parseDate(this.$target.attr('min'))
    }
    if (this.options.max != null) {
      this.options.max = this.parseDate(this.options.max)
    } else if (this.$target.attr('max')) {
      this.options.max = this.parseDate(this.$target.attr('max'))
    }
    if (typeof this.options.previous === 'string') {
      this.options.previous = $(this.options.previous)
    } else if (!(this.options.previous instanceof jQuery)) {
      this.options.previous = null
    }
    if (typeof this.options.next === 'string') {
      this.options.next = $(this.options.next)
    } else if (!(this.options.next instanceof jQuery)) {
      this.options.next = null
    }
    this.id =
      this.$target.attr('id') ||
      'datepicker-' + Math.floor(Math.random() * 100000)
    var calendar = datepickerCalendar.join('')
    calendar = calendar.replace(/CALENDARID/g, this.id + '')

    // complete the target textbox if any
    if (this.$target.parent('.input-group').length == 0) {
      this.$target.wrap('<div class="input-group"></div>')
    }
    this.$label = this.$target.parents().find('label[for=' + this.id + ']')
    this.$group = this.$target.parent('.input-group')
    this.$target.attr('aria-autocomplete', 'none')
    this.$target.css('min-width', '7em')
    this.$target.addClass('form-control')

    if (!this.$target.attr('placeholder')) {
      this.$target.attr('placeholder', this.options.inputFormat[0])
    }

    var button = datepickerButton.join('')
    button = button.replace(/CALENDARID/g, this.id + '')
    this.$button = $(button)
    this.$button.addClass(this.options.theme)
    this.$calendar = $(calendar)
    this.$calendar.addClass(this.options.theme)
    this.$target.after(this.$button)

    // be sure parent of the calendar is positionned  to calculate the position of the calendar
    if (this.$calendar.parent().css('position') === 'static') {
      this.$calendar.parent().css('position', 'relative')
    }
    this.$calendar
      .find('.datepicker-bn-open-label')
      .html(this.options.buttonLabel)
    if (this.$target.attr('id')) {
      this.$calendar.attr('aria-controls', this.$target.attr('id'))
    }
    this.$button.find('span').attr('title', this.options.buttonTitle)
    this.$calendar.css('left', this.$target.parent().position().left + 'px')
    this.$monthObj = this.$calendar.find('.datepicker-month')
    this.$prev = this.$calendar.find('.datepicker-month-prev')
    this.$next = this.$calendar.find('.datepicker-month-next')
    this.$fastprev = this.$calendar.find('.datepicker-month-fast-prev')
    this.$fastnext = this.$calendar.find('.datepicker-month-fast-next')
    this.$grid = this.$calendar.find('.datepicker-grid')
    if (this.locales.directionality === 'RTL') {
      this.$grid.addClass('rtl')
    }
    var $days = this.$grid.find('th.datepicker-day abbr')
    this.drawCalendarHeader()
    if (this.options.inline == false && this.options.modal == true) {
      this.$close = this.$calendar.find('.datepicker-close')
      this.$close
        .html(this.options.closeButtonTitle)
        .attr('title', this.options.closeButtonLabel)
      this.$calendar
        .find('.datepicker-bn-close-label')
        .html(this.options.closeButtonLabel)
    } else {
      this.hideObject(this.$calendar.find('.datepicker-close-wrap'))
      this.hideObject(this.$calendar.find('.datepicker-bn-close-label'))
    }

    if (this.options.inline != false) {
      this.hideObject(this.$button)
      var $container =
        typeof this.options.inline === 'string'
          ? $('#' + this.options.inline)
          : this.options.inline
      $container.append(this.$calendar)
      this.$calendar.css({ position: 'relative', left: '0px' })
      this.initializeDate()
    } else {
      this.$calendar.css({ display: 'none' })
      this.$target.parent().after(this.$calendar)
      this.hide(!this.options.gainFocusOnConstruction)
    }

    this.keys = {
      tab: 9,
      enter: 13,
      esc: 27,
      space: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
    }

    this.bindHandlers()
    this.$button.click(function(e) {
      if (!$(this).hasClass('disabled')) {
        if (self.$calendar.attr('aria-hidden') === 'true') {
          self.initializeDate()
          self.show()
        } else {
          self.hide()
        }
        self.selectGridCell(self.$grid.attr('aria-activedescendant'))
      }
      e.stopPropagation()
      return false
    })
    this.$button.keydown(function(e) {
      var ev = e || event
      if (ev.keyCode == self.keys.enter || ev.keyCode == self.keys.space) {
        $(this).trigger('click')
        return false
      }
    })
    this.$calendar.on('blur', function(e) {
      if (self.$calendar.attr('aria-hidden') === 'false') {
        self.hide()
      }
    })
  }

  Datepicker.VERSION = '2.1.10'

  Datepicker.DEFAULTS = {
    firstDayOfWeek: Date.dp_locales.firstday_of_week, // Determines the first column of the calendar grid
    weekDayFormat: 'short', // Display format of the weekday names - values are 'short' or 'narrow'
    startView: 0, // Initial calendar - values are 0 or 'days', 1 or 'months', 2 or 'years'
    daysOfWeekDisabled: [],
    datesDisabled: [],
    isDateDisabled: null,
    isMonthDisabled: null,
    isYearDisabled: null,
    inputFormat: [Date.dp_locales.short_format],
    outputFormat: Date.dp_locales.short_format,
    titleFormat: Date.dp_locales.full_format,
    buttonTitle: Date.dp_locales.texts.buttonTitle,
    buttonLabel: Date.dp_locales.texts.buttonLabel,
    prevButtonLabel: Date.dp_locales.texts.prevButtonLabel,
    prevMonthButtonLabel: Date.dp_locales.texts.prevMonthButtonLabel,
    prevYearButtonLabel: Date.dp_locales.texts.prevYearButtonLabel,
    nextButtonLabel: Date.dp_locales.texts.nextButtonLabel,
    nextMonthButtonLabel: Date.dp_locales.texts.nextMonthButtonLabel,
    nextYearButtonLabel: Date.dp_locales.texts.nextYearButtonLabel,
    changeMonthButtonLabel: Date.dp_locales.texts.changeMonthButtonLabel,
    changeYearButtonLabel: Date.dp_locales.texts.changeYearButtonLabel,
    changeRangeButtonLabel: Date.dp_locales.texts.changeRangeButtonLabel,
    closeButtonTitle: Date.dp_locales.texts.closeButtonTitle,
    closeButtonLabel: Date.dp_locales.texts.closeButtonLabel,
    onUpdate: function(value) {},
    previous: null,
    next: null,
    theme: 'default',
    modal: false,
    inline: false,
    gainFocusOnConstruction: false,
    min: null,
    max: null,
  }

  /**
   *	initializeDate() is a member function to initialize the Datepicker date with the content of the target textbox
   *
   *	@return N/A
   *
   */
  Datepicker.prototype.initializeDate = function() {
    var val = this.$target.val()
    var date = val === '' ? new Date() : this.parseDate(val)
    this.setDate(date, true)
  } // end initializeDate()

  /**
   * getDate() is a member function to retrieve the current Datepicker date.
   * @return the Date object
   */
  Datepicker.prototype.getDate = function() {
    var val = this.$target.val()
    var date = val === '' ? new Date() : this.parseDate(val)
    return date
  } // end getDate()

  /**
   *	setDate() is a member function to set the Datepicker date with the content of newDate
   *
   *	@param	(newDate Date) the new value of the Datepicker date.
   *	@return N/A
   *
   */
  Datepicker.prototype.setDate = function(newDate, init) {
    this.dateObj = newDate
    init = typeof init === 'undefined' ? false : init
    if (this.dateObj == null) {
      this.$target.attr('aria-invalid', true)
      this.$target.parents('.form-group').addClass('has-error')
      this.dateObj = new Date()
      this.dateObj.setHours(0, 0, 0, 0)
    }
    if (this.options.min != null && this.dateObj < this.options.min) {
      this.$target.attr('aria-invalid', true)
      this.$target.parents('.form-group').addClass('has-error')
      this.dateObj = this.options.min
    } else if (this.options.max != null && this.dateObj > this.options.max) {
      this.$target.attr('aria-invalid', true)
      this.$target.parents('.form-group').addClass('has-error')
      this.dateObj = this.options.max
    }
    if (!init || this.$target.val() != '') {
      this.$target.val(this.format(this.dateObj))
    }
    this.curYear = this.dateObj.getFullYear()
    this.year = this.curYear
    this.curMonth = this.dateObj.getMonth()
    this.month = this.curMonth
    this.date = this.dateObj.getDate()
    // populate the calendar grid
    switch (this.options.startView) {
      case 1: // months
        this.populateMonthsCalendar()
        // update the table's activedescdendant to point to the current month
        this.$grid.attr(
          'aria-activedescendant',
          this.$grid.find('.curMonth').attr('id')
        )
        break
      case 2: // years
        this.populateYearsCalendar()
        // update the table's activedescdendant to point to the current year
        this.$grid.attr(
          'aria-activedescendant',
          this.$grid.find('.curYear').attr('id')
        )
        break
      default:
        this.populateDaysCalendar()
        // update the table's activedescdendant to point to the current day
        this.$grid.attr(
          'aria-activedescendant',
          this.$grid.find('.curDay').attr('id')
        )
    }
  } // end setDate()

  /**
   *	drawCalendarHeader() is a member function to populate the calendar header with the days name.
   *
   *	@return N/A
   */
  Datepicker.prototype.drawCalendarHeader = function() {
    var $days = this.$grid.find('th.datepicker-day')
    var weekday = this.options.firstDayOfWeek
    for (var i = 0; i < 7; i++) {
      $days.eq(i).attr('aria-label', this.locales.day_names[weekday])
      $days
        .children('abbr')
        .eq(i)
        .attr('title', this.locales.day_names[weekday])
        .text(
          this.options.weekDayFormat === 'short'
            ? this.locales.day_names_short[weekday]
            : this.locales.day_names_narrow[weekday]
        )
      weekday = (weekday + 1) % 7
    }
  } // end drawCalendarHeader()

  /**
   *	populateDaysCalendar() is a member function to populate the datepicker grid with calendar days
   *	representing the current month
   *
   *	@return N/A
   *
   */
  Datepicker.prototype.populateDaysCalendar = function() {
    this.$calendar
      .find('.datepicker-bn-prev-label')
      .html(this.options.prevButtonLabel)
    this.$calendar
      .find('.datepicker-bn-next-label')
      .html(this.options.nextButtonLabel)
    this.$calendar
      .find('.datepicker-bn-fast-prev-label')
      .html(this.options.prevMonthButtonLabel)
    this.$calendar
      .find('.datepicker-bn-fast-next-label')
      .html(this.options.nextMonthButtonLabel)
    if (
      this.options.min != null &&
      (this.year - 1 < this.options.min.getFullYear() ||
        (this.year - 1 == this.options.min.getFullYear() &&
          this.month < this.options.min.getMonth()))
    ) {
      this.$fastprev.attr('title', '')
      this.$fastprev.addClass('disabled')
      this.$fastprev.removeClass('enabled')
    } else {
      this.$fastprev.attr('title', this.options.prevMonthButtonLabel)
      this.$fastprev.addClass('enabled')
      this.$fastprev.removeClass('disabled')
    }
    var previousMonth = this.previousMonth(this.year, this.month)
    if (
      this.options.min != null &&
      (previousMonth.year < this.options.min.getFullYear() ||
        (previousMonth.year == this.options.min.getFullYear() &&
          previousMonth.month < this.options.min.getMonth()))
    ) {
      this.$prev.attr('title', '')
      this.$prev.addClass('disabled')
      this.$prev.removeClass('enabled')
    } else {
      this.$prev.attr('title', this.options.prevButtonLabel)
      this.$prev.addClass('enabled')
      this.$prev.removeClass('disabled')
    }
    this.$monthObj.attr('title', this.options.changeMonthButtonLabel)
    var nextMonth = this.nextMonth(this.year, this.month)
    if (
      this.options.max != null &&
      (nextMonth.year > this.options.max.getFullYear() ||
        (nextMonth.year == this.options.max.getFullYear() &&
          nextMonth.month > this.options.max.getMonth()))
    ) {
      this.$next.attr('title', '')
      this.$next.addClass('disabled')
      this.$next.removeClass('enabled')
    } else {
      this.$next.attr('title', this.options.nextButtonLabel)
      this.$next.addClass('enabled')
      this.$next.removeClass('disabled')
    }
    if (
      this.options.max != null &&
      (this.year + 1 > this.options.max.getFullYear() ||
        (this.year + 1 == this.options.max.getFullYear() &&
          this.month > this.options.max.getMonth()))
    ) {
      this.$fastnext.attr('title', '')
      this.$fastnext.addClass('disabled')
      this.$fastnext.removeClass('enabled')
    } else {
      this.$fastnext.attr('title', this.options.nextMonthButtonLabel)
      this.$fastnext.addClass('enabled')
      this.$fastnext.removeClass('disabled')
    }
    this.showObject(this.$fastprev)
    this.showObject(this.$fastnext)
    var numDays = this.getDaysInMonth(this.year, this.month)
    var numPrevDays = this.getDaysInMonth(
      previousMonth.year,
      previousMonth.month
    )
    var startWeekday = new Date(this.year, this.month, 1).getDay()
    var lastDayOfWeek = (this.options.firstDayOfWeek + 6) % 7
    var curDay = 1
    var rowCount = 1
    this.$monthObj.html(this.locales.month_names[this.month] + ' ' + this.year)
    this.showObject(this.$grid.find('thead'))
    // clear the grid
    var gridCells = '\t<tr id="row0-' + this.id + '" role="row">\n'
    // Insert the leading empty cells
    var numEmpties = 0
    var weekday = this.options.firstDayOfWeek
    while (weekday != startWeekday) {
      numEmpties++
      weekday = (weekday + 1) % 7
    }
    for (; numEmpties > 0; numEmpties--) {
      gridCells +=
        '\t\t<td class="empty">' + (numPrevDays - numEmpties + 1) + '</td>\n'
    }
    var isYearDisabled =
      this.options.isYearDisabled && this.options.isYearDisabled(this.year)
    var isMonthDisabled =
      this.options.isMonthDisabled &&
      this.options.isMonthDisabled(this.year, this.month + 1)
    // insert the days of the month.
    for (curDay = 1; curDay <= numDays; curDay++) {
      var date = new Date(this.year, this.month, curDay, 0, 0, 0, 0)
      var longdate = this.formatDate(date, this.options.titleFormat)
      var curDayClass =
        curDay == this.date &&
        this.month == this.curMonth &&
        this.year == this.curYear
          ? ' curDay'
          : ''
      if (isYearDisabled || isMonthDisabled) {
        gridCells +=
          '\t\t<td id="cell' +
          curDay +
          '-' +
          this.id +
          '" class="day unselectable' +
          curDayClass +
          '"'
      } else if ($.inArray(weekday, this.options.daysOfWeekDisabled) > -1) {
        gridCells +=
          '\t\t<td id="cell' +
          curDay +
          '-' +
          this.id +
          '" class="day unselectable' +
          curDayClass +
          '"'
      } else if (this.options.min != null && date < this.options.min) {
        gridCells +=
          '\t\t<td id="cell' +
          curDay +
          '-' +
          this.id +
          '" class="day unselectable' +
          curDayClass +
          '"'
      } else if (this.options.max != null && date > this.options.max) {
        gridCells +=
          '\t\t<td id="cell' +
          curDay +
          '-' +
          this.id +
          '" class="day unselectable' +
          curDayClass +
          '"'
      } else if (
        $.inArray(this.format(date), this.options.datesDisabled) > -1
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          curDay +
          '-' +
          this.id +
          '" class="day unselectable' +
          curDayClass +
          '"'
      } else if (
        this.options.isDateDisabled &&
        this.options.isDateDisabled(date)
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          curDay +
          '-' +
          this.id +
          '" class="day unselectable' +
          curDayClass +
          '"'
      } else {
        gridCells +=
          '\t\t<td id="cell' +
          curDay +
          '-' +
          this.id +
          '" class="day selectable' +
          curDayClass +
          '"'
      }
      gridCells += ' data-value="' + curDay + '"'
      gridCells += ' title="' + longdate + '"'
      gridCells += ' aria-label="' + longdate + '"'
      gridCells +=
        ' headers="day' +
        weekday +
        '-header-' +
        this.id +
        '" role="gridcell" tabindex="-1" aria-selected="false"><span>' +
        curDay +
        '</span>'
      gridCells += '</td>'
      if (weekday == lastDayOfWeek && curDay < numDays) {
        // This was the last day of the week, close it out
        // and begin a new one
        gridCells +=
          '\t</tr>\n\t<tr id="row' +
          rowCount +
          '-' +
          this.id +
          '" role="row">\n'
        rowCount++
      }
      if (curDay < numDays) {
        weekday = (weekday + 1) % 7
      }
    }
    // Insert any trailing empty cells
    while (weekday != lastDayOfWeek) {
      gridCells += '\t\t<td class="empty">' + ++numEmpties + '</td>\n'
      weekday = (weekday + 1) % 7
    }
    gridCells += '\t</tr>'
    var $tbody = this.$grid.find('tbody')
    $tbody.empty()
    $tbody.append(gridCells)
    this.gridType = 0 // 0 = days grid, 1 = months grid, 2 = years Grid
  } // end populateDaysCalendar()

  /**
   *	populateMonthsCalendar() is a member function to populate the datepicker grid with calendar months
   *	representing the current year
   *
   *	@return N/A
   *
   */
  Datepicker.prototype.populateMonthsCalendar = function() {
    this.$calendar
      .find('.datepicker-bn-prev-label')
      .html(this.options.prevMonthButtonLabel)
    this.$calendar
      .find('.datepicker-bn-next-label')
      .html(this.options.nextMonthButtonLabel)
    this.hideObject(this.$fastprev)
    this.hideObject(this.$fastnext)
    if (
      this.options.min != null &&
      this.year - 1 < this.options.min.getFullYear()
    ) {
      this.$prev.attr('title', '')
      this.$prev.addClass('disabled')
      this.$prev.removeClass('enabled')
    } else {
      this.$prev.attr('title', this.options.prevMonthButtonLabel)
      this.$prev.addClass('enabled')
      this.$prev.removeClass('disabled')
    }
    this.$monthObj.attr('title', this.options.changeYearButtonLabel)
    if (
      this.options.max != null &&
      this.year + 1 > this.options.max.getFullYear()
    ) {
      this.$next.attr('title', '')
      this.$next.addClass('disabled')
      this.$next.removeClass('enabled')
    } else {
      this.$next.attr('title', this.options.nextMonthButtonLabel)
      this.$next.addClass('enabled')
      this.$next.removeClass('disabled')
    }
    var curMonth = 0
    var rowCount = 1
    var $tbody = this.$grid.find('tbody')
    this.$monthObj.html(this.year)
    // clear the grid
    this.hideObject(this.$grid.find('thead'))
    $tbody.empty()
    $('#datepicker-err-msg-' + this.id).empty()
    var gridCells = '\t<tr id="row0-' + this.id + '" role="row">\n'
    var isYearDisabled =
      this.options.isYearDisabled && this.options.isYearDisabled(this.year)
    // insert the months of the year.
    for (curMonth = 0; curMonth < 12; curMonth++) {
      if (isYearDisabled) {
        gridCells +=
          '\t\t<td id="cell' +
          (curMonth + 1) +
          '-' +
          this.id +
          '" class="month unselectable"'
      } else if (curMonth == this.month && this.year == this.curYear) {
        gridCells +=
          '\t\t<td id="cell' +
          (curMonth + 1) +
          '-' +
          this.id +
          '" class="month curMonth selectable"'
      } else if (
        this.options.min != null &&
        (this.year < this.options.min.getFullYear() ||
          (this.year == this.options.min.getFullYear() &&
            curMonth < this.options.min.getMonth()))
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          (curMonth + 1) +
          '-' +
          this.id +
          '" class="month unselectable"'
      } else if (
        this.options.max != null &&
        (this.year > this.options.max.getFullYear() ||
          (this.year == this.options.max.getFullYear() &&
            curMonth > this.options.max.getMonth()))
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          (curMonth + 1) +
          '-' +
          this.id +
          '" class="month unselectable"'
      } else if (
        this.options.isMonthDisabled &&
        this.options.isMonthDisabled(this.year, curMonth + 1)
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          (curMonth + 1) +
          '-' +
          this.id +
          '" class="month unselectable"'
      } else {
        gridCells +=
          '\t\t<td id="cell' +
          (curMonth + 1) +
          '-' +
          this.id +
          '" class="month selectable"'
      }
      gridCells += ' data-value="' + curMonth + '"'
      gridCells +=
        ' title="' + this.locales.month_names[curMonth] + ' ' + this.year + '"'
      gridCells +=
        ' aria-label="' +
        this.locales.month_names[curMonth] +
        ' ' +
        this.year +
        '"'
      gridCells +=
        ' role="gridcell" tabindex="-1" aria-selected="false">' +
        this.locales.month_names_abbreviated[curMonth]
      gridCells += '</td>'
      if (curMonth == 3 || curMonth == 7) {
        gridCells +=
          '\t</tr>\n\t<tr id="row' +
          rowCount +
          '-' +
          this.id +
          '" role="row">\n'
        rowCount++
      }
    }
    gridCells += '\t</tr>'
    $tbody.append(gridCells)
    this.gridType = 1 // 0 = days grid, 1 = months grid, 2 = years Grid
  } // end populateMonthsCalendar()

  /**
   *	populateYearsCalendar() is a member function to populate the datepicker grid with 20 calendar years
   *	around the current year
   *
   *	@return N/A
   *
   */
  Datepicker.prototype.populateYearsCalendar = function() {
    this.$calendar
      .find('.datepicker-bn-prev-label')
      .html(this.options.prevYearButtonLabel)
    this.$calendar
      .find('.datepicker-bn-next-label')
      .html(this.options.nextYearButtonLabel)
    this.hideObject(this.$fastprev)
    this.hideObject(this.$fastnext)
    if (
      this.options.min != null &&
      this.year - 20 < this.options.min.getFullYear()
    ) {
      this.$prev.attr('title', '')
      this.$prev.addClass('disabled')
      this.$prev.removeClass('enabled')
    } else {
      this.$prev.attr('title', this.options.prevYearButtonLabel)
      this.$prev.addClass('enabled')
      this.$prev.removeClass('disabled')
    }
    this.$monthObj.attr('title', this.options.changeRangeButtonLabel)
    if (
      this.options.max != null &&
      this.year + 20 > this.options.max.getFullYear()
    ) {
      this.$next.attr('title', '')
      this.$next.addClass('disabled')
      this.$next.removeClass('enabled')
    } else {
      this.$next.attr('title', this.options.nextYearButtonLabel)
      this.$next.addClass('enabled')
      this.$next.removeClass('disabled')
    }
    var startYear = Math.floor(this.year / 10) * 10
    var endYear = startYear + 19
    var rowCount = 1
    var $tbody = this.$grid.find('tbody')
    this.$monthObj.html(startYear + '-' + endYear)
    // clear the grid
    this.hideObject(this.$grid.find('thead'))
    $tbody.empty()
    $('#datepicker-err-msg-' + this.id).empty()
    var gridCells = '\t<tr id="row0-' + this.id + '" role="row">\n'
    // insert the months of the year.
    for (var curYear = startYear; curYear <= endYear; curYear++) {
      if (curYear == this.year) {
        gridCells +=
          '\t\t<td id="cell' +
          (curYear - startYear + 1) +
          '-' +
          this.id +
          '" class="year curYear selectable"'
      } else if (
        this.options.min != null &&
        curYear < this.options.min.getFullYear()
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          (curYear - startYear + 1) +
          '-' +
          this.id +
          '" class="year unselectable"'
      } else if (
        this.options.max != null &&
        curYear > this.options.max.getFullYear()
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          (curYear - startYear + 1) +
          '-' +
          this.id +
          '" class="year unselectable"'
      } else if (
        this.options.isYearDisabled &&
        this.options.isYearDisabled(curYear)
      ) {
        gridCells +=
          '\t\t<td id="cell' +
          (curYear - startYear + 1) +
          '-' +
          this.id +
          '" class="year unselectable"'
      } else {
        gridCells +=
          '\t\t<td id="cell' +
          (curYear - startYear + 1) +
          '-' +
          this.id +
          '" class="year selectable"'
      }
      gridCells += ' data-value="' + curYear + '"'
      gridCells += ' title="' + curYear + '"'
      gridCells +=
        ' role="gridcell" tabindex="-1" aria-selected="false">' + curYear
      gridCells += '</td>'
      var curPos = curYear - startYear
      if (curPos == 4 || curPos == 9 || curPos == 14) {
        gridCells +=
          '\t</tr>\n\t<tr id="row' +
          rowCount +
          '-' +
          this.id +
          '" role="row">\n'
        rowCount++
      }
    }
    gridCells += '\t</tr>'
    $tbody.append(gridCells)
    this.gridType = 2 // 0 = days grid, 1 = months grid, 2 = years Grid
  } // end populateYearsCalendar()

  /**
   *	showDaysOfPrevMonth() is a member function to show the days of the previous month
   *
   *	@param	(offset int) offset may be used to specify an offset for setting
   *			focus on a day the specified number of days from the end of the month.
   *	@return true if the previous month is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showDaysOfPrevMonth = function(offset) {
    // show the previous month
    var previousMonth = this.previousMonth(this.year, this.month)
    if (
      this.options.min != null &&
      (previousMonth.year < this.options.min.getFullYear() ||
        (previousMonth.year == this.options.min.getFullYear() &&
          previousMonth.month < this.options.min.getMonth()))
    ) {
      return false
    }
    this.month = previousMonth.month
    this.year = previousMonth.year
    // populate the calendar grid
    this.populateDaysCalendar()

    // if offset was specified, set focus on the last day - specified offset
    if (offset != null) {
      var numDays = this.getDaysInMonth(this.year, this.month)
      var day = 'cell' + (numDays - offset) + '-' + this.id
      this.$grid.attr('aria-activedescendant', day)
      this.selectGridCell(day)
    }
    return true
  } // end showDaysOfPrevMonth()

  /**
   *	showDaysOfMonth() is a member function to show the days of the specified month
   *
   *	@param	(month int) the month to show.
   *	@return true if the  month is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showDaysOfMonth = function(month) {
    if (
      this.options.min != null &&
      (this.year < this.options.min.getFullYear() ||
        (this.year == this.options.min.getFullYear() &&
          month < this.options.min.getMonth()))
    ) {
      return false
    }
    if (
      this.options.max != null &&
      (this.year > this.options.max.getFullYear() ||
        (this.year == this.options.max.getFullYear() &&
          month > this.options.max.getMonth()))
    ) {
      return false
    }
    this.month = month
    this.date = Math.min(this.date, this.getDaysInMonth(this.year, this.month))
    this.populateDaysCalendar()
    // update the table's activedescendant to point to the active day
    var $active = this.$grid.find("tbody td[data-value='" + this.date + "']")
    this.selectGridCell($active.attr('id'))
    return true
  } // end showDaysOfMonth()

  /**
   *	showMonthsOfPrevYear() is a member function to show the months of the previous year
   *
   *	@param	(offset int) offset may be used to specify an offset for setting
   *			focus on a month the specified number of months from the end of the year.
   *	@return true if the previous year is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showMonthsOfPrevYear = function(offset) {
    if (
      this.options.min != null &&
      this.year - 1 < this.options.min.getFullYear()
    ) {
      return false
    }
    // show the previous year
    this.year--
    // populate the calendar grid
    this.populateMonthsCalendar()

    // if offset was specified, set focus on the last month - specified offset
    if (offset != null) {
      var month = 'cell' + (12 - offset) + '-' + this.id
      this.$grid.attr('aria-activedescendant', month)
      this.selectGridCell(month)
    }
    return true
  } // end showMonthsOfPrevYear()

  /**
   *	showMonthsOfYear() is a member function to show the months of the specified year
   *
   *	@param	(year int) the year to show.
   *	@return true if the year is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showMonthsOfYear = function(year) {
    if (this.options.min != null && year < this.options.min.getFullYear()) {
      return false
    }
    if (this.options.max != null && year > this.options.max.getFullYear()) {
      return false
    }
    this.year = year
    this.populateMonthsCalendar()
    // update the table's activedescendant to point to the active month
    var $active = this.$grid.find("tbody td[data-value='" + this.month + "']")
    this.$grid.attr('aria-activedescendant', $active.attr('id'))
    this.selectGridCell($active.attr('id'))
    return true
  } // end showMonthsOfYear()

  /**
   *	showYearsOfPrevRange() is a member function to show the years of the previous range of twenty years
   *
   *	@param	(offset int) offset may be used to specify an offset for setting
   *			focus on a year the specified number of years from the end of the range.
   *	@return true if the year - 20 is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showYearsOfPrevRange = function(offset) {
    if (
      this.options.min != null &&
      this.year - 20 < this.options.min.getFullYear()
    ) {
      return false
    }
    // show the previous range
    this.year -= 20
    // populate the calendar grid
    this.populateYearsCalendar()

    // if offset was specified, set focus on the last month - specified offset
    if (offset != null) {
      var year = 'cell' + (20 - offset) + '-' + this.id
      this.$grid.attr('aria-activedescendant', year)
      this.selectGridCell(year)
    }
    return true
  } // end showYearsOfPrevRange()

  /**
   * showDaysOfNextMonth() is a member function to show the next month
   *
   *	@param	(offset int) offset may be used to specify an offset for setting
   *			focus on a day the specified number of days from
   *			the beginning of the month.
   *	@return true if the nextmMonth is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showDaysOfNextMonth = function(offset) {
    // show the next month
    var nextMonth = this.nextMonth(this.year, this.month)
    if (
      this.options.max != null &&
      (nextMonth.year > this.options.max.getFullYear() ||
        (nextMonth.year == this.options.max.getFullYear() &&
          nextMonth.month > this.options.max.getMonth()))
    ) {
      return false
    }
    this.month = nextMonth.month
    this.year = nextMonth.year
    // populate the calendar grid
    this.populateDaysCalendar()

    // if offset was specified, set focus on the first day + specified offset
    if (offset != null) {
      var day = 'cell' + offset + '-' + this.id
      this.$grid.attr('aria-activedescendant', day)
      this.selectGridCell(day)
    }
    return true
  } // end showDaysOfNextMonth()

  /**
   * showMonthsOfNextYear() is a member function to show the months of next year
   *
   *	@param	(offset int) offset may be used to specify an offset for setting
   *			focus on a month the specified number of month from
   *			the beginning of the year.
   *	@return true if the next year is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showMonthsOfNextYear = function(offset) {
    if (
      this.options.max != null &&
      this.year + 1 > this.options.max.getFullYear()
    ) {
      return false
    }
    // show the next year
    this.year++
    // populate the calendar grid
    this.populateMonthsCalendar()

    // if offset was specified, set focus on the first day + specified offset
    if (offset != null) {
      var month = 'cell' + offset + '-' + this.id
      this.$grid.attr('aria-activedescendant', month)
      this.selectGridCell(month)
    }
    return true
  } // end showMonthsOfNextYear()

  /**
   * showYearsOfNextRange() is a member function to show the years of next range of years
   *
   *	@param	(offset int) offset may be used to specify an offset for setting
   *			focus on a year the specified number of years from
   *			the beginning of the range.
   *	@return true if the year + 20 is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showYearsOfNextRange = function(offset) {
    if (
      this.options.max != null &&
      this.year + 20 > this.options.max.getFullYear()
    ) {
      return false
    }
    // show the next year
    this.year += 20
    // populate the calendar grid
    this.populateYearsCalendar()

    // if offset was specified, set focus on the first day + specified offset
    if (offset != null) {
      var year = 'cell' + offset + '-' + this.id
      this.$grid.attr('aria-activedescendant', year)
      this.selectGridCell(year)
    }
    return true
  } // end showYearsOfNextRange()

  /**
   *	showDaysOfPrevYear() is a member function to show the previous year
   *
   *	@return true if the previous year is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showDaysOfPrevYear = function() {
    if (
      this.options.min != null &&
      (this.year - 1 < this.options.min.getFullYear() ||
        (this.year - 1 == this.options.min.getFullYear() &&
          this.month < this.options.min.getMonth()))
    ) {
      return false
    }
    // decrement the year
    this.year--

    // populate the calendar grid
    this.populateDaysCalendar()
    return true
  } // end showDaysOfPrevYear()

  /**
   *	showDaysOfNextYear() is a member function to show the next year
   *
   *	@return true if the next year is between the minimum and the maximum date otherwise return false
   */
  Datepicker.prototype.showDaysOfNextYear = function() {
    if (
      this.options.max != null &&
      (this.year + 1 > this.options.max.getFullYear() ||
        (this.year + 1 == this.options.max.getFullYear() &&
          this.month > this.options.max.getMonth()))
    ) {
      return false
    }
    // increment the year
    this.year++

    // populate the calendar grid
    this.populateDaysCalendar()
    return true
  } // end showDaysOfNextYear()

  /**
   *	bindHandlers() is a member function to bind event handlers for the widget
   *
   *	@return N/A
   */
  Datepicker.prototype.bindHandlers = function() {
    var self = this

    // bind button handlers
    this.$fastprev.click(function(e) {
      return self.handleFastPrevClick(e)
    })
    this.$prev.click(function(e) {
      return self.handlePrevClick(e)
    })
    this.$next.click(function(e) {
      return self.handleNextClick(e)
    })
    this.$fastnext.click(function(e) {
      return self.handleFastNextClick(e)
    })
    this.$monthObj.click(function(e) {
      return self.handleMonthClick(e)
    })
    this.$monthObj.keydown(function(e) {
      return self.handleMonthKeyDown(e)
    })
    this.$fastprev.keydown(function(e) {
      return self.handleFastPrevKeyDown(e)
    })
    this.$prev.keydown(function(e) {
      return self.handlePrevKeyDown(e)
    })
    this.$next.keydown(function(e) {
      return self.handleNextKeyDown(e)
    })
    this.$fastnext.keydown(function(e) {
      return self.handleFastNextKeyDown(e)
    })
    if (this.options.modal == true) {
      this.$close.click(function(e) {
        return self.handleCloseClick(e)
      })
      this.$close.keydown(function(e) {
        return self.handleCloseKeyDown(e)
      })
    }

    // bind grid handlers
    this.$grid.keydown(function(e) {
      return self.handleGridKeyDown(e)
    })
    this.$grid.keypress(function(e) {
      return self.handleGridKeyPress(e)
    })
    this.$grid.focus(function(e) {
      return self.handleGridFocus(e)
    })
    this.$grid.blur(function(e) {
      return self.handleGridBlur(e)
    })
    this.$grid.delegate('td', 'click', function(e) {
      return self.handleGridClick(this, e)
    })

    // bind target handlers
    this.$target.change(function(e) {
      var date = self.parseDate($(this).val())
      self.updateLinked(date)
    })
  } // end bindHandlers();

  /**
   *	handleFastPrevClick() is a member function to process click events for the fast prev month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleFastPrevClick = function(e) {
    if (this.showDaysOfPrevYear()) {
      var active = this.$grid.attr('aria-activedescendant')
      if (this.month != this.curMonth || this.year != this.curYear) {
        this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
        this.selectGridCell('cell1' + '-' + this.id)
      } else {
        this.$grid.attr('aria-activedescendant', active)
        this.selectGridCell(active)
      }
    }
    e.stopPropagation()
    return false
  } // end handleFastPrevClick()

  /**
   *	handlePrevClick() is a member function to process click events for the prev month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handlePrevClick = function(e) {
    var active = this.$grid.attr('aria-activedescendant')
    switch (this.gridType) {
      case 0: // days grid
        var ok
        if (e.ctrlKey) {
          ok = this.showDaysOfPrevYear()
        } else {
          ok = this.showDaysOfPrevMonth()
        }
        if (ok) {
          if (this.month != this.curMonth || this.year != this.curYear) {
            this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
            this.selectGridCell('cell1' + '-' + this.id)
          } else {
            this.$grid.attr('aria-activedescendant', active)
            this.selectGridCell(active)
          }
        }
        break
      case 1: // months grid
        if (this.showMonthsOfPrevYear()) {
          if (this.year != this.curYear) {
            this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
            this.selectGridCell('cell1' + '-' + this.id)
          } else {
            this.$grid.attr('aria-activedescendant', active)
            this.selectGridCell(active)
          }
        }
        break
      case 2: // years grid
        if (this.showYearsOfPrevRange()) {
          this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
          this.selectGridCell('cell1' + '-' + this.id)
        }
        break
    }
    e.stopPropagation()
    return false
  } // end handlePrevClick()

  /**
   *	handleMonthClick() is a member function to process click events for the month header
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleMonthClick = function(e) {
    this.changeGrid(e)
    e.stopPropagation()
    return false
  } // end handleMonthClick()

  /**
   *	handleNextClick() is a member function to process click events for the next month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleNextClick = function(e) {
    var active = this.$grid.attr('aria-activedescendant')
    switch (this.gridType) {
      case 0: // days grid
        var ok
        if (e.ctrlKey) {
          ok = this.showDaysOfNextYear()
        } else {
          ok = this.showDaysOfNextMonth()
        }
        if (ok) {
          if (this.month != this.curMonth || this.year != this.curYear) {
            this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
            this.selectGridCell('cell1' + '-' + this.id)
          } else {
            this.$grid.attr('aria-activedescendant', active)
            this.selectGridCell(active)
          }
        }
        break
      case 1: // months grid
        if (this.showMonthsOfNextYear()) {
          if (this.year != this.curYear) {
            this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
            this.selectGridCell('cell1' + '-' + this.id)
          } else {
            this.$grid.attr('aria-activedescendant', active)
            this.selectGridCell(active)
          }
        }
        break
      case 2: // years grid
        if (this.showYearsOfNextRange()) {
          this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
          this.selectGridCell('cell1' + '-' + this.id)
        }
        break
    }
    e.stopPropagation()
    return false
  } // end handleNextClick()

  /**
   *	handleFastNextClick() is a member function to process click events for the fast next month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleFastNextClick = function(e) {
    if (this.showDaysOfNextYear()) {
      var active = this.$grid.attr('aria-activedescendant')
      if (this.month != this.curMonth || this.year != this.curYear) {
        this.$grid.attr('aria-activedescendant', 'cell1' + '-' + this.id)
        this.selectGridCell('cell1' + '-' + this.id)
      } else {
        this.$grid.attr('aria-activedescendant', active)
        this.selectGridCell(active)
      }
    }
    e.stopPropagation()
    return false
  } // end handleFastNextClick()

  /**
   *	handleCloseClick() is a member function to process click events for the close button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleCloseClick = function(e) {
    // dismiss the dialog box
    this.hide()
    e.stopPropagation()
    return false
  } // end handleCloseClick()

  /**
   *	handleFastPrevKeyDown() is a member function to process keydown events for the fast prev month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleFastPrevKeyDown = function(e) {
    if (e.altKey) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab: {
        if (this.options.modal == false || e.ctrlKey) {
          return true
        }
        if (e.shiftKey) {
          this.$close.focus()
        } else {
          this.$prev.focus()
        }
        e.stopPropagation()
        return false
      }
      case this.keys.enter:
      case this.keys.space: {
        if (e.shiftKey || e.ctrlKey) {
          return true
        }
        this.showDaysOfPrevYear()
        e.stopPropagation()
        return false
      }
      case this.keys.esc: {
        // dismiss the dialog box
        this.hide()
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handleFastPrevKeyDown()

  /**
   *	handlePrevKeyDown() is a member function to process keydown events for the prev month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handlePrevKeyDown = function(e) {
    if (e.altKey) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab: {
        if (this.options.modal == false || e.ctrlKey) {
          return true
        }
        if (e.shiftKey) {
          if (this.gridType == 0) {
            this.$fastprev.focus()
          } else {
            this.$close.focus()
          }
        } else {
          this.$monthObj.focus()
        }
        e.stopPropagation()
        return false
      }
      case this.keys.enter:
      case this.keys.space: {
        if (e.shiftKey) {
          return true
        }
        switch (this.gridType) {
          case 0: // days grid
            if (e.ctrlKey) {
              this.showDaysOfPrevYear()
            } else {
              this.showDaysOfPrevMonth()
            }
            break
          case 1: // months grid
            this.showMonthsOfPrevYear()
            break
          case 2: // years grid
            this.showYearsOfPrevRange()
            break
        }
        e.stopPropagation()
        return false
      }
      case this.keys.esc: {
        // dismiss the dialog box
        this.hide()
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handlePrevKeyDown()

  /**
   *	handleMonthKeyDown() is a member function to process keydown events for the month title
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleMonthKeyDown = function(e) {
    if (e.altKey) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab: {
        if (this.options.modal == false || e.ctrlKey) {
          return true
        }
        if (e.shiftKey) {
          this.$prev.focus()
        } else {
          this.$next.focus()
        }
        e.stopPropagation()
        return false
      }
      case this.keys.enter:
      case this.keys.space: {
        this.changeGrid(e)
        e.stopPropagation()
        return false
      }
      case this.keys.esc: {
        // dismiss the dialog box
        this.hide()
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handleMonthKeyDown()

  /**
   *	handleNextKeyDown() is a member function to process keydown events for the next month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleNextKeyDown = function(e) {
    if (e.altKey) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab: {
        if (this.options.modal == false || e.ctrlKey) {
          return true
        }
        if (e.shiftKey) {
          this.$monthObj.focus()
        } else {
          if (this.gridType == 0) {
            this.$fastnext.focus()
          } else {
            this.$grid.focus()
          }
        }
        e.stopPropagation()
        return false
      }
      case this.keys.enter:
      case this.keys.space: {
        switch (this.gridType) {
          case 0: // days grid
            if (e.ctrlKey) {
              this.showDaysOfNextYear()
            } else {
              this.showDaysOfNextMonth()
            }
            break
          case 1: // months grid
            this.showMonthsOfNextYear()
            break
          case 2: // years grid
            this.showYearsOfNextRange()
            break
        }
        e.stopPropagation()
        return false
      }
      case this.keys.esc: {
        // dismiss the dialog box
        this.hide()
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handleNextKeyDown()

  /**
   *	handleFastNextKeyDown() is a member function to process keydown events for the fast next month button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleFastNextKeyDown = function(e) {
    if (e.altKey) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab: {
        if (this.options.modal == false || e.ctrlKey) {
          return true
        }
        if (e.shiftKey) {
          this.$next.focus()
        } else {
          this.$grid.focus()
        }
        e.stopPropagation()
        return false
      }
      case this.keys.enter:
      case this.keys.space: {
        this.showDaysOfNextYear()
        e.stopPropagation()
        return false
      }
      case this.keys.esc: {
        // dismiss the dialog box
        this.hide()
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handleFastNextKeyDown()

  /**
   *	handleCloseKeyDown() is a member function to process keydown events for the close button
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleCloseKeyDown = function(e) {
    if (e.altKey) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab: {
        if (e.ctrlKey) {
          return true
        }
        if (e.shiftKey) {
          this.$grid.focus()
        } else {
          if (this.gridType == 0) {
            this.$fastprev.focus()
          } else {
            this.$prev.focus()
          }
        }
        e.stopPropagation()
        return false
      }
      case this.keys.enter:
      case this.keys.esc:
      case this.keys.space: {
        if (e.shiftKey || e.ctrlKey) {
          return true
        }
        // dismiss the dialog box
        this.hide()
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handlePrevKeyDown()

  /**
   *	handleGridKeyDown() is a member function to process keydown events for the Datepicker grid
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleGridKeyDown = function(e) {
    var $curCell = $('#' + this.$grid.attr('aria-activedescendant'))
    var $cells = this.$grid.find('td.selectable')
    var colCount = this.$grid
      .find('tbody tr')
      .eq(0)
      .find('td').length
    if (
      e.altKey &&
      e.keyCode != this.keys.pageup &&
      e.keyCode != this.keys.pagedown
    ) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab: {
        if (this.options.modal == true) {
          if (e.shiftKey) {
            if (this.gridType == 0) {
              this.$fastnext.focus()
            } else {
              this.$next.focus()
            }
          } else {
            this.$close.focus()
          }
          e.stopPropagation()
          return false
        } else {
          // dismiss the dialog box
          this.hide()
          this.handleTabOut(e)
          e.stopPropagation()
          return false
        }
        break
      }
      case this.keys.enter:
      case this.keys.space: {
        if (e.ctrlKey) {
          return true
        }
        switch (this.gridType) {
          case 0: // days grid
            // update the target box
            this.update()
            // dismiss the dialog box
            this.hide()
            break
          case 1: // months grid
            this.showDaysOfMonth(parseInt($curCell.attr('data-value'), 10))
            break
          case 2: // years grid
            this.showMonthsOfYear(parseInt($curCell.attr('data-value'), 10))
            break
        }
        e.stopPropagation()
        return false
      }
      case this.keys.esc: {
        // dismiss the dialog box
        this.hide()
        e.stopPropagation()
        return false
      }
      case this.keys.left:
      case this.keys.right: {
        if (
          (e.keyCode == this.keys.left &&
            this.locales.directionality === 'LTR') ||
          (e.keyCode == this.keys.right &&
            this.locales.directionality === 'RTL')
        ) {
          if (e.ctrlKey || e.shiftKey) {
            return true
          }
          var cellIndex = $cells.index($curCell) - 1
          var $prevCell = null
          if (cellIndex >= 0) {
            $prevCell = $cells.eq(cellIndex)
            this.unSelectGridCell($curCell.attr('id'))
            this.$grid.attr('aria-activedescendant', $prevCell.attr('id'))
            this.selectGridCell($prevCell.attr('id'))
          } else {
            switch (this.gridType) {
              case 0: // days grid
                this.showDaysOfPrevMonth(0)
                break
              case 1: // months grid
                this.showMonthsOfPrevYear(0)
                break
              case 2: // years grid
                this.showYearsOfPrevRange(0)
                break
            }
          }
          e.stopPropagation()
          return false
        } else {
          if (e.ctrlKey || e.shiftKey) {
            return true
          }
          var cellIndex = $cells.index($curCell) + 1
          var $nextCell = null
          if (cellIndex < $cells.length) {
            $nextCell = $cells.eq(cellIndex)
            this.unSelectGridCell($curCell.attr('id'))
            this.$grid.attr('aria-activedescendant', $nextCell.attr('id'))
            this.selectGridCell($nextCell.attr('id'))
          } else {
            switch (this.gridType) {
              case 0: // days grid
                // move to the next month
                this.showDaysOfNextMonth(1)
                break
              case 1: // months grid
                this.showMonthsOfNextYear(1)
                break
              case 2: // years grid
                this.showYearsOfNextRange(1)
                break
            }
          }
          e.stopPropagation()
          return false
        }
      }
      case this.keys.up: {
        if (e.ctrlKey || e.shiftKey) {
          return true
        }
        var cellIndex = $cells.index($curCell) - colCount
        var $prevCell = null
        if (cellIndex >= 0) {
          $prevCell = $cells.eq(cellIndex)
          this.unSelectGridCell($curCell.attr('id'))
          this.$grid.attr('aria-activedescendant', $prevCell.attr('id'))
          this.selectGridCell($prevCell.attr('id'))
        } else {
          // move to appropriate day in previous month
          cellIndex = colCount - 1 - $cells.index($curCell)
          switch (this.gridType) {
            case 0: // days grid
              this.showDaysOfPrevMonth(cellIndex)
              break
            case 1: // months grid
              this.showMonthsOfPrevYear(cellIndex)
              break
            case 2: // years grid
              this.showYearsOfPrevRange(cellIndex)
              break
          }
        }
        e.stopPropagation()
        return false
      }
      case this.keys.down: {
        if (e.ctrlKey || e.shiftKey) {
          return true
        }
        var cellIndex = $cells.index($curCell) + colCount
        var $nextCell = null
        if (cellIndex < $cells.length) {
          $nextCell = $cells.eq(cellIndex)
          this.unSelectGridCell($curCell.attr('id'))
          this.$grid.attr('aria-activedescendant', $nextCell.attr('id'))
          this.selectGridCell($nextCell.attr('id'))
        } else {
          // move to appropriate day in next month
          cellIndex = colCount + 1 - ($cells.length - $cells.index($curCell))
          switch (this.gridType) {
            case 0: // days grid
              this.showDaysOfNextMonth(cellIndex)
              break
            case 1: // months grid
              this.showMonthsOfNextYear(cellIndex)
              break
            case 2: // years grid
              this.showYearsOfNextRange(cellIndex)
              break
          }
        }
        e.stopPropagation()
        return false
      }
      case this.keys.pageup: {
        var active = this.$grid.attr('aria-activedescendant')
        if (e.shiftKey || e.ctrlKey) {
          return true
        }
        e.preventDefault()
        var ok = false
        switch (this.gridType) {
          case 0: // days grid
            if (e.altKey) {
              e.stopImmediatePropagation()
              ok = this.showDaysOfPrevYear()
            } else {
              ok = this.showDaysOfPrevMonth()
            }
            break
          case 1: // months grid
            ok = this.showMonthsOfPrevYear()
            break
          case 2: // years grid
            ok = this.showYearsOfPrevRange()
            break
        }
        if (ok) {
          if ($('#' + active).attr('id') == undefined) {
            $cells = this.$grid.find('td.selectable')
            var $lastCell = $cells.eq($cells.length - 1)
            this.$grid.attr('aria-activedescendant', $lastCell.attr('id'))
            this.selectGridCell($lastCell.attr('id'))
          } else {
            this.selectGridCell(active)
          }
        }
        e.stopPropagation()
        return false
      }
      case this.keys.pagedown: {
        var active = this.$grid.attr('aria-activedescendant')
        if (e.shiftKey || e.ctrlKey) {
          return true
        }
        e.preventDefault()
        var ok = false
        switch (this.gridType) {
          case 0: // days grid
            if (e.altKey) {
              e.stopImmediatePropagation()
              ok = this.showDaysOfNextYear()
            } else {
              ok = this.showDaysOfNextMonth()
            }
            break
          case 1: // months grid
            ok = this.showMonthsOfNextYear()
            break
          case 2: // years grid
            ok = this.showYearsOfNextRange()
            break
        }
        if (ok) {
          if ($('#' + active).attr('id') == undefined) {
            $cells = this.$grid.find('td.selectable')
            var $lastCell = $cells.eq($cells.length - 1)
            this.$grid.attr('aria-activedescendant', $lastCell.attr('id'))
            this.selectGridCell($lastCell.attr('id'))
          } else {
            this.selectGridCell(active)
          }
        }
        e.stopPropagation()
        return false
      }
      case this.keys.home: {
        if (e.ctrlKey || e.shiftKey) {
          return true
        }
        var $firstCell = $cells.eq(0)
        this.unSelectGridCell($curCell.attr('id'))
        this.$grid.attr('aria-activedescendant', $firstCell.attr('id'))
        this.selectGridCell($firstCell.attr('id'))
        e.stopPropagation()
        return false
      }
      case this.keys.end: {
        if (e.ctrlKey || e.shiftKey) {
          return true
        }
        var $lastCell = $cells.eq($cells.length - 1)
        this.unSelectGridCell($curCell.attr('id'))
        this.$grid.attr('aria-activedescendant', $lastCell.attr('id'))
        this.selectGridCell($lastCell.attr('id'))
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handleGridKeyDown()

  /**
   *	handleGridKeyPress() is a member function to consume keypress events for browsers that
   *	use keypress to scroll the screen and manipulate tabs
   *
   *	@param (e obj) e is the event object associated with the event
   *
   * 	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleGridKeyPress = function(e) {
    if (e.altKey) {
      return true
    }
    switch (e.keyCode) {
      case this.keys.tab:
      case this.keys.enter:
      case this.keys.space:
      case this.keys.esc:
      case this.keys.left:
      case this.keys.right:
      case this.keys.up:
      case this.keys.down:
      case this.keys.pageup:
      case this.keys.pagedown:
      case this.keys.home:
      case this.keys.end: {
        e.stopPropagation()
        return false
      }
    }
    return true
  } // end handleGridKeyPress()

  /**
   *	handleGridClick() is a member function to process mouse click events for the Datepicker grid
   *
   *	@param (id string) id is the id of the object triggering the event
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleGridClick = function(id, e) {
    var $cell = $(id)
    if ($cell.is('.empty') || $cell.is('.unselectable')) {
      return true
    }
    this.$grid
      .find('.focus')
      .removeClass('focus')
      .attr('aria-selected', 'false')
      .attr('tabindex', -1)
    switch (this.gridType) {
      case 0: // days grid
        this.$grid.attr('aria-activedescendant', $cell.attr('id'))
        this.selectGridCell($cell.attr('id'))
        // update the target box
        this.update()
        // dismiss the dialog box
        this.hide()
        break
      case 1: // months grid
        this.showDaysOfMonth(parseInt($cell.attr('data-value'), 10))
        break
      case 2: // years grid
        this.showMonthsOfYear(parseInt($cell.attr('data-value'), 10))
        break
    }
    e.stopPropagation()
    return false
  } // end handleGridClick()

  /**
   *	handleGridFocus() is a member function to process focus events for the Datepicker grid
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) true
   */
  Datepicker.prototype.handleGridFocus = function(e) {
    var active = this.$grid.attr('aria-activedescendant')
    if ($('#' + active).attr('id') == undefined) {
      var $cells = this.$grid.find('td.selectable')
      var $lastCell = $cells.eq($cells.length - 1)
      this.$grid.attr('aria-activedescendant', $lastCell.attr('id'))
      this.selectGridCell($lastCell.attr('id'))
    } else {
      this.selectGridCell(active)
    }
    return true
  } // end handleGridFocus()

  /**
   *	handleGridBlur() is a member function to process blur events for the Datepicker grid
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) true
   */
  Datepicker.prototype.handleGridBlur = function(e) {
    this.unSelectGridCell(this.$grid.attr('aria-activedescendant'))
    return true
  } // end handleGridBlur()

  /**
   *	handleTabOut() is a member function to process tab key in Datepicker grid
   *
   * @param (e obj) e is the event object associated with the event
   * @return (boolean) true
   */
  Datepicker.prototype.handleTabOut = function(e) {
    var fields = $('body').find('input:visible,textarea:visible,select:visible')
    var index = fields.index(this.$target)
    if (index > -1 && index < fields.length) {
      if (e.shiftKey) {
        if (index > 0) {
          index--
        }
      } else {
        if (index + 1 < fields.length) {
          index++
        }
      }
      fields.eq(index).focus()
    }
    return true
  } // end handleTabOut()

  /**
   *	changeGrid() is a member function to change the calendar after click or enter into the calendar title
   *
   *	@param (e obj) e is the event object associated with the event
   *	@return true
   */
  Datepicker.prototype.changeGrid = function(e) {
    switch (this.gridType) {
      case 0: // days grid
        this.populateMonthsCalendar()
        if (this.year != this.curYear) {
          var $cells = this.$grid.find('td.selectable')
          this.$grid.attr('aria-activedescendant', $cells.eq(0).attr('id'))
        } else {
          this.$grid.attr(
            'aria-activedescendant',
            this.$grid.find('.curMonth').attr('id')
          )
        }
        this.selectGridCell(this.$grid.attr('aria-activedescendant'))
        break
      case 2: // years grid
        if (e.shiftKey) {
          // goto previous twenty years
          this.year -= 20
        } else {
          // goto next twenty years
          this.year += 20
        }
      case 1: // months grid
        this.populateYearsCalendar()
        if (this.year != this.curYear) {
          var $cells = this.$grid.find('td.selectable')
          this.$grid.attr('aria-activedescendant', $cells.eq(0).attr('id'))
        } else {
          this.$grid.attr(
            'aria-activedescendant',
            this.$grid.find('.curYear').attr('id')
          )
        }
        this.selectGridCell(this.$grid.attr('aria-activedescendant'))
        break
    }
    return true
  } // end changeGrid()

  /**
   *	selectGridCell() is a member function to put focus on the current cell of the grid.
   *
   *	@return N/A
   */
  Datepicker.prototype.selectGridCell = function(cellId) {
    $('#' + cellId)
      .addClass('focus')
      .attr('aria-selected', 'true')
      .attr('tabindex', 0)
      .focus()
  } // end selectGridCell()

  /**
   *	unSelectGridCell() is a member function to put focus on the current cell of the grid.
   *
   *	@return N/A
   */
  Datepicker.prototype.unSelectGridCell = function(cellId) {
    $('#' + cellId)
      .removeClass('focus')
      .attr('aria-selected', 'false')
      .attr('tabindex', -1)
  } // end unSelectGridCell()

  /**
   *	update() is a member function to update the target textbox.
   *
   *	@return N/A
   */
  Datepicker.prototype.update = function() {
    var $curDay = $('#' + this.$grid.attr('aria-activedescendant'))
    var date = new Date(
      this.year,
      this.month,
      parseInt($curDay.attr('data-value'), 10)
    )
    var val = this.formatDate(date, this.options.outputFormat)
    this.$target.val(val)
    this.$target.removeAttr('aria-invalid')
    this.$target.parents('.form-group').removeClass('has-error')
    this.$target.trigger('change')
    if (this.options.onUpdate) {
      this.options.onUpdate(val)
    }
  } // end update()

  /**
   *	updateLinked() is a member function to update the linked textbox.
   *
   *	@param	(date Date) the current value of this Datepicker date.
   *	@return N/A
   */
  Datepicker.prototype.updateLinked = function(date) {
    if (this.options.previous !== null && this.options.previous.val() !== '') {
      var previousDate = this.options.previous.datepicker('getDate')
      if (previousDate > date) {
        var previousVal = this.formatDate(
          date,
          this.options.previous.datepicker('outputFormat')
        )
        this.options.previous.val(previousVal)
      }
    }
    if (this.options.next !== null && this.options.next.val() !== '') {
      var nextDate = this.options.next.datepicker('getDate')
      if (nextDate < date) {
        var nextVal = this.formatDate(
          date,
          this.options.next.datepicker('outputFormat')
        )
        this.options.next.val(nextVal)
      }
    }
  } // end updateLinked()

  /**
   *	hideObject() is a member function to hide an element of the datepicker.
   *
   *	@param ($element jQuery object) the element to hide
   *	@return N/A
   */
  Datepicker.prototype.hideObject = function($element) {
    $element.attr('aria-hidden', true)
    $element.fadeOut(100)
  } // end hideObject()

  /**
   *	showObject() is a member function to show an element of the datepicker.
   *
   *	@param ($element jQuery object) the element to show
   *	@return N/A
   */
  Datepicker.prototype.showObject = function($element) {
    $element.attr('aria-hidden', false)
    $element.fadeIn(100)
  } // end showObject()

  /**
   *	show() is a member function to show the Datepicker and give it focus.
   *
   *	@return N/A
   */
  Datepicker.prototype.show = function() {
    var self = this
    $('.datepicker-calendar').trigger('ab.datepicker.opening', [self.id])
    if (this.options.modal == true) {
      if (!this.modalEventHandler) {
        this.modalEventHandler = function(e) {
          //ensure focus remains on the dialog
          self.$grid.focus()
          // Consume all mouse events and do nothing
          e.stopPropagation
          return false
        }
      }
      // Bind an event listener to the document to capture all mouse events to make dialog modal
      $(document).on('click mousedown mouseup', this.modalEventHandler)
      this.greyOut(true)
      var zIndex = parseInt($('#datepicker-overlay').css('z-index'), 10) || 40
      this.$calendar.css('z-index', zIndex + 1)
    } else {
      // Bind an event listener to the document to capture only the mouse click event
      $(document).on('click', $.proxy(this.handleDocumentClick, this))
      this.$calendar.on('ab.datepicker.opening', function(e, id) {
        if (id != self.id) {
          self.hide()
        } else {
          //ensure focus remains on the dialog
          self.$grid.focus()
        }
      })
    }
    this.$calendar.on('ab.datepicker.opened', function(e, id) {
      if (id == self.id) {
        self.$grid.focus()
      }
    })

    // adjust position of the calendar
    var groupOffsetTop = Math.max(
      0,
      Math.floor(this.$group.offset().top - this.$label.offset().top)
    )
    var groupOffsetLeft = Math.max(
      0,
      Math.floor(this.$group.offset().left - this.$label.offset().left)
    )
    var parentPaddingLeft = parseInt(
      this.$calendar.parent().css('padding-left'),
      10
    )
    var calendarHeight = this.$calendar.outerHeight()
    var groupTop = this.$group.offset().top
    var groupLeft = this.$group.offset().left
    var groupHeight = this.$group.outerHeight(true)
    var roomBefore = Math.floor(groupTop - $(window).scrollTop())
    var roomAfter = Math.floor(
      $(window).height() - (groupTop + groupHeight - $(window).scrollTop())
    )
    if (roomAfter < calendarHeight && roomAfter < roomBefore) {
      // show calendar above group
      this.$calendar.addClass('above')
      this.$calendar.css({
        top: groupOffsetTop - calendarHeight + 'px',
        left: groupOffsetLeft + parentPaddingLeft + 'px',
      })
    } else {
      // show calendar below group
      this.$calendar.addClass('below')
      this.$calendar.css({
        top: groupHeight + groupOffsetTop + 'px',
        left: groupOffsetLeft + parentPaddingLeft + 'px',
      })
    }

    // show the dialog
    this.$calendar.attr('aria-hidden', 'false')
    this.$calendar.fadeIn(100)
    $('.datepicker-calendar').trigger('ab.datepicker.opened', [self.id])
  } // end show()

  /**
   *	refresh() is a member function to refesh the datepicker content when an option change.
   *
   *	@return N/A
   */
  Datepicker.prototype.refresh = function() {
    this.drawCalendarHeader()
    switch (this.gridType) {
      case 0:
        this.populateDaysCalendar()
        break
      case 1:
        this.populateMonthsCalendar()
        break
      case 2:
        this.populateYearsCalendar()
        break
    }
  } // end refresh()

  /**
   *	handleDocumentClick() is a member function to handle click on document.
   *
   *	@param (e obj) e is the event object associated with the event
   *
   *	@return (boolean) false if consuming event, true if propagating
   */
  Datepicker.prototype.handleDocumentClick = function(e) {
    if ($(e.target).parents('#datepicker-calendar-' + this.id).length == 0) {
      this.hide()
      return true
    } else {
      //ensure focus remains on the dialog
      this.$grid.focus()
      // Consume all mouse events and do nothing
      e.stopPropagation
      return false
    }
  } // end handleDocumentClick()

  /**
   *	hide() is a member function to hide the Datepicker and remove focus.
   *
   *	@return N/A
   */
  Datepicker.prototype.hide = function(omitSettingFocus) {
    if (this.options.inline == false) {
      var self = this
      // unbind the modal event sinks
      if (this.options.modal == true) {
        if (this.modalEventHandler) {
          $(document).off('click mousedown mouseup', this.modalEventHandler)
        }
        this.greyOut(false)
      } else {
        $(document).off('click', self.handleDocumentClick)
        this.$calendar.off('ab.datepicker.opening')
      }
      // hide the dialog
      this.$calendar.removeClass('above below')
      this.$calendar.attr('aria-hidden', 'true')
      this.$calendar.fadeOut(100)
      $('.datepicker-calendar').trigger('ab.datepicker.closed', [self.id])
      // set focus on the focus target
      if (!omitSettingFocus) {
        this.$target.focus()
      }
    }
  } // end hide()

  /**
   *	greyOut() is a member function to grey out the document background.
   *
   *	@return N/A
   */
  Datepicker.prototype.greyOut = function(on) {
    var $overlay = $('#datepicker-overlay')
    if ($overlay.length == 0 && on) {
      $('body').append(
        '<div id="datepicker-overlay" class="datepicker-overlay"></div>'
      )
      $overlay = $('#datepicker-overlay')
    }
    if (on) {
      $overlay.fadeIn(100)
    } else {
      $overlay.fadeOut(100)
    }
  } // end greyOut()

  /**
   *	absolutePosition() is a member function that compute the absolute position
   *	of some element within document.
   *
   *	@param (element obj) the element of the document
   *	@return an object containing the properties top and left.
   */
  Datepicker.prototype.absolutePosition = function(element) {
    var top = 0,
      left = 0
    if (element.getBoundingClientRect) {
      var box = element.getBoundingClientRect()
      var body = document.body
      var docElem = document.documentElement
      var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
      var scrollLeft =
        window.pageXOffset || docElem.scrollLeft || body.scrollLeft
      var clientTop = docElem.clientTop || body.clientTop || 0
      var clientLeft = docElem.clientLeft || body.clientLeft || 0
      top = Math.round(box.top + scrollTop - clientTop)
      left = Math.round(box.left + scrollLeft - clientLeft)
    } else {
      while (element) {
        top = top + parseInt(element.offsetTop, 10)
        left = left + parseInt(element.offsetLeft, 10)
        element = element.offsetParent
      }
    }
    return { top: top, left: left }
  } // end absolutePosition()

  /**
   *	getDaysInMonth() is a member function to calculate the number of days in a given month
   *
   *	@param (year int) the year
   *	@param (month int) the given month
   *
   *	@return (integer) number of days
   */
  Datepicker.prototype.getDaysInMonth = function(year, month) {
    return 32 - new Date(year, month, 32).getDate()
  } // end getDaysInMonth()

  /**
   *	previousMonth() is a member function that compute the month
   *	preceding a given month.
   *
   *	@param (year int) the given year
   *	@param (month int) the given month
   *	@return an object containing the properties year and month.
   */
  Datepicker.prototype.previousMonth = function(year, month) {
    if (month == 0) {
      month = 11
      year--
    } else {
      month--
    }
    return { year: year, month: month }
  } // end previousMonth()

  /**
   *	nextMonth() is a member function that compute the month
   *	following a given month.
   *
   *	@param (year int) the given year
   *	@param (month int) the given month
   *	@return an object containing the properties year and month.
   */
  Datepicker.prototype.nextMonth = function(year, month) {
    if (month == 11) {
      month = 0
      year++
    } else {
      month++
    }
    return { year: year, month: month }
  } // end nextMonth()

  /**
   *	formatDate (date_object, format)
   *	The format string uses the same abbreviations as in createDateFromFormat()
   *
   *	@param (date date object) the given date
   *	@param (format string) the given output format
   *	@returns a date in the output format specified.
   */
  Datepicker.prototype.formatDate = function(date, format) {
    var zeroPad = function(x) {
      return (x < 0 || x > 9 ? '' : '0') + x
    }
    var getWeekOfMonth = function(date) {
      return Math.ceil((date.getDate() - 1 - date.getDay()) / 7)
    }
    var getWeekOfYear = function(date) {
      var onejan = new Date(date.getFullYear(), 0, 1)
      return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7)
    }
    var getDayOfYear = function(date) {
      var start = new Date(date.getFullYear(), 0, 0)
      return Math.floor((date - start) / 86400000)
    }
    var getMillisecondsInDay = function(date) {
      var date1 = new Date(date.getTime())
      date1.setHours(0)
      return date - date1
    }
    var y = date.getFullYear() + ''
    var M = date.getMonth() + 1
    var d = date.getDate()
    var D = getDayOfYear(date)
    var E = date.getDay()
    var H = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var w = getWeekOfYear(date)
    var W = getWeekOfMonth(date)
    var F = Math.floor(date.getDate() / 7) + 1
    var Q = Math.ceil((date.getMonth() + 1) / 3)
    var era = date.getFullYear() < 1 ? 0 : 1
    var values = {
      y: '' + y,
      yyyy: y,
      yy: y.substring(2, 4),
      L: M,
      LL: zeroPad(M),
      LLL: this.locales.month_names_abbreviated[M - 1],
      LLLL: this.locales.month_names[M - 1],
      LLLLL: this.locales.month_names_narrow[M - 1],
      M: M,
      MM: zeroPad(M),
      MMM: this.locales.month_names_abbreviated[M - 1],
      MMMM: this.locales.month_names[M - 1],
      MMMMM: this.locales.month_names_narrow[M - 1],
      d: d,
      dd: zeroPad(d),
      D: D,
      DD: D,
      DDD: D,
      A: Math.round(getMillisecondsInDay(date) * Math.pow(10, -2)),
      AA: Math.round(getMillisecondsInDay(date) * Math.pow(10, -1)),
      AAA: Math.round(getMillisecondsInDay(date) * Math.pow(10, 0)),
      AAAA: Math.round(getMillisecondsInDay(date) * Math.pow(10, 1)),
      AAAAA: Math.round(getMillisecondsInDay(date) * Math.pow(10, 2)),
      AAAAAA: Math.round(getMillisecondsInDay(date) * Math.pow(10, 3)),
      E: this.locales.day_names_abbreviated[E],
      EE: this.locales.day_names_abbreviated[E],
      EEE: this.locales.day_names_abbreviated[E],
      EEEE: this.locales.day_names[E],
      EEEEE: this.locales.day_names_narrow[E],
      EEEEEE: this.locales.day_names_short[E],
      e: E,
      ee: E,
      eee: this.locales.day_names_abbreviated[E],
      eeee: this.locales.day_names[E],
      eeeee: this.locales.day_names_narrow[E],
      eeeeee: this.locales.day_names_short[E],
      c: E,
      cc: E,
      ccc: this.locales.day_names_abbreviated[E],
      cccc: this.locales.day_names[E],
      ccccc: this.locales.day_names_narrow[E],
      cccccc: this.locales.day_names_short[E],
      F: F,
      G: this.locales.era_names_abbreviated[era],
      GG: this.locales.era_names_abbreviated[era],
      GGG: this.locales.era_names_abbreviated[era],
      GGGG: this.locales.era_names[era],
      GGGGG: this.locales.era_names_narrow[era],
      Q: Q,
      QQ: zeroPad(Q),
      QQQ: this.locales.quarter_names_abbreviated[Q - 1],
      QQQQ: this.locales.quarter_names[Q - 1],
      QQQQQ: this.locales.quarter_names_narrow[Q - 1],
      q: Q,
      qq: zeroPad(Q),
      qqq: this.locales.quarter_names_abbreviated[Q - 1],
      qqqq: this.locales.quarter_names[Q - 1],
      qqqqq: this.locales.quarter_names_narrow[Q - 1],
      H: H,
      HH: zeroPad(H),
      h: H == 0 ? 12 : H > 12 ? H - 12 : H,
      hh: zeroPad(H == 0 ? 12 : H > 12 ? H - 12 : H),
      K: H > 11 ? H - 12 : H,
      k: H + 1,
      KK: zeroPad(H > 11 ? H - 12 : H),
      kk: zeroPad(H + 1),
      a: H > 11 ? this.locales.day_periods.pm : this.locales.day_periods.am,
      m: m,
      mm: zeroPad(m),
      s: s,
      ss: zeroPad(s),
      w: w,
      ww: zeroPad(w),
      W: W,
    }
    return format.replace(
      /('[^']+'|y{1,4}|L{1,5}|M{1,5}|c{1,6}|d{1,2}|D{1,3}|E{1,6}|e{1,6}|F{1,1}|G{1,5}|Q{1,5}|q{1,5}|H{1,2}|h{1,2}|K{1,2}|k{1,2}|m{1,2}|s{1,2}|w{1,2}|W{1,1}|A{1,6})/g,
      function(mask) {
        return mask.charAt(0) === "'"
          ? mask.substr(1, mask.length - 2)
          : values[mask] || mask
      }
    )
  } // end formatDate()

  /**
   *	createDateFromFormat( format_string, date_string )
   *
   *	This function takes a date string and a format string. It matches
   *	If the date string matches the format string, it returns the
   *	the date object. If it does not match, it returns null.
   */
  Datepicker.prototype.createDateFromFormat = function(format, value) {
    var extractInteger = function(str, pos, minlength, maxlength) {
      for (var x = maxlength; x >= minlength; x--) {
        var integer = str.substring(pos, pos + x)
        if (integer.length < minlength) {
          return null
        }
        if (/^\d+$/.test(integer)) {
          return integer
        }
      }
      return null
    }
    var skipName = function(names, pos) {
      for (var i = 0; i < names.length; i++) {
        var name = names[i]
        if (
          value.substring(pos, pos + name.length).toLowerCase() ==
          name.toLowerCase()
        ) {
          return name.length
        }
      }
      return 0
    }
    var pos = 0
    var now = new Date()
    var year = now.getYear()
    var month = now.getMonth() + 1
    var date = 1
    var hh = 0
    var mm = 0
    var ss = 0
    var ampm = ''
    var self = this

    $.each(format.match(/(.).*?\1*/g), function(k, token) {
      // Extract contents of value based on format token
      switch (token) {
        case 'yyyy':
          year = extractInteger(value, pos, 4, 4)
          if (year != null) {
            pos += year.length
          }
          break
        case 'yy':
          year = extractInteger(value, pos, 2, 2)
          if (year != null) {
            pos += year.length
          }
          break
        case 'y':
          year = extractInteger(value, pos, 2, 4)
          if (year != null) {
            pos += year.length
          }
          break
        case 'MMM':
        case 'LLL':
          month = 0
          for (
            var i = 0;
            i < self.locales.month_names_abbreviated.length;
            i++
          ) {
            var month_name = self.locales.month_names_abbreviated[i]
            if (
              value.substring(pos, pos + month_name.length).toLowerCase() ==
              month_name.toLowerCase()
            ) {
              month = i + 1
              pos += month_name.length
              break
            }
          }
          break
        case 'MMMM':
        case 'LLLL':
          month = 0
          for (var i = 0; i < self.locales.month_names.length; i++) {
            var month_name = self.locales.month_names[i]
            if (
              value.substring(pos, pos + month_name.length).toLowerCase() ==
              month_name.toLowerCase()
            ) {
              month = i + 1
              pos += month_name.length
              break
            }
          }
          break
        case 'EEE':
        case 'EE':
        case 'E':
        case 'eee':
          pos += skipName(self.locales.day_names_abbreviated, pos)
          break
        case 'EEEE':
        case 'eeee':
        case 'cccc':
          pos += skipName(self.locales.day_names, pos)
          break
        case 'EEEEEE':
        case 'eeeeee':
        case 'cccccc':
          pos += skipName(self.locales.day_names_short, pos)
          break
        case 'MM':
        case 'M':
        case 'LL':
        case 'L':
          month = extractInteger(value, pos, token.length, 2)
          if (month == null || month < 1 || month > 12) {
            return null
          }
          pos += month.length
          break
        case 'dd':
        case 'd':
          date = extractInteger(value, pos, token.length, 2)
          if (date == null || date < 1 || date > 31) {
            return null
          }
          pos += date.length
          break
        case 'hh':
        case 'h':
          hh = extractInteger(value, pos, token.length, 2)
          if (hh == null || hh < 1 || hh > 12) {
            return null
          }
          pos += hh.length
          break
        case 'HH':
        case 'H':
          hh = extractInteger(value, pos, token.length, 2)
          if (hh == null || hh < 0 || hh > 23) {
            return null
          }
          pos += hh.length
          break
        case 'KK':
        case 'K':
          hh = extractInteger(value, pos, token.length, 2)
          if (hh == null || hh < 0 || hh > 11) {
            return null
          }
          pos += hh.length
          break
        case 'kk':
        case 'k':
          hh = extractInteger(value, pos, token.length, 2)
          if (hh == null || hh < 1 || hh > 24) {
            return null
          }
          pos += hh.length
          hh--
          break
        case 'mm':
        case 'm':
          mm = extractInteger(value, pos, token.length, 2)
          if (mm == null || mm < 0 || mm > 59) {
            return null
          }
          pos += mm.length
          break
        case 'ss':
        case 's':
          ss = extractInteger(value, pos, token.length, 2)
          if (ss == null || ss < 0 || ss > 59) {
            return null
          }
          pos += ss.length
          break
        case 'a':
          var amlength = self.locales.day_periods.am.length
          var pmlength = self.locales.day_periods.pm.length
          if (
            value.substring(pos, pos + amlength) == self.locales.day_periods.am
          ) {
            ampm = 'AM'
            pos += amlength
          } else if (
            value.substring(pos, pos + pmlength) == self.locales.day_periods.pm
          ) {
            ampm = 'PM'
            pos += pmlength
          } else {
            return null
          }
          break
        default:
          if (value.substring(pos, pos + token.length) != token) {
            return null
          } else {
            pos += token.length
          }
      }
    })
    // If there are any trailing characters left in the value, it doesn't match
    if (pos != value.length) {
      return null
    }
    if (year == null) {
      return null
    }
    if (year.length == 2) {
      if (year > 50) {
        year = 1900 + (year - 0)
      } else {
        year = 2000 + (year - 0)
      }
    }
    // Is date valid for month?
    if (month < 1 || month > 12) {
      return null
    }
    if (month == 2) {
      // Check for leap year
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        // leap year
        if (date > 29) {
          return null
        }
      } else {
        if (date > 28) {
          return null
        }
      }
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (date > 30) {
        return null
      }
    }
    // Correct hours value
    if (hh < 12 && ampm == 'PM') {
      hh = hh - 0 + 12
    } else if (hh > 11 && ampm == 'AM') {
      hh -= 12
    }
    return new Date(year, month - 1, date, hh, mm, ss)
  } // end createDateFromFormat()

  /**
   *	parseDate() is a member function which parse a date string.
   *
   *	This function takes a date string and try to parse it with the input formats.
   *	If the date string matches one of the format string, it returns the
   *	the date object. Otherwise, it returns null.
   *
   *	@param (value string) the date string
   *	@return a date objet or null
   */
  Datepicker.prototype.parseDate = function(value) {
    var date = null
    var self = this
    $.each(this.options.inputFormat, function(i, format) {
      date = self.createDateFromFormat(format, value)
      if (date != null) {
        return false
      }
    })
    if (date == null) {
      // last try with the output format
      date = self.createDateFromFormat(this.options.outputFormat, value)
    }
    return date
  } // end parseDate()

  /**
   *	min() is a public member function which allow change the smallest selectable date.
   *
   *	@param (value string) the new date
   *	@return the smallest selectable date
   */
  Datepicker.prototype.min = function(value) {
    if (value != null) {
      this.options.min = value instanceof Date ? value : this.parseDate(value)
      if (this.options.min != null && this.dateObj < this.options.min) {
        this.$target.attr('aria-invalid', true)
        this.$target.parents('.form-group').addClass('has-error')
        this.dateObj = this.options.min
      }
      if (this.options.inline != false) {
        this.refresh()
      }
    }
    return this.options.min
  } // end min()

  /**
   *	max() is a public member function which allow change the biggest selectable date.
   *
   *	@param (value string) the new date
   *	@return the biggest selectable date
   */
  Datepicker.prototype.max = function(value) {
    if (value != null) {
      this.options.max = value instanceof Date ? value : this.parseDate(value)
      if (this.options.max != null && this.dateObj > this.options.max) {
        this.$target.attr('aria-invalid', true)
        this.$target.parents('.form-group').addClass('has-error')
        this.dateObj = this.options.max
      }
      if (this.options.inline != false) {
        this.refresh()
      }
    }
    return this.options.max
  } // end max()

  /**
   *	theme() is a public member function which allow change the datepicker theme.
   *
   *	@param (value string) the new theme
   *	@return the datepicker theme
   */
  Datepicker.prototype.theme = function(value) {
    if (value != null) {
      this.$button.removeClass(this.options.theme)
      this.$calendar.removeClass(this.options.theme)
      this.options.theme = value
      this.$button.addClass(this.options.theme)
      this.$calendar.addClass(this.options.theme)
    }
    return this.options.theme
  } // end theme()

  /**
   *	firstDayOfWeek() is a public member function which allow change the first Day Of Week.
   *
   *	@param (value integer) the new first Day Of Week
   *	@return the first Day Of Week
   */
  Datepicker.prototype.firstDayOfWeek = function(value) {
    if (value != null) {
      this.options.firstDayOfWeek = parseInt(value, 10)
      if (this.options.inline == false) {
        this.drawCalendarHeader()
      } else {
        this.refresh()
      }
    }
    return this.options.firstDayOfWeek
  } // end firstDayOfWeek()

  /**
   *	daysOfWeekDisabled() is a public member function which allow disabling of some weekdays.
   *
   *	@param (value string) the new disabled week days
   *	@return the disabled week days
   */
  Datepicker.prototype.daysOfWeekDisabled = function(value) {
    if (value != null) {
      this.options.daysOfWeekDisabled = []
      if (!$.isArray(value)) {
        value = [value]
      }
      var self = this
      $.each(value, function(i, val) {
        if (typeof val === 'number') {
          self.options.daysOfWeekDisabled.push(val)
        } else if (typeof val === 'string') {
          self.options.daysOfWeekDisabled.push(parseInt(val, 10))
        }
      })
    }
    return this.options.daysOfWeekDisabled
  } // end daysOfWeekDisabled()

  /**
   *	weekDayFormat() is a public member function which allow change the format of weekdays name.
   *
   *	@param (value string) the new format. Allowed : 'short' or 'narrow'
   *	@return the format of weekdays name
   */
  Datepicker.prototype.weekDayFormat = function(value) {
    if (value != null) {
      this.options.weekDayFormat = value
      this.drawCalendarHeader()
    }
    return this.options.weekDayFormat
  } // end weekDayFormat()

  /**
   *	inputFormat() is a public member function which allow change the input format.
   *
   *	@param (value string) the new format
   *	@return the input format
   */
  Datepicker.prototype.inputFormat = function(value) {
    if (value != null) {
      if (!$.isArray(value)) {
        value = [value]
      }
      if (this.$target.attr('placeholder') == this.options.inputFormat[0]) {
        this.$target.attr('placeholder', value[0])
      }
      this.options.inputFormat = value
    }
    return this.options.inputFormat
  } // end inputFormat()

  /**
   *	outputFormat() is a public member function which allow change the output format.
   *
   *	@param (value string) the new format
   *	@return the output format
   */
  Datepicker.prototype.outputFormat = function(value) {
    if (value != null) {
      this.options.outputFormat = value
    }
    return this.options.outputFormat
  } // end outputFormat()

  /**
   *	modal() is a public member function which allow to set or unset the modal mode.
   *
   *	@param (value boolean) the new modal mode
   *	@return the modal mode
   */
  Datepicker.prototype.modal = function(value) {
    if (value != null) {
      this.options.modal = value
      if (this.options.modal == true) {
        if (this.options.inline == false) {
          this.showObject(this.$calendar.find('.datepicker-close-wrap'))
          this.showObject(this.$calendar.find('.datepicker-bn-close-label'))
        }
        this.$close = this.$calendar.find('.datepicker-close')
        this.$close
          .html(this.options.closeButtonTitle)
          .attr('title', this.options.closeButtonLabel)
        this.$calendar
          .find('.datepicker-bn-close-label')
          .html(this.options.closeButtonLabel)
        var self = this
        this.$close.click(function(e) {
          return self.handleCloseClick(e)
        })
        this.$close.keydown(function(e) {
          return self.handleCloseKeyDown(e)
        })
      } else {
        this.hideObject(this.$calendar.find('.datepicker-close-wrap'))
        this.hideObject(this.$calendar.find('.datepicker-bn-close-label'))
      }
    }
    return this.options.modal
  } // end modal()

  /**
   *	inline() is a public member function which allow to set or unset the inline mode.
   *
   *	@param (value string or false) the id or jquery object of the datepicker container, false otherwise (not inline)
   *	@return the given value
   */
  Datepicker.prototype.inline = function(value) {
    if (value != null) {
      if (value != false) {
        this.hideObject(this.$button)
        this.hideObject(this.$calendar.find('.datepicker-close-wrap'))
        this.hideObject(this.$calendar.find('.datepicker-bn-close-label'))
        var $container = typeof value === 'string' ? $('#' + value) : value
        $container.append(this.$calendar)
        this.$calendar.css({ position: 'relative', left: '0px', top: '0px' })
        this.options.inline = value
        this.initializeDate()
        this.showObject(this.$calendar)
      } else {
        this.$target.parent().after(this.$calendar)
        this.showObject(this.$button)
        if (this.options.modal == true) {
          this.showObject(this.$calendar.find('.datepicker-close-wrap'))
          this.showObject(this.$calendar.find('.datepicker-bn-close-label'))
        }
        if (this.$calendar.parent().css('position') === 'static') {
          this.$calendar.parent().css('position', 'relative')
        }
        this.$calendar.css({ position: 'absolute' })
        this.options.inline = value
        this.hide()
      }
    }
    return this.options.inline
  } // end inline()

  /**
   *	format() is a public member function to format a date according the output format.
   *
   *	@param (value date object) the date
   *	@return formatted date string
   */
  Datepicker.prototype.format = function(date) {
    return this.formatDate(date, this.options.outputFormat)
  } // end format()

  /**
   *	enable() is a public member function to enable this datepicker.
   */
  Datepicker.prototype.enable = function() {
    this.$button.removeClass('disabled')
    this.$button.attr('aria-disabled', false)
    this.$button.attr('tabindex', 0)
  } // end enable()

  /**
   *	disable() is a public member function to disable this datepicker.
   */
  Datepicker.prototype.disable = function() {
    this.hide()
    this.$button.addClass('disabled')
    this.$button.attr('aria-disabled', true)
    this.$button.attr('tabindex', -1)
  } // end enable()

  /**
   *	datesDisabled() is a public member function to set dates to be disabled.
   */
  Datepicker.prototype.datesDisabled = function(dates) {
    this.options.datesDisabled = []
    if (!$.isArray(dates)) {
      dates = [dates]
    }
    var self = this
    $.each(dates, function(i, v) {
      if (typeof v === 'string') {
        var date = self.parseDate(v)
        if (date !== null) {
          self.options.datesDisabled.push(self.format(date))
        }
      } else if (v instanceof Date && !isNaN(v.valueOf())) {
        self.options.datesDisabled.push(self.format(v))
      }
    })
  } // end datesDisabled()

  /**
   *	startview() is a public member function to format a date according the output format.
   *
   *	@param (value int|string) the new view
   *	@return  N/A
   */
  Datepicker.prototype.startview = function(view) {
    switch (view) {
      case 1:
      case 'months':
        this.options.startView = 1
        break
      case 2:
      case 'years':
        this.options.startView = 2
        break
      default:
        this.options.startView = 0
    }
  } // end startview()

  /**
   *	setLocales() is a public member function which allow change the locales.
   *
   *	@param (value obj) the new locales
   *	@return N/A
   */
  Datepicker.prototype.setLocales = function(value) {
    this.locales = value
    this.options.inputFormat = [this.locales.short_format]
    this.options.outputFormat = this.locales.short_format
    ;(this.options.titleFormat = this.locales.full_format),
      (this.options.firstDayOfWeek = this.locales.firstday_of_week)
    this.options.buttonTitle = this.locales.texts.buttonTitle
    this.$button.find('span').attr('title', this.options.buttonTitle)
    this.options.buttonLabel = this.locales.texts.buttonLabel
    this.options.prevButtonLabel = this.locales.texts.prevButtonLabel
    this.options.prevMonthButtonLabel = this.locales.texts.prevMonthButtonLabel
    this.options.prevYearButtonLabel = this.locales.texts.prevYearButtonLabel
    this.options.nextButtonLabel = this.locales.texts.nextButtonLabel
    this.options.nextMonthButtonLabel = this.locales.texts.nextMonthButtonLabel
    this.options.nextYearButtonLabel = this.locales.texts.nextYearButtonLabel
    this.options.changeMonthButtonLabel = this.locales.texts.changeMonthButtonLabel
    this.options.changeYearButtonLabel = this.locales.texts.changeYearButtonLabel
    this.options.changeRangeButtonLabel = this.locales.texts.changeRangeButtonLabel
    this.options.closeButtonTitle = this.locales.texts.closeButtonTitle
    this.options.closeButtonLabel = this.locales.texts.closeButtonLabel
    this.options.calendarHelp = this.locales.texts.calendarHelp
    this.drawCalendarHeader()
    if (this.locales.directionality === 'RTL') {
      this.$grid.addClass('rtl')
    } else {
      this.$grid.removeClass('rtl')
    }
  } // end outputFormat()

  // DATEPICKER PLUGIN DEFINITION
  // ==========================

  var old = $.fn.datepicker

  $.fn.datepicker = function(option, value) {
    if (typeof option == 'string' && $(this).length == 1) {
      var data = $(this)
        .eq(0)
        .data('ab.datepicker')
      if (data) return data[option](value)
    } else {
      return this.each(function() {
        var $this = $(this)
        var data = $this.data('ab.datepicker')
        var options = $.extend(
          {},
          Datepicker.DEFAULTS,
          $this.data(),
          typeof option == 'object' && option
        )
        if (!data)
          $this.data('ab.datepicker', (data = new Datepicker(this, options)))
        if (typeof option == 'string') data[option](value)
      })
    }
  }

  $.fn.datepicker.Constructor = Datepicker

  // DATEPICKER NO CONFLICT
  // ====================

  $.fn.datepicker.noConflict = function() {
    $.fn.datepicker = old
    return this
  }
})
