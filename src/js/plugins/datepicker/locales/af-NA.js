(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Select date ...",
		        "buttonLabel": "Click or press the Enter key or the spacebar to open the calendar",
		        "prevButtonLabel": "Go to previous month",
		        "prevMonthButtonLabel": "Go to the previous year",
		        "prevYearButtonLabel": "Go to the previous twenty years",
		        "nextButtonLabel": "Go to next month",
		        "nextMonthButtonLabel": "Go to the next year",
		        "nextYearButtonLabel": "Go to the next twenty years",
		        "changeMonthButtonLabel": "Click or press the Enter key or the spacebar to change the month",
		        "changeYearButtonLabel": "Click or press the Enter key or the spacebar to change the year",
		        "changeRangeButtonLabel": "Click or press the Enter key or the spacebar to go to the next twenty years",
		        "closeButtonTitle": "Close",
		        "closeButtonLabel": "Close the calendar",
		        "calendarHelp": "- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the end of the month is reached, continues into the next or previous month as appropriate.\r\n- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in the grid of days.\r\n- Control+Page Up - Moves to the same date in the previous year.\r\n- Control+Page Down - Moves to the same date in the next year.\r\n- Home - Moves to the first day of the current month.\r\n- End - Moves to the last day of the current month.\r\n- Page Up - Moves to the same date in the previous month.\r\n- Page Down - Moves to the same date in the next month.\r\n- Enter or Espace - closes the calendar, and the selected date is shown in the associated text box.\r\n- Escape - closes the calendar without any action."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "Januarie",
		        "Februarie",
		        "Maart",
		        "April",
		        "Mei",
		        "Junie",
		        "Julie",
		        "Augustus",
		        "September",
		        "Oktober",
		        "November",
		        "Desember"
		    ],
		    "month_names_abbreviated": [
		        "Jan.",
		        "Feb.",
		        "Mrt.",
		        "Apr",
		        "Mei",
		        "Jun",
		        "Jul",
		        "Aug",
		        "Sep",
		        "Okt",
		        "Nov",
		        "Des"
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "Sondag",
		        "Maandag",
		        "Dinsdag",
		        "Woensdag",
		        "Donderdag",
		        "Vrydag",
		        "Saterdag"
		    ],
		    "day_names_abbreviated": [
		        "So",
		        "Ma",
		        "Di",
		        "Wo",
		        "Do",
		        "Vr",
		        "Sa"
		    ],
		    "day_names_short": [
		        "So.",
		        "Ma.",
		        "Di.",
		        "Wo.",
		        "Do.",
		        "Vr.",
		        "Sa."
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "D",
		        "W",
		        "D",
		        "V",
		        "S"
		    ],
		    "day_periods": {
		        "am": "vm.",
		        "noon": "middag",
		        "pm": "nm."
		    },
		    "day_periods_abbreviated": {
		        "am": "vm.",
		        "noon": "middag",
		        "pm": "nm."
		    },
		    "day_periods_narrow": {
		        "am": "v",
		        "noon": "m",
		        "pm": "n"
		    },
		    "quarter_names": [
		        "1ste kwartaal",
		        "2de kwartaal",
		        "3de kwartaal",
		        "4de kwartaal"
		    ],
		    "quarter_names_abbreviated": [
		        "K1",
		        "K2",
		        "K3",
		        "K4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "voor Christus",
		        "na Christus"
		    ],
		    "era_names_abbreviated": [
		        "v.C.",
		        "n.C."
		    ],
		    "era_names_narrow": [
		        "v.C.",
		        "n.C."
		    ],
		    "full_format": "EEEE, dd MMMM y",
		    "long_format": "dd MMMM y",
		    "medium_format": "dd MMM y",
		    "short_format": "y-MM-dd",
		    "firstday_of_week": 6
		};
	}
})();